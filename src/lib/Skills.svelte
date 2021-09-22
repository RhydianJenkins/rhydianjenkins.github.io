<script>
    const skill_icon_dir = '/img/skill_icons';
    const skills = [
        { icon: 'placeholder.jpg', text: 'Node' },
        { icon: 'placeholder.jpg', text: 'Javascript' },
        { icon: 'placeholder.jpg', text: 'Vue' },
        { icon: 'placeholder.jpg', text: 'Svelte' },
        { icon: 'placeholder.jpg', text: 'sass' },
        { icon: 'placeholder.jpg', text: 'PHP' },
        { icon: 'placeholder.jpg', text: 'Java' },
        { icon: 'placeholder.jpg', text: 'DevOps' },
        { icon: 'placeholder.jpg', text: 'Docker' },
        { icon: 'placeholder.jpg', text: 'SQL / GraphQL' },
        { icon: 'placeholder.jpg', text: 'Laravel' },
        { icon: 'placeholder.jpg', text: 'Symfony / Doctrine' },
        { icon: 'placeholder.jpg', text: 'Agile Methodologies' },
        { icon: 'placeholder.jpg', text: 'Git' },
        { icon: 'placeholder.jpg', text: 'Unit testing' },
        { icon: 'placeholder.jpg', text: 'C++' },
        { icon: 'placeholder.jpg', text: 'ROS' },
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