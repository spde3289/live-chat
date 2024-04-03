import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./style/globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Live chat",
  description: "자유롭게 라이브 채팅을 이용해 보세요",
};

export default function RootLayout(props: any) {
  return (
    <html lang="ko">
      <body className={`${roboto.className} bg-gray-50 h-full`}>
        <header className="flex w-full h-20 bg-white items-center">
          <h1 className="p-5 font-bold text-blue text-3xl">Live Chat</h1>
        </header>
        <div className="h-2 bg-gradient-to-b from-gray-300"></div>
        <section>
          {props.children}
        </section>
      </body>
    </html>
  );
}
