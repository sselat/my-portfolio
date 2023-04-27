<template>
  <q-page class="flex justify-center">
    <q-card class="my-card q-pa-xs q-ma-md bg-primary">
      <q-img src="/foto-perfil.jpg">
        <div class="absolute-bottom text-h6 text-center">
          Tales Beraldo de Albuquerque
        </div>
      </q-img>
      <q-tabs
        v-model="section"
        dense
        class="text-white"
        active-bg-color="secondary"
        indicator-color="white"
        align="justify"
        narrow-indicator
      >
        <q-tab
          name="sobre"
          label="Sobre mim"
        />
        <q-tab
          name="skills"
          label="Habilidades"
        />
      </q-tabs>
      <q-tab-panels
        v-model="section"
        animated
      >
        <q-tab-panel name="sobre">
          <q-card-section class="about-section bg-white text-left">
            <p class="text-center text-subtitle2">
              Sul Mato-grossense<br />
              <strong class="text-secondary">{{ idade }}</strong> anos, casado e
              pai de uma princesa de {{ idadeLiz }}
              {{ idadeLiz > 1 ? 'anos' : 'ano' }}.
            </p>
            <p class="text-secondary text-subtitle2">Quem é Tales?</p>
            <p>
              Sou um cara bem-humorado, algumas vezes criativo e outras vezes
              muito criativo. Sou do tipo de pessoa que gosta de causar risadas
              e momentos de descontração entre meus amigos e colegas, quando não
              preciso utilizar o
              <strong class="text-secondary">modo sério</strong>, é claro!
            </p>

            <p class="text-secondary text-subtitle2">Gostos pessoais</p>
            <p>
              Desde a minha infância, sempre fui apaixonado por computadores e
              tecnologia. O meu principal Hobby são jogos! Gosto particularmente
              dos jogos single-player, e estou sempre migrando de um estilo para
              o outro... Mas a paixão por jogos com estilo retrô, como Stardew
              Valley e Terraria, não mudam.
            </p>
            <p class="text-secondary text-subtitle2">Carreira</p>
            <p>
              Trabalhei como supervisor de operações em um CallCenter durante 6
              anos, onde me desenvolvi como líder, gestor e principalmente,
              pessoa.
            </p>
            <p>
              Quando comecei na área, eu tinha vergonha até de pedir pizza pelo
              telefone. E hoje estou casado, com uma filha, e escrevendo essas
              coisas aqui... Então não dá pra dizer que não evoluí, né?
            </p>
            <p>
              Voltei a me dedicar à programação em 2022, tendo foco inicial no
              desenvolvimento web, e hoje trabalho como programador junior em
              uma pequena empresa de desenvolvimento daqui de Campo Grande - MS.
              Agora, estou animado para continuar aprendendo e crescendo como
              desenvolvedor!
            </p>
          </q-card-section>
        </q-tab-panel>
        <q-tab-panel name="skills">
          <q-card-section class="about-section bg-white text-left">
            <p class="text-center text-subtitle1 text-secondary">Habilidades</p>
            <p class="text-secondary text-subtitle2">Softskills</p>
            <q-list separator>
              <q-item
                clickable
                ripple
              >
                <q-item-section
                  side
                  top
                >
                  <q-icon
                    name="groups"
                    color="secondary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Liderança</q-item-label>
                  <q-item-label caption
                    >Experiência como supervisor de operações em CallCenter,
                    liderando equipes de até 30 pessoas e atingindo metas de
                    desempenho mensais.</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
              >
                <q-item-section
                  side
                  top
                >
                  <q-icon
                    name="record_voice_over"
                    color="secondary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Comunicação</q-item-label>
                  <q-item-label caption
                    >Habilidade em comunicação com clientes e colegas de
                    trabalho, recebendo elogios constantes por minha habilidade
                    em explicar conceitos técnicos de maneira clara e
                    compreensível.
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
              >
                <q-item-section
                  side
                  top
                >
                  <q-icon
                    name="flaky"
                    color="secondary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Tomada de decisão</q-item-label>
                  <q-item-label caption
                    >Habilidade em tomar decisões rapidamente e sob pressão,
                    garantindo a continuidade da operação mesmo em situações
                    críticas.
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
              >
                <q-item-section
                  side
                  top
                >
                  <q-icon
                    name="diversity_2"
                    color="secondary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Trabalho em equipe</q-item-label>
                  <q-item-label caption
                    >Habilidade em trabalhar efetivamente em equipe e resolver
                    conflitos de maneira colaborativa, para que todos alcançemos
                    os mesmos objetivos.
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <!-- <ul class="softskills-list">
              <li>
                Trabalho em equipe: Demonstrada em minha habilidade em trabalhar
                efetivamente em equipe e resolver conflitos de maneira
                colaborativa.
              </li>
            </ul> -->
            <p class="text-secondary text-subtitle2">Hardskills</p>
          </q-card-section>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script setup>
import {ref} from 'vue'

const idade = ref(27)
const idadeLiz = ref(1)
const section = ref('sobre')

const calcularIdade = () => {
  const dataNascimento = new Date('1995-07-27')
  const diferencaTempo = new Date() - dataNascimento
  idade.value = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24 * 365.25))
}
const calcularIdadeLiz = () => {
  const dataNascimento = new Date('2021-08-14')
  const diferencaTempo = new Date() - dataNascimento
  idadeLiz.value = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24 * 365.25))
}
calcularIdade()
calcularIdadeLiz()
</script>
<style scoped>
*::-webkit-scrollbar {
  width: 8px;
}
*::-webkit-scrollbar-thumb {
  background-color: var(--q-secondary);
  border-radius: 20px;
  border: 1px solid #fff;
}
*::-webkit-scrollbar-track {
  background: #f1f0f0;
  border-radius: 20px;
}
.my-card {
  width: 50%;
  max-width: 470px;
  height: fit-content;
  max-height: 90vh;
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.63);
}
.about-section {
  overflow: auto;
  max-height: 30vh;
}

@media screen and (max-width: 500px) {
  .my-card {
    width: 300px;
  }
  .about-section {
    max-height: 45vh;
  }
}
</style>
