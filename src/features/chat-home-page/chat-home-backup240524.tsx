import { AddExtension } from "@/features/extensions-page/add-extension/add-new-extension";
import { ExtensionCard } from "@/features/extensions-page/extension-card/extension-card";
import { ExtensionModel } from "@/features/extensions-page/extension-services/models";
import { PersonaCard } from "@/features/persona-page/persona-card/persona-card";
import { PersonaModel } from "@/features/persona-page/persona-services/models";
import { AI_DESCRIPTION, AI_NAME } from "@/features/theme/theme-config";
import { Hero } from "@/features/ui/hero";
import { ScrollArea } from "@/features/ui/scroll-area";
import Image from "next/image";
import { FC } from "react";

interface ChatPersonaProps {
  personas: PersonaModel[];
  extensions: ExtensionModel[];
}

export const ChatHome: FC<ChatPersonaProps> = (props) => {
  return (
    <ScrollArea className="flex-1">
      <main className="flex flex-1 flex-col gap-6 pb-6">
      <Hero
  title={
    <div className="flex flex-col items-center"> {/* Flex container with column direction */}      
        <Image
          src={"/banner-xm.png"} // Change the image path         
          quality={100}
          alt="ai-icon"
        />      
    </div>
  }
  //To remove the description, pass an empty string, element is required so cannot be removed entirely
  description="" // {AI_DESCRIPTION} Pass AI_DESCRIPTION as a string
></Hero>
        <div className="container max-w-5xl flex gap-8 flex-col">
          <div>
            <h2 className="text-2xl font-bold mb-3">Extensions</h2>

            {props.extensions && props.extensions.length > 0 ? (
              <div className="grid grid-cols-4 gap-3">
                {props.extensions.map((extension) => {
                  return (
                    <ExtensionCard
                      extension={extension}
                      key={extension.id}
                      showContextMenu={false}
                    />
                  );
                })}
              </div>
            ) :
              <p className="text-muted-foreground max-w-xl">No extentions created</p>
            }

          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Personas</h2>

            {props.personas && props.personas.length > 0 ? (
              <div className="grid grid-cols-4 gap-3">
                {props.personas.map((persona) => {
                  return (
                    <PersonaCard
                      persona={persona}
                      key={persona.id}
                      showContextMenu={false}
                    />
                  );
                })}
              </div>
            ) :
              <p className="text-muted-foreground max-w-xl">No personas created</p>
            }
          </div>
        </div>
        <AddExtension />
      </main>
    </ScrollArea>
  );
};
