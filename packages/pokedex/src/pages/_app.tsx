import { Provider } from "react-redux";
import { wrapper } from "../../store/store";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default MyApp;
