"use client"

import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import { ScrollArea } from "@/components/ui/scroll-area";

const CustomThemeEditor = () => {
    const [code, setCode] = useState(
        `<div className='w-full h-[100vh] border shadow-sm rounded-xl bg-background relative overflow-hidden'>
        <div className='sticky top-0 w-full h-12 border-b'>

        </div>

        <div className='p-4 bg-foreground/[0.02] w-full h-full'>
        <CodeEditor
            value={code}
            language="html"
            placeholder="Please enter JS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
                fontSize:20,
                backgroundColor: "#0E0E10",
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
        />
        </div>
    </div>`
    );
  return (
    <div className='w-full h-[100vh] border shadow-sm rounded-xl bg-background relative overflow-hidden'>
        <div className='sticky top-0 w-full h-12 border-b'>

        </div>

            <ScrollArea className="w-full h-full p-4 bg-foreground/[0.02] ">
                {/* <CodeEditor
                value={code}
                language="html"
                placeholder="Please enter html"
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                    fontSize:20,
                    backgroundColor: "#0E0E10",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
                /> */}
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore suscipit commodi corporis vel, quidem reprehenderit. Excepturi eveniet dolorum, doloribus autem commodi nemo repudiandae alias provident mollitia repellat doloremque aperiam a esse aut exercitationem repellendus odio porro assumenda, dignissimos reprehenderit sint vel. Numquam ullam, facilis illo libero alias modi. Modi iste necessitatibus quis ullam, consectetur, recusandae tenetur blanditiis sequi, laborum quae voluptate. Ad harum, eius maxime ex blanditiis nulla repellendus quidem perspiciatis sapiente iste laborum quibusdam molestiae quisquam accusantium officia magni eos. Blanditiis, corrupti temporibus culpa, officiis iusto deleniti et voluptatem odio quas accusantium ad labore voluptatum libero dolor, obcaecati quod rerum saepe nesciunt. Error sapiente earum fugiat quae incidunt fugit maxime voluptate tempore enim quas nisi accusantium temporibus, corrupti ex explicabo a ullam iusto nobis fuga officia nam omnis? Laborum error asperiores ab tempora animi est! Assumenda accusamus minima modi veniam magnam ex maxime nisi harum, dolore, nemo eum aliquam dolores quis. Sed, doloremque officia autem laboriosam quis, aperiam unde id ex dicta voluptates error aliquid sit consectetur molestiae atque maiores. Molestias commodi placeat quidem maiores est laboriosam, ea neque quisquam alias rem assumenda dolores necessitatibus magni numquam consectetur delectus et quibusdam eaque labore debitis culpa modi reiciendis quis. Explicabo mollitia voluptatem, itaque ab veritatis asperiores, hic aliquam, enim debitis accusamus libero alias iusto eos? Molestiae impedit quia, temporibus repellat natus eum, quos dicta quae, similique accusantium sunt iste voluptates pariatur obcaecati voluptas cupiditate laborum animi placeat porro nam. Aliquid aperiam veritatis voluptate, labore voluptates odit, maxime nesciunt a velit repudiandae nostrum ad praesentium consequuntur, quaerat et aliquam natus. Recusandae vitae odit dicta aperiam voluptate veniam fugiat iusto, atque commodi incidunt pariatur distinctio, debitis voluptatibus perspiciatis, eaque nemo expedita blanditiis. Assumenda illo tempora rem minus minima iure enim vero quaerat quod sed rerum corporis odit, deleniti placeat sit quia dolor, animi labore vitae corrupti eaque dolorem? Ullam aperiam corporis consequatur eligendi perspiciatis repudiandae, consequuntur laboriosam tempore hic obcaecati dolor ipsum a repellendus? Deleniti natus nesciunt fugiat similique, voluptates iusto maxime dignissimos? Natus, praesentium repudiandae! Velit voluptate quis accusantium quos repellat deserunt quibusdam, laboriosam reprehenderit ipsam vero quod non vel et earum minima ex ratione veritatis perspiciatis illo assumenda cum placeat molestias maxime magni. Numquam enim, animi ullam esse placeat ipsa dolore omnis facilis molestiae quas tenetur libero blanditiis corporis? Incidunt omnis provident amet et harum facere quos molestiae ullam error animi, nostrum minima, esse dolores. Necessitatibus corrupti optio excepturi commodi ipsam quaerat, minus similique quae delectus assumenda maiores, eveniet omnis laudantium illo eos officia voluptates tempora molestias. Maiores nemo nesciunt sapiente magni iusto, sint, neque laborum adipisci quaerat deleniti odit ex unde fugiat vero harum cumque dolore nihil enim laboriosam, tenetur repellendus. Adipisci, perferendis! Dolor accusantium pariatur aperiam magni dolorem aliquam laborum ad, commodi atque necessitatibus eveniet tempora enim ducimus qui omnis nostrum quos quam nobis voluptas sit quisquam perferendis itaque neque. Facilis, nulla! Asperiores reiciendis doloribus praesentium, nobis, illo repellendus numquam, obcaecati quidem quaerat inventore rerum dolor velit quod cupiditate minima cumque! Maiores quasi sint nemo alias cumque dolore laboriosam, maxime repellat ab repudiandae autem similique voluptatibus aliquid iste ut perferendis quisquam. Reprehenderit voluptates mollitia pariatur reiciendis harum, animi inventore expedita cumque! Qui, id veritatis ipsum natus, veniam nihil numquam tenetur laboriosam mollitia nemo nulla vero officia. Repudiandae sint, doloribus iste voluptatem fugit aliquid pariatur asperiores dolorum officia nihil distinctio ducimus perspiciatis eveniet neque repellendus, deserunt est ipsam? Vel officia reiciendis officiis quia odit? Doloremque hic totam laboriosam harum, adipisci nobis. Laboriosam consequuntur voluptatibus quam repellendus nihil dolorem ea saepe in quisquam ut ducimus dicta tempora ipsam alias est perspiciatis assumenda fugiat sint rerum nesciunt, cumque soluta. Dignissimos quibusdam expedita culpa maiores? Hic officia ipsum blanditiis libero magnam voluptas, fuga sapiente eos provident. Impedit ratione quis hic totam quasi rerum earum perspiciatis consequatur distinctio vitae labore odio eos nostrum dicta deserunt minus, nam, quae quos aliquid ducimus? Hic soluta dignissimos cupiditate rem illo placeat inventore dolor optio rerum omnis! Quaerat molestias provident quas similique nostrum odio tempora eos reiciendis ipsam quasi facere at itaque praesentium ea, consectetur excepturi reprehenderit doloribus aliquam nisi aut unde earum. Mollitia perferendis quae voluptate perspiciatis ducimus repellat suscipit nisi dolor, at est quisquam quasi voluptas amet ad soluta commodi doloribus exercitationem aspernatur incidunt, fugiat sunt eveniet. Iure temporibus, ipsum inventore, quae doloremque cumque harum animi veniam corrupti placeat quaerat odit suscipit aspernatur hic illum mollitia quod culpa. Dolores deserunt tempore neque beatae blanditiis unde similique. Veniam sunt necessitatibus eveniet! Quae sint, distinctio, voluptas numquam commodi nostrum a fuga obcaecati corporis vitae aspernatur rem iste debitis atque fugit suscipit ipsa. Perferendis odit veritatis iure, aliquid voluptas facilis facere, magnam doloribus odio, hic itaque saepe! Iste alias iure iusto aliquid nesciunt voluptate! Illum voluptatibus quasi at, voluptates atque sapiente maiores expedita cumque fugit laboriosam inventore a illo quia aut praesentium autem, officiis consequatur mollitia vel, veritatis beatae itaque explicabo. Ab eos ut eligendi cupiditate nulla obcaecati vero rerum quasi excepturi voluptas perspiciatis quos, voluptatem dignissimos? Ab totam velit quo nulla libero tenetur labore magnam harum, animi asperiores possimus maxime rerum dignissimos tempore eaque voluptates voluptate laudantium quam suscipit expedita dolor molestias laboriosam repellat iusto! Esse fugit ab numquam repellendus officia quia impedit dolor earum, veniam ullam, iusto dicta nihil cumque reprehenderit libero debitis doloribus optio beatae eveniet commodi? Magni ex eius quis voluptatem exercitationem eveniet saepe iusto excepturi. Corporis delectus nam eligendi ipsam dicta possimus laborum dolorum doloremque in veritatis quasi, cumque fuga debitis tempora maiores eveniet id corrupti, omnis enim illo. Quae totam consectetur maiores quidem adipisci repudiandae sit obcaecati voluptates fugiat, aut beatae ipsum ad aliquam est ducimus, provident nihil minus error officia autem. Laboriosam harum commodi dicta aliquam at velit alias, tempore possimus iste totam quisquam ut libero fuga quo natus. Sit repellendus similique temporibus, doloribus eum ea? Ducimus doloremque praesentium quibusdam laboriosam? Consequatur suscipit ipsam quibusdam nisi at omnis quis necessitatibus? Quibusdam, debitis qui laudantium repellat error sit dignissimos neque excepturi consequatur sed illo odit quidem fuga reprehenderit perferendis iste voluptatum doloribus eaque natus? Ad quo rem quasi, repellat dicta non.
               
            </ScrollArea>
     
    </div>
  )
}

export default CustomThemeEditor