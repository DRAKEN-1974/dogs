import React from 'react';
import Top from './components/Top';
import Middle from './components/Middle';
import Third from './components/Third';
import Last from './components/last';
import Footer from './components/footer';
import Values from './components/Values';
import YouTube from './components/youtube';
import ChatBox from './components/chatbox'

const Page = () => {
  return (
    <div>
      <Top />
      <Middle />
      <Third />
      <Last />
      <Values />
      <YouTube />
      <Footer />
      
<ChatBox />
    </div>
  );
};

export default Page;