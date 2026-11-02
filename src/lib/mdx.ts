import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  author?: string;
  tags?: string[];
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { data, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata: data as Metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "src/content/blogs"));
}

export function getBlogPost(slug: string) {
  // Reject empty or invalid slugs (prevent path traversal like ../ or encoded characters)
  if (!slug || !/^[a-zA-Z0-9_-]+$/.test(slug)) {
    return null;
  }

  const blogsDir = path.join(process.cwd(), "src/content/blogs");
  const filePath = path.join(blogsDir, `${slug}.mdx`);

  // Ensure resolved path stays strictly within the blogs content directory
  const resolvedPath = path.resolve(filePath);
  if (!resolvedPath.startsWith(path.resolve(blogsDir))) {
    return null;
  }

  if (!fs.existsSync(resolvedPath)) {
    return null;
  }

  try {
    const { data, content } = readMDXFile(resolvedPath);
    return {
      metadata: data as Metadata,
      content,
    };
  } catch (error) {
    console.error(`Error reading MDX post: ${slug}`, error);
    return null;
  }
}
