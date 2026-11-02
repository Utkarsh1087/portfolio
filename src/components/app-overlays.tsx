"use client";

import Particles from "@/components/Particles";
import RemoteCursors from "@/components/realtime/remote-cursors";
import ElasticCursor from "@/components/ui/ElasticCursor";
import RadialMenu from "@/components/radial-menu/index";
import AIChatPanel from "@/components/ai-chat/ai-chat-panel";
import AIChatFAB from "@/components/ai-chat/ai-chat-fab";

export default function AppOverlays() {
  return (
    <>
      <Particles
        className="fixed inset-0 -z-10 animate-fade-in pointer-events-none"
        quantity={30}
      />
      <RemoteCursors />
      <ElasticCursor />
      <RadialMenu />
      <AIChatFAB />
      <AIChatPanel />
    </>
  );
}
