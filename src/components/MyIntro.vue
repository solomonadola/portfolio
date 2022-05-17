<template>
    <div class="" style="height: 100vh; ">
        <particles-bg type="lines" :bg="true" />
        <div class="pt-10 flex h-full w-full justify-center md:justify-end md:absolute  right-10" data-aos="zoom-in-up">
            <div>
                <img class="rounded-full" src="../assets/images/profilepic.png" alt="" width="500" height="500">
            </div>
        </div>
        <div class="absolute z-5 top-1/2 md:top-1/4 ml-6 md:translate-x-1/2">
            <div class="flex flex-col space-y-4 font-poppins ">
                <h3>HEY! THIS IS </h3>
                <h1 class="uppercase "
                    style="color: transparent; -webkit-text-stroke: 1px #22852e; padding-right: 25px; "
                    data-aos="zoom-out-left">Solomon A.</h1>
                <h1>
                    <span class="text-green-700 text-5xl"  >
                        {{ typeValue }}
                    </span>
                    <span class="inline-block ml-1 w-1 bg-green-700 cursor" :class="{ 'typing': typingStatus }">
                        &nbsp;
                    </span>
                </h1>
            </div>

        </div>
    </div>
</template>

<script>
import {
    ParticlesBg
} from "particles-bg-vue";
export default {
    name: "App",
    data() {
        return {
            typeValue: '',
            typeStatus: false,
            typeArray: ['a web developer', '<front-end', 'back-end/>', 'freelancer'],
            typingSpeed: 100,
            erasingSpeed: 100,
            newTextDelay: 1000,
            typeArrayIndex: 0,
            charIndex: 0
        }
    },
    methods: {
        typeText() {
            if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                if (!this.typeStatus)
                    this.typeStatus = true;
                this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            } else {
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay);
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.typeStatus)
                    this.typeStatus = true;
                this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            } else {
                this.typeStatus = false;
                this.typeArrayIndex += 1;
                if (this.typeArrayIndex >= this.typeArray.length)
                    this.typeArrayIndex = 0;
                setTimeout(this.typeText, this.typingSpeed + 1000);
            }
        }
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    },

    components: {
        ParticlesBg
    }
};
</script>

<style scoped>
h1 {
    position: relative;
    color: #EEEEEE;
    font-weight: 800;
    font-size: 4rem;
    padding: 0;
    margin: 0;
    line-height: 1;
    text-shadow: 0 0 30px #000155;
}

h3 {
    font-weight: 200;
    font-size: 20px;
    padding: 0;
    margin: 0;
    line-height: 1;
    color: #EEEEEE;
    letter-spacing: 2px;
    text-shadow: 0 0 30px #000155
}

span.cursor {
    animation: cursorblink 1s infinite;
}

span.typing {
    animation: none;
}

@keyframes cursorblink {
    49% {
        background-color: #22852e;
    }

    50% {
        background-color: transparent;
    }

    99% {
        background-color: transparent;
    }

}
</style>
