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
        title: "Paramètres",
        language: {
            selector: {
                label: "Langue",
                description: "Sélectionnez votre langue préférée pour Plexcord.",
                placeholder: "Choisir la langue"
            }
        },
        location: {
            label: "Emplacement des paramètres",
            description: "Où placer la section des paramètres de Plexcord",
            top: "Tout en haut",
            nitro: {
                above: "Au-dessus de la section Nitro",
                below: "En dessous de la section Nitro"
            },
            activity: {
                above: "Au-dessus des paramètres d'activité",
                below: "En dessous des paramètres d'activité"
            },
            bottom: "Tout en bas"
        },
        switches: {
            useQuickCss: {
                label: "Activer le CSS personnalisé",
                description: "Applique ton QuickCSS configuré"
            },
            enableReactDevtools: {
                label: "Activer les outils de développement React",
                description: "Surtout utile pour les développeurs de plugins. Ignore ceci si tu ne sais pas ce que c'est"
            },
            mainWindowFrameless: {
                label: "Désactiver le cadre de la fenêtre principale",
                description: "Retirer le cadre natif de la fenêtre pour un aspect plus épuré. Vous pouvez toujours déplacer la fenêtre en faisant glisser la zone de la barre de titre."
            },
            frameless: {
                label: "Désactiver le cadre de la fenêtre",
                description: "Retirer le cadre natif de la fenêtre pour un aspect plus épuré."
            },
            nativeTitleBar: {
                label: "Utiliser la barre de titre native de Windows au lieu de celle de Discord",
                description: "Remplacer la barre de titre personnalisée de Discord par la barre de titre standard de Windows. Cela peut améliorer la compatibilité avec certains outils de gestion de fenêtres."
            },
            noRoundCorners: {
                label: "Désactiver les coins arrondis de la fenêtre",
                description: "Rend les coins de la fenêtre Discord carrés au lieu d'arrondis."
            },
            transparent: {
                label: "Activer la transparence de la fenêtre",
                description: "Rendre la fenêtre Discord transparente. Un thème prenant en charge la transparence est requis, sinon cela n'aura aucun effet.",
                isWindows: "Cela empêchera le redimensionnement de la fenêtre et l'ancrage aux bords de l'écran.",
                notWindows: "Cela empêchera le redimensionnement de la fenêtre."
            },
            winCtrlQ: {
                label: "Utiliser Ctrl+Q comme raccourci pour fermer Discord",
                description: "Ajouter Ctrl+Q comme raccourci clavier pour fermer Discord. C'est une alternative à Alt+F4."
            },
            disableMinSize: {
                label: "Désactiver la taille minimale de la fenêtre",
                description: "Permet de redimensionner la fenêtre à n'importe quelle taille, même plus petite que la taille minimale de Discord"
            }
        },
        quickActions: {
            title: "Actions rapides",
            description: "Actions courantes que vous pourriez vouloir effectuer. Ces raccourcis permettent d'accéder rapidement aux fonctionnalités fréquemment utilisées.",
            notificationLog: "Journal des notifications",
            editQuickCSS: "Modifier QuickCSS",
            relaunchDiscord: "Relancer Discord",
            openSettingsFolder: "Ouvrir le dossier des paramètres",
            viewSourceCode: "Voir le code source"
        },
        specialCards: {
            donations: {
                title: "Dons",
                subtitle: "Merci pour votre don !",
                description: "Vous pouvez gérer vos avantages à tout moment en envoyant un message à @mutanplex.",
                button: "Faire un don",
                invite: "Rejoindre notre Discord",
                invalid: "Lien d'invitation invalide ou expiré."
            },
            supportProject: {
                title: "Soutenir le projet",
                description: "Pensez à soutenir le développement de Plexcord en faisant un don !"
            },
            contributions: {
                title: "Contributions",
                subtitle: "Merci pour votre contribution !",
                description: "Puisque vous avez contribué à Plexcord, vous avez maintenant un nouveau badge super cool !",
                buttonTitle: "Voir vos contributions"
            }
        },
        settingsSection: {
            title: "Paramètres",
            description: "Configurez le comportement de Plexcord et son intégration avec Discord.",
            hintParts: {
                prefix: "Vous pouvez personnaliser l'emplacement de cette section dans le menu Discord en configurant le {{pluginLink}}",
                linkText: "Plugin des Paramètres"
            }
        },
        notifications: {
            title: "Notifications",
            description: "Configurez la gestion des notifications par Plexcord. Personnalisez vos alertes ou consultez l'historique.",
            settings: "Paramètres de notification",
            viewLog: "Voir le journal des notifications",
            permissions: {
                denied: {
                    title: "Permission de notification refusée",
                    label: "Vous avez refusé les permissions de notification. Les notifications de bureau ne fonctionneront pas !"
                }
            },
            style: {
                label: "Style des notifications",
                description: "Certains plugins peuvent vous envoyer des notifications. Elles existent en deux styles :",
                plexcord: "Notifications Plexcord",
                plexcordDesc: "Ce sont des notifications intégrées à l'application",
                desktop: "Notifications de bureau",
                desktopDesc: "Notifications natives du système (comme lors d'une mention)",
                onlyWhenNotFocused: "Utiliser les notifications de bureau uniquement quand Discord n'est pas au premier plan",
                always: {
                    desktop: "Toujours utiliser les notifications de bureau",
                    plexcord: "Toujours utiliser les notifications Plexcord"
                }
            },
            positions: {
                label: "Position des notifications",
                right: {
                    bottom: "En bas à droite",
                    top: "En haut à droite",
                },
                left: {
                    bottom: "En bas à gauche",
                    top: "En haut à gauche",
                }
            },
            missed: {
                label: "Compteur de notifications manquées",
                description: "Une notification s'affichera au retour sur Discord indiquant ce que vous avez manqué",
                whileYou: "Pendant votre absence",
                count: "{{count}} notification{{s}} reçue{{s}}",
                s: "s"
            },
            timeout: {
                label: "Délai des notifications",
                description: "Le temps (en secondes) pendant lequel les notifications restent à l'écran avant de disparaître."
            },
            logLimit: {
                label: "Limite du journal des notifications",
                description: "Nombre maximum de notifications à conserver dans le journal. Réglez sur {{disable}} pour désactiver le journal et {{unlimited}} pour ne jamais supprimer les anciennes."
            },
            opacity: {
                label: "Opacité des notifications",
                description: "L'opacité des notifications intégrées à l'application"
            },
            maxNotifications: {
                label: "Notifications max.",
                description: "Nombre maximum de notifications affichées simultanément"
            },
            behavior: {
                label: "Comportement des notifications",
            },
            disableInStreamerMode: {
                label: "Désactiver en mode Streamer",
                description: "Désactive les notifications lorsque le mode Streamer est actif"
            },
            renderImages: {
                label: "Afficher les images",
                description: "Afficher les images dans les notifications"
            },
            streamingTreatment: {
                label: "Traitement en streaming",
                description: "Comment traiter les notifications pendant le partage d'écran",
                normal: "Normal - Afficher la notification normalement",
                noContent: "Sans contenu - Masquer le corps de la notification",
                ignore: "Ignorer - Ne pas afficher la notification"
            },
        },
        windowsMaterial: {
            title: "Matériau d'arrière-plan Windows (redémarrage requis)",
            description: "Effets d'arrière-plan transparents de Windows. Vous avez besoin d'un thème prenant en charge la transparence, sinon cela n'aura aucun effet. Un redémarrage est requis après avoir modifié ce paramètre.",
            material: {
                none: "Aucun",
                mica: "Mica (utilise le thème système + le fond d'écran pour peindre l'arrière-plan)",
                tabbed: "Tabbed (variante de Mica avec une teinte d'arrière-plan plus prononcée)",
                acrylic: "Acrylic (floute la fenêtre derrière Discord pour un arrière-plan translucide)"
            }
        },
        macVibrancy: {
            title: "Style de vibrance de la fenêtre (Nécessite un redémarrage)",
            description: "Personnalisez l'effet de vibrance macOS. Contrôle le flou et la transparence. Les changements nécessitent un redémarrage.",
            placeholder: "Style de vibrance de la fenêtre",
            style: {
                no: "Pas de vibrance",
                underPage: "Sous la page (Teinte de fenêtre)",
                content: "Contenu",
                window: "Fenêtre",
                selection: "Sélection",
                titlebar: "Barre de titre",
                header: "En-tête",
                sidebar: "Barre latérale",
                tooltip: "Bulle d'aide",
                menu: "Menu",
                popover: "Fenêtre surgissante",
                fullscreenUI: "Interface plein écran (Transparent mais légèrement flou)",
                hud: "HUD (Le plus transparent)"
            }
        },
        tabs: {
            renderFailed: "Impossible d'afficher l'onglet {{tab}}. Si le problème persiste, essaie de réinstaller avec l'installateur !"
        }
    },

    plugins: {
        title: "Plugins",
        new: "NOUVEAU",
        unknown: "Inconnu",
        noDescription: "Aucune description disponible.",
        restart: {
            apply: "Redémarrez pour appliquer les changements !",
            required: "Redémarrage requis !",
            description: "Redémarrez maintenant pour appliquer les nouveaux plugins et leurs paramètres",
            following: "Les plugins suivants nécessitent un redémarrage :",
            remainingCount: "et {{count}} de plus",
            fully: "Certains plugins nécessitent un redémarrage pour être complètement désactivés",
            would: "Voulez-vous redémarrer maintenant ?",
            resetDefault: "Réinitialiser aux paramètres par défaut",
            failed: "Échec du démarrage des dépendances :",
            button: {
                restart: "Redémarrer",
                later: "Plus tard !",
                now: "Redémarrer maintenant",
                cancel: "Annuler",
                disableWarning: "Désactiver l'avertissement pour toujours",
                disableAll: "Tout désactiver",
                reset: "Réinitialiser",
                close: "Fermer"
            }
        },
        contributor: {
            contributed: "contribué",
            modal: {
                contributionsInfo: "{{userName}} a {{continuedLink}} à {{contributionCount}} plugin{{s}}.",
                noContributions: "{{userName}} n'a créé aucun plugin. Il a probablement {{contributedLink}} d'une autre manière !"
            }
        },
        infoModal: {
            description: "Appuyez sur la roue dentée ou l'icône d'info pour plus d'informations sur un plugin",
            settingsInfo: "Les plugins avec une roue dentée ont des paramètres modifiables !",
            disableAll: "Désactiver tous les plugins"
        },
        error: {
            invalidInput: "Entrée invalide fournie",
            stopping: "Erreur lors de l'arrêt du plugin {{plugin}}",
            starting: "Erreur lors du démarrage du plugin {{plugin}}",
            startDependency: "Erreur lors du démarrage des dépendances : {{failures}}",
            infoRender: "Une erreur est survenue lors de l'affichage du composant d'info personnalisé"
        },
        placeholder: {
            number: "Entrez un nombre",
            select: "Sélectionnez une option",
            text: "Entrez une valeur"
        },
        excluded: {
            desktop: "Application Discord Desktop ou Plextron",
            discordDesktop: "Application Discord Desktop",
            plextron: "Application Plextron",
            web: "Application Plextron et la version Web de Discord",
            dev: "Version développeur de Plexcord",
            browser: "Version navigateur web de Plexcord"
        },
        search: {
            looking: "Cherchez-vous",
            onlyAvailable: "Uniquement disponible sur",
            noCriteria: "Aucun plugin ne correspond aux critères de recherche."
        },
        required: {
            title: "Plugins requis",
            this: "Ce plugin est indispensable au fonctionnement de Plexcord.",
            by: "Ce plugin est requis par :"
        },
        dangerModal: {
            title: "ACTION DANGEREUSE",
            disablePlugins: "Désactiver les plugins",
            disableText: "Tout désactiver",
            irreversible: "CETTE ACTION EST IRRÉVERSIBLE !",
            enableBack: "Êtes-vous sûr de vouloir continuer ? Vous pourrez les réactiver plus tard.",
            undone: "Cette action ne peut pas être annulée. Êtes-vous sûr ?",
            resetDescription: "Vous êtes sur le point de réinitialiser tous les paramètres de {{pluginName}} aux valeurs par défaut.",
            disable: "Vous allez désactiver {{enabledPlugins}} plugins !",
            confirmReset: "Confirmer la réinitialisation",
            cancel: "Annuler",
            resetSettings: "Réinitialiser les paramètres",
            resetText: "Réinitialiser"
        },
        filters: {
            label: "Filtres",
            placeholder: "Rechercher un plugin...",
            option: {
                all: "Tout afficher",
                enabled: "Afficher activés",
                disabled: "Afficher désactivés",
                new: "Afficher les nouveaux",
                userplugins: "Afficher plugins utilisateur",
                api: "Afficher les plugins API",
                type: "Filtrer par type",
                tags: "Filtrer par étiquettes",
                favorites: "Afficher les favoris"
            }
        },
        pluginModal: {
            noSettings: "Ce plugin n'a pas de paramètres.",
            authors: "Auteurs",
            settings: "Paramètres",
            successfulReset: "Les paramètres de {{plugin}} ont été réinitialisés.",
            enabledStock: "Plugins officiels activés",
            totalStock: "Total plugins officiels",
            enabledUser: "Plugins utilisateur activés",
            totalUser: "Total plugins utilisateur",
            info: "Plus d'infos",
            source: "Voir le code source",
            favorite: "Ajouter aux favoris - l'épingle en haut de la liste des plugins",
            unfavorite: "Retirer des favoris"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API pour ajouter des décorations à la liste des membres",
                    messageAccessories: "API pour ajouter des accessoires aux messages",
                    messageDecorations: "API pour ajouter des décorations aux messages",
                    chatInputButtons: "API pour ajouter des boutons à la saisie de chat",
                    commands: "API requise pour tout ce qui utilise des commandes",
                    contextMenu: "API pour ajouter/supprimer des éléments aux menus contextuels.",
                    dynamicImageModal: "Permet d'omettre la largeur ou la hauteur lors de l'ouverture d'une image",
                    menuItemDemangler: "Décode le module d'éléments de menu de Discord",
                    messageEvents: "API requise pour les événements de message",
                    messagePopover: "API pour ajouter des boutons aux popovers de message",
                    messageUpdater: "API pour mettre à jour et réafficher les messages",
                    nicknameIcons: "API pour ajouter des icônes aux pseudos dans les profils",
                    notices: "Corrige les notifications qui se ferment automatiquement",
                    serverList: "API requise pour les plugins modifiant la liste des serveurs",
                    userSettings: "Modifie les UserSettings de Discord pour exposer leur groupe et nom.",
                    audioPlayer: "API pour lire des fichiers audio internes ou des liens externes.",
                    userArea: "API pour ajouter des boutons au panneau de zone utilisateur.",
                    profileCollections: "API permettant d'ajouter des collections au panneau de profil utilisateur, comme la collection de jeux de Discord.",
                    profileSections: "API pour ajouter des sections près de la zone « Membre depuis » des panneaux de profil utilisateur.",
                    headerBar: "API pour ajouter des boutons à la barre d'en-tête.",
                    surfaceClasses: "API pour ajouter des attributs de données sémantiques propres aux plugins et des props limitées aux surfaces stables de la mise en page de Discord."
                },
                chatButtons: {
                    context: {
                        buttons: "Boutons"
                    }
                }
            },
            badges: {
                description: "API pour ajouter des badges aux utilisateurs",
                contributor: {
                    plexcord: "Contributeur Plexcord",
                    vencord: "Contributeur Vencord",
                    userPlugin: "Contributeur Plugin Utilisateur"
                },
                context: {
                    title: "Options des badges",
                    copy: {
                        name: "Copier le nom du badge",
                        link: "Copier le lien de l'image du badge"
                    },
                    refetch: {
                        button: "Actualiser les badges",
                        success: "Badges actualisés avec succès !"
                    }
                },
                modal: {
                    title: "Donateur Plexcord",
                    special: "Ce badge est un avantage spécial pour les donateurs Plexcord",
                    description: "Pensez à soutenir le développement de Plexcord en devenant donateur. Cela signifie beaucoup !"
                }
            },
        },
        uiElements: {
            manage: "Gérer les éléments d'interface",
            allows: "Vous permet de masquer les boutons que vous n'aimez pas",
            section: {
                chatbar: {
                    title: "Boutons de la barre de chat",
                    description: "Ce sont les boutons situés à droite de la barre de saisie"
                },
                messagePopover: {
                    title: "Boutons de popover de message",
                    description: "Boutons flottants qui apparaissent au survol d'un message"
                }
            },
            button: "Les boutons des plugins activés apparaîtront ici."
        },
        invalidInput: "Saisie invalide",
        loading: "Chargement...",
        authorPrefix: "par"
    },

    patchHelper: {
        title: "Aide au correctif (Patch Helper)",
        description: "Un outil pour développeurs pour aider à créer des correctifs pour les plugins Plexcord.",
        fullPatch: {
            label: "Correctif complet",
            description: "Collez votre correctif JSON complet ici pour remplir les champs"
        },
        find: "Rechercher",
        match: "Correspondance",
        replacement: "Remplacement",
        preview: "Aperçu",
        generatedCode: "Code généré",
        group: "Groupe",
        diff: "Différence",
        module: "Module",
        compile: "Compiler",
        compiled: "Compilation réussie",
        copy: {
            clipboard: "Copier dans le presse-papiers",
            codeblock: "Copier comme bloc de code"
        },
        error: {
            noMatch: "Aucune correspondance trouvée. Ce module est-il chargé tardivement ?",
            multipleMatch: "Plusieurs correspondances trouvées. Utilisez un motif plus spécifique.",
            noFind: "Le champ 'Rechercher' est manquant.",
            noReplacement: "Le champ 'Remplacement' est manquant.",
            invalidReplacement: "Le champ 'Remplacement' est invalide",
            replacementMatch: "Le champ 'replacement.match' est manquant",
            replacementReplace: "Le champ 'replacement.replace' est manquant",
            replacementMustFunction: "'Remplacement' doit être une fonction"
        },
        cheatSheet: {
            title: "Aide-mémoire",
            identifiers: "Séquence d'échappement regex spéciale pour les identifiants (variables, classes, etc.)",
            dollar: "Insérer un $",
            entireMatch: "Insérer toute la correspondance",
            beforeMatch: "Insérer le texte avant la correspondance",
            afterMatch: "Insérer le texte après la correspondance",
            nthGroup: "Insérer le n-ième groupe de capture ($1, $2...)",
            pluginInstance: "Insérer l'instance du plugin"
        },
        replacementEval: {
            label: "Traiter le remplacement comme une fonction",
            description: "'Remplacement' sera évalué comme une fonction si activé"
        }
    },

    sync: {
        title: "Sauvegarde & Restauration",
        warning: "Avertissement",
        warningText: "L'importation d'un fichier écrasera vos paramètres actuels. Faites une sauvegarde exportée d'abord si nécessaire.",
        description: "Vous pouvez importer et exporter vos paramètres Plexcord en JSON pour les transférer ou les restaurer facilement.",
        successful: "Paramètres importés avec succès. Redémarrez pour appliquer !",
        error: {
            failure: "Échec de l'importation : {{error}}",
            failedExport: "Échec de l'exportation, vérifiez la console",
            invalid: "Paramètres invalides. Est-ce un fichier de paramètres Plexcord ?",
            tooLarge: "DataStore trop volumineux - exclu de la sauvegarde. Utilisez 'Exporter DataStores' si besoin.",
            clearSomeDate: "Données trop volumineuses. Veuillez vider certaines données de plugin et réessayer."
        },
        settings: {
            text: "Qu'est-ce qui est inclus dans une sauvegarde ?",
            quickcss: "QuickCSS personnalisé",
            theme: "Liens de thèmes",
            plugins: "Paramètres de plugins",
            datastores: "DataStores de plugins (ex: fuseaux horaires)"
        },
        import: {
            title: "Importer les paramètres",
            description: "Sélectionnez un fichier exporté pour restaurer votre configuration.",
            all: "Importer tous les paramètres",
            plugins: "Importer Plugins",
            css: "Importer QuickCSS",
            datastore: "Importer DataStores"
        },
        export: {
            title: "Exporter les paramètres",
            description: "Exportez vos réglages actuels vers un fichier.",
            all: "Exporter tous les paramètres",
            plugins: "Exporter Plugins",
            css: "Exporter QuickCSS",
            datastore: "Exporter DataStores"
        },
        backupFileType: "Sauvegarde des paramètres Plexcord"
    },

    cloud: {
        text: "Cloud",
        title: "Synchronisation des paramètres",
        override: "Synchronisation cloud",
        description: "Synchronisez vos paramètres Plexcord avec le cloud. Cela permet de garder votre configuration cohérente sur plusieurs appareils sans import/export manuel.",
        switchDescription: "Une fois activé, vos paramètres peuvent être synchronisés vers et depuis le cloud. Utilisez les actions ci-dessous pour synchroniser manuellement.",
        settings: "Paramètres Cloud",
        successful: "Paramètres synchronisés sur le cloud !",
        updated: "Vos paramètres ont été mis à jour ! Cliquez ici pour redémarrer et appliquer les changements !",
        deleted: "Paramètres supprimés du cloud !",
        integration: {
            title: "Intégration Cloud",
            description: "L'intégration cloud de Plexcord vous permet de synchroniser vos paramètres sur plusieurs appareils et installations Discord. Vos données sont stockées en toute sécurité.",
        },
        reauth: "Nous avons remarqué que vous avez activé les intégrations cloud sur un autre client ! Vous devez vous ré-autoriser pour continuer à les utiliser. Cliquez ici pour aller dans les paramètres !",
        error: {
            setup: "Échec de la configuration (impossible de récupérer la configuration OAuth).",
            secret: "Échec de la configuration (aucun secret renvoyé).",
            string: "Échec de la configuration ({{error}}).",
            connect: "La synchronisation cloud a été désactivée car ce compte n'est pas connecté à l'application Plexcord Cloud. Vous pouvez la réactiver dans les paramètres Cloud.",
            noSettings: "Il n'y a aucun paramètre dans le cloud.",
            uptodate: "Vos paramètres sont à jour.",
            localNewer: "Vos paramètres locaux sont plus récents que ceux du cloud.",
            delete: "Impossible de supprimer les paramètres ({{error}}).",
            api: {
                returned: {
                    delete: "Impossible de supprimer les paramètres (L'API a renvoyé {{status}}).",
                    to: "Impossible de synchroniser vers le cloud (L'API a renvoyé {{status}}).",
                    from: "Impossible de synchroniser depuis le cloud (L'API a renvoyé {{status}}).",
                    manifest: "Impossible de récupérer le manifeste pour suppression (l’API a renvoyé {{status}})."
                }
            },
            synchronize: {
                to: "Impossible de synchroniser les paramètres vers le cloud ({{error}}).",
                from: "Impossible de synchroniser les paramètres depuis le cloud ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Activez l'intégration cloud ci-dessus pour utiliser les fonctions de synchronisation."
        },
        danger: {
            title: "Zone de danger",
            description: "Supprimez définitivement toutes vos données du cloud. Cette action est irréversible et supprimera tous les paramètres synchronisés.",
            delete: {
                account: {
                    title: "Supprimer le compte Cloud",
                    description: "Êtes-vous sûr de vouloir supprimer définitivement votre compte cloud et toutes les données associées ? Cette action est irréversible.",
                    confirm: "Supprimer le compte",
                    cancel: "Annuler"
                }
            }
        },
        notification: {
            title: "Intégration Cloud",
            enabled: "Intégration Cloud activée",
            host: "{{host}} a été ajouté à la liste blanche. Veuillez redémarrer l'application pour appliquer les changements.",
            erase: {
                successful: "Données cloud effacées avec succès",
                failed: "Échec de l'effacement des données (L'API a renvoyé {{status}}), veuillez contacter le support."
            }
        },
        button: {
            to: "Sync vers le Cloud",
            from: "Sync depuis le Cloud",
            fromDescription: "Cela écrasera vos paramètres locaux par ceux du cloud. À utiliser avec prudence !",
            delete: "Supprimer les données Cloud",
            enable: "Activer les intégrations Cloud",
            reauthorize: "Ré-autoriser",
            confirm: "Redémarrer maintenant",
            later: "Plus tard !"
        },
        privacy: "respecte votre vie privée",
        source: "code source",
        overview: "Plexcord propose une intégration cloud pour synchroniser vos réglages. Elle {{privacy}}, et le {{source}} est sous licence AGPL 3.0 pour que vous puissiez l'héberger vous-même.",
        authorization: "Connectez-vous au backend cloud pour la synchronisation. Une autorisation sera demandée si nécessaire.",
        backend: {
            title: "Backend Cloud",
            description: "Choisissez comment vos paramètres sont stockés. Par défaut, Plexcord Cloud est utilisé, mais vous pouvez connecter votre propre service auto-hébergé.",
            invalid: "URL invalide"
        },
        sync: {
            title: "Règles de synchronisation pour cet appareil",
            description: "Contrôle comment les paramètres circulent entre cet appareil et le cloud.",
            direction: {
                both: "Sync bidirectionnelle (les changements vont dans les deux sens)",
                push: "Cet appareil est la source (envoi uniquement)",
                pull: "Le cloud est la source (réception uniquement)",
                manual: "Pas de sync automatique (uniquement via les boutons ci-dessous)"
            }
        }
    },

    changelog: {
        text: "Journal des modifications",
        title: "Journal des modifications",
        description: "Retrouvez ici les derniers changements et mises à jour de Plexcord.",
        by: "par",
        check: "Vérification du dépôt",
        uptodate: "à jour",
        update: "Mise à jour",
        noMessage: "Aucun message",
        unknown: "Inconnu",
        updatedPlugins: "Plugins mis à jour",
        newSettings: "Nouveaux paramètres",
        newSettingTooltip: "Nouveau paramètre dans {{plugin}}",
        loading: "Chargement...",
        repoUptodate: "Dépôt à jour",
        fetch: "Récupérer depuis le dépôt",
        clear: "Effacer tous les journaux",
        internet: "Vérifiez votre connexion Internet et réessayez.",
        recent: "Changements récents",
        codeChanges: "Changements de code : {{count}} nouveau(x) commit(s)",
        updateLogs: "Journaux de mise à jour ({{count}})",
        noCommit: "Aucun commit d'avance sur votre version actuelle.",
        previous: "Sessions de mise à jour précédentes avec historique des commits et changements de plugins.",
        modal: {
            description: "Voir les changements récents. Récupère les commits directement depuis le dépôt.",
            repository: "Dépôt",
            failed: "Échec de la récupération - vérifiez la console",
            current: "Actuel :",
            hide: "Masquer les journaux",
            show: "Afficher les journaux",
            fetch: {
                title: "Récupérer les changements",
                description: "Vérifie le dépôt pour les nouveaux commits, mises à jour de plugins et changements de code.",
                newCommit: "Voici les nouveaux commits et mises à jour de plugins depuis votre dernière version.",
                confirm: "Récupérer",
            }
        },
        commit: {
            available: "commits disponibles",
            no: "Pas de nouveaux commits",
            new: "nouveaux plugins",
            updated: "plugins mis à jour",
            settings: "nouveaux paramètres"
        },
        toast: {
            already: "Déjà à jour avec le dépôt",
            found: "{{count}} nouveau(x) commit(s) trouvé(s) sur le dépôt",
            local: "Le dépôt est à jour avec votre copie locale",
            failed: "Échec de la récupération depuis le dépôt :(",
            cleared: "Tous les journaux ont été effacés",
            logCleared: "Le journal a été effacé",
            yourLatest: "Commits enregistrés depuis votre dernière mise à jour"
        },
        alert: {
            clear: {
                title: "Effacer tous les journaux",
                body: "Êtes-vous sûr de vouloir effacer tous les journaux ? Cette action est irréversible.",
                confirm: "Tout effacer",
                confirmColor: "danger",
                cancel: "Annuler"
            },
            log: {
                title: "Effacer le journal",
                body: "Êtes-vous sûr de vouloir effacer ce journal ? Cette action est irréversible.",
                confirm: "Effacer le journal",
                confirmColor: "danger",
                cancel: "Annuler"
            }
        },
        newPlugins: "{{count}} Nouveau(x) Plugin(s)",
        following: "Les plugins suivants ont été ajoutés récemment :",
        more: "+{{count}} autres plugins",
        error: {
            retrieveRepo: "Impossible de récupérer les informations du dépôt",
            fetchRepo: "Impossible de récupérer les données du dépôt",
            connectRepo: "Impossible de se connecter au dépôt. Vérifiez votre connexion Internet."
        }
    },

    csp: {
        restart: "Un redémarrage est requis pour appliquer ce changement",
        blocked: {
            resources: "Ressources bloquées",
            disallowed: "Certaines images, styles ou polices ont été bloqués car ils proviennent de domaines non autorisés.",
            recommended: "Il est fortement recommandé de les déplacer sur GitHub ou Imgur. Mais vous pouvez aussi autoriser les domaines de confiance.",
            afterAllow: "Après avoir autorisé un domaine, vous devez fermer complètement {{platform}} et redémarrer.",
            allow: "Autoriser",
            allowAll: "Tout autoriser ({{count}} domaines)",
            url: "URLs bloquées"
        },
        imgur: {
            direct: "Les liens Imgur doivent être des liens directs sous la forme {{etc}}",
            copy: "Pour obtenir un lien direct, faites un clic droit sur l'image et sélectionnez 'Copier l'adresse de l'image'."
        },
        notice: {
            allowHost: "Autoriser l'hôte",
            blocked: "Les connexions vers {{host}} sont bloquées. Autorisez cet hôte si vous lui faites confiance, puis redémarrez Discord.",
            imagesBlocked: "Les images de {{host}} sont bloquées. Autorisez cet hôte si vous lui faites confiance, puis redémarrez Discord.",
            failed: "Impossible d'autoriser ce domaine."
        },
        wants: {
            caller: "{{callerName}} souhaite autoriser les connexions vers {{domain}}",
            unknown: "Une source inconnue veut autoriser les connexions vers {{domain}}",
            detail: "À moins que vous ne fassiez entièrement confiance à {{domain}}, vous devriez annuler cette demande !",
            restart: "Vous devrez redémarrer {{appName}} pour que les changements prennent effet.",
            type: {
                images: "Images",
                styles: "CSS & Thèmes",
                fonts: "Polices"
            },
            content: "Les types de contenu suivants seront autorisés depuis {{domain}} :",
            understand: "Je fais entièrement confiance à {{domain}} et je comprends les risques.",
            button: {
                cancel: "Annuler",
                allow: "Autoriser"
            },
            title: "Permissions de l'hôte"
        }
    },

    themes: {
        title: "Thèmes",
        management: "Gestion des thèmes",
        description: "Personnalisez l'apparence de Discord. Ajoutez des fichiers .css locaux ou chargez des thèmes via URL.",
        local: "Thèmes locaux",
        new: "NOUVEAU",
        pinned: "Épinglé",
        stylus: "Extension Stylus",
        bd: "Thèmes BetterDiscord",
        github: "GitHub",
        download: "Vous cherchez des thèmes ? Allez sur {{bd}} ou {{github}}.",
        add: "Ajouter",
        reset: "Réinitialiser les paramètres",
        notCSS: "Ce n'est pas un fichier CSS. Utilisez le lien 'raw' !",
        okay: "OK !",
        checking: "Vérification...",
        valid: "Valide !",
        upload: "Télécharger un thème",
        openFolder: "Ouvrir le dossier des thèmes",
        loadMissing: "Charger les thèmes manquants",
        editQuickCSS: "Modifier QuickCSS",
        editClient: "Modifier ClientTheme",
        website: "Ouvrir le site web",
        discord: "Serveur Discord",
        downloadTheme: "Télécharger",
        refresh: "Actualiser",
        delete: "Supprimer",
        activation: {
            title: "Activation du thème",
            always: "Toujours actif",
            lightOnly: "Thème clair uniquement",
            darkOnly: "Thème sombre uniquement"
        },
        actions: {
            pin: "Épingler",
            unpin: "Désépingler",
            editSettings: "Modifier les paramètres"
        },
        unknown: {
            title: "Inconnu",
            author: "Auteur inconnu",
            theme: "Un thème Discord",
            description: "Aucune description fournie."
        },
        required: "Les plugins suivants sont requis mais désactivés : ",
        homepage: "Accueil",
        support: "Assistance",
        online: {
            title: "Thèmes en ligne",
            description: "Chargez des thèmes directement depuis des URLs. Ils se mettent à jour automatiquement.",
            enable: "Activer les thèmes en ligne",
            enableDescription: "Activer/Désactiver le chargement des thèmes en ligne.",
            placeholder: "https://exemple.com/theme.css"
        },
        quickActions: {
            title: "Actions rapides",
            description: "Raccourcis pour gérer vos thèmes."
        },
        error: {
            userscript: "Les thèmes ne sont pas supportés sur Userscript !",
            stylus: "Vous pouvez installer des thèmes avec {{stylus}} à la place !",
            expired: "Lien invalide ou expiré",
            text: "Erreur :"
        },
        copy: {
            url: "Copier l'URL",
            copied: "URL du thème copiée !",
            settings: "Copier les paramètres du thème",
            copiedSettings: "Paramètres du thème copiés dans le presse-papiers."
        },
        paste: {
            settings: "Coller les paramètres du thème",
            empty: "Votre presse-papiers est vide.",
            invalid: "Données de paramètres invalides.",
            pasted: "Paramètres du thème collés."
        },
        settings: {
            for: "Paramètres pour {{themeName}}",
        },
        installed: {
            title: "Thèmes installés",
            description: "Gérez vos thèmes ici.",
            count: "{{count}} thème(s) installé(s) ({{localCount}} locaux, {{onlineCount}} en ligne) · {{enabledCount}} activés",
            search: "Rechercher un thème...",
            loading: "Chargement des thèmes...",
            none: "Aucun thème installé. Ajoutez des fichiers dans votre dossier thèmes ou une URL ci-dessus.",
            noCriteria: "Aucun thème ne correspond à votre recherche."
        },
        filter: {
            all: "Tout afficher",
            online: "Thèmes en ligne",
            local: "Thèmes locaux",
            enabled: "Activés",
            disabled: "Désactivés"
        },
        notification: {
            refresh: {
                title: "Thème actualisé",
                error: "Échec de l'actualisation du thème"
            },
            failed: {
                download: "Échec du téléchargement du thème"
            }
        },
        openInFolder: "Ouvrir dans le dossier",
        fallback: {
            author: "Auteur inconnu",
            description: "Un thème Discord."
        }
    },

    updater: {
        title: "Mise à jour",
        settings: "Paramètres de mise à jour",
        updates: "Mises à jour",
        updated: "a été mis à jour !",
        restart: "Cliquez ici pour redémarrer",
        repaired: "Plexcord a été réparé !",
        ok: "OK",
        preferences: {
            title: "Préférences de mise à jour",
            description: "Contrôlez la façon dont Plexcord se met à jour.",
        },
        github: {
            local: "Votre copie locale a des commits plus récents que le dépôt distant. Veuillez réinitialiser vos changements locaux avant de mettre à jour."
        },
        error: {
            check: "Échec de la vérification des mises à jour. Voir la console.",
            occurred: "Une erreur inconnue est survenue",
            retrieve: "Échec de la récupération - voir la console",
            title: "Oups !",
            tryAgain: "Une erreur est survenue. Veuillez réessayer.",
            command: "Commande {{path}} introuvable.",
            code: "Code {{code}}. Voir la console pour plus d'infos.",
            running: "Erreur lors de l'exécution de {{cmd}} : {{error}}",
            failed: "Échec également :( Essayez de réinstaller avec l'installeur !"
        },
        available: "Il y a 1 mise à jour",
        updateAvailable: "Une mise à jour de Plexcord est disponible !",
        click: "Cliquez ici pour voir la mise à jour",
        available_plural: "Il y a {{count}} mises à jour",
        current: "À jour !",
        successful: {
            title: "Mise à jour réussie !",
            body: "Mise à jour effectuée. Redémarrer maintenant ?",
            button: {
                confirm: "Redémarrer",
                cancel: "Pas maintenant",
                update: "Mettre à jour maintenant",
                check: "Vérifier les mises à jour"
            },
            noFound: "Aucune mise à jour trouvée"
        },
        automatically: {
            label: "Mise à jour automatique",
            description: "Mettre à jour Plexcord automatiquement sans demander"
        },
        notify: {
            label: "M'avertir quand une mise à jour automatique est terminée",
            description: "Affiche une notification après une mise à jour automatique"
        },
        repo: "Dépôt",
        repoDescription: "Dépôt GitHub utilisé pour les mises à jour.",
        loading: "Chargement...",
        unknownAuthor: "Auteur inconnu"
    },

    components: {
        error: {
            title: "Oh non !",
            render: "Une erreur est survenue lors de l'affichage de ce composant."
        },
        componentFailed: {
            message: "Échec de l'affichage de cette page. Une mise à jour est peut-être disponible pour corriger cela. Voulez-vous mettre à jour et redémarrer ?"
        },
        quickCSS: {
            title: "Éditeur QuickCSS ouvert",
            message: "L'éditeur QuickCSS est toujours ouvert en arrière-plan.",
            detail: "Voulez-vous quand même fermer Discord ?",
            cancel: "Annuler",
            close: "Fermer quand même",
            windowTitle: "Éditeur QuickCSS de Plexcord"
        },
        messagePopover: {
            scrollLeft: "Défiler vers la gauche",
            scrollRight: "Défiler vers la droite"
        },
        notices: {
            error: "Erreur lors de l'affichage de l'avis"
        },
        tray: {
            aboutPlexcord: "À propos de Plexcord",
            updatePlexcord: "Mettre à jour Plexcord",
            noUpdateTitle: "Aucune mise à jour disponible",
            noUpdateBody: "Vous utilisez déjà la dernière version de Plexcord.",
            updateFailedTitle: "Échec de la mise à jour",
            updateFailedBody: "Impossible d'appliquer la mise à jour de Plexcord.",
            updateSuccessTitle: "Mise à jour réussie",
            updateSuccessBody: "Redémarrage de Plexcord pour appliquer la mise à jour.",
            updateErrorTitle: "Erreur de mise à jour",
            updateErrorBody: "Une erreur s'est produite lors de la mise à jour de Plexcord.\n\n{{error}}",
            openSettingsFolder: "Ouvrir le dossier des paramètres",
            openThemesFolder: "Ouvrir le dossier des thèmes"
        }
    },

    commands: {
        error: {
            execute: "Erreur lors de l'exécution de la commande '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Ignorer la notification",
        noYet: "Pas encore de notifications",
        settings: "Paramètres de notification",
        log: {
            title: "Journal des notifications",
            clear: "Effacer le journal",
            sure: "Êtes-vous sûr ?",
            permamently: "Cela supprimera définitivement {{count}} notification(s).",
            button: {
                confirm: "Confirmer",
                cancel: "Annuler"
            }
        }
    },

    memberlist: {
        error: {
            render: "Échec de l'affichage du décorateur de liste de membres {{key}}"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Échec de l'affichage de l'accessoire de message {{key}}"
            }
        },
        decoration: {
            error: {
                render: "Échec de l'affichage de la décoration de message {{key}}"
            }
        }
    },

    utils: {
        toast: {
            copied: "Copié dans le presse-papiers !"
        }
    },

    common: {
        unit: {
            year: "an",
            years: "ans",
            month: "mois",
            months: "mois",
            week: "semaine",
            weeks: "semaines",
            day: "jour",
            days: "jours",
            hour: "heure",
            hours: "heures",
            minute: "minute",
            minutes: "minutes",
            second: "seconde",
            seconds: "secondes",
            ago: "il y a",
            s: "s"
        },
        detectLanguage: "Détecter la langue"
    },

    plugin: {
        tags: {
            accessibility: "Accessibilité",
            activity: "Activité",
            appearance: "Apparence",
            chat: "Discussion",
            commands: "Commandes",
            console: "Console",
            customisation: "Personnalisation",
            developers: "Développeurs",
            emotes: "Émojis",
            friends: "Amis",
            fun: "Amusement",
            media: "Médias",
            notifications: "Notifications",
            organisation: "Organisation",
            privacy: "Confidentialité",
            reactions: "Réactions",
            roles: "Rôles",
            servers: "Serveurs",
            shortcuts: "Raccourcis",
            utility: "Utilitaire",
            voice: "Voix"
        },
        concatenatedComponentExtractor: {
            name: "ConcatenatedComponentExtractor",
            description: "Extraire les composants qui ont été concaténés par le bundler"
        },
        concatenatedModules: {
            name: "ConcatenatedModules",
            description: "Extraire les modules qui ont été concaténés par le bundler"
        },
        noTrack: {
            name: "NoTrack",
            description: "Désactiver le suivi de Discord (analytics/'science'), les métriques et les rapports de plantage Sentry",
            option: {
                disableAnalytics: {
                    label: "Désactiver les analyses",
                    description: "Bloque les analyses de suivi de Discord. Désactivez ceci si vous voulez que les badges suivent votre progression (ex. : heures de stream)."
                },
                disableStackDumping: {
                    description: "Afficher une trace de pile native dans la console quand Discord plante. Nécessite un redémarrage complet."
                }
            }
        },
        settings: {
            name: "Paramètres",
            description: "Ajoute l'interface des paramètres et les informations de débogage",
            option: {
                language: {
                    label: "Langue",
                    description: "Sélectionnez votre langue préférée pour Plexcord."
                },
                settingsLocation: {
                    label: "Emplacement des paramètres",
                    description: "Détermine où se trouvera la section des paramètres de Plexcord."
                },
                includePlexcordInfoWhenCopying: {
                    label: "Inclure les informations Plexcord lors de la copie",
                    description: "Copier également les informations Plexcord (Plexcord, Electron, Chromium) lors du clic sur les informations de version en bas à gauche de la page des paramètres"
                }
            }
        },
        supportHelper: {
            name: "Aide au Support",
            description: "Nous aide à vous fournir du support",
            commands: {
                description: {
                    debug: "Envoyer les infos de débogage Plexcord",
                    plugins: "Envoyer la liste des plugins Plexcord"
                }
            },
            modals: {
                outdated: {
                    title: "Attendez !",
                    body: "Vous utilisez une version obsolète de Plexcord ! Il est fort probable que votre problème soit déjà résolu.",
                    footer: "Veuillez d'abord mettre à jour avant de demander du support !",
                    dismiss: "Si vous savez ce que vous faites ou ne pouvez pas mettre à jour, vous pouvez ignorer ce message.",
                    button: {
                        cancel: "Voir les mises à jour",
                        confirm: "Mettre à jour et redémarrer",
                        secondaryConfirm: "Je sais ce que je fais ou je ne peux pas mettre à jour"
                    }
                },
                updater: {
                    title: "Attendez !",
                    body: "Vous utilisez une version de Plexcord mise à jour de manière externe, pour laquelle nous ne fournissons pas de support !",
                    footer: "Veuillez passer à une {{officially}}, ou contactez le mainteneur de votre paquet pour obtenir du support.",
                    officially: "version officiellement supportée de Plexcord",
                    button: {
                        cancel: "Annuler",
                        confirm: "Voir la page de téléchargement",
                        now: "Mettre à jour maintenant"
                    },
                    toast: {
                        success: "Succès ! Redémarrage...",
                        already: "Déjà à jour !",
                        failed: "Échec de la mise à jour :("
                    }
                },
                custom: {
                    title: "Attendez !",
                    header: "Vous utilisez une version personnalisée de Plexcord, pour laquelle nous ne fournissons pas de support !",
                    body: "Nous fournissons du support uniquement pour les {{officialBuild}}. Veuillez {{switch}} ou résolvez votre problème par vous-même.",
                    footer: "Vous serez banni du support si vous ignorez cette règle.",
                    official: "versions officielles",
                    switch: "passer à une version officielle",
                    button: {
                        confirm: "Compris",
                        secondaryConfirm: "Ne plus afficher"
                    }
                }
            },
            button: {
                debug: "Exécuter /plexcord-debug",
                plugins: "Exécuter /plexcord-plugins",
                snippet: "Exécuter le Snippet"
            },
            toast: {
                success: "Succès !",
                failed: "Échec de l'exécution du snippet :(",
                failedOpenInvite: "Échec de l'ouverture de l'invitation, veuillez vérifier la console :(",
                upload: "Liste des plugins téléchargée avec succès !",
                failedUpload: "Échec du téléchargement du fichier de liste des plugins. Veuillez réessayer.",
                unableGenerate: "Impossible de générer la liste des plugins."
            },
            dm: {
                warning: "Veuillez ne pas envoyer de messages privés aux développeurs de plugins Plexcord pour du support !{{br}}À la place, vous pouvez rejoindre le serveur de {{support}} et utiliser le salon de support Plexcord : {{channel}}"
            },
            alert: {
                title: "Attention : Nombre élevé de plugins",
                paragraph1: "Vous avez plus de 100 plugins activés.",
                paragraph2: "En raison du grand nombre de plugins, vous pourriez ne pas recevoir de support.",
                paragraph3: "Votre problème est probablement causé par des conflits entre plugins.",
                paragraph4: "Veuillez envisager de désactiver certains plugins pour le dépannage.",
                paragraph5: "Votre liste de plugins sera envoyée sous forme de fichier texte.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Faites un clic droit sur votre panneau de compte en bas à gauche pour voir votre profil sur le serveur actuel",
            option: {
                prioritizeServerProfile: {
                    label: "Prioriser le profil du serveur",
                    description: "Priorise le profil du serveur lors d'un clic gauche sur votre panneau de compte"
                }
            },
            context: {
                account: "Voir le profil du compte",
                server: "Voir le profil du serveur",
                prioritize: "Prioriser le profil du serveur"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Fait basculer le menu de suppression du bruit entre 'Aucun' et 'Krisp' au lieu de 'Krisp' et 'Standard'"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Anime tout ce qui peut être animé",
            option: {
                icons: {
                    label: "Icônes",
                    description: "Toujours animer les icônes de serveur, les avatars, les décorations et plus"
                },
                statusEmojis: {
                    label: "Emojis de statut",
                    description: "Toujours animer les emojis de statut"
                },
                serverBanners: {
                    label: "Bannières de serveur",
                    description: "Toujours animer les bannières de serveur"
                },
                nameplates: {
                    label: "Plaques de nom",
                    description: "Toujours animer les plaques de nom (nameplates)"
                },
                roleGradients: {
                    label: "Dégradés de rôle",
                    description: "Toujours animer les dégradés de rôles"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "Affiche toujours les fenêtres de profil en mode modal complet"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Déploie toujours les listes de rôles dans les fenêtres de profil",
            option: {
                hideArrow: {
                    label: "Masquer la flèche",
                    description: "Masque la flèche de déploiement"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Joue un son type Animal Crossing pour chaque message envoyé (ils jacassent beaucoup)",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume du son Animalese"
                },
                speed: {
                    label: "Vitesse",
                    description: "Vitesse du son Animalese"
                },
                pitch: {
                    label: "Hauteur (Pitch)",
                    description: "Multiplicateur de hauteur de voix"
                },
                messageLengthLimit: {
                    label: "Limite de longueur de message",
                    description: "Longueur maximale du message à traiter"
                },
                processOwnMessages: {
                    label: "Traiter ses propres messages",
                    description: "Activez pour que vos propres messages fassent aussi du bruit"
                },
                soundQuality: {
                    label: "Qualité sonore",
                    description: "Qualité du son à utiliser",
                    high: "Haute",
                    med: "Moyenne",
                    low: "Basse",
                    lowest: "Très basse"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "Supprime les fenêtres contextuelles agaçantes pour les domaines non approuvés et les fichiers suspects",
            option: {
                domain: {
                    label: "Domaine",
                    description: "Supprime la fenêtre de domaine non approuvé lors de l'ouverture de liens"
                },
                file: {
                    label: "Fichier",
                    description: "Supprime la fenêtre 'Téléchargement potentiellement dangereux' lors de l'ouverture de liens"
                },
                noDeleteSafety: {
                    label: "Pas de sécurité de suppression",
                    description: "Supprime l'obligation de saisir le nom du serveur lors de sa suppression"
                },
                confirmModal: {
                    label: "Fenêtre de confirmation",
                    description: "Faut-il afficher une fenêtre 'Êtes-vous sûr de vouloir supprimer ?'"
                }
            },
            alert: {
                title: "Supprimer le serveur ?",
                body: "C'est permanent, au cas où ce ne serait pas évident.",
                confirm: "Supprimer",
                cancel: "Annuler"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Anonymise les noms des fichiers téléchargés",
            option: {
                anonymiseByDefault: {
                    label: "Anonymiser par défaut",
                    description: "Anonymise les noms de fichiers par défaut. Vous pouvez désactiver cela dans la fenêtre de téléchargement si nécessaire."
                },
                spoilerMessages: {
                    label: "Messages Spoiler",
                    description: "Anonymise les noms des fichiers marqués comme spoilers."
                },
                method: {
                    label: "Méthode",
                    description: "Méthode d'anonymisation",
                    random: "Caractères aléatoires",
                    consistent: "Cohérent",
                    timestamp: "Horodatage",
                    date: "Date"
                },
                randomisedLength: {
                    label: "Longueur aléatoire",
                    description: "Longueur des caractères aléatoires"
                },
                consistent: {
                    label: "Cohérent",
                    description: "Clé secrète d'anonymisation cohérente"
                },
                dateFormat: {
                    description: "Format de date (YYYY, MM, DD, HH, mm, ss, SSS sont pris en charge)",
                    label: "Format de date"
                }
            },
            using: {
                anonymous: "Utilisation d'un nom de fichier anonyme",
                spoiler: "Utilisation du nom de fichier normal"
            },
            spoiler: {
                description: "Basculer le spoiler pour vos fichiers",
                toggle: "Basculer le spoiler pour vos fichiers (activé par défaut)",
                enabled: "Spoiler activé !",
                disabled: "Spoiler désactivé !"
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Plugin client pour arRPC afin d'activer le RPC sur Discord Web (expérimental)",
            use: {
                title: "Comment utiliser arRPC",
                enable: "{{link}} pour lancer le serveur, puis activez le plugin.",
                link: "Suivez les instructions sur le dépôt GitHub"
            },
            toast: {
                connected: "Connecté à arRPC",
                failed: "Échec de la connexion à arRPC, est-il lancé ?",
                retry: "Réessayer"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "Avec @someone, vous pouvez mentionner quelqu'un au hasard"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Met à jour automatiquement votre statut (en ligne, absent, ne pas déranger) lors du lancement de jeux",
            option: {
                statusToSet: {
                    label: "Statut à définir",
                    description: "Le statut à définir lors du lancement d'un jeu",
                    online: "En ligne",
                    dnd: "Ne pas déranger",
                    idle: "Absent",
                    invisible: "Invisible"
                },
                excludeInvisible: {
                    label: "Exclure l'invisibilité",
                    description: "Empêche les changements automatiques de statut lorsque vous êtes déjà en mode invisible"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Compresse automatiquement en ZIP les types de fichiers et dossiers spécifiés avant de les télécharger sur Discord",
            option: {
                extensions: {
                    label: "Extensions",
                    description: "Liste des extensions de fichiers à compresser automatiquement, séparées par des virgules (ex: .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "Affiche les bannières dans la liste des membres",
            option: {
                animate: {
                    label: "Animer",
                    description: "Animer la bannière"
                },
                preferNameplate: {
                    label: "Préférer la plaque de nom",
                    description: "Préférer la plaque de nom (nameplate) à la bannière"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Affiche les icônes d'activité dans la liste des membres et permet de voir toutes les activités",
            option: {
                memberList: {
                    label: "Liste des membres",
                    description: "Afficher les icônes d'activité dans la liste des membres"
                },
                iconSize: {
                    label: "Taille des icônes",
                    description: "Taille des icônes d'activité"
                },
                specialFirst: {
                    label: "Spéciaux en premier",
                    description: "Afficher les activités spéciales en premier (Actuellement Spotify et Twitch)"
                },
                renderGifs: {
                    label: "Afficher les GIFs",
                    description: "Autoriser l'affichage des GIFs"
                },
                removeGameActivityStatus: {
                    label: "Supprimer le statut 'Activité de jeu'",
                    description: "Supprime l'icône et le statut de l'activité de jeu"
                },
                userPopout: {
                    label: "Fenêtre utilisateur",
                    description: "Afficher toutes les activités dans la fenêtre de profil / barre latérale"
                },
                hideTooltip: {
                    label: "Masquer les infobulles",
                    description: "Masque les activités à divers endroits"
                },
                allActivitiesStyle: {
                    label: "Style de toutes les activités",
                    description: "Style d'affichage pour toutes les activités",
                    list: "Liste",
                    carousel: "Carrousel",
                    left: "Gauche",
                    right: "Droite"
                }
            },
            text: {
                smallText: "Petit texte",
                largeText: "Grand texte"
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Ajoute un spectrographe et un oscilloscope aux lecteurs de fichiers audio",
            option: {
                oscilloscope: {
                    label: "Oscilloscope",
                    description: "Activer le visualiseur oscilloscope"
                },
                spectrograph: {
                    label: "Spectrographe",
                    description: "Activer le visualiseur spectrographe"
                },
                oscilloscopeSolidColor: {
                    label: "Couleur unie oscilloscope",
                    description: "Utiliser une couleur unie pour l'oscilloscope au lieu d'un dégradé"
                },
                oscilloscopeColor: {
                    label: "Couleur de l'oscilloscope",
                    description: "Couleur de l'oscilloscope quand la couleur unie est activée"
                },
                spectrographSolidColor: {
                    label: "Couleur unie spectrographe",
                    description: "Utiliser une couleur unie pour le spectrographe au lieu d'un dégradé"
                },
                spectrographColor: {
                    label: "Couleur du spectrographe",
                    description: "Couleur du spectrographe quand la couleur unie est activée"
                }
            },
            toast: {
                invalidColorFormat: "Format de couleur invalide pour {{settingKey}}, assurez-vous qu'il soit au format 'R, G, B' ou '#RRGGBB'",
                invalidColorFormatFor: "Format de couleur invalide pour {{key}}, utilise \"R, G, B\" ou \"#RRGGBB\""
            }
        },
        betterBackreading: {
            name: "BetterBackreading",
            description: "Améliore la lecture de l'historique avec un chargement plus précoce des messages et moins de sauts.",
            wholeNumber: "Entrez un nombre entier entre {{min}} et {{max}}.",
            option: {
                imageScrollMargin: {
                    label: "Distance de préchargement des images",
                    description: "À quelle distance à l'avance charger les images, en pixels (300-3000)."
                },
                messageLoadBuffer: {
                    label: "Tampon de chargement des messages",
                    description: "À quelle distance à l'avance récupérer plus de messages, en pixels (500-3000)."
                },
                useDiscordMessageCount: {
                    label: "Utiliser le nombre dynamique de messages de Discord",
                    description: "Laisse Discord choisir combien de messages récupérer selon votre fenêtre et vos paramètres de discussion."
                },
                messageCount: {
                    label: "Nombre de messages personnalisé",
                    description: "Combien de messages récupérer par requête d'historique lorsque le nombre dynamique est désactivé (30-100)."
                },
                channelOpenScrollMode: {
                    label: "Position à l'ouverture d'un salon",
                    description: "Ouvre les salons non lus à la position enregistrée (ou en bas), toujours en bas, ou laisse le comportement par défaut des non-lus.",
                    default: "Par défaut de Discord",
                    bottom: "Toujours en bas",
                    saved: "Position enregistrée"
                }
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Créez des motifs personnalisés pour le menu de bannissement de Discord, et/ou affichez une zone de texte par défaut.",
            option: {
                reasons: {
                    label: "Motifs",
                    description: "Vos motifs personnalisés"
                },
                isTextInputDefault: {
                    label: "Zone de texte par défaut",
                    description: "Affiche une zone de texte au lieu d'un menu déroulant par défaut (équivalent à cliquer sur 'Autre')"
                }
            },
            title: "Motifs",
            placeholder: "Raison",
            add: "Ajouter un autre motif",
            duration: {
                discordDefault: "Valeur par défaut de Discord",
                none: "Ne rien supprimer",
                hour1: "Dernière heure",
                hours6: "6 dernières heures",
                hours12: "12 dernières heures",
                hours24: "24 dernières heures",
                days3: "3 derniers jours",
                days7: "7 derniers jours"
            },
            text: {
                autoDeleteDuration: "Durée de suppression automatique des messages"
            }
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Permet de rechercher dans la liste des utilisateurs bloqués, rend les noms sélectionnables dans les paramètres, ignore l'avertissement des profils bloqués et regroupe les messages bloqués / ignorés.",
            placeholder: "Rechercher des utilisateurs..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Améliore le système de commandes avec diverses optimisations.",
            option: {
                autoFillArguments: {
                    label: "Remplissage auto des arguments",
                    description: "Remplit automatiquement la commande avec tous les arguments au lieu de seulement ceux obligatoires"
                },
                allowNewlinesInCommands: {
                    label: "Sauts de ligne dans les commandes",
                    description: "Autorise les sauts de ligne dans les commandes (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Actualise localement les commandes d'application Discord",
                    user: "utilisateur spécifique à actualiser",
                    refreshing: "Actualisation des commandes d'application...",
                    refreshed: "Commandes actualisées avec succès !",
                    failed: "Échec de l'actualisation des commandes. Vérifiez la console."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Affiche les dossiers de serveurs dans une barre latérale dédiée et ajoute des améliorations liées aux dossiers",
            option: {
                sidebar: {
                    label: "Barre latérale",
                    description: "Affiche les serveurs d'un dossier dans une barre latérale dédiée"
                },
                sidebarAnim: {
                    label: "Animation de la barre latérale",
                    description: "Anime l'ouverture de la barre latérale du dossier"
                },
                closeAllFolders: {
                    label: "Fermer tous les dossiers",
                    description: "Ferme tous les dossiers lors de la sélection d'un serveur qui n'est pas dans un dossier"
                },
                closeAllHomeButton: {
                    label: "Bouton Accueil ferme tout",
                    description: "Ferme tous los dossiers en cliquant sur le bouton d'accueil"
                },
                closeOthers: {
                    label: "Fermer les autres",
                    description: "Ferme les autres dossiers lorsqu'un dossier est ouvert"
                },
                closeServerFolder: {
                    label: "Fermer le dossier du serveur",
                    description: "Ferme le dossier lors de la sélection d'un serveur à l'intérieur de celui-ci"
                },
                forceOpen: {
                    label: "Forcer l'ouverture",
                    description: "Force l'ouverture d'un dossier lors du passage à un serveur de ce dossier"
                },
                enableNestedFolders: {
                    label: "Activer les dossiers imbriqués",
                    description: "Autoriser l'imbrication de dossiers dans d'autres dossiers par glisser-déposer"
                },
                keepIcons: {
                    label: "Garder les icônes",
                    description: "Garde l'affichage des icônes de guilde dans la barre principale même si elles sont ouvertes dans la barre BetterFolders"
                },
                showFolderIcon: {
                    label: "Afficher l'icône du dossier",
                    description: "Affiche l'icône du dossier au-dessus des guildes dans la barre BetterFolders",
                    never: "Jamais",
                    always: "Toujours",
                    moreThanOne: "Quand plus d'un dossier est déployé"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Remplace le texte alternatif 'GIF' par les tags ou le nom de fichier du GIF"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Fait en sorte que le sélecteur de GIF ouvre la catégorie favoris par défaut",
            option: {
                keepOpen: {
                    label: "Garder ouvert",
                    description: "Garde le sélecteur de GIF ouvert après en avoir sélectionné un"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Affiche la date d'expiration des invitations, permet de voir le profil de l'inviteur et de prévisualiser les serveurs.",
            render: {
                tip: "Cette invitation expirera le {{time}}",
                header: "{{name}} vous a invité sur {{server}}",
                headerSelf: "Vous avez envoyé une invitation pour rejoindre {{server}}",
                never: "n'expire jamais"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Masque les notes ou désactive le correcteur orthographique (Configurer dans les paramètres !! )",
            option: {
                hide: {
                    label: "Masquer les notes",
                    description: "Masque la zone de notes dans les fenêtres utilisateur"
                },
                noSpellCheck: {
                    label: "Pas de correction orthographique",
                    description: "Désactive le correcteur dans les notes"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "Le nombre de '+' avant bir ':emoji:' détermine le message auquel l'ajouter"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Ajoute des options pour copier la couleur / modifier le rôle / voir l'icône du rôle lors d'un clic droit sur les rôles dans le profil utilisateur ou la liste des membres",
            option: {
                roleIconFileFormat: {
                    label: "Format d'icône de rôle",
                    description: "Format de fichier à utiliser pour afficher les icônes de rôles"
                }
            },
            context: {
                copyColor: "Copier la couleur du rôle",
                editRole: "Éditer le rôle",
                viewIcon: "Voir l'icône du rôle",
                viewMembers: "Afficher les membres du rôle"
            },
            text: {
                roleActions: "Actions de rôle"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "Copie la couleur du rôle en cliquant sur le point de couleur (RoleDot). Permet aussi d'avoir le point et le nom coloré simultanément.",
            option: {
                bothStyles: {
                    label: "Les deux styles",
                    description: "Affiche à la fois le point de rôle et le nom coloré"
                },
                copyRoleColorInProfilePopout: {
                    label: "Copier couleur dans le profil",
                    description: "Permet de cliquer sur le point de rôle dans le profil pour copier sa couleur"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Améliore le menu des sessions (appareils). Permet de voir l'heure exacte, de renommer les sessions et de recevoir des notifications.",
            new: "NOUVEAU",
            newSessions: "Nouvelles sessions :",
            rename: "Renommer",
            newDevice: "Nouveau nom d'appareil",
            resetName: "Réinitialiser le nom",
            save: "Enregistrer",
            cancel: "Annuler",
            option: {
                backgroundCheck: {
                    label: "Vérification en arrière-plan",
                    description: "Vérifie les nouvelles sessions en arrière-plan et affiche une notification si détectée"
                },
                checkInterval: {
                    label: "Intervalle de vérification",
                    description: "Fréquence de vérification des nouvelles sessions (en minutes)"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Améliore votre expérience d'ouverture du menu des paramètres",
            option: {
                disableFade: {
                    label: "Désactiver le fondu",
                    description: "Désactive l'animation de transition en fondu"
                },
                organizeMenu: {
                    label: "Organiser le menu",
                    description: "Organise le menu contextuel de l'engrenage des paramètres par catégories"
                },
                eagerLoad: {
                    label: "Chargement anticipé",
                    description: "Supprime le délai de chargement lors de la première ouverture du menu"
                }
            },
            alert: {
                title: "Redémarrage requis",
                restart: "Vous avez modifié des paramètres qui nécessitent un redémarrage.",
                confirm: "Redémarrer maintenant",
                cancel: "Plus tard !"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Téléchargez en un seul clic, ouvrez le menu avec un clic droit"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Ce plugin vous permet d'agrandir les aperçus de stream",
            context: {
                viewPreview: "Voir l'aperçu du stream"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Bloque les messages contenant des mots-clés spécifiques définis par l'utilisateur.",
            regexHelper: {
                title: "Assistant Regex",
                placeholder: "Texte à tester...",
                noPatterns: "Aucun motif configuré"
            },
            option: {
                blockedWords: {
                    label: "Mots bloqués",
                    description: "Liste de mots à bloquer, séparés par des virgules"
                },
                useRegex: {
                    label: "Utiliser Regex",
                    description: "Utiliser chaque valeur comme une expression régulière (avancé)"
                },
                regexHelper: {
                    label: "Assistant Regex",
                    description: "Testez vos expressions régulières sur un exemple de texte"
                },
                caseSensitive: {
                    label: "Sensible à la casse",
                    description: "Indique si la recherche doit respecter les majuscules/minuscules"
                },
                ignoreBlockedMessages: {
                    label: "Ignorer les messages bloqués",
                    description: "Ignore complètement la barre des nouveaux messages (récents)"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Empêche le chargement de Krisp"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Floute les pièces jointes dans les salons NSFW jusqu'au survol de la souris",
            option: {
                blurAmount: {
                    label: "Intensité du flou",
                    description: "Intensité du flou (en pixels)"
                },
                blurAllChannels: {
                    label: "Flouter tous les salons",
                    description: "Flouter les pièces jointes dans tous les salons (pas seulement NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Passe l'étape de confirmation lors de l'épinglage de messages"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Recevez quand même des notifications de sources spécifiques en mode 'Ne pas déranger'. Cliquez droit sur un utilisateur/salon/serveur pour l'ajouter.",
            context: {
                remove: "Supprimer l'exception de statut",
                add: "Ajouter une exception de statut"
            },
            option: {
                guilds: {
                    label: "Serveurs",
                    description: "Serveurs autorisés (notifié si mentionné n'importe où sur le serveur)",
                    placeholder: "Séparer par des virgules"
                },
                channels: {
                    label: "Salons",
                    description: "Salons autorisés (notifié si mentionné dans ce salon)",
                    placeholder: "Séparer par des virgules"
                },
                users: {
                    label: "Utilisateurs",
                    description: "Utilisateurs autorisés (notifié pour tous les messages en DM)",
                    placeholder: "Séparer par des virgules"
                },
                allowOutsideOfDms: {
                    label: "Autoriser hors DM",
                    description: "Autorise les utilisateurs sélectionnés à passer outre le statut même hors DMs"
                },
                notificationSound: {
                    label: "Son de notification",
                    description: "Indique si le son de notification doit être joué"
                },
                respectSilentPings: {
                    label: "Respecter les pings silencieux",
                    description: "Respecter les mentions silencieuses (@silent)"
                },
                statusToUse: {
                    label: "Statut à utiliser",
                    description: "Statut pour lequel la liste blanche s'applique",
                    online: "En ligne",
                    idle: "Absent",
                    dnd: "Ne pas déranger",
                    invisible: "Invisible"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Suivez et affichez les anniversaires des utilisateurs avec des icônes de gâteau",
            context: {
                label: "Anniversaire",
                setBirthday: "Définir l'anniversaire",
                clearBirthday: "Effacer l'anniversaire",
                current: "Actuel :"
            },
            option: {
                chat: {
                    label: "Chat",
                    description: "Afficher des icônes de gâteau à côté des pseudos dans le chat"
                },
                memberList: {
                    label: "Liste des membres",
                    description: "Afficher des icônes de gâteau dans la liste des membres"
                },
                profileBadge: {
                    label: "Badge de profil",
                    description: "Afficher un badge de gâteau sur le profil de l'utilisateur"
                },
                notificationSound: {
                    label: "Son de notification",
                    description: "Jouer un son lorsqu'une notification d'anniversaire est envoyée"
                },
                userList: {
                    label: "Anniversaires enregistrés",
                    description: "Gérer les anniversaires enregistrés"
                }
            },
            locations: {
                chat: {
                    label: "Chat",
                    description: "à côté des pseudos dans le chat"
                },
                memberList: {
                    label: "Liste des membres",
                    description: "dans la liste des membres"
                }
            },
            toast: {
                success: "Anniversaire défini avec succès !",
                invalid: "Format d'anniversaire invalide ! Seul le format JJ/MM est accepté.",
                cleared: "Anniversaire effacé avec succès !"
            },
            notification: {
                title: "🎂 C'est un anniversaire aujourd'hui !",
                body: "C'est l'anniversaire de {{username}} aujourd'hui !"
            },
            modal: {
                title: "Définir l'anniversaire pour {{username}}",
                description: "Entrez l'anniversaire au format JJ/MM (ex: 25/12)",
                placeholder: "ex: 25/12",
                current: "Anniversaire actuel :",
                set: "Définir l'anniversaire",
                cancel: "Annuler",
                birthday: "C'est mon anniversaire ! 🎂",
                saved: "Anniversaires enregistrés",
                savedDesc: "Aucun anniversaire enregistré pour le moment. Faites un clic droit sur les utilisateurs pour ajouter leur anniversaire !",
                today: "Aujourd'hui",
                remove: "Supprimer",
                loading: "Chargement...",
                save: "Enregistrer",
                edit: "Modifier"
            },
            text: {
                unknownUser: "Utilisateur inconnu"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Affiche des minuteurs d'appel dans tous les appels vocaux",
            option: {
                format: {
                    label: "Format",
                    description: "Format compact ou lisible par l'homme",
                    human: "30j 23h 00m 42s"
                },
                allCallTimers: {
                    label: "Tous les minuteurs d'appel",
                    description: "Afficher les minuteurs d'appel pour tous les utilisateurs dans les serveurs"
                },
                showWithoutHover: {
                    label: "Afficher sans survol",
                    description: "Toujours afficher le minuteur sans avoir besoin de survoler"
                },
                showRoleColor: {
                    label: "Afficher la couleur du rôle",
                    description: "Afficher avec la couleur du rôle de l'utilisateur (si le plugin ShowRoleColor est activé)"
                },
                trackSelf: {
                    label: "Me suivre",
                    description: "Afficher également mon propre minuteur"
                },
                showSeconds: {
                    label: "Afficher les secondes",
                    description: "Afficher les secondes dans le minuteur"
                },
                watchLargeGuilds: {
                    label: "Surveiller les grands serveurs",
                    description: "Suivre les utilisateurs dans les grands serveurs. Cela peut causer des ralentissements si vous êtes dans beaucoup de grands serveurs avec des utilisateurs actifs. Testé jusqu'à 2000 utilisateurs vocaux actifs sans problème."
                },
                fixUI: {
                    label: "Correction d'interface (UI)",
                    description: "Dans certains cas, le minuteur peut casser l'interface utilisateur. Activez cette option pour corriger le problème."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Ajoute des badges aux salons en fonction de leur type",
            badge: {
                private: "Ce salon est verrouillé.",
                nsfw: "Ce salon est marqué comme NSFW.",
                rules: "Ce salon est le salon des règles du serveur."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Un seul badge par salon",
                    description: "N'afficher qu'un seul badge par salon"
                },
                showTextBadge: {
                    label: "Afficher le badge de texte",
                    description: "Afficher le badge 'Texte'"
                },
                showVoiceBadge: {
                    label: "Afficher le badge vocal",
                    description: "Afficher le badge 'Vocal'"
                },
                showCategoryBadge: {
                    label: "Afficher le badge de catégorie",
                    description: "Afficher le badge 'Catégorie'"
                },
                showDirectoryBadge: {
                    label: "Afficher le badge d'annuaire",
                    description: "Afficher le badge 'Annuaire'"
                },
                showAnnouncementThreadBadge: {
                    label: "Afficher le badge de fil d'annonce",
                    description: "Afficher le badge de fil d'annonce"
                },
                showPublicThreadBadge: {
                    label: "Afficher le badge de fil public",
                    description: "Afficher le badge de fil public"
                },
                showPrivateThreadBadge: {
                    label: "Afficher le badge de fil privé",
                    description: "Afficher le badge de fil privé"
                },
                showStageBadge: {
                    label: "Afficher le badge Conférence",
                    description: "Afficher le badge 'Conférence'"
                },
                showAnnouncementBadge: {
                    label: "Afficher le badge d'annonce",
                    description: "Afficher le badge 'Annonces'"
                },
                showForumBadge: {
                    label: "Afficher le badge Forum",
                    description: "Afficher le badge 'Forum'"
                },
                showMediaBadge: {
                    label: "Afficher le badge Média",
                    description: "Afficher le badge 'Média'"
                },
                showNSFWBadge: {
                    label: "Afficher le badge NSFW",
                    description: "Afficher le badge 'NSFW'"
                },
                showLockedBadge: {
                    label: "Afficher le badge Verrouillé",
                    description: "Afficher le badge 'Verrouillé'"
                },
                showRulesBadge: {
                    label: "Afficher le badge des règles",
                    description: "Afficher le badge 'Règles'"
                },
                showUnknownBadge: {
                    label: "Afficher le badge inconnu",
                    description: "Afficher le badge 'Inconnu'"
                },
                textBadgeLabel: {
                    label: "Libellé badge Texte",
                    description: "Libellé du badge Texte",
                    default: "Texte"
                },
                voiceBadgeLabel: {
                    label: "Libellé badge Vocal",
                    description: "Libellé du badge Vocal",
                    default: "Vocal"
                },
                categoryBadgeLabel: {
                    label: "Libellé badge Catégorie",
                    description: "Libellé du badge Catégorie",
                    default: "Catégorie"
                },
                announcementBadgeLabel: {
                    label: "Libellé badge Annonces",
                    description: "Libellé du badge de fil d'annonce",
                    default: "Actualités"
                },
                announcementThreadBadgeLabel: {
                    label: "Libellé badge Fil d'annonce",
                    description: "Libellé du badge de fil d'annonce",
                    default: "Fil d'actualités"
                },
                publicThreadBadgeLabel: {
                    label: "Libellé badge Fil public",
                    description: "Libellé du badge de fil public",
                    default: "Fil"
                },
                privateThreadBadgeLabel: {
                    label: "Libellé badge Fil privé",
                    description: "Libellé du badge de fil privé",
                    default: "Fil privé"
                },
                stageBadgeLabel: {
                    label: "Libellé badge Conférence",
                    description: "Libellé du badge Conférence",
                    default: "Conférence"
                },
                directoryBadgeLabel: {
                    label: "Libellé badge Annuaire",
                    description: "Libellé du badge Annuaire",
                    default: "Annuaire"
                },
                forumBadgeLabel: {
                    label: "Libellé badge Forum",
                    description: "Libellé du badge Forum",
                    default: "Forum"
                },
                mediaBadgeLabel: {
                    label: "Libellé badge Média",
                    description: "Libellé du badge Média",
                    default: "Média"
                },
                nsfwBadgeLabel: {
                    label: "Libellé badge NSFW",
                    description: "Libellé du badge NSFW",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Libellé badge Verrouillé",
                    description: "Libellé du badge Verrouillé",
                    default: "Verrouillé"
                },
                rulesBadgeLabel: {
                    label: "Libellé badge Règles",
                    description: "Libellé du badge Règles",
                    default: "Règles"
                },
                unknownBadgeLabel: {
                    label: "Libellé badge Inconnu",
                    description: "Libellé du badge Inconnu",
                    default: "Inconnu"
                },
                textBadgeColor: {
                    label: "Couleur badge Texte",
                    description: "Couleur du badge Texte"
                },
                voiceBadgeColor: {
                    label: "Couleur badge Vocal",
                    description: "Couleur du badge Vocal"
                },
                categoryBadgeColor: {
                    label: "Couleur badge Catégorie",
                    description: "Couleur du badge Catégorie"
                },
                announcementBadgeColor: {
                    label: "Couleur badge Fil d'annonce",
                    description: "Couleur du badge de fil d'annonce"
                },
                announcementThreadBadgeColor: {
                    label: "Couleur badge Fil d'annonce",
                    description: "Couleur du badge de fil d'annonce"
                },
                publicThreadBadgeColor: {
                    label: "Couleur badge Fil public",
                    description: "Couleur du badge de fil public"
                },
                privateThreadBadgeColor: {
                    label: "Couleur badge Fil privé",
                    description: "Couleur du badge de fil privé"
                },
                stageBadgeColor: {
                    label: "Couleur badge Conférence",
                    description: "Couleur du badge Conférence"
                },
                directoryBadgeColor: {
                    label: "Couleur badge Annuaire",
                    description: "Couleur du badge Annuaire"
                },
                forumBadgeColor: {
                    label: "Couleur badge Forum",
                    description: "Couleur du badge Forum"
                },
                mediaBadgeColor: {
                    label: "Couleur badge Média",
                    description: "Couleur du badge Média"
                },
                nsfwBadgeColor: {
                    label: "Couleur badge NSFW",
                    description: "Couleur du badge NSFW"
                },
                lockedBadgeColor: {
                    label: "Couleur badge Verrouillé",
                    description: "Couleur du badge Verrouillé"
                },
                rulesBadgeColor: {
                    label: "Couleur badge Règles",
                    description: "Couleur du badge Règles"
                },
                unknownBadgeColor: {
                    label: "Couleur badge Inconnu",
                    description: "Couleur du badge Inconnu"
                }
            },
            badges: {
                text: "Texte",
                voice: "Vocal",
                category: "Catégorie",
                announcement: "Actualités",
                announcementThread: "Fil d'actualités",
                publicThread: "Fil",
                privateThread: "Fil privé",
                stage: "Conférence",
                directory: "Annuaire",
                forum: "Forum",
                media: "Média",
                nsfw: "NSFW",
                locked: "Verrouillé",
                rules: "Règles",
                unknown: "Inconnu"
            },
            tooltip: {
                locked: "Ce salon est verrouillé.",
                nsfw: "Ce salon est marqué comme NSFW."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "Regroupez vos salons favoris dans des onglets, comme dans un navigateur",
            open: "Ouvrir dans un nouvel onglet",
            animation: {
                title: "Contrôles d'animation",
                description: "Activez ou désactivez les animations spécifiques pour les onglets de salon. Chaque option est indépendante.",
                placeholder: "Sélectionnez les animations à activer...",
                tabHover: "Effets de survol (levée + échelle)",
                tabSelection: "Animation de levée de l'onglet sélectionné",
                tabDragDrop: "Glisser-déposer (fantôme + réorganisation)",
                tabEnterExit: "Glissement d'entrée/sortie (création + fermeture)",
                tabIconPop: "Apparition d'icône (agrandissement)",
                closeRotation: "Rotation du bouton de fermeture",
                plusPulse: "Pulsation du bouton Plus",
                mentionGlow: "Lueur du badge de mention",
                compactExpand: "Expansion du mode compact",
                selectedBorder: "Bordure d'accent de l'onglet sélectionné",
                selectedBackground: "Couleur de fond de l'onglet sélectionné",
                tabShadows: "Effets d'ombre des onglets",
                tabRepositioning: "Repositionnement (changements de position fluides)",
                resizeHandle: "Fondu de la poignée de redimensionnement",
                questActivate: "Dégradé des quêtes actives"
            },
            bookmark: {
                label: "Signet",
                unknown: "Utilisateur inconnu",
                folder: "Dossier",
                add: "Ajouter aux signets",
                edit: "Modifier le signet",
                delete: "Supprimer le signet",
                remove: "Retirer des signets",
                removeFolder: "Retirer le signet du dossier",
                loading: "Chargement des signets...",
                noBookmarks: "Vous n'avez pas de signets. Vous pouvez ajouter un onglet ouvert ou masquer ceci par clic droit",
                quests: "Quêtes",
                messageRequests: "Demandes de messages",
                friends: "Amis",
                shop: "Boutique",
                library: "Bibliothèque",
                discovery: "Découverte",
                nitro: "Nitro",
                icymi: "ICYMI (Au cas où)",
                activity: "Activité",
                specialPage: "Page spéciale",
                searchPlaceholder: "Rechercher des signets"
            },
            button: {
                save: "Enregistrer",
                delete: "Supprimer",
                cancel: "Annuler",
                reset: "Réinitialiser",
                close: "Fermer"
            },
            context: {
                label: "Menu contextuel ChannelTabs",
                bookmark: "Menu contextuel signet ChannelTabs",
                tab: "Menu contextuel onglet ChannelTabs",
                folderMenu: "Menu du dossier de signets",
                compact: "Compacte",
                bookmarkBar: "Barre de signets",
                openAll: "Ouvrir tous les favoris",
                openNew: "Ouvrir dans un nouvel onglet",
                close: {
                    tab: "Fermer l'onglet",
                    otherTabs: "Fermer les autres onglets",
                    tabsToRight: "Fermer les onglets vers la droite",
                    tabsToLeft: "Fermer les onglets vers la gauche",
                    reopen: "Rouvrir l'onglet fermé",
                    allTabs: "Fermer tous los onglets"
                }
            },
            error: {
                noLogin: "Aucun compte n'est connecté ?"
            },
            modal: {
                add: {
                    title: "Ajouter le signet au dossier",
                    select: "Sélectionnez un dossier",
                    create: "En créer un"
                },
                edit: {
                    title: "Modifier le signet",
                    name: "Nom du signet",
                    folder: "Couleur du dossier"
                },
                delete: {
                    title: "Êtes-vous sûr ?",
                    description: "Supprimer un dossier de signets supprimera également tous les signets qu'il contient."
                },
                folderIcon: {
                    title: "Choisir l'icône du dossier",
                    preview: "Aperçu",
                    iconColor: "Couleur de l'icône",
                    search: "Rechercher",
                    searchPlaceholder: "Rechercher parmi {{count}} icônes...",
                    folderName: "Nom du dossier",
                    folderColor: "Couleur du dossier",
                    folderIcon: "Icône du dossier",
                    chooseIcon: "Choisir une icône",
                    useDefaultIcon: "Utiliser l'icône par défaut"
                }
            },
            option: {
                onStartup: {
                    label: "Au démarrage",
                    description: "Que faire des onglets au démarrage",
                    nothing: "Ne rien faire (ouvrir sur l'onglet Amis)",
                    remember: "Se souvenir des onglets de la dernière session",
                    open: "Ouvrir un ensemble spécifique d'onglets"
                },
                tabSet: {
                    label: "Ensemble d'onglets"
                },
                noPomeloNames: {
                    label: "Pas de noms Pomelo",
                    description: "Utiliser les noms d'affichage au lieu des pseudos pour les DMs"
                },
                showStatusIndicators: {
                    label: "Indicateurs de statut",
                    description: "Afficher les indicateurs de statut pour les DMs"
                },
                showBookmarkBar: {
                    label: "Afficher la barre de signets"
                },
                persistUnreadCountFallback: {
                    label: "Conserver le fallback du nombre non lu",
                    description: "Conserver les fallbacks des badges non lus entre les rechargements pour les onglets et les favoris"
                },
                bookmarkNotificationDot: {
                    label: "Point de notification de signet",
                    description: "Afficher un point de notification pour les signets"
                },
                widerTabsAndBookmarks: {
                    label: "Onglets et signets plus larges",
                    description: "Étendre la longueur des onglets et des signets pour les grands moniteurs"
                },
                tabWidthScale: {
                    label: "Échelle de largeur d'onglet",
                    description: "Échelle de largeur d'onglet (pourcentage) - ajustable en faisant glisser les bords"
                },
                tabHeightScale: {
                    label: "Échelle de hauteur des onglets",
                    description: "Échelle de hauteur des onglets (pourcentage)."
                },
                renderAllTabs: {
                    label: "Rendre tous les onglets",
                    description: "Garder tous les onglets en cache mémoire pour un changement rapide (conserve la position de défilement)"
                },
                switchToExistingTab: {
                    label: "Passer à l'onglet existant",
                    description: "Aller à l'onglet s'il existe déjà pour le salon vers lequel vous naviguez"
                },
                createNewTabIfNotExists: {
                    label: "Nouvel onglet si inexistant",
                    description: "Créer un nouvel onglet s'il n'en existe aucun pour le salon cible"
                },
                enableRapidNavigation: {
                    label: "Activer la navigation rapide",
                    description: "Navigation rapide : naviguer rapidement entre les salons remplacera l'onglet actuel au lieu d'en créer de nouveaux"
                },
                rapidNavigationThreshold: {
                    label: "Seuil de navigation rapide",
                    description: "Fenêtre de temps (ms) pour la navigation rapide. Durant ce temps, les nouveaux salons remplacent l'onglet actuel."
                },
                tabBarPosition: {
                    label: "Position de la barre d'onglets",
                    description: "Position de la barre d'onglets",
                    top: "Haut",
                    bottom: "Bas"
                },
                enableNumberKeySwitching: {
                    label: "Touches numériques",
                    description: "Utiliser les touches numériques (1-9) pour changer d'onglet"
                },
                numberKeySwitchCount: {
                    label: "Nombre d'onglets accessibles",
                    description: "Nombre d'onglets accessibles via les touches (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "Raccourci fermeture d'onglet",
                    description: "Activer le raccourci clavier pour fermer l'onglet"
                },
                enableNewTabShortcut: {
                    label: "Raccourci nouvel onglet",
                    description: "Activer le raccourci clavier pour un nouvel onglet"
                },
                enableTabCycleShortcut: {
                    label: "Raccourci défilement d'onglets",
                    description: "Activer le raccourci clavier pour faire défiler les onglets"
                },
                keybindsSection: {
                    label: "Raccourcis",
                    description: "Cliquez sur un bouton et appuyez sur la combinaison de touches souhaitée. CTRL, SHIFT et ALT sont supportés.",
                    title: "Raccourcis clavier",
                    reset: "Réinitialiser tout par défaut",
                    shortcutDisabled: "Ce raccourci est actuellement désactivé",
                    pressKey: "Appuyez sur n'importe quelle touche...",
                    conflictError: "Ce raccourci est déjà utilisé par : {{key}}",
                    closeTab: {
                        label: "Fermer l'onglet",
                        description: "Clavier pour fermer l'onglet actif"
                    },
                    newTab: {
                        label: "Nouvel onglet",
                        description: "Ouvrir un nouvel onglet avec le salon actuel"
                    },
                    cycleTabsForward: {
                        label: "Onglet suivant",
                        description: "Passer à l'onglet suivant"
                    },
                    cycleTabsBackward: {
                        label: "Onglet précédent",
                        description: "Passer à l'onglet précédent"
                    }
                },
                closeTabKeybind: {
                    label: "Raccourci fermeture",
                    description: "Raccourci clavier pour fermer l'onglet actuel"
                },
                newTabKeybind: {
                    label: "Raccourci création",
                    description: "Raccourci clavier pour ouvrir un nouvel onglet"
                },
                cycleTabForwardKeybind: {
                    label: "Raccourci défilement suivant",
                    description: "Raccourci clavier pour passer à l'onglet suivant"
                },
                cycleTabBackwardKeybind: {
                    label: "Raccourci défilement précédent",
                    description: "Raccourci clavier pour passer à l'onglet précédent"
                },
                showTabNumbers: {
                    label: "Afficher les numéros d'onglet",
                    description: "Afficher des badges numérotés pour indiquer les raccourcis clavier"
                },
                tabNumberPosition: {
                    label: "Position du numéro",
                    description: "Où afficher le badge numéroté sur les onglets",
                    left: "Gauche (avant l'icône)",
                    right: "Droite (après le contenu)"
                },
                animations: {
                    label: "Animations"
                },
                animationHover: {
                    label: "Animation au survol",
                    description: "Activer les effets de levée et d'échelle au survol"
                },
                animationSelection: {
                    label: "Animation de sélection",
                    description: "Activer les animations de sélection (lueur, levée)"
                },
                animationDragDrop: {
                    label: "Animation de glisser-déposer",
                    description: "Activer les effets fantômes lors du déplacement"
                },
                animationEnterExit: {
                    label: "Animation d'entrée/sortie",
                    description: "Activer les animations de glissement à la création/fermeture"
                },
                animationIconPop: {
                    label: "Animation d'apparition d'icône",
                    description: "Activer l'agrandissement de l'icône lors de la sélection"
                },
                animationCloseRotation: {
                    label: "Animation rotation fermeture",
                    description: "Activer la rotation des boutons de fermeture"
                },
                animationPlusPulse: {
                    label: "Pulsation bouton Plus",
                    description: "Activer l'animation de pulsation pour le bouton Plus"
                },
                animationMentionGlow: {
                    label: "Lueur de mention",
                    description: "Activer une lueur rouge pulsée pour les mentions"
                },
                animationCompactExpand: {
                    label: "Animation compacte",
                    description: "Activer l'expansion fluide pour les onglets compacts"
                },
                animationSelectedBorder: {
                    label: "Animation bordure sélectionnée",
                    description: "Activer le style de bordure et lueur pour l'onglet sélectionné"
                },
                animationSelectedBackground: {
                    label: "Animation fond sélectionné",
                    description: "Activer le changement de couleur de fond pour l'onglet actif"
                },
                animationTabShadows: {
                    label: "Ombres d'onglets",
                    description: "Activer les effets d'ombre sur les onglets"
                },
                animationTabPositioning: {
                    label: "Positionnement fluide",
                    description: "Transitions fluides lorsque les onglets changent de place"
                },
                animationResizeHandle: {
                    label: "Poignée de redimensionnement",
                    description: "Activer le fondu pour la poignée de redimensionnement"
                },
                animationQuestsActive: {
                    label: "Animation de Quêtes actives",
                    description: "Activer les dégradés animés sur l'onglet Quêtes en cours"
                },
                compactAutoExpandSelected: {
                    label: "Auto-expansion de l'onglet actif",
                    description: "Agrandir automatiquement l'onglet compact actif pour voir le nom complet"
                },
                compactAutoExpandOnHover: {
                    label: "Auto-expansion au survol",
                    description: "Agrandir automatiquement les onglets compacts au survol"
                },
                openInNewTabAutoSwitch: {
                    label: "Auto-switch nouvel onglet",
                    description: "Passer automatiquement aux onglets ouverts via le menu 'Ouvrir dans un nouvel onglet'"
                },
                bookmarksIndependentFromTabs: {
                    label: "Signets indépendants des onglets",
                    description: "Les signets naviguent sans affecter la barre d'onglets active"
                },
                showResizeHandle: {
                    label: "Afficher la poignée",
                    description: "Afficher la poignée au survol pour ajuster la largeur de l'onglet"
                },
                openNewTabsInCompactMode: {
                    label: "Nouveaux onglets en mode compact",
                    description: "Ouvrir par défaut tous les nouveaux onglets en mode compact"
                },
                newTabButtonBehavior: {
                    label: "Comportement bouton Plus",
                    description: "Le bouton (+) suit les onglets au lieu de rester épinglé à droite"
                },
                oneTabPerServer: {
                    label: "Un onglet par serveur",
                    description: "Limiter à un onglet par serveur : ouvrir un nouveau salon utilisera l'onglet existant de ce serveur."
                },
                maxOpenTabs: {
                    label: "Nombre max d'onglets",
                    description: "Nombre maximum d'onglets ouverts (0 = illimité)"
                }
            },
            tabs: {
                startup: "Onglets de démarrage",
                currently: "Définir sur les onglets actuellement ouverts"
            },
            toast: {
                notRestoring: "Restauration annulée car KeepCurrentChannel est activé",
                failed: {
                    restore: "Échec de la restauration des onglets",
                    saved: "Échec du chargement des onglets enregistrés"
                }
            },
            text: {
                folder: "Dossier"
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Ajoute un compteur de caractères à la zone de chat",
            option: {
                colorEffects: {
                    label: "Effets de couleur",
                    description: "Activer ou désactiver les couleurs d'alerte à l'approche de la limite"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Masque tous les salons des catégories réduites, même s'ils ont des messages non lus."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Retire les émojis et décorations des noms de salons. Revient à l'original pendant la modification du salon.",
            option: {
                ignoredChannels: {
                    description: "Liste d'identifiants de salons, séparés par des virgules, à laisser intacts.",
                    label: "Salons ignorés"
                }
            },
            text: {
                keepOriginalName: "Garder le nom d'origine"
            }
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Supprime automatiquement les éléments de suivi (tracking) des URLs que vous envoyez"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Cliquez sur les rôles dans les profils ou la liste des membres pour voir qui les possède.",
            modal: {
                loading: "Chargement des membres...",
                noMembers: "Aucun membre trouvé.",
                unknown: "Rôle inconnu",
                andMore: "et {{count}} de plus"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Permet de masquer localement presque tout le contenu de n'importe quel utilisateur",
            replying: "Réponse à un message bloqué",
            option: {
                hideVc: {
                    label: "Masquer les salons vocaux",
                    description: "Masquer les salons vocaux contenant des utilisateurs bloqués."
                },
                usersToBlock: {
                    label: "Utilisateurs à bloquer",
                    description: "IDs d'utilisateurs séparés par une virgule et un espace"
                },
                hideBlockedUsers: {
                    label: "Masquer les utilisateurs bloqués",
                    description: "Masquer les utilisateurs bloqués partout"
                },
                hideBlockedMessages: {
                    label: "Masquer les messages bloqués",
                    description: "Masquer totalement les messages des utilisateurs bloqués"
                },
                hideEmptyRoles: {
                    label: "Masquer les rôles vides",
                    description: "Masquer les en-têtes de rôles si tous les membres sont bloqués"
                },
                blockedReplyDisplay: {
                    label: "Affichage des réponses bloquées",
                    description: "Ce qui doit s'afficher lorsqu'on répond à quelqu'un que vous avez masqué",
                    displayText: "Afficher un texte indiquant une réponse à un message caché",
                    hideReply: "Absolument rien"
                },
                guildBlackList: {
                    label: "Liste noire de serveurs",
                    description: "IDs de serveurs où désactiver cette fonctionnalité"
                },
                guildWhiteList: {
                    label: "Liste blanche de serveurs",
                    description: "IDs de serveurs où activer cette fonctionnalité"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Recréation de l'ancienne expérience de thème client. Ajoutez une couleur au thème de votre client Discord.",
            title: "Couleur du thème",
            add: "Ajouter une couleur au thème de votre client Discord",
            option: {
                color: {
                    label: "Couleur"
                },
                resetColor: {
                    label: "Réinitialiser la couleur"
                }
            },
            error: {
                modal: {
                    title: "Votre thème ne sera pas lisible !",
                    contrast: "La couleur sélectionnée n'offre pas assez de contraste avec le texte",
                    nitro: "Les thèmes Nitro ne sont pas supportés",
                    switch: "Passer en mode {{oppositeTheme}}",
                    disable: "Désactiver le thème Nitro",
                    reset: "Réinitialiser la couleur du thème"
                }
            },
            text: {
                dark: "Sombre",
                light: "Clair"
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "Ajoute plus d'options de FPS et de durée pour les Clips, ainsi que le marquage RPC !",
            minutes: "Minutes",
            option: {
                richPresenceTagging: {
                    label: "Marquage Rich Presence",
                    description: "Quand les clips doivent-ils être marqués avec la Rich Presence actuelle ?",
                    always: "Toujours",
                    only: "Seulement si le nom de l'activité correspond",
                    never: "Jamais"
                },
                clipsLink: {
                    label: "Lien Clips",
                    link: "Modifiez les options FPS et durée dans les paramètres de Clips !"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Supprime les icônes pour daltoniens des statuts, comme sur le Discord de 2015-2017"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Palette de commandes façon Raycast pour lancer des actions n'importe où dans Discord",
            action: {
                command: {
                    label: "Exécuter une commande",
                    description: "Créez un alias pour une autre commande de la palette. Utilisez le sélecteur si vous ignorez l'identifiant."
                },
                settings: {
                    label: "Ouvrir une page de paramètres",
                    description: "Aller directement à une page de paramètres Discord."
                },
                url: {
                    label: "Ouvrir une URL",
                    description: "Ouvrir un lien. Utilisez des liens https:// pour une meilleure compatibilité."
                },
                macro: {
                    label: "Exécuter une Macro",
                    description: "Exécuter une séquence de commandes dans l'ordre."
                }
            },
            category: {
                auto: "Auto (placement par défaut)",
                default: {
                    label: "Actions rapides",
                    description: "Raccourcis Plexcord courants"
                },
                plugins: {
                    label: "Plugins",
                    description: "Activer, désactiver et configurer les plugins Plexcord",
                    enable: {
                        label: "Activer des plugins"
                    },
                    disable: {
                        label: "Désactiver des plugins"
                    },
                    settings: {
                        label: "Paramètres des plugins"
                    },
                    toolbox: {
                        label: "Actions de plugin"
                    },
                    chatbar: {
                        label: "Boutons de la barre de chat"
                    },
                    changes: {
                        label: "Changements de plugin"
                    }
                },
                context: {
                    label: "Contexte actuel",
                    description: "Actions pour le salon et le serveur sélectionnés"
                },
                updates: {
                    label: "Mises à jour",
                    description: "Rester à jour avec Plexcord"
                },
                discordSettings: {
                    label: "Paramètres Discord",
                    description: "Aller aux pages de configuration de Discord"
                },
                custom: {
                    label: "Commandes personnalisées",
                    description: "Entrées de la palette définies par l'utilisateur"
                },
                sessions: {
                    label: "Outils de session",
                    description: "Utilitaires pour gérer votre session Discord"
                },
                guilds: {
                    label: "Serveurs",
                    description: "Naviguer rapidement vers vos serveurs"
                },
                friends: {
                    label: "Amis",
                    description: "Naviguer rapidement vers vos amis"
                },
                action: {
                    label: "Action"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Ouvrir les paramètres Plexcord",
                        plugin: "Ouvrir les paramètres du plugin"
                    }
                },
                reload: {
                    label: "Recharger Discord",
                    description: "Recharge la fenêtre Discord actuelle"
                }
            },
            command: {
                enable: "Activer {{pluginName}}",
                enabled: "{{pluginName}} activé",
                disable: "Désactiver {{pluginName}}",
                disabled: "{{pluginName}} désactivé",
                failed: "La commande a échoué :",
                toggleFailed: "Échec du basculement de {{pluginName}}.",
                pluginSettings: "Paramètres de {{pluginName}}",
                untitled: "Commande sans titre",
                new: "Nouvelle commande",
                error: {
                    enter: "Entrez un ID de commande ou choisissez-en un ci-dessous.",
                    noCommand: "Aucune commande ne correspond à cet ID."
                },
                discord: {
                    account: "Ouvrir Mon compte",
                    privacy: "Ouvrir Confidentialité et sécurité",
                    notifications: "Ouvrir Notifications",
                    voice: "Ouvrir Voix et vidéo",
                    text: "Ouvrir Texte et images",
                    appearance: "Ouvrir Apparence",
                    accessibility: "Ouvrir Accessibilité",
                    keybinds: "Ouvrir Raccourcis clavier",
                    advanced: "Ouvrir Avancé",
                },
                updates: {
                    check: {
                        label: "Rechercher des mises à jour",
                        description: "Rechercher des mises à jour pour Plexcord",
                        one: "Une mise à jour disponible",
                        multiple: "{{count}} mises à jour disponibles",
                        none: "Aucune mise à jour disponible",
                        failed: "Échec de la recherche de mises à jour."
                    },
                    changelog: {
                        label: "Voir le journal des modifications",
                        description: "Ouvre le journal des modifications de Plexcord"
                    }
                },
                read: {
                    mark: {
                        label: "Marquer {{channelLabel}} comme lu"
                    }
                },
                pin: {
                    open: {
                        label: "Ouvrir les messages épinglés de {{channelLabel}}"
                    },
                    toggle: {
                        label: "Épingler la dernière commande"
                    }
                },
                channel: {
                    mute: {
                        label: "Rendre {{channelLabel}} muet",
                        oneHour: "Rendre {{channelLabel}} muet pour 1 heure",
                        untilTomorrow: "Rendre {{channelLabel}} muet jusqu'à demain",
                    },
                    unmute: {
                        label: "Réactiver le son de {{channelLabel}}",
                    },
                    reopen: {
                        label: "Rouvrir le dernier DM fermé"
                    },
                    dm: {
                        open: {
                            label: "Ouvrir un DM avec {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Paramètres de {{guildLabel}}"
                    },
                    navigate: {
                        label: "Aller sur {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "Ne pas déranger pendant 30 minutes",
                    oneHourDnd: "Ne pas déranger pendant 1 heure",
                    cancelStatusReset: "Annuler le minuteur de statut"
                },
                status: {
                    set: {
                        online: "Statut : En ligne",
                        idle: "Statut : Absent",
                        dnd: "Statut : Ne pas déranger",
                        invisible: "Statut : Invisible"
                    }
                },
                toggle: {
                    streamer: "Basculer le mode Streamer",
                    mute: "Basculer le micro",
                    deafen: "Basculer le casque",
                },
                notification: {
                    clear: {
                        label: "Effacer les notifications bureau"
                    }
                },
                palette: {
                    settings: {
                        label: "Paramètres de Command Palette",
                        description: "Configurer le plugin Command Palette"
                    }
                },
                recent: {
                    label: "Commandes récentes",
                    description: "Affiche les dernières commandes exécutées",
                    rerun: "Réexécuter la dernière commande"
                },
                plugin: {
                    reload: {
                        label: "Recharger tous les plugins",
                        description: "Tente de recharger à chaud tous les plugins activés"
                    },
                    enable: {
                        label: "Activer tous les plugins"
                    },
                    disable: {
                        label: "Désactiver tous les plugins non requis"
                    },
                    restart: {
                        label: "Redémarrer Plexcord",
                        description: "Recharge la fenêtre du client Discord"
                    }
                },
                quickCSS: {
                    label: "Basculer Quick CSS"
                },
                transparentity: {
                    label: "Basculer la transparence de la fenêtre"
                },
                theme: {
                    open: {
                        label: "Ouvrir les paramètres de thème client"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Rechercher des commandes",
                noCommand: "Aucune commande trouvée",
                add: {
                    title: "Ajouter une commande"
                },
                choose: {
                    title: "Choisir une commande"
                },
                command: {
                    palette: {
                        label: "Palette de commandes",
                        placeholder: "Tapez une commande",
                        filtering: "Filtrage par {{tags}}",
                        noCommand: "Aucune commande trouvée",
                        pin: "Épingler la commande",
                        unpin: "Désépingler la commande"
                    },
                    target: {
                        label: "ID de la commande cible",
                        placeholder: "Entrez l'ID de la commande",
                        choose: "Choisir une commande"
                    },
                    custom: {
                        label: "Commandes personnalisées",
                        description: "1) Nommez la commande · 2) Ajoutez des mots-clés/tags/catégorie · 3) Choisissez une action et remplissez les détails.",
                        auto: "Auto (défaut)",
                        expand: "Développer",
                        collapse: "Réduire",
                        collapsed: {
                            label: "Libellé",
                            description: "Nom d'affichage",
                            advanced: {
                                hide: "Masquer les options avancées",
                                show: "Afficher les options avancées"
                            },
                            subtitle: {
                                label: "Description",
                                placeholder: "Sous-titre optionnel"
                            },
                            keywords: {
                                label: "Mots-clés",
                                placeholder: "Mots-clés séparés par des virgules"
                            },
                            tags: {
                                label: "Tags",
                                placeholder: "Tags séparés par des virgules"
                            },
                            suggestion: {
                                label: "Suggestion"
                            },
                            chooseCommand: {
                                label: "Choisissez où cette commande apparaît dans la palette."
                            },
                            danger: {
                                label: "Afficher comme dangereux"
                            }
                        },
                        remove: "Supprimer la commande",
                        add: "Ajouter une commande"
                    }
                },
                settings: {
                    noSelected: "Aucune page sélectionnée",
                    current: "Page actuelle",
                    choose: "Choisir une page..."
                },
                url: {
                    url: "URL",
                    error: "Utilisez des liens http:// ou https://.",
                    valid: "Entrez eine URL valide.",
                    open: {
                        external: "Ouvrir en externe",
                    }
                },
                macro: {
                    sequence: {
                        label: "Séquence de commandes",
                        placeholder: "commande-a, commande-b"
                    },
                    addStep: "Ajouter une étape",
                    unknownId: "IDs de commandes inconnus"
                }
            },
            status: {
                online: "En ligne",
                idle: "Absent",
                dnd: "Ne pas déranger",
                invisible: "Invisible"
            },
            tag: {
                core: "Cœur",
                navigation: "Navigation",
                utility: "Utilitaire",
                developer: "Développeur",
                customization: "Personnalisation",
                plugins: "Plugins",
                session: "Session",
                context: "Contexte",
                custom: "Personnalisé",
                guilds: "Serveurs",
                friends: "Amis",
                other: "Autre"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Impossible de trouver le bouton de chat '{{label}}'.",
                        failedToTrigger: "Échec du déclenchement de {{label}}.",
                        activated: "{{label}} activé."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Contrôles de sourdine du salon indisponibles",
                        muted: "Salon mis en sourdine.",
                        unmuted: "Son du salon réactivé.",
                        failed: "Échec de la mise à jour de la sourdine du salon."
                    },
                    dm: {
                        no: "Aucune fermeture de DM enregistrée cette session.",
                        reOpened: "Dernier DM fermé rouvert.",
                        noAvailable: "Le DM n'est plus disponible."
                    }
                },
                command: {
                    loop: "Boucle de commande détectée dans la macro.",
                    notFound: "Commande {{commandId}} introuvable.",
                    unsupported: "Action de commande personnalisée non supportée.",
                    failedToRun: "Échec de l'exécution de {{label}}.",
                    notMetadata: "Métadonnées du plugin Command Palette indisponibles."
                },
                guild: {
                    mute: {
                        unavailable: "Contrôles de sourdine du serveur indisponibles",
                        muted: "Serveur mis en sourdine.",
                        unmuted: "Son du serveur réactivé.",
                        failed: "Échec de la mise à jour de la sourdine du serveur."
                    },
                    settings: {
                        unable: "Impossible d'ouvrir les paramètres du serveur.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Impossible d'ouvrir le panneau des messages épinglés.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Réinitialisation du statut annulée.",
                        unableToChange: "Impossible de changer le statut pour le moment.",
                        reverted: "Statut rétabli à {{status}}.",
                        dnd: "Ne pas déranger pour {{duration}} minutes."
                    },
                    change: {
                        unableToChange: "Impossible de changer le statut pour le moment.",
                        changed: "Statut changé en {{status}}."
                    }
                },
                read: {
                    marked: "Salon {{channelLabel}} marqué comme lu.",
                    failed: "Échec du marquage du salon comme lu."
                },
                route: {
                    unable: "Impossible d'ouvrir {{destination}}.",
                },
                notification: {
                    cleared: "Toutes les notifications ont été effacées.",
                    failed: "Échec de l'effacement des notifications.",
                    notSupported: "Effacement des notifications non supporté."
                },
                streamerMode: {
                    enabled: "Mode Streamer activé.",
                    disabled: "Mode Streamer désactivé.",
                },
                voice: {
                    micToggle: {
                        muted: "Microphone coupé.",
                        unmuted: "Microphone activé."
                    },
                    deafenToggle: {
                        deafened: "Vous êtes maintenant sourd.",
                        undeafened: "Vous n'êtes plus sourd."
                    }
                },
                quickCSS: {
                    enabled: "Quick CSS activé.",
                    disabled: "Quick CSS désactivé."
                },
                transparentity: {
                    enabled: "Transparence activée.",
                    disabled: "Transparence désactivée."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} est désactivé.",
                        disable: "{{pluginName}} est désactivé. Activez le plugin pour cette action."
                    },
                    required: {
                        label: "{{pluginName}} nécessite un redémarrage pour être rechargé."
                    },
                    stop: {
                        failed: "Échec de l'arrêt de {{pluginName}}."
                    },
                    restart: {
                        failed: "Échec du redémarrage de {{pluginName}}."
                    },
                    reload: {
                        label: "{{pluginName}} rechargé.",
                        noPlugin: "Aucun plugin n'a été rechargé.",
                        reloaded: "{{count}} plugin{{s}} rechargé{{s}}."
                    },
                    toggle: {
                        enabled: "{{changed}} plugin{{s}} activé{{s}}.",
                        disabled: "{{changed}} plugin{{s}} désactivé{{s}}.",
                        noChanged: "Aucun plugin n'a changé d'état."
                    },
                    run: {
                        failed: {
                            label: "Échec de l'exécution de {{pluginName}} : {{actionLabel}}."
                        }
                    }
                },
                commandDeleted: "Commande supprimée.",
                statusSetToLabel: "Statut défini sur {{label}}.",
                themeSetToLabel: "Thème défini sur {{label}}.",
                noSettingsPageWas: "Aucune page de paramètres n'a été fournie.",
                unableToOpenLabel: "Impossible d'ouvrir {{label_that_settings_page}}.",
                failedToStartDependencies: "Impossible de démarrer les dépendances : {{join}}",
                messageSentToUsername: "Message envoyé à {{username}}.",
                enabledRestart: "{{name}} activé. Redémarre pour appliquer.",
                disabledRestart: "{{name}} désactivé. Redémarre pour appliquer.",
                enabled: "{{name}} activé.",
                disabled: "{{name}} désactivé.",
                errorStarting: "Erreur lors du démarrage de {{name}}.",
                errorStopping: "Erreur lors de l'arrêt de {{name}}."
            },
            display: {
                channel: {
                    current: "Salon actuel",
                    group: "Message de groupe",
                    direct: "Message privé"
                },
                guild: {
                    current: "Serveur actuel",
                }
            },
            option: {
                hotkey: {
                    label: "Touche de raccourci",
                    description: "Raccourci pour ouvrir la palette",
                    recording: "Appuyez sur une touche...",
                    reset: "Réinitialiser"
                },
                visualStyle: {
                    label: "Style visuel",
                    description: "Apparence de la palette",
                    classic: "Classique",
                    polished: "Épuré"
                },
                showTags: {
                    label: "Afficher les tags",
                    description: "Afficher les étiquettes des commandes"
                },
                enableTagFilter: {
                    label: "Filtrage par tags",
                    description: "Afficher la barre de filtrage par tags"
                },
                customCommands: {
                    label: "Commandes personnalisées",
                    description: "Gérer les entrées personnalisées de la palette"
                },
                closeAfterExecute: {
                    description: "Fermer la palette après avoir exécuté une commande.",
                    label: "Fermer après exécution"
                }
            },
            template: {
                alias: {
                    label: "Alias de commande",
                    description: "Miroir d'une commande existante"
                },
                settings: {
                    label: "Paramètres",
                    description: "Ouvrir les paramètres Discord"
                },
                url: {
                    label: "Lien",
                    description: "Ouvrir une URL externe"
                },
                macro: {
                    label: "Macro",
                    description: "Exécuter une séquence de commandes"
                }
            },
            text: {
                insertTextInChat: "Insérer du texte dans le chat",
                name: "Name",
                commandName: "Nom de la commande",
                settingsPage: "Page des paramètres",
                searchSettingsPages: "Rechercher des pages de paramètres...",
                text: "Texte",
                textToInsertInto: "Texte à insérer dans la zone de chat",
                editCommand: "Modifier la commande",
                deleteCommand: "Supprimer la commande",
                createCustomCommand: "Créer une commande personnalisée",
                light: "Clair",
                ash: "Cendre",
                dark: "Sombre",
                onyx: "Onyx",
                toggleMute: "Activer/désactiver la sourdine",
                toggleDeafen: "Activer/désactiver le mode sourd",
                setStatus: "Définir le statut",
                searchStatuses: "Rechercher des statuts...",
                setLabel: "Définir {{label}}",
                toggleTheme: "Changer de thème",
                openServer: "Ouvrir un serveur",
                openChannel: "Ouvrir un salon",
                openDm: "Ouvrir un MP",
                goHome: "Aller à l'accueil",
                goToServer: "Aller au serveur",
                searchServers: "Rechercher des serveurs...",
                goToChannel: "Aller au salon",
                searchChannels: "Rechercher des salons...",
                searchFriends: "Rechercher des amis...",
                myAccount: "Mon compte",
                profiles: "Profils",
                dataPrivacy: "Données et confidentialité",
                devices: "Appareils",
                connections: "Connexions",
                appearance: "Apparence",
                accessibility: "Accessibilité",
                voiceVideo: "Voix et vidéo",
                chat: "Discussion",
                textImages: "Texte et images",
                notifications: "Notifications",
                keybinds: "Raccourcis clavier",
                authorizedApps: "Applications autorisées",
                familyCenter: "Centre familial",
                advanced: "Avancés",
                plexcord: "Plexcord",
                plexcordPlugins: "Plugins Plexcord",
                plexcordThemes: "Thèmes Plexcord",
                plexcordUpdater: "Mise à jour de Plexcord",
                plexcordChangelog: "Journal des modifications de Plexcord",
                openQuickcss: "Ouvrir QuickCSS",
                openUpdater: "Ouvrir la mise à jour",
                openChangelog: "Ouvrir le journal des modifications",
                restartDiscord: "Redémarrer Discord",
                managePlugins: "Gérer les plugins",
                searchPlugins: "Rechercher des plugins...",
                sendDm: "Envoyer un MP",
                recipient: "Destinataire",
                message: "Message",
                messageContent: "Contenu du message",
                openPaletteHotkey: "Raccourci d'ouverture de la palette",
                actions: "Actions",
                preview: "Aperçu",
                openCommand: "Ouvrir la commande",
                copyAnswer: "Copier la réponse",
                openDetails: "Ouvrir les détails",
                calculator: "Calculatrice",
                expression: "Expression",
                result: "Résultat",
                copyExpression: "Copier l'expression",
                pinned: "Épinglé",
                suggestions: "Suggestions",
                setAlias: "Définir un alias",
                aliasForLabel: "Alias pour {{label}}",
                leaveEmptyToRemove: "Laisse vide pour supprimer",
                command: "Commande",
                noResults: "Aucun résultat",
                addFile: "Ajouter un fichier",
                saveCommand: "Enregistrer la commande",
                createCommand: "Créer la commande",
                nameRequired: "Le nom est requis.",
                enterValidUrl: "Saisissez une URL valide.",
                pickSettingsPage: "Choisissez une page de paramètres parmi les suggestions.",
                textRequired: "Le texte est requis.",
                commandSaved: "Commande enregistrée.",
                commandCreated: "Commande créée.",
                editCustomCommand: "Modifier la commande personnalisée",
                disablePlugin: "Désactiver le plugin",
                enablePlugin: "Activer le plugin",
                pickRecipient: "Choisissez un destinataire parmi les suggestions.",
                addMessageOrFile: "Ajoutez un message ou un fichier.",
                pressKeys: "Appuyez sur des touches...",
                answerCopied: "Réponse copiée dans le presse-papiers.",
                calculationCopied: "Calcul copié dans le presse-papiers.",
                unpinCommand: "Désépingler la commande",
                pinCommand: "Épingler la commande",
                saveAlias: "Enregistrer l'alias",
                changeHotkey: "Modifier le raccourci",
                recordHotkey: "Enregistrer un raccourci",
                pressKeyCombo: "Appuyez sur une combinaison de touches, Retour arrière pour effacer, Échap pour annuler",
                searchIn: "Rechercher dans {{title}}...",
                searchCommands: "Rechercher des commandes...",
                somethingWentWrong: "Une erreur s'est produite.",
                remove: "Retirer",
                enabled: "Activé",
                disabled: "Désactivé",
                sectionNavigation: "Navigation",
                sectionCustom: "Personnalisé",
                sectionPlugins: "Plugins",
                sectionMessaging: "Messagerie",
                current: "Actuel",
                submit: "Valider"
            },
            description2: "Palette de commandes façon Raycast pour lancer des actions n'importe où dans Discord"
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Désactive les messages et erreurs de console agaçants",
            option: {
                disableLoggers: {
                    label: "Désactiver les loggers",
                    description: "Désactive les journaux système de Discord"
                },
                disableSpotifyLogger: {
                    label: "Désactiver le logger Spotify",
                    description: "Désactive le logger Spotify qui peut fuiter des infos de compte"
                },
                whitelistedLoggers: {
                    label: "Loggers autorisés",
                    description: "Liste de loggers (séparés par ;) à autoriser malgré tout"
                },
                allowLevel: {
                    label: "Niveau autorisé",
                    description: "Toujours autoriser les loggers de ces types",
                    filter: "Filtrer la liste"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Ajoute des alias courts pour beaucoup d'éléments sur la fenêtre. Exécutez `shortcutList` pour la liste."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Permet de spécifier certains mots déclencheurs qui seront floutés par défaut. Cliquez pour révéler.",
            option: {
                flagged: {
                    label: "Mots signalés",
                    flagged: "Mots signalés",
                    placeholder: "Mot"
                },
                onClick: {
                    label: "Au clic",
                    description: "Révéler le contenu uniquement au clic au lieu du survol"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Permet de copier les emojis en tant que chaîne formatée (<a:nom:ID>)",
            option: {
                copyUnicode: {
                    label: "Copier Unicode",
                    description: "Copier le caractère unicode brut au lieu de :nom: pour les emojis par défaut"
                }
            },
            context: {
                copy: "Copier Emoji Markdown"
            },
            toast: {
                success: "Succès ! Markdown de l'emoji copié."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Ajoute un bouton aux fichiers texte joints pour copier leur contenu",
            copied: "Copié !",
            large: "Fichier trop volumineux pour être copié.",
            copyFileContents: "Copier le contenu du fichier"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Eklenti permettant de copier les dégradés de couleurs des profils dans le presse-papiers.",
            copy: "Copier les couleurs du profil de serveur",
            toast: {
                noColor: "Aucune couleur de profil trouvée !",
                copied: "Couleurs du profil copiées !",
                error: "Erreur lors de la copie des couleurs !"
            },
            text: {
                formatted: "Couleur principale #{{primary}}, Couleur secondaire #{{secondary}}"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Copie l'URL du statut de l'utilisateur lors d'un clic droit dessus",
            toast: {
                copied: "URL copiée",
                error: "Erreur lors de la copie de l'URL, vérifiez la console"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Ajoute un bouton pour copier la mention d'un utilisateur dans le menu contextuel.",
            context: {
                copy: "Copier la mention"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Ajoute une option 'Copier l'URL de l'utilisateur' au menu contextuel.",
            context: {
                copy: "Copier l'URL de l'utilisateur"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Plugin utilitaire pour gérer et tenter de récupérer Discord après un plantage sans redémarrage",
            option: {
                attemptToPreventCrashes: {
                    label: "Tenter d'empêcher les crashs",
                    description: "Tenter ou non d'empêcher Discord de planter."
                },
                attemptToNavigateToHome: {
                    label: "Tenter le retour à l'accueil",
                    description: "Tenter de revenir à l'onglet accueil après une récupération de crash."
                }
            },
            toast: {
                crashed: {
                    title: "Discord a planté !",
                    body: "Zut :( Discord a planté deux fois de suite, récupération non tentée.",
                    update: "Oh oh, Discord vient de planter... mais bonne nouvelle, une mise à jour Plexcord est disponible et pourrait régler le problème ! Voulez-vous mettre à jour ?",
                    recover: "Tentative de récupération...",
                    invalid: "Lien d'invitation invalide ou expiré."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Utilisez Ctrl+Enter pour envoyer des messages (personnalisable)",
            option: {
                submitRule: {
                    label: "Règle d'envoi",
                    description: "La façon d'envoyer un message",
                    ctrlEnter: "Ctrl+Enter (Enter ou Shift+Enter pour nouvelle ligne)",
                    shiftEnter: "Shift+Enter (Enter pour nouvelle ligne)",
                    enter: "Enter (Shift+Enter pour nouvelle ligne ; défaut Discord)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Envoyer au milieu d'un bloc de code",
                    description: "Indique s'il faut envoyer le message même si le curseur est au milieu d'un bloc de code"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Ajoute un petit personnage qui suit votre curseur.",
            modal: {
                furColor: "Couleur de la fourrure",
                outlineColor: "Couleur du contour"
            },
            option: {
                buddy: {
                    label: "Compagnon",
                    description: "Choisissez un compagnon de curseur",
                    oneko: "Oneko (chat)",
                    fathorse: "Gros cheval"
                },
                speed: {
                    label: "Vitesse",
                    description: "Vitesse de votre compagnon",
                    invalid: "La vitesse doit être supérieure à 0"
                },
                fps: {
                    label: "Images par seconde",
                    description: "Fluidité de l'animation",
                    invalid: "Le framerate doit être supérieur à 0"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Couleur fourrure",
                    description: "Couleur hexadécimale de la fourrure d'Oneko"
                },
                outlineColor: {
                    label: "Couleur contour",
                    description: "Couleur hexadécimale du contour d'Oneko"
                },
                fathorseSection: {
                    label: "Gros cheval"
                },
                size: {
                    label: "Taille",
                    description: "Taille du gros cheval",
                    invalid: "La taille doit être supérieure à 0"
                },
                fade: {
                    label: "Fondu",
                    description: "Si le cheval doit s'estomper quand le curseur est proche"
                },
                freeroam: {
                    label: "Liberté",
                    description: "Si le cheval doit se promener librement quand vous êtes inactif"
                },
                shake: {
                    label: "Secousse",
                    description: "Si le cheval doit faire trembler la fenêtre en marchant"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Personnalisez les icônes de dossiers avec n'importe quelle image PNG",
            option: {
                solidIcon: {
                    label: "Icône pleine",
                    description: "Utiliser un fond plein derrière l'image"
                },
                folderIcons: {
                    label: "Icônes de dossiers",
                    description: "paramètres des icônes de dossiers"
                }
            },
            modal: {
                change: "Changer la taille de l'icône du dossier",
                save: "Enregistrer",
                unset: "Réinitialiser",
                set: "Définir une nouvelle icône",
                hover: "Vous devrez peut-être survoler le dossier après modification pour qu'il s'actualise."
            },
            context: {
                changeIcon: "Changer l'icône"
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Permet de régler le délai avant que Discord ne passe en mode absent (ou de désactiver l'auto-absence)",
            backOnline: "Bon retour ! Cliquez sur le bouton pour repasser en ligne. Cliquez sur X pour rester absent.",
            exit: "Quitter le mode absent",
            option: {
                idleTimeout: {
                    label: "Délai d'absence",
                    description: "Minutes avant de passer en mode absent (0 pour désactiver)"
                },
                remainInIdle: {
                    label: "Rester absent",
                    description: "À votre retour sur Discord, rester absent jusqu'à confirmation manuelle"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Ajoutez une Rich Presence (statut de jeu) entièrement personnalisable à votre profil Discord",
            goTo: "Allez sur le {{portal}} pour créer une application et obtenir l'ID d'application.",
            upload: "Téléchargez des images dans l'onglet Rich Presence pour obtenir les clés d'image.",
            image: "Si vous voulez un lien image, hébergez-la sur {{imgur}} et faites un clic droit pour 'Copier l'adresse de l'image'.",
            button: "Vous ne verrez pas vos propres boutons, mais tous les autres utilisateurs le pourront.",
            font: "Certains caractères unicode spéciaux (𝖆𝖎𝖓𝖘𝖎) peuvent empêcher l'affichage, utilisez des lettres normales.",
            placeholder: "Entrez une valeur",
            select: "Sélectionnez une option",
            error: {
                appIdInvalid: "L'ID d'application doit être un nombre valide.",
                notice: "Avis",
                sharing: "Le partage d'activité n'est pas activé, les autres ne pourront donc pas voir ta Rich Presence personnalisée !",
                enable: "Activer",
                validStream: "Le lien de stream doit être une URL valide.",
                mustBeURL: "Doit être une URL valide.",
                streamCharacters: "Le lien ne doit pas dépasser 512 caractères.",
                dontUse: "N'utilisez pas de lien Discord. Utilisez un lien image Imgur.",
                imgur: "Le lien Imgur doit être un lien direct (ex: https://i.imgur.com/...).",
                tenor: "Le lien Tenor doit être un lien direct (ex: https://media.tenor.com/...).",
                required: "Ce champ est obligatoire.",
                tooLong: "Ne doit pas dépasser {{maxLength}} caractères.",
                mustBeNumber: "Doit être un nombre.",
                mustBePositive: "Doit être un nombre positif.",
                startTimeInvalid: "L'horodatage de début doit être supérieur à 0.",
                endTimeInvalid: "L'horodatage de fin doit être supérieur à 0."
            },
            option: {
                appId: {
                    label: "ID de l'application",
                    description: "ID de l'application (requis)"
                },
                appName: {
                    label: "Nom de l'application",
                    description: "Nom de l'application (requis)"
                },
                details: {
                    label: "Détails",
                    description: "Détails (ligne 1)"
                },
                detailsURL: {
                    label: "URL des détails",
                    description: "URL cliquable sur les détails"
                },
                state: {
                    label: "État",
                    description: "État (ligne 2)"
                },
                stateURL: {
                    label: "URL de l'état",
                    description: "URL cliquable sur l'état"
                },
                partySize: {
                    label: "Taille du groupe",
                    description: "Nombre de personnes actuel (nécessite la taille max)"
                },
                partyMax: {
                    label: "Taille max du groupe",
                    description: "Capacité maximale (nécessite le nombre actuel)"
                },
                type: {
                    label: "Type d'activité",
                    description: "Type d'activité",
                    playing: "Joue à",
                    streaming: "En direct",
                    listening: "Écoute",
                    watching: "Regarde",
                    competing: "Participe à"
                },
                streamLink: {
                    label: "Lien de stream",
                    description: "Lien Twitch or YouTube (uniquement pour le type En direct)"
                },
                timestampMode: {
                    label: "Mode d'horodatage",
                    description: "Ce que doit afficher le temps écoulé",
                    none: "Aucun",
                    sinceDiscordOpen: "Depuis l'ouverture de Discord",
                    sameAsCurrentTime: "Même heure que vous (ne redémarre pas après 24h)",
                    custom: "Temps personnalisé"
                },
                startTime: {
                    label: "Début (en ms)",
                    description: "Timestamp de début en millisecondes"
                },
                endTime: {
                    label: "Fin (en ms)",
                    description: "Timestamp de fin en millisecondes"
                },
                imageBig: {
                    label: "Clé Grande Image",
                    description: "Clé de la grande image (chargée dans le portail développeur)"
                },
                imageBigTooltip: {
                    label: "Texte Grande Image",
                    description: "Texte au survol de la grande image"
                },
                imageBigURL: {
                    label: "URL Grande Image",
                    description: "URL cliquable de la grande image"
                },
                imageSmall: {
                    label: "Clé Petite Image",
                    description: "Clé de la petite image"
                },
                imageSmallTooltip: {
                    label: "Texte Petite Image",
                    description: "Texte au survol de la petite image"
                },
                imageSmallURL: {
                    label: "URL Petite Image",
                    description: "URL cliquable de la petite image"
                },
                buttonOneText: {
                    label: "Texte Bouton 1",
                    description: "Texte du premier bouton"
                },
                buttonOneURL: {
                    label: "URL Bouton 1",
                    description: "Lien du premier bouton"
                },
                buttonTwoText: {
                    label: "Texte Bouton 2",
                    description: "Texte du deuxième bouton"
                },
                buttonTwoURL: {
                    label: "URL Bouton 2",
                    description: "Lien du deuxième bouton"
                },
                enablePresence: {
                    description: "Afficher ou non la présence",
                    label: "Activer la présence"
                }
            },
            toast: {
                savedPresetName: "Préréglage {{name}} enregistré.",
                loadedPresetName: "Préréglage {{name}} chargé.",
                deletedPresetSelectedpreset: "Préréglage {{selectedPreset}} supprimé."
            },
            text: {
                presetName: "Nom du préréglage",
                selectAPreset: "Choisir un préréglage",
                streamLinkTwitchOr: "Lien du stream (Twitch ou YouTube, uniquement si le type d'activité est Streaming)",
                presets: "Préréglages",
                save: "Enregistrer",
                load: "Charger",
                delete: "Supprimer",
                noSavedPresetsYet: "Aucun préréglage enregistré pour le moment.",
                showCustomRpc: "Afficher le RPC personnalisé",
                customRpcDisabled: "RPC personnalisé désactivé",
                theEnablePresenceSetting: "Le paramètre « Activer la présence » est désactivé, ta présence ne s'affichera donc pas. Si ce n'était pas voulu, active-le ci-dessous.",
                activitySharingDisabled: "Partage d'activité désactivé",
                discordDeveloperPortal: "Portail des développeurs Discord",
                imgur: "Imgur",
                enableActivitySharing: "Activer le partage d'activité"
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Personnalisez les sons de Discord.",
            search: "Rechercher des sons",
            placeholder: "Rechercher par nom veya ID",
            import: "Importer",
            export: "Exporter",
            reset: "Tout réinitialiser",
            debug: "Débogage",
            toast: {
                error: "Erreur lors du chargement du fichier sonore",
                exported: "{{count}} paramètres exportés (fichiers audio non inclus)",
                imported: "Paramètres importés avec succès",
                importError: "Erreur d'importation. Voir console.",
                reset: "Toutes les modifications ont été réinitialisées !",
                overrideDescription: "Remplacement pour {{soundName}}",
                previewSound: "Erreur lors de la lecture du son.",
                playing: "Erreur lecture fichier personnalisé. Fichier peut-être corrompu.",
                invalidFile: "Aucun fichier sonore personnalisé pour l'aperçu",
                uploaded: "Fichier chargé avec succès : {{fileName}}",
                uploadedError: "Erreur de chargement : {{error}}",
                invalidExtension: "Type de fichier invalide. Veuillez charger un fichier audio.",
                uploading: "Chargement du fichier...",
                deleted: "Fichier supprimé avec succès",
                deleteError: "Erreur lors de la suppression.",
                loadingError: "Erreur de chargement du fichier sonore"
            },
            button: {
                preview: "Aperçu",
                stop: "Arrêter",
                volume: "Volume",
                soundSource: "Source sonore",
                customFile: "Fichier personnalisé",
                uploadNew: "Charger nouveau",
                delete: "Supprimer le fichier"
            },
            option: {
                default: "Défaut",
                custom: "Personnalisé",
                select: "Choisir un fichier...",
                overrides: {
                    label: "Remplacements"
                },
                soundpack: {
                    label: "Pack de sons",
                    description: "Pack de sons à utiliser à la place de celui défini dans Discord.",
                    default: "Par défaut de Discord"
                }
            },
            type: {
                activityEnd: "Fin d'activité",
                activityLaunch: "Lancement d'activité",
                activityUserJoin: "Utilisateur rejoint l'activité",
                activityUserLeft: "Utilisateur quitte l'activité",
                asmrMessage: "Message ASMR",
                bitMessage: "Message Bits",
                bopMessage: "Message Bop",
                callCalling: "Appel en cours",
                callRinging: "Appel entrant",
                clipError: "Erreur Clip",
                clipSave: "Sauvegarde Clip",
                ddrDown: "DDR Bas",
                ddrLeft: "DDR Gauche",
                ddrRight: "DDR Droite",
                ddrUp: "DDR Haut",
                deafen: "Casque coupé",
                discodo: "Discodo",
                disconnect: "Déconnexion",
                duckyMessage: "Message Canard",
                hangStatusSelect: "Changement de statut Hangout",
                highfiveClap: "Tape m'en cinq (clap)",
                highfiveWhistle: "Tape m'en cinq (sifflet)",
                humanMan: "Homme Humain",
                lofiMessage: "Message LoFi",
                mention1: "Mention 1 (@rôle)",
                mention2: "Mention 2 (@everyone)",
                mention3: "Mention 3 (@here)",
                message1: "Message 1 (Générique)",
                message2: "Message 2 (Réponse sur serveur)",
                message3: "Message 3 (DMs et Groupes)",
                mute: "Micro coupé",
                overlayUnlock: "Déverrouillage Overlay",
                poggermodeAchievement: "Succès Poggermode",
                poggermodeApplause: "Applaudissements Poggermode",
                poggermodeEnabled: "Poggermode activé",
                poggermodeMessage: "Message Poggermode",
                pttStart: "Appuyer pour parler (début)",
                pttStop: "Appuyer pour parler (fin)",
                reconnect: "Reconnexion",
                robotMan: "Homme Robot",
                stageWaiting: "Salle d'attente Conférence",
                streamEnded: "Stream terminé",
                streamStarted: "Stream lancé",
                streamUserJoined: "Utilisateur rejoint le stream",
                streamUserLeft: "Utilisateur quitte le stream",
                success: "Succès",
                undeafen: "Casque activé",
                unmute: "Micro activé",
                userJoin: "Utilisateur rejoint",
                userLeave: "Utilisateur quitte",
                userMoved: "Utilisateur déplacé",
                vibingWumpus: "Wumpus qui danse"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Horodatages personnalisés sur les messages et infobulles",
            demo: {
                cozy: "Cliquez-moi pour passer au format Cozy",
                compact: "Cliquez-moi pour passer au format Compact",
                lastWeek: "Ce message a été envoyé la semaine dernière",
                hover: "Survolez pour voir le format de l'infobulle",
                edit: "Modifiez les formats ci-dessous pour voir la mise à jour ici"
            },
            modal: {
                title: "Utilisation :",
                moment: "Documentation de formatage Moment.js",
                hint: "De plus, vous pouvez utiliser ceci dans vos saisies :",
                calendar: "active le formatage dynamique des dates comme",
                today: "Aujourd'hui",
                yesterday: "Hier",
                or: "ou",
                relative: "donne des temps relatifs comme",
                relativeTime: "il y a 4 heures",
                preview: "Aperçu",
                format: "Formats Calendrier",
                howTo: "Comment formater la valeur [calendar] si elle est utilisée."
            },
            option: {
                formats: {
                    label: "Formats",
                    description: "Personnalisez les formats d'heure",
                },
                cozyFormat: {
                    label: "Mode Cozy",
                    description: "Format d'heure dans les messages en mode Cozy"
                },
                compactFormat: {
                    label: "Mode Compact",
                    description: "Format d'heure en mode Compact ve au survol"
                },
                tooltipFormat: {
                    label: "Infobulle",
                    description: "Format d'heure sur les infobulles"
                },
                ariaLabelFormat: {
                    label: "Libellé Aria",
                    description: "Format d'heure pour les lecteurs d'écran (aria-label)"
                },
                sameDayFormat: {
                    label: "Même jour",
                    description: "Format [calendar] pour aujourd'hui",
                    default: "[Aujourd'hui à] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Jour précédent",
                    description: "Format [calendar] pour hier",
                    default: "[Hier à] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "Semaine dernière",
                    description: "Format [calendar] pour la semaine passée"
                },
                sameElseFormat: {
                    label: "Autres dates",
                    description: "Format [calendar] pour les dates plus anciennes"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Ajoutez une couleur personnalisée à n'importe quel utilisateur, n'importe où !",
            option: {
                dmList: {
                    label: "Liste de DMs",
                    description: "Colorer les pseudos dans la liste des messages privés"
                },
                colorInServers: {
                    label: "Couleur sur les serveurs",
                    description: "Indique si les couleurs doivent être appliquées au sein des serveurs"
                }
            },
            context: {
                setColor: "Définir la couleur"
            },
            modal: {
                custom: "Couleur personnalisée",
                pick: "Choisir une couleur",
                delete: "Supprimer l'entrée",
                save: "Enregistrer"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "Rend les titres et les miniatures des intégrations YouTube moins sensationnalistes, propulsé par DeArrow",
            option: {
                hideButton: {
                    label: "Masquer le bouton",
                    description: "Masque le bouton DeArrow des intégrations YouTube"
                },
                replaceElements: {
                    label: "Remplacer les éléments",
                    description: "Choisissez les éléments de l'intégration qui seront remplacés",
                    everything: "Tout (Titres & Miniatures)",
                    title: "Titres",
                    thumbnail: "Miniatures"
                },
                dearrowByDefault: {
                    label: "DeArrow par défaut",
                    description: "DeArrow les vidéos automatiquement"
                }
            },
            tooltip: {
                dearrowed: "Cette intégration a été DeArrowed ; cliquez pour restaurer",
                dearrow: "Cliquez pour DeArrow"
            },
            text: {
                toggleDearrow: "Activer/désactiver Dearrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Nettoie Discord en supprimant les éléments d'interface non essentiels tels que les effets de profil, les onglets boutique, les boosts, et plus encore.",
            option: {
                userProfileHeader: {
                    label: "Profil utilisateur"
                },
                removeAvatarDecoration: {
                    label: "Supprimer la décoration d'avatar",
                    description: "Retirer les décorations d'avatar. Désactivé si Decor est activé.",
                    alertBody: "La suppression des décorations d'avatar a été désactivée pour éviter les conflits avec le plugin Decor.",
                    ok: "OK"
                },
                removeNameplate: {
                    label: "Supprimer la plaque de nom",
                    description: "Supprimer les plaques de nom (nameplates)."
                },
                removeProfileEffect: {
                    label: "Supprimer l'effet de profil",
                    description: "Supprimer les effets d'animation de profil à l'ouverture."
                },
                removeClanTag: {
                    label: "Supprimer le tag de clan",
                    description: "Supprimer les tags de clan."
                },
                alwaysShowUsername: {
                    label: "Toujours afficher le nom d'utilisateur",
                    description: "Toujours afficher le nom d'utilisateur au lieu du statut."
                },
                accessibilityNotice: {
                    label: "Avis d'accessibilité",
                    description: "Discord dispose déjà d'une option de style de nom d'utilisateur intégrée dans les paramètres d'Accessibilité."
                },
                friendsListHeader: {
                    label: "Au-dessus de la liste d'Amis/DMs"
                },
                removeShopAboveDM: {
                    label: "Supprimer la boutique au-dessus des DMs",
                    description: "Supprime la boutique au-dessus de la liste des messages privés."
                },
                removeQuestsAboveDM: {
                    label: "Supprimer les quêtes au-dessus des DMs",
                    description: "Supprime les quêtes au-dessus de la liste des messages privés."
                },
                miscHeader: {
                    label: "Divers"
                },
                removeServerBoostInfo: {
                    label: "Supprimer les infos de Boost de serveur",
                    description: "Supprime les informations de boost de serveur au-dessus de la liste des salons."
                },
                removeBillingSettings: {
                    label: "Supprimer les paramètres de facturation",
                    description: "Supprimer les paramètres de facturation."
                },
                removeGiftButton: {
                    label: "Supprimer le bouton Cadeau",
                    description: "Supprimer le bouton de cadeau."
                },
                removeUnavailableEmojiPicker: {
                    label: "Nettoyer le sélecteur d'emojis",
                    description: "Supprimer les catégories indisponibles du sélecteur d'emojis."
                },
                removeAudioMenus: {
                    label: "Supprimer les menus audio",
                    description: "Supprime les menus à côté des boutons de sourdine et de casque."
                },
                removeButtonTooltips: {
                    label: "Supprimer les infobulles des boutons",
                    description: "Supprimer les infobulles des boutons."
                },
                removeProfileFrame: {
                    description: "Retirer les cadres de profil.",
                    label: "Retirer le cadre de profil"
                },
                removeDisplayNameStyles: {
                    description: "Retirer les noms d'affichage animés/stylisés dans la liste des membres.",
                    label: "Retirer les styles de nom d'affichage"
                },
                removeLibraryAboveDms: {
                    description: "Retirer la bibliothèque au-dessus de la liste des MP.",
                    label: "Retirer la bibliothèque au-dessus des MP"
                },
                removeFamilyCenterAboveDms: {
                    description: "Retirer le centre familial au-dessus de la liste des MP.",
                    label: "Retirer le centre familial au-dessus des MP"
                }
            },
            text: {
                discordAlreadyHasA: "Discord propose déjà une option intégrée de style de nom d'utilisateur dans les",
                accessibilitySettings: "paramètres d'accessibilité."
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Décodez le contenu en Base64 de n'importe quel message et copiez le contenu décodé.",
            right: {
                decode: "Copier le décodé (Clic gauche) / Décoder Base64 (Clic droit)",
                copy: "Décoder Base64 (Clic gauche) / Copier le décodé (Clic droit)"
            },
            option: {
                clickMethod: {
                    label: "Méthode de clic",
                    description: "Modifier le bouton pour décoder le contenu Base64 d'un message.",
                    left: "Clic gauche pour décoder le contenu Base64.",
                    right: "Clic droit pour décoder le contenu Base64."
                }
            },
            modal: {
                title: "Contenu Base64 décodé",
                content: "Contenu décodé",
                copy: "Copier le contenu décodé {{index}}",
                copied: "Contenu décodé copié dans le presse-papiers !"
            }
        },
        decor: {
            name: "Decor",
            description: "Créez et utilisez vos propres décorations d'avatar personnalisées, ou choisissez votre préférée parmi les préréglages.",
            presetPart: "Fait partie du préréglage {{name}}",
            createdBy: "Créé par {{author}}",
            copy: "Copier l'ID du préréglage",
            file: "Fichier",
            your: {
                title: "Vos décorations",
                subtitle: "Vous pouvez supprimer vos propres décorations en faisant un clic droit dessus."
            },
            option: {
                changeDecoration: {
                    label: "Changer la décoration",
                    description: "Activez Decor et redémarrez votre client pour changer votre décoration d'avatar.",
                    also: "Vous pouvez également accéder aux décorations Decor depuis la page des {{profiles}}.",
                    profiles: "Profils"
                },
                baseUrl: {
                    label: "URL de base",
                    description: "URL de l'API Decor"
                },
                agreedToGuidelines: {
                    label: "Directives acceptées",
                    description: "A accepté les directives"
                }
            },
            context: {
                decorationOptions: "Options de décoration",
                copyHash: "Copier le Hash de la décoration",
                deleteDecoration: "Supprimer la décoration"
            },
            alert: {
                delete: {
                    title: "Supprimer la décoration",
                    body: "Êtes-vous sûr de vouloir supprimer {{decoration}} ?",
                    confirm: "Supprimer",
                    cancel: "Annuler"
                },
                logout: {
                    title: "Déconnexion",
                    body: "Êtes-vous sûr de vouloir vous déconnecter de Decor ?",
                    confirm: "Se déconnecter",
                    cancel: "Annuler"
                }
            },
            button: {
                change: "Changer la décoration",
                remove: "Retirer la décoration",
                apply: "Appliquer",
                cancel: "Annuler",
                browse: "Parcourir",
                submit: "Soumettre pour révision",
                continue: "Continuer",
                back: "Retour"
            },
            tooltip: {
                pendingReview: "Vous avez déjà une décoration en attente de révision",
                pending: "En attente de révision"
            },
            join: {
                tooltip: "Rejoignez le serveur Discord de Decor pour recevoir des notifications sur la révision de votre décoration et la sortie de nouveaux préréglages",
                button: "Serveur Discord"
            },
            create: {
                title: "Créer une décoration",
                notViolate: "Assurez-vous que votre décoration ne viole pas {{guidelines}} avant de la soumettre.",
                guidelines: "les directives",
                file: "Le fichier doit être au format APNG ou PNG.",
                fileHolder: "Choisir un fichier",
                name: "Ce nom sera utilisé pour désigner cette décoration.",
                nameHolder: "Cube de voyage",
                nameTitle: "Nom"
            },
            help: {
                update: "Pour recevoir des mises à jour sur la révision de votre décoration, rejoignez {{server}} et autorisez les messages privés.",
                server: "Serveur Discord de Decor"
            },
            guidelines: {
                hold: "Attendez",
                suspended: "En soumettant une décoration, vous acceptez {{guidelines}}. Ne pas lire ces directives peut entraîner la suspension de votre compte pour la création de futures décorations.",
                guidelines: "les directives"
            },
            toast: {
                failedToAuthorizeMessage: "Échec de l'autorisation : {{message}}"
            },
            text: {
                removeDecoration: "Retirer la décoration Decor",
                decoration: "Décoration Decor",
                none: "Aucune",
                decorationFile: "Fichier de décoration"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin pour prendre des captures d'écran de thèmes - censure les images et textes identifiables.",
            toolbox: {
                toggle: "Basculer Demonstration"
            },
            keycode: "Pour changer votre code de touche, consultez {{keycode}} !",
            this: "cet outil",
            okay: "D'accord !",
            option: {
                keyBind: {
                    label: "Raccourci clavier",
                    description: "La touche pour basculer le thème une fois pressée"
                },
                soundVolume: {
                    label: "Volume du son",
                    description: "Volume du son de bascule (0 pour désactiver)"
                },
                showConfirmationModal: {
                    label: "Afficher le message de confirmation",
                    description: "Affiche une fenêtre pour vous rappeler le raccourci"
                }
            },
            switch: {
                note: "Vous pourrez réactiver ce paramètre plus tard",
                disable: "Désactiver la fenêtre ?"
            },
            shortcut: "Ceci censurera tout le texte ! Pour désactiver cela, retenez le raccourci :"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Plugin compagnon de développement. Veuillez signaler tout dysfonctionnement ou comportement étrange à MutanPlex, par mention ou MP. Merci !",
            reconnect: "Reconnecter",
            option: {
                notifyOnAutoConnect: {
                    label: "Notifier lors de l'auto-connexion",
                    description: "Indique s'il faut notifier lorsque Dev Companion s'est connecté automatiquement."
                },
                usePatchedModule: {
                    label: "Utiliser le module patché",
                    description: "Sur les requêtes d'extraction, répondre avec le module patché actuel (s'il l'est) au lieu de l'original."
                },
                reloadAfterToggle: {
                    label: "Recharger après bascule",
                    description: "Recharger après la réception d'une commande 'désactiver/activer le plugin'."
                }
            },
            toast: {
                title: "Dev Companion Connecté",
                connected: "Connecté au WebSocket",
                disconnected: "Dev Companion Déconnecté",
                error: "Erreur Dev Companion",
                reload: "Rechargement nécessaire",
                failed: "Échec du démarrage des dépendances : {{failures}}",
                close: "Fermer",
                stopping: "Erreur lors de l'arrêt du plugin {{plugin}}",
                starting: "Erreur lors du démarrage du plugin {{plugin}}",
                noMessage: "Aucun message d'erreur",
                noReason: "Aucune raison fournie"
            },
            text: {
                reconnect: "Se reconnecter",
                loadingLazyModules: "Chargement des modules différés, redémarrer pourrait provoquer des erreurs",
                loadedLazyModules: "Tous les modules différés sont chargés",
                failedLazyModules: "Échec du chargement des modules différés, consultez la console",
                ok: "OK"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Empêche d'être automatiquement expulsé d'un appel vocal en DM après 3 minutes d'inactivité ou d'être déplacé vers un salon AFK."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Désactive les caméras par défaut lors d'un appel"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Active la bannière développeur de Discord, qui affiche l'ID de build",
            about: "Le format pour la bannière Discord Dev. Vous pouvez utiliser les variables suivantes :",
            preview: "Aperçu :",
            empty: "Le format ne peut pas être vide.",
            variables: {
                discord: {
                    title: "Variables Discord",
                    icon: "Icône Discord",
                    banner: "Icône bannière Dev",
                    channel: "Branche de build Discord (ex: Stable)",
                    build: "Numéro de build Discord (ex: 123456)",
                    hash: "Hash de build Discord (ex: 123456)"
                },
                plexcord: {
                    title: "Variables Plexcord",
                    icon: "Icône Plexcord",
                    name: "Nom de Plexcord",
                    version: "Version de Plexcord (ex: 1.0.0)",
                    hash: "Hash de build Plexcord (ex: 123456)",
                    platform: "Plateforme sur laquelle Plexcord tourne (ex: Dev Build)"
                },
                plextron: {
                    title: "Variables spécifiques à Plextron",
                    hashShort: "Hash de build Plextron (ex: 123456789)",
                    platformType: "Plateforme sur laquelle Plextron tourne (ex: Dev Build)"
                },
                client: {
                    title: "Variables Client",
                    icon: "Icône Bureau",
                    name: "Nom du client (ex: Discord Canary)",
                    version: "Version du client (ex: 1.0.0)",
                },
                electron: {
                    title: "Variables Electron",
                    icon: "Icône Electron",
                    version: "Version d'Electron (ex: 25.0.0)"
                },
                chromium: {
                    title: "Variables Chromium",
                    icon: "Icône Chromium",
                    version: "Version du moteur Chromium (ex: 125.0.0.0)"
                },
                misc: {
                    title: "Variables diverses",
                    newline: "Caractère de nouvelle ligne"
                }
            },
            text: {
                notSupported: "Non pris en charge",
                devBuild: "Build de dev",
                standalone: "Autonome"
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Vous avertit si votre message contient un terme figurant dans la liste prédéfinie d'AutoMod",
            alert: {
                title: "Attendez !",
                content: "Votre message contient un terme présent dans la liste AutoMod (Terme : '{{trigger}}').",
                content2: "Il y a de fortes chances que votre message soit bloqué et potentiellement modéré par un modérateur du serveur.",
                confirm: "Envoyer quand même",
                cancel: "Annuler"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Arrondit toujours les horodatages relatifs vers le bas, ainsi 7,6 ans devient 7 ans au lieu de 8 ans"
        },
        downloadAllAttachments: {
            name: "DownloadAllAttachments",
            description: "Ajoute un bouton contextuel pour télécharger toutes les pièces jointes d'un message en une fois.",
            button: "Télécharger toutes les pièces jointes",
            toast: {
                success: "{{count}} pièce(s) jointe(s) téléchargée(s).",
                partial: "{{succeeded}} pièces jointes sur {{total}} téléchargées. {{failed}} ont échoué.",
                downloadedPluralizeSucceededAttachment: "{{pluralize_succeeded_attachment}} téléchargé(s).",
                downloadedSucceededOfLength: "{{succeeded}} pièce(s) jointe(s) sur {{length}} téléchargée(s). {{failed}} échec(s)."
            },
            option: {
                downloadAllFileTypes: {
                    description: "Télécharger aussi les pièces jointes qui ne sont pas des médias. N'active cette option que si tu fais confiance à ce qu'on t'envoie.",
                    label: "Télécharger tous les types de fichiers"
                }
            }
        },
        draftNavigator: {
            name: "DraftNavigator",
            description: "Recherchez vos brouillons non envoyés, prévisualisez leur texte et accédez au salon.",
            text: {
                title: "Navigateur de brouillons",
                open: "Ouvrir le navigateur de brouillons",
                unknownChannel: "Salon inconnu ({{id}})",
                channelUnavailable: "Salon indisponible",
                directMessage: "Message privé",
                groupMessage: "Message de groupe",
                server: "Serveur",
                jump: "Y aller",
                jumpTo: "Aller à {{name}}",
                count: "{{count}} brouillons",
                countOne: "{{count}} brouillon",
                countFiltered: "{{shown}} sur {{total}} brouillons",
                noMatches: "Aucun brouillon correspondant.",
                noDrafts: "Aucun brouillon non envoyé.",
                close: "Fermer",
                searchLabel: "Rechercher des brouillons",
                searchPlaceholder: "Rechercher des salons, serveurs ou le texte des brouillons",
                listLabel: "Brouillons non envoyés"
            }
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Ajoute la fonctionnalité glisser-déposer aux emojis favoris"
        },
        dragify: {
            name: "Dragify",
            description: "Déposez des utilisateurs, des salons ou des serveurs dans le chat pour insérer des mentions ou des invitations.",
            option: {
                userOutput: {
                    label: "Sortie Utilisateur",
                    description: "Résultat du dépôt d'utilisateur.",
                    mention: "Mention",
                    id: "ID Utilisateur"
                },
                channelOutput: {
                    label: "Sortie Salon",
                    description: "Résultat du dépôt de salon.",
                    mention: "Mention #salon",
                    link: "Lien du salon",
                },
                inviteExpireAfter: {
                    label: "L'invitation expire après",
                    description: "Expiration de l'invitation",
                    never: "Jamais",
                    thirtyMinutes: "30 minutes",
                    oneHour: "1 Heure",
                    sixHours: "6 Heures",
                    twelveHours: "12 Heures",
                    oneDay: "1 Jour",
                    sevenDays: "7 Jours"
                },
                inviteMaxUses: {
                    label: "Nombre max d'utilisations",
                    description: "Utilisations maximum pour l'invitation",
                    noLimit: "Sans limite",
                    one: "1 utilisation",
                    five: "5 utilisations",
                    ten: "10 utilisations",
                    twentyFive: "25 utilisations",
                    fifty: "50 utilisations",
                    hundred: "100 utilisations"
                },
                inviteTemporaryMembership: {
                    label: "Membre temporaire",
                    description: "Accorder une adhésion temporaire.",
                },
                reuseExistingInvites: {
                    label: "Réutiliser une invitation existante",
                    description: "Réutiliser une invitation existante au lieu d'en créer une nouvelle."
                },
                allowChatBodyDrop: {
                    label: "Autoriser le dépôt dans le chat",
                    description: "Autoriser le dépôt dans le corps du chat pour insérer du texte."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify n'a pas pu gérer le dépôt.",
                },
                invite: {
                    created: "Invitation créée.",
                    unable: "Impossible de créer l'invitation.",
                    noChannel: "Aucun salon disponible pour les invitations.",
                },
                noReusableInvite: "Aucune invitation réutilisable disponible.",
                unableToReuseInvite: "Impossible de réutiliser l'invitation."
            },
            ghost: {
                user: "Utilisateur",
                server: "Serveur",
                dm: "Messages privés",
                badge: {
                    channel: "salon",
                    thread: "fil",
                    voice: "vocal",
                    forum: "forum",
                    media: "média",
                    announcement: "annonce",
                    dm: "dm",
                    user: "utilisateur",
                    server: "serveur"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Mettez en surbrillance et inspectez les éléments facilement.",
            modal: {
                recording: "Enregistrement...",
                reset: "Réinitialiser"
            },
            option: {
                keybind: {
                    label: "Raccourci clavier",
                    description: "Basculer Highlighter"
                },
                showClasses: {
                    label: "Afficher les Classes",
                    description: "Affiche les noms de classes CSS de l'élément dans l'infobulle"
                },
                showId: {
                    label: "Afficher l'ID",
                    description: "Affiche l'attribut ID de l'élément dans l'infobulle"
                },
                showFont: {
                    label: "Afficher la police",
                    description: "Affiche la famille et la taille de police calculées"
                },
                showPadding: {
                    label: "Afficher le Padding",
                    description: "Affiche les valeurs de remplissage (padding) de l'élément"
                },
                showMargin: {
                    label: "Afficher la Marge",
                    description: "Affiche les valeurs de marge de l'élément"
                },
                showBorderRadius: {
                    label: "Afficher le Border Radius",
                    description: "Affiche les valeurs de rayon de bordure de l'élément"
                },
                showPosition: {
                    label: "Afficher la Position",
                    description: "Affiche le type de position CSS et le z-index de l'élément"
                },
                showDisplay: {
                    label: "Afficher le Display",
                    description: "Affiche le type d'affichage ainsi que les propriétés flex veya grid"
                }
            },
            toast: {
                copied: {
                    color: "Couleur copiée dans le presse-papiers !",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "Joue des sons du soundboard lorsque vous vous déconnectez du vocal.",
            button: "Définir comme son de sortie global",
            toast: {
                failedToPlay: "Oups ! Quelque chose s'est mal passé."
            },
            option: {
                soundGuildId: {
                    label: "ID du serveur du son",
                    description: "Sélectionnez le serveur contenant le son.",
                    placeholder: "Sélectionner un serveur..."
                },
                soundId: {
                    label: "ID du son",
                    description: "Entrez l'ID du son que vous souhaitez jouer.",
                    placeholder: "Entrer l'ID du son..."
                }
            }
        },
        experiments: {
            name: "Expériences",
            description: "Active l'accès aux expériences et autres fonctionnalités de développement dans Discord !",
            modal: {
                about: {
                    title: "Plus d'informations",
                    body: "Vous pouvez ouvrir les DevTools de Discord via {{key}}"
                },
                warning: {
                    title: "Attendez !!",
                    body: "Les expériences sont des fonctionnalités Discord non publiées. Elles peuvent ne pas fonctionner, casser votre client ou entraîner la désactivation de votre compte.",
                    notReponsible: "N'utilisez les expériences que si vous savez ce que vous faites. Plexcord n'est pas responsable des dommages causés par l'activation des expériences.",
                    useAtOwnRisk: "Si vous ne savez pas à quoi sert une expérience, ignorez-la. Ne nous demandez pas non plus ; nous ne le savons probablement pas.",
                    serverSideFeatures: "Non, vous ne pouvez pas utiliser les fonctionnalités côté serveur comme cocher la case 'Send to Client'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Menu Dev dans la barre d'outils",
                    description: "Remplace le bouton d'aide (?) de la barre d'outils (en haut à droite du chat) par le menu développeur de Discord"
                }
            },
            text: {
                searchExperiments: "Rechercher des expériences"
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Permet d'exporter des messages vers des fichiers — message unique, tous les messages d'un utilisateur, ou tous les messages d'un salon",
            option: {
                maxMessages: {
                    label: "Messages Max",
                    description: "Nombre maximum de messages à exporter (0 = illimité)"
                },
                includeAttachments: {
                    label: "Inclure les pièces jointes",
                    description: "Inclure les informations sur les pièces jointes dans les exports"
                },
                includeEmbeds: {
                    label: "Inclure les intégrations",
                    description: "Inclure les informations d'intégration (embeds) dans les exports"
                },
                includeReactions: {
                    label: "Inclure les réactions",
                    description: "Inclure les informations sur les réactions dans les exports"
                },
                includeComponents: {
                    label: "Inclure les composants",
                    description: "Inclure les informations sur les composants (boutons, etc.) dans les exports"
                }
            },
            message: {
                invalid: "Message invalide — aucun auteur",
                unknownUser: "Utilisateur inconnu",
                botEmbed: "Message d'intégration Bot",
                attachments: "Pièces jointes",
                unknown: "Inconnu",
                noUrl: "Pas d'URL",
                embeds: "Intégrations",
                title: "Titre",
                description: "Description",
                url: "URL",
                footer: "Pied de page",
                author: "Auteur",
                fields: "Champs",
                components: "Composants",
                component: "Composant",
                interactiveElement: "Élément interactif",
                reactions: "Réactions",
                errorFormatting: "Erreur lors du formatage du message",
                unknownError: "Erreur inconnue",
                header: "{{titlePrefix}} {{displayName}} dans {{channelName}}",
                from: "Messages de",
                direct: "Messages privés",
                exported: "Exporté le",
                total: "Total des messages"
            },
            toast: {
                export: {
                    title: "Exporter les messages",
                    body: "Échec de l'exportation du message"
                },
                noMessages: {
                    title: "Exporter les messages",
                    notFoundUser: "Aucun message trouvé pour cet utilisateur dans ce salon",
                    notFoundChannel: "Aucun message trouvé dans ce salon"
                },
                failed: {
                    title: "Exporter les messages",
                    body: "Échec de l'exportation des messages"
                },
                userNotFound: {
                    title: "Exporter les messages",
                    body: "Utilisateur non trouvé"
                },
                complete: {
                    title: "Exportation terminée",
                    saved: "Fichier enregistré",
                    downloaded: "Fichier téléchargé",
                    messages: "messages"
                }
            },
            context: {
                exportMessage: "Exporter ce message",
                exportAll: "Exporter tous les messages de {{user}}",
                user: "Utilisateur",
                exportAllChannel: "Exporter tous les messages du salon"
            },
            text: {
                unknownError: "Erreur inconnue"
            }
        },
        expressionManager: {
            name: "ExpressionManager",
            description: "Clone les emojis et autocollants. Ajoute des options au menu contextuel pour les cloner, modifier ou supprimer rapidement. Ajoute aussi des options de copie et d'enregistrement pour les autocollants",
            option: {
                editAndDelete: {
                    label: "Modifier et supprimer",
                    description: "Ajoute les options « Modifier » et « Supprimer » au menu contextuel du sélecteur d'expressions"
                },
                stickerCopyAndOpen: {
                    label: "Liens d'autocollants",
                    description: "Ajoute les options « Copier le lien de l'autocollant » et « Ouvrir le lien de l'autocollant » au menu contextuel des autocollants"
                },
                recents: {
                    label: "Retirer des récents",
                    description: "Ajoute l'option « Retirer des récents » au menu contextuel des expressions fréquemment utilisées"
                }
            },
            context: {
                cloneEmoji: "Cloner Emoji",
                cloneSticker: "Cloner Autocollant",
                editEmoji: "Modifier l'emoji",
                editSticker: "Modifier l'autocollant",
                deleteEmoji: "Supprimer l'emoji",
                deleteSticker: "Supprimer l'autocollant",
                removeFromRecents: "Retirer des récents",
                uploadAsEmoji: "Importer en tant qu'emoji",
                copyStickerLink: "Copier le lien de l'autocollant",
                openStickerLink: "Ouvrir le lien de l'autocollant"
            },
            modal: {
                customName: "Nom personnalisé",
                invalidName: "Le nom doit comporter entre 2 et 30 caractères et ne contenir que des caractères alphanumériques",
                cloneTitle: "Cloner {{name}}",
                deleteTitle: "Supprimer {{name}}",
                deleteEmoji: "Voulez-vous vraiment supprimer cet emoji ?",
                deleteSticker: "Voulez-vous vraiment supprimer cet autocollant ?",
                deleteConfirm: "Supprimer",
                recentsEmoji: "Cela réinitialisera tout l'historique d'utilisation de cet emoji et ne peut pas être annulé. Êtes-vous sûr ?",
                recentsSticker: "Cela réinitialisera tout l'historique d'utilisation de cet autocollant et ne peut pas être annulé. Êtes-vous sûr ?",
                recentsConfirm: "Allez-y"
            },
            toast: {
                emojiDeleted: "Emoji supprimé avec succès.",
                stickerDeleted: "Autocollant supprimé avec succès.",
                emojiDeleteFailed: "Impossible de supprimer l'emoji",
                stickerDeleteFailed: "Impossible de supprimer l'autocollant",
                cloned: "{{name}} a été cloné avec succès sur {{guild}} !",
                yourServer: "votre serveur",
                cloneFailed: "Échec du clonage : {{message}}",
                console: "Quelque chose s'est mal passé (vérifiez la console !)",
                linkCopied: "Lien copié !",
                emojiModalFailed: "Impossible d'ouvrir la fenêtre d'emoji : {{error}}"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Met le client en pause lorsque vous appuyez sur F8 avec les DevTools (+ points d'arrêt) ouverts."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Permet d'envoyer de faux emojis/autocollants, d'utiliser les thèmes Nitro et de streamer en qualité Nitro",
            option: {
                enableEmojiBypass: {
                    label: "Activer le contournement d'emojis",
                    description: "Permet d'envoyer de faux emojis (contourne également l'absence de permission d'utiliser des emojis personnalisés)"
                },
                emojiSize: {
                    label: "Taille des emojis",
                    description: "Taille des emojis lors de l'envoi"
                },
                transformEmojis: {
                    label: "Transformer les emojis",
                    description: "Indique s'il faut transformer les faux emojis en vrais"
                },
                enableStickerBypass: {
                    label: "Activer le contournement d'autocollants",
                    description: "Permet d'envoyer de faux autocollants (contourne également l'absence de permission d'utiliser des autocollants)"
                },
                stickerSize: {
                    label: "Taille des autocollants",
                    description: "Taille des autocollants lors de l'envoi"
                },
                transformStickers: {
                    label: "Transformer les autocollants",
                    description: "Indique s'il faut transformer les faux autocollants en vrais"
                },
                transformCompoundSentence: {
                    label: "Transformer les phrases composées",
                    description: "Indique s'il faut transformer les faux autocollants et emojis dans les phrases contenant du texte supplémentaire"
                },
                enableStreamQualityBypass: {
                    label: "Activer le contournement de qualité de stream",
                    description: "Permet de streamer en qualité Nitro"
                },
                useStickerHyperLinks: {
                    label: "Utiliser des hyperliens pour autocollants",
                    description: "Indique s'il faut utiliser des hyperliens lors de l'envoi de faux autocollants"
                },
                useEmojiHyperLinks: {
                    label: "Utiliser des hyperliens pour emojis",
                    description: "Indique s'il faut utiliser des hyperliens lors de l'envoi de faux emojis"
                },
                hyperLinkText: {
                    label: "Texte de l'hyperlien",
                    description: "Texte à utiliser pour l'hyperlien. {{NAME}} sera remplacé par le nom de l'emoji/autocollant."
                },
                disableEmbedPermissionCheck: {
                    label: "Désactiver la vérification de permission d'intégration",
                    description: "Indique s'il faut désactiver la vérification de la permission d'intégrer des liens lors de l'envoi de faux emojis et autocollants"
                }
            },
            modal: {
                sticker: "Ceci est un autocollant FakeNitro et ne s'affiche comme un vrai que pour vous. Apparaît comme un lien pour les utilisateurs sans le plugin.",
                emoji: "Ceci est un emoji FakeNitro et ne s'affiche comme un vrai que pour vous. Apparaît comme un lien pour les utilisateurs sans le plugin."
            },
            alert: {
                notice: {
                    title: "Attendez !",
                    body: "Vous essayez d'envoyer/modifier un message contenant un emoji ou autocollant FakeNitro ; cependant, vous n'avez pas la permission d'intégrer des liens dans ce salon. Êtes-vous sûr ? Vos éléments FakeNitro apparaîtront uniquement sous forme de lien.",
                    footer: "Vous pouvez désactiver cette alerte dans les paramètres de FakeNitro",
                    confirm: "Envoyer quand même",
                    cancel: "Annuler",
                    secondaryConfirm: "Ne plus afficher"
                },
                apngSticker: {
                    title: "Attendez !",
                    body: "Vous ne pouvez pas envoyer ce message car il contient un autocollant FakeNitro animé et vous n'avez pas la permission de joindre des fichiers dans ce salon. Veuillez retirer l'autocollant pour continuer."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Permet de personnaliser les thèmes de profil en cachant les couleurs dans votre bio grâce à l'encodage invisible 3y3",
            button: {
                copy: "Copier 3y3"
            },
            modal: {
                usage: "Utilisation",
                preview: "Aperçu",
                intro: "Après avoir activé ce plugin, vous verrez des couleurs personnalisées sur les profils des autres utilisateurs utilisant des plugins compatibles.",
                setColor: "Pour définir vos propres couleurs :",
                step1: "• Utilisez les sélecteurs de couleurs ci-dessous pour choisir vos couleurs",
                step2: "• Cliquez sur le bouton {{copy}}",
                step3: "• Collez le texte invisible n'importe où dans votre bio",
                pickers: "Sélecteurs de couleurs",
                primary: "Primaire",
                accent: "Accentuation"
            },
            option: {
                nitroFirst: {
                    label: "Nitro en priorité",
                    description: "Source de couleur par défaut si les deux sont présentes",
                    nitro: "Couleurs Nitro",
                    fake: "Couleurs Fake"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Permet de personnaliser les thèmes et effets de profil en cachant les données dans votre bio grâce à l'encodage invisible 3y3",
            option: {
                prioritizeNitro: {
                    label: "Prioriser Nitro",
                    description: "Source à prioriser",
                    nitro: "Nitro",
                    aboutMe: "À propos de moi"
                },
                hideBuilder: {
                    label: "Masquer le constructeur",
                    description: "Masque le constructeur FPTE dans les pages de paramètres de Profil Utilisateur et Profils de Serveur"
                }
            },
            modal: {
                primary: "Primaire",
                accent: "Accentuation",
                effect: "Effet",
                usage: {
                    title: "Utilisation",
                    intro: "Après avoir activé ce plugin, vous verrez des couleurs de thème et des effets personnalisés sur les profils des autres utilisateurs utilisant ce plugin.",
                    setColor: "Pour définir vos couleurs et votre effet :",
                    step1: "Allez dans vos paramètres de profil",
                    step2: "Utilisez le constructeur FPTE pour choisir vos couleurs et votre effet",
                    step3: "Cliquez sur le bouton {{copy}}",
                    step4: "Collez le texte invisible n'importe où dans votre bio"
                }
            },
            toast: {
                copied: "FPTE copié dans le presse-papiers !",
                empty: "Le constructeur FPTE est vide ; rien à copier !"
            },
            button: {
                copyFPTE: "Copier FPTE",
                reset: "Réinitialiser",
                preview: "Aperçu du constructeur FPTE",
                buildBackwards: "Rendre FPTE rétrocompatible",
                moreCharacters: "Utilisera plus de caractères"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Ajoute une icône de corbeille pour supprimer rapidement les salons",
            option: {
                keyBind: {
                    label: "Raccourci clavier",
                    description: "La touche pour activer/désactiver la corbeille."
                },
                reqCtrl: {
                    label: "Nécessite Ctrl",
                    description: "Nécessite de maintenir la touche Control enfoncée."
                },
                reqShift: {
                    label: "Nécessite Shift",
                    description: "Nécessite de maintenir la touche Maj enfoncée."
                },
                reqAlt: {
                    label: "Nécessite Alt",
                    description: "Nécessite de maintenir la touche Alt enfoncée."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "Place vos emojis favoris en premier dans l'autocomplétion et propose des alias d'emojis.",
            option: {
                aliases: {
                    label: "Alias",
                    description: "Gérez vos alias d'emojis."
                },
                clearAll: {
                    label: "Tout effacer",
                    description: "Supprimer tous les alias."
                }
            },
            modal: {
                clear: {
                    title: "Supprimer tous les alias",
                    description: "Cela supprimera tous les alias d'emojis que vous avez enregistrés.",
                    confirm: "Supprimer tous les alias"
                },
                set: {
                    title: "Définir un alias",
                    description: "Définir un alias pour {{emoji}}",
                    placeholder: "Alias, ex: 'joie'",
                    save: "Enregistrer",
                    error: "Alias déjà existant"
                }
            },
            toast: {
                set: "Alias défini pour {{emoji}}",
                clearAll: "Tous les alias d'emojis ont été supprimés",
                failedDeleted: "Échec de la suppression des alias",
                removed: "Alias supprimé : {{alias}}",
                failedRemove: "Échec de la suppression de l'alias",
                duplicate: "Alias déjà existant",
                failedSave: "Échec de l'enregistrement de l'alias.",
                removedAliasAlias: "Alias :{{alias}}: supprimé",
                aliasSetForGetemojidisplayname: "Alias défini pour {{getEmojiDisplayName_ref}}."
            },
            button: {
                edit: "Modifier l'alias",
                set: "Définir l'alias"
            },
            text: {
                remove: "Retirer",
                noAliasesSetYet: "Aucun alias défini pour le moment.",
                aliasRequired: "L'alias est requis.",
                aliasInvalid: "L'alias doit contenir 2 à 32 caractères et n'utiliser que des minuscules, des chiffres ou des tirets bas."
            }
        },
        favoriteAnything: {
            name: "FavoriteAnything",
            description: "Permet de mettre n'importe quelle image en favori",
            noFiles: "Aucun fichier ne correspond à votre recherche.",
            searchPlaceholder: "Rechercher des fichiers",
            media: "Médias",
            demoText: "Cliquez sur l'étoile pour ajouter un fichier aux favoris.\nLes fichiers favoris apparaîtront ici !",
            fetchError: "Impossible de récupérer {filename}",
            uploadError: "Impossible de télécharger {filename}",
            text: {
                clickTheStarTo: "Clique sur l'étoile pour mettre un fichier en favori.",
                favoriteFilesWillShow: "Les fichiers favoris apparaîtront ici !"
            },
            option: {
                localThumbnails: {
                    description: "Générer les miniatures des fichiers localement au lieu d'utiliser un service externe (placeholder.nin0.dev). Incompatible avec le mobile. Changer cette option n'affecte pas les favoris existants.",
                    label: "Miniatures locales"
                }
            }
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Ajoute un bouton de téléchargement en haut à droite des fichiers"
        },
        findReply: {
            name: "FindReply",
            description: "Saute à la réponse la plus ancienne d'un message dans un salon (permet de suivre les conversations passées plus facilement).",
            context: {
                jump: "Aller à la réponse"
            },
            toast: {
                navigate: "Utilisez le panneau du bas pour naviguer entre les réponses.",
                container: "Impossible de trouver l'élément conteneur.",
                couldntFind: "Aucune réponse trouvée."
            },
            option: {
                includePings: {
                    label: "Inclure les mentions",
                    description: "Cherchera également les messages qui mentionnent (@) l'auteur directement"
                },
                includeAuthor: {
                    label: "Inclure l'auteur",
                    description: "Cherchera également les messages qui répondent à l'auteur en général, pas seulement à ce message précis"
                },
                hideButtonIfNoReply: {
                    label: "Masquer le bouton si aucune réponse",
                    description: "Masque le bouton s'il n'y a aucune réponse au message"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Supprime l'espace entre les blocs de code et le texte en dessous"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Corrige les extensions de fichiers en les renommant vers un format compatible si possible"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Améliore la qualité des images en forçant l'utilisation de la source originale",
            option: {
                originalImagesInChat: {
                    label: "Images originales dans le chat",
                    description: "Charge également l'image originale dans le chat. ATTENTION : Lire les avertissements ci-dessus"
                }
            },
            modal: {
                about: {
                    title: "Le comportement par défaut est le suivant :",
                    body: "&mdash; Dans le chat, des images optimisées mais en pleine résolution sont chargées.",
                    body2: "&mdash; Dans l'aperçu d'image, l'image originale est chargée.",
                    body3: "Vous pouvez activer les images originales dans le chat, mais soyez conscient des points suivants :",
                    warning: "&mdash; Les images animées (GIF, WebP, etc.) s'animeront toujours, même si l'application n'est pas au premier plan.",
                    warning2: "&mdash; Peut causer des ralentissements (lag).",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Corrige le volume excessivement fort des intégrations Spotify en vous permettant de le personnaliser",
            option: {
                volume: {
                    label: "Volume",
                    description: "Le % de volume pour les intégrations Spotify. Tout ce qui dépasse 10% est trèèès fort"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Contourne le blocage de certaines vidéos YouTube sur Discord (par exemple par UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Ajoute une option 'Suivre' dans le menu contextuel pour toujours être dans le même salon vocal que l'utilisateur",
            indicatorTooltip: "Suivi de {{user}} (cliquez pour déclencher manuellement, clic droit pour ne plus suivre)",
            unknownUser: "Utilisateur inconnu",
            option: {
                executeOnFollow: {
                    label: "Exécuter lors du suivi",
                    description: "S'assure d'être dans le même salon vocal au moment de suivre"
                },
                onlyManualTrigger: {
                    label: "Déclenchement manuel uniquement",
                    description: "Se déclenche uniquement lors d'un clic sur l'indicateur"
                },
                followLeave: {
                    label: "Suivre le départ",
                    description: "Quitte également le salon quand l'utilisateur suivi part"
                },
                autoMoveBack: {
                    label: "Retour automatique",
                    description: "Revient automatiquement dans le salon vocal de l'utilisateur suivi si vous êtes déplacé"
                },
                followUserId: {
                    label: "ID de l'utilisateur suivi",
                    description: "ID de l'utilisateur actuellement suivi"
                },
                channelFull: {
                    label: "Salon plein",
                    description: "Tente de vous déplacer dans le salon lorsqu'il n'est plus plein"
                },
                onlyWhenInVoice: {
                    label: "Seulement en vocal",
                    description: "Ne suivre l'utilisateur que lorsque tu es dans un salon vocal"
                }
            },
            toast: {
                channelFull: "Le salon est plein",
                newVc: "Utilisateur suivi dans un nouveau salon vocal",
                insufficientPermissions: "Permissions insuffisantes pour rejoindre le salon vocal",
                sameVc: "Vous êtes déjà dans le même salon",
                disconnect: "L'utilisateur suivi est parti ; déconnecté",
                notFollowing: "L'utilisateur suivi est parti, mais la déconnexion n'est pas activée",
                notVc: "L'utilisateur suivi n'est pas dans un salon vocal"
            },
            context: {
                follow: "Suivre l'utilisateur",
                unfollow: "Ne plus suivre l'utilisateur"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Charge n'importe quelle police depuis Google Fonts",
            option: {
                selectedFont: {
                    label: "Police sélectionnée",
                    description: "Police actuellement active"
                },
                fontSearch: {
                    label: "Recherche de polices",
                    description: "Rechercher et sélectionner des polices Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Appliquer aux blocs de code",
                    description: "Applique la police aux blocs de code"
                }
            },
            toast: {
                failedLoad: "Échec du chargement de la police"
            },
            modal: {
                settings: {
                    title: "Rechercher sur Google Fonts",
                    description: "Sélectionnez une police pour l'appliquer",
                    placeholder: "Rechercher...",
                    previewText: "Portez ce vieux vieux juge blond qui fume",
                    authors: "Par {{authors}}"
                }
            },
            text: {
                currentFont: "Police actuelle :",
                resetFont: "Réinitialiser la police"
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Force l'affichage de la couronne de propriétaire à côté des pseudos, même sur les grands serveurs."
        },
        freaky: {
            name: "Freaky",
            description: "Permet d'envoyer votre message avec une police étrange via la commande /freaky.",
            command: {
                freaky: "C'est freaky.",
                message: "Rendre votre message freaky"
            },
            option: {
                addFreakyEnding: {
                    label: "Ajouter une fin freaky",
                    description: "Ajouter 👅 ou ❤️ à la fin"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Réécrit et filtre les résultats du Quick Switcher pour afficher vos salons les plus fréquents."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Ajoute la commande /friendcloud pour visualiser les utilisateurs avec lesquels vous interagissez le plus",
            command: {
                friendcloud: {
                    description: "Visualiser votre nuage d'amis",
                    count: "Nombre d'utilisateurs à afficher",
                    mustHigher: "Le nombre doit être de 1 ou plus !",
                    noAffinities: "Aucune affinité trouvée. Vérifiez vos [paramètres de confidentialité](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Aucun utilisateur valide trouvé. Vérifiez vos [paramètres de confidentialité](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Échec de la génération de l'image :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Génère des codes d'ami pour ajouter facilement des contacts",
            card: {
                expires: "Expire <t:{{expiration}}:R> • {{uses}}/{{maxUses}} utilisations",
                copy: "Copier",
                copied: "Copié !",
                codes: "Vos codes d'ami",
                count: "Codes d'ami - {{invites}}",
                create: "Créer un code d'ami",
                revoke: "Révoquer tous les codes",
                loading: "Chargement...",
                dontHave: "Vous n'avez aucun code d'ami."
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Crée et gère des liens d'invitation d'ami via des commandes (/create friend invite, etc.).",
            command: {
                create: {
                    description: "Génère un lien d'invitation d'ami.",
                    message: "discord.gg/{{code}}`\n· Expire <t:{{expiration}}:R>\n· Utilisation Max : {{uses}}"
                },
                view: {
                    description: "Voir la liste de toutes les invitations générées.",
                    message: "_discord.gg/{{code}}_ \n· Expire : <t:{{expiration}}:R> \n· Utilisé : {{uses}}/{{maxUses}}",
                    noInvites: "Vous n'avez aucune invitation d'ami active."
                },
                revoke: {
                    description: "Révoque toutes les invitations générées.",
                    message: "Toutes les invitations d'ami ont été révoquées."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Ajoute des badges montrant depuis combien de temps vous êtes ami avec un utilisateur",
            badge: {
                sprout: {
                    name: "Pousse",
                    description: "Votre amitié vient de commencer"
                },
                blooming: {
                    name: "Floraison",
                    description: "Votre amitié progresse ! (1 mois)"
                },
                burning: {
                    name: "Ardent",
                    description: "Votre amitié a atteint sa vitesse de croisière (3 mois)"
                },
                fighter: {
                    name: "Combattant",
                    description: "Votre amitié est solide (6 mois)"
                },
                star: {
                    name: "Étoile",
                    description: "Votre amitié dure depuis longtemps (1 an)"
                },
                royal: {
                    name: "Royal",
                    description: "Votre amitié a survécu à tout — déjà 2 ans !"
                },
                besties: {
                    name: "Meilleurs amis",
                    description: "Comment est-ce possible ??? (5 ans)"
                }
            },
            option: {
                showFriendsInChat: {
                    description: "Afficher une icône d'ami sur les messages de tes amis.",
                    label: "Afficher les amis dans le chat"
                }
            },
            text: {
                friend: "Ami",
                rankIcon: "Icône de rang"
            }
        },
        friendTags: {
            name: "FriendTags",
            description: "Permet de filtrer par tags personnalisés dans le Quick Switcher en commençant une recherche par &",
            modal: {
                name: "Nom",
                users: "Utilisateurs (séparés par une virgule)",
                userlist: "Liste d'utilisateurs (cliquez pour retirer)",
                remove: "Retirer",
                add: "Ajouter",
                tag: "Tag",
                removeFrom: "Retirer de",
                addTo: "Ajouter à"
            },
            option: {
                tagConfiguration: {
                    label: "Configuration des tags",
                    description: "Le composant de configuration des tags"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Restaure toutes les options habituelles du menu contextuel des messages dans les résultats de recherche"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Ajoute plus de fonctionnalités aux mentions d'utilisateurs dans la zone de saisie (clic gauche/droit)"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Fait en sorte que les avatars occupent toute la case dans les salons vocaux"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Ajoute un bouton à côté du micro et de la sourdine pour activer/désactiver l'activité de jeu. Clic droit pour l'activité Spotify.",
            tooltip: "Basculer l'activité de jeu",
            gameActivity: {
                enabled: "Activité de jeu activée",
                disabled: "Activité de jeu désactivée"
            },
            option: {
                oldIcon: {
                    label: "Ancienne icône",
                    description: "Utilise l'ancien style d'icône d'avant le changement de design de Discord"
                },
                location: {
                    label: "Emplacement",
                    description: "Où afficher le bouton de basculement",
                    panel: "À côté de Sourdine/Casque",
                    toolbox: "Plexcord Toolbox"
                }
            },
            text: {
                disableGameActivity: "Désactiver l'activité de jeu",
                enableGameActivity: "Activer l'activité de jeu",
                shareSpotifyActivity: "Partager l'activité Spotify",
                shareSpotifyActivityAccount: "Partager l'activité Spotify ({{name}})"
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Un petit fantôme apparaît si vous ne répondez pas aux messages privés",
            modal: {
                title: "Utilisateurs Ghostés",
                no: "Aucun utilisateur ghosté",
                unghost: "déghost",
                unknown: "Inconnu",
                unnamedGroup: "Groupe sans nom",
                unknownUser: "Utilisateur inconnu",
                clearAll: "Tout effacer",
                noGhost: "Pas de fantômes ici !",
                clear: "Effacer"
            },
            option: {
                showIndicator: {
                    label: "Afficher l'indicateur",
                    description: "Affiche le compteur de fantômes en haut de la liste des serveurs"
                },
                showDmIcons: {
                    label: "Afficher les icônes de MP",
                    description: "Affiche des icônes de fantômes à côté des messages privés individuels"
                },
                ignoreGroupDms: {
                    label: "Ignorer les MP de groupe",
                    description: "Exclut les MP de groupe du système de ghosting"
                },
                exemptedChannels: {
                    label: "Salons exemptés",
                    description: "Liste d'IDs de salons (séparés par virgule) à exempter (clic droit sur un MP pour copier son ID)"
                },
                ignoreBots: {
                    label: "Ignorer les bots",
                    description: "Ignore les MP provenant de bots"
                },
                maxInactiveTimeMs: {
                    label: "Temps maximum d'inactivité",
                    description: "N'affiche les MP fantômes que s'ils ont été actifs dans ce laps de temps",
                    no: "Pas de limite",
                    oneHour: "1 heure",
                    oneDay: "1 jour",
                    oneWeek: "1 semaine",
                    oneMonth: "1 mois"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Permet de créer des collections de GIFs",
            context: {
                copyImageLink: "Copier le lien de l'image",
                copyUrl: "Copier l'URL",
                collection: {
                    add: "Ajouter à la collection",
                    gif: "Collections de GIFs",
                    delete: "Supprimer la collection",
                    create: "Créer une collection",
                    remove: "Retirer",
                    information: "Informations sur la collection",
                    name: "Nom",
                    gifs: "GIFs",
                    created: "Créé le",
                    updated: "Mis à jour le",
                    close: "Fermer",
                    rename: "Renommer",
                    move: "Déplacer vers la collection",
                    select: "Sélectionnez une collection vers laquelle déplacer l'élément"
                },
                gif: {
                    information: "Informations",
                    added: "Ajouté le",
                    width: "Largeur",
                    height: "Hauteur",
                    close: "Fermer"
                }
            },
            option: {
                itemPrefix: {
                    label: "Préfixe des éléments",
                    description: "Le préfixe pour les GIFs"
                },
                collectionPrefix: {
                    label: "Préfixe des collections",
                    description: "Le préfixe pour les collections"
                },
                onlyShowCollections: {
                    label: "Afficher uniquement les collections",
                    description: "Masque les GIFs individuels"
                },
                stopWarnings: {
                    label: "Désactiver les avertissements",
                    description: "Désactive les confirmations de suppression"
                },
                showCopyImageLink: {
                    label: "Afficher 'Copier le lien de l'image'",
                    description: "Affiche l'option {{copyImageLink}} dans les menus contextuels"
                },
                preventDuplicates: {
                    label: "Empêcher les doublons",
                    description: "Empêche d'ajouter plusieurs fois le même GIF à une collection"
                },
                defaultEmptyCollectionImage: {
                    label: "Image de collection vide par défaut",
                    description: "Image affichée lorsqu'une collection est vide"
                },
                collectionsSortType: {
                    label: "Type de tri des collections",
                    description: "Le critère de tri"
                },
                collectionsSortOrder: {
                    label: "Ordre de tri des collections",
                    description: "Ordre croissant veya décroissant"
                },
                collectionsSort: {
                    label: "Tri des collections",
                    description: "Décidez comment trier les collections",
                    title: "Trier les collections",
                    sortDescription: "Choisissez un critère de tri",
                    sortBy: "Trier par",
                    name: "Nom",
                    creationDate: "Date de création",
                    modifiedDate: "Date de modification",
                    ascending: "Croissant",
                    descending: "Décroissant"
                },
                importGifs: {
                    label: "Importer des GIFs",
                    description: "Importer des collections",
                    button: "Importer les collections"
                },
                exportGifs: {
                    label: "Exporter des GIFs",
                    description: "Exporter des collections",
                    button: "Exporter les collections"
                },
                resetCollections: {
                    label: "Réinitialiser les collections",
                    description: "Réinitialise tout (supprime toutes vos collections)",
                    button: "Réinitialiser les collections"
                }
            },
            toast: {
                copied: "Lien de l'image copié !",
                urlCopied: "URL copiée !",
                already: "Cette collection existe déjà",
                alreadyCollection: "Ce GIF est déjà dans la collection",
                collectionsImportedSuccessfully: "Collections importées avec succès.",
                failedToImportCollections: "Impossible d'importer les collections : {{String_err}}"
            },
            modal: {
                create: {
                    title: "Créer une collection",
                    name: "Nom de la collection",
                    create: "Créer"
                },
                rename: {
                    title: "Renommer la collection",
                    name: "Nouveau nom",
                    warning: "Le nom ne peut pas dépasser 24 caractères",
                    rename: "Renommer"
                }
            },
            alert: {
                import: {
                    title: "Êtes-vous sûr ?",
                    body: "L'importation écrasera vos collections actuelles.",
                    confirm: "Importer",
                    cancel: "Annuler"
                },
                reset: {
                    title: "Êtes-vous sûr ?",
                    body: "La réinitialisation supprimera toutes vos collections.",
                    confirm: "Réinitialiser",
                    cancel: "Annuler"
                },
                delete: {
                    title: "Êtes-vous sûr ?",
                    deleteBody: "Voulez-vous vraiment supprimer cette collection ?",
                    removeBody: "Voulez-vous vraiment retirer cet élément ?",
                    confirm: "Supprimer",
                    remove: "Retirer",
                    cancel: "Annuler"
                }
            },
            text: {
                gifPickerCategoryOptions: "Options de catégorie du sélecteur de GIF",
                gifCollections: "Collections de GIF",
                unknown: "Inconnu"
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Permet de coller des GIFs directement dans la zone de saisie du chat"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Envoie un GIF aléatoire de vos favoris, avec 1 chance sur 10 de mentionner le propriétaire du serveur",
            command: {
                gifRoulette: {
                    description: "Tenter le destin et envoyer un GIF",
                    restricted: "Cette commande est restreinte sur ce serveur."
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Chance de mentionner le propriétaire",
                    description: "Active la probabilité de 1/10 de mentionner le propriétaire du serveur (attention !)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Affiche les dépôts GitHub publics d'un utilisateur sur son profil",
            loading: "Chargement des dépôts...",
            option: {
                showStars: {
                    label: "Afficher les étoiles",
                    description: "Affiche les étoiles du dépôt"
                },
                showLanguage: {
                    label: "Afficher la langue",
                    description: "Affiche le langage de programmation principal"
                }
            },
            error: {
                error: "Erreur",
                render: "Erreur : Échec de l'affichage de GitHubRepos"
            },
            button: {
                show: "Afficher les dépôts GitHub",
                repositories: "Dépôts GitHub",
                more: "En voir plus",
                only: "Affichage des {{length}}/{{total}} premiers"
            },
            modal: {
                title: "Dépôts GitHub de {{username}}",
                repository: "Dépôt",
                description: "Description",
                language: "Langage",
                stars: "Étoiles",
                viewOnGitHub: "Voir sur GitHub",
                close: "Fermer"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "Ajoute une commande pour envoyer un lien de recherche internet",
            command: {
                googleThat: {
                    description: "Envoyer un lien de moteur de recherche",
                    query: "La recherche"
                }
            },
            option: {
                hyperlink: {
                    label: "Hyperlien",
                    description: "Indique si le lien doit être masqué derrière le texte de la recherche"
                },
                embed: {
                    label: "Intégration",
                    description: "Indique si le lien doit générer un aperçu (embed)"
                },
                defaultEngine: {
                    label: "Moteur par défaut",
                    description: "Le moteur de recherche à utiliser"
                },
                customEngineURL: {
                    label: "URL personnalisée",
                    description: "L'URL du moteur de recherche souhaité"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Permet de choisir n'importe quel autocollant de bienvenue au lieu du hasard en faisant un clic droit sur 'Dire bonjour !'",
            mode: {
                greet: "Saluer",
                message: "Message"
            },
            option: {
                greetMode: {
                    label: "Mode de bienvenue",
                    description: "Choisissez comment saluer",
                    greet: "Saluer (limité à 3 fois)",
                    message: "Message (spam possible)"
                }
            },
            context: {
                label: "Sélecteur d'autocollant de bienvenue",
                mode: "Mode de bienvenue",
                stickers: "Autocollants de bienvenue",
                multi: "Multi-Salut infernal",
                send: "Envoyer les salutations"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Menu contextuel pour extraire et télécharger les emojis et autocollants d'un serveur.",
            context: {
                download: {
                    emoji: "Télécharger les emojis",
                    sticker: "Télécharger les autocollants"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Paramètres pour les tags de guilde, comme les masquer ou désactiver l'invite à les adopter.",
            option: {
                disableAdoptTagPrompt: {
                    label: "Désactiver l'invite de tag",
                    description: "Désactive la fenêtre demandant d'adopter un tag"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Permet de masquer les boutons de chat",
            tooltip: {
                close: "Fermer",
                open: "Ouvrir"
            },
            option: {
                color: {
                    label: "Couleur",
                    description: "Colorer en rouge lors de l'ouverture"
                },
                open: {
                    label: "Ouvrir",
                    description: "Ouvert par défaut"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Masquer les pièces jointes et les intégrations pour des messages individuels via un bouton au survol",
            show: "Afficher les médias",
            hide: "Masquer les médias",
            hidden: "Médias masqués"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Masque temporairement les messages et les MP jusqu'au redémarrage.",
            button: {
                hide: "Masquer",
                hideDm: "Masquer le MP",
                unhideDm: "Afficher le MP"
            },
            toggle: {
                none: "Aucun MP masqué",
                hide: "Masquer les MP masqués",
                show: "Afficher les MP masqués"
            },
            option: {
                hidePopoverButton: {
                    label: "Masquer le bouton contextuel",
                    description: "Masquer le bouton de masquage dans le menu contextuel du message."
                }
            }
        },
        hideMutedVoiceIndicator: {
            name: "HideMutedVoiceIndicator",
            description: "Masque l'indicateur vocal dans la liste des serveurs lorsque les seuls salons vocaux actifs sont en sourdine"
        },
        hideServers: {
            name: "HideServers",
            description: "Masque des serveurs de la liste des serveurs",
            context: {
                hide: "Masquer le serveur",
                unhide: "Afficher le serveur",
                folder: {
                    hide: "Masquer le dossier",
                    unhide: "Afficher le dossier"
                }
            },
            option: {
                showIndicator: {
                    label: "Afficher l'indicateur",
                    description: "Afficher le menu pour réafficher les serveurs en bas de la liste"
                },
                guildsList: {
                    label: "Liste des serveurs",
                    description: "Supprimer les serveurs masqués"
                },
                resetHidden: {
                    label: "Réinitialiser les masqués",
                    description: "Supprimer tous les serveurs masqués de la liste",
                    button: "Réinitialiser les serveurs masqués"
                }
            },
            button: {
                hidden: "Masqué",
                hiddenServers: "Serveurs masqués",
                remove: "Supprimer",
                folder: "Dossier",
                removeAll: "Tout supprimer",
                guilds: "Serveurs",
                noHiddenServers: "Aucun serveur masqué"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes vous permet de sauvegarder des messages",
            main: "Principal",
            button: {
                tooltip: "Holy Notes",
                save: "Enregistrer la note",
                cancel: "Annuler",
                noteMessage: "Noter le message",
                refresh: "Actualiser les avatars",
                import: "Importer des notes",
                export: "Exporter des notes",
                deleteAll: "Supprimer toutes les notes",
                delete: "Supprimer le carnet",
                create: "Créer un carnet",
                copyText: "Copier le texte",
                copyAttachment: "Copier l'URL de la pièce jointe",
                deleteNote: "Supprimer la note",
                moveNote: "Déplacer la note",
                moveTo: "Déplacer vers {{key}}",
                copyId: "Copier l'ID"
            },
            modal: {
                error: {
                    generic: "Une erreur est survenue lors de l'analyse de vos notes. Vérifiez la console pour plus de détails.",
                    easter: "Aucune note trouvée. Empathy Banana est là pour vous.",
                    empty: "Aucune note enregistrée dans ce carnet."
                },
                help: {
                    title: "Aide",
                    description: "Apprenez à utiliser Holy Notes",
                    addingNotes: "Ajouter des notes",
                    addingNotesText: "Pour ajouter une note, faites un clic droit sur un message, puis survolez l'élément 'Noter le message' et cliquez sur le bouton correspondant au nom du carnet souhaité.",
                    prototype: "Prototype",
                    noteMessage: "Cliquer sur le bouton 'Noter le message' directement enregistrera dans 'Principal' par défaut !",
                    deletingNotes: "Supprimer des notes",
                    deletingNotesText: "Note : vous pouvez soit faire un clic droit sur la note et cliquer sur 'Supprimer la note', soit maintenir la touche 'SUPPR' de votre clavier et cliquer sur une note ; c'est magique !",
                    movingNotes: "Déplacer des notes",
                    movingNotesText: "Pour déplacer une note, faites un clic droit sur une note, survolez l'élément 'Déplacer la note' et cliquez sur le bouton du carnet vers lequel vous souhaitez la déplacer.",
                    jumpToMessage: "Aller au message",
                    jumpToMessageText: "Pour revenir à l'emplacement d'origine de la note, faites simplement un clic droit sur la note et cliquez sur 'Aller au message'."
                },
                notebook: {
                    title: "CARNET DE NOTES",
                    search: "Rechercher un message...",
                    options: "Options de tri",
                    label: "Menu de tri",
                    filteredOf: "{{filteredCount}} sur {{noteCount}} note{{s}}",
                    note: "{{noteCount}} note{{s}}",
                    ada: "Croissant / Date d'ajout",
                    amd: "Croissant / Date du message",
                    dda: "Décroissant / Date d'ajout",
                    dmd: "Décroissant / Date du message",
                    change: "Changer le tri",
                    ascending: "Croissant",
                    descending: "Décroissant",
                    dateAdded: "Date d'ajout",
                    messageDate: "Date du message"
                },
                create: {
                    title: "Créer un carnet",
                    description: "Entrez un nom pour votre nouveau carnet de notes",
                    placeholder: "Nom du carnet"
                },
                delete: {
                    title: "Supprimer {{notebookName}} ?",
                    description: "{{noteCount}} note{{s}} seront supprimées définitivement",
                    button: "Supprimer"
                },
                tabs: {
                    label: "Onglets du carnet"
                }
            },
            toast: {
                saved: "Message ajouté avec succès à {{notebook}}",
                deleted: "Note supprimée avec succès de {{notebook}}",
                moved: "Note déplacée avec succès de {{from}} vers {{to}}.",
                exists: "Le carnet {{notebookName}} existe déjà.",
                created: "Carnet {{notebookName}} créé avec succès.",
                deletedNotebook: "Carnet {{notebookName}} supprimé avec succès.",
                refreshed: "Avatars actualisés avec succès.",
                deletedAll: "Toutes les notes ont été supprimées.",
                imported: "Notes importées avec succès.",
                invalid: "Échec de l'importation des notes.",
                invalidJson: "JSON invalide"
            },
            toolbox: {
                action: "Ouvrir les notes"
            },
            text: {
                holyNotes: "Holy Notes",
                noteTag: "NOTE"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Change le bouton d'accueil en indicateur de saisie si quelqu'un écrit dans vos messages privés"
        },
        iconViewer: {
            name: "IconViewer",
            description: "Ajoute un nouvel onglet aux paramètres pour prévisualiser toutes les icônes.",
            toolbox: "Ouvrir l'onglet des icônes",
            iconFinder: "Chercheur d'icônes",
            about: {
                title: "Fonctionnalités",
                preview: "Prévisualiser les icônes",
                list: {
                    copy: "Copier les noms d'icônes et les variables CSS",
                    download: "Télécharger les icônes sous différents formats (SVG, PNG, GIF, etc.)",
                    premade: "Copier des recherches d'icônes prédéfinies pour vos plugins",
                    find: "Trouver des icônes par contexte de fonction",
                    search: "Rechercher des couleurs en faisant un clic droit sur le nom de la couleur",
                    special: "Remerciements spéciaux"
                }
            },
            context: {
                icon: {
                    options: "Options d'icône",
                    log: "Afficher dans la console",
                    save: "Enregistrer sous...",
                    rightClick: "Clic droit sur l'icône pour modifier",
                    usage: "Utilisation",
                    click: "Cliquer pour copier",
                    copied: "Copié !",
                    actions: "Actions"
                }
            },
            modal: {
                label: "Rechercher par contexte de fonction",
                search: "Rechercher parmi {{count}} icônes...",
                function: "Fonction",
                iconViewer: {
                    colors: "Couleurs de l'Icon Viewer",
                    unknown: "inconnu",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Redémarre automatiquement le client après une période d'inactivité configurable, mais évite de redémarrer si vous êtes en salon vocal.",
            option: {
                isEnabled: {
                    label: "Est activé",
                    description: "Activer le redémarrage automatique après inactivité"
                },
                idleMinutes: {
                    label: "Minutes d'inactivité",
                    description: "Minutes d'inactivité avant redémarrage (hors salon vocal)"
                }
            },
            toolbox: {
                disable: "Désactiver le redémarrage auto inactif",
                enable: "Activer le redémarrage auto inactif"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Ignore les activités pour qu'elles n'apparaissent UNIQUEMENT sur votre statut. Vous pouvez configurer celles qui sont ignorées dans les onglets 'Jeux enregistrés' et 'Activités', ou utiliser les paramètres généraux ci-dessous",
            modal: {
                import: {
                    title: "Importer l'ID d'application du plugin CustomRPC à la liste de filtrage"
                },
                filter: {
                    title: "Liste de filtrage",
                    description: "Liste d'ID d'activités séparés par des virgules (utile pour filtrer des activités RPC spécifiques et CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "L'ID d'application CustomRPC n'est pas défini.",
                    alreadyAdded: "L'ID d'application CustomRPC est déjà ajouté."
                }
            },
            button: {
                import: "Importer l'ID CustomRPC"
            },
            option: {
                importCustomRPC: {
                    label: "Importer CustomRPC"
                },
                listMode: {
                    label: "Mode de liste",
                    description: "Choisir comment la liste de filtrage est appliquée",
                    blacklist: "Liste noire (ignorer seulement ce qui est dans la liste)",
                    whitelist: "Liste blanche (tout ignorer sauf ce qui est dans la liste)"
                },
                idList: {
                    label: "Liste des IDs"
                },
                ignorePlaying: {
                    label: "Ignorer 'Joue à'",
                    description: "Ignorer toutes les activités de jeu (généralement jeux et RPC)"
                },
                ignoreStreaming: {
                    label: "Ignorer 'En direct'",
                    description: "Ignorer toutes les activités de streaming"
                },
                ignoreListening: {
                    label: "Ignorer 'Écoute'",
                    description: "Ignorer toutes les activités d'écoute (généralement Spotify)"
                },
                ignoreWatching: {
                    label: "Ignorer 'Regarde'",
                    description: "Ignorer toutes les activités de visionnage"
                },
                ignoreCompeting: {
                    label: "Ignorer 'Participe à'",
                    description: "Ignorer toutes les activités de compétition"
                },
                ignoredActivities: {
                    label: "Activités ignorées"
                }
            },
            text: {
                enableActivity: "Activer l'activité",
                disableActivity: "Désactiver l'activité"
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Permet d'ignorer les appels d'utilisateurs spécifiques ou de groupes MP.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Utilisateurs ignorés définitivement",
                    description: "IDs d'utilisateurs (virgule + espace) à ignorer en permanence"
                }
            },
            button: {
                ignore: "Ignorer",
                temporarilyIgnore: "Ignorer temporairement les appels",
                permanentlyIgnore: "Ignorer définitivement les appels"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Ne pas masquer les messages des 'spammeurs probables'"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Affiche le nom de fichier des images et GIFs dans une infobulle au survol",
            option: {
                showFullUrl: {
                    label: "Afficher l'URL complète",
                    description: "Afficher l'URL complète de l'image au lieu du simple nom de fichier. Toujours activé pour les GIFs car ils n'ont généralement pas de nom de fichier explicite."
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Ne jamais masquer les liens d'images dans les messages, même s'ils constituent le seul contenu"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Permet de zoomer sur les images et GIFs et affiche les métadonnées. Utilisez la molette pour zoomer et Shift + molette pour augmenter le rayon de la loupe.",
            option: {
                saveZoomValues: {
                    label: "Sauvegarder les valeurs de zoom",
                    description: "Sauvegarder ou non les valeurs de zoom et de taille de loupe"
                },
                invertScroll: {
                    label: "Inverser le défilement",
                    description: "Inverser le sens de la molette"
                },
                nearestNeighbour: {
                    label: "Plus proche voisin",
                    description: "Utiliser l'interpolation 'Nearest Neighbour' lors du redimensionnement des images"
                },
                square: {
                    label: "Carré",
                    description: "Rendre la loupe carrée"
                },
                zoom: {
                    label: "Zoom",
                    description: "Niveau de zoom de la loupe"
                },
                size: {
                    label: "Taille",
                    description: "Rayon / Taille de la loupe"
                },
                zoomSpeed: {
                    label: "Vitesse de zoom",
                    description: "Rapidité de changement du zoom / de la taille"
                },
                showMetadata: {
                    label: "Afficher les métadonnées",
                    description: "Afficher les métadonnées de l'image en double-cliquant sur l'image sélectionnée"
                }
            },
            context: {
                square: "Loupe carrée",
                nearest: "Plus proche voisin",
                zoom: "Zoom",
                size: "Taille de la loupe",
                zoomSpeed: "Vitesse de zoom",
                showImageMetadata: "Afficher les métadonnées",
                view: "Voir les métadonnées",
                loading: "Chargement...",
                unknown: "Inconnu",
                sizeHTML: "Poids",
                dimensions: "Dimensions",
                filename: "Nom de fichier"
            },
            text: {
                bytes: "Octets"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Ajoute une commande slash /imgtogif pour créer un GIF à partir de n'importe quelle image",
            command: {
                imgToGif: {
                    description: "Permet de transformer une image en GIF",
                    image: "Image jointe à utiliser",
                    width: "Largeur du GIF",
                    height: "Hauteur du GIF"
                }
            },
            error: {
                noImage: "Aucune image spécifiée !",
                notImage: "Le fichier n'est pas une image"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Affiche vos relations implicites dans l'onglet Amis.",
            option: {
                sortByAffinity: {
                    label: "Trier par affinité",
                    description: "Trier ou non les relations implicites selon votre affinité avec elles."
                }
            },
            implicit: "Implicite"
        },
        inRole: {
            name: "InRole",
            description: "Savoir qui possède un rôle via le menu contextuel du rôle ou la commande /inrole (lire les infos du plugin !)",
            command: {
                inrole: {
                    description: "Savoir qui a un rôle",
                    role: "Le rôle",
                    noGuild: "Assurez-vous d'être sur un serveur."
                }
            },
            context: {
                view: "Voir les membres du rôle"
            },
            modal: {
                about: {
                    title: "Limitations",
                    description: "Si vous n'avez pas de permissions de modérateur et que le serveur est grand (plus de 100 membres), le plugin peut être limité :",
                    list: {
                        one: "Les membres hors ligne ne seront pas listés",
                        two: "Jusqu'à 100 membres listés par défaut. Pour en voir plus, faites défiler la liste des membres pour les charger.",
                        three: "Cependant, les amis seront toujours affichés quel que soit leur statut."
                    }
                },
                member: {
                    title: "Membres du rôle",
                    noMembers: "Aucun membre en cache avec ce rôle n'a été trouvé. Essayez de faire défiler la liste des membres du serveur !"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Partagez instantanément votre écran en rejoignant un salon vocal (supporte écrans, fenêtres et caméras)",
            modal: {
                linux: {
                    title: "Pour Linux",
                    body: "Sur Wayland, cela ouvre seulement la sélection de partage",
                    bodyTwo: "Sur X11, cela peut fonctionner ou non :shrug:"
                },
                videoDevices: {
                    title: "Périphériques d'entrée vidéo",
                    body: "Supporte les caméras et cartes de capture (comme Elgato HD60X) si activé"
                },
                regardingSound: {
                    title: "À propos du son et de l'aperçu",
                    body: "Nous utilisons les paramètres de Discord pour décider si l'aperçu et le son doivent être activés"
                }
            },
            option: {
                streamMedia: {
                    label: "Source à streamer",
                    description: "Revient à l'écran principal si non trouvée",
                    loading: "Chargement des sources...",
                    none: "Aucune source trouvée",
                    placeholder: "Choisir une source à streamer"
                },
                includeVideoDevices: {
                    label: "Inclure les caméras",
                    description: "Inclure les périphériques d'entrée vidéo (caméras, cartes de capture) dans la liste"
                },
                autoMute: {
                    label: "Muet auto",
                    description: "Couper automatiquement votre micro en rejoignant un salon vocal"
                },
                autoDeafen: {
                    label: "Casque coupé auto",
                    description: "Couper automatiquement le son en rejoignant un salon (coupe aussi le micro)"
                },
                instantScreenshare: {
                    label: "Partage d'écran instantané",
                    description: "Active la fonctionnalité de partage automatique"
                },
                keybindScreenshare: {
                    label: "Raccourci de partage",
                    description: "Partage d'écran via les raccourcis clavier Discord"
                },
                focusDiscord: {
                    label: "Mettre Discord au premier plan",
                    description: "Lancer le partage par raccourci uniquement si Discord est au premier plan"
                },
                toolboxManagement: {
                    label: "Gestion Toolbox",
                    description: "Activer/Désactiver Instant Screenshare"
                }
            },
            toolbox: {
                label: "Instant Screenshare",
                toast: "Instant Screenshare {{state}}",
                enabled: "Activé",
                disabled: "Désactivé"
            },
            toast: {
                instantScreenshareDisabled: "Partage d'écran instantané {{disabled}}"
            },
            text: {
                instantScreenshare: "Instant Screenshare"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Cryptez vos messages de manière discrète !",
            option: {
                savedPasswords: {
                    label: "Mots de passe enregistrés",
                    description: "Mots de passe enregistrés (séparés par une virgule)"
                }
            },
            button: {
                encrypt: "Crypter le message",
                decrypt: "Décrypter le message",
                hidden: "Indicateur de message caché (InvisibleChat)"
            },
            tooltip: {
                hidden: "Ce message contient un message caché ! (InvisibleChat)"
            },
            embed: {
                title: "Message décrypté",
                footer: "Envoyé avec InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Crypter le message",
                    secret: "Secret",
                    cover: "Couverture (2 mots ou plus !!)",
                    password: "Mot de passe",
                    dontUseCover: "Ne pas utiliser de couverture",
                    send: "Envoyer",
                    cancel: "Annuler"
                },
                decrypt: {
                    title: "Décrypter le message",
                    with: "Message crypté",
                    password: "Mot de passe",
                    decrypt: "Décrypter",
                    cancel: "Annuler"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Permet de modifier les valeurs par défaut lors de la création d'invitations de serveur.",
            option: {
                inviteDuration: {
                    label: "Durée de l'invitation",
                    description: "Durée par défaut des invitations",
                    thirtyMinutes: "30 minutes",
                    oneHour: "1 Heure",
                    sixHours: "6 Heures",
                    twelveHours: "12 Heures",
                    oneDay: "1 Jour",
                    sevenDays: "7 Jours",
                    forever: "Illimitée"
                },
                maxUses: {
                    label: "Utilisations max",
                    description: "Nombre maximum d'utilisations par défaut",
                    unlimited: "Illimité",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Membre temporaire",
                    description: "Statut de membre temporaire par défaut"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Rend les couleurs des pseudos uniques dans le chat, comme sur les clients IRC",
            option: {
                lightness: {
                    label: "Luminosité",
                    description: "Luminosité en %. À modifier si les couleurs sont trop claires veya sombres"
                },
                memberListColors: {
                    label: "Couleurs liste de membres",
                    description: "Remplacer les couleurs de rôles dans la liste des membres"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Appliquer uniquement aux sans-couleur",
                    description: "Appliquer uniquement aux utilisateurs n'ayant pas de couleur prédéfinie"
                },
                applyColorOnlyInDms: {
                    label: "Appliquer uniquement en MP",
                    description: "Appliquer les couleurs uniquement dans les messages privés, pas sur les serveurs."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Sauvegarde localement toutes les personnes avec qui vous avez communiqué (y compris les serveurs)",
            section: {
                description: "Fournit une liste d'utilisateurs mentionnés, répondus, propriétaires de vos serveurs veya membres de votre guilde",
                empty: "C'est vide pour le moment.",
                tooltip: "{{user}}, mis à jour le {{updatedAtContent}}",
                owner: "Propriétaire du serveur",
                iRememberYou: "I Remember You"
            },
            context: {
                user: "Options d'utilisateur",
                copy: "Copier l'ID de l'utilisateur",
                copyToast: "ID utilisateur copié",
                view: "Voir le profil"
            },
            modal: {
                title: "Éditeur",
                filter: "Filtrer par tag, pseudo, ID",
                button: {
                    validate: "Valider et Sauvegarder",
                    cancel: "Annuler",
                    openEditor: "Ouvrir l'éditeur",
                    resetData: "Réinitialiser le stockage",
                    sure: "Êtes-vous sûr ?"
                }
            },
            text: {
                serverOptions: "Options du serveur",
                copyServerId: "Copier l'ID du serveur",
                serverIdCopied: "ID du serveur copié dans le presse-papiers"
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Ajoute des options de menu pour sauter au début veya à la fin d'un salon/MP",
            context: {
                top: "Aller au premier message",
                bottom: "Aller au dernier message",
                noMessages: "Aucun message trouvé pour cet utilisateur dans ce salon.",
                searchFailed: "Échec de la recherche de messages."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Tente de revenir au salon où vous étiez avant de changer de compte veya de charger Discord."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Ajoute des effets sonores OperaGX veya osu! lorsque vous tapez au clavier.",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume des sons du clavier"
                },
                soundPack: {
                    label: "Pack de sons",
                    description: "Pack de sons à utiliser",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Envoie une notification si un message correspond à certains mots-clés veya expressions régulières (regex)",
            idHolder: "ID",
            keywordEntry: "Entrée de mot-clé",
            regexHolder: "exemple|regex",
            ignoreCase: "Ignorer la casse",
            whiteblackLabel: "Liste blanche/noire",
            tab: {
                title: "Mots-clés",
                clearAll: "Tout effacer"
            },
            button: {
                addId: "Ajouter ID",
                addKeyword: "Ajouter un mot-clé"
            },
            listTypeSelector: {
                blacklist: "Liste noire",
                whitelist: "Liste blanche",
                placeholder: "Sélectionner un type de liste"
            },
            option: {
                ignoreBots: {
                    label: "Ignorer les bots",
                    description: "Ignorer les messages des bots"
                },
                amountToKeep: {
                    label: "Quantité à conserver",
                    description: "Nombre de messages à garder dans le log"
                },
                keywords: {
                    label: "Mots-clés",
                    description: "Gérer les mots-clés"
                }
            },
            text: {
                keywordEntryI1: "Entrée de mot-clé {{i_1}}",
                listPriorityAdvanced: "Priorité des listes (avancé)",
                whichListToPrioritize: "Quelle liste privilégier si un message déclenche les deux listes",
                ifYouAreNot: "En cas de doute, dans la plupart des cas c'est généralement Liste noire"
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Ajoute un indicateur de dernière connexion sous les pseudos dans vos listes MP et serveurs",
            unit: {
                d: "jour",
                h: "heure",
                m: "minute"
            },
            online: "En ligne il y a {{formattedTime}}"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Plugin pour la présence riche ListenBrainz",
            about: {
                title: "À propos de l'API MusicBrainz",
                description: "L'API MusicBrainz ne nécessite pas de clé API, mais demande un {{link}}. Une adresse email suffit généralement.",
                userAgent: "chaîne user-agent explicite"
            },
            option: {
                username: {
                    label: "Nom d'utilisateur",
                    description: "Nom d'utilisateur ListenBrainz"
                },
                mbContact: {
                    label: "Contact MB",
                    description: "Contact ListenBrainz"
                },
                shareUsername: {
                    label: "Partager le pseudo",
                    description: "Afficher le lien vers le profil ListenBrainz"
                },
                shareSong: {
                    label: "Partager la chanson",
                    description: "Afficher le lien de la chanson actuelle sur ListenBrainz"
                },
                hideWithSpotify: {
                    label: "Cacher si Spotify actif",
                    description: "Masquer ListenBrainz si Spotify est en cours d'utilisation"
                },
                hideWithActivity: {
                    label: "Cacher si activité active",
                    description: "Masquer ListenBrainz si vous avez une autre présence"
                },
                useTimeBar: {
                    label: "Barre de progression",
                    description: "Utiliser la durée du morceau pour afficher une barre de temps"
                },
                statusName: {
                    label: "Nom du statut",
                    description: "Texte de statut personnalisé"
                },
                nameFormat: {
                    label: "Format du nom",
                    description: "Format d'affichage de l'artiste et de la chanson",
                    custom: "Utiliser le nom de statut personnalisé",
                    artistSong: "Format 'artiste - chanson'",
                    songArtist: "Format 'chanson - artiste'",
                    artistOnly: "Artiste uniquement",
                    songOnly: "Chanson uniquement",
                    albumName: "Nom de l'album"
                },
                useListeningStatus: {
                    label: "Statut 'Écoute'",
                    description: "Afficher 'Écoute' au lieu de 'Joue à'"
                },
                missingArt: {
                    label: "Pochette manquante",
                    description: "Si l'album veya la pochette manque",
                    listenbrainzLogo: "Utiliser le logo ListenBrainz",
                    generic: "Utiliser un espace réservé générique"
                },
                showAlbumCover: {
                    label: "Afficher la pochette d'album",
                    description: "Afficher la pochette d'album. Désactiver cette option affichera un espace réservé. Utile si votre musique contient des pochettes inappropriées"
                },
                useLogo: {
                    label: "Utiliser le logo",
                    description: "Afficher le logo ListenBrainz sur la pochette"
                }
            },
            button: {
                profile: "Profil ListenBrainz",
                viewSong: "Voir le titre"
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Remplace les citations de chargement de Discord",
            option: {
                replaceEvents: {
                    label: "Remplacer les événements",
                    description: "Appliquer le plugin même pendant les événements thématiques (ex: Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Citations du plugin",
                    description: "Activer les citations prédéfinies par ce plugin"
                },
                enableDiscordPresetQuotes: {
                    label: "Citations Discord",
                    description: "Conserver les citations par défaut de Discord"
                },
                additionalQuotes: {
                    label: "Citations additionnelles",
                    description: "Vos citations personnalisées, séparées par le délimiteur ci-dessous"
                },
                additionalQuotesDelimiter: {
                    label: "Délimiteur",
                    description: "Caractère séparant vos citations"
                }
            },
            text: {
                allQuotesDisabled: "Vous avez vraiment désactivé toutes les citations de chargement ? Quel bouffon..."
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "Permet de se connecter sur un autre appareil en scannant un QR code, comme sur mobile !",
            option: {
                scanQr: {
                    label: "Scanner un QR Code",
                    description: "Scanner un code QR",
                    notEnabled: "Activez le plugin et redémarrez pour scanner un QR code de connexion"
                }
            },
            neverScan: "Ne scannez jamais un QR code provenant d'un autre utilisateur veya d'une application inconnue.",
            hold: "Maintenir pour confirmer la connexion",
            scanning: "Scan en cours...",
            stopScanning: "Arrêter le scan",
            usingWebcam: "Scanner via webcam",
            dragDrop: "Glissez-déposez une image ici, veya cliquez pour choisir",
            orPaste: "Ou collez une image depuis le presse-papiers !",
            verifyLogin: "Vérifier la connexion",
            text: {
                scanQrCode: "Scanner le code QR"
            }
        },
        markdownTables: {
            name: "MarkdownTables",
            description: "Affiche les tableaux markdown de style GitHub dans les messages Discord.",
            toolbar: {
                label: "Vue du tableau markdown",
                table: "Tableau",
                raw: "Brut"
            },
            option: {
                hideToggle: {
                    label: "Masquer le sélecteur",
                    description: "Masque le sélecteur Tableau/Brut et affiche toujours les tableaux rendus."
                }
            }
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Permet de modifier la vitesse de lecture (par défaut) des médias",
            playbackSpeed: "Vitesse de lecture",
            context: {
                label: "Contrôle de vitesse de lecture"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Vitesse messages vocaux",
                    description: "Messages vocaux"
                },
                defaultVideoSpeed: {
                    label: "Vitesse vidéos",
                    description: "Vidéos"
                },
                defaultAudioSpeed: {
                    label: "Vitesse audios",
                    description: "Audios"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Affiche le nombre de membres en ligne, de membres au total et d'utilisateurs en vocal sur le serveur - dans la liste des membres et l'infobulle.",
            option: {
                toolTip: {
                    label: "Infobulle",
                    description: "Afficher le nombre de membres dans l'infobulle du serveur"
                },
                memberList: {
                    label: "Liste des membres",
                    description: "Afficher le nombre dans l'en-tête de la liste des membres"
                },
                voiceActivity: {
                    label: "Activité vocale",
                    description: "Afficher le nombre d'utilisateurs en salon vocal"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} en ligne dans ce salon",
            totalMembers: "{{formattedTotalCount}} membres au total",
            totalVoice: "{{formattedVoiceCount}} membres en vocal",
            tooltip: {
                total: "{{count}} membres au total sur le serveur"
            }
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Affiche les avatars et icônes de rôles à l'intérieur des mentions",
            option: {
                showAtSymbol: {
                    label: "Afficher le symbole @",
                    description: "Afficher ou non le symbole @ devant les mentions d'utilisateurs"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Ajoute un bouton dans la barre de chat pour miauler",
            button: {
                meow: "Miaou"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Fusionne vos messages envoyés à la suite dans un court délai si personne d'autre n'écrit entre-temps.",
            option: {
                timePeriod: {
                    label: "Période de temps",
                    description: "Durée de la fusion (en secondes)."
                },
                shouldMergeWithAttachment: {
                    label: "Fusionner avec pièces jointes",
                    description: "Fusionner si le dernier message contenait une pièce jointe ?"
                },
                useSpace: {
                    label: "Utiliser un espace",
                    description: "Ajouter un espace au lieu d'un saut de ligne lors de la fusion."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Actions rapides : Retour arrière + clic pour supprimer, double clic pour éditer/répondre",
            option: {
                singleClickAction: {
                    label: "Action clic simple",
                    description: "Action sur clic simple (vos messages)"
                },
                singleClickModifier: {
                    label: "Modificateur clic simple",
                    description: "Touche requise pour le clic simple (vos messages)"
                },
                singleClickOthersAction: {
                    label: "Action clic simple (Autres)",
                    description: "Action sur clic simple (messages des autres)"
                },
                singleClickOthersModifier: {
                    label: "Modificateur clic simple (Autres)",
                    description: "Touche requise pour le clic simple (messages des autres)"
                },
                doubleClickAction: {
                    label: "Action double clic",
                    description: "Action sur double-clic (vos messages)"
                },
                doubleClickOthersAction: {
                    label: "Action double clic (Autres)",
                    description: "Action sur double-clic (messages des autres)"
                },
                doubleClickModifier: {
                    label: "Modificateur double clic",
                    description: "Touche requise pour le double-clic"
                },
                tripleClickAction: {
                    label: "Action triple clic",
                    description: "Action sur triple-clic"
                },
                tripleClickModifier: {
                    label: "Modificateur triple clic",
                    description: "Touche requise pour le triple-clic"
                },
                reactEmoji: {
                    label: "Emoji de réaction",
                    description: "Emoji à utiliser pour l'action Réagir"
                },
                addAdditionalReacts: {
                    label: "Ajouter réactions supp.",
                    description: "Ajouter aussi les autres réactions configurées"
                },
                additionalReactEmojis: {
                    label: "Emojis supp.",
                    description: "Emojis additionnels (séparés par virgule, max {{count}})"
                },
                disableInDms: {
                    label: "Désactiver en MP",
                    description: "Désactiver les actions par clic dans les messages privés"
                },
                disableInSystemDms: {
                    label: "Désactiver en MP système",
                    description: "Désactiver les actions par clic dans les MP système"
                },
                clickTimeout: {
                    label: "Délai de clic",
                    description: "Délai pour distinguer double/triple clic (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Seuil de maintien",
                    description: "Temps max de maintien pour double-clic (ms). Plus long permet la sélection de texte"
                },
                deferDoubleClickForTriple: {
                    label: "Différer double pour triple",
                    description: "Retarde le double-clic pour permettre le triple"
                },
                selectionHoldTimeout: {
                    label: "Délai de sélection",
                    description: "Temps requis pour autoriser la sélection de texte (ms)"
                },
                quoteWithReply: {
                    label: "Citer avec réponse",
                    description: "Lors d'une citation, répondre aussi au message"
                },
                useSelectionForQuote: {
                    label: "Utiliser sélection pour citation",
                    description: "Citer uniquement le texte sélectionné si disponible"
                }
            },
            actions: {
                none: "Aucune",
                delete: "Supprimer",
                copyLink: "Copier le lien",
                copyID: "Copier l'ID",
                copyContent: "Copier le contenu",
                copyUserID: "Copier l'ID utilisateur",
                edit: "Modifier",
                reply: "Répondre",
                react: "Réagir",
                openThread: "Ouvrir le fil",
                openTab: "Ouvrir l'onglet",
                quote: "Citer",
                pin: "Épingler"
            },
            missingPermissions: {
                react: "Action impossible : Permissions manquantes (Réagir)",
                pin: "Action impossible : Permissions manquantes (Épingler)",
            },
            cannotQuote: "Impossible de citer ce type de message",
            copy: {
                messageId: "ID du message copié !",
                messageContent: "Contenu du message copié !",
                userId: "ID utilisateur copié !"
            },
            linkCopied: "Lien copié !",
            text: {
                shift: "Maj",
                ctrl: "Ctrl",
                alt: "Alt",
                backspace: "Retour arrière",
                pickEmoji: "Choisir un emoji"
            },
            emojiSetting: {
                pick: "Choisir un émoji",
                selectMain: "Choisir l'émoji des réactions",
                selectAdditional: "Choisir des émojis supplémentaires",
                additionalPlaceholder: "séparés par une virgule/un retour à la ligne, max {{max}}"
            },
            toast: {
                cannotReact: "Impossible de réagir : permissions manquantes",
                linkCopied: "Lien copié !"
            }
        },
        messageColors: {
            name: "MessageColors",
            description: "Affiche les codes couleur comme #FF0042 directement dans les messages",
            option: {
                renderType: {
                    label: "Type de rendu",
                    description: "Comment afficher les couleurs",
                    textColor: "Couleur du texte",
                    block: "Bloc à côté",
                    backgroundColor: "Couleur de fond"
                },
                enableShortHexCodes: {
                    label: "Codes Hex courts",
                    description: "Activer les codes à 3 caractères comme #39f"
                },
                blockView: {
                    label: "Position des blocs",
                    description: "Où afficher les blocs de couleur",
                    right: "Côté droit",
                    left: "Côté gauche",
                    both: "Des deux côtés"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Affiche le temps requis pour charger les messages du salon actuel",
            option: {
                showIcon: {
                    label: "Afficher l'icône",
                    description: "Afficher l'icône de temps dans la barre de message"
                },
                showMs: {
                    label: "Afficher les ms",
                    description: "Afficher les millisecondes"
                },
                iconColor: {
                    label: "Couleur d'icône",
                    description: "Couleur de l'icône (valeur CSS)"
                }
            },
            loaded: "Messages chargés en {{time}}ms ({{timeAgo}})",
            day: "il y a {{s}} jour(s)",
            hour: "il y a {{s}} heure(s)",
            minute: "il y a {{s}} minute(s)",
            justNow: "à l'instant"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Indicateur pour les messages ayant mis ≥n secondes à s'envoyer",
            day: "jour",
            days: "jours",
            hour: "heure",
            hours: "heures",
            minute: "minute",
            minutes: "minutes",
            second: "seconde",
            seconds: "secondes",
            millisecond: "milliseconde",
            milliseconds: "millisecondes",
            and: "et",
            oldKotlinDetected: "Utilisateur suspecté d'utiliser un ancien client Discord Android.",
            ahead: "L'horloge de cet utilisateur avance de {{delta}}.",
            delay: "Ce message a été envoyé avec un retard de {{delta}}.",
            delayedMessage: "Message retardé",
            oldAndroidClient: "Ancien client Discord Android",
            option: {
                latency: {
                    label: "Latence",
                    description: "Seuil en secondes pour l'indicateur de latence"
                },
                detectDiscordKotlin: {
                    label: "Détecter Discord Kotlin",
                    description: "Détecter les anciens clients Android"
                },
                showMillis: {
                    label: "Afficher les ms",
                    description: "Afficher les millisecondes"
                },
                ignoreSelf: {
                    label: "S'ignorer soi-même",
                    description: "Ne pas ajouter d'indicateur sur vos propres messages"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Ajoute un aperçu aux messages contenant un lien vers un autre message",
            option: {
                messageBackgroundColor: {
                    label: "Couleur de fond",
                    description: "Couleur de fond pour les messages dans les intégrations riches"
                },
                automodEmbeds: {
                    label: "Intégrations Automod",
                    description: "Utiliser des intégrations automod au lieu de riches (plus petit, moins d'infos)",
                    always: "Toujours",
                    prefer: "Préférer automod, sauf si contenu riche requis",
                    never: "Jamais"
                },
                listMode: {
                    label: "Mode liste",
                    description: "Utiliser la liste d'ID comme liste noire veya blanche",
                    blacklist: "Liste noire",
                    whitelist: "Liste blanche"
                },
                idList: {
                    label: "Liste d'IDs",
                    description: "IDs de serveurs/salons/utilisateurs (séparés par virgule)"
                },
                clearMessageCache: {
                    label: "Vider le cache",
                    description: "Vider le cache des messages liés"
                }
            },
            noContent: {
                noAttachments: "aucun contenu, {{count}} intégration{{s}}",
                noEmbeds: "aucun contenu, {{count}} pièce{{s}} jointe{{s}}",
                both: "aucun contenu, {{attachments}} pièce{{s}} jointe{{s}} et {{embeds}} intégration{{s}}"
            },
            dm: "Message privé",
            groupDm: "Groupe MP",
            server: "Serveur"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Affiche une infobulle d'aperçu au survol des liens de messages, réponses et transferts.",
            loading: "Chargement...",
            option: {
                onLink: {
                    label: "Sur les liens",
                    description: "Afficher au survol des liens de messages"
                },
                onReply: {
                    label: "Sur les réponses",
                    description: "Afficher au survol des réponses"
                },
                onForward: {
                    label: "Sur les transferts",
                    description: "Afficher au survol des messages transférés"
                },
                display: {
                    label: "Affichage",
                    description: "Style d'affichage",
                    auto: "Comme le message",
                    compact: "Compact",
                    cozy: "Aéré"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Enregistre temporairement les messages supprimés et modifiés.",
            removeMessage: "Effacer l'historique du message",
            removeMessageTemporary: "Supprimer le message (Temporaire)",
            clearMessageLog: "Vider le journal des messages",
            showDiff: "Afficher les différences",
            modal: {
                edit: {
                    title: "Historique des modifications",
                    tooltip: "Cet état de modification n'a pas été enregistré."
                }
            },
            option: {
                deleteStyle: {
                    label: "Style de suppression",
                    description: "Apparence des messages supprimés",
                    text: "Texte rouge",
                    overlay: "Superposition rouge"
                },
                logDeletes: {
                    label: "Log des suppressions",
                    description: "Enregistrer les messages supprimés"
                },
                collapseDeleted: {
                    label: "Réduire les supprimés",
                    description: "Réduire les messages supprimés comme les messages bloqués"
                },
                logEdits: {
                    label: "Log des modifications",
                    description: "Enregistrer les messages modifiés"
                },
                inlineEdits: {
                    label: "Modifs en ligne",
                    description: "Afficher l'historique directement dans le message"
                },
                ignoreBots: {
                    label: "Ignorer les bots",
                    description: "Ne pas log les bots"
                },
                ignoreSelf: {
                    label: "S'ignorer",
                    description: "Ne pas log vos propres messages"
                },
                ignoreSelfEdits: {
                    label: "Ignorer ses propres modifications",
                    description: "Indique s'il faut ignorer vos propres modifications"
                },
                ignoreUsers: {
                    label: "Ignorer utilisateurs",
                    description: "Liste d'IDs à ignorer"
                },
                ignoreChannels: {
                    label: "Ignorer salons",
                    description: "Liste d'IDs à ignorer"
                },
                ignoreGuilds: {
                    label: "Ignorer serveurs",
                    description: "Liste d'IDs à ignorer"
                },
                showEditDiffs: {
                    label: "Afficher les diffs",
                    description: "Montrer les différences visuelles entre versions"
                },
                separatedDiffs: {
                    label: "Diffs séparés",
                    description: "Séparer ajouts et retraits pour plus de clarté"
                },
                logDeletedAttachments: {
                    description: "Enregistrer ou non les pièces jointes supprimées",
                    label: "Enregistrer les pièces jointes supprimées"
                }
            },
            text: {
                clearHistory: "Effacer l'historique",
                toggleDeletedHighlight: "Activer/désactiver la surbrillance des supprimés",
                enableDiffView: "Activer la vue des différences",
                disableDiffView: "Désactiver la vue des différences",
                noDeletedMessages: "Aucun message supprimé",
                deletedMessageSuffix: " message supprimé",
                deletedMessagesSuffix: " messages supprimés"
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Améliore le plugin MessageLogger avec des fonctionnalités supplémentaires.",
            updateImageCacheDir: "Répertoire du cache d'images mis à jour avec succès.",
            updateLogsDir: "Répertoire des journaux (logs) mis à jour avec succès.",
            failedUpdate: "Échec de la mise à jour du répertoire.",
            blacklist: "Liste noire",
            whitelist: "Liste blanche",
            failedToRemove: "Échec de la suppression du message",
            successfullyImported: "Journaux importés avec succès",
            errorImportingLogs: "Erreur lors de l'importation des journaux. Consultez la console pour plus d'informations",
            importing: "Importation...",
            importLogs: "Importer les journaux",
            exporting: "Exportation...",
            exportLogs: "Exporter les journaux",
            alert: {
                clearLogs: {
                    title: "Effacer les journaux",
                    body: "Êtes-vous sûr de vouloir effacer tous les journaux ?",
                    confirmText: "Effacer",
                    cancel: "Annuler"
                },
                clearVisibleLogs: {
                    title: "Effacer les journaux visibles",
                    body: "Êtes-vous sûr de vouloir effacer {{messages}} journaux ?",
                    confirmText: "Effacer",
                    cancel: "Annuler"
                },
                cleared: "Base de données des messages et cache effacés."
            },
            context: {
                title: "Message Logger",
                jumpToMessage: "Aller au message",
                openUserProfile: "Ouvrir le profil utilisateur",
                copyContent: "Copier le contenu",
                copyUserId: "Copier l'ID utilisateur",
                copyMessageId: "Copier l'ID du message",
                copyChannelId: "Copier l'ID du salon",
                copyServerId: "Copier l'ID du serveur",
                deleteLog: "Supprimer le journal",
                fromUsernameDm: "Depuis les MP de {{username}}",
                fromGroupDm: "Depuis le groupe MP {{channelName}}",
                fromServerChannel: "Depuis {{channelName}} dans {{serverName}}",
                moveTypeTo: "Déplacer {{type}} vers {{destination}}",
                removeTypeFrom: "Retirer {{type}} de {{list}}",
                openLogsFor: "Ouvrir les journaux pour {{name}}",
                openLogs: "Ouvrir les journaux",
                removeMessage: "Supprimer le message (Permanent)",
                removeMessageHistory: "Supprimer l'historique des messages (Permanent)",
                deleteMessageHide: "Supprimer le message (Cacher des Message Loggers)",
                addServerToBlacklist: "Ajouter le serveur à la liste noire",
                addServerToWhitelist: "Ajouter le serveur à la liste blanche",
                removeServerFromBlacklist: "Retirer le serveur de la liste noire",
                removeServerFromWhitelist: "Retirer le serveur de la liste blanche",
                moveServerToBlacklist: "Déplacer le serveur vers la liste noire",
                moveServerToWhitelist: "Déplacer le serveur vers la liste blanche",
                addUserToBlacklist: "Ajouter l'utilisateur à la liste noire",
                addUserToWhitelist: "Ajouter l'utilisateur à la liste blanche",
                removeUserFromBlacklist: "Retirer l'utilisateur de la liste noire",
                removeUserFromWhitelist: "Retirer l'utilisateur de la liste blanche",
                moveUserToBlacklist: "Déplacer l'utilisateur vers la liste noire",
                moveUserToWhitelist: "Déplacer l'utilisateur vers la liste blanche",
                addChannelToBlacklist: "Ajouter le salon à la liste noire",
                addChannelToWhitelist: "Ajouter le salon à la liste blanche",
                removeChannelFromBlacklist: "Retirer le salon de la liste noire",
                removeChannelFromWhitelist: "Retirer le salon de la liste blanche",
                moveChannelToBlacklist: "Déplacer le salon vers la liste noire",
                moveChannelToWhitelist: "Déplacer le salon vers la liste blanche"
            },
            type: {
                server: "Serveur",
                user: "Utilisateur",
                channel: "Salon"
            },
            button: {
                chooseFolder: "Choisir un dossier",
                browse: "Parcourir",
                clearLogs: "Effacer tous les journaux",
                clearVisibleLogs: "Effacer les journaux visibles",
                sortOldest: "Trier par plus ancien",
                sortNewest: "Trier par plus récent",
                loadMore: "Charger plus",
                noResults: "Aucun résultat dans {{tab}}",
                tryOtherTabs: "Essayez peut-être {{nextTab}} ou {{lastTab}}",
                importLogs: "Importer les journaux"
            },
            modal: {
                title: "Filtrer les messages",
                deleted: "Supprimés",
                edited: "Modifiés",
                ghostPing: "Ghost Pings",
                empty: "C'est vide, hein ?",
                importLogs: "ML Enhanced stocke désormais les journaux dans indexeddb. Vous devez importer vos anciens journaux depuis le répertoire des logs. L'importation n'écrasera pas les journaux existants."
            },
            clear: {
                title: "Effacer les journaux",
                description: "Êtes-vous sûr de vouloir effacer tous les journaux ?",
                confirm: "Effacer",
                cancel: "Annuler"
            },
            option: {
                saveMessages: {
                    label: "Enregistrer les messages",
                    description: "Enregistrer ou non les messages supprimés et modifiés."
                },
                saveImages: {
                    label: "Enregistrer les images",
                    description: "Enregistrer les pièces jointes supprimées."
                },
                sortNewest: {
                    label: "Trier par plus récent",
                    description: "Trier les journaux du plus récent au plus ancien."
                },
                cacheMessagesFromServers: {
                    label: "Mettre en cache les messages des serveurs",
                    description: "Normalement, le logger n'enregistre que les IDs en liste blanche et les MP. Activer ceci enregistrera les messages de tous les serveurs. Notez que cela peut saturer le cache. Si vous êtes sur beaucoup de serveurs, cela augmentera considérablement la taille de la base de données avec des messages potentiellement non pertinents."
                },
                ignoreBots: {
                    label: "Ignorer les bots",
                    description: "Ignorer ou non les messages provenant des bots."
                },
                ignoreWebhooks: {
                    label: "Ignorer les webhooks",
                    description: "Ignorer ou non les messages provenant des webhooks."
                },
                ignoreSelf: {
                    label: "S'ignorer soi-même",
                    description: "Ignorer ou non vos propres messages."
                },
                ignoreMutedGuilds: {
                    label: "Ignorer les serveurs muets",
                    description: "Les messages des serveurs en sourdine ne seront pas enregistrés. Les utilisateurs/salons en liste blanche seront tout de même enregistrés."
                },
                ignoreMutedCategories: {
                    label: "Ignorer les catégories muettes",
                    description: "Les messages des catégories en sourdine ne seront pas enregistrés."
                },
                ignoreMutedChannels: {
                    label: "Ignorer les salons muets",
                    description: "Les messages des salons en sourdine ne seront pas enregistrés."
                },
                alwaysLogDirectMessages: {
                    label: "Toujours enregistrer les MP",
                    description: "Toujours enregistrer les messages privés."
                },
                alwaysLogCurrentChannel: {
                    label: "Toujours enregistrer le salon actuel",
                    description: "Enregistrer systématiquement le salon sélectionné, sauf si l'utilisateur/salon est en liste noire."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Suppression permanente par défaut",
                    description: "Le bouton de suppression de MessageLogger supprimera les journaux de façon permanente par défaut."
                },
                hideMessageFromMessageLoggers: {
                    label: "Cacher le message des Message Loggers",
                    description: "Ajoute un bouton au menu contextuel pour supprimer vos messages sans qu'ils soient détectés par les autres loggers. Utilisez à vos risques et périls."
                },
                showLogsButton: {
                    label: "Afficher le bouton des journaux",
                    description: "Afficher ou non l'icône dans la barre d'outils."
                },
                showWhereMessageIsFrom: {
                    label: "Afficher l'origine du message",
                    description: "Afficher le nom du salon/auteur et le nom du serveur."
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Messages à afficher par page",
                    description: "Nombre de messages affichés à la fois et chargés lors du défilement dans les journaux."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Message de remplacement (Mode furtif)",
                    description: "Contenu utilisé pour remplacer le message original lors de l'utilisation de la fonction 'Cacher des Message Loggers'."
                },
                messageLimit: {
                    label: "Limite de messages",
                    description: "Nombre maximum de messages à sauvegarder. Les plus anciens sont supprimés quand la limite est atteinte. 0 = illimité."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Limite de taille des pièces jointes (Mo)",
                    description: "Taille maximale (en mégaoctets) pour la sauvegarde d'une pièce jointe."
                },
                attachmentFileExtensions: {
                    label: "Extensions de fichiers autorisées",
                    description: "Liste d'extensions séparées par une virgule (ex: jpg, png). Laissez vide pour tout enregistrer."
                },
                cacheLimit: {
                    label: "Limite du cache",
                    description: "Nombre maximum de messages à conserver en mémoire vive."
                },
                timeBasedCleanupMinutes: {
                    label: "Fréquence de nettoyage (minutes)",
                    description: "Intervalle de nettoyage automatique pour supprimer les messages dépassant la limite."
                },
                preserveCurrentChannel: {
                    label: "Préserver le salon actuel",
                    description: "Empêche le nettoyage automatique des messages dans le salon que vous consultez actuellement."
                },
                whitelistedIds: {
                    label: "IDs en liste blanche",
                    description: "ID de serveur, de salon ou d'utilisateur à toujours afficher dans le journal des messages."
                },
                blacklistedIds: {
                    label: "IDs en liste noire",
                    description: "ID de serveur, de salon ou d'utilisateur à ne jamais afficher dans le journal des messages."
                },
                imageCacheDir: {
                    label: "Répertoire du cache d'images",
                    description: "Sélectionner le dossier pour les images enregistrées."
                },
                logsDir: {
                    label: "Répertoire des journaux",
                    description: "Sélectionner le dossier pour les fichiers de logs."
                },
                importLogs: {
                    label: "Importer les journaux",
                    description: "Importer les journaux depuis un fichier."
                },
                exportLogs: {
                    label: "Exporter les journaux",
                    description: "Exporter les journaux depuis IndexedDB."
                },
                clearLogsOnRestart: {
                    label: "Effacer les journaux au redémarrage",
                    description: "Efface les journaux lorsque Discord redémarre."
                },
                openLogs: {
                    label: "Ouvrir les journaux",
                    description: "Ouvrir l'interface des journaux."
                },
                openImageCacheFolder: {
                    label: "Ouvrir le dossier cache images",
                    description: "Ouvre le répertoire où sont stockées les images."
                },
                clearLogs: {
                    label: "Effacer les journaux",
                    description: "Effacer les journaux",
                    title: "Effacer les journaux",
                    body: "Êtes-vous sûr de vouloir effacer tous les journaux ?",
                    confirmText: "Effacer",
                    cancel: "Annuler"
                }
            },
            toast: {
                clearedLogs: "Journaux effacés",
                failedToClearLogs: "Impossible d'effacer les journaux",
                failedToRemoveMessage: "Impossible de retirer le message. Consulte la console pour plus de détails.",
                noMessagesFoundIn: "Aucun message trouvé dans le fichier journal",
                successfullyImportedCountLogs: "{{count}} journaux importés avec succès",
                successfullyExportedLogs: "Journaux exportés avec succès",
                successfullyExportedCountLogs: "{{count}} journaux exportés avec succès",
                errorExportingLogsCheck: "Erreur lors de l'export des journaux. Consulte la console pour plus d'informations"
            },
            text: {
                jsonFile: "Fichier JSON",
                clearLogs: "Effacer les journaux",
                clearingLogs: "Effacement des journaux...",
                messageLogger: "Message Logger",
                importLogs: "Importer les journaux",
                logs: "Journaux",
                loadingTabLogs: "Chargement des journaux : {{tab}}..."
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Notifications visuelles quand des utilisateurs choisis envoient un message",
            dm: "leurs MP",
            option: {
                users: {
                    label: "Utilisateurs",
                    description: "IDs (séparés par virgule) à surveiller",
                    invalidId: "{{id}} n'est pas un ID valide"
                }
            },
            notification: {
                title: "{{username}} a envoyé un message",
                body: "Cliquer pour aller à {{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Sauvegardez des messages et utilisez-les avec une commande simple.",
            notExist: "Le tag **{{tagname}}** n'existe plus ! Rechargez Discord pour corriger.",
            alreadyExist: "Un tag nommé **{{tagname}}** existe déjà !",
            sentTag: "Le tag **{{tagname}}** a été envoyé !",
            successCreate: "Le tag **{{tagname}}** a été créé !",
            allTags: "Tous vos tags :",
            noTags: "Aucun tag pour le moment, utilisez /tag create !",
            noDeleteTag: "Le tag **{{tagname}}** n'existe pas.",
            successDelete: "Tag **{{name}}** supprimé !",
            tagPreview: "Le tag **{{name}}** n'existe pas !",
            option: {
                clyde: {
                    label: "Notification Clyde",
                    description: "Message éphémère quand un tag est utilisé."
                },
                tagsList: {
                    label: "Liste des tags",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Gérer vos tags personnels",
                    option: {
                        create: {
                            description: "Créer un tag",
                            name: "Nom du déclencheur",
                            message: "Message à envoyer"
                        },
                        list: {
                            description: "Lister vos tags"
                        },
                        delete: {
                            description: "Supprimer un tag",
                            name: "Nom du tag"
                        },
                        preview: {
                            description: "Aperçu (non public)",
                            name: "Nom du tag"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Ajoute une icône de test micro dans le panneau utilisateur",
            button: "Retour micro (Mic Test)"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Ajustements pour le clic milieu (coller, ouvrir liens).",
            option: {
                openScope: {
                    label: "Portée d'ouverture",
                    description: "Empêcher le clic milieu d'ouvrir certains contenus.",
                    links: "Liens",
                    media: "Médias",
                    linksAndMedia: "Liens et Médias",
                    none: "Aucun"
                },
                pasteScope: {
                    label: "Portée de collage",
                    description: "Empêcher le clic milieu de coller du texte.",
                    always: "Toujours empêcher",
                    focus: "Seulement si zone de texte non focus",
                },
                pasteThreshold: {
                    label: "Seuil de collage",
                    description: "Délai (ms) avant de pouvoir coller à nouveau."
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo, Lenny, Mock, et plus",
            command: {
                echo: {
                    description: "Envoie un message via Clyde (localement)"
                },
                lenny: {
                    description: "Envoie un visage lenny ( ͡° ͜ʖ ͡°)"
                },
                mock: {
                    description: "mOcQuEr lEs gEnS"
                },
                wordcount: {
                    description: "Compte les mots d'un message",
                    response: "Le message contient {{count}} mots."
                },
                flipcoin: {
                    description: "Pile veya Face",
                    heads: "Pile",
                    tails: "Face",
                    response: "C'est tombé sur {{result}}."
                },
                ask: {
                    description: "Posez une question fermée (oui/non)",
                    yes: "Oui",
                    no: "Non",
                    maybe: "Peut-être",
                    askAgain: "Demande plus tard",
                    definitelyNot: "Certainement pas",
                    itIsCertain: "C'est certain"
                },
                randomanimal: {
                    description: "Image d'animal aléatoire",
                    animal: "choisir l'animal",
                    cat: "chat",
                    dog: "chien",
                    response: "Impossible de récupérer l'image pour le moment"
                },
                randomnumber: {
                    description: "Nombre aléatoire entre deux valeurs",
                    min: "Valeur min",
                    max: "Valeur max",
                    response: "Nombre entre {{min}} et {{max}} : {{number}}"
                },
                choose: {
                    description: "Choisit parmi vos options",
                    option: "Liste de choix séparés par virgule",
                    response: "Je choisis : {{choice}}"
                },
                systeminfo: {
                    description: "Informations système",
                    platform: "Plateforme",
                    deviceType: "Appareil",
                    mobile: "Mobile",
                    desktop: "Bureau",
                    browser: "Navigateur",
                    cpuCores: "Cœurs CPU",
                    memory: "Mémoire",
                    screen: "Écran",
                    languages: "Langues",
                    network: "Réseau",
                    online: "En ligne",
                    offline: "Hors ligne",
                    failedToFetch: "Erreur lors de la récupération des infos",
                    unknown: "Inconnu"
                },
                getuptime: {
                    description: "Temps d'activité du client",
                    response: "**Temps d'activité** : {{uptime}} minutes"
                },
                gettime: {
                    description: "Heure actuelle",
                    response: "Il est {{time}}"
                },
                transform: {
                    description: "Transformer votre texte",
                    transformation: {
                        description: "Type de transformation",
                        lowercase: "Minuscules",
                        uppercase: "Majuscules",
                        localeLowercase: "Minuscules locales",
                        localeUppercase: "Majuscules locales",
                        same: "Inchangé"
                    },
                    repeat: "nombre de répétitions",
                    reverse: "inverser le texte",
                    normalize: {
                        description: "Forme de normalisation",
                        nfc: "NFC",
                        nfd: "NFD",
                        nfkc: "NFKC",
                        nfkd: "NFKD"
                    },
                    text: "Texte à transformer"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Ajoute plus de Kaomojis à Discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Améliore les réactions rapides du menu contextuel.",
            option: {
                reactionCount: {
                    label: "Nombre de réactions",
                    description: "Quantité (0-42)"
                },
                frequentEmojis: {
                    label: "Emojis fréquents",
                    description: "Utiliser les plus fréquents au lieu des favoris"
                },
                rows: {
                    label: "Lignes",
                    description: "Lignes à afficher"
                },
                columns: {
                    label: "Colonnes",
                    description: "Colonnes à afficher"
                },
                compactMode: {
                    label: "Mode Compact",
                    description: "Boutons à 75%, emojis à 125%. Recommandé avec 5 colonnes min."
                },
                scroll: {
                    label: "Défilement",
                    description: "Autoriser le défilement de la liste"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Ajoute des badges pour les webhooks ve rôles modérateurs (owner, admin, etc.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "C'est un webhook"
                },
                owner: {
                    name: "Owner",
                    description: "Propriétaire du serveur"
                },
                admin: {
                    name: "Admin",
                    description: "Possède la permission Administrateur"
                },
                staff: {
                    name: "Staff",
                    description: "Peut gérer le serveur, salons veya rôles"
                },
                mod: {
                    name: "Mod",
                    description: "Peut gérer les messages, exclure veya bannir"
                },
                vcmod: {
                    name: "Mod Vocal",
                    description: "Peut gérer les salons vocaux"
                },
                chatmod: {
                    name: "Mod Chat",
                    description: "Peut gérer les messages"
                }
            },
            modal: {
                example: "Exemple",
                tag: "Badge",
                customTextPlaceholder: "Texte du badge (défaut : {{displayName}})",
                messages: "Voir dans les messages",
                memberList: "Voir dans la liste et profils"
            },
            option: {
                dontShowForBots: {
                    label: "Masquer pour les bots",
                    description: "Ne pas montrer de badges supp. pour les bots (sauf webhooks)"
                },
                dontShowBotTag: {
                    label: "Masquer le badge BOT",
                    description: "Cacher le texte [APP] / [BOT] par défaut"
                },
                showWebhookTagFully: {
                    label: "Badge Webhook complet",
                    description: "Afficher le badge Webhook dans les salons suivis (annonces)"
                },
                tagSettings: {
                    label: "Paramètres des badges",
                    description: ""
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Commande slash pour traduire vers veya depuis le code morse.",
            command: {
                morse: {
                    description: "Traduire en Morse",
                    message: "Texte à convertir"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume du 🗿🗿🗿"
                },
                quality: {
                    label: "Qualité",
                    description: "Qualité du 🗿🗿🗿",
                    normal: "Normale",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Actif si non focus",
                    description: "Déclencher le 🗿 même si la fenêtre est en arrière-plan"
                },
                ignoreBots: {
                    label: "Ignorer bots",
                    description: "Ignorer les messages des bots"
                },
                ignoreBlocked: {
                    label: "Ignorer bloqués",
                    description: "Ignorer les messages des bloqués"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Contrôles musicaux et paroles pour plusieurs services",
            option: {
                spotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Contrôles Spotify",
                    description: "Afficher les contrôles pour Spotify"
                },
                showSpotifyLyrics: {
                    label: "Paroles Spotify",
                    description: "Afficher les paroles pour Spotify"
                },
                useSpotifyUris: {
                    label: "Utiliser les URIs Spotify",
                    description: "Ouvrir via l'application (URI) plutôt que le navigateur (URL)"
                },
                previousButtonRestartsTrack: {
                    label: "Bouton Précédent redémarre",
                    description: "Relancer le morceau actuel si lu depuis >3s"
                },
                tidalSectionTitle: {
                    label: "Tidal"
                },
                showTidalControls: {
                    label: "Contrôles Tidal",
                    description: "Afficher les contrôles pour Tidal"
                },
                showTidalLyrics: {
                    label: "Paroles Tidal",
                    description: "Afficher les paroles pour Tidal"
                },
                websocketURL: {
                    label: "URL Websocket",
                    description: "Par défaut : ws://localhost:24123"
                },
                YtmSectionTitle: {
                    label: "YouTube Music",
                    description: "{{app}} est requis"
                },
                showYoutubeMusicControls: {
                    label: "Contrôles YT Music",
                    description: "Afficher les contrôles pour YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "URL API YouTube Music",
                    description: "L'URL du serveur API YouTube Music utilisé"
                },
                hoverControls: {
                    label: "Contrôles au survol",
                    description: "Afficher seulement lors du survol"
                },
                showMusicNoteOnNoLyrics: {
                    label: "Icône si pas de paroles",
                    description: "Afficher une note de musique si aucune parole n'est trouvée"
                },
                lyricsPosition: {
                    label: "Position des paroles",
                    description: "Emplacement du panneau",
                    above: "Au-dessus du lecteur",
                    below: "En-dessous du lecteur"
                },
                lyricsProvider: {
                    label: "Source des paroles",
                    description: "D'où proviennent les paroles",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "URL de base de l'API de paroles Spotify",
                    description: "URL de base d'une instance personnalisée (par exemple : http://localhost:8080)."
                },
                translateTo: {
                    label: "Traduire vers",
                    description: "Langue de traduction (videra les traductions existantes)",
                    cleared: "Traductions effacées"
                },
                lyricsConversion: {
                    label: "Conversion des paroles",
                    description: "Traduire veya romaniser automatiquement",
                    none: "Aucune",
                    translate: "Traduire",
                    romanize: "Romaniser"
                },
                fallbackProvider: {
                    label: "Source de secours",
                    description: "Essayer d'autres sources si la principale échoue"
                },
                showFailedToasts: {
                    label: "Toasts d'erreur",
                    description: "Afficher un toast si le chargement échoue"
                },
                purgeLyricsCache: {
                    label: "Vider le cache des paroles",
                    description: "Effacer tout le cache et les traductions",
                    button: "Purger le cache",
                    cacheLyricsPurged: "Cache purgé"
                },
                lyricDelay: {
                    label: "Décalage des paroles"
                }
            },
            context: {
                spotify: {
                    label: "Menu Paroles Spotify",
                    type: "Menu {{type}} Spotify",
                    copy: "Copier le nom de {{type}}",
                    link: "Copier le lien de {{type}}",
                    open: "Ouvrir {{type}} dans Spotify",
                    album: "Menu Album Spotify"
                },
                tidal: {
                    label: "Menu Paroles Tidal",
                    lyrics: "Paroles Tidal",
                    type: "Menu {{name}} Tidal",
                    copy: "Copier le nom de {{name}}",
                    open: "Ouvrir {{name}} dans Tidal",
                    album: "Menu Album Tidal"
                },
                ytm: {
                    type: "Menu {{name}} YT Music",
                    copy: "Copier le nom de {{name}}",
                    open: "Ouvrir {{name}} dans YT Music",
                    album: "Menu Album YT Music",
                    muted: "Muet"
                },
                lyrics: {
                    provider: "Source des paroles",
                    saved: "sauvegardé",
                    notFound: "Aucune parole synchronisée trouvée"
                },
                copy: {
                    currentLyrics: "Copier les paroles actuelles"
                }
            },
            alert: {
                lyricCopied: "Paroles copiées !",
                noLyrics: "Pas de paroles",
                noLyricsTo: "Pas de paroles à {{translated}}",
                translate: "traduire",
                romanize: "romaniser",
                lyricsFetchFailed: "Échec du chargement des paroles",
                failedToFetchLyrics: "Échec du chargement : {{translated}}",
                translation: "traduction",
                romanization: "romanisation",
                failedToFetchTranslation: "Échec du chargement des paroles ({{translated}})"
            },
            modal: {
                install: {
                    title: "Comment installer",
                    install: "Installez {{link}}, puis allez dans TidalLuna -> Plugin stores -> Install @vmohammad/api",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "Rien n'est lu",
                    artist: "Artiste :",
                    album: "Album :",
                    noLyrics: "Pas de paroles disponibles :(",
                    progress: "Progression",
                    totalDuration: "Durée totale"
                },
                type: {
                    song: "Chanson",
                    artist: "Artiste",
                    album: "Album"
                },
                album: {
                    open: "Ouvrir l'album",
                    viewCover: "Voir la pochette",
                    volume: "Volume",
                    image: "Image de l'album"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Traduit",
                romanized: "Romanisé",
                none: "Aucun"
            },
            error: {
                failed: "Échec de l'affichage du Modal :(",
                checkConsole: "Vérifiez la console",
                invalidUrlCustomApi: "Format d'URL API personnalisé invalide"
            },
            text: {
                unknownArtist: "Artiste inconnu",
                unknownTitle: "Titre inconnu"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Affiche les groupes MP communs dans les profils",
            no: "Aucun groupe commun",
            mutualGroup: "{{count}} Groupe{{s}} en commun",
            members: "Membres",
            noGroup: "Aucun groupe MP en commun",
            header: "Groupes communs"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Empêche les aperçus en appel ou PiP (partage d'écran, streams, etc.) de se mettre en pause même si le client perd le focus",
            about: "Ce plugin entraînera une consommation de ressources plus élevée que d'habitude"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Met automatiquement en sourdine les nouveaux serveurs et modifie divers autres paramètres lors de l'adhésion",
            context: {
                apply: "Appliquer NewGuildSettings au dossier"
            },
            option: {
                guild: {
                    label: "Mettre le serveur en sourdine",
                    description: "Met automatiquement le serveur en sourdine"
                },
                messages: {
                    label: "Paramètres de notification du serveur",
                    description: "Paramètres de notification du serveur",
                    all: "Tous les messages",
                    mentions: "Seulement les @mentions",
                    nothing: "Rien",
                    default: "Par défaut du serveur"
                },
                everyone: {
                    label: "Supprimer les @everyone et @here",
                    description: "Supprimer les @everyone et @here"
                },
                role: {
                    label: "Supprimer toutes les @mentions de rôles",
                    description: "Supprimer toutes les @mentions de rôles"
                },
                highlights: {
                    label: "Supprimer les points forts",
                    description: "Supprime automatiquement les points forts (Highlights)"
                },
                events: {
                    label: "Mettre en sourdine les nouveaux événements",
                    description: "Met automatiquement en sourdine les nouveaux événements"
                },
                showAllChannels: {
                    label: "Afficher tous les salons",
                    description: "Affiche automatiquement tous les salons"
                },
                mobilePush: {
                    label: "Mettre en sourdine les notifications push mobiles",
                    description: "Met automatiquement en sourdine les notifications push mobiles"
                },
                voiceChannels: {
                    label: "Salons vocaux",
                    description: "Masque automatiquement les noms dans les salons vocaux"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Utilitaire qui vous informe lorsque de nouveaux plugins sont ajoutés à Plexcord",
            modal: {
                title: "Nouveaux plugins et paramètres",
                description: "De nouveaux plugins et paramètres ont été ajoutés depuis votre dernière visite. Veuillez les examiner ci-dessous.",
                tooltip: "Ignorer pour cette session",
                dontShowAgain: "Ne plus afficher",
                restartRequired: "Redémarrage requis pour appliquer les changements",
                restart: "Redémarrer",
                continue: "Continuer",
                supportUs: "Plexcord est un logiciel open source. Si vous aimez l'utiliser, pensez à nous soutenir",
                supportUsLink: "ici"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Rétablit le badge des bots à sa forme originale"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Masque complètement tous les messages bloqués ou ignorés du chat",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Masquer aussi les utilisateurs ignorés",
                    description: "Masque également les messages des utilisateurs ignorés."
                },
                disableNotifications: {
                    label: "Désactiver les notifications",
                    description: "Masque les notifications de nouveaux messages pour les utilisateurs bloqués."
                },
                allowAutoModMessages: {
                    label: "Autoriser les messages AutoMod",
                    description: "Permet aux messages envoyés par AutoMod de contourner le filtrage."
                },
                hideBlockedUserReplies: {
                    label: "Masquer les réponses des utilisateurs bloqués",
                    description: "Masque les messages des utilisateurs bloqués dans les fils de discussion si vous y avez participé."
                },
                defaultHideUsers: {
                    label: "Masquage par défaut",
                    description: "Si activé, les messages des utilisateurs bloqués seront totalement masqués tandis que ceux de la liste d'exception seront réduits. Si désactivé, c'est l'inverse."
                },
                overrideUsers: {
                    label: "Utilisateurs d'exception",
                    description: "Liste d'ID d'utilisateurs (séparés par des virgules) qui suivront le comportement inverse défini ci-dessus."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Vous empêche de taper des listes à puces en Markdown"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Désactive la fonction de liens profonds redondante de Discord qui tente de vous forcer à utiliser l'application de bureau"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Supprime l'obligation de saisir le nom du serveur pour le supprimer",
            option: {
                confirmModal: {
                    label: "Fenêtre de confirmation",
                    description: "Faut-il afficher une fenêtre 'Êtes-vous sûr de vouloir supprimer' ?"
                }
            },
            modal: {
                title: "Supprimer le serveur ?",
                body: "C'est définitif, au cas où ce ne serait pas évident.",
                confirm: "Supprimer",
                cancel: "Annuler"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Désactive la bannière 'HOLD UP' dans la console. Empêche également Discord de masquer votre jeton (token), évitant ainsi les déconnexions aléatoires."
        },
        noF1: {
            name: "NoF1",
            description: "Désactive le raccourci d'aide F1."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Coller un lien alors qu'un texte est sélectionné ne créera pas de lien masqué (hyperlien Markdown)"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Empêche l'effet miroir de la caméra sur votre écran"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Supprime l'animation de 300ms lors de l'ouverture ou de la fermeture des fenêtres modales"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Supprime la mosaïque d'images de Discord",
            option: {
                inlineVideo: {
                    label: "Vidéo intégrée",
                    description: "Lit les vidéos sans ouvrir la fenêtre de carrousel"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Supprime TOUTES les publicités pour Nitro en faisant croire au client que vous possédez Nitro."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Contourne le processus d'accueil (onboarding) de Discord pour une entrée plus rapide sur les serveurs."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Passe le délai d'accueil lent et ennuyeux"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Supprime le compteur de notifications pour les demandes d'amis, les messages et les offres Nitro.",
            option: {
                hideFriendRequestsCount: {
                    label: "Masquer le compteur d'amis",
                    description: "Masque le compteur des demandes d'amis entrantes"
                },
                hideMessageRequestsCount: {
                    label: "Masquer le compteur de messages",
                    description: "Masque le compteur des demandes de messages"
                },
                hidePremiumOffersCount: {
                    label: "Masquer le compteur d'offres Nitro",
                    description: "Masque le compteur d'offres Nitro"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Supprime complètement les thèmes de profil Nitro de tout le monde sauf le vôtre."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Contourne l'obligation d'utiliser le 'Appuyer pour parler' (PTT) dans les salons qui l'imposent."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Désactive les pings de réponse par défaut",
            option: {
                userList: {
                    label: "Liste d'utilisateurs",
                    description: "Liste d'utilisateurs à autoriser ou excepter (séparés par des virgules ou espaces)"
                },
                roleList: {
                    label: "Liste de rôles",
                    description: "Liste de rôles à autoriser ou excepter"
                },
                shouldPingListed: {
                    label: "Comportement",
                    description: "Détermine si la liste est une liste blanche ou noire",
                    dontPing: "Ne pas pinger les utilisateurs/rôles listés",
                    onlyPing: "Pinger uniquement les utilisateurs/rôles listés"
                },
                inverseShiftReply: {
                    label: "Inverser Maj + Réponse",
                    description: "Inverse le comportement de la touche Maj lors d'une réponse (activer pour que Maj + clic mentionne l'utilisateur)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Nettoie les liens de messages en retirant les préfixes canary/ptb"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Nous sommes tous égaux ! Supprime les en-têtes de rôles dans la liste des membres."
        },
        noRPC: {
            name: "NoRPC",
            description: "Désactive le 'Rich Presence' de Discord"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "N'affiche pas les emojis de serveurs dans le menu d'autocomplétion.",
            option: {
                shownEmojis: {
                    label: "Emojis affichés",
                    description: "Choisir quels emojis afficher dans l'autocomplétion",
                    onlyUnicode: "Uniquement les emojis Unicode (standard)",
                    currentServer: "Unicode et serveur actuel uniquement",
                    all: "Unicode et tous les serveurs (par défaut)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Désactive le badge de compteur de messages non lus sur la barre des tâches et la zone de notification."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Rend les titres des notifications de bureau plus informatifs",
            text: {
                threadInParent: "{{thread}} dans {{parent}}"
            }
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Définit un volume personnalisé pour les notifications Discord",
            option: {
                notificationVolume: {
                    label: "Volume des notifications",
                    description: "Volume des notifications"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Désactive l'animation 'est en train d'écrire' dans le chat"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Permet de sauter aux messages des utilisateurs bloqués, ignorés ou spammeurs sans avoir à les débloquer."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Si plusieurs messages non lus sont envoyés par un utilisateur en MP, vous ne recevrez qu'une seule notification sonore.",
            option: {
                channelToAffect: {
                    label: "Salons concernés",
                    description: "Sélectionnez le type de MP concerné",
                    both: "Les deux",
                    user: "MP Utilisateurs",
                    group: "MP Groupes"
                },
                allowMentions: {
                    label: "Autoriser les mentions",
                    description: "Recevoir une notification sonore pour les @mentions"
                },
                allowEveryone: {
                    label: "Autoriser everyone/here",
                    description: "Recevoir une notification sonore pour @everyone et @here dans les groupes"
                },
                ignoreUsers: {
                    label: "Ignorer les utilisateurs",
                    description: "IDs d'utilisateurs dont les notifications ne doivent JAMAIS être limitées"
                },
                alwaysPlaySound: {
                    label: "Toujours jouer le son",
                    description: "Joue le son de notification même s'il est désactivé"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Ouvre les liens dans leurs applications respectives plutôt que dans votre navigateur",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Ouvre les liens Spotify dans l'application Spotify"
                },
                steam: {
                    label: "Steam",
                    description: "Ouvre les liens Steam dans l'application Steam"
                },
                epic: {
                    label: "Epic Games",
                    description: "Ouvre les liens Epic Games dans le lanceur Epic Games"
                },
                tidal: {
                    label: "Tidal",
                    description: "Ouvre les liens Tidal dans l'application Tidal"
                },
                itunes: {
                    label: "iTunes",
                    description: "Ouvre les liens Apple Music dans l'application iTunes"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Ouvre les liens VRChat dans l'application VRCX"
                },
                telegram: {
                    label: "Telegram",
                    description: "Ouvrir les liens Telegram dans l'application Telegram"
                }
            },
            notification: {
                open: "Lien ouvert dans l'application native"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Permet de modifier la mise en page et l'ordre de tri par défaut des forums.",
            option: {
                defaultLayout: {
                    label: "Mise en page par défaut",
                    description: "Quelle mise en page utiliser par défaut",
                    list: "Liste",
                    gallery: "Galerie"
                },
                defaultSortOrder: {
                    label: "Ordre de tri par défaut",
                    description: "Quel ordre de tri utiliser par défaut",
                    recentlyActive: "Activité récente",
                    datePosted: "Date de publication"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Permet d'utiliser le mode fête car la fête ne finit jamais ✨",
            option: {
                superIntensePartyMode: {
                    label: "Intensité du mode fête",
                    description: "Intensité de la fête",
                    normal: "Normale",
                    better: "Améliorée",
                    projectX: "Projet X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Rétablit l'option de mettre en pause les invitations indéfiniment, que Discord a supprimée.",
            pauseIndefinitely: "Pause indéfinie"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Désactive les restrictions côté client pour la gestion des permissions des salons.",
            option: {
                lockout: {
                    label: "Verrouillage",
                    description: "Contourne la prévention de verrouillage des permissions"
                },
                onboarding: {
                    label: "Accueil",
                    description: "Contourne les exigences du processus d'accueil"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Visualisez les permissions d'un utilisateur, d'un salon veya les rôles d'un serveur",
            view: "Voir les permissions",
            option: {
                permissionsSortOrder: {
                    label: "Ordre de tri des permissions",
                    description: "Méthode de tri pour définir quel rôle accorde une permission",
                    highest: "Rôle le plus haut",
                    lowest: "Rôle le plus bas"
                }
            },
            icon: {
                denied: "Refusé",
                allowed: "Autorisé",
                notOverwritten: "Non écrasé"
            },
            context: {
                permissions: "Permissions"
            },
            modal: {
                title: "Permissions",
                noPermissions: "Aucune permission à afficher !",
                owner: "propriétaire",
                grantedBy: "Accordé par",
                serverOwner: "Propriétaire du serveur",
                ownerRole: "Propriétaire",
                sortingBy: "Tri par {{method}}",
                highest: "Rôle le plus haut",
                lowest: "Rôle le plus bas",
                details: "Détails du rôle"
            },
            text: {
                roleOptions: "Options du rôle",
                userOptions: "Options de l'utilisateur",
                unknownRole: "Rôle inconnu",
                unknownUser: "Utilisateur inconnu"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Ajoute la commande /petpet pour créer des GIFs de caresses à partir de n'importe quelle image",
            command: {
                petpet: {
                    description: "Créer un GIF petpet.",
                    delay: "Délai entre chaque image (Défaut : 20).",
                    resolution: "Résolution du GIF (Défaut : 120).",
                    image: "Image jointe à utiliser",
                    url: "URL de l'image",
                    user: "Utilisateur dont on utilisera l'avatar",
                    noServerPfp: "Utiliser l'avatar global plutôt que celui du serveur",
                    error: {
                        noImage: "Aucune image spécifiée !",
                        delayTooLow: "Le délai doit être d'au moins 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "Le fichier n'est pas une image",
                fetchUserFailed: "Échec de la récupération de l'utilisateur.",
                fetchImageFailed: "Erreur lors du chargement de {{url}}."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Ajoute le mode Image-dans-l'Image (PiP) aux vidéos",
            tooltip: "Basculer en Image-dans-l'Image",
            option: {
                loop: {
                    label: "Boucle",
                    description: "Lire la vidéo PiP en boucle veya non"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Permet d'épingler des conversations privées en haut de votre liste de MP.",
            context: {
                category: {
                    label: "Menu Catégorie des MP épinglés",
                    edit: "Modifier la catégorie",
                    up: "Déplacer vers le haut",
                    down: "Déplacer vers le bas",
                    delete: "Supprimer la catégorie",
                    unnamed: "oups"
                },
                pin: {
                    label: "Épingler les MP",
                    addCategory: "Ajouter une catégorie"
                },
                unPin: {
                    label: "Désépingler le MP",
                    move: "Déplacer vers la catégorie"
                }
            },
            option: {
                pinOrder: {
                    label: "Ordre des épingles",
                    description: "Dans quel ordre afficher les MP épinglés ?",
                    lastMessage: "Message le plus récent",
                    custom: "Personnalisé (clic droit pour réorganiser)"
                },
                canCollapseDmSection: {
                    label: "Section repliable",
                    description: "Autoriser la section des MP non catégorisés à être repliée"
                },
                dmSectionCollapsed: {
                    label: "Section MP repliée",
                    description: "Replier la section MP"
                },
                friendsSidebarGroupDms: {
                    label: "MP de groupe dans la barre latérale des amis",
                    description: "Affiche les MP de groupe épinglés dans la barre latérale des amis."
                },
                userBasedCategoryList: {
                    label: "Liste de catégories personnalisée",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Épingler la catégorie",
                    edit: "Modifier la catégorie",
                    new: "Nouvelle catégorie",
                    name: "Nom",
                    color: "Couleur",
                    save: "Sauvegarder",
                    create: "Créer"
                },
                defaultCategoryName: "Catégorie épinglée {{number}}"
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Notifications personnalisables avec un meilleur formatage des mentions",
            option: {
                friends: {
                    label: "Amis",
                    description: "Notifier quand des amis envoient des messages sur des serveurs"
                },
                mentions: {
                    label: "Mentions",
                    description: "Notifier lors d'une mention @directe"
                },
                dms: {
                    label: "MP",
                    description: "Notifier pour les messages privés"
                },
                showInActive: {
                    label: "Afficher si actif",
                    description: "Afficher les notifications même pour le salon actuellement ouvert"
                },
                ignoreMuted: {
                    label: "Ignorer si muet",
                    description: "Ne pas notifier pour les serveurs/salons en sourdine"
                }
            },
            unknown: "Inconnu",
            dm: "MP",
            groupDM: "Groupe MP",
            title: "{{username}} dans {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Ajoute une icône d'épingle aux messages épinglés"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Ne pas afficher les petites icônes de serveurs dans les dossiers"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Ajoute des indicateurs de plateforme (Bureau, Mobile, Web...) aux utilisateurs",
            embeddedTooltip: "Intégré (console ou jeu)",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Liste",
                    description: "Afficher les indicateurs dans les profils utilisateur"
                },
                badges: {
                    label: "Badges",
                    description: "Afficher comme badges dans les profils"
                },
                messages: {
                    label: "Messages",
                    description: "Afficher à l'intérieur des messages"
                },
                colorMobileIndicator: {
                    label: "Indicateur mobile coloré",
                    description: "Accorder la couleur de l'indicateur mobile au statut de l'utilisateur."
                },
                showBots: {
                    label: "Afficher pour les bots",
                    description: "Afficher les indicateurs sur les bots"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Simule la plateforme veya l'appareil sur lequel vous êtes",
            about: "Nous ne pouvons pas garantir que ce plugin ne vous vaudra pas un avertissement ou un bannissement. Choisir Xbox/Playstation/VR peut faire de votre client une version obsolète.",
            platform: {
                desktop: "Client Discord",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Discord Intégré",
                playstation: "Discord Intégré",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Plateforme",
                    description: "La plateforme sur laquelle faire semblant d'être.",
                    desktop: "Bureau",
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
            description: "Ajoute un bouton à la barre d'applications contenant les actions rapides Plexcord",
            tooltip: "Boîte à outils Plexcord",
            context: {
                openLog: "Journal des notifications",
                enableQuickCSS: "Activer QuickCSS",
                openQuickCSS: "Modifier QuickCSS",
                openSettings: "Paramètres",
                manageThemes: "Gérer les thèmes"
            },
            option: {
                showPluginMenu: {
                    label: "Menu des plugins",
                    description: "Afficher le menu des plugins dans la boîte à outils"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "Ajuste vos messages pour améliorer leur apparence et leur grammaire. Voir les paramètres.",
            option: {
                quickDisable: {
                    label: "Désactivation rapide",
                    description: "Désactive la modification des messages sans recharger le client."
                },
                blockedWords: {
                    label: "Mots bloqués",
                    description: "Mots qui ne seront pas mis en majuscules (séparés par des virgules)."
                },
                fixApostrophes: {
                    label: "Corriger les apostrophes",
                    description: "S'assure que les contractions contiennent des apostrophes."
                },
                expandContractions: {
                    label: "Développer les contractions",
                    description: "Développer les formes contractées"
                },
                fixCapitalization: {
                    label: "Corriger la capitalisation",
                    description: "Met une majuscule en début de phrase."
                },
                fixPunctuation: {
                    label: "Corriger la ponctuation",
                    description: "Corrige les espaces autour de la ponctuation."
                },
                fixPunctuationFrequency: {
                    label: "Fréquence des points",
                    description: "Pourcentage de fréquence des points finaux (peut en agacer certains)."
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Permet de prévisualiser votre message avant de l'envoyer.",
            tooltip: "Prévisualiser le message"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Permet d'enregistrer et de charger différents préréglages de profil.",
            toast: {
                importFailed: "Impossible d'importer les préréglages. Le fichier est peut-être invalide.",
            },
            option: {
                avatarSize: {
                    label: "Taille d'avatar",
                    description: "Taille de l'avatar dans la liste des préréglages"
                }
            },
            modal: {
                override: "Écraser",
                merge: "Fusionner",
                cancel: "Annuler",
                timestamp: "le {{formattedDate}} à {{formattedTime}}",
                rename: "Renommer",
                update: "Mettre à jour",
                moveUp: "Monter",
                moveDown: "Descendre",
                moveTo: "Aller à la page 1",
                delete: "Supprimer",
                importProfiles: "Importer des profils",
                importText: "Vous avez {{existingCount}} profils existants. Voulez-vous les écraser veya fusionner avec les nouveaux ?",
                heading: "Profils sauvegardés",
                searchProfiles: "Rechercher un profil...",
                profileName: "Nom du profil",
                saving: "Enregistrement...",
                save: "Sauvegarder le profil",
                cancelSearch: "Annuler la recherche",
                search: "Rechercher",
                random: "Aléatoire",
                import: "Importer",
                exportAll: "Tout exporter"
            },
            text: {
                selectAServer: "Choisir un serveur",
                profileSets: "Ensembles de profils",
                youAreNotIn: "Tu n'es encore sur aucun serveur.",
                mainProfile: "Profil principal",
                serverProfiles: "Profils de serveur",
                openProfileSets: "Ouvrir les ensembles de profils"
            }
        },
        questify: {
            name: "Questify",
            description: "Améliorez certaines fonctionnalités des quêtes, désactivez les éléments gênants ou supprimez complètement les quêtes.",
            quests: "Quêtes",
            context: {
                quest: {
                    label: "Menu du bouton des quêtes",
                    ignore: "Tout marquer comme ignoré",
                    reset: "Réinitialiser la liste des ignorées",
                    fetch: "Récupérer les quêtes",
                    markAsIgnored: "Marquer comme ignorée",
                    unmarkAsIgnored: "Ne plus ignorer",
                    stopAuto: "Arrêter l'auto-complétion",
                    startAuto: "Lancer l'auto-complétion",
                    copyQuestID: "Copier l'ID de la quête",
                    pauseAutoEnrollment: "Suspendre l'inscription automatique",
                    unpauseAutoEnrollment: "Reprendre l'inscription automatique",
                    pauseAutoProcessing: "Suspendre le traitement automatique",
                    unpauseAutoProcessing: "Reprendre le traitement automatique"
                }
            },
            button: {
                completing: "Complétion...",
                completingWithTime: "Complétion ({{time}})",
                completingIn: "Complétion dans {{time}}",
                queued: "En file d'attente ({{position}})",
                resuming: "Reprise...",
                completeNow: "Compléter maintenant",
                complete: "Compléter ({{time}})",
                resume: "Reprendre ({{time}})",
                completed: "Complétée"
            },
            reward: {
                orbs: "{{status}} pour {{orbQuantity}} Orbs.",
                article: "{{status}} pour {{itemName}}.",
                unrecognized: "{{status}} pour une récompense non reconnue."
            },
            toast: {
                autoCompleteBroken: "L'auto-complétion est cassée. Un correctif arrivera bientôt.",
                enrollmentFailed: "L'inscription à la quête {{questName}} a échoué.",
                enrollmentInNormalizequestnameQuest: "Échec de l'inscription à la quête {{normalizeQuestName_quest}}{{rateLimitSuffix}}.",
                automationUnlocked: "Automatisation des quêtes déverrouillée.",
                automationLocked: "Automatisation des quêtes verrouillée."
            },
            notification: {
                completed: {
                    title: "Quête complétée !",
                    body: "La quête {{questName}} est complétée."
                },
                newQuest: {
                    title: "Nouvelle quête détectée !",
                    body: "La quête {{questName}} est maintenant disponible."
                },
                newQuests: {
                    title: "Nouvelles quêtes détectées !",
                    body: "{{count}} nouvelles quêtes sont maintenant disponibles."
                },
                newExcludedQuest: {
                    title: "Nouvelle quête exclue détectée !",
                    body: "La quête exclue {{questName}} a été détectée. ID : {{questId}}"
                },
                newExcludedQuests: {
                    title: "Nouvelles quêtes exclues détectées !",
                    body: "{{count}} nouvelles quêtes exclues ont été détectées. Consultez la console pour leurs ID."
                }
            },
            alert: {
                restart: {
                    title: "Redémarrage requis",
                    body: "Une modification apportée aux paramètres de Questify nécessite un redémarrage.",
                    confirm: "Redémarrer",
                    cancel: "Plus tard"
                },
                dangerous: {
                    title: "Êtes-vous sûr ?",
                    confirm: "Continuer",
                    cancel: "Annuler",
                    disableEverything: "Cela désactivera complètement les fonctionnalités des quêtes.",
                    allowDangerous: "Cela autorisera la modification de paramètres dangereux."
                }
            },
            status: {
                unclaimed: "NON RÉCLAMÉE",
                claimed: "Réclamée",
                ignored: "Ignorée",
                expired: "Expirée"
            },
            questTypes: {
                watchVideo: "Regarder une vidéo",
                watchVideoOnMobile: "Regarder une vidéo sur mobile",
                achievementInActivity: "Succès dans une activité",
                achievementInGame: "Succès en jeu",
                playActivity: "Jouer à une activité",
                playOnDesktop: "Jouer sur ordinateur",
                playOnDesktopV2: "Jouer sur ordinateur V2",
                streamOnDesktop: "Streamer sur ordinateur",
                playOnPlayStation: "Jouer sur PlayStation",
                playOnXbox: "Jouer sur Xbox"
            },
            settings: {
                questButton: {
                    title: "Bouton des quêtes",
                    description: "Affiche un bouton des quêtes dans la liste des serveurs avec un indicateur optionnel pour les quêtes non réclamées et non ignorées.",
                    behavior: "Comportement du bouton",
                    leftClick: "Action du clic gauche :",
                    middleClick: "Action du clic central :",
                    rightClick: "Action du clic droit :",
                    visibility: "Visibilité du bouton :",
                    visibilityTooltip: "Toujours affiche le bouton des quêtes tant que cette fonctionnalité est activée.\n\nNon réclamée ne l'affiche que lorsque vous avez des récompenses de quête pertinentes non réclamées.\n\nJamais masque le bouton des quêtes.",
                    unclaimedIndicator: "Indicateur non réclamé :",
                    unclaimedIndicatorTooltip: "Pastille affiche le marqueur de type non lu de Discord à côté du bouton des quêtes.\n\nBadge affiche le nombre de récompenses de quête pertinentes non réclamées.\n\nLes deux affiche la pastille et le badge ensemble.\n\nAucun masque les indicateurs.",
                    badgeColor: "Couleur du badge :",
                    relevancy: "Pertinence des quêtes",
                    includedRewardTypes: "Types de récompenses inclus :",
                    includedRewardTypesTooltip: "Ne compter comme non réclamées que les quêtes avec ces types de récompenses pour la visibilité du bouton, le nombre du badge et le comportement des alertes.",
                    includedQuestTypes: "Types de quêtes inclus :",
                    includedQuestTypesTooltip: "Ne compter comme non réclamées que les quêtes avec ces types de tâches pour la visibilité du bouton, le nombre du badge et le comportement des alertes.",
                    display: {
                        always: "Toujours",
                        unclaimed: "Non réclamée",
                        never: "Jamais"
                    },
                    indicator: {
                        pill: "Pastille",
                        badge: "Badge",
                        both: "Les deux",
                        none: "Aucun"
                    },
                    action: {
                        openQuests: "Ouvrir les quêtes",
                        contextMenu: "Menu contextuel",
                        pluginSettings: "Paramètres du plugin",
                        nothing: "Rien"
                    },
                    rewardTypes: {
                        orbs: "Orbs",
                        nitroCodes: "Codes Nitro",
                        rewardCodes: "Codes de récompense",
                        inGameItems: "Objets en jeu",
                        profileCollectibles: "Objets de collection de profil"
                    }
                },
                questFeatures: {
                    title: "Fonctionnalités des quêtes",
                    description: "Modifiez le comportement des quêtes pour ajouter ou retirer des fonctionnalités.",
                    disableFeatures: "Désactiver des fonctionnalités",
                    disableEverything: "Désactiver complètement les fonctionnalités des quêtes :",
                    disableEverythingTooltip: "Cela désactive toutes les améliorations du plugin, masque la page des quêtes et les éléments de quête dans Discord, et empêche Discord de récupérer les données des quêtes. La boutique n'est pas affectée, car les Orbs y sont trop intimement liés en tant que monnaie secondaire.",
                    disableSpecific: "Désactiver des fonctionnalités spécifiques :",
                    disableSpecificTooltip: "La bannière sponsorisée est une bannière de quête payante en haut de la page des quêtes.\n\nLes avis de déplacement sont des indicateurs, comme sur la page Découvrir, signalant que les quêtes ont été déplacées dans les MP.\n\nLa promo de la liste d'amis est une carte affichée dans la section \"En ligne maintenant\" de votre liste d'amis lorsqu'un utilisateur avec qui vous partagez un serveur joue à un jeu ayant une quête active.\n\nLa promo de la liste des membres est une icône affichée sur les membres de la liste d'un serveur lorsqu'ils jouent à un jeu ayant une quête active.\n\nLa promo du panneau de compte est une promotion de quête payante affichée au-dessus de votre panneau de compte.\n\nLa progression du panneau de compte est la progression de la quête active ou complétée affichée au-dessus de votre panneau de compte.\n\nLes badges Quête & Orbs sont des badges sur les profils indiquant que quelqu'un a complété au moins une quête ou acheté le badge Orbs.",
                    disableOptions: {
                        sponsoredBanner: "Bannière sponsorisée",
                        relocationNotices: "Avis de déplacement",
                        friendsListPromo: "Promo de la liste d'amis",
                        membersListPromo: "Promo de la liste des membres",
                        accountPanelPromo: "Promo du panneau de compte",
                        accountPanelProgress: "Progression du panneau de compte",
                        orbsAndQuestsBadges: "Badges Quête & Orbs"
                    },
                    modifyFeatures: "Modifier des fonctionnalités",
                    warningTos: "Discord a commencé à avertir les utilisateurs de scripts ou de plugins qui modifient la façon dont les quêtes sont complétées, ce qui est contraire à ses {{tos}}.",
                    tos: "Conditions d'utilisation",
                    warningEscalate: "Les avertissements semblent se limiter à la menace de perdre l'accès aux quêtes ou à leurs récompenses, mais Discord peut durcir sa position à tout moment.",
                    warningDetection: "En raison des diverses méthodes utilisées par Discord pour suivre les utilisateurs, il n'existe aucun moyen réaliste d'échapper à la détection. Si vous continuez, sachez que Discord le détectera probablement à un moment donné.",
                    warningRisk: "Utilisez le bouton suivant pour accéder à des paramètres potentiellement dangereux à vos propres risques.",
                    allowDangerous: "Autoriser la modification des paramètres dangereux...",
                    disallowDangerous: "Réinitialiser et interdire la modification des paramètres dangereux...",
                    completeVideoQuicker: "Accélérer l'auto-complétion des quêtes vidéo :",
                    completeVideoQuickerTooltip: "Discord permet de compléter les quêtes vidéo une fois qu'une durée égale à celle de la vidéo moins 24 secondes s'est écoulée depuis votre inscription.\n\nAinsi, si une quête vidéo dure 24 secondes ou moins, ou si vous vous inscrivez et revenez plus tard pour la compléter, elle peut être complétée immédiatement.\n\nCe paramètre ne s'applique qu'à l'auto-complétion des quêtes vidéo et dépend du paramètre d'auto-complétion ci-dessous. La complétion manuelle nécessite toujours d'attendre la durée complète et ne dépend pas de la date d'inscription.",
                    mobileDesktop: "Rendre certaines quêtes vidéo mobiles complétables sur ordinateur :",
                    mobileDesktopTooltip: "Certaines quêtes vidéo réservées au mobile permettent l'inscription sur ordinateur mais doivent tout de même être complétées sur mobile. Ce paramètre permet de les compléter sur ordinateur.\n\nCertaines quêtes vidéo réservées au mobile ne permettent l'inscription que sur mobile. Pour que ce paramètre les affecte, vous devez vous y inscrire sur votre appareil mobile avant de revenir sur ordinateur et d'actualiser vos quêtes.\n\nActivé seul, ce paramètre ne s'applique qu'à la complétion manuelle des quêtes vidéo. L'auto-complétion des quêtes vidéo mobiles depuis l'ordinateur dépend du paramètre d'auto-complétion ci-dessous et active implicitement ce paramètre.",
                    simultaneous: "Auto-compléter les quêtes simultanément plutôt que successivement :",
                    simultaneousTooltip: "Par défaut, l'auto-complétion de plusieurs quêtes les place dans une file pour être complétées dans l'ordre.\n\nCe paramètre permet à la place d'exécuter toutes les quêtes en auto-complétion en même temps.\n\nCe paramètre ne s'applique qu'à l'auto-complétion et dépend du paramètre d'auto-complétion ci-dessous.",
                    resumeInterrupted: "Reprendre les auto-complétions interrompues après un rechargement ou un redémarrage :",
                    resumeInterruptedTooltip: "Ce paramètre reprend automatiquement les auto-complétions interrompues par des rechargements ou des redémarrages, y compris la remise en file des quêtes qui étaient en attente mais n'avaient pas encore commencé.",
                    autoProcess: "Traiter automatiquement les quêtes compatibles pour l'auto-complétion :",
                    autoProcessTooltip: "Complète les quêtes éligibles, non réclamées, non ignorées et non expirées incluses par vos filtres de récompense et de type de quête, détectées pendant que Discord est ouvert. Seuls les types de tâches pris en charge activés ci-dessous sont inclus.\n\nS'inscrit automatiquement aux quêtes compatibles avant de les mettre en file pour l'auto-complétion. Attend les délais de limitation connus. S'arrête en cas d'erreur inconnue, de limitation sans délai de nouvelle tentative ou d'échecs d'inscription répétés.",
                    autoEnroll: "S'inscrire automatiquement aux quêtes compatibles.",
                    autoEnrollTooltip: "S'inscrit aux quêtes éligibles, non réclamées, non ignorées et non expirées incluses par vos filtres de récompense et de type de quête, détectées pendant que Discord est ouvert.\n\nS'inscrit aux quêtes sans les mettre en file pour l'auto-complétion. Attend les délais de limitation connus. S'arrête en cas d'erreur inconnue, de limitation sans délai de nouvelle tentative ou d'échecs d'inscription répétés.",
                    autoCompleteTypes: "Auto-compléter certains types de quêtes :",
                    autoCompleteTypesTooltip: "Les quêtes \"Regarder une vidéo sur mobile\" ne fonctionnent qu'avec les quêtes mobiles permettant l'inscription sur ordinateur. Si l'inscription est limitée au mobile, vous devez d'abord vous inscrire sur votre appareil mobile avant de revenir sur ordinateur et d'actualiser vos quêtes.\n\nToutes les quêtes liées aux vidéos envoient habituellement une trace de pile avec les rapports de progression. Discord sait donc exactement quelles fonctions ont été appelées et peut vérifier que ses propres fonctions ont initié la progression. Questify efface cette trace, mais son absence est tout aussi révélatrice que sa présence.\n\nLes quêtes \"Jouer sur ordinateur\", \"Jouer sur PlayStation\", \"Jouer sur Xbox\", \"Jouer à une activité\" et \"Succès dans une activité\" ne sont disponibles que sur les clients de bureau officiels en raison d'une limitation imposée par Discord. Les clients tiers comme les extensions web, Plextron et d'autres ne prennent pas en charge leur auto-complétion.\n\nToutes les quêtes liées aux jeux envoient habituellement une empreinte du jeu avec les rapports de heartbeat. Discord peut ainsi utiliser les données de dizaines de milliers d'utilisateurs pour déterminer si d'autres utilisent probablement un vrai jeu ou émulent l'exécutable. Il n'existe aucune méthode raisonnable pour falsifier cette valeur ; Questify la laisse donc vide, mais son absence est tout aussi révélatrice qu'une mauvaise falsification.\n\nL'auto-complétion démarre depuis les boutons de quête de la page des quêtes ou via le traitement automatique. Les quêtes sont complétées dans l'ordre de mise en file, sauf si la complétion simultanée est activée ci-dessus.\n\nL'auto-complétion des quêtes est le paramètre dangereux le plus risqué. Activez-le à vos propres risques."
                },
                questNotifications: {
                    title: "Notifications des quêtes",
                    description: "Configurez les notifications et alertes de quêtes complétées et de nouvelles quêtes détectées.",
                    questCompleted: "Quête complétée",
                    notifyOnComplete: "Afficher une notification lorsqu'une quête est complétée :",
                    soundOnComplete: "Jouer un son lorsqu'une quête est complétée :",
                    volume: "Volume :",
                    newQuests: "Nouvelles quêtes détectées",
                    notifyOnNew: "Afficher une notification lorsque de nouvelles quêtes sont détectées :",
                    soundOnNew: "Jouer un son lorsque de nouvelles quêtes sont détectées :",
                    notifyOnNewExcluded: "Afficher une notification lorsque de nouvelles quêtes exclues sont détectées :",
                    notifyOnNewExcludedTooltip: "Certaines quêtes sont exclues de votre liste de quêtes disponibles en raison de restrictions régionales ou de plateforme.\n\nLorsque cette option est activée, Questify récupère leurs configurations, applique vos filtres de types de quêtes et de récompenses, affiche les données résolues des quêtes exclues dans la console et montre une notification distincte pour les quêtes exclues correspondantes.",
                    soundOnNewExcluded: "Jouer un son lorsque de nouvelles quêtes exclues sont détectées :",
                    soundOnNewExcludedTooltip: "Certaines quêtes sont exclues de votre liste de quêtes disponibles en raison de restrictions régionales ou de plateforme.\n\nLorsqu'un son est sélectionné, Questify récupère leurs configurations, applique vos filtres de types de quêtes et de récompenses, affiche les données résolues des quêtes exclues dans la console et joue ce son pour les quêtes exclues correspondantes.",
                    fetchInterval: "Intervalle de récupération des quêtes :",
                    fetchIntervalTooltip: "Discord ne récupère les quêtes qu'au chargement et lorsque vous visitez la page des quêtes.\n\nCet intervalle récupère périodiquement les quêtes tant que le client reste ouvert, afin que les indicateurs du bouton des quêtes et les alertes de nouvelles quêtes restent à jour tout au long de la journée.\n\nCela ne fonctionne que s'il est activé et si les paramètres du bouton ou des notifications des quêtes rendent une récupération périodique utile.",
                    disabled: "DÉSACTIVÉ",
                    preview: "Écouter {{sound}}",
                    intervals: {
                        thirtyMinutes: "30 minutes",
                        fortyFiveMinutes: "45 minutes",
                        oneHour: "1 heure",
                        threeHours: "3 heures",
                        sixHours: "6 heures",
                        twelveHours: "12 heures"
                    }
                },
                questTiles: {
                    title: "Tuiles des quêtes",
                    description: "Mettez en évidence les quêtes avec des couleurs de thème optionnelles pour plus de visibilité.",
                    behavior: "Comportement des tuiles",
                    gradientStyle: "Style du dégradé :",
                    gradientStyleTooltip: "Intense et Par défaut utilisent la couleur de tuile choisie dans le dégradé de l'image.\n\nNoir subtil conserve un dégradé neutre plus sombre pour le contraste.\n\nAucun dégradé supprime le dégradé de l'image, ce qui peut rendre certaines illustrations de quête plus difficiles à lire.",
                    assetPreload: "Préchargement des ressources :",
                    assetPreloadTooltip: "Charger toutes les ressources à l'ouverture de la page des quêtes réduit les décalages de mise en page lors du défilement.\n\nCharger pendant le défilement est plus proche du comportement par défaut de Discord et demande moins de travail au départ.",
                    colors: "Couleurs des tuiles",
                    enable: "Activer",
                    disable: "Désactiver",
                    gradient: {
                        intense: "Dégradé de restylage intense",
                        default: "Dégradé de restylage par défaut",
                        black: "Dégradé noir subtil",
                        hide: "Aucun dégradé"
                    },
                    preload: {
                        onLoad: "Charger toutes les ressources au chargement de la page",
                        onScroll: "Charger les ressources pendant le défilement"
                    }
                },
                reorderQuests: {
                    title: "Réorganiser les quêtes",
                    description: "Trier les quêtes par statut quand le tri Questify est sélectionné sur la page des quêtes. Les statuts masqués sont filtrés quel que soit le tri.",
                    statusOrder: "Ordre des statuts",
                    statusOrderTooltip: "Chaque statut ne peut apparaître qu'une fois. Sélectionner un statut déjà utilisé à une autre position échange les deux positions.",
                    positions: {
                        first: "Premier :",
                        second: "Deuxième :",
                        third: "Troisième :",
                        fourth: "Quatrième :"
                    },
                    subsorts: "Sous-tris",
                    unclaimedSubsort: "Sous-tri des non réclamées :",
                    unclaimedSubsortTooltip: "Les quêtes complétées mais non réclamées restent sous les quêtes non réclamées incomplètes, puis ce sous-tri est appliqué au sein de ces groupes.",
                    claimedSubsort: "Sous-tri des réclamées :",
                    claimedSubsortTooltip: "Les quêtes réclamées peuvent être triées par date de réclamation ou par date d'ajout.",
                    ignoredSubsort: "Sous-tri des ignorées :",
                    ignoredSubsortTooltip: "Les quêtes ignorées conservent la position de leur groupe, puis ce sous-tri détermine leur ordre au sein de ce groupe.",
                    expiredSubsort: "Sous-tri des expirées :",
                    expiredSubsortTooltip: "Les quêtes expirées peuvent être triées par date d'expiration ou par date d'ajout.",
                    subsort: {
                        addedNewest: "Ajout (plus récentes)",
                        addedOldest: "Ajout (plus anciennes)",
                        expiringSoonest: "Expiration (plus proche)",
                        expiringLatest: "Expiration (plus lointaine)",
                        expiredMostRecent: "Expirées (plus récentes)",
                        expiredLeastRecent: "Expirées (plus anciennes)",
                        claimedMostRecent: "Réclamées (plus récentes)",
                        claimedLeastRecent: "Réclamées (plus anciennes)"
                    },
                    memory: "Mémoire de la page des quêtes",
                    rememberSort: "Mémoriser le tri sélectionné de la page des quêtes :",
                    rememberSortTooltip: "Si désactivé, la page des quêtes s'ouvre à chaque fois avec l'option de tri Questify.",
                    rememberFilters: "Mémoriser les filtres sélectionnés de la page des quêtes :",
                    rememberFiltersTooltip: "Si désactivé, la page des quêtes s'ouvre à chaque fois sans filtre de tâche ou de récompense."
                }
            },
            option: {
                migrationVersion: {
                    label: "Version de migration",
                    description: "La version de migration actuelle des paramètres."
                },
                questFeatures: {
                    label: "Fonctionnalités des quêtes",
                    description: "Sélectionnez les fonctionnalités des quêtes à désactiver."
                },
                disableQuestsEverything: {
                    label: "Tout désactiver",
                    description: "Désactive toutes les fonctionnalités des quêtes."
                },
                disableRelocationNotices: {
                    label: "Désactiver les avis de déplacement",
                    description: "Désactive les avis de déplacement des quêtes sur la page Découvrir."
                },
                disableSponsoredBanner: {
                    label: "Désactiver la bannière sponsorisée",
                    description: "Désactive la bannière sponsorisée sur la page des quêtes."
                },
                disableAccountPanelPromo: {
                    label: "Désactiver la promo du panneau de compte",
                    description: "Désactive la fenêtre de quête promue au-dessus de votre panneau de compte."
                },
                disableAccountPanelQuestProgress: {
                    label: "Désactiver la progression du panneau de compte",
                    description: "Désactive la progression des quêtes actives et complétées au-dessus de votre panneau de compte."
                },
                disableOrbsAndQuestsBadges: {
                    label: "Désactiver les badges Quête & Orbs",
                    description: "Désactive le badge de quête sur les profils."
                },
                disableFriendsListPromo: {
                    label: "Désactiver la promo de la liste d'amis",
                    description: "Désactive la promotion des quêtes pour les jeux auxquels jouent vos amis."
                },
                disableMembersListPromo: {
                    label: "Désactiver la promo de la liste des membres",
                    description: "Désactive l'icône de jeu en cours dans la liste des membres."
                },
                allowChangingDangerousSettings: {
                    label: "Autoriser les paramètres dangereux",
                    description: "Autorise la modification de paramètres dangereux."
                },
                resumeInterruptedQuests: {
                    label: "Reprendre les quêtes interrompues",
                    description: "Reprend l'auto-complétion des quêtes après un rechargement ou un redémarrage."
                },
                makeMobileVideoQuestsDesktopCompatible: {
                    label: "Rendre les quêtes vidéo mobiles compatibles ordinateur",
                    description: "Rend les quêtes vidéo réservées au mobile compatibles avec l'ordinateur."
                },
                autoCompleteQuestsSimultaneously: {
                    label: "Auto-compléter simultanément",
                    description: "Complète les quêtes simultanément plutôt que successivement."
                },
                completeVideoQuestsQuicker: {
                    label: "Compléter les quêtes vidéo plus vite",
                    description: "Utilise la tolérance de progression de Discord et le temps écoulé depuis l'inscription pour l'auto-complétion des quêtes vidéo."
                },
                autoCompleteQuestTypes: {
                    label: "Types de quêtes à auto-compléter",
                    description: "Les types de quêtes à auto-compléter en arrière-plan."
                },
                questButton: {
                    label: "Bouton des quêtes",
                    description: "Personnalisez le bouton des quêtes dans la liste des serveurs."
                },
                questButtonDisplay: {
                    label: "Affichage du bouton des quêtes",
                    description: "Le type d'affichage du bouton des quêtes dans la liste des serveurs."
                },
                questButtonIncludedTypes: {
                    label: "Types inclus du bouton des quêtes",
                    description: "Les types de récompenses et de quêtes à inclure dans le décompte affiché sur le bouton des quêtes."
                },
                questButtonIndicator: {
                    label: "Indicateur du bouton des quêtes",
                    description: "Le type d'affichage de l'indicateur non réclamé sur le bouton des quêtes."
                },
                questButtonBadgeCount: {
                    label: "Nombre du badge",
                    description: "Le nombre actuel de quêtes pertinentes non réclamées."
                },
                questButtonBadgeColor: {
                    label: "Couleur du badge",
                    description: "La couleur du badge du bouton des quêtes dans la liste des serveurs."
                },
                questButtonLeftClickAction: {
                    label: "Action du clic gauche",
                    description: "L'action à effectuer lors d'un clic gauche sur le bouton des quêtes."
                },
                questButtonMiddleClickAction: {
                    label: "Action du clic central",
                    description: "L'action à effectuer lors d'un clic central sur le bouton des quêtes."
                },
                questButtonRightClickAction: {
                    label: "Action du clic droit",
                    description: "L'action à effectuer lors d'un clic droit sur le bouton des quêtes."
                },
                questNotifications: {
                    label: "Notifications des quêtes",
                    description: "Configurez les notifications de quêtes complétées et de nouvelles quêtes détectées."
                },
                notifyOnQuestComplete: {
                    label: "Notifier à la complétion",
                    description: "Affiche une notification lorsqu'une quête est complétée."
                },
                notifyOnNewQuests: {
                    label: "Notifier les nouvelles quêtes",
                    description: "Affiche une notification lorsque de nouvelles quêtes sont détectées."
                },
                notifyOnNewExcludedQuests: {
                    label: "Notifier les nouvelles quêtes exclues",
                    description: "Affiche une notification lorsque de nouvelles quêtes exclues sont détectées."
                },
                questCompletedAlertSound: {
                    label: "Son de quête complétée",
                    description: "Le son joué lorsqu'une quête est complétée."
                },
                questCompletedAlertVolume: {
                    label: "Volume de quête complétée",
                    description: "Le volume du son de quête complétée."
                },
                questFetchInterval: {
                    label: "Intervalle de récupération",
                    description: "L'intervalle en secondes de récupération des quêtes depuis Discord."
                },
                newQuestAlertSound: {
                    label: "Son de nouvelle quête",
                    description: "Le son joué lorsque de nouvelles quêtes sont détectées."
                },
                newQuestAlertVolume: {
                    label: "Volume de nouvelle quête",
                    description: "Le volume du son de nouvelle quête."
                },
                newExcludedQuestAlertSound: {
                    label: "Son de nouvelle quête exclue",
                    description: "Le son joué lorsque de nouvelles quêtes exclues sont détectées."
                },
                newExcludedQuestAlertVolume: {
                    label: "Volume de nouvelle quête exclue",
                    description: "Le volume du son de nouvelle quête exclue."
                },
                questTiles: {
                    label: "Tuiles des quêtes",
                    description: "Personnalisez l'apparence des tuiles de quête sur la page des quêtes."
                },
                questTileUnclaimedColor: {
                    label: "Couleur des tuiles non réclamées",
                    description: "La couleur des tuiles de quêtes non réclamées."
                },
                questTileClaimedColor: {
                    label: "Couleur des tuiles réclamées",
                    description: "La couleur des tuiles de quêtes réclamées."
                },
                questTileIgnoredColor: {
                    label: "Couleur des tuiles ignorées",
                    description: "La couleur des tuiles de quêtes ignorées."
                },
                questTileExpiredColor: {
                    label: "Couleur des tuiles expirées",
                    description: "La couleur des tuiles de quêtes expirées."
                },
                questTileGradient: {
                    label: "Dégradé des tuiles",
                    description: "Le style du dégradé utilisé dans les tuiles de quête."
                },
                questTilePreload: {
                    label: "Préchargement des tuiles",
                    description: "Tente de précharger les ressources des tuiles de quête."
                },
                reorderQuests: {
                    label: "Réorganiser les quêtes",
                    description: "Trie les quêtes par statut."
                },
                questOrder: {
                    label: "Ordre des quêtes",
                    description: "L'ordre de tri des groupes de statut des quêtes."
                },
                unclaimedSubsort: {
                    label: "Sous-tri des non réclamées",
                    description: "Méthode de sous-tri des quêtes non réclamées."
                },
                claimedSubsort: {
                    label: "Sous-tri des réclamées",
                    description: "Méthode de sous-tri des quêtes réclamées."
                },
                ignoredSubsort: {
                    label: "Sous-tri des ignorées",
                    description: "Méthode de sous-tri des quêtes ignorées."
                },
                expiredSubsort: {
                    label: "Sous-tri des expirées",
                    description: "Méthode de sous-tri des quêtes expirées."
                },
                isOnQuestsPage: {
                    label: "Sur la page des quêtes",
                    description: "Indique si l'utilisateur est actuellement sur la page des quêtes."
                },
                rememberQuestPageSort: {
                    label: "Mémoriser le tri",
                    description: "Mémorise le dernier tri utilisé sur la page des quêtes."
                },
                rememberQuestPageFilters: {
                    label: "Mémoriser les filtres",
                    description: "Mémorise les derniers filtres utilisés sur la page des quêtes."
                },
                lastQuestPageSort: {
                    label: "Dernier tri",
                    description: "Le dernier tri utilisé sur la page des quêtes."
                },
                lastQuestPageFilters: {
                    label: "Derniers filtres",
                    description: "Les derniers filtres utilisés sur la page des quêtes."
                },
                ignoredQuestIDs: {
                    label: "ID des quêtes ignorées",
                    description: "Une liste des ID de quêtes ignorées."
                },
                resumeQuestIDs: {
                    label: "ID des quêtes à reprendre",
                    description: "Une liste des ID de quêtes en cours d'auto-complétion ou en file d'attente en arrière-plan."
                },
                acknowledgedNotices: {
                    description: "Avis ponctuels que l'utilisateur a acceptés.",
                    label: "Avis acceptés"
                },
                settingsSearch: {
                    description: "Rechercher dans les paramètres de Questify.",
                    label: "Recherche de paramètres"
                },
                hideNonAutoCompletableQuests: {
                    description: "Masquer les quêtes incomplètes sans tâche d'achèvement automatique prise en charge et activée.",
                    label: "Masquer les quêtes non achevables automatiquement"
                },
                preventVideoQuestsPausing: {
                    description: "Empêcher la mise en pause de la vidéo quand la fenêtre de quête perd le focus.",
                    label: "Empêcher la pause des quêtes vidéo"
                },
                hiddenQuestStatuses: {
                    description: "Groupes de statuts de quête à masquer.",
                    label: "Statuts de quête masqués"
                },
                autoEnrollQuests: {
                    label: "Inscription automatique aux quêtes",
                    description: "S'inscrire automatiquement aux quêtes disponibles éligibles lors des récupérations réussies pendant que Discord est ouvert."
                },
                autoCompleteQuests: {
                    label: "Complétion automatique des quêtes",
                    description: "S'inscrire automatiquement aux quêtes disponibles éligibles avec des types de tâches pris en charge et activés, puis les compléter, lors des récupérations réussies pendant que Discord est ouvert."
                }
            },
            text: {
                clearQuestQueue: "Vider la file des quêtes",
                hideIncompleteQuestsWith: "Masquer les quêtes incomplètes au statut non réclamé ou ignoré quand aucune tâche d'achèvement automatique n'est prise en charge sur cette plateforme et activée dans la liste des types de quête. Les quêtes réclamées, expirées et terminées sont exclues. Utilise les options d'ordre des statuts masqués pour masquer celles-ci.",
                discordForcesYouTo: "Discord t'oblige à garder le client au premier plan pour que les quêtes vidéo lisent leur vidéo.",
                hideNonAutoCompletable: "Masquer les quêtes non achevables automatiquement :",
                preventVideoQuestsFrom: "Empêcher les quêtes vidéo de se mettre en pause en cas de perte de focus :",
                thePunishmentAlsoConsists: "La sanction comprend aussi une infraction à l'état du compte qui dure 2 ans par infraction.",
                dueToTheVarious: "En raison des diverses méthodes de suivi utilisées par Discord, il n'existe aucun moyen réaliste d'échapper à la détection. Si tu continues, sache que Discord détectera probablement ton utilisation à un moment donné.",
                enrollInQuest: "S'inscrire à la quête",
                hidden: "Masqué",
                selectingAnOccupiedPosition: "Choisir une position occupée échange les deux statuts. Les statuts masqués sont retirés des listes de quêtes.",
                searchQuestifySettings: "Rechercher dans les paramètres de Questify",
                searchQuestifySettings2: "Rechercher dans les paramètres de Questify...",
                noMatchingSettings: "Aucun paramètre correspondant.",
                questifyNoticeAugust7th: "Avis Questify – 7 août 2026",
                keepUsingDangerousQuestify: "Continuer à utiliser les paramètres dangereux de Questify",
                disableDangerousQuestifySettings: "Désactiver les paramètres dangereux de Questify",
                questifyNoticeAugust26th: "Avis Questify – 26 août 2026",
                areYouSure: "Es-tu sûr ?",
                thePunishmentAppearsLimited: "La sanction semble se limiter à la perte d'accès aux quêtes et à leurs récompenses, mais Discord peut la durcir à tout moment.",
                queueAllQuests: "Mettre toutes les quêtes en file",
                inProgress: "En cours",
                rateLimited: "Limité",
                preventsVideoPausing: "Ce paramètre empêche la vidéo de se mettre en pause et permet à la progression d'avancer normalement.",
                appliesOnlyToVideoQuests: "Ce paramètre s'applique uniquement à la complétion manuelle des quêtes vidéo.",
                knownToPunish: "Discord est connu pour sanctionner les utilisateurs de scripts ou de plugins qui modifient la complétion des quêtes. Modifier la complétion des quêtes va à l'encontre des",
                punishmentConsists: "La sanction consiste en une perte temporaire ou permanente de l'accès aux quêtes et à leurs récompenses.",
                questBanSystem: "Discord a mis en place un système de bannissement des quêtes qui limitera temporairement ou définitivement votre accès aux quêtes et à leurs récompenses s'il détecte que vous les complétez par des moyens non officiels. Modifier la complétion des quêtes va à l'encontre de leurs",
                begunPunishing: "Discord a commencé à sanctionner les utilisateurs de scripts et de plugins qui modifient la complétion des quêtes. Modifier la complétion des quêtes va à l'encontre de leurs",
                dueToRateLimits: " en raison des limites de débit"
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Remplace tous les points d'interrogation par une chaîne choisie si le message n'en contient que ça.",
            option: {
                replace: {
                    label: "Remplacer",
                    description: "Remplacer par"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Ajoute un bouton de mention rapide à la barre d'actions du message",
            tooltip: "Mention rapide"
        },
        quickReply: {
            name: "QuickReply",
            description: "Répondez (Ctrl+Haut/Bas) et éditez (Ctrl+Maj+Haut/Bas) les messages via des raccourcis clavier",
            option: {
                shouldMention: {
                    label: "Mentionner",
                    description: "Pinguer lors d'une réponse par défaut",
                    noReplyMentionPlugin: "Suivre le plugin NoReplyMention (si activé)",
                    enabled: "Activé",
                    disabled: "Désactivé"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignorer bloqués/ignorés",
                    description: "Ignore les messages des utilisateurs bloqués/ignorés lors de la navigation"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Changez rapidement de thème avec des raccourcis clavier.",
            about: {
                title: "Raccourcis",
                description: "Utilisez Ctrl/Cmd+Maj+Flèches pour naviguer (Gauche/Droite : cycle, Haut : activer, Bas : désactiver).",
                reload: "Appuyez sur Ctrl/Cmd+Maj+Alt pour recharger la liste des thèmes."
            },
            modal: {
                added: "{{count}} thème(s) ajouté(s)",
                removed: "{{count}} thème(s) supprimé(s)",
                reloaded: "{{themeCount}} thèmes rechargés",
                addedLocal: "{{count}} thème(s) local/locaux ajouté(s)",
                removedLocal: "{{count}} thème(s) local/locaux supprimé(s)",
            },
            option: {
                includeLocal: {
                    label: "Inclure thèmes locaux",
                    description: "Inclure les thèmes stockés localement"
                },
                includeOnline: {
                    label: "Inclure thèmes en ligne",
                    description: "Inclure les thèmes distants"
                },
                sortOrder: {
                    label: "Ordre de tri",
                    description: "Méthode de tri",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "Récent"
                },
                autoRefresh: {
                    label: "Rafraîchissement auto",
                    description: "Rafraîchir automatiquement la liste lors de changements détectés"
                },
                showNotifications: {
                    label: "Afficher notifications",
                    description: "Affiche une notification quand un thème est ajouté/supprimé"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Ajoute la possibilité de créer une image de citation inspirante à partir d'un message",
            context: {
                quote: "Citer (Image)"
            },
            modal: {
                title: "Prenez-les en 4k",
                grayscale: "Niveaux de gris",
                export: "Exporter",
                send: "Envoyer",
                saveAsGIF: "Sauvegarder en GIF",
                saveDescription: "Sauvegarde/Envoie l'image en GIF plutôt qu'en PNG",
                showWatermark: "Afficher le filigrane",
                watermarkText: "Texte du filigrane (max 32 car.)"
            },
            option: {
                quoteFont: {
                    label: "Police de citation",
                    description: "Police pour le texte (l'auteur utilise toujours M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Open Sans",
                    momoSignature: "Momo Signature",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Filigrane",
                    description: "Texte personnalisé pour le filigrane"
                },
                grayscale: {
                    label: "Niveaux de gris",
                    description: "Activer les niveaux de gris par défaut"
                },
                showWatermark: {
                    label: "Afficher filigrane",
                    description: "Afficher le filigrane par défaut"
                },
                saveAsGif: {
                    label: "Sauvegarder en GIF",
                    description: "Sauvegarder en GIF par défaut"
                }
            },
            text: {
                quotePreview: "Aperçu de la citation"
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Ajoute un bouton pour rejoindre un salon vocal aléatoire.",
            tooltip: "Vocal Aléatoire",
            context: {
                label: "Modificateur d'état vocal",
                amountLabel: "NB UTILISATEURS",
                spacesLabel: "PLACES LIBRES",
                voiceLabel: "LIMITE VOCALE",
                selfLabel: "MES PARAMÈTRES",
                select: {
                    servers: "Sélect. Serveurs",
                    list: "Sélect. Liste",
                    filters: "Sélect. Filtres",
                    amount: "Nombre d'utilisateurs",
                    userAmount: "{{amount}} utilisateur(s)",
                    parameters: "Paramètres",
                    selectAll: "Tout sélectionner",
                    reset: "Réinitialiser",
                    stateFilters: "Filtres d'état",
                    moreThan: "Plus de",
                    lessThan: "Moins de",
                    equalTo: "Égal à",
                    spaces: "Places libres",
                    voice: "Limite vocale"
                },
                filter: {
                    muted: "Muet",
                    deafened: "Sourdine",
                    camera: "Caméra",
                    stream: "Stream",
                    includeFilters: "Inclure filtres",
                    avoidFilters: "Éviter filtres"
                },
                reset: {
                    list: "Réinitialiser liste"
                },
                voice: {
                    label: "Options vocales",
                    joinSettings: "Paramètres de connexion",
                    auto: {
                        mute: "Muet auto",
                        deafen: "Sourdine auto",
                        camera: "Caméra auto",
                        stream: "Stream auto",
                        leaveWhenEmpty: "Quitter si vide",
                        navigate: "Navigation auto",
                        stage: "Éviter les Conférences",
                        afk: "Éviter l'AFK"
                    }
                },
                invalid: {
                    server: "Serveur invalide"
                }
            },
            keybind: {
                label: "Raccourci clavier",
                recording: "Enregistrement...",
                reset: "Réinitialiser"
            },
            option: {
                keybindEnabled: {
                    label: "Raccourci activé",
                    description: "Affiche les contrôles du raccourci de vocal aléatoire"
                },
                userAmountOperation: {
                    label: "Opération nombre d'utilisateurs",
                    description: "Choisit l'opération de comparaison pour le nombre d'utilisateurs"
                },
                userAmount: {
                    label: "Nombre d'utilisateurs",
                    description: "Sélectionne le nombre d'utilisateurs"
                },
                spacesLeftOperation: {
                    label: "Opération places libres",
                    description: "Choisit l'opération pour les places restantes"
                },
                spacesLeft: {
                    label: "Places libres",
                    description: "Sélectionne le nombre de places max"
                },
                vcLimitOperation: {
                    label: "Opération limite de salon",
                    description: "Opération pour la limite du salon vocal."
                },
                vcLimit: {
                    label: "Limite de salon vocal",
                    description: "Définit une limite de salon"
                },
                servers: {
                    label: "Serveurs",
                    description: "Serveurs inclus dans la recherche"
                },
                autoNavigate: {
                    label: "Navigation auto",
                    description: "Navigue automatiquement vers le salon vocal rejoint."
                },
                autoCamera: {
                    label: "Caméra auto",
                    description: "Active automatiquement la caméra"
                },
                autoStream: {
                    label: "Stream auto",
                    description: "Active automatiquement le stream"
                },
                selfMute: {
                    label: "Muet auto",
                    description: "Se met en muet lors de l'adhésion."
                },
                selfDeafen: {
                    label: "Sourdine auto",
                    description: "Se met en sourdine lors de l'adhésion."
                },
                leaveEmpty: {
                    label: "Quitter si vide",
                    description: "Recherche un nouvel appel si le salon actuel se vide."
                },
                prioritizeFriends: {
                    label: "Prioriser les amis",
                    description: "Préférer les salons où se trouvent vos amis si possible."
                },
                avoidStages: {
                    label: "Éviter les Conférences",
                    description: "Évite de rejoindre des salons de type Conférence."
                },
                avoidAfk: {
                    label: "Éviter l'AFK",
                    description: "Évite de rejoindre les salons AFK."
                },
                video: {
                    label: "Vidéo",
                    description: "Cherche des utilisateurs avec caméra active"
                },
                stream: {
                    label: "Stream",
                    description: "Cherche des utilisateurs en stream"
                },
                mute: {
                    label: "Muet",
                    description: "Cherche des utilisateurs en muet"
                },
                deafen: {
                    label: "Sourdine",
                    description: "Cherche des utilisateurs en sourdine"
                },
                includeStates: {
                    label: "Inclure filtres",
                    description: "Option pour inclure certains états"
                },
                avoidStates: {
                    label: "Éviter filtres",
                    description: "Option pour éviter certains états"
                }
            },
            alert: {
                failed: "Aucun salon vocal trouvé !"
            },
            toast: {
                failedToFindA: "Impossible de trouver un salon vocal.",
                voiceChannelIsUnavailable: "Salon vocal indisponible."
            },
            text: {
                userCount: "{{count}} utilisateur",
                usersCount: "{{count}} utilisateurs"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Décode les codes d'erreur React en messages compréhensibles."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Marque toutes les notifications comme lues en un seul clic !",
            button: "Tout lire"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Passez d'un MP récent à l'autre avec Ctrl+Tab (Ctrl+Maj+Tab pour l'inverse)",
            option: {
                visualStyle: {
                    label: "Style visuel",
                    description: "Style de l'indicateur lors du cycle",
                    overlay: "Superposition (style Alt+Tab)",
                    toast: "Notification (message de statut)",
                    off: "Désactivé"
                },
                overlayMode: {
                    label: "Mode superposition",
                    description: "Contenu affiché",
                    row: "Rangée des récents",
                    current: "Uniquement l'actuel",
                },
                amountOfUsers: {
                    label: "Nombre d'utilisateurs",
                    description: "Nombre d'utilisateurs dans la superposition"
                },
                overlayRowLength: {
                    label: "Longueur de la rangée",
                    description: "Nombre de MP récents à afficher dans la rangée"
                },
                overlayShowAvatars: {
                    label: "Afficher avatars",
                    description: "Affiche les avatars dans la superposition"
                },
                toastDurationMs: {
                    label: "Durée notification (ms)",
                    description: "Durée du message de statut"
                },
                clearRdms: {
                    label: "Effacer liste RDMS",
                    description: "Outil de test : Efface l'historique des MP récents",
                    toast: "Historique RDMS effacé",
                    button: "Effacer l'historique RDMS"
                }
            },
            modal: {
                unknown: "Inconnu",
                dm: "MP",
                group: "Groupe MP",
                channel: "Salon",
                switchingTo: "Bascule vers : {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Vous avertit lorsqu'un ami, un groupe ou un serveur vous retire.",
            option: {
                notices: {
                    label: "Avis",
                    description: "Affiche également un bandeau en haut de l'écran (conseillé pour ne rien rater)."
                },
                offlineRemovals: {
                    label: "Retraits hors ligne",
                    description: "Vous prévient au démarrage si vous avez été retiré pendant votre absence."
                },
                friends: {
                    label: "Amis",
                    description: "Notifier quand un ami vous supprime"
                },
                friendRequestCancels: {
                    label: "Requêtes d'amis annulées",
                    description: "Notifier quand une demande d'ami est annulée"
                },
                servers: {
                    label: "Serveurs",
                    description: "Notifier quand vous êtes expulsé/banni d'un serveur"
                },
                groups: {
                    label: "Groupes",
                    description: "Notifier quand vous êtes retiré d'un groupe"
                }
            },
            notification: {
                removedFriend: "{{user}} vous a retiré de ses amis.",
                cancelledFriendRequest: "Une demande d'ami de {{user}} a été retirée.",
                removedFromServer: "Vous avez été retiré du serveur {{server}}.",
                removedFromGroup: "Vous avez été retiré du groupe {{group}}.",
                noLongerGroup: "Vous n'êtes plus dans le groupe {{group}}.",
                noLongerServer: "Vous n'êtes plus dans le serveur {{server}}.",
                noLongerFriend: "Vous n'êtes plus ami avec {{user}}.",
                friendRequestRevoked: "La demande d'ami de {{user}} a été révoquée.",
                ok: "OK"
            },
            text: {
                relationshipNotifier: "Notificateur de relations"
            }
        },
        remix: {
            name: "Remix",
            description: "Ajoute une option 'Remix' au menu clic droit du bouton d'upload. Ouvre un éditeur d'image simple.",
            label: "Remix",
            button: {
                send: "Envoyer",
                close: "Fermer",
                brush: "Pinceau",
                erase: "Gomme",
                crop: "Recadrer",
                shape: "Forme",
                reset: "Réinitialiser",
                clear: "Effacer"
            },
            editor: {
                choose: "Choisir une image",
                browse: "Parcourir",
                rectangle: "Rectangle",
                ellipse: "Ellipse",
                line: "Ligne",
                arrow: "Flèche",
                fill: "Remplissage",
                image: "Image"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Permet de répéter des messages rapidement. Maj+Clic pour répéter et répondre.",
            button: "Répéter (Clic) / Répéter et Répondre (Maj + Clic)",
            context: {
                repeat: "Répéter",
                repeatAndReply: "Répéter et Répondre"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Remplace la recherche Google par d'autres moteurs.",
            option: {
                customEngineName: {
                    label: "Nom du moteur perso",
                    description: "Nom de votre moteur de recherche"
                },
                customEngineURL: {
                    label: "URL du moteur perso",
                    description: "L'URL de recherche (ex: https://site.com?q=)"
                },
                replacementEngine: {
                    label: "Moteur de remplacement",
                    description: "Remplace Google par un moteur spécifique",
                    off: "Désactivé",
                    custom: "Moteur personnalisé",
                }
            },
            context: {
                label: "Rechercher le texte",
                searchWith: "Rechercher avec {{name}}"
            },
            text: {
                google: "Google"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Contrôlez si vous souhaitez toujours ou jamais être mentionné lors des réponses aux messages, avec des fonctionnalités de liste blanche et de liste noire",
            option: {
                replyPingBlacklist: {
                    label: "Liste noire des mentions de réponse",
                    description: "Liste d'ID d'utilisateurs séparés par des virgules pour ne jamais recevoir de mentions de réponse de leur part"
                },
                alwaysPingOnReply: {
                    label: "Toujours pinger sur réponse",
                    description: "Recevoir systématiquement un ping lors d'une réponse"
                },
                replyPingWhitelist: {
                    label: "Liste blanche de réponse",
                    description: "Liste d'IDs (virgules) pour toujours recevoir leurs pings de réponse"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Affiche l'heure sur les aperçus des messages auxquels on répond"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Révèle tous les spoilers d'un message avec Ctrl+Clic, ou de tout le chat avec Ctrl+Maj+Clic"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Ajoute la recherche d'image inversée au menu contextuel",
            context: {
                label: "Rechercher l'image",
                all: "Tout rechercher"
            },
            text: {
                all: "Tous"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Évaluez les autres utilisateurs (ajoute une section aux profils).",
            notification: {
                newReview: "Vous avez de nouveaux avis sur votre profil !",
                auth: {
                    error: "Erreur lors de l'autorisation",
                    successfully: "Connexion réussie !",
                    failed: "Échec de l'autorisation",
                    review: "Veuillez vous autoriser pour ajouter un avis.",
                    opening: "Ouverture de la fenêtre d'autorisation...",
                    need: "Vous devez vous autoriser pour évaluer les utilisateurs !"
                },
                error: {
                    fast: "Requêtes trop rapides. Attendez quelques secondes.",
                    fetching: "Erreur lors de la récupération des avis.",
                    action: {
                        failed: "Échec de l'action sur l'utilisateur",
                        success: "Action réussie"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Êtes-vous sûr ?",
                    description: "Voulez-vous vraiment supprimer cet avis ?",
                    confirm: "Supprimer",
                    cancel: "Annuler",
                    error: "Vous devez être connecté pour supprimer des avis.",
                },
                report: {
                    title: "Êtes-vous sûr ?",
                    description: "Voulez-vous vraiment signaler cet avis ?",
                    confirm: "Signaler",
                    cancel: "Annuler",
                    error: "Vous devez être connecté pour signaler des avis.",
                },
                block: {
                    title: "Êtes-vous sûr ?",
                    description: "Voulez-vous vraiment bloquer cet utilisateur ? Vous ne verrez plus ses avis.",
                    confirm: "Bloquer",
                    cancel: "Annuler",
                    error: "Vous devez être connecté pour bloquer des utilisateurs.",
                },
                blocked: {
                    title: "Utilisateurs bloqués",
                    auth: "Vous n'êtes pas connecté à ReviewDB !",
                    noBlocked: "Aucun utilisateur bloqué.",
                    fetch: "Erreur lors de la récupération des bloqués."
                },
                reviews: {
                    title: "Avis de ",
                    noUser: "Personne n'a encore évalué cet utilisateur. Soyez le premier !",
                    noServer: "Personne n'a encore évalué ce serveur. Soyez le premier !"
                }
            },
            button: {
                appeal: "Faire appel",
                ok: "OK",
                more: "Lire plus",
                reply: "Répondre à @{{user}}",
                update: "Modifier l'avis pour @{{user}}",
                review: "Évaluer @{{user}}"
            },
            context: {
                view: "Voir les avis",
                blocked: "Vous avez bloqué cet utilisateur",
                delete: "Supprimer l'avis",
                report: "Signaler l'avis",
                block: "Bloquer l'utilisateur",
                unblock: "Débloquer l'utilisateur",
                reply: "Répondre à l'avis"
            },
            option: {
                authorize: {
                    label: "S'autoriser",
                    button: "S'autoriser avec ReviewDB"
                },
                notifyReviews: {
                    label: "Notifier les avis",
                    description: "Prévenir des nouveaux avis au démarrage"
                },
                showWarning: {
                    label: "Afficher avertissement",
                    description: "Affiche un rappel de respect en haut de la liste"
                },
                hideTimestamps: {
                    label: "Masquer l'heure",
                    description: "Masque la date des avis"
                },
                hideBlockedUsers: {
                    label: "Masquer les bloqués",
                    description: "Masque les avis des utilisateurs bloqués"
                },
                buttons: {
                    label: "Boutons",
                    manageBlocked: "Gérer les bloqués",
                    support: "Soutenir ReviewDB",
                    website: "Site ReviewDB",
                    server: "Serveur Support ReviewDB"
                }
            },
            profile: {
                optedOut: "Utilisateur désactivé",
                noReviews: "Pas d'avis encore"
            },
            toast: {
                youCannotVoteOn: "Tu ne peux pas voter pour ton propre avis.",
                networkErrorFailedTo: "Erreur réseau : impossible de se connecter à ReviewDB.",
                pleaseAuthorizeToVote: "Autorise l'accès pour voter sur les avis.",
                requestFailed: "ReviewDB : la requête a échoué avec le statut {{status}}"
            },
            text: {
                ok: "OK",
                updateReviewFor: "Mettre à jour l'avis pour @{{name}}",
                reviewUser: "Donner un avis sur @{{name}}",
                system: "Système",
                reviewCount: "({{count}} avis)"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Affiche les liens magnet comme des liens de messages",
            unknown: "nom de fichier inconnu"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Ajoute la couleur du rôle le plus haut partout où c'est possible.",
            option: {
                chatMentions: {
                    label: "Mentions du chat",
                    description: "Couleur des rôles dans les mentions (même dans la zone de saisie)"
                },
                memberList: {
                    label: "Liste des membres",
                    description: "Couleur dans les en-têtes de rôles de la liste"
                },
                voiceUsers: {
                    label: "Utilisateurs vocaux",
                    description: "Couleur dans la liste des utilisateurs en vocal"
                },
                reactorsList: {
                    label: "Liste des réactions",
                    description: "Couleur dans la liste des gens ayant réagi"
                },
                pollResults: {
                    label: "Résultats de sondage",
                    description: "Couleur dans les résultats de sondages"
                },
                colorChatMessages: {
                    label: "Colorer les messages",
                    description: "Colore tout le texte du message selon le rôle de l'auteur"
                },
                messageSaturation: {
                    label: "Saturation des messages",
                    description: "Intensité de la coloration des messages"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Modifiez le type et le contenu de n'importe quel Rich Presence (Statut de jeu).",
            option: {
                replacedAppIds: {
                    label: "IDs d'app remplacés",
                }
            },
            modal: {
                tutorial: {
                    title: "IDs des activités en cours",
                    noRunning: "Aucune activité en cours",
                    available: "Variables disponibles",
                    variableText: "Vous pouvez utiliser des variables qui seront remplacées automatiquement :",
                    more: "Plus de détails",
                    details: {
                        leave: "Laissez vide pour ne rien changer.",
                        set: "Mettez 'null' pour masquer un champ.",
                        reload: "Discord peut nécessiter un rechargement."
                    }
                },
                settings: {
                    applyEdits: "Appliquer les modifs",
                    addNewApp: "Ajouter une application",
                    appId: "ID de l'application",
                    invalidAppId: "ID invalide",
                    newActivityType: "Nouveau type d'activité",
                    activityTypes: {
                        playing: "Joue à",
                        watching: "Regarde",
                        listening: "Écoute",
                        competing: "Participe à",
                        streaming: "En stream"
                    },
                    streamUrl: "URL du stream (YouTube/Twitch)",
                    invalidStreamUrl: "URL invalide",
                    newName: "Nouveau nom",
                    newDetails: "Nouveaux détails",
                    newState: "Nouvel état",
                    largeImage: "Grande image",
                    smallImage: "Petite image",
                    text: "Texte",
                    url: "URL",
                    firstLine: "(1ère ligne)",
                    secondLine: "(2ème ligne)",
                    thirdLine: "(3ème ligne)",
                    alsoThirdLine: "(aussi 3ème ligne)",
                    hideAssets: "Masquer images",
                    hideTimestamps: "Masquer le temps"
                }
            },
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "Exporte les URLs de vos GIFs favoris.",
            toolbox: "Sauver GIFs favoris",
            title: "Sauver GIFs favoris",
            command: {
                savegifs: {
                    description: "Sauve tous les favoris dans un fichier .txt"
                },
                saveworkinggifs: {
                    description: "Teste les GIFs et ne sauve que ceux qui fonctionnent encore"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Bouton Boîte à outils",
                    description: "Affiche le bouton dans la Toolbox Plexcord (nécessite un rechargement)."
                }
            },
            toast: {
                save: "GIFs sauvés sous {{filename}}",
                failed: "Échec de sauvegarde",
                no: "Aucun favori trouvé !",
                testing: "Test de {{count}} GIFs, un instant...",
                noneWorking: "Aucun de vos GIFs ne semble fonctionner.",
                saved: "{{broken}} GIFs cassés filtrés. {{saved}} GIFs valides sauvés."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Programmez des messages à envoyer plus tard.",
            toolbox: {
                toggle: "Voir messages programmés"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Max messages par minute",
                    description: "Limite de messages programmés par salon par minute."
                },
                checkIntervalSeconds: {
                    label: "Intervalle de vérification",
                    description: "Fréquence à laquelle le plugin vérifie s'il y a des messages à envoyer."
                },
                showNotifications: {
                    label: "Notifications",
                    description: "Affiche une notification quand un message est envoyé."
                },
                showPhantomMessages: {
                    label: "Messages fantômes",
                    description: "Affiche les messages programmés de façon translucide dans le chat."
                }
            },
            channelType: {
                unknown: "Inconnu",
                dm: "MP",
                groupDm: "Groupe MP",
                channel: "Salon"
            },
            toast: {
                messageSent: "Message programmé envoyé dans {{channel}}",
                messageFailed: "Échec de l'envoi du message programmé",
                maxMessagesReached: "Limite de {{max}} messages par minute atteinte",
                messageScheduled: "Message programmé !",
                messageRemoved: "Message programmé supprimé",
                allCleared: "Tous les messages programmés effacés",
                scheduledMessageSentTo: "Message programmé envoyé à {{name}}"
            },
            button: {
                tooltipOn: "Mode Programmation ON (clic pour désactiver, clic droit pour la liste)",
                tooltipOff: "Mode Programmation OFF (clic pour activer, clic droit pour la liste)"
            },
            accessory: {
                scheduledFor: "Prévu pour {date} ({timeLeft})",
                remaining: {
                    days: "encore {{days}}j {{hours}}h",
                    hours: "encore {{hours}}h {{minutes}}m",
                    minutes: "encore {{minutes}}m"
                }
            },
            scheduleModal: {
                title: "Programmer un message",
                schedulingFor: "Programmation pour : {{channel}}",
                scheduleType: "Type de programmation",
                delay: "Délai",
                specificTime: "Heure précise",
                delayMinutes: "Délai (minutes)",
                dateTime: "Date & Heure",
                error: {
                    invalidDelay: "Délai invalide (min 1 minute)",
                    invalidDateTime: "Veuillez choisir une date future"
                },
                schedule: "Programmer",
                cancel: "Annuler"
            },
            viewModal: {
                title: "Messages programmés",
                clearAll: "Tout effacer",
                noMessages: "Aucun message programmé",
                delete: "Supprimer",
                close: "Fermer"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Répare l'erreur 'Nous avons fait tomber la loupe !'.",
            notPerfect: "Le correctif n'est pas parfait, rechargez la barre si besoin.",
            paragraph1: "Discord limite l'affichage à 5000 messages (cause de l'erreur).",
            paragraph2: "Vous ne pouvez voir que 5000 messages dans le passé/futur.",
            paragraph3: "Ce plugin change de mode de tri pour contourner la restriction.",
            paragraph4: "Si le message est hors de portée des deux méthodes,",
            paragraph5: "le plugin affichera simplement le début ou la fin des résultats."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Joue toujours la version secrète de la sonnerie Discord.",
            option: {
                onlySnow: {
                    label: "Seulement pendant l'event Neige",
                    description: "Joue uniquement le thème Snow Halation."
                }
            }
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Envoyez des horodatages via des raccourcis ou un bouton.",
            sample: {
                paragraph1: "Incluez des formats comme `HH:MM` (avec les accents graves !) pour envoyer l'heure.",
                paragraph2: "Utilisez le bouton Date dans la barre de saisie pour plus de précision.",
                examples: "Exemples :"
            },
            modal: {
                title: "Sélecteur d'horodatage",
                light: "Clair",
                dark: "Sombre",
                format: "Format d'horodatage",
                preview: "Aperçu",
                insert: "Insérer",
                insertTimestamp: "Insérer l'horodatage"
            },
            option: {
                replaceMessageContents: {
                    label: "Remplacer le contenu",
                    description: "Remplace les textes temporels par des horodatages Discord."
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Affiche les infos détaillées d'un serveur.",
            context: {
                serverInfo: "Infos du serveur"
            },
            option: {
                sorting: {
                    label: "Tri",
                    description: "Trier les listes par pseudo ou nom d'affichage.",
                    username: "Pseudo",
                    displayname: "Nom d'affichage",
                    none: "Pas de tri"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Infos",
                    friends: "Amis",
                    mutualUsers: "Utilisateurs communs",
                    blockedUsers: "Utilisateurs bloqués",
                    ignoredUsers: "Utilisateurs ignorés"
                },
                owner: "Propriétaire",
                loading: "Chargement...",
                createdAt: "Créé le",
                joinedAt: "Rejoint le",
                vanityLink: "Lien personnalisé",
                preferredLocale: "Langue préférée",
                verification: {
                    level: "Niveau de vérification",
                    none: "Aucun",
                    low: "Bas",
                    medium: "Moyen",
                    high: "Élevé",
                    highest: "Maximum"
                },
                serverBoosts: "Boosts de serveur",
                channels: "Salons",
                roles: "Rôles",
                boostLevel: "{{count}} (Niveau {{level}})"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Affiche le nombre d'amis en ligne ou de serveurs dans la barre latérale.",
            friends: "Amis",
            servers: "Serveurs",
            option: {
                mode: {
                    label: "Mode",
                    description: "Ce qu'il faut afficher",
                    friend: "Amis en ligne seulement",
                    server: "Nombre de serveurs seulement",
                    both: "Les deux"
                },
                useCompact: {
                    label: "Mode compact",
                    description: "Affiche uniquement le texte sans icône."
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Bouton de recherche rapide pour vos serveurs.",
            tooltip: "Rechercher un serveur"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Apporte des blocs de code au style VS Code dans Discord, propulsés par Shiki.",
            option: {
                theme: {
                    label: "Thème",
                    description: "Thèmes par défaut"
                },
                customTheme: {
                    label: "Thème personnalisé",
                    description: "Lien vers un thème VS Code personnalisé",
                    mustURL: "Doit être une URL valide",
                    mustJSON: "Doit être un fichier JSON"
                },
                tryDiscordHighlighter: {
                    label: "Essayer le surligneur de Discord",
                    description: "Utiliser le moteur de coloration et le thème par défaut de Discord (plus léger).",
                    never: "Jamais",
                    secondary: "Préférer Shiki au surligneur de Discord",
                    primary: "Préférer le surligneur de Discord à Shiki",
                    always: "Toujours"
                },
                useDevIcon: {
                    label: "Icônes de langage Devicon",
                    description: "Définit comment afficher les icônes de langage sur les blocs de code.",
                    disabled: "Désactivé",
                    colorless: "Sans couleur",
                    colored: "En couleur"
                },
                bgOpacity: {
                    label: "Opacité de l'arrière-plan",
                    description: "Opacité de l'arrière-plan"
                },
                ignoredLanguages: {
                    label: "Langages ignorés",
                    description: "Liste de langages séparés par des virgules à laisser aux blocs de code par défaut de Discord"
                }
            },
            button: {
                copy: "Copier",
                copied: "Copié !"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Affiche toujours tous les boutons (supprimer, épingler) sans avoir à maintenir Maj.",
            option: {
                noShiftDelete: {
                    label: "Suppr. sans Maj",
                    description: "Supprimer sans confirmer via Maj."
                },
                noShiftPin: {
                    label: "Épingler sans Maj",
                    description: "Épingler sans Maj."
                },
                noQuickReacts: {
                    description: "Masquer les réactions rapides. Par défaut, afficher le menu complet masque les boutons de réaction rapide.",
                    label: "Aucune réaction rapide"
                }
            }
        },
        showBadgesInChat: {
            name: "AfficherLesBadgesDansLeChat",
            description: "Affiche les badges de l'auteur du message à côté de son nom dans le chat.",
            option: {
                showPlexcordDonor: {
                    label: "Afficher le badge Donateur Plexcord",
                    description: "Activer pour afficher les badges Donateur Plexcord dans le chat."
                },
                plexcordDonorPosition: {
                    label: "Position du badge Donateur Plexcord",
                    description: "La position des badges Donateur Plexcord."
                },
                showPlexcordContributor: {
                    label: "Afficher le badge Contributeur Plexcord",
                    description: "Activer pour afficher les badges Contributeur Plexcord dans le chat."
                },
                plexcordContributorPosition: {
                    label: "Position du badge Contributeur Plexcord",
                    description: "La position des badges Contributeur Plexcord."
                },
                showDiscordProfile: {
                    label: "Afficher les badges de profil Discord",
                    description: "Activer pour afficher les badges de profil Discord dans le chat."
                },
                discordProfilePosition: {
                    label: "Position des badges de profil Discord",
                    description: "La position des badges de profil Discord."
                },
                showDiscordNitro: {
                    label: "Afficher le badge Discord Nitro",
                    description: "Activer pour afficher les badges Discord Nitro dans le chat."
                },
                discordNitroPosition: {
                    label: "Position du badge Discord Nitro",
                    description: "La position des badges Discord Nitro."
                },
                badgeSettings: {
                    label: "Paramètres des badges",
                    description: "Configurer la position des autres badges affichés dans le chat.",
                    modal: "Faites glisser les badges pour les réorganiser, vous pouvez cliquer pour activer/désactiver un type de badge spécifique."
                }
            },
            badge: {
                plexcord: "Badge donateur Plexcord",
                contributor: "Badge contributeur Plexcord",
                discordProfile: "Badges de profil Discord (HypeSquad, Staff Discord, Développeur actif, etc.)",
                nitro: "Badge Nitro",
                staff: "Staff Discord",
                partner: "Propriétaire de serveur partenaire",
                events: "Événements HypeSquad",
                bravery: "HypeSquad Bravery (Bravoure)",
                brilliance: "HypeSquad Brilliance (Brillance)",
                balance: "HypeSquad Balance (Équilibre)",
                bugHunter: "Chasseur de bugs Discord",
                earlyVerifiedBotDeveloper: "Développeur de bot certifié de la première heure",
                earlySupporter: "Soutien de la première heure",
                moderatorProgram: "Ancien du programme de modération"
            },
            modal: {
                plexcordContributor: "Contributeur Plexcord",
                discordNitro: "Discord Nitro",
                basic: "Basique",
                classic: "Classique"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Affiche les comptes connectés (Steam, Twitch, etc.) dans les mini-profils et la barre latérale des MP.",
            option: {
                iconSize: {
                    label: "Taille des icônes",
                    description: "Taille des icônes (px)"
                },
                iconSpacing: {
                    label: "Espacement",
                    description: "Espacement entre les icônes",
                    compact: "Compact",
                    cozy: "Confortable",
                    roomy: "Spacieux"
                },
                showGithubOrgs: {
                    description: "Afficher les organisations GitHub dont l'utilisateur est membre",
                    label: "Afficher les organisations GitHub"
                },
                showOnModal: {
                    description: "Afficher les comptes connectés dans la fenêtre de profil complète",
                    label: "Afficher dans la fenêtre"
                }
            }
        },
        showHiddenChannels: {
            name: "AfficherLesSalonsMasqués",
            description: "Affiche les salons auxquels vous n'avez pas accès.",
            tooltip: "Salon masqué",
            option: {
                channelStyle: {
                    label: "Style du salon",
                    description: "Le style utilisé pour afficher les salons masqués.",
                    classic: "Classique",
                    muted: "En sourdine",
                    showUnreads: "Afficher les non-lus",
                    mutedWithUnreads: "En sourdine avec messages non-lus"
                },
                showMode: {
                    label: "Mode d'affichage",
                    description: "Le mode utilisé pour afficher les salons masqués.",
                    lock: "Style simple avec une icône de cadenas",
                    hidden: "Style sourdine avec une icône d'œil barré à droite",
                    lockIconRight: "Icône de cadenas à droite"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "État par défaut du menu Utilisateurs et Rôles autorisés",
                    description: "Définit si la liste déroulante des utilisateurs et rôles autorisés doit être ouverte par défaut sur les salons masqués."
                }
            },
            channelType: {
                text: "texte",
                announcement: "annonces",
                forum: "forum",
                voice: "vocal",
                stage: "conférence"
            },
            sortOrder: {
                latestActivity: "Dernière activité",
                creationDate: "Date de création"
            },
            forumLayout: {
                default: "Non défini",
                list: "Vue en liste",
                grid: "Vue en galerie"
            },
            videoQuality: {
                auto: "Automatique",
                full: "720p"
            },
            modal: {
                hidden: "masqué",
                locked: "verrouillé",
                threads: "fils",
                posts: "publications",
                messages: "messages",
                post: "publication",
                message: "message",
                unknown: "inconnu",
                permissionDetails: "Détails des permissions",
                thisIsA: "Ceci est un salon de {{channelType}} {{status}}",
                canNotSee: "Vous ne pouvez pas voir le {{type}} de ce salon.",
                guidelines: "Cependant, vous pouvez consulter ses directives :",
                lastCreated: "Dernier {{type}} créé :",
                lastPin: "Dernier message épinglé :",
                threadSlowmode: "Mode lent des fils par défaut :",
                slowmode: "Mode lent :",
                bitrate: "Débit binaire (Bitrate) :",
                region: "Région :",
                automatic: "Automatique",
                videoQuality: "Mode de qualité vidéo :",
                inactiveArchiveDuration: "Délai d'inactivité par défaut avant l'archivage des {{type}}",
                defaultLayout: "Mise en page par défaut :",
                defaultSort: "Ordre de tri par défaut :",
                defaultReaction: "Émoji de réaction par défaut :",
                requireTag: "Les publications sur ce forum nécessitent l'utilisation d'un tag.",
                availableTags: "Tags disponibles :",
                allowedUsersAndRoles: "Utilisateurs et rôles autorisés :",
                hideAllowedUsersAndRoles: "Masquer les utilisateurs et rôles autorisés",
                viewAllowedUsersAndRoles: "Voir les utilisateurs et rôles autorisés"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Affiche divers éléments normalement réservés aux modérateurs.",
            option: {
                showTimeouts: {
                    label: "Exclusions dans le chat",
                    description: "Affiche l'icône d'exclusion temporaire (timeout) sur les membres."
                },
                showInvitesPaused: {
                    label: "Invitations en pause",
                    description: "Affiche l'indicateur d'invitations suspendues dans la liste."
                },
                showModView: {
                    label: "Afficher Vue Modérateur",
                    description: "Ajoute l'option 'Vue Modérateur' au menu contextuel sur tous les serveurs."
                }
            }
        },
        showMessageEmbeds: {
            name: "Afficher les intégrations de message",
            description: "Ajoute une option au menu contextuel pour afficher les intégrations des liens qui n'en ont pas",
            context: {
                embed: {
                    show: "Afficher l'intégration",
                    hide: "Supprimer l'intégration"
                }
            },
            error: {
                failed: "Échec de la récupération de l'intégration",
                noEmbed: "Aucune intégration trouvée"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Affiche n'importe quelle combinaison de pseudos personnalisés, pseudos d'amis, pseudos de serveur, noms d'affichage et noms d'utilisateur dans le chat.",
            option: {
                messages: {
                    label: "Messages",
                    description: "Afficher le format de nom personnalisé dans les messages."
                },
                replies: {
                    label: "Réponses",
                    description: "Afficher le format de nom personnalisé dans les réponses."
                },
                mentions: {
                    label: "Mentions",
                    description: "Afficher le format de nom personnalisé dans les mentions."
                },
                typingIndicator: {
                    label: "Indicateur d'écriture",
                    description: "Afficher le premier nom disponible de votre format personnalisé dans l'indicateur d'écriture."
                },
                memberList: {
                    label: "Liste des membres",
                    description: "Afficher le premier nom disponible de ton format de nom personnalisé dans la liste des membres, des MP, des amis et En ligne maintenant."
                },
                profilePopout: {
                    label: "Fenêtre de profil",
                    description: "Afficher le premier nom disponible de votre format personnalisé dans les fenêtres de profil."
                },
                voiceChannels: {
                    label: "Salons vocaux",
                    description: "Afficher le premier nom disponible de votre format personnalisé dans les salons vocaux."
                },
                reactions: {
                    label: "Réactions",
                    description: "Afficher le premier nom disponible dans les info-bulles de réaction, et le nom complet dans les fenêtres de réaction."
                },
                discriminators: {
                    label: "Discriminateurs",
                    description: "Ajouter les discriminateurs aux noms d'utilisateur pour les bots. Les discriminateurs sont obsolètes pour les utilisateurs mais toujours utilisés pour les bots, permettant de les différencier."
                },
                hideDefaultAtSign: {
                    label: "Masquer l'arobase par défaut",
                    description: "Masquer le symbole '@' par défaut devant le nom dans les mentions et réponses."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Tronquer tous les noms en mode Streamer",
                    description: "Tronquer tous les noms, pas seulement les noms d'utilisateur, lorsque le mode Streamer est activé."
                },
                removeDuplicates: {
                    label: "Supprimer les doublons",
                    description: "Si certains noms sont identiques, les supprimer pour ne garder que les noms uniques."
                },
                ignoreFonts: {
                    label: "Ignorer les polices",
                    description: "Utiliser la police 'gg sans' pour les noms secondaires, quelle que soit la police personnalisée de l'utilisateur."
                },
                ignoreGradients: {
                    label: "Ignorer les dégradés",
                    description: "Pour les noms non primaires, utiliser la couleur principale au lieu du dégradé ou des effets Nitro."
                },
                animateGradients: {
                    label: "Animer les dégradés",
                    description: "Animer les dégradés pour les noms secondaires (désactivé par 'Ignorer les dégradés' ou la réduction de mouvement)."
                },
                nameSeparator: {
                    label: "Séparateur de noms",
                    description: "Le séparateur à utiliser entre les noms. Par défaut, un simple espace."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Nom d'ami uniquement en MP",
                    description: "Afficher les noms d'amis uniquement dans les messages privés, pas sur les serveurs."
                },
                customNameOnlyInDirectMessages: {
                    label: "Nom personnalisé uniquement en MP",
                    description: "Afficher les noms personnalisés uniquement dans les messages privés, pas sur les serveurs."
                },
                alwaysShowEffects: {
                    label: "Toujours animer les effets",
                    description: "Toujours afficher les effets comme si vous survoliez l'élément."
                },
                includedNames: {
                    label: "Noms inclus",
                    description: "L'ordre d'affichage des noms. Utilisez les balises : {user}, {display}, {nick}, {friend}. Vous pouvez définir des replis avec des virgules : {friend, nick, display}."
                },
                customNameColor: {
                    label: "Couleur du nom personnalisé",
                    description: "Couleur pour le nom personnalisé. Accepte n'importe quelle valeur CSS ou 'Role' pour suivre la couleur du rôle."
                },
                friendNameColor: {
                    label: "Couleur du nom d'ami",
                    description: "Couleur pour le pseudo d'un ami."
                },
                nicknameColor: {
                    label: "Couleur du pseudo",
                    description: "Couleur pour le pseudo de serveur."
                },
                displayNameColor: {
                    label: "Couleur du nom d'affichage",
                    description: "Couleur pour le nom d'affichage global."
                },
                usernameColor: {
                    label: "Couleur du nom d'utilisateur",
                    description: "Couleur pour le nom d'utilisateur unique."
                },
                triggerNameRerender: {
                    label: "Forcer le rafraîchissement des noms",
                    description: "Déclenche une mise à jour de l'affichage des noms en basculant ce paramètre."
                },
                searchAutocomplete: {
                    description: "Afficher le premier nom disponible de ton format de nom personnalisé dans l'autocomplétion des mentions et de la recherche.",
                    label: "Autocomplétion de recherche"
                },
                styleDirectMessagesList: {
                    description: "Afficher les effets de nom d'affichage sur les entrées non sélectionnées sans survol. Les entrées sélectionnées et survolées restent stylisées une fois désactivé.",
                    label: "Styliser la liste des messages privés"
                },
                styleDirectMessagesMessages: {
                    description: "Afficher les effets de nom d'affichage sur les auteurs des messages sans survol. Les noms survolés restent stylisés une fois désactivé.",
                    label: "Styliser les messages des MP"
                },
                styleFriendsList: {
                    description: "Afficher les effets de nom d'affichage sans survol. Les entrées survolées restent stylisées une fois désactivé.",
                    label: "Styliser la liste d'amis"
                },
                styleActiveNow: {
                    description: "Afficher les effets de nom d'affichage sans survol. Les entrées survolées restent stylisées une fois désactivé.",
                    label: "Styliser En ligne maintenant"
                },
                ignoreEffects: {
                    description: "Pour les noms non principaux, n'utiliser que la couleur du rôle principal et omettre les effets de nom d'affichage.",
                    label: "Ignorer les effets"
                },
                animateEffects: {
                    description: "Animer les dégradés de rôle et les effets de nom d'affichage sur les noms non principaux. Désactivé par « Ignorer les effets » et la réduction des animations.",
                    label: "Animer les effets"
                },
                alwaysAnimateEffects: {
                    description: "Forcer l'animation des effets de nom d'affichage lorsqu'ils seraient déjà visibles, même sans survol.",
                    label: "Toujours animer les effets"
                },
                gradientGlow: {
                    description: "Ajouter une lueur aux dégradés animés des utilisateurs comme pour les dégradés de rôle du serveur.",
                    label: "Lueur du dégradé"
                }
            },
            modal: {
                change: {
                    title: "Modifier le pseudo SMYN"
                },
                add: {
                    title: "Ajouter un pseudo SMYN"
                },
                setCustom: "Définissez un pseudo SMYN personnalisé pour cet utilisateur. Utilisez-le via {custom} dans les paramètres.",
                nickname: "Pseudo SMYN",
                reset: "Réinitialiser le pseudo SMYN",
                cancel: "Annuler"
            },
            text: {
                save: "Enregistrer",
                unknown: "Inconnu"
            }
        },
        showTimeoutDuration: {
            name: "Afficher la durée de l'exclusion",
            description: "Affiche le temps restant pour l'exclusion d'un utilisateur, soit dans l'info-bulle, soit à côté de l'icône.",
            option: {
                displayStyle: {
                    label: "Style d'affichage",
                    description: "Comment afficher la durée de l'exclusion",
                    tooltip: "Dans l'info-bulle",
                    inline: "À côté de l'icône"
                }
            },
            text: {
                timeoutRemaining: "d'exclusion restante"
            }
        },
        showResourceChannels: {
            name: "Afficher les salons de ressources",
            description: "Affiche les salons cachés derrière les ressources du serveur dans la liste des salons."
        },
        showSongName: {
            name: "Afficher le nom de la chanson",
            description: "Affiche le nom de la chanson au lieu de l'artiste pour l'activité Spotify."
        },
        sidebarChat: {
            name: "Chat latéral",
            description: "Ouvre un autre salon ou un MP en tant que barre latérale ou fenêtre contextuelle.",
            toolbox: {
                label: "Ouvrir le chat précédent"
            },
            context: {
                label: "Ouvrir dans le chat latéral"
            },
            channelTitle: {
                chat: "Chat",
                dm: "MP"
            },
            modal: {
                switch: "Changer de salon",
                popout: "Fenêtre externe",
                popoutClose: "Fermer la fenêtre externe",
                popoutFor: "Fenêtre externe pour {{channel}}",
                close: "Fermer le chat latéral"
            },
            option: {
                persistSidebar: {
                    label: "Persister le chat latéral",
                    description: "Garder le chat latéral ouvert après le redémarrage de Discord."
                },
                persistPopoutWindows: {
                    label: "Persister les fenêtres externes",
                    description: "Restaure les fenêtres externes ouvertes après le redémarrage de Discord."
                },
                popoutAlwaysOnTop: {
                    label: "Toujours au premier plan",
                    description: "Garder les fenêtres externes au-dessus de toutes les autres."
                },
                patchCommunity: {
                    label: "Patch Communauté",
                    description: "Corrige les fonctionnalités comme l'explorateur de salons ou l'onglet membres sur les serveurs communautaires."
                },
                persistedPopoutWindowIds: {
                    description: "IDs de salons des fenêtres externes persistées."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Signature ou texte de fin automatisé",
            option: {
                name: {
                    label: "Nom",
                    description: "La signature qui sera ajoutée à la fin de vos messages."
                },
                textHeader: {
                    label: "En-tête de texte",
                    description: "L'en-tête qui précèdera le texte."
                },
                showIcon: {
                    label: "Afficher l'icône",
                    description: "Afficher une icône dans la barre de chat pour activer/désactiver le plugin."
                },
                contextMenu: {
                    label: "Menu contextuel",
                    description: "Ajouter une option pour basculer la fonctionnalité dans le menu contextuel de saisie."
                },
                isEnabled: {
                    label: "Est activé",
                    description: "Activer ou désactiver la fonctionnalité."
                }
            },
            tooltip: {
                enable: "Activer la signature",
                disable: "Désactiver la signature"
            },
            context: {
                enable: "Activer la signature"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "Bascule votre signature",
                    toogle: "Basculer votre signature (par défaut)",
                    enabled: "Signature activée",
                    disabled: "Signature désactivée"
                }
            }
        },
        silentMessageToggle: {
            name: "Bascule de message silencieux",
            description: "Ajoute un bouton à la barre de chat pour envoyer un message silencieux.",
            option: {
                persistState: {
                    label: "Persister l'état",
                    description: "Comment conserver l'état du message silencieux",
                    none: "Ne pas persister (réinitialiser par salon)",
                    channels: "Persister entre les salons",
                    restarts: "Persister entre les salons et redémarrages"
                },
                autoDisable: {
                    label: "Désactivation automatique",
                    description: "Désactiver automatiquement le mode silencieux après l'envoi d'un message."
                }
            },
            tooltip: {
                enable: "Activer le message silencieux",
                disable: "Désactiver le message silencieux"
            }
        },
        silentTyping: {
            name: "Écriture silencieuse",
            description: "Masque votre indicateur d'écriture dans le chat.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Masque votre indicateur d'écriture.",
                    toggle: {
                        name: "toggle",
                        description: "Basculer globalement, par salon ou par serveur.",
                        global: "Global",
                        channel: "Salon",
                        guild: "Serveur"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Masquer les indicateurs d'écriture des autres au-dessus de la barre de saisie."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Masquer les indicateurs d'écriture dans la liste des membres."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Afficher une icône dans la barre de saisie pour un accès rapide."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Afficher un menu déroulant dans le menu contextuel du chat."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "Indique si l'écriture doit être masquée par défaut."
                    }
                }
            },
            content: {
                updated: "Paramètres d'écriture silencieuse mis à jour.",
                noChanges: "Aucune modification apportée."
            },
            tooltip: {
                hidden: "Écriture masquée ({{location}})",
                visible: "Écriture visible ({{location}})",
                global: "Écriture visible (Global)",
                voiceChannel: "Saisie toujours visible dans le chat du salon vocal connecté",
                temporary: "Saisie temporairement visible dans ce salon suite à un message récent"
            },
            option: {
                enabledGlobally: {
                    label: "Activé globalement",
                    description: "Masquer votre indicateur d'écriture partout."
                },
                hideChatBoxTypingIndicators: {
                    label: "Masquer indicateurs barre de saisie",
                    description: "Masquer l'écriture des autres au-dessus de la barre de saisie."
                },
                hideMembersListTypingIndicators: {
                    label: "Masquer indicateurs liste membres",
                    description: "Masquer l'écriture des autres dans la liste des membres."
                },
                chatIcon: {
                    label: "Icône de chat",
                    description: "Afficher une icône pour modifier les réglages à la volée."
                },
                chatIconLeftClickAction: {
                    label: "Action clic gauche icône",
                    description: "Action lors d'un clic gauche sur l'icône.",
                    global: "Basculer globalement",
                    channel: "Basculer pour le salon",
                    guild: "Basculer pour le serveur",
                    settings: "Ouvrir les paramètres"
                },
                chatIconMiddleClickAction: {
                    label: "Action clic milieu icône",
                    description: "Action lors d'un clic milieu sur l'icône.",
                    global: "Basculer globalement",
                    channel: "Basculer pour le salon",
                    guild: "Basculer pour le serveur",
                    settings: "Ouvrir les paramètres"
                },
                chatIconRightClickAction: {
                    label: "Action clic droit icône",
                    description: "Action lors d'un clic droit sur l'icône.",
                    global: "Basculer globalement",
                    channel: "Basculer pour le salon",
                    guild: "Basculer pour le serveur",
                    settings: "Ouvrir les paramètres"
                },
                chatContextMenu: {
                    label: "Menu contextuel du chat",
                    description: "Afficher un menu déroulant dans le menu contextuel pour modifier les paramètres à la volée."
                },
                defaultHidden: {
                    label: "Masqué par défaut",
                    description: "Si activé, votre écriture sera masquée partout sauf dans les 'Lieux désactivés'."
                },
                alwaysEnableInActiveVoiceChat: {
                    label: "Toujours activer dans le chat vocal actif",
                    description: "Autorise toujours l'affichage de ton indicateur de saisie lorsque tu écris dans un salon vocal auquel tu es connecté."
                },
                temporaryEnableThresholdServers: {
                    label: "Délai d'activation temporaire (serveurs)",
                    description: "Autorise temporairement l'affichage de ton indicateur de saisie pendant ce nombre de secondes après l'envoi d'un message dans un salon de serveur. Si l'indicateur est déjà visible dans le salon, ce paramètre n'a aucun effet."
                },
                temporaryEnableThresholdDirectMessages: {
                    label: "Délai d'activation temporaire (messages privés)",
                    description: "Autorise temporairement l'affichage de ton indicateur de saisie pendant ce nombre de secondes après l'envoi d'un message dans un MP ou un MP de groupe. Si l'indicateur est déjà visible dans le salon, ce paramètre n'a aucun effet."
                },
                enabledLocations: {
                    label: "Lieux activés",
                    description: "ID des salons/serveurs où la fonction est active (si 'Masqué par défaut' est désactivé)."
                },
                disabledLocations: {
                    label: "Lieux désactivés",
                    description: "ID des salons/serveurs où la fonction est inactive."
                }
            },
            text: {
                silentTyping: "Saisie silencieuse",
                enabled: "Activé",
                chatBarIndicators: "Indicateurs de la barre de chat",
                membersListIndicators: "Indicateurs de la liste des membres",
                guild: "Serveur",
                channel: "Salon",
                global: "Global"
            }
        },
        snowfall: {
            name: "Chute de neige",
            description: "Faites tomber la neige sur Discord !",
            about: {
                title: "Information",
                paragraph: "Ce plugin ajoute un effet de neige sur l'interface de Discord. Vous pouvez modifier le type de neige ci-dessous.",
                note: "NOTE : Bien que léger sur la plupart des PC, cela peut ralentir les systèmes les plus modestes."
            },
            option: {
                typeOfSnow: {
                    label: "Type de neige",
                    description: "Changer le type de neige (impacte les performances).",
                    solid: "Solide (Meilleure performance)",
                    text: "Texte (Performance moyenne)",
                    emoji: "Image (Basse performance)"
                },
                maxSize: {
                    label: "Taille max",
                    description: "Taille maximale des flocons"
                },
                speed: {
                    label: "Vitesse",
                    description: "Vitesse de chute"
                },
                flakesPerSecond: {
                    label: "Flocons par seconde",
                    description: "Densité de la neige"
                }
            }
        },
        sortFriendRequests: {
            name: "Trier les demandes d'ami",
            description: "Trie les demandes d'ami par date de réception",
            tooltip: "Ajoutée le — {{date}}",
            option: {
                showDates: {
                    label: "Afficher les dates",
                    description: "Afficher les dates sur les demandes d'ami"
                }
            }
        },
        soundBoardLogger: {
            name: "Journal du Soundboard",
            description: "Enregistre tous les sons joués en vocal et permet de les télécharger.",
            tooltip: "Ouvrir le journal du Soundboard",
            option: {
                savedIds: {
                    label: "ID Soundboard sauvegardés",
                    description: "Nombre d'ID à conserver (0 pour infini).",
                    notNumber: "La valeur n'est pas un nombre.",
                    cantDecimal: "La valeur ne peut pas être décimale.",
                    cantNegative: "La valeur ne peut pas être négative.",
                    heading: "Quantité d'ID à sauvegarder",
                    warning: "Attention ! Réduire ce nombre réinitialisera le journal !",
                    placeholder: "Entrez un nombre"
                },
                fileType: {
                    label: "Format de fichier",
                    description: "Le format de sauvegarde préféré."
                },
                openLogs: {
                    label: "Ouvrir les journaux",
                    description: "Afficher les journaux",
                    button: "Ouvrir les journaux"
                },
                soundVolume: {
                    label: "Volume sonore",
                    description: "Volume du son de bascule (0 pour désactiver)."
                },
                iconLocation: {
                    label: "Emplacement icône",
                    description: "Où afficher l'icône du journal (nécessite un redémarrage).",
                    toolbar: "Barre d'outils",
                    chatInput: "Saisie de chat"
                }
            },
            modal: {
                title: "Journaux du Soundboard",
                loading: "Chargement des sons...",
                noLogs: "Aucun son enregistré. Rejoignez un vocal pour commencer !",
                clearLogs: "Effacer les journaux",
                played: "Joué {{time}} fois",
                last: "Dernière utilisation :",
                also: "Aussi joué par :",
                download: "Télécharger",
                copyId: "Copier l'ID",
                copied: "ID copié dans le presse-papier !",
                playSound: "Jouer le son",
                moreUsers: "D'autres personnes ont utilisé ce son...",
                volume: "Volume du Soundboard"
            }
        },
        splitLargeMessages: {
            name: "Découper les longs messages",
            description: "Découpe les messages trop longs en morceaux à la taille de Discord avant l'envoi.",
            option: {
                maxLength: {
                    label: "Longueur maximale",
                    description: "Longueur avant découpe. 0 pour détection auto."
                },
                disableFileConversion: {
                    label: "Désactiver conversion fichier",
                    description: "Si vrai, empêche la conversion en fichier pour les longs messages."
                },
                sendDelay: {
                    label: "Délai d'envoi",
                    description: "Délai minimal entre chaque morceau, en secondes."
                },
                hardSplit: {
                    label: "Découpe brute",
                    description: "Couper au caractère exact au lieu de l'espace/nouvelle ligne."
                },
                splitInSlowmode: {
                    label: "Couper en mode lent",
                    description: "Autoriser le découpage en mode lent lorsque son délai reste dans le maximum configuré."
                },
                slowmodeMax: {
                    label: "Limite mode lent",
                    description: "Durée maximale du mode lent autorisée lors du découpage des messages."
                },
                splitMode: {
                    description: "Privilégier cette limite lors du découpage d'un message.",
                    label: "Mode de découpage"
                }
            },
            toast: {
                cannotSplitThisMessage: "Impossible de découper ce message à cause du mode lent du salon.",
                onlySentLengthMessage: "Seules {{sent}}/{{length}} parties du message ont été envoyées.",
                unsentCopied: "Parties du message non envoyées copiées dans le presse-papiers."
            },
            text: {
                newlines: "Retours à la ligne",
                spaces: "Espaces",
                strictCharacterLimit: "Limite stricte de caractères"
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Écoute collective gratuite, pas de pause auto en vocal, et maintient l'activité en cas d'inactivité.",
            option: {
                noSpotifyAutoPause: {
                    label: "Pas de pause auto Spotify",
                    description: "Désactive la pause automatique de Spotify."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Garder Spotify en inactivité",
                    description: "Maintient l'activité Spotify même si vous êtes absent."
                }
            }
        },
        spotifyShareCommands: {
            name: "Commandes de partage Spotify",
            description: "Partagez votre morceau, album ou artiste actuel via commandes slash (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Partager votre {{type}} Spotify actuel",
                    track: "Vous n'écoutez rien sur Spotify.",
                    find: "Impossible de trouver le titre sur Spotify."
                }
            }
        },
        startupTimings: {
            name: "Temps de démarrage",
            description: "Ajoute les statistiques de démarrage au menu des paramètres.",
            modal: {
                title: "Temps de démarrage",
                ended: "Trace terminée à :",
                start: "Début",
                interval: "Intervalle",
                delta: "Delta",
                event: "Événement",
                serverTrace: "Trace serveur",
                loading: "Chargement..."
            }
        },
        statusNotifications: {
            name: "Notifications de statut",
            description: "Ajoute des notifications pour les changements de statut.",
            loading: "Chargement...",
            option: {
                notificationsSound: {
                    label: "Son de notification",
                    description: "Jouer un son lors d'un changement de statut ?"
                },
                usersList: {
                    label: "Liste des utilisateurs",
                    description: "Utilisateurs suivis",
                    empty: "Aucun utilisateur suivi. Faites un clic droit sur un utilisateur pour l'ajouter."
                }
            },
            context: {
                label: "Notifications de statut",
                notifications: "Notifications",
                type: {
                    all: "Tout",
                    online: "En ligne",
                    offline: "Hors ligne",
                    none: "Aucune"
                }
            },
            notification: {
                unknownUser: "Utilisateur",
                title: "Notifications de statut"
            },
            status: {
                online: "En ligne",
                idle: "Inactif",
                dnd: "Ne pas déranger",
                offline: "Hors ligne",
            },
        },
        statusPresets: {
            name: "Préréglages de statut",
            description: "Permet de mémoriser vos statuts pour les réutiliser plus tard.",
            button: {
                remember: "Mémoriser le statut"
            },
            context: {
                edit: "Modifier les préréglages",
                set: "Définir un statut personnalisé",
                delete: "Supprimer le préréglage"
            },
            notification: {
                successfully: "Statut sauvegardé avec succès"
            }
        },
        steamStatusSync: {
            name: "Synchro statut Steam",
            description: "Synchronisez votre statut vers Steam ! (En ligne, Absent, Invisible ou Hors ligne).",
            option: {
                onlineStatus: {
                    label: "Statut En ligne",
                    description: "Statut Steam si En ligne"
                },
                idleStatus: {
                    label: "Statut Inactif",
                    description: "Statut Steam si Inactif"
                },
                dndStatus: {
                    label: "Statut Ne pas déranger",
                    description: "Statut Steam si Ne pas déranger"
                },
                invisibleStatus: {
                    label: "Statut Invisible",
                    description: "Statut Steam si Invisible"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Passer en invisible si activité masquée",
                    description: "Passe Steam en invisible si l'activité Discord est cachée."
                }
            },
            status: {
                online: "En ligne",
                away: "Absent",
                invisible: "Invisible",
                offline: "Hors ligne (Déconnecter le chat Steam)",
                disabled: "Désactivé"
            }
        },
        stickerBlocker: {
            name: "Bloqueur d'autocollants",
            description: "Permet de bloquer l'affichage des autocollants.",
            option: {
                showGif: {
                    label: "Afficher GIF",
                    description: "Afficher un GIF de chat stylé à la place."
                },
                showMessage: {
                    label: "Afficher message",
                    description: "Afficher un message indiquant l'ID bloqué."
                },
                showButton: {
                    label: "Afficher bouton",
                    description: "Afficher un bouton pour débloquer le GIF."
                },
                blockedStickers: {
                    label: "Autocollants bloqués",
                    description: "Liste des ID bloqués (ne pas éditer sans savoir ce que vous faites)."
                }
            },
            modal: {
                blocked: "Autocollant bloqué. ID: {{id}} NOM: {{name}}",
                unblock: "Débloquer {{name}}"
            },
            context: {
                blockSticker: "Bloquer l'autocollant",
                unblockSticker: "Débloquer l'autocollant"
            },
            text: {
                failedToRender: "Échec de l'affichage :("
            }
        },
        stickerPaste: {
            name: "Coller autocollant",
            description: "Insère l'autocollant choisi dans la barre de saisie au lieu de l'envoyer instantanément."
        },
        streaks: {
            name: "Streaks",
            description: "Affiche une série à côté d'un utilisateur lorsque vous échangez des MP avec lui plusieurs jours d'affilée.",
            tooltip: "Série de {{count}} jours",
            tooltipExpiring: "Série de {{count}} jours — écrivez-vous aujourd'hui pour la prolonger !",
            option: {
                account: {
                    description: "Se connecter ou se déconnecter de l'API Streaks. Les séries sont stockées sur l'API, vous devez donc être connecté pour qu'elles soient suivies.",
                    login: "Se connecter à l'API Streaks",
                    logout: "Se déconnecter de l'API Streaks"
                },
                eliteColor: "Couleur de série élite (100+ jours)",
                diamondColor: "Couleur de série diamant (60+ jours)",
                platinumColor: "Couleur de série platine (45+ jours)",
                goldColor: "Couleur de série or (30+ jours)",
                silverColor: "Couleur de série argent (14+ jours)",
                bronzeColor: "Couleur de série bronze (7+ jours)",
                defaultColor: "Couleur de série par défaut (1+ jours)"
            },
            toast: {
                authFailed: "Échec de l'autorisation : {{error}}",
                failedToAuthorizeMessage: "Échec de l'autorisation : {{message}}",
                authorizationExpired: "L'autorisation de Streaks a expiré. Autorisez-la à nouveau dans les paramètres du plugin Streaks."
            }
        },
        streamerModeOnStream: {
            name: "Mode Streamer auto",
            description: "Active automatiquement le mode Streamer dès que vous lancez un stream sur Discord."
        },
        streamingCodecDisabler: {
            name: "Désactivation de codecs de stream",
            description: "Désactive les codecs vidéo de ton choix pour le streaming et les caméras.",
            option: {
                disableAv1Codec: {
                    label: "Désactiver le codec AV1",
                    description: "Empêcher Discord d'envisager AV1 pour le streaming et les caméras."
                },
                disableH265Codec: {
                    label: "Désactiver le codec H265",
                    description: "Empêcher Discord d'envisager H265 pour le streaming et les caméras."
                },
                disableH264Codec: {
                    label: "Désactiver le codec H264",
                    description: "Empêcher Discord d'envisager H264 pour le streaming et les caméras."
                },
                disableVP8Codec: {
                    label: "Désactiver le codec VP8",
                    description: "Empêcher Discord d'envisager VP8 pour le streaming et les caméras."
                },
                disableVP9Codec: {
                    label: "Désactiver le codec VP9",
                    description: "Empêcher Discord d'envisager VP9 pour le streaming et les caméras."
                }
            }
        },
        superReactionTweaks: {
            name: "Ajustements Super Réactions",
            description: "Personnalise la limite des Super Réactions simultanées et permet de les utiliser par défaut.",
            option: {
                superReactByDefault: {
                    label: "Super Réagir par défaut",
                    description: "Le sélecteur de réaction privilégiera les Super Réactions."
                },
                unlimitedSuperReactionPlaying: {
                    label: "Super Réactions illimitées",
                    description: "Supprime la limite d'affichage des Super Réactions simultanées."
                },
                superReactionPlayingLimit: {
                    label: "Limite de Super Réactions",
                    description: "Nombre max de Super Réactions jouées en même temps. 0 pour désactiver."
                }
            }
        },
        textReplace: {
            name: "Remplacement de texte",
            description: "Remplace du texte dans vos messages (règles disponibles sur le serveur Plexcord).",
            importExport: {
                title: "Importer et exporter",
                description: "Exportez vos règles dans un fichier JSON ou importez des règles pour les ajouter à vos règles existantes.",
                export: "Exporter en JSON",
                import: "Importer un JSON",
                success: "Règles importées avec succès.",
                failed: "Impossible d'importer les règles. Choisissez un fichier JSON TextReplace valide."
            },
            option: {
                replace: {
                    label: "Remplacer",
                    string: "Remplacements simples",
                    stringDescription: "Règles simples de recherche et remplacement. Par exemple, trouver 'brb' et le remplacer par 'be right back'",
                    regex: "Remplacements Regex",
                    regexDescription: "Remplacements plus puissants utilisant des expressions régulières. Cette section est destinée aux utilisateurs avancés. Si vous ne comprenez pas, ignorez-la simplement",
                    myMessages: "Appliquer à mes messages (visible par tous)",
                    othersMessages: "Appliquer aux messages des autres (visible par moi)",
                    allMessages: "Appliquer à tous les messages"
                },
                stringRules: {
                    label: "Règles de texte",
                    description: "Règles utilisant une correspondance de texte simple."
                },
                regexRules: {
                    label: "Règles Regex",
                    description: "Règles utilisant des expressions régulières."
                }
            },
            modal: {
                name: "Nom",
                nameDescription: "Un nom facultatif pour vous aider à identifier cette règle.",
                search: "Rechercher une règle...",
                noResults: "Aucune règle ne correspond à votre recherche.",
                title: "Tester les règles",
                find: "Chercher",
                findRegex: "Motif regex",
                findText: "Texte à remplacer",
                replace: "Remplacer",
                replaceDescription: "Le texte qui remplacera le texte trouvé",
                includes: "Seulement si inclut",
                includesDescription: "Cette règle sera appliquée uniquement si le message inclut ce texte. Ceci est optionnel",
                type: "Tapez un message",
                applied: "Message avec règles appliquées",
                delete: "Supprimer la règle",
                add: "Ajouter une règle",
                empty: "Règle vide",
                rule: "Règle",
            },
            text: {
                optionallyOnlyApplyThis: "Facultativement, n'appliquer cette règle que si le message contient ce texte.",
                emptyRule: "Règle vide {{number}}",
                ruleWithFind: "Règle {{number}} - {{find}}"
            }
        },
        themeAttributes: {
            name: "Attributs de thème",
            description: "Ajoute des attributs de données aux éléments pour faciliter la personnalisation visuelle (thèmes)."
        },
        timezones: {
            name: "Fuseaux horaires",
            description: "Affiche l'heure locale des utilisateurs dans leurs profils et en-têtes de messages.",
            button: {
                wantToSave: "Voulez-vous sauvegarder votre fuseau horaire ? Cliquez ici.",
                yourLocalTimezone: "(Votre fuseau horaire local)"
            },
            context: {
                set: "Définir le fuseau horaire local"
            },
            toast: {
                refresh: {
                    successfully: "Fuseaux horaires actualisés !",
                    failed: "Échec de l'actualisation !",
                    failedTo: "Impossible de rafraîchir les fuseaux horaires."
                },
                update: {
                    successfully: "Fuseau horaire mis à jour !",
                    failed: "Échec de la mise à jour."
                },
                delete: {
                    successfully: "Fuseau horaire supprimé !",
                    failed: "Échec de la suppression."
                },
                auth: {
                    failed: "Authentification échouée.",
                    success: "Autorisation réussie !"
                }
            },
            toolbox: {
                set: "Définir fuseau base de données",
                refresh: "Rafraîchir fuseaux base de données"
            },
            option: {
                showOwnTimezone: {
                    label: "Afficher mon propre fuseau",
                    description: "Afficher votre heure locale dans votre profil."
                },
                twentyFourHourTime: {
                    label: "Format 24 heures",
                    description: "Afficher l'heure au format 24 h"
                },
                showTimezoneInfo: {
                    label: "Afficher infos fuseau",
                    description: "Afficher le nom du fuseau à côté de l'heure."
                },
                showMessageHeaderTime: {
                    label: "Heure dans l'en-tête",
                    description: "Afficher l'heure locale dans les en-têtes de messages."
                },
                showProfileTime: {
                    label: "Heure dans le profil",
                    description: "Afficher l'heure locale dans les profils."
                },
                useDatabase: {
                    label: "Utiliser la base de données",
                    description: "Activer la base de données pour récupérer les fuseaux des autres."
                },
                preferDatabaseOverLocal: {
                    label: "Préférer la base de données",
                    description: "Donner la priorité aux données globales sur le stockage local."
                },
                databaseUrl: {
                    label: "URL de la base de données",
                    description: "L'URL du serveur de base de données des fuseaux horaires."
                },
                setDatabaseTimezone: {
                    label: "Régler fuseau BDD",
                    description: "Enregistrer votre fuseau sur la base de données.",
                    setTimezone: "Enregistrer mon fuseau"
                },
                resetDatabaseTimezone: {
                    label: "Réinitialiser fuseau BDD",
                    description: "Supprimer votre fuseau de la base de données.",
                    failed: "Échec de la réinitialisation."
                },
                askedTimezone: {
                    label: "Demande effectuée",
                    description: "Indique si l'utilisateur a déjà été invité à régler son fuseau."
                },
                recipientTimezoneInDms: {
                    label: "Fuseau horaire du destinataire en MP",
                    description: "En MP, afficher le fuseau horaire du destinataire sur tes messages"
                },
                showLocalTimezone: {
                    label: "Afficher le fuseau horaire local",
                    description: "Afficher le fuseau horaire local au lieu de simplement « local »"
                }
            },
            modal: {
                title: "Fuseaux horaires",
                select: "Choisir un fuseau",
                selectPlaceholder: "Sélectionnez un fuseau horaire",
                delete: "Supprimer le fuseau",
                save: "Sauvegarder"
            },
            text: {
                invalidResponseFormat: "Format de réponse invalide"
            }
        },
        toastNotifications: {
            name: "Notifications Toast",
            description: "Affiche une notification contextuelle (toast) lors de la réception d'un message privé.",
            notification: {
                call: "A commencé un appel avec vous !",
                recipient: {
                    add: "{{target}} a été ajouté au groupe par {{actor}}.",
                    remove: "{{target}} a été retiré du groupe par {{actor}}.",
                    left: "A quitté le groupe."
                },
                channel: {
                    change: {
                        name: "A renommé le salon en {{name}}.",
                        icon: "A changé l'icône du salon."
                    },
                    pinned: "A épinglé un message."
                },
                sent: {
                    embed: "A envoyé une intégration.",
                    sticker: "A envoyé un autocollant.",
                    attachment: "Pièce jointe :"
                },
                redacted: "Le contenu du message a été censuré.",
                friend: {
                    accept: "{{user}} est maintenant votre ami",
                    acceptBody: "Vous pouvez maintenant lui envoyer des messages.",
                    request: "{{user}} vous a envoyé une demande d'ami.",
                    requestBody: "Vous pouvez l'accepter dans l'onglet Amis."
                },
                example: {
                    title: "Exemple de notification",
                    body: "Ceci est le corps d'une notification d'exemple."
                }
            },
            modal: {
                dismiss: "Ignorer la notification",
                attachments: "{{attachments}} pièce(s) jointe(s) envoyée(s)."
            },
            option: {
                position: {
                    label: "Position",
                    description: "Emplacement de la notification sur l'écran",
                    topRight: "Haut Droite",
                    topLeft: "Haut Gauche",
                    bottomRight: "Bas Droite",
                    bottomLeft: "Bas Gauche"
                },
                timeout: {
                    label: "Durée",
                    description: "Temps d'affichage en secondes."
                },
                opacity: {
                    label: "Opacité",
                    description: "Transparence de la notification."
                },
                determineServerNotifications: {
                    label: "Suivre réglages serveurs",
                    description: "Utiliser les paramètres de notification natifs de Discord."
                },
                respectDoNotDisturb: {
                    label: "Respecter Ne pas déranger",
                    description: "Ne pas afficher de notifications lorsque votre statut est Ne pas déranger."
                },
                directMessages: {
                    label: "Messages Privés",
                    description: "Notifications pour les MP."
                },
                groupMessages: {
                    label: "Messages de Groupe",
                    description: "Notifications pour les groupes."
                },
                friendServerNotifications: {
                    label: "Activités Amis & Serveurs",
                    description: "Notifications quand des amis écrivent sur des serveurs communs."
                },
                friendActivity: {
                    label: "Activité d'Amis",
                    description: "Notifications pour les ajouts ou demandes d'ami."
                },
                notifyFor: {
                    label: "Notifier pour",
                    description: "Liste d'ID de salons (séparés par des virgules)."
                },
                ignoreUsers: {
                    label: "Ignorer utilisateurs",
                    description: "Liste d'ID d'utilisateurs à ignorer."
                },
                exampleButton: {
                    label: "Bouton d'exemple",
                    description: "Afficher une notification de test.",
                    show: "Afficher l'exemple"
                }
            }
        },
        toggleVideoBind: {
            name: "Raccourci Vidéo",
            description: "Ajoute un raccourci personnalisable pour basculer la webcam.",
            option: {
                keyBind: {
                    label: "Raccourci",
                    description: "Touche pour basculer la webcam."
                },
                reqCtrl: {
                    label: "Nécessite Ctrl",
                    description: "Maintenir Ctrl pour utiliser."
                },
                reqShift: {
                    label: "Nécessite Maj",
                    description: "Maintenir Maj pour utiliser."
                },
                reqAlt: {
                    label: "Nécessite Alt",
                    description: "Maintenir Alt pour utiliser."
                }
            }
        },
        translate: {
            name: "Traduction",
            description: "Traduisez les messages avec Google Translate ou DeepL.",
            tooltip: {
                label: "Traduire"
            },
            context: {
                translate: "Traduire",
                open: "Ouvrir la fenêtre de traduction",
                auto: "Traduction automatique activée"
            },
            option: {
                receivedInput: {
                    label: "Entrée reçue",
                    description: "Langue d'origine des messages reçus."
                },
                receivedOutput: {
                    label: "Sortie reçue",
                    description: "Langue vers laquelle traduire les messages reçus."
                },
                sentInput: {
                    label: "Entrée envoyée",
                    description: "Langue d'origine de vos messages."
                },
                sentOutput: {
                    label: "Sortie envoyée",
                    description: "Langue vers laquelle traduire vos messages avant l'envoi."
                },
                service: {
                    label: "Service de traduction",
                    description: "DeepL nécessite une clé API valide.",
                    descriptionWeb: "Service de traduction (Non supporté sur Web !)",
                    google: "Google Translate",
                    deepl: "DeepL Gratuit - Clé API requise",
                    deeplPro: "DeepL Pro - Clé API requise",
                    kagi: "Kagi Traduction - Clé API requise"
                },
                kagiSession: {
                    label: "Session Kagi",
                    description: "Obtenez votre jeton de session sur https://kagi.com/settings?p=user_details"
                },
                deeplApiKey: {
                    label: "Clé API DeepL",
                    description: "Votre clé API DeepL.",
                    placeholder: "Récupérez votre clé sur deepl.com"
                },
                autoTranslate: {
                    label: "Traduction auto",
                    description: "Traduire automatiquement vos messages avant envoi (Maj+Clic droit sur le bouton pour basculer)."
                },
                showAutoTranslateTooltip: {
                    label: "Afficher info-bulle auto",
                    description: "Afficher une info-bulle lors d'une traduction automatique."
                }
            },
            modal: {
                title: "Traduire",
                select: "Choisir une langue",
                auto: "Auto-Traduction",
                dismiss: "Fermer",
                translated: "traduit depuis {{from}}",
                failed: {
                    to: "Échec de la traduction de {{text}}",
                    connect: "Échec de connexion à l'API DeepL :"
                },
                wrong: "Un problème est survenu. Vérifiez la console ou contactez le support.",
                deepl: {
                    api: "Quota DeepL dépassé. Utilisation de Google Translate.",
                    apiKey: "Clé API DeepL manquante. Retour à Google.",
                    auth: "Clé API ou version invalide."
                },
                autoTranslateEnabled: {
                    title: "Traduction automatique Plexcord activée",
                    body: "Vous venez d'activer la traduction automatique ! Tous vos messages seront traduits avant l'envoi.",
                    confirm: "Désactiver la traduction auto",
                    cancel: "J'ai compris",
                    secondaryConfirm: "Ne plus afficher"
                }
            },
            button: {
                manageLanguages: "Personnaliser les langues de traduction et la traduction automatique"
            }
        },
        typingIndicator: {
            name: "Indicateur d'écriture",
            description: "Ajoute un indicateur si quelqu'un écrit dans un salon.",
            option: {
                includeCurrentChannel: {
                    label: "Inclure le salon actuel",
                    description: "Afficher ou non l'indicateur d'écriture pour le salon actuellement sélectionné."
                },
                includeMutedChannels: {
                    label: "Inclure les salons muets",
                    description: "Afficher ou non l'indicateur d'écriture pour les salons en sourdine."
                },
                includeIgnoredUsers: {
                    label: "Inclure les utilisateurs ignorés",
                    description: "Afficher ou non l'indicateur d'écriture pour les utilisateurs ignorés."
                },
                includeBlockedUsers: {
                    label: "Inclure les utilisateurs bloqués",
                    description: "Afficher ou non l'indicateur d'écriture pour les utilisateurs bloqués."
                },
                indicatorMode: {
                    label: "Mode de l'indicateur",
                    description: "Comment l'indicateur doit-il être affiché ?",
                    both: "Avatars et points animés",
                    dots: "Points animés",
                    avatars: "Avatars"
                }
            }
        },
        typingTweaks: {
            name: "Ajustements d'écriture",
            description: "Affiche les avatars et les couleurs de rôles dans l'indicateur d'écriture.",
            option: {
                showAvatars: {
                    label: "Afficher plusieurs utilisateurs",
                    description: "Afficher les avatars dans l'indicateur d'écriture."
                },
                showRoleColors: {
                    label: "Afficher les couleurs de rôles",
                    description: "Utiliser les couleurs des rôles dans l'indicateur d'écriture."
                },
                alternativeFormatting: {
                    label: "Formatage alternatif",
                    description: "Afficher un message plus utile lorsque plusieurs utilisateurs écrivent."
                },
                amITyping: {
                    label: "Est-ce que j'écris ?",
                    description: "Vous indique si les autres peuvent vous voir écrire."
                }
            },
            others: {
                areTyping: "et {{count}} autres écrivent..."
            }
        },
        unindent: {
            name: "Désindenter",
            description: "Supprime l'indentation initiale des blocs de code."
        },
        unitConverter: {
            name: "Convertisseur d'unités",
            description: "Convertit les unités métriques en unités impériales et vice versa.",
            tooltip: "Convertir les unités",
            option: {
                myUnits: {
                    label: "Mes unités",
                    description: "Les unités que vous utilisez et vers lesquelles vous voulez convertir. Par défaut : Impérial.",
                    imperial: "Impérial",
                    metric: "Métrique"
                }
            },
            button: {
                dismiss: "Ignorer"
            }
        },
        unlimitedAccounts: {
            name: "Comptes illimités",
            description: "Augmente le nombre de comptes que vous pouvez ajouter.",
            option: {
                maxAccounts: {
                    label: "Nombre max de comptes",
                    description: "Nombre de comptes pouvant être ajoutés (0 pour aucune limite)."
                }
            }
        },
        unlockedAvatarZoom: {
            name: "Zoom d'avatar débloqué",
            description: "Permet de zoomer davantage lors du recadrage de votre avatar.",
            option: {
                zoomMultiplier: {
                    label: "Multiplicateur de zoom",
                    description: "Facteur de zoom."
                }
            }
        },
        unsuppressEmbeds: {
            name: "Rétablir les intégrations",
            description: "Permet de rétablir les intégrations masquées dans les messages.",
            context: {
                unsuppress: "Rétablir l'intégration",
                suppress: "Masquer l'intégration"
            }
        },
        uselessInfo: {
            name: "Infos inutiles",
            description: "Affiche des informations aléatoires et inutiles dans Discord ; raccourcis et espacement réglables.",
            recording: "Enregistrement...",
            record: "Enregistrer",
            option: {
                delay: {
                    label: "Intervalle de notification",
                    description: "Intervalle d'affichage des notifications en minutes."
                },
                historyHotkey: {
                    label: "Raccourci du panneau d'historique",
                    description: "Touche pour afficher l'historique des faits précédemment montrés."
                },
                randomFactHotkey: {
                    label: "Raccourci info aléatoire",
                    description: "Touche pour ouvrir le panneau d'infos aléatoires."
                },
                sameFact: {
                    label: "Éviter les doublons",
                    description: "Éviter d'afficher le même fait tant que tous les faits n'ont pas été montrés."
                },
                lastNFacts: {
                    label: "Nombre de récents à éviter",
                    description: "Nombre de faits récents à ne pas répéter (0 = tous)."
                }
            },
            modal: {
                title: "UselessInfo",
                history: {
                    none: "Aucun fait pour le moment. Utilisez le raccourci veya attendez.",
                    source: "Source"
                },
                showRandom: "Afficher aléatoire",
                close: "Fermer"
            },
            notification: {
                title: "Le saviez-vous ?"
            }
        },
        userMessagesPronouns: {
            name: "Pronoms dans les messages",
            description: "Affiche les pronoms des utilisateurs dans l'en-tête des messages.",
            option: {
                pronounsFormat: {
                    label: "Format des pronoms",
                    description: "Comment les pronoms apparaissent dans le chat.",
                    lowercase: "Minuscules",
                    capitalized: "Majuscule initiale"
                },
                showSelf: {
                    label: "S'afficher soi-même",
                    description: "Activer ou désactiver l'affichage de vos propres pronoms."
                }
            }
        },
        userVoiceShow: {
            name: "Indicateur vocal utilisateur",
            description: "Affiche un indicateur lorsqu'un utilisateur est dans un salon vocal.",
            option: {
                showInUserProfileModal: {
                    label: "Afficher dans le profil",
                    description: "Afficher l'indicateur vocal à côté du nom dans le profil de l'utilisateur."
                },
                showInMemberList: {
                    label: "Afficher dans la liste des membres",
                    description: "Afficher l'indicateur vocal dans la liste des membres et des MP."
                },
                showInMessages: {
                    label: "Afficher dans les messages",
                    description: "Afficher l'indicateur vocal directement dans les messages."
                }
            },
            modal: {
                inVoiceChat: "En salon vocal"
            },
            notification: {
                cannotJoin: "Vous ne pouvez pas rejoindre le salon vocal de cet utilisateur."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Affiche les bannières d'utilisateurs via USRBG, permettant d'avoir une bannière sans Nitro.",
            option: {
                nitroFirst: {
                    label: "Nitro en priorité",
                    description: "Bannière à utiliser si Nitro ve USRBG sont tous deux présents.",
                    nitro: "Bannière Nitro",
                    usrbg: "Bannière USRBG"
                },
                voiceBackground: {
                    label: "Arrière-plan vocal",
                    description: "Utiliser les bannières USRBG comme fond de chat vocal."
                }
            },
            button: "Obtenir votre propre bannière USRBG"
        },
        validReply: {
            name: "Réponse valide",
            description: "Corrige l'erreur 'Le message n'a pas pu être chargé' lors du survol d'une réponse."
        },
        validUser: {
            name: "Utilisateur valide",
            description: "Corrige les mentions d'utilisateurs inconnus s'affichant comme '@unknown-user' (survolez une mention pour corriger).",
            badges: {
                discordBugHunter: "Chasseur de bugs Discord",
                moderatorProgramsAlumni: "Ancien du programme modérateur",
                discordStaff: "Staff Discord",
                hypeSquadEvents: "Événements HypeSquad",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                partneredServerOwner: "Propriétaire de serveur partenaire",
                nitro: "Discord Nitro",
                earlySupporter: "Soutien de la première heure",
                earlyVerifiedBotDeveloper: "Développeur de bot vérifié pionnier"
            }
        },
        voiceChatDoubleClick: {
            name: "Double-clic vocal",
            description: "Rejoindre les salons vocaux via un double-clic au lieu d'un simple clic."
        },
        vcNarrator: {
            name: "Narrateur Vocal",
            description: "Annonce quand les utilisateurs rejoignent, quittent ou changent de salon via le narrateur système.",
            option: {
                voice: {
                    label: "Voix"
                },
                volume: {
                    label: "Volume",
                    description: "Volume du narrateur."
                },
                rate: {
                    label: "Vitesse",
                    description: "Vitesse de la diction."
                },
                sayOwnName: {
                    label: "Dire son propre nom",
                    description: "Prononcer votre propre nom."
                },
                latinOnly: {
                    label: "Caractères latins uniquement",
                    description: "Supprimer les caractères non-latins des noms avant de les prononcer."
                },
                joinMessage: {
                    label: "Message de jonction",
                    description: "Message quand quelqu'un rejoint."
                },
                leaveMessage: {
                    label: "Message de départ",
                    description: "Message quand quelqu'un quitte."
                },
                moveMessage: {
                    label: "Message de déplacement",
                    description: "Message quand quelqu'un change de salon."
                },
                muteMessage: {
                    label: "Message micro coupé",
                    description: "Message de mise en sourdine (soi-même uniquement pour l'instant)."
                },
                unmuteMessage: {
                    label: "Message micro activé",
                    description: "Message de réactivation micro."
                },
                deafenMessage: {
                    label: "Message casque coupé",
                    description: "Message de coupure du son."
                },
                undeafenMessage: {
                    label: "Message casque activé",
                    description: "Message de réactivation du son."
                }
            },
            modal: {
                title: "Jouer des sons d'exemple",
                voiceTitle: "Voix",
                voice: "Sélectionnez une voix",
                languageTitle: "Langue",
                language: "Sélectionnez une langue",
                noVoice: "Aucune voix de narrateur trouvée.",
                linuxNote: "Installez speech-dispatcher veya espeak ve lancez Discord avec le flag --enable-speech-dispatcher",
                someNarrator: "Essayez d'en installer dans les paramètres Narrateur de votre système d'exploitation.",
                dontHaveEnglish: "Vous n'avez pas de voix anglaise installée, le rendu pourrait être étrange.",
                customiseMessages: "Vous pouvez personnaliser les messages vocaux ci-dessous. Laissez vide pour désactiver.",
                placeholdersInfo: "Les balises {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} et {{CHANNEL}} seront remplacées respectivement par le nom de l'utilisateur, son nom d'affichage, son pseudo sur le serveur et le nom du salon."
            }
        },
        viewIcons: {
            name: "Voir les icônes",
            description: "Rend les avatars ve bannières cliquables dans les profils, et ajoute des options 'Voir l'avatar/la bannière' dans les menus contextuels.",
            context: {
                view: {
                    avatar: "Voir l'avatar",
                    serverAvatar: "Voir l'avatar de serveur",
                    icon: "Voir l'icône",
                    banner: "Voir la bannière"
                }
            },
            option: {
                format: {
                    label: "Format",
                    description: "Format d'image pour les images non-animées. Les animations utiliseront toujours .gif."
                },
                imgSize: {
                    label: "Taille de l'image",
                    description: "Dimension de l'image à afficher."
                }
            },
            text: {
                viewAvatarDecoration: "Voir la décoration d'avatar"
            }
        },
        viewRaw: {
            name: "Voir le contenu brut",
            description: "Copier ve afficher le contenu/données brutes de n'importe quel message, salon veya serveur.",
            context: {
                copyLeft: "Copier brut (Clic gauche) / Voir brut (Clic droit)",
                copyRight: "Copier brut (Clic droit) / Voir brut (Clic gauche)",
                view: "Voir les données brutes"
            },
            option: {
                popoverButton: {
                    label: "Bouton contextuel",
                    description: "Afficher un bouton dans le menu rapide du message pour voir ses données brutes."
                },
                clickMethod: {
                    label: "Méthode de clic",
                    description: "Changer le type de clic pour voir le contenu brut.",
                    left: "Clic gauche pour voir le contenu brut.",
                    right: "Clic droit pour voir le contenu brut."
                },
                messageContextMenu: {
                    description: "Afficher dans le menu contextuel des messages",
                    label: "Menu contextuel des messages"
                },
                sortKeys: {
                    description: "Trier les clés des données brutes par ordre alphabétique.",
                    label: "Trier les clés"
                },
                stripSensitiveData: {
                    description: "Retirer les données sensibles des données brutes, comme ton e-mail et ton numéro de téléphone.",
                    label: "Retirer les données sensibles"
                }
            },
            modal: {
                title: "Vue brute",
                content: "Contenu du message",
                data: "Données {{type}}",
                copied: "Données {{type}} copiées !",
                copy: "Copier le JSON {{type}}",
                copiedContent: "Contenu copié !",
                copyContent: "Copier le contenu brut"
            },
            types: {
                message: "Message",
                channel: "Salon",
                guild: "Serveur",
                role: "Rôle",
                user: "Utilisateur"
            },
            text: {
                copyTypeData: "Copier les données {{type}}",
                rawTypeData: "Données brutes {{type}}",
                messageData: "Données du message"
            }
        },
        voiceButtons: {
            name: "Boutons vocaux",
            description: "Envoyez un MP, coupez le micro veya le son d'un utilisateur directement depuis le panneau d'appel vocal.",
            option: {
                showChatButton: {
                    label: "Afficher bouton Chat",
                    description: "Afficher ou non le bouton de message privé."
                },
                showMuteButton: {
                    label: "Afficher bouton Micro",
                    description: "Afficher ou non le bouton pour couper le micro."
                },
                showDeafenButton: {
                    label: "Afficher bouton Casque",
                    description: "Afficher ou non le bouton pour couper le son."
                },
                muteSoundboard: {
                    label: "Couper le Soundboard",
                    description: "Coupe aussi leur soundboard lors du clic sur le bouton Casque."
                },
                disableVideo: {
                    label: "Désactiver la vidéo",
                    description: "Coupe leur flux vidéo lors du clic sur le bouton Casque."
                },
                useServer: {
                    label: "Utiliser le serveur",
                    description: "Utiliser la sourdine serveur au lieu de locale si vous avez les permissions."
                },
                serverSelf: {
                    label: "Sourdine serveur (soi-même)",
                    description: "S'appliquer une sourdine serveur lors de l'utilisation des boutons."
                },
                showButtonsSelf: {
                    label: "Afficher boutons sur soi",
                    description: "Afficher les boutons pour votre propre utilisateur.",
                    display: "Afficher",
                    hide: "Masquer",
                    disable: "Désactiver"
                },
                whichNameToShow: {
                    label: "Quel nom afficher",
                    description: "Nom à afficher dans l'info-bulle.",
                    global: "Nom global",
                    username: "Nom d'utilisateur",
                    both: "Les deux"
                },
                buttonPosition: {
                    label: "Position des boutons",
                    description: "Emplacement des boutons dans l'interface.",
                    left: "Gauche",
                    right: "Droite",
                }
            },
            tooltip: {
                navigate: "Aller aux MP",
                open: "Ouvrir les MP avec {{username}}",
                yourself: "vous-même",
                serverMute: "Sourdine serveur",
                serverDeafen: "Sourdine casque serveur",
                mute: "Couper micro",
                deafen: "Couper son",
                unmute: "Activer micro",
                undeafen: "Activer son",
                serverUnmute: "Désactiver sourdine serveur",
                serverUndeafen: "Désactiver sourdine casque serveur"
            }
        },
        voiceChannelLog: {
            name: "Journal des salons vocaux",
            description: "Journalise qui rejoint ve quitte les salons vocaux.",
            context: {
                view: "Voir le journal du salon"
            },
            modal: {
                joined: "A rejoint <#{{channel}}>",
                left: "A quitté <#{{channel}}>",
                movedTo: "Déplacé vers <#{{channel}}>",
                movedFrom: "Déplacé depuis <#{{channel}}>",
                noLogs: "Aucun journal à afficher.",
                logs: "Journaux de {{channel}}"
            },
            option: {
                mode: {
                    label: "Mode",
                    description: "Comment afficher le journal vocal.",
                    menu: "Menu du journal",
                    associated: "Directement dans le chat associé",
                    both: "Chat ve menu du journal"
                },
                voiceChannelChatSelf: {
                    label: "S'inclure dans le chat vocal",
                    description: "Journaliser vos propres événements vocaux dans les salons."
                },
                voiceChannelChatSilent: {
                    label: "Messages de chat silencieux",
                    description: "Les messages de jonction/départ dans le chat seront silencieux."
                },
                voiceChannelChatSilentSelf: {
                    label: "Messages silencieux pour soi",
                    description: "Les messages seront silencieux si vous êtes présent dans le salon."
                },
                ignoreBlockedUsers: {
                    label: "Ignorer les utilisateurs bloqués",
                    description: "Ne pas journaliser les utilisateurs bloqués."
                }
            }
        },
        voiceChatUtilities: {
            name: "Utilitaires de chat vocal",
            description: "Permet d'effectuer des actions groupées sur tout un salon (déplacer, rendre muet, déconnecter, etc.).",
            option: {
                waitAfter: {
                    label: "Attendre après action",
                    description: "Nombre d'actions API avant de marquer une pause (évite les limites de débit)."
                },
                waitSeconds: {
                    label: "Secondes d'attente",
                    description: "Temps d'attente entre chaque action (en secondes)."
                }
            },
            context: {
                voiceTools: "Outils vocaux",
                mentionAll: "Mentionner tous les utilisateurs",
                disconnectAll: "Tout déconnecter",
                muteAll: "Tout rendre muet",
                unmuteAll: "Tout réactiver",
                deafenAll: "Couper le son pour tous",
                undeafenAll: "Réactiver le son pour tous",
                moveAll: "Tout déplacer"
            }
        },
        voiceDownload: {
            name: "Téléchargement vocal",
            description: "Ajoute une option de téléchargement aux messages vocaux (ouvre un nouvel onglet).",
            context: {
                download: "Télécharger le message vocal"
            }
        },
        voiceMessages: {
            name: "Messages Vocaux",
            description: "Permet d'envoyer des messages vocaux comme sur mobile. Faites un clic droit sur le bouton d'upload.",
            option: {
                noiseSuppression: {
                    label: "Suppression du bruit",
                    description: "Suppression du bruit ambiant."
                },
                echoCancellation: {
                    label: "Annulation d'écho",
                    description: "Annulation de l'écho acoustique."
                }
            },
            notification: {
                failed: {
                    upload: "Échec de l'envoi du message vocal.",
                    start: "Échec du démarrage de l'enregistrement.",
                    finish: "Échec de la fin de l'enregistrement."
                }
            },
            context: {
                sendVoiceMessage: "Envoyer un message vocal",
                missingPermissions: "(Permissions manquantes)"
            },
            modal: {
                record: "Enregistrer un message vocal",
                upload: "Télécharger un fichier",
                preview: "Aperçu",
                failed: "Échec de l'analyse du fichier audio :",
                oggOpus: "Les messages vocaux doivent être en OggOpus pour iOS. Ce fichier est en {{type}} ve ne sera pas lisible sur iOS.",
                fix: "Pour corriger, convertissez-le en OggOpus, par exemple via {{link}}.",
                sending: "Envoi du message vocal... Veuillez patienter.",
                stop: "Arrêter l'enregistrement",
                start: "Démarrer l'enregistrement",
                resume: "Reprendre l'enregistrement",
                pause: "Mettre en pause",
                recording: "ENREGISTREMENT",
                send: "Envoyer",
            },
            text: {
                convertioWebConverter: "convertisseur web convertio"
            }
        },
        volumeBooster: {
            name: "Booster de volume",
            description: "Permet de régler le volume des utilisateurs ve des streams au-delà du maximum par défaut.",
            option: {
                multiplier: {
                    label: "Multiplicateur",
                    description: "Multiplicateur de volume."
                }
            }
        },
        webContextMenus: {
            name: "Menus contextuels Web",
            description: "Réintègre les menus contextuels manquants sur la version Web : Liens, Images et saisie de texte (Copier, Coller, Orthographe).",
            option: {
                addBack: {
                    label: "Réactiver",
                    description: "Rétablir les menus contextuels Discord pour les images, liens ve la barre de saisie."
                }
            }
        },
        webKeybinds: {
            name: "Raccourcis Web",
            description: "Réajoute les raccourcis absents de la version web de Discord. Ne fonctionne pleinement que sur Plextron/Legcord, pas dans ton navigateur",
            option: {
                showNavigationButtons: {
                    description: "Afficher les boutons de navigation précédent/suivant dans la barre de titre.",
                    label: "Afficher les boutons de navigation"
                },
                overrideCommonKeybinds: {
                    description: "Permet à Discord de remplacer les raccourcis de navigation d'onglets les plus courants (ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+n). Ne fonctionne que dans quelques navigateurs qui donnent la priorité aux raccourcis des sites.",
                    label: "Remplacer les raccourcis courants"
                }
            }
        },
        webScreenShareFixes: {
            name: "Correctifs de partage d'écran Web",
            description: "Supprime la limite de débit de 2500kbps sur les clients Chromium ve Plextron.",
            option: {
                experimentalAV1Support: {
                    label: "Support expérimental AV1",
                    description: "Activer le support du codec AV1. Peut causer des chargements infinis."
                }
            }
        },
        whoReacted: {
            name: "Qui a réagi ?",
            description: "Affiche les avatars des utilisateurs ayant réagi à un message.",
            option: {
                avatarClick: {
                    label: "Clic sur avatar",
                    description: "Activer le clic sur les avatars dans les réactions."
                },
                clickableAvatars: {
                    description: "Lorsque c'est activé, cliquer sur l'avatar d'un utilisateur ayant réagi ouvre son profil au lieu d'ajouter la réaction",
                    label: "Avatars cliquables"
                }
            }
        },
        whosWatching: {
            name: "Qui regarde ?",
            description: "Survolez l'icône de partage d'écran pour voir quels utilisateurs regardent votre stream.",
            modal: {
                noSpectator: "Aucun spectateur"
            },
            option: {
                showPanel: {
                    label: "Afficher le panneau",
                    description: "Afficher les spectateurs sous le panneau de partage d'écran."
                }
            }
        },
        writeUpperCase: {
            name: "Majuscules automatiques",
            description: "Met automatiquement en majuscule la première lettre de chaque phrase.",
            option: {
                blockedWords: {
                    label: "Mots bloqués",
                    description: "Mots à ne pas mettre en majuscule (séparés par une virgule)."
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Transmet les notifications Discord à XSOverlay pour une consultation facile en VR.",
            notification: {
                call: {
                    title: "{{user}} vous appelle.",
                    content: "Appel entrant"
                },
                message: {
                    reply: " (réponse)",
                    embed: " [intégration] ",
                    onlyEmbed: "A envoyé une intégration",
                    sticker: " [autocollant] ",
                    onlySticker: "A envoyé un autocollant",
                    image: "image",
                    attachment: "pièce jointe"
                },
                test: {
                    title: "Bonjour de Plexcord !",
                    content: "Ceci est une notification de test ! *Explosion*",
                    button: "Envoyer une notification de test"
                }
            },
            option: {
                webSocketPort: {
                    label: "Port WebSocket",
                    description: "Port du WebSocket."
                },
                preferUDP: {
                    label: "Préférer UDP",
                    description: "Activer si vous utilisez une ancienne version de XSOverlay. Ignoré sur le web."
                },
                botNotifications: {
                    label: "Notifications de Bots",
                    description: "Autoriser les notifications venant de bots."
                },
                serverNotifications: {
                    label: "Notifications de Serveurs",
                    description: "Autoriser les notifications de serveurs."
                },
                dmNotifications: {
                    label: "Notifications MP",
                    description: "Autoriser les notifications de messages privés."
                },
                groupDmNotifications: {
                    label: "Notifications Groupes",
                    description: "Autoriser les notifications de messages de groupe."
                },
                callNotifications: {
                    label: "Notifications d'Appels",
                    description: "Autoriser les notifications d'appels."
                },
                pingColor: {
                    label: "Couleur de mention",
                    description: "Couleur des mentions d'utilisateur."
                },
                channelPingColor: {
                    label: "Couleur mention salon",
                    description: "Couleur des mentions de salon."
                },
                soundPath: {
                    label: "Son de notification",
                    description: "Type de son (default/warning/error)."
                },
                timeout: {
                    label: "Durée",
                    description: "Durée de la notification (secondes)."
                },
                lengthBasedTimeout: {
                    label: "Durée basée sur la longueur",
                    description: "Prolonge la durée selon la longueur du message."
                },
                opacity: {
                    label: "Opacité",
                    description: "Transparence de la notification."
                },
                volume: {
                    label: "Volume",
                    description: "Volume sonore."
                }
            }
        },
        youtubeAdblock: {
            name: "YouTube Adblock",
            description: "Bloque les publicités dans les intégrations YouTube ve l'activité Watch Together via AdGuard."
        },
        youtubeDescription: {
            name: "YouTube Description",
            description: "Ajoute les descriptions aux vidéos YouTube intégrées."
        },
        addAttachments: {
            name: "AddAttachments",
            description: "Permet d'ajouter de nouvelles pièces jointes lors de la modification des messages",
            toast: {
                youCannotAddMore: "Tu ne peux pas ajouter plus de pièces jointes à ce message.",
                youCanOnlyAdd: "Vous ne pouvez ajouter que {{count}} pièce(s) jointe(s) de plus à ce message.",
                uploadingThisCanTake: "Envoi en cours, cela peut prendre un moment...",
                addedOne: "Pièce jointe ajoutée avec succès !",
                addedMany: "Pièces jointes ajoutées avec succès !"
            },
            text: {
                addAttachments: "Ajouter des pièces jointes"
            }
        },
        advancedPermissions: {
            option: {
                simplifiedCard: {
                    description: "Que faire de la carte de permissions simplifiée de Discord",
                    label: "Carte simplifiée",
                    hide: "La masquer",
                    collapse: "La rendre repliable",
                    show: "La laisser visible"
                },
                collapsedByDefault: {
                    description: "Commencer avec les permissions simplifiées repliées.",
                    label: "Replié par défaut"
                }
            },
            name: "AdvancedPermissions",
            description: "Affiche la carte des permissions avancées par défaut.",
            text: {
                simplifiedPermissions: "Permissions simplifiées"
            }
        },
        autoJumpToMessage: {
            option: {
                onlyWhenUnfocused: {
                    description: "Ne sauter automatiquement aux messages que lorsque la fenêtre de Discord n'est pas au premier plan.",
                    label: "Seulement hors focus"
                }
            },
            name: "AutoJumpToMessage",
            description: "Ouvre automatiquement le salon des nouveaux messages."
        },
        betterForwards: {
            text: {
                serverIconForName: "Icône du serveur de {{name}}",
                messageAttachments: "Pièces jointes du message",
                messageTextWillNot: "Le texte du message ne sera pas transféré lorsque cette option est désactivée",
                forwardEverything: "Tout transférer",
                viewServer: "Voir le serveur",
                embed: "Intégration",
                embedNumber: "Intégration {{number}}",
                image: "Image",
                video: "Vidéo",
                serverIcon: "Icône du serveur {{name}}",
                dmIcon: "Icône de MP de {{name}}",
                groupDmIcon: "Icône du groupe privé {{name}}"
            },
            option: {
                resendOnFail: {
                    description: "Tente de renvoyer un message transféré si le transfert échoue. Peut provoquer des mentions ou du spam involontaires. Contourne les restrictions NSFW.",
                    label: "Renvoyer en cas d'échec"
                },
                forwardPreface: {
                    description: "Par quoi le message transféré doit commencer",
                    label: "Préfixe de transfert"
                },
                dontFollowForwards: {
                    description: "Après avoir transféré un seul message, ne pas y aller. Maintiens Maj pour ignorer ce comportement.",
                    label: "Ne pas suivre les transferts"
                },
                selfForward: {
                    description: "Afficher le salon actuel dans la fenêtre de la liste de transfert.",
                    label: "Transfert vers soi-même"
                }
            },
            name: "BetterForwards",
            description: "Outils de transfert de messages, incluant le contournement NSFW et des améliorations de l'interface."
        },
        betterImageEditor: {
            text: {
                search: "Rechercher",
                searchSavedPictures: "Rechercher dans les images enregistrées",
                clearTheSearch: "Effacer la recherche",
                savedPictures: "Images enregistrées",
                removeName: "Retirer {{name}}",
                removeHoldShiftTo: "Retirer. Maintiens Maj pour ignorer la confirmation",
                originals: "Originaux",
                putBackTheLast: "Remettre le dernier",
                forgetEveryRememberedCrop: "Oublier tous les recadrages mémorisés ?",
                yourPicturesStayEach: "Tes images restent. Chacune s'ouvrira sans cadrage à partir de maintenant, jusqu'à ce que tu la recadres.",
                forget: "Oublier",
                cancel: "Annuler",
                clearSavedPictures: "Effacer les images enregistrées ?",
                everyPictureYouHave: "Toutes les images enregistrées ici disparaissent, avec le recadrage mémorisé pour chacune. L'archive de Discord ainsi que ton avatar et ta bannière actuels ne sont pas touchés.",
                clear: "Effacer",
                removeThisPicture: "Retirer cette image ?",
                remove: "Retirer",
                keepTheCroppedCopy: "Garder la copie recadrée ?",
                itGoesOnThe: "Elle va sur l'étagère {{toLowerCase}}, à côté de tes originaux.",
                keep: "Garder",
                noThanks: "Non merci",
                exportToAFile: "Exporter vers un fichier",
                importFromAFile: "Importer depuis un fichier",
                forgetRememberedFraming: "Oublier le cadrage mémorisé",
                clearSavedPictures2: "Effacer les images enregistrées",
                croppedKind: "{{kind}} recadrés",
                unpinName: "Désépingler {{name}}",
                pinName: "Épingler {{name}}",
                pinnedNeverDrops: "Épinglé, il ne quittera jamais l'étagère",
                pinNeverDrops: "Épingler pour qu'il ne quitte jamais l'étagère",
                nothingMatches: "Rien ne correspond ici",
                originalsEmpty: "Les images que vous choisissez, collez ou déposez arrivent ici",
                croppedEmpty: "Les images que vous recadrez arrivent ici",
                forgotFraming: "Cadrage oublié sur {{count}} image(s)",
                nothingFramed: "Rien n'était cadré",
                pictureLibrary: "Bibliothèque d'images",
                addedPictures: "{{count}} image(s) ajoutée(s)",
                nothingNew: "Rien de nouveau dans ce fichier",
                shownOfTotal: "{{shown}} sur {{total}}",
                keptCount: "{{count}} conservées",
                youAreWearingThis: "Vous portez ceci",
                removePictureBody: "{{name}} sera retiré de vos images enregistrées, avec le recadrage mémorisé."
            },
            option: {
                librarySize: {
                    description: "Combien d'images conserver sur chaque étagère.",
                    label: "Taille de la bibliothèque"
                },
                rememberCrop: {
                    description: "Restaure le zoom et la position que tu as utilisés en dernier pour une image.",
                    label: "Mémoriser le recadrage"
                },
                forgetFraming: {
                    description: "Oublie tous les recadrages mémorisés et ouvre chaque image comme le ferait Discord.",
                    label: "Oublier le cadrage"
                },
                saveCropped: {
                    description: "Garde une copie de chaque image après l'avoir recadrée.",
                    label: "Enregistrer les recadrées"
                },
                askBeforeSavingCropped: {
                    description: "Demander d'abord au lieu de garder automatiquement la copie recadrée.",
                    label: "Demander avant d'enregistrer"
                },
                transfer: {
                    description: "Transfère tes images, ainsi que le cadrage de chacune, vers un autre appareil.",
                    label: "Transfert"
                },
                clearLibrary: {
                    description: "Supprime toutes les images que tu as enregistrées.",
                    label: "Vider la bibliothèque"
                }
            },
            name: "BetterImageEditor",
            description: "Conserve une étagère de tes images dans l'éditeur d'avatar et de bannière, et mémorise comment tu as recadré chacune.",
            toast: {
                couldNotExportYour: "Impossible d'exporter tes images",
                couldNotReadThat: "Impossible de lire ce fichier",
                thatPictureIsMissing: "Cette image est introuvable",
                thatPictureIsToo: "Cette image est trop grande pour Discord",
                couldNotUseThat: "Impossible d'utiliser cette image",
                couldNotKeepThe: "Impossible de garder la copie recadrée"
            },
            kind: {
                avatars: "avatars",
                banners: "bannières",
                serverIcons: "icônes de serveur",
                serverBanners: "bannières de serveur",
                eventCovers: "couvertures d'événement",
                homeHeaders: "en-têtes d'accueil",
                decorations: "décorations",
                widgetCovers: "couvertures de widget",
                widgetImages: "images de widget"
            }
        },
        cancelFriendRequest: {
            name: "CancelFriendRequest",
            description: "Ajoute un moyen d'annuler les demandes d'ami envoyées depuis les profils.",
            text: {
                cancelOutgoingFriendRequest: "Annuler la demande d'ami envoyée"
            }
        },
        clipUpload: {
            text: {
                createdAtMustBe: "La date de création doit être une date valide.",
                cancel: "Annuler",
                uploadClipFile: "Envoyer un fichier de clip",
                fileName: "Nom du fichier",
                title: "Titre",
                epicMoment: "Moment épique",
                message: "Message",
                checkOutThisClip: "Regarde ce clip !",
                spoiler: "Spoiler",
                remix: "Remix",
                thumbnail: "Miniature",
                file: "Fichier",
                selectFile: "Choisir un fichier",
                parseClipMetadataFrom: "Extraire les métadonnées du clip depuis le fichier",
                selectFriends: "Choisir des amis",
                selectAGame: "Choisir un jeu",
                customApplicationId: "ID d'application personnalisé",
                createdAt: "Créé le",
                participants: "Participants",
                onlyTagPeopleWho: "N'identifie que les personnes présentes qui ont accepté d'apparaître dans ce clip.",
                gameApplication: "Jeu/Application",
                uploadClipFile2: "Envoyer un fichier de clip",
                uploading: "Envoi en cours",
                upload: "Envoyer",
                noFileSelected: "Aucun fichier sélectionné",
                couldNotPrepare: "Impossible de préparer le fichier sélectionné.",
                couldNotRead: "Impossible de lire le fichier sélectionné.",
                couldNotUpdateMetadata: "Impossible de mettre à jour les métadonnées du clip.",
                notCompatible: "Ce fichier n'est pas compatible. Utilisez un clip MP4 avec vidéo H.264 et audio AAC.",
                uploadFailed: "Échec de l'envoi.",
                noUploadSlot: "Discord n'a pas fourni d'emplacement d'envoi.",
                uploadCanceled: "Envoi annulé.",
                failedToUpload: "Impossible d'envoyer le clip.",
                selectClipFile: "Sélectionner un fichier de clip",
                mp4Video: "Vidéo MP4"
            },
            name: "ClipUpload",
            description: "Ajoute un bouton pour envoyer un fichier vidéo local en tant que clip Discord.",
            toast: {
                checkingClipFile: "Vérification du fichier de clip.",
                convertingClipFile: "Conversion du fichier de clip.",
                clipUploaded: "Clip envoyé."
            }
        },
        collapsibleUI: {
            name: "CollapsibleUI",
            description: "Zones repliables natives pour les salons, les membres, les boutons du chat et la zone utilisateur.",
            text: {
                collapsibleUi: "Interface repliable",
                guildBar: "Barre des serveurs",
                channelList: "Liste des salons",
                membersList: "Liste des membres",
                messageButtons: "Boutons de message",
                titleBar: "Barre de titre",
                headerBar: "Barre d'en-tête",
                userArea: "Zone utilisateur"
            },
            option: {
                detachUserArea: {
                    description: "Détache la zone utilisateur pour pouvoir la déplacer librement lorsqu'elle n'est pas repliée.",
                    label: "Détacher la zone utilisateur"
                },
                detachedUserAreaX: {
                    description: "Mémorise la position x de la zone utilisateur détachée.",
                    label: "Zone utilisateur détachée X"
                },
                detachedUserAreaY: {
                    description: "Mémorise la position y de la zone utilisateur détachée.",
                    label: "Zone utilisateur détachée Y"
                },
                guildBarCollapsed: {
                    description: "Mémorise la barre des serveurs comme repliée.",
                    label: "Barre des serveurs repliée"
                },
                channelListCollapsed: {
                    description: "Mémorise la liste des salons comme repliée.",
                    label: "Liste des salons repliée"
                },
                membersListCollapsed: {
                    description: "Mémorise la liste des membres comme repliée.",
                    label: "Liste des membres repliée"
                },
                chatButtonsCollapsed: {
                    description: "Mémorise la rangée de boutons de message comme repliée.",
                    label: "Boutons du chat repliés"
                },
                titleBarCollapsed: {
                    description: "Mémorise la barre de titre comme repliée.",
                    label: "Barre de titre repliée"
                },
                headerBarCollapsed: {
                    description: "Mémorise la barre d'en-tête comme repliée.",
                    label: "Barre d'en-tête repliée"
                },
                userAreaCollapsed: {
                    description: "Mémorise la zone utilisateur comme repliée.",
                    label: "Zone utilisateur repliée"
                }
            }
        },
        customCommands: {
            text: {
                cancel: "Annuler",
                name: "Name",
                response: "Réponse",
                detectedArguments: "Arguments détectés",
                exampleCommandResponse: "Exemple de réponse de commande :",
                exampleUsage: "Exemple d'utilisation :",
                exampleOutput: "Exemple de sortie :",
                viewArgumentsGuide: "Voir le guide des arguments",
                editTag: "Modifier le tag",
                deleteTag: "Supprimer le tag",
                registeredTags: "Tags enregistrés",
                createTag: "Créer un tag",
                aTagWithThe: "Aucun tag nommé **{{name}}** n'existe !",
                successfullyDeletedTheTag: "Le tag **{{name}}** a bien été supprimé !",
                ephemeralReserved: "Le nom d'argument \"ephemeral\" est réservé et ne peut pas être utilisé.",
                createNewTag: "Créer un nouveau tag",
                editTagSubtitle: "Modifiez votre commande personnalisée.",
                createTagSubtitle: "Créez un nouveau tag qui sera enregistré comme commande slash.",
                save: "Enregistrer",
                create: "Créer",
                variablesHelp: "Votre réponse peut contenir des variables entre doubles accolades qui deviendront des arguments de commande, par exemple",
                defaultValuesHelp: "Vous pouvez définir des arguments avec des valeurs par défaut à l'aide d'un signe égal, par exemple",
                noTagsYet: "Oups ! Il n'y a encore aucun tag, utilisez `/tags create` pour en créer un !",
                nameAlreadyExists: "Un tag nommé \"{{name}}\" existe déjà et sera remplacé.",
                defaultValue: "(par défaut : {{value}})"
            },
            name: "CustomCommands",
            description: "Permet de créer des commandes slash / tags personnalisés",
            option: {
                tagsList: {
                    label: "Liste des tags"
                }
            },
            command: {
                ephemeral: "Si la réponse ne doit être visible que par toi",
                tags: "Gérer toutes les commandes personnalisées",
                create: "Créer un tag",
                list: "Lister tous tes tags",
                delete: "Supprimer un tag par son nom",
                tagName: "Le nom du tag"
            }
        },
        fileUpload: {
            name: "FileUpload",
            description: "Envoie des fichiers vers des services d'hébergement comme Zipline, Nest, S3 et WebDAV",
            dialog: {
                message: "FileUpload veut téléverser des fichiers vers {{origin}}",
                detail: "Si vous ne reconnaissez pas {{origin}} et ne lui faites pas entièrement confiance, annulez cette demande !\n\nFaire confiance mémorise ce serveur, Autoriser n'autorise que cette demande.",
                trust: "Faire confiance",
                allow: "Autoriser",
                cancel: "Annuler"
            },
            toast: {
                approvedServersReset: "Serveurs approuvés réinitialisés",
                fileTypeNotAllowed: "Type de fichier non autorisé par le filtre actuel",
                pleaseConfigureFileuploadSettings: "Configure d'abord les paramètres de FileUpload",
                sharexConfigIsValid: "La configuration ShareX est valide",
                importedSharexConfig: "Configuration ShareX importée",
                uploadSuccessfulButNo: "Envoi réussi, mais aucune URL n'était disponible à copier",
                uploadSuccessfulUrlCopied: "Envoi réussi, URL copiée dans le presse-papiers",
                uploadSuccessfulButFailed: "Envoi réussi, mais impossible de copier l'URL",
                uploadSuccessful: "Envoi réussi",
                uploadSucceededWithServicelabels: "Envoi réussi avec {{serviceLabels_service}} après un secours",
                apngToGifConversion: "Échec de la conversion APNG vers GIF, envoi en APNG",
                uploadAlreadyInProgress: "Envoi déjà en cours",
                uploadCancelled: "Envoi annulé",
                uploadFailedMessage: "Échec de l'envoi : {{message}}",
                invalidSharexConfig: "Configuration ShareX invalide",
                failedToImportSharexConfig: "Impossible d'importer la configuration ShareX"
            },
            text: {
                uploadToServicename: "Envoyer vers {{serviceName}}",
                uploadToHost: "Envoyer vers l'hébergeur",
                chooseFile: "Choisir un fichier...",
                zipline: "Zipline",
                eZHost: "E-Z Host",
                nest: "Nest",
                encryptingHost: "Encrypting.host",
                s3Compatible: "Compatible S3",
                catboxMoe: "Catbox.moe",
                litterbox: "Litterbox",
                sharexCustomUploader: "Envoyeur personnalisé ShareX",
                webdavNextcloudOwncloud: "WebDAV (Nextcloud/Owncloud)",
                n1Hour: "1 heure",
                n12Hours: "12 heures",
                n24Hours: "24 heures",
                n72Hours: "72 heures",
                corsProxy: "Proxy CORS",
                query: "Requête",
                param: "Paramètre",
                fakeLink: "Faux lien",
                embed: "Intégration",
                n30Seconds: "30 secondes",
                n1Minute: "1 minute",
                n2Minutes: "2 minutes",
                n5Minutes: "5 minutes",
                n10Minutes: "10 minutes",
                dragHostsToReorder: "Fais glisser les hébergeurs pour réordonner les tentatives de secours. L'hébergeur sélectionné est essayé en premier, puis cet ordre est utilisé.",
                chooseWhereFileuploadSends: "Choisis où FileUpload envoie les nouveaux fichiers.",
                connectionDetailsForYour: "Informations de connexion de ton instance Zipline.",
                theUrlOfYour: "L'URL de ton instance Zipline",
                yourZiplineApiAuthorization: "Ton jeton d'autorisation de l'API Zipline",
                yourZiplineApiToken: "Ton jeton API Zipline",
                folderIdForUploads: "ID de dossier pour les envois (laisse vide pour aucun dossier)",
                leaveEmptyForNo: "Laisse vide pour aucun dossier",
                connectionDetailsForE: "Informations de connexion pour les envois E-Z Host.",
                yourEZHost: "Ta clé API E-Z Host",
                connectionDetailsForNest: "Informations de connexion pour les envois Nest.",
                yourNestApiAuthorization: "Ton jeton d'autorisation de l'API Nest",
                yourNestApiToken: "Ton jeton API Nest",
                connectionDetailsForEncrypting: "Informations de connexion pour les envois Encrypting.host.",
                yourEncryptingHostApi: "Ta clé API Encrypting.host",
                howEncryptingHostShould: "Comment Encrypting.host doit formater les liens renvoyés.",
                selectUrlStyle: "Choisir le style d'URL",
                optionalTitleForEmbed: "Titre facultatif pour les réponses de style intégration.",
                optionalTitle: "Titre facultatif",
                optionalColorForEmbed: "Couleur facultative pour les réponses de style intégration.",
                optionalColor: "Couleur facultative",
                optionalFakeLinkValue: "Valeur de faux lien facultative pour les réponses de style fakelink.",
                optionalFakeLink: "Faux lien facultatif",
                connectionDetailsAndObject: "Informations de connexion et nommage des objets de ton bucket.",
                s3CompatibleEndpointE: "Point de terminaison compatible S3 (ex. https://<accountid>.r2.cloudflarestorage.com)",
                bucketToUploadInto: "Bucket de destination",
                awsRegionOrAuto: "Région AWS ou auto pour Cloudflare R2",
                s3CompatibleAccessKey: "Clé d'accès compatible S3",
                yourAccessKeyId: "Ton ID de clé d'accès",
                s3CompatibleSecretKey: "Clé secrète compatible S3",
                yourSecretAccessKey: "Ta clé d'accès secrète",
                optionalTemporaryCredentialToken: "Jeton d'identification temporaire facultatif",
                optionalSessionToken: "Jeton de session facultatif",
                optionalPublicUrlBase: "URL de base publique facultative pour les liens renvoyés",
                optionalFolderPrefixInside: "Dossier/préfixe facultatif dans le bucket",
                useEndpointBucketKey: "Utiliser le format point de terminaison/bucket/clé, recommandé pour R2.",
                optionalAccountBindingFor: "Association de compte facultative pour les envois Catbox.",
                yourCatboxUserhashFor: "Ton userhash Catbox pour l'association du compte ; laisse vide pour des envois anonymes.",
                yourCatboxUserhash: "Ton userhash Catbox",
                howLongUploadsAre: "Durée de conservation des envois",
                selectExpiry: "Choisir l'expiration",
                optionalAccountBindingFor2: "Association de compte facultative pour les envois GoFile.",
                optionalGofileTokenTo: "Jeton GoFile facultatif pour envoyer vers ton compte.",
                optionalGofileToken: "Jeton GoFile facultatif",
                connectionDetailsForPixelvault: "Informations de connexion pour les envois PixelVault.",
                yourPixelvaultAuthorizationKey: "Ta clé d'autorisation PixelVault.",
                yourPixelvaultUploadKey: "Ta clé d'envoi PixelVault",
                optionalAccountBindingFor3: "Association de compte facultative pour les envois PixelDrain.",
                optionalPixeldrainApiKey: "Clé API PixelDrain facultative pour les envois authentifiés. Laisse vide pour des envois anonymes.",
                yourPixeldrainApiKey: "Ta clé API PixelDrain",
                pasteImportOrValidate: "Colle, importe ou valide une configuration d'envoyeur personnalisé ShareX.",
                pasteYourSharexCustom: "Colle le JSON de ton envoyeur personnalisé ShareX (.sxcu/.json). DestinationType doit inclure FileUploader ou ImageUploader.",
                importFromFileOr: "Importer depuis un fichier ou valider la configuration collée",
                connectionDetailsForWebdav: "Informations de connexion pour les serveurs WebDAV (Nextcloud, Owncloud, etc.).",
                baseWebdavUrlE: "URL WebDAV de base (ex. https://nextcloud.example.com/remote.php/dav/files/username)",
                optionalSubdirectoryOnThe: "Sous-dossier facultatif du serveur où envoyer (ex. uploads)",
                leaveEmptyForRoot: "Laisse vide pour le dossier racine",
                selectYourWebdavServer: "Choisis le type de serveur WebDAV. Nextcloud et ownCloud créent un lien de partage public. Générique renvoie l'URL brute du fichier.",
                selectServerType: "Choisir le type de serveur",
                howToReturnThe: "Comment renvoyer le lien de partage public. Page de partage renvoie vers une page web ; Téléchargement direct renvoie directement au fichier ; Lien Markdown enveloppe la page de partage dans un nom de fichier cliquable.",
                selectShareLinkFormat: "Choisir le format du lien de partage",
                controlWhatFileuploadDoes: "Contrôle ce que fait FileUpload après qu'un hébergeur a renvoyé une URL.",
                stripQueryParametersFrom: "Retirer les paramètres de requête de l'URL du fichier envoyé.",
                wrapUploadedVideoLinks: "Envelopper les liens vidéo envoyés avec un proxy d'intégration pour de meilleurs aperçus Discord.",
                chooseWhichEmbedProxy: "Choisis le service de proxy d'intégration à utiliser pour les liens vidéo envoyés",
                selectAnEmbedProxy: "Choisir un service de proxy d'intégration",
                convertApngFilesTo: "Convertir les fichiers APNG au format GIF.",
                useTheOriginalFilename: "Utiliser le nom de fichier d'origine au lieu de nommer les envois upload.ext.",
                automaticallyCopyTheUploaded: "Copier automatiquement l'URL du fichier envoyé dans le presse-papiers.",
                onlyUseTheSelected: "N'utiliser que l'envoyeur sélectionné sans essayer d'hébergeurs de secours.",
                afterUploadInsertThe: "Après l'envoi, insérer l'URL obtenue dans la zone de chat actuelle.",
                wrapInsertedUrlsIn: "Entourer les URL insérées de chevrons pour éviter l'aperçu intégré de Discord.",
                chooseWhenFileuploadTakes: "Choisis quand FileUpload prend le relais de la gestion des fichiers de Discord.",
                useFileuploadWhenUploading: "Utiliser FileUpload lors d'un envoi via le sélecteur de fichiers de Discord.",
                useFileuploadOnlyFor: "N'utiliser FileUpload que pour les fichiers plus lourds que ta limite d'envoi Discord actuelle.",
                manualDiscordFileSize: "Limite manuelle de taille de fichier Discord en Mo, utilisée quand la détection automatique se trompe. Laisse vide pour automatique.",
                auto: "Automatique",
                commaSeparatedListOf: "Liste d'extensions séparées par des virgules (ex. png,jpg,gif). Laisse vide pour tout autoriser.",
                configureBrowserUploadProxying: "Configure le proxy et les délais des envois depuis le navigateur.",
                corsProxyUsedFor: "Proxy CORS facultatif pour les envois qui ne peuvent pas passer par l'application de bureau. Le proxy voit chaque fichier et jeton qui transite par lui, n'utilisez donc qu'un proxy de confiance. Laissez vide pour envoyer directement.",
                maximumTimeToWait: "Temps d'attente maximal par tentative d'envoi avant de passer au secours",
                selectTimeout: "Choisir le délai",
                drag: "Glisser",
                importSxcuJson: "Importer .sxcu/.json",
                validate: "Valider",
                resetToDefault: "Réinitialiser par défaut",
                progress: "{{percent}} % - {{transferred}} sur {{total}}",
                cancel: "Annuler"
            },
            option: {
                serviceType: {
                    description: "Service d'envoi sélectionné",
                    label: "Type de service"
                },
                serviceUrl: {
                    description: "URL du service Zipline",
                    label: "URL du service"
                },
                ziplineToken: {
                    description: "Jeton d'authentification Zipline",
                    label: "Jeton Zipline"
                },
                folderId: {
                    description: "ID de dossier Zipline facultatif",
                    label: "ID de dossier"
                },
                ezHostKey: {
                    description: "Clé API E-Z Host",
                    label: "Clé E-Z Host"
                },
                nestToken: {
                    description: "Jeton API Nest",
                    label: "Jeton Nest"
                },
                encryptingHostKey: {
                    description: "Clé API Encrypting.host",
                    label: "Clé Encrypting.host"
                },
                encryptingHostUrlStyle: {
                    description: "Style d'URL Encrypting.host",
                    label: "Style d'URL Encrypting.host"
                },
                encryptingHostDomains: {
                    description: "Liste JSON des domaines Encrypting.host",
                    label: "Domaines Encrypting.host"
                },
                encryptingHostTitle: {
                    description: "Titre facultatif de l'intégration Encrypting.host",
                    label: "Titre Encrypting.host"
                },
                encryptingHostColor: {
                    description: "Couleur facultative de l'intégration Encrypting.host",
                    label: "Couleur Encrypting.host"
                },
                encryptingHostFakelink: {
                    description: "Faux lien Encrypting.host facultatif",
                    label: "Faux lien Encrypting.host"
                },
                s3Endpoint: {
                    description: "URL du point de terminaison compatible S3",
                    label: "Point de terminaison S3"
                },
                s3Bucket: {
                    description: "Nom du bucket S3",
                    label: "Bucket S3"
                },
                s3Region: {
                    description: "Région S3 (utilise auto pour R2)",
                    label: "Région S3"
                },
                s3AccessKeyId: {
                    description: "ID de clé d'accès S3",
                    label: "ID de clé d'accès S3"
                },
                s3SecretAccessKey: {
                    description: "Clé d'accès secrète S3",
                    label: "Clé d'accès secrète S3"
                },
                s3SessionToken: {
                    description: "Jeton de session S3 facultatif",
                    label: "Jeton de session S3"
                },
                s3PublicUrl: {
                    description: "URL de base publique facultative",
                    label: "URL publique S3"
                },
                s3Prefix: {
                    description: "Préfixe facultatif des clés d'objet S3",
                    label: "Préfixe S3"
                },
                s3ForcePathStyle: {
                    description: "Utiliser des URL S3 de style chemin",
                    label: "Forcer le style chemin S3"
                },
                litterboxExpiry: {
                    description: "Durée de conservation Litterbox",
                    label: "Expiration Litterbox"
                },
                catboxUserhash: {
                    description: "Userhash Catbox pour l'association du compte",
                    label: "Userhash Catbox"
                },
                sharexConfig: {
                    description: "JSON de l'envoyeur personnalisé ShareX",
                    label: "Configuration ShareX"
                },
                disableFallbacks: {
                    description: "Désactiver les services d'envoi de secours",
                    label: "Désactiver les secours"
                },
                autoSend: {
                    description: "Insérer l'URL envoyée dans la zone de chat",
                    label: "Envoi automatique"
                },
                autoFormat: {
                    description: "Entourer l'URL insérée de chevrons",
                    label: "Format automatique"
                },
                bypassDiscordUpload: {
                    description: "Contourner les envois Discord et utiliser FileUpload à la place.",
                    label: "Contourner l'envoi Discord"
                },
                bypassDiscordUploadOnlyOverLimit: {
                    description: "N'utiliser FileUpload que si le ou les fichiers dépassent la limite de taille.",
                    label: "Contourner l'envoi Discord seulement au-delà de la limite"
                },
                customDiscordFileSizeLimitMB: {
                    description: "Limite manuelle de taille de fichier Discord en Mo. 0 signifie détection automatique.",
                    label: "Limite de taille Discord personnalisée (Mo)"
                },
                gofileToken: {
                    description: "Jeton API GoFile facultatif",
                    label: "Jeton GoFile"
                },
                fallbackOrder: {
                    description: "Ordre des envoyeurs de secours",
                    label: "Ordre de secours"
                },
                pixelVaultKey: {
                    description: "Clé d'envoi PixelVault",
                    label: "Clé PixelVault"
                },
                pixelDrainKey: {
                    description: "Clé API PixelDrain facultative",
                    label: "Clé PixelDrain"
                },
                uploadTimeoutMs: {
                    description: "Délai d'envoi en millisecondes",
                    label: "Délai d'envoi (ms)"
                },
                stripQueryParams: {
                    description: "Retirer les paramètres de requête des URL envoyées",
                    label: "Retirer les paramètres de requête"
                },
                embedProxyEnabled: {
                    description: "Faire passer les liens vidéo envoyés par un service d'intégration.",
                    label: "Proxy d'intégration activé"
                },
                embedProxyService: {
                    description: "Service d'intégration qui enveloppe les liens vidéo envoyés.",
                    label: "Service de proxy d'intégration"
                },
                corsProxyUrl: {
                    description: "URL de proxy CORS facultative pour les envois depuis le navigateur",
                    label: "URL du proxy CORS"
                },
                apngToGif: {
                    description: "Convertir les envois APNG en GIF",
                    label: "APNG vers GIF"
                },
                preserveOriginalFilename: {
                    description: "Conserver le nom de fichier d'origine lors de l'envoi.",
                    label: "Conserver le nom d'origine"
                },
                autoCopy: {
                    description: "Copier automatiquement l'URL d'envoi",
                    label: "Copie automatique"
                },
                autoUploadPastedFiles: {
                    description: "Envoyer automatiquement les fichiers du presse-papiers vers l'hébergeur d'images lors d'un collage dans le chat.",
                    label: "Envoyer automatiquement les fichiers collés"
                },
                webdavUrl: {
                    description: "URL du serveur WebDAV",
                    label: "URL WebDAV"
                },
                webdavUsername: {
                    description: "Nom d'utilisateur WebDAV",
                    label: "Nom d'utilisateur WebDAV"
                },
                webdavPassword: {
                    description: "Mot de passe WebDAV ou jeton d'application",
                    label: "Mot de passe WebDAV"
                },
                webdavDirectory: {
                    description: "Sous-dossier facultatif sur le serveur WebDAV",
                    label: "Dossier WebDAV"
                },
                webdavServerType: {
                    description: "Type de serveur WebDAV",
                    label: "Type de serveur WebDAV",
                    nextcloud: "Nextcloud",
                    owncloud: "ownCloud",
                    generic: "WebDAV générique"
                },
                webdavShareType: {
                    description: "Format du lien de partage WebDAV",
                    label: "Type de partage WebDAV",
                    sharepage: "Page de partage",
                    directdownload: "Téléchargement direct",
                    markdown: "Lien Markdown"
                },
                uploadAllowedFileTypes: {
                    description: "Liste des extensions autorisées, séparées par des virgules (ex. png,jpg,gif,mp4). Laisse vide pour autoriser tous les fichiers.",
                    label: "Types de fichiers autorisés à l'envoi"
                },
                settingsComponent: {
                    description: "Paramètres",
                    label: "Composant des paramètres"
                }
            },
            panel: {
                approvedServers: "Serveurs approuvés",
                approvedServersDescription: "Serveurs S3 et WebDAV vers lesquels vous avez autorisé FileUpload à envoyer des fichiers. Une réinitialisation redemandera lors du prochain envoi.",
                resetApprovedServers: "Réinitialiser les serveurs approuvés",
                fallbackOrder: "Ordre de secours",
                uploadService: "Service d'envoi",
                zipline: "Zipline",
                serviceUrl: "URL du service",
                ziplineToken: "Jeton Zipline",
                folderId: "ID de dossier",
                eZHost: "E-Z Host",
                eZHostApiKey: "Clé API E-Z Host",
                nest: "Nest",
                nestToken: "Jeton Nest",
                encryptingHost: "Encrypting.host",
                encryptingHostApiKey: "Clé API Encrypting.host",
                urlStyle: "Style d'URL",
                domainsJson: "Domaines (JSON)",
                embedTitle: "Titre de l'intégration",
                embedColor: "Couleur de l'intégration",
                fakeLink: "Faux lien",
                s3CompatibleStorage: "Stockage compatible S3",
                s3EndpointUrl: "URL du point de terminaison S3",
                bucketName: "Nom du bucket",
                region: "Région",
                accessKeyId: "ID de clé d'accès",
                secretAccessKey: "Clé d'accès secrète",
                sessionToken: "Jeton de session",
                publicBaseUrl: "URL de base publique",
                objectKeyPrefix: "Préfixe des clés d'objet",
                usePathStyleEndpoint: "Utiliser un point de terminaison de style chemin",
                catbox: "Catbox",
                catboxUserhash: "Userhash Catbox",
                litterboxExpiry: "Expiration Litterbox",
                gofile: "GoFile",
                gofileToken: "Jeton GoFile",
                pixelvault: "PixelVault",
                pixelvaultUploadKey: "Clé d'envoi PixelVault",
                pixeldrain: "PixelDrain",
                pixeldrainApiKey: "Clé API PixelDrain",
                sharexCustomUploader: "Envoyeur personnalisé ShareX",
                sharexCustomUploaderConfig: "Configuration de l'envoyeur personnalisé ShareX",
                sharexConfigActions: "Actions de configuration ShareX",
                webdav: "WebDAV",
                serverUrl: "URL du serveur",
                username: "Nom d'utilisateur",
                passwordOrAppToken: "Mot de passe ou jeton d'application",
                passwordOrAppToken2: "mot de passe ou jeton d'application",
                uploadDirectory: "Dossier d'envoi",
                serverType: "Type de serveur",
                shareLinkFormat: "Format du lien de partage",
                uploadBehavior: "Comportement d'envoi",
                stripQueryParameters: "Retirer les paramètres de requête",
                useEmbedProxy: "Utiliser un proxy d'intégration",
                embedProxyService: "Service de proxy d'intégration",
                convertApngToGif: "Convertir APNG en GIF",
                preserveOriginalFilename: "Conserver le nom d'origine",
                autoCopyUrl: "Copier l'URL automatiquement",
                disableFallbackUploaders: "Désactiver les envoyeurs de secours",
                insertUrlIntoChatInput: "Insérer l'URL dans la zone de chat",
                formatInsertedUrl: "Formater l'URL insérée",
                discordIntegration: "Intégration Discord",
                bypassDiscordUploadButton: "Contourner le bouton d'envoi de Discord",
                autoUploadPastedFiles: "Envoyer automatiquement les fichiers collés",
                respectDiscordFileSizeLimit: "Respecter la limite de taille de Discord",
                discordLimitOverrideMb: "Remplacer la limite Discord (Mo)",
                allowedFileTypes: "Types de fichiers autorisés",
                network: "Réseau",
                corsProxyUrl: "URL du proxy CORS",
                uploadTimeout: "Délai d'envoi",
                domainsJsonDescription: "Tableau JSON des domaines à utiliser, par exemple [\"offensive\"]."
            },
            status: {
                cancelled: "Envoi annulé.",
                uploadingVia: "Envoi via {{service}}...",
                uploading: "Envoi en cours...",
                unknownError: "Erreur inconnue",
                startingVia: "Démarrage de l'envoi via {{service}}...",
                retryingWith: "Nouvelle tentative avec {{service}} ({{attempt}}/{{total}})...",
                uploadedVia: "Envoyé avec succès via {{service}}.",
                allFailed: "Tous les services d'envoi ont échoué. Dernière erreur : {{error}}",
                fileReady: "Fichier prêt, démarrage de l'envoi...",
                preparing: "Préparation de l'envoi...",
                failed: "Échec de l'envoi : {{message}}",
                timedOut: "Délai d'envoi dépassé",
                serviceFailed: "Échec de {{service}} : {{message}}",
                preparingFile: "Préparation de {{name}}{{suffix}}..."
            }
        },
        gifMaker: {
            option: {
                lastWidth: {
                    label: "Dernière largeur"
                },
                lastHeight: {
                    label: "Dernière hauteur"
                },
                lastCaptionMode: {
                    label: "Dernier mode de légende"
                },
                lastCaptionText: {
                    label: "Dernier texte de légende"
                },
                lastCaptionSize: {
                    label: "Dernière taille de légende"
                },
                lastFontFamily: {
                    label: "Dernière famille de police"
                },
                lastBubbleTipBase: {
                    label: "Dernière base de pointe de bulle"
                },
                maxWidth: {
                    description: "Largeur maximale de l'ajustement automatique.",
                    label: "Largeur max."
                },
                maxHeight: {
                    description: "Hauteur maximale de l'ajustement automatique.",
                    label: "Hauteur max."
                }
            },
            name: "GifMaker",
            description: "Crée et légende des GIF à partir de n'importe quel média du chat ou du sélecteur de GIF.",
            text: {
                send: "Envoyer",
                export: "Exporter",
                makeGif: "Créer un GIF",
                editGif: "Modifier le GIF",
                selectAFont: "Choisir une police...",
                enterCaption: "Saisis une légende...",
                width: "Largeur",
                height: "Hauteur",
                loadingFonts: "Chargement des polices...",
                captions: "Légendes",
                text: "Texte",
                font: "Police",
                fontSize: "Taille de police",
                tipBase: "Base de la pointe",
                dimensions: "Dimensions",
                generatingGif: "Génération du GIF...",
                clickOnThePreview: "Clique sur l'aperçu pour placer la pointe de la bulle",
                gifPreview: "Aperçu du GIF"
            },
            captionMode: {
                caption: "Légende",
                none: "Aucune",
                speechbubble: "Bulle"
            }
        },
        gifProviderSwitcher: {
            name: "GifProviderSwitcher",
            description: "Permet d'utiliser la recherche de GIF de Tenor ou Giphy au lieu de Klipy",
            text: {
                tenor: "Tenor",
                giphy: "Giphy",
                klipy: "Klipy",
                providers: "Fournisseurs",
                providersCount: "{{count}} fournisseurs"
            }
        },
        keyboardNavigation: {
            toast: {
                invalidUrl: "URL invalide",
                copiedResponseToClipboard: "Réponse copiée dans le presse-papiers !",
                issueFetchingUrl: "Problème lors de la récupération de l'URL",
                copiedGitInfoTo: "Infos Git copiées dans le presse-papiers !",
                noUpdatesAvailable: "Aucune mise à jour disponible",
                enabledPlugin: "{{id}} activé avec succès",
                disabledPlugin: "{{id}} désactivé avec succès"
            },
            text: {
                openPlexcordTab: "Ouvrir l'onglet Plexcord",
                openPluginTab: "Ouvrir l'onglet Plugins",
                openThemesTab: "Ouvrir l'onglet Thèmes",
                openUpdaterTab: "Ouvrir l'onglet Mise à jour",
                openCloudTab: "Ouvrir l'onglet Cloud",
                openBackupRestoreTab: "Ouvrir l'onglet Sauvegarde et restauration",
                restartClient: "Redémarrer le client",
                openQuickCssFile: "Ouvrir le fichier QuickCSS",
                openSettingsFolder: "Ouvrir le dossier des paramètres",
                openInGithub: "Ouvrir sur GitHub",
                openInBrowser: "Ouvrir dans le navigateur",
                togglePlugin: "Activer/désactiver le plugin",
                enable: "Activer",
                disable: "Désactiver",
                quickFetch: "Récupération rapide",
                copyGitInfo: "Copier les infos Git",
                checkForUpdates: "Rechercher des mises à jour",
                aPlexcordUpdateIs: "Une mise à jour de Plexcord est disponible !",
                clickHereToView: "Clique ici pour voir la mise à jour",
                navigateToServer: "Aller au serveur",
                commandPalette: "Palette de commandes",
                searchTheCommandPalette: "Rechercher dans la palette de commandes",
                multipleChoice: "Choix multiple",
                textInput: "Saisie de texte",
                openDevTab: "Ouvrir l'onglet Développeur",
                enterUrlToFetch: "Saisissez l'URL à récupérer (GET uniquement)",
                typeAndPressEnter: "Tapez puis appuyez sur Entrée",
                recording: "Enregistrement...",
                recordKeybind: "Enregistrer un raccourci",
                enterUrl: "Saisissez une URL"
            },
            option: {
                hotkey: {
                    description: "Le raccourci pour ouvrir la palette de commandes.",
                    label: "Raccourci"
                },
                allowMouseControl: {
                    description: "Permettre à la souris de contrôler la palette de commandes.",
                    label: "Autoriser le contrôle à la souris"
                }
            },
            name: "KeyboardNavigation",
            description: "Permet de naviguer dans l'interface au clavier."
        },
        lastActive: {
            name: "LastActive",
            description: "Un plugin pour aller au dernier message actif de toi ou d'un autre utilisateur dans un salon/serveur.",
            toast: {
                failedToFindMessages: "Impossible de trouver des messages. Consulte la console pour plus de détails.",
                couldnTFindAny: "Aucun message récent de cet utilisateur trouvé.",
                channelInformationNotAvailable: "Informations du salon indisponibles.",
                failedToJumpTo: "Impossible d'aller au message. Consulte la console pour plus de détails."
            },
            text: {
                yourLastMessage: "Ton dernier message",
                userSLastMessage: "Dernier message de l'utilisateur"
            }
        },
        limitlessScreenshare: {
            text: {
                deleteTag: "Supprimer le tag",
                mustBeGreaterThan: "Doit être >{{value}}",
                maxResolutionTooLow: "La résolution maximale ne peut pas être inférieure à {{value}}",
                maxResolutionRound: "La résolution maximale doit se terminer par 0 si l'arrondi de la résolution est activé"
            },
            name: "LimitlessScreenshare",
            description: "Ajoute un curseur pour la résolution et les FPS du partage d'écran.",
            option: {
                maxFPS: {
                    description: "FPS max. du curseur",
                    label: "FPS max."
                },
                maxResolution: {
                    description: "Résolution max. du curseur",
                    label: "Résolution max."
                },
                roundResolution: {
                    description: "Arrondir la résolution aux 10p les plus proches",
                    label: "Arrondir la résolution"
                },
                resolutions: {
                    label: "Résolutions"
                },
                fpss: {
                    label: "Valeurs de FPS"
                }
            }
        },
        messagePeek: {
            option: {
                hideMuted: {
                    description: "Masquer les aperçus et horodatages des MP et discussions de groupe en sourdine.",
                    label: "Masquer les sourdines"
                }
            },
            name: "MessagePeek",
            description: "Affiche l'aperçu et l'horodatage du dernier message dans la liste des messages privés.",
            text: {
                officialDiscordMessage: "Message officiel de Discord",
                sentGif: "a envoyé un GIF",
                voiceMessage: "message vocal",
                membersCount: "{{count}} membres",
                you: "Vous"
            }
        },
        messageTranslate: {
            name: "MessageTranslate",
            description: "Traduit automatiquement les messages dans ta langue avec mise en cache, activation par salon et d'autres options.",
            option: {
                targetLanguage: {
                    description: "Code de la langue cible des traductions (ex. en, es, fr, de, ja).",
                    label: "Langue cible"
                },
                excludedLanguages: {
                    description: "Codes de langue à exclure de la traduction (ex. en, es, fr, de, ja).",
                    label: "Langues exclues"
                },
                confidenceRequirement: {
                    description: "Confiance minimale (de 0 à 1) requise pour afficher une traduction.",
                    label: "Confiance requise"
                },
                autoTranslate: {
                    description: "Traduire automatiquement les messages dès qu'ils apparaissent.",
                    label: "Traduction automatique"
                },
                skipOwnMessages: {
                    description: "Ne pas traduire tes propres messages.",
                    label: "Ignorer mes messages"
                },
                skipBotMessages: {
                    description: "Ne pas traduire les messages des bots.",
                    label: "Ignorer les messages des bots"
                },
                ignoredGuilds: {
                    description: "Liste d'ID de serveurs, séparés par des virgules, où ne pas traduire.",
                    label: "Serveurs ignorés"
                },
                ignoredChannels: {
                    description: "Liste d'ID de salons, séparés par des virgules, où ne pas traduire.",
                    label: "Salons ignorés"
                },
                ignoredUsers: {
                    description: "Liste d'ID d'utilisateurs, séparés par des virgules, à ne pas traduire.",
                    label: "Utilisateurs ignorés"
                },
                showIndicator: {
                    description: "Ajouter un petit indicateur (traduit) aux messages traduits.",
                    label: "Afficher l'indicateur"
                },
                showOriginal: {
                    description: "Afficher le texte original et sa traduction.",
                    noorig: "Ne pas afficher l'original."
                }
            },
            text: {
                showOriginalInSubtext: "Afficher l'original en sous-texte",
                showOriginalMessageTranslation: "Afficher le message original, la traduction en sous-texte",
                translatedFrom: "traduit depuis {{lang}}"
            }
        },
        moreStickers: {
            toast: {
                stickerPackDeleted: "Pack d'autocollants supprimé",
                stickerPackAdded: "Pack d'autocollants ajouté",
                stickerPacksAdded: "Packs d'autocollants ajoutés",
                stickerPacksExported: "Packs d'autocollants exportés",
                newStickerPacksAlready: "De nouveaux packs d'autocollants existent déjà, migration inutile",
                oldStickerPacksNot: "Anciens packs d'autocollants introuvables, rien à migrer",
                migrationFailedTitleId: "Échec de la migration : {{title}} ({{id}})",
                stickerPackMigrationComplete: "Migration des packs d'autocollants terminée",
                failedToUploadSticker: "Impossible d'envoyer l'autocollant"
            },
            text: {
                stickerPackUrl: "URL du pack d'autocollants",
                pasteHtmlHere: "Colle le HTML ici",
                delete: "Supprimer",
                addStickerPackFrom: "Ajouter un pack d'autocollants depuis une URL",
                insert: "Insérer",
                addStickerPackFrom2: "Ajouter un pack d'autocollants depuis du HTML",
                insertFromHtml: "Insérer depuis du HTML",
                addStickerPackFrom3: "Ajouter un pack d'autocollants depuis un fichier",
                miscTools: "Outils divers",
                exportStickerPacks: "Exporter les packs d'autocollants",
                migrateFromV1: "Migrer depuis la v1",
                stickersManagement: "Gestion des autocollants",
                theRegionLineRecognized: "La région reconnue par LINE peut différer de la tienne à cause du proxy CORS utilisé.",
                openStickerPackFile: "Ouvrir un fichier de pack d'autocollants",
                stickers: "Autocollants+",
                categoryTitle: "Catégorie, {{title}}",
                searchStickers: "Rechercher des autocollants",
                ffmpegstatecontextIsUndefined: "FFmpegStateContext n'est pas défini",
                recentlyUsed: "Utilisés récemment",
                addFromUrl: "Ajouter depuis une URL",
                addFromHtml: "Ajouter depuis du HTML",
                addFromFile: "Ajouter depuis un fichier",
                misc: "Divers",
                invalidUrl: "URL invalide",
                lineOnly: "Actuellement, seuls les stickers/emojis LINE sont pris en charge.",
                getTelegramStickers: "Obtenez des stickers Telegram avec",
                htmlFallbackHelp: "Si vous rencontrez des erreurs en ajoutant un pack de stickers, vous pouvez essayer de l'ajouter à l'aide du code source HTML de la page du pack.",
                htmlFallbackApplies: "Cela s'applique aux stickers bloqués par région / par système d'exploitation / etc."
            },
            option: {
                promptToUpload: {
                    description: "Insère l'autocollant dans la barre de chat au lieu de l'envoyer immédiatement",
                    label: "Demander avant l'envoi"
                },
                packs: {
                    description: "Packs",
                    label: "Packs"
                }
            },
            name: "MoreStickers",
            description: "Ajoute des packs d'autocollants d'autres réseaux sociaux. (ex. LINE)"
        },
        musicRichPresence: {
            option: {
                scrobblerBackend: {
                    description: "Le backend de scrobbling à utiliser.",
                    label: "Backend de scrobbling"
                },
                instanceBaseURL: {
                    description: "L'URL de base de ton instance ListenBrainz.",
                    label: "URL de base de l'instance"
                },
                instanceAPIBaseUrl: {
                    description: "L'URL de base de ton API ListenBrainz.",
                    label: "URL de base de l'API de l'instance"
                },
                apiKey: {
                    description: "Clé API Last.fm. Facultative, mais vivement recommandée pour éviter les limites de débit avec notre clé partagée",
                    label: "Clé API"
                },
                username: {
                    description: "Nom d'utilisateur",
                    label: "Nom d'utilisateur"
                },
                shareUsername: {
                    description: "Afficher le lien vers le profil de scrobbling",
                    label: "Partager le nom d'utilisateur"
                },
                clickableLinks: {
                    description: "Rendre cliquables les noms de titre, d'artiste et d'album",
                    label: "Liens cliquables"
                },
                hideWithSpotify: {
                    description: "Masquer la présence si Spotify est lancé",
                    label: "Masquer avec Spotify"
                },
                hideWithActivity: {
                    description: "Masquer la présence si tu as une autre présence",
                    label: "Masquer avec activité"
                },
                statusName: {
                    description: "Texte de statut personnalisé. Variables disponibles : {artist} | {album} | {title}",
                    label: "Nom du statut"
                },
                statusDisplayType: {
                    description: "Afficher le titre / l'artiste dans la liste des membres",
                    off: "Ne pas afficher (affiche un message d'écoute générique)"
                },
                nameFormat: {
                    description: "Afficher le titre et l'artiste dans le nom du statut",
                    statusName: "Utiliser un nom de statut personnalisé"
                },
                missingArt: {
                    description: "Quand l'album ou sa pochette est manquant",
                    logo: "Utiliser le grand logo du scrobbler"
                },
                showLogo: {
                    description: "Afficher le logo du service de scrobbling près de la pochette",
                    label: "Afficher le logo du scrobbler"
                },
                showAlbumCover: {
                    description: "Afficher la pochette. La désactiver affiche un espace réservé. Utile si ta musique a des pochettes inappropriées",
                    label: "Afficher la pochette"
                },
                useListeningStatus: {
                    description: "Afficher le statut « Écoute » au lieu de « Joue »"
                }
            },
            name: "MusicRichPresence",
            description: "Rich Presence pour Last.FM/Listenbrainz",
            text: {
                showArtistName: "Afficher le nom de l'artiste",
                showTrackName: "Afficher le nom du titre",
                useMusicServiceName: "Utiliser le nom du service musical (sinon texte de statut personnalisé)",
                useFormatArtistSong: "Utiliser le format « artiste - titre »",
                useFormatSongArtist: "Utiliser le format « titre - artiste »",
                useArtistNameOnly: "Utiliser uniquement le nom de l'artiste",
                useSongNameOnly: "Utiliser uniquement le nom du titre",
                useAlbumNameFalls: "Utiliser le nom de l'album (sinon texte de statut personnalisé si le titre n'a pas d'album)",
                useGenericPlaceholder: "Utiliser un espace réservé générique",
                lastFm: "Last.FM",
                howToCreateAn: "Comment créer une clé API",
                set: "Définis",
                applicationName: "Nom de l'application",
                applicationDescription: "Description de l'application",
                toAnythingAndLeave: "à n'importe quoi et laisse le reste vide.",
                createApiKey: "Créer une clé API",
                invalidInstance: "Instance compatible ListenBrainz invalide",
                provideBoth: "Indiquez à la fois l'",
                apiBaseUrl: "URL de base de l'API",
                andThe: "et l'",
                instanceBaseUrl: "URL de base de l'instance",
                forYourCustomInstance: "de votre instance ListenBrainz personnalisée, ou revenez à ListenBrainz/Last.FM",
                allowConnectTitle: "Autoriser Plexcord à se connecter à l'instance ListenBrainz",
                allowConnectBody: "Pour utiliser votre instance ListenBrainz personnalisée, vous devez d'abord autoriser Plexcord à s'y connecter.",
                allowInstance: "Autoriser l'instance",
                listenBrainzCompatible: "Compatible ListenBrainz (auto-hébergé)",
                and: "et"
            }
        },
        noMiddleClickPaste: {
            name: "NoMiddleClickPaste",
            description: "Désactiver le collage par clic du milieu sous Linux - Linux uniquement"
        },
        orbolayBridge: {
            option: {
                port: {
                    description: "Port de connexion",
                    label: "Port"
                }
            },
            name: "OrbolayBridge",
            description: "Plugin passerelle pour connecter Orbolay à Discord",
            toast: {
                connectedToOrbolayServer: "Connecté au serveur Orbolay"
            }
        },
        plexcordHelper: {
            name: "PlexcordHelper",
            description: "Sert à fournir de l'assistance et à corriger les plantages causés par Discord.",
            text: {
                restartRequired: "Redémarrage requis",
                restartNow: "Redémarrer maintenant",
                later: "Plus tard",
                wouldYouLikeTo: "Veux-tu redémarrer maintenant ?",
                somePluginsRequireA: "Certains plugins nécessitent un redémarrage pour être entièrement désactivés.",
                alreadyEnabled: "{{plugin}} est déjà activé",
                alreadyDisabled: "{{plugin}} est déjà désactivé",
                disablePlugin: "Désactiver {{plugin}}",
                enablePlugin: "Activer {{plugin}}",
                errorStopping: "Erreur lors de l'arrêt du plugin {{plugin}}",
                errorStarting: "Erreur lors du démarrage du plugin {{plugin}}"
            },
            toast: {
                failedToTolowercase: "Échec : {{toLowerCase}}",
                aRestartIsRequired: "Un redémarrage est nécessaire pour que la modification prenne effet !"
            },
            card: {
                notOnThisVersion: "Ce plugin n'est pas présent dans cette version de Plexcord. Essaie de mettre à jour !"
            }
        },
        plexcordTweaks: {
            name: "PlexcordTweaks",
            option: {
                removeActivitySection: {
                    description: "Retire la section d'activité au-dessus de la liste des membres",
                    label: "Retirer la section d'activité"
                },
                showYourOwnActivityButtons: {
                    description: "Discord masque tes propres boutons d'activité pour une raison inconnue",
                    label: "Afficher tes propres boutons d'activité"
                },
                refreshSlashCommands: {
                    description: "Actualise les commandes slash pour afficher les nouvelles sans redémarrer le client.",
                    label: "Actualiser les commandes slash"
                },
                forceRoleIcon: {
                    description: "Force l'affichage des icônes de rôle à côté des messages en mode compact",
                    label: "Forcer l'icône de rôle"
                },
                accountStandingButton: {
                    description: "Afficher un bouton d'état du compte dans la barre d'en-tête",
                    label: "Bouton d'état du compte"
                },
                jsonGateway: {
                    description: "Force le JSON lors de la reconnexion à la passerelle",
                    label: "Passerelle JSON"
                },
                enableAutoCorrect: {
                    description: "Ajoute un interrupteur dans le menu contextuel de la zone de chat pour la correction automatique native et les remplacements de texte",
                    label: "Activer la correction automatique"
                },
                autoCorrect: {
                    description: "Utiliser la correction automatique native et les remplacements de texte dans les éditeurs de messages",
                    label: "Correction automatique"
                },
                disableHolidayNotifications: {
                    label: "Désactiver les notifications festives",
                    description: "Toujours utiliser les sons de notification par défaut de Discord"
                },
                showAllBadges: {
                    label: "Afficher tous les badges",
                    description: "Affiche tous les badges du profil au lieu de regrouper le reste derrière +n"
                }
            },
            text: {
                allGood: "Tout va bien !",
                limited: "Limité",
                veryLimited: "Très limité",
                atRisk: "À risque",
                suspended: "Suspendu",
                slashCommandsRefreshedSuccessfully: "Commandes slash actualisées avec succès.",
                failedToRefreshCommands: "Impossible d'actualiser les commandes. Consulte la console pour plus de détails.",
                enableAutocorrect: "Activer la correction automatique"
            },
            command: {
                refreshCommands: "Actualiser les commandes slash"
            },
            description: "Un ensemble de petits ajustements et correctifs pour Discord."
        },
        plextronStreamFixes: {
            option: {
                unlockQualityOptions: {
                    description: "Débloquer les options de qualité de stream quel que soit le statut Nitro",
                    label: "Débloquer les options de qualité"
                },
                removeResolutionCap: {
                    description: "Autoriser les résolutions au-delà de 720p à 60 fps",
                    label: "Retirer la limite de résolution"
                },
                forceEncoderSettings: {
                    description: "Forcer l'encodeur à utiliser la résolution/les fps configurés",
                    label: "Forcer les paramètres de l'encodeur"
                },
                preventDownscale: {
                    description: "Empêcher Discord de réduire la résolution du stream",
                    label: "Empêcher la réduction"
                },
                keyframeInterval: {
                    description: "Intervalle d'images clés en ms (0 = défaut de l'encodeur, 5000 = toutes les 5 s)",
                    label: "Intervalle d'images clés"
                },
                minBitrate: {
                    description: "Débit minimal de l'encodeur en kbps",
                    label: "Débit min."
                },
                raiseBitrateCaps: {
                    description: "Relever les plafonds de débit par défaut sur ordinateur (cible 600 kbps → 10 Mbps, max 3,5 Mbps → 40 Mbps)",
                    label: "Relever les plafonds de débit"
                },
                preventFramerateReduction: {
                    description: "Empêcher Discord de réduire la fréquence d'images du stream quand tu ne parles pas",
                    label: "Empêcher la baisse de fréquence d'images"
                },
                bitsPerPixelPct: {
                    description: "Pourcentage de bits par pixel pour le débit cible (8 = 0,08 bpp, 12 = 0,12 bpp)",
                    label: "Bits par pixel (%)"
                }
            },
            name: "PlextronStreamFixes",
            description: "Tente de corriger la qualité de stream sur Plextron en patchant l'encodeur et les restrictions de qualité de Discord."
        },
        rPCEditor: {
            name: "RPCEditor"
        },
        reactionTimestamps: {
            name: "ReactionTimestamps",
            description: "Affiche l'heure de chaque réaction dans la fenêtre des réactions.",
            text: {
                userAtTime: "{{user}} à {{time}}"
            }
        },
        richPresence: {
            text: {
                useCustomStatusName: "Utiliser un nom de statut personnalisé",
                useFormatArtistSong: "Utiliser le format « artiste - titre »",
                useFormatSongArtist: "Utiliser le format « titre - artiste »",
                useArtistNameOnly: "Utiliser uniquement le nom de l'artiste",
                useSongNameOnly: "Utiliser uniquement le nom du titre",
                useAlbumName: "Utiliser le nom de l'album",
                useLargeStatsFm: "Utiliser le grand logo Stats.fm",
                useGenericPlaceholder: "Utiliser un espace réservé générique",
                seriesMovieName: "Nom de la série/du film",
                seriesEpisodeTrackMovie: "Série - nom de l'épisode/de la piste/du film",
                custom: "Personnalisé",
                seriesCover: "Couverture de la série",
                episodeCover: "Couverture de l'épisode",
                season1Episode1: "Saison 1 épisode 1",
                off: "Désactivé",
                listening: "Écoute",
                playing: "Joue",
                streaming: "Streame",
                watching: "Regarde",
                none: "Aucun",
                navidromeInstanceExposesServer: "Instance Navidrome (expose l'URL du serveur. Authentification unique envoyée.)",
                lastFmApiSends: "API Last.fm (envoie des métadonnées à last.fm)",
                donTShowShows: "Ne pas afficher (affiche un message d'écoute générique)",
                showStateLineContent: "Afficher le contenu de la ligne d'état",
                showDetailsLineContent: "Afficher le contenu de la ligne de détails",
                displayYourCurrentlyPlaying: "Affiche les livres audio en cours de lecture comme Rich Presence Discord. Nécessite l'URL, le nom d'utilisateur et le mot de passe de ton serveur AudioBookShelf.",
                audiobookshelfServerUrl: "URL du serveur AudioBookShelf.",
                audiobookshelfUsername: "Nom d'utilisateur AudioBookShelf.",
                audiobookshelfPassword: "Mot de passe AudioBookShelf.",
                connectsToTosuVia: "Se connecte à tosu via WebSocket sur le port 24050. Aucune configuration nécessaire, assure-toi juste que tosu tourne en même temps qu'osu!.",
                showWhatYouRe: "Affiche ce que tu écoutes via stats.fm. Ton historique d'écoute doit être public.",
                statsFmUsername: "Nom d'utilisateur Stats.fm.",
                customStatusText: "Texte de statut personnalisé.",
                statsFm: "Stats.fm",
                nameFormat: "Format du nom.",
                fallbackWhenArtIs: "Solution de repli quand la pochette manque.",
                showListeningStatus: "Afficher le statut d'écoute.",
                showStatsFmLogo: "Afficher le logo Stats.fm à côté de la pochette.",
                showLinkToStats: "Afficher le lien vers le profil stats.fm.",
                showLinkToSong: "Afficher le lien vers le titre sur stats.fm.",
                hideStatsFmPresence: "Masquer la présence stats.fm si Spotify est lancé.",
                hideStatsFmPresence2: "Masquer la présence stats.fm si un RPC externe est lancé.",
                disableDownloadingAlbumArt: "Désactiver le téléchargement des pochettes.",
                showWhatYouRe2: "Affiche ce que tu lis sur Jellyfin. Pour obtenir ta clé API : ouvre l'interface web de Jellyfin, appuie sur F12 pour ouvrir les outils de développement, va dans l'onglet Réseau, cherche les requêtes vers ton serveur, trouve l'en-tête Authorization (Ctrl+F pour chercher) ; il te faut la partie Token='this'. Ton ID utilisateur se trouve dans l'URL de ta page de profil.",
                jellyfinServerUrl: "URL du serveur Jellyfin.",
                jellyfinApiKey: "Clé API Jellyfin.",
                authorization: "Authorization",
                jellyfinUserId: "ID utilisateur Jellyfin.",
                userIdFromProfile: "ID utilisateur depuis l'URL du profil",
                nameDisplayFormat: "Format d'affichage du nom.",
                customNameTemplate: "Modèle de nom personnalisé.",
                nameOnJellyfin: "{name} sur Jellyfin",
                coverTypeForTv: "Type de couverture pour les séries TV.",
                episodeNumberFormat: "Format du numéro d'épisode.",
                overrideRichPresenceType: "Remplacer le type de Rich Presence.",
                showEpisodeNameAfter: "Afficher le nom de l'épisode après les infos saison/épisode.",
                showPresenceWhenMedia: "Afficher la présence quand le média est en pause.",
                hideMediaDetails: "Masquer les détails du média.",
                discordRichPresenceFor: "Rich Presence Discord pour Gensokyo Radio. Active-le et écoute !",
                refreshIntervalInSeconds: "Intervalle d'actualisation en secondes.",
                showWhatYouRe3: "Affiche ce que tu écoutes via Navidrome.",
                navidromeServerUrlMust: "URL du serveur Navidrome (doit être un domaine public, ex. https://navidrome.example.com).",
                navidromeUsername: "Nom d'utilisateur Navidrome.",
                navidromePassword: "Mot de passe Navidrome.",
                optionalDiscordApplicationClient: "ID client d'application Discord facultatif.",
                howToFetchAlbum: "Comment récupérer les pochettes.",
                optionalProvideYourOwn: "Facultatif : fournis ta propre clé API Last.fm (valeur par défaut si vide).",
                showNavidromeLogoIn: "Afficher le logo Navidrome en bas à droite de la pochette.",
                showAlbumNameIn: "Afficher le nom de l'album dans la présence.",
                whichTypeOfActivity: "Quel type d'activité afficher.",
                showTheStateDetails: "Afficher le contenu de la ligne d'état / détails dans la liste des membres",
                hideRichPresenceWhen: "Masquer la Rich Presence quand la musique est en pause (au lieu d'afficher un chronomètre)",
                theListeningToText: "Le texte « Écoute » (ex. {artist})",
                navidrome: "Navidrome",
                theMainLineShowing: "La ligne principale qui affiche le titre en cours (ex. {song})",
                song: "{song}",
                theLineBelowThe: "La ligne sous le nom du titre (ex. {artist})",
                artist: "{artist}",
                theAlbumLineE: "La ligne de l'album (ex. {album})",
                album: "{album}",
                enableTabLabelsCurrenttab: "Activer la présence {{TAB_LABELS_currentTab}}.",
                statsFmProfile: "Profil Stats.fm",
                viewSong: "Voir le titre",
                showArtistName: "Afficher le nom de l'artiste",
                showTrackName: "Afficher le nom du titre",
                enterValue: "Saisissez une valeur"
            },
            name: "RichPresence",
            description: "Hub unifié de Rich Presence pour AudioBookShelf, osu!, stats.fm, Jellyfin, Navidrome et Gensokyo Radio.",
            toast: {
                audiobookshelfRpcIsNot: "Le RPC AudioBookShelf n'est pas configuré.",
                jellyfinRpcIsNot: "Le RPC Jellyfin n'est pas configuré.",
                jellyfinReturnedAnInvalid: "Jellyfin a renvoyé une réponse invalide. Ta clé API est peut-être incorrecte."
            },
            option: {
                enabled: {
                    description: "Activer les services de Rich Presence.",
                    label: "Activé"
                },
                serviceSettings: {
                    description: "Configuration du service.",
                    label: "Paramètres du service"
                },
                abs_enabled: {
                    description: "Activer la présence AudioBookShelf.",
                    label: "AudioBookShelf activé"
                },
                tosu_enabled: {
                    description: "Activer la présence osu! (tosu).",
                    label: "osu! (tosu) activé"
                },
                sfm_enabled: {
                    description: "Activer la présence stats.fm.",
                    label: "Stats.fm activé"
                },
                jf_enabled: {
                    description: "Activer la présence Jellyfin.",
                    label: "Jellyfin activé"
                },
                gr_enabled: {
                    description: "Activer la présence Gensokyo Radio.",
                    label: "Gensokyo Radio activé"
                },
                nd_enabled: {
                    description: "Activer la présence Navidrome.",
                    label: "Navidrome activé"
                },
                abs_serverUrl: {
                    description: "URL du serveur AudioBookShelf.",
                    label: "URL du serveur AudioBookShelf"
                },
                abs_username: {
                    description: "Nom d'utilisateur AudioBookShelf.",
                    label: "Nom d'utilisateur AudioBookShelf"
                },
                abs_password: {
                    description: "Mot de passe AudioBookShelf.",
                    label: "Mot de passe AudioBookShelf"
                },
                sfm_username: {
                    description: "Nom d'utilisateur Stats.fm.",
                    label: "Nom d'utilisateur Stats.fm"
                },
                sfm_shareUsername: {
                    description: "Afficher le lien vers le profil stats.fm.",
                    label: "Stats.fm : partager le nom d'utilisateur"
                },
                sfm_shareSong: {
                    description: "Afficher le lien vers le titre sur stats.fm.",
                    label: "Stats.fm : partager le titre"
                },
                sfm_hideWithSpotify: {
                    description: "Masquer la présence stats.fm si Spotify est lancé.",
                    label: "Stats.fm : masquer avec Spotify"
                },
                sfm_hideWithExternalRPC: {
                    description: "Masquer la présence stats.fm si un RPC externe est lancé.",
                    label: "Stats.fm : masquer avec un RPC externe"
                },
                sfm_statusName: {
                    description: "Texte de statut personnalisé.",
                    label: "Stats.fm : nom du statut"
                },
                sfm_nameFormat: {
                    description: "Format du nom.",
                    label: "Stats.fm : format du nom",
                    statusName: "Utiliser un nom de statut personnalisé",
                    artistFirst: "Utiliser le format « artiste - titre »",
                    songFirst: "Utiliser le format « titre - artiste »",
                    artistOnly: "Utiliser uniquement le nom de l'artiste",
                    songOnly: "Utiliser uniquement le nom du titre",
                    albumName: "Utiliser le nom de l'album"
                },
                sfm_useListeningStatus: {
                    description: "Afficher le statut d'écoute.",
                    label: "Stats.fm : utiliser le statut d'écoute"
                },
                sfm_missingArt: {
                    description: "Solution de repli quand la pochette manque.",
                    label: "Stats.fm : pochette manquante",
                    statsFmLogo: "Utiliser le grand logo Stats.fm",
                    placeholder: "Utiliser un espace réservé générique"
                },
                sfm_showLogo: {
                    description: "Afficher le logo Stats.fm à côté de la pochette.",
                    label: "Stats.fm : afficher le logo"
                },
                sfm_alwaysHideArt: {
                    description: "Désactiver le téléchargement des pochettes.",
                    label: "Stats.fm : toujours masquer la pochette"
                },
                jf_serverUrl: {
                    description: "URL du serveur Jellyfin.",
                    label: "URL du serveur Jellyfin"
                },
                jf_apiKey: {
                    description: "Clé API Jellyfin.",
                    label: "Clé API Jellyfin"
                },
                jf_userId: {
                    description: "ID utilisateur Jellyfin.",
                    label: "ID utilisateur Jellyfin"
                },
                jf_nameDisplay: {
                    description: "Format d'affichage du nom.",
                    label: "Jellyfin : affichage du nom",
                    default: "Nom de la série/du film",
                    full: "Série - nom de l'épisode/de la piste/du film",
                    custom: "Personnalisé"
                },
                jf_customName: {
                    description: "Modèle de nom personnalisé.",
                    label: "Jellyfin : nom personnalisé"
                },
                jf_coverType: {
                    description: "Type de couverture pour les séries TV.",
                    label: "Jellyfin : type de couverture",
                    series: "Couverture de la série",
                    episode: "Couverture de l'épisode"
                },
                jf_episodeFormat: {
                    description: "Format du numéro d'épisode.",
                    label: "Jellyfin : format d'épisode",
                    long: "S01E01",
                    fulltext: "Saison 1 épisode 1"
                },
                jf_showEpisodeName: {
                    description: "Afficher le nom de l'épisode après les infos saison/épisode.",
                    label: "Jellyfin : afficher le nom de l'épisode"
                },
                jf_overrideType: {
                    description: "Remplacer le type de Rich Presence.",
                    label: "Jellyfin : remplacer le type",
                    off: "Désactivé",
                    listening: "Écoute",
                    playing: "Joue",
                    streaming: "Streame",
                    watching: "Regarde"
                },
                jf_showPausedState: {
                    description: "Afficher la présence quand le média est en pause.",
                    label: "Jellyfin : afficher l'état en pause"
                },
                jf_privacyMode: {
                    description: "Masquer les détails du média.",
                    label: "Jellyfin : mode confidentialité"
                },
                gr_refreshInterval: {
                    description: "Intervalle d'actualisation en secondes.",
                    label: "Gensokyo Radio : intervalle d'actualisation"
                },
                nd_serverUrl: {
                    description: "URL du serveur Navidrome (ex. https://navidrome.example.com)",
                    label: "URL du serveur Navidrome"
                },
                nd_username: {
                    description: "Nom d'utilisateur Navidrome",
                    label: "Nom d'utilisateur Navidrome"
                },
                nd_password: {
                    description: "Mot de passe Navidrome",
                    label: "Mot de passe Navidrome"
                },
                nd_clientId: {
                    description: "ID client d'application Discord facultatif",
                    label: "Navidrome : ID client"
                },
                nd_showSmallImage: {
                    description: "Afficher le logo Navidrome en bas à droite de la pochette.",
                    label: "Navidrome : afficher la petite image"
                },
                nd_showAlbum: {
                    description: "Afficher le nom de l'album dans la présence.",
                    label: "Navidrome : afficher l'album"
                },
                nd_albumArtMode: {
                    description: "Comment récupérer les pochettes.",
                    label: "Navidrome : mode de pochette",
                    none: "Aucun",
                    instance: "Instance Navidrome (expose l'URL du serveur à Discord, aucune authentification envoyée)",
                    lastfm: "API Last.fm (envoie les métadonnées du titre à Last.fm)"
                },
                nd_lastfmApiKey: {
                    description: "Clé API Last.fm facultative",
                    label: "Navidrome : clé API Last.fm"
                },
                nd_refreshInterval: {
                    description: "Intervalle d'actualisation en secondes.",
                    label: "Navidrome : intervalle d'actualisation"
                },
                nd_activityType: {
                    description: "Quel type d'activité",
                    label: "Navidrome : type d'activité",
                    listening: "Écoute",
                    playingFixesHiddenLines: "Joue (corrige les lignes masquées)",
                    watching: "Regarde"
                },
                nd_nameString: {
                    description: "Chaîne de format du nom de l'activité",
                    label: "Navidrome : chaîne du nom"
                },
                nd_detailsString: {
                    description: "Chaîne de format des détails de l'activité",
                    label: "Navidrome : chaîne des détails"
                },
                nd_stateString: {
                    description: "Chaîne de format de l'état de l'activité",
                    label: "Navidrome : chaîne d'état"
                },
                nd_largeTextString: {
                    description: "Chaîne de format du grand texte de l'activité",
                    label: "Navidrome : chaîne du grand texte"
                },
                nd_statusDisplayType: {
                    description: "Afficher le titre / l'artiste dans la liste des membres",
                    off: "Ne pas afficher (affiche un message d'écoute générique)"
                },
                nd_hideOnPause: {
                    description: "Masquer la Rich Presence quand la musique est en pause",
                    label: "Navidrome : masquer en pause"
                }
            },
            panel: {
                password: "Mot de passe",
                statsFmUsername: "nom d'utilisateur stats.fm",
                customStatusText: "Texte de statut personnalisé",
                nameFormat: "Format du nom",
                missingArtFallback: "Repli si pochette manquante",
                showListeningStatus: "Afficher le statut d'écoute",
                showStatsFmLogo: "Afficher le logo Stats.fm",
                showProfileLink: "Afficher le lien du profil",
                showSongLink: "Afficher le lien du titre",
                hideWithSpotify: "Masquer avec Spotify",
                hideWithExternalRpc: "Masquer avec un RPC externe",
                disableAlbumArt: "Désactiver les pochettes",
                apiKey: "Clé API",
                userId: "ID Utilisateur",
                nameDisplay: "Affichage du nom",
                customNameTemplate: "Modèle de nom personnalisé",
                coverType: "Type de couverture",
                episodeFormat: "Format d'épisode",
                overridePresenceType: "Remplacer le type de présence",
                showEpisodeName: "Afficher le nom de l'épisode",
                showWhenPaused: "Afficher en pause",
                privacyMode: "Mode confidentialité",
                refreshInterval: "Intervalle d'actualisation",
                clientId: "ID client",
                albumArtMode: "Mode de pochette",
                lastFmApiKey: "Clé API Last.fm",
                showSmallImage: "Afficher la petite image",
                showAlbum: "Afficher l'album",
                activityType: "Type d'activité",
                statusDisplayType: "Type d'affichage du statut",
                hideOnPause: "Masquer en pause",
                activityNameFormat: "Format du nom de l'activité",
                detailsFormat: "Format des détails",
                stateFormat: "Format de l'état",
                largeTextFormat: "Format du grand texte",
                enabled: "Activé"
            }
        },
        sedEnhanced: {
            option: {
                regexByDefault: {
                    description: "Inverse le drapeau `r` : l'utiliser active le mode sans regex, l'omettre utilise le mode regex.",
                    label: "Regex par défaut"
                }
            },
            name: "SedEnhanced",
            description: "Étend la prise en charge rudimentaire de `sed` par Discord."
        },
        showRolesInChat: {
            option: {
                showBots: {
                    description: "Afficher ou non le rôle le plus élevé des bots.",
                    label: "Afficher les bots"
                },
                useRoleColor: {
                    description: "Utiliser la couleur du rôle pour l'icône.",
                    label: "Utiliser la couleur du rôle"
                }
            },
            name: "ShowRolesInChat",
            description: "Affiche le rôle le plus élevé d'un utilisateur à côté de son nom dans les messages. Masque/affiche des rôles précis via leur menu contextuel (clic droit).",
            text: {
                chatRoleActions: "Actions de rôle dans le chat",
                unhideRolesInChat: "Réafficher les rôles dans le chat",
                showRoleInChat: "Afficher le rôle dans le chat",
                hideRoleInChat: "Masquer le rôle dans le chat"
            }
        },
        silenceUsers: {
            option: {
                mutedUserIds: {
                    description: "ID d'utilisateurs Discord, séparés par des virgules, dont les mentions et badges de serveur seront rendus silencieux.",
                    label: "ID des utilisateurs en sourdine"
                }
            },
            name: "SilenceUsers",
            description: "Rend silencieuses les mentions @ et les compteurs de badges de serveur de certains utilisateurs. Les messages normaux et les MP ne sont pas affectés."
        },
        songLink: {
            text: {
                showIfAvailable: "Afficher si disponible",
                openInDesktopApp: "Ouvrir dans l'application de bureau",
                loadingSongLink: "Chargement du lien du titre...",
                pleaseProvideAMusic: "Fournis un lien musical.",
                thisWillTakeA: "Cela va prendre un instant...",
                noAlternativePlatformsFound: "Aucune plateforme alternative trouvée pour ce lien.",
                failedToResolveMusic: "Impossible de résoudre le lien musical",
                logo: "Logo {{name}}"
            },
            option: {
                servicesSettings: {
                    description: "paramètres des services",
                    label: "Paramètres des services"
                },
                userCountry: {
                    description: "Pays utilisé pour la recherche (code pays à deux lettres)",
                    label: "Pays de l'utilisateur"
                },
                includeMetadata: {
                    description: "Inclure le titre et le nom de l'artiste en en-tête.",
                    label: "Inclure les métadonnées"
                }
            },
            name: "SongLink",
            description: "Ajoute des boutons de services de streaming sous les liens de titres",
            command: {
                musiclink: "Convertir un lien musical vers d'autres plateformes de streaming.",
                url: "Lien musical (Spotify, Deezer, YouTube, Tidal, Apple Music, SoundCloud)"
            }
        },
        songSpotlight: {
            name: "SongSpotlight",
            description: "Mets en avant des titres sur ton profil",
            text: {
                songSpotlight: "Song Spotlight",
                explicit: "Explicite",
                addSong: "Ajouter un titre",
                addANewSong: "Ajouter un nouveau titre",
                copyLink: "Copier le lien",
                removeSong: "Retirer le titre",
                failedToLoad: "Échec du chargement !",
                areYouSure: "Es-tu sûr ?",
                thisWillOverwriteYour: "Cela écrasera tes titres actuels.",
                continue: "Continuer",
                nevermind: "Laisse tomber",
                thisWillPermanentlyDelete: "Cela supprimera définitivement tous tes titres.",
                delete: "Supprimer",
                signInToSong: "Se connecter à Song Spotlight",
                songs: "Titres",
                authorization: "Authorization",
                importFromClipboard: "Importer depuis le presse-papiers",
                copyToClipboard: "Copier dans le presse-papiers",
                signOut: "Se déconnecter",
                deleteSongs: "Supprimer les titres",
                more: "Plus",
                editSongs: "Modifier les titres",
                copyJson: "Copier le JSON",
                looksLikeThereS: "On dirait qu'il n'y a rien ici !",
                uhOhSongSpotlight: "Oh non ! Song Spotlight n'a pas pu se charger. Consulte la console pour plus de détails.",
                stealSong: "Voler le titre",
                profileSongs: "Titres du profil",
                notEnoughSpace: "Pas assez de place",
                alreadyAdded: "Vous avez déjà ajouté cette chanson",
                invalidLink: "Lien invalide",
                failedToParseLink: "Impossible d'analyser le lien",
                invalidUrl: "URL invalide",
                goAddSongs: "Alors ? Qu'attendez-vous ? Ajoutez quelques chansons à votre Song Spotlight !",
                tellUserToAddSongs: "Dites à {{name}} d'ajouter quelques chansons à son Song Spotlight !",
                supportedServices: "Song Spotlight prend en charge ces services :",
                viewSongsVia: "Vous pouvez aussi voir vos chansons avec la commande",
                viewSongsViaSuffix: "!",
                coverTooltipOwner: "{{sublabel}} de {{label}}",
                coverTooltipBy: "{{label}} par {{sublabel}}",
                lastUpdated: "Dernière mise à jour",
                save: "Enregistrer",
                showMore: "Afficher {{count}} de plus"
            },
            toast: {
                youHaveBeenSigned: "Tu as été déconnecté de Song Spotlight. Reconnecte-toi.",
                songSpotlightError: "Song Spotlight : {{error}}",
                successfullyAuthorized: "Autorisation réussie !",
                failedToPlaySong: "Impossible de lire l'aperçu du titre !",
                addedSong: "Titre ajouté !",
                removedSong: "Titre retiré !",
                noJsonInClipboard: "Aucun JSON dans le presse-papiers !",
                invalidSongSpotlightData: "Données Song Spotlight invalides dans le presse-papiers !",
                oneOrMoreImported: "Un ou plusieurs titres importés étaient invalides.",
                importedSongsFromClipboard: "Titres importés depuis le presse-papiers !",
                successfullySavedSongs: "Titres enregistrés avec succès !",
                successfullySignedOut: "Déconnexion réussie !",
                successfullyDeletedSongs: "Titres supprimés avec succès !",
                youDonTHave: "Tu n'as pas assez de place !",
                uhOhThisSong: "Oh non, ce titre n'existe pas !",
                youAlreadyHaveThis: "Tu as déjà ajouté ce titre !",
                youDonTHave2: "Tu... n'as pas ajouté ce titre ?",
                fetchError: "Erreur de récupération Song Spotlight sur {{path}}"
            },
            option: {
                collapseSongList: {
                    description: "Réduit la liste des titres des profils à un bouton qui ouvre un menu séparé",
                    label: "Réduire la liste des titres"
                },
                profileSongsLimit: {
                    description: "Nombre de titres affichés au premier clic sur un utilisateur",
                    label: "Limite de titres du profil"
                },
                previewVolume: {
                    description: "Volume des aperçus de titres",
                    label: "Volume de l'aperçu"
                }
            }
        },
        stopAutoUnread: {
            name: "StopAutoUnread",
            description: "Empêche Discord de passer automatiquement le paramètre de notification d'un salon à « Tous les messages »"
        },
        themeLibrary: {
            text: {
                enablePlugin: "Activer le plugin",
                cancel: "Annuler",
                holdOn: "Attends !",
                thisThemeRequiresThe: "Ce thème nécessite le",
                pluginToWorkProperly: "plugin pour fonctionner correctement !",
                doYouWantTo: "Veux-tu l'activer ?",
                themeInfo: "Infos du thème",
                viewSource: "Voir la source",
                close: "Fermer",
                download: "Télécharger",
                overwrite: "Écraser",
                keepMyFile: "Garder mon fichier",
                copyToClipboard: "Copier dans le presse-papiers",
                conflict: "Conflit !",
                themeSource: "Source du thème",
                aThemeWithThe: "Un thème du même nom",
                alreadyExists: "existe déjà",
                inYourThemesDirectory: "dans ton dossier de thèmes ! Veux-tu l'écraser ?",
                version: "Version",
                likes: "J'aime",
                donate: "Faire un don",
                supportServer: "Serveur d'assistance",
                source: "Source",
                tags: "Tags",
                youCanSupportThe: "Tu peux soutenir l'auteur en faisant un don ci-dessous !",
                joinDiscordServer: "Rejoindre le serveur Discord",
                viewThemeSource: "Voir la source du thème",
                showAll: "Tout afficher",
                showThemes: "Afficher les thèmes",
                showSnippets: "Afficher les extraits",
                showMostLiked: "Afficher les plus aimés",
                showDark: "Afficher les sombres",
                showLight: "Afficher les clairs",
                showEnabled: "Afficher les activés",
                showDisabled: "Afficher les désactivés",
                searchForATheme: "Rechercher un thème...",
                gettingTheLatestThemes: "Récupération des derniers thèmes...",
                thisWonTTake: "Ça ne prendra pas longtemps !",
                failedToFetchThemes: "Impossible de récupérer les thèmes",
                couldNotFetchThe: "Impossible de récupérer la liste des thèmes. Réessaie plus tard.",
                wantYourThemeRemoved: "Tu veux que ton thème soit retiré ?",
                hide: "Masquer",
                noThemeFound: "Aucun thème trouvé.",
                tryNarrowingYourSearch: "Essaie d'affiner ta recherche.",
                themeLibrary: "Bibliothèque de thèmes",
                successfullyAuthorizedWithThemelibrary: "Autorisation réussie avec ThemeLibrary !",
                failedToAuthorizeCheck: "Échec de l'autorisation, vérifie la console",
                successfullyDeauthorizedFromThemelibrary: "Autorisation ThemeLibrary révoquée avec succès !",
                failedToDeauthorizeCheck: "Échec de la révocation, vérifie la console",
                themelibraryAuth: "Authentification ThemeLibrary",
                themeRemoval: "Retrait de thème",
                allThemeAuthorsAre: "Tous les auteurs de thèmes sont crédités dans les infos du thème, aucune source n'a été modifiée. Si tu souhaites malgré tout que ton thème soit retiré, ouvre une issue en cliquant ci-dessous.",
                authorizeWithThemelibrary: "S'autoriser avec ThemeLibrary",
                copyThemelibraryToken: "Copier le jeton ThemeLibrary",
                deauthorizeThemelibrary: "Révoquer l'autorisation ThemeLibrary",
                themeDetails: "Détails de {{name}}",
                mostLiked: "Les plus aimés",
                newestAdditions: "Derniers ajouts",
                removeTheme: "Retirer le thème",
                addTheme: "Ajouter le thème",
                authors: "Auteurs",
                author: "Auteur",
                nobodyLikedTheme: "Personne n'a encore aimé ce thème.",
                nobodyLikedSnippet: "Personne n'a encore aimé ce snippet.",
                usersLikedTheme: "{{likes}} utilisateurs ont aimé ce thème !",
                usersLikedSnippet: "{{likes}} utilisateurs ont aimé ce snippet !",
                openThemeLibrary: "Ouvrir la bibliothèque de thèmes",
                lastUpdated: "Ce thème a été mis à jour pour la dernière fois le",
                removalInfo: "Si vous souhaitez que vos thèmes soient définitivement supprimés, ouvrez une issue sur",
                themes: "Thèmes",
                requestRemoval: "Demander la suppression d'un thème",
                pluginSuffix: "plugin !"
            },
            toast: {
                downloadedName: "{{name}} téléchargé !",
                failedToDownloadName: "Impossible de télécharger {{name}} ! (vérifie la console)",
                invalidOrExpiredInvite: "Invitation invalide ou expirée !",
                copiedToClipboard: "Copié dans le presse-papiers",
                noUniquetokenPresentTry: "Aucun uniqueToken présent, autorise-toi d'abord !",
                noTokenToCopy: "Aucun jeton à copier, autorise-toi d'abord !",
                copiedToClipboard2: "Copié dans le presse-papiers !"
            },
            name: "ThemeLibrary",
            description: "Une bibliothèque de thèmes pour Plexcord.",
            option: {
                hideWarningCard: {
                    description: "Masquer la carte d'avertissement en haut de l'onglet Bibliothèque de thèmes",
                    label: "Masquer la carte d'avertissement"
                },
                buttons: {
                    description: "Boutons ThemeLibrary",
                    label: "Boutons"
                }
            }
        },
        translatePlus: {
            name: "Translate+",
            description: "Le plugin de traduction de Plexcord, mais avec la prise en charge des langues artistiques !",
            text: {
                translate: "Traduire",
                dismiss: "Ignorer",
                translationFailedDueTo: "La traduction a échoué à cause d'une erreur.",
                translatedFrom: "traduit depuis {{lang}}"
            },
            option: {
                target: {
                    description: "Langue cible",
                    label: "Cible"
                },
                toki: {
                    description: "Activer le toki pona",
                    label: "Toki pona"
                },
                sitelen: {
                    description: "Activer le sitelen pona",
                    label: "Sitelen pona"
                },
                shavian: {
                    description: "Activer l'alphabet shavien",
                    label: "Shavien"
                }
            }
        },
        triviaAI: {
            name: "TriviaAI",
            description: "Un plugin qui t'aide à répondre aux questions de quiz grâce à l'IA.",
            text: {
                answerWithAi: "Répondre avec l'IA",
                enterApiKeyHere: "Saisis ici la clé API de ton point de terminaison d'IA.",
                enterSystemPrompt: "Saisis le prompt système.",
                enterYourOpenaiCompatible: "Saisis ici ton point de terminaison d'IA compatible OpenAI.",
                status: "Statut {{status}}"
            },
            option: {
                apiKey: {
                    description: "Clé API.",
                    label: "Clé API"
                },
                model: {
                    description: "Modèle d'IA à utiliser.",
                    label: "Modèle",
                    placeholder: "ex. google/gemini-3-flash-preview, inception/mercury, openai/gpt-5.2-chat, etc."
                },
                systemPrompt: {
                    description: "Prompt système de l'IA. Espaces réservés : {current_user}, {current_time}",
                    label: "Prompt système"
                },
                maxTokens: {
                    description: "Nombre maximal de jetons dans la réponse.",
                    label: "Jetons max."
                },
                endpoint: {
                    description: "Point de terminaison d'IA compatible OpenAI.",
                    label: "Point de terminaison"
                },
                context: {
                    description: "Nombre de messages précédents à inclure comme contexte.",
                    label: "Contexte"
                },
                passMessageAuthorName: {
                    description: "Préfixer le contenu du message par le nom de l'auteur lors de l'envoi à l'IA. Cela peut aider l'IA à distinguer les utilisateurs d'une conversation.",
                    label: "Transmettre le nom de l'auteur"
                },
                treatSelfAsAssistant: {
                    description: "Si activé, tes propres messages seront traités comme des messages de l'assistant dans le contexte. Certains modèles se mettent alors à écrire des fanfics.",
                    label: "Me traiter comme l'assistant"
                },
                mode: {
                    description: "Comment traiter les réponses ?",
                    label: "Mode",
                    autoreply: "Réponse automatique",
                    chatbar: "Remplacer le texte de la barre de chat",
                    bot: "Clyde"
                },
                supportImages: {
                    description: "Transmettre les images à l'IA comme contexte (s'il y en a). Tous les modèles ne le prennent pas en charge.",
                    label: "Prendre en charge les images"
                },
                sendImagesAsBase64: {
                    description: "Envoyer les images à l'IA en base64.",
                    label: "Envoyer les images en base64"
                }
            },
            toast: {
                triviaaiApiSettingsAre: "TriviaAI : les paramètres de l'API sont incomplets.",
                errorGettingResponseFrom: "Erreur lors de la récupération de la réponse du modèle d'IA"
            }
        },
        unreadCountBadge: {
            option: {
                showOnMutedChannels: {
                    description: "Afficher le nombre de non-lus sur les salons en sourdine",
                    label: "Afficher sur les salons en sourdine"
                },
                notificationCountLimit: {
                    description: "Afficher +99 au lieu du nombre réel",
                    label: "Limite du compteur de notifications"
                }
            },
            name: "UnreadCountBadge",
            description: "Affiche des badges de messages non lus sur les salons de la liste des salons"
        },
        userPFP: {
            toast: {
                gifsWebpMustBe: "Les GIF/WebP doivent être ajoutés via une URL. Les liens Imgur, GitHub, Tenor, Giphy et Discord fonctionnent sans configuration supplémentaire."
            },
            text: {
                save: "Enregistrer",
                delete: "Supprimer",
                customAvatar: "Avatar personnalisé",
                original: "Original",
                local: "Local",
                enterPngGifUrl: "Saisis l'URL du PNG/GIF",
                setAvatar: "Définir l'avatar",
                usingTheSetAvatar: "La fonction de définition d'avatar est uniquement locale : toi seul vois le changement.",
                joinUserpfpServer: "Rejoindre le serveur UserPFP",
                dropHere: "Déposez ici !",
                dragOrClick: "⬆ Faites glisser une image ou cliquez pour l'envoyer (pour les GIF ou WebP, utilisez plutôt une URL)",
                uploadedFile: "(fichier envoyé)",
                supportHere: "Soutenir UserPFP ici"
            },
            option: {
                overrideServerAvatars: {
                    description: "Remplacer les avatars de serveur par les avatars personnalisés, ou par l'avatar par défaut si aucun n'est défini.",
                    label: "Remplacer les avatars de serveur"
                },
                preferNitro: {
                    description: "Quel avatar utiliser si un avatar animé par défaut (Nitro) et un avatar UserPFP sont présents",
                    label: "Préférer Nitro",
                    false: "UserPFP",
                    true: "Nitro"
                },
                databaseSource: {
                    description: "URL de chargement de la base de données",
                    label: "Source de la base de données"
                }
            },
            name: "UserPFP",
            description: "Permet de définir des avatars locaux statiques ou animés pour vous et d'autres utilisateurs"
        },
        userpluginInstaller: {
            toast: {
                restartToApplyChanges: "Redémarre pour appliquer les modifications !"
            },
            text: {
                installError: "Erreur d'installation",
                done: "Terminé !",
                later: "Plus tard",
                updateError: "Erreur de mise à jour",
                checkingForUpdates: "Recherche de mises à jour...",
                loadingPlugins: "Chargement des plugins...",
                pluginUpdatesAvailable: "Mises à jour de plugins disponibles",
                theFollowingPluginsAre: "Les plugins suivants sont obsolètes :",
                youCanUpdatePlugins: "Tu peux mettre à jour les plugins ci-dessous.",
                installPlugin: "Installer le plugin",
                userplugininstallerNotFullyLoaded: "UserpluginInstaller n'est pas entièrement chargé",
                youNeedToRestart: "Tu dois redémarrer pour que la partie native soit chargée :)",
                restartNow: "Redémarrer maintenant",
                someUserpluginsAreOut: "Certains UserPlugins sont obsolètes !",
                clickToOpenThe: "Clique pour ouvrir le gestionnaire de mise à jour des UserPlugins",
                plexcordDoesNotModerate: "Plexcord ne modère pas les userplugins et décline toute responsabilité quant aux conséquences de leur installation.",
                onlyInstallUserpluginsFrom: "N'installe que des userplugins de développeurs de confiance. C'est entièrement à tes risques et périls.",
                setGitPath: "Définir le chemin de Git",
                installHint: "Tu peux installer un plugin depuis GitHub, GitLab, Codeberg, git.nin0.dev ou plugins.nin0.dev en collant ici son URL de clonage.",
                enableAndRestart: "Activer et redémarrer",
                enableAndRefresh: "Activer et actualiser",
                tabCounts: "({{total}}, {{enabled}} activés)",
                possiblyMore: "et peut-être d'autres, car la vérification des mises à jour n'est pas terminée. ",
                alreadyInstalled: "Plugin déjà installé, mettez-le à jour ci-dessous",
                invalidUrl: "URL invalide, lisez la note ci-dessus",
                install: "Installer",
                restart: "Redémarrer",
                refresh: "Actualiser",
                update: "Mettre à jour",
                source: "Source",
                support: "Support",
                managePlugins: "Gérer les plugins",
                uninstalledRestart: "{{name}} a été désinstallé. Un redémarrage est nécessaire pour supprimer complètement le plugin.",
                uninstalledRefresh: "{{name}} a été désinstallé. Une actualisation est nécessaire pour supprimer complètement le plugin.",
                updatedRestart: "{{name}} a été mis à jour. Un redémarrage est nécessaire pour appliquer la mise à jour.",
                updatedRefresh: "{{name}} a été mis à jour. Une actualisation est nécessaire pour appliquer la mise à jour.",
                installedBody: "{{name}} a été installé avec succès. Et maintenant ?",
                installedNativeBody: "{{name}} a été installé avec succès. Cependant, comme il utilise des fonctions natives, un redémarrage du client est requis. Et maintenant ?"
            },
            option: {
                allowlistedChannels: {
                    description: "Liste de salons, séparés par des virgules, où afficher le bouton Installer le plugin. Il est toujours affiché dans les salons de userplugins de Plexcord",
                    label: "Salons autorisés"
                },
                notifyIfUpdate: {
                    description: "Afficher une notification Plexcord si des UserPlugins doivent être mis à jour",
                    label: "Notifier en cas de mise à jour"
                },
                neverNotifyForPlugins: {
                    description: "Ne jamais afficher de notifications de mise à jour pour ces plugins (tu peux toujours les mettre à jour depuis l'onglet UserPlugins)",
                    label: "Ne jamais notifier pour ces plugins"
                }
            },
            name: "UserpluginInstaller",
            description: "Installe des userplugins d'un simple clic"
        },
        vCPanelSettings: {
            option: {
                title1: {
                    label: "Titre 1"
                },
                uncollapseSettingsByDefault: {
                    description: "Déplier automatiquement les paramètres vocaux par défaut",
                    label: "Déplier les paramètres par défaut"
                },
                title2: {
                    label: "Titre 2"
                },
                outputVolume: {
                    description: "Afficher un curseur de volume de sortie",
                    label: "Volume de sortie"
                },
                inputVolume: {
                    description: "Afficher un curseur de volume d'entrée",
                    label: "Volume d'entrée"
                },
                outputDevice: {
                    description: "Afficher un sélecteur de périphérique de sortie",
                    label: "Périphérique de sortie"
                },
                inputDevice: {
                    description: "Afficher un sélecteur de périphérique d'entrée",
                    label: "Périphérique d'entrée"
                },
                camera: {
                    description: "Afficher un sélecteur de caméra",
                    label: "Caméra"
                },
                title3: {
                    label: "Titre 3"
                },
                showOutputVolumeHeader: {
                    description: "Afficher un en-tête au-dessus du curseur de volume de sortie",
                    label: "Afficher l'en-tête du volume de sortie"
                },
                showInputVolumeHeader: {
                    description: "Afficher un en-tête au-dessus du curseur de volume d'entrée",
                    label: "Afficher l'en-tête du volume d'entrée"
                },
                showOutputDeviceHeader: {
                    description: "Afficher un en-tête au-dessus du sélecteur de périphérique de sortie",
                    label: "Afficher l'en-tête du périphérique de sortie"
                },
                showInputDeviceHeader: {
                    description: "Afficher un en-tête au-dessus du sélecteur de périphérique d'entrée",
                    label: "Afficher l'en-tête du périphérique d'entrée"
                },
                showVideoDeviceHeader: {
                    description: "Afficher un en-tête au-dessus du sélecteur de caméra",
                    label: "Afficher l'en-tête du périphérique vidéo"
                }
            },
            name: "VCPanelSettings",
            description: "Contrôle les paramètres vocaux directement depuis le panneau vocal",
            text: {
                appearance: "Apparence",
                settingsToShow: "Paramètres à afficher",
                headersToShow: "En-têtes à afficher",
                outputVolume: "Volume de sortie",
                inputVolume: "Volume d'entrée",
                outputDevice: "Périphérique de sortie",
                inputDevice: "Périphérique d'entrée",
                settings: "Paramètres",
                hide: "Masquer"
            }
        },
        voiceMessageTranscriber: {
            text: {
                autoDetect: "Détection automatique",
                start: "Démarrer",
                transcriptionOptions: "Options de transcription",
                audioLanguage: "Langue de l'audio",
                retry: "Réessayer",
                transcriptionFailed: "Échec de la transcription",
                transcribeVoiceMessage: "Transcrire le message vocal",
                close: "Fermer",
                baseRecommended: "Base (recommandé)",
                small: "Small",
                largeV3TurboBest: "Large v3 Turbo (meilleure précision, GPU recommandé)",
                transcribe: "Transcrire",
                translateToEnglish: "Traduire en anglais",
                voiceMessageTranslation: "Traduction du message vocal",
                voiceMessageTranscription: "Transcription du message vocal",
                hideTimestamps: "Masquer les horodatages",
                showTimestamps: "Afficher les horodatages",
                copied: "Copié !",
                copyText: "Copier le texte",
                downloadingAudio: "Téléchargement de l'audio...",
                processingAudio: "Traitement de l'audio...",
                loadingModel: "Chargement du modèle...",
                transcribing: "Transcription en cours...",
                transcription: "Transcription",
                transcriptionError: "Erreur de transcription",
                transcribingInProgress: "Transcription en cours...",
                initializing: "Initialisation...",
                workerCrashed: "Le worker de transcription a planté",
                workerStopped: "Le worker de transcription a été arrêté",
                deleteCache: "Supprimer tous les fichiers en cache ({{size}} Mo)",
                action: "Action"
            },
            name: "VoiceMessageTranscriber",
            description: "Transcriptions des messages vocaux sur l'appareil, propulsées par Whisper",
            option: {
                embed: {
                    description: "Afficher la transcription directement dans la pièce jointe du message vocal plutôt que dans une fenêtre.",
                    label: "Intégration"
                },
                maintainHorizontal: {
                    description: "Conserver la taille horizontale de la zone de transcription intégrée et l'agrandir verticalement.",
                    label: "Conserver l'horizontale"
                },
                selectedModel: {
                    description: "Taille du modèle.",
                    onnxcommunitywhispertiny: "Tiny (le plus rapide, précision la plus faible)"
                },
                useGpu: {
                    description: "Exécuter le modèle sur ton GPU (WebGPU) lorsque c'est pris en charge. Beaucoup plus rapide, rend les grands modèles utilisables. Bascule sur le CPU si indisponible.",
                    label: "Utiliser le GPU"
                },
                quantized: {
                    description: "Utiliser des modèles quantifiés sur CPU (taille réduite, légère perte de qualité).",
                    label: "Quantifié"
                },
                deleteModalFiles: {
                    description: "Supprimer les fichiers en cache du stockage.",
                    label: "Supprimer les fichiers du modèle"
                }
            }
        },
        voiceMessagesInBackground: {
            name: "VoiceMessagesInBackground",
            description: "Continue la lecture des messages vocaux d'un chat à l'autre avec un mini-lecteur synchronisé.",
            text: {
                voiceMessagesInBackground: "Lecteur de messages vocaux en arrière-plan",
                returnToChannelname: "Retourner à {{channelName}}",
                voiceMessagePosition: "Position du message vocal",
                changePlaybackSpeed: "Changer la vitesse de lecture",
                playbackSpeedSpeedTimes: "Vitesse de lecture {{speed}} fois",
                closeVoiceMessagePlayer: "Fermer le lecteur de messages vocaux",
                voiceMessage: "Message vocal",
                directMessage: "Message privé",
                resume: "Reprendre le message vocal",
                pause: "Mettre en pause le message vocal"
            }
        },
        webPWA: {
            name: "WebPWA",
            description: "Rend Discord installable comme application (PWA). Active les badges de notification, les raccourcis globaux et la barre de titre personnalisée de Discord.",
            text: {
                activities: "Activités",
                hopIn: "Rejoins",
                status: "Statut",
                emojis: "Émojis",
                rooms: "Salons",
                discord: "Discord",
                platforms: "Plateformes",
                keybindsInfoBefore: "Les raccourcis globaux personnalisés Appuyer pour X sont pris en charge. Allez sur",
                keybindsInfoAfter: "pour les modifier. Les raccourcis Maintenir pour X ne sont pas pris en charge."
            }
        },
        "webRichPresence (arRPC)": {
            name: "WebRichPresence (arRPC)"
        },
        webScreenShare: {
            option: {
                resolution: {
                    description: "Résolution",
                    label: "Résolution"
                },
                frameRate: {
                    description: "Fréquence d'images",
                    label: "Fréquence d'images"
                },
                contentHint: {
                    description: "Indication de contenu",
                    label: "Indication de contenu"
                },
                systemAudio: {
                    description: "Couper l'audio système",
                    label: "Audio système"
                }
            },
            name: "WebScreenShare",
            description: "Ajoute un menu d'options de partage d'écran. Permet de modifier la résolution, la fréquence d'images, les indications d'encodage et l'audio système.",
            text: {
                stream: "Stream",
                streamMuted: "Stream en sourdine",
                streamMode: "Mode stream",
                muteStreamAudio: "Couper l'audio du stream",
                preventsSystemAudioFrom: "Empêche l'audio système d'être inclus dans ton stream.",
                showStreamPreviews: "Afficher les aperçus du stream",
                allowsOthersToSee: "Permet aux autres de voir un aperçu de ton stream avant de le rejoindre.",
                smootherVideo: "Vidéo plus fluide",
                cleanerText: "Texte plus net",
                userPreset: "Préréglage utilisateur",
                custom: "Personnalisé",
                gaming: "Jeu",
                screenshare: "Partage d'écran"
            }
        },
        whitelistedEmojis: {
            option: {
                defaultEmojis: {
                    description: "Masquer les émojis Unicode par défaut de l'autocomplétion, sauf s'ils sont sur liste blanche.",
                    label: "Émojis par défaut"
                },
                serverEmojis: {
                    description: "Masquer les émojis personnalisés des serveurs de l'autocomplétion, sauf s'ils sont sur liste blanche.",
                    label: "Émojis de serveur"
                },
                disableToasts: {
                    description: "Ne pas afficher de notifications lors de l'ajout ou du retrait d'émojis.",
                    label: "Désactiver les notifications"
                },
                whiteListedEmojis: {
                    description: "Émojis sur liste blanche",
                    label: "Émojis sur liste blanche"
                },
                exportEmojis: {
                    description: "Exporter les émojis",
                    label: "Exporter les émojis"
                },
                importEmojis: {
                    description: "Importer des émojis",
                    label: "Importer des émojis"
                },
                resetEmojis: {
                    description: "Réinitialiser les émojis",
                    label: "Réinitialiser les émojis"
                }
            },
            name: "WhitelistedEmojis",
            description: "Permet de désactiver tous les émojis des messages sauf une sélection sur liste blanche.",
            toast: {
                addedLengthEmojisTo: "{{length}} émojis ajoutés à la liste, {{length}} déjà présents",
                removedLengthEmojisFrom: "{{length}} émojis retirés de la liste",
                nameIsAlreadyIn: "« {{name}} » est déjà dans la liste",
                addedNameToThe: "« {{name}} » ajouté à la liste",
                nameIsNotIn: "« {{name}} » n'est pas dans la liste",
                removedNameFromThe: "« {{name}} » retiré de la liste",
                successfullyExportedEmojis: "Émojis exportés avec succès",
                successfullyImportedEmojis: "Émojis importés avec succès",
                invalidJsonData: "Données JSON invalides",
                failedToImportEmojis: "Impossible d'importer les émojis : {{err}}",
                resetEmojis: "Émojis réinitialisés"
            },
            text: {
                areYouSure: "Es-tu sûr ?",
                thisWillOverwriteYour: "Cela écrasera ta liste blanche actuelle.",
                import: "Importer",
                cancel: "Annuler",
                thisWillRemoveAll: "Cela retirera tous les émojis de ta liste blanche.",
                reset: "Réinitialiser",
                addAllGuildEmojis: "Ajouter tous les émojis du serveur",
                removeAllGuildEmojis: "Retirer tous les émojis du serveur",
                noEmojisInThe: "Aucun émoji sur la liste blanche.",
                removeAll: "Tout retirer",
                removeFromWhitelist: "Retirer de la liste blanche",
                addToWhitelist: "Ajouter à la liste blanche",
                defaultEmojis: "Emojis par défaut",
                guildEmojis: "Emojis de {{name}}",
                guildFallback: "Serveur {{id}}",
                whitelistedEmojis: "Emojis en liste blanche",
                remove: "Retirer"
            }
        },
        wigglyText: {
            option: {
                intensity: {
                    description: "Intensité de l'animation en px",
                    label: "Intensité"
                }
            },
            name: "WigglyText",
            description: "Ajoute une nouvelle mise en forme markdown qui fait onduler le texte.",
            text: {
                leftAndRight: "gauche et droite",
                byTyping: "en tapant",
                upAndDown: "haut et bas",
                inACircle: "en cercle",
                youCanMakeTextWiggle: "Vous pouvez faire onduler du texte ainsi :"
            }
        },
        fixDiscordCss: {
            description: "Corrige le ralentissement CSS de Discord"
        },
        directFileDownload: {
            name: "DirectFileDownload",
            description: "Télécharge les fichiers directement depuis Discord au lieu de les ouvrir dans le navigateur"
        },
        githubRepos: {
            text: {
                failedToFetchRepositories: "Impossible de récupérer les dépôts",
                personal: "Personnel",
                unknown: "Inconnu",
                sortedByCount: "Trié par nombre de dépôts. Cliquez pour trier de A à Z",
                sortedAlphabetically: "Trié de A à Z. Cliquez pour trier par nombre de dépôts",
                mostRepos: "Le plus de dépôts"
            }
        }
    }
} as const;

export default translations;
