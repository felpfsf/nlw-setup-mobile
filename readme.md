# NLW Setup

## Como clonar e executar esse projeto

Até o momento esse projeto está em desenvolvimento

Git Clone `git clone https://github.com/felpfsf/nlw-setup-mobile.git`

No diretório execute o comando `yarn` para instalar as dependências.

Para executar digite o comando `expo start`.

## Anotações Gerais

### Iniciando o projeto

- [ ] **`yarn add global expo-cli`** - Para instalar globalmente a Expo CLI
- [ ] **`where expo-cli`** e **`expo --version`** - O primeiro comando fornece o local onde foi instalado o expo cli e o segundo comando retorna a versão da expo cli instalada.
- [ ] **`expo login`** - Após a instalação é necessário realizar o login, para isso execute o comando e forneça os dados necessários no prompt.

- [ ] **`yarn create expo-app <nomedoprojeto> --template`** - Cria um projeto ReactNative com o `expo`, a flag `template` serve para escolher o modelo de projeto, no caso este projeto iniciou como `Blank TypeScript`.
- [ ] **`expo install expo-font @expo-google-fonts/inter`** - Instala o pacote de font `Inter`
- [ ] Para carregar as fonts na aplicação é necessário importa-las, no caso será feito em App.tsx

```js
import {
  useFonts,
  Inter_400Regular
} from '@expo-google-fonts/inter'
```

Em App carregar as fonts em **`fontsLoaded`** através do **`hook`** **`useFonts`**
Exemplo:
**`const [fontsLoaded] = useFonts({Inter_400Regular})`**

Adicionar uma condicional que impede a execução enqto as fonts não forem carregadas, no caso foi usado um component de Loading com um spinner para ser exibido:

```js
if(!fontsLoaded){
  return <Loading/>
}
```

Para importar no estilo basta adicionar o nome da font na propriedade fontFamily, exemplo:
**`<Text style={{fontFamily:"Inter_600SemiBold"}}>Exemplo</Text>`**
