import { useStore, component$, Host } from "@builder.io/qwik";
import { Logo } from "../logo/logo";

import "./global.css";

export const App = component$(() => {
  const state = useStore({ name: "World" });
  return (
    <Host class="my-app p-20">
      <Logo class="mb-10" />

      <h1 class="text-3xl mb-2">Congratulations Qwik is working!</h1>

      <p>Open the console then click in to each input.</p>

      <p><input onFocus$={() => console.log("onFocus$")} /></p>

      <p><input onFocusIn$={() => console.log("onFocusIn$")} /></p>

      <p><input onFocusin$={() => console.log("onFocusin$")} /></p>

      <p>Verify the underlying onfocusin works:</p>

      <p><input onfocusin="console.log('raw onfocusin')" /></p>
    </Host>
  );
});
