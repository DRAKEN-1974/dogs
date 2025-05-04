'use client';

import Navbar from './components/Navbar';
import ChatBox from './components/chatbox';
import WhatsAppButton from './components/whatsappbutton';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <ChatBox />
        <WhatsAppButton 
          phoneNumber="+919876543210"
          message="Hi! I want to know more about your services."
        />
        
      </body>
    </html>
  );
}
