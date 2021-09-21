<script>
    const skill_icon_dir = '/img/skill_icons';
    const skills = [
        { icon: 'face1.jpg', text: 'Node' },
        { icon: 'face1.jpg', text: 'Javascript' },
        { icon: 'face1.jpg', text: 'Vue' },
        { icon: 'face1.jpg', text: 'Svelte' },
        { icon: 'face1.jpg', text: 'sass' },
        { icon: 'face1.jpg', text: 'PHP' },
        { icon: 'face1.jpg', text: 'Java' },
        { icon: 'face1.jpg', text: 'DevOps' },
        { icon: 'face1.jpg', text: 'Docker' },
        { icon: 'face1.jpg', text: 'SQL / GraphQL' },
        { icon: 'face1.jpg', text: 'Laravel' },
        { icon: 'face1.jpg', text: 'Symfony / Doctrine' },
        { icon: 'face1.jpg', text: 'Agile Methodologies' },
        { icon: 'face1.jpg', text: 'Git' },
        { icon: 'face1.jpg', text: 'Unit testing' },
        { icon: 'face1.jpg', text: 'C++' },
        { icon: 'face1.jpg', text: 'ROS' },
    ];
</script>

<div class="skills">
    {#each skills as skill}
        <div class="skill">
            <img src="{skill_icon_dir}/{skill.icon}" alt="{ skill.text }"/>
            <div class="skill-text">{ skill.text }</div>
        </div>
    {/each}
</div>

<style lang="scss">
    .skills {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .skill {
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 7em;
            height: 7em;
            padding: .3em;
            margin: 1em;
            margin-bottom: 3em;

            border-radius: var(--border-radius);
            background-color: var(--background-opacity);

            img {
                width: 100%;
                height: 100%;
                border-radius: var(--border-radius);
            }

            &-text {
                color: var(--text-color);
                margin-top: 0.3em;
            }
        }
    }
</style>