<script>
    const skill_icon_dir = '/img/skill_icons';
    const skills = [
        { icon: '', text: 'Node' },
        { icon: '', text: 'Javascript' },
        { icon: '', text: 'Vue' },
        { icon: '', text: 'Svelte' },
        { icon: '', text: 'sass' },
        { icon: '', text: 'PHP' },
        { icon: '', text: 'Java' },
        { icon: '', text: 'DevOps' },
        { icon: '', text: 'Docker' },
        { icon: '', text: 'SQL / GraphQL' },
        { icon: '', text: 'Laravel' },
        { icon: '', text: 'Symfony / Doctrine' },
        { icon: '', text: 'Agile Methodologies' },
        { icon: '', text: 'Git' },
        { icon: '', text: 'Unit testing' },
        { icon: '', text: 'C++' },
        { icon: '', text: 'ROS' },
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