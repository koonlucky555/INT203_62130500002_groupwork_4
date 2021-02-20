const app = {
    data() {
        return {
            gall: [
                {
                    no: 0,
                    title: "haven",
                    images:
                        "https://valorantnews.in/wp-content/uploads/2020/07/Competitive-map-selection-process-is-dismissed-by-Riot-in-Valorant.png",
                    text: "Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.",
                    heart: false,
                },
                {
                    no: 1,
                    title: "ice box",
                    images:
                        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt49f5428318197010/5fab4f07c1502b76a169b4d0/Icebox_Splash_v2.jpg",
                    text: "Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.",
                    heart: false,
                },
                {
                    no: 2,
                    title: "bind",
                    images:
                        "https://trackercdn.com/ghost/images/2020/9/7174_Loading_Screen_Bind.png",
                    text: "Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.",
                    heart: false,
                },
                {
                    no: 3,
                    title: "ascent",
                    images:
                        "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/06/Valorant-Ascent.jpg?q=50&fit=crop&w=740&h=370",
                    text: "An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.",
                    heart: false,
                },
                {
                    no: 4,
                    title: "split",
                    images:
                        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltee14888179d221f8/5ee7d51725b4740c330ba55d/Loading_Screen_Split_v2.jpg",
                    text: "If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.",
                    heart: false,

                }
            ],
            form: {
                text: "",
                search: false,
            },
            modal: false,
            imageModal: "",
        };
    },
    methods: {
        like(task) {
            this.gall[task.no].heart = !this.gall[task.no].heart;
            console.log('Like no :' + task.no)
            console.log('Like :' + task.img)
        },
        search() {
            this.form.search = !this.form.search;
        },
        cancel() {
            (this.form.search = !this.form.search), (this.form.text = "");
        },
        toggleModal(images) {
            this.modal = !this.modal;
            this.imageModal = this.gall[images.no].images;
        },
    },
    computed: {
        countLike() {
            return this.gall.filter((i) => i.heart).length;
        },
        searching() {
            return this.gall.filter((member) => {
                return member.title
                    .toLowerCase()
                    .includes(this.form.text.toLowerCase());
            });
        },
        countUndone() {
            return this.gall.length;
        },
    },
};

Vue.createApp(app).mount("#app");

