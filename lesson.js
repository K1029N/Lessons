new Vue({
    el: '#app',
    data: {
        lessons: [{
                "title": "Maths",
                "location": "London",
                "price": 100,
                "image": "images/maths.jpg",
                "space": 5
            },

            {
                "title": "Literature",
                "location": "Liverpool",
                "price": 80,
                "image": "images/literature.png",
                "space": 5
            },

            {
                "title": "Computer Science",
                "location": "London",
                "price": 130,
                "image": "images/cs.png",
                "space": 5
            },
                  
            {
                "title": "Physics",
                "location": "London",
                "price": "120",
                "image": "images/physics.png",
                "space": 5
            },

            {
                "title": "Chemistry",
                "location": "London",
                "price": 120,
                "image": "images/chemistry.png",
                "space": 5
            },
                  
            {
                "title": "Biology",
                "location": "London",
                "price": 120,
                "image": "images/biology.jpg",
                "space": 5
            },

            {
                "title": "History",
                "location": "Liverpool",
                "price": "90",
                "image": "images/history.png",
                "space": 5
            },

            {
                "title": "Geography",
                "location": "Manchester",
                "price": "100",
                "image": "images/geography.png",
                "space": 5
            },

            {
                "title": "Art",
                "location": "Liverpool",
                "price": "80",
                "image": "images/art.jpg",
                "space": 5
            }
                  
            {
                "title": "Sports",
                "location": "Manchester",
                "price": 90,
                "image": "images/sports.png",
                "space": 5
            },

        ],
        shoppingCart: [],
        showLessons: true,
        booking: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
        }
    },
    methods: {
        addToCart(lesson, cart) {
            if (lesson.space > 0) {
                lesson.space -= 1
                cart.push({ title: lesson.title, location: lesson.location, price: lesson.price });
            }
        },

        showCheckout() {
            this.showLessons = this.showLessons ? false : true;
        },

        submitForm() {
            alert("Booking Succesful")
        },

        remove(index) {
            this.$delete(this.shoppingCart, index)
        }
    },
    computed: {
        cartItemCount: function() {
            return this.shoppingCart.length || '';
        },

        canCheckOut: function() {
            return this.cartItemCount >= 1;
        },

        canBook() {
            return this.booking.firstName != "" &&
                this.booking.lastName != "" &&
                this.booking.phoneNumber != "";
        }

    }


});
