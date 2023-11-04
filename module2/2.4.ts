{
    // 
    interface Developer<T, K = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            price: number
        };
        smartWatch: T;
        bike? : K
    }

    type Watch = {
        brand: string;
        model: string;
        display: string
    }

    const poorDeveloper : Developer <Watch> ={
        name: 'Tareq',
        computer: {
            brand: 'Lenovo',
            model: 'K-15',
            price: 65000
        },
        smartWatch:{
            brand: 'MI',
            model: 'k2',
            display: 'OLED',
        }
    }
    
    interface RichWatch {
        brand: string;
        model: string;
        price: number;
        heartRatetrack: boolean;
    }

    interface Yamha {
        brand: string;
        engineCapacity: string;
    }

    const richDeveloper : Developer <RichWatch, Yamha> ={
        name: 'Tareq',
        computer: {
            brand: 'MAC',
            model: 'M3',
            price: 120000
        },
        smartWatch:{
            brand: 'MI',
            model: 'k2',
            price: 5000,
            heartRatetrack: true
        },
        bike: {
            brand: 'yamha',
            engineCapacity: '100cc'
        }
    }
















    // 
}