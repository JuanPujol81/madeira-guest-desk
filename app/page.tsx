export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Navegação principal">
        <a className="brand" href="#top" aria-label="Madeira Guest Desk — início">
          <span className="brandMark">MG</span><span>Madeira Guest Desk</span>
        </a>
        <a className="navCta" href="#piloto">Pedir diagnóstico</a>
      </nav>
      <section className="hero shell" id="top">
        <div className="eyebrow">Para alojamentos independentes na Madeira</div>
        <h1>Respostas melhores aos hóspedes. <em>Sem outra plataforma complicada.</em></h1>
        <p className="heroCopy">Configuramos um sistema assistido por IA que transforma emails e perguntas repetidas em respostas rápidas, consistentes e multilingues — sempre com aprovação humana.</p>
        <div className="heroActions">
          <a className="button primary" href="#piloto">Candidatar o meu alojamento</a>
          <a className="button secondary" href="#como-funciona">Ver como funciona</a>
        </div>
        <p className="microcopy">Piloto fundador: configuração sem custo · sem contrato · 3 vagas</p>
        <div className="workflow" id="como-funciona" aria-label="Fluxo do serviço">
          <article><span>01</span><strong>Chega uma mensagem</strong><p>Email em português, inglês, espanhol ou outro idioma.</p></article>
          <div className="flowArrow" aria-hidden="true">→</div>
          <article><span>02</span><strong>Recebe um rascunho</strong><p>Baseado apenas nas regras e informações do alojamento.</p></article>
          <div className="flowArrow" aria-hidden="true">→</div>
          <article><span>03</span><strong>A equipa decide</strong><p>Edita, aprova ou encaminha. Nada é enviado sozinho.</p></article>
        </div>
      </section>
      <section className="proofStrip">
        <div className="shell proofGrid">
          <div><strong>€0</strong><span>configuração no piloto</span></div>
          <div><strong>4 idiomas</strong><span>no pacote inicial</span></div>
          <div><strong>Humano</strong><span>aprova cada resposta</span></div>
          <div><strong>7 dias</strong><span>para testar o fluxo</span></div>
        </div>
      </section>

      <section className="section shell" id="problema">
        <div className="sectionLabel">O problema</div>
        <div className="split">
          <h2>O hóspede espera rapidez. A equipa já tem trabalho suficiente.</h2>
          <div className="bodyCopy">
            <p>As mesmas perguntas chegam todos os dias: check-in, estacionamento, pequeno-almoço, transfer, cancelamento e disponibilidade.</p>
            <p>As grandes plataformas acrescentam custo, configuração e formação. O Madeira Guest Desk começa pelo canal que já utiliza e entrega rascunhos prontos a rever.</p>
          </div>
        </div>
      </section>

      <section className="darkSection" id="oferta">
        <div className="section shell">
          <div className="sectionLabel light">Piloto fundador</div>
          <div className="offerGrid">
            <div>
              <p className="kicker">7 dias para provar valor</p>
              <h2>Comece pequeno.<br/>Continue apenas se ajudar.</h2>
              <p className="darkCopy">Configuramos uma caixa de teste, criamos a base de respostas do seu alojamento e acompanhamos uma semana de utilização. Sem acesso à caixa real no primeiro dia.</p>
            </div>
            <div className="priceCard">
              <div className="price"><sup>€</sup>49</div>
              <p>pagamento único · dedutível no primeiro mês</p>
              <ul>
                <li>Diagnóstico de 30 minutos</li>
                <li>Até 25 perguntas e respostas aprovadas</li>
                <li>Português, inglês, espanhol e francês</li>
                <li>Caixa de teste e formação da equipa</li>
                <li>Revisão dos resultados ao 7.º dia</li>
              </ul>
              <a
                className="button lime"
                href="https://www.paypal.com/ncp/payment/CXXZWHZK2A2M6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pagar piloto de €49 com PayPal
              </a>
              <small>Depois do piloto: €99/mês. Pode cancelar antes de renovar.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="seguranca">
        <div className="sectionLabel">Controlo e confiança</div>
        <div className="cards">
          <article><b>01</b><h3>Nada sai sem aprovação</h3><p>O sistema prepara. Uma pessoa verifica, edita e decide.</p></article>
          <article><b>02</b><h3>Regras do seu alojamento</h3><p>Responde com informação aprovada, não com promessas inventadas.</p></article>
          <article><b>03</b><h3>Começo isolado e reversível</h3><p>Primeiro testamos com mensagens fictícias e uma caixa dedicada.</p></article>
          <article><b>04</b><h3>Casos sensíveis são escalados</h3><p>Pagamentos, conflitos, reembolsos e exceções ficam para a equipa.</p></article>
        </div>
      </section>

      <section className="section shell faq" id="faq">
        <div className="sectionLabel">Perguntas frequentes</div>
        <details><summary>Isto substitui a receção?</summary><p>Não. Reduz o tempo gasto a escrever respostas repetidas. A equipa mantém sempre a decisão final.</p></details>
        <details><summary>Preciso mudar de email ou PMS?</summary><p>Não para o piloto. Começamos numa caixa de teste. Qualquer ligação ao email real só acontece depois da sua aprovação e de uma revisão de privacidade.</p></details>
        <details><summary>O sistema pode confirmar preços ou disponibilidade?</summary><p>Não sem uma fonte autorizada e atualizada. No piloto, esses pedidos são encaminhados para uma pessoa.</p></details>
        <details><summary>Que dados ficam guardados?</summary><p>No teste usamos mensagens fictícias ou anonimizadas. Antes de trabalhar com dados reais, definimos acessos, retenção, eliminação e responsabilidades num acordo escrito.</p></details>
        <details><summary>Há contrato de permanência?</summary><p>Não. O piloto é único. A subscrição mensal só começa com confirmação expressa e pode ser cancelada antes da próxima renovação.</p></details>
      </section>

      <section className="ctaSection" id="piloto">
        <div className="shell ctaGrid">
          <div>
            <div className="sectionLabel light">Próximo passo</div>
            <h2>Veja se faz sentido antes de ligar qualquer sistema real.</h2>
          </div>
          <div className="ctaBox">
            <p>Peça um diagnóstico de 30 minutos. Receberá um plano de teste com o fluxo, limites e custo total por escrito.</p>
            <a
              className="button lime"
              href="mailto:hello@madeiraguestdesk.pt?subject=Diagn%C3%B3stico%20Madeira%20Guest%20Desk"
            >
              Pedir diagnóstico
            </a>
            <a
              href="https://www.paypal.com/ncp/payment/CXXZWHZK2A2M6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Já decidiu? Pagar o piloto de €49 com PayPal
            </a>
            <small>Sem newsletters. Sem mensagens não solicitadas.</small>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="brandMark">MG</span><span>Madeira Guest Desk</span></div>
        <p>Serviço em fase piloto · Funchal, Madeira</p>
        <div><a href="#faq">FAQ</a><a href="#piloto">Contacto</a></div>
      </footer>
    </main>
  );
}
