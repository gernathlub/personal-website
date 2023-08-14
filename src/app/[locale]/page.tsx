import ContentContainer from "@/components/ContentContainer";
import Delimiter from "@/components/Delimiter";

export default function Home() {
  return (
    <div className="w-full">
      <ContentContainer>
        <div className="h-60 mt-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio
          quod quidem dicta culpa enim vitae, quasi necessitatibus dolores dolor
          molestias cumque rem repellendus inventore voluptatum consequuntur.
          Amet, quam quia.
        </div>
      </ContentContainer>
      <Delimiter type={1}></Delimiter>
      <ContentContainer>
        <div className="w-full h-96 bg-grad-svg bg-cover"></div>
        <div className="w-full h-60">Skillset</div>
      </ContentContainer>
      <Delimiter type={2}></Delimiter>
      <div className="bg-secondary">
        <ContentContainer>
          <div className="w-full h-80"></div>
          <div className="w-full h-60">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            qui perspiciatis cumque saepe illo odit nobis. Ipsa saepe, similique
            rem, illum totam aliquid, velit pariatur repellat voluptatibus
            nesciunt ipsam doloremque.
          </div>
        </ContentContainer>
      </div>
      <Delimiter type={3}></Delimiter>

      <ContentContainer>
        <div className="w-full h-60 mt-60">Something here as well</div>
      </ContentContainer>
    </div>
  );
}
