import { blogCategories, blogPosts, blogTags } from "@/lib/data";
import { formatDate } from "@/lib/utilFunctons";
import { URLParams } from "@/types";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: URLParams): Promise<Metadata> {
  const blogTitle = blogPosts
    .filter((item) => item.id === +params.id)
    .map((filteredItem) => filteredItem.title);

  return {
    title: `${blogTitle} - Lawyero`,
  };
}

const Page = ({ params }: URLParams) => {
  return (
    <>
      <div className="relative py-[90px]">
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="basis-full pr-0 lg:basis-[70%] lg:pr-8">
              <div className="relative mb-0 pb-0 before:absolute before:bottom-0 before:left-0 lg:mb-12 lg:pb-12">
                {blogPosts
                  .filter((item) => item.id === +params.id)
                  .map((filteredItem) => (
                    <div key={filteredItem.id}>
                      <Image
                        src={filteredItem.featuredImage.node.mediaItem}
                        alt="Home BLog Post"
                        className="max-h-[400px] rounded-sm"
                      />
                      <div className=" bg-white">
                        <h2 className="my-6 text-[25px] font-bold capitalize leading-9 text-background sm:text-[32px]">
                          {filteredItem.title}
                        </h2>
                        <ul className="flex flex-wrap pb-6 sm:flex-nowrap">
                          <li className="mb-4 mr-5 flex basis-full items-center sm:mb-0 sm:basis-auto">
                            <span className="pl-2 text-base text-[#313131]">
                              {formatDate(filteredItem.date)}
                            </span>
                          </li>
                          <li className="mb-4 mr-5  flex basis-full items-center sm:mb-0 sm:basis-auto">
                            <Link
                              className="pl-2 text-base text-[#313131] hover:text-primary-main"
                              href="#"
                            >
                              {filteredItem.author}
                            </Link>
                          </li>
                        </ul>
                        <ul className="flex flex-wrap pb-5 md:flex-nowrap">
                          {blogCategories.map((item, index) => (
                            <li key={item.id}>
                              <Link
                                href={`/blog/category/${item.id}`}
                                className="pr-1 text-base text-primary-main"
                              >
                                {item.title}
                              </Link>
                              {blogCategories.length - 1 !== index && (
                                <span className="pr-1">|</span>
                              )}
                            </li>
                          ))}
                        </ul>
                        <h3 className="mb-3 pr-0 text-[25px] font-bold text-[#333] sm:text-[32px] lg:pr-12">
                          İşçi ile işveren arasındaki davalar:
                        </h3>
                        <p className="mb-4 text-base leading-[1.62] text-[#333]">
                          <p>
                            1- İşçilik Alacakları Davaları (Ücret, Kıdem, İhbar,
                            Fazla Mesai, Haftalık Tatil, Yıllık İzin vs.)
                          </p>
                          <p>2- İşe İade Davası</p>
                          <p>
                            3- İş Kazası ve Meslek Hastalığı Nedeniyle Bedensel
                            Zararlara İlişkin Maddi-Manevi Tazminat
                          </p>
                          <p>
                            4- İş Kazası ve Meslek Hastalığından Kaynaklanan
                            Ölüm Nedeniyle Destekten Yoksun Kalma Tazminatı
                            (Ölenin maddi destek verdiği kişiler açabilir)
                          </p>
                        </p>
                        <p className="mb-4 text-base leading-[1.62] text-[#333]">
                          Arayan kişiden ilk almamız gereken bilgi halihazırda
                          hangi durumda oldukları yani çalışmaya devam edip
                          etmedikleri, iş kazası varsa ne durumda olduğu, işten
                          çıkarıldıysa ne zaman ne sebeple çıkarıldığı; ikinci
                          olarak ismini bilmeseler bile yukarıdaki davalardan
                          hangisini açmak istedikleri yani işe geri dönmek mi
                          istiyor yoksa henüz istifa etmemiş de istifa edip
                          tazminatlarını mı almak istiyor vb.
                        </p>
                        <h3 className="mb-3 pr-0 text-[25px] font-bold text-[#333] sm:text-[32px] lg:pr-12">
                          Bu iki bilgiyi aldıktan sonra ek bilgi olarak
                        </h3>
                        <p className="mb-4 text-base leading-[1.62] text-[#333]">
                          <p>- kaç yıldır çalıştığı,</p>
                          <p>
                            - mesleğinin ve iş yerindeki görevinin ne olduğu,
                          </p>
                          <p>- nerede çalıştığı,</p>
                          öğrenilebilir. Bu bilgileri aldıktan sonra avukatın
                          kendisini arayacağı söylenebilir. Ama lazım olursa
                          diye çok sorulan kısa hap bilgiler yazıyorum:{" "}
                          <p>
                            ● İşçi sözleşmeyi kendi feshetmeyi düşünüyorsa ihbar
                            tazminatı alamaz. İhbar işten çıkartılana verilir.
                          </p>{" "}
                          <p>
                            ● Fesih nedenleri genel olarak geçerli fesih
                            nedenleri ve haklı fesih nedenleri olarak ikiye
                            ayrılır. İşçinin sözleşmesi haklı nedenle
                            feshedildiğinde iş akti bekleme süresi olmaksızın
                            derhal sona erer ve tazminat hakkı doğmaz. Geçerli
                            nedenle feshi, işçinin yeterliliği, işçinin
                            davranışları ya da işletmenin, işyerinin veya işin
                            gereklerinden kaynaklanan sebeplerle iş akdinin sona
                            erdirilmesidir. Geçerli nedenle fesihte işçinin
                            kıdem tazminatı dahil pek çok alacak hakkı bulunur.
                          </p>
                          <p>
                            ● İş sözleşmeler belirli süreli ve belirsiz süreli
                            olarak ikiye ayrılır. Eğer belirli süreli sözleşme
                            varsa süre sonra erdiğinde kıdem ve ihbar tazminatı
                            ödenmez.
                          </p>
                          <p>
                            ● İş davası öncesi arabulucuya başvurmak zorunludur.
                            Avukata vekalet verilmesi halinde süreci hızlıca
                            halledebilir.
                          </p>
                          <p>
                            ● Arabulucuda hızlı anlaşma ve ücretin bir kısmını
                            tahsil imkanı olduğu için tercih edilebilir. Dava
                            açıldığında 1,5-2 yıl kadar süreç uzamış olur.
                          </p>
                          <p>
                            ● İş davası işyerinin bulunduğu yerleşim yerindeki
                            iş mahkemesinde açılmalıdır. İş kazası varsa zararın
                            meydana geldiği yer veya işçinin yerleşim yeri
                            mahkemesi de seçilebilir.
                          </p>
                          <p>
                            ● İş davası işyerinin bulunduğu yerleşim yerindeki
                            iş mahkemesinde açılmalıdır. İş kazası varsa zararın
                            meydana geldiği yer veya işçinin yerleşim yeri
                            mahkemesi de seçilebilir.
                          </p>
                          <p>
                            ● Haftalık 45 saatin üzerindeki çalışmalar fazla
                            mesai olarak adlandırılır ve normal saatlik ücretin
                            yüzde elli artırılarak ödenmesi gerekir.
                          </p>
                          <p>
                            ● Kıdem tazminatına ancak bir yılını doldurmuş işçi
                            hak kazanır.
                          </p>
                          <p>
                            ● İhbar süresi işçinin kaç yıldır çalıştığına göre
                            değişmektedir. Örneğin 1,5 yıldan az kıdemli işçi
                            için dört hafta, 3 yıldan fazla kıdemi olan işçi
                            için 8 haftadır. Bu sürelerde işçinin bildirimi
                            yaptıktan sonra çalışmaya devam etmesi gerekir. Aksi
                            halde ihbar tazminatı öder. Ancak fesih haklı nedene
                            dayanıyorsa süre beklenmez ve tazminat ödeme
                            zorunluluğu doğmaz.
                          </p>
                          <p>
                            ● İş akdi işçi tarafından feshedilmişse kötü niyet
                            tazminatı talep edilemez.
                          </p>
                          <p>
                            {" "}
                            ● İşe iade davası kabul edilirse işçiye 4 aya kadar
                            ücreti tutarında tazminat kazanır. İşveren işçiyi
                            başlatmaz ise 4-8 maaş arası işe başlatmama
                            tazminatı daha doğar.
                          </p>
                        </p>
                        <div>
                          <h3 className="mb-4 text-2xl font-bold text-[#333]">
                            Etiketler:
                          </h3>
                          <ul className="flex">
                            {blogTags.map((item, index) => (
                              <li key={item.id}>
                                <Link
                                  href={`/blog/tag/${item.id}`}
                                  className={`relative mr-3 inline-block pr-3 text-base font-semibold leading-[1.62] hover:text-primary-main hover:underline ${
                                    blogTags.length - 1 !== index &&
                                    'before:absolute before:right-[-2.5px] before:top-[11px] before:size-[5px] before:rounded-full before:bg-primary-main before:content-[""]'
                                  }`}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
