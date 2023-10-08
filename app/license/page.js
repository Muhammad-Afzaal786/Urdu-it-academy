import { Fragment } from "react";
import Breadcrumb from "@/ui/Breadcrumb";

export const metadata = {
  title: "License Agreement - Urdu It Academy",
};

export default function License() {
  return (
    <Fragment>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "License agreement", href: "/license" },
        ]}
      />
      <section className="lg:pt-[50px] pt-6">
        <div className="flex flex-col space-y-4 md:space-y-8">
          <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
            License agreement
          </h2>
          <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            finibus nisi non orci tincidunt, in lobortis sem mollis. In sapien
            nisi, efficitur vel consequat in, consectetur id turpis. Mauris
            iaculis ullamcorper tempor. Integer sapien turpis, iaculis eget
            purus a, vulputate ullamcorper tellus. Mauris efficitur porta quam.
            Nunc mauris ex, interdum eu aliquam eget, pharetra non odio. Proin
            tincidunt, justo vel imperdiet tincidunt, tellus sem varius nibh, a
            blandit eros libero eget felis. Aliquam et condimentum nisl. Fusce
            dolor lorem, fringilla sit amet feugiat eget, finibus feugiat odio.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Vestibulum eget magna nec ligula cursus
            eleifend nec vel odio. Aenean commodo risus risus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Cras pellentesque felis non
            justo maximus congue. Aenean dapibus risus lobortis, venenatis nisl
            a, consectetur arcu.
            <br />
            <br />
            Proin ullamcorper lectus eget luctus efficitur. Praesent odio elit,
            pharetra ultrices magna eget, sodales ultrices est. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Proin sed mi accumsan, convallis libero id, gravida ante.
            Aliquam pretium lectus quis neque dapibus fringilla nec id nisl.
            Pellentesque egestas blandit odio et laoreet. Donec semper vulputate
            nulla nec cursus. Suspendisse cursus mauris sit amet leo egestas
            feugiat. Nunc posuere rhoncus dui ac ornare. Suspendisse commodo
            erat ipsum, sed tincidunt felis euismod nec.
            <br />
            <br />
            Praesent quis leo sem. Ut in interdum enim. Pellentesque mollis arcu
            eget purus aliquet, eu gravida felis tempus. Aliquam ac nunc
            dapibus, tincidunt purus vitae, rhoncus risus. Sed tincidunt nunc
            viverra porttitor pellentesque. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Cras ex elit, dictum vitae malesuada at,
            ultrices ut dolor. Curabitur sodales lectus tortor, scelerisque
            porttitor lectus dictum eu. Suspendisse malesuada magna est,
            efficitur sagittis ligula varius vestibulum. Ut pretium a sem id
            faucibus. Nunc sit amet libero sed leo aliquet consectetur at ut
            justo. Donec hendrerit tellus ut commodo imperdiet.
          </p>
          <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            finibus nisi non orci tincidunt, in lobortis sem mollis. In sapien
            nisi, efficitur vel consequat in, consectetur id turpis. Mauris
            iaculis ullamcorper tempor. Integer sapien turpis, iaculis eget
            purus a, vulputate ullamcorper tellus. Mauris efficitur porta quam.
            Nunc mauris ex, interdum eu aliquam eget, pharetra non odio. Proin
            tincidunt, justo vel imperdiet tincidunt, tellus sem varius nibh, a
            blandit eros libero eget felis. Aliquam et condimentum nisl. Fusce
            dolor lorem, fringilla sit amet feugiat eget, finibus feugiat odio.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Vestibulum eget magna nec ligula cursus
            eleifend nec vel odio. Aenean commodo risus risus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Cras pellentesque felis non
            justo maximus congue. Aenean dapibus risus lobortis, venenatis nisl
            a, consectetur arcu.
            <br />
            <br />
            Proin ullamcorper lectus eget luctus efficitur. Praesent odio elit,
            pharetra ultrices magna eget, sodales ultrices est. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Proin sed mi accumsan, convallis libero id, gravida ante.
            Aliquam pretium lectus quis neque dapibus fringilla nec id nisl.
            Pellentesque egestas blandit odio et laoreet. Donec semper vulputate
            nulla nec cursus. Suspendisse cursus mauris sit amet leo egestas
            feugiat. Nunc posuere rhoncus dui ac ornare. Suspendisse commodo
            erat ipsum, sed tincidunt felis euismod nec.
            <br />
            <br />
            Praesent quis leo sem. Ut in interdum enim. Pellentesque mollis arcu
            eget purus aliquet, eu gravida felis tempus. Aliquam ac nunc
            dapibus, tincidunt purus vitae, rhoncus risus. Sed tincidunt nunc
            viverra porttitor pellentesque. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Cras ex elit, dictum vitae malesuada at,
            ultrices ut dolor. Curabitur sodales lectus tortor, scelerisque
            porttitor lectus dictum eu. Suspendisse malesuada magna est,
            efficitur sagittis ligula varius vestibulum. Ut pretium a sem id
            faucibus. Nunc sit amet libero sed leo aliquet consectetur at ut
            justo. Donec hendrerit tellus ut commodo imperdiet.
          </p>
        </div>
      </section>
    </Fragment>
  );
}
