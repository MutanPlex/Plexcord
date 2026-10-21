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
        title: "Configurações",
        language: {
            selector: {
                label: "Idioma",
                description: "Selecione seu idioma preferido para o Plexcord.",
                placeholder: "Selecionar Idioma"
            }
        },
        location: {
            label: "Localização das Configurações",
            description: "Onde colocar a seção de configurações do Plexcord",
            top: "No topo de tudo",
            nitro: {
                above: "Acima da seção Nitro",
                below: "Abaixo da seção Nitro"
            },
            activity: {
                above: "Acima das Configurações de Atividade",
                below: "Abaixo das Configurações de Atividade"
            },
            bottom: "No final de tudo"
        },
        switches: {
            useQuickCss: {
                label: "Ativar CSS Personalizado",
                description: "Aplica o seu QuickCSS configurado"
            },
            enableReactDevtools: {
                label: "Ativar React Developer Tools",
                description: "Útil principalmente para desenvolvedores de plugins. Ignore se não souber o que é"
            },
            mainWindowFrameless: {
                label: "Desativar Moldura da Janela Principal",
                description: "Remove a moldura nativa da janela para um visual mais limpo. Você ainda pode mover a janela arrastando a área da barra de título."
            },
            frameless: {
                label: "Desativar a moldura da janela",
                description: "Remove a moldura nativa da janela para um visual mais limpo. Você ainda pode mover a janela arrastando a área da barra de título."
            },
            nativeTitleBar: {
                label: "Usar a barra de título nativa do Windows em vez da personalizada do Discord",
                description: "Substitui a barra de título personalizada do Discord pela barra de título padrão do Windows. Isso pode melhorar a compatibilidade com algumas ferramentas de gerenciamento de janelas."
            },
            transparent: {
                label: "Ativar transparência da janela",
                description: "Torna a janela do Discord transparente. É necessário um tema que suporte transparência, caso contrário, isso não terá efeito.",
                isWindows: "Isso impedirá que a janela seja redimensionada e evita que você prenda a janela nas bordas da tela.",
                notWindows: "Isso impedirá que a janela seja redimensionada."
            },
            winCtrlQ: {
                label: "Registrar Ctrl+Q como atalho para fechar o Discord (Alternativa ao Alt+F4)",
                description: "Adiciona Ctrl+Q como um atalho de teclado para fechar o Discord. Oferece uma alternativa ao Alt+F4 para fechar o aplicativo rapidamente."
            },
            disableMinSize: {
                label: "Desativar tamanho mínimo da janela",
                description: "Permite redimensionar a janela para qualquer tamanho, até menor que o tamanho mínimo do Discord"
            }
        },
        quickActions: {
            title: "Ações Rápidas",
            description: "Ações comuns que você pode querer realizar. Esses atalhos oferecem acesso rápido a recursos frequentemente usados sem navegar pelos menus.",
            notificationLog: "Log de Notificações",
            editQuickCSS: "Editar QuickCSS",
            relaunchDiscord: "Reiniciar Discord",
            openSettingsFolder: "Abrir Pasta de Configurações",
            viewSourceCode: "Ver Código-Fonte"
        },
        specialCards: {
            donations: {
                title: "Doações",
                subtitle: "Obrigado por doar!",
                description: "Você pode gerenciar suas vantagens a qualquer momento enviando uma mensagem para @mutanplex.",
                button: "Doar",
                invite: "Junte-se ao nosso Discord",
                invalid: "Link de convite inválido ou expirado."
            },
            supportProject: {
                title: "Apoie o Projeto",
                description: "Considere apoiar o desenvolvimento do Plexcord fazendo uma doação!"
            },
            contributions: {
                title: "Contribuições",
                subtitle: "Obrigado por contribuir!",
                description: "Como você contribuiu para o Plexcord, agora você tem um novo emblema legal!",
                buttonTitle: "Veja com o que você contribuiu"
            }
        },
        settingsSection: {
            title: "Configurações",
            description: "Configure como o Plexcord se comporta e se integra ao Discord. Essas configurações afetam a aparência e o comportamento do cliente Discord.",
            hintParts: {
                prefix: "Você pode personalizar onde esta seção de configurações aparece no menu de configurações do Discord configurando o {{pluginLink}}",
                linkText: "Plugin de Configurações"
            }
        },
        notifications: {
            title: "Notificações",
            description: "Configure como o Plexcord lida com notificações. Você pode personalizar quando e como recebe alertas, ou ver um histórico de notificações passadas.",
            settings: "Configurações de Notificação",
            viewLog: "Ver Log de Notificações",
            permissions: {
                denied: {
                    title: "Permissão de Notificação na Área de Trabalho Negada",
                    label: "Você negou as permissões de notificação. As notificações na área de trabalho não funcionarão!"
                }
            },
            style: {
                label: "Estilo das Notificações",
                description: "Alguns plugins podem mostrar notificações. Elas vêm em dois estilos:",
                plexcord: "Notificações Plexcord",
                plexcordDesc: "Estas são notificações internas do app",
                desktop: "Notificações da Área de Trabalho",
                desktopDesc: "Notificações nativas do sistema (como quando você recebe um ping)",
                onlyWhenNotFocused: "Usar notificações na área de trabalho apenas quando o Discord não estiver em foco",
                always: {
                    desktop: "Sempre usar notificações na área de trabalho",
                    plexcord: "Sempre usar notificações Plexcord"
                }
            },
            positions: {
                label: "Posição da Notificação",
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
                description: "Ao voltar para o Discord, uma notificação aparecerá com a quantidade de mensagens que você perdeu",
                whileYou: "Enquanto você estava fora",
                count: "{{count}} notificação{{s}} recebida{{s}}",
                s: "s"
            },
            timeout: {
                label: "Tempo de Exibição",
                description: "O tempo (em segundos) que as notificações ficarão na tela antes de desaparecerem automaticamente"
            },
            logLimit: {
                label: "Limite do Log de Notificações",
                description: "O número máximo de notificações para manter no log antes que as antigas sejam removidas. Defina como {{disable}} para desativar o log e {{unlimited}} para nunca remover notificações antigas"
            },
            opacity: {
                label: "Opacidade da Notificação",
                description: "A opacidade das notificações internas do app"
            },
            maxNotifications: {
                label: "Máximo de Notificações",
                description: "Número máximo de notificações exibidas de uma vez"
            },
            behavior: {
                label: "Comportamento da Notificação",
            },
            disableInStreamerMode: {
                label: "Desativar no Modo Streamer",
                description: "Desativa as notificações enquanto o modo streamer estiver ativo"
            },
            renderImages: {
                label: "Renderizar Imagens",
                description: "Exibe imagens nas notificações"
            },
            streamingTreatment: {
                label: "Tratamento em Transmissão",
                description: "Como tratar as notificações enquanto compartilha sua tela",
                normal: "Normal - Mostrar a notificação normalmente",
                noContent: "Sem Conteúdo - Ocultar o corpo da notificação",
                ignore: "Ignorar - Não mostrar a notificação"
            },
        },
        windowsMaterial: {
            title: "Material de fundo do Windows (requer reinício)",
            description: "Efeitos de fundo transparente do Windows. Você precisa de um tema com suporte a transparência, ou isso não fará nada. É necessário reiniciar após alterar esta configuração.",
            material: {
                none: "Nenhum",
                mica: "Mica (usa o tema do sistema + papel de parede para pintar o fundo)",
                tabbed: "Tabbed (variante do Mica com tonalidade de fundo mais forte)",
                acrylic: "Acrylic (desfoca a janela atrás do Discord para um fundo translúcido)"
            }
        },
        macVibrancy: {
            title: "Estilo de Vibração da Janela (Requer Reinicialização)",
            description: "Personalize o efeito de vibração (vibrancy) da janela no macOS. Isso controla o estilo de desfoque e transparência. Alterações requerem reinicialização.",
            placeholder: "Estilo de vibração da janela",
            style: {
                no: "Sem Vibração",
                underPage: "Sob a Página (Tingimento da janela)",
                content: "Conteúdo",
                window: "Janela",
                selection: "Seleção",
                titlebar: "Barra de Título",
                header: "Cabeçalho",
                sidebar: "Barra Lateral",
                tooltip: "Dica de Ferramenta",
                menu: "Menu",
                popover: "Popover",
                fullscreenUI: "Interface em Tela Cheia (Transparente mas levemente desfocada)",
                hud: "HUD (Mais Transparente)"
            }
        },
        tabs: {
            renderFailed: "Falha ao exibir a aba {{tab}}. Se o problema persistir, tente reinstalar usando o instalador!"
        }
    },

    plugins: {
        title: "Plugins",
        new: "NOVO",
        unknown: "Desconhecido",
        noDescription: "Nenhuma descrição disponível.",
        restart: {
            apply: "Reinicie para aplicar as alterações!",
            required: "Reinicialização necessária!",
            description: "Reinicie agora para aplicar os novos plugins e suas configurações",
            following: "Os seguintes plugins requerem reinicialização:",
            remainingCount: "e mais {{count}}",
            fully: "Alguns plugins requerem reinicialização para serem totalmente desativados",
            would: "Gostaria de reiniciar agora?",
            resetDefault: "Redefinir para configurações padrão",
            failed: "Falha ao iniciar dependências:",
            button: {
                restart: "Reiniciar",
                later: "Mais tarde!",
                now: "Reiniciar Agora",
                cancel: "Cancelar",
                disableWarning: "Desativar Aviso Para Sempre",
                disableAll: "Desativar Tudo",
                reset: "Redefinir",
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
            description: "Pressione a engrenagem ou o ícone de informação para saber mais sobre um plugin",
            settingsInfo: "Plugins com uma engrenagem possuem configurações que você pode modificar!",
            disableAll: "Desativar Todos os Plugins"
        },
        error: {
            invalidInput: "Entrada inválida fornecida",
            stopping: "Erro ao parar o plugin {{plugin}}",
            starting: "Erro ao iniciar o plugin {{plugin}}",
            startDependency: "Erro ao iniciar dependências: {{failures}}",
            infoRender: "Ocorreu um erro ao renderizar o Componente de Info personalizado deste plugin"
        },
        placeholder: {
            number: "Digite um número",
            select: "Selecione uma opção",
            text: "Digite um valor"
        },
        excluded: {
            desktop: "App de Desktop do Discord ou Plextron",
            discordDesktop: "App de Desktop do Discord",
            plextron: "App Plextron",
            web: "App Plextron e versão Web do Discord",
            dev: "Versão de desenvolvedor do Plexcord",
            browser: "Versão para navegador web do Plexcord"
        },
        search: {
            looking: "Você está procurando por",
            onlyAvailable: "Disponível apenas no",
            noCriteria: "Nenhum plugin atende aos critérios de pesquisa."
        },
        required: {
            title: "Plugins Necessários",
            this: "Este plugin é obrigatório para o Plexcord funcionar.",
            by: "Este plugin é exigido por:"
        },
        dangerModal: {
            title: "AÇÃO PERIGOSA",
            disablePlugins: "Desativar Plugins",
            disableText: "Desativar Tudo",
            irreversible: "ESTA AÇÃO É IRREVERSÍVEL!",
            enableBack: "Tem certeza absoluta de que deseja prosseguir? Você sempre pode ativá-los novamente mais tarde.",
            undone: "Esta ação não pode ser desfeita. Tem certeza?",
            resetDescription: "Você está prestes a redefinir todas as configurações de {{pluginName}} para os valores padrão.",
            disable: "Você está prestes a desativar {{enabledPlugins}} plugins!",
            confirmReset: "Confirmar Redefinição",
            cancel: "Cancelar",
            resetSettings: "Redefinir Configurações",
            resetText: "Redefinir"
        },
        filters: {
            label: "Filtros",
            placeholder: "Procurar plugin...",
            option: {
                all: "Mostrar Tudo",
                enabled: "Mostrar Ativados",
                disabled: "Mostrar Desativados",
                new: "Mostrar Novos",
                userplugins: "Mostrar Plugins de Usuário",
                api: "Mostrar Plugins de API",
                type: "Filtrar por tipo",
                tags: "Filtrar por tags",
                favorites: "Mostrar favoritos"
            }
        },
        pluginModal: {
            noSettings: "Não há configurações para este plugin.",
            authors: "Autores",
            settings: "Configurações",
            successfulReset: "As configurações de {{plugin}} foram redefinidas.",
            enabledStock: "Plugins Originais Ativados",
            totalStock: "Total de Plugins Originais",
            enabledUser: "Plugins de Usuário Ativados",
            totalUser: "Total de Plugins de Usuário",
            info: "Ver mais informações",
            source: "Ver código-fonte",
            favorite: "Favoritar plugin - fixa-o no topo da lista de plugins",
            unfavorite: "Desfavoritar plugin"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API para adicionar decoradores à lista de membros (servidores e DMs)",
                    messageAccessories: "API para adicionar acessórios às mensagens",
                    messageDecorations: "API para adicionar decorações às mensagens",
                    chatInputButtons: "API para adicionar botões à entrada de chat",
                    commands: "API necessária para qualquer coisa que utilize comandos",
                    contextMenu: "API para adicionar/remover itens de menus de contexto.",
                    dynamicImageModal: "Permite omitir largura ou altura ao abrir um modal de imagem",
                    menuItemDemangler: "Corrige o módulo de Itens de Menu do Discord",
                    messageEvents: "API necessária para qualquer coisa que use eventos de mensagem",
                    messagePopover: "API para adicionar botões aos popovers de mensagem",
                    messageUpdater: "API para atualizar e renderizar mensagens novamente",
                    nicknameIcons: "API para adicionar ícones ao apelido nos perfis",
                    notices: "Corrige avisos que são fechados automaticamente",
                    serverList: "API necessária para plugins que modificam a lista de servidores",
                    userSettings: "Modifica o UserSettings do Discord para expor grupo e nome.",
                    audioPlayer: "API para reproduzir arquivos de áudio internos do Discord ou links externos.",
                    userArea: "API para adicionar botões ao painel da área do usuário.",
                    profileCollections: "API para adicionar coleções ao painel de perfil do usuário, como a coleção de jogos do Discord.",
                    profileSections: "API para adicionar seções perto da área 'Membro desde' dos painéis de perfil de usuário.",
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
                description: "API para adicionar emblemas aos usuários",
                contributor: {
                    plexcord: "Contribuidor Plexcord",
                    vencord: "Contribuidor Vencord",
                    userPlugin: "Contribuidor de Plugin de Usuário"
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
                    special: "Este emblema é uma vantagem especial para Doadores do Plexcord",
                    description: "Considere apoiar o desenvolvimento do Plexcord tornando-se um doador. Significaria muito para nós!"
                }
            },
        },
        uiElements: {
            manage: "Gerenciar Elementos da UI",
            allows: "Permite ocultar botões que você não gosta",
            section: {
                chatbar: {
                    title: "Botões da Barra de Chat",
                    description: "Estes são os botões no lado direito da barra de entrada de texto"
                },
                messagePopover: {
                    title: "Botões de Popover de Mensagem",
                    description: "Estes são os botões flutuantes que aparecem ao passar o mouse sobre uma mensagem"
                }
            },
            button: "Botões de plugins ativados aparecerão aqui."
        },
        invalidInput: "Entrada inválida",
        loading: "Carregando...",
        authorPrefix: "por"
    },

    patchHelper: {
        title: "Assistente de patches",
        description: "Uma ferramenta de desenvolvedor para ajudar a criar patches para plugins Plexcord.",
        fullPatch: {
            label: "Patch Completo",
            description: "Cole seu patch JSON completo aqui para preencher os campos"
        },
        find: "Procurar",
        match: "Corresponder",
        replacement: "Substituição",
        preview: "Pré-visualização",
        generatedCode: "Código Gerado",
        group: "Grupo",
        diff: "Diferença (Diff)",
        module: "Módulo",
        compile: "Compilar",
        compiled: "Compilação Bem-sucedida",
        copy: {
            clipboard: "Copiar para Área de Transferência",
            codeblock: "Copiar como Bloco de Código"
        },
        error: {
            noMatch: "Nenhuma correspondência encontrada. Este módulo pode estar sendo carregado tardiamente (lazy load)?",
            multipleMatch: "Múltiplas correspondências encontradas. Use um padrão de busca mais específico.",
            noFind: "Campo 'Find' está faltando.",
            noReplacement: "Campo 'Replacement' está faltando.",
            invalidReplacement: "Campo 'Replacement' é inválido",
            replacementMatch: "Campo 'replacement.match' está faltando",
            replacementReplace: "Campo 'replacement.replace' está faltando",
            replacementMustFunction: "'Replacement' deve ser uma função"
        },
        cheatSheet: {
            title: "Guia Rápido",
            identifiers: "Sequência especial de escape regex que corresponde a identificadores (varnames, classnames, etc.)",
            dollar: "Inserir um $",
            entireMatch: "Inserir toda a correspondência",
            beforeMatch: "Inserir a substring antes da correspondência",
            afterMatch: "Inserir a substring após a correspondência",
            nthGroup: "Inserir o n-ésimo grupo de captura ($1, $2...)",
            pluginInstance: "Inserir a instância do plugin"
        },
        replacementEval: {
            label: "Tratar Substituição como função",
            description: "O campo 'Replacement' será avaliado como uma função se isto estiver ativado"
        }
    },

    sync: {
        title: "Backup & Restauração",
        warning: "Aviso",
        warningText: "Importar um arquivo de configurações substituirá suas configurações atuais. Certifique-se de exportar um backup primeiro se quiser manter sua configuração atual.",
        description: "Você pode importar e exportar suas configurações do Plexcord como um arquivo JSON. Isso permite transferir facilmente suas configurações para outro dispositivo ou recuperá-las após reinstalar o Plexcord ou o Discord.",
        successful: "Configurações importadas com sucesso. Reinicie para aplicar as alterações!",
        error: {
            failure: "Falha ao importar configurações: {{error}}",
            failedExport: "Falha ao exportar configurações, verifique o console",
            invalid: "Configurações inválidas. Isto é mesmo um arquivo de configurações do Plexcord?",
            tooLarge: "DataStore muito grande - excluído do backup. Use 'Exportar DataStores' se necessário.",
            clearSomeDate: "DataStore muito grande. Limpe alguns dados de plugins e tente novamente."
        },
        settings: {
            text: "O que está incluído no backup?",
            quickcss: "QuickCSS Personalizado",
            theme: "Links de Temas",
            plugins: "Configurações de Plugins",
            datastores: "DataStores de Plugins (ex: Fusos horários ou IRememberYou)"
        },
        import: {
            title: "Importar Configurações",
            description: "Selecione um arquivo de configurações exportado anteriormente para restaurar sua configuração. Isso substituirá todas as suas configurações atuais.",
            all: "Importar Todas as Configurações",
            plugins: "Importar Plugin",
            css: "Importar QuickCSS",
            datastore: "Importar DataStores"
        },
        export: {
            title: "Exportar Configurações",
            description: "Você pode exportar suas configurações atuais do Plexcord para um arquivo para backup ou transferência.",
            all: "Exportar Todas as Configurações",
            plugins: "Exportar Plugin",
            css: "Exportar QuickCSS",
            datastore: "Exportar DataStores"
        },
        backupFileType: "Backup das configurações do Plexcord"
    },

    cloud: {
        text: "Nuvem",
        title: "Sincronização de Configurações",
        override: "Sincronização em Nuvem",
        description: "Sincronize suas configurações do Plexcord com a nuvem. Isso facilita manter sua configuração consistente em vários dispositivos sem a necessidade de importar/exportar manualmente.",
        switchDescription: "Quando ativado, suas configurações podem ser sincronizadas de e para a nuvem. Use as ações abaixo para sincronizar manualmente.",
        settings: "Configurações de Nuvem",
        successful: "Configurações sincronizadas com a nuvem com sucesso!",
        updated: "Suas configurações foram atualizadas! Clique aqui para reiniciar e aplicar as alterações!",
        deleted: "Configurações excluídas da nuvem!",
        integration: {
            title: "Integração em Nuvem",
            description: "A integração em nuvem do Plexcord permite sincronizar suas configurações em vários dispositivos e instalações do Discord. Seus dados são armazenados de forma segura e podem ser restaurados a qualquer momento.",
        },
        reauth: "Notamos que você tem integrações em nuvem ativas em outro cliente! Devido a limitações, você precisará reautorizar para continuar usando-as. Clique aqui para ir às configurações e fazer isso!",
        error: {
            setup: "Falha na configuração (não foi possível recuperar a configuração OAuth).",
            secret: "Falha na configuração (nenhum segredo retornado).",
            string: "Falha na configuração ({{error}}).",
            connect: "A sincronização em nuvem foi desativada porque esta conta não está conectada ao App Plexcord Cloud. Você pode ativá-la novamente conectando esta conta nas Configurações de Nuvem. (nota: as preferências serão armazenadas separadamente)",
            noSettings: "Não há configurações na nuvem.",
            uptodate: "Suas configurações estão atualizadas.",
            localNewer: "Suas configurações locais são mais recentes que as da nuvem.",
            delete: "Não foi possível excluir as configurações ({{error}}).",
            api: {
                returned: {
                    delete: "Não foi possível excluir as configurações (A API retornou {{status}}).",
                    to: "Não foi possível sincronizar as configurações para a nuvem (A API retornou {{status}}).",
                    from: "Não foi possível sincronizar as configurações da nuvem (A API retornou {{status}}).",
                    manifest: "Não foi possível obter o manifesto para exclusão (a API retornou {{status}})."
                }
            },
            synchronize: {
                to: "Não foi possível sincronizar as configurações para a nuvem ({{error}}).",
                from: "Não foi possível sincronizar as configurações da nuvem ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Ative a integração em nuvem acima para usar os recursos de sincronização."
        },
        danger: {
            title: "Zona de Perigo",
            description: "Exclua permanentemente todos os seus dados da nuvem. Esta ação não pode ser desfeita e removerá todas as configurações sincronizadas e quaisquer outros dados armazenados no backend da nuvem.",
            delete: {
                account: {
                    title: "Excluir Conta da Nuvem",
                    description: "Tem certeza de que deseja excluir permanentemente sua conta da nuvem e todos os dados associados? Esta ação não pode ser desfeita.",
                    confirm: "Excluir Conta",
                    cancel: "Cancelar"
                }
            }
        },
        notification: {
            title: "Integração em Nuvem",
            enabled: "Integração em Nuvem Ativada",
            host: "{{host}} foi adicionado à lista de permissões. Reinicie o aplicativo para que as alterações entrem em vigor.",
            erase: {
                successful: "Dados da nuvem apagados com sucesso",
                failed: "Falha ao apagar todos os dados (A API retornou {{status}}), entre em contato com o suporte."
            }
        },
        button: {
            to: "Sincronizar para a Nuvem",
            from: "Sincronizar da Nuvem",
            fromDescription: "Isso substituirá suas configurações locais pelas que estão na nuvem. Use com sabedoria!",
            delete: "Excluir Dados da Nuvem",
            enable: "Ativar Integrações em Nuvem",
            reauthorize: "Reautorizar",
            confirm: "Reiniciar agora",
            later: "Depois!"
        },
        privacy: "respeita sua privacidade",
        source: "código fonte",
        overview: "O Plexcord vem com uma integração em nuvem que adiciona facilidades como sincronização de configurações entre dispositivos. Ele {{privacy}}, e o {{source}} é licenciado sob AGPL 3.0 para que você mesmo possa hospedá-lo.",
        authorization: "Conecte-se ao backend da nuvem para sincronização de configurações. Isso solicitará autorização caso você ainda não tenha configurado a integração.",
        backend: {
            title: "Backend da Nuvem",
            description: "Escolha como suas configurações são armazenadas na nuvem. Por padrão, o Plexcord Cloud é usado, mas você também pode conectar seu próprio serviço de nuvem auto-hospedado.",
            invalid: "URL Inválida"
        },
        sync: {
            title: "Regras de Sincronização para este Dispositivo",
            description: "Esta configuração controla como as definições se movem entre este dispositivo e a nuvem. Você pode permitir que as alterações fluam para ambos os lados ou escolher um local como fonte principal.",
            direction: {
                both: "Sincronização bidirecional (mudanças vão para ambos os lados)",
                push: "Este dispositivo é a fonte (apenas upload)",
                pull: "A nuvem é a fonte (apenas download)",
                manual: "Não sincronizar automaticamente (apenas sincronização manual via botões abaixo)"
            }
        }
    },

    changelog: {
        text: "Registro de alterações",
        title: "Registro de alterações",
        description: "Você pode encontrar as últimas mudanças e atualizações do Plexcord aqui.",
        by: "por",
        check: "Verificação de repositório",
        uptodate: "atualizado",
        update: "Atualizar",
        noMessage: "Sem mensagem",
        unknown: "Desconhecido",
        updatedPlugins: "Plugins Atualizados",
        newSettings: "Novas Configurações",
        newSettingTooltip: "Nova configuração em {{plugin}}",
        loading: "Carregando...",
        repoUptodate: "Repositório atualizado",
        fetch: "Buscar do Repositório",
        clear: "Limpar Todos os Registros",
        internet: "Certifique-se de ter uma conexão com a Internet e tente novamente.",
        recent: "Alterações Recentes",
        codeChanges: "Alterações de Código: {{count}} novo(s) commit(s)",
        updateLogs: "Registros de Atualização ({{count}})",
        noCommit: "Não há commits à frente da sua versão atual. Clique em 'Buscar do Repositório' para verificar novas alterações.",
        previous: "Sessões de atualização anteriores com histórico de commits e mudanças de plugins.",
        modal: {
            description: "Veja as alterações mais recentes no Plexcord. Isso busca os commits diretamente do repositório para mostrar o que há de novo.",
            repository: "Repositório",
            failed: "Falha ao recuperar - verifique o console",
            current: "Atual:",
            hide: "Ocultar logs",
            show: "Mostrar logs",
            fetch: {
                title: "Buscar Alterações",
                description: "Verifique o repositório por novos commits, atualizações de plugins e mudanças de código. Isso comparará sua versão atual com a mais recente disponível.",
                newCommit: "Estes são os novos commits e atualizações de plugins desde a sua última versão. Você pode ver quais recursos foram adicionados, bugs corrigidos e quais plugins foram atualizados.",
                confirm: "Buscar",
            }
        },
        commit: {
            available: "commits disponíveis",
            no: "Sem novos commits",
            new: "novos plugins",
            updated: "plugins atualizados",
            settings: "novas configurações"
        },
        toast: {
            already: "Já está atualizado com o repositório",
            found: "Encontrados {{count}} novos commit(s) no repositório",
            local: "O repositório está atualizado com sua cópia local",
            failed: "Falha ao buscar do repositório :(",
            cleared: "Todos os registros foram limpos",
            logCleared: "O registro foi limpo",
            yourLatest: "Commits registrados da sua última atualização"
        },
        alert: {
            clear: {
                title: "Limpar Todos os Registros",
                body: "Tem certeza de que deseja limpar todos os registros? Isso não pode ser desfeito.",
                confirm: "Limpar Tudo",
                confirmColor: "danger",
                cancel: "Cancelar"
            },
            log: {
                title: "Limpar Registro",
                body: "Tem certeza de que deseja limpar este registro? Isso não pode ser desfeito.",
                confirm: "Limpar Registro",
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
            connectRepo: "Não foi possível conectar ao repositório. Verifique sua conexão com a internet."
        }
    },

    csp: {
        restart: "É necessário reiniciar para aplicar esta alteração",
        blocked: {
            resources: "Recursos Bloqueados",
            disallowed: "Algumas imagens, estilos ou fontes foram bloqueados porque vêm de domínios não permitidos.",
            recommended: "É altamente recomendado movê-los para o GitHub ou Imgur. Mas você também pode permitir domínios se confiar totalmente neles.",
            afterAllow: "Após permitir um domínio, você deve fechar totalmente (pela bandeja / gerenciador de tarefas) e reiniciar o {{platform}} para aplicar a mudança.",
            allow: "Permitir",
            url: "URLs Bloqueadas"
        },
        imgur: {
            direct: "Links do Imgur devem ser links diretos no formato {{etc}}",
            copy: "Para obter um link direto, clique com o botão direito na imagem e selecione 'Copiar endereço da imagem'."
        },
        wants: {
            caller: "{{callerName}} deseja permitir conexões para {{domain}}",
            detail: "A menos que você reconheça e confie totalmente em {{domain}}, você deve cancelar esta solicitação!",
            restart: "Você terá que fechar totalmente e reiniciar o {{appName}} para que as alterações entrem em vigor.",
            type: {
                images: "Imagens",
                styles: "CSS e Temas",
                fonts: "Fontes"
            },
            content: "Os seguintes tipos de conteúdo terão permissão para carregar de {{domain}}:",
            understand: "Eu confio totalmente em {{domain}} e entendo os riscos de permitir conexões a ele.",
            button: {
                cancel: "Cancelar",
                allow: "Permitir"
            },
            title: "Permissões de Host"
        }
    },

    themes: {
        title: "Temas",
        management: "Gerenciamento de Temas",
        description: "Personalize a aparência do Discord com temas. Adicione arquivos .css locais ou carregue temas diretamente de URLs. Temas com um ícone de engrenagem possuem configurações personalizáveis.",
        local: "Temas Locais",
        new: "NOVO",
        pinned: "Fixado",
        stylus: "extensão Stylus",
        bd: "Temas do BetterDiscord",
        github: "GitHub",
        download: "Procurando por temas? Confira o {{bd}} ou pesquise no {{github}}. Ao baixar do BetterDiscord, clique em 'Download' e coloque o arquivo .theme.css na sua pasta de temas.",
        add: "Adicionar",
        reset: "Redefinir configurações para o padrão",
        notCSS: "Não é um arquivo CSS. Lembre-se de usar o link direto (raw)!",
        okay: "Ok!",
        checking: "Verificando...",
        valid: "Válido!",
        upload: "Enviar Tema",
        openFolder: "Abrir Pasta de Temas",
        loadMissing: "Carregar Temas Ausentes",
        editQuickCSS: "Editar QuickCSS",
        editClient: "Editar ClientTheme",
        website: "Abrir Website",
        discord: "Servidor do Discord",
        downloadTheme: "Baixar",
        refresh: "Atualizar",
        delete: "Excluir",
        activation: {
            title: "Ativação do tema",
            always: "Sempre ativo",
            lightOnly: "Somente tema claro",
            darkOnly: "Somente tema escuro"
        },
        actions: {
            pin: "Fixar",
            unpin: "Desafixar",
            editSettings: "Editar configurações"
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
            description: "Carregue temas diretamente de URLs em vez de arquivos locais. Temas online atualizam-se automaticamente quando a fonte muda, garantindo que você tenha sempre a versão mais recente.",
            enable: "Ativar Temas Online",
            enableDescription: "Alterna o carregamento de temas online. Quando desativado, todos os temas online serão desligados e você não poderá adicionar novos.",
            placeholder: "https://exemplo.com/tema.css"
        },
        quickActions: {
            title: "Ações Rápidas",
            description: "Atalhos para gerenciar seus temas. Abra sua pasta de temas para adicionar novos, use o QuickCSS para ajustes rápidos de estilo ou recarregue os temas após fazer alterações."
        },
        error: {
            userscript: "Temas não são suportados no Userscript!",
            stylus: "Em vez disso, você pode instalar temas com a {{stylus}}!",
            expired: "Link inválido ou expirado",
            text: "Erro:"
        },
        copy: {
            url: "Copiar URL",
            copied: "URL do tema copiada!",
            settings: "Copiar configurações do tema",
            copiedSettings: "Configurações do tema copiadas para a área de transferência."
        },
        paste: {
            settings: "Colar configurações do tema",
            empty: "Sua área de transferência está vazia.",
            invalid: "Sua área de transferência não contém dados de configuração válidos.",
            pasted: "Configurações do tema coladas da área de transferência."
        },
        settings: {
            for: "Configurações para {{themeName}}",
        },
        installed: {
            title: "Temas Instalados",
            description: "Gerencie seus temas aqui. Temas locais carregam da sua pasta de temas, temas online carregam de URLs. Temas com ícone de engrenagem possuem ajustes extras.",
            count: "{{count}} tema(s) instalado(s) ({{localCount}} locais, {{onlineCount}} online) · {{enabledCount}} ativado(s)",
            search: "Procurar por um tema...",
            loading: "Carregando temas...",
            none: "Nenhum tema instalado ainda. Adicione arquivos de tema à sua pasta de temas ou adicione um tema online acima para começar.",
            noCriteria: "Nenhum tema corresponde aos seus critérios de busca ou filtro."
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
                error: "Falha ao atualizar tema"
            },
            failed: {
                download: "Falha ao baixar tema"
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
        settings: "Configurações do Atualizador",
        updates: "Atualizações",
        updated: "foi atualizado!",
        restart: "Clique aqui para reiniciar",
        repaired: "O Plexcord foi reparado!",
        ok: "OK",
        preferences: {
            title: "Preferências de Atualização",
            description: "Controle como o Plexcord se mantém atualizado. Você pode escolher atualizar automaticamente em segundo plano ou ser notificado quando houver novas versões.",
        },
        github: {
            local: "Sua cópia local possui commits mais recentes que o repositório remoto. Isso geralmente acontece quando você faz alterações locais. Por favor, descarte-as ou faça um reset antes de atualizar."
        },
        error: {
            check: "Falha ao verificar atualizações. Verifique o console para mais informações",
            occurred: "Ocorreu um erro desconhecido",
            retrieve: "Falha ao recuperar - verifique o console",
            title: "Ops!",
            tryAgain: "Ocorreu um erro desconhecido. Tente novamente ou veja o console para mais informações.",
            command: "Comando {{path}} não encontrado. Instale-o e tente novamente.",
            code: "Código {{code}}. Veja o console para mais informações.",
            running: "Ocorreu um erro ao executar {{cmd}}: {{error}}",
            failed: "Isso também falhou :( Tente atualizar ou reinstalar usando o instalador!"
        },
        available: "Há 1 atualização disponível",
        updateAvailable: "Uma atualização do Plexcord está disponível!",
        click: "Clique aqui para ver a atualização",
        available_plural: "Há {{count}} atualizações disponíveis",
        current: "Tudo Atualizado!",
        successful: {
            title: "Atualização Concluída!",
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
            description: "Atualizar o Plexcord automaticamente sem aviso de confirmação"
        },
        notify: {
            label: "Ser notificado quando uma atualização automática for concluída",
            description: "Mostra uma notificação quando o Plexcord é atualizado automaticamente"
        },
        repo: "Repositório",
        repoDescription: "Este é o repositório do GitHub de onde o Plexcord busca atualizações.",
        loading: "Carregando...",
        unknownAuthor: "Autor desconhecido"
    },

    components: {
        error: {
            title: "Oh não!",
            render: "Ocorreu um erro ao renderizar este Componente. Mais informações podem ser encontradas abaixo e no seu console."
        },
        componentFailed: {
            message: "Vish! Falha ao renderizar esta página. No entanto, há uma atualização disponível que pode resolver o problema. Gostaria de atualizar e reiniciar agora?"
        },
        quickCSS: {
            title: "Editor QuickCSS Aberto",
            message: "O editor QuickCSS ainda está aberto em segundo plano.",
            detail: "Deseja fechar o Discord de qualquer maneira? Isso também fechará o editor QuickCSS.",
            cancel: "Cancelar",
            close: "Fechar de qualquer maneira",
            windowTitle: "Editor QuickCSS do Plexcord"
        },
        messagePopover: {
            scrollLeft: "Rolar para a esquerda",
            scrollRight: "Rolar para a direita"
        },
        notices: {
            error: "Erro ao exibir o aviso"
        },
        tray: {
            aboutPlexcord: "Sobre o Plexcord",
            updatePlexcord: "Atualizar Plexcord",
            noUpdateTitle: "Nenhuma atualização disponível",
            noUpdateBody: "Você já está usando a versão mais recente do Plexcord.",
            updateFailedTitle: "Falha na atualização",
            updateFailedBody: "Não foi possível aplicar a atualização do Plexcord.",
            updateSuccessTitle: "Atualização concluída",
            updateSuccessBody: "Reiniciando o Plexcord para aplicar a atualização.",
            updateErrorTitle: "Erro de atualização",
            updateErrorBody: "Ocorreu um erro ao atualizar o Plexcord.\n\n{{error}}",
            openSettingsFolder: "Abrir pasta de configurações",
            openThemesFolder: "Abrir pasta de temas"
        }
    },

    commands: {
        error: {
            execute: "Ocorreu um erro ao executar o comando '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Dispensar Notificação",
        noYet: "Nenhuma notificação ainda",
        settings: "Configurações de Notificação",
        log: {
            title: "Registro de Notificações",
            clear: "Limpar Registro de Notificações",
            sure: "Você tem certeza?",
            permamently: "Isso removerá permanentemente {{count}} notificação{{s}}. Esta ação não pode ser desfeita.",
            button: {
                confirm: "Confirmar",
                cancel: "Cancelar"
            }
        }
    },

    memberlist: {
        error: {
            render: "Falha ao renderizar o Decorador de Lista de Membros: {{key}}"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Falha ao renderizar o Acessório de Mensagem: {{key}}"
            }
        },
        decoration: {
            error: {
                render: "Falha ao renderizar a Decoração de Mensagem: {{key}}"
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
        detectLanguage: "Detectar idioma"
    },

    plugin: {
        tags: {
            accessibility: "Acessibilidade",
            activity: "Atividade",
            appearance: "Aparência",
            chat: "Chat",
            commands: "Comandos",
            console: "Console",
            customisation: "Personalização",
            developers: "Desenvolvedores",
            emotes: "Emotes",
            friends: "Amigos",
            fun: "Diversão",
            media: "Mídia",
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
            description: "Desativa o rastreamento do Discord (analytics/'science'), métricas e relatórios de erros do Sentry",
            option: {
                disableAnalytics: {
                    label: "Desativar Analytics",
                    description: "Desativa o rastreamento do Discord (analytics/'science'), métricas e relatórios de erros do Sentry"
                },
                disableStackDumping: {
                    description: "Imprimir um rastreamento de pilha nativo no console quando o Discord travar. Requer reinicialização completa."
                }
            }
        },
        settings: {
            name: "Settings",
            description: "Adiciona a interface de Configurações e informações de depuração",
            option: {
                language: {
                    label: "Idioma",
                    description: "Selecione seu idioma preferido para o Plexcord."
                },
                settingsLocation: {
                    label: "Localização das Configurações",
                    description: "Determina onde a seção de configurações do Plexcord será localizada."
                },
                includePlexcordInfoWhenCopying: {
                    label: "Incluir informações do Plexcord ao copiar",
                    description: "Também copia as informações do Plexcord (Plexcord, Electron, Chromium) ao clicar nas informações de versão no canto inferior esquerdo da página de Configurações"
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "Ajuda-nos a fornecer suporte para você",
            commands: {
                description: {
                    debug: "Enviar informações de depuração do Plexcord",
                    plugins: "Enviar lista de plugins do Plexcord"
                }
            },
            modals: {
                outdated: {
                    title: "Espere um pouco!",
                    body: "Você está usando uma versão desatualizada do Plexcord! É provável que seu problema já tenha sido corrigido.",
                    footer: "Por favor, atualize primeiro antes de pedir suporte!",
                    dismiss: "Se você sabe o que está fazendo ou não pode atualizar, pode fechar este aviso.",
                    button: {
                        cancel: "Ver Atualizações",
                        confirm: "Atualizar e Reiniciar Agora",
                        secondaryConfirm: "Eu sei o que estou fazendo ou não consigo atualizar"
                    }
                },
                updater: {
                    title: "Espere um pouco!",
                    body: "Você está usando uma versão do Plexcord atualizada externamente, para a qual não fornecemos suporte!",
                    footer: "Por favor, mude para uma {{officially}}, ou entre em contato com o mantenedor do seu pacote para obter suporte.",
                    officially: "versão oficialmente suportada do Plexcord",
                    button: {
                        cancel: "Cancelar",
                        confirm: "Ver Página de Download",
                        now: "Atualizar Agora"
                    },
                    toast: {
                        success: "Sucesso! Reiniciando...",
                        already: "Já está atualizado!",
                        failed: "Falha ao atualizar :("
                    }
                },
                custom: {
                    title: "Espere um pouco!",
                    header: "Você está usando uma build personalizada do Plexcord, para a qual não fornecemos suporte!",
                    body: "Nós apenas fornecemos suporte para {{officialBuild}}. Ou você {{switch}} ou resolve o problema por conta própria.",
                    footer: "Você será banido de receber suporte se ignorar esta regra.",
                    official: "builds oficiais",
                    switch: "mude para uma build oficial",
                    button: {
                        confirm: "Entendido",
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
                failedOpenInvite: "Falha ao abrir o convite, verifique o console :(",
                upload: "Lista de plugins enviada com sucesso!",
                failedUpload: "Falha ao enviar o arquivo da lista de plugins. Tente novamente.",
                unableGenerate: "Falha ao gerar a lista de plugins."
            },
            dm: {
                warning: "Por favor, não envie mensagens privadas para os desenvolvedores de plugins do Plexcord pedindo suporte!{{br}}Em vez disso, você pode entrar no servidor de {{support}} e usar o canal de suporte do Plexcord: {{channel}}"
            },
            alert: {
                title: "Aviso: Alta Quantidade de Plugins",
                paragraph1: "Você tem mais de 100 plugins ativados.",
                paragraph2: "Devido à enorme quantidade de plugins, você pode não receber suporte.",
                paragraph3: "Seu problema provavelmente é causado por conflitos de plugins.",
                paragraph4: "Considere desativar alguns plugins para solucionar o problema.",
                paragraph5: "Sua lista de plugins será enviada como um arquivo de texto.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Clique com o botão direito no painel da sua conta no canto inferior esquerdo para ver seu perfil no servidor atual",
            option: {
                prioritizeServerProfile: {
                    label: "Priorizar Perfil do Servidor",
                    description: "Prioriza o Perfil do Servidor ao clicar com o botão esquerdo no painel da sua conta"
                }
            },
            context: {
                account: "Ver Perfil da Conta",
                server: "Ver Perfil do Servidor",
                prioritize: "Priorizar Perfil do Servidor"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Faz com que o popout de Supressão de Ruído alterne entre Nenhum e Krisp, em vez de Krisp e Padrão"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Anima qualquer coisa que possa ser animada",
            option: {
                icons: {
                    label: "Ícones",
                    description: "Sempre animar ícones de servidores, avatares, decorações e mais"
                },
                statusEmojis: {
                    label: "Emojis de Status",
                    description: "Sempre animar emojis de status"
                },
                serverBanners: {
                    label: "Banners de Servidor",
                    description: "Sempre animar banners de servidor"
                },
                nameplates: {
                    label: "Placas de nome",
                    description: "Sempre animar nameplates"
                },
                roleGradients: {
                    label: "Gradientes de Cargo",
                    description: "Sempre animar gradientes de cargo"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "Sempre expande os popouts de perfil para a modal completa"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Sempre expande as listas de cargos nos popouts de perfil",
            option: {
                hideArrow: {
                    label: "Ocultar Seta",
                    description: "Ocultar seta"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Toca o som 'animalese' de Animal Crossing para cada mensagem enviada (eles falam muito)",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume do som animalese"
                },
                speed: {
                    label: "Velocidade",
                    description: "Velocidade do som animalese"
                },
                pitch: {
                    label: "Tom (Pitch)",
                    description: "Multiplicador de tom"
                },
                messageLengthLimit: {
                    label: "Limite de Comprimento da Mensagem",
                    description: "Comprimento máximo da mensagem para processar"
                },
                processOwnMessages: {
                    label: "Processar Minhas Próprias Mensagens",
                    description: "Ative para 'falar' suas próprias mensagens também"
                },
                soundQuality: {
                    label: "Qualidade do Som",
                    description: "Qualidade do som a ser usada",
                    high: "Alta",
                    med: "Média",
                    low: "Baixa",
                    lowest: "Mínima"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "Remove os popups irritantes de domínio não confiável e arquivo suspeito",
            option: {
                domain: {
                    label: "Domínio",
                    description: "Remover o popup de domínio não confiável ao abrir links"
                },
                file: {
                    label: "Arquivo",
                    description: "Remover o popup de 'Download Potencialmente Perigoso' ao abrir links"
                },
                noDeleteSafety: {
                    label: "Sem Confirmação de Exclusão",
                    description: "Remove a exigência de digitar o nome do servidor ao excluí-lo"
                },
                confirmModal: {
                    label: "Modal de Confirmação",
                    description: "Deve ser mostrada uma modal de 'tem certeza de que deseja excluir'?"
                }
            },
            alert: {
                title: "Excluir servidor?",
                body: "É permanente, caso não tenha ficado óbvio.",
                confirm: "Excluir",
                cancel: "Cancelar"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Anonimiza os nomes dos arquivos enviados",
            option: {
                anonymiseByDefault: {
                    label: "Anonimizar por padrão",
                    description: "Anonimiza nomes de arquivos por padrão. Você pode desativar isso no popup de upload se necessário."
                },
                spoilerMessages: {
                    label: "Mensagens de Spoiler",
                    description: "Anonimiza nomes de arquivos marcados como spoilers."
                },
                method: {
                    label: "Método",
                    description: "Método de anonimização",
                    random: "Caracteres Aleatórios",
                    consistent: "Consistente",
                    timestamp: "Timestamp (Marca de tempo)",
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
                anonymous: "Usando nome de arquivo anônimo",
                spoiler: "Usando nome de arquivo normal"
            },
            spoiler: {
                description: "Alternar spoiler para seus arquivos",
                toggle: "Alternar spoiler para seus arquivos (ativado por padrão)",
                enabled: "Spoiler ativado!",
                disabled: "Spoiler desativado!"
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Plugin cliente para arRPC para habilitar RPC no Discord Web (experimental)",
            use: {
                title: "Como usar o arRPC",
                enable: "{{link}} para colocar o servidor em execução e, em seguida, ative o plugin.",
                link: "Siga as instruções no repositório do GitHub"
            },
            toast: {
                connected: "Conectado ao arRPC",
                failed: "Falha ao conectar ao arRPC, ele está rodando?",
                retry: "Tentar novamente"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "Com @someone você pode mencionar alguém aleatoriamente"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Atualiza automaticamente seu status online (online, ausente, não perturbe) ao iniciar jogos",
            option: {
                statusToSet: {
                    label: "Status para Definir",
                    description: "O status a ser definido ao iniciar um jogo",
                    online: "Online",
                    dnd: "Não Perturbe",
                    idle: "Ausente",
                    invisible: "Invisível"
                },
                excludeInvisible: {
                    label: "Excluir Invisível",
                    description: "Prevenir mudanças automáticas de status enquanto seu status estiver definido como invisível"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Compacta automaticamente tipos de arquivos e pastas especificados antes de enviá-los ao Discord",
            option: {
                extensions: {
                    label: "Extensões",
                    description: "Lista de extensões de arquivo separadas por vírgulas para compactar automaticamente (ex: .psd,.blend,.exe,.dmg)"
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
                    label: "Preferir Nameplate",
                    description: "Preferir nameplate em vez de banner"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Mostra ícones de atividade na lista de membros e permite ver todas as atividades",
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
                    description: "Permitir renderização de GIFs"
                },
                removeGameActivityStatus: {
                    label: "Remover Status de 'Atividade de Jogo'",
                    description: "Remover ícone e status de atividade de jogo"
                },
                userPopout: {
                    label: "Popout de Usuário",
                    description: "Mostrar todas as atividades no popout/barra lateral do perfil"
                },
                hideTooltip: {
                    label: "Ocultar Dica (Tooltip)",
                    description: "Oculta atividades em vários lugares"
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
            description: "Adiciona um visualizador de espectrógrafo e osciloscópio aos players de anexos de áudio",
            option: {
                oscilloscope: {
                    label: "Osciloscópio",
                    description: "Ativar visualizador de osciloscópio"
                },
                spectrograph: {
                    label: "Espectrógrafo",
                    description: "Ativar visualizador de espectrógrafo"
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
                    label: "Cor Sólida do Espectrógrafo",
                    description: "Usar uma cor sólida para o espectrógrafo em vez de um gradiente"
                },
                spectrographColor: {
                    label: "Cor do Espectrógrafo",
                    description: "Cor do espectrógrafo quando a cor sólida está ativada"
                }
            },
            toast: {
                invalidColorFormat: "Formato de cor inválido para {{settingKey}}, certifique-se de que está no formato 'R, G, B' ou '#RRGGBB'",
                invalidColorFormatFor: "Formato de cor inválido para {{key}}, use \"R, G, B\" ou \"#RRGGBB\""
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Crie motivos personalizados para usar na modal de banimento do Discord e/ou mostre uma entrada de texto por padrão em vez das opções.",
            option: {
                reasons: {
                    label: "Motivos",
                    description: "Seus motivos personalizados"
                },
                isTextInputDefault: {
                    label: "Entrada de Texto como Padrão",
                    description: "Mostra uma entrada de texto em vez de um menu de seleção por padrão. (Equivalente a clicar na opção 'Outro')"
                }
            },
            title: "Motivos",
            placeholder: "Motivo",
            add: "Adicionar outro motivo",
            duration: {
                discordDefault: "Padrão do Discord",
                none: "Não excluir nada",
                hour1: "Última hora",
                hours6: "Últimas 6 horas",
                hours12: "Últimas 12 horas",
                hours24: "Últimas 24 horas",
                days3: "Últimos 3 dias",
                days7: "Últimos 7 dias"
            },
            text: {
                autoDeleteDuration: "Duração da exclusão automática de mensagens"
            }
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Permite pesquisar na lista de usuários bloqueados e torna os nomes selecionáveis nas configurações.",
            placeholder: "Pesquisar usuários..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Melhora o sistema de comandos com diversas melhorias.",
            option: {
                autoFillArguments: {
                    label: "Auto-preencher Argumentos",
                    description: "Preenche automaticamente o comando com todos os argumentos em vez de apenas os obrigatórios"
                },
                allowNewlinesInCommands: {
                    label: "Permitir Quebras de Linha em Comandos",
                    description: "Permitir quebras de linha nas entradas de comando (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Atualiza os comandos de aplicativo do Discord localmente",
                    user: "usuário específico para tentar atualizar",
                    refreshing: "Atualizando comandos de aplicativo...",
                    refreshed: "Comandos atualizados com sucesso!",
                    failed: "Falha ao atualizar comandos. Verifique o console para detalhes."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Mostra pastas de servidores em uma barra lateral dedicada e adiciona melhorias relacionadas a pastas",
            option: {
                sidebar: {
                    label: "Barra Lateral",
                    description: "Exibir servidores da pasta na barra lateral dedicada"
                },
                sidebarAnim: {
                    label: "Animação da Barra Lateral",
                    description: "Animar a abertura da barra lateral de pastas"
                },
                closeAllFolders: {
                    label: "Fechar Todas as Pastas",
                    description: "Fechar todas as pastas ao selecionar um servidor que não está em uma pasta"
                },
                closeAllHomeButton: {
                    label: "Botão Home Fecha Tudo",
                    description: "Fechar todas as pastas ao clicar no botão de início (Home)"
                },
                closeOthers: {
                    label: "Fechar Outras",
                    description: "Fechar outras pastas ao abrir uma pasta"
                },
                closeServerFolder: {
                    label: "Fechar Pasta do Servidor",
                    description: "Fechar a pasta ao selecionar um servidor dentro dela"
                },
                forceOpen: {
                    label: "Forçar Abrir",
                    description: "Forçar uma pasta a abrir ao mudar para um servidor dessa pasta"
                },
                enableNestedFolders: {
                    label: "Ativar pastas aninhadas",
                    description: "Permite aninhar pastas dentro de outras pastas arrastando"
                },
                keepIcons: {
                    label: "Manter Ícones",
                    description: "Manter exibição dos ícones das guildas na barra de guildas primária quando estiverem abertos na barra lateral do BetterFolders"
                },
                showFolderIcon: {
                    label: "Mostrar Ícone da Pasta",
                    description: "Mostrar o ícone da pasta acima das guildas da pasta na barra lateral do BetterFolders",
                    never: "Nunca",
                    always: "Sempre",
                    moreThanOne: "Quando mais de uma pasta estiver expandida"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Altera o texto alternativo do GIF de simplesmente 'GIF' para conter as tags do gif / nome do arquivo"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Faz com que o seletor de gifs abra a categoria de favoritos por padrão",
            option: {
                keepOpen: {
                    label: "Manter Aberto",
                    description: "Mantém o seletor de gifs aberto após selecionar um gif"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Veja a data de expiração dos convites, visualize o perfil de quem convidou e pré-visualize servidores antes de entrar clicando no nome",
            render: {
                tip: "Este convite expirará em {{time}}",
                header: "{{name}} convidou você para {{server}}",
                headerSelf: "Você enviou um convite para entrar em {{server}}",
                never: "não expirar"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Oculta notas ou desativa a verificação ortográfica (Configure nas configurações!!)",
            option: {
                hide: {
                    label: "Ocultar notas",
                    description: "Ocultar a caixa de notas nos popouts de usuário"
                },
                noSpellCheck: {
                    label: "Sem Verificação Ortográfica",
                    description: "Desativar verificação ortográfica nas notas"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "A quantidade de sinais de mais (+) antes de :emoji: determina em qual mensagem ele será adicionado"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Adiciona opções para copiar a cor do cargo / editar o cargo / ver o ícone do cargo ao clicar com o botão direito em cargos no perfil do usuário ou na lista de membros",
            option: {
                roleIconFileFormat: {
                    label: "Formato de Arquivo do Ícone do Cargo",
                    description: "Formato de arquivo a ser usado ao visualizar ícones de cargo"
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
            description: "Copia a cor do cargo ao clicar no RoleDot (configuração de acessibilidade). Também permite usar o RoleDot e nomes coloridos simultaneamente.",
            option: {
                bothStyles: {
                    label: "Ambos os Estilos",
                    description: "Mostrar tanto o ponto do cargo quanto os nomes coloridos"
                },
                copyRoleColorInProfilePopout: {
                    label: "Copiar Cor do Cargo no Popout de Perfil",
                    description: "Permite clicar no ponto do cargo no popout de perfil para copiar a cor do cargo"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Melhora o menu de sessões (dispositivos). Permite visualizar timestamps exatos, dar um nome personalizado a cada sessão e receber notificações sobre novas sessões.",
            new: "NOVO",
            newSessions: "Novas Sessões:",
            rename: "Renomear",
            newDevice: "Novo Nome do Dispositivo",
            resetName: "Redefinir Nome",
            save: "Salvar",
            cancel: "Cancelar",
            option: {
                backgroundCheck: {
                    label: "Verificação em Segundo Plano",
                    description: "Verificar novas sessões em segundo plano e exibir notificações quando detectadas"
                },
                checkInterval: {
                    label: "Intervalo de Verificação",
                    description: "Frequência para verificar novas sessões em segundo plano (se ativado), em minutos"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Melhora sua experiência ao abrir o menu de configurações",
            option: {
                disableFade: {
                    label: "Desativar Fade",
                    description: "Desativa a animação de transição (crossfade)"
                },
                organizeMenu: {
                    label: "Organizar Menu",
                    description: "Organiza o menu de contexto da engrenagem de configurações em categorias"
                },
                eagerLoad: {
                    label: "Carregamento Rápido (Eager Load)",
                    description: "Remove o atraso de carregamento ao abrir o menu pela primeira vez"
                }
            },
            alert: {
                title: "Reinicialização necessária",
                restart: "Você alterou configurações que exigem a reinicialização.",
                confirm: "Reiniciar agora",
                cancel: "Depois!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Upload com um único clique, abrir menu com o botão direito"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Este plugin permite ampliar as pré-visualizações de transmissão",
            context: {
                viewPreview: "Ver Pré-visualização da Transmissão"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Bloqueia mensagens que contêm palavras-chave específicas definidas pelo usuário, como se o usuário que as enviou estivesse bloqueado.",
            regexHelper: {
                title: "Assistente de Regex",
                placeholder: "Texto para testar...",
                noPatterns: "Nenhum padrão configurado"
            },
            option: {
                blockedWords: {
                    label: "Palavras Bloqueadas",
                    description: "Lista de palavras separadas por vírgulas para bloquear"
                },
                useRegex: {
                    label: "Usar Regex",
                    description: "Usar cada valor como uma expressão regular ao verificar o conteúdo da mensagem (avançado)"
                },
                regexHelper: {
                    label: "Assistente de Regex",
                    description: "Teste suas expressões regulares com uma entrada de exemplo"
                },
                caseSensitive: {
                    label: "Diferenciar Maiúsculas/Minúsculas",
                    description: "Se deve usar uma busca sensível a maiúsculas e minúsculas ou não"
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
            description: "Desfoca anexos em canais NSFW até passar o mouse por cima",
            option: {
                blurAmount: {
                    label: "Intensidade do Desfoque",
                    description: "Intensidade do desfoque (em pixels)"
                },
                blurAllChannels: {
                    label: "Desfocar em Todos os Canais",
                    description: "Desfocar anexos em todos os canais (não apenas NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Ignora a confirmação de fixação ao usar as funções de fixar"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Ainda recebe notificações de fontes específicas quando estiver no modo não perturbe. Clique com o botão direito em usuários/canais/servidores para configurá-los para ignorar o modo não perturbe.",
            context: {
                remove: "Remover Atalho de Status",
                add: "Adicionar Atalho de Status"
            },
            option: {
                guilds: {
                    label: "Servidores",
                    description: "Servidores permitidos (notificado quando mencionado em qualquer lugar no servidor)",
                    placeholder: "Separar por vírgulas"
                },
                channels: {
                    label: "Canais",
                    description: "Canais permitidos (notificado quando mencionado naquele canal)",
                    placeholder: "Separar por vírgulas"
                },
                users: {
                    label: "Usuários",
                    description: "Usuários permitidos (notificado para todas as mensagens enviadas em DMs)",
                    placeholder: "Separar por vírgulas"
                },
                allowOutsideOfDms: {
                    label: "Permitir Fora de DMs",
                    description: "Permite que usuários selecionados ignorem o status fora de DMs também (funciona como um atalho de canal/servidor, mas para todas as mensagens enviadas pelos usuários selecionados)"
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
                    label: "Status para Usar",
                    description: "Status para usar na lista permitida",
                    online: "Online",
                    idle: "Ausente",
                    dnd: "Não Perturbe",
                    invisible: "Invisível"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Acompanha e exibe aniversários de usuários com ícones de bolo",
            context: {
                label: "Aniversário",
                setBirthday: "Definir Aniversário",
                clearBirthday: "Limpar Aniversário",
                current: "Atual:"
            },
            option: {
                chat: {
                    label: "Chat",
                    description: "Mostrar ícones de bolo ao lado dos nomes de usuário no chat"
                },
                memberList: {
                    label: "Lista de Membros",
                    description: "Mostrar ícones de bolo na lista de membros"
                },
                profileBadge: {
                    label: "Emblema de Perfil",
                    description: "Mostrar emblema de bolo no perfil do usuário"
                },
                notificationSound: {
                    label: "Som de Notificação",
                    description: "Tocar som quando uma notificação de aniversário for enviada"
                },
                userList: {
                    label: "Aniversários Salvos",
                    description: "Gerenciar aniversários salvos"
                }
            },
            locations: {
                chat: {
                    label: "Chat",
                    description: "ao lado dos nomes de usuário no chat"
                },
                memberList: {
                    label: "Lista de Membros",
                    description: "na lista de membros"
                }
            },
            toast: {
                success: "Aniversário definido com sucesso!",
                invalid: "Formato de aniversário inválido! Apenas DD/MM é aceito.",
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
                birthday: "É meu aniversário! 🎂",
                saved: "Aniversários Salvos",
                savedDesc: "Nenhum aniversário salvo ainda. Clique com o botão direito nos usuários para adicionar seus aniversários!",
                today: "Hoje",
                remove: "Remover",
                loading: "Carregando...",
                save: "Salvar",
                edit: "Editar"
            },
            text: {
                unknownUser: "Usuário desconhecido"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Mostra cronômetros em todas as chamadas de voz",
            option: {
                format: {
                    label: "Formato",
                    description: "Formato compacto ou legível por humanos",
                    human: "30d 23h 00m 42s"
                },
                allCallTimers: {
                    label: "Todos os Cronômetros",
                    description: "Mostrar cronômetros de chamada para todos os usuários nos servidores"
                },
                showWithoutHover: {
                    label: "Mostrar Sem Passar o Mouse",
                    description: "Sempre mostrar o cronômetro sem precisar passar o mouse"
                },
                showRoleColor: {
                    label: "Mostrar Cor do Cargo",
                    description: "Exibir na cor do cargo do usuário (se o plugin ShowRoleColor estiver ativado)"
                },
                trackSelf: {
                    label: "Monitorar a Si Mesmo",
                    description: "Também mostrar o seu próprio cronômetro"
                },
                showSeconds: {
                    label: "Mostrar Segundos",
                    description: "Exibir segundos no cronômetro"
                },
                watchLargeGuilds: {
                    label: "Monitorar Grandes Servidores",
                    description: "Monitorar usuários em grandes servidores. Isso pode causar lentidão se você estiver em muitos servidores grandes com usuários ativos em voz. Testado com até 2000 usuários ativos sem problemas."
                },
                fixUI: {
                    label: "Correção de UI",
                    description: "Em alguns casos, o cronômetro pode quebrar a interface do usuário. Ative esta opção para corrigir."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Adiciona emblemas aos canais com base em seus tipos",
            badge: {
                private: "Este canal está trancado.",
                nsfw: "Este canal está marcado como NSFW.",
                rules: "Este canal é o canal de regras do servidor."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Um Emblema por Canal",
                    description: "Mostrar apenas um emblema por canal"
                },
                showTextBadge: {
                    label: "Mostrar Emblema de Texto",
                    description: "Mostrar emblema de Texto"
                },
                showVoiceBadge: {
                    label: "Mostrar Emblema de Voz",
                    description: "Mostrar emblema de Voz"
                },
                showCategoryBadge: {
                    label: "Mostrar Emblema de Categoria",
                    description: "Mostrar emblema de Categoria"
                },
                showDirectoryBadge: {
                    label: "Mostrar Emblema de Diretório",
                    description: "Mostrar emblema de Diretório"
                },
                showAnnouncementThreadBadge: {
                    label: "Mostrar Emblema de Tópico de Anúncio",
                    description: "Mostrar emblema de Tópico de Anúncio"
                },
                showPublicThreadBadge: {
                    label: "Mostrar Emblema de Tópico Público",
                    description: "Mostrar emblema de Tópico Público"
                },
                showPrivateThreadBadge: {
                    label: "Mostrar Emblema de Tópico Privado",
                    description: "Mostrar emblema de Tópico Privado"
                },
                showStageBadge: {
                    label: "Mostrar Emblema de Palco (Stage)",
                    description: "Mostrar emblema de Palco"
                },
                showAnnouncementBadge: {
                    label: "Mostrar Emblema de Anúncio",
                    description: "Mostrar emblema de Anúncio"
                },
                showForumBadge: {
                    label: "Mostrar Emblema de Fórum",
                    description: "Mostrar emblema de Fórum"
                },
                showMediaBadge: {
                    label: "Mostrar Emblema de Mídia",
                    description: "Mostrar emblema de Mídia"
                },
                showNSFWBadge: {
                    label: "Mostrar Emblema NSFW",
                    description: "Mostrar emblema NSFW"
                },
                showLockedBadge: {
                    label: "Mostrar Emblema de Trancado",
                    description: "Mostrar emblema de Trancado"
                },
                showRulesBadge: {
                    label: "Mostrar Emblema de Regras",
                    description: "Mostrar emblema de Regras"
                },
                showUnknownBadge: {
                    label: "Mostrar Emblema Desconhecido",
                    description: "Mostrar emblema Desconhecido"
                },
                textBadgeLabel: {
                    label: "Rótulo do Emblema de Texto",
                    description: "Rótulo do emblema de texto",
                    default: "Texto"
                },
                voiceBadgeLabel: {
                    label: "Rótulo do Emblema de Voz",
                    description: "Rótulo do emblema de voz",
                    default: "Voz"
                },
                categoryBadgeLabel: {
                    label: "Rótulo do Emblema de Categoria",
                    description: "Rótulo do emblema de categoria",
                    default: "Categoria"
                },
                announcementBadgeLabel: {
                    label: "Rótulo do Emblema de Tópico de Anúncio",
                    description: "Rótulo do emblema de tópico de anúncio",
                    default: "Novidades"
                },
                announcementThreadBadgeLabel: {
                    label: "Rótulo do Emblema de Tópico de Novidades",
                    description: "Rótulo do emblema de tópico de novidades",
                    default: "Tópico de Novidades"
                },
                publicThreadBadgeLabel: {
                    label: "Rótulo do Emblema de Tópico Público",
                    description: "Rótulo do emblema de tópico público",
                    default: "Tópico"
                },
                privateThreadBadgeLabel: {
                    label: "Rótulo do Emblema de Tópico Privado",
                    description: "Rótulo do emblema de tópico privado",
                    default: "Tópico Privado"
                },
                stageBadgeLabel: {
                    label: "Rótulo do Emblema de Palco",
                    description: "Rótulo do emblema de palco",
                    default: "Palco"
                },
                directoryBadgeLabel: {
                    label: "Rótulo do Emblema de Diretório",
                    description: "Rótulo do emblema de diretório",
                    default: "Diretório"
                },
                forumBadgeLabel: {
                    label: "Rótulo do Emblema de Fórum",
                    description: "Rótulo do emblema de fórum",
                    default: "Fórum"
                },
                mediaBadgeLabel: {
                    label: "Rótulo do Emblema de Mídia",
                    description: "Rótulo do emblema de mídia",
                    default: "Mídia"
                },
                nsfwBadgeLabel: {
                    label: "Rótulo do Emblema NSFW",
                    description: "Rótulo do emblema NSFW",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Rótulo do Emblema Trancado",
                    description: "Rótulo do emblema trancado",
                    default: "Trancado"
                },
                rulesBadgeLabel: {
                    label: "Rótulo do Emblema de Regras",
                    description: "Rótulo do emblema de regras",
                    default: "Regras"
                },
                unknownBadgeLabel: {
                    label: "Rótulo do Emblema Desconhecido",
                    description: "Rótulo do emblema desconhecido",
                    default: "Desconhecido"
                },
                textBadgeColor: {
                    label: "Cor do Emblema de Texto",
                    description: "Cor do emblema de texto"
                },
                voiceBadgeColor: {
                    label: "Cor do Emblema de Voz",
                    description: "Cor do emblema de voz"
                },
                categoryBadgeColor: {
                    label: "Cor do Emblema de Categoria",
                    description: "Cor do emblema de categoria"
                },
                announcementBadgeColor: {
                    label: "Cor do Emblema de Tópico de Anúncio",
                    description: "Cor do emblema de tópico de anúncio"
                },
                announcementThreadBadgeColor: {
                    label: "Cor do Emblema de Tópico de Anúncio",
                    description: "Cor do emblema de tópico de anúncio"
                },
                publicThreadBadgeColor: {
                    label: "Cor do Emblema de Tópico Público",
                    description: "Cor do emblema de tópico público"
                },
                privateThreadBadgeColor: {
                    label: "Cor do Emblema de Tópico Privado",
                    description: "Cor do emblema de tópico privado"
                },
                stageBadgeColor: {
                    label: "Cor do Emblema de Palco",
                    description: "Cor do emblema de palco"
                },
                directoryBadgeColor: {
                    label: "Cor do Emblema de Diretório",
                    description: "Cor do emblema de diretório"
                },
                forumBadgeColor: {
                    label: "Cor do Emblema de Fórum",
                    description: "Cor do emblema de fórum"
                },
                mediaBadgeColor: {
                    label: "Cor do Emblema de Mídia",
                    description: "Cor do emblema de mídia"
                },
                nsfwBadgeColor: {
                    label: "Cor do Emblema NSFW",
                    description: "Cor do emblema NSFW"
                },
                lockedBadgeColor: {
                    label: "Cor do Emblema Trancado",
                    description: "Cor do emblema trancado"
                },
                rulesBadgeColor: {
                    label: "Cor do Emblema de Regras",
                    description: "Cor do emblema de regras"
                },
                unknownBadgeColor: {
                    label: "Cor do Emblema Desconhecido",
                    description: "Cor do emblema desconhecido"
                }
            },
            badges: {
                text: "Texto",
                voice: "Voz",
                category: "Categoria",
                announcement: "Novidades",
                announcementThread: "Tópico de Novidades",
                publicThread: "Tópico",
                privateThread: "Tópico Privado",
                stage: "Palco",
                directory: "Diretório",
                forum: "Fórum",
                media: "Mídia",
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
            description: "Agrupe seus canais visitados com frequência em abas, como em um navegador",
            open: "Abrir em Nova Aba",
            animation: {
                title: "Controles de Animação",
                description: "Ative ou desative animações específicas para as abas de canais. Cada opção pode ser alternada independentemente.",
                placeholder: "Selecione quais animações ativar...",
                tabHover: "Efeitos ao Passar o Mouse (elevação + escala)",
                tabSelection: "Animação de Elevação da Aba Selecionada",
                tabDragDrop: "Arrastar e Soltar Abas (fantasma + reordenar)",
                tabEnterExit: "Deslizamento de Entrada/Saída de Aba (criação + fechamento)",
                tabIconPop: "Salto do Ícone na Seleção (aumento de escala do ícone)",
                closeRotation: "Rotação do Botão de Fechar",
                plusPulse: "Pulsação do Botão de Adição (+)",
                mentionGlow: "Brilho do Emblema de Menção",
                compactExpand: "Expansão do Modo Compacto",
                selectedBorder: "Borda de destaque da aba selecionada",
                selectedBackground: "Cor de Fundo da Aba Selecionada",
                tabShadows: "Efeitos de Sombra nas Abas",
                tabRepositioning: "Reposicionamento de Abas (mudanças de posição suaves)",
                resizeHandle: "Desvanecimento da Alça de Redimensionamento",
                questActivate: "Gradiente de missões ativas"
            },
            bookmark: {
                label: "Marcador",
                unknown: "Usuário Desconhecido",
                folder: "Pasta",
                add: "Adicionar aos Marcadores",
                edit: "Editar Marcador",
                delete: "Excluir Marcador",
                remove: "Remover dos Marcadores",
                removeFolder: "Remover Marcador da Pasta",
                loading: "Carregando marcadores...",
                noBookmarks: "Você não tem marcadores. Você pode adicionar uma aba aberta ou ocultar isso clicando com o botão direito",
                quests: "Missões (Quests)",
                messageRequests: "Solicitações de Mensagem",
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
                save: "Salvar",
                delete: "Excluir",
                cancel: "Cancelar",
                reset: "Redefinir",
                close: "Fechar"
            },
            context: {
                label: "Menu de Contexto do ChannelTabs",
                bookmark: "Menu de Contexto de Marcador do ChannelTabs",
                tab: "Menu de Contexto de Aba do ChannelTabs",
                folderMenu: "Menu de Pasta de Marcadores",
                compact: "Compacto",
                bookmarkBar: "Barra de Marcadores",
                openAll: "Abrir todos os favoritos",
                openNew: "Abrir em Nova Aba",
                close: {
                    tab: "Fechar Aba",
                    otherTabs: "Fechar Outras Abas",
                    tabsToRight: "Fechar Abas à Direita",
                    tabsToLeft: "Fechar Abas à Esquerda",
                    reopen: "Reabrir Aba Fechada",
                    allTabs: "Fechar Todas as Abas"
                }
            },
            error: {
                noLogin: "Não há nenhuma conta conectada?"
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
                    title: "Você tem certeza?",
                    description: "Excluir uma pasta de marcadores também excluirá todos os marcadores dentro dela."
                },
                folderIcon: {
                    title: "Escolher Ícone da Pasta",
                    preview: "Visualização",
                    iconColor: "Cor do Ícone",
                    search: "Pesquisar",
                    searchPlaceholder: "Pesquisar {{count}} ícones...",
                    folderName: "Nome da Pasta",
                    folderColor: "Cor da Pasta",
                    folderIcon: "Ícone da Pasta",
                    chooseIcon: "Escolher Ícone",
                    useDefaultIcon: "Usar Ícone Padrão"
                }
            },
            option: {
                onStartup: {
                    label: "Ao Iniciar",
                    description: "O que fazer com as abas ao iniciar",
                    nothing: "Fazer nada (abrir na aba de amigos)",
                    remember: "Lembrar abas da última sessão",
                    open: "Abrir em um conjunto específico de abas"
                },
                tabSet: {
                    label: "Conjunto de Abas"
                },
                noPomeloNames: {
                    label: "Sem Nomes Pomelo",
                    description: "Usar nomes de exibição em vez de nomes de usuário para DMs"
                },
                showStatusIndicators: {
                    label: "Mostrar Indicadores de Status",
                    description: "Mostrar indicadores de status para DMs"
                },
                showBookmarkBar: {
                    label: "Mostrar Barra de Marcadores"
                },
                persistUnreadCountFallback: {
                    label: "Persistir fallback de contagem não lida",
                    description: "Persistir fallbacks de badges não lidos entre recarregamentos para abas e favoritos"
                },
                bookmarkNotificationDot: {
                    label: "Ponto de Notificação de Marcador",
                    description: "Mostrar ponto de notificação para marcadores"
                },
                widerTabsAndBookmarks: {
                    label: "Abas e Marcadores Mais Largos",
                    description: "Estender o comprimento das abas e marcadores para monitores maiores"
                },
                tabWidthScale: {
                    label: "Escala de Largura da Aba",
                    description: "Escala da largura da aba (porcentagem) - ajustável arrastando as bordas da aba"
                },
                tabHeightScale: {
                    label: "Escala de altura das abas",
                    description: "Escala de altura das abas (porcentagem)."
                },
                renderAllTabs: {
                    label: "Renderizar Todas as Abas",
                    description: "Manter todas as abas em cache na memória para troca rápida (armazena posição de rolagem e estado)"
                },
                switchToExistingTab: {
                    label: "Mudar para Aba Existente",
                    description: "Mudar para a aba se ela já existir para o canal para o qual você está navegando"
                },
                createNewTabIfNotExists: {
                    label: "Criar Nova Aba se Não Existir",
                    description: "Criar uma nova aba se não existir uma para o canal para o qual você está navegando"
                },
                enableRapidNavigation: {
                    label: "Ativar Navegação Rápida",
                    description: "Ativar comportamento de navegação rápida - navegar rapidamente entre canais substituirá a aba atual em vez de criar novas"
                },
                rapidNavigationThreshold: {
                    label: "Limiar de Navegação Rápida",
                    description: "Janela de tempo (em milissegundos) para navegação rápida. Dentro deste tempo, novos canais substituem a aba atual."
                },
                tabBarPosition: {
                    label: "Posição da Barra de Abas",
                    description: "Posição da barra de abas",
                    top: "Topo",
                    bottom: "Fundo"
                },
                enableNumberKeySwitching: {
                    label: "Ativar Troca por Teclas Numéricas",
                    description: "Ativar teclas numéricas (1-9) para alternar abas"
                },
                numberKeySwitchCount: {
                    label: "Quantidade de Troca por Teclas Numéricas",
                    description: "Número de abas acessíveis via teclas numéricas (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "Ativar Atalho para Fechar Aba",
                    description: "Ativar atalho de teclado para fechar aba"
                },
                enableNewTabShortcut: {
                    label: "Ativar Atalho para Nova Aba",
                    description: "Ativar atalho de teclado para nova aba"
                },
                enableTabCycleShortcut: {
                    label: "Ativar Atalho para Ciclo de Abas",
                    description: "Ativar atalho de teclado para alternar entre abas"
                },
                keybindsSection: {
                    label: "Atalhos de Teclado",
                    description: "Clique em um botão e pressione a combinação de teclas desejada. Modificadores como CTRL, SHIFT e ALT são suportados.",
                    title: "Atalhos de teclado",
                    reset: "Redefinir Tudo para o Padrão",
                    shortcutDisabled: "Este atalho está atualmente desativado",
                    pressKey: "Pressione qualquer tecla...",
                    conflictError: "Este atalho já está sendo usado por: {{key}}",
                    closeTab: {
                        label: "Fechar Aba",
                        description: "Atalho para fechar a aba ativa no momento"
                    },
                    newTab: {
                        label: "Nova Aba",
                        description: "Abrir uma nova aba com o canal atual"
                    },
                    cycleTabsForward: {
                        label: "Ciclo de Abas para Frente",
                        description: "Mudar para a próxima aba (volta para a primeira)"
                    },
                    cycleTabsBackward: {
                        label: "Ciclo de Abas para Trás",
                        description: "Mudar para a aba anterior (volta para a última)"
                    }
                },
                closeTabKeybind: {
                    label: "Atalho para Fechar Aba",
                    description: "Atalho de teclado para fechar a aba atual"
                },
                newTabKeybind: {
                    label: "Atalho para Nova Aba",
                    description: "Atalho de teclado para abrir uma nova aba"
                },
                cycleTabForwardKeybind: {
                    label: "Atalho de Ciclo para Frente",
                    description: "Atalho de teclado para avançar para a próxima aba"
                },
                cycleTabBackwardKeybind: {
                    label: "Atalho de Ciclo para Trás",
                    description: "Atalho de teclado para voltar para a aba anterior"
                },
                showTabNumbers: {
                    label: "Mostrar Números nas Abas",
                    description: "Mostrar emblemas numerados nas abas para indicar atalhos de teclado"
                },
                tabNumberPosition: {
                    label: "Posição do Número da Aba",
                    description: "Onde exibir o emblema numerado nas abas",
                    left: "Lado esquerdo (antes do ícone)",
                    right: "Lado direito (depois do conteúdo)"
                },
                animations: {
                    label: "Animações"
                },
                animationHover: {
                    label: "Animação ao Passar o Mouse",
                    description: "Ativar efeitos de elevação e escala ao passar o mouse"
                },
                animationSelection: {
                    label: "Animação ao Selecionar",
                    description: "Ativar animações de seleção (brilho na borda, elevação)"
                },
                animationDragDrop: {
                    label: "Animação de Arrastar e Soltar",
                    description: "Ativar efeitos fantasmagóricos ao arrastar e soltar"
                },
                animationEnterExit: {
                    label: "Animação de Entrada/Saída",
                    description: "Ativar animações de deslize ao criar/fechar abas"
                },
                animationIconPop: {
                    label: "Animação de Salto de Ícone",
                    description: "Ativar animação de escala do ícone na seleção"
                },
                animationCloseRotation: {
                    label: "Animação de Rotação ao Fechar",
                    description: "Ativar animação de rotação para os botões de fechar"
                },
                animationPlusPulse: {
                    label: "Animação de Pulso no Botão Mais (+)",
                    description: "Ativar animação de pulso para o botão de adição"
                },
                animationMentionGlow: {
                    label: "Animação de Brilho de Menção",
                    description: "Ativar brilho vermelho pulsante para menções"
                },
                animationCompactExpand: {
                    label: "Animação de Compactar/Expandir",
                    description: "Ativar expansão suave para abas compactas"
                },
                animationSelectedBorder: {
                    label: "Animação na Borda Selecionada",
                    description: "Ativar estilização de borda e brilho para abas selecionadas"
                },
                animationSelectedBackground: {
                    label: "Animação no Fundo Selecionado",
                    description: "Ativar mudança de cor de fundo para abas selecionadas"
                },
                animationTabShadows: {
                    label: "Animação de Sombras nas Abas",
                    description: "Ativar efeitos de sombra nas abas"
                },
                animationTabPositioning: {
                    label: "Animação de Posicionamento de Aba",
                    description: "Ativar transições suaves quando as abas mudam de posição"
                },
                animationResizeHandle: {
                    label: "Animação da Alça de Redimensionamento",
                    description: "Ativar animação de desvanecimento para a alça de redimensionamento"
                },
                animationQuestsActive: {
                    label: "Animação de Missões (Quests) Ativas",
                    description: "Ativar animações de gradiente na aba de Missões quando houver missões ativas"
                },
                compactAutoExpandSelected: {
                    label: "Auto-expandir Aba Compacta Selecionada",
                    description: "Expandir automaticamente abas compactas quando selecionadas para mostrar o nome completo do canal"
                },
                compactAutoExpandOnHover: {
                    label: "Auto-expandir Aba Compacta ao Passar o Mouse",
                    description: "Expandir automaticamente abas compactas ao passar o mouse para mostrar o nome completo do canal"
                },
                openInNewTabAutoSwitch: {
                    label: "Troca Automática ao Abrir em Nova Aba",
                    description: "Alternar automaticamente para novas abas abertas pelo menu de contexto 'Abrir em Nova Aba'"
                },
                bookmarksIndependentFromTabs: {
                    label: "Marcadores Independentes das Abas",
                    description: "Marcadores navegam independentemente sem afetar a barra de abas ativa"
                },
                showResizeHandle: {
                    label: "Mostrar Alça de Redimensionamento",
                    description: "Mostrar alça de redimensionamento ao passar o mouse sobre as abas para ajustar a largura"
                },
                openNewTabsInCompactMode: {
                    label: "Abrir Novas Abas no Modo Compacto",
                    description: "Abrir todas as novas abas criadas no modo compacto por padrão"
                },
                newTabButtonBehavior: {
                    label: "Comportamento do Botão de Nova Aba",
                    description: "O botão de nova aba (+) segue as abas em vez de ficar fixo à direita"
                },
                oneTabPerServer: {
                    label: "Uma Aba por Servidor",
                    description: "Limitar a uma aba por servidor, para que abrir um novo canal nesse servidor use a aba existente."
                },
                maxOpenTabs: {
                    label: "Máximo de Abas Abertas",
                    description: "Número máximo de abas abertas (0 = ilimitado)"
                }
            },
            tabs: {
                startup: "Abas de Inicialização",
                currently: "Definir para as abas abertas no momento"
            },
            toast: {
                notRestoring: "Não restaurando abas pois KeepCurrentChannel está ativado",
                failed: {
                    restore: "Falha ao restaurar abas",
                    saved: "Falha ao carregar abas salvas"
                }
            },
            text: {
                folder: "Pasta"
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Adiciona um contador de caracteres à entrada do chat",
            option: {
                colorEffects: {
                    label: "Efeitos de Cor",
                    description: "Ligar ou desligar efeitos de cor ao chegar perto do limite de caracteres"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Oculta todos os canais em categorias colapsadas, mesmo que tenham mensagens não lidas."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Remove emojis e decorações dos nomes dos canais. Volta ao original enquanto você edita o canal.",
            option: {
                ignoredChannels: {
                    description: "Lista separada por vírgulas de IDs de canais que não serão alterados.",
                    label: "Canais ignorados"
                }
            },
            text: {
                keepOriginalName: "Manter nome original"
            }
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Remove automaticamente elementos de rastreamento das URLs que você envia"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Clique nos cargos nos perfis de usuários e na lista de membros para ver quais membros os possuem.",
            modal: {
                loading: "Carregando membros...",
                noMembers: "Nenhum membro encontrado.",
                unknown: "Cargo Desconhecido",
                andMore: "e mais {{count}}"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Permite ocultar localmente quase todo o conteúdo de qualquer usuário",
            replying: "Respondendo a uma mensagem bloqueada",
            option: {
                hideVc: {
                    label: "Ocultar Canais de Voz",
                    description: "Ocultar canais de voz que contêm usuários bloqueados."
                },
                usersToBlock: {
                    label: "Usuários para Bloquear",
                    description: "IDs de usuários separados por vírgula e espaço"
                },
                hideBlockedUsers: {
                    label: "Ocultar Usuários Bloqueados",
                    description: "Se usuários bloqueados devem ser ocultados em todos os lugares"
                },
                hideBlockedMessages: {
                    label: "Ocultar Mensagens Bloqueadas",
                    description: "Se mensagens de usuários bloqueados devem ser totalmente ocultadas"
                },
                hideEmptyRoles: {
                    label: "Ocultar Cargos Vazios",
                    description: "Se os cabeçalhos de cargos devem ser ocultados se todos os membros estiverem bloqueados"
                },
                blockedReplyDisplay: {
                    label: "Exibição de Resposta Bloqueada",
                    description: "O que deve aparecer quando alguém responde a alguém que você ocultou",
                    displayText: "Exibir texto dizendo que uma mensagem oculta foi respondida",
                    hideReply: "Literalmente nada"
                },
                guildBlackList: {
                    label: "Lista Negra de Servidores",
                    description: "IDs de servidores para desativar esta funcionalidade"
                },
                guildWhiteList: {
                    label: "Lista Branca de Servidores",
                    description: "IDs de servidores para ativar esta funcionalidade"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Recriação do antigo experimento de tema do cliente. Adicione uma cor ao tema do seu Discord",
            title: "Cor do Tema",
            add: "Adicionar uma cor ao tema do seu cliente Discord",
            option: {
                color: {
                    label: "Cor"
                },
                resetColor: {
                    label: "Redefinir Cor"
                }
            },
            error: {
                modal: {
                    title: "Seu tema não ficará bom!",
                    contrast: "A cor selecionada não terá bom contraste com o texto",
                    nitro: "Temas Nitro não são suportados",
                    switch: "Mudar para o modo {{oppositeTheme}}",
                    disable: "Desativar Tema Nitro",
                    reset: "Redefinir Cor do Tema"
                }
            },
            text: {
                dark: "Escuro",
                light: "Claro"
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "Adicione mais opções de FPS e duração de clipes, além de marcação de RPC!",
            minutes: "Minutos",
            option: {
                richPresenceTagging: {
                    label: "Marcação de Rich Presence",
                    description: "Quando os clipes devem ser marcados com a Rich Presence atual?",
                    always: "Sempre",
                    only: "Apenas quando o início ou fim do nome da atividade coincidir",
                    never: "Nunca"
                },
                clipsLink: {
                    label: "Link de Clipes",
                    link: "Altere as opções de FPS e duração nas configurações de Clipes!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Remove os ícones amigáveis para daltônicos dos status, igual ao Discord de 2015-2017"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Paleta de comandos estilo Raycast para executar ações em qualquer lugar do Discord",
            action: {
                command: {
                    label: "Executar Comando",
                    description: "Cria um apelido para outro comando da paleta pelo ID. Use o seletor se não tiver certeza do identificador."
                },
                settings: {
                    label: "Abrir Página de Configurações",
                    description: "Pular diretamente para uma página de configurações do Discord. Escolha uma página no seletor."
                },
                url: {
                    label: "Abrir URL",
                    description: "Abrir um link. Use links https:// para melhor compatibilidade."
                },
                macro: {
                    label: "Executar Macro",
                    description: "Executar uma sequência de comandos em ordem. Adicione etapas via seletor."
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
                        label: "Configurações de Plugins"
                    },
                    toolbox: {
                        label: "Ações de Plugins"
                    },
                    chatbar: {
                        label: "Botões da Barra de Chat"
                    },
                    changes: {
                        label: "Mudanças de Plugins"
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
                    label: "Configurações do Discord",
                    description: "Pular para páginas de configuração do Discord"
                },
                custom: {
                    label: "Comandos Personalizados",
                    description: "Entradas da paleta de comandos definidas pelo usuário"
                },
                sessions: {
                    label: "Ferramentas de Sessão",
                    description: "Utilitários para gerenciar sua sessão do Discord"
                },
                guilds: {
                    label: "Servidores",
                    description: "Navegar rapidamente para seus servidores"
                },
                friends: {
                    label: "Amigos",
                    description: "Navegar rapidamente para seus amigos"
                },
                action: {
                    label: "Ação"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Abrir Configurações do Plexcord",
                        plugin: "Abrir Configurações do Plugin"
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
                pluginSettings: "Configurações de {{pluginName}}",
                untitled: "Comando Sem Título",
                new: "Novo Comando",
                error: {
                    enter: "Insira um ID de comando ou escolha um abaixo.",
                    noCommand: "Nenhum comando corresponde a este ID."
                },
                discord: {
                    account: "Abrir Minha Conta",
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
                        label: "Ver Notas de Atualização",
                        description: "Abre o log de alterações do Plexcord"
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
                        label: "Reabrir Última DM Fechada"
                    },
                    dm: {
                        open: {
                            label: "Abrir DM com {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Abrir Configurações de {{guildLabel}}"
                    },
                    navigate: {
                        label: "Navegar para {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "Definir Não Perturbe por 30 minutos",
                    oneHourDnd: "Definir Não Perturbe por 1 hora",
                    cancelStatusReset: "Cancelar Cronômetro de Status"
                },
                status: {
                    set: {
                        online: "Definir Status: Online",
                        idle: "Definir Status: Ausente",
                        dnd: "Definir Status: Não Perturbe",
                        invisible: "Definir Status: Invisível"
                    }
                },
                toggle: {
                    streamer: "Alternar Modo Streamer",
                    mute: "Alternar Silenciar Microfone",
                    deafen: "Alternar Silenciar Áudio (Ensuder)",
                },
                notification: {
                    clear: {
                        label: "Limpar Notificações de Desktop"
                    }
                },
                palette: {
                    settings: {
                        label: "Abrir Configurações da Paleta de Comandos",
                        description: "Configurar o plugin Command Palette"
                    }
                },
                recent: {
                    label: "Mostrar Comandos Recentes",
                    description: "Exibe os últimos comandos executados",
                    rerun: "Executar Novamente o Último Comando"
                },
                plugin: {
                    reload: {
                        label: "Recarregar Todos os Plugins",
                        description: "Tenta recarregar a quente (hot reload) todos os plugins ativados"
                    },
                    enable: {
                        label: "Ativar Todos os Plugins"
                    },
                    disable: {
                        label: "Desativar Todos os Plugins Não Essenciais"
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
                        label: "Abrir Configurações de Tema do Cliente"
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
                        placeholder: "Digite um comando",
                        filtering: "Filtrando por {{tags}}",
                        noCommand: "Nenhum comando encontrado",
                        pin: "Fixar comando",
                        unpin: "Desafixar comando"
                    },
                    target: {
                        label: "ID do Comando Alvo",
                        placeholder: "Insira o ID do comando",
                        choose: "Escolher Comando"
                    },
                    custom: {
                        label: "Comandos Personalizados",
                        description: "1) Dê um nome ao comando · 2) Adicione descrição/palavras-chave/tags/categoria opcionais · 3) Escolha uma ação e preencha os detalhes (IDs devem corresponder a comandos existentes da paleta para apelidos e macros).",
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
                                placeholder: "Palavras-chave separadas por vírgula"
                            },
                            tags: {
                                label: "Tags",
                                placeholder: "Tags separadas por vírgula"
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
                    valid: "Insira uma URL válida.",
                    open: {
                        external: "Abrir externamente",
                    }
                },
                macro: {
                    sequence: {
                        label: "Sequência de Comandos",
                        placeholder: "comando-a, comando-b"
                    },
                    addStep: "Adicionar Etapa",
                    unknownId: "IDs de Comando Desconhecidos"
                }
            },
            status: {
                online: "Online",
                idle: "Ausente",
                dnd: "Não Perturbe",
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
                        failedToTrigger: "Falha ao acionar {{label}}.",
                        activated: "{{label}} ativado."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Controles de silenciar canal indisponíveis",
                        muted: "Canal silenciado.",
                        unmuted: "Som do canal reativado.",
                        failed: "Falha ao atualizar estado de silenciamento do canal."
                    },
                    dm: {
                        no: "Nenhum fechamento de DM registrado nesta sessão.",
                        reOpened: "Última DM fechada foi reaberta.",
                        noAvailable: "A DM não está mais disponível."
                    }
                },
                command: {
                    loop: "Loop de comando detectado na execução da macro.",
                    notFound: "Comando {{commandId}} não encontrado.",
                    unsupported: "Ação de comando personalizado não suportada.",
                    failedToRun: "Falha ao executar {{label}}.",
                    notMetadata: "Metadados do plugin Command Palette indisponíveis."
                },
                guild: {
                    mute: {
                        unavailable: "Controles de silenciar servidor indisponíveis",
                        muted: "Servidor silenciado.",
                        unmuted: "Som do servidor reativado.",
                        failed: "Falha ao atualizar estado de silenciamento do servidor."
                    },
                    settings: {
                        unable: "Não foi possível abrir as configurações do servidor.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Não foi possível abrir o painel de mensagens fixadas.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Redefinição de status agendada foi cancelada.",
                        unableToChange: "Não é possível alterar o status agora.",
                        reverted: "Status revertido para {{status}}.",
                        dnd: "Não Perturbe por {{duration}} minutos."
                    },
                    change: {
                        unableToChange: "Não é possível alterar o status agora.",
                        changed: "Status alterado para {{status}}."
                    }
                },
                read: {
                    marked: "{{channelLabel}} marcado como lido.",
                    failed: "Falha ao marcar canal como lido."
                },
                route: {
                    unable: "Não foi possível abrir {{destination}}.",
                },
                notification: {
                    cleared: "Todas as notificações foram limpas.",
                    failed: "Falha ao limpar notificações.",
                    notSupported: "Limpeza de notificações não suportada."
                },
                streamerMode: {
                    enabled: "Modo Streamer ativado.",
                    disabled: "Modo Streamer desativado.",
                },
                voice: {
                    micToggle: {
                        muted: "Microfone silenciado.",
                        unmuted: "Microfone ativado."
                    },
                    deafenToggle: {
                        deafened: "Áudio silenciado (Ensuder).",
                        undeafened: "Áudio ativado."
                    }
                },
                quickCSS: {
                    enabled: "Quick CSS ativado.",
                    disabled: "Quick CSS desativado."
                },
                transparentity: {
                    enabled: "Transparência de janela ativada.",
                    disabled: "Transparência de janela desativada."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} está desativado.",
                        disable: "{{pluginName}} está desativado. Ative o plugin para usar esta ação."
                    },
                    required: {
                        label: "{{pluginName}} requer reinicialização para recarregar."
                    },
                    stop: {
                        failed: "Falha ao parar {{pluginName}}."
                    },
                    restart: {
                        failed: "Falha ao reiniciar {{pluginName}}."
                    },
                    reload: {
                        label: "{{pluginName}} recarregado.",
                        noPlugin: "Nenhum plugin foi recarregado.",
                        reloaded: "{{count}} plugin{{s}} recarregado{{s}}."
                    },
                    toggle: {
                        enabled: "{{changed}} plugin{{s}} ativado{{s}}.",
                        disabled: "{{changed}} plugin{{s}} desativado{{s}}.",
                        noChanged: "Nenhum plugin mudou de estado."
                    },
                    run: {
                        failed: {
                            label: "Falha ao executar {{pluginName}}: {{actionLabel}}."
                        }
                    }
                },
                commandDeleted: "Comando excluído.",
                statusSetToLabel: "Status definido como {{label}}.",
                themeSetToLabel: "Tema definido como {{label}}.",
                noSettingsPageWas: "Nenhuma página de configurações foi informada.",
                unableToOpenLabel: "Não foi possível abrir {{label_that_settings_page}}.",
                failedToStartDependencies: "Falha ao iniciar dependências: {{join}}",
                messageSentToUsername: "Mensagem enviada para {{username}}.",
                enabledRestart: "{{name}} ativado. Reinicie para aplicar.",
                disabledRestart: "{{name}} desativado. Reinicie para aplicar.",
                enabled: "{{name}} ativado.",
                disabled: "{{name}} desativado.",
                errorStarting: "Erro ao iniciar {{name}}.",
                errorStopping: "Erro ao parar {{name}}."
            },
            display: {
                channel: {
                    current: "Canal Atual",
                    group: "DM em Grupo",
                    direct: "Mensagem Direta"
                },
                guild: {
                    current: "Servidor Atual",
                }
            },
            option: {
                hotkey: {
                    label: "Atalho",
                    description: "Tecla de atalho usada para abrir a paleta de comandos",
                    recording: "Pressione qualquer tecla...",
                    reset: "Redefinir"
                },
                visualStyle: {
                    label: "Estilo Visual",
                    description: "Aparência da paleta",
                    classic: "Clássico",
                    polished: "Polido"
                },
                showTags: {
                    label: "Mostrar Tags",
                    description: "Exibir emblemas de tag para os comandos"
                },
                enableTagFilter: {
                    label: "Ativar Filtro de Tags",
                    description: "Mostrar a barra de filtro de tags"
                },
                customCommands: {
                    label: "Comandos Personalizados",
                    description: "Gerenciar entradas personalizadas da paleta de comandos"
                },
                closeAfterExecute: {
                    description: "Fechar a paleta após executar um comando.",
                    label: "Fechar após executar"
                }
            },
            template: {
                alias: {
                    label: "Comando de Apelido",
                    description: "Espelhar um comando existente"
                },
                settings: {
                    label: "Configurações",
                    description: "Abrir Configurações do Discord"
                },
                url: {
                    label: "Link",
                    description: "Abrir uma URL externa"
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
                settingsPage: "Página de configurações",
                searchSettingsPages: "Pesquisar páginas de configurações...",
                text: "Texto",
                textToInsertInto: "Texto a ser inserido na caixa de chat",
                editCommand: "Editar comando",
                deleteCommand: "Excluir comando",
                createCustomCommand: "Criar comando personalizado",
                light: "Claro",
                ash: "Cinza",
                dark: "Escuro",
                onyx: "Ônix",
                toggleMute: "Alternar silenciar",
                toggleDeafen: "Alternar ensurdecer",
                setStatus: "Definir status",
                searchStatuses: "Pesquisar status...",
                setLabel: "Definir {{label}}",
                toggleTheme: "Alternar tema",
                openServer: "Abrir servidor",
                openChannel: "Abrir canal",
                openDm: "Abrir DM",
                goHome: "Ir para o início",
                goToServer: "Ir para o servidor",
                searchServers: "Pesquisar servidores...",
                goToChannel: "Ir para o canal",
                searchChannels: "Pesquisar canais...",
                searchFriends: "Pesquisar amigos...",
                myAccount: "Minha conta",
                profiles: "Perfis",
                dataPrivacy: "Dados e privacidade",
                devices: "Dispositivos",
                connections: "Conexões",
                appearance: "Aparência",
                accessibility: "Acessibilidade",
                voiceVideo: "Voz e vídeo",
                chat: "Chat",
                textImages: "Texto e imagens",
                notifications: "Notificações",
                keybinds: "Atalhos de teclado",
                authorizedApps: "Aplicativos autorizados",
                familyCenter: "Central da família",
                advanced: "Avançado",
                plexcord: "Plexcord",
                plexcordPlugins: "Plugins do Plexcord",
                plexcordThemes: "Temas do Plexcord",
                plexcordUpdater: "Atualizador do Plexcord",
                plexcordChangelog: "Registro de alterações do Plexcord",
                openQuickcss: "Abrir QuickCSS",
                openUpdater: "Abrir atualizador",
                openChangelog: "Abrir registro de alterações",
                restartDiscord: "Reiniciar o Discord",
                managePlugins: "Gerenciar plugins",
                searchPlugins: "Pesquisar plugins...",
                sendDm: "Enviar DM",
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
                pinned: "Fixado",
                suggestions: "Sugestões",
                setAlias: "Definir apelido",
                aliasForLabel: "Apelido para {{label}}",
                leaveEmptyToRemove: "Deixe vazio para remover",
                command: "Comando",
                noResults: "Nenhum resultado",
                addFile: "Adicionar arquivo",
                saveCommand: "Salvar comando",
                createCommand: "Criar comando",
                nameRequired: "O nome é obrigatório.",
                enterValidUrl: "Insira uma URL válida.",
                pickSettingsPage: "Escolha uma página de configurações nas sugestões.",
                textRequired: "O texto é obrigatório.",
                commandSaved: "Comando salvo.",
                commandCreated: "Comando criado.",
                editCustomCommand: "Editar comando personalizado",
                disablePlugin: "Desativar plugin",
                enablePlugin: "Ativar plugin",
                pickRecipient: "Escolha um destinatário nas sugestões.",
                addMessageOrFile: "Adicione uma mensagem ou um arquivo.",
                pressKeys: "Pressione as teclas...",
                answerCopied: "Resposta copiada para a área de transferência.",
                calculationCopied: "Cálculo copiado para a área de transferência.",
                unpinCommand: "Desafixar comando",
                pinCommand: "Fixar comando",
                saveAlias: "Salvar apelido",
                changeHotkey: "Alterar atalho",
                recordHotkey: "Gravar atalho",
                pressKeyCombo: "Pressione uma combinação de teclas, Backspace para limpar, Esc para cancelar",
                searchIn: "Pesquisar em {{title}}...",
                searchCommands: "Pesquisar comandos...",
                somethingWentWrong: "Algo deu errado.",
                remove: "Remover",
                enabled: "Ativado",
                disabled: "Desativado",
                sectionNavigation: "Navegação",
                sectionCustom: "Personalizado",
                sectionPlugins: "Plugins",
                sectionMessaging: "Mensagens",
                current: "Atual",
                submit: "Enviar"
            },
            description2: "Paleta de comandos estilo Raycast para executar ações em qualquer lugar do Discord"
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Desativa mensagens/erros irritantes do console",
            option: {
                disableLoggers: {
                    label: "Desativar Loggers",
                    description: "Desativa os loggers do Discord"
                },
                disableSpotifyLogger: {
                    label: "Desativar Logger do Spotify",
                    description: "Desativa o logger do Spotify, que vaza informações da conta e token de acesso"
                },
                whitelistedLoggers: {
                    label: "Loggers na Lista Branca",
                    description: "Lista de loggers separados por ponto e vírgula (;) para permitir, mesmo que outros estejam ocultos"
                },
                allowLevel: {
                    label: "Nível Permitido",
                    description: "Sempre permitir loggers destes tipos",
                    filter: "Lista de Filtros"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Adiciona apelidos curtos para várias coisas na janela. Execute `shortcutList` para ver a lista."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Permite especificar certas palavras de gatilho que serão desfocadas por padrão. Clicar no conteúdo revelará a mensagem.",
            option: {
                flagged: {
                    label: "Sinalizadas",
                    flagged: "Palavras Sinalizadas",
                    placeholder: "Palavra"
                },
                onClick: {
                    label: "Ao Clicar",
                    description: "Mostrar conteúdo de gatilho apenas ao clicar, em vez de passar o mouse"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Permite copiar emojis como uma string formatada (<a:nome_do_emoji:id>)",
            option: {
                copyUnicode: {
                    label: "Copiar Unicode",
                    description: "Copia o caractere unicode bruto em vez de :nome: para emojis padrão (👽)"
                }
            },
            context: {
                copy: "Copiar Emoji Markdown"
            },
            toast: {
                success: "Sucesso! Markdown do emoji copiado."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Adiciona um botão aos anexos de arquivos de texto para copiar seu conteúdo",
            copied: "Copiado!",
            large: "Arquivo muito grande para copiar.",
            copyFileContents: "Copiar Conteúdo do Arquivo"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Plugin para copiar as cores de gradiente do perfil das pessoas para a área de transferência.",
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
            description: "Copia a URL do status do usuário ao clicar com o botão direito nela",
            toast: {
                copied: "URL copiada",
                error: "Erro ao copiar URL, verifique o console para mais informações"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Adiciona a habilidade de copiar e abrir links de figurinhas (stickers)",
            context: {
                copy: "Copiar link da figurinha",
                open: "Abrir link da figurinha"
            },
            toast: {
                success: "Link copiado!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Adiciona um botão para copiar a menção do usuário no menu de contexto, funciona melhor com ValidUser.",
            context: {
                copy: "Copiar Menção do Usuário"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Adiciona uma opção 'Copiar URL do Usuário' ao menu de contexto do usuário.",
            context: {
                copy: "Copiar URL do Usuário"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Plugin utilitário para lidar e possivelmente recuperar de travamentos sem reiniciar",
            option: {
                attemptToPreventCrashes: {
                    label: "Tentar Prevenir Travamentos",
                    description: "Se deve tentar prevenir travamentos do Discord."
                },
                attemptToNavigateToHome: {
                    label: "Tentar Navegar para Início",
                    description: "Se deve tentar navegar para a aba de início após a recuperação de um travamento."
                }
            },
            toast: {
                crashed: {
                    title: "O Discord travou!",
                    body: "Poxa :( O Discord travou duas vezes seguidas rapidamente, não tentando recuperar.",
                    update: "Ih, o Discord acabou de travar... mas boas notícias: há uma atualização do Plexcord disponível que pode resolver isso! Gostaria de atualizar agora?",
                    recover: "Tentando recuperar...",
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
                    ctrlEnter: "Ctrl+Enter (Enter ou Shift+Enter para nova linha) (cmd+enter no macOS)",
                    shiftEnter: "Shift+Enter (Enter para nova linha)",
                    enter: "Enter (Shift+Enter para nova linha; padrão do Discord)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Enviar Mensagem no Meio de um Bloco de Código",
                    description: "Se deve enviar a mensagem estando no meio de um bloco de código"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Adiciona um sprite que segue o seu cursor.",
            modal: {
                furColor: "Cor do Pelo",
                outlineColor: "Cor do Contorno"
            },
            option: {
                buddy: {
                    label: "Amiguinho",
                    description: "Escolha um companheiro para o cursor",
                    oneko: "Oneko",
                    fathorse: "Cavalo Gorducho"
                },
                speed: {
                    label: "Velocidade",
                    description: "Velocidade do seu amiguinho",
                    invalid: "A velocidade deve ser maior que 0"
                },
                fps: {
                    label: "Taxa de Quadros",
                    description: "Taxa de quadros do seu amiguinho",
                    invalid: "FPS deve ser maior que 0"
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
                    label: "Cavalo Gorducho"
                },
                size: {
                    label: "Tamanho",
                    description: "Tamanho do cavalo gorducho",
                    invalid: "O tamanho deve ser maior que 0"
                },
                fade: {
                    label: "Desvanecer",
                    description: "Se o cavalo deve desaparecer quando o cursor estiver próximo"
                },
                freeroam: {
                    label: "Andar Livre",
                    description: "Se o cavalo deve andar livremente quando estiver ocioso"
                },
                shake: {
                    label: "Tremer",
                    description: "Se o cavalo deve tremer a janela enquanto caminha"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Personalize ícones de pastas com qualquer PNG",
            option: {
                solidIcon: {
                    label: "Ícone Sólido",
                    description: "Usa um fundo sólido por trás da imagem"
                },
                folderIcons: {
                    label: "Ícones de Pasta",
                    description: "Configurações de ícone de pasta"
                }
            },
            modal: {
                change: "Alterar o tamanho do ícone da pasta",
                save: "Salvar",
                unset: "Redefinir",
                set: "Definir Novo Ícone",
                hover: "Você pode precisar passar o mouse sobre a pasta após definir para que ela atualize."
            },
            context: {
                changeIcon: "Alterar ícone"
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Permite definir o tempo antes do Discord ficar ausente (ou desativar a ausência automática)",
            backOnline: "Bem-vindo de volta! Clique no botão para ficar online. Clique no X para permanecer ausente até recarregar.",
            exit: "Sair do Estado Ausente",
            option: {
                idleTimeout: {
                    label: "Tempo Limite de Ausência",
                    description: "Minutos antes do Discord ficar ausente (0 para desativar)"
                },
                remainInIdle: {
                    label: "Permanecer Ausente",
                    description: "Quando você voltar ao Discord, permaneça ausente até confirmar que deseja ficar online"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Adicione uma Rich Presence (status de jogo) totalmente personalizável ao seu perfil do Discord",
            goTo: "Vá ao {{portal}} para criar uma aplicação e obter o ID da aplicação.",
            upload: "Envie as imagens na aba Rich Presence para obter as chaves das imagens.",
            image: "Se quiser usar um link de imagem, baixe sua imagem e envie para o {{imgur}} e obtenha o link clicando com o botão direito na imagem e selecionando 'Copiar endereço da imagem'.",
            button: "Você não consegue ver seus próprios botões no seu perfil, mas todos os outros conseguem vê-los normalmente.",
            font: "Alguns textos unicode estranhos (fontes 𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘) podem fazer com que a rich presence não apareça, tente usar letras normais.",
            placeholder: "Insira um valor",
            select: "Selecione uma opção",
            error: {
                appIdInvalid: "O ID da aplicação deve ser um número válido.",
                notice: "Aviso",
                sharing: "O compartilhamento de atividade não está ativado, então as pessoas não poderão ver seu Rich Presence personalizado!",
                enable: "Ativar",
                validStream: "O link de transmissão deve ser uma URL válida.",
                mustBeURL: "Deve ser uma URL válida.",
                streamCharacters: "O link de transmissão não deve ter mais de 512 caracteres.",
                dontUse: "Não use um link do Discord. Use um link de imagem do Imgur em vez disso.",
                imgur: "O link do Imgur deve ser um link direto para a imagem (ex: https://i.imgur.com/...). Clique com o botão direito na imagem e selecione 'Copiar endereço da imagem'",
                tenor: "O link do Tenor deve ser um link direto para a imagem (ex: https://media.tenor.com/...). Clique com o botão direito no GIF e selecione 'Copiar endereço da imagem'",
                required: "Este campo é obrigatório.",
                tooLong: "Não deve ter mais de {{maxLength}} caracteres.",
                mustBeNumber: "Deve ser um número.",
                mustBePositive: "Deve ser un número positivo.",
                startTimeInvalid: "O timestamp de início deve ser maior que 0.",
                endTimeInvalid: "O timestamp de término deve ser maior que 0."
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
                    description: "Tamanho atual do grupo (deve ser usado com Tamanho Máximo do Grupo)"
                },
                partyMax: {
                    label: "Tamanho Máximo do Grupo",
                    description: "Tamanho máximo do grupo (deve ser usado com Tamanho Atual do Grupo)"
                },
                type: {
                    label: "Tipo de Atividade",
                    description: "Tipo de atividade",
                    playing: "Jogando",
                    streaming: "Transmitindo",
                    listening: "Ouvindo",
                    watching: "Assistindo",
                    competing: "Competindo"
                },
                streamLink: {
                    label: "Link da Transmissão",
                    description: "Link do Twitch.tv ou YouTube.com (apenas para tipo Transmitindo)"
                },
                timestampMode: {
                    label: "Modo de Timestamp",
                    description: "O que o cronômetro deve mostrar",
                    none: "Nenhum",
                    sinceDiscordOpen: "Desde que o Discord abriu",
                    sameAsCurrentTime: "Mesmo que o seu horário atual (não reseta após 24h)",
                    custom: "Horário Personalizado"
                },
                startTime: {
                    label: "Hora de Início (em milissegundos)",
                    description: "Timestamp de início (apenas para modo personalizado)"
                },
                endTime: {
                    label: "Hora de Término (em milissegundos)",
                    description: "Timestamp de término (apenas para modo personalizado)"
                },
                imageBig: {
                    label: "Chave da Imagem Grande",
                    description: "Chave da imagem grande (deve ser enviada na aba Rich Presence)"
                },
                imageBigTooltip: {
                    label: "Dica da Imagem Grande",
                    description: "Texto ao passar o mouse na imagem grande"
                },
                imageBigURL: {
                    label: "URL da Imagem Grande",
                    description: "URL clicável da imagem grande"
                },
                imageSmall: {
                    label: "Chave da Imagem Pequena",
                    description: "Chave da imagem pequena (deve ser enviada na aba Rich Presence)"
                },
                imageSmallTooltip: {
                    label: "Dica da Imagem Pequena",
                    description: "Texto ao passar o mouse na imagem pequena"
                },
                imageSmallURL: {
                    label: "URL da Imagem Pequena",
                    description: "URL clicável da imagem pequena"
                },
                buttonOneText: {
                    label: "Texto do Botão 1",
                    description: "Texto do primeiro botão"
                },
                buttonOneURL: {
                    label: "URL do Botão 1",
                    description: "Link do primeiro botão"
                },
                buttonTwoText: {
                    label: "Texto do Botão 2",
                    description: "Texto do segundo botão"
                },
                buttonTwoURL: {
                    label: "URL do Botão 2",
                    description: "Link do segundo botão"
                },
                enablePresence: {
                    description: "Se a presença deve ser exibida",
                    label: "Ativar presença"
                }
            },
            toast: {
                savedPresetName: "Predefinição {{name}} salva.",
                loadedPresetName: "Predefinição {{name}} carregada.",
                deletedPresetSelectedpreset: "Predefinição {{selectedPreset}} excluída."
            },
            text: {
                presetName: "Nome da predefinição",
                selectAPreset: "Selecione uma predefinição",
                streamLinkTwitchOr: "Link da transmissão (Twitch ou YouTube, apenas se o tipo de atividade for Transmitindo)",
                presets: "Predefinições",
                save: "Salvar",
                load: "Carregar",
                delete: "Excluir",
                noSavedPresetsYet: "Nenhuma predefinição salva ainda.",
                showCustomRpc: "Mostrar RPC personalizado",
                customRpcDisabled: "RPC personalizado desativado",
                theEnablePresenceSetting: "A opção \"Ativar presença\" está desativada, então sua presença não será exibida. Se não foi intencional, ative-a abaixo.",
                activitySharingDisabled: "Compartilhamento de atividade desativado",
                discordDeveloperPortal: "Portal do Desenvolvedor do Discord",
                imgur: "Imgur",
                enableActivitySharing: "Ativar compartilhamento de atividade"
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Personalize os sons do Discord.",
            search: "Pesquisar sons",
            placeholder: "Pesquisar por nome ou ID",
            import: "Importar",
            export: "Exportar",
            reset: "Redefinir Tudo",
            debug: "Depurar",
            toast: {
                error: "Erro ao carregar arquivo de som personalizado",
                exported: "{{count}} configurações exportadas (arquivos de áudio não inclusos)",
                imported: "Configurações importadas com sucesso",
                importError: "Erro ao importar configurações. Verifique o console para detalhes.",
                reset: "Todas as substituições foram redefinidas com sucesso!",
                overrideDescription: "Substituição para {{soundName}}",
                previewSound: "Erro ao reproduzir som.",
                playing: "Erro ao reproduzir som personalizado. O arquivo pode estar corrompido.",
                invalidFile: "Nenhum arquivo de som personalizado disponível para prévia",
                uploaded: "Arquivo enviado com sucesso: {{fileName}}",
                uploadedError: "Erro ao enviar arquivo: {{error}}",
                invalidExtension: "Tipo de arquivo inválido. Por favor, envie um arquivo de áudio.",
                uploading: "Enviando arquivo...",
                deleted: "Arquivo excluído com sucesso",
                deleteError: "Erro ao excluir arquivo.",
                loadingError: "Erro ao carregar arquivo de som personalizado"
            },
            button: {
                preview: "Prévia",
                stop: "Parar",
                volume: "Volume",
                soundSource: "Fonte do Som",
                customFile: "Arquivo Personalizado",
                uploadNew: "Enviar Novo",
                delete: "Excluir Arquivo Selecionado"
            },
            option: {
                default: "Padrão",
                custom: "Personalizado",
                select: "Selecione um arquivo...",
                overrides: {
                    label: "Substituições"
                },
                soundpack: {
                    label: "Pacote de sons",
                    description: "Pacote de sons a ser usado no lugar do definido no Discord.",
                    default: "Padrão do Discord"
                }
            },
            type: {
                activityEnd: "Fim da Atividade",
                activityLaunch: "Início da Atividade",
                activityUserJoin: "Entrada de Usuário na Atividade",
                activityUserLeft: "Saída de Usuário da Atividade",
                asmrMessage: "Mensagem ASMR",
                bitMessage: "Mensagem de Bit",
                bopMessage: "Mensagem Bop",
                callCalling: "Chamando",
                callRinging: "Chamada Recebida",
                clipError: "Erro no Clipe",
                clipSave: "Clipe Salvo",
                ddrDown: "DDR Baixo",
                ddrLeft: "DDR Esquerda",
                ddrRight: "DDR Direita",
                ddrUp: "DDR Cima",
                deafen: "Silenciar Áudio",
                discodo: "Discodo",
                disconnect: "Desconectar",
                duckyMessage: "Mensagem Ducky",
                hangStatusSelect: "Seleção de Status Pendente",
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
                mute: "Silenciar Microfone",
                overlayUnlock: "Desbloqueio de Overlay",
                poggermodeAchievement: "Conquista Poggermode",
                poggermodeApplause: "Aplausos Poggermode",
                poggermodeEnabled: "Poggermode Ativado",
                poggermodeMessage: "Mensagem Poggermode",
                pttStart: "Início de PTT",
                pttStop: "Fim de PTT",
                reconnect: "Reconectar",
                robotMan: "Homem Robô",
                stageWaiting: "Aguardando no Palco",
                streamEnded: "Transmissão Encerrada",
                streamStarted: "Transmissão Iniciada",
                streamUserJoined: "Usuário Entrou na Transmissão",
                streamUserLeft: "Usuário Saiu da Transmissão",
                success: "Sucesso",
                undeafen: "Ativar Áudio",
                unmute: "Ativar Microfone",
                userJoin: "Entrada de Usuário",
                userLeave: "Saída de Usuário",
                userMoved: "Usuário Movido",
                vibingWumpus: "Wumpus Curtindo"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Timestamps personalizados em mensagens e dicas",
            demo: {
                cozy: "Clique em mim para mudar para o formato Cozy",
                compact: "Clique em mim para mudar para o formato Compacto",
                lastWeek: "Esta mensagem foi enviada na última semana",
                hover: "Passe o mouse sobre os horários para ver os formatos das dicas",
                edit: "Edite os formatos abaixo para vê-los atualizando ao vivo aqui"
            },
            modal: {
                title: "Como usar:",
                moment: "Documentação de formatação do Moment.js",
                hint: "Adicionalmente, você pode usar estes em suas entradas:",
                calendar: "ativa a formatação de data dinâmica como",
                today: "Hoje",
                yesterday: "Ontem",
                or: "ou",
                relative: "fornece tempos como",
                relativeTime: "há 4 horas",
                preview: "Prévia",
                format: "Formatos de Calendário",
                howTo: "Como formatar o valor [calendar] se usado nos horários acima."
            },
            option: {
                formats: {
                    label: "Formatos",
                    description: "Personalize os formatos de timestamp",
                },
                cozyFormat: {
                    label: "Modo Cozy",
                    description: "Formato de hora nas mensagens no modo cozy"
                },
                compactFormat: {
                    label: "Modo Compacto",
                    description: "Formato de hora no modo compacto e ao passar o mouse"
                },
                tooltipFormat: {
                    label: "Dica (Tooltip)",
                    description: "Formato de hora usado nas dicas"
                },
                ariaLabelFormat: {
                    label: "Rótulo Aria",
                    description: "Formato de hora usado nos rótulos de acessibilidade (aria labels)"
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
                    label: "Datas antigas",
                    description: "Formato [calendar] para datas mais antigas"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Permite adicionar uma cor personalizada a qualquer usuário, em qualquer lugar! Recomendado usar com typingTweaks e roleColorEverywhere",
            option: {
                dmList: {
                    label: "Lista de DMs",
                    description: "Usuários com cores personalizadas terão seus nomes coloridos na lista de DMs"
                },
                colorInServers: {
                    label: "Cores nos Servidores",
                    description: "Se as cores dos nomes devem ser alteradas dentro dos servidores"
                }
            },
            context: {
                setColor: "Definir Cor"
            },
            modal: {
                custom: "Cor Personalizada",
                pick: "Escolha uma cor",
                delete: "Excluir Entrada",
                save: "Salvar"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "Torna os títulos e miniaturas incorporados do YouTube menos sensacionalistas, alimentado por DeArrow",
            option: {
                hideButton: {
                    label: "Ocultar Botão",
                    description: "Oculta o botão DeArrow de vídeos incorporados do YouTube"
                },
                replaceElements: {
                    label: "Substituir Elementos",
                    description: "Escolha quais elementos do vídeo incorporado serão substituídos",
                    everything: "Tudo (Títulos e Miniaturas)",
                    title: "Títulos",
                    thumbnail: "Miniaturas"
                },
                dearrowByDefault: {
                    label: "DeArrow por Padrão",
                    description: "Aplica DeArrow aos vídeos automaticamente"
                }
            },
            tooltip: {
                dearrowed: "Este vídeo foi processado pelo DeArrow; clique para restaurar",
                dearrow: "Clique para aplicar DeArrow"
            },
            text: {
                toggleDearrow: "Alternar Dearrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Limpa o Discord removendo elementos não essenciais da interface, como efeitos de perfil, abas de loja, impulsos (boosts) e muito mais.",
            option: {
                userProfileHeader: {
                    label: "Perfil do Usuário"
                },
                removeAvatarDecoration: {
                    label: "Remover decoração de avatar",
                    description: "Remover decorações de avatar. Fica desativado se o Decor estiver ativado.",
                    alertBody: "A remoção de decoração de avatar foi desativada para evitar conflitos com o plugin Decor.",
                    ok: "OK"
                },
                removeNameplate: {
                    label: "Remover Nameplate (Placa de Nome)",
                    description: "Remove as placas de nome."
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
                    label: "Sempre Mostrar Nome de Usuário",
                    description: "Sempre mostra o nome de usuário em vez do status."
                },
                accessibilityNotice: {
                    label: "Aviso de Acessibilidade",
                    description: "O Discord já possui uma opção nativa de estilo de nome de usuário nas configurações de Acessibilidade."
                },
                friendsListHeader: {
                    label: "Acima da Lista de Amigos/DMs"
                },
                removeShopAboveDM: {
                    label: "Remover Loja Acima das DMs",
                    description: "Remove a loja acima da lista de DMs."
                },
                removeQuestsAboveDM: {
                    label: "Remover Missões (Quests) Acima das DMs",
                    description: "Remove as missões acima da lista de DMs."
                },
                miscHeader: {
                    label: "Diversos"
                },
                removeServerBoostInfo: {
                    label: "Remover Info de Impulso do Servidor",
                    description: "Remove as informações de impulso do servidor acima da lista de canais."
                },
                removeBillingSettings: {
                    label: "Remover Configurações de Faturamento",
                    description: "Remove as configurações de faturamento."
                },
                removeGiftButton: {
                    label: "Remover Botão de Presente",
                    description: "Remove o botão de presente."
                },
                removeUnavailableEmojiPicker: {
                    label: "Remover Seletor de Emojis Indisponíveis",
                    description: "Remove categorias indisponíveis do seletor de emojis."
                },
                removeAudioMenus: {
                    label: "Remover Menus de Áudio",
                    description: "Remove os menus ao lado dos botões de silenciar microfone e áudio."
                },
                removeButtonTooltips: {
                    label: "Remover Dicas (Tooltips) de Botões",
                    description: "Remove as dicas que aparecem ao passar o mouse nos botões."
                },
                removeProfileFrame: {
                    description: "Remove molduras de perfil.",
                    label: "Remover moldura de perfil"
                },
                removeDisplayNameStyles: {
                    description: "Remove nomes de exibição animados/estilizados da lista de membros.",
                    label: "Remover estilos de nome de exibição"
                },
                removeLibraryAboveDms: {
                    description: "Remove a biblioteca acima da lista de DMs.",
                    label: "Remover biblioteca acima das DMs"
                },
                removeFamilyCenterAboveDms: {
                    description: "Remove a central da família acima da lista de DMs.",
                    label: "Remover central da família acima das DMs"
                }
            },
            text: {
                discordAlreadyHasA: "O Discord já tem uma opção integrada de estilo do nome de usuário em",
                accessibilitySettings: "configurações de acessibilidade."
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Decodifica o conteúdo em Base64 de qualquer mensagem e copia o conteúdo decodificado.",
            right: {
                decode: "Copiar Decodificado (Clique Esquerdo) / Decodificar Base64 (Clique Direito)",
                copy: "Decodificar Base64 (Clique Esquerdo) / Copiar Decodificado (Clique Direito)"
            },
            option: {
                clickMethod: {
                    label: "Método de Clique",
                    description: "Altera o botão para decodificar o conteúdo Base64 de qualquer mensagem.",
                    left: "Clique com o botão esquerdo para decodificar o conteúdo Base64.",
                    right: "Clique com o botão direito para decodificar o conteúdo Base64."
                }
            },
            modal: {
                title: "Conteúdo Base64 Decodificado",
                content: "Conteúdo Decodificado",
                copy: "Copiar Conteúdo Decodificado {{index}}",
                copied: "Conteúdo decodificado copiado para a área de transferência!"
            }
        },
        decor: {
            name: "Decor",
            description: "Crie e use suas próprias decorações de avatar personalizadas ou escolha sua favorita entre as predefinições.",
            presetPart: "Parte da predefinição {{name}}",
            createdBy: "Criado por {{author}}",
            copy: "Copiar ID da Predefinição",
            file: "Arquivo",
            your: {
                title: "Suas Decorações",
                subtitle: "Você pode excluir suas próprias decorações clicando com o botão direito nelas."
            },
            option: {
                changeDecoration: {
                    label: "Alterar Decoração",
                    description: "Ative o Decor e reinicie seu cliente para alterar sua decoração de avatar.",
                    also: "Você também pode acessar as decorações do Decor na página de {{profiles}}.",
                    profiles: "Perfis"
                },
                baseUrl: {
                    label: "URL Base",
                    description: "URL da API do Decor"
                },
                agreedToGuidelines: {
                    label: "Concordou com as Diretrizes",
                    description: "Concordou com as diretrizes"
                }
            },
            context: {
                decorationOptions: "Opções de Decoração",
                copyHash: "Copiar Hash da Decoração",
                deleteDecoration: "Excluir Decoração"
            },
            alert: {
                delete: {
                    title: "Excluir Decoração",
                    body: "Tem certeza de que deseja excluir {{decoration}}?",
                    confirm: "Excluir",
                    cancel: "Cancelar"
                },
                logout: {
                    title: "Sair",
                    body: "Tem certeza de que deseja sair do Decor?",
                    confirm: "Sair",
                    cancel: "Cancelar"
                }
            },
            button: {
                change: "Alterar Decoração",
                remove: "Remover Decoração",
                apply: "Aplicar",
                cancel: "Cancelar",
                browse: "Navegar",
                submit: "Enviar para Revisão",
                continue: "Continuar",
                back: "Voltar"
            },
            tooltip: {
                pendingReview: "Você já tem uma decoração aguardando revisão",
                pending: "Revisão Pendente"
            },
            join: {
                tooltip: "Entre no servidor do Decor no Discord para receber notificações sobre a revisão da sua decoração e quando novas predefinições forem lançadas",
                button: "Servidor do Discord"
            },
            create: {
                title: "Criar Decoração",
                notViolate: "Certifique-se de que sua decoração não viole as {{guidelines}} antes de enviá-la.",
                guidelines: "diretrizes",
                file: "O arquivo deve ser APNG ou PNG.",
                fileHolder: "Escolher um arquivo",
                name: "Este nome será usado ao se referir a esta decoração.",
                nameHolder: "Cubo de Companhia",
                nameTitle: "Nome"
            },
            help: {
                update: "Para receber atualizações sobre a revisão da sua decoração, entre no {{server}} e permita mensagens diretas.",
                server: "Servidor do Decor no Discord"
            },
            guidelines: {
                hold: "Espere um pouco",
                suspended: "Ao enviar uma decoração, você concorda com as {{guidelines}}. Não ler estas diretrizes pode resultar na suspensão da sua conta para criar mais decorações no futuro.",
                guidelines: "diretrizes"
            },
            toast: {
                failedToAuthorizeMessage: "Falha ao autorizar: {{message}}"
            },
            text: {
                removeDecoration: "Remover decoração do Decor",
                decoration: "Decoração do Decor",
                none: "Nenhuma",
                decorationFile: "Arquivo de decoração"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin para tirar capturas de tela de temas - censura imagens e textos de identificação.",
            toolbox: {
                toggle: "Alternar Demonstração"
            },
            keycode: "Para alterar seu código de tecla, confira {{keycode}}!",
            this: "esta ferramenta",
            okay: "Entendido!",
            option: {
                keyBind: {
                    label: "Atalho de Teclado",
                    description: "A tecla para alternar o tema quando pressionada"
                },
                soundVolume: {
                    label: "Volume do Som",
                    description: "Quão alto é o som de alternância (0 para desativar)"
                },
                showConfirmationModal: {
                    label: "Mostrar Modal de Confirmação",
                    description: "Mostrar um aviso para lembrá-lo do atalho"
                }
            },
            switch: {
                note: "Você pode reativar esta configuração mais tarde",
                disable: "Desativar aviso?"
            },
            shortcut: "Isso censurará todo o texto! Para desativar, lembre-se do atalho:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Plugin Dev Companion. Por favor, relate qualquer coisa que não esteja funcionando ou se comportando de forma estranha (provavelmente um bug) para MutanPlex, seja por ping ou DM. Obrigado!",
            reconnect: "Reconectar",
            option: {
                notifyOnAutoConnect: {
                    label: "Notificar ao Conectar Automaticamente",
                    description: "Se deve notificar quando o Dev Companion se conectou automaticamente."
                },
                usePatchedModule: {
                    label: "Usar Módulo Corrigido (Patched)",
                    description: "Em solicitações de extração, responder com o módulo corrigido atual (se estiver corrigido) em vez do original."
                },
                reloadAfterToggle: {
                    label: "Recarregar após Alternar",
                    description: "Recarregar após um comando 'desativar/ativar plugin' ser recebido."
                }
            },
            toast: {
                title: "Dev Companion Conectado",
                connected: "Conectado ao WebSocket",
                disconnected: "Dev Companion Desconectado",
                error: "Erro do Dev Companion",
                reload: "Necessário Recarregar",
                failed: "Falha ao iniciar dependências: {{failures}}",
                close: "Fechar",
                stopping: "Erro ao parar o plugin {{plugin}}",
                starting: "Erro ao iniciar o plugin {{plugin}}",
                noMessage: "Sem Mensagem de Erro",
                noReason: "Nenhuma Razão Fornecida"
            },
            text: {
                reconnect: "Reconectar",
                loadingLazyModules: "Carregando módulos lazy, reiniciar pode causar erros",
                loadedLazyModules: "Todos os módulos lazy foram carregados",
                failedLazyModules: "Falha ao carregar módulos lazy, verifique o console",
                ok: "OK"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Desativa a expulsão automática de uma chamada de voz em DM após 3 minutos de inatividade e o movimento para um canal de voz AFK."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Desativa as câmeras em uma chamada por padrão"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Ativa o banner de desenvolvedor do Discord, que exibe o Build ID",
            about: "O formato para o Banner Dev do Discord. Você pode usar as seguintes variáveis:",
            preview: "Prévia:",
            empty: "O formato não pode estar vazio.",
            variables: {
                discord: {
                    title: "Variáveis do Discord",
                    icon: "Ícone do Discord",
                    banner: "Ícone do banner dev",
                    channel: "Canal de build do Discord (ex: Stable)",
                    build: "Número da build do Discord (ex: 123456)",
                    hash: "Hash da build do Discord (ex: 123456)"
                },
                plexcord: {
                    title: "Variáveis do Plexcord",
                    icon: "Ícone do Plexcord",
                    name: "Nome do Plexcord",
                    version: "Versão do Plexcord (ex: 1.0.0)",
                    hash: "Hash da build do Plexcord (ex: 123456)",
                    platform: "Plataforma em que o Plexcord está rodando (ex: Dev Build)"
                },
                plextron: {
                    title: "Variáveis Específicas do Plextron",
                    hashShort: "Hash da build do Plextron (ex: 123456789)",
                    platformType: "Plataforma em que o Plextron está rodando (ex: Dev Build)"
                },
                client: {
                    title: "Variáveis do Cliente",
                    icon: "Ícone de Desktop",
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
                    newline: "Caractere de nova linha"
                }
            },
            text: {
                notSupported: "Não suportado",
                devBuild: "Build de desenvolvimento",
                standalone: "Independente"
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Avisa se sua mensagem contém um termo presente na lista predefinida do AutoMod",
            alert: {
                title: "Espere!",
                content: "Sua mensagem contém um termo na lista do AutoMod (Termo: '{{trigger}}').",
                content2: "Há uma grande chance de sua mensagem ser bloqueada e potencialmente moderada por um administrador do servidor.",
                confirm: "Enviar Assim Mesmo",
                cancel: "Cancelar"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Sempre arredonda as marcações de tempo relativas para baixo, então 7.6a se torna 7a em vez de 8a"
        },
        downloadAllAttachments: {
            name: "DownloadAllAttachments",
            description: "Adiciona um botão no menu da mensagem para baixar todos os anexos de uma vez.",
            button: "Baixar todos os anexos",
            toast: {
                success: "{{count}} anexo(s) baixado(s).",
                partial: "{{succeeded}} de {{total}} anexos baixados. {{failed}} falharam.",
                downloadedPluralizeSucceededAttachment: "{{pluralize_succeeded_attachment}} baixado(s).",
                downloadedSucceededOfLength: "{{succeeded}} de {{length}} anexos baixados. {{failed}} falharam."
            },
            option: {
                downloadAllFileTypes: {
                    description: "Também baixar anexos que não sejam mídia. Ative apenas se você confiar no que as pessoas enviam.",
                    label: "Baixar todos os tipos de arquivo"
                }
            }
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Adiciona funcionalidade de arrastar e soltar aos emojis favoritos"
        },
        dragify: {
            name: "Dragify",
            description: "Solte usuários, canais ou servidores no chat para inserir menções ou convites.",
            option: {
                userOutput: {
                    label: "Saída de Usuário",
                    description: "Formato ao soltar um usuário.",
                    mention: "Menção",
                    id: "ID do Usuário"
                },
                channelOutput: {
                    label: "Saída de Canal",
                    description: "Formato ao soltar um canal.",
                    mention: "Menção #canal",
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
                    description: "Número máximo de usos para o convite",
                    noLimit: "Sem Limite",
                    one: "1 Uso",
                    five: "5 Usos",
                    ten: "10 Usos",
                    twentyFive: "25 Usos",
                    fifty: "50 Usos",
                    hundred: "100 Usos"
                },
                inviteTemporaryMembership: {
                    label: "Acesso Temporário via Convite",
                    description: "Conceder acesso temporário.",
                },
                reuseExistingInvites: {
                    label: "Reutilizar Convite Existente",
                    description: "Reutilizar um convite já criado em vez de gerar um novo."
                },
                allowChatBodyDrop: {
                    label: "Permitir Soltar no Corpo do Chat",
                    description: "Permitir soltar itens na área principal de mensagens para inserir texto."
                }
            },
            toast: {
                failed: {
                    drop: "O Dragify falhou ao processar o item solto.",
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
                user: "Usuário",
                server: "Servidor",
                dm: "Mensagens Diretas",
                badge: {
                    channel: "canal",
                    thread: "tópico",
                    voice: "voz",
                    forum: "fórum",
                    media: "mídia",
                    announcement: "anúncio",
                    dm: "dm",
                    user: "usuário",
                    server: "servidor"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Destaca e inspeciona elementos da interface facilmente.",
            modal: {
                recording: "Gravando...",
                reset: "Redefinir"
            },
            option: {
                keybind: {
                    label: "Atalho de Teclado",
                    description: "Alternar Destaque"
                },
                showClasses: {
                    label: "Mostrar Classes",
                    description: "Exibir os nomes das classes CSS do elemento na dica"
                },
                showId: {
                    label: "Mostrar ID",
                    description: "Exibir o atributo ID do elemento na dica"
                },
                showFont: {
                    label: "Mostrar Fonte",
                    description: "Exibir a família e o tamanho da fonte computada"
                },
                showPadding: {
                    label: "Mostrar Preenchimento (Padding)",
                    description: "Exibir os valores de padding do elemento"
                },
                showMargin: {
                    label: "Mostrar Margem",
                    description: "Exibir os valores de margem do elemento"
                },
                showBorderRadius: {
                    label: "Mostrar Raio da Borda",
                    description: "Exibir os valores de arredondamento da borda"
                },
                showPosition: {
                    label: "Mostrar Posição",
                    description: "Exibir o tipo de posicionamento CSS e o z-index"
                },
                showDisplay: {
                    label: "Mostrar Exibição (Display)",
                    description: "Exibir o tipo de display do elemento junto com propriedades flex ou grid"
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
            description: "Toca sons do Soundboard quando você se desconecta de um canal de voz.",
            button: "Definir como som de saída global",
            toast: {
                failedToPlay: "Ops! Algo deu errado."
            },
            option: {
                soundGuildId: {
                    label: "ID do Servidor do Som",
                    description: "Selecione o servidor que contém o som.",
                    placeholder: "Selecione um servidor..."
                },
                soundId: {
                    label: "ID do Som",
                    description: "Insira o ID do som que você deseja tocar.",
                    placeholder: "Insira o ID do som..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "Ativa o acesso a experimentos e outros recursos exclusivos para desenvolvedores no Discord!",
            modal: {
                about: {
                    title: "Mais Informações",
                    body: "Você pode abrir o DevTools do Discord via {{key}}"
                },
                warning: {
                    title: "Espere um pouco!!",
                    body: "Experimentos são recursos não lançados do Discord. Eles podem não funcionar, quebrar seu cliente ou até fazer sua conta ser desativada.",
                    notReponsible: "Use experimentos apenas se souber o que está fazendo. O Plexcord não se responsabiliza por danos causados pela ativação de experimentos.",
                    useAtOwnRisk: "Se você não sabe o que um experimento faz, ignore-o. Não nos pergunte o que eles fazem; provavelmente também não sabemos.",
                    serverSideFeatures: "Não, você não pode usar recursos do lado do servidor (server-side), como marcar a caixa 'Send to Client'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Menu Dev na Barra de Ferramentas",
                    description: "Altera o botão de Ajuda (?) na barra de ferramentas (canto superior direito no chat) para o menu de desenvolvedor do Discord"
                }
            },
            text: {
                searchExperiments: "Pesquisar experimentos"
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Permite exportar mensagens para arquivos — uma única mensagem, todas as mensagens de um usuário ou todas as mensagens do canal",
            option: {
                maxMessages: {
                    label: "Máximo de Mensagens",
                    description: "Número máximo de mensagens a serem exportadas (0 = ilimitado)"
                },
                includeAttachments: {
                    label: "Incluir Anexos",
                    description: "Incluir informações de anexos na exportação"
                },
                includeEmbeds: {
                    label: "Incluir Incorporações (Embeds)",
                    description: "Incluir informações de embeds na exportação"
                },
                includeReactions: {
                    label: "Incluir Reações",
                    description: "Incluir informações de reações na exportação"
                },
                includeComponents: {
                    label: "Incluir Componentes",
                    description: "Incluir informações de componentes (botões, etc.) na exportação"
                }
            },
            message: {
                invalid: "Mensagem inválida — sem autor",
                unknownUser: "Usuário Desconhecido",
                botEmbed: "Mensagem de Embed de Bot",
                attachments: "Anexos",
                unknown: "Desconhecido",
                noUrl: "Sem URL",
                embeds: "Incorporações",
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
                    notFoundUser: "Nenhuma mensagem encontrada deste usuário neste canal",
                    notFoundChannel: "Nenhuma mensagem encontrada neste canal"
                },
                failed: {
                    title: "Exportar Mensagens",
                    body: "Falha ao exportar mensagens"
                },
                userNotFound: {
                    title: "Exportar Mensagens",
                    body: "Usuário não encontrado"
                },
                complete: {
                    title: "Exportação Concluída",
                    saved: "Arquivo salvo",
                    downloaded: "Arquivo baixado",
                    messages: "mensagens"
                }
            },
            context: {
                exportMessage: "Exportar Esta Mensagem",
                exportAll: "Exportar todas as mensagens de {{user}}",
                user: "Usuário",
                exportAllChannel: "Exportar Todas as Mensagens do Canal"
            },
            text: {
                unknownError: "Erro desconhecido"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Permite clonar emojis e figurinhas para seu próprio servidor (clique com o botão direito neles)",
            modal: {
                title: "Nome Personalizado",
                invalidName: "O nome deve ter entre 2 e 32 caracteres e conter apenas caracteres alfanuméricos"
            },
            toast: {
                success: "{{name}} clonado com sucesso para {{guild}}!",
                yourServer: "seu servidor",
                failed: "Falha ao clonar: ",
                console: "Algo deu errado (verifique o console!)",
                successfullyClonedNameTo: "{{name}} clonado com sucesso para {{name_your_server}}!"
            },
            context: {
                clone: "Clonar {{type}}",
                cloneName: "Clonar {{data}}"
            },
            text: {
                yourServer: "seu servidor",
                cloneTo: "Clonar para {{name}}",
                emoji: "Emoji",
                sticker: "Figurinha"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Pausa o cliente quando você pressiona F8 com o DevTools (+ breakpoints) aberto."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Permite enviar emojis/figurinhas falsos, usar temas Nitro e transmitir em qualidade Nitro",
            option: {
                enableEmojiBypass: {
                    label: "Ativar Bypass de Emoji",
                    description: "Permite enviar emojis falsos (também ignora a falta de permissão para usar emojis personalizados)"
                },
                emojiSize: {
                    label: "Tamanho do Emoji",
                    description: "Tamanho dos emojis ao enviar"
                },
                transformEmojis: {
                    label: "Transformar Emojis",
                    description: "Se deve transformar emojis falsos em reais"
                },
                enableStickerBypass: {
                    label: "Ativar Bypass de Figurinha",
                    description: "Permite enviar figurinhas falsas (também ignora a falta de permissão para usar figurinhas)"
                },
                stickerSize: {
                    label: "Tamanho da Figurinha",
                    description: "Tamanho das figurinhas ao enviar"
                },
                transformStickers: {
                    label: "Transformar Figurinhas",
                    description: "Se deve transformar figurinhas falsas em reais"
                },
                transformCompoundSentence: {
                    label: "Transformar Sentença Composta",
                    description: "Se deve transformar figurinhas e emojis falsos em frases compostas (mensagens com mais conteúdo além do link do emoji/figurinha)"
                },
                enableStreamQualityBypass: {
                    label: "Ativar Bypass de Qualidade de Transmissão",
                    description: "Permite transmitir em qualidade Nitro"
                },
                useStickerHyperLinks: {
                    label: "Usar Hyperlinks em Figurinhas",
                    description: "Se deve usar hyperlinks ao enviar figurinhas falsas"
                },
                useEmojiHyperLinks: {
                    label: "Usar Hyperlinks em Emojis",
                    description: "Se deve usar hyperlinks ao enviar emojis falsos"
                },
                hyperLinkText: {
                    label: "Texto do Hyperlink",
                    description: "Qual texto o hyperlink deve usar. {{NAME}} será substituído pelo nome do emoji/figurinha."
                },
                disableEmbedPermissionCheck: {
                    label: "Desativar Checagem de Permissão de Embed",
                    description: "Se deve desativar a verificação de permissão de inserir links ao enviar emojis e figurinhas falsos"
                }
            },
            modal: {
                sticker: "Esta é uma figurinha do FakeNitro e aparece como real apenas para você. Para outros usuários sem o plugin, aparecerá como um link.",
                emoji: "Este é um emoji do FakeNitro e aparece como real apenas para você. Para outros usuários sem o plugin, aparecerá como um link."
            },
            alert: {
                notice: {
                    title: "Espere um pouco!",
                    body: "Você está tentando enviar/editar uma mensagem que contém um emoji ou figurinha do FakeNitro; no entanto, você não tem permissão para inserir links no canal atual. Tem certeza de que deseja enviar? Seus itens FakeNitro aparecerão apenas como um link.",
                    footer: "Você pode desativar este alerta nas configurações do FakeNitro",
                    confirm: "Enviar Assim Mesmo",
                    cancel: "Cancelar",
                    secondaryConfirm: "Não mostrar novamente"
                },
                apngSticker: {
                    title: "Espere um pouco!",
                    body: "Você não pode enviar esta mensagem porque ela contém uma figurinha animada do FakeNitro e você não tem permissão para anexar arquivos no canal atual. Remova a figurinha para prosseguir."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Permite temas de perfil ocultando as cores na sua bio graças à codificação invisível 3y3",
            button: {
                copy: "Copiar 3y3"
            },
            modal: {
                usage: "Uso",
                preview: "Prévia",
                intro: "Ao ativar este plugin, você verá cores personalizadas nos perfis de outras pessoas que usam plugins compatíveis.",
                setColor: "Para definir suas próprias cores:",
                step1: "• Use os seletores de cores abaixo para escolher suas cores",
                step2: "• Clique no botão {{copy}}",
                step3: "• Cole o texto invisível em qualquer lugar da sua bio",
                pickers: "Seletores de Cores",
                primary: "Primária",
                accent: "Acento"
            },
            option: {
                nitroFirst: {
                    label: "Nitro Primeiro",
                    description: "Fonte de cor padrão se ambas estiverem presentes",
                    nitro: "Cores do Nitro",
                    fake: "Cores Falsas"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Permite temas e efeitos de perfil ocultando as cores e efeitos na sua bio graças à codificação invisível 3y3",
            option: {
                prioritizeNitro: {
                    label: "Priorizar Nitro",
                    description: "Fonte a ser priorizada",
                    nitro: "Nitro",
                    aboutMe: "Sobre mim"
                },
                hideBuilder: {
                    label: "Ocultar Construtor",
                    description: "Ocultar o Construtor FPTE nas páginas de configuração de Perfil de Usuário e Perfis de Servidor"
                }
            },
            modal: {
                primary: "Primária",
                accent: "Acento",
                effect: "Efeito",
                usage: {
                    title: "Uso",
                    intro: "Ao ativar este plugin, você verá cores de tema e efeitos personalizados nos perfis de outros usuários deste plugin.",
                    setColor: "Para definir suas próprias cores e efeito:",
                    step1: "Vá para as configurações do seu perfil",
                    step2: "Use o Construtor FPTE para escolher as cores do tema e o efeito do seu perfil",
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
                reset: "Redefinir",
                preview: "Prévia do Construtor FPTE",
                buildBackwards: "Gerar FPTE compatível com versões anteriores",
                moreCharacters: "Usará mais caracteres"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Adiciona um ícone de lixeira para excluir canais rapidamente",
            option: {
                keyBind: {
                    label: "Atalho de Teclado",
                    description: "A tecla para alternar o ícone de lixeira quando pressionada."
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
            description: "Coloca seus emojis favoritos primeiro no preenchimento automático e também fornece apelidos para emojis.",
            option: {
                aliases: {
                    label: "Apelidos (Aliases)",
                    description: "Gerencie seus apelidos de emoji."
                },
                clearAll: {
                    label: "Limpar Tudo",
                    description: "Excluir todos os apelidos."
                }
            },
            modal: {
                clear: {
                    title: "Excluir Todos os Apelidos",
                    description: "Isso removerá todos os apelidos de emoji salvos.",
                    confirm: "Excluir todos os apelidos"
                },
                set: {
                    title: "Definir Apelido",
                    description: "Definir um apelido para {{emoji}}",
                    placeholder: "Apelido, ex: 'feliz'",
                    save: "Salvar",
                    error: "Apelido duplicado"
                }
            },
            toast: {
                set: "Apelido definido para {{emoji}}",
                clearAll: "Todos os apelidos de emoji foram excluídos",
                failedDeleted: "Falha ao excluir apelidos",
                removed: "Apelido removido: {{alias}}",
                failedRemove: "Falha ao remover apelido",
                duplicate: "Apelido duplicado",
                failedSave: "Falha ao salvar apelido.",
                removedAliasAlias: "Apelido :{{alias}}: removido",
                aliasSetForGetemojidisplayname: "Apelido definido para {{getEmojiDisplayName_ref}}."
            },
            button: {
                edit: "Editar apelido",
                set: "Definir apelido"
            },
            text: {
                remove: "Remover",
                noAliasesSetYet: "Nenhum apelido definido ainda.",
                aliasRequired: "O apelido é obrigatório.",
                aliasInvalid: "O apelido deve ter de 2 a 32 caracteres e usar apenas letras minúsculas, números ou sublinhados."
            }
        },
        favoriteAnything: {
            name: "FavoriteAnything",
            description: "Favoritar qualquer imagem",
            noFiles: "Nenhum arquivo corresponde à sua pesquisa.",
            searchPlaceholder: "Pesquisar arquivos",
            media: "Mídia",
            demoText: "Clique na estrela para favoritar um arquivo.\nArquivos favoritos aparecerão aqui!",
            fetchError: "Não foi possível obter {filename}",
            uploadError: "Não foi possível enviar {filename}",
            text: {
                clickTheStarTo: "Clique na estrela para favoritar um arquivo.",
                favoriteFilesWillShow: "Os arquivos favoritos aparecerão aqui!"
            },
            option: {
                localThumbnails: {
                    description: "Gerar miniaturas de arquivos localmente em vez de usar um serviço externo (placeholder.nin0.dev). Não é compatível com celular. Alternar esta opção não afeta os favoritos existentes.",
                    label: "Miniaturas locais"
                }
            }
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Adiciona um botão de Download no canto superior direito dos arquivos"
        },
        findReply: {
            name: "FindReply",
            description: "Salta para a resposta mais antiga de uma mensagem em um canal (permite seguir conversas passadas mais facilmente).",
            context: {
                jump: "Pular para Resposta"
            },
            toast: {
                navigate: "Use o painel inferior para navegar entre as respostas.",
                container: "Não foi possível encontrar o elemento contêiner.",
                couldntFind: "Não foi possível encontrar uma resposta."
            },
            option: {
                includePings: {
                    label: "Incluir Pings",
                    description: "Também pesquisará por mensagens que mencionam (@) o autor diretamente"
                },
                includeAuthor: {
                    label: "Incluir Autor",
                    description: "Também pesquisará por mensagens que respondem ao autor em geral, não apenas àquela mensagem exata"
                },
                hideButtonIfNoReply: {
                    label: "Ocultar Botão se Não Houver Resposta",
                    description: "Oculta o botão se não houver respostas para a mensagem"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Remove o espaço entre blocos de código e o texto abaixo deles"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Corrige extensões de arquivos renomeando-as para um formato compatível suportado, se possível"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Melhora a qualidade das imagens forçando o uso da fonte original",
            option: {
                originalImagesInChat: {
                    label: "Imagens Originais no Chat",
                    description: "Também carrega a imagem original no chat. AVISO: Leia as ressalvas acima"
                }
            },
            modal: {
                about: {
                    title: "O comportamento padrão é o seguinte:",
                    body: "&mdash; No chat, serão carregadas imagens otimizadas, porém em resolução total.",
                    body2: "&mdash; No modal de imagem, a imagem original será carregada.",
                    body3: "Você também pode ativar imagens originais no chat, mas esteja ciente das seguintes ressalvas:",
                    warning: "&mdash; Imagens animadas (GIF, WebP, etc.) no chat sempre estarão animadas, independentemente de o app estar focado ou não.",
                    warning2: "&mdash; Pode causar lentidão (lag).",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Corrige os embeds do Spotify que são extremamente altos, permitindo que você personalize o volume",
            option: {
                volume: {
                    label: "Volume",
                    description: "A porcentagem de volume para os embeds do Spotify. Qualquer valor acima de 10% é muuuuito alto"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Contorna o bloqueio de exibição de vídeos do YouTube no Discord (por exemplo, por restrições da UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Adiciona uma opção de Seguir no menu de contexto do usuário para estar sempre no mesmo canal de voz que ele",
            indicatorTooltip: "Seguindo {{user}} (clique para acionar manualmente, clique direito para parar de seguir)",
            unknownUser: "Usuário Desconhecido",
            option: {
                executeOnFollow: {
                    label: "Executar ao Seguir",
                    description: "Certifica-se de entrar no mesmo canal de voz ao começar a seguir um usuário"
                },
                onlyManualTrigger: {
                    label: "Apenas Gatilho Manual",
                    description: "Aciona apenas ao clicar no indicador"
                },
                followLeave: {
                    label: "Seguir Saída",
                    description: "Também sai do canal quando o usuário seguido sair"
                },
                autoMoveBack: {
                    label: "Mover de Volta Automaticamente",
                    description: "Move você automaticamente de volta para o canal do usuário seguido caso você seja movido"
                },
                followUserId: {
                    label: "ID do Usuário Seguido",
                    description: "ID do Usuário Seguido"
                },
                channelFull: {
                    label: "Canal Cheio",
                    description: "Tenta mover você para o canal assim que ele não estiver mais cheio"
                },
                onlyWhenInVoice: {
                    label: "Apenas em voz",
                    description: "Seguir o usuário apenas quando você estiver em um canal de voz"
                }
            },
            toast: {
                channelFull: "O canal está cheio",
                newVc: "Seguiu o usuário para um novo canal de voz",
                insufficientPermissions: "Permissões insuficientes para entrar no canal de voz",
                sameVc: "Você já está no mesmo canal",
                disconnect: "O usuário seguido saiu; desconectado",
                notFollowing: "O usuário seguido saiu, mas o desconectar automático está desligado",
                notVc: "O usuário seguido não está em um canal de voz"
            },
            context: {
                follow: "Seguir Usuário",
                unfollow: "Parar de Seguir Usuário"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Carrega qualquer fonte do Google Fonts",
            option: {
                selectedFont: {
                    label: "Fonte Selecionada",
                    description: "Fonte selecionada no momento"
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
                    description: "Selecione uma fonte para aplicá-la",
                    placeholder: "Pesquisar fontes...",
                    previewText: "O rato roeu a roupa do rei de Roma",
                    authors: "Por {{authors}}"
                }
            },
            text: {
                currentFont: "Fonte atual:",
                resetFont: "Redefinir fonte"
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Força a coroa de dono ao lado dos nomes de usuário, mesmo que o servidor seja grande."
        },
        freaky: {
            name: "Freaky",
            description: "Permite que você envie sua mensagem em uma fonte estranha usando o comando /freaky.",
            command: {
                freaky: "Ficar freaky.",
                message: "Deixar sua mensagem freaky"
            },
            option: {
                addFreakyEnding: {
                    label: "Adicionar Final Freaky",
                    description: "Adiciona 👅 ou ❤️ ao final"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Reescreve e filtra os resultados do Quick Switcher para mostrar seus canais mais frequentes."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Adiciona um comando /friendcloud para visualizar os usuários com quem você mais interage",
            command: {
                friendcloud: {
                    description: "Visualize sua nuvem de amigos",
                    count: "Número de usuários para exibir",
                    mustHigher: "O número deve ser 1 ou maior!",
                    noAffinities: "Nenhuma afinidade encontrada. Verifique suas [configurações de privacidade](<https://support.discord.com/hc/pt-br/articles/21864805694999-Dados-usados-para-melhorar-o-Discord>).",
                    noValid: "Nenhum usuário válido encontrado nas afinidades. Verifique suas [configurações de privacidade](<https://support.discord.com/hc/pt-br/articles/21864805694999-Dados-usados-para-melhorar-o-Discord>).",
                    genFailed: "Não foi possível gerar a imagem :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Gera códigos de amizade para adicionar amigos facilmente",
            card: {
                expires: "Expira <t:{{expiration}}:R> • {{uses}}/{{maxUses}} usos",
                copy: "Copiar",
                copied: "Copiado!",
                codes: "Seus Códigos de Amizade",
                count: "Códigos de Amizade - {{invites}}",
                create: "Criar Código de Amizade",
                revoke: "Revogar Todos os Códigos",
                loading: "Carregando...",
                dontHave: "Você não possui códigos de amizade."
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Cria e gerencia links de convite de amizade via comandos de barra (/create friend invite, /view friend invites, /revoke friend invites).",
            command: {
                create: {
                    description: "Gera um link de convite de amizade.",
                    message: "discord.gg/{{code}}`\n· Expira <t:{{expiration}}:R>\n· Usos Máximos: {{uses}}"
                },
                view: {
                    description: "Ver uma lista de todos os convites de amizade gerados.",
                    message: "_discord.gg/{{code}}_ \n· Expira: <t:{{expiration}}:R> \n· Vezes usado: {{uses}}/{{maxUses}}",
                    noInvites: "Você não tem convites de amizade ativos."
                },
                revoke: {
                    description: "Revoga todos os convites de amizade gerados.",
                    message: "Todos os convites de amizade foram revogados."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Adiciona emblemas que mostram há quanto tempo você é amigo de um usuário",
            badge: {
                sprout: {
                    name: "Broto",
                    description: "Sua amizade está apenas começando"
                },
                blooming: {
                    name: "Florescendo",
                    description: "Sua amizade está evoluindo! (1 mês)"
                },
                burning: {
                    name: "Ardendo",
                    description: "Sua amizade atingiu a velocidade terminal (3 meses)"
                },
                fighter: {
                    name: "Guerreiro",
                    description: "Sua amizade é forte (6 meses)"
                },
                star: {
                    name: "Estrela",
                    description: "Sua amizade já dura BASTANTE tempo (1 ano)"
                },
                royal: {
                    name: "Real",
                    description: "Sua amizade passou por altos e baixos — 2 anos inteiros!"
                },
                besties: {
                    name: "Melhores Amigos",
                    description: "Como você conseguiu isso??? (5 anos)"
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
            description: "Permite filtrar por tags personalizadas no Quick Switcher iniciando uma pesquisa com &",
            modal: {
                name: "Nome",
                users: "Usuários (separados por vírgula)",
                userlist: "Lista de Usuários (clique em um usuário para remover)",
                remove: "Remover",
                add: "Adicionar",
                tag: "Tag",
                removeFrom: "Remover de",
                addTo: "Adicionar a"
            },
            option: {
                tagConfiguration: {
                    label: "Configuração de Tags",
                    description: "O componente de configuração de tags"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Faz com que o menu de contexto das mensagens nos resultados de pesquisa tenha todas as opções que você espera"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Faz com que as menções de usuários na caixa de chat tenham mais funcionalidades, como clique esquerdo/direito"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Faz com que os avatares ocupem todo o espaço (bloco) do canal de voz"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Adiciona um botão ao lado dos botões de microfone e ensurdecer para alternar a atividade de jogo. Clique com o botão direito para alternar a atividade do Spotify.",
            tooltip: "Alternar Atividade de Jogo",
            gameActivity: {
                enabled: "Atividade de Jogo Ativada",
                disabled: "Atividade de Jogo Desativada"
            },
            option: {
                oldIcon: {
                    label: "Ícone Antigo",
                    description: "Usa o estilo de ícone antigo de antes do redesign do ícone do Discord"
                },
                location: {
                    label: "Localização",
                    description: "Onde mostrar o botão de alternância da atividade de jogo",
                    panel: "Ao lado de Silenciar/Áudio",
                    toolbox: "Caixa de Ferramentas Plexcord"
                }
            },
            text: {
                disableGameActivity: "Desativar atividade de jogo",
                enableGameActivity: "Ativar atividade de jogo",
                shareSpotifyActivity: "Compartilhar atividade do Spotify",
                shareSpotifyActivityAccount: "Compartilhar atividade do Spotify ({{name}})"
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Um fantasma fofo aparecerá se você não responder às DMs de alguém",
            modal: {
                title: "Usuários no Ghost",
                no: "Nenhum usuário no ghost",
                unghost: "tirar do ghost",
                unknown: "Desconhecido",
                unnamedGroup: "Grupo Sem Nome",
                unknownUser: "Usuário Desconhecido",
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
                    label: "Mostrar Ícones de DM",
                    description: "Mostra ícones de fantasma ao lado das DMs individuais"
                },
                ignoreGroupDms: {
                    label: "Ignorar DMs em Grupo",
                    description: "Exclui todas as DMs em grupo do sistema de ghost"
                },
                exemptedChannels: {
                    label: "Canais Isentos",
                    description: "Lista de IDs de canais separados por vírgula para isentar do ghost (clique com o botão direito em um canal de DM para copiar o ID)"
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
                    delete: "Excluir Coleção",
                    create: "Criar Coleção",
                    remove: "Remover",
                    information: "Informações da Coleção",
                    name: "Nome",
                    gifs: "GIFs",
                    created: "Criado em",
                    updated: "Última Atualização",
                    close: "Fechar",
                    rename: "Renomear",
                    move: "Mover para Coleção",
                    select: "Selecione uma coleção para onde mover o item"
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
                    description: "O prefixo para itens de GIF"
                },
                collectionPrefix: {
                    label: "Prefixo da Coleção",
                    description: "O prefixo para as coleções"
                },
                onlyShowCollections: {
                    label: "Apenas Mostrar Coleções",
                    description: "Mostra apenas as coleções"
                },
                stopWarnings: {
                    label: "Parar Avisos",
                    description: "Para os avisos de exclusão"
                },
                showCopyImageLink: {
                    label: "Mostrar Copiar Link da Imagem",
                    description: "Mostra a opção {{copyImageLink}} nos menus de contexto"
                },
                preventDuplicates: {
                    label: "Prevenir Duplicatas",
                    description: "Evita adicionar o mesmo GIF em uma coleção várias vezes"
                },
                defaultEmptyCollectionImage: {
                    label: "Imagem Padrão de Coleção Vazia",
                    description: "A imagem/GIF que será mostrada quando uma coleção não tiver imagens/GIFs"
                },
                collectionsSortType: {
                    label: "Tipo de Ordenação das Coleções",
                    description: "O tipo de critério para ordenar as coleções"
                },
                collectionsSortOrder: {
                    label: "Ordem de Ordenação das Coleções",
                    description: "A direção da ordenação das coleções"
                },
                collectionsSort: {
                    label: "Ordenação das Coleções",
                    description: "Decida como ordenar as coleções",
                    title: "Ordenar Coleções",
                    sortDescription: "Escolha um critério de ordenação para suas coleções",
                    sortBy: "Ordenar Por",
                    name: "Nome",
                    creationDate: "Data de Criação",
                    modifiedDate: "Data de Modificação",
                    ascending: "Crescente",
                    descending: "Decrescente"
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
                    label: "Redefinir Coleções",
                    description: "Redefine as coleções para o padrão (exclui todas as suas coleções)",
                    button: "Redefinir Coleções"
                }
            },
            toast: {
                copied: "Link da imagem copiado para a área de transferência!",
                urlCopied: "URL copiada para a área de transferência!",
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
                    title: "Renomear Coleção",
                    name: "Novo Nome da Coleção",
                    warning: "O nome não pode ter mais de 24 caracteres",
                    rename: "Renomear"
                }
            },
            alert: {
                import: {
                    title: "Tem certeza?",
                    body: "Importar coleções irá sobrescrever suas coleções atuais.",
                    confirm: "Importar",
                    cancel: "Deixa para lá"
                },
                reset: {
                    title: "Tem certeza?",
                    body: "Redefinir as coleções removerá todas as suas coleções.",
                    confirm: "Redefinir",
                    cancel: "Deixa para lá"
                },
                delete: {
                    title: "Tem certeza?",
                    deleteBody: "Você realmente deseja excluir esta coleção?",
                    removeBody: "Você realmente deseja remover este item?",
                    confirm: "Excluir",
                    remove: "Remover",
                    cancel: "Deixa para lá"
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
            description: "Adiciona um comando para enviar um GIF aleatório dos seus favoritos, com uma chance em dez de mencionar o dono do servidor",
            command: {
                gifRoulette: {
                    description: "Tente a sorte e envie un GIF",
                    restricted: "Este comando é restrito neste servidor."
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Chance de Mencionar o Dono",
                    description: "Se deve haver uma chance de 1 em 10 de mencionar o dono do servidor (oh não)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Exibe os repositórios públicos do GitHub de um usuário no perfil dele",
            loading: "Carregando repositórios...",
            option: {
                showStars: {
                    label: "Mostrar Estrelas",
                    description: "Mostra as estrelas do repositório"
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
                only: "Mostrando apenas os principais {{length}}/{{total}}"
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
                    description: "Enviar um link de motor de busca",
                    query: "A consulta de pesquisa"
                }
            },
            option: {
                hyperlink: {
                    label: "Hyperlink",
                    description: "Se o link enviado deve ser um hyperlink com a consulta como rótulo"
                },
                embed: {
                    label: "Incorporar (Embed)",
                    description: "Se o link enviado deve renderizar um embed"
                },
                defaultEngine: {
                    label: "Motor Padrão",
                    description: "O motor de busca a ser usado"
                },
                customEngineURL: {
                    label: "URL de Motor Personalizado",
                    description: "A URL do motor que você deseja usar"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Permite usar qualquer figurinha de saudação em vez de apenas a aleatória ao clicar com o botão direito no botão 'Acene para dizer olá!'",
            mode: {
                greet: "Saudar",
                message: "Mensagem"
            },
            option: {
                greetMode: {
                    label: "Modo de Saudação",
                    description: "Escolha o modo de saudação",
                    greet: "Saudar (você só pode saudar 3 vezes)",
                    message: "Mensagem (você pode saudar repetidamente)"
                }
            },
            context: {
                label: "Seletor de Figurinha de Saudação",
                mode: "Modo de Saudação",
                stickers: "Figurinhas de Saudação",
                multi: "Multi-Saudação Profana",
                send: "Enviar Saudações"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Menu de contexto para extrair e baixar os emojis e figurinhas de um servidor.",
            context: {
                download: {
                    emoji: "Baixar Emojis",
                    sticker: "Baixar Figurinhas"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Adiciona algumas configurações para tags de servidor, como ocultá-las ou desativar o aviso para adotá-las.",
            option: {
                disableAdoptTagPrompt: {
                    label: "Desativar Aviso de Adoção de Tag",
                    description: "Desativa o aviso para adotar tags"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Capaz de ocultar os botões do chat",
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
                    label: "Abrir",
                    description: "Aberto por padrão"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Oculta anexos e embeds de mensagens individuais via botão ao passar o mouse",
            show: "Mostrar Mídia",
            hide: "Ocultar Mídia",
            hidden: "Mídia Oculta"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Oculta temporariamente mensagens e DMs até você reiniciar.",
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
                    label: "Ocultar Botão do Popover",
                    description: "Oculta o botão de ocultar no popover da mensagem."
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
                    description: "Mostra o menu para reexibir servidores na parte inferior da lista"
                },
                guildsList: {
                    label: "Lista de Servidores",
                    description: "Remover servidores ocultos"
                },
                resetHidden: {
                    label: "Redefinir Ocultos",
                    description: "Remove todos os servidores ocultos da lista",
                    button: "Redefinir Servidores Ocultos"
                }
            },
            button: {
                hidden: "Ocultos",
                hiddenServers: "Servidores Ocultos",
                remove: "Remover",
                folder: "Pasta",
                removeAll: "Remover Todos",
                guilds: "Servidores",
                noHiddenServers: "Nenhum servidor oculto"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes permite que você salve mensagens",
            main: "Principal",
            button: {
                tooltip: "Holy Notes",
                save: "Salvar Nota",
                cancel: "Cancelar",
                noteMessage: "Anotar Mensagem",
                refresh: "Atualizar Avatares",
                import: "Importar Notas",
                export: "Exportar Notas",
                deleteAll: "Excluir Todas as Notas",
                delete: "Excluir Bloco de Notas",
                create: "Criar Bloco de Notas",
                copyText: "Copiar Texto",
                copyAttachment: "Copiar URL do Anexo",
                deleteNote: "Excluir Nota",
                moveNote: "Mover Nota",
                moveTo: "Mover para {{key}}",
                copyId: "Copiar ID"
            },
            modal: {
                error: {
                    generic: "Houve um erro ao processar suas notas. Verifique o console para mais detalhes.",
                    easter: "Nenhuma nota encontrada. Empathy Banana está aqui para você.",
                    empty: "Nenhuma nota encontrada neste bloco de notas."
                },
                help: {
                    title: "Ajuda",
                    description: "Saiba como usar o Holy Notes",
                    addingNotes: "Adicionando Notas",
                    addingNotesText: "Para adicionar uma nota, clique com o botão direito em uma mensagem, passe o mouse sobre o item 'Anotar Mensagem' e clique no botão com o nome do bloco de notas para o qual deseja anotar a mensagem.",
                    prototype: "Protótipo",
                    noteMessage: "Clicar no botão 'Anotar Mensagem' sozinho anotará no bloco 'Principal' por padrão!",
                    deletingNotes: "Excluindo Notas",
                    deletingNotesText: "Dica: você pode clicar com o botão direito na nota e selecionar 'Excluir Nota' ou segurar a tecla 'DELETE' no teclado e clicar em uma nota; é como mágica!",
                    movingNotes: "Movendo Notas",
                    movingNotesText: "Para mover uma nota, clique com o botão direito em uma nota, passe o mouse sobre o item 'Mover Nota' e clique no botão correspondente ao bloco de notas para o qual deseja movê-la.",
                    jumpToMessage: "Pular para a Mensagem",
                    jumpToMessageText: "Para pular para o local onde a nota estava originalmente, basta clicar com o botão direito na nota e selecionar 'Pular para a Mensagem'."
                },
                notebook: {
                    title: "BLOCO DE NOTAS",
                    search: "Procurar por uma mensagem...",
                    options: "Opções de Ordenação",
                    label: "Menu de Ordenação",
                    filteredOf: "{{filteredCount}} de {{noteCount}} nota{{s}}",
                    note: "{{noteCount}} nota{{s}}",
                    ada: "Crescente / Data Adicionada",
                    amd: "Crescente / Data da Mensagem",
                    dda: "Decrescente / Data Adicionada",
                    dmd: "Decrescente / Data da Mensagem",
                    change: "Alterar Ordenação",
                    ascending: "Crescente",
                    descending: "Decrescente",
                    dateAdded: "Data Adicionada",
                    messageDate: "Data da Mensagem"
                },
                create: {
                    title: "Criar Bloco de Notas",
                    description: "Digite um nome para o seu novo bloco de notas",
                    placeholder: "Nome do Bloco de Notas"
                },
                delete: {
                    title: "Excluir {{notebookName}}?",
                    description: "{{noteCount}} nota{{s}} serão excluídas permanentemente",
                    button: "Excluir"
                },
                tabs: {
                    label: "Abas do Bloco de Notas"
                }
            },
            toast: {
                saved: "Mensagem adicionada com sucesso a {{notebook}}",
                deleted: "Nota excluída com sucesso de {{notebook}}",
                moved: "Nota movida com sucesso de {{from}} para {{to}}.",
                exists: "O bloco de notas {{notebookName}} já existe.",
                created: "{{notebookName}} criado com sucesso.",
                deletedNotebook: "{{notebookName}} excluído com sucesso.",
                refreshed: "Avatares atualizados com sucesso.",
                deletedAll: "Todas as notas foram excluídas com sucesso.",
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
            description: "Altera o botão de Início para um indicador de digitação se alguém em suas DMs estiver digitando"
        },
        iconViewer: {
            name: "IconViewer",
            description: "Adiciona uma nova aba nas configurações para visualizar todos os ícones.",
            toolbox: "Abrir Aba de Ícones",
            iconFinder: "Localizador de Ícones",
            about: {
                title: "Recursos",
                preview: "Prévia de Ícones",
                list: {
                    copy: "Copiar nomes de ícones e variáveis CSS",
                    download: "Baixar ícones em diferentes formatos (SVG, PNG, GIF, etc.)",
                    premade: "Copiar ícones pré-feitos para seus plugins",
                    find: "Encontrar ícones pelo contexto de função",
                    search: "Pesquisar cores clicando com o botão direito no nome da cor",
                    special: "Agradecimentos especiais"
                }
            },
            context: {
                icon: {
                    options: "Opções de Ícone",
                    log: "Registrar no Console",
                    save: "Salvar como...",
                    rightClick: "Clique direito no ícone para alterar",
                    usage: "Uso",
                    click: "Clique para copiar",
                    copied: "Copiado!",
                    actions: "Ações"
                }
            },
            modal: {
                label: "Pesquisar pelo contexto de função",
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
            description: "Reinicia automaticamente o cliente após ficar inativo por um tempo configurável, mas evita reiniciar enquanto você estiver em um canal de voz.",
            option: {
                isEnabled: {
                    label: "Está Ativado",
                    description: "Ativar reinicialização automática após inatividade"
                },
                idleMinutes: {
                    label: "Minutos de Inatividade",
                    description: "Minutos de inatividade antes de reiniciar (quando não estiver em CV)"
                }
            },
            toolbox: {
                disable: "Desativar Reinicialização Automática por Inatividade",
                enable: "Ativar Reinicialização Automática por Inatividade"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Ignora atividades de aparecerem APENAS no seu status. Você pode configurar quais são especificamente ignoradas nas abas de Jogos Registrados e Atividades, ou usar as configurações gerais abaixo",
            modal: {
                import: {
                    title: "Importar o ID da aplicação do plugin CustomRPC para a lista de filtros"
                },
                filter: {
                    title: "Lista de Filtros",
                    description: "Lista de IDs de atividades separados por vírgula para filtrar (útil para filtrar atividades RPC específicas e CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "O ID da aplicação CustomRPC não está definido.",
                    alreadyAdded: "O ID da aplicação CustomRPC já foi adicionado."
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
                    blacklist: "Blacklist (ignorar apenas o que está na lista)",
                    whitelist: "Whitelist (ignorar tudo, exceto o que está na lista)"
                },
                idList: {
                    label: "Lista de IDs"
                },
                ignorePlaying: {
                    label: "Ignorar 'Jogando'",
                    description: "Ignorar todas as atividades de jogo (geralmente atividades de jogo e RPC)"
                },
                ignoreStreaming: {
                    label: "Ignorar 'Transmitindo'",
                    description: "Ignorar todas as atividades de transmissão"
                },
                ignoreListening: {
                    label: "Ignorar 'Ouvindo'",
                    description: "Ignorar todas as atividades de ouvindo (geralmente do Spotify)"
                },
                ignoreWatching: {
                    label: "Ignorar 'Assistindo'",
                    description: "Ignorar todas as atividades de vídeo"
                },
                ignoreCompeting: {
                    label: "Ignorar 'Competindo'",
                    description: "Ignorar todas as atividades de competição (normalmente atividades especiais de jogos)"
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
            description: "Permite ignorar chamadas de usuários específicos ou grupos de DM.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Usuários Ignorados Permanentemente",
                    description: "IDs de usuários (vírgula + espaço) que devem ser ignorados permanentemente"
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
            description: "Não oculta mensagens de 'prováveis spammers'"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Exibe o nome do arquivo de imagens e GIFs como uma dica ao passar o mouse sobre eles",
            option: {
                showFullUrl: {
                    label: "Mostrar URL Completa",
                    description: "Mostra a URL completa da imagem em vez de apenas o nome do arquivo. Sempre ativado para GIFs, pois eles geralmente não têm um nome de arquivo significativo"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Nunca oculta links de imagens em mensagens, mesmo que seja o único conteúdo"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Permite dar zoom em imagens e GIFs, além de exibir metadados da imagem. Use a roda do mouse para dar zoom e Shift + roda do mouse para aumentar o raio da lente.",
            option: {
                saveZoomValues: {
                    label: "Salvar Valores de Zoom",
                    description: "Se deve salvar os valores de zoom e tamanho da lente"
                },
                invertScroll: {
                    label: "Inverter Rolagem",
                    description: "Inverte a direção da rolagem"
                },
                nearestNeighbour: {
                    label: "Vizinho Mais Próximo (Nearest Neighbour)",
                    description: "Usa a interpolação 'Nearest Neighbour' ao redimensionar imagens"
                },
                square: {
                    label: "Quadrada",
                    description: "Torna a lente quadrada"
                },
                zoom: {
                    label: "Zoom",
                    description: "Zoom da lente"
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
                    description: "Mostra os metadados da imagem ao clicar duas vezes na imagem selecionada"
                }
            },
            context: {
                square: "Lente Quadrada",
                nearest: "Vizinho Mais Próximo",
                zoom: "Zoom",
                size: "Tamanho da Lente",
                zoomSpeed: "Velocidade do Zoom",
                showImageMetadata: "Mostrar Metadados da Imagem",
                view: "Ver Metadados",
                loading: "Carregando...",
                unknown: "Desconhecido",
                sizeHTML: "Tamanho",
                dimensions: "Dimensões",
                filename: "Nome do arquivo"
            },
            text: {
                bytes: "Bytes"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Adiciona um comando de barra /imgtogif para criar um GIF a partir de qualquer imagem",
            command: {
                imgToGif: {
                    description: "Permite transformar uma imagem em um GIF",
                    image: "Anexo de imagem a ser usado",
                    width: "Largura do GIF",
                    height: "Altura do GIF"
                }
            },
            error: {
                noImage: "Nenhuma imagem especificada!",
                notImage: "O arquivo enviado não é uma imagem"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Mostra seus relacionamentos implícitos na aba Amigos.",
            option: {
                sortByAffinity: {
                    label: "Ordenar por Afinidade",
                    description: "Se deve ordenar os relacionamentos implícitos pela afinidade deles com você."
                }
            },
            implicit: "Implícito"
        },
        inRole: {
            name: "InRole",
            description: "Saiba quem está em um cargo com o menu de contexto de cargo ou o comando /inrole (leia as informações do plugin!)",
            command: {
                inrole: {
                    description: "Saiba quem está em um cargo",
                    role: "O cargo",
                    noGuild: "Certifique-se de que você está em um servidor."
                }
            },
            context: {
                view: "Ver Membros no Cargo"
            },
            modal: {
                about: {
                    title: "Limitações",
                    description: "Se você não tiver permissões de moderação no servidor e esse servidor for grande (mais de 100 membros), o plugin pode ser limitado das seguintes formas",
                    list: {
                        one: "Membros offline não serão listados",
                        two: "Até 100 membros serão listados por padrão. Para obter mais, role a lista de membros para carregar mais usuários.",
                        three: "No entanto, amigos sempre serão exibidos, independentemente do status deles."
                    }
                },
                member: {
                    title: "Membros do Cargo",
                    noMembers: "Parece que não foram encontrados membros online em cache com esse cargo. Tente rolar sua lista de membros para colocar mais usuários no cache!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Compartilha tela instantaneamente ao entrar em um canal de voz, com suporte para fontes de desktop, janelas e dispositivos de entrada de vídeo (câmeras, placas de captura)",
            modal: {
                linux: {
                    title: "Para Linux",
                    body: "No Wayland, apenas abre a seleção de compartilhamento de tela",
                    bodyTwo: "No X11, pode ou não funcionar :shrug:"
                },
                videoDevices: {
                    title: "Dispositivos de Entrada de Vídeo",
                    body: "Suporta câmeras e placas de captura (como Elgato HD60X) quando ativado nas configurações"
                },
                regardingSound: {
                    title: "Sobre Configurações de Som e Pré-visualização",
                    body: "Usamos as configurações definidas e usadas pelo Discord para decidir se a prévia da transmissão e o som devem ser ativados ou não"
                }
            },
            option: {
                streamMedia: {
                    label: "Fonte de mídia para transmitir",
                    description: "Redefine para a tela principal se não for encontrada",
                    loading: "Carregando fontes de mídia...",
                    none: "Nenhuma fonte de mídia encontrada",
                    placeholder: "Selecione uma fonte de mídia para transmitir"
                },
                includeVideoDevices: {
                    label: "Incluir Dispositivos de Vídeo",
                    description: "Incluir dispositivos de entrada de vídeo (câmeras, placas de captura) na lista de fontes"
                },
                autoMute: {
                    label: "Silenciamento Automático",
                    description: "Silencia automaticamente seu microfone ao entrar em um canal de voz"
                },
                autoDeafen: {
                    label: "Ensurdecimento Automático",
                    description: "Ensordece automaticamente ao entrar em um canal de voz (também silencia seu microfone)"
                },
                instantScreenshare: {
                    label: "Compartilhamento Instantâneo",
                    description: "Ativa o recurso de compartilhamento de tela automático"
                },
                keybindScreenshare: {
                    label: "Atalho de Compartilhamento",
                    description: "Compartilhar tela via atalho nas configurações de atalhos do Discord"
                },
                focusDiscord: {
                    label: "Focar Discord",
                    description: "Apenas iniciar o compartilhamento por atalho quando o Discord estiver em foco"
                },
                toolboxManagement: {
                    label: "Gerenciamento na Toolbox",
                    description: "Ativar/Desativar Compartilhamento de Tela Instantâneo"
                }
            },
            toolbox: {
                label: "Compartilhamento Instantâneo",
                toast: "Compartilhamento Instantâneo {{state}}",
                enabled: "Ativado",
                disabled: "Desativado"
            },
            toast: {
                instantScreenshareDisabled: "Compartilhamento de tela instantâneo {{disabled}}"
            },
            text: {
                instantScreenshare: "Instant Screenshare"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Criptografe suas mensagens de uma forma não suspeita!",
            option: {
                savedPasswords: {
                    label: "Senhas Salvas",
                    description: "Senhas salvas (separadas por vírgula)"
                }
            },
            button: {
                encrypt: "Criptografar Mensagem",
                decrypt: "Descriptografar Mensagem",
                hidden: "Indicador de Mensagem Oculta (InvisibleChat)"
            },
            tooltip: {
                hidden: "Esta mensagem contém uma mensagem oculta! (InvisibleChat)"
            },
            embed: {
                title: "Mensagem Descriptografada",
                footer: "Enviado com InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Criptografar Mensagem",
                    secret: "Segredo",
                    cover: "Capa (2 ou mais palavras!!)",
                    password: "Senha",
                    dontUseCover: "Não usar uma capa",
                    send: "Enviar",
                    cancel: "Cancelar"
                },
                decrypt: {
                    title: "Descriptografar Mensagem",
                    with: "Mensagem com criptografia",
                    password: "Senha",
                    decrypt: "Descriptografar",
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
                    forever: "Nunca expirar"
                },
                maxUses: {
                    label: "Máximo de Usos",
                    description: "Número máximo de usos padrão para convites de servidor",
                    unlimited: "Ilimitado",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Membro Temporário",
                    description: "Membro temporário padrão para convites de servidor"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Torna as cores dos nomes de usuário no chat únicas, como em clientes IRC",
            option: {
                lightness: {
                    label: "Luminosidade",
                    description: "Luminosidade, em %. Altere se as cores estiverem muito claras ou muito escuras"
                },
                memberListColors: {
                    label: "Cores da Lista de Membros",
                    description: "Substitui as cores dos cargos na lista de membros"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Aplicar Cor Apenas a Usuários Sem Cor",
                    description: "Aplica cores apenas a usuários que não possuem uma cor pré-definida"
                },
                applyColorOnlyInDms: {
                    label: "Aplicar Cor Apenas em DMs",
                    description: "Aplica cores apenas em mensagens diretas; não aplica em servidores."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Salva localmente todas as pessoas com quem você se comunicou (incluindo servidores), em caso de perda",
            section: {
                description: "Fornece uma lista de usuários que você mencionou ou respondeu, ou aqueles que possuem servidores aos quais você pertence (dono do servidor*), ou são membros do seu servidor",
                empty: "Está vazio no momento.",
                tooltip: "{{user}}, atualizado em {{updatedAtContent}}",
                owner: "Dono do Servidor",
                iRememberYou: "I Remember You"
            },
            context: {
                user: "Opções de Usuário",
                copy: "Copiar ID do Usuário",
                copyToast: "ID do usuário copiado para a área de transferência",
                view: "Ver Perfil"
            },
            modal: {
                title: "Editor",
                filter: "Filtrar por tag, nome de usuário, ID",
                button: {
                    validate: "Validar e Salvar",
                    cancel: "Cancelar",
                    openEditor: "Abrir Editor",
                    resetData: "Redefinir Armazenamento",
                    sure: "Tem certeza?"
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
            description: "Adiciona opções no menu de contexto para pular para o início ou para o final de um canal/DM",
            context: {
                top: "Pular para a Primeira Mensagem",
                bottom: "Pular para a Última Mensagem",
                noMessages: "Nenhuma mensagem encontrada deste usuário neste canal.",
                searchFailed: "Falha ao pesquisar por mensagens."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Tenta navegar para o canal em que você estava antes de trocar de conta ou carregar o Discord."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Adiciona efeitos sonoros do OperaGX ou osu! ao digitar no seu teclado.",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume dos sons do teclado"
                },
                soundPack: {
                    label: "Pacote de Som",
                    description: "Pacote de som a ser usado para os sons do teclado",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Envia uma notificação se uma mensagem corresponder a certas palavras-chave ou regexes",
            idHolder: "ID",
            keywordEntry: "Entrada de Palavra-chave",
            regexHolder: "exemplo|regex",
            ignoreCase: "Ignorar Diferença entre Maiúsculas/Minúsculas",
            whiteblackLabel: "Lista de permissões/Lista de bloqueio",
            tab: {
                title: "Palavras-chave",
                clearAll: "Limpar Tudo"
            },
            button: {
                addId: "Adicionar ID",
                addKeyword: "Adicionar Entrada de Palavra-chave"
            },
            listTypeSelector: {
                blacklist: "Lista de bloqueio",
                whitelist: "Lista de permissões",
                placeholder: "Selecione um tipo de lista"
            },
            option: {
                ignoreBots: {
                    label: "Ignorar Bots",
                    description: "Ignorar mensagens de bots"
                },
                amountToKeep: {
                    label: "Quantidade para Manter",
                    description: "Quantidade de mensagens a serem mantidas no registro"
                },
                keywords: {
                    label: "Palavras-chave",
                    description: "Gerenciar palavras-chave"
                }
            },
            text: {
                keywordEntryI1: "Entrada de palavra-chave {{i_1}}",
                listPriorityAdvanced: "Prioridade das listas (avançado)",
                whichListToPrioritize: "Qual lista priorizar caso uma mensagem acione ambas as listas",
                ifYouAreNot: "Se não tiver certeza, na maioria dos casos costuma ficar em Lista negra"
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Adiciona um indicador de última vez online abaixo dos nomes de usuário na sua lista de DMs e na lista de membros de servidores e grupos de DM",
            unit: {
                d: "dia",
                h: "hora",
                m: "minuto"
            },
            online: "Online há {{formattedTime}}"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Pequeno plugin para rich presence do ListenBrainz",
            about: {
                title: "Sobre a API MusicBrainz",
                description: "A API MusicBrainz não requer uma chave de API, mas requer uma {{link}}. Para a maioria, um endereço de e-mail deve bastar.",
                userAgent: "string de user-agent significativa"
            },
            option: {
                username: {
                    label: "Nome de Usuário",
                    description: "Nome de usuário do ListenBrainz"
                },
                mbContact: {
                    label: "Contato MB",
                    description: "Contato do ListenBrainz"
                },
                shareUsername: {
                    label: "Compartilhar Nome de Usuário",
                    description: "Mostrar link para o perfil do ListenBrainz (pode ser visível apenas para outros usuários)"
                },
                shareSong: {
                    label: "Compartilhar Música",
                    description: "Mostrar link para a música atual no ListenBrainz (pode ser visível apenas para outros usuários)"
                },
                hideWithSpotify: {
                    label: "Ocultar com Spotify",
                    description: "Ocultar a presença do ListenBrainz se o Spotify estiver rodando"
                },
                hideWithActivity: {
                    label: "Ocultar com Atividade",
                    description: "Ocultar a presença do ListenBrainz se você tiver qualquer outra presença ativa"
                },
                useTimeBar: {
                    label: "Usar Barra de Tempo",
                    description: "Usa a duração da faixa para exibir uma barra de tempo (deve estar usando o status 'Ouvindo')"
                },
                statusName: {
                    label: "Nome do Status",
                    description: "Texto de status personalizado"
                },
                nameFormat: {
                    label: "Formato do Nome",
                    description: "Mostrar nome da música e artista no nome do status",
                    custom: "Usar nome de status personalizado",
                    artistSong: "Usar formato 'artista - música'",
                    songArtist: "Usar formato 'música - artista'",
                    artistOnly: "Usar apenas nome do artista",
                    songOnly: "Usar apenas nome da música",
                    albumName: "Usar nome do álbum (volta para o texto personalizado se a música não tiver álbum)"
                },
                useListeningStatus: {
                    label: "Usar Status 'Ouvindo'",
                    description: "Mostra o status 'Ouvindo' em vez de 'Jogando'"
                },
                missingArt: {
                    label: "Arte Ausente",
                    description: "Quando o álbum ou a arte do álbum estiverem ausentes",
                    listenbrainzLogo: "Usar o logotipo grande do ListenBrainz",
                    generic: "Usar substituto genérico"
                },
                showAlbumCover: {
                    label: "Mostrar capa do álbum",
                    description: "Mostrar capa do álbum. Desativar isso exibirá um espaço reservado. Útil se suas músicas tiverem capas inadequada"
                },
                useLogo: {
                    label: "Usar Logotipo",
                    description: "Mostra o logotipo do ListenBrainz na arte do álbum"
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
                    description: "Este plugin também deve ser aplicado durante eventos com frases temáticas especiais? (ex: Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Ativar Frases Predefinidas do Plugin",
                    description: "Ativar as frases predefinidas por este plugin"
                },
                enableDiscordPresetQuotes: {
                    label: "Ativar Frases Predefinidas do Discord",
                    description: "Ativar as frases padrão do Discord (incluindo frases de eventos, durante os mesmos)"
                },
                additionalQuotes: {
                    label: "Frases Adicionais",
                    description: "Frases personalizadas adicionais para possivelmente aparecerem, separadas pelo delimitador abaixo"
                },
                additionalQuotesDelimiter: {
                    label: "Delimitador de Frases Adicionais",
                    description: "Delimitador para frases adicionais"
                }
            },
            text: {
                allQuotesDisabled: "Você realmente desativou todas as frases de carregamento? Que palhaço..."
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "Permite fazer login em outro dispositivo escaneando um código QR de login, como no celular!",
            option: {
                scanQr: {
                    label: "Escanear Código QR",
                    description: "Escanear um código QR",
                    notEnabled: "Ative o plugin e reinicie o cliente para escanear um código QR de login"
                }
            },
            neverScan: "Nunca escaneie um código QR de login de outro usuário ou aplicação.",
            hold: "Segure para confirmar o login",
            scanning: "Escaneando...",
            stopScanning: "Parar Escaneamento",
            usingWebcam: "Escanear usando webcam",
            dragDrop: "Arraste e solte uma imagem aqui, ou clique para selecionar uma imagem",
            orPaste: "Ou cole uma imagem da sua área de transferência!",
            verifyLogin: "Verificar login",
            text: {
                scanQrCode: "Escanear código QR"
            }
        },
        markdownTables: {
            name: "MarkdownTables",
            description: "Renderiza tabelas markdown no estilo do GitHub nas mensagens do Discord.",
            toolbar: {
                label: "Visualização de tabela markdown",
                table: "Tabela",
                raw: "Bruto"
            },
            option: {
                hideToggle: {
                    label: "Ocultar alternador",
                    description: "Oculta o alternador Tabela/Bruto e sempre mostra as tabelas renderizadas."
                }
            }
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Permite alterar a velocidade de reprodução (padrão) de mídias incorporadas",
            playbackSpeed: "Velocidade de Reprodução",
            context: {
                label: "Controle de velocidade de reprodução"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Velocidade Padrão de Mensagem de Voz",
                    description: "Mensagens de voz"
                },
                defaultVideoSpeed: {
                    label: "Velocidade Padrão de Vídeo",
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
            description: "Mostra o número de membros online, total de membros e usuários em canais de voz do servidor - na lista de membros e na dica.",
            option: {
                toolTip: {
                    label: "Dica (Tooltip)",
                    description: "Mostrar contagem de membros na dica do servidor"
                },
                memberList: {
                    label: "Lista de Membros",
                    description: "Mostrar contagem de membros no cabeçalho da lista de membros"
                },
                voiceActivity: {
                    label: "Atividade de Voz",
                    description: "Mostrar número de usuários em canais de voz"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} online neste canal",
            totalMembers: "{{formattedTotalCount}} membros totais no servidor",
            totalVoice: "{{formattedVoiceCount}} membros em voz",
            tooltip: {
                total: "{{count}} membros no total no servidor"
            }
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Mostra avatares de usuários e ícones de cargos dentro de menções",
            option: {
                showAtSymbol: {
                    label: "Mostrar Símbolo @",
                    description: "Se o símbolo @ deve ser exibido nas menções de usuários"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Adiciona um botão na barra de chat para miar no chat",
            button: {
                meow: "Miau"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Mescla mensagens enviadas dentro de um período de tempo com sua mensagem enviada anterior, se ninguém mais enviar uma mensagem antes de você.",
            option: {
                timePeriod: {
                    label: "Período de Tempo",
                    description: "A duração dos surtos (em segundos)."
                },
                shouldMergeWithAttachment: {
                    label: "Mesclar com Anexos",
                    description: "A mensagem deve ser mesclada se a última mensagem tiver um anexo?"
                },
                useSpace: {
                    label: "Usar Espaço",
                    description: "Se deve adicionar um espaço entre as mensagens ao mesclar em vez de novas linhas."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Segure Backspace e clique para excluir, clique duplo para editar/responder",
            option: {
                singleClickAction: {
                    label: "Ação de Clique Único",
                    description: "Ação ao clicar uma vez (suas mensagens)"
                },
                singleClickModifier: {
                    label: "Modificador de Clique Único",
                    description: "Modificador necessário para a ação de clique único (suas mensagens)"
                },
                singleClickOthersAction: {
                    label: "Ação de Clique Único (Outros)",
                    description: "Ação ao clicar uma vez (mensagens de outros)"
                },
                singleClickOthersModifier: {
                    label: "Modificador de Clique Único (Outros)",
                    description: "Modificador necessário para a ação de clique único (mensagens de outros)"
                },
                doubleClickAction: {
                    label: "Ação de Clique Duplo",
                    description: "Ação ao clicar duas vezes (suas mensagens)"
                },
                doubleClickOthersAction: {
                    label: "Ação de Clique Duplo (Outros)",
                    description: "Ação ao clicar duas vezes (mensagens de outros)"
                },
                doubleClickModifier: {
                    label: "Modificador de Clique Duplo",
                    description: "Modificador necessário para a ação de clique duplo"
                },
                tripleClickAction: {
                    label: "Ação de Clique Triplo",
                    description: "Ação ao clicar três vezes"
                },
                tripleClickModifier: {
                    label: "Modificador de Clique Triplo",
                    description: "Modificador necessário para a ação de clique triplo"
                },
                reactEmoji: {
                    label: "Emoji de Reação",
                    description: "Emoji a ser usado para ações de reação"
                },
                addAdditionalReacts: {
                    label: "Adicionar Reações Adicionais",
                    description: "Também adiciona emojis de reação configurados adicionais"
                },
                additionalReactEmojis: {
                    label: "Emojis de Reação Adicionais",
                    description: "Emojis adicionais a serem adicionados ao usar a ação Reagir (separados por vírgula/nova linha, máx {{count}})"
                },
                disableInDms: {
                    label: "Desativar em DMs",
                    description: "Desativa todas as ações de clique em mensagens diretas"
                },
                disableInSystemDms: {
                    label: "Desativar em DMs de Sistema",
                    description: "Desativa todas as ações de clique em DMs de sistema"
                },
                clickTimeout: {
                    label: "Tempo Limite de Clique",
                    description: "Tempo limite para distinguir cliques duplos/triplos (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Limite de Retenção de Clique Duplo",
                    description: "Tempo máximo de retenção para ações de clique duplo (ms). Segurar por mais tempo permite a seleção de texto"
                },
                deferDoubleClickForTriple: {
                    label: "Adiar Clique Duplo para Triplo",
                    description: "Atrasa o clique duplo para permitir ações de clique triplo (desativa o clique triplo quando desligado)"
                },
                selectionHoldTimeout: {
                    label: "Tempo Limite de Retenção de Seleção",
                    description: "Tempo limite para permitir a seleção de texto (ms)"
                },
                quoteWithReply: {
                    label: "Citar com Resposta",
                    description: "Ao citar, também responde à mensagem"
                },
                useSelectionForQuote: {
                    label: "Usar Seleção para Citação",
                    description: "Ao citar, usa o texto selecionado, se disponível"
                }
            },
            actions: {
                none: "Nenhuma",
                delete: "Excluir",
                copyLink: "Copiar Link",
                copyID: "Copiar ID",
                copyContent: "Copiar Conteúdo",
                copyUserID: "Copiar ID do Usuário",
                edit: "Editar",
                reply: "Responder",
                react: "Reagir",
                openThread: "Abrir Tópico",
                openTab: "Abrir Aba",
                quote: "Citar",
                pin: "Fixar"
            },
            missingPermissions: {
                react: "Não é possível reagir: Falta de permissões",
                pin: "Não é possível fixar: Falta de permissões",
            },
            cannotQuote: "Não é possível citar este tipo de mensagem",
            copy: {
                messageId: "ID da mensagem copiado!",
                messageContent: "Conteúdo da mensagem copiado!",
                userId: "ID do usuário copiado!"
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
                    description: "Como renderizar as cores",
                    textColor: "Cor do texto",
                    block: "Bloco próximo",
                    backgroundColor: "Cor de fundo"
                },
                enableShortHexCodes: {
                    label: "Ativar Códigos Hex Curtos",
                    description: "Ativar códigos hexadecimais de 3 caracteres como #39f"
                },
                blockView: {
                    label: "Tipo de Visualização de Bloco",
                    description: "Como exibir blocos de cores",
                    right: "Lado direito",
                    left: "Lado esquerdo",
                    both: "Ambos os lados"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Mostra quanto tempo levou para buscar mensagens no canal atual",
            option: {
                showIcon: {
                    label: "Mostrar Ícone",
                    description: "Mostra o ícone de tempo de busca na barra de mensagens"
                },
                showMs: {
                    label: "Mostrar Milissegundos",
                    description: "Mostra milissegundos no tempo"
                },
                iconColor: {
                    label: "Cor do Ícone",
                    description: "Cor do ícone (valor de cor CSS)"
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
            description: "Exibe um indicador para mensagens que levaram ≥n segundos para serem enviadas",
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
            oldKotlinDetected: "Suspeita-se que o usuário esteja em um cliente Discord Android antigo.",
            ahead: "O relógio deste usuário está {{delta}} adiantado.",
            delay: "Esta mensagem foi enviada com um atraso de {{delta}}.",
            delayedMessage: "Mensagem Atrasada",
            oldAndroidClient: "Cliente Discord Android antigo",
            option: {
                latency: {
                    label: "Latência",
                    description: "Limite em segundos para o indicador de latência"
                },
                detectDiscordKotlin: {
                    label: "Detectar Discord Kotlin",
                    description: "Detectar clientes Discord Android antigos"
                },
                showMillis: {
                    label: "Mostrar Milissegundos",
                    description: "Mostrar milissegundos"
                },
                ignoreSelf: {
                    label: "Ignorar Próprio",
                    description: "Não adicionar o indicador às suas próprias mensagens"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Adiciona uma prévia às mensagens que contêm um link para outra mensagem",
            option: {
                messageBackgroundColor: {
                    label: "Cor de Fundo da Mensagem",
                    description: "Cor de fundo para mensagens em embeds ricos"
                },
                automodEmbeds: {
                    label: "Embeds do Automod",
                    description: "Usar embeds do automod em vez de embeds ricos (menores, mas com menos info)",
                    always: "Sempre usar embeds do automod",
                    prefer: "Preferir embeds do automod, mas usar embeds ricos se algum conteúdo não puder ser exibido",
                    never: "Nunca usar embeds do automod"
                },
                listMode: {
                    label: "Modo de Lista",
                    description: "Se deve usar a lista de IDs como blacklist ou whitelist",
                    blacklist: "Lista de bloqueio",
                    whitelist: "Lista de permissões"
                },
                idList: {
                    label: "Lista de IDs",
                    description: "IDs de servidores/canais/usuários para colocar na blacklist ou whitelist (separados por vírgula)"
                },
                clearMessageCache: {
                    label: "Limpar Cache de Mensagens",
                    description: "Limpa o cache de mensagens vinculadas"
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
            description: "Adiciona uma dica com uma prévia da mensagem ao passar o mouse sobre links de mensagens, respostas e mensagens encaminhadas.",
            loading: "Carregando...",
            option: {
                onLink: {
                    label: "No Link",
                    description: "Mostra a dica ao passar o mouse sobre links de mensagens"
                },
                onReply: {
                    label: "Na Resposta",
                    description: "Mostra a dica ao passar o mouse sobre respostas de mensagens"
                },
                onForward: {
                    label: "No Encaminhamento",
                    description: "Mostra a dica ao passar o mouse sobre mensagens encaminhadas"
                },
                display: {
                    label: "Exibição",
                    description: "Estilo de exibição",
                    auto: "Igual à mensagem",
                    compact: "Compacto",
                    cozy: "Confortável (Cozy)"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Registra temporariamente mensagens excluídas e editadas.",
            removeMessage: "Limpar histórico da mensagem",
            removeMessageTemporary: "Remover Mensagem (Temporário)",
            clearMessageLog: "Limpar Log de Mensagens",
            showDiff: "Mostrar diferenças",
            modal: {
                edit: {
                    title: "Histórico de Edição da Mensagem",
                    tooltip: "Este estado de edição não foi registrado, portanto não pode ser exibido."
                }
            },
            option: {
                deleteStyle: {
                    label: "Estilo de Exclusão",
                    description: "O estilo das mensagens excluídas",
                    text: "Texto vermelho",
                    overlay: "Sobreposição vermelha"
                },
                logDeletes: {
                    label: "Registrar Exclusões",
                    description: "Se deve registrar mensagens excluídas"
                },
                collapseDeleted: {
                    label: "Recolher Excluídas",
                    description: "Se deve recolher mensagens excluídas, similar a mensagens bloqueadas"
                },
                logEdits: {
                    label: "Registrar Edições",
                    description: "Se deve registrar mensagens editadas"
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
                    description: "Se deve ignorar suas próprias mensagens"
                },
                ignoreSelfEdits: {
                    label: "Ignorar edições próprias",
                    description: "Se deve ignorar as edições feitas por você mesmo"
                },
                ignoreUsers: {
                    label: "Ignorar Usuários",
                    description: "Lista de IDs de usuários a serem ignorados, separados por vírgula"
                },
                ignoreChannels: {
                    label: "Ignorar Canais",
                    description: "Lista de IDs de canais a serem ignorados, separados por vírgula"
                },
                ignoreGuilds: {
                    label: "Ignorar Servidores",
                    description: "Lista de IDs de servidores a serem ignorados, separados por vírgula"
                },
                showEditDiffs: {
                    label: "Mostrar Diferenças de Edição",
                    description: "Mostra as diferenças visuais entre as versões da mensagem editada"
                },
                separatedDiffs: {
                    label: "Diferenças Separadas",
                    description: "Separa as adições e remoções nas diferenças para uma leitura mais fácil"
                },
                logDeletedAttachments: {
                    description: "Se deve registrar anexos excluídos",
                    label: "Registrar anexos excluídos"
                }
            },
            text: {
                clearHistory: "Limpar histórico",
                toggleDeletedHighlight: "Alternar destaque de excluídas",
                enableDiffView: "Ativar visualização de diferenças",
                disableDiffView: "Desativar visualização de diferenças",
                noDeletedMessages: "Nenhuma mensagem excluída",
                deletedMessageSuffix: " mensagem excluída",
                deletedMessagesSuffix: " mensagens excluídas"
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Melhora o plugin MessageLogger com recursos adicionais.",
            updateImageCacheDir: "Diretório de cache de imagem atualizado com sucesso.",
            updateLogsDir: "Diretório de logs atualizado com sucesso.",
            failedUpdate: "Falha ao atualizar diretório.",
            blacklist: "Lista de bloqueio",
            whitelist: "Lista de permissões",
            failedToRemove: "Falha ao remover mensagem",
            successfullyImported: "Logs importados com sucesso",
            errorImportingLogs: "Erro ao importar logs. Verifique o console para mais informações",
            importing: "Importando...",
            importLogs: "Importar Logs",
            exporting: "Exportando...",
            exportLogs: "Exportar Logs",
            alert: {
                clearLogs: {
                    title: "Limpar Logs",
                    body: "Tem certeza de que deseja limpar todos os logs?",
                    confirmText: "Limpar",
                    cancel: "Cancelar"
                },
                clearVisibleLogs: {
                    title: "Limpar Logs Visíveis",
                    body: "Tem certeza de que deseja limpar {{messages}} logs?",
                    confirmText: "Limpar",
                    cancel: "Cancelar"
                },
                cleared: "Banco de dados e cache de logs de mensagens limpos."
            },
            context: {
                title: "Message Logger",
                jumpToMessage: "Pular para a Mensagem",
                openUserProfile: "Abrir Perfil do Usuário",
                copyContent: "Copiar Conteúdo",
                copyUserId: "Copiar ID do Usuário",
                copyMessageId: "Copiar ID da Mensagem",
                copyChannelId: "Copiar ID do Canal",
                copyServerId: "Copiar ID do Servidor",
                deleteLog: "Excluir Log",
                fromUsernameDm: "DMs de {{username}}",
                fromGroupDm: "DM de Grupo {{channelName}}",
                fromServerChannel: "{{channelName}} em {{serverName}}",
                moveTypeTo: "Mover {{type}} para {{destination}}",
                removeTypeFrom: "Remover {{type}} de {{list}}",
                openLogsFor: "Abrir Logs de {{name}}",
                openLogs: "Abrir Logs",
                removeMessage: "Remover Mensagem (Permanente)",
                removeMessageHistory: "Remover Histórico da Mensagem (Permanente)",
                deleteMessageHide: "Excluir Mensagem (Ocultar de Message Loggers)",
                addServerToBlacklist: "Adicionar Servidor à Blacklist",
                addServerToWhitelist: "Adicionar Servidor à Whitelist",
                removeServerFromBlacklist: "Remover Servidor da Blacklist",
                removeServerFromWhitelist: "Remover Servidor da Whitelist",
                moveServerToBlacklist: "Mover Servidor para a Blacklist",
                moveServerToWhitelist: "Mover Servidor para a Whitelist",
                addUserToBlacklist: "Adicionar Usuário à Blacklist",
                addUserToWhitelist: "Adicionar Usuário à Whitelist",
                removeUserFromBlacklist: "Remover Usuário da Blacklist",
                removeUserFromWhitelist: "Remover Usuário da Whitelist",
                moveUserToBlacklist: "Mover Usuário para a Blacklist",
                moveUserToWhitelist: "Mover Usuário para a Whitelist",
                addChannelToBlacklist: "Adicionar Canal à Blacklist",
                addChannelToWhitelist: "Adicionar Canal à Whitelist",
                removeChannelFromBlacklist: "Remover Canal da Blacklist",
                removeChannelFromWhitelist: "Remover Canal da Whitelist",
                moveChannelToBlacklist: "Mover Canal para a Blacklist",
                moveChannelToWhitelist: "Mover Canal para a Whitelist"
            },
            type: {
                server: "Servidor",
                user: "Usuário",
                channel: "Canal"
            },
            button: {
                chooseFolder: "Escolher Pasta",
                browse: "Navegar",
                clearLogs: "Limpar Todos os Logs",
                clearVisibleLogs: "Limpar Logs Visíveis",
                sortOldest: "Ordenar do Mais Antigo",
                sortNewest: "Ordenar do Mais Novo",
                loadMore: "Carregar Mais",
                noResults: "Nenhum resultado em {{tab}}",
                tryOtherTabs: "Tente as abas {{nextTab}} ou {{lastTab}}",
                importLogs: "Importar Logs"
            },
            modal: {
                title: "Filtrar Mensagens",
                deleted: "Excluídas",
                edited: "Editadas",
                ghostPing: "Ghost Pings",
                empty: "Vazio, hein",
                importLogs: "O ML Enhanced agora armazena logs no indexeddb. Você precisa importar seus logs antigos do diretório de logs. A importação não sobrescreverá logs existentes"
            },
            clear: {
                title: "Limpar Logs",
                description: "Tem certeza de que deseja limpar todos os logs?",
                confirm: "Limpar",
                cancel: "Cancelar"
            },
            option: {
                saveMessages: {
                    label: "Salvar Mensagens",
                    description: "Se deve salvar as mensagens excluídas e editadas."
                },
                saveImages: {
                    label: "Salvar Imagens",
                    description: "Salva anexos excluídos."
                },
                sortNewest: {
                    label: "Ordenar do Mais Novo Primeiro",
                    description: "Ordena os logs pelo mais recente."
                },
                cacheMessagesFromServers: {
                    label: "Cache de Mensagens de Servidores",
                    description: "Normalmente, o message logger apenas registra de IDs na whitelist e DMs. Ativar isso significa que ele também registrará mensagens de todos os servidores. Note que isso pode fazer o cache exceder o limite, resultando na perda de algumas mensagens. Se você estiver em muitos servidores, isso pode aumentar significativamente a quantidade de mensagens registradas, o que pode resultar em um registro de mensagens muito grande e na inclusão de mensagens irrelevantes."
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
                    description: "Se deve ignorar suas próprias mensagens"
                },
                ignoreMutedGuilds: {
                    label: "Ignorar Servidores Mutados",
                    description: "Mensagens em servidores mutados não serão registradas. Usuários/canais na whitelist em servidores mutados ainda serão registrados."
                },
                ignoreMutedCategories: {
                    label: "Ignorar Categorias Mutadas",
                    description: "Mensagens em canais pertencentes a categorias mutadas não serão registradas. Usuários/canais na whitelist em servidores mutados ainda serão registrados."
                },
                ignoreMutedChannels: {
                    label: "Ignorar Canais Mutados",
                    description: "Mensagens em canais mutados não serão registradas. Usuários/canais na whitelist em servidores mutados ainda serão registrados."
                },
                alwaysLogDirectMessages: {
                    label: "Sempre Registrar Mensagens Diretas",
                    description: "Sempre registrar DMs"
                },
                alwaysLogCurrentChannel: {
                    label: "Sempre Registrar Canal Atual",
                    description: "Sempre registrar o canal selecionado no momento. Canais/usuários na blacklist ainda serão ignorados."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Remover Log Permanentemente por Padrão",
                    description: "O botão base de remover log do MessageLogger excluirá os logs permanentemente"
                },
                hideMessageFromMessageLoggers: {
                    label: "Ocultar Mensagem de Message Loggers",
                    description: "Quando ativado, um botão no menu de contexto será adicionado às mensagens para permitir que você as exclua sem que sejam registradas por outros loggers. Pode não ser seguro, use por sua conta e risco."
                },
                showLogsButton: {
                    label: "Mostrar Botão de Logs",
                    description: "Alternar para mostrar ou não a opção na toolbox"
                },
                showWhereMessageIsFrom: {
                    label: "Mostrar Origem da Mensagem",
                    description: "Mostra o nome do canal/autor e o nome do servidor"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Mensagens Exibidas de uma Vez nos Logs",
                    description: "Número de mensagens a serem exibidas de uma vez nos logs e número de mensagens a serem carregadas ao clicar em carregar mais."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Mensagem Substituta ao Ocultar de Loggers",
                    description: "O conteúdo que substituirá a mensagem ao usar o recurso de ocultar mensagem de outros loggers."
                },
                messageLimit: {
                    label: "Limite de Mensagens",
                    description: "Número máximo de mensagens a serem salvas. Mensagens mais antigas são excluídas ao atingir o limite. 0 significa sem limite."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Limite de Tamanho de Anexo (MB)",
                    description: "Tamanho máximo de um anexo em megabytes para ser salvo. Anexos maiores que isso não serão salvos."
                },
                attachmentFileExtensions: {
                    label: "Extensões de Arquivo de Anexo",
                    description: "Lista de extensões de arquivo separadas por vírgula a serem salvas. Anexos com extensões que não estão nesta lista não serão salvos. Deixe vazio para salvar todos os anexos."
                },
                cacheLimit: {
                    label: "Limite de Cache",
                    description: "Número máximo de mensagens a serem mantidas no cache. Mensagens mais antigas são excluídas ao atingir o limite."
                },
                timeBasedCleanupMinutes: {
                    label: "Minutos para Limpeza por Tempo",
                    description: "Intervalo em minutos para realizar a limpeza baseada em tempo de mensagens anteriores ao limite."
                },
                preserveCurrentChannel: {
                    label: "Preservar Canal Atual",
                    description: "Quando ativado, as mensagens no seu canal selecionado no momento não são afetadas pela limpeza baseada em tempo."
                },
                whitelistedIds: {
                    label: "IDs na Whitelist",
                    description: "IDs de servidor, canal ou usuário a serem sempre exibidos no registro de mensagens."
                },
                blacklistedIds: {
                    label: "IDs na Blacklist",
                    description: "IDs de servidor, canal ou usuário que nunca serão exibidos no registro de mensagens."
                },
                imageCacheDir: {
                    label: "Diretório de Cache de Imagem",
                    description: "Selecione o diretório para imagens salvas"
                },
                logsDir: {
                    label: "Diretório de Logs",
                    description: "Selecione o diretório de logs"
                },
                importLogs: {
                    label: "Importar Logs",
                    description: "Importar Logs de um Arquivo"
                },
                exportLogs: {
                    label: "Exportar Logs",
                    description: "Exportar Logs do IndexedDB"
                },
                clearLogsOnRestart: {
                    label: "Limpar logs ao reiniciar",
                    description: "Limpa os logs quando o Discord reinicia."
                },
                openLogs: {
                    label: "Abrir Logs",
                    description: "Abrir Logs"
                },
                openImageCacheFolder: {
                    label: "Abrir Pasta de Cache de Imagem",
                    description: "Abre o diretório de cache de imagens"
                },
                clearLogs: {
                    label: "Limpar Logs",
                    description: "Limpar Logs",
                    title: "Limpar logs",
                    body: "Tem certeza de que deseja limpar todos os logs?",
                    confirmText: "Limpar",
                    cancel: "Cancelar"
                }
            },
            toast: {
                clearedLogs: "Registros limpos",
                failedToClearLogs: "Falha ao limpar registros",
                failedToRemoveMessage: "Falha ao remover a mensagem. Verifique o console para detalhes.",
                noMessagesFoundIn: "Nenhuma mensagem encontrada no arquivo de log",
                successfullyImportedCountLogs: "{{count}} registros importados com sucesso",
                successfullyExportedLogs: "Registros exportados com sucesso",
                successfullyExportedCountLogs: "{{count}} registros exportados com sucesso",
                errorExportingLogsCheck: "Erro ao exportar registros. Verifique o console para mais informações"
            },
            text: {
                jsonFile: "Arquivo JSON",
                clearLogs: "Limpar registros",
                clearingLogs: "Limpando registros...",
                messageLogger: "Message Logger",
                importLogs: "Importar registros",
                logs: "Registros",
                loadingTabLogs: "Carregando registros: {{tab}}..."
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Receba alertas (toasts) quando usuários escolhidos enviarem uma mensagem",
            dm: "DMs deles",
            option: {
                users: {
                    label: "Usuários",
                    description: "Lista de IDs de usuários (separados por vírgula) para receber alertas de mensagem",
                    invalidId: "{{id}} não é um ID de usuário válido"
                }
            },
            notification: {
                title: "{{username}} enviou uma mensagem",
                body: "Clique para pular para {{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Permite salvar mensagens e usá-las com um comando simples.",
            notExist: "A tag **{{tagname}}** não existe mais! Por favor, recarregue seu Discord para corrigir :)",
            alreadyExist: "Uma tag com o nome **{{tagname}}** já existe!",
            sentTag: "A tag **{{tagname}}** foi enviada!",
            successCreate: "A tag **{{tagname}}** foi criada!",
            allTags: "Todas as suas tags:",
            noTags: "Ops! Não há tags ainda, use /tag create para criar uma!",
            noDeleteTag: "A tag **{{tagname}}** não existe, então não pode ser excluída!",
            successDelete: "Tag **{{name}}** excluída com sucesso!",
            tagPreview: "Uma tag com o nome **{{name}}** não existe!",
            option: {
                clyde: {
                    label: "Mensagem do Clyde ao enviar",
                    description: "Se ativado, o Clyde enviará uma mensagem efêmera quando uma tag for usada."
                },
                tagsList: {
                    label: "Lista de Tags",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Gerencie todas as suas tags",
                    option: {
                        create: {
                            description: "Criar uma nova tag",
                            name: "O nome da tag para acionar a resposta",
                            message: "A mensagem que você enviará ao usar esta tag"
                        },
                        list: {
                            description: "Listar todas as suas tags"
                        },
                        delete: {
                            description: "Remover uma de suas tags",
                            name: "O nome da tag a ser removida"
                        },
                        preview: {
                            description: "Prévia de uma tag sem enviá-la publicamente",
                            name: "O nome da tag para prévia"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Adiciona um ícone de teste de retorno de microfone ao painel do usuário",
            button: "Teste de Retorno de Mic"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Vários ajustes no clique do botão do meio do mouse, como colagem e abertura de links.",
            option: {
                openScope: {
                    label: "Escopo de Abertura",
                    description: "Evita que o clique do meio nesses tipos de conteúdo os abra.",
                    links: "Links",
                    media: "Mídia",
                    linksAndMedia: "Links e Mídia",
                    none: "Nenhum"
                },
                pasteScope: {
                    label: "Escopo de Colagem",
                    description: "Evita que o clique do meio cole em determinadas situações.",
                    always: "Sempre Evitar Colagem com Clique do Meio",
                    focus: "Apenas Evitar Quando Área de Texto Não Tiver Foco",
                },
                pasteThreshold: {
                    label: "Limite de Colagem",
                    description: "Milissegundos até que a colagem seja ativada novamente após um clique do meio."
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
                    description: "Envia um rosto lenny"
                },
                mock: {
                    description: "mOcKaR PeSsOaS"
                },
                wordcount: {
                    description: "Conta o número de palavras em uma mensagem",
                    response: "A mensagem contém {{count}} palavras."
                },
                flipcoin: {
                    description: "Gira uma moeda e retorna cara ou coroa",
                    heads: "Cara",
                    tails: "Coroa",
                    response: "A moeda caiu em {{result}}."
                },
                ask: {
                    description: "Faça uma pergunta de sim/não e obtenha uma resposta",
                    yes: "Sim",
                    no: "Não",
                    maybe: "Talvez",
                    askAgain: "Pergunte novamente mais tarde",
                    definitelyNot: "Definitivamente não",
                    itIsCertain: "É certeza"
                },
                randomanimal: {
                    description: "Obter uma imagem aleatória de animal",
                    animal: "escolha seu animal",
                    cat: "gato",
                    dog: "cachorro",
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
                    option: "Lista de escolhas separadas por vírgula",
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
                    screen: "Tela",
                    languages: "Idiomas",
                    network: "Rede",
                    online: "Online",
                    offline: "Offline",
                    failedToFetch: "Falha ao obter informações do sistema",
                    unknown: "Desconhecido"
                },
                getuptime: {
                    description: "Obtém o tempo de atividade (uptime) do cliente",
                    response: "**Tempo de atividade do cliente**: {{uptime}} minutos"
                },
                gettime: {
                    description: "Obtém a hora atual",
                    response: "A hora atual é {{time}}"
                },
                transform: {
                    description: "Transforme seu texto com a opção especificada",
                    transformation: {
                        description: "Transformação a ser aplicada ao seu texto",
                        lowercase: "Converter texto para minúsculas",
                        uppercase: "Converter texto para maiúsculas",
                        localeLowercase: "Converter para minúsculas locais",
                        localeUppercase: "Converter para maiúsculas locais",
                        same: "Manter igual"
                    },
                    repeat: "quantas vezes repetir",
                    reverse: "se deve inverter o texto",
                    normalize: {
                        description: "Forma de normalização do texto",
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
            description: "Adiciona mais Kaomojis ao Discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Melhora os botões de reação rápida no menu de contexto da mensagem.",
            option: {
                reactionCount: {
                    label: "Contagem de Reações",
                    description: "Número de reações (0-42)"
                },
                frequentEmojis: {
                    label: "Emojis Frequentes",
                    description: "Usar emojis usados com frequência em vez de emojis favoritos"
                },
                rows: {
                    label: "Linhas",
                    description: "Linhas de reações rápidas a serem exibidas"
                },
                columns: {
                    label: "Colunas",
                    description: "Colunas de reações rápidas a serem exibidas"
                },
                compactMode: {
                    label: "Modo Compacto",
                    description: "Redimensiona os botões para 75% da escala original, enquanto aumenta o emoji interno para 125% da escala. Recomenda-se ter no mínimo 5 colunas"
                },
                scroll: {
                    label: "Rolagem",
                    description: "Ativar rolagem na lista de emojis"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Adiciona tags para webhooks e cargos moderativos (dono, admin, etc.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Este usuário é um webhook"
                },
                owner: {
                    name: "Dono",
                    description: "É o dono do servidor"
                },
                admin: {
                    name: "Admin",
                    description: "Possui a permissão de administrador"
                },
                staff: {
                    name: "Staff",
                    description: "Pode gerenciar o servidor, canais ou cargos"
                },
                mod: {
                    name: "Mod",
                    description: "Pode gerenciar mensagens ou expulsar/banir pessoas"
                },
                vcmod: {
                    name: "Mod de CV",
                    description: "Pode gerenciar chats de voz"
                },
                chatmod: {
                    name: "Mod de Chat",
                    description: "Pode gerenciar mensagens"
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
                    description: "Não mostra tags extras para bots (excluindo webhooks)"
                },
                dontShowBotTag: {
                    label: "Não mostrar tag de bot",
                    description: "Mostrar apenas tags extras para bots / Ocultar texto [APP]"
                },
                showWebhookTagFully: {
                    label: "Mostrar tag de webhook completa",
                    description: "Mostrar a tag Webhook em canais seguidos, como anúncios"
                },
                tagSettings: {
                    label: "Configurações de Tag",
                    description: "preencha-me"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Um comando de barra para traduzir de/para código morse.",
            command: {
                morse: {
                    description: "Traduzir para ou de código Morse",
                    message: "Texto para converter"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume dos 🗿🗿🗿"
                },
                quality: {
                    label: "Qualidade",
                    description: "Qualidade dos 🗿🗿🗿",
                    normal: "Normal",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Acionar Quando Desfocado",
                    description: "Aciona o 🗿 mesmo quando a janela não estiver em foco"
                },
                ignoreBots: {
                    label: "Ignorar Bots",
                    description: "Ignorar mensagens de bots"
                },
                ignoreBlocked: {
                    label: "Ignorar Usuários Bloqueados",
                    description: "Ignorar mensagens de usuários bloqueados"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Controles de Música e Letras para múltiplos serviços",
            option: {
                spotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Mostrar Controles do Spotify",
                    description: "Mostrar controles de música para o Spotify"
                },
                showSpotifyLyrics: {
                    label: "Mostrar Letras do Spotify",
                    description: "Mostrar letras para o Spotify"
                },
                useSpotifyUris: {
                    label: "Usar URIs do Spotify",
                    description: "Abrir URIs do Spotify em vez de URLs do Spotify. Funcionará apenas se você tiver o Spotify instalado."
                },
                previousButtonRestartsTrack: {
                    label: "Botão Voltar Reinicia a Faixa",
                    description: "Reinicia a faixa atual ao pressionar o botão voltar se o tempo de reprodução for >3s"
                },
                tidalSectionTitle: {
                    label: "Tidal"
                },
                showTidalControls: {
                    label: "Mostrar Controles do Tidal",
                    description: "Mostrar controles de música para o Tidal"
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
                    description: "{{app}} é necessário para estas configurações"
                },
                showYoutubeMusicControls: {
                    label: "Mostrar Controles do YouTube Music",
                    description: "Mostrar controles de música para o YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "URL da API do YouTube Music",
                    description: "A URL para o servidor da API do YouTube Music que você está usando"
                },
                hoverControls: {
                    label: "Controles ao passar o mouse",
                    description: "Mostrar controles ao passar o mouse"
                },
                showMusicNoteOnNoLyrics: {
                    label: "Mostrar Nota Musical se Não Houver Letra",
                    description: "Mostra um ícone de nota musical quando nenhuma letra for encontrada"
                },
                lyricsPosition: {
                    label: "Posição das Letras",
                    description: "Posição do painel de letras",
                    above: "Acima do(s) Player(s)",
                    below: "Abaixo do(s) Player(s)"
                },
                lyricsProvider: {
                    label: "Provedor de Letras",
                    description: "De onde as letras são buscadas",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "URL base da API de letras do Spotify",
                    description: "URL base de instância personalizada (por exemplo: http://localhost:8080)."
                },
                translateTo: {
                    label: "Traduzir Para",
                    description: "Traduzir letras para - Alterar isso limpará as traduções existentes",
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
                    label: "Provedor Substituto",
                    description: "Quando um provedor falhar, tentar outros provedores"
                },
                showFailedToasts: {
                    label: "Mostrar Alertas de Falha",
                    description: "Mostra alertas quando as letras falham ao carregar"
                },
                purgeLyricsCache: {
                    label: "Limpar Cache de Letras",
                    description: "Limpa todas as letras e traduções em cache",
                    button: "Limpar Cache",
                    cacheLyricsPurged: "Cache de letras limpo"
                },
                lyricDelay: {
                    label: "Atraso da letra"
                }
            },
            context: {
                spotify: {
                    label: "Menu de Letras do Spotify",
                    type: "Menu de {{type}} do Spotify",
                    copy: "Copiar nome de {{type}}",
                    link: "Copiar link de {{type}}",
                    open: "Abrir {{type}} no Spotify",
                    album: "Menu de Álbum do Spotify"
                },
                tidal: {
                    label: "Menu de Letras do Tidal",
                    lyrics: "Letras do Tidal",
                    type: "Menu de {{name}} do Tidal",
                    copy: "Copiar nome de {{name}}",
                    open: "Abrir {{name}} no Tidal",
                    album: "Menu de Álbum do Tidal"
                },
                ytm: {
                    type: "Menu de {{name}} do YouTube Music",
                    copy: "Copiar nome de {{name}}",
                    open: "Abrir {{name}} no YouTube Music",
                    album: "Menu de Álbum do YouTube Music",
                    muted: "Mutado"
                },
                lyrics: {
                    provider: "Provedor de Letras",
                    saved: "salvo",
                    notFound: "Nenhuma letra sincronizada encontrada"
                },
                copy: {
                    currentLyrics: "Copiar letras atuais"
                }
            },
            alert: {
                lyricCopied: "Letra copiada para a área de transferência!",
                noLyrics: "Sem letras",
                noLyricsTo: "Sem letras para {{translated}}",
                translate: "traduzir",
                romanize: "romanizar",
                lyricsFetchFailed: "Falha na busca de letras",
                failedToFetchLyrics: "Falha ao buscar {{translated}}",
                translation: "tradução",
                romanization: "romanização",
                failedToFetchTranslation: "Falha ao buscar tradução das letras"
            },
            modal: {
                install: {
                    title: "Como instalar",
                    install: "Instale {{link}} daqui, então vá para as configurações do TidaLuna → Plugin stores → Instale @vmohammad/api",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "Nenhuma faixa tocando",
                    artist: "Artista:",
                    album: "Álbum:",
                    noLyrics: "Letras indisponíveis :(",
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
                failed: "Falha ao renderizar o Modal :(",
                checkConsole: "Verifique o console para erros",
                invalidUrlCustomApi: "Formato de URL inválido para a URL do Servidor de API Personalizado"
            },
            text: {
                unknownArtist: "Artista desconhecido",
                unknownTitle: "Título desconhecido"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Mostra grupos de DM mútuos nos perfis",
            no: "Nenhum grupo mútuo",
            mutualGroup: "{{count}} Grupo(s) Mútuo(s)",
            members: "Membros",
            noGroup: "Nenhum grupo de DM em comum",
            header: "Grupos Mútuos"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Evita que prévias em chamada/PiP (compartilhamento de tela, transmissões, etc.) pausem mesmo se o cliente perder o foco",
            about: "Este plugin fará com que o Discord use mais recursos do que o normal"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Silencia automaticamente novos servidores e altera várias outras configurações ao entrar neles",
            context: {
                apply: "Aplicar NewGuildSettings à pasta"
            },
            option: {
                guild: {
                    label: "Mutar Servidor",
                    description: "Mutar servidor automaticamente"
                },
                messages: {
                    label: "Configurações de Notificação do Servidor",
                    description: "Configurações de Notificação do Servidor",
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
                    label: "Mutar Novos Eventos",
                    description: "Mutar Novos Eventos automaticamente"
                },
                showAllChannels: {
                    label: "Mostrar Todos os Canais",
                    description: "Mostrar todos os canais automaticamente"
                },
                mobilePush: {
                    label: "Mutar Notificações Push Móveis",
                    description: "Mutar Notificações Push Móveis automaticamente"
                },
                voiceChannels: {
                    label: "Canais de Voz",
                    description: "Ocultar nomes em canais de voz automaticamente"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Utilitário que notifica quando novos plugins são adicionados ao Plexcord",
            modal: {
                title: "Novos Plugins e Configurações",
                description: "Novos plugins e configurações foram adicionados desde sua última visita. Revise as novidades abaixo.",
                tooltip: "Descartar para esta sessão",
                dontShowAgain: "Não mostrar isso novamente",
                restartRequired: "Reinicialização necessária para aplicar as mudanças",
                restart: "Reiniciar",
                continue: "Continuar",
                supportUs: "O Plexcord é um software de código aberto. Se você gosta de usá-lo, considere nos apoiar",
                supportUsLink: "aqui"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Retorna a tag do bot para sua forma original"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Oculta completamente todas as mensagens bloqueadas/ignoradas do chat",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Também Ocultar Usuários Ignorados",
                    description: "Também oculta mensagens de usuários ignorados."
                },
                disableNotifications: {
                    label: "Desativar Notificações",
                    description: "Oculta notificações de novas mensagens para usuários bloqueados."
                },
                allowAutoModMessages: {
                    label: "Permitir Mensagens do AutoMod",
                    description: "Permite que mensagens enviadas pelo AutoMod ignorem a filtragem."
                },
                hideBlockedUserReplies: {
                    label: "Ocultar Respostas de Usuários Bloqueados",
                    description: "Oculta mensagens de usuários bloqueados em tópicos (threads) se você tiver participado do tópico."
                },
                defaultHideUsers: {
                    label: "Ocultar Usuários por Padrão",
                    description: "Se ativado, mensagens de usuários bloqueados serão completamente ocultas. Se desativado, serão apenas recolhidas (comportamento padrão)."
                },
                overrideUsers: {
                    label: "Sobrescrever Usuários",
                    description: "Lista de IDs de usuários (separados por vírgula) que seguirão o comportamento inverso ao selecionado acima."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Impede você de digitar marcadores de lista (bullet points) em markdown"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Desativa o recurso redundante de deep linking do Discord que tenta forçá-lo a usar o App de Desktop"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Remove a exigência de 'digitar o nome do servidor' ao excluí-lo",
            option: {
                confirmModal: {
                    label: "Confirmar Modal",
                    description: "Deve ser mostrado um aviso de 'Tem certeza que deseja excluir'?"
                }
            },
            modal: {
                title: "Excluir servidor?",
                body: "É permanente, caso não estivesse óbvio.",
                confirm: "Excluir",
                cancel: "Cancelar"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Desativa o banner 'HOLD UP' no console. Como efeito colateral, também evita que o Discord oculte seu token."
        },
        noF1: {
            name: "NoF1",
            description: "Desativa o atalho de ajuda da tecla F1."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Colar um link tendo texto selecionado não criará um URL mascarado (Markdown link)"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Evita que a câmera seja espelhada na sua tela"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Remove a animação de 300ms ao abrir ou fechar modais"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Remove o mosaico de imagens do Discord",
            option: {
                inlineVideo: {
                    label: "Vídeo Inline",
                    description: "Reproduzir vídeos sem o modal de carrossel"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Remove TODOS os anúncios de Nitro do Discord enganando o cliente para pensar que você tem Nitro."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Ignora o processo de integração (onboarding) do Discord para uma entrada mais rápida nos servidores."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Pula o atraso lento e irritante de integração"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Remove a contagem de notificações de pedidos de amizade pendentes, solicitações de mensagem e ofertas de Nitro.",
            option: {
                hideFriendRequestsCount: {
                    label: "Ocultar Contagem de Pedidos de Amizade",
                    description: "Oculta a contagem de pedidos de amizade recebidos"
                },
                hideMessageRequestsCount: {
                    label: "Ocultar Contagem de Solicitações de Mensagem",
                    description: "Oculta a contagem de solicitações de mensagem"
                },
                hidePremiumOffersCount: {
                    label: "Ocultar Contagem de Ofertas Premium",
                    description: "Oculta a contagem de ofertas de Nitro"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Remove completamente os temas de perfil Nitro de todos, exceto de você mesmo."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Ignora a exigência de apertar-para-falar em canais que a impõem."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Desativa as menções em respostas por padrão",
            option: {
                userList: {
                    label: "Lista de Usuários",
                    description: "Lista de usuários para permitir ou isentar menções (separados por vírgula ou espaço)"
                },
                roleList: {
                    label: "Lista de Cargos",
                    description: "Lista de cargos para permitir ou isentar menções (separados por vírgula ou espaço)"
                },
                shouldPingListed: {
                    label: "Deve Mencionar os Listados",
                    description: "Comportamento",
                    dontPing: "Não mencionar os usuários / cargos listados",
                    onlyPing: "Apenas mencionar os usuários / cargos listados"
                },
                inverseShiftReply: {
                    label: "Inverter Shift na Resposta",
                    description: "Inverte o comportamento do shift ao responder (ativa para fazer o shift-responder mencionar o usuário)"
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
            description: "Desativa o Discord Rich Presence"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "Não mostra emojis de servidores no menu de preenchimento automático.",
            option: {
                shownEmojis: {
                    label: "Emojis Exibidos",
                    description: "Escolha quais emojis mostrar no menu de preenchimento automático",
                    onlyUnicode: "Apenas emojis unicode",
                    currentServer: "Emojis unicode e emojis do servidor atual",
                    all: "Emojis unicode e todos os emojis de servidores (Padrão do Discord)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Desativa o selo de contagem de mensagens não lidas na barra de tarefas e na bandeja do sistema."
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
                    description: "Volume de notificação"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Desativa a animação de digitação no chat"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Permite pular para mensagens de usuários bloqueados, ignorados ou prováveis spammers sem precisar desbloqueá-los."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Se mensagens não lidas forem enviadas por um usuário em DMs várias vezes, você receberá apenas um aviso sonoro.",
            option: {
                channelToAffect: {
                    label: "Canal a Afetar",
                    description: "Selecione o tipo de DM para o plugin afetar",
                    both: "Ambos",
                    user: "DMs de Usuário",
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
                    label: "Ignorar Usuários",
                    description: "IDs de Usuário (vírgula + espaço) cujos pings NUNCA devem ser limitados"
                },
                alwaysPlaySound: {
                    label: "Sempre Reproduzir Som",
                    description: "Reproduzir o som de notificação de mensagem mesmo quando estiver desativado"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Abre links em seus respectivos aplicativos em vez de no navegador",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Abrir links do Spotify no aplicativo Spotify"
                },
                steam: {
                    label: "Steam",
                    description: "Abrir links da Steam no aplicativo Steam"
                },
                epic: {
                    label: "Epic Games",
                    description: "Abrir links da Epic Games no Epic Games Launcher"
                },
                tidal: {
                    label: "Tidal",
                    description: "Abrir links do Tidal no aplicativo Tidal"
                },
                itunes: {
                    label: "iTunes",
                    description: "Abrir links da Apple Music no aplicativo iTunes"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Abrir links do VRChat no aplicativo VRCX"
                },
                telegram: {
                    label: "Telegram",
                    description: "Abrir links do Telegram no aplicativo do Telegram"
                }
            },
            notification: {
                open: "Link aberto no aplicativo nativo"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Permite que você substitua o layout/ordem de classificação padrão do fórum. Você ainda pode alterá-lo por canal",
            option: {
                defaultLayout: {
                    label: "Tags Padrão",
                    description: "Qual layout usar como padrão",
                    list: "Lista",
                    gallery: "Galeria"
                },
                defaultSortOrder: {
                    label: "Ordem de Classificação Padrão",
                    description: "Qual ordem de classificação usar como padrão",
                    recentlyActive: "Atividade Recente",
                    datePosted: "Data de Postagem"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Permite usar o modo festa porque a festa nunca acaba ✨",
            option: {
                superIntensePartyMode: {
                    label: "Modo Festa Super Intenso",
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
            description: "Desativa as restrições do lado do cliente para o gerenciamento de permissões de canal.",
            option: {
                lockout: {
                    label: "Bloqueio",
                    description: "Ignorar a prevenção de bloqueio de permissão ('Tem certeza de que quer fazer isso?')"
                },
                onboarding: {
                    label: "Integração (Onboarding)",
                    description: "Ignorar os requisitos de integração ('Fazer esta alteração tornará seu servidor incompatível [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Veja as permissões que um usuário ou canal possui e os cargos de um servidor",
            view: "Ver Permissões",
            option: {
                permissionsSortOrder: {
                    label: "Ordem de Classificação de Permissões",
                    description: "O método de classificação usado para definir qual cargo concede a um usuário uma certa permissão",
                    highest: "Cargo Mais Alto",
                    lowest: "Cargo Mais Baixo"
                }
            },
            icon: {
                denied: "Negado",
                allowed: "Permitido",
                notOverwritten: "Não Sobrescrito"
            },
            context: {
                permissions: "Permissões"
            },
            modal: {
                title: "Permissões",
                noPermissions: "Nenhuma permissão para exibir!",
                owner: "dono",
                grantedBy: "Concedido por",
                serverOwner: "Dono do Servidor",
                ownerRole: "Dono",
                sortingBy: "Classificando por {{method}}",
                highest: "Cargo Mais Alto",
                lowest: "Cargo Mais Baixo",
                details: "Detalhes do Cargo"
            },
            text: {
                roleOptions: "Opções do cargo",
                userOptions: "Opções do usuário",
                unknownRole: "Cargo desconhecido",
                unknownUser: "Usuário desconhecido"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Adiciona um comando de barra /petpet para criar GIFs de carinho na cabeça a partir de qualquer imagem",
            command: {
                petpet: {
                    description: "Criar um GIF petpet. Você só pode especificar uma das opções de imagem",
                    delay: "O atraso entre cada quadro. O padrão é 20.",
                    resolution: "Resolução para o GIF. O padrão é 120. Se você inserir um número absurdo e o Discord travar, a culpa é sua.",
                    image: "Anexo de imagem para usar",
                    url: "URL para buscar a imagem",
                    user: "Usuário cuja foto de perfil será usada como imagem",
                    noServerPfp: "Usar o avatar normal em vez do avatar específico do servidor ao usar a opção 'user'",
                    error: {
                        noImage: "Nenhuma imagem especificada!",
                        delayTooLow: "O atraso deve ser de pelo menos 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "O arquivo enviado não é uma imagem",
                fetchUserFailed: "Falha ao buscar usuário. Verifique o console para mais informações.",
                fetchImageFailed: "Ocorreu un erro ao carregar {{url}}. Verifique o console para mais informações."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Adiciona Picture-in-Picture aos vídeos (ao lado do botão de Download)",
            tooltip: "Alternar Picture-in-Picture",
            option: {
                loop: {
                    label: "Repetir",
                    description: "Se o vídeo PiP deve entrar em loop ou não"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Permite fixar canais privados no topo da sua lista de DMs. Para fixar/desafixar ou reordenar, clique com o botão direito nas DMs",
            context: {
                category: {
                    label: "Menu de Categoria de DMs Fixadas",
                    edit: "Editar Categoria",
                    up: "Mover para Cima",
                    down: "Mover para Baixo",
                    delete: "Excluir Categoria",
                    unnamed: "eita"
                },
                pin: {
                    label: "Fixar DMs",
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
                    description: "Em qual ordem as DMs fixadas devem ser exibidas?",
                    lastMessage: "Mensagem mais recente",
                    custom: "Personalizado (clique com o botão direito nos canais para reordenar)"
                },
                canCollapseDmSection: {
                    label: "Seção Fixada Recolhível",
                    description: "Permitir que a seção de DMs não categorizadas seja recolhível"
                },
                dmSectionCollapsed: {
                    label: "Seção de DM Recolhida",
                    description: "Recolher seção de DM"
                },
                userBasedCategoryList: {
                    label: "Lista de Categorias Baseada no Usuário",
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
                    save: "Salvar",
                    create: "Criar"
                },
                defaultCategoryName: "Categoria fixada {{number}}"
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Notificações personalizáveis com formatação de menção aprimorada",
            option: {
                friends: {
                    label: "Amigos",
                    description: "Notificar quando amigos enviarem mensagens em servidores"
                },
                mentions: {
                    label: "Menções",
                    description: "Notificar quando alguém marcar você diretamente"
                },
                dms: {
                    label: "Mensagens diretas",
                    description: "Notificar para mensagens diretas (DMs)"
                },
                showInActive: {
                    label: "Mostrar em Ativo",
                    description: "Mostrar notificações mesmo para o canal atualmente ativo"
                },
                ignoreMuted: {
                    label: "Ignorar Mutados",
                    description: "Pular notificações de servidores, canais ou usuários silenciados"
                }
            },
            unknown: "Desconhecido",
            dm: "DM",
            groupDM: "DM de Grupo",
            title: "{{username}} em {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Adiciona um ícone de alfinete às mensagens fixadas"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Não mostra os pequenos ícones de guilda nas pastas"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Adiciona indicadores de plataforma (Desktop, Mobile, Web...) aos usuários",
            embeddedTooltip: "Integrado (console ou jogo)",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Lista",
                    description: "Mostrar indicadores nos perfis de usuário"
                },
                badges: {
                    label: "Emblemas",
                    description: "Mostrar indicadores nos perfis de usuário como emblemas"
                },
                messages: {
                    label: "Mensagens",
                    description: "Mostrar indicadores dentro das mensagens"
                },
                colorMobileIndicator: {
                    label: "Colorir Indicador Mobile",
                    description: "Se o indicador mobile deve corresponder à cor do status do usuário."
                },
                showBots: {
                    label: "Mostrar Bots",
                    description: "Se os indicadores de plataforma devem ser mostrados em bots"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Simula em qual plataforma ou dispositivo você está",
            about: "Não podemos garantir que este plugin não fará você receber um aviso ou banimento. Escolher Xbox/Playstation/VR pode tornar seu cliente uma versão desatualizada.",
            platform: {
                desktop: "Cliente Discord",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Discord Embutido",
                playstation: "Discord Embutido",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Plataforma",
                    description: "Em qual plataforma fingir que você está.",
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
            description: "Adiciona um botão ao AppBar que abriga ações rápidas do Plexcord",
            tooltip: "Caixa de Ferramentas Plexcord",
            context: {
                openLog: "Abrir Log de Notificações",
                enableQuickCSS: "Ativar QuickCSS",
                openQuickCSS: "Editar QuickCSS",
                openSettings: "Abrir Configurações",
                manageThemes: "Gerenciar Temas"
            },
            option: {
                showPluginMenu: {
                    label: "Mostrar Menu de Plugins",
                    description: "Mostrar o menu de plugins na Caixa de Ferramentas Plexcord"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "Ajusta suas mensagens para torná-las mais bonitas e com melhor gramática. Veja as configurações",
            option: {
                quickDisable: {
                    label: "Desativação Rápida",
                    description: "Desativação rápida. Desliga a modificação de mensagens sem exigir o recarregamento do cliente."
                },
                blockedWords: {
                    label: "Palavras Bloqueadas",
                    description: "Palavras que não serão capitalizadas (separadas por vírgula)."
                },
                fixApostrophes: {
                    label: "Corrigir Apóstrofos",
                    description: "Garante que as contrações contenham apóstrofos."
                },
                expandContractions: {
                    label: "Expandir Contrações",
                    description: "Expandir contrações"
                },
                fixCapitalization: {
                    label: "Corrigir Capitalização",
                    description: "Capitalizar o início das frases."
                },
                fixPunctuation: {
                    label: "Corrigir Pontuação",
                    description: "Corrige o espaçamento ao redor da pontuação."
                },
                fixPunctuationFrequency: {
                    label: "Frequência de Correção de Pontuação",
                    description: "Frequência percentual de pontos finais (isso irrita muito algumas pessoas)."
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Permite que você visualize sua mensagem antes de enviá-la.",
            tooltip: "Visualizar Mensagem"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Permite salvar e carregar diferentes predefinições de perfil.",
            toast: {
                importFailed: "Falha ao importar predefinições. O arquivo pode ser inválido.",
            },
            option: {
                avatarSize: {
                    label: "Tamanho do Avatar",
                    description: "Tamanho do avatar na lista de predefinições"
                }
            },
            modal: {
                override: "Substituir",
                merge: "Mesclar",
                cancel: "Cancelar",
                timestamp: "{{formattedDate}} às {{formattedTime}}",
                rename: "Renomear",
                update: "Atualizar",
                moveUp: "Mover para Cima",
                moveDown: "Mover para Baixo",
                moveTo: "Mover para Página 1",
                delete: "Excluir",
                importProfiles: "Importar Perfis",
                importText: "Você tem {{existingCount}} perfis existentes nesta seção. Deseja substituí-los ou mesclá-los com os perfis importados?",
                heading: "Perfis Salvos",
                searchProfiles: "Buscar Perfis...",
                profileName: "Nome do Perfil",
                saving: "Salvando...",
                save: "Salvar Perfil",
                cancelSearch: "Cancelar Busca",
                search: "Buscar",
                random: "Aleatório",
                import: "Importar",
                exportAll: "Exportar Tudo"
            },
            text: {
                selectAServer: "Selecione um servidor",
                profileSets: "Conjuntos de perfil",
                youAreNotIn: "Você ainda não está em nenhum servidor.",
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
                    copyQuestID: "Copiar ID da Quest"
                }
            },
            button: {
                completing: "Concluindo...",
                completingWithTime: "Concluindo ({{time}})",
                completingIn: "Concluindo em {{time}}",
                queued: "Na fila ({{position}})",
                resuming: "Retomando...",
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
                autoCompleteBroken: "A conclusão automática está quebrada. Uma correção será lançada em breve.",
                enrollmentFailed: "Falha ao se inscrever na Quest {{questName}}.",
                enrollmentInNormalizequestnameQuest: "Falha ao se inscrever na missão {{normalizeQuestName_quest}}{{rateLimitSuffix}}."
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
                    body: "{{count}} novas Quests excluídas foram detectadas. Verifique o console para ver os IDs."
                }
            },
            alert: {
                restart: {
                    title: "Reinício necessário",
                    body: "Uma alteração feita nas configurações do Questify requer um reinício.",
                    confirm: "Reiniciar",
                    cancel: "Mais tarde"
                },
                dangerous: {
                    title: "Tem certeza?",
                    confirm: "Continuar",
                    cancel: "Cancelar",
                    disableEverything: "Isso desativará completamente a funcionalidade das Quests.",
                    allowDangerous: "Isso permitirá alterar configurações perigosas."
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
                watchVideoOnMobile: "Assistir vídeo no celular",
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
                        pluginSettings: "Configurações do plugin",
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
                    disableSpecificTooltip: "O banner patrocinado é um banner de Quest pago no topo da página de Quests.\n\nOs avisos de mudança são indicadores, como na página Explorar, de que as Quests foram movidas para as DMs.\n\nA promoção da lista de amigos é um cartão exibido na seção \"Ativo agora\" da sua lista de amigos enquanto um usuário com quem você compartilha um servidor joga um jogo com uma Quest ativa.\n\nA promoção da lista de membros é um ícone exibido nos membros da lista de um servidor enquanto eles jogam um jogo com uma Quest ativa.\n\nA promoção do painel da conta é uma promoção de Quest paga exibida acima do seu painel de conta.\n\nO progresso do painel da conta é o progresso da Quest ativa ou concluída exibido acima do seu painel de conta.\n\nOs emblemas de Quests e Orbs são emblemas nos perfis de quem concluiu pelo menos uma Quest ou comprou o emblema de Orbs, respectivamente.",
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
                    warningTos: "O Discord começou a emitir avisos para usuários de scripts ou plugins que modificam como as Quests são concluídas, o que vai contra os {{tos}}.",
                    tos: "Termos de Serviço",
                    warningEscalate: "Os avisos parecem limitados à ameaça de perda de acesso às Quests ou às suas recompensas, mas o Discord pode endurecer a qualquer momento.",
                    warningDetection: "Devido aos vários métodos que o Discord usa para rastrear usuários, não há maneira realista de evitar a detecção. Se continuar, entenda que o Discord provavelmente detectará isso em algum momento.",
                    warningRisk: "Use a opção a seguir para acessar configurações potencialmente perigosas por sua conta e risco.",
                    allowDangerous: "Permitir alterar configurações perigosas...",
                    disallowDangerous: "Redefinir e proibir alterar configurações perigosas...",
                    completeVideoQuicker: "Acelerar a conclusão automática de Quests de vídeo:",
                    completeVideoQuickerTooltip: "O Discord permite concluir Quests de vídeo quando, desde a inscrição, já passou a duração do vídeo menos 24 segundos.\n\nIsso significa que, se uma Quest de vídeo tiver 24 segundos ou menos, ou se você se inscrever e voltar depois para concluí-la, ela poderá ser concluída imediatamente.\n\nEsta configuração só se aplica à conclusão automática de Quests de vídeo e depende da configuração de conclusão automática abaixo. Concluir manualmente ainda exige esperar a duração completa e não depende do momento da inscrição.",
                    mobileDesktop: "Tornar algumas Quests de vídeo exclusivas do celular concluíveis no computador:",
                    mobileDesktopTooltip: "Algumas Quests de vídeo exclusivas do celular permitem inscrição no computador, mas ainda precisam ser concluídas no celular. Esta configuração permite concluí-las no computador.\n\nAlgumas Quests de vídeo exclusivas do celular só permitem inscrição pelo celular. Para que esta configuração as afete, você deve se inscrever nelas pelo celular antes de voltar ao computador e atualizar suas Quests.\n\nQuando ativada sozinha, esta configuração só se aplica à conclusão manual de Quests de vídeo. A conclusão automática de Quests de vídeo do celular pelo computador depende da configuração de conclusão automática abaixo e ativará esta configuração implicitamente.",
                    simultaneous: "Concluir Quests automaticamente ao mesmo tempo em vez de em sequência:",
                    simultaneousTooltip: "Por padrão, tentar concluir várias Quests automaticamente as coloca em uma fila para serem concluídas em ordem.\n\nEsta configuração permite, em vez disso, que todas as Quests de conclusão automática rodem ao mesmo tempo.\n\nEsta configuração só se aplica à conclusão automática e depende da configuração de conclusão automática abaixo.",
                    resumeInterrupted: "Retomar conclusões automáticas interrompidas após recarregar ou reiniciar:",
                    resumeInterruptedTooltip: "Esta configuração retomará automaticamente qualquer conclusão automática interrompida por recarregamentos ou reinícios, incluindo recolocar na fila Quests que estavam na fila mas ainda não tinham começado.",
                    autoCompleteTypes: "Concluir automaticamente tipos específicos de Quest:",
                    autoCompleteTypesTooltip: "Quests de \"Assistir vídeo no celular\" só funcionam com Quests móveis que permitem inscrição no computador. Se a inscrição estiver restrita ao celular, você precisa se inscrever pelo celular antes de voltar ao computador e atualizar suas Quests.\n\nTodas as Quests de vídeo normalmente enviam um stack trace com os relatórios de progresso. Assim o Discord sabe exatamente quais funções foram chamadas e pode verificar se suas próprias funções iniciaram o progresso. O Questify apaga esse stack trace, mas a ausência dele é tão reveladora quanto a presença.\n\nQuests de \"Jogar no computador\", \"Jogar no PlayStation\", \"Jogar no Xbox\" e \"Jogar atividade\" só estão disponíveis em clientes oficiais para computador devido a uma limitação imposta pelo Discord. Clientes de terceiros como extensões web, Plextron e outros não suportam a conclusão automática desses tipos.\n\nTodas as Quests de jogos normalmente enviam uma impressão digital do jogo com os relatórios de heartbeat. Assim o Discord pode usar dados de dezenas de milhares de usuários para determinar se outros usuários provavelmente usam um jogo real ou emulam o executável. Não há método razoável para falsificar esse valor, então o Questify o deixa em branco, mas a ausência dele é tão reveladora quanto uma falsificação malfeita.\n\nQuests de \"Conquista em atividade\" só podem ser concluídas automaticamente concluindo-as imediatamente. Esse método pode ser corrigido a qualquer momento.\n\nA conclusão automática é feita clicando nos respectivos botões na página de Quests. As Quests serão concluídas na ordem em que entraram na fila, a menos que a conclusão simultânea esteja ativada acima.\n\nConcluir Quests automaticamente é a configuração perigosa mais arriscada disponível. Ative-a por sua conta e risco."
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
                    notifyOnNewExcludedTooltip: "Algumas Quests são excluídas da sua lista de Quests disponíveis devido a restrições de região ou plataforma.\n\nQuando ativado, o Questify buscará as configurações dessas Quests, aplicará seus filtros de tipos de Quest e recompensa, exibirá no console os dados das Quests excluídas e mostrará uma notificação separada para as Quests excluídas correspondentes.",
                    soundOnNewExcluded: "Tocar um som quando novas Quests excluídas forem detectadas:",
                    soundOnNewExcludedTooltip: "Algumas Quests são excluídas da sua lista de Quests disponíveis devido a restrições de região ou plataforma.\n\nQuando um som é selecionado, o Questify buscará as configurações dessas Quests, aplicará seus filtros de tipos de Quest e recompensa, exibirá no console os dados das Quests excluídas e tocará este som para as Quests excluídas correspondentes.",
                    fetchInterval: "Intervalo de busca de Quests:",
                    fetchIntervalTooltip: "O Discord só busca Quests ao carregar e quando você visita a página de Quests.\n\nEste intervalo busca Quests periodicamente enquanto o cliente estiver aberto, para que os indicadores do botão de Quests e os alertas de novas Quests fiquem atualizados ao longo do dia.\n\nIsso só funciona se estiver ativado e se as configurações do botão ou das notificações de Quests tornarem a busca periódica útil.",
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
                    description: "Ordenar missões pelo status quando a ordenação do Questify estiver selecionada na página de missões. Status ocultos são filtrados em qualquer ordenação.",
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
                    description: "A versão de migração atual das configurações."
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
                    label: "Permitir configurações perigosas",
                    description: "Permite alterar configurações perigosas."
                },
                resumeInterruptedQuests: {
                    label: "Retomar Quests interrompidas",
                    description: "Retoma a conclusão automática de Quests após recarregar ou reiniciar."
                },
                makeMobileVideoQuestsDesktopCompatible: {
                    label: "Tornar Quests de vídeo do celular compatíveis",
                    description: "Torna Quests de vídeo exclusivas do celular compatíveis com o computador."
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
                    description: "Se o usuário está atualmente na página de Quests."
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
                    description: "Uma lista de IDs de Quests sendo concluídas automaticamente ou na fila em segundo plano."
                },
                acknowledgedNotices: {
                    description: "Avisos únicos que o usuário confirmou.",
                    label: "Avisos confirmados"
                },
                settingsSearch: {
                    description: "Pesquisar configurações do Questify.",
                    label: "Pesquisa de configurações"
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
                    description: "Grupos de status de missões a ocultar.",
                    label: "Status de missão ocultos"
                }
            },
            text: {
                clearQuestQueue: "Limpar fila de missões",
                hideIncompleteQuestsWith: "Ocultar missões incompletas com status não resgatado ou ignorado quando nenhuma tarefa de conclusão automática for suportada nesta plataforma e estiver ativada na lista de tipos de missão. Missões resgatadas, expiradas e concluídas são isentas. Use as opções de ordem de status ocultas para ocultá-las.",
                discordForcesYouTo: "O Discord obriga você a manter o cliente em foco para que as missões de vídeo reproduzam o vídeo.",
                hideNonAutoCompletable: "Ocultar missões sem conclusão automática:",
                preventVideoQuestsFrom: "Impedir que missões de vídeo pausem ao perder o foco:",
                thePunishmentAlsoConsists: "A punição também inclui uma violação na situação da conta que dura 2 anos por violação.",
                dueToTheVarious: "Devido aos vários métodos que o Discord usa para rastrear usuários, não há como evitar a detecção de forma realista. Se continuar, entenda que o Discord provavelmente detectará seu uso em algum momento.",
                enrollInQuest: "Inscrever-se na missão",
                hidden: "Oculto",
                selectingAnOccupiedPosition: "Selecionar uma posição ocupada troca os dois status. Status ocultos são removidos das listas de missões.",
                searchQuestifySettings: "Pesquisar configurações do Questify",
                searchQuestifySettings2: "Pesquisar configurações do Questify...",
                noMatchingSettings: "Nenhuma configuração correspondente.",
                questifyNoticeAugust7th: "Aviso do Questify - 7 de agosto de 2026",
                keepUsingDangerousQuestify: "Continuar usando configurações perigosas do Questify",
                disableDangerousQuestifySettings: "Desativar configurações perigosas do Questify",
                questifyNoticeAugust26th: "Aviso do Questify - 26 de agosto de 2026",
                areYouSure: "Tem certeza?",
                thePunishmentAppearsLimited: "A punição parece limitada à perda de acesso às missões e suas recompensas, mas o Discord pode endurecê-la a qualquer momento.",
                queueAllQuests: "Enfileirar todas as missões",
                inProgress: "Em andamento",
                rateLimited: "Limitado",
                preventsVideoPausing: "Esta configuração impede que o vídeo pause e permite que a conclusão avance normalmente.",
                appliesOnlyToVideoQuests: "Esta configuração se aplica apenas à conclusão manual de missões de vídeo.",
                knownToPunish: "O Discord é conhecido por punir usuários de scripts ou plugins que modificam a conclusão de missões. Modificar a conclusão de missões viola os",
                punishmentConsists: "A punição consiste na perda temporária ou permanente do acesso às missões e suas recompensas.",
                questBanSystem: "O Discord implementou um sistema de banimento de missões que limitará temporária ou permanentemente seu acesso para concluir missões e resgatar suas recompensas caso descubra que você as conclui por meios não oficiais. Modificar a conclusão de missões viola os",
                begunPunishing: "O Discord começou a punir usuários de scripts e plugins que modificam a conclusão de missões. Modificar a conclusão de missões viola os",
                dueToRateLimits: " devido a limites de taxa"
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Substitui todos os pontos de interrogação por uma string escolhida, se a mensagem contiver apenas pontos de interrogação.",
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
            description: "Responda a (Ctrl+Seta Cima/Baixo) e edite (Ctrl+Shift+Seta Cima/Baixo) mensagens via atalhos de teclado",
            option: {
                shouldMention: {
                    label: "Deve Mencionar",
                    description: "Mencionar na resposta por padrão",
                    noReplyMentionPlugin: "Seguir o plugin NoReplyMention (se ativado)",
                    enabled: "Ativado",
                    disabled: "Desativado"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignorar Bloqueados e Ignorados",
                    description: "Ignorar mensagens de usuários bloqueados/ignorados ao navegar"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Alterne rapidamente entre temas usando atalhos de teclado.",
            about: {
                title: "Atalhos",
                description: "Use Ctrl/Cmd+Shift+Setas para navegar (Esquerda/Direita: alternar temas, Cima: ativar, Baixo: desativar).",
                reload: "Pressione Ctrl/Cmd+Shift+Alt para recarregar a lista de temas."
            },
            modal: {
                added: "Adicionado(s) {{count}} tema(s)",
                removed: "Removido(s) {{count}} tema(s)",
                reloaded: "Recarregados {{themeCount}} temas",
                addedLocal: "Adicionado(s) {{count}} tema(s) local(is)",
                removedLocal: "Removido(s) {{count}} tema(s) local(is)",
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
                    label: "Ordem de Classificação",
                    description: "Método de classificação",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "Recente"
                },
                autoRefresh: {
                    label: "Atualização Automática",
                    description: "Atualizar automaticamente a lista de temas quando mudanças forem detectadas"
                },
                showNotifications: {
                    label: "Mostrar Notificações",
                    description: "Mostrar notificações quando temas forem adicionados/removidos"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Adiciona a habilidade de criar uma imagem de citação inspiradora a partir de uma mensagem",
            context: {
                quote: "Citar"
            },
            modal: {
                title: "Pego no Pulo",
                grayscale: "Escala de Cinza",
                export: "Exportar",
                send: "Enviar",
                saveAsGIF: "Salvar como GIF",
                saveDescription: "Salva/Envia a imagem como GIF em vez de PNG",
                showWatermark: "Mostrar Marca d'água",
                watermarkText: "Texto da Marca d'água (máx. 32 caracteres)"
            },
            option: {
                quoteFont: {
                    label: "Fonte da Citação",
                    description: "Fonte para o texto da citação (autor/nome de usuário sempre usam M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Open Sans",
                    momoSignature: "Assinatura Momo",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Marca d'água",
                    description: "Texto personalizado da marca d'água (máx. 32 caracteres)"
                },
                grayscale: {
                    label: "Escala de Cinza",
                    description: "Ativar escala de cinza por padrão"
                },
                showWatermark: {
                    label: "Mostrar Marca d'água",
                    description: "Mostrar marca d'água por padrão"
                },
                saveAsGif: {
                    label: "Salvar Como Gif",
                    description: "Salvar como GIF por padrão"
                }
            },
            text: {
                quotePreview: "Prévia da citação"
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Adiciona um botão perto do botão Silenciar para entrar em uma chamada de voz aleatória.",
            tooltip: "Voz Aleatória",
            context: {
                label: "Modificador de estado de voz",
                amountLabel: "QUANTIDADE DE USUÁRIOS",
                spacesLabel: "VAGAS RESTANTES",
                voiceLabel: "LIMITE DE VOZ",
                selfLabel: "CONFIGURAÇÕES PRÓPRIAS",
                select: {
                    servers: "Selecionar Servidores",
                    list: "Selecionar Lista",
                    filters: "Selecionar Filtros",
                    amount: "Qtd. Usuários",
                    userAmount: "{{amount}} usuário(s)",
                    parameters: "Parâmetros",
                    selectAll: "Selecionar Todos",
                    reset: "Redefinir",
                    stateFilters: "Filtros de Estado",
                    moreThan: "Mais que",
                    lessThan: "Menos que",
                    equalTo: "Igual a",
                    spaces: "Vagas Restantes",
                    voice: "Limite de Voz"
                },
                filter: {
                    muted: "Mutado",
                    deafened: "Ensurdecido",
                    camera: "Câmera",
                    stream: "Transmissão",
                    includeFilters: "Incluir Filtros",
                    avoidFilters: "Evitar Filtros"
                },
                reset: {
                    list: "Redefinir Lista"
                },
                voice: {
                    label: "Opções de Voz",
                    joinSettings: "Configurações de Participação",
                    auto: {
                        mute: "Auto Silenciar",
                        deafen: "Auto Ensurdecer",
                        camera: "Auto Câmera",
                        stream: "Auto Transmissão",
                        leaveWhenEmpty: "Sair Quando Estiver Vazio",
                        navigate: "Navegação Automática",
                        stage: "Evitar Palco (Stage)",
                        afk: "Evitar AFK"
                    }
                },
                invalid: {
                    server: "Servidor inválido"
                }
            },
            keybind: {
                label: "Atalho de teclado",
                recording: "Gravando...",
                reset: "Redefinir"
            },
            option: {
                keybindEnabled: {
                    label: "Atalho ativado",
                    description: "Mostra os controles do atalho de voz aleatória"
                },
                userAmountOperation: {
                    label: "Operação de Quantidade de Usuários",
                    description: "Selecione uma operação para as quantidades de usuários"
                },
                userAmount: {
                    label: "Quantidade de Usuários",
                    description: "Selecione a quantidade de usuários"
                },
                spacesLeftOperation: {
                    label: "Operação de Vagas Restantes",
                    description: "Selecione uma operação para a quantidade máxima de usuários"
                },
                spacesLeft: {
                    label: "Vagas Restantes",
                    description: "Selecione a quantidade de usuários máximos"
                },
                vcLimitOperation: {
                    label: "Operação de Limite de Canal de Voz",
                    description: "Selecione uma operação para o canal de voz."
                },
                vcLimit: {
                    label: "Limite de Canal de Voz",
                    description: "Selecione um limite de canal de voz"
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
                    label: "Auto Câmera",
                    description: "Liga a câmera automaticamente"
                },
                autoStream: {
                    label: "Auto Transmissão",
                    description: "Inicia transmissão automaticamente"
                },
                selfMute: {
                    label: "Auto Silenciar",
                    description: "Silencia seu microfone automaticamente ao entrar em um canal de voz."
                },
                selfDeafen: {
                    label: "Auto Ensurdecer",
                    description: "Ensurdece seu áudio automaticamente ao entrar em um canal de voz."
                },
                leaveEmpty: {
                    label: "Sair Quando Estiver Vazio",
                    description: "Encontra uma chamada aleatória quando o chat de voz estiver vazio."
                },
                prioritizeFriends: {
                    label: "Priorizar amigos",
                    description: "Preferir canais com seus amigos neles quando possível."
                },
                avoidStages: {
                    label: "Evitar Palco",
                    description: "Evita entrar em canais de voz de Palco (Stage)."
                },
                avoidAfk: {
                    label: "Evitar AFK",
                    description: "Evita entrar em canais de voz de AFK."
                },
                video: {
                    label: "Vídeo",
                    description: "Procura usuários com vídeo ligado"
                },
                stream: {
                    label: "Transmissão",
                    description: "Procura usuários que estão transmitindo"
                },
                mute: {
                    label: "Silenciado",
                    description: "Procura usuários que estão silenciados"
                },
                deafen: {
                    label: "Ensurdecido",
                    description: "Procura usuários que estão ensurdecidos"
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
                userCount: "{{count}} usuário",
                usersCount: "{{count}} usuários"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Decodifica códigos de erro do React em mensagens legíveis por humanos."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Lê todas as notificações do servidor com um único clique de botão!",
            button: "Ler Tudo"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Ctrl+Tab entre as DMs usadas mais recentemente (Ctrl+Shift+Tab inverte)",
            option: {
                visualStyle: {
                    label: "Estilo Visual",
                    description: "Estilo do indicador visual durante a alternância",
                    overlay: "Sobreposição (estilo Alt+Tab)",
                    toast: "Toast (mensagem de status)",
                    off: "Desligado"
                },
                overlayMode: {
                    label: "Modo de Sobreposição",
                    description: "Conteúdo da sobreposição",
                    row: "Fila de recentes",
                    current: "Apenas atual",
                },
                amountOfUsers: {
                    label: "Quantidade de Usuários",
                    description: "Número de usuários a mostrar na sobreposição"
                },
                overlayRowLength: {
                    label: "Comprimento da Fila",
                    description: "Número de DMs recentes a mostrar na fila"
                },
                overlayShowAvatars: {
                    label: "Mostrar Avatares",
                    description: "Mostrar avatares dos usuários na sobreposição"
                },
                toastDurationMs: {
                    label: "Duração do Toast (ms)",
                    description: "Duração da mensagem de status"
                },
                clearRdms: {
                    label: "Limpar Lista RDMS",
                    description: "Utilidade de teste: Limpa a lista de RDMs",
                    toast: "Histórico do RDMS limpo",
                    button: "Limpar Histórico de RDMs"
                }
            },
            modal: {
                unknown: "Desconhecido",
                dm: "DM",
                group: "DM de Grupo",
                channel: "Canal",
                switchingTo: "Alternando para: {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Notifica você quando um amigo, chat em grupo ou servidor remove você.",
            option: {
                notices: {
                    label: "Avisos",
                    description: "Também mostra um aviso no topo da tela ao ser removido (use isso se não quiser perder nenhuma notificação)."
                },
                offlineRemovals: {
                    label: "Remoções Offline",
                    description: "Notifica ao iniciar o Discord se você foi removido enquanto estava offline."
                },
                friends: {
                    label: "Amigos",
                    description: "Notificar quando um amigo remover você"
                },
                friendRequestCancels: {
                    label: "Cancelamentos de Pedidos de Amizade",
                    description: "Notificar quando um pedido de amizade for cancelado"
                },
                servers: {
                    label: "Servidores",
                    description: "Notificar quando for removido de um servidor"
                },
                groups: {
                    label: "Grupos",
                    description: "Notificar quando for removido de um chat em grupo"
                }
            },
            notification: {
                removedFriend: "{{user}} removeu você da lista de amigos.",
                cancelledFriendRequest: "Um pedido de amizade de {{user}} foi removido.",
                removedFromServer: "Você foi removido do servidor {{server}}.",
                removedFromGroup: "Você foi removido do grupo {{group}}.",
                noLongerGroup: "Você não está mais no grupo {{group}}.",
                noLongerServer: "Você não está mais no servidor {{server}}.",
                noLongerFriend: "Você não é mais amigo de {{user}}.",
                friendRequestRevoked: "O pedido de amizade de {{user}} foi revogado.",
                ok: "OK"
            },
            text: {
                relationshipNotifier: "Notificador de relações"
            }
        },
        remix: {
            name: "Remix",
            description: "Adiciona uma opção 'Remix' ao menu de clique direito do botão de upload de arquivos. Esta opção abre uma imagem em um editor simples e permite que você envie a imagem editada diretamente no chat.",
            label: "Remix",
            button: {
                send: "Enviar",
                close: "Fechar",
                brush: "Pincel",
                erase: "Borracha",
                crop: "Recortar",
                shape: "Forma",
                reset: "Redefinir",
                clear: "Limpar"
            },
            editor: {
                choose: "Escolha uma Imagem",
                browse: "Navegar",
                rectangle: "Retângulo",
                ellipse: "Elipse",
                line: "Linha",
                arrow: "Seta",
                fill: "Preencher",
                image: "Imagem"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Permite que você repita mensagens rapidamente. Se você segurar Shift ao clicar na opção Repetir, ela responderá à mensagem.",
            button: "Repetir (Clique) / Repetir e Responder (Shift + Clique)",
            context: {
                repeat: "Repetir",
                repeatAndReply: "Repetir e Responder"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Substitui a busca do Google por diferentes mecanismos.",
            option: {
                customEngineName: {
                    label: "Nome do Mecanismo Personalizado",
                    description: "Nome do mecanismo de busca personalizado"
                },
                customEngineURL: {
                    label: "URL do Mecanismo Personalizado",
                    description: "A URL do seu mecanismo"
                },
                replacementEngine: {
                    label: "Mecanismo de Substituição",
                    description: "Substituir por um mecanismo de busca específico em vez de adicionar um menu",
                    off: "Desligado",
                    custom: "Mecanismo Personalizado",
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
            description: "Controle se deseja sempre ou nunca ser mencionado em respostas de mensagens, com recursos de lista de permissões e de bloqueio",
            option: {
                replyPingBlacklist: {
                    label: "Lista de bloqueio de menções em respostas",
                    description: "Lista separada por vírgulas de IDs de usuário para nunca receber menções de resposta"
                },
                alwaysPingOnReply: {
                    label: "Sempre Marcar na Resposta",
                    description: "Sempre ser marcado quando alguém responder às suas mensagens"
                },
                replyPingWhitelist: {
                    label: "Lista Branca de Marcação",
                    description: "Lista de IDs de usuário separada por vírgula para sempre receber marcações de resposta"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Mostra um carimbo de data/hora na pré-visualização de mensagens respondidas"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Revela todos os spoilers em uma mensagem clicando com Ctrl em um spoiler, ou no chat com Ctrl+Shift+clique"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Adiciona Busca de Imagem aos menus de contexto de imagem",
            context: {
                label: "Pesquisar Imagem",
                all: "Pesquisar em Todos"
            },
            text: {
                all: "Todos"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Avalie outros usuários (Adiciona uma nova seção aos perfis)",
            notification: {
                newReview: "Você tem novas avaliações no seu perfil!",
                auth: {
                    error: "Ocorreu um erro ao autorizar",
                    successfully: "Login realizado com sucesso!",
                    failed: "Falha ao autorizar",
                    review: "Por favor, autorize para adicionar uma avaliação.",
                    opening: "Abrindo janela de autorização...",
                    need: "Você precisa autorizar para avaliar usuários!"
                },
                error: {
                    fast: "Você está enviando solicitações rápido demais. Aguarde alguns segundos e tente novamente.",
                    fetching: "Ocorreu um erro ao buscar avaliações.",
                    action: {
                        failed: "Falha ao {{action}} usuário",
                        success: "Usuário {{action}} com sucesso"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Você tem certeza?",
                    description: "Você realmente quer excluir esta avaliação?",
                    confirm: "Excluir",
                    cancel: "Deixa para lá",
                    error: "Você deve estar logado para excluir avaliações.",
                },
                report: {
                    title: "Você tem certeza?",
                    description: "Você realmente quer denunciar esta avaliação?",
                    confirm: "Denunciar",
                    cancel: "Deixa para lá",
                    error: "Você deve estar logado para denunciar avaliações.",
                },
                block: {
                    title: "Você tem certeza?",
                    description: "Você realmente quer bloquear este usuário? Você não verá mais as avaliações dele.",
                    confirm: "Bloquear",
                    cancel: "Deixa para lá",
                    error: "Você deve estar logado para bloquear usuários.",
                },
                blocked: {
                    title: "Usuários Bloqueados",
                    auth: "Você não está logado no ReviewDB!",
                    noBlocked: "Nenhum usuário está bloqueado.",
                    fetch: "Ocorreu um erro ao buscar usuários bloqueados."
                },
                reviews: {
                    title: "Avaliações de ",
                    noUser: "Parece que ninguém avaliou este usuário ainda. Você pode ser o primeiro!",
                    noServer: "Parece que ninguém avaliou este servidor ainda. Você pode ser o primeiro!"
                }
            },
            button: {
                appeal: "Apelar",
                ok: "OK",
                more: "Ler mais",
                reply: "Responder a @{{user}}",
                update: "Atualizar avaliação para @{{user}}",
                review: "Avaliar @{{user}}"
            },
            context: {
                view: "Ver Avaliações",
                blocked: "Você bloqueou este usuário",
                delete: "Excluir Avaliação",
                report: "Denunciar Avaliação",
                block: "Bloquear Usuário",
                unblock: "Desbloquear Usuário",
                reply: "Responder Avaliação"
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
                    description: "Exibir aviso para ser respeitoso no topo da lista de avaliações"
                },
                hideTimestamps: {
                    label: "Ocultar Carimbos de Data/Hora",
                    description: "Ocultar data/hora nas avaliações"
                },
                hideBlockedUsers: {
                    label: "Ocultar Usuários Bloqueados",
                    description: "Ocultar avaliações de usuários bloqueados"
                },
                buttons: {
                    label: "Botões",
                    manageBlocked: "Gerenciar Usuários Bloqueados",
                    support: "Apoiar o desenvolvimento do ReviewDB",
                    website: "Site do ReviewDB",
                    server: "Servidor de Suporte do ReviewDB"
                }
            },
            profile: {
                optedOut: "Usuário recusou",
                noReviews: "Sem análises ainda"
            },
            toast: {
                youCannotVoteOn: "Você não pode votar na sua própria avaliação.",
                networkErrorFailedTo: "Erro de rede: falha ao conectar ao ReviewDB.",
                pleaseAuthorizeToVote: "Autorize para votar em avaliações.",
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
            description: "Renderiza links magnet como links de mensagem",
            unknown: "nome de arquivo desconhecido"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Adiciona a cor do cargo mais alto em todos os lugares possíveis",
            option: {
                chatMentions: {
                    label: "Menções no Chat",
                    description: "Mostrar cores dos cargos em menções no chat (incluindo na caixa de mensagem)"
                },
                memberList: {
                    label: "Lista de Membros",
                    description: "Mostrar cores dos cargos nos cabeçalhos da lista de membros"
                },
                voiceUsers: {
                    label: "Usuários de Voz",
                    description: "Mostrar cores dos cargos na lista de usuários do chat de voz"
                },
                reactorsList: {
                    label: "Lista de Reações",
                    description: "Mostrar cores dos cargos na lista de quem reagiu"
                },
                pollResults: {
                    label: "Resultados da Enquete",
                    description: "Mostrar cores dos cargos nos resultados da enquete"
                },
                colorChatMessages: {
                    label: "Colorir Mensagens do Chat",
                    description: "Colorir as mensagens do chat baseando-se na cor do cargo do autor"
                },
                messageSaturation: {
                    label: "Saturação da Mensagem",
                    description: "Intensidade da coloração das mensagens"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Edita o tipo e o conteúdo de qualquer Rich Presence",
            option: {
                replacedAppIds: {
                    label: "IDs de Aplicativos Substituídos",
                }
            },
            modal: {
                tutorial: {
                    title: "IDs de atividades atualmente em execução",
                    noRunning: "Nenhuma atividade em execução",
                    available: "Variáveis disponíveis",
                    variableText: "Em todos os campos (exceto URL de stream), você pode colocar variáveis que serão substituídas automaticamente pelo conteúdo original:",
                    more: "Mais detalhes",
                    details: {
                        leave: "Deixe um campo vazio para mantê-lo como está.",
                        set: "Defina um campo como 'null' para ocultá-lo na presença.",
                        reload: "Você pode precisar recarregar o Discord para que as mudanças sejam aplicadas."
                    }
                },
                settings: {
                    applyEdits: "Aplicar edições ao app",
                    addNewApp: "Adicionar novo aplicativo",
                    appId: "ID do Aplicativo",
                    invalidAppId: "ID do aplicativo inválido",
                    newActivityType: "Novo tipo de atividade",
                    activityTypes: {
                        playing: "Jogando",
                        watching: "Assistindo",
                        listening: "Ouvindo",
                        competing: "Competindo",
                        streaming: "Transmitindo"
                    },
                    streamUrl: "URL da Stream (deve ser YouTube ou Twitch)",
                    invalidStreamUrl: "URL de stream inválida",
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
                    hideTimestamps: "Ocultar carimbos de data/hora"
                }
            },
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "Exportar URLs de GIFs favoritos",
            toolbox: "Salvar GIFs Favoritos",
            title: "Salvar GIFs Favoritos",
            command: {
                savegifs: {
                    description: "Salvar todas as URLs de GIFs favoritos em um arquivo de texto"
                },
                saveworkinggifs: {
                    description: "Testar todos os GIFs favoritos e salvar apenas os que ainda estão funcionando"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Mostrar Botão na Toolbox",
                    description: "Mostrar o botão 'Salvar GIFs Favoritos' na Plexcord Toolbox (Requer Recarregamento)"
                }
            },
            toast: {
                save: "GIFs salvos com sucesso como {{filename}}",
                failed: "Falha ao salvar GIFs",
                no: "Nenhum GIF favorito encontrado!",
                testing: "Testando {{count}} GIFs, isso pode levar um momento...",
                noneWorking: "Nenhum dos seus GIFs salvos parece estar funcionando.",
                saved: "Filtrados {{broken}} GIFs possivelmente quebrados. Salvos {{saved}} GIFs funcionando."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Agendar mensagens para serem enviadas em um horário específico ou após um atraso.",
            toolbox: {
                toggle: "Ver Mensagens Agendadas"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Máximo de Mensagens por Minuto",
                    description: "Máximo de mensagens agendadas por canal que podem ser disparadas no mesmo minuto."
                },
                checkIntervalSeconds: {
                    label: "Intervalo de Verificação (Segundos)",
                    description: "Com que frequência o plugin verifica se há mensagens para enviar."
                },
                showNotifications: {
                    label: "Mostrar Notificações",
                    description: "Mostrar notificações em toast quando as mensagens forem enviadas."
                },
                showPhantomMessages: {
                    label: "Mostrar Mensagens Fantasmas",
                    description: "Mostrar mensagens agendadas como mensagens fantasmas no chat."
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
                maxMessagesReached: "Limite máximo de {{max}} mensagens por canal por minuto atingido",
                messageScheduled: "Mensagem agendada!",
                messageRemoved: "Mensagem agendada removida",
                allCleared: "Todas as mensagens agendadas foram limpas",
                scheduledMessageSentTo: "Mensagem agendada enviada para {{name}}"
            },
            button: {
                tooltipOn: "Modo de Agendamento LIGADO (clique para desativar, clique direito para lista)",
                tooltipOff: "Modo de Agendamento DESLIGADO (clique para ativar, clique direito para lista)"
            },
            accessory: {
                scheduledFor: "Agendado para {date}{timeLeft}",
                remaining: {
                    days: "faltam {{days}}d {{hours}}h",
                    hours: "faltam {{hours}}h {{minutes}}m",
                    minutes: "faltam {{minutes}}m"
                }
            },
            scheduleModal: {
                title: "Agendar Mensagem",
                schedulingFor: "Agendando para: {{channel}}",
                scheduleType: "Tipo de Agendamento",
                delay: "Atraso",
                specificTime: "Horário Específico",
                delayMinutes: "Atraso (minutos)",
                dateTime: "Data e Hora",
                error: {
                    invalidDelay: "Por favor, insira um atraso válido (mínimo de 1 minuto)",
                    invalidDateTime: "Por favor, selecione uma data e hora futura"
                },
                schedule: "Agendar",
                cancel: "Cancelar"
            },
            viewModal: {
                title: "Mensagens Agendadas",
                clearAll: "Limpar Tudo",
                noMessages: "Nenhuma mensagem agendada",
                delete: "Excluir",
                close: "Fechar"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Corrige o erro irritante 'Perdemos a lupa!'.",
            notPerfect: "Esta correção não é perfeita, então você pode ter que recarregar a barra de pesquisa para corrigir problemas.",
            paragraph1: "O Discord permite apenas um deslocamento (offset) máximo de 5000 (é isso que causa o erro da lupa).",
            paragraph2: "Isso significa que você só pode ver precisamente 5000 mensagens no passado e 5000 mensagens no futuro (ao classificar por mais antigas).",
            paragraph3: "Este plugin simplesmente alterna para o método de classificação oposto para tentar contornar a restrição do Discord,",
            paragraph4: "mas se houver um resultado de pesquisa grande e você tentar visualizar uma mensagem que é inalcançável por ambos os métodos de classificação,",
            paragraph5: "o plugin simplesmente mostrará o deslocamento 0 (ou a mensagem mais nova ou a mais antiga, dependendo do método de classificação)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Sempre reproduzir a versão secreta do toque do Discord (exceto durante eventos especiais de toque)",
            option: {
                onlySnow: {
                    label: "Apenas Durante o Evento Snow Ringtone",
                    description: "Reproduzir apenas o tema Snow Halation"
                }
            }
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Envie carimbos de data/hora facilmente via botão na caixa de chat e atalhos de texto. Leia a descrição estendida!",
            sample: {
                paragraph1: "Para enviar rapidamente carimbos apenas com a hora, inclua horários formatados como `HH:MM` (incluindo as crases!) na sua mensagem",
                paragraph2: "Veja abaixo os exemplos.\nSe precisar de algo mais específico, use o botão de Data na barra de chat!",
                examples: "Exemplos:"
            },
            modal: {
                title: "Seletor de Carimbo de Data/Hora",
                light: "Claro",
                dark: "Escuro",
                format: "Formato do Carimbo",
                preview: "Pré-visualização",
                insert: "Inserir",
                insertTimestamp: "Inserir Carimbo"
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
            description: "Permite visualizar informações sobre um servidor",
            context: {
                serverInfo: "Informações do Servidor"
            },
            option: {
                sorting: {
                    label: "Ordenação",
                    description: "Nome de usuário ou, se aplicável, Nome de Exibição",
                    username: "Nome de Usuário",
                    displayname: "Nome de Exibição",
                    none: "Não Ordenar"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Informações do Servidor",
                    friends: "Amigos",
                    mutualUsers: "Usuários em Comum",
                    blockedUsers: "Usuários Bloqueados",
                    ignoredUsers: "Usuários Ignorados"
                },
                owner: "Dono do Servidor",
                loading: "Carregando...",
                createdAt: "Criado em",
                joinedAt: "Entrou em",
                vanityLink: "Link Personalizado",
                preferredLocale: "Idioma Preferencial",
                verification: {
                    level: "Nível de Verificação",
                    none: "Nenhum",
                    low: "Baixo",
                    medium: "Médio",
                    high: "Alto",
                    highest: "Altíssimo"
                },
                serverBoosts: "Impulsos do Servidor",
                channels: "Canais",
                roles: "Cargos",
                boostLevel: "{{count}} (Nível {{level}})"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Adiciona a contagem de amigos online ou contagem de servidores na lista de servidores",
            friends: "Amigos",
            servers: "Servidores",
            option: {
                mode: {
                    label: "Modo",
                    description: "Modo de exibição na lista de servidores",
                    friend: "Apenas contagem de amigos online",
                    server: "Apenas contagem de servidores",
                    both: "Contagem de servidores e amigos online"
                },
                useCompact: {
                    label: "Usar Modo Compacto",
                    description: "Faz o indicador aparecer apenas com texto"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Navegue melhor pelos seus servidores com um botão de busca rápida",
            tooltip: "Pesquisar"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Traz blocos de código no estilo VS Code para o Discord, alimentado por Shiki",
            option: {
                theme: {
                    label: "Tema",
                    description: "Temas padrão"
                },
                customTheme: {
                    label: "Tema Personalizado",
                    description: "Um link para um tema personalizado do VS Code",
                    mustURL: "Deve ser uma URL válida",
                    mustJSON: "Deve ser um arquivo JSON"
                },
                tryHljs: {
                    label: "Fallback para Hljs",
                    description: "Usar o realçador e tema padrão mais leve do Discord.",
                    never: "Nunca",
                    secondary: "Preferir Shiki em vez do Highlight.js",
                    primary: "Preferir Highlight.js em vez do Shiki",
                    always: "Sempre"
                },
                useDevIcon: {
                    label: "Usar Devicon para Ícones de Linguagem",
                    description: "Como mostrar ícones de linguagem nos blocos de código",
                    disabled: "Desativado",
                    colorless: "Sem Cor",
                    colored: "Colorido"
                },
                bgOpacity: {
                    label: "Opacidade do Fundo",
                    description: "Opacidade do fundo"
                },
                ignoredLanguages: {
                    label: "Linguagens ignoradas",
                    description: "Lista separada por vírgulas de linguagens a serem deixadas para os blocos de código padrão do Discord"
                }
            },
            button: {
                copy: "Copiar",
                copied: "Copiado!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Sempre mostrar todos os botões de mensagem, independentemente de estar segurando a tecla shift ou não.",
            option: {
                noShiftDelete: {
                    label: "Excluir sem Shift",
                    description: "Remove a necessidade de segurar shift para excluir uma mensagem."
                },
                noShiftPin: {
                    label: "Fixar sem Shift",
                    description: "Remove a necessidade de segurar shift para fixar uma mensagem."
                },
                noQuickReacts: {
                    description: "Ocultar reações rápidas. Por padrão, mostrar o menu completo oculta os botões de reação rápida.",
                    label: "Sem reações rápidas"
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Mostra os emblemas do autor da mensagem ao lado do nome no chat.",
            option: {
                showPlexcordDonor: {
                    label: "Mostrar Emblema de Doador Plexcord",
                    description: "Ative para mostrar emblemas de Doador Plexcord no chat."
                },
                plexcordDonorPosition: {
                    label: "Posição do Emblema de Doador Plexcord",
                    description: "A posição dos emblemas de Doador Plexcord."
                },
                showPlexcordContributor: {
                    label: "Mostrar Emblema de Colaborador Plexcord",
                    description: "Ative para mostrar emblemas de Colaborador Plexcord no chat."
                },
                plexcordContributorPosition: {
                    label: "Posição do Emblema de Colaborador Plexcord",
                    description: "A posição dos emblemas de Colaborador Plexcord."
                },
                showDiscordProfile: {
                    label: "Mostrar Emblemas de Perfil do Discord",
                    description: "Ative para mostrar emblemas de Perfil do Discord no chat."
                },
                discordProfilePosition: {
                    label: "Posição dos Emblemas de Perfil do Discord",
                    description: "A posição dos emblemas de Perfil do Discord."
                },
                showDiscordNitro: {
                    label: "Mostrar Emblema de Discord Nitro",
                    description: "Ative para mostrar emblemas de Discord Nitro no chat."
                },
                discordNitroPosition: {
                    label: "Posição do Emblema de Discord Nitro",
                    description: "A posição dos emblemas de Discord Nitro."
                },
                badgeSettings: {
                    label: "Configurações de Emblemas",
                    description: "Configure a posição de outros emblemas mostrados no chat.",
                    modal: "Arraste os emblemas para reordená-los; você pode clicar para ativar/desativar um tipo específico de emblema."
                }
            },
            badge: {
                plexcord: "Emblema de doador Plexcord",
                contributor: "Emblema de colaborador Plexcord",
                discordProfile: "Emblemas de perfil do Discord (HypeSquad, Staff do Discord, Desenvolvedor Ativo, etc.)",
                nitro: "Emblema de Nitro",
                staff: "Staff do Discord",
                partner: "Dono de Servidor Parceiro",
                events: "Eventos HypeSquad",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                bugHunter: "Caçador de Bugs do Discord",
                earlyVerifiedBotDeveloper: "Desenvolvedor de Bot Verificado Antigo",
                earlySupporter: "Apoiador Inicial",
                moderatorProgram: "Ex-aluno do Programa de Moderadores"
            },
            modal: {
                plexcordContributor: "Colaborador Plexcord",
                discordNitro: "Discord Nitro",
                basic: "Básico",
                classic: "Clássico"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Mostrar contas conectadas nos popouts de usuário",
            option: {
                iconSize: {
                    label: "Tamanho do Ícone",
                    description: "Tamanho do ícone (px)"
                },
                iconSpacing: {
                    label: "Espaçamento dos Ícones",
                    description: "Margem do ícone",
                    compact: "Compacto",
                    cozy: "Aconchegante",
                    roomy: "Espaçoso"
                },
                showGithubOrgs: {
                    description: "Mostrar organizações do GitHub das quais o usuário é membro",
                    label: "Mostrar organizações do GitHub"
                },
                showOnModal: {
                    description: "Mostrar contas conectadas no modal de perfil completo",
                    label: "Mostrar no modal"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Mostrar canais que você não tem permissão para visualizar.",
            tooltip: "Canal Oculto",
            option: {
                channelStyle: {
                    label: "Estilo do Canal",
                    description: "O estilo usado para exibir canais ocultos.",
                    classic: "Clássico",
                    muted: "Mutado",
                    showUnreads: "Mostrar Não Lidas",
                    mutedWithUnreads: "Mutado e Mostrar Não Lidas"
                },
                showMode: {
                    label: "Modo de Exibição",
                    description: "O modo usado para exibir canais ocultos.",
                    lock: "Estilo simples com ícone de cadeado em vez disso",
                    hidden: "Estilo mutado com ícone de olho oculto à direita",
                    lockIconRight: "Ícone de cadeado à direita"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Estado Padrão do Menu de Usuários e Cargos Permitidos",
                    description: "Se a lista suspensa de usuários e cargos permitidos em canais ocultos deve estar aberta por padrão"
                }
            },
            channelType: {
                text: "texto",
                announcement: "anúncio",
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
                list: "Visualização em lista",
                grid: "Visualização em galeria"
            },
            videoQuality: {
                auto: "Automático",
                full: "720p"
            },
            modal: {
                hidden: "oculto",
                locked: "bloqueado",
                threads: "tópicos",
                posts: "postagens",
                messages: "mensagens",
                post: "postagem",
                message: "mensagem",
                unknown: "desconhecido",
                permissionDetails: "Detalhes de Permissão",
                thisIsA: "Este é um canal de {{channelType}} {{status}}",
                canNotSee: "Você não pode ver as {{type}} deste canal.",
                guidelines: "No entanto, você pode ver as diretrizes dele:",
                lastCreated: "Último(a) {{type}} criado(a):",
                lastPin: "Última mensagem fixada:",
                threadSlowmode: "Modo lento padrão de tópicos:",
                slowmode: "Modo lento:",
                bitrate: "Taxa de bits:",
                region: "Região:",
                automatic: "Automático",
                videoQuality: "Modo de Qualidade de Vídeo:",
                inactiveArchiveDuration: "Duração de inatividade padrão antes de arquivar {{type}}",
                defaultLayout: "Layout padrão:",
                defaultSort: "Ordem de classificação padrão:",
                defaultReaction: "Emoji de reação padrão:",
                requireTag: "Postagens neste fórum exigem que uma tag seja definida.",
                availableTags: "Tags Disponíveis:",
                allowedUsersAndRoles: "Usuários e cargos permitidos:",
                hideAllowedUsersAndRoles: "Ocultar Usuários e Cargos Permitidos",
                viewAllowedUsersAndRoles: "Ver Usuários e Cargos Permitidos"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Exibe várias coisas ocultas e exclusivas para moderadores, independentemente das permissões.",
            option: {
                showTimeouts: {
                    label: "Mostrar Castigos de Membros no Chat",
                    description: "Mostrar ícones de castigo (timeout) de membros no chat."
                },
                showInvitesPaused: {
                    label: "Mostrar Convites Pausados",
                    description: "Mostrar a dica de convites pausados na lista de servidores."
                },
                showModView: {
                    label: "Mostrar Visão de Mod",
                    description: "Mostrar o item 'Visão do Moderador' no menu de contexto de membros em todos os servidores."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Adiciona uma opção no menu de contexto para mostrar embeds de links que não possuem um",
            context: {
                embed: {
                    show: "Mostrar Embed",
                    hide: "Remover Embed"
                }
            },
            error: {
                failed: "Falha ao obter embed",
                noEmbed: "Nenhum embed encontrado"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Exibe qualquer combinação de apelidos personalizados, apelidos de amigos, apelidos de servidor, nomes de exibição e nomes de usuário no chat.",
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
                    label: "Indicador de Digitação",
                    description: "Exibir o primeiro nome disponível listado no seu formato personalizado no indicador de digitação."
                },
                memberList: {
                    label: "Lista de Membros",
                    description: "Exibir o primeiro nome disponível do seu formato de nome personalizado na lista de membros, de DMs, de amigos e em Ativo agora."
                },
                profilePopout: {
                    label: "Popout de Perfil",
                    description: "Exibir o primeiro nome disponível listado no seu formato personalizado nos popouts de perfil."
                },
                voiceChannels: {
                    label: "Canais de Voz",
                    description: "Exibir o primeiro nome disponível listado no seu formato personalizado nos canais de voz."
                },
                reactions: {
                    label: "Reações",
                    description: "Exibir o primeiro nome disponível nas dicas de ferramentas de reação e o nome completo nos popouts de reação."
                },
                discriminators: {
                    label: "Discriminadores",
                    description: "Anexar discriminadores aos nomes de usuário para bots. Discriminadores foram descontinuados para usuários, mas ainda são usados para bots. Por padrão, o nome de um bot é equivalente ao seu nome global; anexar discriminadores os torna únicos novamente."
                },
                hideDefaultAtSign: {
                    label: "Ocultar Símbolo '@' Padrão",
                    description: "Ocultar o símbolo '@' antes do nome em menções e respostas. Aplicado apenas se qualquer recurso estiver ativado."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Truncar Todos os Nomes no Modo Streamer",
                    description: "Truncar todos os nomes, não apenas nomes de usuário, enquanto estiver no Modo Streamer."
                },
                removeDuplicates: {
                    label: "Remover Duplicados",
                    description: "Se algum dos nomes for equivalente, remova-os, deixando apenas os nomes únicos."
                },
                ignoreFonts: {
                    label: "Ignorar Fontes",
                    description: "Para o segundo, terceiro e quarto nomes, usar a fonte gg sans independentemente da fonte personalizada do usuário."
                },
                ignoreGradients: {
                    label: "Ignorar Gradientes",
                    description: "Para nomes não primários, se o cargo tiver um gradiente e a cor abaixo estiver definida como 'Role+-#', usar a cor primária em vez do gradiente, e se tiver um efeito Nitro, ignorá-lo inteiramente."
                },
                animateGradients: {
                    label: "Animar Gradientes",
                    description: "Para o segundo, terceiro e quarto nomes, se o cargo tiver um gradiente, animá-lo. Isso é desativado por 'Ignorar Gradientes' e movimento reduzido."
                },
                nameSeparator: {
                    label: "Separador de Nomes",
                    description: "O separador a ser usado entre nomes. O padrão é um único espaço."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Nome de Amigo Apenas em Mensagens Diretas",
                    description: "Apenas exibir nomes de amigos quando estiver em DMs, e não em servidores."
                },
                customNameOnlyInDirectMessages: {
                    label: "Nome Personalizado Apenas em Mensagens Diretas",
                    description: "Apenas exibir nomes personalizados quando estiver em DMs, e não em servidores."
                },
                alwaysShowEffects: {
                    label: "Sempre animar efeitos",
                    description: "Sempre mostrar efeitos como se você estivesse passando o cursor por cima."
                },
                includedNames: {
                    label: "Nomes Incluídos",
                    description: "A ordem para exibir nomes de usuário, nomes de exibição, apelidos e nomes de amigos. Use os seguintes placeholders: {user}, {display}, {nick}, {friend}. Você pode fornecer várias opções de fallback separando-as por vírgulas: {friend, nick, display}. É possível ter até três prefixos e sufixos por nome."
                },
                customNameColor: {
                    label: "Cor do Nome Personalizado",
                    description: "A cor para o nome personalizado que você atribuiu a um usuário se ele não for o primeiro exibido. Aceita qualquer entrada CSS válida. Use 'Role' para seguir as cores do cargo, ou 'Role+-#' para ajustar o brilho (ex: 'Role+15')"
                },
                friendNameColor: {
                    label: "Cor do Nome de Amigo",
                    description: "A cor para o apelido de um amigo se não for o primeiro exibido. Aceita qualquer entrada CSS válida. Use 'Role' para seguir as cores do cargo, ou 'Role+-#' para ajustar o brilho (ex: 'Role+15')"
                },
                nicknameColor: {
                    label: "Cor do Apelido",
                    description: "A cor para o apelido se não for o primeiro exibido. Aceita qualquer entrada CSS válida. Use 'Role' para seguir as cores do cargo, ou 'Role+-#' para ajustar o brilho (ex: 'Role+15')"
                },
                displayNameColor: {
                    label: "Cor do Nome de Exibição",
                    description: "A cor para o nome de exibição se não for o primeiro exibido. Aceita qualquer entrada CSS válida. Use 'Role' para seguir as cores do cargo, ou 'Role+-#' para ajustar o brilho (ex: 'Role+15')"
                },
                usernameColor: {
                    label: "Cor do Nome de Usuário",
                    description: "A cor para o nome de usuário se não for o primeiro exibido. Aceita qualquer entrada CSS válida. Use 'Role' para seguir as cores do cargo, ou 'Role+-#' para ajustar o brilho (ex: 'Role+15')"
                },
                triggerNameRerender: {
                    label: "Forçar Renderização de Nomes",
                    description: "Força a atualização dos nomes ao alternar esta configuração."
                },
                searchAutocomplete: {
                    description: "Exibir o primeiro nome disponível do seu formato de nome personalizado no preenchimento automático de menções e pesquisa.",
                    label: "Preenchimento automático da pesquisa"
                },
                styleDirectMessagesList: {
                    description: "Mostrar efeitos de nome de exibição em itens não selecionados sem precisar passar o mouse. Itens selecionados e com o mouse em cima continuam estilizados quando desativado.",
                    label: "Estilizar lista de mensagens diretas"
                },
                styleDirectMessagesMessages: {
                    description: "Mostrar efeitos de nome de exibição nos autores das mensagens sem passar o mouse. Nomes com o mouse em cima continuam estilizados quando desativado.",
                    label: "Estilizar mensagens nas DMs"
                },
                styleFriendsList: {
                    description: "Mostrar efeitos de nome de exibição sem passar o mouse. Itens com o mouse em cima continuam estilizados quando desativado.",
                    label: "Estilizar lista de amigos"
                },
                styleActiveNow: {
                    description: "Mostrar efeitos de nome de exibição sem passar o mouse. Itens com o mouse em cima continuam estilizados quando desativado.",
                    label: "Estilizar Ativo agora"
                },
                ignoreEffects: {
                    description: "Para nomes não principais, usar apenas a cor do cargo principal e omitir efeitos de nome de exibição.",
                    label: "Ignorar efeitos"
                },
                animateEffects: {
                    description: "Animar gradientes de cargo e efeitos de nome de exibição em nomes não principais. Isso é desativado por \"Ignorar efeitos\" e movimento reduzido.",
                    label: "Animar efeitos"
                },
                alwaysAnimateEffects: {
                    description: "Forçar a animação dos efeitos de nome de exibição quando já estiverem visíveis, mesmo sem passar o mouse.",
                    label: "Sempre animar efeitos"
                },
                gradientGlow: {
                    description: "Adicionar um brilho aos gradientes animados de usuário, assim como os gradientes de cargo do servidor brilham.",
                    label: "Brilho do gradiente"
                }
            },
            modal: {
                change: {
                    title: "Alterar Apelido SMYN"
                },
                add: {
                    title: "Adicionar Apelido SMYN"
                },
                setCustom: "Defina um apelido SMYN personalizado para este usuário. Utilize-o especificando {custom} nas configurações de modelo do SMYN.",
                nickname: "Apelido SMYN",
                reset: "Redefinir Apelido SMYN",
                cancel: "Cancelar"
            },
            text: {
                save: "Salvar",
                unknown: "Desconhecido"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Mostra quanto tempo falta para o castigo (timeout) de um usuário acabar, seja na dica da ferramenta do ícone ou ao lado dele",
            option: {
                displayStyle: {
                    label: "Estilo de Exibição",
                    description: "Como exibir a duração do castigo",
                    tooltip: "Na Dica da Ferramenta",
                    inline: "Ao lado do ícone de castigo"
                }
            },
            text: {
                timeoutRemaining: "de castigo restante"
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Mostra os canais ocultos atrás dos recursos do servidor na lista de canais"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Mostra o nome da música em vez do artista para a atividade do Spotify"
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Abre outro canal ou uma DM em uma barra lateral ou em uma janela popout",
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
                switch: "Trocar canais",
                popout: "Chat em popout",
                popoutClose: "Fechar chat em popout",
                popoutFor: "Chat em popout para {{channel}}",
                close: "Fechar chat na barra lateral"
            },
            option: {
                persistSidebar: {
                    label: "Persistir Chat na Barra Lateral",
                    description: "Manter o chat da barra lateral aberto mesmo ao reiniciar o Discord"
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
                    label: "Patch de Comunidade",
                    description: "Aplica correções a recursos como o Navegador de Canais ou a aba de Membros que servidores de comunidade possuem."
                },
                persistedPopoutWindowIds: {
                    description: "IDs de canal de chats em popout persistidos."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Texto de assinatura/fim automatizado",
            option: {
                name: {
                    label: "Nome",
                    description: "A assinatura que será adicionada ao final das suas mensagens"
                },
                textHeader: {
                    label: "Cabeçalho de Texto",
                    description: "Qual cabeçalho usar antes do texto"
                },
                showIcon: {
                    label: "Mostrar Ícone",
                    description: "Mostrar um ícone para alternar o plugin na barra de chat"
                },
                contextMenu: {
                    label: "Menu de Contexto",
                    description: "Adicionar opção para alternar a funcionalidade no menu de contexto de entrada de chat"
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
                    description: "Alternar sua assinatura",
                    toogle: "Alternar sua assinatura (padrão é alternar)",
                    enabled: "Assinatura ativada",
                    disabled: "Assinatura desativada"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Adiciona um botão à barra de chat para alternar o envio de uma mensagem silenciosa.",
            option: {
                persistState: {
                    label: "Persistir Estado",
                    description: "Como persistir o estado de mensagem silenciosa",
                    none: "Não persistir (resetar ao mudar de canal)",
                    channels: "Persistir entre canais",
                    restarts: "Persistir entre canais e reinicializações"
                },
                autoDisable: {
                    label: "Desativação Automática",
                    description: "Desativar automaticamente o modo silencioso após enviar uma mensagem"
                }
            },
            tooltip: {
                enable: "Ativar Mensagem Silenciosa",
                disable: "Desativar Mensagem Silenciosa"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Oculta seu indicador de digitação do chat.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Oculta seu indicador de digitação do chat.",
                    toggle: {
                        name: "alternar",
                        description: "Alternar funcionalidade globalmente, para o canal ou para o servidor (guild).",
                        global: "Global",
                        channel: "Canal",
                        guild: "Servidor"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Ocultar os indicadores de digitação de outros usuários acima da barra de chat."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Ocultar os indicadores de digitação de outros usuários na lista de membros."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Mostrar um ícone na barra de chat para alternar o plugin rapidamente."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Mostrar um menu suspenso no menu de contexto do chat para alternar as configurações rapidamente."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "Se a digitação deve ser ocultada em DMs/canais/servidores por padrão ou não."
                    }
                }
            },
            content: {
                updated: "Configurações de digitação silenciosa atualizadas.",
                noChanges: "Nenhuma alteração feita nas configurações de digitação silenciosa."
            },
            tooltip: {
                hidden: "Digitação Oculta ({{location}})",
                visible: "Digitação Visível ({{location}})",
                global: "Digitação Visível (Global)",
                voiceChannel: "Digitação sempre visível no chat do canal de voz conectado",
                temporary: "Digitação temporariamente visível neste canal devido a uma mensagem recente"
            },
            option: {
                enabledGlobally: {
                    label: "Ativado Globalmente",
                    description: "Alternar a funcionalidade do seu próprio indicador de digitação globalmente."
                },
                hideChatBoxTypingIndicators: {
                    label: "Ocultar Indicadores de Digitação na Barra de Chat",
                    description: "Ocultar indicadores de digitação de outros usuários acima da barra de chat."
                },
                hideMembersListTypingIndicators: {
                    label: "Ocultar Indicadores de Digitação na Lista de Membros",
                    description: "Ocultar indicadores de digitação de outros usuários na lista de membros."
                },
                chatIcon: {
                    label: "Ícone de Chat",
                    description: "Mostrar um ícone na barra de chat para modificar o plugin rapidamente."
                },
                chatIconLeftClickAction: {
                    label: "Ação de Clique Esquerdo no Ícone",
                    description: "O que fazer ao clicar com o botão esquerdo no ícone de chat.",
                    global: "Alternar Digitação Globalmente",
                    channel: "Alternar Digitação para o Canal",
                    guild: "Alternar Digitação para o Servidor",
                    settings: "Abrir Configurações do Plugin"
                },
                chatIconMiddleClickAction: {
                    label: "Ação de Clique do Meio no Ícone",
                    description: "O que fazer ao clicar com o botão do meio no ícone de chat.",
                    global: "Alternar Digitação Globalmente",
                    channel: "Alternar Digitação para o Canal",
                    guild: "Alternar Digitação para o Servidor",
                    settings: "Abrir Configurações do Plugin"
                },
                chatIconRightClickAction: {
                    label: "Ação de Clique Direito no Ícone",
                    description: "O que fazer ao clicar com o botão direito no ícone de chat.",
                    global: "Alternar Digitação Globalmente",
                    channel: "Alternar Digitação para o Canal",
                    guild: "Alternar Digitação para o Servidor",
                    settings: "Abrir Configurações do Plugin"
                },
                chatContextMenu: {
                    label: "Menu de Contexto do Chat",
                    description: "Mostrar um menu suspenso no menu de contexto do chat para modificar as configurações rapidamente."
                },
                defaultHidden: {
                    label: "Oculto por Padrão",
                    description: "Se ativado, o plugin ocultará sua digitação em qualquer DM/canal/servidor não listado em 'Locais Desativados'. Se desativado, o plugin mostrará sua digitação a menos que o local esteja em 'Locais Ativados'."
                },
                alwaysEnableInActiveVoiceChat: {
                    label: "Sempre ativar no chat de voz ativo",
                    description: "Sempre permitir que seu indicador de digitação apareça ao digitar em um canal de voz ao qual você está conectado."
                },
                temporaryEnableThresholdServers: {
                    label: "Limite de ativação temporária (servidores)",
                    description: "Permite temporariamente que seu indicador de digitação apareça por esta quantidade de segundos após enviar uma mensagem em um canal de servidor. Se o indicador já estiver visível no canal, esta configuração não terá efeito."
                },
                temporaryEnableThresholdDirectMessages: {
                    label: "Limite de ativação temporária (mensagens diretas)",
                    description: "Permite temporariamente que seu indicador de digitação apareça por esta quantidade de segundos após enviar uma mensagem em uma DM ou DM em grupo. Se o indicador já estiver visível no canal, esta configuração não terá efeito."
                },
                enabledLocations: {
                    label: "Locais Ativados",
                    description: "Ativar funcionalidade para estes IDs (DMs, canais ou servidores). Usado apenas se 'Oculto por Padrão' estiver desativado."
                },
                disabledLocations: {
                    label: "Locais Desativados",
                    description: "Desativar funcionalidade para estes IDs (DMs, canais ou servidores). Usado apenas se 'Oculto por Padrão' estiver ativado."
                }
            },
            text: {
                silentTyping: "Digitação silenciosa",
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
            description: "Deixe nevar no Discord!",
            about: {
                title: "Informações",
                paragraph: "Este plugin adiciona um efeito de neve natalino sobre a interface do Discord. Você pode alterar o tipo de neve nas configurações abaixo.",
                note: "NOTA: Embora na maioria dos computadores este plugin não afete o desempenho mais do que qualquer extensão Plexcord comum, ele pode causar lentidão em sistemas mais modestos."
            },
            option: {
                typeOfSnow: {
                    label: "Tipo de Neve",
                    description: "Altera o tipo de neve exibido (afeta o desempenho).",
                    solid: "Sólida (Melhor Desempenho)",
                    text: "Texto (Desempenho Médio)",
                    emoji: "Imagem (Menor Desempenho)"
                },
                maxSize: {
                    label: "Tamanho Máximo",
                    description: "Tamanho máximo dos flocos de neve"
                },
                speed: {
                    label: "Velocidade",
                    description: "Velocidade da queda (maior = queda mais rápida)"
                },
                flakesPerSecond: {
                    label: "Flocos por Segundo",
                    description: "Quantidade de flocos por segundo (maior = neve mais densa)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Ordena os pedidos de amizade pela data de recebimento",
            tooltip: "Adicionado em &mdash; {{date}}",
            option: {
                showDates: {
                    label: "Mostrar Datas",
                    description: "Mostrar datas nos pedidos de amizade"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Registra todos os sons de soundboard tocados em um chat de voz e permite baixá-los",
            tooltip: "Abrir Log de SoundBoard",
            option: {
                savedIds: {
                    label: "IDs de Soundboard Salvos",
                    description: "A quantidade de IDs de soundboard que você deseja salvar por vez (0 permite salvar infinitos)",
                    notNumber: "O valor não é um número.",
                    cantDecimal: "O valor não pode ser um número decimal.",
                    cantNegative: "O valor não pode ser um número negativo.",
                    heading: "Quantidade de IDs salvos",
                    warning: "Aviso! Definir o número para um valor menor resetará o log!",
                    placeholder: "Insira um número"
                },
                fileType: {
                    label: "Tipo de Arquivo",
                    description: "O formato no qual você deseja salvar seu arquivo"
                },
                openLogs: {
                    label: "Abrir Logs",
                    description: "Mostra os logs",
                    button: "Abrir Logs"
                },
                soundVolume: {
                    label: "Volume do Som",
                    description: "Altura do som de alternância (0 para desativar)"
                },
                iconLocation: {
                    label: "Localização do Ícone",
                    description: "Escolha onde mostrar o ícone do Log de SoundBoard (requer reinicialização)",
                    toolbar: "Barra de Ferramentas",
                    chatInput: "Entrada de Chat"
                }
            },
            modal: {
                title: "Logs de SoundBoard",
                loading: "Carregando sons...",
                noLogs: "Nenhum som registrado ainda. Entre em um chat de voz para começar a registrar!",
                clearLogs: "Limpar Logs",
                played: "Tocado {{time}} vez(es)",
                last: "Última vez tocado:",
                also: "Também tocado:",
                download: "Baixar",
                copyId: "Copiar ID",
                copied: "ID copiado para a área de transferência!",
                playSound: "Tocar Som",
                moreUsers: "Outras pessoas usaram este som...",
                volume: "Volume do Soundboard"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Divide mensagens grandes demais em partes do tamanho do Discord antes de enviar.",
            option: {
                maxLength: {
                    label: "Comprimento Máximo da Mensagem",
                    description: "Comprimento máximo antes de dividir. Defina como 0 para detecção automática."
                },
                disableFileConversion: {
                    label: "Desativar Conversão de Arquivo",
                    description: "Se ativado, desativa a conversão para arquivo em mensagens grandes."
                },
                sendDelay: {
                    label: "Atraso de Envio",
                    description: "Atraso mínimo entre cada parte, em segundos."
                },
                hardSplit: {
                    label: "Divisão Forçada",
                    description: "Se ativado, divide exatamente no último caractere em vez de no último espaço/quebra de linha."
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
                cannotSplitThisMessage: "Não é possível dividir esta mensagem por causa do modo lento do canal.",
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
            description: "Ouça junto gratuitamente, sem pausa automática em chats de voz e permite que a atividade continue tocando ao ficar inativo",
            option: {
                noSpotifyAutoPause: {
                    label: "Sem Pausa Automática do Spotify",
                    description: "Desativa a pausa automática do Spotify."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Manter Atividade do Spotify ao ficar Inativo",
                    description: "Mantém a atividade do Spotify tocando ao ficar inativo"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Compartilhe sua faixa, álbum ou artista atual do Spotify via comandos de barra (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Compartilha seu/sua {{type}} atual do Spotify no chat",
                    track: "Você não está ouvindo nenhuma faixa no Spotify.",
                    find: "Falha ao encontrar a faixa no Spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Adiciona os tempos de inicialização (Startup Timings) ao menu de Configurações",
            modal: {
                title: "Tempos de inicialização",
                ended: "Rastreamento encerrado em:",
                start: "Início",
                interval: "Intervalo",
                delta: "Delta",
                event: "Evento",
                serverTrace: "Rastreamento do Servidor",
                loading: "Carregando..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Adiciona notificações para mudanças de status",
            loading: "Carregando...",
            option: {
                notificationsSound: {
                    label: "Som de Notificação",
                    description: "Tocar um som para notificações de status?"
                },
                usersList: {
                    label: "Lista de Usuários",
                    description: "Lista de usuários para notificar na mudança de status",
                    empty: "Nenhum usuário rastreado. Clique com o botão direito em um usuário e selecione 'Notificações de Status' para adicioná-lo."
                }
            },
            context: {
                label: "Notificações de Status",
                notifications: "Notificações",
                type: {
                    all: "Todos",
                    online: "Online",
                    offline: "Offline",
                    none: "Nenhum"
                }
            },
            notification: {
                unknownUser: "Usuário",
                title: "Notificações de Status"
            },
            status: {
                online: "Online",
                idle: "Ausente",
                dnd: "Não Perturbe",
                offline: "Offline",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Permite que você salve seus status e os defina mais tarde",
            button: {
                remember: "Lembrar Status"
            },
            context: {
                edit: "Editar Presets Personalizados",
                set: "Definir Status Personalizado",
                delete: "Excluir predefinição"
            },
            notification: {
                successfully: "Status salvo com sucesso"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Sincronize seu status com a Steam! (Online, Ausente, Invisível ou Offline.)",
            option: {
                onlineStatus: {
                    label: "Status Online",
                    description: "Status na Steam quando estiver Online no Discord"
                },
                idleStatus: {
                    label: "Status Ausente",
                    description: "Status na Steam quando estiver Ausente (Idle) no Discord"
                },
                dndStatus: {
                    label: "Status Não Perturbe",
                    description: "Status na Steam quando estiver em Não Perturbe no Discord"
                },
                invisibleStatus: {
                    label: "Status Invisível",
                    description: "Status na Steam quando estiver Invisível no Discord"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Ficar Invisível se a Atividade estiver Oculta",
                    description: "Define o status da Steam como Invisível quando a atividade do Discord estiver oculta"
                }
            },
            status: {
                online: "Online",
                away: "Ausente",
                invisible: "Invisível",
                offline: "Offline (Desconectar Chat da Steam)",
                disabled: "Desativado"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Permite bloquear a exibição de adesivos (stickers).",
            option: {
                showGif: {
                    label: "Mostrar GIF",
                    description: "Se deve mostrar um GIF de gato estiloso."
                },
                showMessage: {
                    label: "Mostrar Mensagem",
                    description: "Se deve mostrar uma mensagem detalhando qual ID foi bloqueado"
                },
                showButton: {
                    label: "Mostrar Botão",
                    description: "Se deve mostrar um botão para desbloquear o adesivo"
                },
                blockedStickers: {
                    label: "Adesivos Bloqueados",
                    description: "A lista de IDs de adesivos bloqueados (não edite a menos que saiba o que está fazendo)"
                }
            },
            modal: {
                blocked: "Adesivo Bloqueado. ID: {{id}} NOME: {{name}}",
                unblock: "Desbloquear {{name}}"
            },
            context: {
                blockSticker: "Bloquear Adesivo",
                unblockSticker: "Desbloquear Adesivo"
            },
            text: {
                failedToRender: "Falha ao renderizar :("
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Faz com que ao escolher um adesivo, ele seja inserido na caixa de texto em vez de ser enviado instantaneamente"
        },
        streaks: {
            name: "Streaks",
            description: "Mostra uma sequência ao lado de um usuário quando vocês trocam DMs em dias consecutivos.",
            tooltip: "Sequência de {{count}} dias",
            tooltipExpiring: "Sequência de {{count}} dias — conversem hoje para mantê-la!",
            option: {
                account: {
                    description: "Entre ou saia da API de Streaks. As sequências ficam salvas na API, então você precisa entrar para que sejam contadas.",
                    login: "Entrar na API de Streaks",
                    logout: "Sair da API de Streaks"
                },
                eliteColor: "Cor da sequência elite (100+ dias)",
                diamondColor: "Cor da sequência diamante (60+ dias)",
                platinumColor: "Cor da sequência platina (45+ dias)",
                goldColor: "Cor da sequência ouro (30+ dias)",
                silverColor: "Cor da sequência prata (14+ dias)",
                bronzeColor: "Cor da sequência bronze (7+ dias)",
                defaultColor: "Cor padrão da sequência (1+ dias)"
            },
            toast: {
                authFailed: "Falha na autorização: {{error}}",
                failedToAuthorizeMessage: "Falha ao autorizar: {{message}}",
                authorizationExpired: "A autorização do Streaks expirou. Autorize novamente nas configurações do plugin Streaks."
            }
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Ativa automaticamente o Modo Streamer quando você inicia uma transmissão no Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Desative os codecs de vídeo que quiser para transmissões e câmeras.",
            option: {
                disableAv1Codec: {
                    label: "Desativar Codec AV1",
                    description: "Fazer o Discord não considerar usar AV1 para transmissões e câmeras."
                },
                disableH265Codec: {
                    label: "Desativar Codec H265",
                    description: "Fazer o Discord não considerar usar H265 para transmissões e câmeras."
                },
                disableH264Codec: {
                    label: "Desativar Codec H264",
                    description: "Fazer o Discord não considerar usar H264 para transmissões e câmeras."
                },
                disableVP8Codec: {
                    label: "Desativar Codec VP8",
                    description: "Fazer o Discord não considerar usar VP8 para transmissões e câmeras."
                },
                disableVP9Codec: {
                    label: "Desativar Codec VP9",
                    description: "Fazer o Discord não considerar usar VP9 para transmissões e câmeras."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Personalize o limite de Super Reações tocando ao mesmo tempo e use Super Reação por padrão",
            option: {
                superReactByDefault: {
                    label: "Super Reação por Padrão",
                    description: "O seletor de reações usará Super Reações por padrão"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Super Reações Ilimitadas",
                    description: "Remove o limite de Super Reações tocando simultaneamente"
                },
                superReactionPlayingLimit: {
                    label: "Limite de Super Reações",
                    description: "Máximo de Super Reações para tocar ao mesmo tempo. Defina como 0 para desativar as Super Reações."
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Substituir texto em suas mensagens. Você pode encontrar regras pré-definidas no canal #textreplace-rules no servidor do Plexcord",
            option: {
                replace: {
                    label: "Substituir",
                    string: "Substituições simples",
                    stringDescription: "Regras simples de localizar e substituir. Por exemplo, encontrar 'brb' e substituir por 'be right back'",
                    regex: "Substituições com Regex",
                    regexDescription: "Substituições mais avançadas usando expressões regulares. Esta seção é para usuários avançados. Se você não entender, simplesmente ignore",
                    myMessages: "Aplicar às suas mensagens (visível para todos)",
                    othersMessages: "Aplicar às mensagens de outros (visível apenas para você)",
                    allMessages: "Aplicar a todas as mensagens"
                },
                stringRules: {
                    label: "Regras de Texto",
                    description: "Regras para substituir texto usando correspondência de string."
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
                find: "Localizar",
                findRegex: "Padrão regex",
                findText: "Texto a substituir",
                replace: "Substituir",
                replaceDescription: "O texto que substituirá o texto encontrado",
                includes: "Somente se incluir",
                includesDescription: "Esta regra será aplicada apenas se a mensagem incluir este texto. Isto é opcional",
                type: "Digite uma mensagem",
                applied: "Mensagem com regras aplicadas",
                delete: "Excluir regra",
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
            description: "Adiciona atributos de dados a vários elementos para fins de personalização de temas"
        },
        timezones: {
            name: "Timezones",
            description: "Mostra a hora local dos usuários nos perfis e cabeçalhos de mensagens",
            button: {
                wantToSave: "Quer salvar seu fuso horário no banco de dados? Clique aqui para defini-lo.",
                yourLocalTimezone: "(Seu fuso horário local)"
            },
            context: {
                set: "Definir Fuso Horário Local"
            },
            toast: {
                refresh: {
                    successfully: "Fuso horários atualizados com sucesso!",
                    failed: "Falha ao atualizar fuso horários!",
                    failedTo: "Falha ao atualizar fuso horários."
                },
                update: {
                    successfully: "Fuso horário atualizado com sucesso!",
                    failed: "Falha ao definir fuso horário."
                },
                delete: {
                    successfully: "Fuso horário excluído com sucesso!",
                    failed: "Falha ao excluir fuso horário."
                },
                auth: {
                    failed: "Falha na autenticação.",
                    success: "Autorização bem-sucedida!"
                }
            },
            toolbox: {
                set: "Definir Fuso Horário no Banco de Dados",
                refresh: "Atualizar Fuso Horários do Banco de Dados"
            },
            option: {
                showOwnTimezone: {
                    label: "Mostrar Próprio Fuso Horário",
                    description: "Mostrar seu próprio fuso horário nos perfis e cabeçalhos de mensagens"
                },
                twentyFourHourTime: {
                    label: "Formato 24 Horas",
                    description: "Mostrar a hora no formato 24 h"
                },
                showTimezoneInfo: {
                    label: "Mostrar Informações de Fuso Horário",
                    description: "Mostrar informações do fuso horário ao lado da hora"
                },
                showMessageHeaderTime: {
                    label: "Mostrar Hora no Cabeçalho da Mensagem",
                    description: "Mostrar a hora nos cabeçalhos das mensagens"
                },
                showProfileTime: {
                    label: "Mostrar Hora no Perfil",
                    description: "Mostrar a hora nos perfis de usuário"
                },
                useDatabase: {
                    label: "Usar Banco de Dados de Fuso Horário",
                    description: "Ativar banco de dados para obter fuso horários de usuários"
                },
                preferDatabaseOverLocal: {
                    label: "Preferir Banco de Dados sobre Local",
                    description: "Preferir banco de dados em vez do armazenamento local para fuso horários"
                },
                databaseUrl: {
                    label: "URL do Banco de Dados",
                    description: "A URL do servidor de banco de dados de fuso horário"
                },
                setDatabaseTimezone: {
                    label: "Definir Fuso Horário no Banco",
                    description: "Definir seu fuso horário no banco de dados",
                    setTimezone: "Definir Fuso Horário no Banco de Dados"
                },
                resetDatabaseTimezone: {
                    label: "Redefinir Fuso Horário no Banco",
                    description: "Redefinir seu fuso horário no banco de dados",
                    failed: "Falha ao redefinir fuso horário do banco de dados"
                },
                askedTimezone: {
                    label: "Fuso Horário Solicitado",
                    description: "Se o usuário foi solicitado a definir seu fuso horário"
                },
                recipientTimezoneInDms: {
                    label: "Fuso horário do destinatário nas DMs",
                    description: "Nas DMs, mostrar o fuso horário do destinatário nas suas mensagens"
                },
                showLocalTimezone: {
                    label: "Mostrar fuso horário local",
                    description: "Mostrar o fuso horário local em vez de apenas \"local\""
                }
            },
            modal: {
                title: "Fuso Horários",
                select: "Selecionar Fuso Horário",
                selectPlaceholder: "Selecione um fuso horário",
                delete: "Excluir Fuso Horário",
                save: "Salvar"
            },
            text: {
                invalidResponseFormat: "Formato de resposta inválido"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "Mostra uma notificação (toast) sempre que você receber uma mensagem direta.",
            notification: {
                call: "Iniciou uma chamada com você!",
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
                    embed: "Enviou uma integração (embed).",
                    sticker: "Enviou uma figurinha.",
                    attachment: "Anexo:"
                },
                redacted: "O conteúdo da mensagem foi redigido.",
                friend: {
                    accept: "{{user}} agora é seu amigo",
                    acceptBody: "Você já pode enviar mensagens diretas para eles.",
                    request: "{{user}} enviou um pedido de amizade.",
                    requestBody: "Você pode aceitar ou recusar na aba de Amigos."
                },
                example: {
                    title: "Exemplo de Notificação",
                    body: "Este é um exemplo de corpo de notificação."
                }
            },
            modal: {
                dismiss: "Dispensar Notificação",
                attachments: "{{attachments}} anexo{{s}} {{were}} enviado(s)."
            },
            option: {
                position: {
                    label: "Posição",
                    description: "A posição da notificação toast",
                    topRight: "Superior Direito",
                    topLeft: "Superior Esquerdo",
                    bottomRight: "Inferior Direito",
                    bottomLeft: "Inferior Esquerdo"
                },
                timeout: {
                    label: "Tempo de Exibição",
                    description: "Tempo em segundos que as notificações serão exibidas"
                },
                opacity: {
                    label: "Opacidade",
                    description: "A opacidade da notificação toast"
                },
                determineServerNotifications: {
                    label: "Respeitar Notificações do Servidor",
                    description: "Determinar se deve mostrar notificações com base nas configurações de notificação do servidor"
                },
                respectDoNotDisturb: {
                    label: "Respeitar Não perturbe",
                    description: "Não mostrar notificações quando seu status for Não perturbe."
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
                    description: "Mostrar notificações quando amigos enviam mensagens em servidores que compartilham com você"
                },
                friendActivity: {
                    label: "Atividade de Amizade",
                    description: "Mostrar notificações ao adicionar alguém ou receber um pedido de amizade"
                },
                notifyFor: {
                    label: "Notificar Para",
                    description: "Crie uma lista de IDs de canais para receber notificações (separados por vírgulas)"
                },
                ignoreUsers: {
                    label: "Ignorar Usuários",
                    description: "Crie uma lista de IDs de usuários para ignorar todas as suas notificações (separados por vírgulas)"
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
            description: "Adiciona um atalho personalizável para alternar a webcam.",
            option: {
                keyBind: {
                    label: "Atalho de Teclado",
                    description: "A tecla para alternar a webcam quando pressionada."
                },
                reqCtrl: {
                    label: "Requer Ctrl",
                    description: "Requer que a tecla Control esteja pressionada."
                },
                reqShift: {
                    label: "Requer Shift",
                    description: "Requer que a tecla Shift esteja pressionada."
                },
                reqAlt: {
                    label: "Requer Alt",
                    description: "Requer que a tecla Alt esteja pressionada."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Traduzir mensagens com Google Translate ou DeepL",
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
                    label: "Idioma de Entrada (Recebido)",
                    description: "Idioma do qual as mensagens recebidas devem ser traduzidas"
                },
                receivedOutput: {
                    label: "Idioma de Saída (Recebido)",
                    description: "Idioma para o qual as mensagens recebidas devem ser traduzidas"
                },
                sentInput: {
                    label: "Idioma de Entrada (Enviado)",
                    description: "Idioma do qual suas próprias mensagens devem ser traduzidas"
                },
                sentOutput: {
                    label: "Idioma de Saída (Enviado)",
                    description: "Idioma para o qual suas próprias mensagens devem ser traduzidas"
                },
                service: {
                    label: "Serviço de Tradução",
                    description: "DeepL requer uma chave de API paga do DeepL Pro",
                    descriptionWeb: "Serviço de tradução (Não suportado na Web!)",
                    google: "Google Translate",
                    deepl: "DeepL Gratuito - Chave de API necessária",
                    deeplPro: "DeepL Pro - Chave de API necessária",
                    kagi: "Kagi Translate - Chave de API necessária"
                },
                kagiSession: {
                    label: "Sessão do Kagi",
                    description: "Obtenha seu token de sessão em https://kagi.com/settings?p=user_details"
                },
                deeplApiKey: {
                    label: "Chave de API do DeepL",
                    description: "Sua chave de API do DeepL",
                    placeholder: "Obtenha sua chave em https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Tradução Automática",
                    description: "Traduzir automaticamente suas mensagens antes de enviar. Você também pode segurar Shift e clicar com o botão direito no botão de traduzir para alternar isso"
                },
                showAutoTranslateTooltip: {
                    label: "Mostrar Dica de Tradução Automática",
                    description: "Mostrar uma dica no botão da barra de chat sempre que uma mensagem for traduzida automaticamente"
                }
            },
            modal: {
                title: "Traduzir",
                select: "Selecionar um idioma",
                auto: "Tradução Automática",
                dismiss: "Dispensar",
                translated: "traduzido de {{from}}",
                failed: {
                    to: "Falha ao traduzir {{text}}",
                    connect: "Falha ao conectar à API do DeepL:"
                },
                wrong: "Algo deu errado. Se este problema persistir, verifique o console ou peça ajuda no servidor de suporte.",
                deepl: {
                    api: "Cota da API do DeepL excedida. Revertendo para Google Translate.",
                    apiKey: "A chave de API do DeepL não foi definida. Revertendo para Google",
                    auth: "Chave de API ou versão do DeepL inválida"
                },
                autoTranslateEnabled: {
                    title: "Tradução Automática do Plexcord Ativada",
                    body: "Você acabou de ativar a Tradução Automática! Qualquer mensagem será traduzida automaticamente antes de ser enviada.",
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
            description: "Adiciona um indicador se alguém estiver digitando em um canal.",
            option: {
                includeCurrentChannel: {
                    label: "Incluir Canal Atual",
                    description: "Se deve mostrar o indicador de digitação para o canal selecionado no momento"
                },
                includeMutedChannels: {
                    label: "Incluir Canais Mutados",
                    description: "Se deve mostrar o indicador de digitação para canais mutados."
                },
                includeIgnoredUsers: {
                    label: "Incluir Usuários Ignorados",
                    description: "Se deve mostrar o indicador de digitação para usuários ignorados."
                },
                includeBlockedUsers: {
                    label: "Incluir Usuários Bloqueados",
                    description: "Se deve mostrar o indicador de digitação para usuários bloqueados."
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
            description: "Mostra avatares e cores de cargos no indicador de digitação",
            option: {
                showAvatars: {
                    label: "Mostrar Vários Usuários",
                    description: "Mostrar avatares no indicador de digitação"
                },
                showRoleColors: {
                    label: "Mostrar Cores de Cargos",
                    description: "Mostrar cores de cargos no indicador de digitação"
                },
                alternativeFormatting: {
                    label: "Formatação Alternativa",
                    description: "Mostrar uma mensagem mais útil quando vários usuários estiverem digitando"
                },
                amITyping: {
                    label: "Estou Digitando?",
                    description: "Mostra se outras pessoas podem ver você digitando"
                }
            },
            others: {
                areTyping: "e {{count}} outros estão digitando..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Remove o recuo inicial de blocos de código (codeblocks)"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Converte unidades métricas para imperiais e vice-versa",
            tooltip: "Converter Unidades",
            option: {
                myUnits: {
                    label: "Minhas Unidades",
                    description: "As unidades que você usa e para as quais deseja converter as coisas. O padrão é Imperial",
                    imperial: "Imperial",
                    metric: "Métrico"
                }
            },
            button: {
                dismiss: "Dispensar"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "Aumenta a quantidade de contas que você pode adicionar.",
            option: {
                maxAccounts: {
                    label: "Máximo de Contas",
                    description: "Número de contas que podem ser adicionadas, ou 0 para sem limite"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Permite dar zoom mais profundo na ferramenta de corte de imagem ao mudar seu avatar",
            option: {
                zoomMultiplier: {
                    label: "Multiplicador de Zoom",
                    description: "Multiplicador de zoom"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Permite reativar integrações (embeds) que foram suprimidas em mensagens",
            context: {
                unsuppress: "Reativar Embed",
                suppress: "Suprimir Embed"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Mostra informações aleatórias e inúteis no Discord; atalhos e espaçamento são ajustáveis.",
            recording: "Gravando...",
            record: "Gravar",
            option: {
                delay: {
                    label: "Intervalo de Notificação",
                    description: "Intervalo de exibição das notificações em minutos"
                },
                historyHotkey: {
                    label: "Atalho do Painel de Histórico",
                    description: "Tecla de atalho para mostrar o histórico de fatos exibidos anteriormente"
                },
                randomFactHotkey: {
                    label: "Atalho de Fato Aleatório",
                    description: "Tecla de atalho para abrir o painel de fatos aleatórios"
                },
                sameFact: {
                    label: "Evitar repetir itens",
                    description: "Evitar mostrar o mesmo fato várias vezes até que todos tenham sido exibidos"
                },
                lastNFacts: {
                    label: "Quantos recentes evitar",
                    description: "Número de fatos exibidos recentemente a evitar repetir (0 = sempre)"
                }
            },
            modal: {
                title: "UselessInfo",
                history: {
                    none: "Nenhum fato ainda. Use o atalho ou aguarde.",
                    source: "Fonte"
                },
                showRandom: "Mostrar Aleatório",
                close: "Fechar"
            },
            notification: {
                title: "Você sabia?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "Mostra os pronomes do usuário nos cabeçalhos de mensagens",
            option: {
                pronounsFormat: {
                    label: "Formato dos Pronomes",
                    description: "O formato em que os pronomes aparecerão no chat",
                    lowercase: "Minúsculo",
                    capitalized: "Capitalizado"
                },
                showSelf: {
                    label: "Mostrar Próprios",
                    description: "Ativar ou desativar a exibição dos seus próprios pronomes"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Mostra um indicador quando um usuário está em um canal de voz",
            option: {
                showInUserProfileModal: {
                    label: "Mostrar no Modal de Perfil",
                    description: "Mostrar o indicador de canal de voz do usuário no perfil deles, ao lado do nome"
                },
                showInMemberList: {
                    label: "Mostrar na Lista de Membros",
                    description: "Mostrar o indicador de canal de voz na lista de membros e DMs"
                },
                showInMessages: {
                    label: "Mostrar em Mensagens",
                    description: "Mostrar o indicador de canal de voz nas mensagens"
                }
            },
            modal: {
                inVoiceChat: "Em Chat de Voz"
            },
            notification: {
                cannotJoin: "Você não pode entrar no canal de voz do usuário."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Exibe banners de usuários do USRBG, permitindo que qualquer pessoa tenha um banner sem Nitro",
            option: {
                nitroFirst: {
                    label: "Nitro Primeiro",
                    description: "Banner a ser usado se ambos os banners (Nitro e USRBG) estiverem presentes",
                    nitro: "Banner do Nitro",
                    usrbg: "Banner do USRBG"
                },
                voiceBackground: {
                    label: "Fundo de Voz",
                    description: "Usar banners do USRBG como fundos do chat de voz"
                }
            },
            button: "Obtenha seu próprio banner USRBG"
        },
        validReply: {
            name: "ValidReply",
            description: "Corrige o erro 'A mensagem não pôde ser carregada' ao passar o mouse sobre uma resposta"
        },
        validUser: {
            name: "ValidUser",
            description: "Corrige menções de usuários desconhecidos que aparecem como '@unknown-user' (passe o mouse sobre uma menção para corrigir)",
            badges: {
                discordBugHunter: "Caçador de Bugs do Discord",
                moderatorProgramsAlumni: "Ex-aluno dos Programas de Moderadores",
                discordStaff: "Staff do Discord",
                hypeSquadEvents: "Eventos HypeSquad",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                partneredServerOwner: "Dono de Servidor Parceiro",
                nitro: "Discord Nitro",
                earlySupporter: "Apoiador Inicial",
                earlyVerifiedBotDeveloper: "Desenvolvedor de Bot Verificado Antigo"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Entrar em chats de voz com um clique duplo em vez de um clique simples"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Anuncia quando usuários entram, saem ou se movem entre canais de voz via narrador",
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
                    description: "Velocidade da fala do Narrador"
                },
                sayOwnName: {
                    label: "Dizer Próprio Nome",
                    description: "Dizer seu próprio nome"
                },
                latinOnly: {
                    label: "Apenas Latim",
                    description: "Remover caracteres não-latinos dos nomes antes de narrá-los"
                },
                joinMessage: {
                    label: "Mensagem de Entrada",
                    description: "Mensagem dita ao entrar"
                },
                leaveMessage: {
                    label: "Mensagem de Saída",
                    description: "Mensagem dita ao sair"
                },
                moveMessage: {
                    label: "Mensagem de Movimentação",
                    description: "Mensagem dita ao mover de canal"
                },
                muteMessage: {
                    label: "Mensagem de Mute",
                    description: "Mensagem de mute (apenas para si mesmo por enquanto)"
                },
                unmuteMessage: {
                    label: "Mensagem de Unmute",
                    description: "Mensagem de unmute (apenas para si mesmo por enquanto)"
                },
                deafenMessage: {
                    label: "Mensagem de Ensurdecer",
                    description: "Mensagem ao ensurdecer (apenas para si mesmo por enquanto)"
                },
                undeafenMessage: {
                    label: "Mensagem de Ouvir",
                    description: "Mensagem ao parar de ensurdecer (apenas para si mesmo por enquanto)"
                }
            },
            modal: {
                title: "Tocar Sons de Exemplo",
                voiceTitle: "Voz",
                voice: "Selecione uma voz",
                languageTitle: "Idioma",
                language: "Selecione um idioma",
                noVoice: "Nenhuma voz de narrador encontrada. ",
                linuxNote: "Instale speech-dispatcher ou espeak e execute o Discord com a flag --enable-speech-dispatcher",
                someNarrator: "Tente instalar algumas nas configurações de Narrador do seu Sistema Operacional",
                dontHaveEnglish: "Você não tem vozes em inglês instaladas, então o narrador pode soar estranho",
                customiseMessages: "Você pode personalizar as mensagens faladas abaixo. Você pode desativar mensagens específicas deixando-as vazias",
                placeholdersInfo: "Os placeholders {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} e {{CHANNEL}} serão substituídos pelo nome do usuário (nada se for você), o nome de exibição, o apelido no servidor atual e o nome do canal, respectivamente"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Torna avatares e banners nos perfis clicáveis, adiciona opções de Ver Avatar/Banner nos menus de contexto de usuários, servidores e grupos.",
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
                    description: "Escolha o formato de imagem para imagens não-animadas. Imagens animadas sempre usarão .gif"
                },
                imgSize: {
                    label: "Tamanho da Imagem",
                    description: "O tamanho da imagem a ser usada"
                }
            },
            text: {
                viewAvatarDecoration: "Ver decoração do avatar"
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Copiar e visualizar o conteúdo/dados brutos (raw) de qualquer mensagem, canal ou servidor",
            context: {
                copyLeft: "Copiar Raw (Clique Esq.) / Ver Raw (Clique Dir.)",
                copyRight: "Copiar Raw (Clique Dir.) / Ver Raw (Clique Esq.)",
                view: "Ver Raw"
            },
            option: {
                popoverButton: {
                    label: "Botão Popover",
                    description: "Mostrar um botão no menu suspenso da mensagem para visualizar os dados brutos."
                },
                clickMethod: {
                    label: "Método de Clique",
                    description: "Altere o botão para ver o conteúdo bruto de qualquer mensagem.",
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
                    description: "Remover dados sensíveis dos dados brutos, como seu e-mail e número de telefone.",
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
                user: "Usuário"
            },
            text: {
                copyTypeData: "Copiar dados de {{type}}",
                rawTypeData: "Dados brutos de {{type}}",
                messageData: "Dados da mensagem"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "Envie DM, mute ou ensurdeça rapidamente qualquer usuário diretamente do painel de chamada de voz.",
            option: {
                showChatButton: {
                    label: "Mostrar Botão de Chat",
                    description: "Se deseja exibir o botão de chat"
                },
                showMuteButton: {
                    label: "Mostrar Botão de Mute",
                    description: "Se deseja exibir o botão de silenciar"
                },
                showDeafenButton: {
                    label: "Mostrar Botão de Ensurdecer",
                    description: "Se deseja exibir o botão de ensurdecer"
                },
                muteSoundboard: {
                    label: "Mutar Soundboard",
                    description: "Alterna o soundboard do usuário ao clicar no botão de Ensurdecer."
                },
                disableVideo: {
                    label: "Desativar Vídeo",
                    description: "Alterna o vídeo do usuário ao clicar no botão de Ensurdecer."
                },
                useServer: {
                    label: "Usar Servidor",
                    description: "Usar mute/deafen de servidor em vez de local quando tiver permissão."
                },
                serverSelf: {
                    label: "Mute/Deafen de Servidor Próprio",
                    description: "Ensurdecer/Silenciar a si mesmo no servidor ao usar os botões."
                },
                showButtonsSelf: {
                    label: "Mostrar Botões em Si Mesmo",
                    description: "Se deseja exibir os botões para o seu próprio usuário.",
                    display: "Exibir",
                    hide: "Ocultar",
                    disable: "Desativar"
                },
                whichNameToShow: {
                    label: "Qual Nome Mostrar",
                    description: "Escolha se deseja mostrar o apelido ou nome de usuário na dica.",
                    global: "Nome Global",
                    username: "Nome de Usuário",
                    both: "Ambos"
                },
                buttonPosition: {
                    label: "Posição dos Botões",
                    description: "Escolha onde os botões serão exibidos.",
                    left: "Esquerda",
                    right: "Direita",
                }
            },
            tooltip: {
                navigate: "Ir para DMs",
                open: "Abrir DMs com {{username}}",
                yourself: "você mesmo",
                serverMute: "Mute de Servidor",
                serverDeafen: "Ensurdecer de Servidor",
                mute: "Silenciar",
                deafen: "Ensurdecer",
                unmute: "Desativar Mute",
                undeafen: "Desativar Ensurdecer",
                serverUnmute: "Desativar Mute de Servidor",
                serverUndeafen: "Desativar Ensurdecer de Servidor"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Registra quem entra e sai dos canais de voz",
            context: {
                view: "Ver Log do Canal"
            },
            modal: {
                joined: "Entrou em <#{{channel}}>",
                left: "Saiu de <#{{channel}}>",
                movedTo: "Moveu para <#{{channel}}>",
                movedFrom: "Moveu de <#{{channel}}>",
                noLogs: "Nenhum log para exibir.",
                logs: "Logs de {{channel}}"
            },
            option: {
                mode: {
                    label: "Modo",
                    description: "Como mostrar o log do canal de voz",
                    menu: "Menu de log",
                    associated: "Log direto no chat associado",
                    both: "Ambos"
                },
                voiceChannelChatSelf: {
                    label: "Log Próprio no Chat de Voz",
                    description: "Registrar seus próprios eventos de voz nos canais"
                },
                voiceChannelChatSilent: {
                    label: "Chat de Voz Silencioso",
                    description: "Mensagens de entrada/saída no chat de voz serão silenciosas"
                },
                voiceChannelChatSilentSelf: {
                    label: "Chat de Voz Silencioso para Si",
                    description: "Mensagens no chat de voz serão silenciosas se você estiver no canal"
                },
                ignoreBlockedUsers: {
                    label: "Ignorar Usuários Bloqueados",
                    description: "Não registrar usuários que você bloqueou"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Este plugin permite realizar múltiplas ações em um canal inteiro (mover, mutar, desconectar, etc.)",
            option: {
                waitAfter: {
                    label: "Aguardar após Ações",
                    description: "Quantidade de ações de API a realizar antes de aguardar (para evitar limites de taxa/rate limits)"
                },
                waitSeconds: {
                    label: "Segundos de Espera",
                    description: "Tempo de espera entre cada ação (em segundos)"
                }
            },
            context: {
                voiceTools: "Ferramentas de Voz",
                mentionAll: "Mencionar Todos",
                disconnectAll: "Desconectar Todos",
                muteAll: "Mutar Todos",
                unmuteAll: "Desativar Mute de Todos",
                deafenAll: "Ensurdecer Todos",
                undeafenAll: "Desativar Ensurdecer de Todos",
                moveAll: "Mover Todos"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Adiciona uma opção de download às mensagens de voz. (Abre uma nova aba no navegador)",
            context: {
                download: "Baixar mensagem de voz"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Permite enviar mensagens de voz como no celular. Clique com o botão direito no botão de upload e selecione 'Enviar Mensagem de Voz'.",
            option: {
                noiseSuppression: {
                    label: "Supressão de Ruído",
                    description: "Ativar Supressão de Ruído"
                },
                echoCancellation: {
                    label: "Cancelamento de Eco",
                    description: "Ativar Cancelamento de Eco"
                }
            },
            notification: {
                failed: {
                    upload: "Falha ao enviar mensagem de voz.",
                    start: "Falha ao iniciar gravação.",
                    finish: "Falha ao finalizar gravação."
                }
            },
            context: {
                sendVoiceMessage: "Enviar Mensagem de Voz",
                missingPermissions: "(Permissões Faltando)"
            },
            modal: {
                record: "Gravar Mensagem de Voz",
                upload: "Enviar Arquivo",
                preview: "Prévia",
                failed: "Falha ao analisar o arquivo de áudio selecionado:",
                oggOpus: "Mensagens de voz precisam ser OggOpus para tocar no iOS. Este arquivo é {{type}} e não funcionará no iOS.",
                fix: "Para corrigir, converta para OggOpus primeiro, usando por exemplo o {{link}}",
                sending: "Enviando mensagem de voz... Por favor, aguarde.",
                stop: "Parar gravação",
                start: "Iniciar gravação",
                resume: "Retomar gravação",
                pause: "Pausar gravação",
                recording: "GRAVANDO",
                send: "Enviar",
            },
            text: {
                convertioWebConverter: "conversor web do convertio"
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Permite definir o volume de usuários e transmissões acima do máximo padrão",
            option: {
                multiplier: {
                    label: "Multiplicador",
                    description: "Multiplicador de Volume"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Adiciona novamente menus de contexto ausentes na versão web do Discord: Links e Imagens, Área de Texto (Copiar, Recortar, Colar, Verificação Ortográfica)",
            option: {
                addBack: {
                    label: "Adicionar de Volta",
                    description: "Adicionar novamente os menus de contexto do Discord para imagens, links e barra de entrada de chat"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Readiciona atalhos que faltam na versão web do Discord. Só funciona totalmente no Plextron/Legcord, não no navegador",
            option: {
                showNavigationButtons: {
                    description: "Mostrar os botões de navegação voltar/avançar na barra de título.",
                    label: "Mostrar botões de navegação"
                },
                overrideCommonKeybinds: {
                    description: "Permite que o Discord substitua os atalhos mais comuns de navegação entre abas (ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+n). Só funciona em alguns navegadores que priorizam os atalhos de sites.",
                    label: "Substituir atalhos comuns"
                }
            }
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Remove o limite de 2500kbps de bitrate em clientes Chromium e Plextron.",
            option: {
                experimentalAV1Support: {
                    label: "Suporte Experimental a AV1",
                    description: "Ativar suporte ao codec AV1. Pode causar problemas como carregamento infinito da transmissão"
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Renderiza os avatares dos usuários que reagiram a uma mensagem",
            option: {
                avatarClick: {
                    label: "Clique no Avatar",
                    description: "Alternar se é possível clicar nos avatares das reações"
                },
                clickableAvatars: {
                    description: "Quando ativado, clicar no avatar de quem reagiu abrirá o perfil em vez de adicionar a reação",
                    label: "Avatares clicáveis"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Passe o mouse sobre o ícone de transmissão para ver quais usuários estão assistindo sua stream",
            modal: {
                noSpectator: "Sem espectadores"
            },
            option: {
                showPanel: {
                    label: "Mostrar Painel",
                    description: "Mostrar espectadores abaixo do painel de transmissão"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Altera a primeira letra de cada frase para maiúscula nas caixas de texto",
            option: {
                blockedWords: {
                    label: "Palavras Bloqueadas",
                    description: "Strings que não devem ser capitalizadas (separar por vírgula)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Encaminha notificações do Discord para o XSOverlay, facilitando a visualização em VR",
            notification: {
                call: {
                    title: "{{user}} está ligando para você.",
                    content: "Chamada recebida"
                },
                message: {
                    reply: " (resposta)",
                    embed: " [embed] ",
                    onlyEmbed: "Enviou integração(ões) de mensagem",
                    sticker: " [figurinha] ",
                    onlySticker: "Enviou uma figurinha",
                    image: "imagem",
                    attachment: "anexo"
                },
                test: {
                    title: "Olá do Plexcord!",
                    content: "Esta é uma notificação de teste! *Explode*",
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
                    description: "Ative se usar uma build antiga do XSOverlay. Ignorado na web."
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
                    label: "Notificações de Grupo",
                    description: "Permitir notificações de Mensagens em Grupo"
                },
                callNotifications: {
                    label: "Notificações de Chamadas",
                    description: "Permitir notificações de chamadas"
                },
                pingColor: {
                    label: "Cor de Menção",
                    description: "Cor da menção de usuário"
                },
                channelPingColor: {
                    label: "Cor de Menção de Canal",
                    description: "Cor da menção de canal"
                },
                soundPath: {
                    label: "Caminho do Som",
                    description: "Som da notificação (default/warning/error)"
                },
                timeout: {
                    label: "Tempo de Exibição",
                    description: "Duração da notificação (segs)"
                },
                lengthBasedTimeout: {
                    label: "Tempo Baseado no Comprimento",
                    description: "Estende a duração baseando-se no tamanho da mensagem"
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
            description: "Bloqueia anúncios em embeds do YouTube e na atividade 'Watch Together' via AdGuard"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "Adiciona descrições aos embeds de vídeos do YouTube"
        },
        addAttachments: {
            name: "AddAttachments",
            description: "Permite adicionar novos anexos ao editar mensagens",
            toast: {
                youCannotAddMore: "Você não pode adicionar mais anexos a esta mensagem.",
                youCanOnlyAdd: "Você só pode adicionar mais {{count}} anexo(s) a esta mensagem.",
                uploadingThisCanTake: "Enviando, isso pode demorar um pouco...",
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
                    label: "Recolhido por padrão"
                }
            },
            name: "AdvancedPermissions",
            description: "Mostra o cartão de permissões avançadas por padrão.",
            text: {
                simplifiedPermissions: "Permissões simplificadas"
            }
        },
        autoJumpToMessage: {
            option: {
                onlyWhenUnfocused: {
                    description: "Pular automaticamente para mensagens apenas quando a janela do Discord não estiver em foco.",
                    label: "Somente sem foco"
                }
            },
            name: "AutoJumpToMessage",
            description: "Abre automaticamente o canal das novas mensagens."
        },
        betterForwards: {
            text: {
                serverIconForName: "Ícone do servidor de {{name}}",
                messageAttachments: "Anexos da mensagem",
                messageTextWillNot: "O texto da mensagem não será encaminhado quando esta opção estiver desativada",
                forwardEverything: "Encaminhar tudo",
                viewServer: "Ver servidor",
                embed: "Incorporação",
                embedNumber: "Incorporação {{number}}",
                image: "Imagem",
                video: "Vídeo",
                serverIcon: "Ícone do servidor {{name}}",
                dmIcon: "Ícone de DM de {{name}}",
                groupDmIcon: "Ícone da DM em grupo {{name}}"
            },
            option: {
                resendOnFail: {
                    description: "Tentará reenviar uma mensagem encaminhada se o encaminhamento falhar. Pode causar menções ou spam de texto não intencionais. Ignora as restrições NSFW.",
                    label: "Reenviar em caso de falha"
                },
                forwardPreface: {
                    description: "Com o que a mensagem encaminhada deve começar",
                    label: "Prefixo de encaminhamento"
                },
                dontFollowForwards: {
                    description: "Após encaminhar uma única mensagem, não pular para ela. Segure Shift para ignorar esse comportamento.",
                    label: "Não seguir encaminhamentos"
                },
                selfForward: {
                    description: "Mostrar o canal atual no pop-up da lista de encaminhamento.",
                    label: "Encaminhar para si"
                }
            },
            name: "BetterForwards",
            description: "Utilitários de encaminhamento de mensagens, incluindo bypass de NSFW e melhorias na interface."
        },
        betterImageEditor: {
            text: {
                search: "Pesquisar",
                searchSavedPictures: "Pesquisar imagens salvas",
                clearTheSearch: "Limpar a pesquisa",
                savedPictures: "Imagens salvas",
                removeName: "Remover {{name}}",
                removeHoldShiftTo: "Remover. Segure Shift para pular a confirmação",
                originals: "Originais",
                putBackTheLast: "Restaurar o último",
                forgetEveryRememberedCrop: "Esquecer todos os recortes lembrados?",
                yourPicturesStayEach: "Suas imagens permanecem. Cada uma abrirá sem enquadramento a partir de agora, até que você a recorte novamente.",
                forget: "Esquecer",
                cancel: "Cancelar",
                clearSavedPictures: "Limpar imagens salvas?",
                everyPictureYouHave: "Todas as imagens salvas aqui serão removidas, junto com o recorte lembrado de cada uma. O arquivo do próprio Discord e seu avatar e banner atuais não são afetados.",
                clear: "Limpar",
                removeThisPicture: "Remover esta imagem?",
                remove: "Remover",
                keepTheCroppedCopy: "Manter a cópia recortada?",
                itGoesOnThe: "Ela vai para a prateleira {{toLowerCase}}, ao lado dos seus originais.",
                keep: "Manter",
                noThanks: "Não, obrigado",
                exportToAFile: "Exportar para um arquivo",
                importFromAFile: "Importar de um arquivo",
                forgetRememberedFraming: "Esquecer enquadramento lembrado",
                clearSavedPictures2: "Limpar imagens salvas",
                croppedKind: "{{kind}} recortados",
                unpinName: "Desafixar {{name}}",
                pinName: "Fixar {{name}}",
                pinnedNeverDrops: "Fixado, nunca sai da prateleira",
                pinNeverDrops: "Fixe para que nunca saia da prateleira",
                nothingMatches: "Nada aqui corresponde a isso",
                originalsEmpty: "As imagens que você escolhe, cola ou solta aparecem aqui",
                croppedEmpty: "As imagens que você recorta aparecem aqui",
                forgotFraming: "Enquadramento esquecido em {{count}} imagem(ns)",
                nothingFramed: "Nada estava enquadrado",
                pictureLibrary: "Biblioteca de imagens",
                addedPictures: "{{count}} imagem(ns) adicionada(s)",
                nothingNew: "Nada de novo nesse arquivo",
                shownOfTotal: "{{shown}} de {{total}}",
                keptCount: "{{count}} salvas",
                youAreWearingThis: "Você está usando isto",
                removePictureBody: "{{name}} será removida das suas imagens salvas, junto com o corte lembrado."
            },
            option: {
                librarySize: {
                    description: "Quantas imagens manter em cada prateleira.",
                    label: "Tamanho da biblioteca"
                },
                rememberCrop: {
                    description: "Restaura o zoom e a posição que você usou por último em uma imagem.",
                    label: "Lembrar recorte"
                },
                forgetFraming: {
                    description: "Descarta todos os recortes lembrados e abre cada imagem como o Discord faria.",
                    label: "Esquecer enquadramento"
                },
                saveCropped: {
                    description: "Mantém uma cópia de cada imagem depois de recortá-la.",
                    label: "Salvar recortadas"
                },
                askBeforeSavingCropped: {
                    description: "Perguntar primeiro em vez de manter a cópia recortada automaticamente.",
                    label: "Perguntar antes de salvar recortadas"
                },
                transfer: {
                    description: "Leve suas imagens, e o enquadramento de cada uma, para outro dispositivo.",
                    label: "Transferir"
                },
                clearLibrary: {
                    description: "Descarta todas as imagens que você salvou.",
                    label: "Limpar biblioteca"
                }
            },
            name: "BetterImageEditor",
            description: "Mantém uma prateleira com suas imagens no editor de avatar e banner, e lembra como você recortou cada uma.",
            toast: {
                couldNotExportYour: "Não foi possível exportar suas imagens",
                couldNotReadThat: "Não foi possível ler esse arquivo",
                thatPictureIsMissing: "Essa imagem está faltando",
                thatPictureIsToo: "Essa imagem é grande demais para o Discord",
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
                createdAtMustBe: "A data de criação deve ser uma data válida.",
                cancel: "Cancelar",
                uploadClipFile: "Enviar arquivo de clipe",
                fileName: "Nome do arquivo",
                title: "Título",
                epicMoment: "Momento épico",
                message: "Mensagem",
                checkOutThisClip: "Confira este clipe!",
                spoiler: "Spoiler",
                remix: "Remix",
                thumbnail: "Miniatura",
                file: "Arquivo",
                selectFile: "Selecionar arquivo",
                parseClipMetadataFrom: "Extrair metadados do clipe do arquivo",
                selectFriends: "Selecionar amigos",
                selectAGame: "Selecionar um jogo",
                customApplicationId: "ID de aplicativo personalizado",
                createdAt: "Criado em",
                participants: "Participantes",
                onlyTagPeopleWho: "Marque apenas pessoas que estavam presentes e consentiram em aparecer neste clipe.",
                gameApplication: "Jogo/Aplicativo",
                uploadClipFile2: "Enviar arquivo de clipe",
                uploading: "Enviando",
                upload: "Enviar",
                noFileSelected: "Nenhum arquivo selecionado",
                couldNotPrepare: "Não foi possível preparar o arquivo selecionado.",
                couldNotRead: "Não foi possível ler o arquivo selecionado.",
                couldNotUpdateMetadata: "Não foi possível atualizar os metadados do clipe.",
                notCompatible: "Este arquivo não é compatível. Use um clipe MP4 com vídeo H.264 e áudio AAC.",
                uploadFailed: "Falha no envio.",
                noUploadSlot: "O Discord não retornou um espaço de envio.",
                uploadCanceled: "Envio cancelado.",
                failedToUpload: "Falha ao enviar o clipe.",
                selectClipFile: "Selecionar arquivo de clipe",
                mp4Video: "Vídeo MP4"
            },
            name: "ClipUpload",
            description: "Adiciona um botão para enviar um arquivo de vídeo local como clipe do Discord.",
            toast: {
                checkingClipFile: "Verificando o arquivo do clipe.",
                convertingClipFile: "Convertendo o arquivo do clipe.",
                clipUploaded: "Clipe enviado."
            }
        },
        collapsibleUI: {
            name: "CollapsibleUI",
            description: "Superfícies recolhíveis nativas para canais, membros, botões do chat e área do usuário.",
            text: {
                collapsibleUi: "Interface recolhível",
                guildBar: "Barra de servidores",
                channelList: "Lista de canais",
                membersList: "Lista de membros",
                messageButtons: "Botões de mensagem",
                titleBar: "Barra de título",
                headerBar: "Barra de cabeçalho",
                userArea: "Área do usuário"
            },
            option: {
                detachUserArea: {
                    description: "Desacopla a área do usuário para que possa ser movida livremente quando não estiver recolhida.",
                    label: "Desacoplar área do usuário"
                },
                detachedUserAreaX: {
                    description: "Guarda a posição x da área do usuário desacoplada.",
                    label: "Área do usuário desacoplada X"
                },
                detachedUserAreaY: {
                    description: "Guarda a posição y da área do usuário desacoplada.",
                    label: "Área do usuário desacoplada Y"
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
                    description: "Mantém a área do usuário recolhida.",
                    label: "Área do usuário recolhida"
                }
            }
        },
        customCommands: {
            text: {
                cancel: "Cancelar",
                name: "Name",
                response: "Resposta",
                detectedArguments: "Argumentos detectados",
                exampleCommandResponse: "Exemplo de resposta do comando:",
                exampleUsage: "Exemplo de uso:",
                exampleOutput: "Exemplo de saída:",
                viewArgumentsGuide: "Ver guia de argumentos",
                editTag: "Editar tag",
                deleteTag: "Excluir tag",
                registeredTags: "Tags registradas",
                createTag: "Criar tag",
                aTagWithThe: "Não existe uma tag com o nome **{{name}}**!",
                successfullyDeletedTheTag: "A tag **{{name}}** foi excluída com sucesso!",
                ephemeralReserved: "O nome de argumento \"ephemeral\" é reservado e não pode ser usado.",
                createNewTag: "Criar nova tag",
                editTagSubtitle: "Edite seu comando personalizado.",
                createTagSubtitle: "Crie uma nova tag que será registrada como comando de barra.",
                save: "Salvar",
                create: "Criar",
                variablesHelp: "Sua resposta pode incluir variáveis entre chaves duplas, que se tornarão argumentos do comando, por exemplo",
                defaultValuesHelp: "Você pode definir argumentos com valores padrão usando um sinal de igual, por exemplo",
                noTagsYet: "Opa! Ainda não há tags, use `/tags create` para criar uma!",
                nameAlreadyExists: "Já existe uma tag com o nome \"{{name}}\" e ela será substituída.",
                defaultValue: "(padrão: {{value}})"
            },
            name: "CustomCommands",
            description: "Permite criar comandos de barra / tags personalizados",
            option: {
                tagsList: {
                    label: "Lista de tags"
                }
            },
            command: {
                ephemeral: "Se a resposta deve ser visível apenas para você",
                tags: "Gerenciar todos os comandos personalizados",
                create: "Criar uma nova tag",
                list: "Listar todas as suas tags",
                delete: "Remover uma tag pelo nome",
                tagName: "O nome da tag"
            }
        },
        fileUpload: {
            name: "FileUpload",
            description: "Envie arquivos para serviços de hospedagem como Zipline, Nest, S3 e WebDAV",
            toast: {
                fileTypeNotAllowed: "Tipo de arquivo não permitido pelo filtro atual",
                pleaseConfigureFileuploadSettings: "Configure primeiro as configurações do FileUpload",
                sharexConfigIsValid: "A configuração do ShareX é válida",
                importedSharexConfig: "Configuração do ShareX importada",
                uploadSuccessfulButNo: "Envio concluído, mas nenhuma URL estava disponível para copiar",
                uploadSuccessfulUrlCopied: "Envio concluído, URL copiada para a área de transferência",
                uploadSuccessfulButFailed: "Envio concluído, mas falha ao copiar a URL",
                uploadSuccessful: "Envio concluído",
                uploadSucceededWithServicelabels: "Envio concluído com {{serviceLabels_service}} após alternativa",
                apngToGifConversion: "Falha na conversão de APNG para GIF, enviando como APNG",
                uploadAlreadyInProgress: "Envio já em andamento",
                uploadCancelled: "Envio cancelado",
                uploadFailedMessage: "Falha no envio: {{message}}",
                invalidSharexConfig: "Configuração do ShareX inválida",
                failedToImportSharexConfig: "Não foi possível importar a configuração do ShareX"
            },
            text: {
                uploadToServicename: "Enviar para {{serviceName}}",
                uploadToHost: "Enviar para o host",
                chooseFile: "Escolher arquivo...",
                zipline: "Zipline",
                eZHost: "E-Z Host",
                nest: "Nest",
                encryptingHost: "Encrypting.host",
                s3Compatible: "Compatível com S3",
                catboxMoe: "Catbox.moe",
                litterbox: "Litterbox",
                sharexCustomUploader: "Uploader personalizado do ShareX",
                webdavNextcloudOwncloud: "WebDAV (Nextcloud/Owncloud)",
                n1Hour: "1 hora",
                n12Hours: "12 horas",
                n24Hours: "24 horas",
                n72Hours: "72 horas",
                corsProxy: "Proxy CORS",
                query: "Consulta",
                param: "Parâmetro",
                fakeLink: "Link falso",
                embed: "Incorporação",
                n30Seconds: "30 segundos",
                n1Minute: "1 minuto",
                n2Minutes: "2 minutos",
                n5Minutes: "5 minutos",
                n10Minutes: "10 minutos",
                dragHostsToReorder: "Arraste os hosts para reordenar as tentativas alternativas. O host selecionado é tentado primeiro e depois esta ordem é usada.",
                chooseWhereFileuploadSends: "Escolha para onde o FileUpload envia novos arquivos.",
                connectionDetailsForYour: "Detalhes de conexão da sua instância Zipline.",
                theUrlOfYour: "A URL da sua instância Zipline",
                yourZiplineApiAuthorization: "Seu token de autorização da API do Zipline",
                yourZiplineApiToken: "Seu token de API do Zipline",
                folderIdForUploads: "ID da pasta para envios (deixe vazio para nenhuma pasta)",
                leaveEmptyForNo: "Deixe vazio para nenhuma pasta",
                connectionDetailsForE: "Detalhes de conexão para envios ao E-Z Host.",
                yourEZHost: "Sua chave de API do E-Z Host",
                connectionDetailsForNest: "Detalhes de conexão para envios ao Nest.",
                yourNestApiAuthorization: "Seu token de autorização da API do Nest",
                yourNestApiToken: "Seu token de API do Nest",
                connectionDetailsForEncrypting: "Detalhes de conexão para envios ao Encrypting.host.",
                yourEncryptingHostApi: "Sua chave de API do Encrypting.host",
                howEncryptingHostShould: "Como o Encrypting.host deve formatar os links retornados.",
                selectUrlStyle: "Selecione o estilo de URL",
                optionalTitleForEmbed: "Título opcional para respostas no estilo de incorporação.",
                optionalTitle: "Título opcional",
                optionalColorForEmbed: "Cor opcional para respostas no estilo de incorporação.",
                optionalColor: "Cor opcional",
                optionalFakeLinkValue: "Valor de link falso opcional para respostas no estilo fakelink.",
                optionalFakeLink: "Link falso opcional",
                connectionDetailsAndObject: "Detalhes de conexão e nomenclatura de objetos do seu bucket.",
                s3CompatibleEndpointE: "Endpoint compatível com S3 (ex.: https://<accountid>.r2.cloudflarestorage.com)",
                bucketToUploadInto: "Bucket de destino",
                awsRegionOrAuto: "Região da AWS ou auto para Cloudflare R2",
                s3CompatibleAccessKey: "Chave de acesso compatível com S3",
                yourAccessKeyId: "Seu ID de chave de acesso",
                s3CompatibleSecretKey: "Chave secreta compatível com S3",
                yourSecretAccessKey: "Sua chave de acesso secreta",
                optionalTemporaryCredentialToken: "Token de credencial temporária opcional",
                optionalSessionToken: "Token de sessão opcional",
                optionalPublicUrlBase: "URL base pública opcional para os links retornados",
                optionalFolderPrefixInside: "Pasta/prefixo opcional dentro do bucket",
                useEndpointBucketKey: "Usar o formato endpoint/bucket/chave, recomendado para R2.",
                optionalAccountBindingFor: "Vinculação de conta opcional para envios ao Catbox.",
                yourCatboxUserhashFor: "Seu userhash do Catbox para vincular a conta; deixe vazio para envios anônimos.",
                yourCatboxUserhash: "Seu userhash do Catbox",
                howLongUploadsAre: "Por quanto tempo os envios são mantidos",
                selectExpiry: "Selecione a expiração",
                optionalAccountBindingFor2: "Vinculação de conta opcional para envios ao GoFile.",
                optionalGofileTokenTo: "Token do GoFile opcional para enviar para sua conta.",
                optionalGofileToken: "Token do GoFile opcional",
                connectionDetailsForPixelvault: "Detalhes de conexão para envios ao PixelVault.",
                yourPixelvaultAuthorizationKey: "Sua chave de autorização do PixelVault.",
                yourPixelvaultUploadKey: "Sua chave de envio do PixelVault",
                optionalAccountBindingFor3: "Vinculação de conta opcional para envios ao PixelDrain.",
                optionalPixeldrainApiKey: "Chave de API do PixelDrain opcional para envios autenticados. Deixe vazio para envios anônimos.",
                yourPixeldrainApiKey: "Sua chave de API do PixelDrain",
                pasteImportOrValidate: "Cole, importe ou valide uma configuração de uploader personalizado do ShareX.",
                pasteYourSharexCustom: "Cole o JSON do seu uploader personalizado do ShareX (.sxcu/.json). DestinationType deve incluir FileUploader ou ImageUploader.",
                importFromFileOr: "Importar de arquivo ou validar a configuração colada",
                connectionDetailsForWebdav: "Detalhes de conexão para servidores WebDAV (Nextcloud, Owncloud etc.).",
                baseWebdavUrlE: "URL base do WebDAV (ex.: https://nextcloud.example.com/remote.php/dav/files/username)",
                optionalSubdirectoryOnThe: "Subdiretório opcional no servidor para envio (ex.: uploads)",
                leaveEmptyForRoot: "Deixe vazio para o diretório raiz",
                selectYourWebdavServer: "Selecione o tipo de servidor WebDAV. Nextcloud e ownCloud criarão um link público de compartilhamento. Genérico retorna a URL bruta do arquivo.",
                selectServerType: "Selecione o tipo de servidor",
                howToReturnThe: "Como retornar o link público de compartilhamento. Página de compartilhamento leva a uma página web; Download direto leva direto ao arquivo; Link Markdown envolve a página em um nome de arquivo clicável.",
                selectShareLinkFormat: "Selecione o formato do link",
                controlWhatFileuploadDoes: "Controle o que o FileUpload faz depois que um host retorna uma URL.",
                stripQueryParametersFrom: "Remover parâmetros de consulta da URL do arquivo enviado.",
                wrapUploadedVideoLinks: "Envolver links de vídeo enviados com um proxy de incorporação para melhores pré-visualizações no Discord.",
                chooseWhichEmbedProxy: "Escolha qual serviço de proxy de incorporação usar para links de vídeo enviados",
                selectAnEmbedProxy: "Selecione um serviço de proxy de incorporação",
                convertApngFilesTo: "Converter arquivos APNG para o formato GIF.",
                useTheOriginalFilename: "Usar o nome original do arquivo em vez de nomear os envios como upload.ext.",
                automaticallyCopyTheUploaded: "Copiar automaticamente a URL do arquivo enviado para a área de transferência.",
                onlyUseTheSelected: "Usar apenas o uploader selecionado sem tentar hosts alternativos.",
                afterUploadInsertThe: "Após o envio, inserir a URL resultante na entrada de chat atual.",
                wrapInsertedUrlsIn: "Envolver URLs inseridas com sinais de menor e maior para evitar a pré-visualização do Discord.",
                chooseWhenFileuploadTakes: "Escolha quando o FileUpload assume o manuseio de arquivos do Discord.",
                useFileuploadWhenUploading: "Usar o FileUpload ao enviar pelo seletor de arquivos do Discord.",
                useFileuploadOnlyFor: "Usar o FileUpload apenas para arquivos maiores que seu limite atual de envio do Discord.",
                manualDiscordFileSize: "Limite manual de tamanho de arquivo do Discord em MB, usado quando a detecção automática está errada. Deixe vazio para automático.",
                auto: "Automático",
                commaSeparatedListOf: "Lista de extensões separadas por vírgulas (ex.: png,jpg,gif). Deixe vazio para permitir todas.",
                configureBrowserUploadProxying: "Configure o proxy e os tempos limite dos envios pelo navegador.",
                corsProxyUsedFor: "Proxy CORS usado para envios web. Deixe vazio para usar o proxy padrão.",
                sourceCodeForThe: "Código-fonte do proxy CORS padrão",
                maximumTimeToWait: "Tempo máximo de espera por tentativa de envio antes de mudar para o alternativo",
                selectTimeout: "Selecione o tempo limite",
                drag: "Arrastar",
                importSxcuJson: "Importar .sxcu/.json",
                validate: "Validar",
                resetToDefault: "Redefinir para o padrão",
                progress: "{{percent}}% - {{transferred}} de {{total}}",
                cancel: "Cancelar"
            },
            option: {
                serviceType: {
                    description: "Serviço de envio selecionado",
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
                    description: "Link falso opcional do Encrypting.host",
                    label: "Link falso do Encrypting.host"
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
                    description: "Região do S3 (use auto para R2)",
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
                    description: "Userhash do Catbox para vincular a conta",
                    label: "Userhash do Catbox"
                },
                sharexConfig: {
                    description: "JSON do uploader personalizado do ShareX",
                    label: "Configuração do ShareX"
                },
                disableFallbacks: {
                    description: "Desativar serviços de envio alternativos",
                    label: "Desativar alternativas"
                },
                autoSend: {
                    description: "Inserir a URL enviada na entrada do chat",
                    label: "Enviar automaticamente"
                },
                autoFormat: {
                    description: "Envolver a URL inserida com sinais de menor e maior",
                    label: "Formatar automaticamente"
                },
                bypassDiscordUpload: {
                    description: "Ignorar os envios do Discord e usar o FileUpload no lugar.",
                    label: "Ignorar envio do Discord"
                },
                bypassDiscordUploadOnlyOverLimit: {
                    description: "Usar o FileUpload somente se os arquivos excederem o limite de tamanho.",
                    label: "Ignorar envio do Discord só acima do limite"
                },
                customDiscordFileSizeLimitMB: {
                    description: "Limite manual de tamanho de arquivo do Discord em MB. 0 significa detecção automática.",
                    label: "Limite de tamanho do Discord personalizado (MB)"
                },
                gofileToken: {
                    description: "Token de API do GoFile (opcional)",
                    label: "Token do GoFile"
                },
                fallbackOrder: {
                    description: "Ordem dos uploaders alternativos",
                    label: "Ordem alternativa"
                },
                pixelVaultKey: {
                    description: "Chave de envio do PixelVault",
                    label: "Chave do PixelVault"
                },
                pixelDrainKey: {
                    description: "Chave de API do PixelDrain (opcional)",
                    label: "Chave do PixelDrain"
                },
                uploadTimeoutMs: {
                    description: "Tempo limite de envio em milissegundos",
                    label: "Tempo limite de envio (ms)"
                },
                stripQueryParams: {
                    description: "Remover parâmetros de consulta das URLs enviadas",
                    label: "Remover parâmetros de consulta"
                },
                embedProxyEnabled: {
                    description: "Encaminhar links de vídeo enviados por um serviço auxiliar de incorporação.",
                    label: "Proxy de incorporação ativado"
                },
                embedProxyService: {
                    description: "Serviço auxiliar de incorporação que envolve os links de vídeo enviados.",
                    label: "Serviço de proxy de incorporação"
                },
                corsProxyUrl: {
                    description: "URL do proxy CORS usado para envios pelo navegador",
                    label: "URL do proxy CORS"
                },
                apngToGif: {
                    description: "Converter envios APNG em GIF",
                    label: "APNG para GIF"
                },
                preserveOriginalFilename: {
                    description: "Manter o nome original do arquivo ao enviar.",
                    label: "Manter nome original do arquivo"
                },
                autoCopy: {
                    description: "Copiar automaticamente a URL do envio",
                    label: "Copiar automaticamente"
                },
                autoUploadPastedFiles: {
                    description: "Enviar automaticamente arquivos da área de transferência para o host de imagens ao colar no chat.",
                    label: "Enviar automaticamente arquivos colados"
                },
                webdavUrl: {
                    description: "URL do servidor WebDAV",
                    label: "URL do WebDAV"
                },
                webdavUsername: {
                    description: "Nome de usuário do WebDAV",
                    label: "Usuário do WebDAV"
                },
                webdavPassword: {
                    description: "Senha do WebDAV ou token de aplicativo",
                    label: "Senha do WebDAV"
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
                    description: "Formato do link de compartilhamento WebDAV",
                    label: "Tipo de compartilhamento WebDAV",
                    sharepage: "Página de compartilhamento",
                    directdownload: "Download direto",
                    markdown: "Link Markdown"
                },
                uploadAllowedFileTypes: {
                    description: "Lista separada por vírgulas de extensões permitidas (ex.: png,jpg,gif,mp4). Deixe vazio para permitir todos os arquivos.",
                    label: "Tipos de arquivo permitidos para envio"
                },
                settingsComponent: {
                    description: "Configurações",
                    label: "Componente de configurações"
                }
            },
            panel: {
                fallbackOrder: "Ordem alternativa",
                uploadService: "Serviço de envio",
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
                fakeLink: "Link falso",
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
                pixelvaultUploadKey: "Chave de envio do PixelVault",
                pixeldrain: "PixelDrain",
                pixeldrainApiKey: "Chave de API do PixelDrain",
                sharexCustomUploader: "Uploader personalizado do ShareX",
                sharexCustomUploaderConfig: "Configuração do uploader personalizado do ShareX",
                sharexConfigActions: "Ações de configuração do ShareX",
                webdav: "WebDAV",
                serverUrl: "URL do servidor",
                username: "Nome de Usuário",
                passwordOrAppToken: "Senha ou token de aplicativo",
                passwordOrAppToken2: "senha ou token de aplicativo",
                uploadDirectory: "Diretório de envio",
                serverType: "Tipo de servidor",
                shareLinkFormat: "Formato do link de compartilhamento",
                uploadBehavior: "Comportamento de envio",
                stripQueryParameters: "Remover parâmetros de consulta",
                useEmbedProxy: "Usar proxy de incorporação",
                embedProxyService: "Serviço de proxy de incorporação",
                convertApngToGif: "Converter APNG em GIF",
                preserveOriginalFilename: "Manter nome original do arquivo",
                autoCopyUrl: "Copiar URL automaticamente",
                disableFallbackUploaders: "Desativar uploaders alternativos",
                insertUrlIntoChatInput: "Inserir URL na entrada do chat",
                formatInsertedUrl: "Formatar URL inserida",
                discordIntegration: "Integração com o Discord",
                bypassDiscordUploadButton: "Ignorar botão de envio do Discord",
                autoUploadPastedFiles: "Enviar automaticamente arquivos colados",
                respectDiscordFileSizeLimit: "Respeitar limite de tamanho do Discord",
                discordLimitOverrideMb: "Substituir limite do Discord (MB)",
                allowedFileTypes: "Tipos de arquivo permitidos",
                network: "Rede",
                corsProxyUrl: "URL do proxy CORS",
                defaultCorsProxySource: "Fonte do proxy CORS padrão",
                uploadTimeout: "Tempo limite de envio",
                domainsJsonDescription: "Array JSON de domínios a usar, por exemplo [\"offensive\"]."
            },
            status: {
                cancelled: "Envio cancelado.",
                uploadingVia: "Enviando via {{service}}...",
                uploading: "Enviando...",
                unknownError: "Erro desconhecido",
                startingVia: "Iniciando envio via {{service}}...",
                retryingWith: "Tentando novamente com {{service}} ({{attempt}}/{{total}})...",
                uploadedVia: "Enviado com sucesso via {{service}}.",
                allFailed: "Todos os serviços de envio falharam. Último erro: {{error}}",
                fileReady: "Arquivo pronto, iniciando envio...",
                preparing: "Preparando envio...",
                failed: "Falha no envio: {{message}}",
                timedOut: "O envio expirou",
                serviceFailed: "{{service}} falhou: {{message}}",
                preparingFile: "Preparando {{name}}{{suffix}}..."
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
                    label: "Última família de fonte"
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
            description: "Crie e legende GIFs a partir de qualquer mídia no chat ou no seletor de GIF.",
            text: {
                send: "Enviar",
                export: "Exportar",
                makeGif: "Criar GIF",
                editGif: "Editar GIF",
                selectAFont: "Selecione uma fonte...",
                enterCaption: "Digite a legenda...",
                width: "Largura",
                height: "Altura",
                loadingFonts: "Carregando fontes...",
                captions: "Legendas",
                text: "Texto",
                font: "Fonte",
                fontSize: "Tamanho da fonte",
                tipBase: "Base da ponta",
                dimensions: "Dimensões",
                generatingGif: "Gerando GIF...",
                clickOnThePreview: "Clique na pré-visualização para posicionar a ponta do balão",
                gifPreview: "Prévia do GIF"
            },
            captionMode: {
                caption: "Legenda",
                none: "Nenhum",
                speechbubble: "Balão"
            }
        },
        gifProviderSwitcher: {
            name: "GifProviderSwitcher",
            description: "Permite usar a busca de GIFs do Tenor ou Giphy em vez do Klipy",
            text: {
                tenor: "Tenor",
                giphy: "Giphy",
                klipy: "Klipy",
                providers: "Provedores",
                providersCount: "{{count}} provedores"
            }
        },
        keyboardNavigation: {
            toast: {
                invalidUrl: "URL inválida",
                copiedResponseToClipboard: "Resposta copiada para a área de transferência!",
                issueFetchingUrl: "Problema ao buscar a URL",
                copiedGitInfoTo: "Informações do Git copiadas para a área de transferência!",
                noUpdatesAvailable: "Nenhuma atualização disponível",
                enabledPlugin: "{{id}} ativado com sucesso",
                disabledPlugin: "{{id}} desativado com sucesso"
            },
            text: {
                openPlexcordTab: "Abrir aba do Plexcord",
                openPluginTab: "Abrir aba de plugins",
                openThemesTab: "Abrir aba de temas",
                openUpdaterTab: "Abrir aba do atualizador",
                openCloudTab: "Abrir aba da nuvem",
                openBackupRestoreTab: "Abrir aba de backup e restauração",
                restartClient: "Reiniciar cliente",
                openQuickCssFile: "Abrir arquivo QuickCSS",
                openSettingsFolder: "Abrir pasta de configurações",
                openInGithub: "Abrir no GitHub",
                openInBrowser: "Abrir no navegador",
                togglePlugin: "Alternar plugin",
                enable: "Ativar",
                disable: "Desativar",
                quickFetch: "Busca rápida",
                copyGitInfo: "Copiar informações do Git",
                checkForUpdates: "Verificar atualizações",
                aPlexcordUpdateIs: "Uma atualização do Plexcord está disponível!",
                clickHereToView: "Clique aqui para ver a atualização",
                navigateToServer: "Ir para o servidor",
                commandPalette: "Paleta de comandos",
                searchTheCommandPalette: "Pesquisar na paleta de comandos",
                multipleChoice: "Múltipla escolha",
                textInput: "Entrada de texto",
                openDevTab: "Abrir aba de desenvolvimento",
                enterUrlToFetch: "Insira a URL a buscar (somente GET)",
                typeAndPressEnter: "Digite e pressione Enter",
                recording: "Gravando...",
                recordKeybind: "Gravar atalho",
                enterUrl: "Insira uma URL"
            },
            option: {
                hotkey: {
                    description: "O atalho para abrir a paleta de comandos.",
                    label: "Atalho"
                },
                allowMouseControl: {
                    description: "Permitir que o mouse controle a paleta de comandos.",
                    label: "Permitir controle pelo mouse"
                }
            },
            name: "KeyboardNavigation",
            description: "Permite navegar pela interface com o teclado."
        },
        lastActive: {
            name: "LastActive",
            description: "Um plugin para pular para a última mensagem ativa sua ou de outro usuário em um canal/servidor.",
            toast: {
                failedToFindMessages: "Falha ao encontrar mensagens. Verifique o console para detalhes.",
                couldnTFindAny: "Nenhuma mensagem recente deste usuário foi encontrada.",
                channelInformationNotAvailable: "Informações do canal indisponíveis.",
                failedToJumpTo: "Falha ao pular para a mensagem. Verifique o console para detalhes."
            },
            text: {
                yourLastMessage: "Sua última mensagem",
                userSLastMessage: "Última mensagem do usuário"
            }
        },
        limitlessScreenshare: {
            text: {
                deleteTag: "Excluir tag",
                mustBeGreaterThan: "Deve ser >{{value}}",
                maxResolutionTooLow: "A resolução máxima não pode ser menor que {{value}}",
                maxResolutionRound: "A resolução máxima deve terminar em 0 se Arredondar resolução estiver ativado"
            },
            name: "LimitlessScreenshare",
            description: "Adiciona um controle deslizante para resolução e fps do compartilhamento de tela.",
            option: {
                maxFPS: {
                    description: "FPS máximo do controle deslizante",
                    label: "FPS máximo"
                },
                maxResolution: {
                    description: "Resolução máxima do controle deslizante",
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
                    description: "Ocultar pré-visualizações e horários de DMs e grupos silenciados.",
                    label: "Ocultar silenciados"
                }
            },
            name: "MessagePeek",
            description: "Mostra a pré-visualização e o horário da última mensagem na lista de mensagens diretas.",
            text: {
                officialDiscordMessage: "Mensagem oficial do Discord",
                sentGif: "enviou um GIF",
                voiceMessage: "mensagem de voz",
                membersCount: "{{count}} membros",
                you: "Você"
            }
        },
        messageTranslate: {
            name: "MessageTranslate",
            description: "Traduza mensagens automaticamente para o seu idioma com cache, alternância por canal e mais opções.",
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
                    description: "Traduzir mensagens automaticamente conforme aparecem.",
                    label: "Traduzir automaticamente"
                },
                skipOwnMessages: {
                    description: "Não traduzir suas próprias mensagens.",
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
                    description: "Lista de IDs de usuários separados por vírgulas que não serão traduzidos.",
                    label: "Usuários ignorados"
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
                stickerPackDeleted: "Pacote de figurinhas excluído",
                stickerPackAdded: "Pacote de figurinhas adicionado",
                stickerPacksAdded: "Pacotes de figurinhas adicionados",
                stickerPacksExported: "Pacotes de figurinhas exportados",
                newStickerPacksAlready: "Já existem novos pacotes de figurinhas, migração desnecessária",
                oldStickerPacksNot: "Pacotes de figurinhas antigos não encontrados, nada a migrar",
                migrationFailedTitleId: "Falha na migração: {{title}} ({{id}})",
                stickerPackMigrationComplete: "Migração de pacotes de figurinhas concluída",
                failedToUploadSticker: "Falha ao enviar a figurinha"
            },
            text: {
                stickerPackUrl: "URL do pacote de figurinhas",
                pasteHtmlHere: "Cole o HTML aqui",
                delete: "Excluir",
                addStickerPackFrom: "Adicionar pacote de figurinhas por URL",
                insert: "Inserir",
                addStickerPackFrom2: "Adicionar pacote de figurinhas por HTML",
                insertFromHtml: "Inserir a partir do HTML",
                addStickerPackFrom3: "Adicionar pacote de figurinhas por arquivo",
                miscTools: "Ferramentas diversas",
                exportStickerPacks: "Exportar pacotes de figurinhas",
                migrateFromV1: "Migrar da v1",
                stickersManagement: "Gerenciamento de figurinhas",
                theRegionLineRecognized: "A região reconhecida pelo LINE pode ser diferente da sua por causa do proxy CORS que usamos.",
                openStickerPackFile: "Abrir arquivo de pacote de figurinhas",
                stickers: "Figurinhas+",
                categoryTitle: "Categoria, {{title}}",
                searchStickers: "Pesquisar figurinhas",
                ffmpegstatecontextIsUndefined: "FFmpegStateContext não está definido",
                recentlyUsed: "Usados recentemente",
                addFromUrl: "Adicionar por URL",
                addFromHtml: "Adicionar por HTML",
                addFromFile: "Adicionar por arquivo",
                misc: "Diversos",
                invalidUrl: "URL inválida",
                lineOnly: "Atualmente, apenas figurinhas/emojis do LINE são suportados.",
                getTelegramStickers: "Obtenha figurinhas do Telegram com",
                htmlFallbackHelp: "Se encontrar erros ao adicionar um pacote de figurinhas, tente adicioná-lo usando o código-fonte HTML da página do pacote.",
                htmlFallbackApplies: "Isso se aplica a figurinhas bloqueadas por região / sistema operacional / etc."
            },
            option: {
                promptToUpload: {
                    description: "Insere a figurinha na barra de chat em vez de enviá-la imediatamente",
                    label: "Perguntar antes de enviar"
                },
                packs: {
                    description: "Pacotes",
                    label: "Pacotes"
                }
            },
            name: "MoreStickers",
            description: "Adiciona pacotes de figurinhas de outras redes sociais. (ex.: LINE)"
        },
        musicRichPresence: {
            option: {
                scrobblerBackend: {
                    description: "O backend de scrobbler a ser usado.",
                    label: "Backend de scrobbler"
                },
                instanceBaseURL: {
                    description: "A URL base da sua instância ListenBrainz.",
                    label: "URL base da instância"
                },
                instanceAPIBaseUrl: {
                    description: "A URL base da sua API do ListenBrainz.",
                    label: "URL base da API da instância"
                },
                apiKey: {
                    description: "Chave de API do Last.fm. Não é obrigatória, mas é altamente recomendada para evitar limite de requisições com nossa chave compartilhada",
                    label: "Chave de API"
                },
                username: {
                    description: "Nome de usuário",
                    label: "Nome de usuário"
                },
                shareUsername: {
                    description: "Mostrar link para o perfil do scrobbler",
                    label: "Compartilhar nome de usuário"
                },
                clickableLinks: {
                    description: "Transformar nomes de faixa, artista e álbum em links clicáveis",
                    label: "Links clicáveis"
                },
                hideWithSpotify: {
                    description: "Ocultar presença se o Spotify estiver em execução",
                    label: "Ocultar com Spotify"
                },
                hideWithActivity: {
                    description: "Ocultar presença se você tiver outra presença",
                    label: "Ocultar com atividade"
                },
                statusName: {
                    description: "Texto de status personalizado. Você pode usar as variáveis: {artist} | {album} | {title}",
                    label: "Nome do status"
                },
                statusDisplayType: {
                    description: "Mostrar nome da faixa / artista na lista de membros",
                    off: "Não mostrar (mostra mensagem genérica de ouvindo)"
                },
                nameFormat: {
                    description: "Mostrar nome da música e do artista no nome do status",
                    statusName: "Usar nome de status personalizado"
                },
                missingArt: {
                    description: "Quando o álbum ou a capa estiver ausente",
                    logo: "Usar logotipo grande do scrobbler"
                },
                showLogo: {
                    description: "Mostrar o logotipo do serviço de scrobbler junto à capa",
                    label: "Mostrar logotipo do scrobbler"
                },
                showAlbumCover: {
                    description: "Mostrar a capa do álbum. Desativar exibirá um espaço reservado. Útil se sua música tiver capas inadequadas",
                    label: "Mostrar capa do álbum"
                },
                useListeningStatus: {
                    description: "Mostrar status \"Ouvindo\" em vez de \"Jogando\""
                }
            },
            name: "MusicRichPresence",
            description: "Rich Presence para Last.FM/Listenbrainz",
            text: {
                showArtistName: "Mostrar nome do artista",
                showTrackName: "Mostrar nome da faixa",
                useMusicServiceName: "Usar nome do serviço de música (usa o texto de status personalizado como alternativa)",
                useFormatArtistSong: "Usar o formato 'artista - música'",
                useFormatSongArtist: "Usar o formato 'música - artista'",
                useArtistNameOnly: "Usar apenas o nome do artista",
                useSongNameOnly: "Usar apenas o nome da música",
                useAlbumNameFalls: "Usar nome do álbum (usa o texto de status personalizado se a música não tiver álbum)",
                useGenericPlaceholder: "Usar espaço reservado genérico",
                lastFm: "Last.FM",
                howToCreateAn: "Como criar uma chave de API",
                set: "Defina",
                applicationName: "Nome do aplicativo",
                applicationDescription: "Descrição do aplicativo",
                toAnythingAndLeave: "com qualquer valor e deixe o resto em branco.",
                createApiKey: "Criar chave de API",
                invalidInstance: "Instância compatível com ListenBrainz inválida",
                provideBoth: "Informe tanto a",
                apiBaseUrl: "URL base da API",
                andThe: "quanto a",
                instanceBaseUrl: "URL base da instância",
                forYourCustomInstance: "da sua instância personalizada do ListenBrainz ou volte para ListenBrainz/Last.FM",
                allowConnectTitle: "Permitir que o Plexcord se conecte à instância do ListenBrainz",
                allowConnectBody: "Para usar sua instância personalizada do ListenBrainz, você precisa primeiro permitir que o Plexcord se conecte a ela.",
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
                    description: "Porta para conectar",
                    label: "Porta"
                }
            },
            name: "OrbolayBridge",
            description: "Plugin ponte para conectar o Orbolay ao Discord",
            toast: {
                connectedToOrbolayServer: "Conectado ao servidor do Orbolay"
            }
        },
        plexcordHelper: {
            name: "PlexcordHelper",
            description: "Usado para fornecer suporte e corrigir travamentos causados pelo Discord.",
            text: {
                restartRequired: "Reinicialização necessária",
                restartNow: "Reiniciar agora",
                later: "Mais tarde",
                wouldYouLikeTo: "Deseja reiniciar agora?",
                somePluginsRequireA: "Alguns plugins exigem reinicialização para serem totalmente desativados.",
                alreadyEnabled: "{{plugin}} já está ativado",
                alreadyDisabled: "{{plugin}} já está desativado",
                disablePlugin: "Desativar {{plugin}}",
                enablePlugin: "Ativar {{plugin}}",
                errorStopping: "Erro ao parar o plugin {{plugin}}",
                errorStarting: "Erro ao iniciar o plugin {{plugin}}"
            },
            toast: {
                failedToTolowercase: "Falha ao {{toLowerCase}}",
                aRestartIsRequired: "É necessário reiniciar para que a alteração tenha efeito!"
            },
            card: {
                notOnThisVersion: "Este plugin não está nesta versão do Plexcord. Tente atualizar!"
            }
        },
        plexcordTweaks: {
            name: "PlexcordTweaks",
            option: {
                removeActivitySection: {
                    description: "Remove a seção de atividade acima da lista de membros",
                    label: "Remover seção de atividade"
                },
                showYourOwnActivityButtons: {
                    description: "O Discord oculta seus próprios botões de atividade por algum motivo",
                    label: "Mostrar seus próprios botões de atividade"
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
                    description: "Mostrar um botão de situação da conta na barra superior",
                    label: "Botão de situação da conta"
                },
                jsonGateway: {
                    description: "Força JSON ao reconectar ao gateway",
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
                    label: "Desativar notificações de feriados",
                    description: "Sempre usar os sons de notificação padrão do Discord"
                },
                showAllBadges: {
                    label: "Mostrar todas as insígnias",
                    description: "Mostra todas as insígnias do perfil em vez de agrupar o restante em +n"
                }
            },
            text: {
                allGood: "Tudo certo!",
                limited: "Limitada",
                veryLimited: "Muito limitada",
                atRisk: "Em risco",
                suspended: "Suspensa",
                slashCommandsRefreshedSuccessfully: "Comandos de barra atualizados com sucesso.",
                failedToRefreshCommands: "Falha ao atualizar comandos. Verifique o console para detalhes.",
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
                    description: "Desbloquear opções de qualidade da transmissão independentemente do status do Nitro",
                    label: "Desbloquear opções de qualidade"
                },
                removeResolutionCap: {
                    description: "Permitir resoluções acima de 720p a 60 fps",
                    label: "Remover limite de resolução"
                },
                forceEncoderSettings: {
                    description: "Forçar o codificador a usar a resolução/fps configurados",
                    label: "Forçar configurações do codificador"
                },
                preventDownscale: {
                    description: "Impedir que o Discord reduza a resolução da transmissão",
                    label: "Impedir redução"
                },
                keyframeInterval: {
                    description: "Intervalo de quadros-chave em ms (0 = padrão do codificador, 5000 = a cada 5 s)",
                    label: "Intervalo de quadros-chave"
                },
                minBitrate: {
                    description: "Taxa de bits mínima do codificador em kbps",
                    label: "Taxa de bits mínima"
                },
                raiseBitrateCaps: {
                    description: "Aumentar os limites padrão de taxa de bits no desktop (alvo de 600 kbps → 10 Mbps, máx. de 3,5 Mbps → 40 Mbps)",
                    label: "Aumentar limites de taxa de bits"
                },
                preventFramerateReduction: {
                    description: "Impedir que o Discord reduza a taxa de quadros da transmissão quando você não está falando",
                    label: "Impedir redução da taxa de quadros"
                },
                bitsPerPixelPct: {
                    description: "Porcentagem de bits por pixel para a taxa de bits alvo (8 = 0,08 bpp, 12 = 0,12 bpp)",
                    label: "Bits por pixel (%)"
                }
            },
            name: "PlextronStreamFixes",
            description: "Tenta corrigir a qualidade da transmissão no Plextron modificando o codificador e as restrições de qualidade do Discord."
        },
        rPCEditor: {
            name: "RPCEditor"
        },
        reactionTimestamps: {
            name: "ReactionTimestamps",
            description: "Mostra o horário de cada reação na janela de reações.",
            text: {
                userAtTime: "{{user}} às {{time}}"
            }
        },
        richPresence: {
            text: {
                useCustomStatusName: "Usar nome de status personalizado",
                useFormatArtistSong: "Usar o formato 'artista - música'",
                useFormatSongArtist: "Usar o formato 'música - artista'",
                useArtistNameOnly: "Usar apenas o nome do artista",
                useSongNameOnly: "Usar apenas o nome da música",
                useAlbumName: "Usar o nome do álbum",
                useLargeStatsFm: "Usar logotipo grande do Stats.fm",
                useGenericPlaceholder: "Usar espaço reservado genérico",
                seriesMovieName: "Nome da série/filme",
                seriesEpisodeTrackMovie: "Série - nome do episódio/faixa/filme",
                custom: "Personalizado",
                seriesCover: "Capa da série",
                episodeCover: "Capa do episódio",
                season1Episode1: "Temporada 1 episódio 1",
                off: "Desativado",
                listening: "Ouvindo",
                playing: "Jogando",
                streaming: "Transmitindo",
                watching: "Assistindo",
                none: "Nenhum",
                navidromeInstanceExposesServer: "Instância do Navidrome (expõe a URL do servidor. Autenticação única enviada.)",
                lastFmApiSends: "API do Last.fm (envia metadados para o last.fm)",
                donTShowShows: "Não mostrar (mostra mensagem genérica de ouvindo)",
                showStateLineContent: "Mostrar conteúdo da linha de estado",
                showDetailsLineContent: "Mostrar conteúdo da linha de detalhes",
                displayYourCurrentlyPlaying: "Exiba os audiolivros que você está ouvindo como Rich Presence do Discord. Requer URL, usuário e senha do seu servidor AudioBookShelf.",
                audiobookshelfServerUrl: "URL do servidor AudioBookShelf.",
                audiobookshelfUsername: "Usuário do AudioBookShelf.",
                audiobookshelfPassword: "Senha do AudioBookShelf.",
                connectsToTosuVia: "Conecta-se ao tosu via WebSocket na porta 24050. Nenhuma configuração necessária, apenas garanta que o tosu esteja rodando junto com o osu!.",
                showWhatYouRe: "Mostre o que você está ouvindo via stats.fm. Requer que seu histórico de reprodução seja público.",
                statsFmUsername: "Usuário do Stats.fm.",
                customStatusText: "Texto de status personalizado.",
                statsFm: "Stats.fm",
                nameFormat: "Formato do nome.",
                fallbackWhenArtIs: "Alternativa quando a capa estiver ausente.",
                showListeningStatus: "Mostrar status de ouvindo.",
                showStatsFmLogo: "Mostrar o logotipo do Stats.fm ao lado da capa.",
                showLinkToStats: "Mostrar link para o perfil do stats.fm.",
                showLinkToSong: "Mostrar link para a música no stats.fm.",
                hideStatsFmPresence: "Ocultar presença do stats.fm se o Spotify estiver em execução.",
                hideStatsFmPresence2: "Ocultar presença do stats.fm se um RPC externo estiver em execução.",
                disableDownloadingAlbumArt: "Desativar o download de capas de álbum.",
                showWhatYouRe2: "Mostre o que você está reproduzindo no Jellyfin. Para obter sua chave de API: abra a interface web do Jellyfin, pressione F12 para abrir as Ferramentas de Desenvolvedor, vá até a aba Rede, procure requisições ao seu servidor, encontre o cabeçalho Authorization (Ctrl+F para buscar) e você precisa da parte de Token='this'. Seu ID de usuário está na URL da sua página de perfil.",
                jellyfinServerUrl: "URL do servidor Jellyfin.",
                jellyfinApiKey: "Chave de API do Jellyfin.",
                authorization: "Authorization",
                jellyfinUserId: "ID de usuário do Jellyfin.",
                userIdFromProfile: "ID de usuário da URL do perfil",
                nameDisplayFormat: "Formato de exibição do nome.",
                customNameTemplate: "Modelo de nome personalizado.",
                nameOnJellyfin: "{name} no Jellyfin",
                coverTypeForTv: "Tipo de capa para séries de TV.",
                episodeNumberFormat: "Formato do número do episódio.",
                overrideRichPresenceType: "Substituir o tipo de Rich Presence.",
                showEpisodeNameAfter: "Mostrar nome do episódio após as informações de temporada/episódio.",
                showPresenceWhenMedia: "Mostrar presença quando a mídia estiver pausada.",
                hideMediaDetails: "Ocultar detalhes da mídia.",
                discordRichPresenceFor: "Rich Presence do Discord para a Gensokyo Radio. É só ativar e ouvir!",
                refreshIntervalInSeconds: "Intervalo de atualização em segundos.",
                showWhatYouRe3: "Mostre o que você está ouvindo via Navidrome.",
                navidromeServerUrlMust: "URL do servidor Navidrome (deve ser um domínio público, ex.: https://navidrome.example.com).",
                navidromeUsername: "Usuário do Navidrome.",
                navidromePassword: "Senha do Navidrome.",
                optionalDiscordApplicationClient: "ID do cliente do aplicativo do Discord (opcional).",
                howToFetchAlbum: "Como buscar capas de álbum.",
                optionalProvideYourOwn: "Opcional: forneça sua própria chave de API do Last.fm (mantém o padrão se vazio).",
                showNavidromeLogoIn: "Mostrar o logotipo do Navidrome no canto inferior direito da capa.",
                showAlbumNameIn: "Mostrar nome do álbum na presença.",
                whichTypeOfActivity: "Qual tipo de atividade exibir.",
                showTheStateDetails: "Mostrar conteúdo da linha de estado / detalhes na lista de membros",
                hideRichPresenceWhen: "Ocultar Rich Presence quando a música estiver pausada (em vez de mostrar um cronômetro)",
                theListeningToText: "O texto 'Ouvindo' (ex.: {artist})",
                navidrome: "Navidrome",
                theMainLineShowing: "A linha principal mostrando a música em reprodução (ex.: {song})",
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
                enterValue: "Insira um valor"
            },
            name: "RichPresence",
            description: "Central unificada de Rich Presence para AudioBookShelf, osu!, stats.fm, Jellyfin, Navidrome e Gensokyo Radio.",
            toast: {
                audiobookshelfRpcIsNot: "O RPC do AudioBookShelf não está configurado.",
                jellyfinRpcIsNot: "O RPC do Jellyfin não está configurado.",
                jellyfinReturnedAnInvalid: "O Jellyfin retornou uma resposta inválida. Sua chave de API pode estar errada."
            },
            option: {
                enabled: {
                    description: "Ativar serviços de Rich Presence.",
                    label: "Ativado"
                },
                serviceSettings: {
                    description: "Configuração do serviço.",
                    label: "Configurações do serviço"
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
                    description: "Usuário do AudioBookShelf.",
                    label: "Usuário do AudioBookShelf"
                },
                abs_password: {
                    description: "Senha do AudioBookShelf.",
                    label: "Senha do AudioBookShelf"
                },
                sfm_username: {
                    description: "Usuário do Stats.fm.",
                    label: "Usuário do Stats.fm"
                },
                sfm_shareUsername: {
                    description: "Mostrar link para o perfil do stats.fm.",
                    label: "Stats.fm: compartilhar usuário"
                },
                sfm_shareSong: {
                    description: "Mostrar link para a música no stats.fm.",
                    label: "Stats.fm: compartilhar música"
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
                    description: "Texto de status personalizado.",
                    label: "Stats.fm: nome do status"
                },
                sfm_nameFormat: {
                    description: "Formato do nome.",
                    label: "Stats.fm: formato do nome",
                    statusName: "Usar nome de status personalizado",
                    artistFirst: "Usar o formato 'artista - música'",
                    songFirst: "Usar o formato 'música - artista'",
                    artistOnly: "Usar apenas o nome do artista",
                    songOnly: "Usar apenas o nome da música",
                    albumName: "Usar o nome do álbum"
                },
                sfm_useListeningStatus: {
                    description: "Mostrar status de ouvindo.",
                    label: "Stats.fm: usar status de ouvindo"
                },
                sfm_missingArt: {
                    description: "Alternativa quando a capa estiver ausente.",
                    label: "Stats.fm: capa ausente",
                    statsFmLogo: "Usar logotipo grande do Stats.fm",
                    placeholder: "Usar espaço reservado genérico"
                },
                sfm_showLogo: {
                    description: "Mostrar o logotipo do Stats.fm ao lado da capa.",
                    label: "Stats.fm: mostrar logotipo"
                },
                sfm_alwaysHideArt: {
                    description: "Desativar o download de capas de álbum.",
                    label: "Stats.fm: sempre ocultar a capa"
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
                    description: "ID de usuário do Jellyfin.",
                    label: "ID de usuário do Jellyfin"
                },
                jf_nameDisplay: {
                    description: "Formato de exibição do nome.",
                    label: "Jellyfin: exibição do nome",
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
                    listening: "Ouvindo",
                    playing: "Jogando",
                    streaming: "Transmitindo",
                    watching: "Assistindo"
                },
                jf_showPausedState: {
                    description: "Mostrar presença quando a mídia estiver pausada.",
                    label: "Jellyfin: mostrar estado pausado"
                },
                jf_privacyMode: {
                    description: "Ocultar detalhes da mídia.",
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
                    description: "Usuário do Navidrome",
                    label: "Usuário do Navidrome"
                },
                nd_password: {
                    description: "Senha do Navidrome",
                    label: "Senha do Navidrome"
                },
                nd_clientId: {
                    description: "ID do cliente do aplicativo do Discord (opcional)",
                    label: "Navidrome: ID do cliente"
                },
                nd_showSmallImage: {
                    description: "Mostrar o logotipo do Navidrome no canto inferior direito da capa.",
                    label: "Navidrome: mostrar imagem pequena"
                },
                nd_showAlbum: {
                    description: "Mostrar nome do álbum na presença.",
                    label: "Navidrome: mostrar álbum"
                },
                nd_albumArtMode: {
                    description: "Como buscar capas de álbum.",
                    label: "Navidrome: modo de capa do álbum",
                    none: "Nenhum",
                    instance: "Instância do Navidrome (expõe a URL do servidor ao Discord, sem enviar autenticação)",
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
                    description: "Qual tipo de atividade",
                    label: "Navidrome: tipo de atividade",
                    listening: "Ouvindo",
                    playingFixesHiddenLines: "Jogando (corrige linhas ocultas)",
                    watching: "Assistindo"
                },
                nd_nameString: {
                    description: "String de formato do nome da atividade",
                    label: "Navidrome: string do nome"
                },
                nd_detailsString: {
                    description: "String de formato dos detalhes da atividade",
                    label: "Navidrome: string de detalhes"
                },
                nd_stateString: {
                    description: "String de formato do estado da atividade",
                    label: "Navidrome: string de estado"
                },
                nd_largeTextString: {
                    description: "String de formato do texto grande da atividade",
                    label: "Navidrome: string do texto grande"
                },
                nd_statusDisplayType: {
                    description: "Mostrar nome da faixa / artista na lista de membros",
                    off: "Não mostrar (mostra mensagem genérica de ouvindo)"
                },
                nd_hideOnPause: {
                    description: "Ocultar Rich Presence quando a música estiver pausada",
                    label: "Navidrome: ocultar ao pausar"
                }
            },
            panel: {
                password: "Senha",
                statsFmUsername: "usuário do stats.fm",
                customStatusText: "Texto de status personalizado",
                nameFormat: "Formato do Nome",
                missingArtFallback: "Alternativa sem capa",
                showListeningStatus: "Mostrar status de ouvindo",
                showStatsFmLogo: "Mostrar logotipo do Stats.fm",
                showProfileLink: "Mostrar link do perfil",
                showSongLink: "Mostrar link da música",
                hideWithSpotify: "Ocultar com Spotify",
                hideWithExternalRpc: "Ocultar com RPC externo",
                disableAlbumArt: "Desativar capas de álbum",
                apiKey: "Chave de API",
                userId: "ID do Usuário",
                nameDisplay: "Exibição do nome",
                customNameTemplate: "Modelo de nome personalizado",
                coverType: "Tipo de capa",
                episodeFormat: "Formato do episódio",
                overridePresenceType: "Substituir tipo de presença",
                showEpisodeName: "Mostrar nome do episódio",
                showWhenPaused: "Mostrar quando pausado",
                privacyMode: "Modo de privacidade",
                refreshInterval: "Intervalo de atualização",
                clientId: "ID do cliente",
                albumArtMode: "Modo de capa do álbum",
                lastFmApiKey: "Chave de API do Last.fm",
                showSmallImage: "Mostrar imagem pequena",
                showAlbum: "Mostrar álbum",
                activityType: "Tipo de atividade",
                statusDisplayType: "Tipo de exibição do status",
                hideOnPause: "Ocultar ao pausar",
                activityNameFormat: "Formato do nome da atividade",
                detailsFormat: "Formato dos detalhes",
                stateFormat: "Formato do estado",
                largeTextFormat: "Formato do texto grande",
                enabled: "Ativado"
            }
        },
        sedEnhanced: {
            option: {
                regexByDefault: {
                    description: "Inverte a flag `r`, então usar `r` ativa o modo sem regex e omiti-la usa o modo regex.",
                    label: "Regex por padrão"
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
            description: "Mostra o cargo mais alto de um usuário ao lado do nome nas mensagens. Oculte/mostre cargos específicos pelo menu de contexto (clique direito).",
            text: {
                chatRoleActions: "Ações de cargo no chat",
                unhideRolesInChat: "Reexibir cargos no chat",
                showRoleInChat: "Mostrar cargo no chat",
                hideRoleInChat: "Ocultar cargo no chat"
            }
        },
        silenceUsers: {
            option: {
                mutedUserIds: {
                    description: "IDs de usuários do Discord separados por vírgulas para silenciar menções e emblemas do servidor.",
                    label: "IDs de usuários silenciados"
                }
            },
            name: "SilenceUsers",
            description: "Silencia menções @ e contadores de emblemas do servidor de usuários específicos. Mensagens normais e DMs não são afetadas."
        },
        songLink: {
            text: {
                showIfAvailable: "Mostrar se disponível",
                openInDesktopApp: "Abrir no aplicativo de desktop",
                loadingSongLink: "Carregando link da música...",
                pleaseProvideAMusic: "Forneça um link de música.",
                thisWillTakeA: "Isso vai levar um momento...",
                noAlternativePlatformsFound: "Nenhuma plataforma alternativa encontrada para este link.",
                failedToResolveMusic: "Falha ao resolver o link de música",
                logo: "Logotipo do {{name}}"
            },
            option: {
                servicesSettings: {
                    description: "configurações dos serviços",
                    label: "Configurações dos serviços"
                },
                userCountry: {
                    description: "País usado na busca (código de país de duas letras)",
                    label: "País do usuário"
                },
                includeMetadata: {
                    description: "Incluir o título da faixa e o nome do artista como cabeçalho.",
                    label: "Incluir metadados"
                }
            },
            name: "SongLink",
            description: "Adiciona botões de serviços de streaming abaixo dos links de músicas",
            command: {
                musiclink: "Converter um link de música para outras plataformas de streaming.",
                url: "Link de música (Spotify, Deezer, YouTube, Tidal, Apple Music, SoundCloud)"
            }
        },
        songSpotlight: {
            name: "SongSpotlight",
            description: "Exiba músicas no seu perfil",
            text: {
                songSpotlight: "Song Spotlight",
                explicit: "Explícito",
                addSong: "Adicionar música",
                addANewSong: "Adicionar uma nova música",
                copyLink: "Copiar link",
                removeSong: "Remover música",
                failedToLoad: "Falha ao carregar!",
                areYouSure: "Tem certeza?",
                thisWillOverwriteYour: "Isso substituirá suas músicas atuais.",
                continue: "Continuar",
                nevermind: "Deixa pra lá",
                thisWillPermanentlyDelete: "Isso excluirá permanentemente todas as suas músicas.",
                delete: "Excluir",
                signInToSong: "Entrar no Song Spotlight",
                songs: "Músicas",
                authorization: "Authorization",
                importFromClipboard: "Importar da área de transferência",
                copyToClipboard: "Copiar para a área de transferência",
                signOut: "Sair",
                deleteSongs: "Excluir músicas",
                more: "Mais",
                editSongs: "Editar músicas",
                copyJson: "Copiar JSON",
                looksLikeThereS: "Parece que não há nada aqui!",
                uhOhSongSpotlight: "Ops! O Song Spotlight falhou ao carregar. Verifique o console para mais detalhes.",
                stealSong: "Roubar música",
                profileSongs: "Músicas do perfil",
                notEnoughSpace: "Espaço insuficiente",
                alreadyAdded: "Você já adicionou esta música",
                invalidLink: "Link inválido",
                failedToParseLink: "Não foi possível analisar o link",
                invalidUrl: "URL inválida",
                goAddSongs: "E aí? Está esperando o quê? Adicione algumas músicas ao seu Song Spotlight!",
                tellUserToAddSongs: "Peça para {{name}} adicionar algumas músicas ao Song Spotlight!",
                supportedServices: "O Song Spotlight suporta estes serviços:",
                viewSongsVia: "Você também pode ver suas músicas pelo comando",
                viewSongsViaSuffix: "!",
                coverTooltipOwner: "{{sublabel}} de {{label}}",
                coverTooltipBy: "{{label}} de {{sublabel}}",
                lastUpdated: "Última atualização",
                save: "Salvar",
                showMore: "Mostrar mais {{count}}"
            },
            toast: {
                youHaveBeenSigned: "Você foi desconectado do Song Spotlight. Entre novamente.",
                songSpotlightError: "Song Spotlight: {{error}}",
                successfullyAuthorized: "Autorizado com sucesso!",
                failedToPlaySong: "Falha ao reproduzir a prévia da música!",
                addedSong: "Música adicionada!",
                removedSong: "Música removida!",
                noJsonInClipboard: "Nenhum JSON na área de transferência!",
                invalidSongSpotlightData: "Dados do Song Spotlight inválidos na área de transferência!",
                oneOrMoreImported: "Uma ou mais músicas importadas eram inválidas.",
                importedSongsFromClipboard: "Músicas importadas da área de transferência!",
                successfullySavedSongs: "Músicas salvas com sucesso!",
                successfullySignedOut: "Desconectado com sucesso!",
                successfullyDeletedSongs: "Músicas excluídas com sucesso!",
                youDonTHave: "Você não tem espaço suficiente!",
                uhOhThisSong: "Ops, esta música não existe!",
                youAlreadyHaveThis: "Você já adicionou esta música!",
                youDonTHave2: "Você... não adicionou esta música?",
                fetchError: "Erro do Song Spotlight ao buscar {{path}}"
            },
            option: {
                collapseSongList: {
                    description: "Recolhe a lista de músicas nos perfis em um botão que abre um menu separado",
                    label: "Recolher lista de músicas"
                },
                profileSongsLimit: {
                    description: "Quantas músicas são mostradas ao clicar em um usuário",
                    label: "Limite de músicas do perfil"
                },
                previewVolume: {
                    description: "Volume das prévias de músicas",
                    label: "Volume da prévia"
                }
            }
        },
        stopAutoUnread: {
            name: "StopAutoUnread",
            description: "Impede que o Discord mude automaticamente a configuração de notificação de um canal para \"Todas as mensagens\""
        },
        themeLibrary: {
            text: {
                enablePlugin: "Ativar plugin",
                cancel: "Cancelar",
                holdOn: "Espere!",
                thisThemeRequiresThe: "Este tema requer o",
                pluginToWorkProperly: "plugin para funcionar corretamente!",
                doYouWantTo: "Deseja ativá-lo?",
                themeInfo: "Informações do tema",
                viewSource: "Ver código-fonte",
                close: "Fechar",
                download: "Baixar",
                overwrite: "Substituir",
                keepMyFile: "Manter meu arquivo",
                copyToClipboard: "Copiar para a área de transferência",
                conflict: "Conflito!",
                themeSource: "Fonte do tema",
                aThemeWithThe: "Um tema com o mesmo nome",
                alreadyExists: "já existe",
                inYourThemesDirectory: "na sua pasta de temas! Deseja substituí-lo?",
                version: "Versão",
                likes: "Curtidas",
                donate: "Doar",
                supportServer: "Servidor de suporte",
                source: "Fonte",
                tags: "Tags",
                youCanSupportThe: "Você pode apoiar o autor doando abaixo!",
                joinDiscordServer: "Entrar no servidor do Discord",
                viewThemeSource: "Ver a fonte do tema",
                showAll: "Mostrar todos",
                showThemes: "Mostrar temas",
                showSnippets: "Mostrar trechos",
                showMostLiked: "Mostrar os mais curtidos",
                showDark: "Mostrar escuros",
                showLight: "Mostrar claros",
                showEnabled: "Mostrar ativados",
                showDisabled: "Mostrar desativados",
                searchForATheme: "Pesquisar um tema...",
                gettingTheLatestThemes: "Obtendo os temas mais recentes...",
                thisWonTTake: "Não vai demorar!",
                failedToFetchThemes: "Falha ao buscar temas",
                couldNotFetchThe: "Não foi possível buscar a lista de temas. Tente novamente mais tarde.",
                wantYourThemeRemoved: "Quer que seu tema seja removido?",
                hide: "Ocultar",
                noThemeFound: "Nenhum tema encontrado.",
                tryNarrowingYourSearch: "Tente refinar sua pesquisa.",
                themeLibrary: "Biblioteca de temas",
                successfullyAuthorizedWithThemelibrary: "Autorizado com sucesso no ThemeLibrary!",
                failedToAuthorizeCheck: "Falha ao autorizar, verifique o console",
                successfullyDeauthorizedFromThemelibrary: "Autorização do ThemeLibrary revogada com sucesso!",
                failedToDeauthorizeCheck: "Falha ao revogar a autorização, verifique o console",
                themelibraryAuth: "Autenticação do ThemeLibrary",
                themeRemoval: "Remoção de tema",
                allThemeAuthorsAre: "Todos os autores de temas recebem crédito nas informações do tema e nenhuma fonte foi modificada. Se ainda assim quiser que seu tema seja removido, abra uma issue clicando abaixo.",
                authorizeWithThemelibrary: "Autorizar com o ThemeLibrary",
                copyThemelibraryToken: "Copiar token do ThemeLibrary",
                deauthorizeThemelibrary: "Revogar autorização do ThemeLibrary",
                themeDetails: "Detalhes de {{name}}",
                mostLiked: "Mais curtidos",
                newestAdditions: "Adições mais recentes",
                removeTheme: "Remover tema",
                addTheme: "Adicionar tema",
                authors: "Autores",
                author: "Autor",
                nobodyLikedTheme: "Ninguém curtiu este tema ainda.",
                nobodyLikedSnippet: "Ninguém curtiu este snippet ainda.",
                usersLikedTheme: "{{likes}} usuários curtiram este tema!",
                usersLikedSnippet: "{{likes}} usuários curtiram este snippet!",
                openThemeLibrary: "Abrir biblioteca de temas",
                lastUpdated: "Este tema foi atualizado pela última vez em",
                removalInfo: "Se quiser que seus temas sejam removidos permanentemente, abra uma issue no",
                themes: "Temas",
                requestRemoval: "Solicitar remoção do tema",
                pluginSuffix: "plugin!"
            },
            toast: {
                downloadedName: "{{name}} baixado!",
                failedToDownloadName: "Falha ao baixar {{name}}! (verifique o console)",
                invalidOrExpiredInvite: "Convite inválido ou expirado!",
                copiedToClipboard: "Copiado para a área de transferência",
                noUniquetokenPresentTry: "Nenhum uniqueToken presente, tente autorizar primeiro!",
                noTokenToCopy: "Nenhum token para copiar, tente autorizar primeiro!",
                copiedToClipboard2: "Copiado para a área de transferência!"
            },
            name: "ThemeLibrary",
            description: "Uma biblioteca de temas para o Plexcord.",
            option: {
                hideWarningCard: {
                    description: "Ocultar o cartão de aviso no topo da aba da biblioteca de temas",
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
            description: "O plugin de tradução do Plexcord, mas com suporte a idiomas artísticos!",
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
            description: "Um plugin que ajuda você a responder perguntas de trivia usando IA.",
            text: {
                answerWithAi: "Responder com IA",
                enterApiKeyHere: "Insira aqui a chave de API do seu endpoint de IA.",
                enterSystemPrompt: "Insira o prompt do sistema.",
                enterYourOpenaiCompatible: "Insira aqui seu endpoint de IA compatível com OpenAI.",
                status: "Status {{status}}"
            },
            option: {
                apiKey: {
                    description: "Chave de API.",
                    label: "Chave de API"
                },
                model: {
                    description: "Modelo de IA a ser usado.",
                    label: "Modelo",
                    placeholder: "ex.: google/gemini-3-flash-preview, inception/mercury, openai/gpt-5.2-chat etc."
                },
                systemPrompt: {
                    description: "Prompt do sistema para a IA. Espaços reservados: {current_user}, {current_time}",
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
                    description: "Adicionar o nome do autor antes do conteúdo da mensagem ao enviá-la para a IA. Isso pode ajudar a IA a distinguir usuários diferentes em uma conversa.",
                    label: "Enviar nome do autor da mensagem"
                },
                treatSelfAsAssistant: {
                    description: "Quando ativado, suas próprias mensagens serão tratadas como mensagens do assistente no contexto. Isso faz alguns modelos começarem a gerar fanfics.",
                    label: "Tratar-me como assistente"
                },
                mode: {
                    description: "Como as respostas devem ser tratadas?",
                    label: "Modo",
                    autoreply: "Resposta automática",
                    chatbar: "Substituir o texto da barra de chat",
                    bot: "Clyde"
                },
                supportImages: {
                    description: "Enviar imagens para a IA como contexto (se houver). Nem todos os modelos suportam isso.",
                    label: "Suportar imagens"
                },
                sendImagesAsBase64: {
                    description: "Enviar imagens para a IA em base64.",
                    label: "Enviar imagens em base64"
                }
            },
            toast: {
                triviaaiApiSettingsAre: "TriviaAI: as configurações da API estão incompletas.",
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
            description: "Mostra emblemas de contagem de mensagens não lidas nos canais da lista"
        },
        userPFP: {
            toast: {
                gifsWebpMustBe: "GIFs/WebP devem ser adicionados por URL. Envie seu GIF/WebP para um serviço de hospedagem de imagens e cole o link."
            },
            text: {
                save: "Salvar",
                delete: "Excluir",
                customAvatar: "Avatar personalizado",
                original: "Original",
                local: "Local",
                enterPngGifUrl: "Insira a URL do PNG/GIF",
                setAvatar: "Definir avatar",
                usingTheSetAvatar: "O recurso de definir avatar é apenas local, ou seja, só você vê a mudança.",
                joinUserpfpServer: "Entrar no servidor UserPFP",
                dropHere: "Solte aqui!",
                dragOrClick: "⬆ Arraste uma imagem ou clique para enviar (para GIFs ou WebP, use uma URL)",
                uploadedFile: "(arquivo enviado)",
                supportHere: "Apoie o UserPFP aqui"
            },
            option: {
                overrideServerAvatars: {
                    description: "Substituir avatares de servidor por avatares personalizados ou pelo avatar padrão se nenhum personalizado estiver definido.",
                    label: "Substituir avatares de servidor"
                },
                preferNitro: {
                    description: "Qual avatar usar se houver tanto o avatar animado padrão (Nitro) quanto o do UserPFP",
                    label: "Preferir Nitro",
                    false: "UserPFP",
                    true: "Nitro"
                },
                databaseSource: {
                    description: "URL de onde carregar o banco de dados",
                    label: "Fonte do banco de dados"
                }
            },
            name: "UserPFP",
            description: "Permite definir avatares locais estáticos ou animados para você e outros usuários"
        },
        userpluginInstaller: {
            toast: {
                restartToApplyChanges: "Reinicie para aplicar as alterações!"
            },
            text: {
                installError: "Erro de instalação",
                done: "Concluído!",
                later: "Mais tarde",
                updateError: "Erro de atualização",
                checkingForUpdates: "Verificando atualizações...",
                loadingPlugins: "Carregando plugins...",
                pluginUpdatesAvailable: "Atualizações de plugins disponíveis",
                theFollowingPluginsAre: "Os seguintes plugins estão desatualizados:",
                youCanUpdatePlugins: "Você pode atualizar os plugins abaixo.",
                installPlugin: "Instalar plugin",
                userplugininstallerNotFullyLoaded: "UserpluginInstaller não foi totalmente carregado",
                youNeedToRestart: "Você precisa reiniciar para carregar a parte nativa :)",
                restartNow: "Reiniciar agora",
                someUserpluginsAreOut: "Alguns UserPlugins estão desatualizados!",
                clickToOpenThe: "Clique para abrir o atualizador de UserPlugins",
                plexcordDoesNotModerate: "O Plexcord não modera userplugins e não se responsabiliza por nada que possa resultar de instalá-los.",
                onlyInstallUserpluginsFrom: "Instale apenas userplugins de desenvolvedores em quem você confia. Isso é inteiramente por sua conta e risco.",
                setGitPath: "Definir caminho do Git",
                installHint: "Você pode instalar um plugin do GitHub, GitLab, Codeberg, git.nin0.dev ou plugins.nin0.dev colando aqui a URL de clonagem.",
                enableAndRestart: "Ativar e reiniciar",
                enableAndRefresh: "Ativar e recarregar",
                tabCounts: "({{total}}, {{enabled}} ativados)",
                possiblyMore: "e possivelmente mais, pois a verificação de atualizações não terminou. ",
                alreadyInstalled: "Plugin já instalado, atualize abaixo",
                invalidUrl: "URL inválida, leia o aviso acima",
                install: "Instalar",
                restart: "Reiniciar",
                refresh: "Atualizar",
                update: "Atualizar",
                source: "Código-fonte",
                support: "Suporte",
                managePlugins: "Gerenciar plugins",
                uninstalledRestart: "{{name}} foi desinstalado. É necessário reiniciar para remover o plugin completamente.",
                uninstalledRefresh: "{{name}} foi desinstalado. É necessário atualizar para remover o plugin completamente.",
                updatedRestart: "{{name}} foi atualizado. É necessário reiniciar para aplicar a atualização.",
                updatedRefresh: "{{name}} foi atualizado. É necessário atualizar para aplicar a atualização.",
                installedBody: "{{name}} foi instalado com sucesso. E agora?",
                installedNativeBody: "{{name}} foi instalado com sucesso. Porém, como usa funções nativas, é necessário reiniciar o cliente. E agora?"
            },
            option: {
                allowlistedChannels: {
                    description: "Lista de canais separados por vírgulas onde o botão Instalar plugin deve aparecer. Ele sempre aparece nos canais de userplugins do Plexcord",
                    label: "Canais permitidos"
                },
                notifyIfUpdate: {
                    description: "Mostrar uma notificação do Plexcord se os UserPlugins precisarem ser atualizados",
                    label: "Notificar se houver atualização"
                },
                neverNotifyForPlugins: {
                    description: "Nunca mostrar notificações de atualização para estes plugins (você ainda pode atualizá-los na aba UserPlugins)",
                    label: "Nunca notificar para plugins"
                }
            },
            name: "UserpluginInstaller",
            description: "Instale userplugins com um simples clique"
        },
        vCPanelSettings: {
            option: {
                title1: {
                    label: "Título 1"
                },
                uncollapseSettingsByDefault: {
                    description: "Expandir automaticamente as configurações de voz por padrão",
                    label: "Expandir configurações por padrão"
                },
                title2: {
                    label: "Título 2"
                },
                outputVolume: {
                    description: "Mostrar um controle deslizante de volume de saída",
                    label: "Volume de saída"
                },
                inputVolume: {
                    description: "Mostrar um controle deslizante de volume de entrada",
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
                    description: "Mostrar um seletor de câmera",
                    label: "Câmera"
                },
                title3: {
                    label: "Título 3"
                },
                showOutputVolumeHeader: {
                    description: "Mostrar cabeçalho acima do controle de volume de saída",
                    label: "Mostrar cabeçalho do volume de saída"
                },
                showInputVolumeHeader: {
                    description: "Mostrar cabeçalho acima do controle de volume de entrada",
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
                    description: "Mostrar cabeçalho acima do seletor de câmera",
                    label: "Mostrar cabeçalho do dispositivo de vídeo"
                }
            },
            name: "VCPanelSettings",
            description: "Controle as configurações de voz direto do painel de voz",
            text: {
                appearance: "Aparência",
                settingsToShow: "Configurações a mostrar",
                headersToShow: "Cabeçalhos a mostrar",
                outputVolume: "Volume de saída",
                inputVolume: "Volume de entrada",
                outputDevice: "Dispositivo de saída",
                inputDevice: "Dispositivo de entrada",
                settings: "Configurações",
                hide: "Ocultar"
            }
        },
        voiceMessageTranscriber: {
            text: {
                autoDetect: "Detecção automática",
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
                downloadingAudio: "Baixando áudio...",
                processingAudio: "Processando áudio...",
                loadingModel: "Carregando modelo...",
                transcribing: "Transcrevendo...",
                transcription: "Transcrição",
                transcriptionError: "Erro de transcrição",
                transcribingInProgress: "Transcrição em andamento...",
                initializing: "Inicializando...",
                workerCrashed: "O processo de transcrição travou",
                workerStopped: "O processo de transcrição foi interrompido",
                deleteCache: "Excluir todos os arquivos em cache ({{size}} MB)",
                action: "Ação"
            },
            name: "VoiceMessageTranscriber",
            description: "Transcrições de mensagens de voz no dispositivo com tecnologia Whisper",
            option: {
                embed: {
                    description: "Exibir a transcrição diretamente no anexo da mensagem de voz em vez de em um modal.",
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
                    description: "Executar o modelo na sua GPU (WebGPU) quando suportado. Muito mais rápido e torna os modelos maiores utilizáveis. Usa a CPU se não estiver disponível.",
                    label: "Usar GPU"
                },
                quantized: {
                    description: "Usar modelos quantizados ao executar na CPU (menor tamanho, leve perda de qualidade).",
                    label: "Quantizado"
                },
                deleteModalFiles: {
                    description: "Excluir arquivos em cache do armazenamento.",
                    label: "Excluir arquivos do modelo"
                }
            }
        },
        voiceMessagesInBackground: {
            name: "VoiceMessagesInBackground",
            description: "Mantém as mensagens de voz tocando entre chats com um miniplayer sincronizado.",
            text: {
                voiceMessagesInBackground: "Player de mensagens de voz em segundo plano",
                returnToChannelname: "Voltar para {{channelName}}",
                voiceMessagePosition: "Posição da mensagem de voz",
                changePlaybackSpeed: "Alterar velocidade de reprodução",
                playbackSpeedSpeedTimes: "Velocidade de reprodução {{speed}} vezes",
                closeVoiceMessagePlayer: "Fechar o player de mensagens de voz",
                voiceMessage: "Mensagem de voz",
                directMessage: "Mensagem direta",
                resume: "Retomar mensagem de voz",
                pause: "Pausar mensagem de voz"
            }
        },
        webPWA: {
            name: "WebPWA",
            description: "Torna o Discord instalável como aplicativo (PWA). Ativa emblemas de notificação, atalhos globais e a barra de título personalizada do Discord.",
            text: {
                activities: "Atividades",
                hopIn: "Entre",
                status: "Status",
                emojis: "Emojis",
                rooms: "Salas",
                discord: "Discord",
                platforms: "Plataformas",
                keybindsInfoBefore: "Atalhos globais personalizados de Pressionar para X são suportados. Acesse",
                keybindsInfoAfter: "para alterá-los. Atalhos de Segurar para X não são suportados."
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
                    description: "Taxa de quadros",
                    label: "Taxa de quadros"
                },
                contentHint: {
                    description: "Dica de conteúdo",
                    label: "Dica de conteúdo"
                },
                systemAudio: {
                    description: "Silenciar áudio do sistema",
                    label: "Áudio do sistema"
                }
            },
            name: "WebScreenShare",
            description: "Adiciona um menu de opções de compartilhamento de tela. Permite alterar resolução, taxa de quadros, dicas de codificação e áudio do sistema.",
            text: {
                stream: "Transmissão",
                streamMuted: "Transmissão silenciada",
                streamMode: "Modo de transmissão",
                muteStreamAudio: "Silenciar áudio da transmissão",
                preventsSystemAudioFrom: "Impede que o áudio do sistema seja incluído na sua transmissão.",
                showStreamPreviews: "Mostrar prévias da transmissão",
                allowsOthersToSee: "Permite que outros vejam uma prévia da sua transmissão antes de entrar.",
                smootherVideo: "Vídeo mais fluido",
                cleanerText: "Texto mais nítido",
                userPreset: "Predefinição do usuário",
                custom: "Personalizado",
                gaming: "Jogos",
                screenshare: "Compartilhamento de tela"
            }
        },
        whitelistedEmojis: {
            option: {
                defaultEmojis: {
                    description: "Ocultar emojis Unicode padrão do preenchimento automático, a menos que estejam na lista de permissões.",
                    label: "Emojis padrão"
                },
                serverEmojis: {
                    description: "Ocultar emojis personalizados do servidor do preenchimento automático, a menos que estejam na lista de permissões.",
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
                    description: "Redefinir emojis",
                    label: "Redefinir emojis"
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
                resetEmojis: "Emojis redefinidos"
            },
            text: {
                areYouSure: "Tem certeza?",
                thisWillOverwriteYour: "Isso substituirá sua lista de permissões atual.",
                import: "Importar",
                cancel: "Cancelar",
                thisWillRemoveAll: "Isso removerá todos os emojis da sua lista de permissões.",
                reset: "Redefinir",
                addAllGuildEmojis: "Adicionar todos os emojis do servidor",
                removeAllGuildEmojis: "Remover todos os emojis do servidor",
                noEmojisInThe: "Nenhum emoji na lista de permissões.",
                removeAll: "Remover todos",
                removeFromWhitelist: "Remover da lista de permissões",
                addToWhitelist: "Adicionar à lista de permissões",
                defaultEmojis: "Emojis padrão",
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
            description: "Adiciona uma nova formatação markdown que deixa o texto ondulante.",
            text: {
                leftAndRight: "esquerda e direita",
                byTyping: "digitando",
                upAndDown: "cima e baixo",
                inACircle: "em círculo",
                youCanMakeTextWiggle: "Você pode fazer o texto balançar assim:"
            }
        },
        fixDiscordCss: {
            description: "Corrige o atraso do CSS do Discord"
        },
        directFileDownload: {
            name: "DirectFileDownload",
            description: "Baixe arquivos diretamente do Discord em vez de abri-los no navegador"
        },
        githubRepos: {
            text: {
                failedToFetchRepositories: "Não foi possível obter os repositórios",
                personal: "Pessoal",
                unknown: "Desconhecido",
                sortedByCount: "Ordenado por número de repositórios. Clique para ordenar de A-Z",
                sortedAlphabetically: "Ordenado de A-Z. Clique para ordenar por número de repositórios",
                mostRepos: "Mais repositórios"
            }
        }
    }
} as const;

export default translations;
