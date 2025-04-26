       // Example JavaScript code
       document.addEventListener('DOMContentLoaded', () => {
        async function fetchPikachu() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        }
    
        fetchPikachu();
        console.warn('JavaScript is loaded and running!');
    });