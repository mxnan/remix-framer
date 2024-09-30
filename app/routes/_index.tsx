import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto h-screen items-center justify-center">
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        error amet suscipit! Repellendus a, nostrum fugiat, dolorum autem
        provident eius soluta molestiae exercitationem itaque ratione totam sed!
        Itaque adipisci ipsa laborum maiores, voluptatem quidem incidunt
        perferendis libero suscipit nisi numquam iste quisquam nemo dolor enim
        aliquid tempore modi soluta omnis.
      </div>
    </div>
  );
}
