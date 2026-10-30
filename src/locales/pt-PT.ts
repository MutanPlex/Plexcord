/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import type enTranslations from "./en-US";
import type { MatchStructure } from "./types";

const translations: MatchStructure<typeof enTranslations> = {
    settings: {
        title: "Definições",
        language: {
            selector: {
                label: "Idioma",
                description: "Selecione o seu idioma preferido para o Plexcord.",
                placeholder: "Selecionar Idioma"
            }
        },
        location: {
            label: "Localização das Definições",
            description: "Onde colocar a secção de definições do Plexcord",
            top: "No topo",
            nitro: {
                above: "Acima da secção Nitro",
                below: "Abaixo da secção Nitro"
            },
            activity: {
                above: "Acima das Definições de Atividade",
                below: "Abaixo das Definições de Atividade"
            },
            bottom: "No fundo"
        },
        switches: {
            useQuickCss: {
                label: "Ativar CSS Personalizado",
                description: "Aplica o teu QuickCSS configurado"
            },
            enableReactDevtools: {
                label: "Ativar React Developer Tools",
                description: "Útil sobretudo para programadores de plugins. Ignora se não souberes o que é"
            },
            mainWindowFrameless: {
                label: "Desativar a Moldura da Janela Principal",
                description: "Remover a moldura nativa da janela para um aspeto mais limpo. Ainda pode mover a janela arrastando a área da barra de título."
            },
            frameless: {
                label: "Desativar a moldura da janela",
                description: "Remover a moldura nativa da janela para um aspeto mais limpo. Ainda pode mover a janela arrastando a área da barra de título."
            },
            nativeTitleBar: {
                label: "Usar a barra de título nativa do Windows em vez da personalizada do Discord",
                description: "Substituir a barra de título personalizada do Discord pela barra de título padrão do Windows. Isto pode melhorar a compatibilidade com algumas ferramentas de gestão de janelas."
            },
            noRoundCorners: {
                label: "Desativar cantos arredondados da janela",
                description: "Torna os cantos da janela do Discord quadrados em vez de arredondados."
            },
            transparent: {
                label: "Ativar transparência da janela",
                description: "Tornar a janela do Discord transparente. É necessário um tema que suporte transparência, caso contrário isto não fará nada.",
                isWindows: "Isto impedirá que a janela seja redimensionada e evita que a possa ajustar às extremidades do ecrã.",
                notWindows: "Isto impedirá que a janela seja redimensionada."
            },
            winCtrlQ: {
                label: "Registar Ctrl+Q como atalho para fechar o Discord (Alternativa ao Alt+F4)",
                description: "Adicionar Ctrl+Q como um atalho de teclado para fechar o Discord. Isto oferece uma alternativa ao Alt+F4 para fechar rapidamente a aplicação."
            },
            disableMinSize: {
                label: "Desativar tamanho mínimo da janela",
                description: "Permite redimensionar a janela para qualquer tamanho, mesmo inferior ao tamanho mínimo do Discord"
            }
        },
        quickActions: {
            title: "Ações Rápidas",
            description: "Ações comuns que poderá querer realizar. Estes atalhos dão-lhe acesso rápido a funcionalidades frequentemente utilizadas sem navegar pelos menus.",
            notificationLog: "Registo de Notificações",
            editQuickCSS: "Editar QuickCSS",
            relaunchDiscord: "Reiniciar Discord",
            openSettingsFolder: "Abrir Pasta de Definições",
            viewSourceCode: "Ver Código Fonte"
        },
        specialCards: {
            donations: {
                title: "Doações",
                subtitle: "Obrigado por doar!",
                description: "Pode gerir as suas vantagens a qualquer momento enviando uma mensagem para @mutanplex.",
                button: "Doar",
                invite: "Junte-se ao nosso Discord",
                invalid: "Link de convite inválido ou expirado."
            },
            supportProject: {
                title: "Apoiar o Projeto",
                description: "Por favor, considere apoiar o desenvolvimento do Plexcord fazendo uma doação!"
            },
            contributions: {
                title: "Contribuições",
                subtitle: "Obrigado por contribuir!",
                description: "Como contribuiu para o Plexcord, agora tem um novo emblema porreiro!",
                buttonTitle: "Veja no que contribuiu"
            }
        },
        settingsSection: {
            title: "Definições",
            description: "Configure como o Plexcord se comporta e se integra com o Discord. Estas definições afetam a aparência e o comportamento do cliente Discord.",
            hintParts: {
                prefix: "Pode personalizar onde esta secção de definições aparece no menu de definições do Discord configurando o {{pluginLink}}",
                linkText: "Plugin de Definições"
            }
        },
        notifications: {
            title: "Notificações",
            description: "Configure como o Plexcord gere as notificações. Pode personalizar quando e como recebe alertas, ou ver um histórico de notificações anteriores.",
            settings: "Definições de Notificação",
            viewLog: "Ver Registo de Notificações",
            permissions: {
                denied: {
                    title: "Permissão de Notificação de Desktop Negada",
                    label: "Negou as permissões de notificação. As notificações de desktop não irão funcionar!"
                }
            },
            style: {
                label: "Estilo de Notificações",
                description: "Alguns plugins podem mostrar-lhe notificações. Estas apresentam-se em dois estilos:",
                plexcord: "Notificações Plexcord",
                plexcordDesc: "Estas são notificações dentro da aplicação",
                desktop: "Notificações de Desktop",
                desktopDesc: "Notificações nativas do sistema (como quando recebe um ping)",
                onlyWhenNotFocused: "Usar notificações de Desktop apenas quando o Discord não estiver focado",
                always: {
                    desktop: "Usar sempre notificações de Desktop",
                    plexcord: "Usar sempre notificações Plexcord"
                }
            },
            positions: {
                label: "Posição das Notificações",
                right: {
                    bottom: "Canto Inferior Direito",
                    top: "Canto Superior Direito",
                },
                left: {
                    bottom: "Canto Inferior Esquerdo",
                    top: "Canto Superior Esquerdo",
                }
            },
            missed: {
                label: "Contagem de Notificações Perdidas",
                description: "Ao voltar ao Discord, uma notificação aparecerá com o número de alertas que perdeu",
                whileYou: "Enquanto esteve fora",
                count: "Recebeu {{count}} notificação{{s}}",
                s: "es"
            },
            timeout: {
                label: "Tempo Limite de Notificação",
                description: "O tempo (em segundos) que as notificações permanecerão no ecrã antes de desaparecerem automaticamente"
            },
            logLimit: {
                label: "Limite do Registo de Notificações",
                description: "O número máximo de notificações a manter no registo antes das antigas serem removidas. Defina como {{disable}} para desativar o registo e {{unlimited}} para nunca remover automaticamente as antigas"
            },
            opacity: {
                label: "Opacidade das Notificações",
                description: "A opacidade das notificações dentro da aplicação"
            },
            maxNotifications: {
                label: "Máximo de Notificações",
                description: "Número máximo de notificações apresentadas em simultâneo"
            },
            behavior: {
                label: "Comportamento das Notificações",
            },
            disableInStreamerMode: {
                label: "Desativar em Modo de Streamer",
                description: "Desativar notificações enquanto estiver em modo de streamer"
            },
            renderImages: {
                label: "Renderizar Imagens",
                description: "Renderizar imagens nas notificações"
            },
            streamingTreatment: {
                label: "Tratamento em Transmissão",
                description: "Como tratar as notificações enquanto partilha o seu ecrã",
                normal: "Normal - Mostrar a notificação normalmente",
                noContent: "Sem Conteúdo - Esconder o corpo da notificação",
                ignore: "Ignorar - Não mostrar a notificação"
            },
        },
        windowsMaterial: {
            title: "Material de fundo do Windows (requer reinício)",
            description: "Efeitos de fundo transparente do Windows. Precisa de um tema com suporte para transparência, caso contrário isto não fará nada. É necessário reiniciar após alterar esta definição.",
            material: {
                none: "Nenhum",
                mica: "Mica (usa o tema do sistema + imagem de fundo do ambiente de trabalho para pintar o fundo)",
                tabbed: "Tabbed (variante do Mica com tonalidade de fundo mais forte)",
                acrylic: "Acrylic (desfoca a janela atrás do Discord para um fundo translúcido)"
            }
        },
        macVibrancy: {
            title: "Estilo de Vibrância da Janela (Requer Reinício)",
            description: "Personalize o efeito de vibrância da janela no macOS. Isto controla o estilo de desfoque e transparência da janela do Discord. As alterações requerem um reinício para surtirem efeito.",
            placeholder: "Estilo de vibrância da janela",
            style: {
                no: "Sem Vibrância",
                underPage: "Sob a Página (Tintagem da janela)",
                content: "Conteúdo",
                window: "Janela",
                selection: "Seleção",
                titlebar: "Barra de Título",
                header: "Cabeçalho",
                sidebar: "Barra Lateral",
                tooltip: "Dica (Tooltip)",
                menu: "Menu",
                popover: "Popover",
                fullscreenUI: "UI em Ecrã Inteiro (Transparente mas ligeiramente desfocado)",
                hud: "HUD (Mais Transparente)"
            }
        },
        tabs: {
            renderFailed: "Falha ao mostrar o separador {{tab}}. Se o problema persistir, tenta reinstalar com o instalador!"
        }
    },

    plugins: {
        title: "Plugins",
        new: "NOVO",
        unknown: "Desconhecido",
        noDescription: "Nenhuma descrição disponível.",
        restart: {
            apply: "Reinicie para aplicar as alterações!",
            required: "Reinício necessário!",
            description: "Reinicie agora para aplicar os novos plugins e as suas definições",
            following: "Os seguintes plugins requerem um reinício:",
            remainingCount: "e mais {{count}}",
            fully: "Alguns plugins requerem um reinício para serem totalmente desativados",
            would: "Gostaria de reiniciar agora?",
            resetDefault: "Repor definições padrão",
            failed: "Falha ao iniciar dependências:",
            button: {
                restart: "Reiniciar",
                later: "Mais tarde!",
                now: "Reiniciar Agora",
                cancel: "Cancelar",
                disableWarning: "Desativar Aviso para Sempre",
                disableAll: "Desativar Todos",
                reset: "Repor",
                close: "Fechar"
            }
        },
        contributor: {
            contributed: "contribuiu",
            modal: {
                contributionsInfo: "{{userName}} {{continuedLink}} em {{contributionCount}} plugin{{s}}.",
                noContributions: "{{userName}} não criou nenhum plugin. Provavelmente {{contributedLink}} de outras formas!"
            }
        },
        infoModal: {
            description: "Pressione a roda dentada ou o ícone de informação para obter mais detalhes sobre um plugin",
            settingsInfo: "Plugins com uma roda dentada têm definições que pode modificar!",
            disableAll: "Desativar Todos os Plugins"
        },
        error: {
            invalidInput: "Entrada inválida fornecida",
            stopping: "Erro ao parar o plugin {{plugin}}",
            starting: "Erro ao iniciar o plugin {{plugin}}",
            startDependency: "Erro ao iniciar dependências: {{failures}}",
            infoRender: "Ocorreu um erro ao renderizar o Componente de Informação personalizado deste plugin"
        },
        placeholder: {
            number: "Introduza um número",
            select: "Selecione uma opção",
            text: "Introduza um valor"
        },
        excluded: {
            desktop: "App Discord Desktop ou Plextron",
            discordDesktop: "App Discord Desktop",
            plextron: "App Plextron",
            web: "App Plextron e a versão Web do Discord",
            dev: "Versão de programador do Plexcord",
            browser: "Versão para navegador web do Plexcord"
        },
        search: {
            looking: "Está à procura de",
            onlyAvailable: "Apenas disponível no",
            noCriteria: "Nenhum plugin corresponde aos critérios de pesquisa."
        },
        required: {
            title: "Plugins Necessários",
            this: "Este plugin é necessário para o funcionamento do Plexcord.",
            by: "Este plugin é exigido por:"
        },
        dangerModal: {
            title: "AÇÃO PERIGOSA",
            disablePlugins: "Desativar Plugins",
            disableText: "Desativar Todos",
            irreversible: "ESTA AÇÃO É IRREVERSÍVEL!",
            enableBack: "Tem a certeza absoluta de que deseja continuar? Pode sempre ativá-los novamente mais tarde.",
            undone: "Esta ação não pode ser anulada. Tem a certeza?",
            resetDescription: "Está prestes a repor todas as definições de {{pluginName}} para os valores padrão.",
            disable: "Está prestes a desativar {{enabledPlugins}} plugins!",
            confirmReset: "Confirmar Reposição",
            cancel: "Cancelar",
            resetSettings: "Repor Definições",
            resetText: "Repor"
        },
        filters: {
            label: "Filtros",
            placeholder: "Procurar por um plugin...",
            option: {
                all: "Mostrar Todos",
                enabled: "Mostrar Ativados",
                disabled: "Mostrar Desativados",
                new: "Mostrar Novos",
                userplugins: "Mostrar Plugins de Utilizador",
                api: "Mostrar Plugins de API",
                type: "Filtrar por tipo",
                tags: "Filtrar por etiquetas",
                favorites: "Mostrar favoritos"
            }
        },
        pluginModal: {
            noSettings: "Não existem definições para este plugin.",
            authors: "Autores",
            settings: "Definições",
            successfulReset: "As definições de {{plugin}} foram repostas.",
            enabledStock: "Plugins Nativos Ativados",
            totalStock: "Total de Plugins Nativos",
            enabledUser: "Plugins de Utilizador Ativados",
            totalUser: "Total de Plugins de Utilizador",
            info: "Ver mais informações",
            source: "Ver código fonte",
            favorite: "Adicionar aos favoritos - fixa-o no topo da lista de plugins",
            unfavorite: "Remover dos favoritos"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API para adicionar decoradores à lista de membros (servidores e DMs)",
                    messageAccessories: "API para adicionar acessórios às mensagens",
                    messageDecorations: "API para adicionar decorações às mensagens",
                    chatInputButtons: "API para adicionar botões à entrada de chat",
                    commands: "API necessária para qualquer coisa que utilize comandos",
                    contextMenu: "API para adicionar/remover itens aos menus de contexto.",
                    dynamicImageModal: "Permite omitir a largura ou a altura ao abrir um modal de imagem",
                    menuItemDemangler: "Descodifica o módulo de Itens de Menu do Discord",
                    messageEvents: "API necessária para qualquer coisa que utilize eventos de mensagem",
                    messagePopover: "API para adicionar botões aos popovers de mensagem",
                    messageUpdater: "API para atualizar e renderizar novamente mensagens",
                    nicknameIcons: "API para adicionar ícones ao nome de utilizador, nos perfis",
                    notices: "Corrige o fecho automático de avisos",
                    serverList: "API necessária para plugins que modificam a lista de servidores",
                    userSettings: "Aplica patches às Definições de Utilizador do Discord para expor o seu grupo e nome.",
                    audioPlayer: "API para reproduzir ficheiros de áudio internos do Discord ou links de áudio externos.",
                    userArea: "API para adicionar botões ao painel da área de utilizador.",
                    profileCollections: "API para adicionar coleções ao painel de perfil do utilizador, como a coleção de jogos do Discord.",
                    profileSections: "API para adicionar secções perto da área 'Membro desde' dos painéis de perfil de utilizador.",
                    headerBar: "API para adicionar botões à barra superior.",
                    surfaceClasses: "API para adicionar atributos de dados semânticos do plugin e props limitadas a superfícies estáveis do layout do Discord."
                },
                chatButtons: {
                    context: {
                        buttons: "Botões"
                    }
                }
            },
            badges: {
                description: "API para adicionar emblemas aos utilizadores",
                contributor: {
                    plexcord: "Contribuidor Plexcord",
                    vencord: "Contribuidor Vencord",
                    userPlugin: "Contribuidor de Plugin de Utilizador"
                },
                context: {
                    title: "Opções de Emblemas",
                    copy: {
                        name: "Copiar Nome do Emblema",
                        link: "Copiar Link da Imagem do Emblema"
                    },
                    refetch: {
                        button: "Recarregar Emblemas",
                        success: "Emblemas recarregados com sucesso!"
                    }
                },
                modal: {
                    title: "Doador Plexcord",
                    special: "Este Emblema é uma vantagem especial para Doadores Plexcord",
                    description: "Por favor, considere apoiar o desenvolvimento do Plexcord tornando-se um doador. Significaria muito para nós!"
                }
            },
        },
        uiElements: {
            manage: "Gerir Elementos da UI",
            allows: "Permite esconder botões de que não gosta",
            section: {
                chatbar: {
                    title: "Botões da Barra de Chat",
                    description: "Estes são os botões no lado direito da barra de entrada de chat"
                },
                messagePopover: {
                    title: "Botões do Popover de Mensagem",
                    description: "Estes são os botões flutuantes à direita quando passa o rato sobre uma mensagem"
                }
            },
            button: "Os botões dos plugins ativados aparecerão aqui."
        },
        invalidInput: "Entrada inválida",
        loading: "A carregar...",
        authorPrefix: "por"
    },

    patchHelper: {
        title: "Auxiliar de Patches",
        description: "Uma ferramenta de programador para ajudar a criar patches para os plugins Plexcord.",
        fullPatch: {
            label: "Patch Completo",
            description: "Cole aqui o seu patch JSON completo para preencher os campos"
        },
        find: "Procurar",
        match: "Corresponder",
        replacement: "Substituição",
        preview: "Pré-visualização",
        generatedCode: "Código Gerado",
        group: "Grupo",
        diff: "Diferenças (Diff)",
        module: "Módulo",
        compile: "Compilar",
        compiled: "Compilação Bem-sucedida",
        copy: {
            clipboard: "Copiar para a Área de Transferência",
            codeblock: "Copiar como Bloco de Código"
        },
        error: {
            noMatch: "Nenhuma correspondência encontrada. Este módulo poderá estar em carregamento lento (lazy load)?",
            multipleMatch: "Várias correspondências encontradas. Por favor, use um padrão de pesquisa mais específico.",
            noFind: "O campo 'Procurar' (Find) está em falta.",
            noReplacement: "O campo 'Substituição' (Replacement) está em falta.",
            invalidReplacement: "O campo 'Substituição' é inválido",
            replacementMatch: "O campo 'replacement.match' está em falta",
            replacementReplace: "O campo 'replacement.replace' está em falta",
            replacementMustFunction: "A 'Substituição' deve ser uma função"
        },
        cheatSheet: {
            title: "Folha de Dicas",
            identifiers: "Sequência de escape regex especial que corresponde a identificadores (nomes de variáveis, nomes de classes, etc.)",
            dollar: "Inserir um $",
            entireMatch: "Inserir a correspondência completa",
            beforeMatch: "Inserir a substring antes da correspondência",
            afterMatch: "Inserir a substring após a correspondência",
            nthGroup: "Inserir o enésimo grupo de captura ($1, $2...)",
            pluginInstance: "Inserir a instância do plugin"
        },
        replacementEval: {
            label: "Tratar Substituição como função",
            description: "A 'Substituição' será avaliada como uma função se isto estiver ativado"
        }
    },

    sync: {
        title: "Backup e Restauro",
        warning: "Aviso",
        warningText: "Importar um ficheiro de definições irá substituir as suas definições atuais. Certifique-se de que exporta um backup primeiro se quiser manter a sua configuração atual.",
        description: "Pode importar e exportar as suas definições do Plexcord como um ficheiro JSON. Isto permite-lhe transferir facilmente as suas definições para outro dispositivo ou recuperá-las após reinstalar o Plexcord ou o Discord.",
        successful: "Definições importadas com sucesso. Reinicie para aplicar as alterações!",
        error: {
            failure: "Falha ao importar definições: {{error}}",
            failedExport: "Falha ao exportar definições, verifique a consola",
            invalid: "Definições Inválidas. Isto é mesmo um ficheiro de definições do Plexcord?",
            tooLarge: "DataStore demasiado grande - excluído do backup. Use 'Exportar DataStores' se necessário.",
            clearSomeDate: "DataStore demasiado grande. Por favor, limpe alguns dados de plugins e tente novamente."
        },
        settings: {
            text: "O que está incluído num backup?",
            quickcss: "QuickCSS Personalizado",
            theme: "Links de Temas",
            plugins: "Definições de Plugins",
            datastores: "DataStores de Plugins (ex: Fusos horários ou IRememberYou)"
        },
        import: {
            title: "Importar Definições",
            description: "Selecione um ficheiro de definições exportado anteriormente para restaurar a sua configuração. Isto substituirá todas as suas definições atuais pelas do backup.",
            all: "Importar Todas as Definições",
            plugins: "Importar Plugin",
            css: "Importar QuickCSS",
            datastore: "Importar DataStores"
        },
        export: {
            title: "Exportar Definições",
            description: "Pode exportar as suas definições atuais do Plexcord para um ficheiro para backup ou transferência para outro dispositivo.",
            all: "Exportar Todas as Definições",
            plugins: "Exportar Plugin",
            css: "Exportar QuickCSS",
            datastore: "Exportar DataStores"
        },
        backupFileType: "Cópia de segurança das definições do Plexcord"
    },

    cloud: {
        text: "Nuvem",
        title: "Sincronização de Definições",
        override: "Sincronização na Nuvem",
        description: "Sincronize as suas definições do Plexcord com a nuvem. Isto facilita a manutenção da sua configuração consistente em vários dispositivos sem a necessidade de importação/exportação manual.",
        switchDescription: "Quando ativado, as suas definições podem ser sincronizadas de e para a nuvem. Utilize as ações abaixo para sincronizar manualmente.",
        settings: "Definições da Nuvem",
        successful: "Definições sincronizadas com a nuvem!",
        updated: "As suas definições foram atualizadas! Clique aqui para reiniciar e aplicar as alterações totalmente!",
        deleted: "Definições eliminadas da nuvem!",
        integration: {
            title: "Integração na Nuvem",
            description: "A integração na nuvem do Plexcord permite sincronizar as suas definições em vários dispositivos e instalações do Discord. Os seus dados são armazenados de forma segura e podem ser restaurados facilmente a qualquer momento.",
        },
        reauth: "Notámos que tem integrações na nuvem ativadas noutro cliente! Devido a limitações, terá de reautorizar para continuar a utilizá-las. Clique aqui para ir à página de definições e fazê-lo!",
        error: {
            setup: "A configuração falhou (não foi possível obter a configuração OAuth).",
            secret: "A configuração falhou (nenhum segredo retornado).",
            string: "A configuração falhou ({{error}}).",
            connect: "A sincronização na nuvem foi desativada porque esta conta não está ligada à App Plexcord Cloud. Pode ativá-la novamente ligando esta conta nas Definições da Nuvem. (nota: as suas preferências serão armazenadas separadamente)",
            noSettings: "Não existem definições na nuvem.",
            uptodate: "As suas definições estão atualizadas.",
            localNewer: "As suas definições locais são mais recentes do que as da nuvem.",
            delete: "Não foi possível eliminar as definições ({{error}}).",
            api: {
                returned: {
                    delete: "Não foi possível eliminar as definições (A API retornou {{status}}).",
                    to: "Não foi possível sincronizar as definições para a nuvem (A API retornou {{status}}).",
                    from: "Não foi possível sincronizar as definições da nuvem (A API retornou {{status}}).",
                    manifest: "Não foi possível obter o manifesto para eliminação (a API devolveu {{status}})."
                }
            },
            synchronize: {
                to: "Não foi possível sincronizar as definições para a nuvem ({{error}}).",
                from: "Não foi possível sincronizar as definições da nuvem ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Ative a integração na nuvem acima para utilizar as funcionalidades de sincronização."
        },
        danger: {
            title: "Zona de Perigo",
            description: "Elimine permanentemente todos os seus dados da nuvem. Esta ação não pode ser desfeita e removerá todas as definições sincronizadas e quaisquer outros dados armazenados no backend da nuvem.",
            delete: {
                account: {
                    title: "Eliminar Conta da Nuvem",
                    description: "Tem a certeza de que deseja eliminar permanentemente a sua conta da nuvem e todos os dados associados? Esta ação não pode ser desfeita.",
                    confirm: "Eliminar Conta",
                    cancel: "Cancelar"
                }
            }
        },
        notification: {
            title: "Integração na Nuvem",
            enabled: "Integração na nuvem Ativada",
            host: "{{host}} foi adicionado à lista branca. Por favor, reinicie a aplicação para que as alterações surtam efeito.",
            erase: {
                successful: "Dados da nuvem apagados com sucesso",
                failed: "Falha ao apagar todos os dados (A API retornou {{status}}), por favor contacte o suporte."
            }
        },
        button: {
            to: "Sincronizar para a Nuvem",
            from: "Sincronizar da Nuvem",
            fromDescription: "Isto irá substituir as suas definições locais pelas que estão na nuvem. Use com cautela!",
            delete: "Eliminar Dados da Nuvem",
            enable: "Ativar Integrações na Nuvem",
            reauthorize: "Reautorizar",
            confirm: "Reiniciar agora",
            later: "Mais tarde!"
        },
        privacy: "respeita a sua privacidade",
        source: "código fonte",
        overview: "O Plexcord vem com uma integração na nuvem que adiciona funcionalidades como a sincronização de definições entre dispositivos. Ele {{privacy}}, e o {{source}} está licenciado sob AGPL 3.0 para que possa alojá-lo você mesmo.",
        authorization: "Ligue-se ao backend da nuvem para sincronização de definições. Isto solicitará autorização se ainda não configurou a integração na nuvem.",
        backend: {
            title: "Backend da Nuvem",
            description: "Escolha como as suas definições são armazenadas na nuvem. Por defeito, é utilizado o Plexcord Cloud, mas também pode ligar o seu próprio serviço de nuvem auto-alojado.",
            invalid: "URL Inválido"
        },
        sync: {
            title: "Regras de Sincronização para este Dispositivo",
            description: "Esta definição controla como as definições se movem entre este dispositivo e a nuvem. Pode permitir que as alterações fluam em ambos os sentidos ou escolher um local para ser a fonte principal.",
            direction: {
                both: "Sincronização bidirecional (as alterações vão em ambas as direções)",
                push: "Este dispositivo é a fonte (apenas upload)",
                pull: "A nuvem é a fonte (apenas download)",
                manual: "Não sincronizar automaticamente (apenas sincronização manual via botões abaixo)"
            }
        }
    },

    changelog: {
        text: "Registo de alterações",
        title: "Registo de alterações",
        description: "Pode encontrar as últimas alterações e atualizações do Plexcord aqui.",
        by: "por",
        check: "Verificação do repositório",
        uptodate: "atualizado",
        update: "Atualizar",
        noMessage: "Sem mensagem",
        unknown: "Desconhecido",
        updatedPlugins: "Plugins Atualizados",
        newSettings: "Novas Definições",
        newSettingTooltip: "Nova definição no plugin {{plugin}}",
        loading: "A carregar...",
        repoUptodate: "Repositório atualizado",
        fetch: "Obter do Repositório",
        clear: "Limpar Todos os Registos",
        internet: "Certifique-se de que tem ligação à Internet e tente novamente.",
        recent: "Alterações Recentes",
        codeChanges: "Alterações de Código: {{count}} novo(s) commit(s)",
        updateLogs: "Registos de Atualização ({{count}})",
        noCommit: "Não existem commits disponíveis à frente da sua versão atual. Clique em 'Obter do Repositório' para verificar novas alterações.",
        previous: "Sessões de atualização anteriores com o seu histórico de commits e alterações de plugins.",
        modal: {
            description: "Visualize as alterações mais recentes do Plexcord. Isto obtém os commits diretamente do repositório para lhe mostrar as novidades.",
            repository: "Repositório",
            failed: "Falha ao obter - verifique a consola",
            current: "Atual:",
            hide: "Ocultar registos",
            show: "Mostrar registos",
            fetch: {
                title: "Obter Alterações",
                description: "Verifique o repositório por novos commits, atualizações de plugins e alterações de código. Isto comparará a sua versão atual com a mais recente disponível.",
                newCommit: "Estes são os novos commits e atualizações de plugins desde a sua última versão. Pode ver quais as funcionalidades adicionadas, erros corrigidos e quais os plugins que receberam atualizações.",
                confirm: "Obter",
            }
        },
        commit: {
            available: "commits disponíveis",
            no: "Sem novos commits",
            new: "novos plugins",
            updated: "plugins atualizados",
            settings: "novas definições"
        },
        toast: {
            already: "Já está atualizado com o repositório",
            found: "Encontrados {{count}} novos commits no repositório",
            local: "O repositório está atualizado com a sua cópia local",
            failed: "Falha ao obter do repositório :(",
            cleared: "Todos os registos foram limpos",
            logCleared: "O registo foi limpo",
            yourLatest: "Commits registados da sua última atualização"
        },
        alert: {
            clear: {
                title: "Limpar Todos os Registos",
                body: "Tem a certeza de que deseja limpar todos os registos? Esta ação não pode ser desfeita.",
                confirm: "Limpar Tudo",
                confirmColor: "danger",
                cancel: "Cancelar"
            },
            log: {
                title: "Limpar Registo",
                body: "Tem a certeza de que deseja limpar este registo? Esta ação não pode ser desfeita.",
                confirm: "Limpar Registo",
                confirmColor: "danger",
                cancel: "Cancelar"
            }
        },
        newPlugins: "{{count}} Novo(s) Plugin(s)",
        following: "Os seguintes plugins foram adicionados em atualizações recentes:",
        more: "+{{count}} mais plugins",
        error: {
            retrieveRepo: "Não foi possível obter as informações do repositório",
            fetchRepo: "Não foi possível buscar dados do repositório",
            connectRepo: "Não foi possível ligar ao repositório. Verifica a tua ligação à internet."
        }
    },

    csp: {
        restart: "É necessário reiniciar para aplicar esta alteração",
        blocked: {
            resources: "Recursos Bloqueados",
            disallowed: "Algumas imagens, estilos ou fontes foram bloqueados porque provêm de domínios não permitidos.",
            recommended: "É altamente recomendado movê-los para o GitHub ou Imgur. Mas também pode permitir domínios se confiar neles totalmente.",
            afterAllow: "Depois de permitir um domínio, tem de fechar totalmente (pela bandeja do sistema / gestor de tarefas) e reiniciar o {{platform}} para aplicar a alteração.",
            allow: "Permitir",
            allowAll: "Permitir todos ({{count}} domínios)",
            url: "URLs Bloqueados"
        },
        imgur: {
            direct: "Os links do Imgur devem ser links diretos no formato {{etc}}",
            copy: "To obter um link direto, clique com o botão direito na imagem e selecione 'Copiar endereço da imagem'."
        },
        notice: {
            allowHost: "Permitir anfitrião",
            blocked: "As ligações a {{host}} estão bloqueadas. Permita este anfitrião se confiar nele e reinicie o Discord.",
            imagesBlocked: "As imagens de {{host}} estão bloqueadas. Permita este anfitrião se confiar nele e reinicie o Discord.",
            failed: "Não foi possível permitir este domínio."
        },
        wants: {
            caller: "{{callerName}} deseja permitir ligações a {{domain}}",
            unknown: "Uma fonte desconhecida quer permitir ligações a {{domain}}",
            detail: "A menos que reconheça e confie totalmente em {{domain}}, deve cancelar este pedido!",
            restart: "Terá de fechar totalmente e reiniciar o {{appName}} para que as alterações surtam efeito.",
            type: {
                images: "Imagens",
                styles: "CSS e Temas",
                fonts: "Fontes"
            },
            content: "Os seguintes tipos de conteúdo poderão ser carregados de {{domain}}:",
            understand: "Confio totalmente em {{domain}} e compreendo os riscos de permitir ligações ao mesmo.",
            button: {
                cancel: "Cancelar",
                allow: "Permitir"
            },
            title: "Permissões de Anfitrião"
        }
    },

    themes: {
        title: "Temas",
        management: "Gestão de Temas",
        description: "Personalize a aparência do Discord com temas. Adicione ficheiros .css locais ou carregue temas diretamente de URLs. Temas com um ícone de roda dentada têm definições personalizáveis que pode modificar.",
        local: "Temas Locais",
        new: "NOVO",
        pinned: "Fixado",
        stylus: "extensão Stylus",
        bd: "Temas BetterDiscord",
        github: "GitHub",
        download: "À procura de temas? Consulte o {{bd}} ou pesquise no {{github}}. Ao descarregar do BetterDiscord, clique em 'Download' e coloque o ficheiro .theme.css na sua pasta de temas.",
        add: "Adicionar",
        reset: "Repor definições para o padrão",
        notCSS: "Não é um ficheiro CSS. Lembre-se de usar o link 'raw'!",
        okay: "Ok!",
        checking: "A verificar...",
        valid: "Válido!",
        upload: "Carregar Tema",
        openFolder: "Abrir Pasta de Temas",
        loadMissing: "Carregar Temas em Falta",
        editQuickCSS: "Editar QuickCSS",
        editClient: "Editar ClientTheme",
        website: "Abrir Website",
        discord: "Servidor de Discord",
        downloadTheme: "Descarregar",
        refresh: "Atualizar",
        delete: "Eliminar",
        activation: {
            title: "Ativação do tema",
            always: "Sempre ativo",
            lightOnly: "Apenas tema claro",
            darkOnly: "Apenas tema escuro"
        },
        actions: {
            pin: "Afixar",
            unpin: "Desafixar",
            editSettings: "Editar definições"
        },
        unknown: {
            title: "Desconhecido",
            author: "Autor Desconhecido",
            theme: "Um Tema de Discord",
            description: "Nenhuma descrição fornecida."
        },
        required: "Os seguintes plugins são necessários, mas não estão ativados: ",
        homepage: "Página Inicial",
        support: "Suporte",
        online: {
            title: "Temas Online",
            description: "Carregue temas diretamente de URLs em vez de ficheiros locais. Os temas online atualizam-se automaticamente quando a fonte muda.",
            enable: "Ativar Temas Online",
            enableDescription: "Alternar o carregamento de temas online. Quando desativado, todos os temas online serão desligados e não poderá adicionar novos.",
            placeholder: "https://exemplo.pt/tema.css"
        },
        quickActions: {
            title: "Ações Rápidas",
            description: "Atalhos para gerir os seus temas. Abra a sua pasta de temas para adicionar novos, use o QuickCSS para pequenos ajustes de estilo ou recarregue temas após fazer alterações."
        },
        error: {
            userscript: "Os temas não são suportados no Userscript!",
            stylus: "Em vez disso, pode instalar temas com o {{stylus}}!",
            expired: "Link inválido ou expirado",
            text: "Erro:"
        },
        copy: {
            url: "Copiar URL",
            copied: "URL do tema copiado!",
            settings: "Copiar definições do tema",
            copiedSettings: "Definições do tema copiadas para a área de transferência."
        },
        paste: {
            settings: "Colar definições do tema",
            empty: "A sua área de transferência está vazia.",
            invalid: "A sua área de transferência não contém dados de definições válidos.",
            pasted: "Definições do tema coladas da área de transferência."
        },
        settings: {
            for: "Definições para {{themeName}}",
        },
        installed: {
            title: "Temas Instalados",
            description: "Gira os seus temas aqui. Temas locais carregam da sua pasta de temas, temas online de URLs.",
            count: "{{count}} tema(s) instalado(s) ({{localCount}} locais, {{onlineCount}} online) · {{enabledCount}} ativados",
            search: "Procurar um tema...",
            loading: "A carregar temas...",
            none: "Nenhum tema instalado. Adicione ficheiros de tema à sua pasta de temas ou adicione um tema online acima para começar.",
            noCriteria: "Nenhum tema corresponde aos seus critérios de pesquisa ou filtro."
        },
        filter: {
            all: "Mostrar Todos",
            online: "Temas Online",
            local: "Temas Locais",
            enabled: "Ativados",
            disabled: "Desativados"
        },
        notification: {
            refresh: {
                title: "Tema Atualizado",
                error: "Falha ao atualizar o tema"
            },
            failed: {
                download: "Falha ao descarregar o tema"
            }
        },
        openInFolder: "Abrir na pasta",
        fallback: {
            author: "Autor desconhecido",
            description: "Um tema do Discord."
        }
    },

    updater: {
        title: "Atualizador",
        settings: "Definições do Atualizador",
        updates: "Atualizações",
        updated: "foi atualizado!",
        restart: "Clique aqui para reiniciar",
        repaired: "O Plexcord foi reparado!",
        ok: "OK",
        preferences: {
            title: "Preferências de Atualização",
            description: "Controle como o Plexcord se mantém atualizado. Pode optar por atualizar automaticamente em segundo plano ou ser notificado quando houver novas atualizações.",
        },
        github: {
            local: "A sua cópia local tem commits mais recentes do que o repositório remoto. Isto acontece geralmente quando faz alterações locais. Por favor, faça 'stash' ou reset antes de atualizar."
        },
        error: {
            check: "Falha ao verificar atualizações. Verifique a consola para mais informações",
            occurred: "Ocorreu um erro desconhecido",
            retrieve: "Falha ao obter - verifique a consola",
            title: "Ups!",
            tryAgain: "Ocorreu um erro desconhecido. Por favor, tente novamente ou consulte a consola.",
            command: "Comando {{path}} não encontrado. Por favor, instale-o e tente novamente.",
            code: "Código {{code}}. Consulte a consola para mais informações.",
            running: "Ocorreu um erro ao executar {{cmd}}: {{error}}",
            failed: "Isso também falhou :( Tente atualizar ou reinstalar com o instalador!"
        },
        available: "Há 1 atualização",
        updateAvailable: "Está disponível uma atualização do Plexcord!",
        click: "Clique aqui para ver a atualização",
        available_plural: "Há {{count}} atualizações",
        current: "Atualizado!",
        successful: {
            title: "Atualização com Sucesso!",
            body: "Atualizado com sucesso. Reiniciar agora para aplicar as alterações?",
            button: {
                confirm: "Reiniciar",
                cancel: "Agora não!",
                update: "Atualizar Agora",
                check: "Verificar Atualizações"
            },
            noFound: "Nenhuma atualização encontrada"
        },
        automatically: {
            label: "Atualizar automaticamente",
            description: "Atualizar o Plexcord automaticamente sem confirmação"
        },
        notify: {
            label: "Ser notificado quando uma atualização automática for concluída",
            description: "Mostra uma bnotificação quando o Plexcord se atualiza automaticamente"
        },
        repo: "Repo",
        repoDescription: "Este é o repositório GitHub de onde o Plexcord obtém as atualizações.",
        loading: "A carregar...",
        unknownAuthor: "Autor desconhecido"
    },

    components: {
        error: {
            title: "Oh não!",
            render: "Ocorreu um erro ao renderizar este Componente. Pode encontrar mais informações abaixo e na consola."
        },
        componentFailed: {
            message: "Ups! Falha ao renderizar esta página. No entanto, existe uma atualização disponível que pode resolver o problema. Gostaria de atualizar e reiniciar agora?"
        },
        quickCSS: {
            title: "Editor QuickCSS Aberto",
            message: "O editor QuickCSS ainda está aberto em segundo plano.",
            detail: "Deseja fechar o Discord de qualquer forma? Isto também fechará o editor QuickCSS.",
            cancel: "Cancelar",
            close: "Fechar de qualquer forma",
            windowTitle: "Editor QuickCSS do Plexcord"
        },
        messagePopover: {
            scrollLeft: "Deslocar para a esquerda",
            scrollRight: "Deslocar para a direita"
        },
        notices: {
            error: "Erro ao exibir o aviso"
        },
        tray: {
            aboutPlexcord: "Sobre o Plexcord",
            updatePlexcord: "Atualizar Plexcord",
            noUpdateTitle: "Nenhuma atualização disponível",
            noUpdateBody: "Já estás a usar a versão mais recente do Plexcord.",
            updateFailedTitle: "Falha na atualização",
            updateFailedBody: "Não foi possível aplicar a atualização do Plexcord.",
            updateSuccessTitle: "Atualização concluída",
            updateSuccessBody: "A reiniciar o Plexcord para aplicar a atualização.",
            updateErrorTitle: "Erro de atualização",
            updateErrorBody: "Ocorreu um erro ao atualizar o Plexcord.\n\n{{error}}",
            openSettingsFolder: "Abrir pasta de definições",
            openThemesFolder: "Abrir pasta de temas"
        }
    },

    commands: {
        error: {
            execute: "Ocorreu um erro ao executar o comando '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Descartar Notificação",
        noYet: "Ainda sem notificações",
        settings: "Definições de Notificação",
        log: {
            title: "Registo de Notificações",
            clear: "Limpar Registo de Notificações",
            sure: "Tem a certeza?",
            permamently: "Isto removerá permanentemente {{count}} notificação(ões). Esta ação não pode ser desfeita.",
            button: {
                confirm: "Sim, fazer!",
                cancel: "Deixa estar"
            }
        }
    },

    memberlist: {
        error: {
            render: "Falha ao renderizar o Decorador da Lista de Membros {{key}}"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Falha ao renderizar o Acessório de Mensagem {{key}}"
            }
        },
        decoration: {
            error: {
                render: "Falha ao renderizar a Decoração de Mensagem {{key}}"
            }
        }
    },

    utils: {
        toast: {
            copied: "Copiado para a área de transferência!"
        }
    },

    common: {
        unit: {
            year: "ano",
            years: "anos",
            month: "mês",
            months: "meses",
            week: "semana",
            weeks: "semanas",
            day: "dia",
            days: "dias",
            hour: "hora",
            hours: "horas",
            minute: "minuto",
            minutes: "minutos",
            second: "segundo",
            seconds: "segundos",
            ago: "atrás",
            s: "s"
        },
        detectLanguage: "Detetar idioma"
    },

    plugin: {
        tags: {
            accessibility: "Acessibilidade",
            activity: "Atividade",
            appearance: "Aspeto",
            chat: "Chat",
            commands: "Comandos",
            console: "Consola",
            customisation: "Personalização",
            developers: "Programadores",
            emotes: "Emotes",
            friends: "Amigos",
            fun: "Diversão",
            media: "Multimédia",
            notifications: "Notificações",
            organisation: "Organização",
            privacy: "Privacidade",
            reactions: "Reações",
            roles: "Funções",
            servers: "Servidores",
            shortcuts: "Atalhos",
            utility: "Utilitário",
            voice: "Voz"
        },
        concatenatedComponentExtractor: {
            name: "ConcatenatedComponentExtractor",
            description: "Extrair componentes que foram concatenados pelo empacotador (bundler)"
        },
        concatenatedModules: {
            name: "ConcatenatedModules",
            description: "Extrair módulos que foram concatenados pelo empacotador (bundler)"
        },
        noTrack: {
            name: "NoTrack",
            description: "Desativa o rastreio do Discord (analytics/'science'), métricas e relatórios de erro do Sentry",
            option: {
                disableAnalytics: {
                    label: "Desativar Analíticas",
                    description: "Bloqueia as análises de rastreamento do Discord. Desative se quiser que os emblemas acompanhem o seu progresso (ex.: horas transmitidas)."
                },
                disableStackDumping: {
                    description: "Imprimir um rastreio de pilha nativo na consola quando o Discord falhar. Requer reinício completo."
                }
            }
        },
        settings: {
            name: "Settings",
            description: "Adiciona a Interface de Definições e informações de depuração",
            option: {
                language: {
                    label: "Idioma",
                    description: "Selecione o seu idioma de preferência para o Plexcord."
                },
                settingsLocation: {
                    label: "Localização das Definições",
                    description: "Determina onde a secção de definições do Plexcord será localizada."
                },
                includePlexcordInfoWhenCopying: {
                    label: "Incluir informações do Plexcord ao copiar",
                    description: "Também copia as informações do Plexcord (Plexcord, Electron, Chromium) ao clicar nas informações de versão no canto inferior esquerdo da página de Definições"
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "Ajuda-nos a prestar-lhe suporte",
            commands: {
                description: {
                    debug: "Enviar informações de depuração do Plexcord",
                    plugins: "Enviar lista de plugins do Plexcord"
                }
            },
            modals: {
                outdated: {
                    title: "Espere um pouco!",
                    body: "Está a utilizar uma versão desatualizada do Plexcord! É provável que o seu problema já tenha sido resolvido.",
                    footer: "Por favor, atualize primeiro antes de solicitar suporte!",
                    dismiss: "Se sabe o que está a fazer ou não pode atualizar, pode fechar este aviso.",
                    button: {
                        cancel: "Ver Atualizações",
                        confirm: "Atualizar e Reiniciar Agora",
                        secondaryConfirm: "Eu sei o que estou a fazer ou não consigo atualizar"
                    }
                },
                updater: {
                    title: "Espere um pouco!",
                    body: "Está a utilizar uma versão do Plexcord atualizada externamente, para a qual não prestamos suporte!",
                    footer: "Por favor, mude para uma {{officially}} ou contacte o mantenedor do seu pacote para obter suporte.",
                    officially: "versão oficialmente suportada do Plexcord",
                    button: {
                        cancel: "Cancelar",
                        confirm: "Ver Página de Download",
                        now: "Atualizar Agora"
                    },
                    toast: {
                        success: "Sucesso! A reiniciar...",
                        already: "Já está atualizado!",
                        failed: "Falha ao atualizar :("
                    }
                },
                custom: {
                    title: "Espere um pouco!",
                    header: "Está a utilizar uma build personalizada do Plexcord, para a qual não prestamos suporte!",
                    body: "Apenas prestamos suporte para {{officialBuild}}. Por favor, {{switch}} ou resolva o problema por conta própria.",
                    footer: "Será impedido de receber suporte se ignorar esta regra.",
                    official: "builds oficiais",
                    switch: "mude para uma build oficial",
                    button: {
                        confirm: "Compreendido",
                        secondaryConfirm: "Não mostrar novamente"
                    }
                }
            },
            button: {
                debug: "Executar /plexcord-debug",
                plugins: "Executar /plexcord-plugins",
                snippet: "Executar Snippet"
            },
            toast: {
                success: "Sucesso!",
                failed: "Falha ao executar o snippet :(",
                failedOpenInvite: "Falha ao abrir o convite, por favor verifique a consola :(",
                upload: "Lista de plugins carregada com sucesso!",
                failedUpload: "Falha ao carregar o ficheiro da lista de plugins. Por favor, tente novamente.",
                unableGenerate: "Falha ao gerar a lista de plugins."
            },
            dm: {
                warning: "Por favor, não envie mensagens privadas aos programadores de plugins do Plexcord para suporte!{{br}}Em vez disso, pode entrar no servidor de {{support}} e utilizar o canal de suporte do Plexcord: {{channel}}"
            },
            alert: {
                title: "Aviso: Elevada Contagem de Plugins",
                paragraph1: "Tem mais de 100 plugins ativados.",
                paragraph2: "Devido à enorme quantidade de plugins, poderá não receber suporte.",
                paragraph3: "O seu problema é provavelmente causado por conflitos entre plugins.",
                paragraph4: "Por favor, considere desativar alguns plugins para diagnosticar o problema.",
                paragraph5: "A sua lista de plugins será enviada como um ficheiro de texto.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Clique com o botão direito no seu painel de conta no canto inferior esquerdo para ver o seu perfil no servidor atual",
            option: {
                prioritizeServerProfile: {
                    label: "Priorizar Perfil de Servidor",
                    description: "Priorizar o Perfil de Servidor ao clicar com o botão esquerdo no painel de conta"
                }
            },
            context: {
                account: "Ver Perfil de Conta",
                server: "Ver Perfil de Servidor",
                prioritize: "Priorizar Perfil de Servidor"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Faz com que o seletor de Supressão de Ruído alterne entre Nenhum e Krisp, em vez de Krisp e Padrão"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Anima tudo o que puder ser animado",
            option: {
                icons: {
                    label: "Ícones",
                    description: "Animar sempre ícones de servidor, avatares, decorações e mais"
                },
                statusEmojis: {
                    label: "Emojis de Estado",
                    description: "Animar sempre emojis de estado"
                },
                serverBanners: {
                    label: "Banners de Servidor",
                    description: "Animar sempre banners de servidor"
                },
                nameplates: {
                    label: "Placas de Nome",
                    description: "Animar sempre placas de nome"
                },
                roleGradients: {
                    label: "Gradientes de Cargo",
                    description: "Animar sempre gradientes de cargo"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "Expande sempre as janelas de perfil para o modo completo (modal)"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Expande sempre as listas de cargos nas janelas de perfil",
            option: {
                hideArrow: {
                    label: "Ocultar Seta",
                    description: "Ocultar seta"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Reproduz vozes 'Animalese' (Animal Crossing) para cada mensagem enviada (eles falam muito)",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume do som Animalese"
                },
                speed: {
                    label: "Velocidade",
                    description: "Velocidade do som Animalese"
                },
                pitch: {
                    label: "Tom",
                    description: "Multiplicador de tom (pitch)"
                },
                messageLengthLimit: {
                    label: "Limite de Comprimento de Mensagem",
                    description: "Comprimento máximo da mensagem a processar"
                },
                processOwnMessages: {
                    label: "Processar Próprias Mensagens",
                    description: "Ative para que as suas próprias mensagens também falem"
                },
                soundQuality: {
                    label: "Qualidade do Som",
                    description: "Qualidade do som a utilizar",
                    high: "Alta",
                    med: "Média",
                    low: "Baixa",
                    lowest: "Mínima"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "Remove os avisos irritantes de domínio não confiável e de ficheiro suspeito",
            option: {
                domain: {
                    label: "Domínio",
                    description: "Remover o aviso de domínio não confiável ao abrir links"
                },
                file: {
                    label: "Ficheiro",
                    description: "Remover o aviso de 'Download Potencialmente Perigoso' ao abrir links"
                },
                noDeleteSafety: {
                    label: "Sem Segurança de Eliminação",
                    description: "Remove a obrigatoriedade de inserir o nome do servidor ao eliminá-lo"
                },
                confirmModal: {
                    label: "Janela de Confirmação",
                    description: "Deve ser mostrada uma janela de 'tem a certeza de que deseja eliminar'?"
                }
            },
            alert: {
                title: "Eliminar servidor?",
                body: "É permanente, caso não fosse óbvio.",
                confirm: "Eliminar",
                cancel: "Cancelar"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Anonimizar nomes de ficheiros carregados",
            option: {
                anonymiseByDefault: {
                    label: "Anonimizar por defeito",
                    description: "Anonimizar nomes de ficheiros por defeito. Pode desativar isto na janela de carregamento se necessário."
                },
                spoilerMessages: {
                    label: "Mensagens de Spoiler",
                    description: "Anonimizar nomes de ficheiros que estejam marcados como spoilers."
                },
                method: {
                    label: "Método",
                    description: "Método de anonimização",
                    random: "Caracteres Aleatórios",
                    consistent: "Consistente",
                    timestamp: "Marca Temporal (Timestamp)",
                    date: "Data"
                },
                randomisedLength: {
                    label: "Comprimento Aleatório",
                    description: "Comprimento dos caracteres aleatórios"
                },
                consistent: {
                    label: "Consistente",
                    description: "Segredo de anonimização consistente"
                },
                dateFormat: {
                    description: "Formato de data (YYYY, MM, DD, HH, mm, ss, SSS são suportados)",
                    label: "Formato de data"
                }
            },
            using: {
                anonymous: "A utilizar nome de ficheiro anónimo",
                spoiler: "A utilizar nome de ficheiro normal"
            },
            spoiler: {
                description: "Alternar spoiler para os seus ficheiros",
                toggle: "Alternar spoiler para os seus ficheiros (ligado por defeito)",
                enabled: "Spoiler ativado!",
                disabled: "Spoiler desativado!"
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Plugin de cliente para arRPC para ativar RPC no Discord Web (experimental)",
            use: {
                title: "Como usar o arRPC",
                enable: "{{link}} para colocar o servidor a funcionar, e depois ative o plugin.",
                link: "Siga as instruções no repositório GitHub"
            },
            toast: {
                connected: "Ligado ao arRPC",
                failed: "Falha ao ligar ao arRPC, está em execução?",
                retry: "Tentar novamente"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "Com @someone pode mencionar alguém aleatoriamente"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Atualiza automaticamente o seu estado online (online, ausente, dnd) ao iniciar jogos",
            option: {
                statusToSet: {
                    label: "Estado a Definir",
                    description: "O estado a definir ao iniciar um jogo",
                    online: "Online",
                    dnd: "Não Incomodar",
                    idle: "Ausente",
                    invisible: "Invisível"
                },
                excludeInvisible: {
                    label: "Excluir Invisível",
                    description: "Evitar alterações automáticas de estado enquanto o seu estado estiver definido como invisível"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Compacta automaticamente (zip) tipos de ficheiro e pastas especificados antes de carregar para o Discord",
            option: {
                extensions: {
                    label: "Extensões",
                    description: "Lista de extensões separada por vírgulas para compactar automaticamente (ex: .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "Exibe banners na lista de membros",
            option: {
                animate: {
                    label: "Animar",
                    description: "Animar banner"
                },
                preferNameplate: {
                    label: "Preferir Placa de Nome",
                    description: "Preferir placa de nome em vez de banner"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Mostra ícones de atividade na lista de membros e permite mostrar todas as atividades",
            option: {
                memberList: {
                    label: "Lista de Membros",
                    description: "Mostrar ícones de atividade na lista de membros"
                },
                iconSize: {
                    label: "Tamanho do Ícone",
                    description: "Tamanho dos ícones de atividade"
                },
                specialFirst: {
                    label: "Especiais Primeiro",
                    description: "Mostrar atividades especiais primeiro (Atualmente Spotify e Twitch)"
                },
                renderGifs: {
                    label: "Renderizar GIFs",
                    description: "Permitir a renderização de GIFs"
                },
                removeGameActivityStatus: {
                    label: "Remover Estado de 'Atividade de Jogo'",
                    description: "Remover o ícone e estado de atividade de jogo"
                },
                userPopout: {
                    label: "Janela de Utilizador",
                    description: "Mostrar todas as atividades na janela/barra lateral de perfil"
                },
                hideTooltip: {
                    label: "Ocultar Dica (Tooltip)",
                    description: "Oculta atividades em vários locais"
                },
                allActivitiesStyle: {
                    label: "Estilo de Todas as Atividades",
                    description: "Estilo para exibir todas as atividades",
                    list: "Lista",
                    carousel: "Carrossel",
                    left: "Esquerda",
                    right: "Direita"
                }
            },
            text: {
                smallText: "Texto pequeno",
                largeText: "Texto grande"
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Adiciona um visualizador de espetrógrafo e osciloscópio aos reprodutores de áudio anexados",
            option: {
                oscilloscope: {
                    label: "Osciloscópio",
                    description: "Ativar visualizador de osciloscópio"
                },
                spectrograph: {
                    label: "Espetrógrafo",
                    description: "Ativar visualizador de espetrógrafo"
                },
                oscilloscopeSolidColor: {
                    label: "Cor Sólida do Osciloscópio",
                    description: "Usar uma cor sólida para o osciloscópio em vez de um gradiente"
                },
                oscilloscopeColor: {
                    label: "Cor do Osciloscópio",
                    description: "Cor do osciloscópio quando a cor sólida está ativada"
                },
                spectrographSolidColor: {
                    label: "Cor Sólida do Espetrógrafo",
                    description: "Usar uma cor sólida para o espetrógrafo em vez de um gradiente"
                },
                spectrographColor: {
                    label: "Cor do Espetrógrafo",
                    description: "Cor do espetrógrafo quando a cor sólida está ativada"
                }
            },
            toast: {
                invalidColorFormat: "Formato de cor inválido para {{settingKey}}, certifique-se de que está no formato 'R, G, B' ou '#RRGGBB'",
                invalidColorFormatFor: "Formato de cor inválido para {{key}}, usa \"R, G, B\" ou \"#RRGGBB\""
            }
        },
        betterBackreading: {
            name: "BetterBackreading",
            description: "Melhora a leitura de mensagens antigas com carregamento antecipado e menos saltos.",
            wholeNumber: "Introduza um número inteiro de {{min}} a {{max}}.",
            option: {
                imageScrollMargin: {
                    label: "Distância de pré-carregamento de imagens",
                    description: "Com quanta antecedência carregar imagens, em pixels (300-3000)."
                },
                messageLoadBuffer: {
                    label: "Buffer de carregamento de mensagens",
                    description: "Com quanta antecedência buscar mais mensagens, em pixels (500-3000)."
                },
                useDiscordMessageCount: {
                    label: "Usar a contagem dinâmica de mensagens do Discord",
                    description: "Deixa o Discord escolher quantas mensagens obter com base na sua janela e nas definições de chat."
                },
                messageCount: {
                    label: "Contagem de mensagens personalizada",
                    description: "Quantas mensagens buscar por pedido de histórico quando a contagem dinâmica está desativada (30-100)."
                },
                channelOpenScrollMode: {
                    label: "Posição ao abrir canal",
                    description: "Abre canais não lidos na posição guardada (ou no fim), sempre no fim, ou segue o comportamento predefinido de não lidos.",
                    default: "Predefinição do Discord",
                    bottom: "Sempre no fim",
                    saved: "Posição guardada"
                }
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Crie motivos personalizados para usar na janela de banimento do Discord e/ou mostre um campo de texto por defeito.",
            option: {
                reasons: {
                    label: "Motivos",
                    description: "Os seus motivos personalizados"
                },
                isTextInputDefault: {
                    label: "Campo de Texto por Defeito",
                    description: "Mostra um campo de texto em vez de um menu de seleção por defeito (Equivalente a clicar na opção 'Outro')"
                }
            },
            title: "Motivos",
            placeholder: "Motivo",
            add: "Adicionar outro motivo",
            duration: {
                discordDefault: "Predefinição do Discord",
                none: "Não eliminar nada",
                hour1: "Última hora",
                hours6: "Últimas 6 horas",
                hours12: "Últimas 12 horas",
                hours24: "Últimas 24 horas",
                days3: "Últimos 3 dias",
                days7: "Últimos 7 dias"
            },
            text: {
                autoDeleteDuration: "Duração da eliminação automática de mensagens"
            }
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Permite pesquisar na lista de utilizadores bloqueados, torna os nomes selecionáveis nas definições, ignora o aviso de perfil bloqueado e agrupa mensagens bloqueadas / ignoradas.",
            placeholder: "Pesquisar utilizadores..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Melhora o sistema de comandos com diversas melhorias.",
            option: {
                autoFillArguments: {
                    label: "Preencher Argumentos Automaticamente",
                    description: "Preencher automaticamente o comando com todos os argumentos em vez de apenas os obrigatórios"
                },
                allowNewlinesInCommands: {
                    label: "Permitir Quebras de Linha nos Comandos",
                    description: "Permitir quebras de linha nas entradas de comando (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Atualiza os comandos de aplicação do Discord localmente",
                    user: "utilizador específico para tentar atualizar",
                    refreshing: "A atualizar comandos de aplicação...",
                    refreshed: "Comandos atualizados com sucesso!",
                    failed: "Falha ao atualizar comandos. Verifique a consola para detalhes."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Mostra pastas de servidores numa barra lateral dedicada e adiciona melhorias relacionadas com pastas",
            option: {
                sidebar: {
                    label: "Barra Lateral",
                    description: "Exibir servidores de uma pasta numa barra lateral dedicada"
                },
                sidebarAnim: {
                    label: "Animação da Barra Lateral",
                    description: "Animar a abertura da barra lateral da pasta"
                },
                closeAllFolders: {
                    label: "Fechar Todas as Pastas",
                    description: "Fechar todas as pastas ao selecionar um servidor que não esteja numa pasta"
                },
                closeAllHomeButton: {
                    label: "Botão Início Fecha Tudo",
                    description: "Fechar todas as pastas ao clicar no botão de início (Home)"
                },
                closeOthers: {
                    label: "Fechar Outras",
                    description: "Fechar outras pastas ao abrir uma pasta"
                },
                closeServerFolder: {
                    label: "Fechar Pasta de Servidor",
                    description: "Fechar a pasta ao selecionar um servidor dentro dessa pasta"
                },
                forceOpen: {
                    label: "Forçar Abertura",
                    description: "Forçar a abertura de uma pasta ao mudar para um servidor dessa pasta"
                },
                enableNestedFolders: {
                    label: "Ativar pastas aninhadas",
                    description: "Permite aninhar pastas dentro de outras pastas ao arrastar"
                },
                keepIcons: {
                    label: "Manter Ícones",
                    description: "Manter a exibição dos ícones das guildas na barra principal quando a pasta está aberta na barra lateral do BetterFolders"
                },
                showFolderIcon: {
                    label: "Mostrar Ícone da Pasta",
                    description: "Mostrar o ícone da pasta acima das guildas na barra lateral do BetterFolders",
                    never: "Nunca",
                    always: "Sempre",
                    moreThanOne: "Quando mais de uma pasta estiver expandida"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Altera o texto alternativo de GIFs de 'GIF' para conter as tags ou o nome do ficheiro"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Faz com que o seletor de GIFs abra a categoria de favoritos por defeito",
            option: {
                keepOpen: {
                    label: "Manter Aberto",
                    description: "Mantém o seletor de GIFs aberto após selecionar um GIF"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Veja a data de expiração dos convites, o perfil de quem convidou e pré-visualize servidores antes de entrar ao clicar no nome",
            render: {
                tip: "Este convite expira em {{time}}",
                header: "{{name}} convidou-o para {{server}}",
                headerSelf: "Enviaste um convite para te juntares a {{server}}",
                never: "não expira"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Oculte as notas ou desative a correção ortográfica (Configure nas definições!!)",
            option: {
                hide: {
                    label: "Ocultar notas",
                    description: "Ocultar a caixa de notas nas janelas de utilizador"
                },
                noSpellCheck: {
                    label: "Sem Correção Ortográfica",
                    description: "Desativar a correção ortográfica nas notas"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "A quantidade de sinais 'mais' antes de :emoji: indica a mensagem à qual o deve adicionar"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Adiciona opções para copiar a cor do cargo / editar o cargo / ver o ícone do cargo ao clicar com o botão direito em cargos no perfil do utilizador ou na lista de membros",
            option: {
                roleIconFileFormat: {
                    label: "Formato de Ficheiro do Ícone de Cargo",
                    description: "Formato de ficheiro a usar ao visualizar ícones de cargo"
                }
            },
            context: {
                copyColor: "Copiar Cor do Cargo",
                editRole: "Editar Cargo",
                viewIcon: "Ver Ícone do Cargo",
                viewMembers: "Ver membros do cargo"
            },
            text: {
                roleActions: "Ações do cargo"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "Copia a cor do cargo ao clicar no RoleDot (ponto de cargo). Também permite usar o RoleDot e nomes coloridos simultaneamente.",
            option: {
                bothStyles: {
                    label: "Ambos os Estilos",
                    description: "Mostrar tanto o ponto de cargo como os nomes coloridos"
                },
                copyRoleColorInProfilePopout: {
                    label: "Copiar Cor do Cargo na Janela de Perfil",
                    description: "Permitir clique no ponto de cargo na janela de perfil para copiar a cor do cargo"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Melhora o menu de sessões (dispositivos). Permite ver marcas temporais exatas, dar nomes personalizados às sessões e receber notificações sobre novas sessões.",
            new: "NOVO",
            newSessions: "Novas Sessões:",
            rename: "Renomear",
            newDevice: "Novo Nome do Dispositivo",
            resetName: "Repor Nome",
            save: "Guardar",
            cancel: "Cancelar",
            option: {
                backgroundCheck: {
                    label: "Verificação em Segundo Plano",
                    description: "Verificar novas sessões em segundo plano e exibir notificações quando forem detetadas"
                },
                checkInterval: {
                    label: "Intervalo de Verificação",
                    description: "Frequência da verificação de novas sessões em segundo plano (se ativado), em minutos"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Melhora a experiência de abertura do menu de definições",
            option: {
                disableFade: {
                    label: "Desativar Transição (Fade)",
                    description: "Desativa a animação de crossfade"
                },
                organizeMenu: {
                    label: "Organizar Menu",
                    description: "Organiza o menu de contexto da engrenagem de definições em categorias"
                },
                eagerLoad: {
                    label: "Carregamento Rápido (Eager Load)",
                    description: "Remove o atraso de carregamento ao abrir o menu pela primeira vez"
                }
            },
            alert: {
                title: "Reinício necessário",
                restart: "Alterou definições que requerem um reinício.",
                confirm: "Reiniciar agora",
                cancel: "Mais tarde!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Carregue ficheiros com um único clique, abra o menu com o botão direito"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Este plugin permite-lhe ampliar as pré-visualizações de transmissões (streams)",
            context: {
                viewPreview: "Ver Pré-visualização da Stream"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Bloqueia mensagens que contenham palavras-chave específicas, como se o utilizador estivesse bloqueado.",
            regexHelper: {
                title: "Assistente de Regex",
                placeholder: "Texto para testar...",
                noPatterns: "Nenhum padrão configurado"
            },
            option: {
                blockedWords: {
                    label: "Palavras Bloqueadas",
                    description: "Lista de palavras a bloquear separada por vírgulas"
                },
                useRegex: {
                    label: "Usar Regex",
                    description: "Usar cada valor como uma expressão regular ao verificar o conteúdo da mensagem (avançado)"
                },
                regexHelper: {
                    label: "Assistente de Regex",
                    description: "Teste as suas expressões regulares com uma entrada de exemplo"
                },
                caseSensitive: {
                    label: "Diferenciar Maiúsculas",
                    description: "Se deve utilizar uma pesquisa sensível a maiúsculas e minúsculas"
                },
                ignoreBlockedMessages: {
                    label: "Ignorar Mensagens Bloqueadas",
                    description: "Ignora completamente a barra de novas mensagens (recentes)"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Impede o carregamento do Krisp"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Desfoca anexos em canais NSFW até passar o rato por cima",
            option: {
                blurAmount: {
                    label: "Nível de Desfoque",
                    description: "Nível de desfoque (em píxeis)"
                },
                blurAllChannels: {
                    label: "Desfocar Todos os Canais",
                    description: "Desfocar anexos em todos os canais (não apenas NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Ignora a confirmação de fixação ao usar as funções de fixar mensagens"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Continue a receber notificações de fontes específicas quando estiver no modo 'Não Incomodar'. Clique com o botão direito em utilizadores/canais/servidores para os definir como exceção.",
            context: {
                remove: "Remover Exceção de Estado",
                add: "Adicionar Exceção de Estado"
            },
            option: {
                guilds: {
                    label: "Servidores",
                    description: "Servidores permitidos (notificado quando mencionado em qualquer lugar no servidor)",
                    placeholder: "Separe por vírgulas"
                },
                channels: {
                    label: "Canais",
                    description: "Canais permitidos (notificado quando mencionado nesse canal)",
                    placeholder: "Separe por vírgulas"
                },
                users: {
                    label: "Utilizadores",
                    description: "Utilizadores permitidos (notificado para todas as mensagens enviadas em DMs)",
                    placeholder: "Separe por vírgulas"
                },
                allowOutsideOfDms: {
                    label: "Permitir Fora de DMs",
                    description: "Permite que os utilizadores selecionados ignorem o estado também fora de DMs (funciona para todas as mensagens enviadas por esses utilizadores)"
                },
                notificationSound: {
                    label: "Som de Notificação",
                    description: "Se o som de notificação deve ser reproduzido"
                },
                respectSilentPings: {
                    label: "Respeitar Menções Silenciosas",
                    description: "Respeitar menções silenciosas (@silent / suprimir notificações)"
                },
                statusToUse: {
                    label: "Estado a Utilizar",
                    description: "Estado a utilizar para a lista branca",
                    online: "Online",
                    idle: "Ausente",
                    dnd: "Não Incomodar",
                    invisible: "Invisível"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Acompanha e exibe os aniversários dos utilizadores com ícones de bolo",
            context: {
                label: "Aniversário",
                setBirthday: "Definir Aniversário",
                clearBirthday: "Limpar Aniversário",
                current: "Atual:"
            },
            option: {
                chat: {
                    label: "Chat",
                    description: "Mostrar ícones de bolo ao lado dos nomes no chat"
                },
                memberList: {
                    label: "Lista de Membros",
                    description: "Mostrar ícones de bolo na lista de membros"
                },
                profileBadge: {
                    label: "Crachá de Perfil",
                    description: "Mostrar crachá de bolo no perfil do utilizador"
                },
                notificationSound: {
                    label: "Som de Notificação",
                    description: "Reproduzir som quando uma notificação de aniversário é enviada"
                },
                userList: {
                    label: "Aniversários Guardados",
                    description: "Gerir aniversários guardados"
                }
            },
            locations: {
                chat: {
                    label: "Chat",
                    description: "ao lado dos nomes no chat"
                },
                memberList: {
                    label: "Lista de Membros",
                    description: "na lista de membros"
                }
            },
            toast: {
                success: "Aniversário definido com sucesso!",
                invalid: "Formato de aniversário inválido! Apenas DD/MM é aceite.",
                cleared: "Aniversário limpo com sucesso!"
            },
            notification: {
                title: "🎂 Aniversário Hoje!",
                body: "Hoje é o aniversário de {{username}}!"
            },
            modal: {
                title: "Definir Aniversário para {{username}}",
                description: "Insira o aniversário no formato DD/MM (ex: 25/12)",
                placeholder: "ex: 25/12",
                current: "Aniversário atual:",
                set: "Definir Aniversário",
                cancel: "Cancelar",
                birthday: "É o meu aniversário! 🎂",
                saved: "Aniversários Guardados",
                savedDesc: "Ainda não há aniversários guardados. Clique com o botão direito nos utilizadores para adicionar os seus aniversários!",
                today: "Hoje",
                remove: "Remover",
                loading: "A carregar...",
                save: "Guardar",
                edit: "Editar"
            },
            text: {
                unknownUser: "Utilizador desconhecido"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Mostra temporizadores de chamada em todas as chamadas de voz",
            option: {
                format: {
                    label: "Formato",
                    description: "Formato compacto ou legível por humanos",
                    human: "30d 23h 00m 42s"
                },
                allCallTimers: {
                    label: "Todos os Temporizadores",
                    description: "Mostrar temporizadores para todos os utilizadores nos servidores"
                },
                showWithoutHover: {
                    label: "Mostrar sem Sobrepor",
                    description: "Mostrar sempre o temporizador sem precisar de passar o rato"
                },
                showRoleColor: {
                    label: "Mostrar Cor do Cargo",
                    description: "Exibir na cor do cargo do utilizador (se o plugin ShowRoleColor estiver ativo)"
                },
                trackSelf: {
                    label: "Rastrear a si próprio",
                    description: "Também mostrar o seu próprio temporizador"
                },
                showSeconds: {
                    label: "Mostrar Segundos",
                    description: "Exibir segundos no temporizador"
                },
                watchLargeGuilds: {
                    label: "Vigiar Servidores Grandes",
                    description: "Rastrear utilizadores em servidores grandes. Isto pode causar lentidão se estiver em muitos servidores grandes com utilizadores de voz ativos. Testado com até 2000 utilizadores ativos sem problemas."
                },
                fixUI: {
                    label: "Correção de Interface",
                    description: "Em alguns casos, o temporizador pode quebrar a interface. Ative esta opção para corrigir."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Adiciona crachás aos canais com base no seu tipo",
            badge: {
                private: "Este canal está trancado.",
                nsfw: "Este canal está marcado como NSFW.",
                rules: "Este canal é o canal de regras do servidor."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Um Crachá por Canal",
                    description: "Mostrar apenas um crachá por canal"
                },
                showTextBadge: {
                    label: "Mostrar Crachá de Texto",
                    description: "Mostrar crachá de Texto"
                },
                showVoiceBadge: {
                    label: "Mostrar Crachá de Voz",
                    description: "Mostrar crachá de Voz"
                },
                showCategoryBadge: {
                    label: "Mostrar Crachá de Categoria",
                    description: "Mostrar crachá de Categoria"
                },
                showDirectoryBadge: {
                    label: "Mostrar Crachá de Diretório",
                    description: "Mostrar crachá de Diretório"
                },
                showAnnouncementThreadBadge: {
                    label: "Mostrar Crachá de Tópico de Anúncios",
                    description: "Mostrar crachá de Tópico de Anúncios"
                },
                showPublicThreadBadge: {
                    label: "Mostrar Crachá de Tópico Público",
                    description: "Mostrar crachá de Tópico Público"
                },
                showPrivateThreadBadge: {
                    label: "Mostrar Crachá de Tópico Privado",
                    description: "Mostrar crachá de Tópico Privado"
                },
                showStageBadge: {
                    label: "Mostrar Crachá de Palco",
                    description: "Mostrar crachá de Palco"
                },
                showAnnouncementBadge: {
                    label: "Mostrar Crachá de Anúncios",
                    description: "Mostrar crachá de Anúncios"
                },
                showForumBadge: {
                    label: "Mostrar Crachá de Fórum",
                    description: "Mostrar crachá de Fórum"
                },
                showMediaBadge: {
                    label: "Mostrar Crachá de Multimédia",
                    description: "Mostrar crachá de Multimédia"
                },
                showNSFWBadge: {
                    label: "Mostrar Crachá NSFW",
                    description: "Mostrar crachá NSFW"
                },
                showLockedBadge: {
                    label: "Mostrar Crachá Trancado",
                    description: "Mostrar crachá Trancado"
                },
                showRulesBadge: {
                    label: "Mostrar Crachá de Regras",
                    description: "Mostrar crachá de Regras"
                },
                showUnknownBadge: {
                    label: "Mostrar Crachá Desconhecido",
                    description: "Mostrar crachá Desconhecido"
                },
                textBadgeLabel: {
                    label: "Rótulo de Crachá de Texto",
                    description: "Rótulo do crachá de texto",
                    default: "Texto"
                },
                voiceBadgeLabel: {
                    label: "Rótulo de Crachá de Voz",
                    description: "Rótulo do crachá de voz",
                    default: "Voz"
                },
                categoryBadgeLabel: {
                    label: "Rótulo de Crachá de Categoria",
                    description: "Rótulo do crachá de categoria",
                    default: "Categoria"
                },
                announcementBadgeLabel: {
                    label: "Rótulo de Crachá de Tópico de Anúncios",
                    description: "Rótulo do crachá de tópico de anúncios",
                    default: "Notícias"
                },
                announcementThreadBadgeLabel: {
                    label: "Rótulo de Crachá de Tópico de Anúncios",
                    description: "Rótulo do crachá de tópico de anúncios",
                    default: "Tópico de Notícias"
                },
                publicThreadBadgeLabel: {
                    label: "Rótulo de Crachá de Tópico Público",
                    description: "Rótulo do crachá de tópico público",
                    default: "Tópico"
                },
                privateThreadBadgeLabel: {
                    label: "Rótulo de Crachá de Tópico Privado",
                    description: "Rótulo do crachá de tópico privado",
                    default: "Tópico Privado"
                },
                stageBadgeLabel: {
                    label: "Rótulo de Crachá de Palco",
                    description: "Rótulo do crachá de palco",
                    default: "Palco"
                },
                directoryBadgeLabel: {
                    label: "Rótulo de Crachá de Diretório",
                    description: "Rótulo do crachá de diretório",
                    default: "Diretório"
                },
                forumBadgeLabel: {
                    label: "Rótulo de Crachá de Fórum",
                    description: "Rótulo do crachá de fórum",
                    default: "Fórum"
                },
                mediaBadgeLabel: {
                    label: "Rótulo de Crachá de Multimédia",
                    description: "Rótulo do crachá de multimédia",
                    default: "Multimédia"
                },
                nsfwBadgeLabel: {
                    label: "Rótulo de Crachá NSFW",
                    description: "Rótulo do crachá NSFW",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Rótulo de Crachá Trancado",
                    description: "Rótulo do crachá trancado",
                    default: "Trancado"
                },
                rulesBadgeLabel: {
                    label: "Rótulo de Crachá de Regras",
                    description: "Rótulo do crachá de regras",
                    default: "Regras"
                },
                unknownBadgeLabel: {
                    label: "Rótulo de Crachá Desconhecido",
                    description: "Rótulo do crachá desconhecido",
                    default: "Desconhecido"
                },
                textBadgeColor: {
                    label: "Cor do Crachá de Texto",
                    description: "Cor do crachá de texto"
                },
                voiceBadgeColor: {
                    label: "Cor do Crachá de Voz",
                    description: "Cor do crachá de voz"
                },
                categoryBadgeColor: {
                    label: "Cor do Crachá de Categoria",
                    description: "Cor do crachá de categoria"
                },
                announcementBadgeColor: {
                    label: "Cor do Crachá de Tópico de Anúncios",
                    description: "Cor do crachá de tópico de anúncios"
                },
                announcementThreadBadgeColor: {
                    label: "Cor do Crachá de Tópico de Anúncios",
                    description: "Cor do crachá de tópico de anúncios"
                },
                publicThreadBadgeColor: {
                    label: "Cor do Crachá de Tópico Público",
                    description: "Cor do crachá de tópico público"
                },
                privateThreadBadgeColor: {
                    label: "Cor do Crachá de Tópico Privado",
                    description: "Cor do crachá de tópico privado"
                },
                stageBadgeColor: {
                    label: "Cor do Crachá de Palco",
                    description: "Cor do crachá de palco"
                },
                directoryBadgeColor: {
                    label: "Cor do Crachá de Diretório",
                    description: "Cor do crachá de diretório"
                },
                forumBadgeColor: {
                    label: "Cor do Crachá de Fórum",
                    description: "Cor do crachá de fórum"
                },
                mediaBadgeColor: {
                    label: "Cor do Crachá de Multimédia",
                    description: "Cor do crachá de multimédia"
                },
                nsfwBadgeColor: {
                    label: "Cor do Crachá NSFW",
                    description: "Cor do crachá NSFW"
                },
                lockedBadgeColor: {
                    label: "Cor do Crachá Trancado",
                    description: "Cor do crachá trancado"
                },
                rulesBadgeColor: {
                    label: "Cor do Crachá de Regras",
                    description: "Cor do crachá de regras"
                },
                unknownBadgeColor: {
                    label: "Cor do Crachá Desconhecido",
                    description: "Cor do crachá desconhecido"
                }
            },
            badges: {
                text: "Texto",
                voice: "Voz",
                category: "Categoria",
                announcement: "Notícias",
                announcementThread: "Tópico de Notícias",
                publicThread: "Tópico",
                privateThread: "Tópico Privado",
                stage: "Palco",
                directory: "Diretório",
                forum: "Fórum",
                media: "Multimédia",
                nsfw: "NSFW",
                locked: "Trancado",
                rules: "Regras",
                unknown: "Desconhecido"
            },
            tooltip: {
                locked: "Este canal está trancado.",
                nsfw: "Este canal está marcado como NSFW."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "Agrupe os seus canais visitados frequentemente em separadores, como num navegador",
            open: "Abrir em Novo Separador",
            animation: {
                title: "Controlos de Animação",
                description: "Ative ou desative animações específicas para os separadores de canais. Cada opção pode ser alternada independentemente.",
                placeholder: "Selecione quais as animações a ativar...",
                tabHover: "Efeitos ao Passar o Rato (elevação + escala)",
                tabSelection: "Animação de Elevação do Separador Selecionado",
                tabDragDrop: "Arrastar e Largar (fantasma + reordenar)",
                tabEnterExit: "Deslizar ao Entrar/Sair (criação + fecho)",
                tabIconPop: "Destaque de Ícone na Seleção (escala do ícone)",
                closeRotation: "Rotação do Botão de Fechar",
                plusPulse: "Pulsação do Botão Mais (+)",
                mentionGlow: "Brilho do Crachá de Menção",
                compactExpand: "Expansão em Modo Compacto",
                selectedBorder: "Contorno de destaque do separador selecionado",
                selectedBackground: "Cor de Fundo do Separador Selecionado",
                tabShadows: "Efeitos de Sombra no Separador",
                tabRepositioning: "Reposicionamento de Separadores (mudanças suaves)",
                resizeHandle: "Desvanecimento da Pega de Redimensionamento",
                questActivate: "Gradiente de missões ativas"
            },
            bookmark: {
                label: "Marcador",
                unknown: "Utilizador Desconhecido",
                folder: "Pasta",
                add: "Adicionar aos Marcadores",
                edit: "Editar Marcador",
                delete: "Eliminar Marcador",
                remove: "Remover dos Marcadores",
                removeFolder: "Remover Marcador da Pasta",
                loading: "A carregar marcadores...",
                noBookmarks: "Não tem marcadores. Pode adicionar um separador aberto ou ocultar isto clicando com o botão direito",
                quests: "Missões",
                messageRequests: "Pedidos de Mensagem",
                friends: "Amigos",
                shop: "Loja",
                library: "Biblioteca",
                discovery: "Descoberta",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Atividade",
                specialPage: "Página Especial",
                searchPlaceholder: "Pesquisar marcadores"
            },
            button: {
                save: "Guardar",
                delete: "Eliminar",
                cancel: "Cancelar",
                reset: "Repor",
                close: "Fechar"
            },
            context: {
                label: "Menu de Contexto do ChannelTabs",
                bookmark: "Menu de Contexto de Marcadores do ChannelTabs",
                tab: "Menu de Contexto de Separadores do ChannelTabs",
                folderMenu: "Menu de Pasta de Marcadores",
                compact: "Compacto",
                bookmarkBar: "Barra de Marcadores",
                openAll: "Abrir todos os marcadores",
                openNew: "Abrir em Novo Separador",
                close: {
                    tab: "Fechar Separador",
                    otherTabs: "Fechar Outros Separadores",
                    tabsToRight: "Fechar Separadores à Direita",
                    tabsToLeft: "Fechar Separadores à Esquerda",
                    reopen: "Reabrir Separador Fechado",
                    allTabs: "Fechar Todos os Separadores"
                }
            },
            error: {
                noLogin: "Não há nenhuma conta com sessão iniciada?"
            },
            modal: {
                add: {
                    title: "Adicionar Marcador à Pasta",
                    select: "Selecione uma pasta",
                    create: "Criar uma"
                },
                edit: {
                    title: "Editar Marcador",
                    name: "Nome do Marcador",
                    folder: "Cor da Pasta"
                },
                delete: {
                    title: "Tem a certeza?",
                    description: "Eliminar uma pasta de marcadores também eliminará todos os marcadores dentro dela."
                },
                folderIcon: {
                    title: "Escolher Ícone da Pasta",
                    preview: "Pré-visualização",
                    iconColor: "Cor do Ícone",
                    search: "Pesquisar",
                    searchPlaceholder: "Pesquisar {{count}} ícones...",
                    folderName: "Nome da Pasta",
                    folderColor: "Cor da Pasta",
                    folderIcon: "Ícone da Pasta",
                    chooseIcon: "Escolher Ícone",
                    useDefaultIcon: "Utilizar Ícone Padrão"
                }
            },
            option: {
                onStartup: {
                    label: "Ao Iniciar",
                    description: "O que fazer com os separadores ao iniciar",
                    nothing: "Não fazer nada (abrir no separador de amigos)",
                    remember: "Lembrar separadores da última sessão",
                    open: "Abrir num conjunto específico de separadores"
                },
                tabSet: {
                    label: "Conjunto de Separadores"
                },
                noPomeloNames: {
                    label: "Sem Nomes Pomelo",
                    description: "Utilizar nomes de exibição em vez de nomes de utilizador para DMs"
                },
                showStatusIndicators: {
                    label: "Mostrar Indicadores de Estado",
                    description: "Mostrar indicadores de estado para DMs"
                },
                showBookmarkBar: {
                    label: "Mostrar Barra de Marcadores"
                },
                persistUnreadCountFallback: {
                    label: "Persistir fallback de contagem não lida",
                    description: "Persistir fallbacks de emblemas não lidos entre recarregamentos para separadores e favoritos"
                },
                bookmarkNotificationDot: {
                    label: "Ponto de Notificação nos Marcadores",
                    description: "Mostrar ponto de notificação para marcadores"
                },
                widerTabsAndBookmarks: {
                    label: "Separadores e Marcadores Mais Largos",
                    description: "Aumentar o comprimento dos separadores e marcadores para monitores grandes"
                },
                tabWidthScale: {
                    label: "Escala de Largura do Separador",
                    description: "Escala da largura do separador (percentagem) - ajustável ao arrastar as bordas"
                },
                tabHeightScale: {
                    label: "Escala de altura dei separadores",
                    description: "Escala de altura dei separadores (percentagem)."
                },
                renderAllTabs: {
                    label: "Renderizar Todos os Separadores",
                    description: "Manter todos os separadores na memória para troca rápida (guarda posição de scroll e estado)"
                },
                switchToExistingTab: {
                    label: "Mudar para Separador Existente",
                    description: "Mudar para o separador se ele já existir para o canal que está a navegar"
                },
                createNewTabIfNotExists: {
                    label: "Criar Novo Separador Se Não Existir",
                    description: "Criar um novo separador se não existir um para o canal que está a navegar"
                },
                enableRapidNavigation: {
                    label: "Ativar Navegação Rápida",
                    description: "Ativar comportamento de navegação rápida - navegar rapidamente entre canais substituirá o separador atual em vez de criar novos"
                },
                rapidNavigationThreshold: {
                    label: "Limite de Navegação Rápida",
                    description: "Janela de tempo (em milissegundos) para navegação rápida. Dentro deste tempo, novos canais substituem o atual."
                },
                tabBarPosition: {
                    label: "Posição da Barra de Separadores",
                    description: "Posição da barra de separadores",
                    top: "Topo",
                    bottom: "Fundo"
                },
                enableNumberKeySwitching: {
                    label: "Troca com Teclas Numéricas",
                    description: "Ativar teclas numéricas (1-9) para alternar separadores"
                },
                numberKeySwitchCount: {
                    label: "Contagem de Teclas Numéricas",
                    description: "Número de separadores acessíveis via teclas numéricas (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "Atalho para Fechar Separador",
                    description: "Ativar atalho de teclado para fechar separador"
                },
                enableNewTabShortcut: {
                    label: "Atalho para Novo Separador",
                    description: "Ativar atalho de teclado para novo separador"
                },
                enableTabCycleShortcut: {
                    label: "Atalho para Ciclar Separadores",
                    description: "Ativar atalho de teclado para ciclar entre separadores"
                },
                keybindsSection: {
                    label: "Atalhos",
                    description: "Clique num botão e pressione a combinação de teclas desejada. Modificadores como CTRL, SHIFT e ALT são suportados.",
                    title: "Atalhos de teclado",
                    reset: "Repor Todos para o Padrão",
                    shortcutDisabled: "Este atalho está atualmente desativado",
                    pressKey: "Pressione qualquer tecla...",
                    conflictError: "Este atalho já está a ser utilizado por: {{key}}",
                    closeTab: {
                        label: "Fechar Separador",
                        description: "Fechar o separador atualmente ativo"
                    },
                    newTab: {
                        label: "Novo Separador",
                        description: "Abrir um novo separador com o canal atual"
                    },
                    cycleTabsForward: {
                        label: "Ciclar Separadores para a Frente",
                        description: "Mudar para o próximo separador"
                    },
                    cycleTabsBackward: {
                        label: "Ciclar Separadores para Trás",
                        description: "Mudar para o separador anterior"
                    }
                },
                closeTabKeybind: {
                    label: "Atalho de Fechar Separador",
                    description: "Atalho de teclado para fechar o separador atual"
                },
                newTabKeybind: {
                    label: "Atalho de Novo Separador",
                    description: "Atalho de teclado para abrir um novo separador"
                },
                cycleTabForwardKeybind: {
                    label: "Atalho de Ciclar para Frente",
                    description: "Atalho de teclado para ir para o próximo separador"
                },
                cycleTabBackwardKeybind: {
                    label: "Atalho de Ciclar para Trás",
                    description: "Atalho de teclado para ir para o separador anterior"
                },
                showTabNumbers: {
                    label: "Mostrar Números nos Separadores",
                    description: "Mostrar crachás numerados nos separadores para indicar atalhos de teclado"
                },
                tabNumberPosition: {
                    label: "Posição do Número no Separador",
                    description: "Onde exibir o número no separador",
                    left: "Lado esquerdo (antes do ícone)",
                    right: "Lado direito (depois do conteúdo)"
                },
                animations: {
                    label: "Animações"
                },
                animationHover: {
                    label: "Animação ao Passar Rato",
                    description: "Ativar efeitos de elevação e escala ao passar o rato"
                },
                animationSelection: {
                    label: "Animação na Seleção",
                    description: "Ativar animações de seleção (brilho da borda, elevação)"
                },
                animationDragDrop: {
                    label: "Animação ao Arrastar e Largar",
                    description: "Ativar efeitos fantasma ao arrastar e largar"
                },
                animationEnterExit: {
                    label: "Animação ao Entrar/Sair",
                    description: "Ativar animações de deslize ao criar/fechar separadores"
                },
                animationIconPop: {
                    label: "Animação de Destaque de Ícone",
                    description: "Ativar animação de escala do ícone ao selecionar"
                },
                animationCloseRotation: {
                    label: "Animação de Rotação ao Fechar",
                    description: "Ativar animação de rotação para botões de fechar"
                },
                animationPlusPulse: {
                    label: "Animação de Pulsação do Botão Mais",
                    description: "Ativar animação de pulsação para o botão mais"
                },
                animationMentionGlow: {
                    label: "Animação de Brilho de Menção",
                    description: "Ativar brilho vermelho pulsante para menções"
                },
                animationCompactExpand: {
                    label: "Animação ao Compactar/Expandir",
                    description: "Ativar expansão suave para separadores compactos"
                },
                animationSelectedBorder: {
                    label: "Animação na Borda Selecionada",
                    description: "Ativar estilo de borda e brilho para separadores selecionados"
                },
                animationSelectedBackground: {
                    label: "Animação no Fundo Selecionado",
                    description: "Ativar mudança de cor de fundo para separadores selecionados"
                },
                animationTabShadows: {
                    label: "Animação de Sombras",
                    description: "Ativar efeitos de sombra nos separadores"
                },
                animationTabPositioning: {
                    label: "Animação de Posicionamento",
                    description: "Ativar transições suaves quando os separadores mudam de posição"
                },
                animationResizeHandle: {
                    label: "Animação da Pega de Redimensionamento",
                    description: "Ativar animação de desvanecimento para a pega de redimensionamento"
                },
                animationQuestsActive: {
                    label: "Animação de Missões Ativas",
                    description: "Ativar animações de gradiente no separador de Missões quando estas estão ativas"
                },
                compactAutoExpandSelected: {
                    label: "Auto-Expandir Selecionado em Compacto",
                    description: "Expandir automaticamente separadores compactos quando selecionados para mostrar o nome completo do canal"
                },
                compactAutoExpandOnHover: {
                    label: "Auto-Expandir ao Passar Rato em Compacto",
                    description: "Expandir automaticamente separadores compactos ao passar o rato para mostrar o nome completo do canal"
                },
                openInNewTabAutoSwitch: {
                    label: "Mudar Auto ao Abrir em Novo Separador",
                    description: "Mudar automaticamente para novos separadores abertos através do menu 'Abrir em Novo Separador'"
                },
                bookmarksIndependentFromTabs: {
                    label: "Marcadores Independentes dos Separadores",
                    description: "Os marcadores navegam independentemente sem afetar a barra de separadores ativos"
                },
                showResizeHandle: {
                    label: "Mostrar Pega de Redimensionamento",
                    description: "Mostrar pega para ajustar a largura do separador ao passar o rato"
                },
                openNewTabsInCompactMode: {
                    label: "Abrir Novos Separadores em Modo Compacto",
                    description: "Abrir todos os novos separadores em modo compacto por padrão"
                },
                newTabButtonBehavior: {
                    label: "Comportamento do Botão Novo Separador",
                    description: "O botão de novo separador (+) segue os separadores em vez de ficar fixo à direita"
                },
                oneTabPerServer: {
                    label: "Um Separador Por Servidor",
                    description: "Limitar a um separador por servidor, para que abrir um novo canal nesse servidor use o separador existente."
                },
                maxOpenTabs: {
                    label: "Máximo de Separadores Abertos",
                    description: "Número máximo de separadores abertos (0 = ilimitado)"
                }
            },
            tabs: {
                startup: "Separadores Iniciais",
                currently: "Definir para separadores abertos atualmente"
            },
            toast: {
                notRestoring: "A não restaurar separadores pois KeepCurrentChannel está ativado",
                failed: {
                    restore: "Falha ao restaurar separadores",
                    saved: "Falha ao carregar separadores guardados"
                }
            },
            text: {
                folder: "Pasta"
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Adiciona um contador de caracteres à caixa de chat",
            option: {
                colorEffects: {
                    label: "Efeitos de Cor",
                    description: "Ativar ou desativar efeitos de cor ao aproximar-se do limite de caracteres"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Oculta todos os canais em categorias fechadas, mesmo que tenham mensagens não lidas."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Remove emojis e decorações dos nomes dos canais. Volta ao original enquanto editas o canal.",
            option: {
                ignoredChannels: {
                    description: "Lista separada por vírgulas de IDs de canais a não alterar.",
                    label: "Canais ignorados"
                }
            },
            text: {
                keepOriginalName: "Manter nome original"
            }
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Remove automaticamente elementos de rastreio dos URLs que envia"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Clique nos cargos nos perfis de utilizador e na lista de membros para ver quais os membros que os possuem.",
            modal: {
                loading: "A carregar membros...",
                noMembers: "Nenhum membro encontrado.",
                unknown: "Cargo Desconhecido",
                andMore: "e mais {{count}}"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Permite-lhe ocultar localmente quase todo o conteúdo de qualquer utilizador",
            replying: "A responder a mensagem bloqueada",
            option: {
                hideVc: {
                    label: "Ocultar Canais de Voz",
                    description: "Ocultar canais de voz que contenham utilizadores bloqueados."
                },
                usersToBlock: {
                    label: "Utilizadores a Bloquear",
                    description: "IDs de utilizador separados por vírgula e um espaço"
                },
                hideBlockedUsers: {
                    label: "Ocultar Utilizadores Bloqueados",
                    description: "Se os utilizadores bloqueados devem ser ocultados em todo o lado"
                },
                hideBlockedMessages: {
                    label: "Ocultar Mensagens Bloqueadas",
                    description: "Se as mensagens de utilizadores bloqueados devem ser totalmente ocultadas"
                },
                hideEmptyRoles: {
                    label: "Ocultar Cargos Vazios",
                    description: "Se os cabeçalhos de cargo devem ser ocultados se todos os seus membros estiverem bloqueados"
                },
                blockedReplyDisplay: {
                    label: "Exibição de Resposta Bloqueada",
                    description: "O que deve aparecer em vez da mensagem quando alguém responde a um utilizador oculto",
                    displayText: "Mostrar texto a dizer que uma mensagem oculta foi respondida",
                    hideReply: "Absolutamente nada"
                },
                guildBlackList: {
                    label: "Lista Negra de Servidores",
                    description: "IDs de servidores onde a funcionalidade deve ser desativada"
                },
                guildWhiteList: {
                    label: "Lista Branca de Servidores",
                    description: "IDs de servidores onde a funcionalidade deve ser ativada"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Recriação da antiga experiência de tema do cliente. Adicione uma cor ao tema do seu cliente Discord",
            title: "Cor do Tema",
            add: "Adicione uma cor ao tema do seu cliente Discord",
            option: {
                color: {
                    label: "Cor"
                },
                resetColor: {
                    label: "Repor Cor"
                }
            },
            error: {
                modal: {
                    title: "O seu tema não ficará bem!",
                    contrast: "A cor selecionada não terá contraste suficiente com o texto",
                    nitro: "Temas Nitro não são suportados",
                    switch: "Mudar para modo {{oppositeTheme}}",
                    disable: "Desativar Tema Nitro",
                    reset: "Repor Cor do Tema"
                }
            },
            text: {
                dark: "Escuro",
                light: "Claro"
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "Adiciona mais opções de FPS e duração aos Clipes, além de marcação RPC!",
            minutes: "Minutos",
            option: {
                richPresenceTagging: {
                    label: "Marcação de Rich Presence",
                    description: "Quando os clipes devem ser marcados com o Rich Presence atual?",
                    always: "Sempre",
                    only: "Apenas quando o início ou fim do nome da atividade coincidir",
                    never: "Nunca"
                },
                clipsLink: {
                    label: "Link de Clipes",
                    link: "Mude as opções de FPS e duração nas definições de Clipes!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Remove os ícones amigáveis para daltónicos dos estados, tal como o Discord de 2015-2017"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Paleta de comandos ao estilo Raycast para executar ações em qualquer lugar do Discord",
            action: {
                command: {
                    label: "Executar Comando",
                    description: "Criar um atalho para outro comando da paleta por ID. Use o seletor se não tiver a certeza do identificador."
                },
                settings: {
                    label: "Abrir Página de Definições",
                    description: "Ir diretamente para uma página de definições do Discord. Escolha uma página no seletor."
                },
                url: {
                    label: "Abrir URL",
                    description: "Abrir um link. Use links https:// para melhor compatibilidade."
                },
                macro: {
                    label: "Executar Macro",
                    description: "Executar uma sequência de comandos por ordem. Adicione passos através do seletor."
                }
            },
            category: {
                auto: "Auto (usar posicionamento padrão)",
                default: {
                    label: "Ações Rápidas",
                    description: "Atalhos comuns do Plexcord"
                },
                plugins: {
                    label: "Plugins",
                    description: "Ativar, desativar e configurar plugins do Plexcord",
                    enable: {
                        label: "Ativar Plugins"
                    },
                    disable: {
                        label: "Desativar Plugins"
                    },
                    settings: {
                        label: "Definições de Plugin"
                    },
                    toolbox: {
                        label: "Ações de Plugin"
                    },
                    chatbar: {
                        label: "Botões da Barra de Chat"
                    },
                    changes: {
                        label: "Alterações de Plugin"
                    }
                },
                context: {
                    label: "Contexto Atual",
                    description: "Ações para o canal e servidor selecionados"
                },
                updates: {
                    label: "Atualizações",
                    description: "Mantenha-se atualizado com o Plexcord"
                },
                discordSettings: {
                    label: "Definições do Discord",
                    description: "Ir para as páginas de configuração do Discord"
                },
                custom: {
                    label: "Comandos Personalizados",
                    description: "Entradas da paleta de comandos definidas pelo utilizador"
                },
                sessions: {
                    label: "Ferramentas de Sessão",
                    description: "Utilitários para gerir a sua sessão do Discord"
                },
                guilds: {
                    label: "Servidores",
                    description: "Navegue rapidamente para os seus servidores"
                },
                friends: {
                    label: "Amigos",
                    description: "Navegue rapidamente para os seus amigos"
                },
                action: {
                    label: "Ação"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Abrir Definições do Plexcord",
                        plugin: "Abrir Definições do Plugin"
                    }
                },
                reload: {
                    label: "Recarregar Discord",
                    description: "Recarrega a janela atual do Discord"
                }
            },
            command: {
                enable: "Ativar {{pluginName}}",
                enabled: "Ativado {{pluginName}}",
                disable: "Desativar {{pluginName}}",
                disabled: "Desativado {{pluginName}}",
                failed: "Falha no comando:",
                toggleFailed: "Falha ao alternar {{pluginName}}.",
                pluginSettings: "Definições de {{pluginName}}",
                untitled: "Comando sem título",
                new: "Novo Comando",
                error: {
                    enter: "Introduza um ID de comando ou escolha um abaixo.",
                    noCommand: "Nenhum comando corresponde a este ID."
                },
                discord: {
                    account: "Abrir A Minha Conta",
                    privacy: "Abrir Privacidade e Segurança",
                    notifications: "Abrir Notificações",
                    voice: "Abrir Voz e Vídeo",
                    text: "Abrir Texto e Imagens",
                    appearance: "Abrir Aparência",
                    accessibility: "Abrir Acessibilidade",
                    keybinds: "Abrir Atalhos de Teclado",
                    advanced: "Abrir Avançado",
                },
                updates: {
                    check: {
                        label: "Verificar Atualizações",
                        description: "Verificar atualizações do Plexcord",
                        one: "Uma atualização disponível",
                        multiple: "{{count}} atualizações disponíveis",
                        none: "Nenhuma atualização disponível",
                        failed: "Falha ao verificar atualizações."
                    },
                    changelog: {
                        label: "Ver Notas de Lançamento",
                        description: "Abre as notas de lançamento do Plexcord"
                    }
                },
                read: {
                    mark: {
                        label: "Marcar {{channelLabel}} como Lido"
                    }
                },
                pin: {
                    open: {
                        label: "Abrir Mensagens Fixadas de {{channelLabel}}"
                    },
                    toggle: {
                        label: "Alternar Fixação no Último Comando"
                    }
                },
                channel: {
                    mute: {
                        label: "Silenciar {{channelLabel}}",
                        oneHour: "Silenciar {{channelLabel}} por 1 hora",
                        untilTomorrow: "Silenciar {{channelLabel}} até amanhã",
                    },
                    unmute: {
                        label: "Reativar Som de {{channelLabel}}",
                    },
                    reopen: {
                        label: "Reabrir Último DM Fechado"
                    },
                    dm: {
                        open: {
                            label: "Abrir DM com {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Abrir Definições de {{guildLabel}}"
                    },
                    navigate: {
                        label: "Navegar para {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "Definir Não Incomodar por 30 minutos",
                    oneHourDnd: "Definir Não Incomodar por 1 hora",
                    cancelStatusReset: "Cancelar Temporizador de Estado"
                },
                status: {
                    set: {
                        online: "Definir Estado: Online",
                        idle: "Definir Estado: Ausente",
                        dnd: "Definir Estado: Não Incomodar",
                        invisible: "Definir Estado: Invisível"
                    }
                },
                toggle: {
                    streamer: "Alternar Modo de Streamer",
                    mute: "Alternar Silenciar Microfone",
                    deafen: "Alternar Silenciar Áudio",
                },
                notification: {
                    clear: {
                        label: "Limpar Notificações de Área de Trabalho"
                    }
                },
                palette: {
                    settings: {
                        label: "Abrir Definições da Paleta de Comandos",
                        description: "Configurar o plugin Command Palette"
                    }
                },
                recent: {
                    label: "Mostrar Comandos Recentes",
                    description: "Exibe os últimos comandos executados",
                    rerun: "Executar Novamente Último Comando"
                },
                plugin: {
                    reload: {
                        label: "Recarregar Todos os Plugins",
                        description: "Tenta recarregar todos os plugins ativos"
                    },
                    enable: {
                        label: "Ativar Todos os Plugins"
                    },
                    disable: {
                        label: "Desativar Todos os Plugins não obrigatórios"
                    },
                    restart: {
                        label: "Reiniciar Plexcord",
                        description: "Recarrega a janela do cliente Discord"
                    }
                },
                quickCSS: {
                    label: "Alternar Quick CSS"
                },
                transparentity: {
                    label: "Alternar Transparência da Janela"
                },
                theme: {
                    open: {
                        label: "Abrir Definições de Tema do Cliente"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Pesquisar comandos",
                noCommand: "Nenhum comando encontrado",
                add: {
                    title: "Adicionar Comando"
                },
                choose: {
                    title: "Escolher Comando"
                },
                command: {
                    palette: {
                        label: "Paleta de Comandos",
                        placeholder: "Escreva um comando",
                        filtering: "A filtrar por {{tags}}",
                        noCommand: "Nenhum comando encontrado",
                        pin: "Fixar comando",
                        unpin: "Desafixar comando"
                    },
                    target: {
                        label: "ID do Comando Alvo",
                        placeholder: "Introduza o ID do comando",
                        choose: "Escolher Comando"
                    },
                    custom: {
                        label: "Comandos Personalizados",
                        description: "1) Nomeie o comando · 2) Adicione descrição/palavras-chave/etiquetas/categoria opcional · 3) Escolha uma ação e preencha os detalhes.",
                        auto: "Auto (padrão)",
                        expand: "Expandir",
                        collapse: "Recolher",
                        collapsed: {
                            label: "Rótulo",
                            description: "Nome de Exibição",
                            advanced: {
                                hide: "Ocultar opções avançadas",
                                show: "Mostrar opções avançadas"
                            },
                            subtitle: {
                                label: "Descrição",
                                placeholder: "Subtítulo opcional"
                            },
                            keywords: {
                                label: "Palavras-chave",
                                placeholder: "Palavras-chave separadas por vírgulas"
                            },
                            tags: {
                                label: "Etiquetas",
                                placeholder: "Etiquetas separadas por vírgulas"
                            },
                            suggestion: {
                                label: "Sugestão"
                            },
                            chooseCommand: {
                                label: "Escolha onde este comando aparece na paleta."
                            },
                            danger: {
                                label: "Mostrar como perigoso"
                            }
                        },
                        remove: "Remover Comando",
                        add: "Adicionar Comando"
                    }
                },
                settings: {
                    noSelected: "Nenhuma página selecionada",
                    current: "Página Atual",
                    choose: "Escolher Página..."
                },
                url: {
                    url: "URL",
                    error: "Use links http:// ou https://.",
                    valid: "Introduza um URL válido.",
                    open: {
                        external: "Abrir externamente",
                    }
                },
                macro: {
                    sequence: {
                        label: "Sequência de Comandos",
                        placeholder: "comando-a, comando-b"
                    },
                    addStep: "Adicionar Passo",
                    unknownId: "IDs de Comando Desconhecidos"
                }
            },
            status: {
                online: "Online",
                idle: "Ausente",
                dnd: "Não Incomodar",
                invisible: "Invisível"
            },
            tag: {
                core: "Núcleo",
                navigation: "Navegação",
                utility: "Utilitário",
                developer: "Desenvolvedor",
                customization: "Personalização",
                plugins: "Plugins",
                session: "Sessão",
                context: "Contexto",
                custom: "Personalizado",
                guilds: "Servidores",
                friends: "Amigos",
                other: "Outro"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Não foi possível encontrar o botão de chat '{{label}}'.",
                        failedToTrigger: "Falha ao ativar {{label}}.",
                        activated: "{{label}} ativado."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Controlos de silenciar canal indisponíveis",
                        muted: "Canal silenciado.",
                        unmuted: "Som do canal reativado.",
                        failed: "Falha ao atualizar estado de silêncio do canal."
                    },
                    dm: {
                        no: "Nenhum DM fechado registado nesta sessão.",
                        reOpened: "Reaberto o último DM fechado.",
                        noAvailable: "O DM já não está disponível."
                    }
                },
                command: {
                    loop: "Loop de comandos detetado na execução da macro.",
                    notFound: "Comando {{commandId}} não encontrado.",
                    unsupported: "Ação de comando personalizado não suportada.",
                    failedToRun: "Falha ao executar {{label}}.",
                    notMetadata: "Metadados do plugin Command Palette indisponíveis."
                },
                guild: {
                    mute: {
                        unavailable: "Controlos de silenciar servidor indisponíveis",
                        muted: "Servidor silenciado.",
                        unmuted: "Som do servidor reativado.",
                        failed: "Falha ao atualizar estado de silêncio do servidor."
                    },
                    settings: {
                        unable: "Não foi possível abrir as definições do servidor.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Não foi possível abrir o painel de mensagens fixadas.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Reposição de estado agendada cancelada.",
                        unableToChange: "Não é possível alterar o estado agora.",
                        reverted: "Estado revertido para {{status}}.",
                        dnd: "Não Incomodar por {{duration}} minutos."
                    },
                    change: {
                        unableToChange: "Não é possível alterar o estado agora.",
                        changed: "Estado alterado para {{status}}."
                    }
                },
                read: {
                    marked: "Marcado {{channelLabel}} como lido.",
                    failed: "Falha ao marcar canal como lido."
                },
                route: {
                    unable: "Não foi possível abrir {{destination}}.",
                },
                notification: {
                    cleared: "Todas as notificações limpas.",
                    failed: "Falha ao limpar notificações.",
                    notSupported: "Limpeza de notificações não suportada."
                },
                streamerMode: {
                    enabled: "Modo de Streamer ativado.",
                    disabled: "Modo de Streamer desativado.",
                },
                voice: {
                    micToggle: {
                        muted: "Microfone silenciado.",
                        unmuted: "Microfone ativado."
                    },
                    deafenToggle: {
                        deafened: "O seu áudio está agora silenciado.",
                        undeafened: "O seu áudio já não está silenciado."
                    }
                },
                quickCSS: {
                    enabled: "Quick CSS ativado.",
                    disabled: "Quick CSS desativado."
                },
                transparentity: {
                    enabled: "Transparência de Janela ativada.",
                    disabled: "Transparência de Janela desativada."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} está desativado.",
                        disable: "{{pluginName}} está desativado. Ative o plugin para usar esta ação."
                    },
                    required: {
                        label: "{{pluginName}} requer um reinício para recarregar."
                    },
                    stop: {
                        failed: "Falha ao parar {{pluginName}}."
                    },
                    restart: {
                        failed: "Falha ao reiniciar {{pluginName}}."
                    },
                    reload: {
                        label: "Recarregado {{pluginName}}.",
                        noPlugin: "Nenhum plugin foi recarregado.",
                        reloaded: "Recarregado(s) {{count}} plugin(s)."
                    },
                    toggle: {
                        enabled: "Ativado(s) {{changed}} plugin(s).",
                        disabled: "Desativado(s) {{changed}} plugin(s).",
                        noChanged: "Nenhum plugin mudou de estado."
                    },
                    run: {
                        failed: {
                            label: "Falha ao executar {{pluginName}}: {{actionLabel}}."
                        }
                    }
                },
                commandDeleted: "Comando eliminado.",
                statusSetToLabel: "Estado definido como {{label}}.",
                themeSetToLabel: "Tema definido como {{label}}.",
                noSettingsPageWas: "Não foi indicada nenhuma página de definições.",
                unableToOpenLabel: "Não foi possível abrir {{label_that_settings_page}}.",
                failedToStartDependencies: "Falha ao iniciar dependências: {{join}}",
                messageSentToUsername: "Mensagem enviada para {{username}}.",
                enabledRestart: "{{name}} ativado. Reinicia para aplicar.",
                disabledRestart: "{{name}} desativado. Reinicia para aplicar.",
                enabled: "{{name}} ativado.",
                disabled: "{{name}} desativado.",
                errorStarting: "Erro ao iniciar {{name}}.",
                errorStopping: "Erro ao parar {{name}}."
            },
            display: {
                channel: {
                    current: "Canal Atual",
                    group: "DM de Grupo",
                    direct: "Mensagem Direta"
                },
                guild: {
                    current: "Servidor Atual",
                }
            },
            option: {
                hotkey: {
                    label: "Tecla de Atalho",
                    description: "Tecla de atalho usada para abrir a paleta de comandos",
                    recording: "Pressione qualquer tecla...",
                    reset: "Repor"
                },
                visualStyle: {
                    label: "Estilo Visual",
                    description: "Aparência da paleta",
                    classic: "Clássico",
                    polished: "Polido"
                },
                showTags: {
                    label: "Mostrar Etiquetas",
                    description: "Exibir etiquetas para os comandos"
                },
                enableTagFilter: {
                    label: "Ativar Filtro de Etiquetas",
                    description: "Mostrar a barra de filtragem por etiquetas"
                },
                customCommands: {
                    label: "Comandos Personalizados",
                    description: "Gerir entradas personalizadas da paleta de comandos"
                },
                closeAfterExecute: {
                    description: "Fechar a paleta depois de executar um comando.",
                    label: "Fechar após executar"
                }
            },
            template: {
                alias: {
                    label: "Comando de Atalho",
                    description: "Espelhar um comando existente"
                },
                settings: {
                    label: "Definições",
                    description: "Abrir Definições do Discord"
                },
                url: {
                    label: "Link",
                    description: "Abrir um URL externo"
                },
                macro: {
                    label: "Macro",
                    description: "Executar uma sequência de comandos"
                }
            },
            text: {
                insertTextInChat: "Inserir texto no chat",
                name: "Name",
                commandName: "Nome do comando",
                settingsPage: "Página de definições",
                searchSettingsPages: "Pesquisar páginas de definições...",
                text: "Texto",
                textToInsertInto: "Texto a inserir na caixa de chat",
                editCommand: "Editar comando",
                deleteCommand: "Eliminar comando",
                createCustomCommand: "Criar comando personalizado",
                light: "Claro",
                ash: "Cinza",
                dark: "Escuro",
                onyx: "Ónix",
                toggleMute: "Alternar silêncio",
                toggleDeafen: "Alternar ensurdecer",
                setStatus: "Definir estado",
                searchStatuses: "Pesquisar estados...",
                setLabel: "Definir {{label}}",
                toggleTheme: "Alternar tema",
                openServer: "Abrir servidor",
                openChannel: "Abrir canal",
                openDm: "Abrir MP",
                goHome: "Ir para o início",
                goToServer: "Ir para o servidor",
                searchServers: "Pesquisar servidores...",
                goToChannel: "Ir para o canal",
                searchChannels: "Pesquisar canais...",
                searchFriends: "Pesquisar amigos...",
                myAccount: "A minha conta",
                profiles: "Perfis",
                dataPrivacy: "Dados e privacidade",
                devices: "Dispositivos",
                connections: "Ligações",
                appearance: "Aspeto",
                accessibility: "Acessibilidade",
                voiceVideo: "Voz e vídeo",
                chat: "Chat",
                textImages: "Texto e imagens",
                notifications: "Notificações",
                keybinds: "Atalhos de teclado",
                authorizedApps: "Aplicações autorizadas",
                familyCenter: "Centro familiar",
                advanced: "Avançado",
                plexcord: "Plexcord",
                plexcordPlugins: "Plugins do Plexcord",
                plexcordThemes: "Temas do Plexcord",
                plexcordUpdater: "Atualizador do Plexcord",
                plexcordChangelog: "Registo de alterações do Plexcord",
                openQuickcss: "Abrir QuickCSS",
                openUpdater: "Abrir atualizador",
                openChangelog: "Abrir registo de alterações",
                restartDiscord: "Reiniciar o Discord",
                managePlugins: "Gerir plugins",
                searchPlugins: "Pesquisar plugins...",
                sendDm: "Enviar MP",
                recipient: "Destinatário",
                message: "Mensagem",
                messageContent: "Conteúdo da mensagem",
                openPaletteHotkey: "Atalho para abrir a paleta",
                actions: "Ações",
                preview: "Pré-visualização",
                openCommand: "Abrir comando",
                copyAnswer: "Copiar resposta",
                openDetails: "Abrir detalhes",
                calculator: "Calculadora",
                expression: "Expressão",
                result: "Resultado",
                copyExpression: "Copiar expressão",
                pinned: "Afixado",
                suggestions: "Sugestões",
                setAlias: "Definir alcunha",
                aliasForLabel: "Alcunha para {{label}}",
                leaveEmptyToRemove: "Deixa vazio para remover",
                command: "Comando",
                noResults: "Sem resultados",
                addFile: "Adicionar ficheiro",
                saveCommand: "Guardar comando",
                createCommand: "Criar comando",
                nameRequired: "O nome é obrigatório.",
                enterValidUrl: "Introduz uma URL válida.",
                pickSettingsPage: "Escolhe uma página de definições nas sugestões.",
                textRequired: "O texto é obrigatório.",
                commandSaved: "Comando guardado.",
                commandCreated: "Comando criado.",
                editCustomCommand: "Editar comando personalizado",
                disablePlugin: "Desativar plugin",
                enablePlugin: "Ativar plugin",
                pickRecipient: "Escolhe um destinatário nas sugestões.",
                addMessageOrFile: "Adiciona uma mensagem ou um ficheiro.",
                pressKeys: "Prima as teclas...",
                answerCopied: "Resposta copiada para a área de transferência.",
                calculationCopied: "Cálculo copiado para a área de transferência.",
                unpinCommand: "Desafixar comando",
                pinCommand: "Fixar comando",
                saveAlias: "Guardar apelido",
                changeHotkey: "Alterar atalho",
                recordHotkey: "Gravar atalho",
                pressKeyCombo: "Prima uma combinação de teclas, Backspace para limpar, Esc para cancelar",
                searchIn: "Pesquisar em {{title}}...",
                searchCommands: "Pesquisar comandos...",
                somethingWentWrong: "Algo correu mal.",
                remove: "Remover",
                enabled: "Ativado",
                disabled: "Desativado",
                sectionNavigation: "Navegação",
                sectionCustom: "Personalizado",
                sectionPlugins: "Plugins",
                sectionMessaging: "Mensagens",
                current: "Atual",
                submit: "Submeter"
            },
            description2: "Paleta de comandos ao estilo Raycast para executar ações em qualquer lugar do Discord"
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Desativa mensagens/erros irritantes na consola",
            option: {
                disableLoggers: {
                    label: "Desativar Loggers",
                    description: "Desativa os sistemas de registo do Discord"
                },
                disableSpotifyLogger: {
                    label: "Desativar Logger do Spotify",
                    description: "Desativa o logger do Spotify, que divulga informações da conta e tokens de acesso"
                },
                whitelistedLoggers: {
                    label: "Loggers na Lista Branca",
                    description: "Lista de loggers separados por ponto e vírgula (;) a permitir mesmo que outros estejam ocultos"
                },
                allowLevel: {
                    label: "Nível Permitido",
                    description: "Permitir sempre loggers destes tipos",
                    filter: "Lista de Filtros"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Adiciona atalhos mais curtos para várias coisas na janela. Execute `shortcutList` para ver a lista."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Permite especificar certas palavras de gatilho que serão desfocadas por padrão. Clicar no conteúdo revela-o.",
            option: {
                flagged: {
                    label: "Sinalizado",
                    flagged: "Palavras Sinalizadas",
                    placeholder: "Palavra"
                },
                onClick: {
                    label: "Ao Clicar",
                    description: "Apenas mostrar conteúdo de gatilho ao clicar em vez de ao passar o rato"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Permite copiar emojis como uma string formatada (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Copiar Unicode",
                    description: "Copiar o caractere unicode bruto em vez de :nome: para emojis padrão (👽)"
                }
            },
            context: {
                copy: "Copiar Markdown do Emoji"
            },
            toast: {
                success: "Sucesso! Markdown do emoji copiado."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Adiciona un botão aos anexos de ficheiros de texto para copiar o seu conteúdo",
            copied: "Copiado!",
            large: "Ficheiro demasiado grande para copiar.",
            copyFileContents: "Copiar Conteúdo do Ficheiro"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Um plugin para copiar as cores de gradiente do perfil das pessoas para a área de transferência.",
            copy: "Copiar cores do perfil do servidor",
            toast: {
                noColor: "Nenhuma cor de perfil encontrada!",
                copied: "Cores do perfil copiadas para a área de transferência!",
                error: "Erro ao copiar cores do perfil!"
            },
            text: {
                formatted: "Cor primária #{{primary}}, Cor secundária #{{secondary}}"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Copia o URL do estado do utilizador quando clica com o botão direito sobre ele",
            toast: {
                copied: "URL Copiado",
                error: "Erro ao copiar URL, verifique a consola para mais detalhes"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Adiciona um botão para copiar a menção do utilizador no menu de contexto, funciona melhor com ValidUser.",
            context: {
                copy: "Copiar Menção de Utilizador"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Adiciona uma opção 'Copiar URL do Utilizador' ao menu de contexto do utilizador.",
            context: {
                copy: "Copiar URL do Utilizador"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Plugin utilitário para gerir e possivelmente recuperar de falhas sem necessidade de reiniciar",
            option: {
                attemptToPreventCrashes: {
                    label: "Tentar Prevenir Falhas",
                    description: "Se deve tentar prevenir falhas do Discord."
                },
                attemptToNavigateToHome: {
                    label: "Tentar Navegar para o Início",
                    description: "Se deve tentar navegar para o separador inicial após a recuperação de uma falha."
                }
            },
            toast: {
                crashed: {
                    title: "O Discord falhou!",
                    body: "Oh :( O Discord falhou duas vezes seguidas, não vamos tentar recuperar.",
                    update: "Ui, o Discord acabou de falhar... mas boas notícias, há uma atualização do Plexcord disponível que pode resolver isto! Gostaria de atualizar agora?",
                    recover: "A tentar recuperar...",
                    invalid: "Link de convite inválido ou expirado."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Use Ctrl+Enter para enviar mensagens (personalizável)",
            option: {
                submitRule: {
                    label: "Regra de Envio",
                    description: "A forma de enviar uma mensagem",
                    ctrlEnter: "Ctrl+Enter (Enter ou Shift+Enter para nova linha)",
                    shiftEnter: "Shift+Enter (Enter para nova linha)",
                    enter: "Enter (Shift+Enter para nova linha; padrão do Discord)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Enviar Mensagem no Meio de um Bloco de Código",
                    description: "Se deve enviar a mensagem mesmo estando no meio de um bloco de código"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Adiciona um boneco que segue o seu cursor.",
            modal: {
                furColor: "Cor do Pelo",
                outlineColor: "Cor do Contorno"
            },
            option: {
                buddy: {
                    label: "Companheiro",
                    description: "Escolha um companheiro de cursor",
                    oneko: "Oneko",
                    fathorse: "Cavalo Gordo"
                },
                speed: {
                    label: "Velocidade",
                    description: "Velocidade do seu companheiro",
                    invalid: "A velocidade deve ser maior que 0"
                },
                fps: {
                    label: "Taxa de Quadros",
                    description: "Fluidez da animação do companheiro",
                    invalid: "A taxa de quadros deve ser maior que 0"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Cor do Pelo",
                    description: "Cor hexadecimal do pelo para o Oneko"
                },
                outlineColor: {
                    label: "Cor do Contorno",
                    description: "Cor hexadecimal do contorno para o Oneko"
                },
                fathorseSection: {
                    label: "Cavalo Gordo"
                },
                size: {
                    label: "Tamanho",
                    description: "Tamanho do cavalo gordo",
                    invalid: "O tamanho deve ser maior que 0"
                },
                fade: {
                    label: "Desvanecer",
                    description: "Se o cavalo deve desvanecer quando o cursor está perto"
                },
                freeroam: {
                    label: "Movimento Livre",
                    description: "Se o cavalo deve vaguear livremente quando inativo"
                },
                shake: {
                    label: "Abanar",
                    description: "Se o cavalo deve abanar a janela quando está a caminhar"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Personalize ícones de pastas com qualquer imagem PNG",
            option: {
                solidIcon: {
                    label: "Ícone Sólido",
                    description: "Usar um fundo sólido atrás da imagem"
                },
                folderIcons: {
                    label: "Ícones de Pasta",
                    description: "Definições de ícones de pasta"
                }
            },
            modal: {
                change: "Alterar o tamanho do ícone da pasta",
                save: "Guardar",
                unset: "Remover",
                set: "Definir Novo Ícone",
                hover: "Pode ter de passar o rato sobre a pasta após definir para que esta atualize."
            },
            context: {
                changeIcon: "Alterar ícone"
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Permite definir o tempo antes do Discord ficar ausente (ou desativar ausência automática)",
            backOnline: "Bem-vindo de volta! Clique no botão para ficar online. Clique no X para continuar ausente até recarregar.",
            exit: "Sair do Estado Ausente",
            option: {
                idleTimeout: {
                    label: "Tempo Limite de Ausência",
                    description: "Minutos antes do Discord ficar ausente (0 para desativar)"
                },
                remainInIdle: {
                    label: "Permanecer Ausente",
                    description: "Quando voltar ao Discord, permanecer ausente até confirmar que quer ficar online"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Adicione um Rich Presence (estado de jogo) totalmente personalizável ao seu perfil do Discord",
            goTo: "Vá ao {{portal}} para criar uma aplicação e obter o ID da aplicação.",
            upload: "Carregue imagens no separador Rich Presence para obter as chaves das imagens.",
            image: "Se quiser usar um link de imagem, descarregue a imagem e volte a carregá-la no {{imgur}}.",
            button: "Não pode ver os seus próprios botões no seu perfil, mas todos os outros verão sem problemas.",
            font: "Alguns textos unicode estranhos (fontes como 𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘) podem fazer com que o rich presence não apareça.",
            placeholder: "Introduza um valor",
            select: "Selecione uma opção",
            error: {
                appIdInvalid: "O ID da aplicação deve ser um número válido.",
                notice: "Aviso",
                sharing: "A partilha de atividade não está ativada, por isso as pessoas não poderão ver o teu Rich Presence personalizado!",
                enable: "Ativar",
                validStream: "O link de transmissão deve ser um URL válido.",
                mustBeURL: "Deve ser um URL válido.",
                streamCharacters: "O link de transmissão não pode ter mais de 512 caracteres.",
                dontUse: "Não use um link do Discord. Use um link de imagem do Imgur.",
                imgur: "O link do Imgur deve ser um link direto para a imagem (ex: https://i.imgur.com/...).",
                tenor: "O link do Tenor deve ser um link direto para o GIF.",
                required: "Este campo é obrigatório.",
                tooLong: "Não deve ter mais de {{maxLength}} caracteres.",
                mustBeNumber: "Deve ser um número.",
                mustBePositive: "Deve ser un número positivo.",
                startTimeInvalid: "O carimbo de data/hora inicial deve ser maior que 0.",
                endTimeInvalid: "O carimbo de data/hora final deve ser maior que 0."
            },
            option: {
                appId: {
                    label: "ID da Aplicação",
                    description: "ID da aplicação (obrigatório)"
                },
                appName: {
                    label: "Nome da Aplicação",
                    description: "Nome da aplicação (obrigatório)"
                },
                details: {
                    label: "Detalhes",
                    description: "Detalhes (linha 1)"
                },
                detailsURL: {
                    label: "URL dos Detalhes",
                    description: "URL clicável para os detalhes"
                },
                state: {
                    label: "Estado",
                    description: "Estado (linha 2)"
                },
                stateURL: {
                    label: "URL do Estado",
                    description: "URL clicável para o estado"
                },
                partySize: {
                    label: "Tamanho do Grupo",
                    description: "Tamanho atual do grupo (deve ser usado com o Tamanho Máximo)"
                },
                partyMax: {
                    label: "Tamanho Máximo do Grupo",
                    description: "Tamanho máximo do grupo"
                },
                type: {
                    label: "Tipo de Atividade",
                    description: "Tipo de atividade",
                    playing: "A jogar",
                    streaming: "A transmitir",
                    listening: "A ouvir",
                    watching: "A ver",
                    competing: "A competir"
                },
                streamLink: {
                    label: "Link da Transmissão",
                    description: "Link do Twitch.tv ou YouTube.com (apenas para o tipo Transmitir)"
                },
                timestampMode: {
                    label: "Modo de Carimbo de Tempo",
                    description: "O que o tempo deve mostrar",
                    none: "Nenhum",
                    sinceDiscordOpen: "Desde que o Discord abriu",
                    sameAsCurrentTime: "Igual à sua hora atual",
                    custom: "Hora Personalizada"
                },
                startTime: {
                    label: "Hora de Início (em milissegundos)",
                    description: "Carimbo de início (apenas para modo personalizado)"
                },
                endTime: {
                    label: "Hora de Fim (em milissegundos)",
                    description: "Carimbo de fim (apenas para modo personalizado)"
                },
                imageBig: {
                    label: "Chave da Imagem Grande",
                    description: "Chave da imagem grande (deve ser carregada no portal)"
                },
                imageBigTooltip: {
                    label: "Dica da Imagem Grande",
                    description: "Texto ao passar o rato na imagem grande"
                },
                imageBigURL: {
                    label: "URL da Imagem Grande",
                    description: "URL clicável da imagem grande"
                },
                imageSmall: {
                    label: "Chave da Imagem Pequena",
                    description: "Chave da imagem pequena"
                },
                imageSmallTooltip: {
                    label: "Dica da Imagem Pequena",
                    description: "Texto ao passar o rato na imagem pequena"
                },
                imageSmallURL: {
                    label: "URL da Imagem Pequena",
                    description: "URL clicável da imagem pequena"
                },
                buttonOneText: {
                    label: "Texto do Botão 1",
                    description: "Texto do botão 1"
                },
                buttonOneURL: {
                    label: "URL do Botão 1",
                    description: "URL do botão 1"
                },
                buttonTwoText: {
                    label: "Texto do Botão 2",
                    description: "Texto do botão 2"
                },
                buttonTwoURL: {
                    label: "URL do Botão 2",
                    description: "URL do botão 2"
                },
                enablePresence: {
                    description: "Se a presença deve ser mostrada",
                    label: "Ativar presença"
                }
            },
            toast: {
                savedPresetName: "Predefinição {{name}} guardada.",
                loadedPresetName: "Predefinição {{name}} carregada.",
                deletedPresetSelectedpreset: "Predefinição {{selectedPreset}} eliminada."
            },
            text: {
                presetName: "Nome da predefinição",
                selectAPreset: "Seleciona uma predefinição",
                streamLinkTwitchOr: "Ligação da transmissão (Twitch ou YouTube, apenas se o tipo de atividade for A transmitir)",
                presets: "Predefinições",
                save: "Guardar",
                load: "Carregar",
                delete: "Eliminar",
                noSavedPresetsYet: "Ainda não há predefinições guardadas.",
                showCustomRpc: "Mostrar RPC personalizado",
                customRpcDisabled: "RPC personalizado desativado",
                theEnablePresenceSetting: "A opção \"Ativar presença\" está desativada, por isso a tua presença não será mostrada. Se não foi intencional, ativa-a abaixo.",
                activitySharingDisabled: "Partilha de atividade desativada",
                discordDeveloperPortal: "Portal de Programadores do Discord",
                imgur: "Imgur",
                enableActivitySharing: "Ativar partilha de atividade"
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Personalize os sons do Discord.",
            search: "Pesquisar sons",
            placeholder: "Pesquisar por nome ou ID",
            import: "Importar",
            export: "Exportar",
            reset: "Repor Tudo",
            debug: "Depurar",
            toast: {
                error: "Erro ao carregar ficheiro de som personalizado",
                exported: "Exportadas {{count}} definições (ficheiros de áudio não incluídos)",
                imported: "Definições importadas com sucesso",
                importError: "Erro ao importar definições. Verifique a consola.",
                reset: "Todas as substituições foram repostas!",
                overrideDescription: "Substituição para {{soundName}}",
                previewSound: "Erro ao reproduzir som.",
                playing: "Erro ao reproduzir som. O ficheiro pode estar corrompido.",
                invalidFile: "Nenhum ficheiro disponível para pré-visualização",
                uploaded: "Ficheiro carregado: {{fileName}}",
                uploadedError: "Erro ao carregar ficheiro: {{error}}",
                invalidExtension: "Tipo de ficheiro inválido. Carregue um ficheiro de áudio.",
                uploading: "A carregar ficheiro...",
                deleted: "Ficheiro eliminado com sucesso",
                deleteError: "Erro ao eliminar ficheiro.",
                loadingError: "Erro ao carregar som personalizado"
            },
            button: {
                preview: "Pré-visualizar",
                stop: "Parar",
                volume: "Volume",
                soundSource: "Fonte do Som",
                customFile: "Ficheiro Personalizado",
                uploadNew: "Carregar Novo",
                delete: "Eliminar Ficheiro Selecionado"
            },
            option: {
                default: "Padrão",
                custom: "Personalizado",
                select: "Selecione um ficheiro...",
                overrides: {
                    label: "Substituições"
                },
                soundpack: {
                    label: "Pacote de sons",
                    description: "Pacote de sons a utilizar em vez do definido no Discord.",
                    default: "Predefinição do Discord"
                }
            },
            type: {
                activityEnd: "Fim de Atividade",
                activityLaunch: "Início de Atividade",
                activityUserJoin: "Entrada de Utilizador em Atividade",
                activityUserLeft: "Saída de Utilizador em Atividade",
                asmrMessage: "Mensagem ASMR",
                bitMessage: "Mensagem de Bits",
                bopMessage: "Mensagem Bop",
                callCalling: "A Chamar",
                callRinging: "A Tocar",
                clipError: "Erro de Clipe",
                clipSave: "Clipe Guardado",
                ddrDown: "DDR Baixo",
                ddrLeft: "DDR Esquerda",
                ddrRight: "DDR Direita",
                ddrUp: "DDR Cima",
                deafen: "Som Desativado",
                discodo: "Discodo",
                disconnect: "Desconectar",
                duckyMessage: "Mensagem Ducky",
                hangStatusSelect: "Seleção de Estado",
                highfiveClap: "Palma Highfive",
                highfiveWhistle: "Assobio Highfive",
                humanMan: "Homem Humano",
                lofiMessage: "Mensagem LoFi",
                mention1: "Menção 1 (@cargo)",
                mention2: "Menção 2 (@everyone)",
                mention3: "Menção 3 (@here)",
                message1: "Mensagem 1 (Genérica)",
                message2: "Mensagem 2 (Resposta em Servidor)",
                message3: "Mensagem 3 (DMs e Grupos)",
                mute: "Microfone Silenciado",
                overlayUnlock: "Sobreposição Desbloqueada",
                poggermodeAchievement: "Conquista Poggermode",
                poggermodeApplause: "Aplauso Poggermode",
                poggermodeEnabled: "Poggermode Ativado",
                poggermodeMessage: "Mensagem Poggermode",
                pttStart: "PTT Início",
                pttStop: "PTT Fim",
                reconnect: "Reconectar",
                robotMan: "Homem Robot",
                stageWaiting: "Palco em Espera",
                streamEnded: "Transmissão Terminada",
                streamStarted: "Transmissão Iniciada",
                streamUserJoined: "Utilizador entrou na Transmissão",
                streamUserLeft: "Utilizador saiu da Transmissão",
                success: "Sucesso",
                undeafen: "Som Ativado",
                unmute: "Microfone Ativado",
                userJoin: "Entrada de Utilizador",
                userLeave: "Saída de Utilizador",
                userMoved: "Utilizador Movido",
                vibingWumpus: "Wumpus a Curtir"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Carimbos de data/hora personalizados em mensagens e dicas",
            demo: {
                cozy: "Clique aqui para mudar para formato Cozy",
                compact: "Clique aqui para mudar para formato Compacto",
                lastWeek: "Esta mensagem foi enviada na semana passada",
                hover: "Passe o rato sobre os carimbos para ver os formatos das dicas",
                edit: "Edite os formatos abaixo para ver a atualização em tempo real"
            },
            modal: {
                title: "Como usar:",
                moment: "Documentação de formatação do Moment.js",
                hint: "Adicionalmente, pode usar estes nos seus campos:",
                calendar: "permite formatação dinâmica como",
                today: "Hoje",
                yesterday: "Ontem",
                or: "ou",
                relative: "mostra tempos como",
                relativeTime: "há 4 horas",
                preview: "Pré-visualização",
                format: "Formatos de calendário",
                howTo: "Como formatar o valor [calendar] se usado nos carimbos acima."
            },
            option: {
                formats: {
                    label: "Formatos",
                    description: "Personalize os formatos de carimbo de tempo",
                },
                cozyFormat: {
                    label: "Modo Cozy",
                    description: "Formato de hora em mensagens no modo cozy"
                },
                compactFormat: {
                    label: "Modo Compacto",
                    description: "Formato de hora no modo compacto e ao passar o rato"
                },
                tooltipFormat: {
                    label: "Dica (Tooltip)",
                    description: "Formato de hora nas dicas"
                },
                ariaLabelFormat: {
                    label: "Rótulo Aria",
                    description: "Formato de hora nos rótulos de acessibilidade"
                },
                sameDayFormat: {
                    label: "Mesmo dia",
                    description: "Formato [calendar] para hoje",
                    default: "[Hoje às] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Dia anterior",
                    description: "Formato [calendar] para ontem",
                    default: "[Ontem às] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "Semana passada",
                    description: "Formato [calendar] para a semana passada"
                },
                sameElseFormat: {
                    label: "Datas mais antigas",
                    description: "Formato [calendar] para datas anteriores"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Permite adicionar uma cor personalizada a qualquer utilizador, em qualquer lugar! Recomendado usar com typingTweaks e roleColorEverywhere",
            option: {
                dmList: {
                    label: "Lista de DM",
                    description: "Utilizadores com cores personalizadas terão o seu nome colorido na lista de DMs"
                },
                colorInServers: {
                    label: "Colorir em Servidores",
                    description: "Se as cores dos nomes devem ser alteradas dentro dos servidores"
                }
            },
            context: {
                setColor: "Definir Cor"
            },
            modal: {
                custom: "Cor Personalizada",
                pick: "Escolha uma cor",
                delete: "Eliminar Entrada",
                save: "Guardar"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "Torna os títulos e miniaturas incorporados do YouTube menos sensacionalistas, com tecnologia DeArrow",
            option: {
                hideButton: {
                    label: "Ocultar Botão",
                    description: "Oculta o botão DeArrow nos vídeos incorporados do YouTube"
                },
                replaceElements: {
                    label: "Substituir Elementos",
                    description: "Escolha quais os elementos do vídeo incorporado que serão substituídos",
                    everything: "Tudo (Títulos e Miniaturas)",
                    title: "Títulos",
                    thumbnail: "Miniaturas"
                },
                dearrowByDefault: {
                    label: "DeArrow por Predefinição",
                    description: "Aplicar DeArrow aos vídeos automaticamente"
                }
            },
            tooltip: {
                dearrowed: "Este vídeo incorporado foi processado pelo DeArrow; clique para restaurar",
                dearrow: "Clique para processar com DeArrow"
            },
            text: {
                toggleDearrow: "Alternar Dearrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Limpa o Discord removendo elementos não essenciais da interface, como efeitos de perfil, separadores de loja, boosts e muito mais.",
            option: {
                userProfileHeader: {
                    label: "Perfil de Utilizador"
                },
                removeAvatarDecoration: {
                    label: "Remover decoração de avatar",
                    description: "Remover decorações de avatar. Fica desativado se o Decor estiver ativado.",
                    alertBody: "A remoção de decoração de avatar foi desativada para evitar conflitos com o plugin Decor.",
                    ok: "OK"
                },
                removeNameplate: {
                    label: "Remover Placa de Identificação",
                    description: "Remove as placas de identificação (nameplates)."
                },
                removeProfileEffect: {
                    label: "Remover Efeito de Perfil",
                    description: "Remove os efeitos de animação do perfil ao abrir."
                },
                removeClanTag: {
                    label: "Remover Tag de Clã",
                    description: "Remove as tags de clã."
                },
                alwaysShowUsername: {
                    label: "Mostrar Sempre Nome de Utilizador",
                    description: "Mostra sempre o nome de utilizador em vez do estado."
                },
                accessibilityNotice: {
                    label: "Aviso de Acessibilidade",
                    description: "O Discord já possui uma opção de estilo de nome de utilizador incorporada nas definições de Acessibilidade."
                },
                friendsListHeader: {
                    label: "Acima da Lista de Amigos/DMs"
                },
                removeShopAboveDM: {
                    label: "Remover Loja Acima das DMs",
                    description: "Remove a loja acima da lista de mensagens diretas."
                },
                removeQuestsAboveDM: {
                    label: "Remover Missões Acima das DMs",
                    description: "Remove as missões acima da lista de mensagens diretas."
                },
                miscHeader: {
                    label: "Diversos"
                },
                removeServerBoostInfo: {
                    label: "Remover Info de Boost do Servidor",
                    description: "Remove a informação de boosts do servidor acima da lista de canais."
                },
                removeBillingSettings: {
                    label: "Remover Definições de Faturação",
                    description: "Remove as definições de faturação."
                },
                removeGiftButton: {
                    label: "Remover Botão de Presente",
                    description: "Remove o botão de oferecer presentes."
                },
                removeUnavailableEmojiPicker: {
                    label: "Remover Seletor de Emojis Indisponíveis",
                    description: "Remove as categorias de emojis indisponíveis do seletor."
                },
                removeAudioMenus: {
                    label: "Remover Menus de Áudio",
                    description: "Remove os menus ao lado dos botões de silenciar microfone e áudio."
                },
                removeButtonTooltips: {
                    label: "Remover Dicas de Botões",
                    description: "Remove as dicas (tooltips) dos botões."
                },
                removeProfileFrame: {
                    description: "Remove molduras de perfil.",
                    label: "Remover moldura de perfil"
                },
                removeDisplayNameStyles: {
                    description: "Remove nomes de apresentação animados/estilizados da lista de membros.",
                    label: "Remover estilos de nome de apresentação"
                },
                removeLibraryAboveDms: {
                    description: "Remove a biblioteca acima da lista de MPs.",
                    label: "Remover biblioteca acima das MPs"
                },
                removeFamilyCenterAboveDms: {
                    description: "Remove o centro familiar acima da lista de MPs.",
                    label: "Remover centro familiar acima das MPs"
                }
            },
            text: {
                discordAlreadyHasA: "O Discord já tem uma opção integrada de estilo do nome de utilizador em",
                accessibilitySettings: "definições de acessibilidade."
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Descodifica o conteúdo em Base64 de qualquer mensagem e copia o conteúdo descodificado.",
            right: {
                decode: "Copiar Descodificado (Clique Esquerdo) / Descodificar Base64 (Clique Direito)",
                copy: "Descodificar Base64 (Clique Esquerdo) / Copiar Descodificado (Clique Direito)"
            },
            option: {
                clickMethod: {
                    label: "Método de Clique",
                    description: "Altera o botão para descodificar o conteúdo Base64 de qualquer mensagem.",
                    left: "Clique esquerdo para descodificar o conteúdo Base64.",
                    right: "Clique direito para descodificar o conteúdo Base64."
                }
            },
            modal: {
                title: "Conteúdo Base64 Descodificado",
                content: "Conteúdo Descodificado",
                copy: "Copiar Conteúdo Descodificado {{index}}",
                copied: "Conteúdo descodificado copiado para a área de transferência!"
            }
        },
        decor: {
            name: "Decor",
            description: "Crie e use as suas próprias decorações de avatar personalizadas ou escolha a sua favorita entre as predefinições.",
            presetPart: "Parte da Predefinição {{name}}",
            createdBy: "Criado por {{author}}",
            copy: "Copiar ID da Predefinição",
            file: "Ficheiro",
            your: {
                title: "As Suas Decorações",
                subtitle: "Pode eliminar as suas decorações clicando com o botão direito sobre elas."
            },
            option: {
                changeDecoration: {
                    label: "Alterar Decoração",
                    description: "Ative o Decor e reinicie o cliente para alterar a sua decoração de avatar.",
                    also: "Também pode aceder às decorações do Decor a partir da página de {{profiles}}.",
                    profiles: "Perfis"
                },
                baseUrl: {
                    label: "URL Base",
                    description: "URL da API do Decor"
                },
                agreedToGuidelines: {
                    label: "Concordou com as Diretrizes",
                    description: "Indica se concordou com as diretrizes"
                }
            },
            context: {
                decorationOptions: "Opções de Decoração",
                copyHash: "Copiar Hash da Decoração",
                deleteDecoration: "Eliminar Decoração"
            },
            alert: {
                delete: {
                    title: "Eliminar Decoração",
                    body: "Tem a certeza que deseja eliminar {{decoration}}?",
                    confirm: "Eliminar",
                    cancel: "Cancelar"
                },
                logout: {
                    title: "Terminar Sessão",
                    body: "Tem a certeza que deseja terminar sessão no Decor?",
                    confirm: "Sair",
                    cancel: "Cancelar"
                }
            },
            button: {
                change: "Alterar Decoração",
                remove: "Remover Decoração",
                apply: "Aplicar",
                cancel: "Cancelar",
                browse: "Procurar",
                submit: "Submeter para Revisão",
                continue: "Continuar",
                back: "Voltar"
            },
            tooltip: {
                pendingReview: "Já tem uma decoração a aguardar revisão",
                pending: "Revisão Pendente"
            },
            join: {
                tooltip: "Entre no servidor de Discord do Decor para receber notificações sobre a revisão da sua decoração e sobre novas predefinições",
                button: "Servidor de Discord"
            },
            create: {
                title: "Criar Decoração",
                notViolate: "Certifique-se de que a sua decoração não viola as {{guidelines}} antes de submeter.",
                guidelines: "diretrizes",
                file: "O ficheiro deve ser APNG ou PNG.",
                fileHolder: "Escolher um ficheiro",
                name: "Este nome será usado para referir esta decoração.",
                nameHolder: "Cubo de Companhia",
                nameTitle: "Nome"
            },
            help: {
                update: "Para receber atualizações sobre a revisão da sua decoração, entre no {{server}} e permita mensagens diretas.",
                server: "Servidor de Discord do Decor"
            },
            guidelines: {
                hold: "Espere um pouco",
                suspended: "Ao submeter uma decoração, concorda com as {{guidelines}}. Não ler estas diretrizes pode resultar na suspensão da sua conta para criar mais decorações no futuro.",
                guidelines: "diretrizes"
            },
            toast: {
                failedToAuthorizeMessage: "Falha ao autorizar: {{message}}"
            },
            text: {
                removeDecoration: "Remover decoração do Decor",
                decoration: "Decoração do Decor",
                none: "Nenhuma",
                decorationFile: "Ficheiro de decoração"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin para tirar capturas de ecrã de temas - censura imagens e textos identificativos.",
            toolbox: {
                toggle: "Alternar Demonstração"
            },
            keycode: "Para alterar o seu atalho, consulte {{keycode}}!",
            this: "esta ferramenta",
            okay: "Entendido!",
            option: {
                keyBind: {
                    label: "Atalho de Teclado",
                    description: "A tecla para alternar o tema quando pressionada"
                },
                soundVolume: {
                    label: "Volume do Som",
                    description: "Volume do som ao alternar (0 para desativar)"
                },
                showConfirmationModal: {
                    label: "Mostrar Janela de Confirmação",
                    description: "Mostra uma janela para lembrá-lo do atalho"
                }
            },
            switch: {
                note: "Pode reativar esta definição mais tarde",
                disable: "Desativar janela modal?"
            },
            shortcut: "Isto irá censurar todo o texto! Para desativar, lembre-se do atalho:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Plugin Dev Companion. Por favor, reporte qualquer problema ou comportamento estranho ao MutanPlex, por ping ou DM. Obrigado!",
            reconnect: "Reconectar",
            option: {
                notifyOnAutoConnect: {
                    label: "Notificar ao Ligar Automaticamente",
                    description: "Notificar quando o Dev Companion se ligar automaticamente."
                },
                usePatchedModule: {
                    label: "Usar Módulo Corrigido (Patched)",
                    description: "Em pedidos de extração, responder com o módulo corrigido atual (se existir) em vez do original."
                },
                reloadAfterToggle: {
                    label: "Recarregar Após Alternar",
                    description: "Recarregar após receber um comando de 'desativar/ativar plugin'."
                }
            },
            toast: {
                title: "Dev Companion Ligado",
                connected: "Ligado ao WebSocket",
                disconnected: "Dev Companion Desligado",
                error: "Erro no Dev Companion",
                reload: "Recarregamento Necessário",
                failed: "Falha ao iniciar dependências: {{failures}}",
                close: "Fechar",
                stopping: "Erro ao parar o plugin {{plugin}}",
                starting: "Erro ao iniciar o plugin {{plugin}}",
                noMessage: "Sem Mensagem de Erro",
                noReason: "Nenhuma Razão Fornecida"
            },
            text: {
                reconnect: "Voltar a ligar",
                loadingLazyModules: "A carregar módulos lazy, reiniciar pode causar erros",
                loadedLazyModules: "Todos os módulos lazy foram carregados",
                failedLazyModules: "Falha ao carregar módulos lazy, verifique a consola",
                ok: "OK"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Impede que seja expulso automaticamente de uma chamada de voz por mensagem direta após 3 minutos e de ser movido para um canal de voz AFK."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Desativa as câmaras numa chamada por predefinição"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Ativa a faixa de programador do Discord, que exibe o ID da Build",
            about: "O formato para a Faixa de Dev do Discord. Pode usar as seguintes variáveis:",
            preview: "Pré-visualização:",
            empty: "O formato não pode estar vazio.",
            variables: {
                discord: {
                    title: "Variáveis do Discord",
                    icon: "Ícone do Discord",
                    banner: "Ícone da faixa de dev",
                    channel: "Canal da build do Discord (ex: Stable)",
                    build: "Número da build do Discord (ex: 123456)",
                    hash: "Hash da build do Discord (ex: 123456)"
                },
                plexcord: {
                    title: "Variáveis do Plexcord",
                    icon: "Ícone do Plexcord",
                    name: "Nome do Plexcord",
                    version: "Versão do Plexcord (ex: 1.0.0)",
                    hash: "Hash da build do Plexcord (ex: 123456)",
                    platform: "Plataforma onde o Plexcord está a correr (ex: Dev Build)"
                },
                plextron: {
                    title: "Variáveis Específicas do Plextron",
                    hashShort: "Hash da build do Plextron (ex: 123456789)",
                    platformType: "Tipo de plataforma Plextron (ex: Dev Build)"
                },
                client: {
                    title: "Variáveis do Cliente",
                    icon: "Ícone de desktop",
                    name: "O nome do cliente (ex: Discord Canary)",
                    version: "A versão do cliente (ex: 1.0.0)",
                },
                electron: {
                    title: "Variáveis do Electron",
                    icon: "Ícone do Electron",
                    version: "Versão do Electron (ex: 25.0.0)"
                },
                chromium: {
                    title: "Variáveis do Chromium",
                    icon: "Ícone do Chromium",
                    version: "Versão do motor Chromium (ex: 125.0.0.0)"
                },
                misc: {
                    title: "Variáveis Diversas",
                    newline: "Carácter de nova linha"
                }
            },
            text: {
                notSupported: "Não suportado",
                devBuild: "Versão de desenvolvimento",
                standalone: "Independente"
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Avisa-o se a sua mensagem contiver um termo na lista predefinida do AutoMod",
            alert: {
                title: "Espere um pouco!",
                content: "A sua mensagem contém um termo na lista predefinida do AutoMod (Termo: '{{trigger}}').",
                content2: "Há uma grande probabilidade de a sua mensagem ser bloqueada e potencialmente moderada por um moderador do servidor.",
                confirm: "Enviar de Qualquer Forma",
                cancel: "Cancelar"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Arredonda sempre os carimbos de data/hora relativos para baixo, para que 7.6a se torne 7a em vez de 8a"
        },
        downloadAllAttachments: {
            name: "DownloadAllAttachments",
            description: "Adiciona um botão no menu da mensagem para transferir todos os anexos de uma vez.",
            button: "Transferir todos os anexos",
            toast: {
                success: "{{count}} anexo(s) transferido(s).",
                partial: "{{succeeded}} de {{total}} anexos transferidos. {{failed}} falharam.",
                downloadedPluralizeSucceededAttachment: "{{pluralize_succeeded_attachment}} transferido(s).",
                downloadedSucceededOfLength: "{{succeeded}} de {{length}} anexos transferidos. {{failed}} falharam."
            },
            option: {
                downloadAllFileTypes: {
                    description: "Transferir também anexos que não sejam multimédia. Ativa apenas se confiares no que te enviam.",
                    label: "Transferir todos os tipos de ficheiro"
                }
            }
        },
        draftNavigator: {
            name: "DraftNavigator",
            description: "Pesquise rascunhos não enviados, pré-visualize o texto e vá para o canal.",
            text: {
                title: "Navegador de rascunhos",
                open: "Abrir navegador de rascunhos",
                unknownChannel: "Canal desconhecido ({{id}})",
                channelUnavailable: "Canal indisponível",
                directMessage: "Mensagem direta",
                groupMessage: "Mensagem de grupo",
                server: "Servidor",
                jump: "Ir",
                jumpTo: "Ir para {{name}}",
                count: "{{count}} rascunhos",
                countOne: "{{count}} rascunho",
                countFiltered: "{{shown}} de {{total}} rascunhos",
                noMatches: "Nenhum rascunho correspondente.",
                noDrafts: "Nenhum rascunho por enviar.",
                close: "Fechar",
                searchLabel: "Pesquisar rascunhos",
                searchPlaceholder: "Pesquisar canais, servidores ou texto do rascunho",
                listLabel: "Rascunhos por enviar"
            }
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Adiciona funcionalidade de arrastar e largar aos emojis favoritos"
        },
        dragify: {
            name: "Dragify",
            description: "Largue utilizadores, canais ou servidores no chat para inserir menções ou convites.",
            option: {
                userOutput: {
                    label: "Saída de Utilizador",
                    description: "Resultado ao largar um utilizador.",
                    mention: "Menção",
                    id: "ID de Utilizador"
                },
                channelOutput: {
                    label: "Saída de Canal",
                    description: "Resultado ao largar um canal.",
                    mention: "Menção ao #canal",
                    link: "Link do Canal",
                },
                inviteExpireAfter: {
                    label: "Convite Expira Após",
                    description: "Expiração do convite",
                    never: "Nunca",
                    thirtyMinutes: "30 Minutos",
                    oneHour: "1 Hora",
                    sixHours: "6 Horas",
                    twelveHours: "12 Horas",
                    oneDay: "1 Dia",
                    sevenDays: "7 Dias"
                },
                inviteMaxUses: {
                    label: "Máximo de Usos do Convite",
                    description: "Limite de utilizações para o convite",
                    noLimit: "Sem Limite",
                    one: "1 Uso",
                    five: "5 Usos",
                    ten: "10 Usos",
                    twentyFive: "25 Usos",
                    fifty: "50 Usos",
                    hundred: "100 Usos"
                },
                inviteTemporaryMembership: {
                    label: "Acesso Temporário por Convite",
                    description: "Conceder acesso temporário.",
                },
                reuseExistingInvites: {
                    label: "Reutilizar Convite Existente",
                    description: "Reutiliza um convite existente em vez de criar um novo."
                },
                allowChatBodyDrop: {
                    label: "Permitir Largar no Chat",
                    description: "Permite largar elementos no corpo principal do chat para inserir texto."
                }
            },
            toast: {
                failed: {
                    drop: "O Dragify falhou ao processar o elemento largado.",
                },
                invite: {
                    created: "Convite criado.",
                    unable: "Não foi possível criar o convite.",
                    noChannel: "Nenhum canal disponível para convites.",
                },
                noReusableInvite: "Nenhum convite reutilizável disponível.",
                unableToReuseInvite: "Não foi possível reutilizar o convite."
            },
            ghost: {
                user: "Utilizador",
                server: "Servidor",
                dm: "Mensagens Diretas",
                badge: {
                    channel: "canal",
                    thread: "tópico",
                    voice: "voz",
                    forum: "fórum",
                    media: "multimédia",
                    announcement: "anúncio",
                    dm: "dm",
                    user: "utilizador",
                    server: "servidor"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Destaque e inspecione elementos facilmente.",
            modal: {
                recording: "A gravar...",
                reset: "Repor"
            },
            option: {
                keybind: {
                    label: "Atalho de Teclado",
                    description: "Alternar Destaque"
                },
                showClasses: {
                    label: "Mostrar Classes",
                    description: "Exibe os nomes das classes CSS do elemento na dica"
                },
                showId: {
                    label: "Mostrar ID",
                    description: "Exibe o atributo ID do elemento na dica"
                },
                showFont: {
                    label: "Mostrar Fonte",
                    description: "Exibe a família e o tamanho da fonte computada"
                },
                showPadding: {
                    label: "Mostrar Padding",
                    description: "Exibe os valores de preenchimento (padding) do elemento"
                },
                showMargin: {
                    label: "Mostrar Margem",
                    description: "Exibe os valores de margem do elemento"
                },
                showBorderRadius: {
                    label: "Mostrar Raio da Borda",
                    description: "Exibe os valores de border-radius do elemento"
                },
                showPosition: {
                    label: "Mostrar Posição",
                    description: "Exibe o tipo de posição CSS e o z-index"
                },
                showDisplay: {
                    label: "Mostrar Display",
                    description: "Exibe o tipo de display juntamente com propriedades flex ou grid"
                }
            },
            toast: {
                copied: {
                    color: "Cor copiada para a área de transferência!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "Reproduz sons do soundboard quando se desliga da voz.",
            button: "Definir como som de saída global",
            toast: {
                failedToPlay: "Ups! Algo correu mal."
            },
            option: {
                soundGuildId: {
                    label: "ID do Servidor do Som",
                    description: "Selecione o servidor que contém o som.",
                    placeholder: "Selecione um servidor..."
                },
                soundId: {
                    label: "ID do Som",
                    description: "Introduza o ID do som que deseja reproduzir.",
                    placeholder: "Introduza o ID do som..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "Ativa o acesso a experiências e outras funcionalidades exclusivas de programadores no Discord!",
            modal: {
                about: {
                    title: "Mais Informações",
                    body: "Pode abrir as DevTools do Discord através de {{key}}"
                },
                warning: {
                    title: "Espere um pouco!!",
                    body: "As experiências são funcionalidades do Discord não lançadas. Podem não funcionar, ou até estragar o seu cliente ou levar à desativação da sua conta.",
                    notReponsible: "Use experiências apenas se souber o que está a fazer. O Plexcord não é responsável por quaisquer danos causados.",
                    useAtOwnRisk: "Se não sabe o que uma experiência faz, ignore-a. Não nos pergunte o que fazem; provavelmente também não sabemos.",
                    serverSideFeatures: "Não, não pode usar funcionalidades do lado do servidor como marcar a caixa 'Send to Client'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Menu Dev na Barra de Ferramentas",
                    description: "Altera o botão de Ajuda (?) na barra de ferramentas para o menu de programador do Discord"
                }
            },
            text: {
                searchExperiments: "Pesquisar experiências"
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Permite exportar mensagens para ficheiros — mensagem individual, todas as mensagens de um utilizador ou todas as mensagens de um canal",
            option: {
                maxMessages: {
                    label: "Máximo de Mensagens",
                    description: "Número máximo de mensagens a exportar (0 = ilimitado)"
                },
                includeAttachments: {
                    label: "Incluir Anexos",
                    description: "Incluir informações sobre anexos nas exportações"
                },
                includeEmbeds: {
                    label: "Incluir Incorporados (Embeds)",
                    description: "Incluir informações sobre incorporados nas exportações"
                },
                includeReactions: {
                    label: "Incluir Reações",
                    description: "Incluir informações sobre reações nas exportações"
                },
                includeComponents: {
                    label: "Incluir Componentes",
                    description: "Incluir informações sobre componentes nas exportações"
                }
            },
            message: {
                invalid: "Mensagem inválida — sem autor",
                unknownUser: "Utilizador Desconhecido",
                botEmbed: "Mensagem de Incorporação de Bot",
                attachments: "Anexos",
                unknown: "Desconhecido",
                noUrl: "Sem URL",
                embeds: "Incorporados",
                title: "Título",
                description: "Descrição",
                url: "URL",
                footer: "Rodapé",
                author: "Autor",
                fields: "Campos",
                components: "Componentes",
                component: "Componente",
                interactiveElement: "Elemento Interativo",
                reactions: "Reações",
                errorFormatting: "Erro ao formatar mensagem",
                unknownError: "Erro desconhecido",
                header: "{{titlePrefix}} {{displayName}} em {{channelName}}",
                from: "Mensagens de",
                direct: "Mensagens Diretas",
                exported: "Exportado em",
                total: "Total de mensagens"
            },
            toast: {
                export: {
                    title: "Exportar Mensagens",
                    body: "Falha ao exportar mensagem"
                },
                noMessages: {
                    title: "Exportar Mensagens",
                    notFoundUser: "Nenhuma mensagem deste utilizador encontrada neste canal",
                    notFoundChannel: "Nenhuma mensagem encontrada neste canal"
                },
                failed: {
                    title: "Exportar Mensagens",
                    body: "Falha ao exportar mensagens"
                },
                userNotFound: {
                    title: "Exportar Mensagens",
                    body: "Utilizador não encontrado"
                },
                complete: {
                    title: "Exportação Concluída",
                    saved: "Ficheiro guardado",
                    downloaded: "Ficheiro descarregado",
                    messages: "mensagens"
                }
            },
            context: {
                exportMessage: "Exportar Esta Mensagem",
                exportAll: "Exportar todas as mensagens de {{user}}",
                user: "Utilizador",
                exportAllChannel: "Exportar Todas as Mensagens do Canal"
            },
            text: {
                unknownError: "Erro desconhecido"
            }
        },
        expressionManager: {
            name: "ExpressionManager",
            description: "Clona emojis e autocolantes. Adiciona opções ao menu de contexto para os clonar, editar ou eliminar rapidamente. Também adiciona opções de copiar e guardar autocolantes",
            option: {
                editAndDelete: {
                    label: "Editar e eliminar",
                    description: "Adiciona as opções \"Editar\" e \"Eliminar\" ao menu de contexto do seletor de expressões"
                },
                stickerCopyAndOpen: {
                    label: "Ligações de autocolantes",
                    description: "Adiciona as opções \"Copiar ligação do autocolante\" e \"Abrir ligação do autocolante\" ao menu de contexto de autocolantes"
                },
                recents: {
                    label: "Remover dos recentes",
                    description: "Adiciona a opção \"Remover dos recentes\" ao menu de contexto das expressões usadas frequentemente"
                }
            },
            context: {
                cloneEmoji: "Clonar Emoji",
                cloneSticker: "Clonar Autocolante",
                editEmoji: "Editar emoji",
                editSticker: "Editar autocolante",
                deleteEmoji: "Eliminar emoji",
                deleteSticker: "Eliminar autocolante",
                removeFromRecents: "Remover dos recentes",
                uploadAsEmoji: "Carregar como emoji",
                copyStickerLink: "Copiar ligação do autocolante",
                openStickerLink: "Abrir ligação do autocolante"
            },
            modal: {
                customName: "Nome Personalizado",
                invalidName: "O nome deve ter entre 2 e 30 caracteres e conter apenas caracteres alfanuméricos",
                cloneTitle: "Clonar {{name}}",
                deleteTitle: "Eliminar {{name}}",
                deleteEmoji: "Tens a certeza de que queres eliminar este emoji?",
                deleteSticker: "Tens a certeza de que queres eliminar este autocolante?",
                deleteConfirm: "Eliminar",
                recentsEmoji: "Isto vai repor todo o histórico de utilização deste emoji e não pode ser anulado. Tens a certeza?",
                recentsSticker: "Isto vai repor todo o histórico de utilização deste autocolante e não pode ser anulado. Tens a certeza?",
                recentsConfirm: "Fazer"
            },
            toast: {
                emojiDeleted: "Emoji eliminado com sucesso.",
                stickerDeleted: "Autocolante eliminado com sucesso.",
                emojiDeleteFailed: "Falha ao eliminar o emoji",
                stickerDeleteFailed: "Falha ao eliminar o autocolante",
                cloned: "Clonado {{name}} com sucesso para {{guild}}!",
                yourServer: "o seu servidor",
                cloneFailed: "Falha ao clonar: {{message}}",
                console: "Algo correu mal (verifique a consola!)",
                linkCopied: "Link copiado!",
                emojiModalFailed: "Falha ao abrir a janela de emoji: {{error}}"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Pausa o cliente quando pressiona F8 com as DevTools (+ breakpoints) abertas."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Permite enviar emojis/autocolantes falsos, usar temas Nitro e transmitir em qualidade Nitro",
            option: {
                enableEmojiBypass: {
                    label: "Ativar Bypass de Emojis",
                    description: "Permite enviar emojis falsos (também ignora a falta de permissão para usar emojis personalizados)"
                },
                emojiSize: {
                    label: "Tamanho do Emoji",
                    description: "Tamanho dos emojis ao enviar"
                },
                transformEmojis: {
                    label: "Transformar Emojis",
                    description: "Indica se deve transformar emojis falsos em reais"
                },
                enableStickerBypass: {
                    label: "Ativar Bypass de Autocolantes",
                    description: "Permite enviar autocolantes falsos (também ignora a falta de permissão para usar autocolantes)"
                },
                stickerSize: {
                    label: "Tamanho do Autocolante",
                    description: "Tamanho dos autocolantes ao enviar"
                },
                transformStickers: {
                    label: "Transformar Autocolantes",
                    description: "Indica se deve transformar autocolantes falsos em reais"
                },
                transformCompoundSentence: {
                    label: "Transformar Frases Compostas",
                    description: "Indica se deve transformar autocolantes e emojis falsos em frases com mais conteúdo além do link do emoji/autocolante"
                },
                enableStreamQualityBypass: {
                    label: "Ativar Bypass de Qualidade de Transmissão",
                    description: "Permite transmitir em qualidade Nitro"
                },
                useStickerHyperLinks: {
                    label: "Usar Hiperligações em Autocolantes",
                    description: "Indica se deve usar hiperligações ao enviar autocolantes falsos"
                },
                useEmojiHyperLinks: {
                    label: "Usar Hiperligações em Emojis",
                    description: "Indica se deve usar hiperligações ao enviar emojis falsos"
                },
                hyperLinkText: {
                    label: "Texto da Hiperligação",
                    description: "Que texto a hiperligação deve usar. {{NAME}} será substituído pelo nome do emoji/autocolante."
                },
                disableEmbedPermissionCheck: {
                    label: "Desativar Verificação de Permissão de Embed",
                    description: "Desativa a verificação de permissão para incorporar links ao enviar emojis e autocolantes falsos"
                }
            },
            modal: {
                sticker: "Este é um autocolante FakeNitro e aparece como um autocolante real apenas para si. Para outros utilizadores sem o plugin, aparece como um link.",
                emoji: "Este é um emoji FakeNitro e aparece como um emoji real apenas para si. Para outros utilizadores sem o plugin, aparece como um link."
            },
            alert: {
                notice: {
                    title: "Espere um pouco!",
                    body: "Está a tentar enviar/editar uma mensagem que contém um emoji ou autocolante FakeNitro; no entanto, não tem permissão para incorporar links no canal atual. Tem a certeza que deseja enviar? Os itens FakeNitro aparecerão apenas como um link.",
                    footer: "Pode desativar este alerta nas definições do FakeNitro",
                    confirm: "Enviar de Qualquer Forma",
                    cancel: "Cancelar",
                    secondaryConfirm: "Não mostrar novamente"
                },
                apngSticker: {
                    title: "Espere um pouco!",
                    body: "Não pode enviar esta mensagem porque contém um autocolante FakeNitro animado e não tem permissão para anexar ficheiros no canal atual. Remova o autocolante para continuar."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Permite personalizar o tema do perfil ocultando as cores na sua bio através de codificação 3y3 invisível",
            button: {
                copy: "Copiar 3y3"
            },
            modal: {
                usage: "Utilização",
                preview: "Pré-visualização",
                intro: "Após ativar este plugin, verá cores personalizadas nos perfis de outras pessoas que usem plugins compatíveis.",
                setColor: "Para definir as suas próprias cores:",
                step1: "• Use os seletores abaixo para escolher as cores",
                step2: "• Clique no botão {{copy}}",
                step3: "• Cole o texto invisível em qualquer lugar da sua bio",
                pickers: "Seletores de Cores",
                primary: "Primária",
                accent: "Destaque"
            },
            option: {
                nitroFirst: {
                    label: "Nitro Primeiro",
                    description: "Fonte de cor prioritária se ambas estiverem presentes",
                    nitro: "Cores Nitro",
                    fake: "Cores Falsas"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Permite temas e efeitos de perfil ocultando as cores e efeitos na sua bio através de codificação 3y3 invisível",
            option: {
                prioritizeNitro: {
                    label: "Priorizar Nitro",
                    description: "Fonte a priorizar",
                    nitro: "Nitro",
                    aboutMe: "Sobre mim"
                },
                hideBuilder: {
                    label: "Ocultar Construtor",
                    description: "Ocultar o Construtor FPTE nas definições de Perfil de Utilizador e Perfis de Servidor"
                }
            },
            modal: {
                primary: "Primária",
                accent: "Destaque",
                effect: "Efeito",
                usage: {
                    title: "Utilização",
                    intro: "Após ativar este plugin, verá cores e efeitos de tema personalizados nos perfis de outros utilizadores deste plugin.",
                    setColor: "Para definir as suas próprias cores e efeito:",
                    step1: "Vá às definições do seu perfil",
                    step2: "Use o Construtor FPTE para escolher as cores e efeito do seu tema",
                    step3: "Clique no botão {{copy}}",
                    step4: "Cole o texto invisível em qualquer lugar da sua bio"
                }
            },
            toast: {
                copied: "FPTE copiado para a área de transferência!",
                empty: "O Construtor FPTE está vazio; nada para copiar!"
            },
            button: {
                copyFPTE: "Copiar FPTE",
                reset: "Repor",
                preview: "Pré-visualização do Construtor FPTE",
                buildBackwards: "Construir FPTE retrocompatível",
                moreCharacters: "Irá usar mais caracteres"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Adiciona um ícone de lixo para eliminar canais rapidamente",
            option: {
                keyBind: {
                    label: "Atalho de Teclado",
                    description: "A tecla para alternar o ícone de lixo quando pressionada."
                },
                reqCtrl: {
                    label: "Exigir Control",
                    description: "Exigir que a tecla Control esteja pressionada."
                },
                reqShift: {
                    label: "Exigir Shift",
                    description: "Exigir que a tecla Shift esteja pressionada."
                },
                reqAlt: {
                    label: "Exigir Alt",
                    description: "Exigir que a tecla Alt esteja pressionada."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "Coloca os seus emojis favoritos em primeiro lugar no preenchimento automático e fornece também pseudónimos (aliases).",
            option: {
                aliases: {
                    label: "Pseudónimos",
                    description: "Gerir os pseudónimos dos seus emojis."
                },
                clearAll: {
                    label: "Limpar Tudo",
                    description: "Eliminar todos os pseudónimos."
                }
            },
            modal: {
                clear: {
                    title: "Eliminar Todos os Pseudónimos",
                    description: "Isto irá remover todos os pseudónimos de emojis que guardou.",
                    confirm: "Eliminar todos"
                },
                set: {
                    title: "Definir Pseudónimo",
                    description: "Definir um pseudónimo para {{emoji}}",
                    placeholder: "Pseudónimo, ex: 'feliz'",
                    save: "Guardar",
                    error: "Pseudónimo duplicado"
                }
            },
            toast: {
                set: "Pseudónimo definido para {{emoji}}",
                clearAll: "Todos os pseudónimos de emojis eliminados",
                failedDeleted: "Falha ao eliminar pseudónimos",
                removed: "Pseudónimo removido: {{alias}}",
                failedRemove: "Falha ao remover pseudónimo",
                duplicate: "Pseudónimo duplicado",
                failedSave: "Falha ao guardar pseudónimo.",
                removedAliasAlias: "Alcunha :{{alias}}: removida",
                aliasSetForGetemojidisplayname: "Alcunha definida para {{getEmojiDisplayName_ref}}."
            },
            button: {
                edit: "Editar pseudónimo",
                set: "Definir pseudónimo"
            },
            text: {
                remove: "Remover",
                noAliasesSetYet: "Ainda não há alcunhas definidas.",
                aliasRequired: "O apelido é obrigatório.",
                aliasInvalid: "O apelido deve ter de 2 a 32 caracteres e usar apenas letras minúsculas, números ou sublinhados."
            }
        },
        favoriteAnything: {
            name: "FavoriteAnything",
            description: "Permite marcar qualquer imagem como favorita",
            noFiles: "Nenhum ficheiro corresponde à sua pesquisa.",
            searchPlaceholder: "Pesquisar ficheiros",
            media: "Média",
            demoText: "Clique na estrela para adicionar um ficheiro aos favoritos.\nOs ficheiros favoritos aparecerão aqui!",
            fetchError: "Não foi possível obter {filename}",
            uploadError: "Não foi possível carregar {filename}",
            text: {
                clickTheStarTo: "Clica na estrela para adicionar um ficheiro aos favoritos.",
                favoriteFilesWillShow: "Os ficheiros favoritos aparecerão aqui!"
            },
            option: {
                localThumbnails: {
                    description: "Gerar miniaturas de ficheiros localmente em vez de usar um serviço externo (placeholder.nin0.dev). Não é compatível com telemóvel. Alterar esta opção não afeta os favoritos existentes.",
                    label: "Miniaturas locais"
                }
            }
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Adiciona um botão de Descarga no canto superior direito dos ficheiros"
        },
        findReply: {
            name: "FindReply",
            description: "Salta para a resposta mais antiga a uma mensagem num canal (permite seguir conversas passadas mais facilmente).",
            context: {
                jump: "Saltar para Resposta"
            },
            toast: {
                navigate: "Use o painel inferior para navegar entre respostas.",
                container: "Não foi possível encontrar o elemento contentor.",
                couldntFind: "Não foi possível encontrar uma resposta."
            },
            option: {
                includePings: {
                    label: "Incluir Pings",
                    description: "Também irá procurar por mensagens que mencionem (@) o autor diretamente"
                },
                includeAuthor: {
                    label: "Incluir Autor",
                    description: "Também irá procurar por mensagens que respondam ao autor em geral, não apenas àquela mensagem exata"
                },
                hideButtonIfNoReply: {
                    label: "Ocultar Botão se não houver Resposta",
                    description: "Oculta o botão se não houver respostas à mensagem"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Remove o espaço entre os blocos de código e o texto abaixo deles"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Corrige extensões de ficheiros renomeando-as para um formato compatível suportado, se possível"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Melhora a qualidade das imagens forçando a utilização da fonte original",
            option: {
                originalImagesInChat: {
                    label: "Imagens Originais no Chat",
                    description: "Carregar também a imagem original no chat. AVISO: Leia as advertências acima"
                }
            },
            modal: {
                about: {
                    title: "O comportamento padrão é o seguinte:",
                    body: "&mdash; No chat, serão carregadas imagens otimizadas mas com resolução total.",
                    body2: "&mdash; Na janela da imagem, será carregada a imagem original.",
                    body3: "Pode também ativar imagens originais no chat, mas tenha em conta os seguintes avisos:",
                    warning: "&mdash; Imagens animadas (GIF, WebP, etc.) no chat estarão sempre a animar, independentemente de a app estar focada.",
                    warning2: "&mdash; Pode causar lentidão (lag).",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Corrige os incorporados do Spotify que são extremamente altos, permitindo-lhe personalizar o volume",
            option: {
                volume: {
                    label: "Volume",
                    description: "A % de volume para os incorporados do Spotify. Qualquer valor acima de 10% é muuuuito alto"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Ignora o bloqueio de exibição de vídeos do YouTube no Discord (por exemplo, por parte da UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Adiciona uma opção 'Seguir' no menu de contexto do utilizador para estar sempre no mesmo canal de voz que ele",
            indicatorTooltip: "A seguir {{user}} (clique para ativar manualmente, clique direito para deixar de seguir)",
            unknownUser: "Utilizador Desconhecido",
            option: {
                executeOnFollow: {
                    label: "Executar ao Seguir",
                    description: "Garante que entra no mesmo canal de voz ao começar a seguir um utilizador"
                },
                onlyManualTrigger: {
                    label: "Apenas Ativação Manual",
                    description: "Ativar apenas ao clicar no indicador"
                },
                followLeave: {
                    label: "Seguir Saída",
                    description: "Também sai do canal quando o utilizador seguido sair"
                },
                autoMoveBack: {
                    label: "Mover de Volta Automaticamente",
                    description: "Move-o automaticamente de volta para o canal do utilizador seguido se for movido por alguém"
                },
                followUserId: {
                    label: "ID do Utilizador a Seguir",
                    description: "ID do utilizador que está a ser seguido"
                },
                channelFull: {
                    label: "Canal Cheio",
                    description: "Tenta movê-lo para o canal quando este deixar de estar cheio"
                },
                onlyWhenInVoice: {
                    label: "Apenas em voz",
                    description: "Seguir o utilizador apenas quando estiveres num canal de voz"
                }
            },
            toast: {
                channelFull: "O canal está cheio",
                newVc: "Seguiu o utilizador para um novo canal de voz",
                insufficientPermissions: "Permissões insuficientes para entrar no canal de voz",
                sameVc: "Já se encontra no mesmo canal",
                disconnect: "O utilizador seguido saiu; desconectado",
                notFollowing: "O utilizador seguido saiu, mas não está a seguir a saída",
                notVc: "O utilizador seguido não está num canal de voz"
            },
            context: {
                follow: "Seguir Utilizador",
                unfollow: "Deixar de Seguir Utilizador"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Carrega qualquer fonte do Google Fonts",
            option: {
                selectedFont: {
                    label: "Fonte Selecionada",
                    description: "Fonte atualmente selecionada"
                },
                fontSearch: {
                    label: "Pesquisa de Fontes",
                    description: "Pesquisar e selecionar fontes do Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Aplicar em Blocos de Código",
                    description: "Aplica a fonte aos blocos de código"
                }
            },
            toast: {
                failedLoad: "Falha ao carregar a fonte"
            },
            modal: {
                settings: {
                    title: "Pesquisar Google Fonts",
                    description: "Selecione uma fonte para a aplicar",
                    placeholder: "Pesquisar fontes...",
                    previewText: "A matilha de raposas famintas saltou sobre o cão preguiçoso",
                    authors: "Por {{authors}}"
                }
            },
            text: {
                currentFont: "Tipo de letra atual:",
                resetFont: "Repor tipo de letra"
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Força a coroa de dono ao lado dos nomes de utilizador, mesmo em servidores grandes."
        },
        freaky: {
            name: "Freaky",
            description: "Permite enviar a sua mensagem com uma fonte estranha usando o comando /freaky.",
            command: {
                freaky: "É freaky.",
                message: "Torne a sua mensagem freaky"
            },
            option: {
                addFreakyEnding: {
                    label: "Adicionar Final Freaky",
                    description: "Adiciona 👅 ou ❤️ no final"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Reescreve e filtra os resultados do Quick Switcher para mostrar os seus canais mais frequentes."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Adiciona um comando /friendcloud para visualizar os utilizadores com quem mais interage",
            command: {
                friendcloud: {
                    description: "Visualize a sua nuvem de amigos",
                    count: "Número de utilizadores a exibir",
                    mustHigher: "A contagem deve ser 1 ou superior!",
                    noAffinities: "Nenhuma afinidade encontrada. Verifique as suas [definições de privacidade](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Nenhum utilizador válido encontrado nas afinidades. Verifique as suas [definições de privacidade](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Não foi possível gerar a imagem :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Gera códigos de amizade para adicionar amigos facilmente",
            card: {
                expires: "Expira <t:{{expiration}}:R> • {{uses}}/{{maxUses}} utilizações",
                copy: "Copiar",
                copied: "Copiado!",
                codes: "Os Seus Códigos de Amizade",
                count: "Códigos de Amizade - {{invites}}",
                create: "Criar Código de Amizade",
                revoke: "Revogar Todos os Códigos",
                loading: "A carregar...",
                dontHave: "Não tem nenhum código de amizade."
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Crie e gira links de convite de amizade através de comandos de barra (/create friend invite, /view friend invites, /revoke friend invites).",
            command: {
                create: {
                    description: "Gera um link de convite de amizade.",
                    message: "discord.gg/{{code}}`\n· Expira <t:{{expiration}}:R>\n· Máximo de Usos: {{uses}}"
                },
                view: {
                    description: "Vê uma lista de todos os convites de amizade gerados.",
                    message: "_discord.gg/{{code}}_ \n· Expira: <t:{{expiration}}:R> \n· Vezes usado: {{uses}}/{{maxUses}}",
                    noInvites: "Não tem convites de amizade ativos."
                },
                revoke: {
                    description: "Revoga todos os convites de amizade gerados.",
                    message: "Todos os convites de amizade foram revogados."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Adiciona crachás que mostram há quanto tempo é amigo de um utilizador",
            badge: {
                sprout: {
                    name: "Broto",
                    description: "A vossa amizade está apenas a começar"
                },
                blooming: {
                    name: "Floração",
                    description: "A vossa amizade está a crescer! (1 mês)"
                },
                burning: {
                    name: "Ardente",
                    description: "A vossa amizade atingiu a velocidade terminal (3 meses)"
                },
                fighter: {
                    name: "Lutador",
                    description: "A vossa amizade é forte (6 meses)"
                },
                star: {
                    name: "Estrela",
                    description: "A vossa amizade já dura há MUITO tempo (1 ano)"
                },
                royal: {
                    name: "Real",
                    description: "A vossa amizade passou por tudo — já são 2 anos inteiros!"
                },
                besties: {
                    name: "Melhores Amigos",
                    description: "Como é que conseguem isto??? (5 anos)"
                }
            },
            option: {
                showFriendsInChat: {
                    description: "Mostrar um ícone de amigo nas mensagens de amigos.",
                    label: "Mostrar amigos no chat"
                }
            },
            text: {
                friend: "Amigo",
                rankIcon: "Ícone de classificação"
            }
        },
        friendTags: {
            name: "FriendTags",
            description: "Permite filtrar por etiquetas personalizadas no Quick Switcher iniciando a pesquisa com &",
            modal: {
                name: "Nome",
                users: "Utilizadores (separados por vírgula)",
                userlist: "Lista de Utilizadores (clique num utilizador para remover)",
                remove: "Remover",
                add: "Adicionar",
                tag: "Etiqueta",
                removeFrom: "Remover de",
                addTo: "Adicionar a"
            },
            option: {
                tagConfiguration: {
                    label: "Configuração de Etiquetas",
                    description: "O componente de configuração de etiquetas"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Faz com que o menu de contexto das mensagens nos resultados de pesquisa tenha todas as opções que seriam de esperar"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Faz com que as menções de utilizadores na caixa de chat tenham mais funcionalidades, como clique esquerdo/direito"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Faz com que os avatares ocupem todo o espaço do mosaico do canal de voz"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Adiciona um botão junto aos botões de microfone e ensurdecer para alternar a atividade de jogo. Clica com o botão direito para alternar a atividade do Spotify.",
            tooltip: "Alternar Atividade de Jogo",
            gameActivity: {
                enabled: "Atividade de Jogo Ativada",
                disabled: "Atividade de Jogo Desativada"
            },
            option: {
                oldIcon: {
                    label: "Ícone Antigo",
                    description: "Usa o estilo de ícone antigo de antes do redesenho de ícones do Discord"
                },
                location: {
                    label: "Localização",
                    description: "Onde mostrar o botão de alternância da atividade de jogo",
                    panel: "Ao lado de Silenciar/Ensurdecer",
                    toolbox: "Plexcord Toolbox"
                }
            },
            text: {
                disableGameActivity: "Desativar atividade de jogo",
                enableGameActivity: "Ativar atividade de jogo",
                shareSpotifyActivity: "Partilhar atividade do Spotify",
                shareSpotifyActivityAccount: "Partilhar atividade do Spotify ({{name}})"
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Um fantasma fofinho aparecerá se não responder às DMs",
            modal: {
                title: "Utilizadores que deram Ghost",
                no: "Sem Utilizadores em Ghost",
                unghost: "remover ghost",
                unknown: "Desconhecido",
                unnamedGroup: "Grupo Sem Nome",
                unknownUser: "Utilizador Desconhecido",
                clearAll: "Limpar Tudo",
                noGhost: "Sem fantasmas por aqui!",
                clear: "Limpar"
            },
            option: {
                showIndicator: {
                    label: "Mostrar Indicador",
                    description: "Mostra o contador de fantasmas no topo da lista de servidores"
                },
                showDmIcons: {
                    label: "Mostrar Ícones nas DMs",
                    description: "Mostra ícones de fantasma ao lado de DMs individuais"
                },
                ignoreGroupDms: {
                    label: "Ignorar DMs de Grupo",
                    description: "Exclui todas as DMs de grupo do sistema de ghosting"
                },
                exemptedChannels: {
                    label: "Canais Isentos",
                    description: "Lista de IDs de canais separados por vírgulas para isentar (clique direito num canal de DM para copiar o seu ID)"
                },
                ignoreBots: {
                    label: "Ignorar Bots",
                    description: "Ignora DMs de bots"
                },
                maxInactiveTimeMs: {
                    label: "Tempo Máximo Inativo",
                    description: "Apenas DMs de fantasma ativas dentro deste período",
                    no: "Sem limite",
                    oneHour: "1 hora",
                    oneDay: "1 dia",
                    oneWeek: "1 semana",
                    oneMonth: "1 mês"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Permite criar coleções de GIFs",
            context: {
                copyImageLink: "Copiar Link da Imagem",
                copyUrl: "Copiar URL",
                collection: {
                    add: "Adicionar à Coleção",
                    gif: "Coleções de GIFs",
                    delete: "Eliminar Coleção",
                    create: "Criar Coleção",
                    remove: "Remover",
                    information: "Informação da Coleção",
                    name: "Nome",
                    gifs: "GIFs",
                    created: "Criado em",
                    updated: "Última Atualização",
                    close: "Fechar",
                    rename: "Alterar Nome",
                    move: "Mover para Coleção",
                    select: "Selecione uma coleção para mover o item"
                },
                gif: {
                    information: "Informação",
                    added: "Adicionado em",
                    width: "Largura",
                    height: "Altura",
                    close: "Fechar"
                }
            },
            option: {
                itemPrefix: {
                    label: "Prefixo do Item",
                    description: "O prefixo para itens GIF"
                },
                collectionPrefix: {
                    label: "Prefixo da Coleção",
                    description: "O prefixo para coleções"
                },
                onlyShowCollections: {
                    label: "Mostrar Apenas Coleções",
                    description: "Mostra apenas as coleções"
                },
                stopWarnings: {
                    label: "Parar Avisos",
                    description: "Para os avisos de eliminação"
                },
                showCopyImageLink: {
                    label: "Mostrar Copiar Link da Imagem",
                    description: "Mostra a opção {{copyImageLink}} nos menus de contexto"
                },
                preventDuplicates: {
                    label: "Prevenir Duplicados",
                    description: "Impede a adição do mesmo GIF a uma coleção múltiplas vezes"
                },
                defaultEmptyCollectionImage: {
                    label: "Imagem Padrão de Coleção Vazia",
                    description: "A imagem/GIF que será mostrada quando uma coleção não tiver imagens"
                },
                collectionsSortType: {
                    label: "Tipo de Ordenação de Coleções",
                    description: "O tipo de ordenação para as coleções"
                },
                collectionsSortOrder: {
                    label: "Ordem de Ordenação de Coleções",
                    description: "A ordem de ordenação para as coleções"
                },
                collectionsSort: {
                    label: "Ordenação de Coleções",
                    description: "Decida como ordenar as coleções",
                    title: "Ordenar Coleções",
                    sortDescription: "Escolha um critério de ordenação para as suas coleções",
                    sortBy: "Ordenar Por",
                    name: "Nome",
                    creationDate: "Data de Criação",
                    modifiedDate: "Data de Modificação",
                    ascending: "Ascendente",
                    descending: "Descendente"
                },
                importGifs: {
                    label: "Importar GIFs",
                    description: "Importar Coleções",
                    button: "Importar Coleções"
                },
                exportGifs: {
                    label: "Exportar GIFs",
                    description: "Exportar Coleções",
                    button: "Exportar Coleções"
                },
                resetCollections: {
                    label: "Repor Coleções",
                    description: "Repõe as coleções para o padrão (elimina todas as suas coleções)",
                    button: "Repor Coleções"
                }
            },
            toast: {
                copied: "Link da imagem copiado!",
                urlCopied: "URL copiado!",
                already: "Essa coleção já existe",
                alreadyCollection: "Este GIF já está na coleção",
                collectionsImportedSuccessfully: "Coleções importadas com sucesso.",
                failedToImportCollections: "Falha ao importar coleções: {{String_err}}"
            },
            modal: {
                create: {
                    title: "Criar Coleção",
                    name: "Nome da Coleção",
                    create: "Criar"
                },
                rename: {
                    title: "Alterar Nome da Coleção",
                    name: "Novo Nome da Coleção",
                    warning: "O nome não pode ter mais de 24 caracteres",
                    rename: "Renomear"
                }
            },
            alert: {
                import: {
                    title: "Tem a certeza?",
                    body: "Importar coleções irá substituir as suas coleções atuais.",
                    confirm: "Importar",
                    cancel: "Agora não"
                },
                reset: {
                    title: "Tem a certeza?",
                    body: "Repor as coleções irá remover todas as suas coleções.",
                    confirm: "Repor",
                    cancel: "Agora não"
                },
                delete: {
                    title: "Tem a certeza?",
                    deleteBody: "Deseja realmente eliminar esta coleção?",
                    removeBody: "Deseja realmente remover este item?",
                    confirm: "Eliminar",
                    remove: "Remover",
                    cancel: "Agora não"
                }
            },
            text: {
                gifPickerCategoryOptions: "Opções de categoria do seletor de GIF",
                gifCollections: "Coleções de GIFs",
                unknown: "Desconhecido"
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Permite colar GIFs diretamente na caixa de chat"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Adiciona um comando para enviar um GIF aleatório dos seus favoritos, com uma probabilidade de 1 em 10 de mencionar o dono do servidor",
            command: {
                gifRoulette: {
                    description: "Tente a sua sorte e envie um GIF",
                    restricted: "Este comando está restrito neste servidor."
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Probabilidade de Mencionar o Dono",
                    description: "Se deve haver uma probabilidade de 1 em 10 de mencionar o dono do servidor (oh não)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Exibe os repositórios públicos de GitHub de um utilizador no seu perfil",
            loading: "A carregar repositórios...",
            option: {
                showStars: {
                    label: "Mostrar Estrelas",
                    description: "Mostra as estrelas dos repositórios"
                },
                showLanguage: {
                    label: "Mostrar Linguagem",
                    description: "Mostra a linguagem principal do repositório"
                }
            },
            error: {
                error: "Erro",
                render: "Erro: Falha ao renderizar GitHubRepos"
            },
            button: {
                show: "Mostrar Repositórios do GitHub",
                repositories: "Repositórios do GitHub",
                more: "Mostrar Mais",
                only: "A mostrar apenas os principais {{length}}/{{total}}"
            },
            modal: {
                title: "Repositórios do GitHub de {{username}}",
                repository: "Repositório",
                description: "Descrição",
                language: "Linguagem",
                stars: "Estrelas",
                viewOnGitHub: "Ver no GitHub",
                close: "Fechar"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "Adiciona um comando para enviar um link de pesquisa na internet",
            command: {
                googleThat: {
                    description: "Envia um link de motor de busca",
                    query: "A consulta de pesquisa"
                }
            },
            option: {
                hyperlink: {
                    label: "Hiperligação",
                    description: "Se o link enviado deve ser uma hiperligação com a consulta como rótulo"
                },
                embed: {
                    label: "Incorporar (Embed)",
                    description: "Se o link enviado deve gerar uma visualização incorporada"
                },
                defaultEngine: {
                    label: "Motor de Busca Padrão",
                    description: "O motor de busca a utilizar"
                },
                customEngineURL: {
                    label: "URL de Motor Personalizado",
                    description: "O URL do motor que deseja utilizar"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Permite usar qualquer autocolante de saudação em vez de apenas o aleatório, clicando com o botão direito no botão 'Acena para dizer olá!'",
            mode: {
                greet: "Saudar",
                message: "Mensagem"
            },
            option: {
                greetMode: {
                    label: "Modo de Saudação",
                    description: "Escolha o modo de saudação",
                    greet: "Saudar (apenas pode saudar 3 vezes)",
                    message: "Mensagem (pode saudar várias vezes)"
                }
            },
            context: {
                label: "Seletor de Autocolantes de Saudação",
                mode: "Modo de Saudação",
                stickers: "Autocolantes de Saudação",
                multi: "Multi-Saudação Profana",
                send: "Enviar Saudações"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Menu de contexto para extrair e descarregar os emojis e autocolantes de um servidor.",
            context: {
                download: {
                    emoji: "Descarregar Emojis",
                    sticker: "Descarregar Autocolantes"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Adiciona definições para tags de servidor, como ocultá-las ou desativar o aviso para as adotar.",
            option: {
                disableAdoptTagPrompt: {
                    label: "Desativar Aviso de Adotar Tag",
                    description: "Desativa o aviso para adotar tags"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Permite ocultar os botões do chat",
            tooltip: {
                close: "Fechar",
                open: "Abrir"
            },
            option: {
                color: {
                    label: "Cor",
                    description: "Colorir de vermelho ao abrir"
                },
                open: {
                    label: "Aberto",
                    description: "Aberto por predefinição"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Oculta anexos e incorporados em mensagens individuais através de um botão ao passar o rato",
            show: "Mostrar Multimédia",
            hide: "Ocultar Multimédia",
            hidden: "Multimédia Ocultada"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Oculta temporariamente mensagens e DMs até reiniciar.",
            button: {
                hide: "Ocultar",
                hideDm: "Ocultar DM",
                unhideDm: "Mostrar DM"
            },
            toggle: {
                none: "Nenhuma DM oculta",
                hide: "Ocultar DMs ocultas",
                show: "Mostrar DMs ocultas"
            },
            option: {
                hidePopoverButton: {
                    label: "Ocultar Botão de Popover",
                    description: "Oculta o botão de ocultar no menu flutuante da mensagem."
                }
            }
        },
        hideMutedVoiceIndicator: {
            name: "HideMutedVoiceIndicator",
            description: "Oculta o indicador de voz na lista de servidores quando os únicos canais de voz ativos estão silenciados"
        },
        hideServers: {
            name: "HideServers",
            description: "Oculta servidores da lista de servidores",
            context: {
                hide: "Ocultar Servidor",
                unhide: "Mostrar Servidor",
                folder: {
                    hide: "Ocultar Pasta",
                    unhide: "Mostrar Pasta"
                }
            },
            option: {
                showIndicator: {
                    label: "Mostrar Indicador",
                    description: "Mostra um menu para voltar a mostrar servidores no fundo da lista"
                },
                guildsList: {
                    label: "Lista de Servidores",
                    description: "Remove servidores ocultos"
                },
                resetHidden: {
                    label: "Repor Ocultos",
                    description: "Remove todos os servidores ocultos da lista",
                    button: "Repor Servidores Ocultos"
                }
            },
            button: {
                hidden: "Oculto",
                hiddenServers: "Servidores Ocultos",
                remove: "Remover",
                folder: "Pasta",
                removeAll: "Remover Todos",
                guilds: "Servidores",
                noHiddenServers: "Sem servidores ocultos"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes permite-lhe guardar mensagens",
            main: "Principal",
            button: {
                tooltip: "Holy Notes",
                save: "Guardar Nota",
                cancel: "Cancelar",
                noteMessage: "Anotar Mensagem",
                refresh: "Atualizar Avatares",
                import: "Importar Notas",
                export: "Exportar Notas",
                deleteAll: "Eliminar Todas as Notas",
                delete: "Eliminar Caderno",
                create: "Criar Caderno",
                copyText: "Copiar Texto",
                copyAttachment: "Copiar URL do Anexo",
                deleteNote: "Eliminar Nota",
                moveNote: "Mover Nota",
                moveTo: "Mover para {{key}}",
                copyId: "Copiar ID"
            },
            modal: {
                error: {
                    generic: "Ocorreu um erro ao processar as suas notas. Verifique a consola para detalhes.",
                    easter: "Nenhuma nota encontrada. O Empathy Banana está aqui para si.",
                    empty: "Nenhuma nota encontrada neste caderno."
                },
                help: {
                    title: "Ajuda",
                    description: "Aprenda a usar o Holy Notes",
                    addingNotes: "Adicionar Notas",
                    addingNotesText: "Para adicionar uma nota, clique com o botão direito numa mensagem, passe sobre 'Anotar Mensagem' e clique no botão com o nome do caderno onde deseja guardar.",
                    prototype: "Protótipo",
                    noteMessage: "Clicar no botão 'Anotar Mensagem' por si só guardará no caderno Principal por predefinição!",
                    deletingNotes: "Eliminar Notas",
                    deletingNotesText: "Nota: pode clicar com o botão direito na nota e escolher 'Eliminar Nota' ou manter premida a tecla 'DELETE' e clicar numa nota; é magia!",
                    movingNotes: "Mover Notas",
                    movingNotesText: "Para mover uma nota, clique com o botão direito nela, passe sobre 'Mover Nota' e selecione o caderno de destino.",
                    jumpToMessage: "Saltar para Mensagem",
                    jumpToMessageText: "Para ir para o local original da mensagem, clique com o botão direito na nota e escolha 'Saltar para Mensagem'."
                },
                notebook: {
                    title: "CADERNO",
                    search: "Procurar mensagem...",
                    options: "Opções de Ordenação",
                    label: "Menu de Ordenação",
                    filteredOf: "{{filteredCount}} de {{noteCount}} nota{{s}}",
                    note: "{{noteCount}} nota{{s}}",
                    ada: "Ascendente / Data de Adição",
                    amd: "Ascendente / Data da Mensagem",
                    dda: "Descendente / Data de Adição",
                    dmd: "Descendente / Data da Mensagem",
                    change: "Alterar Ordenação",
                    ascending: "Ascendente",
                    descending: "Descendente",
                    dateAdded: "Data de Adição",
                    messageDate: "Data da Mensagem"
                },
                create: {
                    title: "Criar Caderno",
                    description: "Introduza um nome para o novo caderno",
                    placeholder: "Nome do Caderno"
                },
                delete: {
                    title: "Eliminar {{notebookName}}?",
                    description: "{{noteCount}} nota{{s}} serão eliminadas permanentemente",
                    button: "Eliminar"
                },
                tabs: {
                    label: "Separadores de Cadernos"
                }
            },
            toast: {
                saved: "Mensagem adicionada com sucesso a {{notebook}}",
                deleted: "Nota eliminada com sucesso de {{notebook}}",
                moved: "Nota movida com sucesso de {{from}} para {{to}}.",
                exists: "O caderno {{notebookName}} já existe.",
                created: "{{notebookName}} criado com sucesso.",
                deletedNotebook: "{{notebookName}} eliminado com sucesso.",
                refreshed: "Avatares atualizados com sucesso.",
                deletedAll: "Todas as notas eliminadas com sucesso.",
                imported: "Notas importadas com sucesso.",
                invalid: "Falha ao importar notas.",
                invalidJson: "JSON inválido"
            },
            toolbox: {
                action: "Abrir Notas"
            },
            text: {
                holyNotes: "Holy Notes",
                noteTag: "NOTA"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Altera o botão de Início para um indicador de escrita se alguém nas suas DMs estiver a escrever"
        },
        iconViewer: {
            name: "IconViewer",
            description: "Adiciona um novo separador nas definições para pré-visualizar todos os ícones.",
            toolbox: "Abrir Separador de Ícones",
            iconFinder: "Localizador de Ícones",
            about: {
                title: "Funcionalidades",
                preview: "Pré-visualizar Ícones",
                list: {
                    copy: "Copiar nomes de ícones e variáveis CSS",
                    download: "Descarregar ícones em diferentes formatos (SVG, PNG, GIF, etc.)",
                    premade: "Copiar ícones pré-feitos para os seus plugins",
                    find: "Encontrar ícones pelo contexto da função",
                    search: "Procurar cores clicando com o botão direito no nome da cor",
                    special: "Agradecimentos especiais"
                }
            },
            context: {
                icon: {
                    options: "Opções de Ícone",
                    log: "Registar na Consola",
                    save: "Guardar como...",
                    rightClick: "Clique direito no ícone para alterar",
                    usage: "Utilização",
                    click: "Clique para copiar",
                    copied: "Copiado!",
                    actions: "Ações"
                }
            },
            modal: {
                label: "Pesquisar por contexto de função",
                search: "Pesquisar {{count}} ícones...",
                function: "Função",
                iconViewer: {
                    colors: "Cores do Visualizador de Ícones",
                    unknown: "desconhecido",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Reinicia automaticamente o cliente após estar inativo por um tempo configurável, mas evita reiniciar enquanto estiver num canal de voz.",
            option: {
                isEnabled: {
                    label: "Ativado",
                    description: "Ativar reinício automático após inatividade"
                },
                idleMinutes: {
                    label: "Minutos de Inatividade",
                    description: "Minutos de inatividade antes de reiniciar (quando fora de canais de voz)"
                }
            },
            toolbox: {
                disable: "Desativar Reinício Automático",
                enable: "Ativar Reinício Automático"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Ignora atividades de aparecerem APENAS no seu estado. Pode configurar quais são ignoradas nos separadores de Jogos Registados ou usar as definições gerais abaixo",
            modal: {
                import: {
                    title: "Importar o ID de aplicação do plugin CustomRPC para a lista de filtros"
                },
                filter: {
                    title: "Lista de Filtros",
                    description: "Lista de IDs de atividade separados por vírgulas (útil para filtrar atividades RPC específicas)"
                }
            },
            toast: {
                id: {
                    notSet: "O ID de aplicação CustomRPC não está definido.",
                    alreadyAdded: "O ID de aplicação CustomRPC já foi adicionado."
                }
            },
            button: {
                import: "Importar ID CustomRPC"
            },
            option: {
                importCustomRPC: {
                    label: "Importar CustomRPC"
                },
                listMode: {
                    label: "Modo de Lista",
                    description: "Escolha como a lista de filtros é aplicada",
                    blacklist: "Lista Negra (ignora apenas o que está na lista)",
                    whitelist: "Lista Branca (ignora tudo exceto o que está na lista)"
                },
                idList: {
                    label: "Lista de IDs"
                },
                ignorePlaying: {
                    label: "Ignorar 'A Jogar'",
                    description: "Ignora todas as atividades de jogo e RPC"
                },
                ignoreStreaming: {
                    label: "Ignorar 'Em Direto'",
                    description: "Ignora todas as atividades de transmissão"
                },
                ignoreListening: {
                    label: "Ignorar 'A Ouvir'",
                    description: "Ignorar todas as atividades de audição (geralmente do Spotify)"
                },
                ignoreWatching: {
                    label: "Ignorar 'A Ver'",
                    description: "Ignora todas as atividades de visualização"
                },
                ignoreCompeting: {
                    label: "Ignorar 'A Competir'",
                    description: "Ignora todas as atividades competitivas"
                },
                ignoredActivities: {
                    label: "Atividades Ignoradas"
                }
            },
            text: {
                enableActivity: "Ativar atividade",
                disableActivity: "Desativar atividade"
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Permite ignorar chamadas de utilizadores específicos ou grupos de DM.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Utilizadores Ignorados Permanentemente",
                    description: "IDs de utilizadores (vírgula + espaço) que devem ser permanentemente ignorados"
                }
            },
            button: {
                ignore: "Ignorar",
                temporarilyIgnore: "Ignorar Chamadas Temporariamente",
                permanentlyIgnore: "Ignorar Chamadas Permanentemente"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Não ocultar mensagens de 'prováveis spammers'"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Exibe o nome do ficheiro de imagens e GIFs como uma dica ao passar o rato",
            option: {
                showFullUrl: {
                    label: "Mostrar URL Completo",
                    description: "Mostra o URL completo da imagem em vez de apenas o nome. Sempre ativado para GIFs pois raramente têm nomes significativos"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Nunca ocultar links de imagens em mensagens, mesmo que seja o único conteúdo"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Permite fazer zoom em imagens e GIFs e exibe metadados. Use a roda do rato para zoom e Shift + roda para aumentar o raio da lente.",
            option: {
                saveZoomValues: {
                    label: "Guardar Valores de Zoom",
                    description: "Se deve guardar os valores de zoom e tamanho da lente"
                },
                invertScroll: {
                    label: "Inverter Roda do Rato",
                    description: "Inverte a direção do scroll"
                },
                nearestNeighbour: {
                    label: "Nearest Neighbour",
                    description: "Usa interpolação 'Nearest Neighbour' ao redimensionar imagens"
                },
                square: {
                    label: "Quadrado",
                    description: "Torna a lente quadrada"
                },
                zoom: {
                    label: "Zoom",
                    description: "Nível de zoom da lente"
                },
                size: {
                    label: "Tamanho",
                    description: "Raio / Tamanho da lente"
                },
                zoomSpeed: {
                    label: "Velocidade do Zoom",
                    description: "Quão rápido o zoom / tamanho da lente muda"
                },
                showMetadata: {
                    label: "Mostrar Metadados",
                    description: "Mostra metadados da imagem ao clicar duas vezes na imagem selecionada"
                }
            },
            context: {
                square: "Lente Quadrada",
                nearest: "Nearest Neighbour",
                zoom: "Zoom",
                size: "Tamanho da Lente",
                zoomSpeed: "Velocidade do Zoom",
                showImageMetadata: "Mostrar Metadados da Imagem",
                view: "Ver Metadados",
                loading: "A carregar...",
                unknown: "Desconhecido",
                sizeHTML: "Tamanho",
                dimensions: "Dimensões",
                filename: "Nome do Ficheiro"
            },
            text: {
                bytes: "Bytes"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Adiciona um comando /imgtogif para criar um GIF a partir de qualquer imagem",
            command: {
                imgToGif: {
                    description: "Permite transformar uma imagem num GIF",
                    image: "Anexo de imagem a usar",
                    width: "Largura do GIF",
                    height: "Altura do GIF"
                }
            },
            error: {
                noImage: "Nenhuma imagem especificada!",
                notImage: "O ficheiro enviado não é uma imagem"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Mostra as suas relações implícitas no separador de Amigos.",
            option: {
                sortByAffinity: {
                    label: "Ordenar por Afinidade",
                    description: "Se deve ordenar as relações implícitas pela afinidade que têm consigo."
                }
            },
            implicit: "Implícito"
        },
        inRole: {
            name: "InRole",
            description: "Saiba quem está num cargo com o menu de contexto ou o comando /inrole (leia a info do plugin!)",
            command: {
                inrole: {
                    description: "Saiba quem tem um certo cargo",
                    role: "O cargo",
                    noGuild: "Certifique-se de que está num servidor."
                }
            },
            context: {
                view: "Ver Membros no Cargo"
            },
            modal: {
                about: {
                    title: "Limitações",
                    description: "Se não tiver permissões de moderador e o servidor for grande (mais de 100 membros), o plugin poderá ter limitações",
                    list: {
                        one: "Membros offline não serão listados",
                        two: "Até 100 membros serão listados por predefinição. Para obter mais, faça scroll na lista de membros.",
                        three: "No entanto, amigos serão sempre mostrados independentemente do estado."
                    }
                },
                member: {
                    title: "Membros no Cargo",
                    noMembers: "Parece que não foram encontrados membros online em cache com esse cargo. Tente fazer scroll na lista de membros!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Partilha de ecrã instantânea ao entrar num canal de voz com suporte para ecrãs, janelas e câmaras",
            modal: {
                linux: {
                    title: "Para Linux",
                    body: "No Wayland apenas abre o seletor de partilha",
                    bodyTwo: "No X11 pode ou não funcionar :shrug:"
                },
                videoDevices: {
                    title: "Dispositivos de Vídeo",
                    body: "Suporta câmaras e placas de captura (como Elgato HD60X) quando ativado"
                },
                regardingSound: {
                    title: "Sobre Som e Pré-visualização",
                    body: "Usamos as definições do Discord para decidir se o som e a pré-visualização devem estar ativos"
                }
            },
            option: {
                streamMedia: {
                    label: "Fonte a transmitir",
                    description: "Reinicia para o ecrã principal se não for encontrada",
                    loading: "A carregar fontes...",
                    none: "Nenhuma fonte encontrada",
                    placeholder: "Selecione uma fonte para transmitir"
                },
                includeVideoDevices: {
                    label: "Incluir Dispositivos de Vídeo",
                    description: "Inclui câmaras e placas de captura na lista de fontes"
                },
                autoMute: {
                    label: "Silenciar Automático",
                    description: "Silencia automaticamente o microfone ao entrar num canal de voz"
                },
                autoDeafen: {
                    label: "Ensurdecer Automático",
                    description: "Ensurdece automaticamente ao entrar num canal de voz"
                },
                instantScreenshare: {
                    label: "Partilha Instantânea",
                    description: "Ativa a funcionalidade de partilha automática"
                },
                keybindScreenshare: {
                    label: "Atalho para Partilha",
                    description: "Partilha de ecrã via atalho configurado no Discord"
                },
                focusDiscord: {
                    label: "Focar Discord",
                    description: "Apenas inicia a partilha por atalho quando o Discord está focado"
                },
                toolboxManagement: {
                    label: "Gestão na Toolbox",
                    description: "Ativar/Desativar Partilha Instantânea"
                }
            },
            toolbox: {
                label: "Partilha Instantânea",
                toast: "Partilha Instantânea {{state}}",
                enabled: "Ativada",
                disabled: "Desativada"
            },
            toast: {
                instantScreenshareDisabled: "Partilha de ecrã instantânea {{disabled}}"
            },
            text: {
                instantScreenshare: "Instant Screenshare"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Encripte as suas mensagens de forma discreta!",
            option: {
                savedPasswords: {
                    label: "Palavras-passe Guardadas",
                    description: "Palavras-passe guardadas (separadas por , )"
                }
            },
            button: {
                encrypt: "Encriptar Mensagem",
                decrypt: "Desencriptar Mensagem",
                hidden: "Indicador de Mensagem Oculta (InvisibleChat)"
            },
            tooltip: {
                hidden: "Esta mensagem contém uma mensagem oculta! (InvisibleChat)"
            },
            embed: {
                title: "Mensagem Desencriptada",
                footer: "Enviado com InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Encriptar Mensagem",
                    secret: "Segredo",
                    cover: "Cobertura (2 ou mais palavras!!)",
                    password: "Palavra-passe",
                    dontUseCover: "Não usar cobertura",
                    send: "Enviar",
                    cancel: "Cancelar"
                },
                decrypt: {
                    title: "Desencriptar Mensagem",
                    with: "Mensagem com encriptação",
                    password: "Palavra-passe",
                    decrypt: "Desencriptar",
                    cancel: "Cancelar"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Permite editar os valores padrão ao criar convites de servidor.",
            option: {
                inviteDuration: {
                    label: "Duração do Convite",
                    description: "Duração padrão para convites de servidor",
                    thirtyMinutes: "30 Minutos",
                    oneHour: "1 Hora",
                    sixHours: "6 Horas",
                    twelveHours: "12 Horas",
                    oneDay: "1 Dia",
                    sevenDays: "7 Dias",
                    forever: "Para sempre"
                },
                maxUses: {
                    label: "Máximo de Usos",
                    description: "Limite padrão de utilizações",
                    unlimited: "Ilimitado",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Acesso Temporário",
                    description: "Acesso temporário por predefinição nos convites"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Torna as cores dos nomes no chat únicas, como em clientes IRC",
            option: {
                lightness: {
                    label: "Luminosidade",
                    description: "Luminosidade em %. Altere se as cores forem demasiado claras ou escuras"
                },
                memberListColors: {
                    label: "Cores na Lista de Membros",
                    description: "Substitui as cores dos cargos na lista de membros"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Aplicar Apenas a Utilizadores sem Cor",
                    description: "Aplica cores apenas a utilizadores que não têm uma cor predefinida"
                },
                applyColorOnlyInDms: {
                    label: "Aplicar Apenas em DMs",
                    description: "Aplica cores apenas em mensagens diretas"
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Guarda localmente todas as pessoas com quem comunicou, para o caso de as perder",
            section: {
                description: "Fornece uma lista de utilizadores que mencionou, respondeu ou que são donos de servidores a que pertence",
                empty: "Está vazio de momento.",
                tooltip: "{{user}}, atualizado em {{updatedAtContent}}",
                owner: "Dono do Servidor",
                iRememberYou: "Eu Lembro-me de Ti"
            },
            context: {
                user: "Opções de Utilizador",
                copy: "Copiar ID do Utilizador",
                copyToast: "ID do utilizador copiado",
                view: "Ver Perfil"
            },
            modal: {
                title: "Editor",
                filter: "Filtrar por tag, nome, ID",
                button: {
                    validate: "Validar e Guardar",
                    cancel: "Cancelar",
                    openEditor: "Abrir Editor",
                    resetData: "Repor Armazenamento",
                    sure: "Tem a certeza?"
                }
            },
            text: {
                serverOptions: "Opções do servidor",
                copyServerId: "Copiar ID do servidor",
                serverIdCopied: "ID do servidor copiado para a área de transferência"
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Adiciona opções no menu de contexto para saltar para o início ou fim de um canal/DM",
            context: {
                top: "Saltar para a Primeira Mensagem",
                bottom: "Saltar para a Última Mensagem",
                noMessages: "Nenhuma mensagem encontrada deste utilizador neste canal.",
                searchFailed: "Falha ao procurar mensagens."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Tenta navegar para o canal onde estava antes de trocar de conta ou carregar o Discord."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Adiciona efeitos sonoros de OperaGX ou osu! ao escrever no teclado.",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume dos sons do teclado"
                },
                soundPack: {
                    label: "Pacote de Sons",
                    description: "Pacote de sons a usar",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Envia uma notificação se uma mensagem corresponder a certas palavras-chave ou regex",
            idHolder: "ID",
            keywordEntry: "Entrada de Palavra-Chave",
            regexHolder: "exemplo|regex",
            ignoreCase: "Ignorar Maiúsculas",
            whiteblackLabel: "Lista Branca/Negra",
            tab: {
                title: "Palavras-Chave",
                clearAll: "Limpar Tudo"
            },
            button: {
                addId: "Adicionar ID",
                addKeyword: "Adicionar Palavra-Chave"
            },
            listTypeSelector: {
                blacklist: "Lista Negra",
                whitelist: "Lista Branca",
                placeholder: "Selecione o tipo de lista"
            },
            option: {
                ignoreBots: {
                    label: "Ignorar Bots",
                    description: "Ignorar mensagens de bots"
                },
                amountToKeep: {
                    label: "Quantidade a Manter",
                    description: "Quantidade de mensagens a manter no registo"
                },
                keywords: {
                    label: "Palavras-Chave",
                    description: "Gerir palavras-chave"
                }
            },
            text: {
                keywordEntryI1: "Entrada de palavra-chave {{i_1}}",
                listPriorityAdvanced: "Prioridade das listas (avançado)",
                whichListToPrioritize: "Que lista priorizar caso uma mensagem acione ambas as listas",
                ifYouAreNot: "Se não tiveres a certeza, na maioria dos casos costuma ficar em Lista negra"
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Adiciona um indicador de última vez online sob os nomes de utilizador nas DMs e lista de membros",
            unit: {
                d: "dia",
                h: "hora",
                m: "minuto"
            },
            online: "Online há {{formattedTime}}"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Plugin para o rich presence do ListenBrainz",
            about: {
                title: "Sobre a API MusicBrainz",
                description: "A API MusicBrainz não requer chave, mas requer um {{link}}. Para a maioria, um e-mail deve bastar.",
                userAgent: "user-agent significativo"
            },
            option: {
                username: {
                    label: "Nome de Utilizador",
                    description: "Utilizador ListenBrainz"
                },
                mbContact: {
                    label: "Contacto MB",
                    description: "Contacto ListenBrainz"
                },
                shareUsername: {
                    label: "Partilhar Utilizador",
                    description: "Mostrar link para o perfil ListenBrainz"
                },
                shareSong: {
                    label: "Partilhar Música",
                    description: "Mostrar link para a música atual no ListenBrainz"
                },
                hideWithSpotify: {
                    label: "Ocultar com Spotify",
                    description: "Ocultar se o Spotify estiver a correr"
                },
                hideWithActivity: {
                    label: "Ocultar com Atividade",
                    description: "Ocultar se tiver qualquer outra presença ativa"
                },
                useTimeBar: {
                    label: "Usar Barra de Tempo",
                    description: "Usa a duração da faixa para exibir uma barra de tempo"
                },
                statusName: {
                    label: "Nome do Estado",
                    description: "Texto de estado personalizado"
                },
                nameFormat: {
                    label: "Formato do Nome",
                    description: "Como mostrar a música e artista",
                    custom: "Usar nome de estado personalizado",
                    artistSong: "Usar formato 'artista - música'",
                    songArtist: "Usar formato 'música - artista'",
                    artistOnly: "Apenas artista",
                    songOnly: "Apenas música",
                    albumName: "Usar nome do álbum"
                },
                useListeningStatus: {
                    label: "Usar Estado 'A Ouvir'",
                    description: "Mostrar estado 'A ouvir' em vez de 'A jogar'"
                },
                missingArt: {
                    label: "Arte em Falta",
                    description: "Quando não há capa de álbum",
                    listenbrainzLogo: "Usar logo grande do ListenBrainz",
                    generic: "Usar imagem genérica"
                },
                showAlbumCover: {
                    label: "Mostrar capa do álbum",
                    description: "Mostrar capa do álbum. Desativar isto irá mostrar uma imagem genérica. Útil se a tua música tiver capas inadequada"
                },
                useLogo: {
                    label: "Usar Logo",
                    description: "Mostrar logo do ListenBrainz sobre a arte do álbum"
                }
            },
            button: {
                profile: "Perfil do ListenBrainz",
                viewSong: "Ver música"
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Substitui as frases de carregamento do Discord",
            option: {
                replaceEvents: {
                    label: "Substituir em Eventos",
                    description: "Deve aplicar-se durante eventos com frases temáticas? (ex: Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Ativar Frases do Plugin",
                    description: "Ativa as frases predefinidas por este plugin"
                },
                enableDiscordPresetQuotes: {
                    label: "Ativar Frases do Discord",
                    description: "Ativa as frases originais do Discord"
                },
                additionalQuotes: {
                    label: "Frases Adicionais",
                    description: "Frases personalizadas extra, separadas pelo delimitador abaixo"
                },
                additionalQuotesDelimiter: {
                    label: "Delimitador de Frases",
                    description: "Carácter usado para separar frases"
                }
            },
            text: {
                allQuotesDisabled: "Desativaste mesmo todas as frases de carregamento? Que palhaço..."
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "Permite fazer login noutro dispositivo lendo um código QR, tal como no telemóvel!",
            option: {
                scanQr: {
                    label: "Ler Código QR",
                    description: "Ler um código QR",
                    notEnabled: "Ative o plugin e reinicie o cliente para ler um código QR"
                }
            },
            neverScan: "Nunca leia um código QR de outro utilizador ou aplicação.",
            hold: "Mantenha premido para confirmar o login",
            scanning: "A ler...",
            stopScanning: "Parar Leitura",
            usingWebcam: "Ler usando webcam",
            dragDrop: "Arraste uma imagem para aqui, ou clique para selecionar",
            orPaste: "Ou cole uma imagem da área de transferência!",
            verifyLogin: "Verificar início de sessão",
            text: {
                scanQrCode: "Digitalizar código QR"
            }
        },
        markdownTables: {
            name: "MarkdownTables",
            description: "Apresenta tabelas markdown ao estilo do GitHub nas mensagens do Discord.",
            toolbar: {
                label: "Vista de tabela markdown",
                table: "Tabela",
                raw: "Bruto"
            },
            option: {
                hideToggle: {
                    label: "Ocultar alternador",
                    description: "Oculta o alternador Tabela/Bruto e mostra sempre as tabelas apresentadas."
                }
            }
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Permite alterar a velocidade de reprodução (padrão) de conteúdos multimédia",
            playbackSpeed: "Velocidade de Reprodução",
            context: {
                label: "Controlo de velocidade"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Velocidade Padrão de Mensagens de Voz",
                    description: "Mensagens de voz"
                },
                defaultVideoSpeed: {
                    label: "Velocidade Padrão de Vídeos",
                    description: "Vídeos"
                },
                defaultAudioSpeed: {
                    label: "Velocidade Padrão de Áudio",
                    description: "Áudios"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Mostra o número de membros online, total de membros e utilizadores em canais de voz do servidor - na lista de membros e na dica.",
            option: {
                toolTip: {
                    label: "Dica (Tooltip)",
                    description: "Mostra a contagem na dica do servidor"
                },
                memberList: {
                    label: "Lista de Membros",
                    description: "Mostra a contagem no cabeçalho da lista de membros"
                },
                voiceActivity: {
                    label: "Atividade de Voz",
                    description: "Mostra o número de utilizadores em canais de voz"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} online neste canal",
            totalMembers: "{{formattedTotalCount}} membros no servidor",
            totalVoice: "{{formattedVoiceCount}} membros em voz",
            tooltip: {
                total: "{{count}} membros no total no servidor"
            }
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Mostra avatares de utilizadores e ícones de cargos dentro das menções",
            option: {
                showAtSymbol: {
                    label: "Mostrar Símbolo @",
                    description: "Se o símbolo @ deve ser exibido nas menções de utilizador"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Adiciona um botão na barra de chat para miar no chat",
            button: {
                meow: "Miar"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Une mensagens enviadas num curto período de tempo com a sua mensagem anterior se ninguém mais responder entretanto.",
            option: {
                timePeriod: {
                    label: "Período de Tempo",
                    description: "A duração das rajadas (em segundos)."
                },
                shouldMergeWithAttachment: {
                    label: "Unir com Anexos",
                    description: "Deve unir a mensagem se a anterior tiver um anexo?"
                },
                useSpace: {
                    label: "Usar Espaço",
                    description: "Adicionar um espaço entre as mensagens ao unir, em vez de uma nova linha."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Mantenha Backspace e clique para eliminar, clique duplo para editar/responder",
            option: {
                singleClickAction: {
                    label: "Ação de Clique Único",
                    description: "Ação ao clicar uma vez (nas suas mensagens)"
                },
                singleClickModifier: {
                    label: "Modificador de Clique Único",
                    description: "Tecla necessária para o clique único (as suas mensagens)"
                },
                singleClickOthersAction: {
                    label: "Ação de Clique Único (Outros)",
                    description: "Ação ao clicar uma vez (mensagens de outros)"
                },
                singleClickOthersModifier: {
                    label: "Modificador de Clique Único (Outros)",
                    description: "Tecla necessária para o clique único (mensagens de outros)"
                },
                doubleClickAction: {
                    label: "Ação de Clique Duplo",
                    description: "Ação ao clicar duas vezes (as suas mensagens)"
                },
                doubleClickOthersAction: {
                    label: "Ação de Clique Duplo (Outros)",
                    description: "Ação ao clicar duas vezes (mensagens de outros)"
                },
                doubleClickModifier: {
                    label: "Modificador de Clique Duplo",
                    description: "Tecla necessária para a ação de clique duplo"
                },
                tripleClickAction: {
                    label: "Ação de Clique Triplo",
                    description: "Ação ao clicar três vezes"
                },
                tripleClickModifier: {
                    label: "Modificador de Clique Triplo",
                    description: "Tecla necessária para a ação de clique triplo"
                },
                reactEmoji: {
                    label: "Emoji de Reação",
                    description: "Emoji a usar nas ações de reação"
                },
                addAdditionalReacts: {
                    label: "Adicionar Reações Adicionais",
                    description: "Também adiciona os emojis de reação configurados"
                },
                additionalReactEmojis: {
                    label: "Emojis de Reação Adicionais",
                    description: "Emojis extra (separados por vírgula/linha, máx {{count}})"
                },
                disableInDms: {
                    label: "Desativar em DMs",
                    description: "Desativa todas as ações de clique em mensagens diretas"
                },
                disableInSystemDms: {
                    label: "Desativar em DMs de Sistema",
                    description: "Desativa em DMs de sistema"
                },
                clickTimeout: {
                    label: "Tempo de Espera do Clique",
                    description: "Tempo para distinguir cliques múltiplos (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Limite de Pressão do Clique Duplo",
                    description: "Tempo máximo de pressão para cliques duplos (ms). Pressionar mais tempo permite selecionar texto"
                },
                deferDoubleClickForTriple: {
                    label: "Adiar Clique Duplo para Triplo",
                    description: "Atrasa o clique duplo para permitir o triplo"
                },
                selectionHoldTimeout: {
                    label: "Tempo para Seleção",
                    description: "Tempo de pressão para permitir selecionar texto (ms)"
                },
                quoteWithReply: {
                    label: "Citar com Resposta",
                    description: "Ao citar, também responde à mensagem"
                },
                useSelectionForQuote: {
                    label: "Usar Seleção para Citação",
                    description: "Usa o texto selecionado ao citar, se disponível"
                }
            },
            actions: {
                none: "Nenhuma",
                delete: "Eliminar",
                copyLink: "Copiar Link",
                copyID: "Copiar ID",
                copyContent: "Copiar Conteúdo",
                copyUserID: "Copiar ID do Utilizador",
                edit: "Editar",
                reply: "Responder",
                react: "Reagir",
                openThread: "Abrir Tópico",
                openTab: "Abrir Separador",
                quote: "Citar",
                pin: "Fixar"
            },
            missingPermissions: {
                react: "Impossível reagir: Sem permissões",
                pin: "Impossível fixar: Sem permissões",
            },
            cannotQuote: "Não é possível citar este tipo de mensagem",
            copy: {
                messageId: "ID da mensagem copiado!",
                messageContent: "Conteúdo da mensagem copiado!",
                userId: "ID do utilizador copiado!"
            },
            linkCopied: "Link copiado!",
            text: {
                shift: "Shift",
                ctrl: "Ctrl",
                alt: "Alt",
                backspace: "Backspace",
                pickEmoji: "Escolher emoji"
            },
            emojiSetting: {
                pick: "Escolher emoji",
                selectMain: "Selecionar emoji para reações",
                selectAdditional: "Selecionar emojis adicionais",
                additionalPlaceholder: "separados por vírgula/quebra de linha, máx. {{max}}"
            },
            toast: {
                cannotReact: "Não é possível reagir: permissões ausentes",
                linkCopied: "Link copiado!"
            }
        },
        messageColors: {
            name: "MessageColors",
            description: "Exibe códigos de cores como #FF0042 dentro das mensagens",
            option: {
                renderType: {
                    label: "Tipo de Renderização",
                    description: "Como mostrar as cores",
                    textColor: "Cor do texto",
                    block: "Bloco ao lado",
                    backgroundColor: "Cor de fundo"
                },
                enableShortHexCodes: {
                    label: "Ativar Hex Codes Curtos",
                    description: "Ativa códigos de 3 caracteres como #39f"
                },
                blockView: {
                    label: "Tipo de Visualização em Bloco",
                    description: "Onde mostrar os blocos de cor",
                    right: "Lado direito",
                    left: "Lado esquerdo",
                    both: "Ambos os lados"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Mostra quanto tempo demorou a carregar as mensagens do canal atual",
            option: {
                showIcon: {
                    label: "Mostrar Ícone",
                    description: "Mostra o ícone de tempo na barra de mensagens"
                },
                showMs: {
                    label: "Mostrar Milissegundos",
                    description: "Mostra milissegundos no tempo"
                },
                iconColor: {
                    label: "Cor do Ícone",
                    description: "Cor do ícone (valor CSS)"
                }
            },
            loaded: "Mensagens carregadas em {{time}}ms ({{timeAgo}})",
            day: "há {{s}} dia",
            hour: "há {{s}} hora",
            minute: "há {{s}} minuto",
            justNow: "agora mesmo"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Exibe um indicador para mensagens que demoraram ≥n segundos a ser enviadas",
            day: "dia",
            days: "dias",
            hour: "hora",
            hours: "horas",
            minute: "minuto",
            minutes: "minutos",
            second: "segundo",
            seconds: "segundos",
            millisecond: "milissegundo",
            milliseconds: "milissegundos",
            and: "e",
            oldKotlinDetected: "Suspeita-se que o utilizador use um cliente Discord Android antigo.",
            ahead: "O relógio deste utilizador está {{delta}} adiantado.",
            delay: "Esta mensagem foi enviada com um atraso de {{delta}}.",
            delayedMessage: "Mensagem Atrasada",
            oldAndroidClient: "Cliente Discord Android antigo",
            option: {
                latency: {
                    label: "Latência",
                    description: "Limite em segundos para o indicador de latência"
                },
                detectDiscordKotlin: {
                    label: "Detetar Discord Kotlin",
                    description: "Deteta clientes Android antigos"
                },
                showMillis: {
                    label: "Mostrar Milissegundos",
                    description: "Mostra milissegundos"
                },
                ignoreSelf: {
                    label: "Ignorar Próprio",
                    description: "Não adiciona o indicador às suas mensagens"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Adiciona uma pré-visualização a mensagens que ligam a outra mensagem",
            option: {
                messageBackgroundColor: {
                    label: "Cor de Fundo da Mensagem",
                    description: "Cor de fundo para mensagens em embeds"
                },
                automodEmbeds: {
                    label: "Embeds Estilo Automod",
                    description: "Usa embeds mais pequenos (estilo automod)",
                    always: "Usar sempre estilo automod",
                    prefer: "Preferir estilo automod, mas usar o completo se necessário",
                    never: "Nunca usar estilo automod"
                },
                listMode: {
                    label: "Modo de Lista",
                    description: "Se usa a lista de IDs como lista negra ou branca",
                    blacklist: "Lista Negra",
                    whitelist: "Lista Branca"
                },
                idList: {
                    label: "Lista de IDs",
                    description: "IDs de servidores/canais/utilizadores (separados por vírgula)"
                },
                clearMessageCache: {
                    label: "Limpar Cache de Mensagens",
                    description: "Limpa a cache das mensagens ligadas"
                }
            },
            noContent: {
                noAttachments: "sem conteúdo, {{count}} embed{{s}}",
                noEmbeds: "sem conteúdo, {{count}} anexo{{s}}",
                both: "sem conteúdo, {{attachments}} anexo{{attachmentsS}} e {{embeds}} embed{{embedsS}}"
            },
            dm: "Mensagem Direta",
            groupDm: "DM de Grupo",
            server: "Servidor"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Adiciona uma dica com pré-visualização ao passar o rato sobre links de mensagens, respostas e mensagens encaminhadas.",
            loading: "A carregar...",
            option: {
                onLink: {
                    label: "Em Links",
                    description: "Mostrar ao passar o rato sobre links de mensagens"
                },
                onReply: {
                    label: "Em Respostas",
                    description: "Mostrar ao passar o rato sobre respostas"
                },
                onForward: {
                    label: "Em Encaminhamentos",
                    description: "Mostrar ao passar o rato sobre mensagens encaminhadas"
                },
                display: {
                    label: "Exibição",
                    description: "Estilo de exibição",
                    auto: "Igual à mensagem",
                    compact: "Compacto",
                    cozy: "Aconchegante (Cozy)"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Regista temporariamente mensagens eliminadas e editadas.",
            removeMessage: "Limpar histórico da mensagem",
            removeMessageTemporary: "Remover Mensagem (Temporário)",
            clearMessageLog: "Limpar Registo de Mensagens",
            showDiff: "Mostrar diferenças",
            modal: {
                edit: {
                    title: "Histórico de Edição de Mensagens",
                    tooltip: "Este estado de edição não foi registado, por isso não pode ser exibido."
                }
            },
            option: {
                deleteStyle: {
                    label: "Estilo de Eliminação",
                    description: "O estilo das mensagens eliminadas",
                    text: "Texto vermelho",
                    overlay: "Sobreposição vermelha"
                },
                logDeletes: {
                    label: "Registar Eliminações",
                    description: "Se deve registar mensagens eliminadas"
                },
                collapseDeleted: {
                    label: "Colapsar Eliminadas",
                    description: "Se deve colapsar mensagens eliminadas, semelhante a mensagens bloqueadas"
                },
                logEdits: {
                    label: "Registar Edições",
                    description: "Se deve registar mensagens editadas"
                },
                inlineEdits: {
                    label: "Edições Inline",
                    description: "Se deve exibir o histórico de edições como parte do conteúdo da mensagem"
                },
                ignoreBots: {
                    label: "Ignorar Bots",
                    description: "Se deve ignorar mensagens de bots"
                },
                ignoreSelf: {
                    label: "Ignorar Próprio",
                    description: "Se deve ignorar as suas próprias mensagens"
                },
                ignoreSelfEdits: {
                    label: "Ignorar edições próprias",
                    description: "Se deve ignorar as edições feitas por si mesmo"
                },
                ignoreUsers: {
                    label: "Ignorar Utilizadores",
                    description: "Lista de IDs de utilizadores a ignorar (separados por vírgulas)"
                },
                ignoreChannels: {
                    label: "Ignorar Canais",
                    description: "Lista de IDs de canais a ignorar (separados por vírgulas)"
                },
                ignoreGuilds: {
                    label: "Ignorar Servidores",
                    description: "Lista de IDs de servidores a ignorar (separados por vírgulas)"
                },
                showEditDiffs: {
                    label: "Mostrar Diferenças de Edição",
                    description: "Mostrar diferenças visuais entre as versões da mensagem editada"
                },
                separatedDiffs: {
                    label: "Diferenças Separadas",
                    description: "Separar adições e remoções nas diferenças para uma leitura mais clara"
                },
                logDeletedAttachments: {
                    description: "Se deve registar anexos eliminados",
                    label: "Registar anexos eliminados"
                }
            },
            text: {
                clearHistory: "Limpar histórico",
                toggleDeletedHighlight: "Alternar destaque de eliminadas",
                enableDiffView: "Ativar visualização de diferenças",
                disableDiffView: "Desativar visualização de diferenças",
                noDeletedMessages: "Nenhuma mensagem excluída",
                deletedMessageSuffix: " mensagem excluída",
                deletedMessagesSuffix: " mensagens excluídas"
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Melhora o plugin MessageLogger com funcionalidades adicionais.",
            updateImageCacheDir: "Diretório de cache de imagens atualizado com sucesso.",
            updateLogsDir: "Diretório de registos atualizado com sucesso.",
            failedUpdate: "Falha ao atualizar o diretório.",
            blacklist: "Lista Negra",
            whitelist: "Lista Branca",
            failedToRemove: "Falha ao remover a mensagem",
            successfullyImported: "Registos importados com sucesso",
            errorImportingLogs: "Erro ao importar registos. Verifique a consola para mais informações",
            importing: "A importar...",
            importLogs: "Importar Registos",
            exporting: "A exportar...",
            exportLogs: "Exportar Registos",
            alert: {
                clearLogs: {
                    title: "Limpar Registos",
                    body: "Tem a certeza de que deseja limpar todos os registos?",
                    confirmText: "Limpar",
                    cancel: "Cancelar"
                },
                clearVisibleLogs: {
                    title: "Limpar Registos Visíveis",
                    body: "Tem a certeza de que deseja limpar {{messages}} registos?",
                    confirmText: "Limpar",
                    cancel: "Cancelar"
                },
                cleared: "Base de dados e cache de mensagens limpas."
            },
            context: {
                title: "Message Logger",
                jumpToMessage: "Saltar para a Mensagem",
                openUserProfile: "Abrir Perfil de Utilizador",
                copyContent: "Copiar Conteúdo",
                copyUserId: "Copiar ID de Utilizador",
                copyMessageId: "Copiar ID de Mensagem",
                copyChannelId: "Copiar ID de Canal",
                copyServerId: "Copiar ID de Servidor",
                deleteLog: "Eliminar Registo",
                fromUsernameDm: "Das DMs de {{username}}",
                fromGroupDm: "Da DM de Grupo {{channelName}}",
                fromServerChannel: "De {{channelName}} em {{serverName}}",
                moveTypeTo: "Mover {{type}} para {{destination}}",
                removeTypeFrom: "Remover {{type}} de {{list}}",
                openLogsFor: "Abrir Registos de {{name}}",
                openLogs: "Abrir Registos",
                removeMessage: "Remover Mensagem (Permanente)",
                removeMessageHistory: "Remover Histórico de Mensagens (Permanente)",
                deleteMessageHide: "Eliminar Mensagem (Ocultar de Message Loggers)",
                addServerToBlacklist: "Adicionar Servidor à Lista Negra",
                addServerToWhitelist: "Adicionar Servidor à Lista Branca",
                removeServerFromBlacklist: "Remover Servidor da Lista Negra",
                removeServerFromWhitelist: "Remover Servidor da Lista Branca",
                moveServerToBlacklist: "Mover Servidor para a Lista Negra",
                moveServerToWhitelist: "Mover Servidor para a Lista Branca",
                addUserToBlacklist: "Adicionar Utilizador à Lista Negra",
                addUserToWhitelist: "Adicionar Utilizador à Lista Branca",
                removeUserFromBlacklist: "Remover Utilizador da Lista Negra",
                removeUserFromWhitelist: "Remover Utilizador da Lista Branca",
                moveUserToBlacklist: "Mover Utilizador para a Lista Negra",
                moveUserToWhitelist: "Mover Utilizador para a Lista Branca",
                addChannelToBlacklist: "Adicionar Canal à Lista Negra",
                addChannelToWhitelist: "Adicionar Canal à Lista Branca",
                removeChannelFromBlacklist: "Remover Canal da Lista Negra",
                removeChannelFromWhitelist: "Remover Canal da Lista Branca",
                moveChannelToBlacklist: "Mover Canal para a Lista Negra",
                moveChannelToWhitelist: "Mover Canal para a Lista Branca"
            },
            type: {
                server: "Servidor",
                user: "Utilizador",
                channel: "Canal"
            },
            button: {
                chooseFolder: "Escolher Pasta",
                browse: "Procurar",
                clearLogs: "Limpar Todos os Registos",
                clearVisibleLogs: "Limpar Registos Visíveis",
                sortOldest: "Mais Antigos Primeiro",
                sortNewest: "Mais Recentes Primeiro",
                loadMore: "Carregar Mais",
                noResults: "Sem resultados em {{tab}}",
                tryOtherTabs: "Tente talvez {{nextTab}} ou {{lastTab}}",
                importLogs: "Importar Registos"
            },
            modal: {
                title: "Filtrar Mensagens",
                deleted: "Eliminadas",
                edited: "Editadas",
                ghostPing: "Ghost Pings",
                empty: "Vazio, hein",
                importLogs: "O ML Enhanced agora armazena registos em indexeddb. Precisa de importar os seus registos antigos do diretório de registos. A importação não substituirá os registos existentes."
            },
            clear: {
                title: "Limpar Registos",
                description: "Tem a certeza de que deseja limpar todos os registos?",
                confirm: "Limpar",
                cancel: "Cancelar"
            },
            option: {
                saveMessages: {
                    label: "Guardar Mensagens",
                    description: "Se deve guardar as mensagens eliminadas e editadas."
                },
                saveImages: {
                    label: "Guardar Imagens",
                    description: "Guardar anexos eliminados."
                },
                sortNewest: {
                    label: "Mais Recentes Primeiro",
                    description: "Ordenar registos pelos mais recentes."
                },
                cacheMessagesFromServers: {
                    label: "Cache de Mensagens de Servidores",
                    description: "Normalmente o message logger apenas regista de IDs na lista branca e DMs; ativar isto fará com que registe mensagens de todos os servidores também. Note que isto pode fazer com que a cache exceda o limite. Se estiver em muitos servidores, as chances de mensagens serem registadas aumentam significativamente, o que pode resultar num ficheiro de registo muito grande."
                },
                ignoreBots: {
                    label: "Ignorar Bots",
                    description: "Se deve ignorar mensagens de bots"
                },
                ignoreWebhooks: {
                    label: "Ignorar Webhooks",
                    description: "Se deve ignorar mensagens de webhooks"
                },
                ignoreSelf: {
                    label: "Ignorar Próprio",
                    description: "Se deve ignorar as suas próprias mensagens"
                },
                ignoreMutedGuilds: {
                    label: "Ignorar Servidores Silenciados",
                    description: "Mensagens em servidores silenciados não serão registadas. Utilizadores/canais na lista branca em servidores silenciados continuarão a ser registados."
                },
                ignoreMutedCategories: {
                    label: "Ignorar Categorias Silenciadas",
                    description: "Mensagens em canais pertencentes a categorias silenciadas não serão registadas."
                },
                ignoreMutedChannels: {
                    label: "Ignorar Canais Silenciados",
                    description: "Mensagens em canais silenciados não serão registadas."
                },
                alwaysLogDirectMessages: {
                    label: "Registar Sempre Mensagens Diretas",
                    description: "Registar sempre DMs"
                },
                alwaysLogCurrentChannel: {
                    label: "Registar Sempre Canal Atual",
                    description: "Registar sempre o canal selecionado no momento. Canais/utilizadores na lista negra continuarão a ser ignorados."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Remover Registo Permanentemente por Predefinição",
                    description: "O botão de remover registo do MessageLogger base eliminará os registos permanentemente"
                },
                hideMessageFromMessageLoggers: {
                    label: "Ocultar Mensagem de Message Loggers",
                    description: "Quando ativado, um botão no menu de contexto será adicionado às mensagens para permitir que as apague sem que outros loggers as registem. Pode não ser seguro, use por sua conta e risco."
                },
                showLogsButton: {
                    label: "Mostrar Botão de Registos",
                    description: "Alternar se deve mostrar a toolbox ou não"
                },
                showWhereMessageIsFrom: {
                    label: "Mostrar Origem da Mensagem",
                    description: "Mostrar nome do canal/autor e nome do servidor"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Mensagens a Exibir de uma Vez nos Registos",
                    description: "Número de mensagens a exibir de uma vez nos registos e número de mensagens a carregar ao pedir mais."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Conteúdo para Mensagem Ocultada de Loggers",
                    description: "O conteúdo que substitui a mensagem original quando usa a funcionalidade de ocultar de outros loggers."
                },
                messageLimit: {
                    label: "Limite de Mensagens",
                    description: "Número máximo de mensagens a guardar. Mensagens antigas são apagadas ao atingir o limite. 0 significa sem limite."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Limite de Tamanho de Anexos (MB)",
                    description: "Tamanho máximo de um anexo em megabytes para ser guardado."
                },
                attachmentFileExtensions: {
                    label: "Extensões de Ficheiro de Anexos",
                    description: "Lista de extensões separadas por vírgula para guardar. Deixe vazio para guardar todos."
                },
                cacheLimit: {
                    label: "Limite da Cache",
                    description: "Número máximo de mensagens a manter na cache."
                },
                timeBasedCleanupMinutes: {
                    label: "Minutos para Limpeza por Tempo",
                    description: "Intervalo em minutos para realizar a limpeza de mensagens mais antigas que o limite."
                },
                preserveCurrentChannel: {
                    label: "Preservar Canal Atual",
                    description: "Quando ativado, as mensagens no canal selecionado no momento não são afetadas pela limpeza por tempo."
                },
                whitelistedIds: {
                    label: "IDs na Lista Branca",
                    description: "IDs de servidor, canal ou utilizador a mostrar sempre no registo de mensagens."
                },
                blacklistedIds: {
                    label: "IDs na Lista Negra",
                    description: "IDs de servidor, canal ou utilizador a nunca mostrar no registo de mensagens."
                },
                imageCacheDir: {
                    label: "Diretório de Cache de Imagens",
                    description: "Selecionar diretório para imagens guardadas"
                },
                logsDir: {
                    label: "Diretório de Registos",
                    description: "Selecionar diretório de registos"
                },
                importLogs: {
                    label: "Importar Registos",
                    description: "Importar registos de um ficheiro"
                },
                exportLogs: {
                    label: "Exportar Registos",
                    description: "Exportar registos do IndexedDB"
                },
                clearLogsOnRestart: {
                    label: "Limpar registos ao reiniciar",
                    description: "Limpa os registos quando o Discord reinicia."
                },
                openLogs: {
                    label: "Abrir Registos",
                    description: "Abrir Registos"
                },
                openImageCacheFolder: {
                    label: "Abrir Pasta de Cache de Imagens",
                    description: "Abre o diretório de cache de imagens"
                },
                clearLogs: {
                    label: "Limpar Registos",
                    description: "Limpar Registos",
                    title: "Limpar registos",
                    body: "Tem a certeza de que deseja limpar todos os registos?",
                    confirmText: "Limpar",
                    cancel: "Cancelar"
                }
            },
            toast: {
                clearedLogs: "Registos limpos",
                failedToClearLogs: "Falha ao limpar registos",
                failedToRemoveMessage: "Falha ao remover a mensagem. Verifica a consola para mais detalhes.",
                noMessagesFoundIn: "Nenhuma mensagem encontrada no ficheiro de registo",
                successfullyImportedCountLogs: "{{count}} registos importados com sucesso",
                successfullyExportedLogs: "Registos exportados com sucesso",
                successfullyExportedCountLogs: "{{count}} registos exportados com sucesso",
                errorExportingLogsCheck: "Erro ao exportar registos. Verifica a consola para mais informações"
            },
            text: {
                jsonFile: "Ficheiro JSON",
                clearLogs: "Limpar registos",
                clearingLogs: "A limpar registos...",
                messageLogger: "Message Logger",
                importLogs: "Importar registos",
                logs: "Registos",
                loadingTabLogs: "A carregar registos: {{tab}}..."
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Receba notificações (toasts) quando utilizadores escolhidos enviam uma mensagem",
            dm: "as DMs deles",
            option: {
                users: {
                    label: "Utilizadores",
                    description: "Lista de IDs de utilizadores (separados por vírgulas) para receber notificações",
                    invalidId: "{{id}} não é um ID de utilizador válido"
                }
            },
            notification: {
                title: "{{username}} enviou uma mensagem",
                body: "Clique para saltar para {{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Permite guardar mensagens e usá-las com um comando simples.",
            notExist: "A tag **{{tagname}}** já não existe! Por favor, recarregue o Discord para corrigir :)",
            alreadyExist: "Já existe uma tag com o nome **{{tagname}}**!",
            sentTag: "A tag **{{tagname}}** foi enviada!",
            successCreate: "A tag **{{tagname}}** foi criada!",
            allTags: "Todas as suas tags:",
            noTags: "Ups! Ainda não existem tags, use /tag create para criar uma!",
            noDeleteTag: "A tag **{{tagname}}** não existe, por isso não pode ser eliminada!",
            successDelete: "Tag **{{name}}** eliminada com sucesso!",
            tagPreview: "Uma tag com o nome **{{name}}** não existe!",
            option: {
                clyde: {
                    label: "Mensagem do Clyde ao enviar",
                    description: "Se ativado, o Clyde enviar-lhe-á uma mensagem efémera quando uma tag for usada."
                },
                tagsList: {
                    label: "Lista de Tags",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Gerir todas as suas tags",
                    option: {
                        create: {
                            description: "Criar uma nova tag",
                            name: "O nome da tag para acionar a resposta",
                            message: "A mensagem que enviará ao usar esta tag"
                        },
                        list: {
                            description: "Listar todas as suas tags"
                        },
                        delete: {
                            description: "Remover uma tag sua",
                            name: "O nome da tag a remover"
                        },
                        preview: {
                            description: "Pré-visualizar uma tag sem a enviar publicamente",
                            name: "O nome da tag a pré-visualizar"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Adiciona um ícone de teste de retorno (loopback) do microfone ao painel de utilizador",
            button: "Teste de Microfone (Loopback)"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Vários ajustes para o clique central do rato, como colar e abrir links.",
            option: {
                openScope: {
                    label: "Escopo de Abertura",
                    description: "Impedir que o clique central abra estes tipos de conteúdo.",
                    links: "Links",
                    media: "Multimédia",
                    linksAndMedia: "Links e Multimédia",
                    none: "Nenhum"
                },
                pasteScope: {
                    label: "Escopo de Colagem",
                    description: "Impedir que o clique central cole nestas situações.",
                    always: "Impedir sempre a colagem com o clique central",
                    focus: "Impedir apenas quando a área de texto não está focada",
                },
                pasteThreshold: {
                    label: "Limite de Colagem",
                    description: "Milissegundos até que a colagem seja ativada novamente após um clique central."
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo, Lenny, Mock e mais",
            command: {
                echo: {
                    description: "Envia uma mensagem como Clyde (localmente)"
                },
                lenny: {
                    description: "Envia uma carinha lenny"
                },
                mock: {
                    description: "mOcK PeOpLe (Zombar)"
                },
                wordcount: {
                    description: "Conta o número de palavras numa mensagem",
                    response: "A mensagem contém {{count}} palavras."
                },
                flipcoin: {
                    description: "Lança uma moeda e devolve cara ou coroa",
                    heads: "Cara",
                    tails: "Coroa",
                    response: "A moeda deu {{result}}."
                },
                ask: {
                    description: "Faça uma pergunta de sim/não e obtenha uma resposta",
                    yes: "Sim",
                    no: "Não",
                    maybe: "Talvez",
                    askAgain: "Pergunta mais tarde",
                    definitelyNot: "Definitivamente não",
                    itIsCertain: "É certo"
                },
                randomanimal: {
                    description: "Obtém uma imagem aleatória de um animal",
                    animal: "escolha o seu animal",
                    cat: "gato",
                    dog: "cão",
                    response: "Desculpe, não foi possível obter uma imagem de animal agora"
                },
                randomnumber: {
                    description: "Gera um número aleatório entre dois valores",
                    min: "Valor mínimo",
                    max: "Valor máximo",
                    response: "Número aleatório entre {{min}} e {{max}}: {{number}}"
                },
                choose: {
                    description: "Escolhe aleatoriamente entre as opções fornecidas",
                    option: "Lista de escolhas separadas por vírgulas",
                    response: "Eu escolho: {{choice}}"
                },
                systeminfo: {
                    description: "Mostra informações do sistema",
                    platform: "Plataforma",
                    deviceType: "Tipo de Dispositivo",
                    mobile: "Móvel",
                    desktop: "Desktop",
                    browser: "Navegador",
                    cpuCores: "Núcleos de CPU",
                    memory: "Memória",
                    screen: "Ecrã",
                    languages: "Idiomas",
                    network: "Rede",
                    online: "Online",
                    offline: "Offline",
                    failedToFetch: "Falha ao obter informações do sistema",
                    unknown: "Desconhecido"
                },
                getuptime: {
                    description: "Obtém o tempo de atividade do cliente",
                    response: "**Tempo de Atividade do Cliente**: {{uptime}} minutos"
                },
                gettime: {
                    description: "Obtém a hora atual",
                    response: "A hora atual é {{time}}"
                },
                transform: {
                    description: "Transforme o seu texto com a opção especificada",
                    transformation: {
                        description: "Transformação a aplicar ao texto",
                        lowercase: "Converter para minúsculas",
                        uppercase: "Converter para maiúsculas",
                        localeLowercase: "Converter para minúsculas (local)",
                        localeUppercase: "Converter para maiúsculas (local)",
                        same: "Manter igual"
                    },
                    repeat: "quantas vezes repetir",
                    reverse: "se deve inverter o texto",
                    normalize: {
                        description: "Forma de normalização de texto",
                        nfc: "Forma de Normalização C (NFC)",
                        nfd: "Forma de Normalização D (NFD)",
                        nfkc: "Forma de Normalização KC (NFKC)",
                        nfkd: "Forma de Normalização KD (NFKD)"
                    },
                    text: "Transformar este texto"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Adiciona mais Kaomoji ao Discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Melhora os botões de reação rápida no menu de contexto das mensagens.",
            option: {
                reactionCount: {
                    label: "Contagem de Reações",
                    description: "Número de reações (0-42)"
                },
                frequentEmojis: {
                    label: "Emojis Frequentes",
                    description: "Usar emojis usados frequentemente em vez de emojis favoritos"
                },
                rows: {
                    label: "Linhas",
                    description: "Linhas de reações rápidas a exibir"
                },
                columns: {
                    label: "Colunas",
                    description: "Colunas de reações rápidas a exibir"
                },
                compactMode: {
                    label: "Modo Compacto",
                    description: "Redimensiona os botões para 75% da escala original, enquanto aumenta o emoji interno para 125%. Recomendado um mínimo de 5 colunas"
                },
                scroll: {
                    label: "Deslocar",
                    description: "Ativar o scroll na lista de emojis"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Adiciona tags para webhooks e cargos moderativos (dono, admin, etc.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Este utilizador é um webhook"
                },
                owner: {
                    name: "Dono",
                    description: "Dono do servidor"
                },
                admin: {
                    name: "Admin",
                    description: "Tem permissão de administrador"
                },
                staff: {
                    name: "Staff",
                    description: "Pode gerir o servidor, canais ou cargos"
                },
                mod: {
                    name: "Mod",
                    description: "Pode gerir mensagens ou expulsar/banir pessoas"
                },
                vcmod: {
                    name: "VC Mod",
                    description: "Pode gerir chats de voz"
                },
                chatmod: {
                    name: "Chat Mod",
                    description: "Pode gerir mensagens"
                }
            },
            modal: {
                example: "Exemplo",
                tag: "Tag",
                customTextPlaceholder: "Texto na tag (padrão: {{displayName}})",
                messages: "Mostrar em mensagens",
                memberList: "Mostrar na lista de membros e perfis"
            },
            option: {
                dontShowForBots: {
                    label: "Não mostrar para bots",
                    description: "Não mostrar tags extra para bots (excluindo webhooks)"
                },
                dontShowBotTag: {
                    label: "Não mostrar tag de bot",
                    description: "Mostrar apenas tags extra para bots / Ocultar texto [APP]"
                },
                showWebhookTagFully: {
                    label: "Mostrar tag de webhook completa",
                    description: "Mostrar a tag de Webhook em canais seguidos, como anúncios"
                },
                tagSettings: {
                    label: "Definições de Tag",
                    description: "preencher"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Um comando de barra para traduzir para/de código morse.",
            command: {
                morse: {
                    description: "Traduzir para ou de código Morse",
                    message: "Texto a converter"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume do 🗿🗿🗿"
                },
                quality: {
                    label: "Qualidade",
                    description: "Qualidade do 🗿🗿🗿",
                    normal: "Normal",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Acionar Quando Não Focado",
                    description: "Acionar o 🗿 mesmo quando a janela não está focada"
                },
                ignoreBots: {
                    label: "Ignorar Bots",
                    description: "Ignorar mensagens de bots"
                },
                ignoreBlocked: {
                    label: "Ignorar Utilizadores Bloqueados",
                    description: "Ignorar mensagens de utilizadores bloqueados"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Controlos de Música e Letras para múltiplos serviços",
            option: {
                spotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Mostrar Controlos do Spotify",
                    description: "Mostrar controlos de música para o Spotify"
                },
                showSpotifyLyrics: {
                    label: "Mostrar Letras do Spotify",
                    description: "Mostrar letras para o Spotify"
                },
                useSpotifyUris: {
                    label: "Usar URIs do Spotify",
                    description: "Abrir URIs do Spotify em vez de URLs do Spotify. Só funcionará se tiver o Spotify instalado."
                },
                previousButtonRestartsTrack: {
                    label: "Botão Anterior Reinicia Faixa",
                    description: "Reiniciar a faixa atual ao pressionar o botão anterior se o tempo de reprodução for >3s"
                },
                tidalSectionTitle: {
                    label: "Tidal"
                },
                showTidalControls: {
                    label: "Mostrar Controlos do Tidal",
                    description: "Mostrar controlos de música para o Tidal"
                },
                showTidalLyrics: {
                    label: "Mostrar Letras do Tidal",
                    description: "Mostrar letras para o Tidal"
                },
                websocketURL: {
                    label: "URL do Websocket",
                    description: "O padrão é ws://localhost:24123"
                },
                YtmSectionTitle: {
                    label: "YouTube Music",
                    description: "{{app}} é necessário para estas definições"
                },
                showYoutubeMusicControls: {
                    label: "Mostrar Controlos do YouTube Music",
                    description: "Mostrar controlos de música para o YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "URL da API do YouTube Music",
                    description: "O URL para o servidor da API do YouTube Music que está a usar"
                },
                hoverControls: {
                    label: "Controlos ao Passar o Rato",
                    description: "Mostrar controlos ao passar o rato"
                },
                showMusicNoteOnNoLyrics: {
                    label: "Mostrar Nota Musical se não houver Letras",
                    description: "Mostrar um ícone de nota musical quando não forem encontradas letras"
                },
                lyricsPosition: {
                    label: "Posição das Letras",
                    description: "Posição do painel de letras",
                    above: "Acima do Leitor",
                    below: "Abaixo do Leitor"
                },
                lyricsProvider: {
                    label: "Fornecedor de Letras",
                    description: "De onde as letras são obtidas",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "URL base da API de letras do Spotify",
                    description: "URL base de instância personalizada (por exemplo: http://localhost:8080)."
                },
                translateTo: {
                    label: "Traduzir Para",
                    description: "Traduzir letras para - Mudar isto limpará as traduções existentes",
                    cleared: "Traduções limpas"
                },
                lyricsConversion: {
                    label: "Conversão de Letras",
                    description: "Traduzir ou romanizar letras automaticamente",
                    none: "Nenhuma",
                    translate: "Traduzir",
                    romanize: "Romanizar"
                },
                fallbackProvider: {
                    label: "Fornecedor de Recurso",
                    description: "Quando um fornecedor de letras falha, tentar outros"
                },
                showFailedToasts: {
                    label: "Mostrar Toasts de Falha",
                    description: "Mostrar notificações quando as letras falham a carregar"
                },
                purgeLyricsCache: {
                    label: "Purgar Cache de Letras",
                    description: "Limpar todas as letras e traduções em cache",
                    button: "Purgar Cache",
                    cacheLyricsPurged: "Cache de letras purgada"
                },
                lyricDelay: {
                    label: "Atraso da letra"
                }
            },
            context: {
                spotify: {
                    label: "Menu de Letras do Spotify",
                    type: "Menu de {{type}} do Spotify",
                    copy: "Copiar Nome do {{type}}",
                    link: "Copiar Link do {{type}}",
                    open: "Abrir {{type}} no Spotify",
                    album: "Menu de Álbum do Spotify"
                },
                tidal: {
                    label: "Menu de Letras do Tidal",
                    lyrics: "Letras do Tidal",
                    type: "Menu de {{name}} do Tidal",
                    copy: "Copiar Nome do {{name}}",
                    open: "Abrir {{name}} no Tidal",
                    album: "Menu de Álbum do Tidal"
                },
                ytm: {
                    type: "Menu de {{name}} do YouTube Music",
                    copy: "Copiar Nome do {{name}}",
                    open: "Abrir {{name}} no YouTube Music",
                    album: "Menu de Álbum do YouTube Music",
                    muted: "Silenciado"
                },
                lyrics: {
                    provider: "Fornecedor de Letras",
                    saved: "guardado",
                    notFound: "Nenhuma letra sincronizada encontrada"
                },
                copy: {
                    currentLyrics: "Copiar letras atuais"
                }
            },
            alert: {
                lyricCopied: "Letra copiada!",
                noLyrics: "Sem letras",
                noLyricsTo: "Sem letras para {{translated}}",
                translate: "traduzir",
                romanize: "romanizar",
                lyricsFetchFailed: "Falha ao obter letras",
                failedToFetchLyrics: "Falha ao obter {{translated}}",
                translation: "tradução",
                romanization: "romanização",
                failedToFetchTranslation: "Falha ao obter as letras de {{translated}}"
            },
            modal: {
                install: {
                    title: "Como instalar",
                    install: "Instale {{link}} daqui, depois vá a definições TidalLuna → Plugin stores → Install @vmohammad/api",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "Nenhuma faixa a tocar",
                    artist: "Artista:",
                    album: "Álbum:",
                    noLyrics: "Sem letras disponíveis :(",
                    progress: "Progresso",
                    totalDuration: "Duração Total"
                },
                type: {
                    song: "Música",
                    artist: "Artista",
                    album: "Álbum"
                },
                album: {
                    open: "Abrir Álbum",
                    viewCover: "Ver Capa do Álbum",
                    volume: "Volume",
                    image: "Imagem do Álbum"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Traduzido",
                romanized: "Romanizado",
                none: "Nenhum"
            },
            error: {
                failed: "Falha ao renderizar Modal :(",
                checkConsole: "Verifique a consola para erros",
                invalidUrlCustomApi: "Formato de URL inválido para o URL do Servidor API Custom"
            },
            text: {
                unknownArtist: "Artista desconhecido",
                unknownTitle: "Título desconhecido"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Mostra DMs de grupo mútuas nos perfis",
            no: "Sem Grupos Mútuos",
            mutualGroup: "{{count}} Grupo{{s}} Mútuo{{s}}",
            members: "Membros",
            noGroup: "Nenhuma DM de grupo em comum",
            header: "Grupos Mútuos"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Impede que as pré-visualizações de chamadas/PiP (partilha de ecrã, streams, etc.) parem, mesmo que o cliente perca o foco",
            about: "Este plugin fará com que o Discord use mais recursos do que o habitual"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Silencia automaticamente novos servidores e altera várias outras definições ao entrar",
            context: {
                apply: "Aplicar NewGuildSettings à pasta"
            },
            option: {
                guild: {
                    label: "Silenciar Servidor",
                    description: "Silencia o servidor automaticamente"
                },
                messages: {
                    label: "Definições de Notificação do Servidor",
                    description: "Definições de Notificação do Servidor",
                    all: "Todas as mensagens",
                    mentions: "Apenas @menções",
                    nothing: "Nada",
                    default: "Padrão do servidor"
                },
                everyone: {
                    label: "Suprimir @everyone e @here",
                    description: "Suprimir @everyone e @here"
                },
                role: {
                    label: "Suprimir Todas as @menções de Cargos",
                    description: "Suprimir Todas as @menções de Cargos"
                },
                highlights: {
                    label: "Suprimir Destaques",
                    description: "Suprimir Destaques automaticamente"
                },
                events: {
                    label: "Silenciar Novos Eventos",
                    description: "Silencia novos eventos automaticamente"
                },
                showAllChannels: {
                    label: "Mostrar Todos os Canais",
                    description: "Mostra todos os canais automaticamente"
                },
                mobilePush: {
                    label: "Silenciar Notificações Push no Telemóvel",
                    description: "Silencia notificações push automaticamente"
                },
                voiceChannels: {
                    label: "Canais de Voz",
                    description: "Oculta nomes em canais de voz automaticamente"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Utilitário que o notifica quando novos plugins são adicionados ao Plexcord",
            modal: {
                title: "Novos Plugins e Definições",
                description: "Novos plugins e definições foram adicionados desde a sua última visita. Por favor, reveja as novidades abaixo.",
                tooltip: "Dispensar para esta sessão",
                dontShowAgain: "Não mostrar isto novamente",
                restartRequired: "É necessário reiniciar para aplicar as mudanças",
                restart: "Reiniciar",
                continue: "Continuar",
                supportUs: "O Plexcord é software de código aberto. Se gostas de o usar, considera apoiar-nos",
                supportUsLink: "aqui"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Retorna a tag do bot para a sua forma original"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Oculta completamente todas as mensagens bloqueadas/ignoradas do chat",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Também Ocultar Utilizadores Ignorados",
                    description: "Também oculta mensagens de utilizadores ignorados."
                },
                disableNotifications: {
                    label: "Desativar Notificações",
                    description: "Oculta notificações de novas mensagens para utilizadores bloqueados."
                },
                allowAutoModMessages: {
                    label: "Permitir Mensagens do AutoMod",
                    description: "Permite que mensagens enviadas pelo AutoMod ignorem a filtragem."
                },
                hideBlockedUserReplies: {
                    label: "Ocultar Respostas de Utilizadores Bloqueados",
                    description: "Oculta mensagens de utilizadores bloqueados em tópicos (threads)."
                },
                defaultHideUsers: {
                    label: "Ocultar Utilizadores por Predefinição",
                    description: "Se ativado, as mensagens de utilizadores bloqueados serão completamente ocultadas."
                },
                overrideUsers: {
                    label: "Substituir Utilizadores",
                    description: "Lista de IDs de utilizadores que serão ocultados ou colapsados de forma contrária ao comportamento padrão acima."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Impede-o de escrever listas de markdown (pontos)"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Desativa a funcionalidade redundante de deep linking do Discord que tenta forçá-lo a usar a Aplicação de Desktop"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Remove a exigência de 'escrever o nome do servidor' ao apagar um servidor",
            option: {
                confirmModal: {
                    label: "Confirmar Modal",
                    description: "Deve ser mostrado um aviso de 'Tem a certeza que quer apagar'?"
                }
            },
            modal: {
                title: "Apagar servidor?",
                body: "É permanente, caso não fosse óbvio.",
                confirm: "Apagar",
                cancel: "Cancelar"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Desativa o aviso 'HOLD UP' na consola. Como efeito secundário, também impede o Discord de ocultar o seu token, o que evita encerramentos de sessão aleatórios."
        },
        noF1: {
            name: "NoF1",
            description: "Desativa o atalho F1 para ajuda."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Colar um link tendo texto selecionado não o colará como um URL mascarado (markdown)"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Impede que a câmara seja espelhada no seu ecrã"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Remove a animação de 300ms ao abrir ou fechar janelas (modals)"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Remove o mosaico de imagens do Discord",
            option: {
                inlineVideo: {
                    label: "Vídeo Inline",
                    description: "Reproduzir vídeos sem a janela de carrossel"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Remove TODAS as ofertas de Nitro do Discord, enganando o cliente para pensar que tem Nitro."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Ignora o processo de introdução (onboarding) do Discord para entrar mais rápido nos servidores."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Ignora o atraso lento e irritante do onboarding"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Remove a contagem de pedidos de amizade pendentes, pedidos de mensagem e ofertas de Nitro.",
            option: {
                hideFriendRequestsCount: {
                    label: "Ocultar Contagem de Pedidos de Amizade",
                    description: "Oculta a contagem de pedidos de amizade a entrar"
                },
                hideMessageRequestsCount: {
                    label: "Ocultar Contagem de Pedidos de Mensagem",
                    description: "Oculta a contagem de pedidos de mensagem"
                },
                hidePremiumOffersCount: {
                    label: "Ocultar Contagem de Ofertas Premium",
                    description: "Oculta a contagem de ofertas de Nitro"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Remove completamente os temas de perfil Nitro de todos exceto de si próprio."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Ignora o requisito de premir-para-falar em canais que o forçam."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Desativa menções em respostas por predefinição",
            option: {
                userList: {
                    label: "Lista de Utilizadores",
                    description: "Lista de utilizadores para permitir ou isentar menções (separados por vírgula ou espaço)"
                },
                roleList: {
                    label: "Lista de Cargos",
                    description: "Lista de cargos para permitir ou isentar menções"
                },
                shouldPingListed: {
                    label: "Deve Mencionar Listados",
                    description: "Comportamento",
                    dontPing: "Não mencionar utilizadores/cargos listados",
                    onlyPing: "Mencionar apenas utilizadores/cargos listados"
                },
                inverseShiftReply: {
                    label: "Inverter Resposta com Shift",
                    description: "Inverte o comportamento do shift do Discord (ativa para que o shift-resposta mencione o utilizador)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Remove canary/ptb de links de mensagens"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Somos todos iguais!! Remove os cabeçalhos de cargos na lista de membros."
        },
        noRPC: {
            name: "NoRPC",
            description: "Desativa o Rich Presence do Discord"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "Não mostra emojis de servidores no menu de autoconclusão.",
            option: {
                shownEmojis: {
                    label: "Emojis Exibidos",
                    description: "Escolha quais emojis mostrar no menu de autoconclusão",
                    onlyUnicode: "Apenas emojis unicode",
                    currentServer: "Emojis unicode e emojis do servidor atual",
                    all: "Emojis unicode e todos os emojis de servidores (Padrão do Discord)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Desativa o emblema de contagem de não lidas na barra de tarefas e área de notificação."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Torna as notificações de desktop mais informativas",
            text: {
                threadInParent: "{{thread}} em {{parent}}"
            }
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Define um volume personalizado para as notificações do Discord",
            option: {
                notificationVolume: {
                    label: "Volume de Notificação",
                    description: "Volume da notificação"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Desativa a animação de escrita no chat"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Permite saltar para mensagens de utilizadores bloqueados ou ignorados sem os desbloquear."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Se forem enviadas várias mensagens não lidas por um utilizador em DMs, apenas receberá um aviso sonoro.",
            option: {
                channelToAffect: {
                    label: "Canal a Afetar",
                    description: "Selecione o tipo de DM que o plugin deve afetar",
                    both: "Ambos",
                    user: "DMs de Utilizador",
                    group: "DMs de Grupo"
                },
                allowMentions: {
                    label: "Permitir Menções",
                    description: "Receber avisos sonoros para @menções"
                },
                allowEveryone: {
                    label: "Permitir Everyone",
                    description: "Receber avisos sonoros para @everyone e @here em DMs de grupo"
                },
                ignoreUsers: {
                    label: "Ignorar Utilizadores",
                    description: "IDs cujos avisos sonoros NUNCA devem ser limitados"
                },
                alwaysPlaySound: {
                    label: "Reproduzir Som Sempre",
                    description: "Reproduzir o som de notificação mesmo quando está desativado"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Abre links nas respetivas aplicações em vez de no navegador",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Abrir links do Spotify na aplicação Spotify"
                },
                steam: {
                    label: "Steam",
                    description: "Abrir links do Steam na aplicação Steam"
                },
                epic: {
                    label: "Epic Games",
                    description: "Abrir links da Epic Games no Launcher da Epic Games"
                },
                tidal: {
                    label: "Tidal",
                    description: "Abrir links do Tidal na aplicação Tidal"
                },
                itunes: {
                    label: "iTunes",
                    description: "Abrir links de Apple Music na aplicação iTunes"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Abrir links de VRChat na aplicação VRCX"
                },
                telegram: {
                    label: "Telegram",
                    description: "Abrir ligações do Telegram na aplicação do Telegram"
                }
            },
            notification: {
                open: "Link aberto na aplicação nativa"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Permite substituir o layout/ordem padrão dos fóruns. Pode ainda mudá-lo individualmente por canal",
            option: {
                defaultLayout: {
                    label: "Layout Padrão",
                    description: "Qual layout usar como padrão",
                    list: "Lista",
                    gallery: "Galeria"
                },
                defaultSortOrder: {
                    label: "Ordem de Ordenação Padrão",
                    description: "Qual ordem de ordenação usar como padrão",
                    recentlyActive: "Ativo Recentemente",
                    datePosted: "Data de Publicação"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Permite-te usar o party mode porque a festa nunca acaba ✨",
            option: {
                superIntensePartyMode: {
                    label: "Party Mode Super Intenso",
                    description: "Intensidade da festa",
                    normal: "Normal",
                    better: "Melhor",
                    projectX: "Projeto X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Traz de volta a opção de pausar convites indefinidamente que o Discord removeu redundantemente.",
            pauseIndefinitely: "Pausar Indefinidamente"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Desativa as restrições do lado do cliente para a gestão de permissões de canais.",
            option: {
                lockout: {
                    label: "Bloqueio de Permissões",
                    description: "Ignorar a prevenção de bloqueio de permissões ('Tem a certeza de que não quer fazer isto?')"
                },
                onboarding: {
                    label: "Onboarding",
                    description: "Ignorar os requisitos de onboarding ('Fazer esta alteração tornará o seu servidor incompatível [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Visualiza as permissões que um utilizador ou canal possui, e os cargos de um servidor",
            view: "Ver Permissões",
            option: {
                permissionsSortOrder: {
                    label: "Ordem de Ordenação de Permissões",
                    description: "O método de ordenação usado para definir qual cargo concede a um utilizador uma certa permissão",
                    highest: "Cargo Mais Alto",
                    lowest: "Cargo Mais Baixo"
                }
            },
            icon: {
                denied: "Negado",
                allowed: "Permitido",
                notOverwritten: "Não Substituído"
            },
            context: {
                permissions: "Permissões"
            },
            modal: {
                title: "Permissões",
                noPermissions: "Sem permissões para exibir!",
                owner: "dono",
                grantedBy: "Concedido por",
                serverOwner: "Dono do Servidor",
                ownerRole: "Dono",
                sortingBy: "A ordenar por {{method}}",
                highest: "Cargo Mais Alto",
                lowest: "Cargo Mais Baixo",
                details: "Detalhes do Cargo"
            },
            text: {
                roleOptions: "Opções do cargo",
                userOptions: "Opções do utilizador",
                unknownRole: "Cargo desconhecido",
                unknownUser: "Utilizador desconhecido"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Adiciona um comando de barra /petpet para criar GIFs de carinho na cabeça a partir de qualquer imagem",
            command: {
                petpet: {
                    description: "Cria um GIF petpet. Só podes especificar uma das opções de imagem",
                    delay: "O atraso entre cada frame. O padrão é 20.",
                    resolution: "Resolução para o GIF. O padrão é 120. Se inserires um número absurdo e o Discord bloquear, a culpa é tua.",
                    image: "Anexo de imagem a usar",
                    url: "URL de onde obter a imagem",
                    user: "Utilizador cujo avatar será usado como imagem",
                    noServerPfp: "Usar o avatar normal em vez do específico do servidor ao usar a opção 'user'",
                    error: {
                        noImage: "Nenhuma imagem especificada!",
                        delayTooLow: "O atraso deve ser de pelo menos 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "O ficheiro carregado não é uma imagem",
                fetchUserFailed: "Falha ao obter utilizador. Verifica a consola para mais info.",
                fetchImageFailed: "Ocorreu um erro ao carregar {{url}}. Verifica a consola para mais info."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Adiciona Picture-in-Picture aos vídeos (ao lado do botão de Download)",
            tooltip: "Alternar Picture-in-Picture",
            option: {
                loop: {
                    label: "Repetir",
                    description: "Se o vídeo PiP deve ser repetido ou não"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Permite-te fixar canais privados no topo da tua lista de DMs. Para fixar/desafixar ou reordenar, clica com o botão direito nas DMs",
            context: {
                category: {
                    label: "Menu de Categoria de DMs Fixadas",
                    edit: "Editar Categoria",
                    up: "Mover para Cima",
                    down: "Mover para Baixo",
                    delete: "Eliminar Categoria",
                    unnamed: "ups"
                },
                pin: {
                    label: "Afixar MPs",
                    addCategory: "Adicionar Categoria"
                },
                unPin: {
                    label: "Desafixar DM",
                    move: "Mover para Categoria"
                }
            },
            option: {
                pinOrder: {
                    label: "Ordem de Fixação",
                    description: "Em que ordem devem as DMs fixadas ser exibidas?",
                    lastMessage: "Mensagem mais recente",
                    custom: "Personalizada (clica com o botão direito nos canais para reordenar)"
                },
                canCollapseDmSection: {
                    label: "Secção Fixada Colapsável",
                    description: "Permite que a secção de DMs sem categoria seja colapsável"
                },
                dmSectionCollapsed: {
                    label: "Secção de DMs Colapsada",
                    description: "Colapsar secção de DMs"
                },
                friendsSidebarGroupDms: {
                    label: "MDs de grupo na barra lateral de amigos",
                    description: "Mostra as MDs de grupo afixadas na barra lateral de amigos."
                },
                userBasedCategoryList: {
                    label: "Lista de Categorias Baseada no Utilizador",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Fixar Categoria",
                    edit: "Editar Categoria",
                    new: "Nova Categoria",
                    name: "Nome",
                    color: "Cor",
                    save: "Guardar",
                    create: "Criar"
                },
                defaultCategoryName: "Categoria afixada {{number}}"
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Notificações personalizáveis com formatação de menção melhorada",
            option: {
                friends: {
                    label: "Amigos",
                    description: "Notificar quando amigos enviam mensagens em servidores"
                },
                mentions: {
                    label: "Menções",
                    description: "Notificar quando alguém te @menciona diretamente"
                },
                dms: {
                    label: "Mensagens privadas",
                    description: "Notificar para mensagens diretas (DMs)"
                },
                showInActive: {
                    label: "Mostrar no Ativo",
                    description: "Mostrar notificações mesmo para o canal atualmente ativo"
                },
                ignoreMuted: {
                    label: "Ignorar Silenciados",
                    description: "Ignorar notificações de servidores, canais ou utilizadores silenciados"
                }
            },
            unknown: "Desconhecido",
            dm: "DM",
            groupDM: "DM de Grupo",
            title: "{{username}} em {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Adiciona um ícone de pionés às mensagens fixadas"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Não mostra os pequenos ícones de servidores dentro das pastas"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Adiciona indicadores de plataforma (Desktop, Telemóvel, Web...) aos utilizadores",
            embeddedTooltip: "Integrado (consola ou jogo)",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Lista",
                    description: "Mostrar indicadores nos perfis de utilizador"
                },
                badges: {
                    label: "Emblemas",
                    description: "Mostrar indicadores nos perfis de utilizador como emblemas"
                },
                messages: {
                    label: "Mensagens",
                    description: "Mostrar indicadores dentro das mensagens"
                },
                colorMobileIndicator: {
                    label: "Indicador de Telemóvel Colorido",
                    description: "Se o indicador de telemóvel deve corresponder à cor do estado do utilizador."
                },
                showBots: {
                    label: "Mostrar em Bots",
                    description: "Se os indicadores de plataforma devem ser mostrados em bots"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Falsifica a plataforma ou dispositivo em que estás",
            about: "Não podemos garantir que este plugin não te faça receber um aviso ou banimento. Escolher Xbox/Playstation/VR pode tornar o teu cliente uma versão desatualizada.",
            platform: {
                desktop: "Cliente Discord",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Discord Embebido",
                playstation: "Discord Embebido",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Plataforma",
                    description: "Em que plataforma fingir que estás.",
                    desktop: "Desktop",
                    web: "Web",
                    android: "Android",
                    ios: "iOS",
                    xbox: "Xbox",
                    playstation: "PlayStation",
                    vr: "VR"
                }
            }
        },
        plexcordToolbox: {
            name: "PlexcordToolbox",
            description: "Adiciona um botão à AppBar que contém ações rápidas do Plexcord",
            tooltip: "Plexcord Toolbox",
            context: {
                openLog: "Abrir Registo de Notificações",
                enableQuickCSS: "Ativar QuickCSS",
                openQuickCSS: "Editar QuickCSS",
                openSettings: "Abrir Definições",
                manageThemes: "Gerir Temas"
            },
            option: {
                showPluginMenu: {
                    label: "Mostrar Menu de Plugins",
                    description: "Mostrar o menu de plugins no Plexcord Toolbox"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "Ajusta as tuas mensagens para que pareçam melhores e tenham melhor gramática. Vê as definições",
            option: {
                quickDisable: {
                    label: "Desativação Rápida",
                    description: "Desativação rápida. Desliga a modificação de mensagens sem exigir o recarregamento do cliente."
                },
                blockedWords: {
                    label: "Palavras Bloqueadas",
                    description: "Palavras que não serão capitalizadas (separadas por vírgulas)."
                },
                fixApostrophes: {
                    label: "Corrigir Apóstrofos",
                    description: "Garante que as contrações contenham apóstrofos."
                },
                expandContractions: {
                    label: "Expandir Contrações",
                    description: "Expande as contrações de palavras"
                },
                fixCapitalization: {
                    label: "Corrigir Capitalização",
                    description: "Capitaliza o início das frases."
                },
                fixPunctuation: {
                    label: "Corrigir Pontuação",
                    description: "Corrige o espaçamento em volta da pontuação."
                },
                fixPunctuationFrequency: {
                    label: "Frequência de Correção de Pontuação",
                    description: "Frequência percentual de pontos finais (isto irrita bastante algumas pessoas).",
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Permite-te pré-visualizar a tua mensagem antes de a enviares.",
            tooltip: "Pré-visualizar Mensagem"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Permite guardar e carregar diferentes predefinições de perfil.",
            toast: {
                importFailed: "Falha ao importar predefinições. O ficheiro pode ser inválido.",
            },
            option: {
                avatarSize: {
                    label: "Tamanho do Avatar",
                    description: "Tamanho do avatar na lista de predefinições"
                }
            },
            modal: {
                override: "Substituir",
                merge: "Fundir",
                cancel: "Cancelar",
                timestamp: "{{formattedDate}} às {{formattedTime}}",
                rename: "Renomear",
                update: "Atualizar",
                moveUp: "Mover para Cima",
                moveDown: "Mover para Baixo",
                moveTo: "Mover para a Página 1",
                delete: "Eliminar",
                importProfiles: "Importar Perfis",
                importText: "Tens {{existingCount}} perfis existentes nesta secção. Queres substituí-los ou fundi-los com os perfis importados?",
                heading: "Perfis Guardados",
                searchProfiles: "Procurar Perfis...",
                profileName: "Nome do Perfil",
                saving: "A guardar...",
                save: "Guardar Perfil",
                cancelSearch: "Cancelar Procura",
                search: "Procurar",
                random: "Aleatório",
                import: "Importar",
                exportAll: "Exportar Tudo"
            },
            text: {
                selectAServer: "Seleciona um servidor",
                profileSets: "Conjuntos de perfil",
                youAreNotIn: "Ainda não estás em nenhum servidor.",
                mainProfile: "Perfil principal",
                serverProfiles: "Perfis de servidor",
                openProfileSets: "Abrir conjuntos de perfil"
            }
        },
        questify: {
            name: "Questify",
            description: "Melhore recursos específicos das Quests, desative incômodos ou remova as Quests completamente.",
            quests: "Quests",
            context: {
                quest: {
                    label: "Menu do botão de Quests",
                    ignore: "Marcar todas como ignoradas",
                    reset: "Redefinir lista de ignoradas",
                    fetch: "Buscar Quests",
                    markAsIgnored: "Marcar como ignorada",
                    unmarkAsIgnored: "Deixar de ignorar",
                    stopAuto: "Parar conclusão automática",
                    startAuto: "Iniciar conclusão automática",
                    copyQuestID: "Copiar ID da Quest",
                    pauseAutoEnrollment: "Pausar inscrição automática",
                    unpauseAutoEnrollment: "Retomar inscrição automática",
                    pauseAutoProcessing: "Pausar processamento automático",
                    unpauseAutoProcessing: "Retomar processamento automático"
                }
            },
            button: {
                completing: "A concluir...",
                completingWithTime: "A concluir ({{time}})",
                completingIn: "A concluir em {{time}}",
                queued: "Na fila ({{position}})",
                resuming: "A retomar...",
                completeNow: "Concluir agora",
                complete: "Concluir ({{time}})",
                resume: "Retomar ({{time}})",
                completed: "Concluída"
            },
            reward: {
                orbs: "{{status}} por {{orbQuantity}} Orbs.",
                article: "{{status}} por {{itemName}}.",
                unrecognized: "{{status}} por uma recompensa não reconhecida."
            },
            toast: {
                autoCompleteBroken: "A conclusão automática não está a funcionar. Uma correção será lançada em breve.",
                enrollmentFailed: "Falha ao se inscrever na Quest {{questName}}.",
                enrollmentInNormalizequestnameQuest: "Falha na inscrição na missão {{normalizeQuestName_quest}}{{rateLimitSuffix}}.",
                automationUnlocked: "Automação de Quests desbloqueada.",
                automationLocked: "Automação de Quests bloqueada."
            },
            notification: {
                completed: {
                    title: "Quest concluída!",
                    body: "A Quest {{questName}} foi concluída."
                },
                newQuest: {
                    title: "Nova Quest detectada!",
                    body: "A Quest {{questName}} já está disponível."
                },
                newQuests: {
                    title: "Novas Quests detectadas!",
                    body: "{{count}} novas Quests já estão disponíveis."
                },
                newExcludedQuest: {
                    title: "Nova Quest excluída detectada!",
                    body: "A Quest excluída {{questName}} foi detectada. ID: {{questId}}"
                },
                newExcludedQuests: {
                    title: "Novas Quests excluídas detectadas!",
                    body: "{{count}} novas Quests excluídas foram detectadas. Verifique o consola para ver os IDs."
                }
            },
            alert: {
                restart: {
                    title: "É necessário reiniciar",
                    body: "Uma alteração feita nas definições do Questify requer um reinício.",
                    confirm: "Reiniciar",
                    cancel: "Mais tarde"
                },
                dangerous: {
                    title: "Tem a certeza?",
                    confirm: "Continuar",
                    cancel: "Cancelar",
                    disableEverything: "Isso desativará completamente a funcionalidade das Quests.",
                    allowDangerous: "Isso permitirá alterar definições perigosas."
                }
            },
            status: {
                unclaimed: "NÃO RESGATADA",
                claimed: "Resgatada",
                ignored: "Ignorada",
                expired: "Expirada"
            },
            questTypes: {
                watchVideo: "Assistir vídeo",
                watchVideoOnMobile: "Assistir vídeo no telemóvel",
                achievementInActivity: "Conquista em atividade",
                achievementInGame: "Conquista no jogo",
                playActivity: "Jogar atividade",
                playOnDesktop: "Jogar no computador",
                playOnDesktopV2: "Jogar no computador V2",
                streamOnDesktop: "Transmitir no computador",
                playOnPlayStation: "Jogar no PlayStation",
                playOnXbox: "Jogar no Xbox"
            },
            settings: {
                questButton: {
                    title: "Botão de Quests",
                    description: "Mostra um botão de Quests na lista de servidores com um indicador opcional para Quests não resgatadas e não ignoradas.",
                    behavior: "Comportamento do botão",
                    leftClick: "Ação do clique esquerdo:",
                    middleClick: "Ação do clique do meio:",
                    rightClick: "Ação do clique direito:",
                    visibility: "Visibilidade do botão:",
                    visibilityTooltip: "Sempre mostra o botão de Quests enquanto este recurso estiver ativado.\n\nNão resgatada só o mostra quando você tem recompensas de Quests relevantes não resgatadas.\n\nNunca oculta o botão de Quests.",
                    unclaimedIndicator: "Indicador de não resgatadas:",
                    unclaimedIndicatorTooltip: "Pílula mostra o marcador de não lido do Discord ao lado do botão de Quests.\n\nEmblema mostra o número de recompensas de Quests relevantes não resgatadas.\n\nAmbos mostra a pílula e o emblema juntos.\n\nNenhum oculta os indicadores.",
                    badgeColor: "Cor do emblema:",
                    relevancy: "Relevância das Quests",
                    includedRewardTypes: "Tipos de recompensa incluídos:",
                    includedRewardTypesTooltip: "Contar como não resgatadas apenas as Quests com estes tipos de recompensa ao determinar a visibilidade do botão, a contagem do emblema e o comportamento dos alertas.",
                    includedQuestTypes: "Tipos de Quest incluídos:",
                    includedQuestTypesTooltip: "Contar como não resgatadas apenas as Quests com estes tipos de tarefa ao determinar a visibilidade do botão, a contagem do emblema e o comportamento dos alertas.",
                    display: {
                        always: "Sempre",
                        unclaimed: "Não resgatada",
                        never: "Nunca"
                    },
                    indicator: {
                        pill: "Pílula",
                        badge: "Emblema",
                        both: "Ambos",
                        none: "Nenhum"
                    },
                    action: {
                        openQuests: "Abrir Quests",
                        contextMenu: "Menu de contexto",
                        pluginSettings: "Definições do plugin",
                        nothing: "Nada"
                    },
                    rewardTypes: {
                        orbs: "Orbs",
                        nitroCodes: "Códigos de Nitro",
                        rewardCodes: "Códigos de recompensa",
                        inGameItems: "Itens no jogo",
                        profileCollectibles: "Colecionáveis de perfil"
                    }
                },
                questFeatures: {
                    title: "Recursos das Quests",
                    description: "Modifique o comportamento das Quests para melhorar ou remover funcionalidades.",
                    disableFeatures: "Desativar recursos",
                    disableEverything: "Desativar completamente a funcionalidade das Quests:",
                    disableEverythingTooltip: "Isso desativará todas as melhorias do plugin, ocultará a página de Quests e os elementos de Quests em todo o Discord e impedirá o Discord de buscar dados de Quests. A loja não será afetada, pois os Orbs estão ligados demais a ela como moeda secundária.",
                    disableSpecific: "Desativar recursos específicos:",
                    disableSpecificTooltip: "O banner patrocinado é um banner de Quest pago no topo da página de Quests.\n\nOs avisos de mudança são indicadores, como na página Explorar, de que as Quests foram movidas para as DMs.\n\nA promoção da lista de amigos é um cartão exibido na seção \"Ativo agora\" da sua lista de amigos enquanto um utilizador com quem você compartilha um servidor joga um jogo com uma Quest ativa.\n\nA promoção da lista de membros é um ícone exibido nos membros da lista de um servidor enquanto eles jogam um jogo com uma Quest ativa.\n\nA promoção do painel da conta é uma promoção de Quest paga exibida acima do seu painel de conta.\n\nO progresso do painel da conta é o progresso da Quest ativa ou concluída exibido acima do seu painel de conta.\n\nOs emblemas de Quests e Orbs são emblemas nos perfis de quem concluiu pelo menos uma Quest ou comprou o emblema de Orbs, respectivamente.",
                    disableOptions: {
                        sponsoredBanner: "Banner patrocinado",
                        relocationNotices: "Avisos de mudança",
                        friendsListPromo: "Promoção da lista de amigos",
                        membersListPromo: "Promoção da lista de membros",
                        accountPanelPromo: "Promoção do painel da conta",
                        accountPanelProgress: "Progresso do painel da conta",
                        orbsAndQuestsBadges: "Emblemas de Quests e Orbs"
                    },
                    modifyFeatures: "Modificar recursos",
                    warningTos: "O Discord começou a emitir avisos para utilizadores de scripts ou plugins que modificam como as Quests são concluídas, o que vai contra os {{tos}}.",
                    tos: "Termos de Serviço",
                    warningEscalate: "Os avisos parecem limitados à ameaça de perda de acesso às Quests ou às suas recompensas, mas o Discord pode endurecer a qualquer momento.",
                    warningDetection: "Devido aos vários métodos que o Discord usa para rastrear utilizadores, não há maneira realista de evitar a detecção. Se continuar, entenda que o Discord provavelmente detectará isso em algum momento.",
                    warningRisk: "Use a opção a seguir para acessar definições potencialmente perigosas por sua conta e risco.",
                    allowDangerous: "Permitir alterar definições perigosas...",
                    disallowDangerous: "Redefinir e proibir alterar definições perigosas...",
                    completeVideoQuicker: "Acelerar a conclusão automática de Quests de vídeo:",
                    completeVideoQuickerTooltip: "O Discord permite concluir Quests de vídeo quando, desde a inscrição, já passou a duração do vídeo menos 24 segundos.\n\nIsso significa que, se uma Quest de vídeo tiver 24 segundos ou menos, ou se você se inscrever e voltar depois para concluí-la, ela poderá ser concluída imediatamente.\n\nEsta definição só se aplica à conclusão automática de Quests de vídeo e depende da definição de conclusão automática abaixo. Concluir manualmente ainda exige esperar a duração completa e não depende do momento da inscrição.",
                    mobileDesktop: "Tornar algumas Quests de vídeo exclusivas do telemóvel concluíveis no computador:",
                    mobileDesktopTooltip: "Algumas Quests de vídeo exclusivas do telemóvel permitem inscrição no computador, mas ainda precisam ser concluídas no telemóvel. Esta definição permite concluí-las no computador.\n\nAlgumas Quests de vídeo exclusivas do telemóvel só permitem inscrição pelo telemóvel. Para que esta definição as afete, você deve se inscrever nelas pelo telemóvel antes de voltar ao computador e atualizar suas Quests.\n\nQuando ativada sozinha, esta definição só se aplica à conclusão manual de Quests de vídeo. A conclusão automática de Quests de vídeo do telemóvel pelo computador depende da definição de conclusão automática abaixo e ativará esta definição implicitamente.",
                    simultaneous: "Concluir Quests automaticamente ao mesmo tempo em vez de em sequência:",
                    simultaneousTooltip: "Por padrão, tentar concluir várias Quests automaticamente as coloca em uma fila para serem concluídas em ordem.\n\nEsta definição permite, em vez disso, que todas as Quests de conclusão automática rodem ao mesmo tempo.\n\nEsta definição só se aplica à conclusão automática e depende da definição de conclusão automática abaixo.",
                    resumeInterrupted: "Retomar conclusões automáticas interrompidas após recarregar ou reiniciar:",
                    resumeInterruptedTooltip: "Esta definição retomará automaticamente qualquer conclusão automática interrompida por recarregamentos ou reinícios, incluindo recolocar na fila Quests que estavam na fila mas ainda não tinham começado.",
                    autoProcess: "Processar automaticamente Quests compatíveis para conclusão automática:",
                    autoProcessTooltip: "Conclui Quests elegíveis, não resgatadas, não ignoradas e não expiradas incluídas pelos seus filtros de recompensa e tipo de Quest, detetadas enquanto o Discord está em execução. Apenas os tipos de tarefa suportados ativados abaixo são incluídos.\n\nInscreve-se automaticamente em Quests compatíveis antes de colocá-las na fila de conclusão automática. Aguarda os tempos de espera conhecidos de limite de taxa. Para em erros desconhecidos, limites de taxa sem tempo de nova tentativa ou falhas repetidas de inscrição.",
                    autoEnroll: "Inscrever-se automaticamente em Quests compatíveis.",
                    autoEnrollTooltip: "Inscreve-se em Quests elegíveis, não resgatadas, não ignoradas e não expiradas incluídas pelos seus filtros de recompensa e tipo de Quest, detetadas enquanto o Discord está em execução.\n\nInscreve-se nas Quests sem colocá-las na fila de conclusão automática. Aguarda os tempos de espera conhecidos de limite de taxa. Para em erros desconhecidos, limites de taxa sem tempo de nova tentativa ou falhas repetidas de inscrição.",
                    autoCompleteTypes: "Concluir automaticamente tipos específicos de Quest:",
                    autoCompleteTypesTooltip: "Quests de \"Assistir vídeo no telemóvel\" só funcionam com Quests móveis que permitem inscrição no computador. Se a inscrição estiver restrita ao telemóvel, você precisa se inscrever pelo telemóvel antes de voltar ao computador e atualizar suas Quests.\n\nTodas as Quests de vídeo normalmente enviam um stack trace com os relatórios de progresso. Assim o Discord sabe exatamente quais funções foram chamadas e pode verificar se suas próprias funções iniciaram o progresso. O Questify apaga esse stack trace, mas a ausência dele é tão reveladora quanto a presença.\n\nQuests de \"Jogar no computador\", \"Jogar no PlayStation\", \"Jogar no Xbox\", \"Jogar atividade\" e \"Conquista em atividade\" só estão disponíveis em clientes oficiais para computador devido a uma limitação imposta pelo Discord. Clientes de terceiros como extensões web, Plextron e outros não suportam a conclusão automática desses tipos.\n\nTodas as Quests de jogos normalmente enviam uma impressão digital do jogo com os relatórios de heartbeat. Assim o Discord pode usar dados de dezenas de milhares de utilizadores para determinar se outros utilizadores provavelmente usam um jogo real ou emulam o executável. Não há método razoável para falsificar esse valor, então o Questify o deixa em branco, mas a ausência dele é tão reveladora quanto uma falsificação malfeita.\n\nA conclusão automática começa pelos botões de Quest na página de Quests ou pelo processamento automático. As Quests são concluídas na ordem em que entraram na fila, a menos que a conclusão simultânea esteja ativada acima.\n\nConcluir Quests automaticamente é a definição perigosa mais arriscada disponível. Ative-a por sua conta e risco."
                },
                questNotifications: {
                    title: "Notificações de Quests",
                    description: "Configure notificações e alertas de Quests concluídas e de novas Quests detectadas.",
                    questCompleted: "Quest concluída",
                    notifyOnComplete: "Mostrar uma notificação quando uma Quest for concluída:",
                    soundOnComplete: "Tocar um som quando uma Quest for concluída:",
                    volume: "Volume:",
                    newQuests: "Novas Quests detectadas",
                    notifyOnNew: "Mostrar uma notificação quando novas Quests forem detectadas:",
                    soundOnNew: "Tocar um som quando novas Quests forem detectadas:",
                    notifyOnNewExcluded: "Mostrar uma notificação quando novas Quests excluídas forem detectadas:",
                    notifyOnNewExcludedTooltip: "Algumas Quests são excluídas da sua lista de Quests disponíveis devido a restrições de região ou plataforma.\n\nQuando ativado, o Questify buscará as definições dessas Quests, aplicará seus filtros de tipos de Quest e recompensa, exibirá no consola os dados das Quests excluídas e mostrará uma notificação separada para as Quests excluídas correspondentes.",
                    soundOnNewExcluded: "Tocar um som quando novas Quests excluídas forem detectadas:",
                    soundOnNewExcludedTooltip: "Algumas Quests são excluídas da sua lista de Quests disponíveis devido a restrições de região ou plataforma.\n\nQuando um som é selecionado, o Questify buscará as definições dessas Quests, aplicará seus filtros de tipos de Quest e recompensa, exibirá no consola os dados das Quests excluídas e tocará este som para as Quests excluídas correspondentes.",
                    fetchInterval: "Intervalo de busca de Quests:",
                    fetchIntervalTooltip: "O Discord só busca Quests ao carregar e quando você visita a página de Quests.\n\nEste intervalo busca Quests periodicamente enquanto o cliente estiver aberto, para que os indicadores do botão de Quests e os alertas de novas Quests fiquem atualizados ao longo do dia.\n\nIsso só funciona se estiver ativado e se as definições do botão ou das notificações de Quests tornarem a busca periódica útil.",
                    disabled: "DESATIVADO",
                    preview: "Ouvir {{sound}}",
                    intervals: {
                        thirtyMinutes: "30 minutos",
                        fortyFiveMinutes: "45 minutos",
                        oneHour: "1 hora",
                        threeHours: "3 horas",
                        sixHours: "6 horas",
                        twelveHours: "12 horas"
                    }
                },
                questTiles: {
                    title: "Cartões de Quests",
                    description: "Destaque as Quests com cores de tema opcionais para melhor visibilidade.",
                    behavior: "Comportamento dos cartões",
                    gradientStyle: "Estilo do gradiente:",
                    gradientStyleTooltip: "Intenso e Padrão usam a cor do cartão selecionada no gradiente da imagem.\n\nPreto sutil mantém um gradiente neutro mais escuro para contraste.\n\nSem gradiente remove o gradiente da imagem, o que pode dificultar a leitura de algumas artes de Quest.",
                    assetPreload: "Pré-carregamento de recursos:",
                    assetPreloadTooltip: "Carregar todos os recursos ao abrir a página de Quests reduz os deslocamentos de layout ao rolar.\n\nCarregar durante a rolagem é mais próximo do comportamento padrão do Discord e pode exigir menos trabalho no início.",
                    colors: "Cores dos cartões",
                    enable: "Ativar",
                    disable: "Desativar",
                    gradient: {
                        intense: "Gradiente de reestilo intenso",
                        default: "Gradiente de reestilo padrão",
                        black: "Gradiente preto sutil",
                        hide: "Sem gradiente"
                    },
                    preload: {
                        onLoad: "Carregar todos os recursos ao abrir a página",
                        onScroll: "Carregar os recursos durante a rolagem"
                    }
                },
                reorderQuests: {
                    title: "Reordenar Quests",
                    description: "Ordenar missões pelo estado quando a ordenação do Questify estiver selecionada na página de missões. Estados ocultos são filtrados em qualquer ordenação.",
                    statusOrder: "Ordem dos status",
                    statusOrderTooltip: "Cada status só pode aparecer uma vez. Selecionar um status já usado em outra posição troca as duas posições.",
                    positions: {
                        first: "Primeiro:",
                        second: "Segundo:",
                        third: "Terceiro:",
                        fourth: "Quarto:"
                    },
                    subsorts: "Subordenações",
                    unclaimedSubsort: "Subordenação de não resgatadas:",
                    unclaimedSubsortTooltip: "Quests concluídas mas não resgatadas ficam abaixo das não resgatadas incompletas; depois esta subordenação é aplicada dentro desses grupos.",
                    claimedSubsort: "Subordenação de resgatadas:",
                    claimedSubsortTooltip: "Quests resgatadas podem ser ordenadas pela data de resgate ou por quando a Quest foi adicionada.",
                    ignoredSubsort: "Subordenação de ignoradas:",
                    ignoredSubsortTooltip: "Quests ignoradas mantêm a posição do seu grupo; esta subordenação controla a ordem dentro dele.",
                    expiredSubsort: "Subordenação de expiradas:",
                    expiredSubsortTooltip: "Quests expiradas podem ser ordenadas pela data de expiração ou por quando a Quest foi adicionada.",
                    subsort: {
                        addedNewest: "Adicionadas (mais recentes)",
                        addedOldest: "Adicionadas (mais antigas)",
                        expiringSoonest: "Expiram (mais cedo)",
                        expiringLatest: "Expiram (mais tarde)",
                        expiredMostRecent: "Expiradas (mais recentes)",
                        expiredLeastRecent: "Expiradas (mais antigas)",
                        claimedMostRecent: "Resgatadas (mais recentes)",
                        claimedLeastRecent: "Resgatadas (mais antigas)"
                    },
                    memory: "Memória da página de Quests",
                    rememberSort: "Lembrar a ordenação selecionada na página de Quests:",
                    rememberSortTooltip: "Quando desativado, a página de Quests sempre abre com a opção de ordenação do Questify.",
                    rememberFilters: "Lembrar os filtros selecionados na página de Quests:",
                    rememberFiltersTooltip: "Quando desativado, a página de Quests sempre abre sem filtros de tarefa ou recompensa."
                }
            },
            option: {
                migrationVersion: {
                    label: "Versão de migração",
                    description: "A versão de migração atual das definições."
                },
                questFeatures: {
                    label: "Recursos das Quests",
                    description: "Selecione quais recursos das Quests desativar."
                },
                disableQuestsEverything: {
                    label: "Desativar tudo",
                    description: "Desativa todos os recursos das Quests."
                },
                disableRelocationNotices: {
                    label: "Desativar avisos de mudança",
                    description: "Desativa os avisos de mudança das Quests na página Explorar."
                },
                disableSponsoredBanner: {
                    label: "Desativar banner patrocinado",
                    description: "Desativa o banner patrocinado na página de Quests."
                },
                disableAccountPanelPromo: {
                    label: "Desativar promoção do painel da conta",
                    description: "Desativa o pop-up de Quest promovida acima do seu painel de conta."
                },
                disableAccountPanelQuestProgress: {
                    label: "Desativar progresso do painel da conta",
                    description: "Desativa o progresso de Quests ativas e concluídas acima do seu painel de conta."
                },
                disableOrbsAndQuestsBadges: {
                    label: "Desativar emblemas de Quests e Orbs",
                    description: "Desativa o emblema de Quests nos perfis."
                },
                disableFriendsListPromo: {
                    label: "Desativar promoção da lista de amigos",
                    description: "Desativa a promoção de Quests de jogos que seus amigos jogam."
                },
                disableMembersListPromo: {
                    label: "Desativar promoção da lista de membros",
                    description: "Desativa o ícone de jogando ativamente na lista de membros."
                },
                allowChangingDangerousSettings: {
                    label: "Permitir definições perigosas",
                    description: "Permite alterar definições perigosas."
                },
                resumeInterruptedQuests: {
                    label: "Retomar Quests interrompidas",
                    description: "Retoma a conclusão automática de Quests após recarregar ou reiniciar."
                },
                makeMobileVideoQuestsDesktopCompatible: {
                    label: "Tornar Quests de vídeo do telemóvel compatíveis",
                    description: "Torna Quests de vídeo exclusivas do telemóvel compatíveis com o computador."
                },
                autoCompleteQuestsSimultaneously: {
                    label: "Concluir ao mesmo tempo",
                    description: "Conclui Quests ao mesmo tempo em vez de em sequência."
                },
                completeVideoQuestsQuicker: {
                    label: "Concluir Quests de vídeo mais rápido",
                    description: "Usa a margem de progresso do Discord e o tempo desde a inscrição na conclusão automática de Quests de vídeo."
                },
                autoCompleteQuestTypes: {
                    label: "Tipos de Quest para concluir automaticamente",
                    description: "Quais tipos de Quests concluir automaticamente em segundo plano."
                },
                questButton: {
                    label: "Botão de Quests",
                    description: "Personalize o botão de Quests na lista de servidores."
                },
                questButtonDisplay: {
                    label: "Exibição do botão de Quests",
                    description: "Qual tipo de exibição usar para o botão de Quests na lista de servidores."
                },
                questButtonIncludedTypes: {
                    label: "Tipos incluídos no botão de Quests",
                    description: "Quais tipos de recompensa e de Quest incluir na contagem exibida no botão de Quests."
                },
                questButtonIndicator: {
                    label: "Indicador do botão de Quests",
                    description: "Qual tipo de exibição usar para o indicador de não resgatadas no botão de Quests."
                },
                questButtonBadgeCount: {
                    label: "Contagem do emblema",
                    description: "O número atual de Quests relevantes não resgatadas."
                },
                questButtonBadgeColor: {
                    label: "Cor do emblema",
                    description: "A cor do emblema do botão de Quests na lista de servidores."
                },
                questButtonLeftClickAction: {
                    label: "Ação do clique esquerdo",
                    description: "A ação ao clicar com o botão esquerdo no botão de Quests."
                },
                questButtonMiddleClickAction: {
                    label: "Ação do clique do meio",
                    description: "A ação ao clicar com o botão do meio no botão de Quests."
                },
                questButtonRightClickAction: {
                    label: "Ação do clique direito",
                    description: "A ação ao clicar com o botão direito no botão de Quests."
                },
                questNotifications: {
                    label: "Notificações de Quests",
                    description: "Configure notificações de Quests concluídas e de novas Quests detectadas."
                },
                notifyOnQuestComplete: {
                    label: "Notificar ao concluir",
                    description: "Mostra uma notificação quando uma Quest é concluída."
                },
                notifyOnNewQuests: {
                    label: "Notificar novas Quests",
                    description: "Mostra uma notificação quando novas Quests são detectadas."
                },
                notifyOnNewExcludedQuests: {
                    label: "Notificar novas Quests excluídas",
                    description: "Mostra uma notificação quando novas Quests excluídas são detectadas."
                },
                questCompletedAlertSound: {
                    label: "Som de Quest concluída",
                    description: "O som tocado quando uma Quest é concluída."
                },
                questCompletedAlertVolume: {
                    label: "Volume de Quest concluída",
                    description: "O volume do som de Quest concluída."
                },
                questFetchInterval: {
                    label: "Intervalo de busca",
                    description: "O intervalo em segundos para buscar Quests do Discord."
                },
                newQuestAlertSound: {
                    label: "Som de nova Quest",
                    description: "O som tocado quando novas Quests são detectadas."
                },
                newQuestAlertVolume: {
                    label: "Volume de nova Quest",
                    description: "O volume do som de nova Quest."
                },
                newExcludedQuestAlertSound: {
                    label: "Som de nova Quest excluída",
                    description: "O som tocado quando novas Quests excluídas são detectadas."
                },
                newExcludedQuestAlertVolume: {
                    label: "Volume de nova Quest excluída",
                    description: "O volume do som de nova Quest excluída."
                },
                questTiles: {
                    label: "Cartões de Quests",
                    description: "Personalize a aparência dos cartões de Quests na página de Quests."
                },
                questTileUnclaimedColor: {
                    label: "Cor dos cartões não resgatados",
                    description: "A cor dos cartões de Quests não resgatadas."
                },
                questTileClaimedColor: {
                    label: "Cor dos cartões resgatados",
                    description: "A cor dos cartões de Quests resgatadas."
                },
                questTileIgnoredColor: {
                    label: "Cor dos cartões ignorados",
                    description: "A cor dos cartões de Quests ignoradas."
                },
                questTileExpiredColor: {
                    label: "Cor dos cartões expirados",
                    description: "A cor dos cartões de Quests expiradas."
                },
                questTileGradient: {
                    label: "Gradiente dos cartões",
                    description: "Estilo do gradiente usado nos cartões de Quests."
                },
                questTilePreload: {
                    label: "Pré-carregamento dos cartões",
                    description: "Tenta pré-carregar os recursos dos cartões de Quests."
                },
                reorderQuests: {
                    label: "Reordenar Quests",
                    description: "Ordena as Quests pelo status."
                },
                questOrder: {
                    label: "Ordem das Quests",
                    description: "Ordem dos grupos de status das Quests."
                },
                unclaimedSubsort: {
                    label: "Subordenação de não resgatadas",
                    description: "Método de subordenação para Quests não resgatadas."
                },
                claimedSubsort: {
                    label: "Subordenação de resgatadas",
                    description: "Método de subordenação para Quests resgatadas."
                },
                ignoredSubsort: {
                    label: "Subordenação de ignoradas",
                    description: "Método de subordenação para Quests ignoradas."
                },
                expiredSubsort: {
                    label: "Subordenação de expiradas",
                    description: "Método de subordenação para Quests expiradas."
                },
                isOnQuestsPage: {
                    label: "Na página de Quests",
                    description: "Se o utilizador está atualmente na página de Quests."
                },
                rememberQuestPageSort: {
                    label: "Lembrar ordenação",
                    description: "Lembra a última ordenação usada na página de Quests."
                },
                rememberQuestPageFilters: {
                    label: "Lembrar filtros",
                    description: "Lembra os últimos filtros usados na página de Quests."
                },
                lastQuestPageSort: {
                    label: "Última ordenação",
                    description: "A última ordenação usada na página de Quests."
                },
                lastQuestPageFilters: {
                    label: "Últimos filtros",
                    description: "Os últimos filtros usados na página de Quests."
                },
                ignoredQuestIDs: {
                    label: "IDs de Quests ignoradas",
                    description: "Uma lista de IDs de Quests ignoradas."
                },
                resumeQuestIDs: {
                    label: "IDs de Quests a retomar",
                    description: "Uma lista de IDs de Quests a ser concluídas automaticamente ou na fila em segundo plano."
                },
                acknowledgedNotices: {
                    description: "Avisos únicos que o utilizador confirmou.",
                    label: "Avisos confirmados"
                },
                settingsSearch: {
                    description: "Pesquisar definições do Questify.",
                    label: "Pesquisa de definições"
                },
                hideNonAutoCompletableQuests: {
                    description: "Ocultar missões incompletas sem uma tarefa de conclusão automática suportada e ativada.",
                    label: "Ocultar missões sem conclusão automática"
                },
                preventVideoQuestsPausing: {
                    description: "Impedir que o vídeo pause quando a janela da missão perder o foco.",
                    label: "Impedir pausa de missões de vídeo"
                },
                hiddenQuestStatuses: {
                    description: "Grupos de estado de missões a ocultar.",
                    label: "Estados de missão ocultos"
                },
                autoEnrollQuests: {
                    label: "Inscrição automática em Quests",
                    description: "Inscreve-se automaticamente em Quests disponíveis elegíveis em buscas bem-sucedidas enquanto o Discord está em execução."
                },
                autoCompleteQuests: {
                    label: "Conclusão automática de Quests",
                    description: "Inscreve-se automaticamente e conclui Quests disponíveis elegíveis com tipos de tarefa suportados e ativados em buscas bem-sucedidas enquanto o Discord está em execução."
                }
            },
            text: {
                clearQuestQueue: "Limpar fila de missões",
                hideIncompleteQuestsWith: "Ocultar missões incompletas com estado não resgatado ou ignorado quando nenhuma tarefa de conclusão automática for suportada nesta plataforma e estiver ativada na lista de tipos de missão. Missões resgatadas, expiradas e concluídas estão isentas. Usa as opções de ordem de estado ocultas para as ocultar.",
                discordForcesYouTo: "O Discord obriga-te a manter o cliente em foco para que as missões de vídeo reproduzam o vídeo.",
                hideNonAutoCompletable: "Ocultar missões sem conclusão automática:",
                preventVideoQuestsFrom: "Impedir que missões de vídeo pausem ao perder o foco:",
                thePunishmentAlsoConsists: "A punição inclui também uma violação no estado da conta que dura 2 anos por violação.",
                dueToTheVarious: "Devido aos vários métodos que o Discord usa para rastrear utilizadores, não há forma realista de evitar a deteção. Se continuares, percebe que o Discord provavelmente detetará a tua utilização a certa altura.",
                enrollInQuest: "Inscrever-se na missão",
                hidden: "Oculto",
                selectingAnOccupiedPosition: "Selecionar uma posição ocupada troca os dois estados. Estados ocultos são removidos das listas de missões.",
                searchQuestifySettings: "Pesquisar definições do Questify",
                searchQuestifySettings2: "Pesquisar definições do Questify...",
                noMatchingSettings: "Nenhuma definição correspondente.",
                questifyNoticeAugust7th: "Aviso do Questify - 7 de agosto de 2026",
                keepUsingDangerousQuestify: "Continuar a usar definições perigosas do Questify",
                disableDangerousQuestifySettings: "Desativar definições perigosas do Questify",
                questifyNoticeAugust26th: "Aviso do Questify - 26 de agosto de 2026",
                areYouSure: "Tens a certeza?",
                thePunishmentAppearsLimited: "A punição parece limitada à perda de acesso às missões e às suas recompensas, mas o Discord pode agravá-la a qualquer momento.",
                queueAllQuests: "Pôr em fila todas as missões",
                inProgress: "Em curso",
                rateLimited: "Limitado",
                preventsVideoPausing: "Esta definição impede que o vídeo pause e permite que a conclusão avance normalmente.",
                appliesOnlyToVideoQuests: "Esta definição se aplica apenas à conclusão manual de missões de vídeo.",
                knownToPunish: "O Discord é conhecido por punir utilizadores de scripts ou plugins que modificam a conclusão de missões. Modificar a conclusão de missões viola os",
                punishmentConsists: "A punição consiste na perda temporária ou permanente do acesso às missões e às suas recompensas.",
                questBanSystem: "O Discord implementou um sistema de banimento de missões que limitará temporária ou permanentemente o teu acesso para concluir missões e resgatar as suas recompensas caso descubra que as concluis por meios não oficiais. Modificar a conclusão de missões viola os",
                begunPunishing: "O Discord começou a punir utilizadores de scripts e plugins que modificam a conclusão de missões. Modificar a conclusão de missões viola os",
                dueToRateLimits: " devido a limites de taxa"
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Substitui todos os pontos de interrogação por uma frase escolhida, se a mensagem apenas contiver pontos de interrogação.",
            option: {
                replace: {
                    label: "Substituir",
                    description: "Substituir por"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Adiciona um botão de menção rápida à barra de ações da mensagem",
            tooltip: "Menção Rápida"
        },
        quickReply: {
            name: "QuickReply",
            description: "Responde a (Ctrl+Cima/Baixo) e edita (Ctrl+Shift+Cima/Baixo) mensagens através de atalhos de teclado",
            option: {
                shouldMention: {
                    label: "Deve Mencionar",
                    description: "Mencionar na resposta por padrão",
                    noReplyMentionPlugin: "Seguir plugin NoReplyMention (se ativado)",
                    enabled: "Ativado",
                    disabled: "Desativado"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignorar Bloqueados e Ignorados",
                    description: "Ignorar mensagens de utilizadores bloqueados/ignorados ao navegar"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Alterna rapidamente entre temas usando atalhos de teclado.",
            about: {
                title: "Atalhos",
                description: "Usa Ctrl/Cmd+Shift+Setas para navegar (Esquerda/Direita: ciclar temas, Cima: ativar, Baixo: desativar).",
                reload: "Prime Ctrl/Cmd+Shift+Alt para recarregar a lista de temas."
            },
            modal: {
                added: "Adicionado(s) {{count}} tema(s)",
                removed: "Removido(s) {{count}} tema(s)",
                reloaded: "Recarregados {{themeCount}} temas",
                addedLocal: "Adicionado(s) {{count}} tema(s) local(ais)",
                removedLocal: "Removido(s) {{count}} tema(s) local(ais)",
            },
            option: {
                includeLocal: {
                    label: "Incluir Locais",
                    description: "Incluir temas locais"
                },
                includeOnline: {
                    label: "Incluir Online",
                    description: "Incluir temas online"
                },
                sortOrder: {
                    label: "Ordem de Ordenação",
                    description: "Método de ordenação",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "Recente"
                },
                autoRefresh: {
                    label: "Atualização Automática",
                    description: "Atualiza automaticamente a lista de temas quando são detetadas alterações"
                },
                showNotifications: {
                    label: "Mostrar Notificações",
                    description: "Mostra notificações quando temas são adicionados/removidos"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Adiciona a capacidade de criar uma imagem de citação inspiradora a partir de uma mensagem",
            context: {
                quote: "Citação"
            },
            modal: {
                title: "Apanhado em 4k",
                grayscale: "Escala de Cinzas",
                export: "Exportar",
                send: "Enviar",
                saveAsGIF: "Guardar como GIF",
                saveDescription: "Guarda/Envia a imagem como um GIF em vez de um PNG",
                showWatermark: "Mostrar Marca de Água",
                watermarkText: "Texto da Marca de Água (máx. 32 caracteres)"
            },
            option: {
                quoteFont: {
                    label: "Fonte da Citação",
                    description: "Fonte para o texto da citação (autor/username usam sempre M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Open Sans",
                    momoSignature: "Momo Signature",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Marca de Água",
                    description: "Texto personalizado da marca de água (máx. 32 caracteres)"
                },
                grayscale: {
                    label: "Escala de Cinzas",
                    description: "Ativar escala de cinzas por padrão"
                },
                showWatermark: {
                    label: "Mostrar Marca de Água",
                    description: "Mostrar marca de água por padrão"
                },
                saveAsGif: {
                    label: "Guardar como GIF",
                    description: "Guardar como GIF por padrão"
                }
            },
            text: {
                quotePreview: "Pré-visualização da citação"
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Adiciona um botão perto do botão de Silenciar para entrar numa chamada de voz aleatória.",
            tooltip: "Voz Aleatória",
            context: {
                label: "Modificador de estado de voz",
                amountLabel: "QUANTIDADE DE UTILIZADORES",
                spacesLabel: "LUGARES LIVRES",
                voiceLabel: "LIMITE DE VOZ",
                selfLabel: "DEFINIÇÕES PRÓPRIAS",
                select: {
                    servers: "Selecionar Servidores",
                    list: "Selecionar Lista",
                    filters: "Selecionar Filtros",
                    amount: "Qtd. Utilizadores",
                    userAmount: "{{amount}} utilizador(es)",
                    parameters: "Parâmetros",
                    selectAll: "Selecionar Tudo",
                    reset: "Repor",
                    stateFilters: "Filtros de Estado",
                    moreThan: "Mais que",
                    lessThan: "Menos que",
                    equalTo: "Igual a",
                    spaces: "Lugares Livres",
                    voice: "Limite de Voz"
                },
                filter: {
                    muted: "Silenciados",
                    deafened: "Ensurdecidos",
                    camera: "Câmara",
                    stream: "Stream",
                    includeFilters: "Incluir Filtros",
                    avoidFilters: "Evitar Filtros"
                },
                reset: {
                    list: "Repor Lista"
                },
                voice: {
                    label: "Opções de Voz",
                    joinSettings: "Definições de Participação",
                    auto: {
                        mute: "Silenciar Auto.",
                        deafen: "Ensurdecer Auto.",
                        camera: "Câmara Auto.",
                        stream: "Stream Auto.",
                        leaveWhenEmpty: "Sair quando Vazio",
                        navigate: "Navegação Auto.",
                        stage: "Evitar Palcos",
                        afk: "Evitar AFK"
                    }
                },
                invalid: {
                    server: "Servidor inválido"
                }
            },
            keybind: {
                label: "Atalho de teclado",
                recording: "A gravar...",
                reset: "Repor"
            },
            option: {
                keybindEnabled: {
                    label: "Atalho ativado",
                    description: "Mostra os controlos do atalho de voz aleatória"
                },
                userAmountOperation: {
                    label: "Operação de Quantidade de Utilizadores",
                    description: "Seleciona uma operação para as quantidades de utilizadores"
                },
                userAmount: {
                    label: "Quantidade de Utilizadores",
                    description: "Seleciona a quantidade de utilizadores"
                },
                spacesLeftOperation: {
                    label: "Operação de Lugares Livres",
                    description: "Seleciona uma operação para as quantidades máximas de utilizadores"
                },
                spacesLeft: {
                    label: "Lugares Livres",
                    description: "Seleciona a quantidade de utilizadores máximos"
                },
                vcLimitOperation: {
                    label: "Operação de Limite de Canal de Voz",
                    description: "Seleciona uma operação para o canal de voz."
                },
                vcLimit: {
                    label: "Limite de Canal de Voz",
                    description: "Seleciona um limite de canal de voz"
                },
                servers: {
                    label: "Servidores",
                    description: "Servidores que estão incluídos"
                },
                autoNavigate: {
                    label: "Navegação Automática",
                    description: "Navega automaticamente para o canal de voz."
                },
                autoCamera: {
                    label: "Câmara Automática",
                    description: "Liga automaticamente a câmara"
                },
                autoStream: {
                    label: "Stream Automática",
                    description: "Liga automaticamente a stream"
                },
                selfMute: {
                    label: "Silenciar Automaticamente",
                    description: "Silencia automaticamente o teu microfone ao entrar num canal de voz."
                },
                selfDeafen: {
                    label: "Ensurdecer Automaticamente",
                    description: "Ensurdece automaticamente o teu áudio ao entrar num canal de voz."
                },
                leaveEmpty: {
                    label: "Sair quando Vazio",
                    description: "Procura uma chamada aleatória quando o chat de voz estiver vazio."
                },
                prioritizeFriends: {
                    label: "Priorizar amigos",
                    description: "Preferir canais com os teus amigos neles quando possível."
                },
                avoidStages: {
                    label: "Evitar Palcos",
                    description: "Evita entrar em canais de voz de palco (stage)."
                },
                avoidAfk: {
                    label: "Evitar AFK",
                    description: "Evita entrar em canais de voz de AFK."
                },
                video: {
                    label: "Vídeo",
                    description: "Procura utilizadores com o vídeo ligado"
                },
                stream: {
                    label: "Stream",
                    description: "Procura utilizadores que estejam a transmitir"
                },
                mute: {
                    label: "Silenciado",
                    description: "Procura utilizadores que estejam silenciados"
                },
                deafen: {
                    label: "Ensurdecido",
                    description: "Procura utilizadores que estejam ensurdecidos"
                },
                includeStates: {
                    label: "Incluir Filtros",
                    description: "Opção para incluir estados"
                },
                avoidStates: {
                    label: "Evitar Filtros",
                    description: "Opção para evitar estados"
                }
            },
            alert: {
                failed: "Falha ao encontrar um Canal de Voz!"
            },
            toast: {
                failedToFindA: "Falha ao encontrar um canal de voz.",
                voiceChannelIsUnavailable: "O canal de voz está indisponível."
            },
            text: {
                userCount: "{{count}} utilizador",
                usersCount: "{{count}} utilizadores"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Descodifica os códigos de erro do React em mensagens compreensíveis para humanos."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Lê todas as notificações de servidores com um único clique!",
            button: "Ler Tudo"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Alterna com Ctrl+Tab entre as DMs mais recentes (Ctrl+Shift+Tab para o inverso)",
            option: {
                visualStyle: {
                    label: "Estilo Visual",
                    description: "Estilo do indicador visual durante a alternância",
                    overlay: "Sobreposição (estilo Alt+Tab)",
                    toast: "Toast (mensagem de estado)",
                    off: "Desligado"
                },
                overlayMode: {
                    label: "Modo de Sobreposição",
                    description: "Conteúdo da sobreposição",
                    row: "Linha de recentes",
                    current: "Apenas o atual",
                },
                amountOfUsers: {
                    label: "Quantidade de Utilizadores",
                    description: "Número de utilizadores a mostrar na sobreposição"
                },
                overlayRowLength: {
                    label: "Comprimento da Linha de Sobreposição",
                    description: "Número de DMs recentes a mostrar na linha"
                },
                overlayShowAvatars: {
                    label: "Mostrar Avatares na Sobreposição",
                    description: "Mostra os avatares dos utilizadores na sobreposição"
                },
                toastDurationMs: {
                    label: "Duração do Toast (ms)",
                    description: "Duração da mensagem de estado"
                },
                clearRdms: {
                    label: "Limpar Lista RDMS",
                    description: "Utilitário de teste: Limpar lista RDMs",
                    toast: "Histórico do RDMS limpo",
                    button: "Limpar Histórico RDMs"
                }
            },
            modal: {
                unknown: "Desconhecido",
                dm: "DM",
                group: "DM de Grupo",
                channel: "Canal",
                switchingTo: "A mudar para: {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Notifica-te quando um amigo, chat de grupo ou servidor te remove.",
            option: {
                notices: {
                    label: "Avisos",
                    description: "Mostra também um aviso no topo do ecrã quando fores removido (usa isto se não quiseres perder nenhuma notificação)."
                },
                offlineRemovals: {
                    label: "Remoções Offline",
                    description: "Notifica-te ao iniciar o Discord se foste removido enquanto estavas offline."
                },
                friends: {
                    label: "Amigos",
                    description: "Notificar quando um amigo te remove"
                },
                friendRequestCancels: {
                    label: "Cancelamentos de Pedidos de Amizade",
                    description: "Notificar quando um pedido de amizade é cancelado"
                },
                servers: {
                    label: "Servidores",
                    description: "Notificar quando fores removido de um servidor"
                },
                groups: {
                    label: "Grupos",
                    description: "Notificar quando fores removido de um chat de grupo"
                }
            },
            notification: {
                removedFriend: "{{user}} removeu-te da lista de amigos.",
                cancelledFriendRequest: "Um pedido de amizade de {{user}} foi removido.",
                removedFromServer: "Foste removido do servidor {{server}}.",
                removedFromGroup: "Foste removido do grupo {{group}}.",
                noLongerGroup: "Já não estás no grupo {{group}}.",
                noLongerServer: "Já não estás no servidor {{server}}.",
                noLongerFriend: "Já não és amigo de {{user}}.",
                friendRequestRevoked: "O pedido de amizade de {{user}} foi revogado.",
                ok: "OK"
            },
            text: {
                relationshipNotifier: "Notificador de relações"
            }
        },
        remix: {
            name: "Remix",
            description: "Adiciona uma opção 'Remix' ao menu de clique direito do botão de carregamento de ficheiros. Esta opção abre uma imagem num editor simples e permite enviar a imagem editada diretamente para o chat.",
            label: "Remix",
            button: {
                send: "Enviar",
                close: "Fechar",
                brush: "Pincel",
                erase: "Borracha",
                crop: "Recortar",
                shape: "Forma",
                reset: "Repor",
                clear: "Limpar"
            },
            editor: {
                choose: "Escolher uma Imagem",
                browse: "Procurar",
                rectangle: "Retângulo",
                ellipse: "Elipse",
                line: "Linha",
                arrow: "Seta",
                fill: "Preenchimento",
                image: "Imagem"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Permite-te repetir mensagens rapidamente. Se segurares Shift ao clicar na opção Repetir, ele responderá à mensagem.",
            button: "Repetir (Clique) / Repetir e Responder (Shift + Clique)",
            context: {
                repeat: "Repetir",
                repeatAndReply: "Repetir e Responder"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Substitui a pesquisa do Google por diferentes motores de busca.",
            option: {
                customEngineName: {
                    label: "Nome do Motor Personalizado",
                    description: "Nome do motor de busca personalizado"
                },
                customEngineURL: {
                    label: "URL do Motor Personalizado",
                    description: "O URL do teu motor de busca"
                },
                replacementEngine: {
                    label: "Motor de Substituição",
                    description: "Substituir por um motor específico em vez de adicionar um menu",
                    off: "Desligado",
                    custom: "Motor Personalizado",
                }
            },
            context: {
                label: "Pesquisar Texto",
                searchWith: "Pesquisar com {{name}}"
            },
            text: {
                google: "Google"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Controla se queres receber sempre ou nunca menções nas respostas a mensagens, com funcionalidades de lista de permissões e de bloqueio",
            option: {
                replyPingBlacklist: {
                    label: "Lista de bloqueio de menções em respostas",
                    description: "Lista separada por vírgulas de IDs de utilizador para nunca receberes menções de resposta deles"
                },
                alwaysPingOnReply: {
                    label: "Mencionar Sempre em Respostas",
                    description: "Receber sempre uma menção quando alguém responde às tuas mensagens"
                },
                replyPingWhitelist: {
                    label: "Lista Branca de Respostas",
                    description: "Lista de IDs de utilizadores (separada por vírgulas) de quem deves sempre receber menções em respostas"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Mostra um carimbo de data/hora nas pré-visualizações de mensagens respondidas"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Revela todos os spoilers numa mensagem ao clicar com Ctrl num spoiler, ou no chat com Ctrl+Shift+clique"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Adiciona a Pesquisa de Imagem aos menus de contexto de imagens",
            context: {
                label: "Pesquisar Imagem",
                all: "Pesquisar Tudo"
            },
            text: {
                all: "Todos"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Avalia outros utilizadores (Adiciona uma nova secção aos perfis)",
            notification: {
                newReview: "Tens novas avaliações no teu perfil!",
                auth: {
                    error: "Ocorreu um erro durante a autorização",
                    successfully: "Sessão iniciada com sucesso!",
                    failed: "Falha ao autorizar",
                    review: "Por favor, autoriza para adicionar uma avaliação.",
                    opening: "A abrir janela de autorização...",
                    need: "Precisas de autorizar para avaliar utilizadores!"
                },
                error: {
                    fast: "Estás a enviar pedidos demasiado depressa. Espera alguns segundos e tenta novamente.",
                    fetching: "Ocorreu um erro ao obter avaliações.",
                    action: {
                        failed: "Falha ao {{action}} utilizador",
                        success: "Utilizador {{action}} com sucesso"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Tens a certeza?",
                    description: "Queres mesmo eliminar esta avaliação?",
                    confirm: "Eliminar",
                    cancel: "Esquece lá isso",
                    error: "Precisas de ter a sessão iniciada para eliminar avaliações.",
                },
                report: {
                    title: "Tens a certeza?",
                    description: "Queres mesmo denunciar esta avaliação?",
                    confirm: "Denunciar",
                    cancel: "Esquece lá isso",
                    error: "Precisas de ter a sessão iniciada para denunciar avaliações.",
                },
                block: {
                    title: "Tens a certeza?",
                    description: "Queres mesmo bloquear este utilizador? Não verás mais as suas avaliações.",
                    confirm: "Bloquear",
                    cancel: "Esquece lá isso",
                    error: "Precisas de ter a sessão iniciada para bloquear utilizadores.",
                },
                blocked: {
                    title: "Utilizadores Bloqueados",
                    auth: "Não tens a sessão iniciada no ReviewDB!",
                    noBlocked: "Nenhum utilizador bloqueado.",
                    fetch: "Ocorreu um erro ao obter utilizadores bloqueados."
                },
                reviews: {
                    title: " Avaliações de",
                    noUser: "Parece que ninguém avaliou este utilizador ainda. Podes ser o primeiro!",
                    noServer: "Parece que ninguém avaliou este servidor ainda. Podes ser o primeiro!"
                }
            },
            button: {
                appeal: "Recorrer",
                ok: "OK",
                more: "Ler mais",
                reply: "Responder a @{{user}}",
                update: "Atualizar avaliação para @{{user}}",
                review: "Avaliar @{{user}}"
            },
            context: {
                view: "Ver Avaliações",
                blocked: "Bloqueaste este utilizador",
                delete: "Eliminar Avaliação",
                report: "Denunciar Avaliação",
                block: "Bloquear Utilizador",
                unblock: "Desbloquear Utilizador",
                reply: "Responder à Avaliação"
            },
            option: {
                authorize: {
                    label: "Autorizar",
                    button: "Autorizar com ReviewDB"
                },
                notifyReviews: {
                    label: "Notificar Avaliações",
                    description: "Notificar sobre novas avaliações ao iniciar"
                },
                showWarning: {
                    label: "Mostrar Aviso",
                    description: "Exibir aviso de respeito no topo da lista de avaliações"
                },
                hideTimestamps: {
                    label: "Ocultar Carimbos de Tempo",
                    description: "Ocultar data/hora nas avaliações"
                },
                hideBlockedUsers: {
                    label: "Ocultar Utilizadores Bloqueados",
                    description: "Ocultar avaliações de utilizadores bloqueados"
                },
                buttons: {
                    label: "Botões",
                    manageBlocked: "Gerir Utilizadores Bloqueados",
                    support: "Apoiar o desenvolvimento do ReviewDB",
                    website: "Website do ReviewDB",
                    server: "Servidor de Suporte do ReviewDB"
                }
            },
            profile: {
                optedOut: "Utilizador recusou",
                noReviews: "Sem análises ainda"
            },
            toast: {
                youCannotVoteOn: "Não podes votar na tua própria avaliação.",
                networkErrorFailedTo: "Erro de rede: falha ao ligar ao ReviewDB.",
                pleaseAuthorizeToVote: "Autoriza para votar em avaliações.",
                requestFailed: "ReviewDB: a solicitação falhou com o status {{status}}"
            },
            text: {
                ok: "OK",
                updateReviewFor: "Atualizar avaliação de @{{name}}",
                reviewUser: "Avaliar @{{name}}",
                system: "Sistema",
                reviewCount: "({{count}} avaliações)"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Renderiza links magnet como se fossem links de mensagens",
            unknown: "nome de ficheiro desconhecido"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Adiciona a cor do cargo mais alto em todos os locais possíveis",
            option: {
                chatMentions: {
                    label: "Menções no Chat",
                    description: "Mostrar cores dos cargos nas menções do chat (incluindo na caixa de mensagem)"
                },
                memberList: {
                    label: "Lista de Membros",
                    description: "Mostrar cores dos cargos nos cabeçalhos da lista de membros"
                },
                voiceUsers: {
                    label: "Utilizadores de Voz",
                    description: "Mostrar cores dos cargos na lista de utilizadores de chat de voz"
                },
                reactorsList: {
                    label: "Lista de Reações",
                    description: "Mostrar cores dos cargos na lista de quem reagiu"
                },
                pollResults: {
                    label: "Resultados da Votação",
                    description: "Mostrar cores dos cargos nos resultados das votações"
                },
                colorChatMessages: {
                    label: "Colorir Mensagens de Chat",
                    description: "Colorir as mensagens de chat baseando-se na cor do cargo do autor"
                },
                messageSaturation: {
                    label: "Saturação da Mensagem",
                    description: "Intensidade da coloração da mensagem"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Edita o tipo e conteúdo de qualquer Rich Presence",
            option: {
                replacedAppIds: {
                    label: "IDs de Apps Substituídos",
                }
            },
            modal: {
                tutorial: {
                    title: "IDs de atividades atualmente em execução",
                    noRunning: "Nenhuma atividade em execução",
                    available: "Variáveis disponíveis",
                    variableText: "Em todos os campos (exceto URL de stream), podes colocar variáveis que serão automaticamente substituídas pelo conteúdo original:",
                    more: "Mais detalhes",
                    details: {
                        leave: "Deixa um campo vazio para o manter como está.",
                        set: "Define um campo como 'null' para o ocultar na presença.",
                        reload: "Poderás precisar de recarregar o Discord para as alterações serem aplicadas."
                    }
                },
                settings: {
                    applyEdits: "Aplicar edições à app",
                    addNewApp: "Adicionar nova aplicação",
                    appId: "ID da Aplicação",
                    invalidAppId: "ID de aplicação inválido",
                    newActivityType: "Novo tipo de atividade",
                    activityTypes: {
                        playing: "A jogar",
                        watching: "A ver",
                        listening: "A ouvir",
                        competing: "A competir",
                        streaming: "A transmitir"
                    },
                    streamUrl: "URL da Stream (deve ser YouTube ou Twitch)",
                    invalidStreamUrl: "URL de stream inválido",
                    newName: "Novo nome",
                    newDetails: "Novos detalhes",
                    newState: "Novo estado",
                    largeImage: "Imagem grande",
                    smallImage: "Imagem pequena",
                    text: "Texto",
                    url: "URL",
                    firstLine: "(primeira linha)",
                    secondLine: "(segunda linha)",
                    thirdLine: "(terceira linha)",
                    alsoThirdLine: "(também terceira linha)",
                    hideAssets: "Ocultar ativos (imagens grande e pequena)",
                    hideTimestamps: "Ocultar timestamps"
                }
            },
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "Exportar URLs de GIFs favoritos",
            toolbox: "Guardar GIFs Favoritos",
            title: "Guardar GIFs Favoritos",
            command: {
                savegifs: {
                    description: "Guardar todos os URLs de GIFs favoritos num ficheiro de texto"
                },
                saveworkinggifs: {
                    description: "Testar todos os GIFs favoritos e guardar apenas os que ainda funcionam"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Mostrar Botão na Toolbox",
                    description: "Mostrar o botão 'Guardar GIFs Favoritos' na Plexcord Toolbox (Requer Recarregar)"
                }
            },
            toast: {
                save: "GIFs guardados com sucesso como {{filename}}",
                failed: "Falha ao guardar GIFs",
                no: "Nenhum GIF favorito encontrado!",
                testing: "A testar {{count}} GIFs, isto pode demorar um momento...",
                noneWorking: "Nenhum dos teus GIFs guardados parece estar a funcionar.",
                saved: "Filtrados {{broken}} GIFs possivelmente quebrados. Guardados {{saved}} GIFs funcionais."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Agendar mensagens para serem enviadas numa hora específica ou após um atraso.",
            toolbox: {
                toggle: "Ver Mensagens Agendadas"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Máximo de Mensagens Por Minuto",
                    description: "Máximo de mensagens agendadas por canal que podem ser enviadas no mesmo minuto."
                },
                checkIntervalSeconds: {
                    label: "Intervalo de Verificação (Segundos)",
                    description: "Frequência com que o plugin verifica se há mensagens para enviar."
                },
                showNotifications: {
                    label: "Mostrar Notificações",
                    description: "Mostrar notificações toast quando as mensagens são enviadas."
                },
                showPhantomMessages: {
                    label: "Mostrar Mensagens Fantasma",
                    description: "Mostrar mensagens agendadas como mensagens fantasma no chat."
                }
            },
            channelType: {
                unknown: "Desconhecido",
                dm: "DM",
                groupDm: "DM de Grupo",
                channel: "Canal"
            },
            toast: {
                messageSent: "Mensagem agendada enviada para {{channel}}",
                messageFailed: "Falha ao enviar mensagem agendada",
                maxMessagesReached: "Limite de {{max}} mensagens por canal por minuto atingido",
                messageScheduled: "Mensagem agendada!",
                messageRemoved: "Mensagem agendada removida",
                allCleared: "Todas as mensagens agendadas foram limpas",
                scheduledMessageSentTo: "Mensagem agendada enviada para {{name}}"
            },
            button: {
                tooltipOn: "Modo Agendamento ATIVADO (clica para desativar, botão direito para a lista)",
                tooltipOff: "Modo Agendamento DESATIVADO (clica para ativar, botão direito para a lista)"
            },
            accessory: {
                scheduledFor: "Agendada para {date}{timeLeft}",
                remaining: {
                    days: "faltam {{days}}d {{hours}}h",
                    hours: "faltam {{hours}}h {{minutes}}m",
                    minutes: "faltam {{minutes}}m"
                }
            },
            scheduleModal: {
                title: "Agendar Mensagem",
                schedulingFor: "A agendar para: {{channel}}",
                scheduleType: "Tipo de Agendamento",
                delay: "Atraso",
                specificTime: "Hora Específica",
                delayMinutes: "Atraso (minutos)",
                dateTime: "Data e Hora",
                error: {
                    invalidDelay: "Por favor, insere um atraso válido (mínimo 1 minuto)",
                    invalidDateTime: "Por favor, seleciona uma data e hora futura"
                },
                schedule: "Agendar",
                cancel: "Cancelar"
            },
            viewModal: {
                title: "Mensagens Agendadas",
                clearAll: "Limpar Tudo",
                noMessages: "Nenhuma mensagem agendada",
                delete: "Eliminar",
                close: "Fechar"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Corrige o irritante erro 'Deixámos cair a lupa!'.",
            notPerfect: "Esta correção não é perfeita, por isso poderás ter de recarregar a barra de pesquisa para resolver problemas.",
            paragraph1: "O Discord apenas permite um desfasamento (offset) máximo de 5000 (é isto que causa o erro da lupa).",
            paragraph2: "Isto significa que apenas podes ver precisamente 5000 mensagens para o passado e 5000 para o futuro (ao ordenar por antigas).",
            paragraph3: "Este plugin simplesmente alterna para o método de ordenação oposto para tentar contornar a restrição do Discord,",
            paragraph4: "mas se houver um resultado de pesquisa muito grande e tentares ver uma mensagem que é inalcançável por ambos os métodos,",
            paragraph5: "o plugin irá simplesmente mostrar o offset 0 (ou a mensagem mais recente ou a mais antiga, dependendo da ordenação)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Reproduzir sempre a versão secreta do toque do Discord (exceto durante eventos especiais de toques)",
            option: {
                onlySnow: {
                    label: "Apenas Durante o Evento Snow Ringtone",
                    description: "Reproduzir apenas o tema Snow Halation"
                }
            }
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Envia carimbos de data/hora facilmente através de um botão na caixa de chat e atalhos de texto. Lê a descrição detalhada!",
            sample: {
                paragraph1: "Para enviar rapidamente carimbos apenas de hora, inclui horas formatadas como `HH:MM` (incluindo as crases!) na tua mensagem",
                paragraph2: "Vê abaixo os exemplos.\nSe precisares de algo mais específico, usa o botão de Data na barra de chat!",
                examples: "Exemplos:"
            },
            modal: {
                title: "Seletor de Data/Hora",
                light: "Claro",
                dark: "Escuro",
                format: "Formato do Carimbo",
                preview: "Pré-visualização",
                insert: "Inserir",
                insertTimestamp: "Inserir Data/Hora"
            },
            option: {
                replaceMessageContents: {
                    label: "Substituir Conteúdo da Mensagem",
                    description: "Substituir carimbos de data/hora no conteúdo das mensagens"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Permite-te visualizar informações sobre um servidor",
            context: {
                serverInfo: "Info do Servidor"
            },
            option: {
                sorting: {
                    label: "Ordenação",
                    description: "Nome de utilizador ou, se aplicável, Nome de Exibição",
                    username: "Nome de Utilizador",
                    displayname: "Nome de Exibição",
                    none: "Não Ordenar"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Info do Servidor",
                    friends: "Amigos",
                    mutualUsers: "Utilizadores Comuns",
                    blockedUsers: "Utilizadores Bloqueados",
                    ignoredUsers: "Utilizadores Ignorados"
                },
                owner: "Dono do Servidor",
                loading: "A carregar...",
                createdAt: "Criado em",
                joinedAt: "Entrou em",
                vanityLink: "Link Personalizado",
                preferredLocale: "Idioma Preferido",
                verification: {
                    level: "Nível de Verificação",
                    none: "Nenhum",
                    low: "Baixo",
                    medium: "Médio",
                    high: "Alto",
                    highest: "Extremo"
                },
                serverBoosts: "Impulsos do Servidor",
                channels: "Canais",
                roles: "Cargos",
                boostLevel: "{{count}} (Nível {{level}})"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Adiciona a contagem de amigos online ou de servidores na lista de servidores",
            friends: "Amigos",
            servers: "Servidores",
            option: {
                mode: {
                    label: "Modo",
                    description: "Modo a exibir na lista de servidores",
                    friend: "Apenas contagem de amigos online",
                    server: "Apenas contagem de servidores",
                    both: "Ambas as contagens (servidores e amigos online)"
                },
                useCompact: {
                    label: "Usar Modo Compacto",
                    description: "Faz com que o indicador apareça apenas com texto"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Navega melhor pelos teus servidores com um botão de pesquisa rápida",
            tooltip: "Procurar"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Traz blocos de código estilo VS Code para o Discord, alimentados pelo Shiki",
            option: {
                theme: {
                    label: "Tema",
                    description: "Temas padrão"
                },
                customTheme: {
                    label: "Tema Personalizado",
                    description: "Um link para um tema personalizado do VS Code",
                    mustURL: "Deve ser um URL válido",
                    mustJSON: "Deve ser um ficheiro JSON"
                },
                tryDiscordHighlighter: {
                    label: "Experimentar o destacador do Discord",
                    description: "Usar o realçador e tema padrão mais leve do Discord.",
                    never: "Nunca",
                    secondary: "Preferir Shiki em vez do destacador do Discord",
                    primary: "Preferir o destacador do Discord em vez do Shiki",
                    always: "Sempre"
                },
                useDevIcon: {
                    label: "Usar Devicon para Ícones de Linguagem",
                    description: "Como mostrar ícones de linguagem nos blocos de código",
                    disabled: "Desativado",
                    colorless: "Sem cor",
                    colored: "Colorido"
                },
                bgOpacity: {
                    label: "Opacidade do Fundo",
                    description: "Opacidade do fundo"
                },
                ignoredLanguages: {
                    label: "Linguagens ignoradas",
                    description: "Lista separada por vírgulas de linguagens a deixar para os blocos de código predefinidos do Discord"
                }
            },
            button: {
                copy: "Copiar",
                copied: "Copiado!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Mostrar sempre todos os botões de mensagem, independentemente de estares a segurar a tecla Shift ou não.",
            option: {
                noShiftDelete: {
                    label: "Eliminar Sem Shift",
                    description: "Remove a necessidade de segurar Shift para eliminar uma mensagem."
                },
                noShiftPin: {
                    label: "Fixar Sem Shift",
                    description: "Remove a necessidade de segurar Shift para fixar uma mensagem."
                },
                noQuickReacts: {
                    description: "Ocultar reações rápidas. Por predefinição, mostrar o menu completo oculta os botões de reação rápida.",
                    label: "Sem reações rápidas"
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Mostra os emblemas do autor da mensagem ao lado do seu nome no chat.",
            option: {
                showPlexcordDonor: {
                    label: "Mostrar Emblema de Doador Plexcord",
                    description: "Ativar para mostrar emblemas de Doador Plexcord no chat."
                },
                plexcordDonorPosition: {
                    label: "Posição do Emblema de Doador Plexcord",
                    description: "A posição dos emblemas de Doador Plexcord."
                },
                showPlexcordContributor: {
                    label: "Mostrar Emblema de Colaborador Plexcord",
                    description: "Ativar para mostrar emblemas de Colaborador Plexcord no chat."
                },
                plexcordContributorPosition: {
                    label: "Posição do Emblema de Colaborador Plexcord",
                    description: "A posição dos emblemas de Colaborador Plexcord."
                },
                showDiscordProfile: {
                    label: "Mostrar Emblemas de Perfil do Discord",
                    description: "Ativar para mostrar os emblemas de perfil do Discord no chat."
                },
                discordProfilePosition: {
                    label: "Posição dos Emblemas de Perfil do Discord",
                    description: "A posição dos emblemas de perfil do Discord."
                },
                showDiscordNitro: {
                    label: "Mostrar Emblema de Discord Nitro",
                    description: "Ativar para mostrar emblemas de Discord Nitro no chat."
                },
                discordNitroPosition: {
                    label: "Posição do Emblema de Discord Nitro",
                    description: "A posição dos emblemas de Discord Nitro."
                },
                badgeSettings: {
                    label: "Definições de Emblemas",
                    description: "Configura a posição de outros emblemas mostrados no chat.",
                    modal: "Arrasta os emblemas para os reordenar; podes clicar para ativar/desativar um tipo de emblema específico."
                }
            },
            badge: {
                plexcord: "Emblema de doador Plexcord",
                contributor: "Emblema de colaborador Plexcord",
                discordProfile: "Emblemas de perfil do Discord (HypeSquad, Staff, Programador Ativo, etc.)",
                nitro: "Emblema Nitro",
                staff: "Staff do Discord",
                partner: "Dono de Servidor Parceiro",
                events: "Eventos HypeSquad",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                bugHunter: "Discord Bug Hunter",
                earlyVerifiedBotDeveloper: "Programador de Bots Verificado Antigo",
                earlySupporter: "Apoiante Antigo",
                moderatorProgram: "Ex-aluno do Programa de Moderadores"
            },
            modal: {
                plexcordContributor: "Colaborador Plexcord",
                discordNitro: "Discord Nitro",
                basic: "Basic",
                classic: "Classic"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Mostrar contas associadas nos popouts de utilizador e na barra lateral de mensagens diretas",
            option: {
                iconSize: {
                    label: "Tamanho do Ícone",
                    description: "Tamanho do ícone (px)"
                },
                iconSpacing: {
                    label: "Espaçamento dos Ícones",
                    description: "Margem do ícone",
                    compact: "Compacto",
                    cozy: "Agradável",
                    roomy: "Espaçoso"
                },
                showGithubOrgs: {
                    description: "Mostrar organizações do GitHub de que o utilizador é membro",
                    label: "Mostrar organizações do GitHub"
                },
                showOnModal: {
                    description: "Mostrar contas associadas na janela de perfil completa",
                    label: "Mostrar na janela"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Mostrar canais aos quais não tens permissão de acesso para visualizar.",
            tooltip: "Canal Oculto",
            option: {
                channelStyle: {
                    label: "Estilo do Canal",
                    description: "O estilo usado para exibir canais ocultos.",
                    classic: "Clássico",
                    muted: "Silenciado",
                    showUnreads: "Mostrar Não Lidas",
                    mutedWithUnreads: "Silenciado e Mostrar Não Lidas"
                },
                showMode: {
                    label: "Modo de Exibição",
                    description: "O modo usado para exibir canais ocultos.",
                    lock: "Estilo simples com ícone de Cadeado",
                    hidden: "Estilo silenciado com ícone de olho oculto à direita",
                    lockIconRight: "Ícone de cadeado à direita"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Estado Padrão do Menu de Utilizadores/Cargos Permitidos",
                    description: "Se o menu de utilizadores e cargos permitidos em canais ocultos deve estar aberto por padrão"
                }
            },
            channelType: {
                text: "texto",
                announcement: "anúncios",
                forum: "fórum",
                voice: "voz",
                stage: "palco"
            },
            sortOrder: {
                latestActivity: "Atividade Recente",
                creationDate: "Data de Criação"
            },
            forumLayout: {
                default: "Não definido",
                list: "Vista de lista",
                grid: "Vista de galeria"
            },
            videoQuality: {
                auto: "Automático",
                full: "720p"
            },
            modal: {
                hidden: "oculto",
                locked: "bloqueado",
                threads: "tópicos",
                posts: "publicações",
                messages: "mensagens",
                post: "publicação",
                message: "mensagem",
                unknown: "desconhecido",
                permissionDetails: "Detalhes de Permissões",
                thisIsA: "Isto é um canal de {{channelType}} {{status}}",
                canNotSee: "Não podes ver as {{type}} deste canal.",
                guidelines: "No entanto, podes ver as suas diretrizes:",
                lastCreated: "Última {{type}} criada:",
                lastPin: "Última mensagem fixada:",
                threadSlowmode: "Modo lento de tópicos padrão:",
                slowmode: "Modo lento:",
                bitrate: "Bitrate:",
                region: "Região:",
                automatic: "Automático",
                videoQuality: "Modo de Qualidade de Vídeo:",
                inactiveArchiveDuration: "Duração de inatividade padrão antes de arquivar {{type}}",
                defaultLayout: "Layout padrão:",
                defaultSort: "Ordenação padrão:",
                defaultReaction: "Emoji de reação padrão:",
                requireTag: "As publicações neste fórum requerem uma etiqueta.",
                availableTags: "Etiquetas Disponíveis:",
                allowedUsersAndRoles: "Utilizadores e cargos permitidos:",
                hideAllowedUsersAndRoles: "Ocultar Utilizadores e Cargos Permitidos",
                viewAllowedUsersAndRoles: "Ver Utilizadores e Cargos Permitidos"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Exibe várias coisas ocultas e exclusivas de moderadores, independentemente das permissões.",
            option: {
                showTimeouts: {
                    label: "Mostrar Castigos no Chat",
                    description: "Mostrar ícones de castigo (timeout) de membros no chat."
                },
                showInvitesPaused: {
                    label: "Mostrar Convites Pausados",
                    description: "Mostrar o aviso de convites pausados na lista de servidores."
                },
                showModView: {
                    label: "Mostrar Vista de Mod",
                    description: "Mostrar a opção de menu de contexto 'Vista de Moderador' em todos os servidores."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Adiciona uma opção no menu de contexto para mostrar incorporações (embeds) em links que não as têm",
            context: {
                embed: {
                    show: "Mostrar Incorporação",
                    hide: "Remover Incorporação"
                }
            },
            error: {
                failed: "Falha ao obter incorporação",
                noEmbed: "Nenhuma incorporação encontrada"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Exibe qualquer permutação de alcunhas personalizadas, alcunhas de amigos, alcunhas de servidor, nomes de exibição e nomes de utilizador no chat.",
            option: {
                messages: {
                    label: "Mensagens",
                    description: "Exibir formato de nome personalizado nas mensagens."
                },
                replies: {
                    label: "Respostas",
                    description: "Exibir formato de nome personalizado nas respostas."
                },
                mentions: {
                    label: "Menções",
                    description: "Exibir formato de nome personalizado nas menções."
                },
                typingIndicator: {
                    label: "Indicador de Escrita",
                    description: "Exibir o primeiro nome disponível do teu formato personalizado no indicador de escrita."
                },
                memberList: {
                    label: "Lista de Membros",
                    description: "Mostrar o primeiro nome disponível do teu formato de nome personalizado na lista de membros, de MPs, de amigos e em Ativo agora."
                },
                profilePopout: {
                    label: "Popout de Perfil",
                    description: "Exibir o primeiro nome disponível do teu formato personalizado nos popouts de perfil."
                },
                voiceChannels: {
                    label: "Canais de Voz",
                    description: "Exibir o primeiro nome disponível do teu formato personalizado nos canais de voz."
                },
                reactions: {
                    label: "Reações",
                    description: "Exibir o primeiro nome disponível nas dicas de ferramentas (tooltips) de reações e o nome completo nos popouts de reações."
                },
                discriminators: {
                    label: "Discriminadores",
                    description: "Anexar discriminadores (#0000) aos nomes de utilizador de bots. Os discriminadores foram descontinuados para utilizadores, mas continuam ativos para bots para evitar duplicados."
                },
                hideDefaultAtSign: {
                    label: "Ocultar Símbolo '@' Padrão",
                    description: "Ocultar o símbolo '@' antes do nome em menções e respostas. Só se aplica se uma das funcionalidades estiver ativa."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Truncar Todos os Nomes com Modo Streamer",
                    description: "Truncar todos os nomes, não apenas os de utilizador, enquanto o Modo Streamer estiver ativo."
                },
                removeDuplicates: {
                    label: "Remover Duplicados",
                    description: "Se algum dos nomes for equivalente, remove-os, deixando apenas nomes únicos."
                },
                ignoreFonts: {
                    label: "Ignorar Fontes",
                    description: "Para o segundo, terceiro e quarto nomes, usar a fonte 'gg sans' independentemente da fonte personalizada do utilizador."
                },
                ignoreGradients: {
                    label: "Ignorar Gradientes",
                    description: "Para nomes não primários, se o cargo tiver um gradiente, usar apenas a cor primária."
                },
                animateGradients: {
                    label: "Animar Gradientes",
                    description: "Se o cargo tiver um gradiente, animá-lo para os nomes secundários. Desativado por 'Ignorar Gradientes' ou redução de movimento."
                },
                nameSeparator: {
                    label: "Separador de Nomes",
                    description: "O separador a usar entre os nomes. O padrão é um espaço simples."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Nome de Amigo Apenas em Mensagens Diretas",
                    description: "Exibir apenas nomes de amigos quando estiver em DMs, e não em servidores."
                },
                customNameOnlyInDirectMessages: {
                    label: "Nome Personalizado Apenas em Mensagens Diretas",
                    description: "Exibir apenas nomes personalizados quando estiver em DMs, e não em servidores."
                },
                alwaysShowEffects: {
                    label: "Animar sempre os efeitos",
                    description: "Mostrar sempre efeitos como se estivesse a passar o cursor por cima."
                },
                includedNames: {
                    label: "Nomes Incluídos",
                    description: "A ordem para exibir nomes de utilizador, nomes de exibição, alcunhas e nomes de amigos. Usa os marcadores: {user}, {display}, {nick}, {friend}. Podes separar por vírgulas para definir suplentes."
                },
                customNameColor: {
                    label: "Cor de Nome Personalizado",
                    description: "A cor a usar para o nome personalizado que atribuíste a um utilizador."
                },
                friendNameColor: {
                    label: "Cor de Nome de Amigo",
                    description: "A cor a usar para a alcunha de um amigo."
                },
                nicknameColor: {
                    label: "Cor de Alcunha",
                    description: "A cor a usar para a alcunha de servidor."
                },
                displayNameColor: {
                    label: "Cor de Nome de Exibição",
                    description: "A cor a usar para o nome de exibição."
                },
                usernameColor: {
                    label: "Cor de Nome de Utilizador",
                    description: "A cor a usar para o nome de utilizador."
                },
                triggerNameRerender: {
                    label: "Forçar Re-renderização de Nomes",
                    description: "Força a atualização dos nomes ao alternar esta definição."
                },
                searchAutocomplete: {
                    description: "Mostrar o primeiro nome disponível do teu formato de nome personalizado no preenchimento automático de menções e pesquisa.",
                    label: "Preenchimento automático da pesquisa"
                },
                styleDirectMessagesList: {
                    description: "Mostrar efeitos de nome de apresentação em itens não selecionados sem passar o rato. Itens selecionados e sob o rato continuam estilizados quando desativado.",
                    label: "Estilizar lista de mensagens privadas"
                },
                styleDirectMessagesMessages: {
                    description: "Mostrar efeitos de nome de apresentação nos autores das mensagens sem passar o rato. Nomes sob o rato continuam estilizados quando desativado.",
                    label: "Estilizar mensagens nas MPs"
                },
                styleFriendsList: {
                    description: "Mostrar efeitos de nome de apresentação sem passar o rato. Itens sob o rato continuam estilizados quando desativado.",
                    label: "Estilizar lista de amigos"
                },
                styleActiveNow: {
                    description: "Mostrar efeitos de nome de apresentação sem passar o rato. Itens sob o rato continuam estilizados quando desativado.",
                    label: "Estilizar Ativo agora"
                },
                ignoreEffects: {
                    description: "Para nomes não principais, usar apenas a cor do cargo principal e omitir efeitos de nome de apresentação.",
                    label: "Ignorar efeitos"
                },
                animateEffects: {
                    description: "Animar gradientes de cargo e efeitos de nome de apresentação em nomes não principais. Isto é desativado por \"Ignorar efeitos\" e movimento reduzido.",
                    label: "Animar efeitos"
                },
                alwaysAnimateEffects: {
                    description: "Forçar a animação dos efeitos de nome de apresentação quando já estiverem visíveis, mesmo sem passar o rato.",
                    label: "Animar sempre os efeitos"
                },
                gradientGlow: {
                    description: "Adicionar um brilho aos gradientes animados de utilizador, tal como os gradientes de cargo do servidor brilham.",
                    label: "Brilho do gradiente"
                }
            },
            modal: {
                change: {
                    title: "Alterar Alcunha SMYN"
                },
                add: {
                    title: "Adicionar Alcunha SMYN"
                },
                setCustom: "Define uma alcunha SMYN personalizada para este utilizador. Usa {custom} nas definições de template do SMYN.",
                nickname: "Alcunha SMYN",
                reset: "Repor Alcunha SMYN",
                cancel: "Cancelar"
            },
            text: {
                save: "Guardar",
                unknown: "Desconhecido"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Mostra quanto tempo falta para terminar o castigo de um utilizador, quer na dica de ferramenta do ícone ou ao lado dele",
            option: {
                displayStyle: {
                    label: "Estilo de Exibição",
                    description: "Como exibir a duração do castigo",
                    tooltip: "Na Dica de Ferramenta (Tooltip)",
                    inline: "Ao lado do ícone de castigo"
                }
            },
            text: {
                timeoutRemaining: "de castigo restante"
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Mostra os canais que estão ocultos atrás dos recursos do servidor na lista de canais"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Mostra o nome da música em vez do artista na atividade do Spotify"
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Abre outro canal ou uma DM como uma barra lateral ou como um popout",
            toolbox: {
                label: "Abrir Chat Anterior"
            },
            context: {
                label: "Abrir Chat na Barra Lateral"
            },
            channelTitle: {
                chat: "Chat",
                dm: "DM"
            },
            modal: {
                switch: "Mudar de canal",
                popout: "Chat em popout",
                popoutClose: "Fechar chat em popout",
                popoutFor: "Chat em popout para {{channel}}",
                close: "Fechar chat lateral"
            },
            option: {
                persistSidebar: {
                    label: "Persistir Chat Lateral",
                    description: "Manter o chat lateral aberto mesmo após reiniciar o Discord"
                },
                persistPopoutWindows: {
                    label: "Persistir Chats em Popout",
                    description: "Restaurar chats em popout abertos após reiniciar o Discord"
                },
                popoutAlwaysOnTop: {
                    label: "Popout Sempre no Topo",
                    description: "Manter janelas de chat em popout acima de todas as outras."
                },
                patchCommunity: {
                    label: "Corrigir Comunidade",
                    description: "Corrige funcionalidades como o Navegador de Canais ou o separador de Membros que os servidores de comunidade possuem."
                },
                persistedPopoutWindowIds: {
                    description: "IDs de canal de chats em popout persistidos."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Texto final/assinatura automática",
            option: {
                name: {
                    label: "Nome",
                    description: "A assinatura que será adicionada ao fim das tuas mensagens"
                },
                textHeader: {
                    label: "Cabeçalho de Texto",
                    description: "Que cabeçalho colocar antes da assinatura"
                },
                showIcon: {
                    label: "Mostrar Ícone",
                    description: "Mostrar um ícone para alternar o plugin na barra de chat"
                },
                contextMenu: {
                    label: "Menu de Contexto",
                    description: "Adicionar opção para alternar a funcionalidade no menu de contexto da entrada de chat"
                },
                isEnabled: {
                    label: "Está Ativado",
                    description: "Alternar funcionalidade"
                }
            },
            tooltip: {
                enable: "Ativar Assinatura",
                disable: "Desativar Assinatura"
            },
            context: {
                enable: "Ativar Assinatura"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "Alternar a tua assinatura",
                    toogle: "Alternar a tua assinatura (o padrão é alternar)",
                    enabled: "Assinatura ativada",
                    disabled: "Assinatura desativada"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Adiciona um botão à barra de chat para alternar o envio de mensagens silenciosas.",
            option: {
                persistState: {
                    label: "Persistir Estado",
                    description: "Como persistir o estado de mensagem silenciosa",
                    none: "Não persistir (repor ao mudar de canal)",
                    channels: "Persistir entre canais",
                    restarts: "Persistir entre canais e reinicializações"
                },
                autoDisable: {
                    label: "Desativar Automático",
                    description: "Desativar automaticamente a opção de mensagem silenciosa após enviar uma"
                }
            },
            tooltip: {
                enable: "Ativar Mensagem Silenciosa",
                disable: "Desativar Mensagem Silenciosa"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Oculta o teu indicador de escrita no chat.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Oculta o teu indicador de escrita no chat.",
                    toggle: {
                        name: "alternar",
                        description: "Alternar funcionalidade globalmente, para o canal ou para o servidor.",
                        global: "Global",
                        channel: "Canal",
                        guild: "Servidor"
                    },
                    chatBarIndicator: {
                        name: "indicadorBarraChat",
                        description: "Ocultar indicadores de escrita de outros utilizadores acima da barra de chat."
                    },
                    membersListIndicator: {
                        name: "indicadorListaMembros",
                        description: "Ocultar indicadores de escrita de outros utilizadores na lista de membros."
                    },
                    chatIcon: {
                        name: "iconeChat",
                        description: "Mostrar um ícone na barra de chat para alternar o plugin rapidamente."
                    },
                    chatContextMenu: {
                        name: "menuContextoChat",
                        description: "Mostrar um menu no contexto do chat para alternar as definições rapidamente."
                    },
                    defaultHidden: {
                        name: "ocultoPorPadrao",
                        description: "Se deve ocultar a escrita em DMs/canais/servidores por padrão ou não."
                    }
                }
            },
            content: {
                updated: "Definições de escrita silenciosa atualizadas.",
                noChanges: "Nenhuma alteração feita nas definições de escrita silenciosa."
            },
            tooltip: {
                hidden: "Escrita Oculta ({{location}})",
                visible: "Escrita Visível ({{location}})",
                global: "Escrita Visível (Global)",
                voiceChannel: "Escrita sempre visível no chat do canal de voz ligado",
                temporary: "Escrita temporariamente visível neste canal devido a uma mensagem recente"
            },
            option: {
                enabledGlobally: {
                    label: "Ativado Globalmente",
                    description: "Alternar a funcionalidade do teu próprio indicador de escrita globalmente."
                },
                hideChatBoxTypingIndicators: {
                    label: "Ocultar Indicadores da Barra de Chat",
                    description: "Ocultar indicadores de escrita de outros utilizadores acima da barra de chat."
                },
                hideMembersListTypingIndicators: {
                    label: "Ocultar Indicadores da Lista de Membros",
                    description: "Ocultar indicadores de escrita de outros utilizadores na lista de membros."
                },
                chatIcon: {
                    label: "Ícone de Chat",
                    description: "Mostrar um ícone na barra de chat para modificar o plugin rapidamente."
                },
                chatIconLeftClickAction: {
                    label: "Ação de Clique Esquerdo no Ícone",
                    description: "O que fazer ao clicar com o botão esquerdo no ícone de chat.",
                    global: "Alternar Escrita Globalmente",
                    channel: "Alternar Escrita para o Canal",
                    guild: "Alternar Escrita para o Servidor",
                    settings: "Abrir Definições do Plugin"
                },
                chatIconMiddleClickAction: {
                    label: "Ação de Clique Central no Ícone",
                    description: "O que fazer ao clicar com o botão central no ícone de chat.",
                    global: "Alternar Escrita Globalmente",
                    channel: "Alternar Escrita para o Canal",
                    guild: "Alternar Escrita para o Servidor",
                    settings: "Abrir Definições do Plugin"
                },
                chatIconRightClickAction: {
                    label: "Ação de Clique Direito no Ícone",
                    description: "O que fazer ao clicar com o botão direito no ícone de chat.",
                    global: "Alternar Escrita Globalmente",
                    channel: "Alternar Escrita para o Canal",
                    guild: "Alternar Escrita para o Servidor",
                    settings: "Abrir Definições do Plugin"
                },
                chatContextMenu: {
                    label: "Menu de Contexto do Chat",
                    description: "Mostrar um menu no contexto do chat para modificar as definições rapidamente."
                },
                defaultHidden: {
                    label: "Oculto por Padrão",
                    description: "Se ativado, o plugin ocultará a tua escrita em todos os locais não listados em 'Localizações Desativadas'. Se desativado, mostrará a escrita em todos os locais não listados em 'Localizações Ativadas'."
                },
                alwaysEnableInActiveVoiceChat: {
                    label: "Ativar sempre no chat de voz ativo",
                    description: "Permite sempre que o teu indicador de escrita apareça ao escreveres num canal de voz ao qual estás ligado."
                },
                temporaryEnableThresholdServers: {
                    label: "Limite de ativação temporária (servidores)",
                    description: "Permite temporariamente que o teu indicador de escrita apareça durante estes segundos após enviares uma mensagem num canal de servidor. Se o indicador já estiver visível no canal, esta definição não terá efeito."
                },
                temporaryEnableThresholdDirectMessages: {
                    label: "Limite de ativação temporária (mensagens diretas)",
                    description: "Permite temporariamente que o teu indicador de escrita apareça durante estes segundos após enviares uma mensagem numa MD ou MD de grupo. Se o indicador já estiver visível no canal, esta definição não terá efeito."
                },
                enabledLocations: {
                    label: "Localizações Ativadas",
                    description: "Ativar funcionalidade para estes IDs. Aceita lista separada por vírgulas de IDs de DMs, canais e servidores. Só usado se 'Oculto por Padrão' estiver desativado."
                },
                disabledLocations: {
                    label: "Localizações Desativadas",
                    description: "Desativar funcionalidade para estes IDs. Aceita lista separada por vírgulas de IDs de DMs, canais e servidores. Só usado se 'Oculto por Padrão' estiver ativado."
                }
            },
            text: {
                silentTyping: "Escrita silenciosa",
                enabled: "Ativado",
                chatBarIndicators: "Indicadores na barra de chat",
                membersListIndicators: "Indicadores na lista de membros",
                guild: "Servidor",
                channel: "Canal",
                global: "Global"
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "Deixa nevar no Discord!",
            about: {
                title: "Informação",
                paragraph: "Este plugin adiciona um efeito de neve natalícia por cima da interface do Discord. Podes mudar o tipo de neve nas definições abaixo.",
                note: "NOTA: Embora na maioria dos computadores este plugin não afete o desempenho mais do que uma extensão média, pode causar lentidão em sistemas mais fracos."
            },
            option: {
                typeOfSnow: {
                    label: "Tipo de Neve",
                    description: "Mudar o tipo de neve exibida (afeta o desempenho).",
                    solid: "Sólida (Melhor Desempenho)",
                    text: "Texto (Desempenho Médio)",
                    emoji: "Imagem (Pior Desempenho)"
                },
                maxSize: {
                    label: "Tamanho Máximo",
                    description: "Tamanho máximo dos flocos de neve"
                },
                speed: {
                    label: "Velocidade",
                    description: "Velocidade da queda (mais alto = queda mais rápida)"
                },
                flakesPerSecond: {
                    label: "Flocos Por Segundo",
                    description: "Flocos por segundo (mais alto = neve mais densa)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Ordena os pedidos de amizade pela data de receção",
            tooltip: "Adicionado &mdash; {{date}}",
            option: {
                showDates: {
                    label: "Mostrar Datas",
                    description: "Mostrar datas nos pedidos de amizade"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Regista todos os sons do painel de sons (soundboard) que são reproduzidos num chat de voz e permite descarregá-los",
            tooltip: "Abrir Registo de SoundBoard",
            option: {
                savedIds: {
                    label: "IDs de Soundboard Guardados",
                    description: "A quantidade de IDs de soundboard que queres guardar de cada vez (0 permite guardar infinitos)",
                    notNumber: "O valor não é um número.",
                    cantDecimal: "O valor não pode ser um número decimal.",
                    cantNegative: "O valor não pode ser um número negativo.",
                    heading: "A quantidade de IDs de soundboard que queres guardar de cada vez (0 permite guardar infinitos)",
                    warning: "Aviso! Definir o número para um valor inferior irá repor o registo!",
                    placeholder: "Insere um número"
                },
                fileType: {
                    label: "Tipo de Ficheiro",
                    description: "O formato no qual queres guardar o teu ficheiro"
                },
                openLogs: {
                    label: "Abrir Registos",
                    description: "Mostrar os registos",
                    button: "Abrir Registos"
                },
                soundVolume: {
                    label: "Volume do Som",
                    description: "Volume do som de alternância (0 para desativar)"
                },
                iconLocation: {
                    label: "Localização do Ícone",
                    description: "Escolhe onde mostrar o ícone do Registo de SoundBoard (requer reiniciar)",
                    toolbar: "Barra de Ferramentas",
                    chatInput: "Entrada de Chat"
                }
            },
            modal: {
                title: "Registos de SoundBoard",
                loading: "A carregar sons...",
                noLogs: "Nenhum som registado ainda. Entra num chat de voz para começar a registar!",
                clearLogs: "Limpar Registos",
                played: "Reproduzido {{time}} vez(es)",
                last: "Última vez:",
                also: "Também reproduzido por:",
                download: "Descarregar",
                copyId: "Copiar ID",
                copied: "ID copiado para a área de transferência!",
                playSound: "Reproduzir Som",
                moreUsers: "Outras pessoas usaram este som...",
                volume: "Volume do Soundboard"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Divide mensagens demasiado grandes em partes do tamanho do Discord antes de enviar.",
            option: {
                maxLength: {
                    label: "Comprimento Máximo da Mensagem",
                    description: "Comprimento máximo antes de dividir. Define 0 para detetar automaticamente."
                },
                disableFileConversion: {
                    label: "Desativar Conversão para Ficheiro",
                    description: "Se ativo, desativa a conversão automática para ficheiro de texto em mensagens grandes."
                },
                sendDelay: {
                    label: "Atraso de Envio",
                    description: "Atraso mínimo entre cada parte, em segundos."
                },
                hardSplit: {
                    label: "Divisão Rígida",
                    description: "Se ativo, divide exatamente no último carácter em vez de procurar o último espaço ou nova linha."
                },
                splitInSlowmode: {
                    label: "Dividir em Modo Lento",
                    description: "Permitir dividir no modo lento quando o atraso estiver dentro do máximo configurado."
                },
                slowmodeMax: {
                    label: "Máximo de Modo Lento",
                    description: "Duração máxima do modo lento permitida ao dividir mensagens."
                },
                splitMode: {
                    description: "Preferir este limite ao dividir uma mensagem.",
                    label: "Modo de divisão"
                }
            },
            toast: {
                cannotSplitThisMessage: "Não é possível dividir esta mensagem devido ao modo lento do canal.",
                onlySentLengthMessage: "Apenas {{sent}}/{{length}} partes da mensagem foram enviadas.",
                unsentCopied: "Partes não enviadas da mensagem copiadas para a área de transferência."
            },
            text: {
                newlines: "Quebras de linha",
                spaces: "Espaços",
                strictCharacterLimit: "Limite estrito de caracteres"
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Permite ouvir em conjunto livremente, sem pausa automática em chat de voz, e permite que a atividade continue a ser exibida quando estás inativo",
            option: {
                noSpotifyAutoPause: {
                    label: "Sem Pausa Automática do Spotify",
                    description: "Desativa a pausa automática do Spotify."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Manter Atividade do Spotify ao Estar Inativo",
                    description: "Mantém a atividade do Spotify ativa quando estás em estado inativo (idle)"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Partilha a tua faixa, álbum ou artista atual do Spotify via comando de barra (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Partilha o teu/tua {{type}} atual do Spotify no chat",
                    track: "Não estás a ouvir nenhuma faixa no Spotify.",
                    find: "Falha ao encontrar a faixa no Spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Adiciona os Tempos de Inicialização ao menu de Definições",
            modal: {
                title: "Tempos de Inicialização",
                ended: "Rastreio terminou em:",
                start: "Início",
                interval: "Intervalo",
                delta: "Delta",
                event: "Evento",
                serverTrace: "Rastreio do Servidor",
                loading: "A carregar..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Adiciona notificações para alterações de estado",
            loading: "A carregar...",
            option: {
                notificationsSound: {
                    label: "Som de Notificação",
                    description: "Reproduzir um som para notificações de estado?"
                },
                usersList: {
                    label: "Lista de Utilizadores",
                    description: "Lista de utilizadores a notificar em caso de alteração de estado",
                    empty: "Nenhum utilizador a ser monitorizado. Clica com o botão direito num utilizador e seleciona 'Notificações de Estado' para o adicionar."
                }
            },
            context: {
                label: "Notificações de Estado",
                notifications: "Notificações",
                type: {
                    all: "Todas",
                    online: "Online",
                    offline: "Offline",
                    none: "Nenhuma"
                }
            },
            notification: {
                unknownUser: "Utilizador",
                title: "Notificações de Estado"
            },
            status: {
                online: "Online",
                idle: "Inativo",
                dnd: "Não Incomodar",
                offline: "Offline",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Permite-te memorizar os teus estados e defini-los mais tarde",
            button: {
                remember: "Memorizar Estado"
            },
            context: {
                edit: "Editar Predefinições Personalizadas",
                set: "Definir Estado Personalizado",
                delete: "Eliminar predefinição"
            },
            notification: {
                successfully: "Estado guardado com sucesso"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Sincroniza o teu estado com a Steam! (Online, Ausente, Invisível ou Offline.)",
            option: {
                onlineStatus: {
                    label: "Estado Online",
                    description: "Estado na Steam quando estiveres Online"
                },
                idleStatus: {
                    label: "Estado Inativo",
                    description: "Estado na Steam quando estiveres Inativo"
                },
                dndStatus: {
                    label: "Estado Não Incomodar",
                    description: "Estado na Steam quando estiveres em Não Incomodar"
                },
                invisibleStatus: {
                    label: "Estado Invisível",
                    description: "Estado na Steam quando estiveres em Invisível"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Ficar Invisível Se Atividade Estiver Oculta",
                    description: "Define o estado da Steam como Invisível quando a atividade do Discord estiver oculta"
                }
            },
            status: {
                online: "Online",
                away: "Ausente",
                invisible: "Invisível",
                offline: "Offline (Desligar Chat da Steam)",
                disabled: "Desativado"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Permite-te bloquear a exibição de autocolantes (stickers).",
            option: {
                showGif: {
                    label: "Mostrar GIF",
                    description: "Se deve mostrar um GIF de um gato catita."
                },
                showMessage: {
                    label: "Mostrar Mensagem",
                    description: "Se deve mostrar uma mensagem detalhando qual ID foi bloqueado"
                },
                showButton: {
                    label: "Mostrar Botão",
                    description: "Se deve mostrar um botão para desbloquear o GIF"
                },
                blockedStickers: {
                    label: "Autocolantes Bloqueados",
                    description: "A lista de IDs de autocolantes bloqueados (não edites a menos que saibas o que estás a fazer)"
                }
            },
            modal: {
                blocked: "Autocolante Bloqueado. ID: {{id}} NOME: {{name}}",
                unblock: "Desbloquear {{name}}"
            },
            context: {
                blockSticker: "Bloquear Autocolante",
                unblockSticker: "Desbloquear Autocolante"
            },
            text: {
                failedToRender: "Falha ao apresentar :("
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Faz com que ao escolher um autocolante no seletor, este seja inserido na caixa de chat em vez de ser enviado instantaneamente"
        },
        streaks: {
            name: "Streaks",
            description: "Mostra uma sequência ao lado de um utilizador quando trocam MD em dias consecutivos.",
            tooltip: "Sequência de {{count}} dias",
            tooltipExpiring: "Sequência de {{count}} dias — conversem hoje para a manter!",
            option: {
                account: {
                    description: "Inicie ou termine sessão na API de Streaks. As sequências são guardadas na API, por isso precisa de iniciar sessão para serem contadas.",
                    login: "Iniciar sessão na API de Streaks",
                    logout: "Terminar sessão na API de Streaks"
                },
                eliteColor: "Cor da sequência elite (100+ dias)",
                diamondColor: "Cor da sequência diamante (60+ dias)",
                platinumColor: "Cor da sequência platina (45+ dias)",
                goldColor: "Cor da sequência ouro (30+ dias)",
                silverColor: "Cor da sequência prata (14+ dias)",
                bronzeColor: "Cor da sequência bronze (7+ dias)",
                defaultColor: "Cor predefinida da sequência (1+ dias)"
            },
            toast: {
                authFailed: "Falha na autorização: {{error}}",
                failedToAuthorizeMessage: "Falha ao autorizar: {{message}}",
                authorizationExpired: "A autorização do Streaks expirou. Autoriza novamente nas definições do plugin Streaks."
            }
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Ativa automaticamente o Modo Streamer quando começas a transmitir no Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Desativa os codecs de vídeo que quiseres para transmissões e câmaras.",
            option: {
                disableAv1Codec: {
                    label: "Desativar Codec AV1",
                    description: "Fazer o Discord não considerar usar AV1 para transmissões e câmaras."
                },
                disableH265Codec: {
                    label: "Desativar Codec H265",
                    description: "Fazer o Discord não considerar usar H265 para transmissões e câmaras."
                },
                disableH264Codec: {
                    label: "Desativar Codec H264",
                    description: "Fazer o Discord não considerar usar H264 para transmissões e câmaras."
                },
                disableVP8Codec: {
                    label: "Desativar Codec VP8",
                    description: "Fazer o Discord não considerar usar VP8 para transmissões e câmaras."
                },
                disableVP9Codec: {
                    label: "Desativar Codec VP9",
                    description: "Fazer o Discord não considerar usar VP9 para transmissões e câmaras."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Personaliza o limite de Super Reações a serem reproduzidas ao mesmo tempo e define Super Reações como padrão",
            option: {
                superReactByDefault: {
                    label: "Super Reagir Por Padrão",
                    description: "O seletor de reações passará a usar Super Reações por padrão"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Reprodução Ilimitada de Super Reações",
                    description: "Remove o limite de Super Reações reproduzidas em simultâneo"
                },
                superReactionPlayingLimit: {
                    label: "Limite de Reprodução de Super Reações",
                    description: "Máximo de Super Reações a reproduzir ao mesmo tempo. Define 0 para desativar a reprodução."
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Substitui texto nas tuas mensagens. Podes encontrar regras pré-feitas no canal #textreplace-rules no servidor da Plexcord",
            importExport: {
                title: "Importar e exportar",
                description: "Exporte as suas regras como um ficheiro JSON ou importe regras para as adicionar às existentes.",
                export: "Exportar JSON",
                import: "Importar JSON",
                success: "Regras importadas com sucesso.",
                failed: "Não foi possível importar as regras. Escolha um ficheiro JSON do TextReplace válido."
            },
            option: {
                replace: {
                    label: "Substituir",
                    string: "Substituições simples",
                    stringDescription: "Regras simples de localizar e substituir. Por exemplo, encontrar 'brb' e substituir por 'be right back'",
                    regex: "Substituições com Regex",
                    regexDescription: "Substituições mais avançadas usando expressões regulares. Esta secção é para utilizadores avançados. Se não perceber, simplesmente ignore",
                    myMessages: "Aplicar às tuas mensagens (visível para todos)",
                    othersMessages: "Aplicar às mensagens de outros (apenas visível para ti)",
                    allMessages: "Aplicar a todas as mensagens"
                },
                stringRules: {
                    label: "Regras de Texto",
                    description: "Regras para substituir texto usando correspondência de string simples."
                },
                regexRules: {
                    label: "Regras de Regex",
                    description: "Regras para substituir texto usando expressões regulares."
                }
            },
            modal: {
                name: "Nome",
                nameDescription: "Um nome opcional para ajudar a identificar esta regra.",
                search: "Pesquisar uma regra...",
                noResults: "Nenhuma regra corresponde à sua pesquisa.",
                title: "Testar Regras",
                find: "Procurar",
                findRegex: "Padrão regex",
                findText: "Texto a substituir",
                replace: "Substituir",
                replaceDescription: "O texto que substituirá o texto encontrado",
                includes: "Apenas se incluir",
                includesDescription: "Esta regra só será aplicada se a mensagem incluir este texto. Isto é opcional",
                type: "Escreva uma mensagem",
                applied: "Mensagem com regras aplicadas",
                delete: "Eliminar regra",
                add: "Adicionar regra",
                empty: "Regra vazia",
                rule: "Regra",
            },
            text: {
                optionallyOnlyApplyThis: "Opcionalmente, aplicar esta regra apenas se a mensagem incluir este texto.",
                emptyRule: "Regra vazia {{number}}",
                ruleWithFind: "Regra {{number}} - {{find}}"
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Adiciona atributos de dados a vários elementos para fins de personalização de temas (theming)"
        },
        timezones: {
            name: "Timezones",
            description: "Mostra a hora local dos utilizadores nos perfis e cabeçalhos das mensagens",
            button: {
                wantToSave: "Queres guardar o teu fuso horário na base de dados? Clica aqui para o definir.",
                yourLocalTimezone: "(O teu fuso horário local)"
            },
            context: {
                set: "Definir Fuso Horário Local"
            },
            toast: {
                refresh: {
                    successfully: "Fusos horários atualizados com sucesso!",
                    failed: "Falha ao atualizar fusos horários!",
                    failedTo: "Falha ao atualizar fusos horários."
                },
                update: {
                    successfully: "Fuso horário atualizado com sucesso!",
                    failed: "Falha ao definir fuso horário."
                },
                delete: {
                    successfully: "Fuso horário eliminado com sucesso!",
                    failed: "Falha ao eliminar fuso horário."
                },
                auth: {
                    failed: "Falha na autenticação.",
                    success: "Autorização bem-sucedida!"
                }
            },
            toolbox: {
                set: "Definir Fuso Horário na Base de Dados",
                refresh: "Atualizar Fusos Horários da Base de Dados"
            },
            option: {
                showOwnTimezone: {
                    label: "Mostrar Próprio Fuso Horário",
                    description: "Mostra o teu próprio fuso horário nos perfis e cabeçalhos"
                },
                twentyFourHourTime: {
                    label: "Formato 24 Horas",
                    description: "Mostrar a hora no formato 24 h"
                },
                showTimezoneInfo: {
                    label: "Mostrar Info do Fuso Horário",
                    description: "Mostra a informação do fuso horário ao lado da hora"
                },
                showMessageHeaderTime: {
                    label: "Mostrar Hora no Cabeçalho",
                    description: "Mostrar a hora nos cabeçalhos das mensagens"
                },
                showProfileTime: {
                    label: "Mostrar Hora no Perfil",
                    description: "Mostrar a hora nos perfis de utilizador"
                },
                useDatabase: {
                    label: "Usar Base de Dados de Fusos Horários",
                    description: "Ativar a base de dados para obter fusos horários de utilizadores"
                },
                preferDatabaseOverLocal: {
                    label: "Preferir Base de Dados Sobre Local",
                    description: "Preferir a base de dados em vez do armazenamento local para fusos horários"
                },
                databaseUrl: {
                    label: "URL da Base de Dados",
                    description: "O URL do servidor da base de dados de fusos horários"
                },
                setDatabaseTimezone: {
                    label: "Definir Fuso Horário na Base de Dados",
                    description: "Define o teu fuso horário na base de dados",
                    setTimezone: "Definir Fuso Horário na Base de Dados"
                },
                resetDatabaseTimezone: {
                    label: "Repor Fuso Horário na Base de Dados",
                    description: "Repõe o teu fuso horário na base de dados",
                    failed: "Falha ao repor fuso horário na base de dados"
                },
                askedTimezone: {
                    label: "Fuso Horário Solicitado",
                    description: "Se o utilizador já foi questionado para definir o seu fuso horário"
                },
                recipientTimezoneInDms: {
                    label: "Fuso horário do destinatário nas MPs",
                    description: "Nas MPs, mostrar o fuso horário do destinatário nas tuas mensagens"
                },
                showLocalTimezone: {
                    label: "Mostrar fuso horário local",
                    description: "Mostrar o fuso horário local em vez de apenas \"local\""
                }
            },
            modal: {
                title: "Fusos Horários",
                select: "Selecionar Fuso Horário",
                selectPlaceholder: "Escolhe um Fuso Horário",
                delete: "Eliminar Fuso Horário",
                save: "Guardar"
            },
            text: {
                invalidResponseFormat: "Formato de resposta inválido"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "Mostra uma notificação toast sempre que recebes uma mensagem direta.",
            notification: {
                call: "Começou uma chamada contigo!",
                recipient: {
                    add: "{{target}} foi adicionado ao grupo por {{actor}}.",
                    remove: "{{target}} foi removido do grupo por {{actor}}.",
                    left: "Saiu do grupo."
                },
                channel: {
                    change: {
                        name: "Alterou o nome do canal para {{name}}.",
                        icon: "Alterou o ícone do canal."
                    },
                    pinned: "Fixou uma mensagem."
                },
                sent: {
                    embed: "Enviou uma incorporação.",
                    sticker: "Enviou um autocolante.",
                    attachment: "Anexo:"
                },
                redacted: "O conteúdo da mensagem foi redigido.",
                friend: {
                    accept: "{{user}} é agora teu amigo",
                    acceptBody: "Agora já lhe podes enviar mensagens diretamente.",
                    request: "{{user}} enviou-te um pedido de amizade.",
                    requestBody: "Podes aceitar ou recusar no separador de Amigos."
                },
                example: {
                    title: "Exemplo de Notificação",
                    body: "Isto é um exemplo de corpo de notificação."
                }
            },
            modal: {
                dismiss: "Fechar Notificação",
                attachments: "Foram enviado(s) {{attachments}} anexo(s)."
            },
            option: {
                position: {
                    label: "Posição",
                    description: "A posição da notificação toast",
                    topRight: "Canto Superior Direito",
                    topLeft: "Canto Superior Esquerdo",
                    bottomRight: "Canto Inferior Direito",
                    bottomLeft: "Canto Inferior Esquerdo"
                },
                timeout: {
                    label: "Duração",
                    description: "Tempo em segundos que as notificações serão exibidas"
                },
                opacity: {
                    label: "Opacidade",
                    description: "A opacidade da notificação toast"
                },
                determineServerNotifications: {
                    label: "Respeitar Notificações do Servidor",
                    description: "Determinar se deve mostrar notificações com base nas definições de notificação do servidor"
                },
                respectDoNotDisturb: {
                    label: "Respeitar Não incomodar",
                    description: "Não mostrar notificações quando o teu estado for Não incomodar."
                },
                directMessages: {
                    label: "Mensagens Diretas",
                    description: "Mostrar notificações para mensagens diretas"
                },
                groupMessages: {
                    label: "Mensagens de Grupo",
                    description: "Mostrar notificações para mensagens de grupo"
                },
                friendServerNotifications: {
                    label: "Notificações de Amigos em Servidores",
                    description: "Mostrar notificações quando amigos enviam mensagens em servidores que partilham contigo"
                },
                friendActivity: {
                    label: "Atividade de Amizade",
                    description: "Mostrar notificações ao adicionar alguém ou receber um pedido de amizade"
                },
                notifyFor: {
                    label: "Notificar Para",
                    description: "Criar uma lista de IDs de canais para receber notificações (separar por vírgulas)"
                },
                ignoreUsers: {
                    label: "Ignorar Utilizadores",
                    description: "Criar uma lista de IDs de utilizadores cujas notificações devem ser ignoradas (separar por vírgulas)"
                },
                exampleButton: {
                    label: "Botão de Exemplo",
                    description: "Mostrar uma notificação toast de exemplo.",
                    show: "Mostrar Notificação de Exemplo"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Adiciona um atalho de teclado personalizável para alternar a webcam.",
            option: {
                keyBind: {
                    label: "Atalho de Teclado",
                    description: "A tecla a premir para alternar a webcam."
                },
                reqCtrl: {
                    label: "Requer Ctrl",
                    description: "Exigir que a tecla Control esteja premida."
                },
                reqShift: {
                    label: "Requer Shift",
                    description: "Exigir que a tecla Shift esteja premida."
                },
                reqAlt: {
                    label: "Requer Alt",
                    description: "Exigir que a tecla Alt esteja premida."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Traduz mensagens com o Google Tradutor ou DeepL",
            tooltip: {
                label: "Traduzir"
            },
            context: {
                translate: "Traduzir",
                open: "Abrir Modal de Tradução",
                auto: "Tradução Automática Ativada"
            },
            option: {
                receivedInput: {
                    label: "Entrada Recebida",
                    description: "Idioma de origem das mensagens recebidas"
                },
                receivedOutput: {
                    label: "Saída Recebida",
                    description: "Idioma para o qual as mensagens recebidas devem ser traduzidas"
                },
                sentInput: {
                    label: "Entrada Enviada",
                    description: "Idioma de origem das tuas próprias mensagens"
                },
                sentOutput: {
                    label: "Saída Enviada",
                    description: "Idioma para o qual as tuas mensagens devem ser traduzidas"
                },
                service: {
                    label: "Serviço de Tradução",
                    description: "O DeepL requer uma chave API paga do DeepL Pro",
                    descriptionWeb: "Serviço de tradução (Não suportado na Web!)",
                    google: "Google Tradutor",
                    deepl: "DeepL Gratuito - Chave de API necessária",
                    deeplPro: "DeepL Pro - Chave de API necessária",
                    kagi: "Kagi Tradutor - Chave de API necessária"
                },
                kagiSession: {
                    label: "Sessão do Kagi",
                    description: "Obtém o teu token de sessão em https://kagi.com/settings?p=user_details"
                },
                deeplApiKey: {
                    label: "Chave API DeepL",
                    description: "A tua chave API do DeepL",
                    placeholder: "Obtém a tua chave em https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Tradução Automática",
                    description: "Traduzir automaticamente as tuas mensagens antes de enviar. Podes usar Shift+clique direito no botão de traduzir para alternar isto"
                },
                showAutoTranslateTooltip: {
                    label: "Mostrar Dica de Tradução Automática",
                    description: "Mostrar um aviso no botão da barra de chat sempre que uma mensagem for traduzida automaticamente"
                }
            },
            modal: {
                title: "Traduzir",
                select: "Selecionar um idioma",
                auto: "Tradução Automática",
                dismiss: "Fechar",
                translated: "traduzido de {{from}}",
                failed: {
                    to: "Falha ao traduzir {{text}}",
                    connect: "Falha ao ligar à API do DeepL:"
                },
                wrong: "Algo correu mal. Se o problema persistir, verifica a consola ou pede ajuda no servidor de suporte.",
                deepl: {
                    api: "Cota da API do DeepL excedida. A usar Google Tradutor.",
                    apiKey: "Chave API do DeepL não definida. A repor para Google",
                    auth: "Chave API ou versão do DeepL inválida"
                },
                autoTranslateEnabled: {
                    title: "Tradução Automática da Plexcord Ativada",
                    body: "Acabaste de ativar a Tradução Automática! Qualquer mensagem será traduzida automaticamente antes de ser enviada.",
                    confirm: "Desativar Tradução Automática",
                    cancel: "Entendido",
                    secondaryConfirm: "Não mostrar novamente"
                }
            },
            button: {
                manageLanguages: "Personalizar idiomas de tradução e tradução automática"
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Adiciona um indicador se alguém estiver a escrever num canal.",
            option: {
                includeCurrentChannel: {
                    label: "Incluir Canal Atual",
                    description: "Se deve mostrar o indicador de escrita para o canal atualmente selecionado"
                },
                includeMutedChannels: {
                    label: "Incluir Canais Silenciados",
                    description: "Se deve mostrar o indicador de escrita para canais silenciados."
                },
                includeIgnoredUsers: {
                    label: "Incluir Utilizadores Ignorados",
                    description: "Se deve mostrar o indicador de escrita para utilizadores ignorados."
                },
                includeBlockedUsers: {
                    label: "Incluir Utilizadores Bloqueados",
                    description: "Se deve mostrar o indicador de escrita para utilizadores bloqueados."
                },
                indicatorMode: {
                    label: "Modo do Indicador",
                    description: "Como o indicador deve ser exibido?",
                    both: "Avatares e pontos animados",
                    dots: "Pontos animados",
                    avatars: "Avatares"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Mostra avatares e cores de cargos no indicador de escrita",
            option: {
                showAvatars: {
                    label: "Mostrar Vários Utilizadores",
                    description: "Mostrar avatares no indicador de escrita"
                },
                showRoleColors: {
                    label: "Mostrar Cores dos Cargos",
                    description: "Mostrar as cores dos cargos no indicador de escrita"
                },
                alternativeFormatting: {
                    label: "Formatação Alternativa",
                    description: "Mostrar uma mensagem mais útil quando vários utilizadores estão a escrever"
                },
                amITyping: {
                    label: "Estou a Escrever?",
                    description: "Mostra-te se as outras pessoas te conseguem ver a escrever"
                }
            },
            others: {
                areTyping: "e mais {{count}} estão a escrever..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Remove a indentação inicial nos blocos de código"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Converte unidades métricas para imperiais e vice-versa",
            tooltip: "Converter Unidades",
            option: {
                myUnits: {
                    label: "As Minhas Unidades",
                    description: "As unidades que usas e para as quais queres as conversões. O padrão é Imperial",
                    imperial: "Imperial",
                    metric: "Métrico"
                }
            },
            button: {
                dismiss: "Fechar"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "Aumenta a quantidade de contas que podes adicionar.",
            option: {
                maxAccounts: {
                    label: "Máximo de Contas",
                    description: "Número de contas que podem ser adicionadas, ou 0 para sem limite"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Permite fazer mais zoom na ferramenta de recorte de imagem ao alterar o teu avatar",
            option: {
                zoomMultiplier: {
                    label: "Multiplicador de Zoom",
                    description: "Multiplicador de zoom"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Permite reativar as incorporações (embeds) suprimidas em mensagens",
            context: {
                unsuppress: "Reativar Incorporação",
                suppress: "Suprimir Incorporação"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Mostra informações inúteis aleatórias no Discord; atalhos e espaçamento são ajustáveis.",
            recording: "A gravar...",
            record: "Gravar",
            option: {
                delay: {
                    label: "Intervalo de Notificação",
                    description: "Intervalo de exibição das notificações em minutos"
                },
                historyHotkey: {
                    label: "Atalho do Painel de Histórico",
                    description: "Tecla de atalho para mostrar o histórico de factos exibidos"
                },
                randomFactHotkey: {
                    label: "Atalho de Facto Aleatório",
                    description: "Tecla de atalho para abrir o painel de factos aleatórios"
                },
                sameFact: {
                    label: "Evitar mostrar itens repetidos",
                    description: "Evita mostrar o mesmo facto múltiplas vezes até que todos tenham sido exibidos"
                },
                lastNFacts: {
                    label: "Quantos recentes a evitar",
                    description: "Número de factos exibidos recentemente a evitar repetir (0 = desde sempre)"
                }
            },
            modal: {
                title: "UselessInfo",
                history: {
                    none: "Ainda não há factos. Usa o atalho ou aguarda.",
                    source: "Fonte"
                },
                showRandom: "Mostrar Aleatório",
                close: "Fechar"
            },
            notification: {
                title: "Sabias que?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "Mostra os pronomes dos utilizadores nos cabeçalhos das mensagens",
            option: {
                pronounsFormat: {
                    label: "Formato dos Pronomes",
                    description: "O formato em que os pronomes aparecem no chat",
                    lowercase: "Minúsculas",
                    capitalized: "Capitalizado"
                },
                showSelf: {
                    label: "Mostrar Próprios",
                    description: "Ativar ou desativar a exibição dos teus próprios pronomes"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Mostra um indicador quando um utilizador está num Canal de Voz",
            option: {
                showInUserProfileModal: {
                    label: "Mostrar no Modal de Perfil",
                    description: "Mostrar o indicador de Canal de Voz no perfil do utilizador junto ao nome"
                },
                showInMemberList: {
                    label: "Mostrar na Lista de Membros",
                    description: "Mostrar o indicador de Canal de Voz na lista de membros e de DMs"
                },
                showInMessages: {
                    label: "Mostrar nas Mensagens",
                    description: "Mostrar o indicador de Canal de Voz nas mensagens"
                }
            },
            modal: {
                inVoiceChat: "Em Chat de Voz"
            },
            notification: {
                cannotJoin: "Não podes entrar no Canal de Voz do utilizador."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Exibe banners de utilizador do USRBG, permitindo que qualquer pessoa tenha um banner sem precisar de Nitro",
            option: {
                nitroFirst: {
                    label: "Prioridade ao Nitro",
                    description: "Qual banner usar se estiverem presentes tanto o do Nitro como o do USRBG",
                    nitro: "Banner do Nitro",
                    usrbg: "Banner do USRBG"
                },
                voiceBackground: {
                    label: "Fundo de Voz",
                    description: "Usar banners do USRBG como fundos de chat de voz"
                }
            },
            button: "Obtém o teu próprio banner USRBG"
        },
        validReply: {
            name: "ValidReply",
            description: "Corrige o erro 'A mensagem não pôde ser carregada' ao passar o rato sobre a resposta"
        },
        validUser: {
            name: "ValidUser",
            description: "Corrige menções de utilizadores desconhecidos que aparecem como '@unknown-user' (passa o rato sobre a menção para corrigir)",
            badges: {
                discordBugHunter: "Discord Bug Hunter",
                moderatorProgramsAlumni: "Ex-aluno do Programa de Moderadores",
                discordStaff: "Staff do Discord",
                hypeSquadEvents: "Eventos HypeSquad",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                partneredServerOwner: "Dono de Servidor Parceiro",
                nitro: "Discord Nitro",
                earlySupporter: "Apoiante Antigo",
                earlyVerifiedBotDeveloper: "Programador de Bots Verificado Antigo"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Entra em canais de voz através de duplo clique em vez de clique simples"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Anuncia quando os utilizadores entram, saem ou mudam de canal de voz através de um narrador",
            option: {
                voice: {
                    label: "Voz"
                },
                volume: {
                    label: "Volume",
                    description: "Volume do Narrador"
                },
                rate: {
                    label: "Velocidade",
                    description: "Velocidade do Narrador"
                },
                sayOwnName: {
                    label: "Dizer Próprio Nome",
                    description: "Dizer o teu próprio nome"
                },
                latinOnly: {
                    label: "Apenas Latim",
                    description: "Remover caracteres não latinos dos nomes antes de os ler"
                },
                joinMessage: {
                    label: "Mensagem de Entrada",
                    description: "Mensagem ao entrar"
                },
                leaveMessage: {
                    label: "Mensagem de Saída",
                    description: "Mensagem ao sair"
                },
                moveMessage: {
                    label: "Mensagem de Mudança",
                    description: "Mensagem ao mudar de canal"
                },
                muteMessage: {
                    label: "Mensagem de Silenciar",
                    description: "Mensagem de silenciar (apenas próprio, por agora)"
                },
                unmuteMessage: {
                    label: "Mensagem de Ativar Som",
                    description: "Mensagem de ativar som (apenas próprio, por agora)"
                },
                deafenMessage: {
                    label: "Mensagem de Ensurdecer",
                    description: "Mensagem de ensurdecer (apenas próprio, por agora)"
                },
                undeafenMessage: {
                    label: "Mensagem de Ativar Áudio",
                    description: "Mensagem de ativar áudio (apenas próprio, por agora)"
                }
            },
            modal: {
                title: "Reproduzir Sons de Exemplo",
                voiceTitle: "Voz",
                voice: "Seleciona uma voz",
                languageTitle: "Idioma",
                language: "Seleciona um idioma",
                noVoice: "Nenhuma voz de narrador encontrada. ",
                linuxNote: "Instala speech-dispatcher ou espeak e executa o Discord com a flag --enable-speech-dispatcher",
                someNarrator: "Tenta instalar algumas nas definições de Narrador do teu Sistema Operativo",
                dontHaveEnglish: "Não tens vozes de Inglês instaladas, por isso o narrador pode soar estranho",
                customiseMessages: "Podes personalizar as mensagens faladas abaixo. Podes desativar mensagens específicas deixando-as vazias",
                placeholdersInfo: "Os marcadores {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} e {{CHANNEL}} serão substituídos pelo nome do utilizador (vazio se fores tu), nome de exibição, alcunha no servidor atual e nome do canal, respetivamente"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Faz com que avatares e banners nos perfis sejam clicáveis; adiciona opções de Ver Avatar/Banner no menu de contexto de utilizadores, servidores e grupos.",
            context: {
                view: {
                    avatar: "Ver Avatar",
                    serverAvatar: "Ver Avatar do Servidor",
                    icon: "Ver Ícone",
                    banner: "Ver Banner"
                }
            },
            option: {
                format: {
                    label: "Formato",
                    description: "Escolhe o formato de imagem a usar para imagens não animadas. Imagens animadas usarão sempre .gif"
                },
                imgSize: {
                    label: "Tamanho da Imagem",
                    description: "O tamanho de imagem a usar"
                }
            },
            text: {
                viewAvatarDecoration: "Ver decoração do avatar"
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Copia e visualiza o conteúdo/dados brutos (raw) de qualquer mensagem, canal ou servidor",
            context: {
                copyLeft: "Copiar Raw (Clique Esq.) / Ver Raw (Clique Dir.)",
                copyRight: "Copiar Raw (Clique Dir.) / Ver Raw (Clique Esq.)",
                view: "Ver Raw"
            },
            option: {
                popoverButton: {
                    label: "Botão Popover",
                    description: "Mostrar um botão no menu flutuante da mensagem para ver os dados brutos."
                },
                clickMethod: {
                    label: "Método de Clique",
                    description: "Alterar o botão para ver o conteúdo bruto de qualquer mensagem.",
                    left: "Clique esquerdo para ver o conteúdo bruto.",
                    right: "Clique direito para ver o conteúdo bruto."
                },
                messageContextMenu: {
                    description: "Mostrar no menu de contexto da mensagem",
                    label: "Menu de contexto da mensagem"
                },
                sortKeys: {
                    description: "Ordenar alfabeticamente as chaves dos dados brutos.",
                    label: "Ordenar chaves"
                },
                stripSensitiveData: {
                    description: "Remover dados sensíveis dos dados brutos, como o teu e-mail e número de telefone.",
                    label: "Remover dados sensíveis"
                }
            },
            modal: {
                title: "Ver Raw",
                content: "Conteúdo da mensagem",
                data: "Dados de {{type}}",
                copied: "Dados de {{type}} copiados!",
                copy: "Copiar JSON de {{type}}",
                copiedContent: "Conteúdo copiado!",
                copyContent: "Copiar Conteúdo Bruto"
            },
            types: {
                message: "Mensagem",
                channel: "Canal",
                guild: "Servidor",
                role: "Cargo",
                user: "Utilizador"
            },
            text: {
                copyTypeData: "Copiar dados de {{type}}",
                rawTypeData: "Dados brutos de {{type}}",
                messageData: "Dados da mensagem"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "Envia DMs, silencia ou ensurdece qualquer utilizador rapidamente a partir do painel de chamada de voz.",
            option: {
                showChatButton: {
                    label: "Mostrar Botão de Chat",
                    description: "Se queres exibir o botão de chat"
                },
                showMuteButton: {
                    label: "Mostrar Botão de Silenciar",
                    description: "Se queres exibir o botão de silenciar"
                },
                showDeafenButton: {
                    label: "Mostrar Botão de Ensurdecer",
                    description: "Se queres exibir o botão de ensurdecer"
                },
                muteSoundboard: {
                    label: "Silenciar Painel de Sons",
                    description: "Alterna o painel de sons deles ao clicar no botão de Ensurdecer."
                },
                disableVideo: {
                    label: "Desativar Vídeo",
                    description: "Alterna o vídeo deles ao clicar no botão de Ensurdecer."
                },
                useServer: {
                    label: "Usar Servidor",
                    description: "Usar silenciar/ensurdecer de servidor em vez de local quando tens permissão."
                },
                serverSelf: {
                    label: "Próprio no Servidor",
                    description: "Ensurdecer / Silenciar a ti próprio no servidor ao usar os botões."
                },
                showButtonsSelf: {
                    label: "Mostrar Botões em Ti Próprio",
                    description: "Se queres exibir botões para o teu próprio utilizador.",
                    display: "Exibir",
                    hide: "Ocultar",
                    disable: "Desativar"
                },
                whichNameToShow: {
                    label: "Que Nome Mostrar",
                    description: "Escolhe se queres mostrar a alcunha ou o nome de utilizador na dica de ferramenta.",
                    global: "Nome Global",
                    username: "Nome de Utilizador",
                    both: "Ambos"
                },
                buttonPosition: {
                    label: "Posição dos Botões",
                    description: "Escolhe onde os botões serão exibidos.",
                    left: "Esquerda",
                    right: "Direita",
                }
            },
            tooltip: {
                navigate: "Ir para DMs",
                open: "Abrir DMs com {{username}}",
                yourself: "tu próprio",
                serverMute: "Silenciar no Servidor",
                serverDeafen: "Ensurdecer no Servidor",
                mute: "Silenciar",
                deafen: "Ensurdecer",
                unmute: "Ativar Som",
                undeafen: "Ativar Áudio",
                serverUnmute: "Ativar Som no Servidor",
                serverUndeafen: "Ativar Áudio no Servidor"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Regista quem entra e sai dos canais de voz",
            context: {
                view: "Ver Registo do Canal"
            },
            modal: {
                joined: "Entrou em <#{{channel}}>",
                left: "Saiu de <#{{channel}}>",
                movedTo: "Mudou para <#{{channel}}>",
                movedFrom: "Mudou de <#{{channel}}>",
                noLogs: "Sem registos para exibir.",
                logs: "Registos de {{channel}}"
            },
            option: {
                mode: {
                    label: "Modo",
                    description: "Como mostrar o registo do canal de voz",
                    menu: "Menu de registo",
                    associated: "Registar diretamente no chat associado",
                    both: "Registar no chat e no menu de registo"
                },
                voiceChannelChatSelf: {
                    label: "Chat de Voz - Próprio",
                    description: "Registar os teus próprios eventos nos canais de voz"
                },
                voiceChannelChatSilent: {
                    label: "Chat de Voz Silencioso",
                    description: "Mensagens de entrar/sair/mudar nos chats de canais de voz serão silenciosas"
                },
                voiceChannelChatSilentSelf: {
                    label: "Chat de Voz Silencioso - Próprio",
                    description: "Mensagens de entrar/sair/mudar no chat de voz serão silenciosas se fores tu a realizá-las"
                },
                ignoreBlockedUsers: {
                    label: "Ignorar Utilizadores Bloqueados",
                    description: "Não registar utilizadores bloqueados"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Este plugin permite-te realizar múltiplas ações num canal inteiro (mudar, silenciar, desconectar, etc.) (originalmente por dutake)",
            option: {
                waitAfter: {
                    label: "Aguardar Após Ação",
                    description: "Quantidade de ações de API a realizar antes de aguardar (para evitar limites de frequência/rate limits)"
                },
                waitSeconds: {
                    label: "Segundos de Espera",
                    description: "Tempo de espera entre cada ação (em segundos)"
                }
            },
            context: {
                voiceTools: "Ferramentas de Voz",
                mentionAll: "Mencionar Todos os Utilizadores",
                disconnectAll: "Desconectar Todos",
                muteAll: "Silenciar Todos",
                unmuteAll: "Ativar Som de Todos",
                deafenAll: "Ensurdecer Todos",
                undeafenAll: "Ativar Áudio de Todos",
                moveAll: "Mover Todos"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Adiciona uma opção de descarregar às mensagens de voz. (Abre um novo separador no navegador)",
            context: {
                download: "Descarregar mensagem de voz"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Permite-te enviar mensagens de voz como no telemóvel. Para o fazer, clica com o botão direito no botão de carregar e clica em Enviar Mensagem de Voz.",
            option: {
                noiseSuppression: {
                    label: "Supressão de Ruído",
                    description: "Supressão de Ruído"
                },
                echoCancellation: {
                    label: "Cancelamento de Eco",
                    description: "Cancelamento de Eco"
                }
            },
            notification: {
                failed: {
                    upload: "Falha ao carregar mensagem de voz.",
                    start: "Falha ao iniciar gravação.",
                    finish: "Falha ao terminar gravação."
                }
            },
            context: {
                sendVoiceMessage: "Enviar Mensagem de Voz",
                missingPermissions: "(Sem Permissões)"
            },
            modal: {
                record: "Gravar Mensagem de Voz",
                upload: "Carregar Ficheiro",
                preview: "Pré-visualizar",
                failed: "Falha ao processar o ficheiro de áudio selecionado:",
                oggOpus: "As Mensagens de Voz têm de ser OggOpus para serem reproduzidas em iOS. Este ficheiro é {{type}} por isso não funcionará em iOS.",
                fix: "Para corrigir, primeiro converte para OggOpus, por exemplo usando o {{link}}",
                sending: "A enviar mensagem de voz... Por favor, aguarda.",
                stop: "Parar gravação",
                start: "Iniciar gravação",
                resume: "Retomar gravação",
                pause: "Pausar gravação",
                recording: "A GRAVAR",
                send: "Enviar",
            },
            text: {
                convertioWebConverter: "conversor web do convertio"
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Permite-te definir o volume de utilizadores e streams acima do máximo padrão",
            option: {
                multiplier: {
                    label: "Multiplicador",
                    description: "Multiplicador de Volume"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Adiciona novamente os menus de contexto que faltam na versão web do Discord: Links e Imagens (Copiar/Abrir Link/Imagem), Área de Texto (Copiar, Recortar, Colar, Corretor Ortográfico)",
            option: {
                addBack: {
                    label: "Adicionar de Volta",
                    description: "Adiciona de volta os menus de contexto do Discord para imagens, links e a barra de entrada de chat"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Volta a adicionar atalhos em falta na versão web do Discord. Só funciona totalmente no Plextron/Legcord, não no navegador",
            option: {
                showNavigationButtons: {
                    description: "Mostrar os botões de navegação retroceder/avançar na barra de título.",
                    label: "Mostrar botões de navegação"
                },
                overrideCommonKeybinds: {
                    description: "Permite que o Discord substitua os atalhos mais comuns de navegação entre separadores (ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+n). Só funciona em alguns navegadores que dão prioridade aos atalhos de sites.",
                    label: "Substituir atalhos comuns"
                }
            }
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Remove o limite de bitrate de 2500kbps nos clientes Chromium e Plextron.",
            option: {
                experimentalAV1Support: {
                    label: "Suporte AV1 Experimental",
                    description: "Ativar suporte para o codec AV1. Pode causar problemas como streams que carregam infinitamente"
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Renderiza os avatares dos utilizadores que reagiram a uma mensagem",
            option: {
                avatarClick: {
                    label: "Clique no Avatar",
                    description: "Ativar/desativar o clique nos avatares das reações"
                },
                clickableAvatars: {
                    description: "Quando ativado, clicar no avatar de quem reagiu abre o perfil em vez de adicionar a reação",
                    label: "Avatares clicáveis"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Passa o rato sobre o ícone de transmissão para ver que utilizadores estão a assistir à tua stream",
            modal: {
                noSpectator: "Sem espetadores"
            },
            option: {
                showPanel: {
                    label: "Mostrar Painel",
                    description: "Mostrar espetadores por baixo do painel de transmissão"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Altera a primeira letra de cada frase nas caixas de texto para maiúscula",
            option: {
                blockedWords: {
                    label: "Palavras Bloqueadas",
                    description: "Termos que não devem ser capitalizados (separar por vírgula)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Encaminha as notificações do Discord para o XSOverlay, para visualização fácil em VR",
            notification: {
                call: {
                    title: "{{user}} está a ligar-te.",
                    content: "Chamada a receber"
                },
                message: {
                    reply: " (resposta)",
                    embed: " [incorporação] ",
                    onlyEmbed: "Enviou incorporação(ões) de mensagem",
                    sticker: " [autocolante] ",
                    onlySticker: "Enviou um autocolante",
                    image: "imagem",
                    attachment: "anexo"
                },
                test: {
                    title: "Olá da Plexcord!",
                    content: "Isto é uma notificação de teste! *Explode*",
                    button: "Enviar notificação de teste"
                }
            },
            option: {
                webSocketPort: {
                    label: "Porta WebSocket",
                    description: "Porta do WebSocket"
                },
                preferUDP: {
                    label: "Preferir UDP",
                    description: "Ativa se usares uma versão antiga do XSOverlay incapaz de ligar através de WebSockets. Esta definição é ignorada na web."
                },
                botNotifications: {
                    label: "Notificações de Bots",
                    description: "Permitir notificações de bots"
                },
                serverNotifications: {
                    label: "Notificações de Servidores",
                    description: "Permitir notificações de servidores"
                },
                dmNotifications: {
                    label: "Notificações de DM",
                    description: "Permitir notificações de Mensagens Diretas"
                },
                groupDmNotifications: {
                    label: "Notificações de DM de Grupo",
                    description: "Permitir notificações de DMs de Grupo"
                },
                callNotifications: {
                    label: "Notificações de Chamada",
                    description: "Permitir notificações de chamadas"
                },
                pingColor: {
                    label: "Cor de Menção",
                    description: "Cor da menção de utilizador"
                },
                channelPingColor: {
                    label: "Cor de Menção de Canal",
                    description: "Cor da menção de canal"
                },
                soundPath: {
                    label: "Caminho do Som",
                    description: "Som da notificação (padrão/aviso/erro)"
                },
                timeout: {
                    label: "Duração",
                    description: "Duração da notificação (segundos)"
                },
                lengthBasedTimeout: {
                    label: "Duração Baseada no Tamanho",
                    description: "Extender a duração com base no tamanho da mensagem"
                },
                opacity: {
                    label: "Opacidade",
                    description: "Opacidade da notificação"
                },
                volume: {
                    label: "Volume",
                    description: "Volume"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Bloqueia anúncios em incorporações do YouTube e na atividade Watch Together via AdGuard"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "Adiciona descrições às incorporações de vídeos do YouTube"
        },
        addAttachments: {
            name: "AddAttachments",
            description: "Permite adicionar novos anexos ao editar mensagens",
            toast: {
                youCannotAddMore: "Não podes adicionar mais anexos a esta mensagem.",
                youCanOnlyAdd: "Só podes adicionar mais {{count}} anexo(s) a esta mensagem.",
                uploadingThisCanTake: "A carregar, isto pode demorar algum tempo...",
                addedOne: "Anexo adicionado com sucesso!",
                addedMany: "Anexos adicionados com sucesso!"
            },
            text: {
                addAttachments: "Adicionar anexos"
            }
        },
        advancedPermissions: {
            option: {
                simplifiedCard: {
                    description: "O que fazer com o cartão de permissões simplificado do Discord",
                    label: "Cartão simplificado",
                    hide: "Ocultar",
                    collapse: "Tornar recolhível",
                    show: "Deixar visível"
                },
                collapsedByDefault: {
                    description: "Iniciar com as permissões simplificadas recolhidas.",
                    label: "Recolhido por predefinição"
                }
            },
            name: "AdvancedPermissions",
            description: "Mostra o cartão de permissões avançadas por predefinição.",
            text: {
                simplifiedPermissions: "Permissões simplificadas"
            }
        },
        autoJumpToMessage: {
            option: {
                onlyWhenUnfocused: {
                    description: "Saltar automaticamente para mensagens apenas quando a janela do Discord não estiver em foco.",
                    label: "Apenas sem foco"
                }
            },
            name: "AutoJumpToMessage",
            description: "Abre automaticamente o canal das novas mensagens."
        },
        betterForwards: {
            text: {
                serverIconForName: "Ícone do servidor de {{name}}",
                messageAttachments: "Anexos da mensagem",
                messageTextWillNot: "O texto da mensagem não será reencaminhado quando esta opção estiver desativada",
                forwardEverything: "Reencaminhar tudo",
                viewServer: "Ver servidor",
                embed: "Incorporação",
                embedNumber: "Incorporação {{number}}",
                image: "Imagem",
                video: "Vídeo",
                serverIcon: "Ícone do servidor {{name}}",
                dmIcon: "Ícone de MD de {{name}}",
                groupDmIcon: "Ícone da MD de grupo {{name}}"
            },
            option: {
                resendOnFail: {
                    description: "Tentará reenviar uma mensagem reencaminhada se o reencaminhamento falhar. Pode causar menções ou spam de texto não intencionais. Contorna as restrições NSFW.",
                    label: "Reenviar em caso de falha"
                },
                forwardPreface: {
                    description: "Com o que a mensagem reencaminhada deve começar",
                    label: "Prefixo de reencaminhamento"
                },
                dontFollowForwards: {
                    description: "Depois de reencaminhar uma única mensagem, não saltar para ela. Mantém Shift premido para ignorar este comportamento.",
                    label: "Não seguir reencaminhamentos"
                },
                selfForward: {
                    description: "Mostrar o canal atual no pop-up da lista de reencaminhamento.",
                    label: "Reencaminhar para si"
                }
            },
            name: "BetterForwards",
            description: "Utilitários de reencaminhamento de mensagens, incluindo contorno de NSFW e melhorias na interface."
        },
        betterImageEditor: {
            text: {
                search: "Pesquisar",
                searchSavedPictures: "Pesquisar imagens guardadas",
                clearTheSearch: "Limpar a pesquisa",
                savedPictures: "Imagens guardadas",
                removeName: "Remover {{name}}",
                removeHoldShiftTo: "Remover. Mantém Shift premido para ignorar a confirmação",
                originals: "Originais",
                putBackTheLast: "Repor o último",
                forgetEveryRememberedCrop: "Esquecer todos os recortes memorizados?",
                yourPicturesStayEach: "As tuas imagens ficam. Cada uma abrirá sem enquadramento a partir de agora, até a recortares novamente.",
                forget: "Esquecer",
                cancel: "Cancelar",
                clearSavedPictures: "Limpar imagens guardadas?",
                everyPictureYouHave: "Todas as imagens guardadas aqui serão removidas, juntamente com o recorte memorizado de cada uma. O arquivo do próprio Discord e o teu avatar e faixa atuais não são afetados.",
                clear: "Limpar",
                removeThisPicture: "Remover esta imagem?",
                remove: "Remover",
                keepTheCroppedCopy: "Manter a cópia recortada?",
                itGoesOnThe: "Vai para a prateleira {{toLowerCase}}, ao lado dos teus originais.",
                keep: "Manter",
                noThanks: "Não, obrigado",
                exportToAFile: "Exportar para um ficheiro",
                importFromAFile: "Importar de um ficheiro",
                forgetRememberedFraming: "Esquecer enquadramento memorizado",
                clearSavedPictures2: "Limpar imagens guardadas",
                croppedKind: "{{kind}} recortados",
                unpinName: "Desafixar {{name}}",
                pinName: "Fixar {{name}}",
                pinnedNeverDrops: "Fixado, nunca sai da prateleira",
                pinNeverDrops: "Fixa para que nunca saia da prateleira",
                nothingMatches: "Nada aqui corresponde a isso",
                originalsEmpty: "As imagens que escolhes, colas ou largas aparecem aqui",
                croppedEmpty: "As imagens que recortas aparecem aqui",
                forgotFraming: "Enquadramento esquecido em {{count}} imagem(ns)",
                nothingFramed: "Nada estava enquadrado",
                pictureLibrary: "Biblioteca de imagens",
                addedPictures: "{{count}} imagem(ns) adicionada(s)",
                nothingNew: "Nada de novo nesse ficheiro",
                shownOfTotal: "{{shown}} de {{total}}",
                keptCount: "{{count}} guardadas",
                youAreWearingThis: "Está a usar isto",
                removePictureBody: "{{name}} será removida das suas imagens guardadas, juntamente com o corte memorizado."
            },
            option: {
                librarySize: {
                    description: "Quantas imagens manter em cada prateleira.",
                    label: "Tamanho da biblioteca"
                },
                rememberCrop: {
                    description: "Restaura o zoom e a posição que usaste por último numa imagem.",
                    label: "Lembrar recorte"
                },
                forgetFraming: {
                    description: "Descarta todos os recortes memorizados e abre cada imagem como o Discord faria.",
                    label: "Esquecer enquadramento"
                },
                saveCropped: {
                    description: "Mantém uma cópia de cada imagem depois de a recortares.",
                    label: "Guardar recortadas"
                },
                askBeforeSavingCropped: {
                    description: "Perguntar primeiro em vez de manter automaticamente a cópia recortada.",
                    label: "Perguntar antes de guardar recortadas"
                },
                transfer: {
                    description: "Leva as tuas imagens, e o enquadramento de cada uma, para outro dispositivo.",
                    label: "Transferir"
                },
                clearLibrary: {
                    description: "Descarta todas as imagens que guardaste.",
                    label: "Limpar biblioteca"
                }
            },
            name: "BetterImageEditor",
            description: "Mantém uma prateleira com as tuas imagens no editor de avatar e faixa, e lembra como recortaste cada uma.",
            toast: {
                couldNotExportYour: "Não foi possível exportar as tuas imagens",
                couldNotReadThat: "Não foi possível ler esse ficheiro",
                thatPictureIsMissing: "Essa imagem está em falta",
                thatPictureIsToo: "Essa imagem é demasiado grande para o Discord",
                couldNotUseThat: "Não foi possível usar essa imagem",
                couldNotKeepThe: "Não foi possível manter a cópia recortada"
            },
            kind: {
                avatars: "avatares",
                banners: "banners",
                serverIcons: "ícones de servidor",
                serverBanners: "banners de servidor",
                eventCovers: "capas de eventos",
                homeHeaders: "cabeçalhos da página inicial",
                decorations: "decorações",
                widgetCovers: "capas de widgets",
                widgetImages: "imagens de widgets"
            }
        },
        cancelFriendRequest: {
            name: "CancelFriendRequest",
            description: "Adiciona uma forma de cancelar pedidos de amizade enviados a partir dos perfis.",
            text: {
                cancelOutgoingFriendRequest: "Cancelar pedido de amizade enviado"
            }
        },
        clipUpload: {
            text: {
                createdAtMustBe: "A data de criação tem de ser uma data válida.",
                cancel: "Cancelar",
                uploadClipFile: "Carregar ficheiro de clip",
                fileName: "Nome do ficheiro",
                title: "Título",
                epicMoment: "Momento épico",
                message: "Mensagem",
                checkOutThisClip: "Vê este clip!",
                spoiler: "Spoiler",
                remix: "Remix",
                thumbnail: "Miniatura",
                file: "Ficheiro",
                selectFile: "Selecionar ficheiro",
                parseClipMetadataFrom: "Extrair metadados do clip do ficheiro",
                selectFriends: "Selecionar amigos",
                selectAGame: "Selecionar um jogo",
                customApplicationId: "ID de aplicação personalizado",
                createdAt: "Criado em",
                participants: "Participantes",
                onlyTagPeopleWho: "Identifica apenas pessoas que estavam presentes e consentiram em aparecer neste clip.",
                gameApplication: "Jogo/Aplicação",
                uploadClipFile2: "Carregar ficheiro de clip",
                uploading: "A enviar",
                upload: "Enviar",
                noFileSelected: "Nenhum ficheiro selecionado",
                couldNotPrepare: "Não foi possível preparar o ficheiro selecionado.",
                couldNotRead: "Não foi possível ler o ficheiro selecionado.",
                couldNotUpdateMetadata: "Não foi possível atualizar os metadados do clipe.",
                notCompatible: "Este ficheiro não é compatível. Usa um clipe MP4 com vídeo H.264 e áudio AAC.",
                uploadFailed: "Falha no envio.",
                noUploadSlot: "O Discord não retornou um espaço de envio.",
                uploadCanceled: "Envio cancelado.",
                failedToUpload: "Falha ao enviar o clipe.",
                selectClipFile: "Selecionar ficheiro de clipe",
                mp4Video: "Vídeo MP4"
            },
            name: "ClipUpload",
            description: "Adiciona um botão para carregar um ficheiro de vídeo local como clip do Discord.",
            toast: {
                checkingClipFile: "A verificar o ficheiro do clip.",
                convertingClipFile: "A converter o ficheiro do clip.",
                clipUploaded: "Clip carregado."
            }
        },
        collapsibleUI: {
            name: "CollapsibleUI",
            description: "Superfícies recolhíveis nativas para canais, membros, botões do chat e área do utilizador.",
            text: {
                collapsibleUi: "Interface recolhível",
                guildBar: "Barra de servidores",
                channelList: "Lista de canais",
                membersList: "Lista de membros",
                messageButtons: "Botões de mensagem",
                titleBar: "Barra de título",
                headerBar: "Barra de cabeçalho",
                userArea: "Área do utilizador"
            },
            option: {
                detachUserArea: {
                    description: "Desacopla a área do utilizador para poder ser movida livremente quando não está recolhida.",
                    label: "Desacoplar área do utilizador"
                },
                detachedUserAreaX: {
                    description: "Guarda a posição x da área do utilizador desacoplada.",
                    label: "Área do utilizador desacoplada X"
                },
                detachedUserAreaY: {
                    description: "Guarda a posição y da área do utilizador desacoplada.",
                    label: "Área do utilizador desacoplada Y"
                },
                guildBarCollapsed: {
                    description: "Mantém a barra de servidores recolhida.",
                    label: "Barra de servidores recolhida"
                },
                channelListCollapsed: {
                    description: "Mantém a lista de canais recolhida.",
                    label: "Lista de canais recolhida"
                },
                membersListCollapsed: {
                    description: "Mantém a lista de membros recolhida.",
                    label: "Lista de membros recolhida"
                },
                chatButtonsCollapsed: {
                    description: "Mantém a linha de botões de mensagem recolhida.",
                    label: "Botões do chat recolhidos"
                },
                titleBarCollapsed: {
                    description: "Mantém a barra de título recolhida.",
                    label: "Barra de título recolhida"
                },
                headerBarCollapsed: {
                    description: "Mantém a barra de cabeçalho recolhida.",
                    label: "Barra de cabeçalho recolhida"
                },
                userAreaCollapsed: {
                    description: "Mantém a área do utilizador recolhida.",
                    label: "Área do utilizador recolhida"
                }
            }
        },
        customCommands: {
            text: {
                cancel: "Cancelar",
                name: "Name",
                response: "Resposta",
                detectedArguments: "Argumentos detetados",
                exampleCommandResponse: "Exemplo de resposta do comando:",
                exampleUsage: "Exemplo de utilização:",
                exampleOutput: "Exemplo de resultado:",
                viewArgumentsGuide: "Ver guia de argumentos",
                editTag: "Editar etiqueta",
                deleteTag: "Eliminar etiqueta",
                registeredTags: "Etiquetas registadas",
                createTag: "Criar etiqueta",
                aTagWithThe: "Não existe uma etiqueta com o nome **{{name}}**!",
                successfullyDeletedTheTag: "A etiqueta **{{name}}** foi eliminada com sucesso!",
                ephemeralReserved: "O nome de argumento \"ephemeral\" é reservado e não pode ser usado.",
                createNewTag: "Criar nova tag",
                editTagSubtitle: "Edita o teu comando personalizado.",
                createTagSubtitle: "Cria uma nova tag que será registrada como comando de barra.",
                save: "Guardar",
                create: "Criar",
                variablesHelp: "A tua resposta pode incluir variáveis entre chaves duplas, que se tornarão argumentos do comando, por exemplo",
                defaultValuesHelp: "Podes definir argumentos com valores predefinidos usando um sinal de igual, por exemplo",
                noTagsYet: "Ups! Ainda não há tags, usa `/tags create` para criar uma!",
                nameAlreadyExists: "Já existe uma etiqueta com o nome \"{{name}}\" e será substituída.",
                defaultValue: "(predefinição: {{value}})"
            },
            name: "CustomCommands",
            description: "Permite criar comandos de barra / etiquetas personalizados",
            option: {
                tagsList: {
                    label: "Lista de etiquetas"
                }
            },
            command: {
                ephemeral: "Se a resposta deve ser visível apenas para ti",
                tags: "Gerir todos os comandos personalizados",
                create: "Criar uma nova tag",
                list: "Listar todas as tuas etiquetas",
                delete: "Remover uma etiqueta pelo nome",
                tagName: "O nome da etiqueta"
            }
        },
        fileUpload: {
            name: "FileUpload",
            description: "Carrega ficheiros para serviços de alojamento como Zipline, Nest, S3 e WebDAV",
            dialog: {
                message: "O FileUpload quer carregar ficheiros para {{origin}}",
                detail: "A menos que reconheça e confie totalmente em {{origin}}, deve cancelar este pedido!\n\nConfiar memoriza este servidor, Permitir autoriza apenas este pedido.",
                trust: "Confiar",
                allow: "Permitir",
                cancel: "Cancelar"
            },
            toast: {
                approvedServersReset: "Servidores aprovados repostos",
                fileTypeNotAllowed: "Tipo de ficheiro não permitido pelo filtro atual",
                pleaseConfigureFileuploadSettings: "Configura primeiro as definições do FileUpload",
                sharexConfigIsValid: "A configuração do ShareX é válida",
                importedSharexConfig: "Configuração do ShareX importada",
                uploadSuccessfulButNo: "Carregamento concluído, mas não havia URL disponível para copiar",
                uploadSuccessfulUrlCopied: "Carregamento concluído, URL copiado para a área de transferência",
                uploadSuccessfulButFailed: "Carregamento concluído, mas falha ao copiar o URL",
                uploadSuccessful: "Carregamento concluído",
                uploadSucceededWithServicelabels: "Carregamento concluído com {{serviceLabels_service}} após alternativa",
                apngToGifConversion: "Falha na conversão de APNG para GIF, a carregar como APNG",
                uploadAlreadyInProgress: "Carregamento já em curso",
                uploadCancelled: "Carregamento cancelado",
                uploadFailedMessage: "Falha no carregamento: {{message}}",
                invalidSharexConfig: "Configuração do ShareX inválida",
                failedToImportSharexConfig: "Não foi possível importar a configuração do ShareX"
            },
            text: {
                uploadToServicename: "Carregar para {{serviceName}}",
                uploadToHost: "Carregar para o alojamento",
                chooseFile: "Escolher ficheiro...",
                zipline: "Zipline",
                eZHost: "E-Z Host",
                nest: "Nest",
                encryptingHost: "Encrypting.host",
                s3Compatible: "Compatível com S3",
                catboxMoe: "Catbox.moe",
                litterbox: "Litterbox",
                sharexCustomUploader: "Carregador personalizado do ShareX",
                webdavNextcloudOwncloud: "WebDAV (Nextcloud/Owncloud)",
                n1Hour: "1 hora",
                n12Hours: "12 horas",
                n24Hours: "24 horas",
                n72Hours: "72 horas",
                corsProxy: "Proxy CORS",
                query: "Consulta",
                param: "Parâmetro",
                fakeLink: "Ligação falsa",
                embed: "Incorporação",
                n30Seconds: "30 segundos",
                n1Minute: "1 minuto",
                n2Minutes: "2 minutos",
                n5Minutes: "5 minutos",
                n10Minutes: "10 minutos",
                dragHostsToReorder: "Arrasta os serviços para reordenar as tentativas alternativas. O serviço selecionado é tentado primeiro e depois é usada esta ordem.",
                chooseWhereFileuploadSends: "Escolhe para onde o FileUpload envia novos ficheiros.",
                connectionDetailsForYour: "Detalhes de ligação da tua instância Zipline.",
                theUrlOfYour: "O URL da tua instância Zipline",
                yourZiplineApiAuthorization: "O teu token de autorização da API do Zipline",
                yourZiplineApiToken: "O teu token de API do Zipline",
                folderIdForUploads: "ID da pasta para carregamentos (deixa vazio para nenhuma pasta)",
                leaveEmptyForNo: "Deixa vazio para nenhuma pasta",
                connectionDetailsForE: "Detalhes de ligação para carregamentos no E-Z Host.",
                yourEZHost: "A tua chave de API do E-Z Host",
                connectionDetailsForNest: "Detalhes de ligação para carregamentos no Nest.",
                yourNestApiAuthorization: "O teu token de autorização da API do Nest",
                yourNestApiToken: "O teu token de API do Nest",
                connectionDetailsForEncrypting: "Detalhes de ligação para carregamentos no Encrypting.host.",
                yourEncryptingHostApi: "A tua chave de API do Encrypting.host",
                howEncryptingHostShould: "Como o Encrypting.host deve formatar as ligações devolvidas.",
                selectUrlStyle: "Seleciona o estilo de URL",
                optionalTitleForEmbed: "Título opcional para respostas no estilo de incorporação.",
                optionalTitle: "Título opcional",
                optionalColorForEmbed: "Cor opcional para respostas no estilo de incorporação.",
                optionalColor: "Cor opcional",
                optionalFakeLinkValue: "Valor de ligação falsa opcional para respostas no estilo fakelink.",
                optionalFakeLink: "Ligação falsa opcional",
                connectionDetailsAndObject: "Detalhes de ligação e nomes de objetos do teu bucket.",
                s3CompatibleEndpointE: "Endpoint compatível com S3 (ex.: https://<accountid>.r2.cloudflarestorage.com)",
                bucketToUploadInto: "Bucket de destino",
                awsRegionOrAuto: "Região da AWS ou auto para Cloudflare R2",
                s3CompatibleAccessKey: "Chave de acesso compatível com S3",
                yourAccessKeyId: "O teu ID de chave de acesso",
                s3CompatibleSecretKey: "Chave secreta compatível com S3",
                yourSecretAccessKey: "A tua chave de acesso secreta",
                optionalTemporaryCredentialToken: "Token de credencial temporária opcional",
                optionalSessionToken: "Token de sessão opcional",
                optionalPublicUrlBase: "URL base pública opcional para as ligações devolvidas",
                optionalFolderPrefixInside: "Pasta/prefixo opcional dentro do bucket",
                useEndpointBucketKey: "Usar o formato endpoint/bucket/chave, recomendado para R2.",
                optionalAccountBindingFor: "Associação de conta opcional para carregamentos no Catbox.",
                yourCatboxUserhashFor: "O teu userhash do Catbox para associar a conta; deixa vazio para carregamentos anónimos.",
                yourCatboxUserhash: "O teu userhash do Catbox",
                howLongUploadsAre: "Durante quanto tempo os carregamentos são mantidos",
                selectExpiry: "Seleciona a expiração",
                optionalAccountBindingFor2: "Associação de conta opcional para carregamentos no GoFile.",
                optionalGofileTokenTo: "Token do GoFile opcional para carregar para a tua conta.",
                optionalGofileToken: "Token do GoFile opcional",
                connectionDetailsForPixelvault: "Detalhes de ligação para carregamentos no PixelVault.",
                yourPixelvaultAuthorizationKey: "A tua chave de autorização do PixelVault.",
                yourPixelvaultUploadKey: "A tua chave de carregamento do PixelVault",
                optionalAccountBindingFor3: "Associação de conta opcional para carregamentos no PixelDrain.",
                optionalPixeldrainApiKey: "Chave de API do PixelDrain opcional para carregamentos autenticados. Deixa vazio para carregamentos anónimos.",
                yourPixeldrainApiKey: "A tua chave de API do PixelDrain",
                pasteImportOrValidate: "Cola, importa ou valida uma configuração de carregador personalizado do ShareX.",
                pasteYourSharexCustom: "Cola o JSON do teu carregador personalizado do ShareX (.sxcu/.json). DestinationType tem de incluir FileUploader ou ImageUploader.",
                importFromFileOr: "Importar de ficheiro ou validar a configuração colada",
                connectionDetailsForWebdav: "Detalhes de ligação para servidores WebDAV (Nextcloud, Owncloud, etc.).",
                baseWebdavUrlE: "URL base do WebDAV (ex.: https://nextcloud.example.com/remote.php/dav/files/username)",
                optionalSubdirectoryOnThe: "Subdiretório opcional no servidor para carregamento (ex.: uploads)",
                leaveEmptyForRoot: "Deixa vazio para o diretório raiz",
                selectYourWebdavServer: "Seleciona o tipo de servidor WebDAV. Nextcloud e ownCloud criam uma ligação pública de partilha. Genérico devolve o URL direto do ficheiro.",
                selectServerType: "Seleciona o tipo de servidor",
                howToReturnThe: "Como devolver a ligação pública de partilha. Página de partilha leva a uma página web; Transferência direta leva diretamente ao ficheiro; Ligação Markdown envolve a página num nome de ficheiro clicável.",
                selectShareLinkFormat: "Seleciona o formato da ligação",
                controlWhatFileuploadDoes: "Controla o que o FileUpload faz depois de um serviço devolver um URL.",
                stripQueryParametersFrom: "Remover parâmetros de consulta do URL do ficheiro carregado.",
                wrapUploadedVideoLinks: "Envolver ligações de vídeo carregadas com um proxy de incorporação para melhores pré-visualizações no Discord.",
                chooseWhichEmbedProxy: "Escolhe que serviço de proxy de incorporação usar para ligações de vídeo carregadas",
                selectAnEmbedProxy: "Seleciona um serviço de proxy de incorporação",
                convertApngFilesTo: "Converter ficheiros APNG para o formato GIF.",
                useTheOriginalFilename: "Usar o nome original do ficheiro em vez de nomear os carregamentos como upload.ext.",
                automaticallyCopyTheUploaded: "Copiar automaticamente o URL do ficheiro carregado para a área de transferência.",
                onlyUseTheSelected: "Usar apenas o carregador selecionado sem tentar serviços alternativos.",
                afterUploadInsertThe: "Após o carregamento, inserir o URL resultante na caixa de chat atual.",
                wrapInsertedUrlsIn: "Envolver URLs inseridos entre parênteses angulares para evitar a pré-visualização do Discord.",
                chooseWhenFileuploadTakes: "Escolhe quando o FileUpload assume o tratamento de ficheiros do Discord.",
                useFileuploadWhenUploading: "Usar o FileUpload ao carregar pelo seletor de ficheiros do Discord.",
                useFileuploadOnlyFor: "Usar o FileUpload apenas para ficheiros maiores do que o teu limite atual de carregamento do Discord.",
                manualDiscordFileSize: "Limite manual de tamanho de ficheiro do Discord em MB, usado quando a deteção automática está errada. Deixa vazio para automático.",
                auto: "Automático",
                commaSeparatedListOf: "Lista de extensões separadas por vírgulas (ex.: png,jpg,gif). Deixa vazio para permitir todas.",
                configureBrowserUploadProxying: "Configura o proxy e os tempos limite dos carregamentos pelo navegador.",
                corsProxyUsedFor: "Proxy CORS opcional para carregamentos que não podem passar pela aplicação de ambiente de trabalho. O proxy vê todos os ficheiros e tokens enviados através dele, por isso utilize apenas um em que confie. Deixe vazio para carregar diretamente.",
                maximumTimeToWait: "Tempo máximo de espera por tentativa de carregamento antes de mudar para o alternativo",
                selectTimeout: "Seleciona o tempo limite",
                drag: "Arrastar",
                importSxcuJson: "Importar .sxcu/.json",
                validate: "Validar",
                resetToDefault: "Repor predefinição",
                progress: "{{percent}}% - {{transferred}} de {{total}}",
                cancel: "Cancelar"
            },
            option: {
                serviceType: {
                    description: "Serviço de carregamento selecionado",
                    label: "Tipo de serviço"
                },
                serviceUrl: {
                    description: "URL do serviço Zipline",
                    label: "URL do serviço"
                },
                ziplineToken: {
                    description: "Token de autenticação do Zipline",
                    label: "Token do Zipline"
                },
                folderId: {
                    description: "ID da pasta do Zipline (opcional)",
                    label: "ID da pasta"
                },
                ezHostKey: {
                    description: "Chave de API do E-Z Host",
                    label: "Chave do E-Z Host"
                },
                nestToken: {
                    description: "Token de API do Nest",
                    label: "Token do Nest"
                },
                encryptingHostKey: {
                    description: "Chave de API do Encrypting.host",
                    label: "Chave do Encrypting.host"
                },
                encryptingHostUrlStyle: {
                    description: "Estilo de URL do Encrypting.host",
                    label: "Estilo de URL do Encrypting.host"
                },
                encryptingHostDomains: {
                    description: "Lista JSON de domínios do Encrypting.host",
                    label: "Domínios do Encrypting.host"
                },
                encryptingHostTitle: {
                    description: "Título opcional da incorporação do Encrypting.host",
                    label: "Título do Encrypting.host"
                },
                encryptingHostColor: {
                    description: "Cor opcional da incorporação do Encrypting.host",
                    label: "Cor do Encrypting.host"
                },
                encryptingHostFakelink: {
                    description: "Ligação falsa opcional do Encrypting.host",
                    label: "Ligação falsa do Encrypting.host"
                },
                s3Endpoint: {
                    description: "URL do endpoint compatível com S3",
                    label: "Endpoint S3"
                },
                s3Bucket: {
                    description: "Nome do bucket S3",
                    label: "Bucket S3"
                },
                s3Region: {
                    description: "Região do S3 (usa auto para R2)",
                    label: "Região do S3"
                },
                s3AccessKeyId: {
                    description: "ID da chave de acesso do S3",
                    label: "ID da chave de acesso S3"
                },
                s3SecretAccessKey: {
                    description: "Chave de acesso secreta do S3",
                    label: "Chave de acesso secreta S3"
                },
                s3SessionToken: {
                    description: "Token de sessão do S3 (opcional)",
                    label: "Token de sessão S3"
                },
                s3PublicUrl: {
                    description: "URL base pública (opcional)",
                    label: "URL pública do S3"
                },
                s3Prefix: {
                    description: "Prefixo da chave de objeto do S3 (opcional)",
                    label: "Prefixo do S3"
                },
                s3ForcePathStyle: {
                    description: "Usar URLs do S3 no estilo de caminho",
                    label: "Forçar estilo de caminho do S3"
                },
                litterboxExpiry: {
                    description: "Período de retenção do Litterbox",
                    label: "Expiração do Litterbox"
                },
                catboxUserhash: {
                    description: "Userhash do Catbox para associar a conta",
                    label: "Userhash do Catbox"
                },
                sharexConfig: {
                    description: "JSON do carregador personalizado do ShareX",
                    label: "Configuração do ShareX"
                },
                disableFallbacks: {
                    description: "Desativar serviços de carregamento alternativos",
                    label: "Desativar alternativas"
                },
                autoSend: {
                    description: "Inserir o URL carregado na caixa do chat",
                    label: "Enviar automaticamente"
                },
                autoFormat: {
                    description: "Envolver o URL inserido entre parênteses angulares",
                    label: "Formatar automaticamente"
                },
                bypassDiscordUpload: {
                    description: "Contornar os carregamentos do Discord e usar o FileUpload em vez disso.",
                    label: "Contornar carregamento do Discord"
                },
                bypassDiscordUploadOnlyOverLimit: {
                    description: "Usar o FileUpload apenas se os ficheiros excederem o limite de tamanho.",
                    label: "Contornar carregamento do Discord só acima do limite"
                },
                customDiscordFileSizeLimitMB: {
                    description: "Limite manual de tamanho de ficheiro do Discord em MB. 0 significa deteção automática.",
                    label: "Limite de tamanho do Discord personalizado (MB)"
                },
                gofileToken: {
                    description: "Token de API do GoFile (opcional)",
                    label: "Token do GoFile"
                },
                fallbackOrder: {
                    description: "Ordem dos carregadores alternativos",
                    label: "Ordem alternativa"
                },
                pixelVaultKey: {
                    description: "Chave de carregamento do PixelVault",
                    label: "Chave do PixelVault"
                },
                pixelDrainKey: {
                    description: "Chave de API do PixelDrain (opcional)",
                    label: "Chave do PixelDrain"
                },
                uploadTimeoutMs: {
                    description: "Tempo limite de carregamento em milissegundos",
                    label: "Tempo limite de carregamento (ms)"
                },
                stripQueryParams: {
                    description: "Remover parâmetros de consulta dos URLs carregados",
                    label: "Remover parâmetros de consulta"
                },
                embedProxyEnabled: {
                    description: "Encaminhar ligações de vídeo carregadas através de um serviço auxiliar de incorporação.",
                    label: "Proxy de incorporação ativado"
                },
                embedProxyService: {
                    description: "Serviço auxiliar de incorporação que envolve as ligações de vídeo carregadas.",
                    label: "Serviço de proxy de incorporação"
                },
                corsProxyUrl: {
                    description: "URL de proxy CORS opcional para carregamentos no navegador",
                    label: "URL do proxy CORS"
                },
                apngToGif: {
                    description: "Converter carregamentos APNG em GIF",
                    label: "APNG para GIF"
                },
                preserveOriginalFilename: {
                    description: "Manter o nome original do ficheiro ao carregar.",
                    label: "Manter nome original do ficheiro"
                },
                autoCopy: {
                    description: "Copiar automaticamente o URL do carregamento",
                    label: "Copiar automaticamente"
                },
                autoUploadPastedFiles: {
                    description: "Carregar automaticamente ficheiros da área de transferência para o alojamento de imagens ao colar no chat.",
                    label: "Carregar automaticamente ficheiros colados"
                },
                webdavUrl: {
                    description: "URL do servidor WebDAV",
                    label: "URL do WebDAV"
                },
                webdavUsername: {
                    description: "Nome de utilizador do WebDAV",
                    label: "Utilizador do WebDAV"
                },
                webdavPassword: {
                    description: "Palavra-passe do WebDAV ou token de aplicação",
                    label: "Palavra-passe do WebDAV"
                },
                webdavDirectory: {
                    description: "Subdiretório opcional no servidor WebDAV",
                    label: "Diretório do WebDAV"
                },
                webdavServerType: {
                    description: "Tipo de servidor WebDAV",
                    label: "Tipo de servidor WebDAV",
                    nextcloud: "Nextcloud",
                    owncloud: "ownCloud",
                    generic: "WebDAV genérico"
                },
                webdavShareType: {
                    description: "Formato da ligação de partilha WebDAV",
                    label: "Tipo de partilha WebDAV",
                    sharepage: "Página de partilha",
                    directdownload: "Transferência direta",
                    markdown: "Ligação Markdown"
                },
                uploadAllowedFileTypes: {
                    description: "Lista separada por vírgulas de extensões permitidas (ex.: png,jpg,gif,mp4). Deixa vazio para permitir todos os ficheiros.",
                    label: "Tipos de ficheiro permitidos para carregamento"
                },
                settingsComponent: {
                    description: "Definições",
                    label: "Componente de definições"
                }
            },
            panel: {
                approvedServers: "Servidores aprovados",
                approvedServersDescription: "Servidores S3 e WebDAV para os quais permitiu que o FileUpload carregasse ficheiros. Ao repor, será perguntado novamente no próximo carregamento.",
                resetApprovedServers: "Repor servidores aprovados",
                fallbackOrder: "Ordem alternativa",
                uploadService: "Serviço de carregamento",
                zipline: "Zipline",
                serviceUrl: "URL do serviço",
                ziplineToken: "Token do Zipline",
                folderId: "ID da pasta",
                eZHost: "E-Z Host",
                eZHostApiKey: "Chave de API do E-Z Host",
                nest: "Nest",
                nestToken: "Token do Nest",
                encryptingHost: "Encrypting.host",
                encryptingHostApiKey: "Chave de API do Encrypting.host",
                urlStyle: "Estilo de URL",
                domainsJson: "Domínios (JSON)",
                embedTitle: "Título da incorporação",
                embedColor: "Cor da incorporação",
                fakeLink: "Ligação falsa",
                s3CompatibleStorage: "Armazenamento compatível com S3",
                s3EndpointUrl: "URL do endpoint S3",
                bucketName: "Nome do bucket",
                region: "Região",
                accessKeyId: "ID da chave de acesso",
                secretAccessKey: "Chave de acesso secreta",
                sessionToken: "Token de sessão",
                publicBaseUrl: "URL base pública",
                objectKeyPrefix: "Prefixo da chave de objeto",
                usePathStyleEndpoint: "Usar endpoint no estilo de caminho",
                catbox: "Catbox",
                catboxUserhash: "Userhash do Catbox",
                litterboxExpiry: "Expiração do Litterbox",
                gofile: "GoFile",
                gofileToken: "Token do GoFile",
                pixelvault: "PixelVault",
                pixelvaultUploadKey: "Chave de carregamento do PixelVault",
                pixeldrain: "PixelDrain",
                pixeldrainApiKey: "Chave de API do PixelDrain",
                sharexCustomUploader: "Carregador personalizado do ShareX",
                sharexCustomUploaderConfig: "Configuração do carregador personalizado do ShareX",
                sharexConfigActions: "Ações de configuração do ShareX",
                webdav: "WebDAV",
                serverUrl: "URL do servidor",
                username: "Nome de Utilizador",
                passwordOrAppToken: "Palavra-passe ou token de aplicação",
                passwordOrAppToken2: "palavra-passe ou token de aplicação",
                uploadDirectory: "Diretório de carregamento",
                serverType: "Tipo de servidor",
                shareLinkFormat: "Formato da ligação de partilha",
                uploadBehavior: "Comportamento de carregamento",
                stripQueryParameters: "Remover parâmetros de consulta",
                useEmbedProxy: "Usar proxy de incorporação",
                embedProxyService: "Serviço de proxy de incorporação",
                convertApngToGif: "Converter APNG em GIF",
                preserveOriginalFilename: "Manter nome original do ficheiro",
                autoCopyUrl: "Copiar URL automaticamente",
                disableFallbackUploaders: "Desativar carregadores alternativos",
                insertUrlIntoChatInput: "Inserir URL na caixa de chat",
                formatInsertedUrl: "Formatar URL inserido",
                discordIntegration: "Integração com o Discord",
                bypassDiscordUploadButton: "Contornar botão de carregamento do Discord",
                autoUploadPastedFiles: "Carregar automaticamente ficheiros colados",
                respectDiscordFileSizeLimit: "Respeitar limite de tamanho do Discord",
                discordLimitOverrideMb: "Substituir limite do Discord (MB)",
                allowedFileTypes: "Tipos de ficheiro permitidos",
                network: "Rede",
                corsProxyUrl: "URL do proxy CORS",
                uploadTimeout: "Tempo limite de carregamento",
                domainsJsonDescription: "Array JSON de domínios a usar, por exemplo [\"offensive\"]."
            },
            status: {
                cancelled: "Envio cancelado.",
                uploadingVia: "A enviar via {{service}}...",
                uploading: "A enviar...",
                unknownError: "Erro desconhecido",
                startingVia: "A iniciar envio via {{service}}...",
                retryingWith: "A tentar novamente com {{service}} ({{attempt}}/{{total}})...",
                uploadedVia: "Enviado com sucesso via {{service}}.",
                allFailed: "Todos os serviços de envio falharam. Último erro: {{error}}",
                fileReady: "Ficheiro pronto, iniciando envio...",
                preparing: "A preparar envio...",
                failed: "Falha no envio: {{message}}",
                timedOut: "O envio expirou",
                serviceFailed: "{{service}} falhou: {{message}}",
                preparingFile: "A preparar {{name}}{{suffix}}..."
            }
        },
        gifMaker: {
            option: {
                lastWidth: {
                    label: "Última largura"
                },
                lastHeight: {
                    label: "Última altura"
                },
                lastCaptionMode: {
                    label: "Último modo de legenda"
                },
                lastCaptionText: {
                    label: "Último texto de legenda"
                },
                lastCaptionSize: {
                    label: "Último tamanho de legenda"
                },
                lastFontFamily: {
                    label: "Última família de tipo de letra"
                },
                lastBubbleTipBase: {
                    label: "Última base da ponta do balão"
                },
                maxWidth: {
                    description: "Largura máxima do ajuste automático.",
                    label: "Largura máxima"
                },
                maxHeight: {
                    description: "Altura máxima do ajuste automático.",
                    label: "Altura máxima"
                }
            },
            name: "GifMaker",
            description: "Cria e legenda GIFs a partir de qualquer multimédia no chat ou no seletor de GIF.",
            text: {
                send: "Enviar",
                export: "Exportar",
                makeGif: "Criar GIF",
                editGif: "Editar GIF",
                selectAFont: "Seleciona um tipo de letra...",
                enterCaption: "Escreve a legenda...",
                width: "Largura",
                height: "Altura",
                loadingFonts: "A carregar tipos de letra...",
                captions: "Legendas",
                text: "Texto",
                font: "Tipo de letra",
                fontSize: "Tamanho do tipo de letra",
                tipBase: "Base da ponta",
                dimensions: "Dimensões",
                generatingGif: "A gerar GIF...",
                clickOnThePreview: "Clica na pré-visualização para posicionar a ponta do balão",
                gifPreview: "Pré-visualização do GIF"
            },
            captionMode: {
                caption: "Legenda",
                none: "Nenhum",
                speechbubble: "Balão"
            }
        },
        gifProviderSwitcher: {
            name: "GifProviderSwitcher",
            description: "Permite usar a pesquisa de GIFs do Tenor ou Giphy em vez do Klipy",
            text: {
                tenor: "Tenor",
                giphy: "Giphy",
                klipy: "Klipy",
                providers: "Fornecedores",
                providersCount: "{{count}} fornecedores"
            }
        },
        keyboardNavigation: {
            toast: {
                invalidUrl: "URL inválido",
                copiedResponseToClipboard: "Resposta copiada para a área de transferência!",
                issueFetchingUrl: "Problema ao obter o URL",
                copiedGitInfoTo: "Informações do Git copiadas para a área de transferência!",
                noUpdatesAvailable: "Nenhuma atualização disponível",
                enabledPlugin: "{{id}} ativado com sucesso",
                disabledPlugin: "{{id}} desativado com sucesso"
            },
            text: {
                openPlexcordTab: "Abrir separador do Plexcord",
                openPluginTab: "Abrir separador de plugins",
                openThemesTab: "Abrir separador de temas",
                openUpdaterTab: "Abrir separador do atualizador",
                openCloudTab: "Abrir separador da nuvem",
                openBackupRestoreTab: "Abrir separador de cópia de segurança e restauro",
                restartClient: "Reiniciar cliente",
                openQuickCssFile: "Abrir ficheiro QuickCSS",
                openSettingsFolder: "Abrir pasta de definições",
                openInGithub: "Abrir no GitHub",
                openInBrowser: "Abrir no navegador",
                togglePlugin: "Alternar plugin",
                enable: "Ativar",
                disable: "Desativar",
                quickFetch: "Obtenção rápida",
                copyGitInfo: "Copiar informações do Git",
                checkForUpdates: "Procurar atualizações",
                aPlexcordUpdateIs: "Está disponível uma atualização do Plexcord!",
                clickHereToView: "Clica aqui para ver a atualização",
                navigateToServer: "Ir para o servidor",
                commandPalette: "Paleta de comandos",
                searchTheCommandPalette: "Pesquisar na paleta de comandos",
                multipleChoice: "Escolha múltipla",
                textInput: "Entrada de texto",
                openDevTab: "Abrir separador de programação",
                enterUrlToFetch: "Introduz a URL a buscar (somente GET)",
                typeAndPressEnter: "Escreva e prima Enter",
                recording: "A gravar...",
                recordKeybind: "Gravar atalho",
                enterUrl: "Introduza um URL"
            },
            option: {
                hotkey: {
                    description: "O atalho para abrir a paleta de comandos.",
                    label: "Atalho"
                },
                allowMouseControl: {
                    description: "Permitir que o rato controle a paleta de comandos.",
                    label: "Permitir controlo pelo rato"
                }
            },
            name: "KeyboardNavigation",
            description: "Permite navegar pela interface com o teclado."
        },
        lastActive: {
            name: "LastActive",
            description: "Um plugin para saltar para a última mensagem ativa tua ou de outro utilizador num canal/servidor.",
            toast: {
                failedToFindMessages: "Falha ao encontrar mensagens. Verifica a consola para mais detalhes.",
                couldnTFindAny: "Não foram encontradas mensagens recentes deste utilizador.",
                channelInformationNotAvailable: "Informações do canal indisponíveis.",
                failedToJumpTo: "Falha ao saltar para a mensagem. Verifica a consola para mais detalhes."
            },
            text: {
                yourLastMessage: "A tua última mensagem",
                userSLastMessage: "Última mensagem do utilizador"
            }
        },
        limitlessScreenshare: {
            text: {
                deleteTag: "Eliminar etiqueta",
                mustBeGreaterThan: "Deve ser >{{value}}",
                maxResolutionTooLow: "A resolução máxima não pode ser menor que {{value}}",
                maxResolutionRound: "A resolução máxima deve terminar em 0 se Arredondar resolução estiver ativado"
            },
            name: "LimitlessScreenshare",
            description: "Adiciona um controlo deslizante para resolução e fps da partilha de ecrã.",
            option: {
                maxFPS: {
                    description: "FPS máximo do controlo deslizante",
                    label: "FPS máximo"
                },
                maxResolution: {
                    description: "Resolução máxima do controlo deslizante",
                    label: "Resolução máxima"
                },
                roundResolution: {
                    description: "Arredondar a resolução para os 10p mais próximos",
                    label: "Arredondar resolução"
                },
                resolutions: {
                    label: "Resoluções"
                },
                fpss: {
                    label: "Valores de FPS"
                }
            }
        },
        messagePeek: {
            option: {
                hideMuted: {
                    description: "Ocultar pré-visualizações e horas de MPs e grupos silenciados.",
                    label: "Ocultar silenciados"
                }
            },
            name: "MessagePeek",
            description: "Mostra a pré-visualização e a hora da última mensagem na lista de mensagens privadas.",
            text: {
                officialDiscordMessage: "Mensagem oficial do Discord",
                sentGif: "enviou um GIF",
                voiceMessage: "mensagem de voz",
                membersCount: "{{count}} membros",
                you: "Tu"
            }
        },
        messageTranslate: {
            name: "MessageTranslate",
            description: "Traduz mensagens automaticamente para o teu idioma com cache, alternância por canal e mais opções.",
            option: {
                targetLanguage: {
                    description: "Código do idioma de destino das traduções (ex.: en, es, fr, de, ja).",
                    label: "Idioma de destino"
                },
                excludedLanguages: {
                    description: "Códigos de idioma a excluir da tradução (ex.: en, es, fr, de, ja).",
                    label: "Idiomas excluídos"
                },
                confidenceRequirement: {
                    description: "Confiança mínima (0 a 1) necessária para mostrar uma tradução.",
                    label: "Confiança necessária"
                },
                autoTranslate: {
                    description: "Traduzir mensagens automaticamente à medida que aparecem.",
                    label: "Traduzir automaticamente"
                },
                skipOwnMessages: {
                    description: "Não traduzir as tuas próprias mensagens.",
                    label: "Ignorar mensagens próprias"
                },
                skipBotMessages: {
                    description: "Não traduzir mensagens de bots.",
                    label: "Ignorar mensagens de bots"
                },
                ignoredGuilds: {
                    description: "Lista de IDs de servidores separados por vírgulas onde não traduzir.",
                    label: "Servidores ignorados"
                },
                ignoredChannels: {
                    description: "Lista de IDs de canais separados por vírgulas onde não traduzir.",
                    label: "Canais ignorados"
                },
                ignoredUsers: {
                    description: "Lista de IDs de utilizadores separados por vírgulas que não serão traduzidos.",
                    label: "Utilizadores ignorados"
                },
                showIndicator: {
                    description: "Adicionar um pequeno indicador (traduzido) às mensagens traduzidas.",
                    label: "Mostrar indicador"
                },
                showOriginal: {
                    description: "Mostrar o texto original e o traduzido.",
                    noorig: "Não mostrar o original."
                }
            },
            text: {
                showOriginalInSubtext: "Mostrar o original no subtexto",
                showOriginalMessageTranslation: "Mostrar a mensagem original e a tradução no subtexto",
                translatedFrom: "traduzido de {{lang}}"
            }
        },
        moreStickers: {
            toast: {
                stickerPackDeleted: "Pacote de autocolantes eliminado",
                stickerPackAdded: "Pacote de autocolantes adicionado",
                stickerPacksAdded: "Pacotes de autocolantes adicionados",
                stickerPacksExported: "Pacotes de autocolantes exportados",
                newStickerPacksAlready: "Já existem novos pacotes de autocolantes, migração desnecessária",
                oldStickerPacksNot: "Pacotes de autocolantes antigos não encontrados, nada a migrar",
                migrationFailedTitleId: "Falha na migração: {{title}} ({{id}})",
                stickerPackMigrationComplete: "Migração de pacotes de autocolantes concluída",
                failedToUploadSticker: "Falha ao carregar o autocolante"
            },
            text: {
                stickerPackUrl: "URL do pacote de autocolantes",
                pasteHtmlHere: "Cola o HTML aqui",
                delete: "Eliminar",
                addStickerPackFrom: "Adicionar pacote de autocolantes por URL",
                insert: "Inserir",
                addStickerPackFrom2: "Adicionar pacote de autocolantes por HTML",
                insertFromHtml: "Inserir a partir do HTML",
                addStickerPackFrom3: "Adicionar pacote de autocolantes por ficheiro",
                miscTools: "Ferramentas diversas",
                exportStickerPacks: "Exportar pacotes de autocolantes",
                migrateFromV1: "Migrar da v1",
                stickersManagement: "Gestão de autocolantes",
                theRegionLineRecognized: "A região reconhecida pelo LINE pode ser diferente da tua devido ao proxy CORS que usamos.",
                openStickerPackFile: "Abrir ficheiro de pacote de autocolantes",
                stickers: "Autocolantes+",
                categoryTitle: "Categoria, {{title}}",
                searchStickers: "Pesquisar autocolantes",
                ffmpegstatecontextIsUndefined: "FFmpegStateContext não está definido",
                recentlyUsed: "Usados recentemente",
                addFromUrl: "Adicionar por URL",
                addFromHtml: "Adicionar por HTML",
                addFromFile: "Adicionar por ficheiro",
                misc: "Diversos",
                invalidUrl: "URL inválida",
                lineOnly: "Atualmente, apenas autocolantes/emojis do LINE são suportados.",
                getTelegramStickers: "Obtém autocolantes do Telegram com",
                htmlFallbackHelp: "Se encontrares erros ao adicionar um pacote de autocolantes, tenta adicioná-lo usando o código-fonte HTML da página do pacote.",
                htmlFallbackApplies: "Isto aplica-se a autocolantes bloqueados por região / sistema operativo / etc."
            },
            option: {
                promptToUpload: {
                    description: "Insere o autocolante na barra de chat em vez de o enviar de imediato",
                    label: "Perguntar antes de carregar"
                },
                packs: {
                    description: "Pacotes",
                    label: "Pacotes"
                }
            },
            name: "MoreStickers",
            description: "Adiciona pacotes de autocolantes de outras redes sociais. (ex.: LINE)"
        },
        musicRichPresence: {
            option: {
                scrobblerBackend: {
                    description: "O backend de scrobbler a usar.",
                    label: "Backend de scrobbler"
                },
                instanceBaseURL: {
                    description: "O URL base da tua instância ListenBrainz.",
                    label: "URL base da instância"
                },
                instanceAPIBaseUrl: {
                    description: "O URL base da tua API do ListenBrainz.",
                    label: "URL base da API da instância"
                },
                apiKey: {
                    description: "Chave de API do Last.fm. Não é obrigatória, mas é altamente recomendada para evitar limites de pedidos com a nossa chave partilhada",
                    label: "Chave de API"
                },
                username: {
                    description: "Nome de utilizador",
                    label: "Nome de utilizador"
                },
                shareUsername: {
                    description: "Mostrar ligação para o perfil do scrobbler",
                    label: "Partilhar nome de utilizador"
                },
                clickableLinks: {
                    description: "Transformar nomes de faixa, artista e álbum em ligações clicáveis",
                    label: "Ligações clicáveis"
                },
                hideWithSpotify: {
                    description: "Ocultar presença se o Spotify estiver em execução",
                    label: "Ocultar com Spotify"
                },
                hideWithActivity: {
                    description: "Ocultar presença se tiveres outra presença",
                    label: "Ocultar com atividade"
                },
                statusName: {
                    description: "Texto de estado personalizado. Podes usar as variáveis: {artist} | {album} | {title}",
                    label: "Nome do estado"
                },
                statusDisplayType: {
                    description: "Mostrar nome da faixa / artista na lista de membros",
                    off: "Não mostrar (mostra mensagem genérica de audição)"
                },
                nameFormat: {
                    description: "Mostrar nome da música e do artista no nome do estado",
                    statusName: "Usar nome de estado personalizado"
                },
                missingArt: {
                    description: "Quando o álbum ou a capa estiver em falta",
                    logo: "Usar logótipo grande do scrobbler"
                },
                showLogo: {
                    description: "Mostrar o logótipo do serviço de scrobbler junto à capa",
                    label: "Mostrar logótipo do scrobbler"
                },
                showAlbumCover: {
                    description: "Mostrar a capa do álbum. Desativar mostrará um marcador de posição. Útil se a tua música tiver capas inadequadas",
                    label: "Mostrar capa do álbum"
                },
                useListeningStatus: {
                    description: "Mostrar estado \"A ouvir\" em vez de \"A jogar\""
                }
            },
            name: "MusicRichPresence",
            description: "Rich Presence para Last.FM/Listenbrainz",
            text: {
                showArtistName: "Mostrar nome do artista",
                showTrackName: "Mostrar nome da faixa",
                useMusicServiceName: "Usar nome do serviço de música (recorre ao texto de estado personalizado)",
                useFormatArtistSong: "Usar o formato 'artista - música'",
                useFormatSongArtist: "Usar o formato 'música - artista'",
                useArtistNameOnly: "Usar apenas o nome do artista",
                useSongNameOnly: "Usar apenas o nome da música",
                useAlbumNameFalls: "Usar nome do álbum (recorre ao texto de estado personalizado se a música não tiver álbum)",
                useGenericPlaceholder: "Usar marcador de posição genérico",
                lastFm: "Last.FM",
                howToCreateAn: "Como criar uma chave de API",
                set: "Define",
                applicationName: "Nome da aplicação",
                applicationDescription: "Descrição da aplicação",
                toAnythingAndLeave: "com qualquer valor e deixa o resto em branco.",
                createApiKey: "Criar chave de API",
                invalidInstance: "Instância compatível com ListenBrainz inválida",
                provideBoth: "Indica tanto o",
                apiBaseUrl: "URL base da API",
                andThe: "como o",
                instanceBaseUrl: "URL base da instância",
                forYourCustomInstance: "da tua instância personalizada do ListenBrainz ou volta para ListenBrainz/Last.FM",
                allowConnectTitle: "Permitir que o Plexcord se ligue à instância do ListenBrainz",
                allowConnectBody: "Para usar a tua instância personalizada do ListenBrainz, tens primeiro de permitir que o Plexcord se ligue a ela.",
                allowInstance: "Permitir instância",
                listenBrainzCompatible: "Compatível com ListenBrainz (auto-hospedado)",
                and: "e"
            }
        },
        noMiddleClickPaste: {
            name: "NoMiddleClickPaste",
            description: "Desativar o colar com clique do meio do Linux - apenas Linux"
        },
        orbolayBridge: {
            option: {
                port: {
                    description: "Porta para ligar",
                    label: "Porta"
                }
            },
            name: "OrbolayBridge",
            description: "Plugin ponte para ligar o Orbolay ao Discord",
            toast: {
                connectedToOrbolayServer: "Ligado ao servidor do Orbolay"
            }
        },
        plexcordHelper: {
            name: "PlexcordHelper",
            description: "Usado para fornecer suporte e corrigir falhas causadas pelo Discord.",
            text: {
                restartRequired: "Reinício necessário",
                restartNow: "Reiniciar agora",
                later: "Mais tarde",
                wouldYouLikeTo: "Queres reiniciar agora?",
                somePluginsRequireA: "Alguns plugins requerem reinício para serem totalmente desativados.",
                alreadyEnabled: "{{plugin}} já está ativado",
                alreadyDisabled: "{{plugin}} já está desativado",
                disablePlugin: "Desativar {{plugin}}",
                enablePlugin: "Ativar {{plugin}}",
                errorStopping: "Erro ao parar o plugin {{plugin}}",
                errorStarting: "Erro ao iniciar o plugin {{plugin}}"
            },
            toast: {
                failedToTolowercase: "Falha ao {{toLowerCase}}",
                aRestartIsRequired: "É necessário reiniciar para a alteração ter efeito!"
            },
            card: {
                notOnThisVersion: "Este plugin não está nesta versão do Plexcord. Tenta atualizar!"
            }
        },
        plexcordTweaks: {
            name: "PlexcordTweaks",
            option: {
                removeActivitySection: {
                    description: "Remove a secção de atividade acima da lista de membros",
                    label: "Remover secção de atividade"
                },
                showYourOwnActivityButtons: {
                    description: "O Discord oculta os teus próprios botões de atividade por algum motivo",
                    label: "Mostrar os teus próprios botões de atividade"
                },
                refreshSlashCommands: {
                    description: "Atualiza os comandos de barra para mostrar os novos sem reiniciar o cliente.",
                    label: "Atualizar comandos de barra"
                },
                forceRoleIcon: {
                    description: "Força os ícones de cargo a aparecerem ao lado das mensagens no modo compacto",
                    label: "Forçar ícone de cargo"
                },
                accountStandingButton: {
                    description: "Mostrar um botão de estado da conta na barra superior",
                    label: "Botão de estado da conta"
                },
                jsonGateway: {
                    description: "Força JSON ao voltar a ligar ao gateway",
                    label: "Gateway JSON"
                },
                enableAutoCorrect: {
                    description: "Adiciona no menu de contexto da caixa de chat uma opção para a correção automática nativa e substituições de texto",
                    label: "Ativar correção automática"
                },
                autoCorrect: {
                    description: "Usar correção automática nativa e substituições de texto nos editores de mensagem",
                    label: "Correção automática"
                },
                disableHolidayNotifications: {
                    label: "Desativar notificações festivas",
                    description: "Usar sempre os sons de notificação predefinidos do Discord"
                },
                showAllBadges: {
                    label: "Mostrar todos os emblemas",
                    description: "Mostra todos os emblemas do perfil em vez de agrupar os restantes em +n"
                }
            },
            text: {
                allGood: "Está tudo bem!",
                limited: "Limitada",
                veryLimited: "Muito limitada",
                atRisk: "Em risco",
                suspended: "Suspensa",
                slashCommandsRefreshedSuccessfully: "Comandos de barra atualizados com sucesso.",
                failedToRefreshCommands: "Falha ao atualizar comandos. Verifica a consola para mais detalhes.",
                enableAutocorrect: "Ativar correção automática"
            },
            command: {
                refreshCommands: "Atualizar comandos de barra"
            },
            description: "Uma coleção de pequenos ajustes e correções para o Discord."
        },
        plextronStreamFixes: {
            option: {
                unlockQualityOptions: {
                    description: "Desbloquear opções de qualidade da transmissão independentemente do estado do Nitro",
                    label: "Desbloquear opções de qualidade"
                },
                removeResolutionCap: {
                    description: "Permitir resoluções acima de 720p a 60 fps",
                    label: "Remover limite de resolução"
                },
                forceEncoderSettings: {
                    description: "Forçar o codificador a usar a resolução/fps configurados",
                    label: "Forçar definições do codificador"
                },
                preventDownscale: {
                    description: "Impedir que o Discord reduza a resolução da transmissão",
                    label: "Impedir redução"
                },
                keyframeInterval: {
                    description: "Intervalo de fotogramas-chave em ms (0 = predefinição do codificador, 5000 = a cada 5 s)",
                    label: "Intervalo de fotogramas-chave"
                },
                minBitrate: {
                    description: "Taxa de bits mínima do codificador em kbps",
                    label: "Taxa de bits mínima"
                },
                raiseBitrateCaps: {
                    description: "Aumentar os limites predefinidos de taxa de bits no computador (alvo de 600 kbps → 10 Mbps, máx. de 3,5 Mbps → 40 Mbps)",
                    label: "Aumentar limites de taxa de bits"
                },
                preventFramerateReduction: {
                    description: "Impedir que o Discord reduza a taxa de fotogramas da transmissão quando não estás a falar",
                    label: "Impedir redução da taxa de fotogramas"
                },
                bitsPerPixelPct: {
                    description: "Percentagem de bits por píxel para a taxa de bits alvo (8 = 0,08 bpp, 12 = 0,12 bpp)",
                    label: "Bits por píxel (%)"
                }
            },
            name: "PlextronStreamFixes",
            description: "Tenta corrigir a qualidade da transmissão no Plextron alterando o codificador e as restrições de qualidade do Discord."
        },
        rPCEditor: {
            name: "RPCEditor"
        },
        reactionTimestamps: {
            name: "ReactionTimestamps",
            description: "Mostra a hora de cada reação na janela de reações.",
            text: {
                userAtTime: "{{user}} às {{time}}"
            }
        },
        richPresence: {
            text: {
                useCustomStatusName: "Usar nome de estado personalizado",
                useFormatArtistSong: "Usar o formato 'artista - música'",
                useFormatSongArtist: "Usar o formato 'música - artista'",
                useArtistNameOnly: "Usar apenas o nome do artista",
                useSongNameOnly: "Usar apenas o nome da música",
                useAlbumName: "Usar o nome do álbum",
                useLargeStatsFm: "Usar logótipo grande do Stats.fm",
                useGenericPlaceholder: "Usar marcador de posição genérico",
                seriesMovieName: "Nome da série/filme",
                seriesEpisodeTrackMovie: "Série - nome do episódio/faixa/filme",
                custom: "Personalizado",
                seriesCover: "Capa da série",
                episodeCover: "Capa do episódio",
                season1Episode1: "Temporada 1 episódio 1",
                off: "Desativado",
                listening: "A ouvir",
                playing: "A jogar",
                streaming: "A transmitir",
                watching: "A ver",
                none: "Nenhum",
                navidromeInstanceExposesServer: "Instância do Navidrome (expõe o URL do servidor. Autenticação única enviada.)",
                lastFmApiSends: "API do Last.fm (envia metadados para o last.fm)",
                donTShowShows: "Não mostrar (mostra mensagem genérica de audição)",
                showStateLineContent: "Mostrar conteúdo da linha de estado",
                showDetailsLineContent: "Mostrar conteúdo da linha de detalhes",
                displayYourCurrentlyPlaying: "Mostra os audiolivros que estás a ouvir como Rich Presence do Discord. Requer URL, nome de utilizador e palavra-passe do teu servidor AudioBookShelf.",
                audiobookshelfServerUrl: "URL do servidor AudioBookShelf.",
                audiobookshelfUsername: "Nome de utilizador do AudioBookShelf.",
                audiobookshelfPassword: "Palavra-passe do AudioBookShelf.",
                connectsToTosuVia: "Liga-se ao tosu via WebSocket na porta 24050. Não é necessária configuração, garante apenas que o tosu está a correr juntamente com o osu!.",
                showWhatYouRe: "Mostra o que estás a ouvir via stats.fm. Requer que o teu histórico de audição seja público.",
                statsFmUsername: "Nome de utilizador do Stats.fm.",
                customStatusText: "Texto de estado personalizado.",
                statsFm: "Stats.fm",
                nameFormat: "Formato do nome.",
                fallbackWhenArtIs: "Alternativa quando a capa estiver em falta.",
                showListeningStatus: "Mostrar estado de audição.",
                showStatsFmLogo: "Mostrar o logótipo do Stats.fm ao lado da capa.",
                showLinkToStats: "Mostrar ligação para o perfil do stats.fm.",
                showLinkToSong: "Mostrar ligação para a música no stats.fm.",
                hideStatsFmPresence: "Ocultar presença do stats.fm se o Spotify estiver em execução.",
                hideStatsFmPresence2: "Ocultar presença do stats.fm se um RPC externo estiver em execução.",
                disableDownloadingAlbumArt: "Desativar a transferência de capas de álbum.",
                showWhatYouRe2: "Mostra o que estás a reproduzir no Jellyfin. Para obter a tua chave de API: abre a interface web do Jellyfin, prime F12 para abrir as Ferramentas de Programador, vai ao separador Rede, procura pedidos ao teu servidor, encontra o cabeçalho Authorization (Ctrl+F para pesquisar) e precisas da parte de Token='this'. O teu ID de utilizador está no URL da tua página de perfil.",
                jellyfinServerUrl: "URL do servidor Jellyfin.",
                jellyfinApiKey: "Chave de API do Jellyfin.",
                authorization: "Authorization",
                jellyfinUserId: "ID de utilizador do Jellyfin.",
                userIdFromProfile: "ID de utilizador do URL do perfil",
                nameDisplayFormat: "Formato de apresentação do nome.",
                customNameTemplate: "Modelo de nome personalizado.",
                nameOnJellyfin: "{name} no Jellyfin",
                coverTypeForTv: "Tipo de capa para séries de TV.",
                episodeNumberFormat: "Formato do número do episódio.",
                overrideRichPresenceType: "Substituir o tipo de Rich Presence.",
                showEpisodeNameAfter: "Mostrar nome do episódio após as informações de temporada/episódio.",
                showPresenceWhenMedia: "Mostrar presença quando o conteúdo estiver em pausa.",
                hideMediaDetails: "Ocultar detalhes do conteúdo.",
                discordRichPresenceFor: "Rich Presence do Discord para a Gensokyo Radio. Basta ativar e ouvir!",
                refreshIntervalInSeconds: "Intervalo de atualização em segundos.",
                showWhatYouRe3: "Mostra o que estás a ouvir via Navidrome.",
                navidromeServerUrlMust: "URL do servidor Navidrome (tem de ser um domínio público, ex.: https://navidrome.example.com).",
                navidromeUsername: "Nome de utilizador do Navidrome.",
                navidromePassword: "Palavra-passe do Navidrome.",
                optionalDiscordApplicationClient: "ID de cliente da aplicação do Discord (opcional).",
                howToFetchAlbum: "Como obter capas de álbum.",
                optionalProvideYourOwn: "Opcional: fornece a tua própria chave de API do Last.fm (mantém a predefinição se vazio).",
                showNavidromeLogoIn: "Mostrar o logótipo do Navidrome no canto inferior direito da capa.",
                showAlbumNameIn: "Mostrar nome do álbum na presença.",
                whichTypeOfActivity: "Que tipo de atividade mostrar.",
                showTheStateDetails: "Mostrar conteúdo da linha de estado / detalhes na lista de membros",
                hideRichPresenceWhen: "Ocultar Rich Presence quando a música estiver em pausa (em vez de mostrar um cronómetro)",
                theListeningToText: "O texto 'A ouvir' (ex.: {artist})",
                navidrome: "Navidrome",
                theMainLineShowing: "A linha principal que mostra a música em reprodução (ex.: {song})",
                song: "{song}",
                theLineBelowThe: "A linha abaixo do nome da música (ex.: {artist})",
                artist: "{artist}",
                theAlbumLineE: "A linha do álbum (ex.: {album})",
                album: "{album}",
                enableTabLabelsCurrenttab: "Ativar presença do {{TAB_LABELS_currentTab}}.",
                statsFmProfile: "Perfil do Stats.fm",
                viewSong: "Ver música",
                showArtistName: "Mostrar nome do artista",
                showTrackName: "Mostrar nome da faixa",
                enterValue: "Introduza um valor"
            },
            name: "RichPresence",
            description: "Central unificada de Rich Presence para AudioBookShelf, osu!, stats.fm, Jellyfin, Navidrome e Gensokyo Radio.",
            toast: {
                audiobookshelfRpcIsNot: "O RPC do AudioBookShelf não está configurado.",
                jellyfinRpcIsNot: "O RPC do Jellyfin não está configurado.",
                jellyfinReturnedAnInvalid: "O Jellyfin devolveu uma resposta inválida. A tua chave de API pode estar errada."
            },
            option: {
                enabled: {
                    description: "Ativar serviços de Rich Presence.",
                    label: "Ativado"
                },
                serviceSettings: {
                    description: "Configuração do serviço.",
                    label: "Definições do serviço"
                },
                abs_enabled: {
                    description: "Ativar presença do AudioBookShelf.",
                    label: "AudioBookShelf ativado"
                },
                tosu_enabled: {
                    description: "Ativar presença do osu! (tosu).",
                    label: "osu! (tosu) ativado"
                },
                sfm_enabled: {
                    description: "Ativar presença do stats.fm.",
                    label: "Stats.fm ativado"
                },
                jf_enabled: {
                    description: "Ativar presença do Jellyfin.",
                    label: "Jellyfin ativado"
                },
                gr_enabled: {
                    description: "Ativar presença da Gensokyo Radio.",
                    label: "Gensokyo Radio ativada"
                },
                nd_enabled: {
                    description: "Ativar presença do Navidrome.",
                    label: "Navidrome ativado"
                },
                abs_serverUrl: {
                    description: "URL do servidor AudioBookShelf.",
                    label: "URL do servidor AudioBookShelf"
                },
                abs_username: {
                    description: "Nome de utilizador do AudioBookShelf.",
                    label: "Utilizador do AudioBookShelf"
                },
                abs_password: {
                    description: "Palavra-passe do AudioBookShelf.",
                    label: "Palavra-passe do AudioBookShelf"
                },
                sfm_username: {
                    description: "Nome de utilizador do Stats.fm.",
                    label: "Utilizador do Stats.fm"
                },
                sfm_shareUsername: {
                    description: "Mostrar ligação para o perfil do stats.fm.",
                    label: "Stats.fm: partilhar utilizador"
                },
                sfm_shareSong: {
                    description: "Mostrar ligação para a música no stats.fm.",
                    label: "Stats.fm: partilhar música"
                },
                sfm_hideWithSpotify: {
                    description: "Ocultar presença do stats.fm se o Spotify estiver em execução.",
                    label: "Stats.fm: ocultar com Spotify"
                },
                sfm_hideWithExternalRPC: {
                    description: "Ocultar presença do stats.fm se um RPC externo estiver em execução.",
                    label: "Stats.fm: ocultar com RPC externo"
                },
                sfm_statusName: {
                    description: "Texto de estado personalizado.",
                    label: "Stats.fm: nome do estado"
                },
                sfm_nameFormat: {
                    description: "Formato do nome.",
                    label: "Stats.fm: formato do nome",
                    statusName: "Usar nome de estado personalizado",
                    artistFirst: "Usar o formato 'artista - música'",
                    songFirst: "Usar o formato 'música - artista'",
                    artistOnly: "Usar apenas o nome do artista",
                    songOnly: "Usar apenas o nome da música",
                    albumName: "Usar o nome do álbum"
                },
                sfm_useListeningStatus: {
                    description: "Mostrar estado de audição.",
                    label: "Stats.fm: usar estado de audição"
                },
                sfm_missingArt: {
                    description: "Alternativa quando a capa estiver em falta.",
                    label: "Stats.fm: capa em falta",
                    statsFmLogo: "Usar logótipo grande do Stats.fm",
                    placeholder: "Usar marcador de posição genérico"
                },
                sfm_showLogo: {
                    description: "Mostrar o logótipo do Stats.fm ao lado da capa.",
                    label: "Stats.fm: mostrar logótipo"
                },
                sfm_alwaysHideArt: {
                    description: "Desativar a transferência de capas de álbum.",
                    label: "Stats.fm: ocultar sempre a capa"
                },
                jf_serverUrl: {
                    description: "URL do servidor Jellyfin.",
                    label: "URL do servidor Jellyfin"
                },
                jf_apiKey: {
                    description: "Chave de API do Jellyfin.",
                    label: "Chave de API do Jellyfin"
                },
                jf_userId: {
                    description: "ID de utilizador do Jellyfin.",
                    label: "ID de utilizador do Jellyfin"
                },
                jf_nameDisplay: {
                    description: "Formato de apresentação do nome.",
                    label: "Jellyfin: apresentação do nome",
                    default: "Nome da série/filme",
                    full: "Série - nome do episódio/faixa/filme",
                    custom: "Personalizado"
                },
                jf_customName: {
                    description: "Modelo de nome personalizado.",
                    label: "Jellyfin: nome personalizado"
                },
                jf_coverType: {
                    description: "Tipo de capa para séries de TV.",
                    label: "Jellyfin: tipo de capa",
                    series: "Capa da série",
                    episode: "Capa do episódio"
                },
                jf_episodeFormat: {
                    description: "Formato do número do episódio.",
                    label: "Jellyfin: formato do episódio",
                    long: "S01E01",
                    fulltext: "Temporada 1 episódio 1"
                },
                jf_showEpisodeName: {
                    description: "Mostrar nome do episódio após as informações de temporada/episódio.",
                    label: "Jellyfin: mostrar nome do episódio"
                },
                jf_overrideType: {
                    description: "Substituir o tipo de Rich Presence.",
                    label: "Jellyfin: substituir tipo",
                    off: "Desativado",
                    listening: "A ouvir",
                    playing: "A jogar",
                    streaming: "A transmitir",
                    watching: "A ver"
                },
                jf_showPausedState: {
                    description: "Mostrar presença quando o conteúdo estiver em pausa.",
                    label: "Jellyfin: mostrar estado em pausa"
                },
                jf_privacyMode: {
                    description: "Ocultar detalhes do conteúdo.",
                    label: "Jellyfin: modo de privacidade"
                },
                gr_refreshInterval: {
                    description: "Intervalo de atualização em segundos.",
                    label: "Gensokyo Radio: intervalo de atualização"
                },
                nd_serverUrl: {
                    description: "URL do servidor Navidrome (ex.: https://navidrome.example.com)",
                    label: "URL do servidor Navidrome"
                },
                nd_username: {
                    description: "Nome de utilizador do Navidrome",
                    label: "Utilizador do Navidrome"
                },
                nd_password: {
                    description: "Palavra-passe do Navidrome",
                    label: "Palavra-passe do Navidrome"
                },
                nd_clientId: {
                    description: "ID de cliente da aplicação do Discord (opcional)",
                    label: "Navidrome: ID de cliente"
                },
                nd_showSmallImage: {
                    description: "Mostrar o logótipo do Navidrome no canto inferior direito da capa.",
                    label: "Navidrome: mostrar imagem pequena"
                },
                nd_showAlbum: {
                    description: "Mostrar nome do álbum na presença.",
                    label: "Navidrome: mostrar álbum"
                },
                nd_albumArtMode: {
                    description: "Como obter capas de álbum.",
                    label: "Navidrome: modo de capa do álbum",
                    none: "Nenhum",
                    instance: "Instância do Navidrome (expõe o URL do servidor ao Discord, sem enviar autenticação)",
                    lastfm: "API do Last.fm (envia metadados da faixa para o Last.fm)"
                },
                nd_lastfmApiKey: {
                    description: "Chave de API do Last.fm (opcional)",
                    label: "Navidrome: chave de API do Last.fm"
                },
                nd_refreshInterval: {
                    description: "Intervalo de atualização em segundos.",
                    label: "Navidrome: intervalo de atualização"
                },
                nd_activityType: {
                    description: "Que tipo de atividade",
                    label: "Navidrome: tipo de atividade",
                    listening: "A ouvir",
                    playingFixesHiddenLines: "A jogar (corrige linhas ocultas)",
                    watching: "A ver"
                },
                nd_nameString: {
                    description: "Cadeia de formato do nome da atividade",
                    label: "Navidrome: cadeia do nome"
                },
                nd_detailsString: {
                    description: "Cadeia de formato dos detalhes da atividade",
                    label: "Navidrome: cadeia de detalhes"
                },
                nd_stateString: {
                    description: "Cadeia de formato do estado da atividade",
                    label: "Navidrome: cadeia de estado"
                },
                nd_largeTextString: {
                    description: "Cadeia de formato do texto grande da atividade",
                    label: "Navidrome: cadeia do texto grande"
                },
                nd_statusDisplayType: {
                    description: "Mostrar nome da faixa / artista na lista de membros",
                    off: "Não mostrar (mostra mensagem genérica de audição)"
                },
                nd_hideOnPause: {
                    description: "Ocultar Rich Presence quando a música estiver em pausa",
                    label: "Navidrome: ocultar em pausa"
                }
            },
            panel: {
                password: "Palavra-passe",
                statsFmUsername: "utilizador do stats.fm",
                customStatusText: "Texto de estado personalizado",
                nameFormat: "Formato do Nome",
                missingArtFallback: "Alternativa sem capa",
                showListeningStatus: "Mostrar estado de audição",
                showStatsFmLogo: "Mostrar logótipo do Stats.fm",
                showProfileLink: "Mostrar ligação do perfil",
                showSongLink: "Mostrar ligação da música",
                hideWithSpotify: "Ocultar com Spotify",
                hideWithExternalRpc: "Ocultar com RPC externo",
                disableAlbumArt: "Desativar capas de álbum",
                apiKey: "Chave de API",
                userId: "ID de Utilizador",
                nameDisplay: "Apresentação do nome",
                customNameTemplate: "Modelo de nome personalizado",
                coverType: "Tipo de capa",
                episodeFormat: "Formato do episódio",
                overridePresenceType: "Substituir tipo de presença",
                showEpisodeName: "Mostrar nome do episódio",
                showWhenPaused: "Mostrar em pausa",
                privacyMode: "Modo de privacidade",
                refreshInterval: "Intervalo de atualização",
                clientId: "ID de cliente",
                albumArtMode: "Modo de capa do álbum",
                lastFmApiKey: "Chave de API do Last.fm",
                showSmallImage: "Mostrar imagem pequena",
                showAlbum: "Mostrar álbum",
                activityType: "Tipo de atividade",
                statusDisplayType: "Tipo de apresentação do estado",
                hideOnPause: "Ocultar em pausa",
                activityNameFormat: "Formato do nome da atividade",
                detailsFormat: "Formato dos detalhes",
                stateFormat: "Formato do estado",
                largeTextFormat: "Formato do texto grande",
                enabled: "Ativada"
            }
        },
        sedEnhanced: {
            option: {
                regexByDefault: {
                    description: "Inverte a flag `r`, pelo que usar `r` ativa o modo sem regex e omiti-la usa o modo regex.",
                    label: "Regex por predefinição"
                }
            },
            name: "SedEnhanced",
            description: "Expande o suporte rudimentar ao `sed` do Discord."
        },
        showRolesInChat: {
            option: {
                showBots: {
                    description: "Se deve mostrar o cargo mais alto em bots.",
                    label: "Mostrar bots"
                },
                useRoleColor: {
                    description: "Usar a cor do cargo no ícone.",
                    label: "Usar cor do cargo"
                }
            },
            name: "ShowRolesInChat",
            description: "Mostra o cargo mais alto de um utilizador ao lado do nome nas mensagens. Oculta/mostra cargos específicos pelo menu de contexto (clique direito).",
            text: {
                chatRoleActions: "Ações de cargo no chat",
                unhideRolesInChat: "Voltar a mostrar cargos no chat",
                showRoleInChat: "Mostrar cargo no chat",
                hideRoleInChat: "Ocultar cargo no chat"
            }
        },
        silenceUsers: {
            option: {
                mutedUserIds: {
                    description: "IDs de utilizadores do Discord separados por vírgulas para silenciar menções e indicadores do servidor.",
                    label: "IDs de utilizadores silenciados"
                }
            },
            name: "SilenceUsers",
            description: "Silencia menções @ e contadores de indicadores do servidor de utilizadores específicos. Mensagens normais e MPs não são afetadas."
        },
        songLink: {
            text: {
                showIfAvailable: "Mostrar se disponível",
                openInDesktopApp: "Abrir na aplicação de computador",
                loadingSongLink: "A carregar ligação da música...",
                pleaseProvideAMusic: "Indica uma ligação de música.",
                thisWillTakeA: "Isto vai demorar um momento...",
                noAlternativePlatformsFound: "Nenhuma plataforma alternativa encontrada para esta ligação.",
                failedToResolveMusic: "Falha ao resolver a ligação de música",
                logo: "Logótipo do {{name}}"
            },
            option: {
                servicesSettings: {
                    description: "definições dos serviços",
                    label: "Definições dos serviços"
                },
                userCountry: {
                    description: "País usado na pesquisa (código de país de duas letras)",
                    label: "País do utilizador"
                },
                includeMetadata: {
                    description: "Incluir o título da faixa e o nome do artista como cabeçalho.",
                    label: "Incluir metadados"
                }
            },
            name: "SongLink",
            description: "Adiciona botões de serviços de streaming abaixo das ligações de músicas",
            command: {
                musiclink: "Converter uma ligação de música para outras plataformas de streaming.",
                url: "Ligação de música (Spotify, Deezer, YouTube, Tidal, Apple Music, SoundCloud)"
            }
        },
        songSpotlight: {
            name: "SongSpotlight",
            description: "Mostra músicas no teu perfil",
            text: {
                songSpotlight: "Song Spotlight",
                explicit: "Explícito",
                addSong: "Adicionar música",
                addANewSong: "Adicionar uma nova música",
                copyLink: "Copiar ligação",
                removeSong: "Remover música",
                failedToLoad: "Falha ao carregar!",
                areYouSure: "Tens a certeza?",
                thisWillOverwriteYour: "Isto vai substituir as tuas músicas atuais.",
                continue: "Continuar",
                nevermind: "Esquece",
                thisWillPermanentlyDelete: "Isto vai eliminar permanentemente todas as tuas músicas.",
                delete: "Eliminar",
                signInToSong: "Iniciar sessão no Song Spotlight",
                songs: "Músicas",
                authorization: "Authorization",
                importFromClipboard: "Importar da área de transferência",
                copyToClipboard: "Copiar para a área de transferência",
                signOut: "Terminar sessão",
                deleteSongs: "Eliminar músicas",
                more: "Mais",
                editSongs: "Editar músicas",
                copyJson: "Copiar JSON",
                looksLikeThereS: "Parece que não há nada aqui!",
                uhOhSongSpotlight: "Ups! O Song Spotlight falhou ao carregar. Verifica a consola para mais detalhes.",
                stealSong: "Roubar música",
                profileSongs: "Músicas do perfil",
                notEnoughSpace: "Espaço insuficiente",
                alreadyAdded: "Já adicionaste esta música",
                invalidLink: "Link inválido",
                failedToParseLink: "Não foi possível analisar o link",
                invalidUrl: "URL inválida",
                goAddSongs: "Então? Estás à espera de quê? Adiciona algumas músicas ao teu Song Spotlight!",
                tellUserToAddSongs: "Pede a {{name}} para adicionar algumas músicas ao Song Spotlight!",
                supportedServices: "O Song Spotlight suporta estes serviços:",
                viewSongsVia: "Também podes ver as tuas músicas com o comando",
                viewSongsViaSuffix: "!",
                coverTooltipOwner: "{{sublabel}} de {{label}}",
                coverTooltipBy: "{{label}} de {{sublabel}}",
                lastUpdated: "Última atualização",
                save: "Guardar",
                showMore: "Mostrar mais {{count}}"
            },
            toast: {
                youHaveBeenSigned: "Terminaste sessão no Song Spotlight. Inicia sessão novamente.",
                songSpotlightError: "Song Spotlight: {{error}}",
                successfullyAuthorized: "Autorizado com sucesso!",
                failedToPlaySong: "Falha ao reproduzir a pré-visualização da música!",
                addedSong: "Música adicionada!",
                removedSong: "Música removida!",
                noJsonInClipboard: "Nenhum JSON na área de transferência!",
                invalidSongSpotlightData: "Dados do Song Spotlight inválidos na área de transferência!",
                oneOrMoreImported: "Uma ou mais músicas importadas eram inválidas.",
                importedSongsFromClipboard: "Músicas importadas da área de transferência!",
                successfullySavedSongs: "Músicas guardadas com sucesso!",
                successfullySignedOut: "Sessão terminada com sucesso!",
                successfullyDeletedSongs: "Músicas eliminadas com sucesso!",
                youDonTHave: "Não tens espaço suficiente!",
                uhOhThisSong: "Ups, esta música não existe!",
                youAlreadyHaveThis: "Já adicionaste esta música!",
                youDonTHave2: "Tu... não adicionaste esta música?",
                fetchError: "Erro do Song Spotlight ao obter {{path}}"
            },
            option: {
                collapseSongList: {
                    description: "Recolhe a lista de músicas nos perfis num botão que abre um menu separado",
                    label: "Recolher lista de músicas"
                },
                profileSongsLimit: {
                    description: "Quantas músicas são mostradas ao clicar num utilizador",
                    label: "Limite de músicas do perfil"
                },
                previewVolume: {
                    description: "Volume das pré-visualizações de músicas",
                    label: "Volume da pré-visualização"
                }
            }
        },
        stopAutoUnread: {
            name: "StopAutoUnread",
            description: "Impede que o Discord mude automaticamente a definição de notificação de um canal para \"Todas as mensagens\""
        },
        themeLibrary: {
            text: {
                enablePlugin: "Ativar plugin",
                cancel: "Cancelar",
                holdOn: "Espera!",
                thisThemeRequiresThe: "Este tema requer o",
                pluginToWorkProperly: "plugin para funcionar corretamente!",
                doYouWantTo: "Queres ativá-lo?",
                themeInfo: "Informações do tema",
                viewSource: "Ver código-fonte",
                close: "Fechar",
                download: "Transferir",
                overwrite: "Substituir",
                keepMyFile: "Manter o meu ficheiro",
                copyToClipboard: "Copiar para a área de transferência",
                conflict: "Conflito!",
                themeSource: "Fonte do tema",
                aThemeWithThe: "Um tema com o mesmo nome",
                alreadyExists: "já existe",
                inYourThemesDirectory: "na tua pasta de temas! Queres substituí-lo?",
                version: "Versão",
                likes: "Gostos",
                donate: "Doar",
                supportServer: "Servidor de suporte",
                source: "Fonte",
                tags: "Etiquetas",
                youCanSupportThe: "Podes apoiar o autor fazendo um donativo abaixo!",
                joinDiscordServer: "Entrar no servidor do Discord",
                viewThemeSource: "Ver a fonte do tema",
                showAll: "Mostrar todos",
                showThemes: "Mostrar temas",
                showSnippets: "Mostrar excertos",
                showMostLiked: "Mostrar os mais gostados",
                showDark: "Mostrar escuros",
                showLight: "Mostrar claros",
                showEnabled: "Mostrar ativados",
                showDisabled: "Mostrar desativados",
                searchForATheme: "Pesquisar um tema...",
                gettingTheLatestThemes: "A obter os temas mais recentes...",
                thisWonTTake: "Não vai demorar!",
                failedToFetchThemes: "Falha ao obter temas",
                couldNotFetchThe: "Não foi possível obter a lista de temas. Tenta novamente mais tarde.",
                wantYourThemeRemoved: "Queres que o teu tema seja removido?",
                hide: "Ocultar",
                noThemeFound: "Nenhum tema encontrado.",
                tryNarrowingYourSearch: "Tenta restringir a pesquisa.",
                themeLibrary: "Biblioteca de temas",
                successfullyAuthorizedWithThemelibrary: "Autorizado com sucesso no ThemeLibrary!",
                failedToAuthorizeCheck: "Falha ao autorizar, verifica a consola",
                successfullyDeauthorizedFromThemelibrary: "Autorização do ThemeLibrary revogada com sucesso!",
                failedToDeauthorizeCheck: "Falha ao revogar a autorização, verifica a consola",
                themelibraryAuth: "Autenticação do ThemeLibrary",
                themeRemoval: "Remoção de tema",
                allThemeAuthorsAre: "Todos os autores de temas recebem crédito nas informações do tema e nenhuma fonte foi modificada. Se mesmo assim quiseres que o teu tema seja removido, abre uma issue clicando abaixo.",
                authorizeWithThemelibrary: "Autorizar com o ThemeLibrary",
                copyThemelibraryToken: "Copiar token do ThemeLibrary",
                deauthorizeThemelibrary: "Revogar autorização do ThemeLibrary",
                themeDetails: "Detalhes de {{name}}",
                mostLiked: "Mais gostados",
                newestAdditions: "Adições mais recentes",
                removeTheme: "Remover tema",
                addTheme: "Adicionar tema",
                authors: "Autores",
                author: "Autor",
                nobodyLikedTheme: "Ninguém gostou deste tema ainda.",
                nobodyLikedSnippet: "Ninguém gostou deste snippet ainda.",
                usersLikedTheme: "{{likes}} utilizadores gostaram deste tema!",
                usersLikedSnippet: "{{likes}} utilizadores gostaram deste snippet!",
                openThemeLibrary: "Abrir biblioteca de temas",
                lastUpdated: "Este tema foi atualizado pela última vez em",
                removalInfo: "Se quiser que os seus temas sejam removidos permanentemente, abra uma issue no",
                themes: "Temas",
                requestRemoval: "Pedir remoção do tema",
                pluginSuffix: "plugin!"
            },
            toast: {
                downloadedName: "{{name}} transferido!",
                failedToDownloadName: "Falha ao transferir {{name}}! (verifica a consola)",
                invalidOrExpiredInvite: "Convite inválido ou expirado!",
                copiedToClipboard: "Copiado para a área de transferência",
                noUniquetokenPresentTry: "Nenhum uniqueToken presente, tenta autorizar primeiro!",
                noTokenToCopy: "Nenhum token para copiar, tenta autorizar primeiro!",
                copiedToClipboard2: "Copiado para a área de transferência!"
            },
            name: "ThemeLibrary",
            description: "Uma biblioteca de temas para o Plexcord.",
            option: {
                hideWarningCard: {
                    description: "Ocultar o cartão de aviso no topo do separador da biblioteca de temas",
                    label: "Ocultar cartão de aviso"
                },
                buttons: {
                    description: "Botões do ThemeLibrary",
                    label: "Botões"
                }
            }
        },
        translatePlus: {
            name: "Translate+",
            description: "O plugin de tradução do Plexcord, mas com suporte para idiomas artísticos!",
            text: {
                translate: "Traduzir",
                dismiss: "Dispensar",
                translationFailedDueTo: "A tradução falhou devido a um erro.",
                translatedFrom: "traduzido de {{lang}}"
            },
            option: {
                target: {
                    description: "Idioma de destino",
                    label: "Destino"
                },
                toki: {
                    description: "Ativar toki pona",
                    label: "Toki pona"
                },
                sitelen: {
                    description: "Ativar sitelen pona",
                    label: "Sitelen pona"
                },
                shavian: {
                    description: "Ativar alfabeto shaviano",
                    label: "Shaviano"
                }
            }
        },
        triviaAI: {
            name: "TriviaAI",
            description: "Um plugin que te ajuda a responder a perguntas de trivia com IA.",
            text: {
                answerWithAi: "Responder com IA",
                enterApiKeyHere: "Introduz aqui a chave de API do teu endpoint de IA.",
                enterSystemPrompt: "Introduz o prompt do sistema.",
                enterYourOpenaiCompatible: "Introduz aqui o teu endpoint de IA compatível com OpenAI.",
                status: "Estado {{status}}"
            },
            option: {
                apiKey: {
                    description: "Chave de API.",
                    label: "Chave de API"
                },
                model: {
                    description: "Modelo de IA a usar.",
                    label: "Modelo",
                    placeholder: "ex.: google/gemini-3-flash-preview, inception/mercury, openai/gpt-5.2-chat, etc."
                },
                systemPrompt: {
                    description: "Prompt do sistema para a IA. Marcadores: {current_user}, {current_time}",
                    label: "Prompt do sistema"
                },
                maxTokens: {
                    description: "Número máximo de tokens na resposta.",
                    label: "Máximo de tokens"
                },
                endpoint: {
                    description: "Endpoint de IA compatível com OpenAI.",
                    label: "Endpoint"
                },
                context: {
                    description: "Número de mensagens anteriores a incluir como contexto.",
                    label: "Contexto"
                },
                passMessageAuthorName: {
                    description: "Adicionar o nome do autor antes do conteúdo da mensagem ao enviá-la para a IA. Isto pode ajudar a IA a distinguir utilizadores diferentes numa conversa.",
                    label: "Enviar nome do autor da mensagem"
                },
                treatSelfAsAssistant: {
                    description: "Quando ativado, as tuas próprias mensagens serão tratadas como mensagens do assistente no contexto. Isto faz com que alguns modelos comecem a gerar fanfics.",
                    label: "Tratar-me como assistente"
                },
                mode: {
                    description: "Como devem as respostas ser tratadas?",
                    label: "Modo",
                    autoreply: "Resposta automática",
                    chatbar: "Substituir o texto da barra de chat",
                    bot: "Clyde"
                },
                supportImages: {
                    description: "Enviar imagens para a IA como contexto (se houver). Nem todos os modelos suportam isto.",
                    label: "Suportar imagens"
                },
                sendImagesAsBase64: {
                    description: "Enviar imagens para a IA em base64.",
                    label: "Enviar imagens em base64"
                }
            },
            toast: {
                triviaaiApiSettingsAre: "TriviaAI: as definições da API estão incompletas.",
                errorGettingResponseFrom: "Erro ao obter resposta do modelo de IA"
            }
        },
        unreadCountBadge: {
            option: {
                showOnMutedChannels: {
                    description: "Mostrar contagem de não lidas em canais silenciados",
                    label: "Mostrar em canais silenciados"
                },
                notificationCountLimit: {
                    description: "Mostrar +99 em vez da quantidade real",
                    label: "Limite da contagem de notificações"
                }
            },
            name: "UnreadCountBadge",
            description: "Mostra indicadores de contagem de mensagens não lidas nos canais da lista"
        },
        userPFP: {
            toast: {
                gifsWebpMustBe: "GIFs/WebP têm de ser adicionados por URL. Ligações do Imgur, GitHub, Tenor, Giphy e Discord funcionam sem configuração adicional."
            },
            text: {
                save: "Guardar",
                delete: "Eliminar",
                customAvatar: "Avatar personalizado",
                original: "Original",
                local: "Local",
                enterPngGifUrl: "Introduz o URL do PNG/GIF",
                setAvatar: "Definir avatar",
                usingTheSetAvatar: "A funcionalidade de definir avatar é apenas local, ou seja, só tu vês a alteração.",
                joinUserpfpServer: "Entrar no servidor UserPFP",
                dropHere: "Larga aqui!",
                dragOrClick: "⬆ Arrasta uma imagem ou clica para enviar (para GIFs ou WebP, usa uma URL)",
                uploadedFile: "(ficheiro enviado)",
                supportHere: "Apoie o UserPFP aqui"
            },
            option: {
                overrideServerAvatars: {
                    description: "Substituir avatares de servidor por avatares personalizados ou pelo avatar predefinido se nenhum personalizado estiver definido.",
                    label: "Substituir avatares de servidor"
                },
                preferNitro: {
                    description: "Que avatar usar se existirem tanto o avatar animado predefinido (Nitro) como o do UserPFP",
                    label: "Preferir Nitro",
                    false: "UserPFP",
                    true: "Nitro"
                },
                databaseSource: {
                    description: "URL de onde carregar a base de dados",
                    label: "Origem da base de dados"
                }
            },
            name: "UserPFP",
            description: "Permite definir avatares locais estáticos ou animados para ti e para outros utilizadores"
        },
        userpluginInstaller: {
            toast: {
                restartToApplyChanges: "Reinicia para aplicar as alterações!"
            },
            text: {
                installError: "Erro de instalação",
                done: "Concluído!",
                later: "Mais tarde",
                updateError: "Erro de atualização",
                checkingForUpdates: "A procurar atualizações...",
                loadingPlugins: "A carregar plugins...",
                pluginUpdatesAvailable: "Atualizações de plugins disponíveis",
                theFollowingPluginsAre: "Os seguintes plugins estão desatualizados:",
                youCanUpdatePlugins: "Podes atualizar os plugins abaixo.",
                installPlugin: "Instalar plugin",
                userplugininstallerNotFullyLoaded: "UserpluginInstaller não foi totalmente carregado",
                youNeedToRestart: "Precisas de reiniciar para carregar a parte nativa :)",
                restartNow: "Reiniciar agora",
                someUserpluginsAreOut: "Alguns UserPlugins estão desatualizados!",
                clickToOpenThe: "Clica para abrir o atualizador de UserPlugins",
                plexcordDoesNotModerate: "O Plexcord não modera userplugins e não assume qualquer responsabilidade pelo que possa resultar da sua instalação.",
                onlyInstallUserpluginsFrom: "Instala apenas userplugins de programadores em quem confias. Fazê-lo é inteiramente por tua conta e risco.",
                setGitPath: "Definir caminho do Git",
                installHint: "Podes instalar um plugin do GitHub, GitLab, Codeberg, git.nin0.dev ou plugins.nin0.dev colando aqui o URL de clonagem.",
                enableAndRestart: "Ativar e reiniciar",
                enableAndRefresh: "Ativar e recarregar",
                tabCounts: "({{total}}, {{enabled}} ativados)",
                possiblyMore: "e possivelmente mais, pois a verificação de atualizações ainda não terminou. ",
                alreadyInstalled: "Plugin já instalado, atualize abaixo",
                invalidUrl: "URL inválido, leia o aviso acima",
                install: "Instalar",
                restart: "Reiniciar",
                refresh: "Atualizar",
                update: "Atualizar",
                source: "Código-fonte",
                support: "Suporte",
                managePlugins: "Gerir plugins",
                uninstalledRestart: "{{name}} foi desinstalado. É necessário reiniciar para remover o plugin completamente.",
                uninstalledRefresh: "{{name}} foi desinstalado. É necessário atualizar para remover o plugin completamente.",
                updatedRestart: "{{name}} foi atualizado. É necessário reiniciar para aplicar a atualização.",
                updatedRefresh: "{{name}} foi atualizado. É necessário atualizar para aplicar a atualização.",
                installedBody: "{{name}} foi instalado com sucesso. E agora?",
                installedNativeBody: "{{name}} foi instalado com sucesso. No entanto, como usa funções nativas, é necessário reiniciar o cliente. E agora?"
            },
            option: {
                allowlistedChannels: {
                    description: "Lista de canais separados por vírgulas onde o botão Instalar plugin deve aparecer. É sempre mostrado nos canais de userplugins do Plexcord",
                    label: "Canais permitidos"
                },
                notifyIfUpdate: {
                    description: "Mostrar uma notificação do Plexcord se os UserPlugins precisarem de ser atualizados",
                    label: "Notificar se houver atualização"
                },
                neverNotifyForPlugins: {
                    description: "Nunca mostrar notificações de atualização para estes plugins (podes continuar a atualizá-los no separador UserPlugins)",
                    label: "Nunca notificar para plugins"
                }
            },
            name: "UserpluginInstaller",
            description: "Instala userplugins com um simples clique"
        },
        vCPanelSettings: {
            option: {
                title1: {
                    label: "Título 1"
                },
                uncollapseSettingsByDefault: {
                    description: "Expandir automaticamente as definições de voz por predefinição",
                    label: "Expandir definições por predefinição"
                },
                title2: {
                    label: "Título 2"
                },
                outputVolume: {
                    description: "Mostrar um controlo deslizante de volume de saída",
                    label: "Volume de saída"
                },
                inputVolume: {
                    description: "Mostrar um controlo deslizante de volume de entrada",
                    label: "Volume de entrada"
                },
                outputDevice: {
                    description: "Mostrar um seletor de dispositivo de saída",
                    label: "Dispositivo de saída"
                },
                inputDevice: {
                    description: "Mostrar um seletor de dispositivo de entrada",
                    label: "Dispositivo de entrada"
                },
                camera: {
                    description: "Mostrar um seletor de câmara",
                    label: "Câmara"
                },
                title3: {
                    label: "Título 3"
                },
                showOutputVolumeHeader: {
                    description: "Mostrar cabeçalho acima do controlo de volume de saída",
                    label: "Mostrar cabeçalho do volume de saída"
                },
                showInputVolumeHeader: {
                    description: "Mostrar cabeçalho acima do controlo de volume de entrada",
                    label: "Mostrar cabeçalho do volume de entrada"
                },
                showOutputDeviceHeader: {
                    description: "Mostrar cabeçalho acima do seletor de dispositivo de saída",
                    label: "Mostrar cabeçalho do dispositivo de saída"
                },
                showInputDeviceHeader: {
                    description: "Mostrar cabeçalho acima do seletor de dispositivo de entrada",
                    label: "Mostrar cabeçalho do dispositivo de entrada"
                },
                showVideoDeviceHeader: {
                    description: "Mostrar cabeçalho acima do seletor de câmara",
                    label: "Mostrar cabeçalho do dispositivo de vídeo"
                }
            },
            name: "VCPanelSettings",
            description: "Controla as definições de voz diretamente no painel de voz",
            text: {
                appearance: "Aspeto",
                settingsToShow: "Definições a mostrar",
                headersToShow: "Cabeçalhos a mostrar",
                outputVolume: "Volume de saída",
                inputVolume: "Volume de entrada",
                outputDevice: "Dispositivo de saída",
                inputDevice: "Dispositivo de entrada",
                settings: "Definições",
                hide: "Ocultar"
            }
        },
        voiceMessageTranscriber: {
            text: {
                autoDetect: "Deteção automática",
                start: "Iniciar",
                transcriptionOptions: "Opções de transcrição",
                audioLanguage: "Idioma do áudio",
                retry: "Tentar novamente",
                transcriptionFailed: "Falha na transcrição",
                transcribeVoiceMessage: "Transcrever mensagem de voz",
                close: "Fechar",
                baseRecommended: "Base (recomendado)",
                small: "Small",
                largeV3TurboBest: "Large v3 Turbo (melhor precisão, GPU recomendada)",
                transcribe: "Transcrever",
                translateToEnglish: "Traduzir para o inglês",
                voiceMessageTranslation: "Tradução da mensagem de voz",
                voiceMessageTranscription: "Transcrição da mensagem de voz",
                hideTimestamps: "Ocultar marcações de tempo",
                showTimestamps: "Mostrar marcações de tempo",
                copied: "Copiado!",
                copyText: "Copiar texto",
                downloadingAudio: "A transferir áudio...",
                processingAudio: "A processar áudio...",
                loadingModel: "A carregar modelo...",
                transcribing: "A transcrever...",
                transcription: "Transcrição",
                transcriptionError: "Erro de transcrição",
                transcribingInProgress: "Transcrição em curso...",
                initializing: "A inicializar...",
                workerCrashed: "O processo de transcrição falhou",
                workerStopped: "O processo de transcrição foi interrompido",
                deleteCache: "Eliminar todos os ficheiros em cache ({{size}} MB)",
                action: "Ação"
            },
            name: "VoiceMessageTranscriber",
            description: "Transcrições de mensagens de voz no dispositivo com tecnologia Whisper",
            option: {
                embed: {
                    description: "Mostrar a transcrição diretamente no anexo da mensagem de voz em vez de numa janela.",
                    label: "Incorporação"
                },
                maintainHorizontal: {
                    description: "Manter o tamanho horizontal da caixa de transcrição incorporada e expandir verticalmente.",
                    label: "Manter horizontal"
                },
                selectedModel: {
                    description: "Tamanho do modelo.",
                    onnxcommunitywhispertiny: "Tiny (mais rápido, menor precisão)"
                },
                useGpu: {
                    description: "Executar o modelo na tua GPU (WebGPU) quando suportado. Muito mais rápido e torna os modelos maiores utilizáveis. Recorre à CPU se não estiver disponível.",
                    label: "Usar GPU"
                },
                quantized: {
                    description: "Usar modelos quantizados ao executar na CPU (menor tamanho, ligeira perda de qualidade).",
                    label: "Quantizado"
                },
                deleteModalFiles: {
                    description: "Eliminar ficheiros em cache do armazenamento.",
                    label: "Eliminar ficheiros do modelo"
                }
            }
        },
        voiceMessagesInBackground: {
            name: "VoiceMessagesInBackground",
            description: "Mantém as mensagens de voz a tocar entre chats com um minileitor sincronizado.",
            text: {
                voiceMessagesInBackground: "Leitor de mensagens de voz em segundo plano",
                returnToChannelname: "Voltar a {{channelName}}",
                voiceMessagePosition: "Posição da mensagem de voz",
                changePlaybackSpeed: "Alterar velocidade de reprodução",
                playbackSpeedSpeedTimes: "Velocidade de reprodução {{speed}} vezes",
                closeVoiceMessagePlayer: "Fechar o leitor de mensagens de voz",
                voiceMessage: "Mensagem de voz",
                directMessage: "Mensagem direta",
                resume: "Retomar mensagem de voz",
                pause: "Pausar mensagem de voz"
            }
        },
        webPWA: {
            name: "WebPWA",
            description: "Torna o Discord instalável como aplicação (PWA). Ativa indicadores de notificação, atalhos globais e a barra de título personalizada do Discord.",
            text: {
                activities: "Atividades",
                hopIn: "Entra",
                status: "Estado",
                emojis: "Emojis",
                rooms: "Salas",
                discord: "Discord",
                platforms: "Plataformas",
                keybindsInfoBefore: "Atalhos globais personalizados de Premir para X são suportados. Aceda a",
                keybindsInfoAfter: "para os alterar. Atalhos de Manter para X não são suportados."
            }
        },
        "webRichPresence (arRPC)": {
            name: "WebRichPresence (arRPC)"
        },
        webScreenShare: {
            option: {
                resolution: {
                    description: "Resolução",
                    label: "Resolução"
                },
                frameRate: {
                    description: "Taxa de fotogramas",
                    label: "Taxa de fotogramas"
                },
                contentHint: {
                    description: "Sugestão de conteúdo",
                    label: "Sugestão de conteúdo"
                },
                systemAudio: {
                    description: "Silenciar áudio do sistema",
                    label: "Áudio do sistema"
                }
            },
            name: "WebScreenShare",
            description: "Adiciona um menu de opções de partilha de ecrã. Permite alterar a resolução, a taxa de fotogramas, sugestões de codificação e o áudio do sistema.",
            text: {
                stream: "Transmissão",
                streamMuted: "Transmissão silenciada",
                streamMode: "Modo de transmissão",
                muteStreamAudio: "Silenciar áudio da transmissão",
                preventsSystemAudioFrom: "Impede que o áudio do sistema seja incluído na tua transmissão.",
                showStreamPreviews: "Mostrar pré-visualizações da transmissão",
                allowsOthersToSee: "Permite que outros vejam uma pré-visualização da tua transmissão antes de entrarem.",
                smootherVideo: "Vídeo mais fluido",
                cleanerText: "Texto mais nítido",
                userPreset: "Predefinição do utilizador",
                custom: "Personalizado",
                gaming: "Jogos",
                screenshare: "Partilha de ecrã"
            }
        },
        whitelistedEmojis: {
            option: {
                defaultEmojis: {
                    description: "Ocultar emojis Unicode predefinidos do preenchimento automático, exceto se estiverem na lista de permissões.",
                    label: "Emojis predefinidos"
                },
                serverEmojis: {
                    description: "Ocultar emojis personalizados do servidor do preenchimento automático, exceto se estiverem na lista de permissões.",
                    label: "Emojis do servidor"
                },
                disableToasts: {
                    description: "Não mostrar avisos ao adicionar ou remover emojis.",
                    label: "Desativar avisos"
                },
                whiteListedEmojis: {
                    description: "Emojis na lista de permissões",
                    label: "Emojis na lista de permissões"
                },
                exportEmojis: {
                    description: "Exportar emojis",
                    label: "Exportar emojis"
                },
                importEmojis: {
                    description: "Importar emojis",
                    label: "Importar emojis"
                },
                resetEmojis: {
                    description: "Repor emojis",
                    label: "Repor emojis"
                }
            },
            name: "WhitelistedEmojis",
            description: "Permite desativar todos os emojis de mensagens, exceto um conjunto na lista de permissões.",
            toast: {
                addedLengthEmojisTo: "{{length}} emojis adicionados à lista, {{length}} já estavam na lista",
                removedLengthEmojisFrom: "{{length}} emojis removidos da lista",
                nameIsAlreadyIn: "\"{{name}}\" já está na lista",
                addedNameToThe: "\"{{name}}\" adicionado à lista",
                nameIsNotIn: "\"{{name}}\" não está na lista",
                removedNameFromThe: "\"{{name}}\" removido da lista",
                successfullyExportedEmojis: "Emojis exportados com sucesso",
                successfullyImportedEmojis: "Emojis importados com sucesso",
                invalidJsonData: "Dados JSON inválidos",
                failedToImportEmojis: "Falha ao importar emojis: {{err}}",
                resetEmojis: "Emojis repostos"
            },
            text: {
                areYouSure: "Tens a certeza?",
                thisWillOverwriteYour: "Isto vai substituir a tua lista de permissões atual.",
                import: "Importar",
                cancel: "Cancelar",
                thisWillRemoveAll: "Isto vai remover todos os emojis da tua lista de permissões.",
                reset: "Repor",
                addAllGuildEmojis: "Adicionar todos os emojis do servidor",
                removeAllGuildEmojis: "Remover todos os emojis do servidor",
                noEmojisInThe: "Nenhum emoji na lista de permissões.",
                removeAll: "Remover todos",
                removeFromWhitelist: "Remover da lista de permissões",
                addToWhitelist: "Adicionar à lista de permissões",
                defaultEmojis: "Emojis predefinidos",
                guildEmojis: "Emojis de {{name}}",
                guildFallback: "Servidor {{id}}",
                whitelistedEmojis: "Emojis na lista de permissões",
                remove: "Remover"
            }
        },
        wigglyText: {
            option: {
                intensity: {
                    description: "Intensidade da animação em px",
                    label: "Intensidade"
                }
            },
            name: "WigglyText",
            description: "Adiciona uma nova formatação markdown que faz o texto ondular.",
            text: {
                leftAndRight: "esquerda e direita",
                byTyping: "escrevendo",
                upAndDown: "cima e baixo",
                inACircle: "em círculo",
                youCanMakeTextWiggle: "Podes fazer o texto abanar assim:"
            }
        },
        fixDiscordCss: {
            description: "Corrige o atraso do CSS do Discord"
        },
        directFileDownload: {
            name: "DirectFileDownload",
            description: "Transfere ficheiros diretamente do Discord em vez de os abrir no navegador"
        },
        githubRepos: {
            text: {
                failedToFetchRepositories: "Não foi possível obter os repositórios",
                personal: "Pessoal",
                unknown: "Desconhecido",
                sortedByCount: "Ordenado por número de repositórios. Clica para ordenar de A-Z",
                sortedAlphabetically: "Ordenado de A-Z. Clica para ordenar por número de repositórios",
                mostRepos: "Mais repositórios"
            }
        }
    }
} as const;

export default translations;
