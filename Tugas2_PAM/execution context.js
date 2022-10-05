

// contoh execution context

function nama() {
            console.log('Saya Sam');
            function umur() {
                console.log('Umur 25');
                function sayHi() {
                    console.log('Hello!!');
                }
                sayHi();
            }
            umur();
        }
        nama();