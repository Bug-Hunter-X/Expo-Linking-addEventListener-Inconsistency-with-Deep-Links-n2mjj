import * as Linking from 'expo-linking';

// ... other imports

function handleDeepLink(url) {
  // Process the deep link URL here
  console.log('Deep link received:', url);
  // ... your logic to handle the deep link ...
}

export default function App() {
  useEffect(() => {
    Linking.getInitialURL().then(url => {
      if(url) {
        handleDeepLink(url);
      }
    });

    const subscription = Linking.addEventListener('url', (event) => {
      handleDeepLink(event.url);
    });

    return () => subscription.remove();
  }, []);

  // ... rest of your app code ...
}

