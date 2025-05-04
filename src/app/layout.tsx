import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import ChatBox from './components/chatbox';
import WhatsAppButton from './components/whatsappbutton';
import styles from './donation/style.module.css';

export const metadata: Metadata = {
  title: 'Dog Adoption Platform',
  description: 'Find your perfect furry friend and give them a forever home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.globalStyles}>
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
