<script>
    const skill_icon_dir = '/img/skill_icons';
    const skills = [
        { icon: 'node_logo.png', text: 'Node', value: '95' },
        { icon: 'ts_logo.png', text: 'Java/TypeScript', value: '90' },
        { icon: 'vue_logo.png', text: 'Vue', value: '90' },
        { icon: 'svelte_logo.png', text: 'Svelte', value: '40' },
        { icon: 'sass_logo.png', text: 'Sass', value: '85' },
        { icon: 'php_logo.png', text: 'PHP', value: '85' },
        { icon: 'github_logo.png', text: 'Git', value: '90' },
        { icon: 'docker_logo.png', text: 'Docker', value: '75' },
        { icon: 'mysql_logo.png', text: 'MySQL', value: '60' },
        { icon: 'symfony_logo.png', text: 'Symfony', value: '65' },
        { icon: 'java_logo.png', text: 'Java', value: '75' },
        { icon: 'cpp_logo.png', text: 'C++', value: '50' },
    ].sort((s1, s2) => s2.value - s1.value); // put highest values top
</script>

<div class="skills">
    {#each skills as skill}
        <div class="skill">
            <img src="{skill_icon_dir}/{skill.icon}" alt="{ skill.text }"/>
            <div class="progress shadow">
                <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style="width: {skill.value}%"
                    aria-valuenow="{ skill.value }"
                    aria-valuemin="0"
                    aria-valuemax="100"
                />
            </div>
            <div class="background-effect"/>
        </div>
    {/each}
</div>

<style lang="scss">
    .skills {
        display: flex;
        align-items: center;
        flex-direction: column;

        .skill {
            // border: 2px solid var(--background-opacity);
            display: flex;
            align-items: center;
            width: 100%;
            padding: 2rem;
            margin-bottom: 1rem;
            border-radius: 0.5rem;
            transition: all 0.5s ease;

            img {
                width: 5rem;
                height: 5rem;
            }

            .progress {
                width: 100%;
                margin-left: 3rem;
                height: 2rem;
                border-radius: 0.5rem;
                background-color: var(--secondary-color);

                .progress-bar {
                    background-color: var(--accent-color);
                }
            }

            &:hover {
                transform: scale(1.01);
                box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 10px;

                .background-effect {
                    position: absolute;
                    z-index: -1;
                    bottom: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    background-color: var(--background-opacity);
                    animation: popBackground 0.2s ease;
                    border-radius: 0.5rem;
                }

                @keyframes popBackground {
                    0% {
                        height: 20%;
                        border-top-left-radius: 50%;
                        border-top-right-radius: 50%
                    }

                    50% {
                        height: 50%;
                        border-top-left-radius: 75%;
                        border-top-right-radius: 75%
                    }

                    75% {
                        height: 75%;
                        border-top-left-radius: 85%;
                        border-top-right-radius: 85%
                    }

                    100% {
                        height: 100%;
                        border-top-left-radius: 100%;
                        border-top-right-radius: 100%
                    }
                }
            }
        }
    }
</style>