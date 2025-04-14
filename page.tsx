
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-6 max-w-5xl mx-auto space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="바른누수탐지 로고" width={200} height={200} />
        </div>
        <h1 className="text-4xl font-bold">바른누수탐지</h1>
        <p className="text-lg text-gray-600">
          믿을 수 있는 누수탐지 서비스, 바른누수탐지가 함께합니다.
        </p>
        <p className="text-sm text-blue-600">도메인: www.baronusu.com</p>
        <Button className="mt-4">상담 예약하기</Button>
      </section>

      {/* 소개 섹션 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">바른누수탐지는?</h2>
          <p>
            저희는 최신 장비와 풍부한 경험으로 정확하고 빠른 누수탐지 서비스를 제공합니다. 아파트, 주택, 상가 등 어떤 현장이든 신속하게 문제를 해결해드립니다.
          </p>
        </div>
        <Image
          src="/logo.png"
          alt="탐지 캐릭터"
          width={300}
          height={300}
          className="mx-auto"
        />
      </section>

      {/* 서비스 섹션 */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">주요 서비스</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">욕실/주방 누수</h3>
              <p>물이 새는 원인을 정확하게 진단하고 빠르게 조치합니다.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">벽/천장 누수</h3>
              <p>보이지 않는 곳까지 꼼꼼하게 탐지해 근본적인 해결을 제공합니다.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">배관 누수</h3>
              <p>전문 장비로 배관 내부 문제를 파악하고 정확하게 시공합니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">고객 후기</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <p>💬 "정확하게 원인을 찾아주셔서 너무 감사했어요! 다음에도 꼭 이용할게요."</p>
              <p className="text-right text-sm text-gray-500">- 김*진 고객님</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p>💬 "벽 누수 때문에 고생했는데, 빠르게 처리해주셔서 진짜 감동입니다."</p>
              <p className="text-right text-sm text-gray-500">- 이*영 고객님</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 연락 섹션 */}
      <section className="text-center space-y-3">
        <h2 className="text-2xl font-semibold">문의 및 예약</h2>
        <p>빠른 상담과 예약은 아래 번호로 연락주세요.</p>
        <p className="text-xl font-bold">📞 010-8937-2616 / 010-6682-3727</p>
        <Button>카카오톡 상담하기</Button>
      </section>
    </main>
  );
}
