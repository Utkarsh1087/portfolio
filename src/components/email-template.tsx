import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{
    fontFamily: 'Inter, -apple-system, sans-serif',
    backgroundColor: '#0a0a0a',
    padding: '60px 20px',
    color: '#ffffff'
  }}>
    <div style={{
      maxWidth: '560px',
      margin: '0 auto',
      backgroundColor: '#111111',
      borderRadius: '24px',
      overflow: 'hidden',
      border: '1px solid #222222',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
    }}>
      {/* Header with gradient line */}
      <div style={{ 
        padding: '40px 40px 20px 40px',
        textAlign: 'left'
      }}>
        <div style={{ 
          height: '4px', 
          width: '40px', 
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', 
          borderRadius: '2px',
          marginBottom: '20px'
        }} />
        <h1 style={{ 
          margin: 0, 
          fontSize: '32px', 
          fontWeight: '800', 
          letterSpacing: '-0.02em',
          color: '#ffffff' 
        }}>
          New message from {fullName.split(' ')[0]}
        </h1>
      </div>

      <div style={{ padding: '0 40px 40px 40px' }}>
        {/* Info Grid */}
        <div style={{ 
          backgroundColor: '#1a1a1a', 
          padding: '24px', 
          borderRadius: '16px',
          border: '1px solid #282828',
          marginBottom: '32px'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tr>
              <td style={{ paddingBottom: '12px', fontSize: '12px', textTransform: 'uppercase', color: '#666', fontWeight: 'bold', letterSpacing: '0.05em' }}>Full Name</td>
              <td style={{ paddingBottom: '12px', fontSize: '12px', textTransform: 'uppercase', color: '#666', fontWeight: 'bold', letterSpacing: '0.05em' }}>Email Address</td>
            </tr>
            <tr>
              <td style={{ fontSize: '16px', color: '#fff', fontWeight: '500' }}>{fullName}</td>
              <td style={{ fontSize: '16px', color: '#3b82f6', fontWeight: '500' }}>{email}</td>
            </tr>
          </table>
        </div>

        {/* Message Content */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ margin: '0 0 12px 0', fontSize: '12px', textTransform: 'uppercase', color: '#666', fontWeight: 'bold', letterSpacing: '0.05em' }}>Message Body</p>
          <div style={{ 
            fontSize: '18px', 
            lineHeight: '1.7', 
            color: '#d4d4d4',
            whiteSpace: 'pre-wrap'
          }}>
            &ldquo;{message}&rdquo;
          </div>
        </div>

        {/* Action Button */}
        <a href={`mailto:${email}`} style={{
          display: 'inline-block',
          backgroundColor: '#ffffff',
          color: '#000000',
          padding: '16px 32px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '14px',
          textAlign: 'center'
        }}>
          Reply to {fullName.split(' ')[0]}
        </a>
      </div>

      {/* Footer */}
      <div style={{ 
        padding: '20px 40px', 
        backgroundColor: '#0a0a0a', 
        borderTop: '1px solid #222222',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '11px', color: '#444', margin: 0 }}>
          Sent via Personal Portfolio Engine • UTC {new Date().toISOString().split('T')[1].split('.')[0]}
        </p>
      </div>
    </div>
  </div>
);
