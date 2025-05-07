import React from 'react';
import Top from './components/Top';
import Middle from './components/Middle';
import Third from './components/Third';
import Last from './components/last';
import Footer from './components/footer';
import Values from './components/Values';
import YouTube from './components/youtube';
import ChatBox from './components/chatbox';
import Security from './components/Security';

const Page = () => {
  return (
    <div>
      <Top />
      <Middle />
      <Third />
      <Security />
       <Last />
      <Values />
      <YouTube />
      <Footer />
      
<ChatBox />
    </div>
  );
};

export default Page;
