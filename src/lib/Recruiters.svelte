<script context="module">
	export const prerender = true;
</script>

<script>
    export let email;
</script>

<div class="recruiters">
    <p>
        I am always open to hearing about potential roles that might interest me.
        If the role is fully remote and touches a wide technology stack (not just the things on my CV!), I'd love to hear about it.
    </p>
    <p>
        Please send me an email at <a href="mailto:{ email }" target="blank">{email}</a> with any positions you'd like to discuss.
        While I do not respond to all I do peruse them and appreciate the consideration.
    </p>
</div>

<style lang="scss">
    .recruiters {
        p {
            text-align: center;
        }

        a {
            &:hover {
                color: var(--accent-color);

                &:before {
                    left: 0;
                    margin: 0 auto;
                    width: 90%;
                }
            }
        }
    }
</style>
