<script>
    const skill_icon_dir = '/img/skill_icons';
    const skills = [
        { icon: 'node_logo.png', text: 'Node' },
        { icon: 'ts_logo.png', text: 'JS/TS' },
        { icon: 'vue_logo.png', text: 'Vue' },
        { icon: 'svelte_logo.png', text: 'Svelte' },
        { icon: 'sass_logo.png', text: 'Sass' },
        { icon: 'php_logo.png', text: 'PHP' },
        { icon: 'github_logo.png', text: 'Git' },
        { icon: 'docker_logo.png', text: 'Docker' },
        { icon: 'mysql_logo.png', text: 'MySQL' },
        { icon: 'symfony_logo.png', text: 'Symfony' },
        { icon: 'cpp_logo.png', text: 'C++' },
        { icon: 'java_logo.png', text: 'Java' },
        { icon: 'nginx_logo.png', text: 'NGINX' },
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
            width: 25rem;
            min-height: 7rem;
            padding: .3rem;
            margin: 1rem;
            margin-bottom: 3rem;

            border-radius: 15px;
            border: 5px solid var(--secondary-color);
            background-color: var(--background-opacity);

            img {
                width: 100%;
                height: 100%;
                border-radius: var(--border-radius);
                object-fit: contain;
            }

            &-text {
                color: var(--text-color);
                margin-top: 0.3rem;
            }
        }
    }
</style>