"use client";
import React from "react";
import { BackgroundImageWithTheme } from "@/components/image/BackgroundImageWithTheme";
import { TitleDefault } from "@/components/texts/TitleDefault";
import { Button } from "@/components/button/Button";
import { scrollToSection } from "@/utils/scrollToSection";
import { useRouter, useSearchParams } from "next/navigation";

export default function TrainingTermsPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const searchParams = useSearchParams();

  React.useEffect(() => {
    setIsMounted(true);

    const hash = searchParams.get("hash") || window.location.hash.slice(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  React.useEffect(() => {
    const hash = searchParams.get("hash") || window.location.hash.slice(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <BackgroundImageWithTheme
        lightImage="/img/Banner.png"
        darkImage="/img/Banner.png"
        className="bg-no-repeat bg-cover min-h-[21.75rem] flex justify-center items-center bg-right  lg:grid md:grid-cols-2"
      >
        <div className="max-w-[82.125rem] mx-auto 2sm:px-8 flex flex-col justify-center gap-6 py-[7.938rem]">
          <div className="flex flex-col basis-full bg-var-branco-100 rounded-bl-lg justify-center">
            <h1 className="flex flex-col mt-10 sm:text-6xl text-4xl leading-tight text-branco-100">
              Termos de Uso do Curso CST
              <span className="font-bold"> Formação de Facilitadores</span>
            </h1>
            <h2 className="mt-2 mb-4 text-base text-branco-100 font-normal leading-7 tracking-wide max-w-[30rem]">
              Leia atentamente as condições para inscrição, participação e uso do treinamento da CST.
            </h2>
            <div>
              <Button text="Voltar à Home" variant="outlined" onClick={() => router.push("/")} />
            </div>
          </div>
        </div>
      </BackgroundImageWithTheme>

      <div id="termos" className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 py-12">
        <div className="mb-[2.375rem]">
          <TitleDefault
            title="TERMOS DE USO DO CURSO"
            subtitle="Curso de Formação de Facilitadores da CST"
            alignment="text-center"
          />
          <p className="text-center text-sm text-cinza-900-branco mt-2">Última Atualização: 27 de novembro de 2024</p>
        </div>

        <div className="bg-branco-cinza-escuro p-6 sm:p-10 rounded-lg">
          <p className="text-lg text-cinza-900-branco mb-6 text-center">
            Bem-vinda(o)! É um prazer recebê-la(o) no treinamento da CST!
          </p>

          <div className="space-y-8 text-cinza-900-branco text-base">
            <p>
              Esta aplicação e seu conteúdo &quot;Curso de Formação de Facilitadores da CST&quot; são organizados e
              ofertados pela empresa <strong>LUMEN CIENCIA E SAUDE LTDA</strong> (CNPJ 46.474.737/0001-47). Todos os
              direitos reservados. Estes termos de uso têm por objeto definir as regras a serem seguidas para as
              inscrições, participação e utilização do conhecimento adquirido no treinamento da CST, sem prejuízo da
              aplicação da legislação vigente.
            </p>
            <p className="font-bold">
              AO SE INSCREVER NO CURSO DE FORMAÇÃO DE FACILITADORES DA CST, VOCÊ AUTOMATICAMENTE CONCORDA COM ESTES
              TERMOS DE USO, RESPONSABILIZANDO-SE INTEGRALMENTE POR TODOS E QUAISQUER ATOS PRATICADOS POR VOCÊ DURANTE O
              PROCESSO DE INSCRIÇÃO, A PARTICIPAÇÃO NO CURSO E POSTERIOR USO DO CONHECIMENTO OBTIDO NO MESMO OU EM
              POSTERIORES SERVIÇOS RELACIONADOS. CASO VOCÊ NÃO CONCORDE COM QUALQUER DOS TERMOS E CONDIÇÕES ABAIXO
              ESTABELECIDOS, VOCÊ NÃO DEVE REALIZAR A INSCRIÇÃO NO CURSO DE FORMAÇÃO DE FACILITADORES DA CST.
            </p>

            {/* Seção 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">1. OBJETIVO DO CURSO DE FORMAÇÃO DE FACILITADORES DA CST</h3>
              <p>
                <strong>1.1 Descrição:</strong> O curso de formação de facilitadores da CST é destinado a profissionais
                da área de saúde e consiste em um treinamento de 8 horas, no formato presencial ou online, com conteúdos
                que abordam:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Conceitos sobre demência e modelos de tratamento disponíveis.</li>
                <li>Fundamentos e adaptação cultural da CST no Brasil.</li>
                <li>Princípios e práticas da CST, com sessões de roleplay supervisionadas.</li>
              </ul>
              <p className="mt-2">
                <strong>1.2 Objetivo:</strong> Capacitar os participantes com conhecimento sobre demência, a eficácia da
                CST e suas sessões práticas, habilitando-os a aplicar a CST com pacientes.
              </p>
              <p className="mt-2">
                <strong>1.3 Modos de Oferta:</strong> O curso pode ocorrer de forma presencial (com local e data a serem
                confirmados) ou online (com link enviado previamente).
              </p>
            </div>

            {/* Seção 2 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">2. INSCRIÇÃO NO CURSO DE FORMAÇÃO DE FACILITADORES DA CST</h3>
              <p>
                <strong>2.1 Acesso:</strong> A inscrição pode ser feita através do site (___.com.br). No ato da
                inscrição, é necessário fornecer dados pessoais conforme nossa Política de Privacidade.
              </p>
              <p className="mt-2">
                <strong>2.2 Requisitos:</strong> Aberto a profissionais da saúde, independentemente do nível de
                escolaridade. A experiência prévia de trabalho com idosos é recomendada.
              </p>
              <p className="mt-2">
                <strong>2.3 Responsabilidade pela Conta:</strong> A inscrição é pessoal e intransferível. Em caso de
                contas fraudulentas, a LUMEN se reserva o direito de cancelamento imediato.
              </p>
            </div>

            {/* Seção 3 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">3. DIREITOS E LIMITAÇÕES DE USO DO CONTEÚDO</h3>
              <p>
                <strong>3.1 Propriedade Intelectual:</strong> Todo o material do curso, incluindo manuais, aulas e
                apresentações, é protegido por direitos autorais da Lumen Ciência e Saúde LTDA. O participante não pode
                gravar, reproduzir, distribuir, comercializar ou modificar qualquer conteúdo sem permissão prévia.
              </p>
              <p className="mt-2">
                <strong>3.2 Uso Permitido:</strong> O conhecimento adquirido destina-se ao uso profissional direto do
                participante e não permite a criação de cursos derivados ou formação de terceiros com base no conteúdo
                CST.
              </p>
              <p className="mt-2">
                <strong>3.3 Violação:</strong> A violação de direitos autorais pode acarretar sanções e penalidades
                previstas na legislação, além da exclusão do participante do curso.
              </p>
            </div>

            {/* Seção 4 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">4. SUSPENSÃO E CANCELAMENTO DO CURSO</h3>
              <p>
                <strong>4.1 Direito de Suspensão:</strong> A LUMEN pode suspender o acesso ao curso em caso de fraude ou
                uso indevido, sem direito a reembolso.
              </p>
              <p className="mt-2">
                <strong>4.2 Cancelamento pelo Contratante:</strong> A desistência do curso implica no cancelamento da
                matrícula e na aplicação de multa.
              </p>
            </div>

            {/* Seção 5 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">5. RESPONSABILIDADES DA LUMEN E DO PARTICIPANTE</h3>
              <p>
                <strong>5.1 Limitação de Responsabilidade:</strong> A LUMEN não se responsabiliza por danos diretos ou
                indiretos decorrentes do uso das informações adquiridas no curso.
              </p>
              <p className="mt-2">
                <strong>5.2 Manutenção e Segurança:</strong> O participante é responsável por manter seu dispositivo
                seguro durante o acesso ao curso online, garantindo que antivírus e firewall estejam ativos.
              </p>
              <p className="mt-2">
                <strong>5.3 Links Externos:</strong> O site do curso pode conter links para sites de terceiros, mas a
                LUMEN não se responsabiliza pelo conteúdo ou segurança desses sites.
              </p>
              <p className="mt-2">
                <strong>5.4 Custos Não Incluídos:</strong> O contratante declara sua ciência de que o presente contrato
                não abrange custos relativos a materiais (kit prático para a implementação da CST), bem como
                deslocamento, alimentação, hospedagem e congêneres.
              </p>
            </div>

            {/* Seção 6 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">6. ALTERAÇÕES NOS TERMOS DE USO</h3>
              <p>
                <strong>6.1 Modificações:</strong> A LUMEN pode atualizar estes Termos a qualquer momento para refletir
                melhorias. Os participantes serão notificados via e-mail ou pelo site do curso.
              </p>
              <p className="mt-2">
                <strong>6.2 Lei Aplicável e Foro:</strong> Estes Termos de Uso são regidos pelas leis brasileiras. Em
                caso de controvérsias, o foro da comarca do Rio de Janeiro, RJ, será competente.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button
              text="Entre em Contato"
              variant="default"
              onClick={() => window.open("mailto:treinamento@cstbrasil.com.br", "_blank")}
            />
            <Button text="Fazer Inscrição" variant="default" onClick={() => router.push("/planos")} />
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="bg-dark-900 text-branco-100 py-12">
        <div className="max-w-[82.125rem] mx-auto px-3 2sm:px-8 text-center">
          <p className="text-base">
            © 2025 CST Brasil |{" "}
            <a href="https://www.instagram.com/cstbrasil/" className="text-branco-100 underline">
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
