<script context="module">
	export const prerender = true;
</script>


<div class="about">
    <div class="row">
        <div class="col-xl-6 col-lg-12 profile-image">
            <img class="profile-image" src="/img/me.jpg" alt="profile"/>
        </div>
        <div class="col-xl-6 col-lg-12">
            <p class="text-center">
                Computer Science PhD graduate with an understanding of a variety of software and computing aspects.
            </p>
            <p class="text-center">
                Passionate about learning, and familiar working in Windows and Linux environments,
                Containers, Virtual Machines and shells. Strives for a principle first approach when learning,
                combined with a passion to engage in anychallenge with a 'can-do' attitude.
            </p>
        </div>
    </div>
</div>

<style lang="scss">
    .profile-image {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            $imageSize: 40rem;
            width: $imageSize;
            height: $imageSize;
            border-radius: 50%;
            border: 5px solid var(--secondary-color);
            object-fit: cover;
        }
    }
</style>
