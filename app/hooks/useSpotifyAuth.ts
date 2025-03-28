import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { discovery, SPOTIFY_CLIENT_ID, SPOTIFY_SCOPES } from 'config/authconfig';

WebBrowser.maybeCompleteAuthSession();

// ✅ This works fine — no useProxy here!
const redirectUri = AuthSession.makeRedirectUri();
console.log("Redirect URI:", redirectUri);

export function useSpotifyAuth() {
    const [request, response, promptAsyncBase] = AuthSession.useAuthRequest(
        {
            clientId: SPOTIFY_CLIENT_ID,
            scopes: SPOTIFY_SCOPES,
            redirectUri,
            usePKCE: true,
        },
        discovery
    );

    // ✅ To enable the proxy (Expo Go support), pass useProxy here only
    // @ts-ignore
    const promptAsync = () => promptAsyncBase({ useProxy: true });

    return { request, response, promptAsync };
}
