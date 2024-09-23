tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto':'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily:{
                Cinzel: ["Cinzel", "serif"],
                Ovo: ["Ovo", "serif"]
            },
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F'
            },
            boxShadow:{
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff'
            },
            animation:{
                spin_slow: 'spin 3s linear infinite'
            }
        }
    },
    darkMode: 'selector'
}
// This file is used to set mobile view grid templated....in html i set all grids to auto so that it automatically take screen size