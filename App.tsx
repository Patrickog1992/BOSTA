import React from 'react';
import Section from './components/Section';
import Button from './components/Button';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import NotificationPopup from './components/NotificationPopup';
import { ShieldCheck } from 'lucide-react';

function App() {
  const scrollToOffer = () => {
    const element = document.getElementById('offer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleBuy = () => {
    window.location.href = "https://pay.kirvano.com/c8bb791a-5dcb-4066-97a3-87257561abe2";
  };

  // Obtém a data atual formatada (ex: 24/10/2023)
  const today = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-poppins selection:bg-amber-100 selection:text-amber-900">
      
      {/* Social Proof Popup */}
      <NotificationPopup />

      {/* Urgency Banner */}
      <div className="bg-red-600 text-white text-center py-4 px-4 font-bold text-sm md:text-base leading-snug shadow-md z-50 relative">
        ATENÇÃO : Devido a grande pressão da indústria farmacêutica esse site irá sair do ar no dia <span className="text-yellow-300 text-lg mx-1 underline decoration-yellow-300/50">{today}</span> aproveite !
      </div>

      {/* Hero Section */}
      <Section className="pt-8 pb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
          Como Parecer 9 kg Mais Magra em Apenas <span className="text-red-600 underline decoration-red-300 decoration-4 underline-offset-4">72 Horas</span>… Antes de Perder Um Único Quilo na Balança
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-8">
          O Protocolo Rápido para Eliminar a “Massinha Pegajosa” que Faz Você Parecer Gorda
        </h2>
        
        <div className="bg-rose-50 border border-rose-100 p-6 rounded-2xl shadow-sm my-8">
          <p className="text-lg font-semibold mb-4">Olhe esta foto agora mesmo…<br/>Qual dessas duas mulheres você acha que pesa mais?</p>
          <img 
            src="https://go.imfitgirl.com/hosted/images/ac/8422f95e794d41bfe1ee4c8d0b8e64/mujeres.jpg" 
            alt="Comparação de peso" 
            className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
          />
          <p className="mt-6 text-lg">
            A maioria das pessoas diz que a mulher da esquerda.<br/>
            Você ficaria surpresa ao saber que…<br/>
            <strong className="text-red-600 block mt-2 text-xl">A mulher da ESQUERDA pesa 5,5 kg A MENOS.</strong>
          </p>
        </div>

        <div className="prose prose-lg mx-auto text-left text-gray-700">
          <p>Mas ela parece muito mais gorda. Como isso é possível?</p>
          <p>Como especialista em nutrição reconhecida internacionalmente, com mais de 100 aparições na mídia, ninguém imaginaria que eu lutei com esse mesmo problema mais do que ninguém.</p>
          <p>Sempre tive orgulho da minha disciplina.</p>
          <p>Dieta perfeita. Nunca pulava um treino.</p>
          <p>Mesmo assim, houve uma fase da minha vida em que eu parecia 9 kg mais pesada do que realmente era.</p>
          <p>Até minhas amigas que pesavam MAIS do que eu pareciam mais magras.</p>
          <p>Eu ficava olhando as fotos pensando… <em>“Por que eu pareço tão gorda?”</em></p>
          <p>Então descobri algo chocante… que estava na minha geladeira naquele exato momento.</p>
          <p>Comidas que os chamados “especialistas” dizem que são saudáveis… estavam estufando minha barriga a cada dia.</p>
          <p>Você pode achar que é pão, iogurte ou feijão. Mas não. O verdadeiro culpado vai te deixar em choque… e está aí agora mesmo na sua cozinha.</p>
        </div>
      </Section>

      {/* The Hook / The "Sticky Dough" */}
      <Section bg="rose">
        <div className="prose prose-lg mx-auto text-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Antes de você continuar prestando atenção, quero deixar algo claro:</h3>
          <p>Eles não me faziam engordar. <strong>Mas SIM me faziam PARECER gorda.</strong></p>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500 my-8">
            <p className="font-bold text-lg mb-4">Veja, existe um acúmulo espesso e pegajoso — como uma massinha — que se expande dentro do seu intestino enquanto você lê isto:</p>
            <img 
              src="https://go.imfitgirl.com/hosted/images/82/fe4dc0757d4927a732ca3b484d7fd8/sacar-panza.jpg" 
              alt="Massinha pegajosa" 
              className="w-full rounded-lg mb-4"
            />
            <p className="font-semibold text-gray-900">Ele empurra a sua barriga para fora.</p>
            <img 
              src="https://go.imfitgirl.com/hosted/images/4c/4c8be5ced04ff683da749535e879ed/panza.jpg" 
              alt="Barriga inchada" 
              className="w-full rounded-lg mb-4"
            />
            <p className="font-semibold text-gray-900">Faz você parecer grávida.</p>
          </div>

          <p>Esses ingredientes “saudáveis” são tão enganosos que provavelmente você comeu um deles hoje de manhã.</p>
          <p>E agora mesmo ele está fazendo com que você pareça mais gorda.</p>
          <p>E aqui está o mais perverso… Quanto mais limpo você come, PIOR você parece.</p>
          <p>Porque quando você tem mais de 40 anos, como eu, o seu corpo já não consegue combater isso.</p>
          
          <ul className="list-disc pl-6 space-y-2 font-medium bg-white p-6 rounded-lg my-6">
            <li>Sua cintura se alarga.</li>
            <li>Sua barriga salta mais para fora.</li>
            <li>Você parece mais pesada, mesmo quando emagrece.</li>
          </ul>

          <p>Mas eu descobri como eliminar essa porcaria em 72 horas — sem passar fome, sem tratamentos invasivos, sem maratonas na academia.</p>
          
          <p className="text-center font-bold text-xl my-6">Olhe essas duas fotos MINHAS:</p>
          <img 
            src="https://go.imfitgirl.com/hosted/images/70/fe46ffb26847eba63613d2394296a0/ingrid-AD.jpg" 
            alt="Ingrid antes e depois" 
            className="w-full rounded-xl shadow-lg mb-6"
          />
          <p className="text-center italic">57 kg em ambas as fotos.</p>

          <p>Mas veja como eu pareço muito mais magra na foto da direita.</p>
          <p>Eu não fiz dieta. Eu não fiz mais exercício. Eu apenas eliminei a massinha pegajosa que me fazia parecer gorda.</p>
          <p>Porque sejamos realistas… Você não vai perder 9 kg da noite para o dia. <strong>Mas SIM pode parecer 9 kg mais magra em 72 horas.</strong></p>
          <p>Pense da seguinte forma: Você quer continuar evitando fotos nas festas?</p>
          <p className="font-bold text-lg">Aqui está como eliminar essa massinha pegajosa e voltar a parecer magra…</p>
        </div>
      </Section>

      {/* The Story */}
      <Section>
        <div className="prose prose-lg mx-auto text-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8">A Verdade Sobre Por Que Parecemos Gordas<br/><span className="text-emerald-600 text-xl">— Mesmo Quando Realmente Não Estamos —</span><br/><span className="text-sm font-normal text-gray-500">(Apesar de “Fazer Tudo Certo”)</span></h2>
          
          <p>Eu sou Suelen Costa, e se você acompanhou o meu trabalho como Health Coach certificada, provavelmente vai se surpreender ao saber que eu também sofria em silêncio com esse problema.</p>
          <img src="https://i.imgur.com/4jXf9sP.jpg" alt="Suelen Costa" className="w-full rounded-lg my-6 shadow-md" />

          <p>Cada manhã era uma batalha. 30… 45 minutos sentada, esperando. Rezando para sentir aquele “chamado” natural que nunca chegava.</p>
          <p>Apesar das minhas certificações do Institute of Integrative Nutrition e da Functional Medicine Academy… apesar de ter ajudado mais de 100.000 mulheres a transformarem suas vidas…</p>
          <p>O meu próprio corpo parecia ter me traído.</p>
          <img src="https://go.imfitgirl.com/hosted/images/1a/91a1ba64774bea9d281f57b2cf8178/sitting.jpg" alt="Sentada sofrendo" className="w-full max-w-md mx-auto rounded-lg my-6" />

          <p>E o pior é que eu estava fazendo “tudo certo”: Comendo fibra, bebendo água, fazendo exercício, testando cada remédio natural.</p>

          <h3 className="text-2xl font-bold mt-12 mb-6">O Incidente Vergonhoso Que Me Levou À Descoberta Mais Importante da Minha Carreira</h3>
          <p>Tudo começou depois de um evento de caridade em Medellín, onde fui convidada como “especialista em saúde”. Naquele dia, minha barriga estava tão inchada que parecia que eu estava grávida de cinco meses.</p>
          <p>No dia seguinte, meu telefone começou a explodir de notificações.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 italic text-blue-900">
            Alguém tinha postado uma foto do evento no Twitter com a mensagem: “Parece que Suelen Costa tem novidades para compartilhar! Parabéns mamãe!”
          </div>
          <p>Em questão de horas, o post se tornou viral. Milhares de pessoas me parabenizando por uma “gravidez” que não existia.</p>
          <p>Eu, a “health coach”, estava sendo publicamente confundida com uma mulher grávida… só porque eu não conseguia controlar o meu próprio sistema digestivo.</p>
          <p>A vergonha foi esmagadora. Me tranquei em casa por dias.</p>

          <p>Naquela noite, no meu ponto mais baixo, recebi uma ligação inesperada da minha tia política Margaret. “Menina”, ela me disse em inglês, “o que você precisa não está na farmácia. Está no mesmo lugar onde minha avó encontrou alívio, nas florestas da Carolina do Sul.”</p>
          
          <img src="https://go.imfitgirl.com/hosted/images/f4/6234df3f4d432fa78275476d66c643/planta.jpg" alt="Planta medicinal" className="w-full rounded-lg my-6" />
          
          <p>Ela me falou de um remédio ancestral, feito com uma noz específica que crescia no sul. “Os curandeiros Cherokee a chamavam de ‘a medicina da manhã’”, ela explicou. “E a bisavó usava religiosamente.”</p>
        </div>
      </Section>

      {/* The Myths */}
      <Section bg="gray">
        <div className="prose prose-lg mx-auto text-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">O Perigoso Mito da Fibra Que Está Piorando o Seu Problema</h2>
          <p>Depois do meu incidente vergonhoso, comecei a pesquisar obsessivamente. A primeira coisa que descobri me deixou em choque.</p>
          <p>“Você precisa de mais fibra…” Quantas vezes você já ouviu isso?</p>
          <p>E aqui está a verdade chocante que ninguém te conta:</p>
          <p>Um estudo clínico publicado no World Journal of Gastroenterology descobriu algo que desafia tudo que nos ensinaram:</p>
          <img src="https://go.imfitgirl.com/hosted/images/d4/3ae892cc714b23a0315fe000aed36f/wjg-journal.png" alt="Estudo WJG" className="w-full rounded-lg my-6 border border-gray-200" />
          
          <p>Minha tia Margaret tinha razão — a solução não estava nos remédios modernos. Na verdade, muitos deles estavam piorando o meu problema.</p>
          <p>Imagine o seu sistema digestivo como uma rodovia na hora do rush… Quando o trânsito está travado, o que acontece se você coloca mais carros? Exato: o congestionamento piora.</p>
          <img src="https://go.imfitgirl.com/hosted/images/88/582967514d41e29b204a08a66630b5/malestomago.jpg" alt="Dor de estômago" className="w-full max-w-sm mx-auto rounded-lg my-6" />
          <p>É a mesma coisa com a sua digestão. Quando o seu “trânsito” está parado, adicionar mais fibra é como adicionar mais carros a um engarrafamento.</p>

          <h3 className="text-2xl font-bold mt-12 mb-6 text-red-600">Os Mitos Perigosos Que Nossas Avós Nos Ensinaram e Que Pioram a Barriga Inchada</h3>
          <img src="https://go.imfitgirl.com/hosted/images/06/c91a5df3e54cd3907e7d912427d299/abuelita.jpg" alt="Avó conselheira" className="w-full max-w-sm mx-auto rounded-full border-4 border-white shadow-lg my-6" />
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Mito #1: “Um copo de água morna com limão em jejum cura tudo”</h4>
              <p>A verdade: Embora a hidratação matinal ajude, não é o limão que importa — é o MOMENTO exato. Sem restaurar o ritmo natural do seu intestino, você poderia tomar água com limão o dia todo sem ver resultados.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Mito #2: “Se você não vai ao banheiro, é só esperar”</h4>
              <p>Acontece que ele é perigoso. Cada dia que passa sem evacuar: As toxinas são reabsorvidas pelo sangue. Suas hormonas ficam desequilibradas. E o dano a longo prazo se acumula.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Mito #3: “Remédios naturais não fazem mal”</h4>
              <p>“Se é natural, é bom” — certo? Nem sempre… Até mesmo remédios ancestrais como o chá de sene podem criar dependência.</p>
              <img src="https://go.imfitgirl.com/hosted/images/87/99f0620c75417bb77d491c5d9969fe/Senna-Tea_2012.jpg" alt="Chá de Senna" className="w-full rounded my-4" />
              <p>Só porque a sua avó usava não significa que seja seguro a longo prazo.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* The Solution / Science */}
      <Section>
        <div className="prose prose-lg mx-auto text-gray-700">
          <h2 className="text-3xl font-bold text-center text-emerald-800">Seu Cólon Tem Um “Despertador Natural” Que Foi Desligado</h2>
          <img src="https://go.imfitgirl.com/hosted/images/95/0ec056c5354d6e93b0dcd7b30e2ad3/colon-shaped-alarm-clock.jpg" alt="Relógio Cólon" className="w-full max-w-md mx-auto my-8" />
          
          <p>Depois de meses de pesquisa obsessiva, descobri um estudo revolucionário do Dr. Paul Enck que revelou algo surpreendente: Seu sistema digestivo não é apenas um tubo – é um sistema complexo governado por um ritmo circadiano preciso.</p>
          <p>Em outras palavras: <strong>Seu cólon tem seu próprio “despertador natural”.</strong></p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4">O Inimigo Oculto: A “Massinha Pegajosa” Que Está Bloqueando o Seu Sistema</h3>
          <img src="https://go.imfitgirl.com/hosted/images/54/67e293ae0743768dcb1c4c8168ab77/liquido-cafe.jpg" alt="Líquido Café" className="w-full max-w-md mx-auto my-6 rounded-lg" />
          <p>O verdadeiro culpado que está sabotando a sua forma física é algo que descobri e chamo de “Massinha Pegajosa”. Essa substância viscosa, parecida com cola, se forma quando os aditivos alimentares modernos se combinam nos seus intestinos.</p>
          <img src="https://go.imfitgirl.com/hosted/images/78/fd31d31d274941b87714d08993d83d/sticky.jpg" alt="Pegajoso" className="w-full max-w-md mx-auto my-6 rounded-lg" />
          <p>Ela está escondida no seu iogurte “probiótico” favorito (até o orgânico), camuflada naquelas barrinhas de proteína “saudáveis”, oculta em molhos de restaurante e presente até em tortillas e pães rotulados como “naturais”.</p>
          <p>Essa “Massinha Pegajosa” literalmente emperra todo o sistema de sincronização que seu corpo levou milhares de anos para aperfeiçoar.</p>

          <div className="bg-rose-50 p-6 rounded-xl my-8 border border-rose-200">
            <h4 className="font-bold text-xl mb-4 text-rose-900">Por Que Nós Latinas Sofremos Mais Com Isso</h4>
            <img src="https://go.imfitgirl.com/hosted/images/16/4086e6fa474b75b9eea6c78cdb146f/mujer-en-bano.jpg" alt="Mulher sofrendo" className="w-full rounded-lg mb-4" />
            <p>Os estudos mostram que a prisão de ventre crônica afeta as mulheres TRÊS vezes mais do que os homens na América Latina. Porque nossas hormonas – especialmente o estrogênio e a progesterona – afetam diretamente o movimento do intestino.</p>
            <p>E se você somar: O estresse de uma vida corrida, as mudanças na nossa dieta tradicional, e o fato de que até 62% de nós é intolerante à lactose sem saber.</p>
            <p className="font-bold text-rose-800">Não é culpa sua – é a sua biologia e sua herança jogando contra você.</p>
            <img src="https://go.imfitgirl.com/hosted/images/7c/6629972a134cd6a12fef9e9ef6f730/dolor-de-estomago.jpg" alt="Dor de estômago" className="w-full rounded-lg mt-4" />
          </div>

          <div className="bg-amber-50 p-8 rounded-xl my-8">
            <h4 className="font-bold text-lg mb-4">Está Te Afetando? Responda Estas Perguntas:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Já não sente que sua roupa cai como antes?</li>
              <li>Você mantém o peso (ou até emagrece), mas se vê igual ou mais inchada?</li>
              <li>Depois de comer você sente que incha quase imediatamente?</li>
              <li>As dietas que funcionavam antes pararam de funcionar?</li>
            </ul>
            <p className="font-bold mt-4">Se você respondeu “sim” a 2 ou mais dessas perguntas… É muito provável que você esteja sofrendo os efeitos do acúmulo dessa massinha pegajosa.</p>
          </div>
        </div>
      </Section>

      {/* The Discovery / Black Walnut */}
      <Section bg="green">
        <div className="prose prose-lg mx-auto text-gray-700">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">A Descoberta do Nogal Negro Que Mudou Tudo</h2>
          <p>Intrigada com o que minha tia havia me contado, passei semanas pesquisando essa misteriosa noz: o Nogal Negro.</p>
          <img src="https://go.imfitgirl.com/hosted/images/f9/397eb144b944d5a94affd5a8ffc8ca/Native_healers_harvesting_Black.jpg" alt="Colhendo Nogal Negro" className="w-full rounded-lg my-6 shadow-xl" />
          <p>O que descobri foi impressionante: os compostos da casca externa dessa noz podem literalmente “despertar” as células intestinais responsáveis pela digestão matinal… E isso ajuda a expulsar a massinha pegajosa que faz o abdômen parecer inchado e empurrado para fora.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">A Ciência Por Trás do “Efeito Aplanador”</h3>
          <img src="https://go.imfitgirl.com/hosted/images/78/6d4223558249b7bc45a036de2731f7/serotonina.jpg" alt="Serotonina" className="w-full max-w-md mx-auto rounded-lg my-6" />
          <p>Seu intestino tem células especiais chamadas células enterocromafins. Elas são como mini “relógios despertadores” que ativam o seu movimento matinal. Essas células produzem até 90% da serotonina do seu corpo.</p>
          <img src="https://go.imfitgirl.com/hosted/images/96/e01461ab7b4dc586b18d5ae709ff64/body.jpg" alt="Corpo Humano" className="w-full max-w-sm mx-auto rounded-lg my-6" />
          <p>Quando essas células funcionam como deveriam, liberam serotonina no momento certo — normalmente uns 30 minutos depois de você acordar. Isso cria aquele desejo natural de ir ao banheiro e ter um movimento completo e satisfatório.</p>
          <p className="font-bold text-emerald-800 bg-emerald-100 p-4 rounded text-center my-6">Quando essa massinha pegajosa sai do corpo, o abdômen naturalmente se achata — normalmente nas primeiras 72 horas.</p>
        </div>
      </Section>

      {/* The Product Creation Story */}
      <Section>
        <div className="prose prose-lg mx-auto text-gray-700">
          <h2 className="text-3xl font-bold mb-6">A Fórmula Perfeita Nasce Depois de Meses de Testes e Fracassos</h2>
          <p>Eu já tinha os ingredientes-chave… mas o caminho até uma solução completa estava só começando.</p>
          <p>Pedi um empréstimo e investi mais de US$ 150.000 em pesquisa e desenvolvimento. Minha pequena equipe e eu trabalhamos noites inteiras.</p>
          <img src="https://go.imfitgirl.com/hosted/images/d1/bc3cf5c2bc4e9db2dc22bb85d27553/scientist.jpg" alt="Cientista" className="w-full rounded-lg my-6 shadow-md" />
          
          <p>Durante meses, fracasso após fracasso nos golpeava. Lembro de uma noite particularmente difícil em que estive a ponto de desistir de tudo. Meu sócio me disse: “Ingrid, você precisa reconhecer quando é hora de desistir. Isso simplesmente não está funcionando.”</p>
          <p>Naquela mesma noite, recebi um e-mail que mudou tudo: “Querida Ingrid... Há milhares de nós esperando por uma solução.”</p>
          
          <p>Com uma nova determinação, decidimos tentar um caminho completamente diferente. Em vez de processar os ingredientes com métodos convencionais, nos inspiramos nas técnicas ancestrais.</p>
          <img src="https://go.imfitgirl.com/hosted/images/4c/630122ec014f5a82512c24c1378bb2/extracting_Black_Walnut.jpg" alt="Extraindo Nogal" className="w-full rounded-lg my-6 shadow-md" />
          
          <p>O grande avanço veio na tentativa número 51. Quando testamos essa nova formulação, algo extraordinário aconteceu… A sinergia entre o Nogal Negro e o extrato de ameixa criou um efeito que nenhum dos dois conseguia sozinho.</p>
          <img src="https://go.imfitgirl.com/hosted/images/04/dfaf418c194ae4a5dc8d098caf6a35/green_and_black_powders.jpg" alt="Pós verdes e pretos" className="w-full max-w-md mx-auto rounded-lg my-6" />
          
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl my-6">
            <h3 className="text-xl font-bold text-emerald-900 mb-2">Resultados Que Pareciam Milagrosos</h3>
            <p>A maioria das participantes experimentou o retorno da sua “digestão matinal” em apenas 72 horas… o que resultou em um abdômen mais plano. E o mais surpreendente: não foram relatados efeitos colaterais negativos. Sem cólicas. Sem urgências imprevisíveis.</p>
          </div>
          <p>Quando finalmente tive o produto pronto nas mãos, testei em mim mesma com muito ceticismo. Na manhã seguinte, pela primeira vez em anos, minha barriga parecia visivelmente mais plana sem ter perdido uma única libra na balança. Assim nasceu o Detox do Despertar Digestivo…</p>
        </div>
      </Section>

      {/* The Product Reveal */}
      <Section bg="rose" id="product">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Detox do Despertar Digestivo</h2>
          <p className="text-xl text-emerald-700 font-semibold">O protocolo que “liga” sua digestão em 72 horas — mesmo que nada tenha funcionado Antes</p>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            O Detox do Despertar Digestivo é o único protocolo natural capaz de expulsar a massinha pegajosa que está entupindo seu intestino, paralisando seu relógio digestivo e fazendo sua barriga saltar para fora todos os dias, mesmo quando você come pouco, treina ou tenta “viver saudável”.
          </p>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
             Essa receita secreta — que você prepara em minutos — ativa o “despertador interno” do seu corpo, destrava o impulso matinal que o seu intestino perdeu, e elimina rapidamente o acúmulo escondido que te faz parecer mais inchada, mais pesada e até “grávida” quando na verdade você NÃO está.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-rose-100 max-w-2xl mx-auto mt-6">
             <p className="font-bold text-rose-800 text-lg">E o melhor:</p>
             <p className="text-gray-800 font-medium">Você pode parecer até 9 kg mais magra em apenas 72 horas, mesmo sem perder uma única grama na balança.</p>
             <ul className="grid grid-cols-2 gap-2 mt-4 text-sm font-semibold text-gray-600">
                <li className="flex items-center gap-2"><span className="text-red-500">✕</span> Sem cápsulas caras</li>
                <li className="flex items-center gap-2"><span className="text-red-500">✕</span> Sem laxantes perigosos</li>
                <li className="flex items-center gap-2"><span className="text-red-500">✕</span> Sem dietas absurdas</li>
                <li className="flex items-center gap-2"><span className="text-red-500">✕</span> Sem treinos intermináveis</li>
             </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="font-bold text-lg text-emerald-800 mb-2">1. Impulso da Sinalização Matinal</h3>
            <p className="text-sm">O Nogal Negro fornece compostos que influenciam diretamente os neurotransmissores intestinais.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="font-bold text-lg text-emerald-800 mb-2">2. Restauração do Ritmo Natural</h3>
            <p className="text-sm">A combinação específica ajuda a resetar o relógio interno do seu intestino e eliminar rapidamente todo aquele acúmulo.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="font-bold text-lg text-emerald-800 mb-2">3. Eliminação do Resíduo Pegajoso</h3>
            <p className="text-sm">A argila bentonita atua como um imã natural, atraindo e eliminando a massinha pegajosa.</p>
          </div>
        </div>

        <img src="https://go.imfitgirl.com/hosted/images/51/a0515670874ac9bac113f0284ed576/Serotonin_Awakening.jpg" alt="Despertar da Serotonina" className="w-full max-w-3xl mx-auto rounded-xl shadow-xl mb-12" />

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">O Que Torna o Detox do Despertar Digestivo Único</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img src="https://go.imfitgirl.com/hosted/images/61/d35a2f800b4c099c292fa48fdcc43d/nogal-negro.jpg" alt="Nogal Negro" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="font-bold">Extrato Premium de Nogal Negro</h4>
              <p className="text-sm text-gray-600">Colhido nas montanhas norte-americanas.</p>
            </div>
            <div className="text-center">
              <img src="https://go.imfitgirl.com/hosted/images/c1/e704de2ff944ad95c0e7367e7020ee/ciruela.jpg" alt="Ameixa" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="font-bold">Complexo Especial de Ameixa</h4>
              <p className="text-sm text-gray-600">Processado cuidadosamente para manter propriedades naturais.</p>
            </div>
            <div className="text-center">
              <img src="https://go.imfitgirl.com/hosted/images/df/32a1aa75ce4b8d8c3ce934517b535a/estracto.jpg" alt="Argila Bentonita" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="font-bold">Argila Bentonita Ultra Pura</h4>
              <p className="text-sm text-gray-600">Imã natural para eliminar resíduo pegajoso.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h4 className="font-bold text-xl mb-4">E Também Adicionamos Outros Poderosos Ingredientes Naturais:</h4>
            <img src="https://go.imfitgirl.com/hosted/images/71/3f7275c22b45a0af1ecfc77ced87a2/otros-ingredientes.jpg" alt="Outros ingredientes" className="w-full max-w-2xl mx-auto rounded-lg mb-6" />
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-700">
              <span className="bg-white px-3 py-1 rounded-full shadow">Casca de psyllium</span>
              <span className="bg-white px-3 py-1 rounded-full shadow">Linhaça</span>
              <span className="bg-white px-3 py-1 rounded-full shadow">Farelo de aveia</span>
              <span className="bg-white px-3 py-1 rounded-full shadow">Lactobacillus Acidophilus</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Results and Bonus */}
      <Section>
         <div className="prose prose-lg mx-auto text-gray-700">
            <h2 className="text-3xl font-bold text-center mb-6">Resultados Transformadores em Apenas 72 Horas</h2>
            <img src="https://go.imfitgirl.com/hosted/images/47/0506818cac41f2b1809bc9fe54fe24/stomach.jpg" alt="Estômago plano" className="w-full max-w-md mx-auto rounded-lg my-6" />
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-emerald-800 mb-2">Nos primeiros 3 dias:</h4>
                <ul className="list-disc pl-5">
                  <li>Os primeiros sinais do retorno do impulso matinal</li>
                  <li>Redução visível do inchaço abdominal</li>
                  <li>Maior sensação de leveza e energia</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-emerald-800 mb-2">Depois de uma semana completa:</h4>
                <ul className="list-disc pl-5">
                  <li>Movimentos intestinais previsíveis todas as manhãs</li>
                  <li>Uma barriga visivelmente mais plana ao longo do dia</li>
                  <li>Roupas que caem melhor e mais confortáveis</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">O “Hack” Natural Que Acelera o Despertar Digestivo</h3>
            <p>O que as “respondedoras rápidas” tinham em comum? Elas preparavam o sistema digestivo durante a noite com outros “rituais ancestrais”.</p>
            <p>Eu chamo isso de <strong>“Método do Ventre Quente”</strong> — um simples ritual noturno de 12 minutos que prepara delicadamente o seu sistema digestivo antes de dormir.</p>
            <img src="https://go.imfitgirl.com/hosted/images/13/eff19897a944b191a6eb747cd5035b/UNIDAS.jpg" alt="Mulheres Unidas" className="w-full rounded-lg my-6" />
            <p>E o melhor: O “Método do Ventre Quente” completo vem incluído como presente especial para você hoje.</p>
            <img src="https://go.imfitgirl.com/hosted/images/94/bb87b04cbb49c89716228d49bf18a8/She-is-gently.jpg" alt="Mulher feliz" className="w-full rounded-lg my-6" />

            <h3 className="text-2xl font-bold mt-12 mb-6">Sua Nova Vida Sem Inchaço</h3>
            <img src="https://go.imfitgirl.com/hosted/images/51/cd5eba0ee94f379b9f5c6726f98b90/buen-metabolismo.jpg" alt="Bom Metabolismo" className="w-full rounded-lg my-6" />
            <p>Imagine como sua vida mudaria se você pudesse: Acordar e saber exatamente quando o seu corpo estará pronto para a “limpeza matinal”, sentir-se confiante e magra durante todo o dia, usar roupas justas com confiança, curtir as refeições sem medo e se reconectar com o seu parceiro.</p>
         </div>

         {/* Testimonials */}
         <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-6">O que Dizem Quem Já Experimentou</h2>
            <Testimonials />
         </div>

         <div className="prose prose-lg mx-auto text-gray-700 mt-12">
            <h3 className="text-xl font-bold">"Mas eu já tentei de tudo e nada funciona..."</h3>
            <p>A combinação específica de Nogal Negro e Ameixa no Detox do Despertar Digestivo é a única solução, validada cientificamente, que: Elimina a “Massinha Pegajosa”, remove o acúmulo e restaura o ritmo circadiano natural.</p>
         </div>
      </Section>

      {/* Offer Section */}
      <Section id="offer" bg="green" className="border-t border-emerald-100">
        <Pricing />

        {/* Guarantee */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mt-12 text-center">
          <div className="inline-block bg-amber-100 p-4 rounded-full mb-4">
            <ShieldCheck className="w-12 h-12 text-amber-500" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Garantia “Sua Transformação Total” – Sem Riscos</h3>
          <p className="text-gray-700 mb-6">
            Use durante 7 dias completos… E se você não sentir o retorno da sua digestão natural, movimentos mais fáceis, menos inchaço e uma barriga mais plana... Basta entrar em contato com a minha equipe de suporte e nós vamos devolver cada centavo do seu investimento. Sem perguntas.
          </p>
          <p className="font-bold text-emerald-700">Além disso, você pode ficar com todo o protocolo de presente.</p>
        </div>
      </Section>

      {/* Final Form/CTA Area */}
      <Section>
        <div className="max-w-2xl mx-auto">
          {/* Minha Promessa Pessoal */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Minha Promessa Pessoal</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
               <p className="font-semibold">Por que eu ofereço uma garantia tão generosa?</p>
               <p>Porque eu vi com meus próprios olhos como essa fórmula transformou milhares de vidas… incluindo a minha.</p>
               <p>Eu sei que ela funciona. E coloco o meu nome e minha reputação atrás deste produto, porque sei que também vai funcionar para você.</p>
               <p className="font-bold text-emerald-800 text-xl italic bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                 "Minha promessa pessoal: Esta fórmula mudou a minha vida. E eu acredito de coração que também vai mudar a sua."
               </p>
               <p>Por isso, eu assumo todo o risco. Você não tem nada a perder… e uma vida inteira de liberdade digestiva para ganhar.</p>
            </div>
            
            <div className="mt-8">
              <Button fullWidth onClick={handleBuy} className="bg-emerald-600 hover:bg-emerald-700 animate-pulse text-xl py-5">
                EU QUERO AGORA
              </Button>
            </div>
          </div>

          {/* Cada Dia Que Você Espera */}
          <div className="prose prose-lg mx-auto text-gray-700 mb-12">
             <h3 className="text-2xl font-bold text-gray-900 text-center">Cada Dia Que Você Espera é Mais Um Dia de Sofrimento</h3>
             <p>Pense por um momento… Cada dia que passa sem resolver esse problema:</p>
             <ul className="list-disc pl-6 text-left">
               <li>Seu corpo continua reabsorvendo toxinas que deveriam ser eliminadas</li>
               <li>Sua barriga continua sendo empurrada para fora pela massinha pegajosa</li>
               <li>Você continua evitando fotos e espelhos por causa da sua aparência</li>
               <li>Sua confiança segue sendo destruída pela incerteza de como você vai se sentir</li>
             </ul>
             <p>Você realmente quer passar mais um dia assim?</p>
             <p>Especialmente quando a solução está bem aqui, respaldada por uma garantia que te protege completamente.</p>
          </div>

          {/* A Decisão é Sua */}
          <div className="prose prose-lg mx-auto text-gray-700">
             <h3 className="text-3xl font-bold text-center mb-6">A Decisão é Sua</h3>
             <p>Agora mesmo, você está em uma encruzilhada.</p>
             <p>Você pode continuar como está:</p>
             <ul className="list-disc pl-6">
               <li>Acordando todo dia com a barriga estufada</li>
               <li>Lutando para achar roupas que não te deixem parecendo grávida</li>
               <li>Vivendo com aquela aparência inchada que você odeia</li>
               <li>Acumulando mais massinha pegajosa que te faz parecer mais gorda a cada dia</li>
             </ul>
             
             <img src="https://go.imfitgirl.com/hosted/images/4c/98897021da4f8b981d4d6f0efb781d/happy.jpg" alt="Mulher Feliz" className="w-full rounded-xl shadow-lg my-8" />
             
             <p className="font-bold text-xl">Ou…</p>
             <p>Você pode tomar uma decisão hoje… e se juntar às milhares de mulheres que já descobriram a liberdade de:</p>
             <ul className="list-disc pl-6">
               <li>Ir ao banheiro naturalmente e de forma previsível todas as manhãs</li>
               <li>Manter a barriga lisa ao longo do dia</li>
               <li>Sentir mais energia e confiança</li>
               <li>Aproveitar mais intimidade com o parceiro, sem desconfortos</li>
             </ul>
             <p>Com as festas se aproximando, nunca houve melhor momento para eliminar essa massinha pegajosa e exibir o corpo mais magro que você merece.</p>
             <p className="bg-emerald-50 p-4 rounded border border-emerald-100 font-semibold text-emerald-900">
               Lembre-se: Você está protegida com a minha garantia “Sua Transformação Total”… Você não tem nada a perder… e uma vida cheia de confiança para ganhar.
             </p>
          </div>

        </div>
      </Section>

      {/* FAQ Section */}
      <Section bg="gray">
        <FAQ />
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Aja Agora e Recupere a Confiança na Sua Aparência</h3>
          <p className="mb-8">Não deixe passar esta oportunidade de transformar a sua digestão e o seu corpo. Com a nossa garantia de 60 dias, você tem tudo a ganhar e nada a perder.</p>
          <div className="flex justify-center">
            <Button onClick={scrollToOffer}>
              EXPERIMENTE OS RESULTADOS
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-4">&copy; {new Date().getFullYear()} Detox do Despertar Digestivo. Todos os direitos reservados.</p>
          <p>
            Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. 
            As informações fornecidas não substituem o aconselhamento médico profissional.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;