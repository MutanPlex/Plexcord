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
        title: "Ajustes",
        language: {
            selector: {
                label: "Idioma",
                description: "Selecciona tu idioma preferido para Plexcord.",
                placeholder: "Seleccionar idioma"
            }
        },
        location: {
            label: "Ubicación de Ajustes",
            description: "Dónde colocar la sección de ajustes de Plexcord",
            top: "En la parte superior",
            nitro: {
                above: "Encima de la sección Nitro",
                below: "Debajo de la sección Nitro"
            },
            activity: {
                above: "Encima de Ajustes de actividad",
                below: "Debajo de Ajustes de actividad"
            },
            bottom: "En la parte inferior"
        },
        switches: {
            useQuickCss: {
                label: "Habilitar CSS personalizado",
                description: "Carga CSS personalizado desde el editor QuickCSS. Esto te permite personalizar la apariencia de Discord con tus propios estilos."
            },
            enableReactDevtools: {
                label: "Habilitar React Developer Tools",
                description: "Habilita la extensión React Developer Tools para depurar los componentes React de Discord. Útil para el desarrollo de complementos."
            },
            mainWindowFrameless: {
                label: "Desactivar el marco de la ventana principal",
                description: "Elimina el marco nativo de la ventana para un aspecto más limpio. Aún puedes mover la ventana arrastrando el área de la barra de título."
            },
            frameless: {
                label: "Desactivar el marco de la ventana",
                description: "Elimina el marco nativo de la ventana para un aspecto más limpio. Aún puedes mover la ventana arrastrando el área de la barra de título."
            },
            winNativeTitleBar: {
                label: "Usar la barra de título nativa de Windows en lugar de la personalizada de Discord",
                description: "Sustituye la barra de título personalizada de Discord por la barra de título estándar de Windows. Esto puede mejorar la compatibilidad con algunas herramientas de gestión de ventanas."
            },
            transparent: {
                label: "Habilitar transparencia de ventana",
                description: "Hace que la ventana de Discord sea transparente. Se requiere un tema que soporte transparencia o esto no hará nada.",
                isWindows: "Esto impedirá que la ventana sea redimensionable y evitará que puedas ajustarla a los bordes de la pantalla.",
                notWindows: "Esto impedirá que la ventana sea redimensionable."
            },
            winCtrlQ: {
                label: "Registrar Ctrl+Q como atajo para cerrar Discord (Alternativa a Alt+F4)",
                description: "Añade Ctrl+Q como atajo de teclado para cerrar Discord. Esto proporciona una alternativa a Alt+F4 para cerrar rápidamente la aplicación."
            },
            disableMinSize: {
                label: "Desactivar tamaño mínimo de ventana",
                description: "Permite que la ventana de Discord se redimensione a un tamaño inferior al mínimo predeterminado. Útil para gestores de ventanas en mosaico o pantallas pequeñas."
            }
        },
        quickActions: {
            title: "Acciones rápidas",
            description: "Acciones comunes que podrías querer realizar. Estos accesos directos te permiten acceder rápidamente a funciones de uso frecuente sin navegar por los menús.",
            notificationLog: "Registro de notificaciones",
            editQuickCSS: "Editar QuickCSS",
            relaunchDiscord: "Reiniciar Discord",
            openSettingsFolder: "Abrir carpeta de ajustes",
            viewSourceCode: "Ver código fuente"
        },
        specialCards: {
            donations: {
                title: "Donaciones",
                subtitle: "¡Gracias por donar!",
                description: "Puedes gestionar tus beneficios en cualquier momento enviando un mensaje a @mutanplex.",
                button: "Donar",
                invite: "Únete a nuestro Discord",
                invalid: "Enlace de invitación inválido o caducado."
            },
            supportProject: {
                title: "Apoyar el proyecto",
                description: "¡Por favor, considera apoyar el desarrollo de Plexcord haciendo una donación!"
            },
            contributions: {
                title: "Contribuciones",
                subtitle: "¡Gracias por contribuir!",
                description: "¡Como has contribuido a Plexcord, ahora tienes una nueva insignia genial!",
                buttonTitle: "Ver en qué has contribuido"
            }
        },
        settingsSection: {
            title: "Ajustes",
            description: "Configura cómo se comporta Plexcord y cómo se integra con Discord. Estos ajustes afectan a la apariencia y el comportamiento del cliente de Discord.",
            hintParts: {
                prefix: "Puedes personalizar dónde aparece esta sección de ajustes en el menú de Discord configurando el {{pluginLink}}",
                linkText: "Plugin de Ajustes"
            }
        },
        notifications: {
            title: "Notificaciones",
            description: "Configura cómo maneja Plexcord las notificaciones. Puedes personalizar cuándo y cómo recibes alertas, o ver un historial de notificaciones pasadas.",
            settings: "Ajustes de notificación",
            viewLog: "Ver registro de notificaciones",
            permissions: {
                denied: {
                    title: "Permiso de notificaciones de escritorio denegado",
                    label: "Has denegado los permisos de notificación. ¡Las notificaciones de escritorio no funcionarán!"
                }
            },
            style: {
                label: "Estilo de notificaciones",
                description: "Algunos complementos pueden mostrarte notificaciones. Estas vienen en dos estilos:",
                plexcord: "Notificaciones de Plexcord",
                plexcordDesc: "Estas son notificaciones internas de la aplicación",
                desktop: "Notificaciones de escritorio",
                desktopDesc: "Notificaciones nativas del escritorio (como cuando recibes una mención)",
                onlyWhenNotFocused: "Usar notificaciones de escritorio solo cuando Discord no esté en primer plano",
                always: {
                    desktop: "Usar siempre notificaciones de escritorio",
                    plexcord: "Usar siempre notificaciones de Plexcord"
                }
            },
            positions: {
                label: "Posición de las notificaciones",
                right: {
                    bottom: "Inferior derecha",
                    top: "Superior derecha",
                },
                left: {
                    bottom: "Inferior izquierda",
                    top: "Superior izquierda",
                }
            },
            missed: {
                label: "Contador de notificaciones perdidas",
                description: "Al volver a Discord, aparecerá una notificación con cuántas te has perdido",
                whileYou: "Mientras no estabas",
                count: "Se han recibido {{count}} notificación{{s}}",
                s: "es"
            },
            timeout: {
                label: "Tiempo de espera de notificación",
                description: "La cantidad de tiempo (en segundos) que las notificaciones permanecerán en pantalla antes de desaparecer automáticamente"
            },
            logLimit: {
                label: "Límite del registro de notificaciones",
                description: "El número máximo de notificaciones que se guardarán en el registro antes de eliminar las antiguas. Ajusta a {{disable}} para desactivar el registro y a {{unlimited}} para no eliminarlas nunca automáticamente"
            },
            opacity: {
                label: "Opacidad de notificación",
                description: "La opacidad de las notificaciones internas de la aplicación"
            },
            maxNotifications: {
                label: "Máximo de notificaciones",
                description: "Número máximo de notificaciones mostradas a la vez"
            },
            behavior: {
                label: "Comportamiento de notificaciones",
            },
            disableInStreamerMode: {
                label: "Desactivar en modo streamer",
                description: "Desactiva las notificaciones mientras el modo streamer está activo"
            },
            renderImages: {
                label: "Renderizar imágenes",
                description: "Renderiza imágenes en las notificaciones"
            },
            streamingTreatment: {
                label: "Tratamiento durante streaming",
                description: "Cómo tratar las notificaciones mientras compartes pantalla",
                normal: "Normal - Mostrar la notificación normalmente",
                noContent: "Sin contenido - Ocultar el cuerpo de la notificación",
                ignore: "Ignorar - No mostrar la notificación en absoluto"
            },
        },
        macVibrancy: {
            title: "Estilo de vibración de ventana (Requiere reiniciar)",
            description: "Personaliza el efecto de vibración de la ventana en macOS. Esto controla el estilo de desenfoque y transparencia de la ventana de Discord. Los cambios requieren reiniciar para aplicarse.",
            placeholder: "Estilo de vibración de ventana",
            style: {
                no: "Sin vibración",
                underPage: "Bajo la página (Tintado de ventana)",
                content: "Contenido",
                window: "Ventana",
                selection: "Selección",
                titlebar: "Barra de título",
                header: "Cabecera",
                sidebar: "Barra lateral",
                tooltip: "Información sobre herramientas",
                menu: "Menú",
                popover: "Popover",
                fullscreenUI: "IU de pantalla completa (Transparente pero ligeramente desenfocado)",
                hud: "HUD (Máxima transparencia)"
            }
        }
    },

    plugins: {
        title: "Complementos",
        new: "NUEVO",
        unknown: "Desconocido",
        noDescription: "No hay descripción disponible.",
        restart: {
            apply: "¡Reinicia para aplicar los cambios!",
            required: "¡Requiere reinicio!",
            description: "Reinicia ahora para aplicar los nuevos complementos y sus ajustes",
            following: "Los siguientes complementos requieren un reinicio:",
            remainingCount: "y {{count}} más",
            fully: "Algunos complementos requieren un reinicio para desactivarse por completo",
            would: "¿Te gustaría reiniciar ahora?",
            resetDefault: "Restablecer ajustes predeterminados",
            failed: "Error al iniciar las dependencias:",
            button: {
                restart: "Reiniciar",
                later: "¡Luego!",
                now: "Reiniciar ahora",
                cancel: "Cancelar",
                disableWarning: "Desactivar advertencia para siempre",
                disableAll: "Desactivar todos",
                reset: "Restablecer",
                close: "Cerrar"
            }
        },
        contributor: {
            contributed: "contribuyó",
            modal: {
                contributionsInfo: "{{userName}} ha {{continuedLink}} en {{contributionCount}} complemento{{s}}.",
                noContributions: "{{userName}} no ha creado ningún complemento. ¡Probablemente {{contributedLink}} de otras formas!"
            }
        },
        infoModal: {
            description: "Pulsa el icono de engranaje o de información para obtener más detalles sobre un complemento",
            settingsInfo: "¡Los complementos con un engranaje tienen ajustes que puedes modificar!",
            disableAll: "Desactivar todos los complementos"
        },
        error: {
            invalidInput: "Entrada proporcionada no válida",
            stopping: "Error al detener el complemento {{plugin}}",
            starting: "Error al iniciar el complemento {{plugin}}",
            startDependency: "Error al iniciar las dependencias: {{failures}}",
            infoRender: "Ocurrió un error al renderizar el Componente de Información personalizado de este complemento"
        },
        placeholder: {
            number: "Introduce un número",
            select: "Selecciona una opción",
            text: "Introduce un valor"
        },
        excluded: {
            desktop: "Aplicación de escritorio de Discord o Plextron",
            discordDesktop: "Aplicación de escritorio de Discord",
            plextron: "Aplicación Plextron",
            web: "Aplicación Plextron y la versión web de Discord",
            dev: "Versión de desarrollo de Plexcord"
        },
        search: {
            looking: "¿Estás buscando",
            onlyAvailable: "Solo disponible en el",
            noCriteria: "Ningún complemento coincide con los criterios de búsqueda."
        },
        required: {
            title: "Complementos requeridos",
            this: "Este complemento es obligatorio para que Plexcord funcione.",
            by: "Este complemento es requerido por:"
        },
        dangerModal: {
            title: "ACCIÓN PELIGROSA",
            disablePlugins: "Desactivar complementos",
            disableText: "Desactivar todos",
            irreversible: "¡ESTA ACCIÓN ES IRREVERSIBLE!",
            enableBack: "¿Estás absolutamente seguro de que quieres continuar? Siempre puedes volver a activarlos más tarde.",
            undone: "Esta acción no se puede deshacer. ¿Estás seguro?",
            resetDescription: "Estás a punto de restablecer todos los ajustes de {{pluginName}} a sus valores predeterminados.",
            disable: "¡Estás a punto de desactivar {{enabledPlugins}} complementos!",
            confirmReset: "Confirmar restablecimiento",
            cancel: "Cancelar",
            resetSettings: "Restablecer ajustes",
            resetText: "Restablecer"
        },
        filters: {
            label: "Filtros",
            placeholder: "Buscar un complemento...",
            option: {
                all: "Mostrar todos",
                enabled: "Mostrar activados",
                disabled: "Mostrar desactivados",
                new: "Mostrar nuevos",
                userplugins: "Mostrar complementos de usuario",
                api: "Mostrar complementos de API"
            }
        },
        pluginModal: {
            noSettings: "No hay ajustes para este complemento.",
            authors: "Autores",
            settings: "Ajustes",
            successfulReset: "Los ajustes de {{plugin}} han sido restablecidos.",
            enabledStock: "Complementos de serie activados",
            totalStock: "Total de complementos de serie",
            enabledUser: "Complementos de usuario activados",
            totalUser: "Total de complementos de usuario",
            info: "Ver más información",
            source: "Ver código fuente"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API para añadir decoradores a la lista de miembros (tanto en servidores como en MD)",
                    messageAccessories: "API para añadir accesorios a los mensajes",
                    messageDecorations: "API para añadir decoraciones a los mensajes",
                    chatInputButtons: "API para añadir botones a la entrada de chat",
                    commands: "API requerida por cualquier cosa que use comandos",
                    contextMenu: "API para añadir/eliminar elementos a los menús contextuales.",
                    dynamicImageModal: "Permite omitir el ancho o el alto al abrir un modal de imagen",
                    menuItemDemangler: "Desenreda el módulo de elementos de menú de Discord",
                    messageEvents: "API requerida por cualquier cosa que use eventos de mensaje",
                    messagePopover: "API para añadir botones a los popovers de mensajes",
                    messageUpdater: "API para actualizar y re-renderizar mensajes",
                    nicknameIcons: "API para añadir iconos a los apodos en los perfiles",
                    notices: "Corrige que los avisos se descarten automáticamente",
                    serverList: "API requerida para complementos que modifican la lista de servidores",
                    userSettings: "Parchea UserSettings de Discord para exponer su grupo y nombre.",
                    audioPlayer: "API para reproducir archivos de audio internos de Discord o enlaces de audio externos.",
                    userArea: "API para añadir botones al panel del área de usuario."
                },
                chatButtons: {
                    context: {
                        buttons: "Botones"
                    }
                }
            },
            badges: {
                description: "API para añadir insignias a los usuarios",
                contributor: {
                    plexcord: "Contribuidor de Plexcord",
                    vencord: "Contribuidor de Vencord",
                    userPlugin: "Contribuidor de complementos de usuario"
                },
                context: {
                    title: "Opciones de insignias",
                    copy: {
                        name: "Copiar nombre de la insignia",
                        link: "Copiar enlace de la imagen de la insignia"
                    },
                    refetch: {
                        button: "Actualizar insignias",
                        success: "¡Insignias actualizadas correctamente!"
                    }
                },
                modal: {
                    title: "Donante de Plexcord",
                    special: "Esta insignia es un beneficio especial para los donantes de Plexcord",
                    description: "Por favor, considera apoyar el desarrollo de Plexcord convirtiéndote en donante. ¡Significaría mucho!"
                }
            },
        },
        uiElements: {
            manage: "Gestionar elementos de la IU",
            allows: "Te permite ocultar los botones que no te gustan",
            section: {
                chatbar: {
                    title: "Botones de la barra de chat",
                    description: "Estos son los botones en el lado derecho de la barra de entrada de chat"
                },
                messagePopover: {
                    title: "Botones del popover de mensajes",
                    description: "Estos son los botones flotantes a la derecha cuando pasas el ratón sobre un mensaje"
                }
            },
            button: "Los botones de los complementos activados aparecerán aquí."
        }
    },

    patchHelper: {
        title: "Asistente de parches",
        description: "Una herramienta de desarrollo para ayudarte a crear parches para los complementos de Plexcord.",
        fullPatch: {
            label: "Parche completo",
            description: "Pega aquí tu parche JSON completo para rellenar los campos"
        },
        find: "Buscar",
        match: "Coincidir",
        replacement: "Reemplazo",
        preview: "Previsualización",
        generatedCode: "Código generado",
        group: "Grupo",
        diff: "Diff",
        module: "Módulo",
        compile: "Compilar",
        compiled: "Compilación exitosa",
        copy: {
            clipboard: "Copiar al portapapeles",
            codeblock: "Copiar como bloque de código"
        },
        error: {
            noMatch: "No se ha encontrado coincidencia. ¿Quizás este módulo es de carga perezosa?",
            multipleMatch: "Se han encontrado múltiples coincidencias. Por favor, usa un patrón de búsqueda más específico.",
            noFind: "Falta el campo 'Buscar'.",
            noReplacement: "Falta el campo 'Reemplazo'.",
            invalidReplacement: "El campo 'Reemplazo' no es válido",
            replacementMatch: "Falta el campo 'replacement.match'",
            replacementReplace: "Falta el campo 'replacement.replace'",
            replacementMustFunction: "El 'Reemplazo' debe ser una función"
        },
        cheatSheet: {
            title: "Chuleta",
            identifiers: "Secuencia de escape regex especial que coincide con identificadores (nombres de variables, de clases, etc.)",
            dollar: "Insertar un $",
            entireMatch: "Insertar la coincidencia completa",
            beforeMatch: "Insertar la subcadena antes de la coincidencia",
            afterMatch: "Insertar la subcadena después de la coincidencia",
            nthGroup: "Insertar el n-ésimo grupo de captura ($1, $2...)",
            pluginInstance: "Insertar la instancia del complemento"
        },
        replacementEval: {
            label: "Tratar reemplazo como función",
            description: "El 'Reemplazo' se evaluará como una función si esto está habilitado"
        }
    },

    sync: {
        title: "Copia de seguridad y restauración",
        warning: "Advertencia",
        warningText: "Importar un archivo de ajustes sobrescribirá tu configuración actual. Asegúrate de exportar una copia de seguridad primero si quieres conservar tu configuración.",
        description: "Puedes importar y exportar tus ajustes de Plexcord como un archivo JSON. Esto te permite transferir fácilmente tu configuración a otro dispositivo o recuperarla tras reinstalar Plexcord o Discord.",
        successful: "Ajustes importados con éxito. ¡Reinicia para aplicar los cambios!",
        error: {
            failure: "Error al importar los ajustes: {{error}}",
            failedExport: "Error al exportar los ajustes, consulta la consola",
            invalid: "Ajustes no válidos. ¿Es este un archivo de ajustes de Plexcord?",
            tooLarge: "DataStore demasiado grande - excluido de la copia de seguridad. Usa 'Exportar DataStores' si es necesario.",
            clearSomeDate: "DataStore demasiado grande. Por favor, borra algunos datos de complementos e inténtalo de nuevo."
        },
        settings: {
            text: "¿Qué se incluye en una copia de seguridad?",
            quickcss: "QuickCSS personalizado",
            theme: "Enlaces de temas",
            plugins: "Ajustes de complementos",
            datastores: "DataStores de complementos (ej. zonas horarias o IRememberYou)"
        },
        import: {
            title: "Importar ajustes",
            description: "Selecciona un archivo de ajustes exportado previamente para restaurar tu configuración. Esto reemplazará todos tus ajustes actuales por los de la copia de seguridad.",
            all: "Importar todos los ajustes",
            plugins: "Importar complementos",
            css: "Importar QuickCSS",
            datastore: "Importar DataStores"
        },
        export: {
            title: "Exportar ajustes",
            description: "Puedes exportar tus ajustes actuales de Plexcord a un archivo para realizar una copia de seguridad o transferirlos a otro dispositivo.",
            all: "Exportar todos los ajustes",
            plugins: "Exportar complementos",
            css: "Exportar QuickCSS",
            datastore: "Exportar DataStores"
        }
    },

    cloud: {
        text: "Nube",
        title: "Sincronización de ajustes",
        override: "Sincronización en la nube",
        description: "Sincroniza tus ajustes de Plexcord en la nube. Esto facilita mantener tu configuración coherente en múltiples dispositivos sin importaciones/exportaciones manuales.",
        switchDescription: "Cuando está activado, tus ajustes pueden sincronizarse hacia y desde la nube. Usa las acciones de abajo para sincronizar manualmente.",
        settings: "Ajustes de la nube",
        successful: "¡Ajustes sincronizados con la nube!",
        updated: "¡Tus ajustes han sido actualizados! ¡Haz clic aquí para reiniciar y aplicar los cambios por completo!",
        deleted: "¡Ajustes eliminados de la nube!",
        integration: {
            title: "Integración en la nube",
            description: "La integración en la nube de Plexcord te permite sincronizar tus ajustes en múltiples dispositivos e instalaciones de Discord. Tus datos se almacenan de forma segura y pueden restaurarse en cualquier momento.",
        },
        reauth: "¡Hemos notado que tienes integraciones en la nube activadas en otro cliente! Debido a limitaciones, tendrás que volver a autorizar para seguir usándolas. ¡Haz clic aquí para ir a la página de ajustes y hacerlo!",
        error: {
            setup: "Error de configuración (no se pudo recuperar la configuración de OAuth).",
            secret: "Error de configuración (no se devolvió ningún secreto).",
            string: "Error de configuración ({{error}}).",
            connect: "La sincronización en la nube se desactivó porque esta cuenta no está conectada a la aplicación Plexcord Cloud. Puedes activarla de nuevo conectando esta cuenta en los Ajustes de la nube (nota: almacenará tus preferencias por separado).",
            noSettings: "No hay ajustes en la nube.",
            uptodate: "Tus ajustes están al día.",
            localNewer: "Tus ajustes locales son más recientes que los de la nube.",
            delete: "No se pudieron eliminar los ajustes ({{error}}).",
            api: {
                returned: {
                    delete: "No se pudieron eliminar los ajustes (la API devolvió {{status}}).",
                    to: "No se pudieron sincronizar los ajustes con la nube (la API devolvió {{status}}).",
                    from: "No se pudieron sincronizar los ajustes desde la nube (la API devolvió {{status}})."
                }
            },
            synchronize: {
                to: "No se pudieron sincronizar los ajustes con la nube ({{error}}).",
                from: "No se pudieron sincronizar los ajustes desde la nube ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Activa la integración en la nube arriba para usar las funciones de sincronización."
        },
        danger: {
            title: "Zona de peligro",
            description: "Elimina permanentemente todos tus datos de la nube. Esta acción no se puede deshacer y eliminará todos los ajustes sincronizados y cualquier otro dato almacenado en el servidor de la nube.",
            delete: {
                account: {
                    title: "Eliminar cuenta de la nube",
                    description: "¿Estás seguro de que quieres eliminar permanentemente tu cuenta de la nube y todos los datos asociados? Esta acción no se puede deshacer.",
                    confirm: "Eliminar cuenta",
                    cancel: "Cancelar"
                }
            }
        },
        notification: {
            title: "Integración en la nube",
            enabled: "Integración en la nube activada",
            host: "{{host}} ha sido añadido a la lista blanca. Por favor, reinicia la aplicación para que los cambios surtan efecto.",
            erase: {
                successful: "Datos de la nube borrados con éxito",
                failed: "Error al borrar todos los datos (la API devolvió {{status}}), por favor contacta con soporte."
            }
        },
        button: {
            to: "Sincronizar a la nube",
            from: "Sincronizar desde la nube",
            fromDescription: "Esto sobrescribirá tus ajustes locales con los de la nube. ¡Úsalo con sabiduría!",
            delete: "Eliminar datos de la nube",
            enable: "Activar integraciones en la nube",
            reauthorize: "Volver a autorizar",
            confirm: "Reiniciar ahora",
            later: "¡Luego!"
        },
        privacy: "respeta tu privacidad",
        source: "código fuente",
        overview: "Plexcord incluye una integración en la nube que añade ventajas como la sincronización de ajustes entre dispositivos. Esta {{privacy}}, y el {{source}} tiene licencia AGPL 3.0 para que puedas alojarlo tú mismo.",
        authorization: "Conéctate al servidor de la nube para la sincronización de ajustes. Esto solicitará autorización si aún no has configurado la integración.",
        backend: {
            title: "Servidor de la nube",
            description: "Elige cómo se almacenan tus ajustes en la nube. Por defecto se usa Plexcord Cloud, pero también puedes conectar tu propio servicio autohospedado.",
            invalid: "URL no válida"
        },
        sync: {
            title: "Reglas de sincronización para este dispositivo",
            description: "Este ajuste controla cómo se mueven los datos entre este dispositivo y la nube. Puedes dejar que los cambios fluyan en ambos sentidos o elegir una fuente principal de verdad.",
            direction: {
                both: "Sincronización bidireccional (los cambios van en ambas direcciones)",
                push: "Este dispositivo es la fuente (solo subida)",
                pull: "La nube es la fuente (solo descarga)",
                manual: "No sincronizar automáticamente (solo sincronización manual mediante botones)"
            }
        }
    },

    changelog: {
        text: "Registro de cambios",
        title: "Registro de cambios",
        description: "Aquí puedes encontrar los últimos cambios y actualizaciones de Plexcord.",
        by: "por",
        check: "Comprobación del repositorio",
        uptodate: "actualizado",
        update: "Actualizar",
        noMessage: "Sin mensaje",
        unknown: "Desconocido",
        updatedPlugins: "Complementos actualizados",
        newSettings: "Nuevos ajustes",
        newSettingTooltip: "Nuevo ajuste en {{plugin}}",
        loading: "Cargando...",
        repoUptodate: "Repositorio actualizado",
        fetch: "Obtener del repositorio",
        clear: "Borrar todos los registros",
        internet: "Asegúrate de tener conexión a Internet e inténtalo de nuevo.",
        recent: "Cambios recientes",
        codeChanges: "Cambios de código: {{count}} nuevo{{s}} commit{{s}}",
        updateLogs: "Registros de actualización ({{count}})",
        noCommit: "No hay commits por delante de tu versión actual. Haz clic en 'Obtener del repositorio' para buscar nuevos cambios.",
        previous: "Sesiones de actualización anteriores con su historial de commits y cambios en complementos.",
        modal: {
            description: "Ver los cambios más recientes de Plexcord. Esto obtiene los commits directamente del repositorio para mostrarte las novedades.",
            repository: "Repositorio",
            failed: "Error al recuperar - consulta la consola",
            current: "Actual:",
            hide: "Ocultar registros",
            show: "Mostrar registros",
            fetch: {
                title: "Obtener cambios",
                description: "Consulta el repositorio en busca de nuevos commits, actualizaciones de complementos y cambios de código. Esto comparará tu versión actual con la última disponible.",
                newCommit: "Estos son los nuevos commits y actualizaciones de complementos desde tu última versión. Puedes ver qué funciones se añadieron, qué fallos se corrigieron y qué complementos se actualizaron.",
                confirm: "Obtener",
            }
        },
        commit: {
            available: "commits disponibles",
            no: "Sin nuevos commits",
            new: "nuevos complementos",
            updated: "complementos actualizados",
            settings: "nuevos ajustes"
        },
        toast: {
            already: "Ya estás al día con el repositorio",
            found: "Se han encontrado {{count}} nuevo{{s}} commit{{s}} en el repositorio",
            local: "El repositorio está al día con tu copia local",
            failed: "Error al obtener del repositorio :(",
            cleared: "Se han borrado todos los registros",
            logCleared: "Se ha borrado el registro",
            yourLatest: "Commits registrados de tu última actualización"
        },
        alert: {
            clear: {
                title: "Borrar todos los registros",
                body: "¿Estás seguro de que quieres borrar todos los registros? Esto no se puede deshacer.",
                confirm: "Borrar todo",
                confirmColor: "danger",
                cancel: "Cancelar"
            },
            log: {
                title: "Borrar registro",
                body: "¿Estás seguro de que quieres borrar este registro? Esto no se puede deshacer.",
                confirm: "Borrar registro",
                confirmColor: "danger",
                cancel: "Cancelar"
            }
        },
        newPlugins: "{{count}} nuevo{{s}} complemento{{s}}",
        following: "Los siguientes complementos se han añadido en actualizaciones recientes:",
        more: "+{{count}} complementos más"
    },

    csp: {
        restart: "Se requiere reiniciar para aplicar este cambio",
        blocked: {
            resources: "Recursos bloqueados",
            disallowed: "Se han bloqueado algunas imágenes, estilos o fuentes porque provienen de dominios no permitidos.",
            recommended: "Se recomienda encarecidamente moverlos a GitHub o Imgur. Pero también puedes permitir dominios si confías plenamente en ellos.",
            afterAllow: "Después de permitir un dominio, tienes que cerrar completamente (desde la bandeja / administrador de tareas) y reiniciar {{platform}} para aplicar el cambio.",
            allow: "Permitir",
            url: "URLs bloqueadas"
        },
        imgur: {
            direct: "Los enlaces de Imgur deben ser enlaces directos con el formato {{etc}}",
            copy: "Para obtener un enlace directo, haz clic derecho en la imagen y selecciona 'Copiar dirección de imagen'."
        },
        wants: {
            caller: "{{callerName}} quiere permitir conexiones a {{domain}}",
            detail: "¡A menos que reconozcas y confíes plenamente en {{domain}}, deberías cancelar esta solicitud!",
            restart: "Tendrás que cerrar y reiniciar {{appName}} por completo para que los cambios surtan efecto.",
            type: {
                images: "Imágenes",
                styles: "CSS y temas",
                fonts: "Fuentes"
            },
            content: "Se permitirá cargar los siguientes tipos de contenido desde {{domain}}:",
            understand: "Confío plenamente en {{domain}} y entiendo los riesgos de permitir conexiones hacia él.",
            button: {
                cancel: "Cancelar",
                allow: "Permitir"
            },
            title: "Permisos de host"
        }
    },

    themes: {
        title: "Temas",
        management: "Gestión de temas",
        description: "Personaliza la apariencia de Discord con temas. Añade archivos .css locales o carga temas directamente desde URLs. Los temas con un icono de engranaje tienen ajustes personalizables.",
        local: "Temas locales",
        new: "NUEVO",
        pinned: "Fijado",
        stylus: "extensión Stylus",
        bd: "Temas de BetterDiscord",
        github: "GitHub",
        download: "¿Buscas temas? Echa un vistazo a {{bd}} o busca en {{github}}. Al descargar desde BetterDiscord, haz clic en 'Download' y coloca el archivo .theme.css en tu carpeta de temas.",
        add: "Añadir",
        reset: "Restablecer ajustes predeterminados",
        notCSS: "No es un archivo CSS. ¡Recuerda usar el enlace 'raw'!",
        okay: "¡Entendido!",
        checking: "Comprobando...",
        valid: "¡Válido!",
        upload: "Subir tema",
        openFolder: "Abrir carpeta de temas",
        loadMissing: "Cargar temas faltantes",
        editQuickCSS: "Editar QuickCSS",
        editClient: "Editar ClientTheme",
        website: "Abrir sitio web",
        discord: "Servidor de Discord",
        downloadTheme: "Descargar",
        refresh: "Actualizar",
        delete: "Eliminar",
        unknown: {
            title: "Desconocido",
            author: "Autor desconocido",
            theme: "Un tema de Discord"
        },
        required: "Los siguientes complementos son requeridos, pero no están activados: ",
        homepage: "Página de inicio",
        support: "Soporte",
        online: {
            title: "Temas en línea",
            description: "Carga temas directamente desde URLs en lugar de archivos locales. Los temas en línea se auto-actualizan cuando el origen cambia, así siempre tendrás la última versión sin descargas manuales.",
            enable: "Activar temas en línea",
            enableDescription: "Activa o desactiva la carga de temas en línea. Cuando está desactivado, todos los temas en línea se apagarán y no podrás añadir nuevos."
        },
        quickActions: {
            title: "Acciones rápidas",
            description: "Accesos directos para gestionar tus temas. Abre la carpeta para añadir nuevos, usa QuickCSS para retoques rápidos o recarga los temas tras hacer cambios."
        },
        error: {
            userscript: "¡Los temas no son compatibles con el Userscript!",
            stylus: "¡En su lugar, puedes instalar temas con {{stylus}}!",
            expired: "Enlace no válido o caducado",
            text: "Error:"
        },
        copy: {
            url: "Copiar URL",
            copied: "¡URL del tema copiada!",
            settings: "Copiar ajustes del tema",
            copiedSettings: "Ajustes del tema copiados al portapapeles."
        },
        paste: {
            settings: "Pegar ajustes del tema",
            empty: "Tu portapapeles está vacío.",
            invalid: "Tu portapapeles no contiene datos de ajustes válidos.",
            pasted: "Ajustes del tema pegados desde el portapapeles."
        },
        settings: {
            for: "Ajustes para {{themeName}}",
        },
        installed: {
            title: "Temas instalados",
            description: "Gestiona tus temas aquí. Los temas locales se cargan desde tu carpeta y los temas en línea desde URLs.",
            count: "{{count}} tema{{s}} instalado{{s}} ({{localCount}} local{{es}}, {{onlineCount}} en línea) · {{enabledCount}} activado{{s}}",
            search: "Buscar un tema...",
            loading: "Cargando temas...",
            none: "No hay temas instalados todavía. Añade archivos a tu carpeta o añade un tema en línea arriba para empezar.",
            noCriteria: "Ningún tema coincide con tu búsqueda o criterios de filtrado."
        },
        filter: {
            all: "Mostrar todos",
            online: "Temas en línea",
            local: "Temas locales",
            enabled: "Activados",
            disabled: "Desactivados"
        },
        notification: {
            refresh: {
                title: "Tema actualizado",
                error: "Error al actualizar el tema"
            },
            failed: {
                download: "Error al descargar el tema"
            }
        }
    },

    updater: {
        title: "Actualizador",
        settings: "Ajustes del actualizador",
        updates: "Actualizaciones",
        updated: "¡ha sido actualizado!",
        restart: "Haz clic aquí para reiniciar",
        repaired: "¡Plexcord ha sido reparado!",
        ok: "Aceptar",
        preferences: {
            title: "Preferencias de actualización",
            description: "Controla cómo se mantiene Plexcord al día. Puedes elegir actualizar automáticamente en segundo plano o recibir avisos cuando haya nuevas versiones.",
        },
        github: {
            local: "Tu copia local tiene commits más recientes que el repositorio remoto. Esto suele ocurrir si has hecho cambios locales. Por favor, guárdalos (stash) o restablécelos antes de actualizar."
        },
        error: {
            check: "Error al buscar actualizaciones. Consulta la consola para más información",
            occurred: "Ocurrió un error desconocido",
            retrieve: "Error al recuperar - consulta la consola",
            title: "¡Ups!",
            tryAgain: "Ocurrió un error desconocido. Por favor, inténtalo de nuevo o consulta la consola.",
            command: "Mando {{path}} no encontrado. Por favor, instálalo e inténtalo de nuevo.",
            code: "Código {{code}}. Consulta la consola para más información.",
            running: "Ocurrió un error al ejecutar {{cmd}}: {{error}}",
            failed: "Eso también falló :( ¡Intenta actualizar o reinstalar con el instalador!"
        },
        available: "Hay 1 actualización disponible",
        updateAvailable: "¡Hay una actualización de Plexcord disponible!",
        click: "Haz clic aquí para ver la actualización",
        available_plural: "Hay {{count}} actualizaciones disponibles",
        current: "¡Al día!",
        successful: {
            title: "¡Actualización exitosa!",
            body: "Actualizado correctamente. ¿Reiniciar ahora para aplicar los cambios?",
            button: {
                confirm: "Reiniciar",
                cancel: "¡Ahora no!",
                update: "Actualizar ahora",
                check: "Buscar actualizaciones"
            },
            noFound: "No se han encontrado actualizaciones"
        },
        automatically: {
            label: "Actualizar automáticamente",
            description: "Actualiza Plexcord automáticamente sin mensaje de confirmación"
        },
        notify: {
            label: "Recibir aviso cuando termine una actualización automática",
            description: "Muestra una notificación cuando Plexcord se actualiza automáticamente"
        },
        repo: "Repo",
        repoDescription: "Este es el repositorio de GitHub desde donde Plexcord obtiene las actualizaciones.",
        loading: "Cargando...",
    },

    components: {
        error: {
            title: "¡Oh, no!",
            render: "Ocurrió un error al renderizar este componente. Puedes encontrar más información abajo y en la consola."
        },
        componentFailed: {
            message: "¡Vaya! Error al renderizar esta página. Sin embargo, hay una actualización disponible que podría solucionarlo. ¿Quieres actualizar y reiniciar ahora?"
        },
        quickCSS: {
            title: "Editor QuickCSS abierto",
            message: "El editor QuickCSS sigue abierto en segundo plano.",
            detail: "¿Quieres cerrar Discord de todas formas? Esto también cerrará el editor QuickCSS.",
            cancel: "Cancelar",
            close: "Cerrar de todas formas"
        }
    },

    commands: {
        error: {
            execute: "Ocurrió un error al ejecutar el comando '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Descartar notificación",
        noYet: "Aún no hay notificaciones",
        settings: "Ajustes de notificación",
        log: {
            title: "Registro de notificaciones",
            clear: "Borrar registro de notificaciones",
            sure: "¿Estás seguro?",
            permamently: "Esto eliminará permanentemente {{count}} notificación{{s}}. Esta acción no se puede deshacer.",
            button: {
                confirm: "¡Hazlo!",
                cancel: "Olvídalo"
            }
        }
    },

    memberlist: {
        error: {
            render: "Error al renderizar el decorador de lista de miembros {{key}}"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Error al renderizar el accesorio de mensaje {{key}}"
            }
        },
        decoration: {
            error: {
                render: "Error al renderizar la decoración de mensaje {{key}}"
            }
        }
    },

    utils: {
        toast: {
            copied: "¡Copiado al portapapeles!"
        }
    },

    common: {
        unit: {
            year: "año",
            years: "años",
            month: "mes",
            months: "meses",
            week: "semana",
            weeks: "semanas",
            day: "día",
            days: "días",
            hour: "hora",
            hours: "horas",
            minute: "minuto",
            minutes: "minutos",
            second: "segundo",
            seconds: "segundos",
            ago: "hace",
            s: "s"
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Desactiva el rastreo de Discord (analytics/'science'), las métricas y el envío de informes de errores a Sentry",
            option: {
                disableAnalytics: {
                    label: "Desactivar analíticas",
                    description: "Desactiva el rastreo de Discord (analytics/'science'), las métricas y el envío de informes de errores a Sentry"
                }
            }
        },
        settings: {
            name: "Ajustes",
            description: "Añade la interfaz de ajustes e información de depuración",
            option: {
                language: {
                    label: "Idioma",
                    description: "Selecciona tu idioma preferido para Plexcord."
                },
                settingsLocation: {
                    label: "Ubicación de ajustes",
                    description: "Determina dónde se ubicará la sección de ajustes de Plexcord."
                }
            }
        },
        supportHelper: {
            name: "Asistente de soporte",
            description: "Nos ayuda a ofrecerte soporte",
            commands: {
                description: {
                    debug: "Enviar información de depuración de Plexcord",
                    plugins: "Enviar lista de complementos de Plexcord"
                }
            },
            modals: {
                outdated: {
                    title: "¡Espera!",
                    body: "¡Estás usando una versión obsoleta de Plexcord! Es muy probable que tu problema ya esté solucionado.",
                    footer: "¡Por favor, actualiza antes de pedir soporte!",
                    button: {
                        cancel: "Ver actualizaciones",
                        confirm: "Actualizar y reiniciar ahora",
                        secondaryConfirm: "Sé lo que hago o no puedo actualizar"
                    }
                },
                updater: {
                    title: "¡Espera!",
                    body: "¡Estás usando una versión de Plexcord actualizada externamente, para la cual no ofrecemos soporte!",
                    footer: "Por favor, cambia a una {{officially}} o contacta con el mantenedor de tu paquete para recibir ayuda.",
                    officially: "versión de Plexcord soportada oficialmente",
                    button: {
                        cancel: "Cancelar",
                        confirm: "Ver página de descarga",
                        now: "Actualizar ahora"
                    },
                    toast: {
                        success: "¡Éxito! Reiniciando...",
                        already: "¡Ya está actualizado!",
                        failed: "Error al actualizar :("
                    }
                },
                custom: {
                    title: "¡Espera!",
                    header: "¡Estás usando una compilación personalizada de Plexcord, para la cual no ofrecemos soporte!",
                    body: "Solo ofrecemos soporte para las {{officialBuild}}. Por favor, {{switch}} o resuelve el problema por tu cuenta.",
                    footer: "Se te prohibirá recibir soporte si ignoras esta regla.",
                    official: "compilaciones oficiales",
                    switch: "cambia a una compilación oficial",
                    button: {
                        confirm: "Entendido",
                        secondaryConfirm: "No volver a mostrar"
                    }
                }
            },
            button: {
                debug: "Ejecutar /plexcord-debug",
                plugins: "Ejecutar /plexcord-plugins",
                snippet: "Ejecutar Snippet"
            },
            toast: {
                success: "¡Éxito!",
                failed: "Error al ejecutar el snippet :(",
                failedOpenInvite: "Error al abrir la invitación, consulta la consola :(",
                upload: "¡Lista de complementos subida con éxito!",
                failedUpload: "Error al subir el archivo de la lista de complementos. Inténtalo de nuevo.",
                unableGenerate: "Error al generar la lista de complementos."
            },
            dm: {
                warning: "¡Por favor, no envíes mensajes privados a los desarrolladores de complementos de Plexcord para pedir soporte!{{br}}En su lugar, puedes unirte al servidor de {{support}} y usar el canal de soporte de Plexcord: {{channel}}"
            },
            alert: {
                title: "Aviso: Recuento de complementos elevado",
                paragraph1: "Tienes más de 100 complementos activados.",
                paragraph2: "Debido a la gran cantidad de complementos, es posible que no recibas soporte.",
                paragraph3: "Es probable que tu problema sea causado por conflictos entre complementos.",
                paragraph4: "Por favor, considera desactivar algunos para solucionar el problema.",
                paragraph5: "Tu lista de complementos se enviará como un archivo de texto.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Haz clic derecho en tu panel de cuenta (abajo a la izquierda) para ver tu perfil en el servidor actual",
            option: {
                prioritizeServerProfile: {
                    label: "Priorizar perfil de servidor",
                    description: "Prioriza el perfil de servidor al hacer clic izquierdo en tu panel de cuenta"
                }
            },
            context: {
                account: "Ver perfil de cuenta",
                server: "Ver perfil de servidor",
                prioritize: "Priorizar perfil de servidor"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Hace que el menú de Supresión de ruido cambie entre 'Ninguno' y 'Krisp' en lugar de 'Krisp' y 'Estándar'"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Anima cualquier cosa que sea animable",
            option: {
                icons: {
                    label: "Iconos",
                    description: "Animar siempre iconos de servidor, avatares, decoraciones y más"
                },
                statusEmojis: {
                    label: "Emojis de estado",
                    description: "Animar siempre los emojis de estado"
                },
                serverBanners: {
                    label: "Banners de servidor",
                    description: "Animar siempre los banners de servidor"
                },
                nameplates: {
                    label: "Placas de nombre",
                    description: "Animar siempre las placas de nombre"
                },
                roleGradients: {
                    label: "Degradados de rol",
                    description: "Animar siempre los degradados de rol"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "Expande siempre las ventanas emergentes de perfil al modal completo"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Expande siempre las listas de roles en las ventanas emergentes de perfil",
            option: {
                hideArrow: {
                    label: "Ocultar flecha",
                    description: "Oculta la flecha"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Reproduce el sonido 'animalese' de Animal Crossing para cada mensaje enviado (hablan mucho)",
            option: {
                volume: {
                    label: "Volumen",
                    description: "Volumen del sonido animalese"
                },
                speed: {
                    label: "Velocidad",
                    description: "Velocidad del sonido animalese"
                },
                pitch: {
                    label: "Tono",
                    description: "Multiplicador de tono"
                },
                messageLengthLimit: {
                    label: "Límite de longitud de mensaje",
                    description: "Longitud máxima de mensaje a procesar"
                },
                processOwnMessages: {
                    label: "Procesar mensajes propios",
                    description: "Actívalo para que tus propios mensajes también suenen"
                },
                soundQuality: {
                    label: "Calidad de sonido",
                    description: "Calidad del sonido a usar",
                    high: "Alta",
                    med: "Media",
                    low: "Baja",
                    lowest: "Mínima"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "Elimina los molestos avisos de dominios no confiables y archivos sospechosos",
            option: {
                domain: {
                    label: "Dominio",
                    description: "Elimina el aviso de dominio no confiable al abrir enlaces"
                },
                file: {
                    label: "Archivo",
                    description: "Elimina el aviso de 'Descarga potencialmente peligrosa' al abrir enlaces"
                },
                noDeleteSafety: {
                    label: "Sin seguridad de borrado",
                    description: "Elimina el requisito de escribir el nombre del servidor al borrar uno"
                },
                confirmModal: {
                    label: "Modal de confirmación",
                    description: "¿Debería mostrarse un modal de '¿estás seguro de que quieres borrar'?"
                }
            },
            alert: {
                title: "¿Borrar servidor?",
                body: "Es permanente, por si no era obvio.",
                confirm: "Borrar",
                cancel: "Cancelar"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Anonimiza los nombres de los archivos subidos",
            option: {
                anonymiseByDefault: {
                    label: "Anonimizar por defecto",
                    description: "Anonimiza los nombres de archivo por defecto. Puedes desactivarlo en la ventana de subida si es necesario."
                },
                spoilerMessages: {
                    label: "Mensajes de spoiler",
                    description: "Anonimiza los nombres de archivos marcados como spoiler."
                },
                method: {
                    label: "Método",
                    description: "Método de anonimización",
                    random: "Caracteres aleatorios",
                    consistent: "Consistente",
                    timestamp: "Marca de tiempo (Timestamp)"
                },
                randomisedLength: {
                    label: "Longitud aleatoria",
                    description: "Longitud de caracteres aleatorios"
                },
                consistent: {
                    label: "Consistente",
                    description: "Secreto de anonimización consistente"
                }
            },
            using: {
                anonymous: "Usando nombre de archivo anónimo",
                spoiler: "Usando nombre de archivo normal"
            },
            spoiler: {
                description: "Alternar spoiler para tus archivos",
                toggle: "Alternar spoiler (activado por defecto)",
                enabled: "¡Spoiler activado!",
                disabled: "¡Spoiler desactivado!"
            }
        },
        appleMusic: {
            name: "AppleMusicRichPresence",
            description: "¡Rich Presence de Discord para tu Apple Music!",
            about: "Para las cadenas de formato personalizables, puedes usar etiquetas especiales: {{name}} se reemplaza por el nombre de la pista; {{artist}} por el artista; y {{album}} por el nombre del álbum.",
            button: {
                listen: "Escuchar en Apple Music",
                songLink: "Ver en SongLink"
            },
            option: {
                activityType: {
                    label: "Tipo de actividad",
                    description: "Qué tipo de actividad mostrar",
                    listening: "Escuchando",
                    playing: "Jugando"
                },
                statusDisplayType: {
                    label: "Tipo de visualización de estado",
                    description: "Muestra el nombre de la pista / artista en la lista de miembros",
                    off: "No mostrar (muestra mensaje genérico)",
                    artist: "Mostrar nombre del artista",
                    track: "Mostrar nombre de la pista"
                },
                refreshInterval: {
                    label: "Intervalo de actualización",
                    description: "Intervalo entre actualizaciones de actividad (segundos)"
                },
                enableTimestamps: {
                    label: "Activar marcas de tiempo",
                    description: "Si se deben activar o no las marcas de tiempo"
                },
                enableButtons: {
                    label: "Activar botones",
                    description: "Si se deben activar o no los botones"
                },
                nameString: {
                    label: "Cadena de nombre",
                    description: "Formato del nombre de la actividad"
                },
                detailsString: {
                    label: "Cadena de detalles",
                    description: "Formato de los detalles de la actividad"
                },
                stateString: {
                    label: "Cadena de estado",
                    description: "Formato del estado de la actividad"
                },
                largeImageType: {
                    label: "Tipo de imagen grande",
                    description: "Tipo de imagen grande en los activos de actividad",
                    album: "Portada del álbum",
                    artist: "Imagen del artista",
                    disabled: "Desactivado"
                },
                largeTextString: {
                    label: "Cadena de texto grande",
                    description: "Formato del texto para la imagen grande"
                },
                smallImageType: {
                    label: "Tipo de imagen pequeña",
                    description: "Tipo de imagen pequeña en los activos de actividad",
                    album: "Logo de Apple Music",
                    artist: "Imagen del artista",
                    disabled: "Desactivado"
                },
                smallTextString: {
                    label: "Cadena de texto pequeña",
                    description: "Formato del texto para la imagen pequeña"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Complemento cliente para arRPC para habilitar RPC en Discord Web (experimental)",
            use: {
                title: "Cómo usar arRPC",
                enable: "{{link}} para poner en marcha el servidor y luego activa el complemento.",
                link: "Sigue las instrucciones en el repositorio de GitHub"
            },
            toast: {
                connected: "Conectado a arRPC",
                failed: "Error al conectar a arRPC, ¿está ejecutándose?",
                retry: "Reintentar"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "Con @someone puedes mencionar a alguien de forma aleatoria"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Actualiza automáticamente tu estado (en línea, ausente, no molestar) al iniciar juegos",
            option: {
                statusToSet: {
                    label: "Estado a establecer",
                    description: "El estado que se pondrá al iniciar un juego",
                    online: "En línea",
                    dnd: "No molestar",
                    idle: "Ausente",
                    invisible: "Invisible"
                },
                excludeInvisible: {
                    label: "Excluir invisible",
                    description: "Evita cambios automáticos de estado si ya estás como invisible"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Comprime automáticamente en .zip carpetas y tipos de archivo específicos antes de subirlos a Discord",
            option: {
                extensions: {
                    label: "Extensiones",
                    description: "Lista de extensiones separadas por comas para comprimir (ej: .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "Muestra banners en la lista de miembros",
            option: {
                animate: {
                    label: "Animar",
                    description: "Animar el banner"
                },
                preferNameplate: {
                    label: "Preferir placa de nombre",
                    description: "Preferir la placa de nombre sobre el banner"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Muestra iconos de actividad en la lista de miembros y permite ver todas las actividades",
            option: {
                memberList: {
                    label: "Lista de miembros",
                    description: "Mostrar iconos de actividad en la lista de miembros"
                },
                iconSize: {
                    label: "Tamaño de icono",
                    description: "Tamaño de los iconos de actividad"
                },
                specialFirst: {
                    label: "Especiales primero",
                    description: "Mostrar primero actividades especiales (actualmente Spotify y Twitch)"
                },
                renderGifs: {
                    label: "Renderizar GIFs",
                    description: "Permitir el renderizado de GIFs"
                },
                removeGameActivityStatus: {
                    label: "Eliminar estado de 'Actividad de juego'",
                    description: "Elimina el icono y el estado de actividad de juego"
                },
                userPopout: {
                    label: "Ventana de usuario",
                    description: "Mostrar todas las actividades en la ventana emergente de perfil / barra lateral"
                },
                hideTooltip: {
                    label: "Ocultar descripción emergente",
                    description: "Oculta las actividades en varios lugares"
                },
                allActivitiesStyle: {
                    label: "Estilo de 'Todas las actividades'",
                    description: "Estilo para mostrar todas las actividades",
                    list: "Lista",
                    carousel: "Carrusel",
                    left: "Izquierda",
                    right: "Derecha"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Añade un espectrógrafo y un visualizador de osciloscopio a los reproductores de audio",
            option: {
                oscilloscope: {
                    label: "Osciloscopio",
                    description: "Activar visualizador de osciloscopio"
                },
                spectrograph: {
                    label: "Espectrógrafo",
                    description: "Activar visualizador de espectrógrafo"
                },
                oscilloscopeSolidColor: {
                    label: "Color sólido del osciloscopio",
                    description: "Usa un color sólido en lugar de un degradado para el osciloscopio"
                },
                oscilloscopeColor: {
                    label: "Color del osciloscopio",
                    description: "Color del osciloscopio cuando el color sólido está activado"
                },
                spectrographSolidColor: {
                    label: "Color sólido del espectrógrafo",
                    description: "Usa un color sólido en lugar de un degradado para el espectrógrafo"
                },
                spectrographColor: {
                    label: "Color del espectrógrafo",
                    description: "Color del espectrógrafo cuando el color sólido está activado"
                },
                forceMoveBelow: {
                    label: "Forzar mover debajo",
                    description: "Fuerza que el visualizador esté debajo de los controles de audio"
                }
            },
            toast: {
                invalidColorFormat: "Formato de color no válido para {{settingKey}}, asegúrate de usar 'R, G, B' o '#RRGGBB'"
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Crea motivos personalizados para el modal de baneo y/o muestra un campo de texto por defecto.",
            option: {
                reasons: {
                    label: "Motivos",
                    description: "Tus motivos personalizados"
                },
                isTextInputDefault: {
                    label: "Entrada de texto por defecto",
                    description: "Muestra un campo de texto en lugar de un menú desplegable por defecto."
                }
            },
            title: "Motivos",
            placeholder: "Motivo",
            add: "Añadir otro motivo"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Permite buscar en la lista de usuarios bloqueados y hace que los nombres sean seleccionables.",
            placeholder: "Buscar usuarios..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Mejora el sistema de comandos con varias utilidades.",
            option: {
                autoFillArguments: {
                    label: "Autocompletar argumentos",
                    description: "Rellena automáticamente el comando con todos los argumentos, no solo los obligatorios"
                },
                allowNewlinesInCommands: {
                    label: "Permitir saltos de línea en comandos",
                    description: "Permite saltos de línea en la entrada de comandos (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Refresca los comandos de aplicación de Discord localmente",
                    user: "usuario específico a intentar refrescar",
                    refreshing: "Refrescando comandos de aplicación...",
                    refreshed: "¡Comandos refrescados con éxito!",
                    failed: "Error al refrescar comandos. Consulta la consola."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Muestra las carpetas de servidores en una barra lateral dedicada y añade mejoras relacionadas.",
            option: {
                sidebar: {
                    label: "Barra lateral",
                    description: "Muestra servidores de la carpeta en una barra lateral dedicada"
                },
                sidebarAnim: {
                    label: "Animación de barra lateral",
                    description: "Anima la apertura de la barra lateral de carpetas"
                },
                closeAllFolders: {
                    label: "Cerrar todas las carpetas",
                    description: "Cierra todas las carpetas al seleccionar un servidor que no esté en una"
                },
                closeAllHomeButton: {
                    label: "Cerrar todas con botón Inicio",
                    description: "Cierra todas las carpetas al hacer clic en el botón de Inicio"
                },
                closeOthers: {
                    label: "Cerrar otras",
                    description: "Cierra las demás carpetas al abrir una"
                },
                closeServerFolder: {
                    label: "Cerrar carpeta de servidor",
                    description: "Cierra la carpeta al seleccionar un servidor dentro de ella"
                },
                forceOpen: {
                    label: "Forzar apertura",
                    description: "Fuerza la apertura de una carpeta al cambiar a un servidor de esa carpeta"
                },
                keepIcons: {
                    label: "Mantener iconos",
                    description: "Sigue mostrando iconos de servidor en la barra principal cuando la carpeta esté abierta en la lateral de BetterFolders"
                },
                showFolderIcon: {
                    label: "Mostrar icono de carpeta",
                    description: "Muestra el icono de carpeta sobre los servidores en la barra de BetterFolders",
                    never: "Nunca",
                    always: "Siempre",
                    moreThanOne: "Cuando hay más de una carpeta expandida"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Cambia el texto alternativo de los GIF de 'GIF' a las etiquetas o nombre del archivo"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Hace que el selector de GIFs abra la categoría de favoritos por defecto",
            option: {
                keepOpen: {
                    label: "Mantener abierto",
                    description: "Mantiene el selector de GIFs abierto tras elegir uno"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Mira la fecha de expiración, el perfil de quien invita y previsualiza servidores antes de unirte.",
            render: {
                tip: "Esta invitación expirará {{time}}",
                header: "{{name}} te invitó a {{server}}",
                never: "nunca expira"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Oculta las notas o desactiva el corrector (¡Configurar en ajustes!)",
            option: {
                hide: {
                    label: "Ocultar notas",
                    description: "Oculta el cuadro de notas en las ventanas emergentes de usuario"
                },
                noSpellCheck: {
                    label: "Sin corrector",
                    description: "Desactiva el corrector ortográfico en las notas"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "La cantidad de símbolos '+' antes de :emoji: determina a qué mensaje se añade la reacción"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Opciones para copiar el color, editar o ver el icono de un rol al hacer clic derecho en el perfil",
            option: {
                roleIconFileFormat: {
                    label: "Formato de archivo del icono",
                    description: "Formato a usar al ver iconos de rol"
                }
            },
            context: {
                copyColor: "Copiar color del rol",
                editRole: "Editar rol",
                viewIcon: "Ver icono del rol"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "Copia el color del rol al hacer clic en el punto de rol. Permite usar el punto y el nombre en color a la vez.",
            option: {
                bothStyles: {
                    label: "Ambos estilos",
                    description: "Muestra tanto el punto de rol como el nombre coloreado"
                },
                copyRoleColorInProfilePopout: {
                    label: "Copiar color en ventana de perfil",
                    description: "Permite hacer clic en el punto del perfil para copiar el color"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Mejora el menú de sesiones (dispositivos). Muestra marcas de tiempo exactas, nombres personalizados y notificaciones.",
            new: "NUEVO",
            newSessions: "Nuevas sesiones:",
            rename: "Renombrar",
            newDevice: "Nuevo nombre del dispositivo",
            resetName: "Restablecer nombre",
            save: "Guardar",
            cancel: "Cancelar",
            option: {
                backgroundCheck: {
                    label: "Comprobación en segundo plano",
                    description: "Busca nuevas sesiones y muestra notificaciones cuando se detecten"
                },
                checkInterval: {
                    label: "Intervalo de comprobación",
                    description: "Frecuencia (en minutos) para buscar nuevas sesiones"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Mejora la experiencia al abrir el menú de ajustes",
            option: {
                disableFade: {
                    label: "Desactivar desvanecimiento",
                    description: "Desactiva la animación de transición"
                },
                organizeMenu: {
                    label: "Organizar menú",
                    description: "Organiza el menú contextual del engranaje en categorías"
                },
                eagerLoad: {
                    label: "Carga inmediata (Eager Load)",
                    description: "Elimina el retraso de carga al abrir el menú por primera vez"
                }
            },
            alert: {
                title: "Reinicio requerido",
                restart: "Has cambiado ajustes que requieren un reinicio.",
                confirm: "Reiniciar ahora",
                cancel: "¡Luego!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Sube archivos con un solo clic, abre el menú con clic derecho"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Este complemento permite ampliar las vistas previas de las transmisiones",
            context: {
                viewPreview: "Ver vista previa de la transmisión"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Bloquea mensajes que contienen palabras clave, como si el usuario estuviera bloqueado.",
            option: {
                blockedWords: {
                    label: "Palabras bloqueadas",
                    description: "Lista de palabras separadas por comas a bloquear"
                },
                useRegex: {
                    label: "Usar Regex",
                    description: "Usa expresiones regulares para comprobar el contenido (avanzado)"
                },
                caseSensitive: {
                    label: "Sensible a mayúsculas",
                    description: "Si se deben diferenciar mayúsculas de minúsculas"
                },
                ignoreBlockedMessages: {
                    label: "Ignorar mensajes bloqueados",
                    description: "Ignora completamente la barra de mensajes nuevos (recientes)"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Evita que Krisp se cargue"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Desenfoca archivos en canales NSFW hasta pasar el ratón por encima",
            option: {
                blurAmount: {
                    label: "Nivel de desenfoque",
                    description: "Nivel de desenfoque (en píxeles)"
                },
                blurAllChannels: {
                    label: "Desenfocar todos los canales",
                    description: "Desenfoca archivos en todos los canales (no solo NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Evita la confirmación al usar funciones de fijado (pin)"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Recibe notificaciones de fuentes específicas incluso en modo 'No molestar'. Haz clic derecho para configurar.",
            context: {
                remove: "Quitar excepción de estado",
                add: "Añadir excepción de estado"
            },
            option: {
                guilds: {
                    label: "Servidores",
                    description: "Servidores permitidos (avisar al ser mencionado en cualquier parte)",
                    placeholder: "Separar por comas"
                },
                channels: {
                    label: "Canales",
                    description: "Canales permitidos (avisar al ser mencionado en ellos)",
                    placeholder: "Separar por comas"
                },
                users: {
                    label: "Usuarios",
                    description: "Usuarios permitidos (avisar de todos sus mensajes en MD)",
                    placeholder: "Separar por comas"
                },
                allowOutsideOfDms: {
                    label: "Permitir fuera de MD",
                    description: "Permitir que usuarios seleccionados omitan el estado fuera de MD también"
                },
                notificationSound: {
                    label: "Sonido de notificación",
                    description: "Si debe reproducirse el sonido de notificación"
                },
                respectSilentPings: {
                    label: "Respetar menciones silenciosas",
                    description: "Respeta las menciones con @silent o notificaciones suprimidas"
                },
                statusToUse: {
                    label: "Estado a usar",
                    description: "Estado para el que se aplica la lista blanca",
                    online: "En línea",
                    idle: "Ausente",
                    dnd: "No molestar",
                    invisible: "Invisible"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Rastrea y muestra los cumpleaños de los usuarios con iconos de tartas",
            context: {
                label: "Cumpleaños",
                setBirthday: "Establecer cumpleaños",
                clearBirthday: "Borrar cumpleaños",
                current: "Actual:"
            },
            option: {
                chat: {
                    label: "Chat",
                    description: "Mostrar iconos de tarta junto a los nombres en el chat"
                },
                memberList: {
                    label: "Lista de miembros",
                    description: "Mostrar iconos de tarta en la lista de miembros"
                },
                profileBadge: {
                    label: "Insignia de perfil",
                    description: "Mostrar insignia de tarta en el perfil de usuario"
                },
                notificationSound: {
                    label: "Sonido de notificación",
                    description: "Reproducir sonido cuando se envía una notificación de cumpleaños"
                },
                userList: {
                    label: "Cumpleaños guardados",
                    description: "Gestionar cumpleaños guardados"
                }
            },
            locations: {
                chat: {
                    label: "Chat",
                    description: "junto a los nombres en el chat"
                },
                memberList: {
                    label: "Lista de miembros",
                    description: "en la lista de miembros"
                }
            },
            toast: {
                success: "¡Cumpleaños establecido con éxito!",
                invalid: "¡Formato de cumpleaños no válido! Solo se acepta DD/MM.",
                cleared: "¡Cumpleaños borrado con éxito!"
            },
            notification: {
                title: "🎂 ¡Hoy es el cumpleaños!",
                body: "¡Hoy es el cumpleaños de {{username}}!"
            },
            modal: {
                title: "Establecer cumpleaños para {{username}}",
                description: "Introduce el cumpleaños en formato DD/MM (ej. 25/12)",
                placeholder: "ej. 25/12",
                current: "Cumpleaños actual:",
                set: "Establecer cumpleaños",
                cancel: "Cancelar",
                birthday: "¡Es mi cumpleaños! 🎂",
                saved: "Cumpleaños guardados",
                savedDesc: "Aún no hay cumpleaños guardados. ¡Haz clic derecho en los usuarios para añadirlos!",
                today: "Hoy",
                remove: "Eliminar",
                loading: "Cargando...",
                save: "Guardar",
                edit: "Editar"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Muestra temporizadores en todas las llamadas de voz",
            option: {
                format: {
                    label: "Formato",
                    description: "Formato compacto o legible para humanos",
                    human: "30d 23h 00m 42s"
                },
                allCallTimers: {
                    label: "Todos los temporizadores",
                    description: "Mostrar temporizadores de llamada para todos los usuarios en los servidores"
                },
                showWithoutHover: {
                    label: "Mostrar sin pasar el ratón",
                    description: "Mostrar siempre el temporizador sin necesidad de pasar el cursor por encima"
                },
                showRoleColor: {
                    label: "Mostrar color de rol",
                    description: "Mostrar con el color de rol del usuario (si el plugin ShowRoleColor está activo)"
                },
                trackSelf: {
                    label: "Rastrearte a ti mismo",
                    description: "Mostrar también tu propio temporizador"
                },
                showSeconds: {
                    label: "Mostrar segundos",
                    description: "Mostrar los segundos en el temporizador"
                },
                watchLargeGuilds: {
                    label: "Vigilar servidores grandes",
                    description: "Rastrea usuarios en servidores grandes. Esto puede causar lag si estás en muchos servidores con usuarios activos en voz."
                },
                fixUI: {
                    label: "Corrección de IU",
                    description: "En algunos casos, el temporizador puede romper la interfaz. Activa esta opción para corregirlo."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Añade insignias a los canales según su tipo",
            badge: {
                private: "Este canal está bloqueado.",
                nsfw: "Este canal está marcado como NSFW.",
                rules: "Este es el canal de reglas del servidor."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Una insignia por canal",
                    description: "Mostrar solo una insignia por canal"
                },
                showTextBadge: {
                    label: "Mostrar insignia de texto",
                    description: "Muestra la insignia de canal de texto"
                },
                showVoiceBadge: {
                    label: "Mostrar insignia de voz",
                    description: "Muestra la insignia de canal de voz"
                },
                showCategoryBadge: {
                    label: "Mostrar insignia de categoría",
                    description: "Muestra la insignia de categoría"
                },
                showDirectoryBadge: {
                    label: "Mostrar insignia de directorio",
                    description: "Muestra la insignia de directorio"
                },
                showAnnouncementThreadBadge: {
                    label: "Insignia de hilo de anuncios",
                    description: "Muestra la insignia de hilo de anuncios"
                },
                showPublicThreadBadge: {
                    label: "Insignia de hilo público",
                    description: "Muestra la insignia de hilo público"
                },
                showPrivateThreadBadge: {
                    label: "Insignia de hilo privado",
                    description: "Muestra la insignia de hilo privado"
                },
                showStageBadge: {
                    label: "Mostrar insignia de Stage",
                    description: "Muestra la insignia de canal de Stage"
                },
                showAnnouncementBadge: {
                    label: "Insignia de anuncios",
                    description: "Muestra la insignia de anuncios"
                },
                showForumBadge: {
                    label: "Mostrar insignia de foro",
                    description: "Muestra la insignia de foro"
                },
                showMediaBadge: {
                    label: "Mostrar insignia de multimedia",
                    description: "Muestra la insignia de multimedia"
                },
                showNSFWBadge: {
                    label: "Mostrar insignia NSFW",
                    description: "Muestra la insignia NSFW"
                },
                showLockedBadge: {
                    label: "Mostrar insignia de bloqueo",
                    description: "Muestra la insignia de canal bloqueado"
                },
                showRulesBadge: {
                    label: "Mostrar insignia de reglas",
                    description: "Muestra la insignia de reglas"
                },
                showUnknownBadge: {
                    label: "Mostrar insignia desconocida",
                    description: "Muestra la insignia de tipo desconocido"
                },
                textBadgeLabel: {
                    label: "Etiqueta: Texto",
                    description: "Texto para la insignia de canal de texto",
                    default: "Texto"
                },
                voiceBadgeLabel: {
                    label: "Etiqueta: Voz",
                    description: "Texto para la insignia de canal de voz",
                    default: "Voz"
                },
                categoryBadgeLabel: {
                    label: "Etiqueta: Categoría",
                    description: "Texto para la insignia de categoría",
                    default: "Categoría"
                },
                announcementBadgeLabel: {
                    label: "Etiqueta: Novedades",
                    description: "Texto para la insignia de anuncios",
                    default: "Novedades"
                },
                announcementThreadBadgeLabel: {
                    label: "Etiqueta: Hilo de novedades",
                    description: "Texto para la insignia de hilo de anuncios",
                    default: "Hilo de novedades"
                },
                publicThreadBadgeLabel: {
                    label: "Etiqueta: Hilo",
                    description: "Texto para la insignia de hilo público",
                    default: "Hilo"
                },
                privateThreadBadgeLabel: {
                    label: "Etiqueta: Hilo privado",
                    description: "Texto para la insignia de hilo privado",
                    default: "Hilo privado"
                },
                stageBadgeLabel: {
                    label: "Etiqueta: Stage",
                    description: "Texto para la insignia de Stage",
                    default: "Stage"
                },
                directoryBadgeLabel: {
                    label: "Etiqueta: Directorio",
                    description: "Texto para la insignia de directorio",
                    default: "Directorio"
                },
                forumBadgeLabel: {
                    label: "Etiqueta: Foro",
                    description: "Texto para la insignia de foro",
                    default: "Foro"
                },
                mediaBadgeLabel: {
                    label: "Etiqueta: Multimedia",
                    description: "Texto para la insignia de multimedia",
                    default: "Multimedia"
                },
                nsfwBadgeLabel: {
                    label: "Etiqueta: NSFW",
                    description: "Texto para la insignia NSFW",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Etiqueta: Bloqueado",
                    description: "Texto para la insignia de bloqueo",
                    default: "Bloqueado"
                },
                rulesBadgeLabel: {
                    label: "Etiqueta: Reglas",
                    description: "Texto para la insignia de reglas",
                    default: "Reglas"
                },
                unknownBadgeLabel: {
                    label: "Etiqueta: Desconocido",
                    description: "Texto para la insignia desconocida",
                    default: "Desconocido"
                },
                textBadgeColor: {
                    label: "Color: Insignia de texto",
                    description: "Color de la insignia de texto"
                },
                voiceBadgeColor: {
                    label: "Color: Insignia de voz",
                    description: "Color de la insignia de voz"
                },
                categoryBadgeColor: {
                    label: "Color: Insignia de categoría",
                    description: "Color de la insignia de categoría"
                },
                announcementBadgeColor: {
                    label: "Color: Insignia de novedades",
                    description: "Color de la insignia de hilos de anuncios"
                },
                announcementThreadBadgeColor: {
                    label: "Color: Insignia de hilo de novedades",
                    description: "Color de la insignia de hilos de anuncios"
                },
                publicThreadBadgeColor: {
                    label: "Color: Insignia de hilo",
                    description: "Color de la insignia de hilo público"
                },
                privateThreadBadgeColor: {
                    label: "Color: Insignia de hilo privado",
                    description: "Color de la insignia de hilo privado"
                },
                stageBadgeColor: {
                    label: "Color: Insignia de Stage",
                    description: "Color de la insignia de Stage"
                },
                directoryBadgeColor: {
                    label: "Color: Insignia de directorio",
                    description: "Color de la insignia de directorio"
                },
                forumBadgeColor: {
                    label: "Color: Insignia de foro",
                    description: "Color de la insignia de foro"
                },
                mediaBadgeColor: {
                    label: "Color: Insignia de multimedia",
                    description: "Color de la insignia de multimedia"
                },
                nsfwBadgeColor: {
                    label: "Color: Insignia NSFW",
                    description: "Color de la insignia NSFW"
                },
                lockedBadgeColor: {
                    label: "Color: Insignia bloqueada",
                    description: "Color de la insignia de bloqueo"
                },
                rulesBadgeColor: {
                    label: "Color: Insignia de reglas",
                    description: "Color de la insignia de reglas"
                },
                unknownBadgeColor: {
                    label: "Color: Insignia desconocida",
                    description: "Color de la insignia desconocida"
                }
            },
            badges: {
                text: "Texto",
                voice: "Voz",
                category: "Categoría",
                announcement: "Novedades",
                announcementThread: "Hilo de novedades",
                publicThread: "Hilo",
                privateThread: "Hilo privado",
                stage: "Stage",
                directory: "Directorio",
                forum: "Foro",
                media: "Multimedia",
                nsfw: "NSFW",
                locked: "Bloqueado",
                rules: "Reglas",
                unknown: "Desconocido"
            },
            tooltip: {
                locked: "Este canal está bloqueado.",
                nsfw: "Este canal está marcado como NSFW."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "Agrupa tus canales más visitados en pestañas, como en un navegador",
            open: "Abrir en una pestaña nueva",
            animation: {
                title: "Controles de animación",
                description: "Activa o desactiva animaciones específicas. Cada opción puede alternarse de forma independiente.",
                placeholder: "Selecciona qué animaciones activar...",
                tabHover: "Efectos al pasar el ratón (elevación + escala)",
                tabSelection: "Animación de elevación al seleccionar pestaña",
                tabDragDrop: "Arrastrar y soltar (fantasma + reordenar)",
                tabEnterExit: "Deslizamiento al entrar/salir (creación + cierre)",
                tabIconPop: "Salto de icono al seleccionar",
                closeRotation: "Rotación del botón de cierre",
                plusPulse: "Pulso del botón '+'",
                mentionGlow: "Resplandor de insignia de mención",
                compactExpand: "Expansión en modo compacto",
                selectedBorder: "Borde azul en pestaña seleccionada",
                selectedBackground: "Color de fondo en pestaña seleccionada",
                tabShadows: "Efectos de sombra en pestañas",
                tabRepositioning: "Reposicionamiento suave",
                resizeHandle: "Desvanecimiento del tirador de redimensionado",
                questActivate: "Degradado de Misión activa"
            },
            bookmark: {
                label: "Marcador",
                unknown: "Usuario desconocido",
                folder: "Carpeta",
                add: "Añadir a marcadores",
                edit: "Editar marcador",
                delete: "Eliminar marcador",
                remove: "Quitar de marcadores",
                removeFolder: "Quitar marcador de la carpeta",
                loading: "Cargando marcadores...",
                noBookmarks: "No tienes marcadores. Puedes añadir una pestaña abierta o ocultar esto haciendo clic derecho",
                quests: "Misiones",
                messageRequests: "Solicitudes de mensaje",
                friends: "Amigos",
                shop: "Tienda",
                library: "Biblioteca",
                discovery: "Descubrimiento",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Actividad",
                specialPage: "Página especial"
            },
            button: {
                save: "Guardar",
                delete: "Eliminar",
                cancel: "Cancelar"
            },
            context: {
                label: "Menú contextual de ChannelTabs",
                bookmark: "Menú de marcadores de ChannelTabs",
                tab: "Menú de pestañas de ChannelTabs",
                compact: "Compacto",
                bookmarkBar: "Barra de marcadores",
                openAll: "Abrir todo en marcadores",
                openNew: "Abrir en pestaña nueva",
                close: {
                    tab: "Cerrar pestaña",
                    otherTabs: "Cerrar otras pestañas",
                    tabsToRight: "Cerrar pestañas a la derecha",
                    tabsToLeft: "Cerrar pestañas a la izquierda",
                    reopen: "Reabrir pestaña cerrada",
                    allTabs: "Cerrar todas las pestañas"
                }
            },
            error: {
                noLogin: "¿No hay ninguna cuenta iniciada?"
            },
            modal: {
                add: {
                    title: "Añadir marcador a carpeta",
                    select: "Selecciona una carpeta",
                    create: "Crear una"
                },
                edit: {
                    title: "Editar marcador",
                    name: "Nombre del marcador",
                    folder: "Color de la carpeta"
                },
                delete: {
                    title: "¿Estás seguro?",
                    description: "Al eliminar una carpeta de marcadores también se eliminarán todos los marcadores que contenga."
                }
            },
            option: {
                onStartup: {
                    label: "Al iniciar",
                    description: "Qué hacer con las pestañas al iniciar la aplicación",
                    nothing: "No hacer nada (abrir en la pestaña de amigos)",
                    remember: "Recordar pestañas de la última sesión",
                    open: "Abrir un conjunto específico de pestañas"
                },
                tabSet: {
                    label: "Conjunto de pestañas"
                },
                noPomeloNames: {
                    label: "Sin nombres 'Pomelo'",
                    description: "Usar nombres de pantalla en lugar de nombres de usuario para los MD"
                },
                showStatusIndicators: {
                    label: "Indicadores de estado",
                    description: "Mostrar indicadores de estado en los MD"
                },
                showBookmarkBar: {
                    label: "Mostrar barra de marcadores"
                },
                bookmarkNotificationDot: {
                    label: "Punto de notificación en marcadores",
                    description: "Muestra un punto de notificación para los marcadores"
                },
                widerTabsAndBookmarks: {
                    label: "Pestañas y marcadores más anchos",
                    description: "Extiende la longitud para monitores grandes"
                },
                tabWidthScale: {
                    label: "Escala de ancho de pestaña",
                    description: "Escala de ancho (porcentaje) - ajustable arrastrando los bordes"
                },
                renderAllTabs: {
                    label: "Renderizar todas las pestañas",
                    description: "Mantiene todas las pestañas en caché para un cambio instantáneo (guarda posición y estado)"
                },
                switchToExistingTab: {
                    label: "Cambiar a pestaña existente",
                    description: "Cambia a la pestaña si ya existe para el canal al que navegas"
                },
                createNewTabIfNotExists: {
                    label: "Crear pestaña si no existe",
                    description: "Crea una pestaña nueva si no hay una para el canal al que navegas"
                },
                enableRapidNavigation: {
                    label: "Navegación rápida",
                    description: "Al navegar rápido entre canales, se reemplazará la pestaña actual en lugar de crear nuevas"
                },
                rapidNavigationThreshold: {
                    label: "Umbral de navegación rápida",
                    description: "Ventana de tiempo (ms). Dentro de este tiempo, los canales reemplazan la pestaña activa."
                },
                tabBarPosition: {
                    label: "Posición de la barra de pestañas",
                    description: "Ubicación de la barra",
                    top: "Arriba",
                    bottom: "Abajo"
                },
                enableNumberKeySwitching: {
                    label: "Cambio con teclas numéricas",
                    description: "Permite usar los números (1-9) para cambiar de pestaña"
                },
                numberKeySwitchCount: {
                    label: "Cantidad de teclas numéricas",
                    description: "Número de pestañas accesibles mediante teclas (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "Atajo para cerrar pestaña",
                    description: "Activa el atajo de teclado para cerrar pestañas"
                },
                enableNewTabShortcut: {
                    label: "Atajo para pestaña nueva",
                    description: "Activa el atajo de teclado para abrir pestañas nuevas"
                },
                enableTabCycleShortcut: {
                    label: "Atajo para rotar pestañas",
                    description: "Activa el atajo para rotar entre pestañas"
                },
                closeTabKeybind: {
                    label: "Atajo para cerrar pestaña",
                    description: "Combinación de teclas para cerrar la pestaña actual"
                },
                newTabKeybind: {
                    label: "Atajo para nueva pestaña",
                    description: "Combinación de teclas para abrir una nueva pestaña"
                },
                cycleTabForwardKeybind: {
                    label: "Atajo para siguiente pestaña",
                    description: "Combinación de teclas para rotar a la siguiente pestaña"
                },
                cycleTabBackwardKeybind: {
                    label: "Atajo para pestaña anterior",
                    description: "Combinación de teclas para rotar a la pestaña anterior"
                },
                keybindsSection: {
                    label: "Combinaciones de teclas",
                    description: "Atajos de teclado configurables",
                    title: "Atajos de teclado",
                    reset: "Restablecer todo",
                    closeTab: {
                        label: "Cerrar pestaña",
                        description: "Cierra la pestaña activa"
                    },
                    newTab: {
                        label: "Nueva pestaña",
                        description: "Abre el canal actual en una pestaña nueva"
                    },
                    cycleTabsForward: {
                        label: "Siguiente pestaña",
                        description: "Rota hacia adelante"
                    },
                    cycleTabsBackward: {
                        label: "Pestaña anterior",
                        description: "Rota hacia atrás"
                    }
                },
                showTabNumbers: {
                    label: "Mostrar números en pestañas",
                    description: "Muestra insignias numeradas para los atajos"
                },
                tabNumberPosition: {
                    label: "Posición del número",
                    description: "Dónde mostrar el número",
                    left: "Izquierda",
                    right: "Derecha"
                },
                animations: {
                    label: "Animaciones"
                },
                animationHover: {
                    label: "Animación al pasar el ratón",
                    description: "Activa efectos de elevación y escala"
                },
                animationSelection: {
                    label: "Animación al seleccionar",
                    description: "Activa efectos de resplandor y elevación"
                },
                animationDragDrop: {
                    label: "Animación al arrastrar",
                    description: "Activa efectos fantasma al reordenar"
                },
                animationEnterExit: {
                    label: "Animación de entrada/salida",
                    description: "Activa deslizamiento al crear o cerrar pestañas"
                },
                animationIconPop: {
                    label: "Salto de icono",
                    description: "Aumenta el tamaño del icono al seleccionar"
                },
                animationCloseRotation: {
                    label: "Rotación al cerrar",
                    description: "Rotación en el botón de cierre"
                },
                animationPlusPulse: {
                    label: "Pulso en botón '+'",
                    description: "Efecto de pulso en el botón de añadir"
                },
                animationMentionGlow: {
                    label: "Resplandor de mención",
                    description: "Resplandor rojo pulsante para menciones"
                },
                animationCompactExpand: {
                    label: "Expansión en compacto",
                    description: "Expansión suave para pestañas compactas"
                },
                animationSelectedBorder: {
                    label: "Borde seleccionado",
                    description: "Borde y resplandor para la pestaña activa"
                },
                animationSelectedBackground: {
                    label: "Fondo seleccionado",
                    description: "Cambio de color de fondo para la pestaña activa"
                },
                animationTabShadows: {
                    label: "Sombras de pestaña",
                    description: "Efectos de sombra en las pestañas"
                },
                animationTabPositioning: {
                    label: "Posicionamiento de pestañas",
                    description: "Transiciones suaves al mover posiciones"
                },
                animationResizeHandle: {
                    label: "Tirador de redimensionado",
                    description: "Animación de desvanecimiento para el tirador"
                },
                animationQuestsActive: {
                    label: "Misiones activas",
                    description: "Degradado animado cuando hay misiones en curso"
                },
                compactAutoExpandSelected: {
                    label: "Auto-expandir seleccionada",
                    description: "Expande pestañas compactas al seleccionarlas"
                },
                compactAutoExpandOnHover: {
                    label: "Auto-expandir al pasar el ratón",
                    description: "Expande pestañas compactas al pasar el cursor"
                },
                openInNewTabAutoSwitch: {
                    label: "Cambio automático",
                    description: "Cambia a la nueva pestaña al abrir desde el menú contextual"
                },
                bookmarksIndependentFromTabs: {
                    label: "Marcadores independientes",
                    description: "Los marcadores no afectan a la barra de pestañas activa"
                },
                showResizeHandle: {
                    label: "Mostrar tirador",
                    description: "Muestra el tirador al pasar el ratón"
                },
                openNewTabsInCompactMode: {
                    label: "Pestañas nuevas en compacto",
                    description: "Crea pestañas nuevas en modo compacto por defecto"
                },
                newTabButtonBehavior: {
                    label: "Comportamiento del botón '+'",
                    description: "El botón sigue a las pestañas en lugar de estar fijo"
                },
                oneTabPerServer: {
                    label: "Una pestaña por servidor",
                    description: "Reutiliza la pestaña existente del mismo servidor"
                },
                maxOpenTabs: {
                    label: "Máximo de pestañas",
                    description: "0 = ilimitado"
                }
            },
            tabs: {
                startup: "Pestañas de inicio",
                currently: "Establecer pestañas abiertas actualmente"
            },
            toast: {
                notRestoring: "No se restauran las pestañas porque KeepCurrentChannel está activo",
                failed: {
                    restore: "Error al restaurar pestañas",
                    saved: "Error al cargar pestañas guardadas"
                }
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Muestra un contador de caracteres en el cuadro de mensaje",
            option: {
                colorEffects: {
                    label: "Efectos de color",
                    description: "Activa o desactiva los cambios de color al acercarse al límite de caracteres"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Oculta todos los canales en categorías contraídas, incluso si tienen mensajes sin leer."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Elimina todos los emojis y decoraciones de los nombres de los canales"
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Elimina automáticamente los elementos de rastreo de las URLs que envías"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Haz clic en los roles de los perfiles y de la lista de miembros para ver qué usuarios los tienen.",
            modal: {
                loading: "Cargando miembros...",
                noMembers: "No se han encontrado miembros.",
                unknown: "Rol desconocido"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Te permite ocultar localmente casi todo el contenido de cualquier usuario",
            replying: "Respondiendo a un mensaje bloqueado",
            option: {
                hideVc: {
                    label: "Ocultar canales de voz",
                    description: "Oculta los canales de voz que contienen usuarios bloqueados."
                },
                usersToBlock: {
                    label: "Usuarios a bloquear",
                    description: "IDs de usuario separados por coma y espacio"
                },
                hideBlockedUsers: {
                    label: "Ocultar usuarios bloqueados",
                    description: "Oculta a los usuarios bloqueados en todas partes"
                },
                hideBlockedMessages: {
                    label: "Ocultar mensajes bloqueados",
                    description: "Oculta completamente los mensajes de usuarios bloqueados"
                },
                hideEmptyRoles: {
                    label: "Ocultar roles vacíos",
                    description: "Oculta las cabeceras de roles si todos sus miembros están bloqueados"
                },
                blockedReplyDisplay: {
                    label: "Visualización de respuesta bloqueada",
                    description: "Qué mostrar cuando alguien responde a un usuario que tienes oculto",
                    displayText: "Mostrar texto indicando que se respondió a un mensaje oculto",
                    hideReply: "Literalmente nada"
                },
                guildBlackList: {
                    label: "Lista negra de servidores",
                    description: "IDs de servidores donde desactivar la funcionalidad"
                },
                guildWhiteList: {
                    label: "Lista blanca de servidores",
                    description: "IDs de servidores donde activar la funcionalidad"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Recreación del antiguo experimento de temas del cliente. Añade un color al tema de tu Discord",
            title: "Color del tema",
            add: "Añade un color al tema de tu cliente de Discord",
            option: {
                color: {
                    label: "Color"
                },
                resetColor: {
                    label: "Restablecer color"
                }
            },
            error: {
                modal: {
                    title: "¡Tu tema no se verá bien!",
                    contrast: "El color seleccionado no contrasta bien con el texto",
                    nitro: "Los temas de Nitro no son compatibles",
                    switch: "Cambia al modo {{oppositeTheme}}",
                    disable: "Desactivar tema de Nitro",
                    reset: "Restablecer color del tema"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "¡Añade más opciones de FPS y duración a los Clips, además de etiquetas RPC!",
            minutes: "Minutos",
            option: {
                richPresenceTagging: {
                    label: "Etiquetado Rich Presence",
                    description: "¿Cuándo se deben etiquetar los clips con la Rich Presence actual?",
                    always: "Siempre",
                    only: "Solo cuando coincida el inicio o fin del nombre de la actividad",
                    never: "Nunca"
                },
                enableScreenshotKeybind: {
                    label: "Atajo para capturas",
                    description: "Activa la función de captura de pantalla mediante atajo"
                },
                enableVoiceOnlyClips: {
                    label: "Clips de solo voz",
                    description: "Permite clips de solo voz (audio sin vídeo)"
                },
                enableAdvancedSignals: {
                    label: "Señales avanzadas",
                    description: "Activa señales avanzadas (disparadores de clip automático)"
                },
                ignorePlatformRestriction: {
                    label: "Ignorar restricciones de plataforma",
                    description: "Permite el guardado de clips restringidos (puede causar errores)"
                },
                clipsLink: {
                    label: "Enlace a Clips",
                    link: "¡Cambia los FPS y la duración en los ajustes de Clips!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Elimina los iconos para daltónicos de los estados, como el Discord de 2015-2017"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Te permite navegar por la interfaz con el teclado.",
            action: {
                command: {
                    label: "Ejecutar comando",
                    description: "Usa un alias para otro comando de la paleta. Usa el selector si no estás seguro del ID."
                },
                settings: {
                    label: "Abrir página de ajustes",
                    description: "Salta directamente a una página de ajustes de Discord."
                },
                url: {
                    label: "Abrir URL",
                    description: "Abre un enlace. Usa links https:// para mejor compatibilidad."
                },
                macro: {
                    label: "Ejecutar Macro",
                    description: "Ejecuta una secuencia de comandos en orden. Añade pasos mediante el selector."
                }
            },
            category: {
                auto: "Auto (ubicación por defecto)",
                default: {
                    label: "Acciones rápidas",
                    description: "Atajos comunes de Plexcord"
                },
                plugins: {
                    label: "Complementos",
                    description: "Activa, desactiva y configura plugins",
                    enable: {
                        label: "Activar plugins"
                    },
                    disable: {
                        label: "Desactivar plugins"
                    },
                    settings: {
                        label: "Ajustes de plugins"
                    },
                    toolbox: {
                        label: "Acciones de plugins"
                    },
                    chatbar: {
                        label: "Botones de la barra de chat"
                    },
                    changes: {
                        label: "Cambios en plugins"
                    }
                },
                context: {
                    label: "Contexto actual",
                    description: "Acciones para el canal y servidor seleccionados"
                },
                updates: {
                    label: "Actualizaciones",
                    description: "Mantente al día con Plexcord"
                },
                discordSettings: {
                    label: "Ajustes de Discord",
                    description: "Salta a las páginas de configuración de Discord"
                },
                custom: {
                    label: "Comandos personalizados",
                    description: "Entradas de la paleta definidas por el usuario"
                },
                sessions: {
                    label: "Herramientas de sesión",
                    description: "Utilidades para gestionar tu sesión de Discord"
                },
                guilds: {
                    label: "Servidores",
                    description: "Navega rápidamente a tus servidores"
                },
                friends: {
                    label: "Amigos",
                    description: "Navega rápidamente a tus amigos"
                },
                action: {
                    label: "Acción"
                }
            },
            display: {
                channel: {
                    current: "Canal actual",
                    group: "MD de grupo",
                    direct: "Mensaje directo"
                },
                guild: {
                    current: "Servidor actual"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Abrir ajustes de Plexcord",
                        plugin: "Abrir ajustes del plugin"
                    }
                },
                reload: {
                    label: "Recargar Discord",
                    description: "Recarga la ventana actual de Discord"
                }
            },
            command: {
                enable: "Activar {{pluginName}}",
                enabled: "Activado {{pluginName}}",
                disable: "Desactivar {{pluginName}}",
                disabled: "Desactivado {{pluginName}}",
                failed: "Fallo del comando:",
                toggleFailed: "Error al alternar {{pluginName}}.",
                pluginSettings: "Ajustes de {{pluginName}}",
                untitled: "Comando sin título",
                new: "Nuevo comando",
                error: {
                    enter: "Introduce un ID de comando o elige uno abajo.",
                    noCommand: "Ningún comando coincide con este ID."
                },
                discord: {
                    account: "Abrir Mi cuenta",
                    privacy: "Abrir Privacidad y seguridad",
                    notifications: "Abrir Notificaciones",
                    voice: "Abrir Voz y vídeo",
                    text: "Abrir Texto e imágenes",
                    appearance: "Abrir Apariencia",
                    accessibility: "Abrir Accesibilidad",
                    keybinds: "Abrir Atajos de teclado",
                    advanced: "Abrir Avanzado"
                },
                updates: {
                    check: {
                        label: "Buscar actualizaciones",
                        description: "Busca actualizaciones de Plexcord",
                        one: "Una actualización disponible",
                        multiple: "{{count}} actualizaciones disponibles",
                        none: "No hay actualizaciones disponibles",
                        failed: "Error al buscar actualizaciones."
                    },
                    changelog: {
                        label: "Ver registro de cambios",
                        description: "Abre el registro de cambios de Plexcord"
                    }
                },
                read: {
                    mark: {
                        label: "Marcar {{channelLabel}} como leído"
                    }
                },
                pin: {
                    open: {
                        label: "Ver fijados en {{channelLabel}}"
                    },
                    toggle: {
                        label: "Fijar último comando"
                    }
                },
                channel: {
                    mute: {
                        label: "Silenciar {{channelLabel}}",
                        oneHour: "Silenciar {{channelLabel}} por 1 hora",
                        untilTomorrow: "Silenciar {{channelLabel}} hasta mañana"
                    },
                    unmute: {
                        label: "Desactivar silencio en {{channelLabel}}"
                    },
                    reopen: {
                        label: "Reabrir último MD cerrado"
                    },
                    dm: {
                        open: {
                            label: "Abrir MD con {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Abrir ajustes de {{guildLabel}}"
                    },
                    navigate: {
                        label: "Ir a {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "Poner No molestar por 30 minutos",
                    oneHourDnd: "Poner No molestar por 1 hora",
                    cancelStatusReset: "Cancelar temporizador de estado"
                },
                status: {
                    set: {
                        online: "Estado: En línea",
                        idle: "Estado: Ausente",
                        dnd: "Estado: No molestar",
                        invisible: "Estado: Invisible"
                    }
                },
                toggle: {
                    streamer: "Alternar Modo streamer",
                    mute: "Alternar Silenciar micrófono",
                    deafen: "Alternar Enmudecer",
                },
                notification: {
                    clear: {
                        label: "Borrar notificaciones de escritorio"
                    }
                },
                palette: {
                    settings: {
                        label: "Ajustes de Command Palette",
                        description: "Configura el plugin Command Palette"
                    }
                },
                recent: {
                    label: "Ver comandos recientes",
                    description: "Muestra los últimos comandos ejecutados",
                    rerun: "Repetir último comando"
                },
                plugin: {
                    reload: {
                        label: "Recargar todos los plugins",
                        description: "Intenta recargar en caliente todos los plugins activos"
                    },
                    enable: {
                        label: "Activar todos los plugins"
                    },
                    disable: {
                        label: "Desactivar todos los plugins no requeridos"
                    },
                    restart: {
                        label: "Reiniciar Plexcord",
                        description: "Recarga la ventana del cliente de Discord"
                    }
                },
                quickCSS: {
                    label: "Alternar Quick CSS"
                },
                transparentity: {
                    label: "Alternar transparencia de ventana"
                },
                theme: {
                    open: {
                        label: "Abrir ajustes de tema del cliente"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Buscar comandos",
                noCommand: "No se han encontrado comandos",
                add: {
                    title: "Añadir comando"
                },
                choose: {
                    title: "Elegir comando"
                },
                command: {
                    palette: {
                        label: "Command Palette",
                        placeholder: "Escribe un comando",
                        filtering: "Filtrando por {{tags}}",
                        noCommand: "No se han encontrado comandos",
                        pin: "Fijar comando",
                        unpin: "Desfijar comando"
                    },
                    target: {
                        label: "ID del comando de destino",
                        placeholder: "Introduce el ID",
                        choose: "Elegir comando"
                    },
                    custom: {
                        label: "Comandos personalizados",
                        description: "1) Pon nombre al comando · 2) Añade descripción/etiquetas/categoría opcionales · 3) Elige una acción y completa los detalles.",
                        auto: "Auto (por defecto)",
                        expand: "Expandir",
                        collapse: "Contraer",
                        collapsed: {
                            label: "Etiqueta",
                            description: "Nombre a mostrar",
                            advanced: {
                                hide: "Ocultar opciones avanzadas",
                                show: "Mostrar opciones avanzadas"
                            },
                            subtitle: {
                                label: "Descripción",
                                placeholder: "Subtítulo opcional"
                            },
                            keywords: {
                                label: "Palabras clave",
                                placeholder: "Palabras separadas por comas"
                            },
                            tags: {
                                label: "Etiquetas",
                                placeholder: "Etiquetas separadas por comas"
                            },
                            suggestion: {
                                label: "Sugerencia"
                            },
                            chooseCommand: {
                                label: "Elige dónde aparece este comando en la paleta."
                            },
                            danger: {
                                label: "Mostrar como peligroso"
                            }
                        },
                        remove: "Eliminar comando",
                        add: "Añadir comando"
                    }
                },
                settings: {
                    noSelected: "Ninguna página seleccionada",
                    current: "Página actual",
                    choose: "Elegir página..."
                },
                url: {
                    url: "URL",
                    error: "Usa enlaces http:// o https://.",
                    valid: "Introduce una URL válida.",
                    open: {
                        external: "Abrir externamente"
                    }
                },
                macro: {
                    sequence: {
                        label: "Secuencia de comandos",
                        placeholder: "comando-a, comando-b"
                    },
                    addStep: "Añadir paso",
                    unknownId: "IDs de comando desconocidos"
                }
            },
            status: {
                online: "En línea",
                idle: "Ausente",
                dnd: "No molestar",
                invisible: "Invisible"
            },
            tag: {
                core: "Núcleo",
                navigation: "Navegación",
                utility: "Utilidad",
                developer: "Desarrollador",
                customization: "Personalización",
                plugins: "Complementos",
                session: "Sesión",
                context: "Contexto",
                custom: "Personalizado",
                guilds: "Servidores",
                friends: "Amigos",
                other: "Otro"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "No se pudo encontrar el botón de chat '{{label}}'.",
                        failedToTrigger: "Fallo al activar {{label}}.",
                        activated: "{{label}} activado."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Controles de silencio no disponibles",
                        muted: "Canal silenciado.",
                        unmuted: "Silencio de canal desactivado.",
                        failed: "Error al actualizar el estado de silencio."
                    },
                    dm: {
                        no: "No hay cierres de MD registrados en esta sesión.",
                        reOpened: "Reabierto el último MD cerrado.",
                        noAvailable: "El MD ya no está disponible."
                    }
                },
                command: {
                    loop: "Bucle de comandos detectado en la macro.",
                    notFound: "Comando {{commandId}} no encontrado.",
                    unsupported: "Acción de comando personalizado no soportada.",
                    failedToRun: "Error al ejecutar {{label}}.",
                    notMetadata: "Metadatos de Command Palette no disponibles."
                },
                guild: {
                    mute: {
                        unavailable: "Controles de silencio de servidor no disponibles",
                        muted: "Servidor silenciado.",
                        unmuted: "Silencio de servidor desactivado.",
                        failed: "Error al actualizar el estado de silencio."
                    },
                    settings: {
                        unable: "No se pudieron abrir los ajustes del servidor."
                    }
                },
                panel: {
                    pin: {
                        unable: "No se pudo abrir el panel de fijados."
                    }
                },
                status: {
                    reset: {
                        canceled: "Cancelado el restablecimiento de estado programado.",
                        unableToChange: "No se puede cambiar el estado ahora mismo.",
                        reverted: "Estado revertido a {{status}}.",
                        dnd: "No molestar activado durante {{duration}} minutos."
                    },
                    change: {
                        unableToChange: "No se puede cambiar el estado ahora mismo.",
                        changed: "Estado cambiado a {{status}}."
                    }
                },
                read: {
                    marked: "Marcado {{channelLabel}} como leído.",
                    failed: "Fallo al marcar el canal como leído."
                },
                route: {
                    unable: "No se pudo abrir {{destination}}."
                },
                notification: {
                    cleared: "Todas las notificaciones borradas.",
                    failed: "Error al borrar notificaciones.",
                    notSupported: "Función de borrar notificaciones no soportada."
                },
                streamerMode: {
                    enabled: "Modo streamer activado.",
                    disabled: "Modo streamer desactivado."
                },
                voice: {
                    micToggle: {
                        muted: "Micrófono silenciado.",
                        unmuted: "Micrófono activado."
                    },
                    deafenToggle: {
                        deafened: "Ahora estás enmudecido.",
                        undeafened: "Ya no estás enmudecido."
                    }
                },
                quickCSS: {
                    enabled: "Quick CSS activado.",
                    disabled: "Quick CSS desactivado."
                },
                transparentity: {
                    enabled: "Transparencia activada.",
                    disabled: "Transparencia desactivada."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} está desactivado.",
                        disable: "{{pluginName}} está desactivado. Actívalo para usar esta acción."
                    },
                    required: {
                        label: "{{pluginName}} requiere reiniciar para recargarse."
                    },
                    stop: {
                        failed: "Error al detener {{pluginName}}."
                    },
                    restart: {
                        failed: "Error al reiniciar {{pluginName}}."
                    },
                    reload: {
                        label: "Recargado {{pluginName}}.",
                        noPlugin: "No se ha recargado ningún plugin.",
                        reloaded: "Recargado(s) {{count}} plugin(s)."
                    },
                    toggle: {
                        enabled: "Activado(s) {{changed}} plugin(s).",
                        disabled: "Desactivado(s) {{changed}} plugin(s).",
                        noChanged: "Ningún plugin ha cambiado de estado."
                    },
                    run: {
                        failed: {
                            label: "Error al ejecutar {{pluginName}}: {{actionLabel}}."
                        }
                    }
                }
            },
            option: {
                hotkey: {
                    label: "Atajo",
                    description: "Atajo usado para abrir la paleta",
                    recording: "Pulsa cualquier tecla...",
                    reset: "Restablecer"
                },
                visualStyle: {
                    label: "Estilo visual",
                    description: "Apariencia de la paleta",
                    classic: "Clásico",
                    polished: "Pulido"
                },
                showTags: {
                    label: "Mostrar etiquetas",
                    description: "Muestra etiquetas en los comandos"
                },
                enableTagFilter: {
                    label: "Activar filtro de etiquetas",
                    description: "Muestra la barra de filtrado por etiquetas"
                },
                customCommands: {
                    label: "Comandos personalizados",
                    description: "Gestiona las entradas personalizadas de la paleta"
                }
            },
            template: {
                alias: {
                    label: "Comando Alias",
                    description: "Refleja un comando existente"
                },
                settings: {
                    label: "Ajustes",
                    description: "Abrir ajustes de Discord"
                },
                url: {
                    label: "Enlace",
                    description: "Abrir una URL externa"
                },
                macro: {
                    label: "Macro",
                    description: "Ejecutar una secuencia de comandos"
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Desactiva mensajes y errores molestos de la consola",
            option: {
                disableLoggers: {
                    label: "Desactivar registradores (loggers)",
                    description: "Desactiva los registradores de Discord"
                },
                disableSpotifyLogger: {
                    label: "Desactivar registrador de Spotify",
                    description: "Desactiva el registrador de Spotify, que filtra información de la cuenta y tokens"
                },
                whitelistedLoggers: {
                    label: "Registradores permitidos",
                    description: "Lista separada por puntos y coma (;) de registradores a permitir"
                },
                allowLevel: {
                    label: "Permitir niveles",
                    description: "Permitir siempre estos tipos de registros",
                    filter: "Lista de filtros"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Añade alias cortos para varias funciones en la ventana. Ejecuta `shortcutList` para ver la lista."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Permite especificar palabras que se desenfocarán por defecto. Haz clic para revelarlas.",
            option: {
                flagged: {
                    label: "Marcadas",
                    flagged: "Palabras marcadas",
                    placeholder: "Palabra"
                },
                onClick: {
                    label: "Al hacer clic",
                    description: "Solo mostrar el contenido al hacer clic, no al pasar el ratón"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Te permite copiar emojis como cadenas con formato (<a:nombre:id>)",
            option: {
                copyUnicode: {
                    label: "Copiar Unicode",
                    description: "Copia el carácter unicode real en lugar de :nombre: para emojis estándar"
                }
            },
            context: {
                copy: "Copiar formato de emoji"
            },
            toast: {
                success: "¡Éxito! Formato de emoji copiado."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Añade un botón a los archivos de texto adjuntos para copiar su contenido",
            copied: "¡Copiado!",
            large: "Archivo demasiado grande para copiar.",
            copyFileContents: "Copiar contenido del archivo"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Copia los colores de degradado del perfil de otros al portapapeles.",
            copy: "Copiar colores del perfil",
            toast: {
                noColor: "¡No se han encontrado colores!",
                copied: "¡Colores del perfil copiados!",
                error: "¡Error al copiar los colores!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Copia la URL del estado al hacer clic derecho sobre él",
            toast: {
                copied: "URL copiada",
                error: "Error al copiar la URL, consulta la consola"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Añade la posibilidad de copiar y abrir enlaces de pegatinas (stickers)",
            context: {
                copy: "Copiar enlace",
                open: "Abrir enlace"
            },
            toast: {
                success: "¡Enlace copiado!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Añade un botón para copiar la mención de un usuario en el menú contextual.",
            context: {
                copy: "Copiar mención del usuario"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Añade la opción 'Copiar URL del usuario' al menú contextual.",
            context: {
                copy: "Copiar URL del usuario"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Utilidad para manejar y posiblemente recuperarse de bloqueos sin reiniciar",
            option: {
                attemptToPreventCrashes: {
                    label: "Intentar prevenir bloqueos",
                    description: "Si se debe intentar evitar que Discord se cierre inesperadamente."
                },
                attemptToNavigateToHome: {
                    label: "Navegar a Inicio al recuperar",
                    description: "Si se debe intentar volver a la pestaña de Inicio tras una recuperación."
                }
            },
            toast: {
                crashed: {
                    title: "¡Discord se ha bloqueado!",
                    body: "Vaya :( Discord ha fallado varias veces seguidas. ¡Haz clic para unirte al soporte!",
                    update: "Discord ha fallado... ¡pero hay una actualización de Plexcord que podría arreglarlo!",
                    recover: "Intentando recuperar... ¡Haz clic aquí para unirte al soporte!",
                    invalid: "Enlace de invitación no válido o caducado."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Usa Ctrl+Enter para enviar mensajes (personalizable)",
            option: {
                submitRule: {
                    label: "Regla de envío",
                    description: "Forma de enviar el mensaje",
                    ctrlEnter: "Ctrl+Enter (Enter para nueva línea)",
                    shiftEnter: "Shift+Enter (Enter para nueva línea)",
                    enter: "Enter (Shift+Enter para nueva línea; por defecto)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Enviar mensaje dentro de bloque de código",
                    description: "Si se debe permitir enviar el mensaje estando en medio de un bloque de código"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Añade un personaje animado que sigue a tu cursor.",
            modal: {
                furColor: "Color del pelaje",
                outlineColor: "Color del borde"
            },
            option: {
                buddy: {
                    label: "Compañero",
                    description: "Elige un compañero de cursor",
                    oneko: "Oneko",
                    fathorse: "Caballo gordo"
                },
                speed: {
                    label: "Velocidad",
                    description: "Velocidad del compañero",
                    invalid: "La velocidad debe ser mayor que 0"
                },
                fps: {
                    label: "Fotogramas por segundo",
                    description: "FPS del compañero",
                    invalid: "Los fotogramas deben ser mayores que 0"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Color del pelo",
                    description: "Color hexadecimal del pelaje para Oneko"
                },
                outlineColor: {
                    label: "Color del borde",
                    description: "Color hexadecimal del borde para Oneko"
                },
                fathorseSection: {
                    label: "Caballo gordo"
                },
                size: {
                    label: "Tamaño",
                    description: "Tamaño del caballo gordo",
                    invalid: "El tamaño debe ser mayor que 0"
                },
                fade: {
                    label: "Desvanecer",
                    description: "Si el caballo debe desvanecerse cuando el cursor está cerca"
                },
                freeroam: {
                    label: "Movimiento libre",
                    description: "Si el caballo debe deambular libremente cuando está inactivo"
                },
                shake: {
                    label: "Sacudir",
                    description: "Si el caballo debe sacudir la ventana al caminar"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Personaliza los iconos de las carpetas con cualquier imagen PNG",
            option: {
                solidIcon: {
                    label: "Icono sólido",
                    description: "Usa un fondo sólido detrás de la imagen"
                },
                folderIcons: {
                    label: "Iconos de carpetas",
                    description: "Ajustes de iconos de carpeta"
                }
            },
            modal: {
                change: "Cambia el tamaño del icono de la carpeta",
                save: "Guardar",
                unset: "Quitar",
                set: "Poner icono nuevo",
                hover: "Es posible que tengas que pasar el ratón sobre la carpeta para que se actualice."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Permite establecer el tiempo antes de que Discord pase a estado 'Ausente'",
            backOnline: "¡Hola de nuevo! Haz clic para ponerte en línea o en la X para seguir ausente.",
            exit: "Salir del estado ausente",
            option: {
                idleTimeout: {
                    label: "Tiempo de espera",
                    description: "Minutos antes de pasar a ausente (0 para desactivar auto-ausente)"
                },
                remainInIdle: {
                    label: "Permanecer ausente",
                    description: "Al volver, permanece como ausente hasta que confirmes que quieres estar en línea"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Añade una Rich Presence (Estado de juego) totalmente personalizable",
            goTo: "Ve al {{portal}} para crear una aplicación y obtener el ID.",
            upload: "Sube imágenes en la pestaña Rich Presence para obtener las claves.",
            image: "Si quieres usar un enlace, sube la imagen a {{imgur}} y copia la dirección de la imagen.",
            button: "No puedes ver tus propios botones, pero los demás sí los verán correctamente.",
            font: "Ciertos textos unicode ('fuentes' 𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘) pueden impedir que se muestre; usa letras normales.",
            placeholder: "Introduce un valor",
            select: "Selecciona una opción",
            error: {
                appIdInvalid: "El ID de la aplicación debe ser un número válido.",
                notice: "Aviso",
                sharing: "¡La difusión de actividad está desactivada, los demás no verán tu estado!",
                enable: "Activar",
                validStream: "El enlace de streaming debe ser una URL válida.",
                mustBeURL: "Debe ser una URL válida.",
                streamCharacters: "El enlace no debe superar los 512 caracteres.",
                dontUse: "No uses un link de Discord. Usa uno de Imgur.",
                imgur: "Debe ser un enlace directo (ej. https://i.imgur.com/...). Haz clic derecho y 'Copiar dirección de imagen'",
                tenor: "Debe ser un enlace directo (ej. https://media.tenor.com/...). Haz clic derecho y 'Copiar dirección de imagen'",
                required: "Este campo es obligatorio.",
                tooLong: "No debe superar los {{maxLength}} caracteres.",
                mustBeNumber: "Debe ser un número.",
                mustBePositive: "Debe ser un número positivo.",
                startTimeInvalid: "El tiempo de inicio debe ser mayor que 0.",
                endTimeInvalid: "El tiempo de finalización debe ser mayor que 0."
            },
            option: {
                appId: {
                    label: "ID de la aplicación",
                    description: "ID de la aplicación (obligatorio)"
                },
                appName: {
                    label: "Nombre de la aplicación",
                    description: "Nombre (obligatorio)"
                },
                details: {
                    label: "Detalles",
                    description: "Detalles (línea 1)"
                },
                detailsURL: {
                    label: "URL de detalles",
                    description: "URL de clic en detalles"
                },
                state: {
                    label: "Estado",
                    description: "Estado (línea 2)"
                },
                stateURL: {
                    label: "URL de estado",
                    description: "URL de clic en estado"
                },
                partySize: {
                    label: "Tamaño del grupo",
                    description: "Tamaño actual (usar con Máximo)"
                },
                partyMax: {
                    label: "Tamaño máximo",
                    description: "Máximo del grupo"
                },
                type: {
                    label: "Tipo de actividad",
                    description: "Tipo de actividad",
                    playing: "Jugando",
                    streaming: "Transmitiendo",
                    listening: "Escuchando",
                    watching: "Viendo",
                    competing: "Compitiendo"
                },
                streamLink: {
                    label: "Enlace de Stream",
                    description: "Link de Twitch o YouTube (solo para Transmitiendo)"
                },
                timestampMode: {
                    label: "Modo de tiempo",
                    description: "Qué debe mostrar el tiempo",
                    none: "Ninguno",
                    sinceDiscordOpen: "Desde que se abrió Discord",
                    sameAsCurrentTime: "Igual a tu hora actual",
                    custom: "Hora personalizada"
                },
                startTime: {
                    label: "Inicio (ms)",
                    description: "Marca de tiempo inicial en milisegundos"
                },
                endTime: {
                    label: "Fin (ms)",
                    description: "Marca de tiempo final en milisegundos"
                },
                imageBig: {
                    label: "Clave de imagen grande",
                    description: "Clave de la imagen subida en el portal"
                },
                imageBigTooltip: {
                    label: "Texto imagen grande",
                    description: "Texto flotante de la imagen grande"
                },
                imageBigURL: {
                    label: "URL imagen grande",
                    description: "URL al hacer clic en imagen grande"
                },
                imageSmall: {
                    label: "Clave de imagen pequeña",
                    description: "Clave de la imagen pequeña"
                },
                imageSmallTooltip: {
                    label: "Texto imagen pequeña",
                    description: "Texto flotante de la imagen pequeña"
                },
                imageSmallURL: {
                    label: "URL imagen pequeña",
                    description: "URL al hacer clic en imagen pequeña"
                },
                buttonOneText: {
                    label: "Texto Botón 1",
                    description: "Texto del primer botón"
                },
                buttonOneURL: {
                    label: "URL Botón 1",
                    description: "Enlace del primer botón"
                },
                buttonTwoText: {
                    label: "Texto Botón 2",
                    description: "Texto del segundo botón"
                },
                buttonTwoURL: {
                    label: "URL Botón 2",
                    description: "Enlace del segundo botón"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Personaliza los sonidos de Discord.",
            search: "Buscar sonidos",
            placeholder: "Buscar por nombre o ID",
            import: "Importar",
            export: "Exportar",
            reset: "Restablecer todo",
            debug: "Depurar",
            toast: {
                error: "Error al cargar el archivo de sonido",
                exported: "Exportados {{count}} ajustes (archivos de audio no incluidos)",
                imported: "Ajustes importados con éxito",
                importError: "Error al importar. Consulta la consola.",
                reset: "¡Todos los sonidos restablecidos!",
                overrideDescription: "Sustitución para {{soundName}}",
                previewSound: "Error al reproducir sonido.",
                playing: "Error al reproducir. El archivo podría estar corrupto.",
                invalidFile: "No hay archivo para previsualizar",
                uploaded: "Archivo subido: {{fileName}}",
                uploadedError: "Error al subir: {{error}}",
                invalidExtension: "Tipo de archivo no válido. Sube un archivo de audio.",
                uploading: "Subiendo archivo...",
                deleted: "Archivo eliminado",
                deleteError: "Error al eliminar archivo.",
                loadingError: "Error al cargar archivo de sonido"
            },
            button: {
                preview: "Probar",
                stop: "Parar",
                volume: "Volumen",
                soundSource: "Origen del sonido",
                customFile: "Archivo personalizado",
                uploadNew: "Subir nuevo",
                delete: "Eliminar seleccionado"
            },
            option: {
                default: "Por defecto",
                custom: "Personalizado",
                select: "Selecciona un archivo..."
            },
            type: {
                activityEnd: "Fin de actividad",
                activityLaunch: "Inicio de actividad",
                activityUserJoin: "Usuario se une a actividad",
                activityUserLeft: "Usuario deja actividad",
                asmrMessage: "Mensaje ASMR",
                bitMessage: "Mensaje de Bits",
                bopMessage: "Mensaje Bop",
                callCalling: "Llamada saliente",
                callRinging: "Llamada entrante",
                clipError: "Error de Clip",
                clipSave: "Clip guardado",
                ddrDown: "DDR Abajo",
                ddrLeft: "DDR Izquierda",
                ddrRight: "DDR Derecha",
                ddrUp: "DDR Arriba",
                deafen: "Enmudecer",
                discodo: "Discodo",
                disconnect: "Desconectar",
                duckyMessage: "Mensaje de Ducky",
                hangStatusSelect: "Selección de estado de ánimo",
                highfiveClap: "Choca esos cinco (Aplauso)",
                highfiveWhistle: "Choca esos cinco (Silbido)",
                humanMan: "Hombre Humano",
                lofiMessage: "Mensaje LoFi",
                mention1: "Mención 1 (@rol)",
                mention2: "Mención 2 (@everyone)",
                mention3: "Mención 3 (@here)",
                message1: "Mensaje 1 (Genérico)",
                message2: "Mensaje 2 (Respuesta en servidor)",
                message3: "Mensaje 3 (MD y Grupos)",
                mute: "Silenciar",
                overlayUnlock: "Desbloqueo de superposición",
                poggermodeAchievement: "Logro de Modo Pogger",
                poggermodeApplause: "Aplauso de Modo Pogger",
                poggermodeEnabled: "Modo Pogger activado",
                poggermodeMessage: "Mensaje de Modo Pogger",
                pttStart: "PTT Inicio",
                pttStop: "PTT Fin",
                reconnect: "Reconectar",
                robotMan: "Hombre Robot",
                stageWaiting: "Espera de Stage",
                streamEnded: "Transmisión finalizada",
                streamStarted: "Transmisión iniciada",
                streamUserJoined: "Usuario se une a transmisión",
                streamUserLeft: "Usuario deja transmisión",
                success: "Éxito",
                undeafen: "Quitar enmudecer",
                unmute: "Quitar silencio",
                userJoin: "Usuario entra",
                userLeave: "Usuario sale",
                userMoved: "Usuario movido",
                vibingWumpus: "Wumpus disfrutando"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Marcas de tiempo personalizadas en mensajes y tooltips",
            demo: {
                cozy: "Haz clic para cambiar al formato Cozy",
                compact: "Haz clic para cambiar al formato Compacto",
                lastWeek: "Este mensaje se envió la semana pasada",
                hover: "Pasa el ratón sobre la hora para ver el tooltip",
                edit: "Edita los formatos abajo para ver el cambio aquí"
            },
            modal: {
                title: "Cómo usar:",
                moment: "Documentación de Moment.js",
                hint: "Además, puedes usar esto en tus entradas:",
                calendar: "permite formato de fecha dinámico como",
                today: "Hoy",
                yesterday: "Ayer",
                relative: "te da tiempos como",
                relativeTime: "hace 4 horas",
                preview: "Previsualización",
                format: "Formatos de calendario",
                howTo: "Cómo formatear el valor [calendar] si se usa arriba."
            },
            option: {
                formats: {
                    label: "Formatos",
                    description: "Personaliza los formatos de hora"
                },
                cozyFormat: {
                    label: "Modo Cozy",
                    description: "Formato de hora en mensajes (modo Cozy)"
                },
                compactFormat: {
                    label: "Modo Compacto",
                    description: "Formato de hora en mensajes (modo Compacto) y al pasar el ratón"
                },
                tooltipFormat: {
                    label: "Tooltip",
                    description: "Formato de hora al dejar el cursor encima"
                },
                ariaLabelFormat: {
                    label: "Etiqueta Aria",
                    description: "Formato para lectores de pantalla"
                },
                sameDayFormat: {
                    label: "Mismo día",
                    description: "Formato [calendar] para hoy",
                    default: "[Hoy a las] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Día anterior",
                    description: "Formato [calendar] para ayer",
                    default: "[Ayer a las] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "Semana pasada",
                    description: "Formato [calendar] para la semana pasada"
                },
                sameElseFormat: {
                    label: "Resto de fechas",
                    description: "Formato [calendar] para fechas más antiguas"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "¡Añade un color personalizado a cualquier usuario! Recomendado usar con typingTweaks.",
            option: {
                dmList: {
                    label: "Lista de MD",
                    description: "Los usuarios con color personalizado tendrán su nombre coloreado en la lista de mensajes directos"
                },
                colorInServers: {
                    label: "Color en servidores",
                    description: "Si se deben cambiar los colores de nombre dentro de los servidores"
                }
            },
            context: {
                setColor: "Establecer color"
            },
            modal: {
                custom: "Color personalizado",
                pick: "Elige un color",
                delete: "Eliminar entrada",
                save: "Guardar"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "Reduce el sensacionalismo en los títulos y miniaturas de YouTube integrados, gracias a DeArrow",
            option: {
                hideButton: {
                    label: "Ocultar botón",
                    description: "Oculta el botón de DeArrow en los vídeos integrados de YouTube"
                },
                replaceElements: {
                    label: "Reemplazar elementos",
                    description: "Elige qué elementos del vídeo integrado se reemplazarán",
                    everything: "Todo (Títulos y miniaturas)",
                    title: "Títulos",
                    thumbnail: "Miniaturas"
                },
                dearrowByDefault: {
                    label: "DeArrow por defecto",
                    description: "Aplica DeArrow a los vídeos automáticamente"
                }
            },
            tooltip: {
                dearrowed: "Este vídeo ha sido procesado por DeArrow; haz clic para restaurar",
                dearrow: "Haz clic para aplicar DeArrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Limpia la interfaz de Discord eliminando elementos no esenciales como efectos de perfil, pestañas de tienda, mejoras (boosts) y más.",
            option: {
                userProfileHeader: {
                    label: "Perfil de usuario"
                },
                removeNameplate: {
                    label: "Eliminar placa de nombre",
                    description: "Elimina las placas de nombre."
                },
                removeProfileEffect: {
                    label: "Eliminar efecto de perfil",
                    description: "Elimina los efectos de animación al abrir un perfil."
                },
                removeClanTag: {
                    label: "Eliminar etiqueta de clan",
                    description: "Elimina las etiquetas de clan."
                },
                alwaysShowUsername: {
                    label: "Mostrar siempre nombre de usuario",
                    description: "Muestra siempre el nombre de usuario en lugar del estado."
                },
                accessibilityNotice: {
                    label: "Aviso de accesibilidad",
                    description: "Discord ya incluye una opción de estilo de nombre de usuario en los ajustes de Accesibilidad."
                },
                friendsListHeader: {
                    label: "Sobre la lista de Amigos/MD"
                },
                removeShopAboveDM: {
                    label: "Eliminar Tienda sobre MD",
                    description: "Elimina el acceso a la tienda situado sobre la lista de mensajes directos."
                },
                removeQuestsAboveDM: {
                    label: "Eliminar Misiones sobre MD",
                    description: "Elimina las misiones situadas sobre la lista de mensajes directos."
                },
                miscHeader: {
                    label: "Varios"
                },
                removeServerBoostInfo: {
                    label: "Eliminar info. de Mejoras de servidor",
                    description: "Elimina la información de mejoras de servidor sobre la lista de canales."
                },
                removeBillingSettings: {
                    label: "Eliminar ajustes de facturación",
                    description: "Oculta las opciones de facturación."
                },
                removeGiftButton: {
                    label: "Eliminar botón de regalo",
                    description: "Elimina el botón de regalo en la barra de chat."
                },
                removeUnavailableEmojiPicker: {
                    label: "Eliminar selector de emojis no disponibles",
                    description: "Elimina las categorías de emojis no disponibles del selector."
                },
                removeAudioMenus: {
                    label: "Eliminar menús de audio",
                    description: "Elimina los menús desplegables junto a los botones de silenciar y ensordecer."
                },
                removeButtonTooltips: {
                    label: "Eliminar descripciones emergentes (tooltips)",
                    description: "Elimina los textos flotantes de los botones."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Decodifica el contenido Base64 de cualquier mensaje y lo copia al portapapeles.",
            right: {
                decode: "Copiar decodificado (Clic izquierdo) / Decodificar Base64 (Clic derecho)",
                copy: "Decodificar Base64 (Clic izquierdo) / Copiar decodificado (Clic derecho)"
            },
            option: {
                clickMethod: {
                    label: "Método de clic",
                    description: "Cambia el botón para decodificar el contenido Base64 de cualquier mensaje.",
                    left: "Clic izquierdo para decodificar.",
                    right: "Clic derecho para decodificar."
                }
            },
            modal: {
                title: "Contenido Base64 decodificado",
                content: "Contenido decodificado",
                copy: "Copiar contenido decodificado {{index}}",
                copied: "¡Contenido decodificado copiado al portapapeles!"
            }
        },
        decor: {
            name: "Decor",
            description: "Crea y usa tus propias decoraciones de avatar personalizadas o elige tus favoritas entre los ajustes preestablecidos.",
            presetPart: "Parte del ajuste preestablecido {{name}}",
            createdBy: "Creado por {{author}}",
            copy: "Copiar ID del ajuste",
            file: "Archivo",
            your: {
                title: "Tus decoraciones",
                subtitle: "Puedes eliminar tus propias decoraciones haciendo clic derecho sobre ellas."
            },
            option: {
                changeDecoration: {
                    label: "Cambiar decoración",
                    description: "Activa Decor y reinicia el cliente para cambiar tu decoración de avatar.",
                    also: "También puedes acceder a las decoraciones de Decor desde la página de {{profiles}}.",
                    profiles: "Perfiles"
                },
                baseUrl: {
                    label: "URL base",
                    description: "URL de la API de Decor"
                },
                agreedToGuidelines: {
                    label: "Directrices aceptadas",
                    description: "Has aceptado las directrices de uso"
                }
            },
            context: {
                decorationOptions: "Opciones de decoración",
                copyHash: "Copiar hash de la decoración",
                deleteDecoration: "Eliminar decoración"
            },
            alert: {
                delete: {
                    title: "Eliminar decoración",
                    body: "¿Estás seguro de que quieres eliminar {{decoration}}?",
                    confirm: "Eliminar",
                    cancel: "Cancelar"
                },
                logout: {
                    title: "Cerrar sesión",
                    body: "¿Estás seguro de que quieres cerrar sesión en Decor?",
                    confirm: "Cerrar sesión",
                    cancel: "Cancelar"
                }
            },
            button: {
                change: "Cambiar decoración",
                remove: "Quitar decoración",
                apply: "Aplicar",
                cancel: "Cancelar",
                browse: "Explorar",
                submit: "Enviar para revisión",
                continue: "Continuar",
                back: "Volver"
            },
            tooltip: {
                pendingReview: "Ya tienes una decoración pendiente de revisión",
                pending: "Pendiente de revisión"
            },
            join: {
                tooltip: "Únete al servidor de Discord de Decor para recibir notificaciones sobre la revisión de tu decoración y nuevos lanzamientos",
                button: "Servidor de Discord"
            },
            create: {
                title: "Crear decoración",
                notViolate: "Asegúrate de que tu decoración no infrinja {{guidelines}} antes de enviarla.",
                guidelines: "las directrices",
                file: "El archivo debe ser APNG o PNG.",
                fileHolder: "Seleccionar archivo",
                name: "Este nombre se usará para referirse a la decoración.",
                nameHolder: "Cubo de compañía",
                nameTitle: "Nombre"
            },
            help: {
                update: "Para recibir actualizaciones sobre la revisión de tu decoración, únete a {{server}} y permite los mensajes directos.",
                server: "Servidor de Discord de Decor"
            },
            guidelines: {
                hold: "Espera un momento",
                suspended: "Al enviar una decoración, aceptas {{guidelines}}. No leer estas reglas puede resultar en la suspensión de tu cuenta para crear más decoraciones.",
                guidelines: "las directrices"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin para hacer capturas de pantalla de temas: censura imágenes y texto identificativos.",
            toolbox: {
                toggle: "Alternar modo demostración"
            },
            keycode: "Para cambiar tu combinación de teclas, ¡revisa {{keycode}}!",
            this: "esta herramienta",
            okay: "¡Entendido!",
            option: {
                keyBind: {
                    label: "Atajo de teclado",
                    description: "Tecla para alternar el tema al ser pulsada"
                },
                soundVolume: {
                    label: "Volumen de sonido",
                    description: "Volumen del sonido al alternar (0 para desactivar)"
                },
                showConfirmationModal: {
                    label: "Mostrar ventana de confirmación",
                    description: "Muestra una ventana para recordarte el atajo"
                }
            },
            switch: {
                note: "Puedes volver a activar este ajuste más tarde",
                disable: "¿Desactivar ventana?"
            },
            shortcut: "¡Esto censurará todo el texto! Para desactivarlo, recuerda el atajo:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Plugin Dev Companion. Por favor, informa de cualquier fallo o comportamiento extraño a MutanPlex, ya sea por mención o MD. ¡Gracias!",
            reconnect: "Reconectar",
            option: {
                notifyOnAutoConnect: {
                    label: "Notificar al autoconectar",
                    description: "Si se debe notificar cuando Dev Companion se conecte automáticamente."
                },
                usePatchedModule: {
                    label: "Usar módulo parcheado",
                    description: "En peticiones de extracción, responder con el módulo parcheado actual (si existe) en lugar del original."
                },
                reloadAfterToggle: {
                    label: "Recargar tras alternar",
                    description: "Recarga después de recibir un comando de 'activar/desactivar plugin'."
                }
            },
            toast: {
                title: "Dev Companion conectado",
                connected: "Conectado a WebSocket",
                disconnected: "Dev Companion desconectado",
                error: "Error de Dev Companion",
                reload: "Reinicio necesario",
                failed: "Error al iniciar dependencias: {{failures}}",
                close: "Cerrar",
                stopping: "Error al detener el plugin {{plugin}}",
                starting: "Error al iniciar el plugin {{plugin}}",
                noMessage: "Sin mensaje de error",
                noReason: "Sin motivo proporcionado"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Evita que se te expulse automáticamente de una llamada de voz de MD tras 3 minutos de inactividad o que se te mueva a un canal AFK."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Desactiva las cámaras en una llamada por defecto"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Activa el banner de desarrollador de Discord, que muestra el ID de compilación",
            about: "Formato del banner de desarrollador. Puedes usar las siguientes variables:",
            preview: "Vista previa:",
            empty: "El formato no puede estar vacío.",
            variables: {
                discord: {
                    title: "Variables de Discord",
                    icon: "Icono de Discord",
                    banner: "Icono del banner de desarrollador",
                    channel: "Canal de compilación (ej. Stable)",
                    build: "Número de compilación (ej. 123456)",
                    hash: "Hash de compilación (ej. 123456)"
                },
                plexcord: {
                    title: "Variables de Plexcord",
                    icon: "Icono de Plexcord",
                    name: "Nombre de Plexcord",
                    version: "Versión de Plexcord (ej. 1.0.0)",
                    hash: "Hash de compilación de Plexcord",
                    platform: "Plataforma en la que se ejecuta (ej. Dev Build)"
                },
                plextron: {
                    title: "Variables específicas de Plextron",
                    hashShort: "Hash corto de Plextron",
                    platformType: "Tipo de plataforma de Plextron"
                },
                client: {
                    title: "Variables del cliente",
                    icon: "Icono de escritorio",
                    name: "Nombre del cliente (ej. Discord Canary)",
                    version: "Versión del cliente (ej. 1.0.0)",
                },
                electron: {
                    title: "Variables de Electron",
                    icon: "Icono de Electron",
                    version: "Versión de Electron"
                },
                chromium: {
                    title: "Variables de Chromium",
                    icon: "Icono de Chromium",
                    version: "Versión del motor Chromium"
                },
                misc: {
                    title: "Variables misceláneas",
                    newline: "Carácter de nueva línea"
                }
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Te advierte si tu mensaje contiene algún término incluido en la lista de AutoMod",
            alert: {
                title: "¡Espera!",
                content: "Tu mensaje contiene un término en la lista de AutoMod (Término: '{{trigger}}').",
                content2: "Hay una alta probabilidad de que tu mensaje sea bloqueado y termines moderado por un administrador.",
                confirm: "Enviar de todos modos",
                cancel: "Cancelar"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Redondea siempre las marcas de tiempo relativas hacia abajo (ej. 7.6 años aparecerá como 7 años en lugar de 8)"
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Añade la función de arrastrar y soltar a tus emojis favoritos"
        },
        dragify: {
            name: "Dragify",
            description: "Arrastra usuarios, canales o servidores al chat para insertar menciones o invitaciones.",
            option: {
                userOutput: {
                    label: "Salida de usuario",
                    description: "Resultado al soltar un usuario.",
                    mention: "Mención",
                    id: "ID de usuario"
                },
                channelOutput: {
                    label: "Salida de canal",
                    description: "Resultado al soltar un canal.",
                    mention: "Mención #canal",
                    link: "Enlace al canal",
                },
                inviteExpireAfter: {
                    label: "Expiración de invitación",
                    description: "Tiempo de validez de la invitación",
                    never: "Nunca",
                    thirtyMinutes: "30 minutos",
                    oneHour: "1 hora",
                    sixHours: "6 horas",
                    twelveHours: "12 horas",
                    oneDay: "1 día",
                    sevenDays: "7 días"
                },
                inviteMaxUses: {
                    label: "Usos máximos",
                    description: "Límite de usos de la invitación",
                    noLimit: "Sin límite",
                    one: "1 uso",
                    five: "5 usos",
                    ten: "10 usos",
                    twentyFive: "25 usos",
                    fifty: "50 usos",
                    hundred: "100 usos"
                },
                inviteTemporaryMembership: {
                    label: "Membresía temporal",
                    description: "Concede membresía temporal al unirse.",
                },
                reuseExistingInvites: {
                    label: "Reutilizar invitación existente",
                    description: "Reutiliza una invitación previa en lugar de crear una nueva."
                },
                allowChatBodyDrop: {
                    label: "Permitir soltar en el cuerpo del chat",
                    description: "Permite soltar elementos en cualquier parte del chat para insertar texto."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify no pudo procesar el elemento soltado.",
                },
                invite: {
                    created: "Invitación creada.",
                    unable: "No se pudo crear la invitación.",
                    noChannel: "No hay canales disponibles para crear invitaciones.",
                }
            },
            ghost: {
                user: "Usuario",
                server: "Servidor",
                dm: "Mensajes directos",
                badge: {
                    channel: "canal",
                    thread: "hilo",
                    voice: "voz",
                    forum: "foro",
                    media: "multimedia",
                    announcement: "anuncio",
                    dm: "md",
                    user: "usuario",
                    server: "servidor"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Resalta e inspecciona elementos de la interfaz fácilmente.",
            modal: {
                recording: "Grabando...",
                reset: "Restablecer"
            },
            option: {
                keybind: {
                    label: "Atajo de teclado",
                    description: "Alternar resaltador"
                },
                showClasses: {
                    label: "Mostrar clases",
                    description: "Muestra los nombres de las clases CSS en la descripción emergente"
                },
                showId: {
                    label: "Mostrar ID",
                    description: "Muestra el atributo ID del elemento"
                },
                showFont: {
                    label: "Mostrar fuente",
                    description: "Muestra la familia y el tamaño de fuente calculados"
                },
                showPadding: {
                    label: "Mostrar relleno (padding)",
                    description: "Muestra los valores de relleno del elemento"
                },
                showMargin: {
                    label: "Mostrar margen",
                    description: "Muestra los valores de margen del elemento"
                },
                showBorderRadius: {
                    label: "Mostrar radio de borde",
                    description: "Muestra los valores de border-radius"
                },
                showPosition: {
                    label: "Mostrar posición",
                    description: "Muestra el tipo de posición CSS y el z-index"
                },
                showDisplay: {
                    label: "Mostrar display",
                    description: "Muestra el tipo de display junto con propiedades flex o grid"
                }
            },
            toast: {
                copied: {
                    color: "¡Color copiado al portapapeles!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "Reproduce sonidos del panel de sonidos cuando te desconectas de voz.",
            button: "Establecer como sonido de salida global",
            toast: {
                failedToPlay: "¡Vaya! Algo salió mal."
            },
            option: {
                soundGuildId: {
                    label: "ID del servidor de sonido",
                    description: "Selecciona el servidor que contiene el sonido.",
                    placeholder: "Selecciona un servidor..."
                },
                soundId: {
                    label: "ID del sonido",
                    description: "Introduce el ID del sonido que quieres reproducir.",
                    placeholder: "Introduce el ID del sonido..."
                }
            }
        },
        experiments: {
            name: "Experimentos",
            description: "¡Activa el acceso a experimentos y otras funciones de desarrollador en Discord!",
            modal: {
                about: {
                    title: "Más información",
                    body: "Puedes abrir las DevTools de Discord mediante {{key}}"
                },
                warning: {
                    title: "¡¡Espera!!",
                    body: "Los experimentos son funciones de Discord no lanzadas oficialmente. Pueden no funcionar, romper el cliente o incluso provocar la desactivación de tu cuenta.",
                    notReponsible: "Usa los experimentos solo si sabes lo que haces. Plexcord no se hace responsable de los daños causados.",
                    useAtOwnRisk: "Si no sabes qué hace un experimento, ignóralo. No nos preguntes; probablemente nosotros tampoco lo sepamos.",
                    serverSideFeatures: "No, no puedes usar funciones de servidor como marcar la casilla 'Send to Client'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Menú Dev en barra de herramientas",
                    description: "Cambia el botón de Ayuda (?) de la barra superior por el menú de desarrollador de Discord"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Permite exportar mensajes a archivos: mensajes individuales, todos los de un usuario o todo un canal",
            option: {
                maxMessages: {
                    label: "Máximo de mensajes",
                    description: "Número máximo de mensajes a exportar (0 = sin límite)"
                },
                includeAttachments: {
                    label: "Incluir archivos adjuntos",
                    description: "Incluye información de adjuntos en la exportación"
                },
                includeEmbeds: {
                    label: "Incluir integraciones (embeds)",
                    description: "Incluye información de los embeds"
                },
                includeReactions: {
                    label: "Incluir reacciones",
                    description: "Incluye información de las reacciones"
                },
                includeComponents: {
                    label: "Incluir componentes",
                    description: "Incluye botones y otros componentes de mensajes"
                }
            },
            message: {
                invalid: "Mensaje no válido (sin autor)",
                unknownUser: "Usuario desconocido",
                botEmbed: "Mensaje con embed de bot",
                attachments: "Archivos adjuntos",
                unknown: "Desconocido",
                noUrl: "Sin URL",
                embeds: "Embeds",
                title: "Título",
                description: "Descripción",
                url: "URL",
                footer: "Pie de página",
                author: "Autor",
                fields: "Campos",
                components: "Componentes",
                component: "Componente",
                interactiveElement: "Elemento interactivo",
                reactions: "Reacciones",
                errorFormatting: "Error al formatear el mensaje",
                unknownError: "Error desconocido",
                header: "{{titlePrefix}} {{displayName}} en {{channelName}}",
                from: "Mensajes de",
                direct: "Mensajes directos",
                exported: "Exportado el",
                total: "Total de mensajes"
            },
            toast: {
                export: {
                    title: "Exportar mensajes",
                    body: "Error al exportar el mensaje"
                },
                noMessages: {
                    title: "Exportar mensajes",
                    notFoundUser: "No se encontraron mensajes de este usuario en este canal",
                    notFoundChannel: "No se encontraron mensajes en este canal"
                },
                failed: {
                    title: "Exportar mensajes",
                    body: "Error al exportar mensajes"
                },
                userNotFound: {
                    title: "Exportar mensajes",
                    body: "Usuario no encontrado"
                },
                complete: {
                    title: "Exportación completada",
                    saved: "Archivo guardado",
                    downloaded: "Archivo descargado",
                    messages: "mensajes"
                }
            },
            context: {
                exportMessage: "Exportar este mensaje",
                exportAll: "Exportar todos los mensajes de {{user}}",
                user: "Usuario",
                exportAllChannel: "Exportar todos los mensajes del canal"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Te permite clonar emojis y pegatinas a tu propio servidor (haz clic derecho sobre ellos)",
            modal: {
                title: "Nombre personalizado",
                invalidName: "El nombre debe tener entre 2 y 32 caracteres y solo contener caracteres alfanuméricos"
            },
            toast: {
                success: "¡{{name}} clonado con éxito en {{guild}}!",
                yourServer: "tu servidor",
                failed: "Error al clonar: ",
                console: "Algo salió mal (¡revisa la consola!)"
            },
            context: {
                clone: "Clonar {{type}}",
                cloneName: "Clonar {{data}}"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Pausa el cliente al pulsar F8 si las DevTools (+ puntos de interrupción) están abiertas."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Permite enviar emojis/pegatinas falsos, usar temas de Nitro y transmitir en calidad Nitro",
            option: {
                enableEmojiBypass: {
                    label: "Activar bypass de emojis",
                    description: "Permite enviar emojis falsos (también ignora la falta de permisos para usar emojis personalizados)"
                },
                emojiSize: {
                    label: "Tamaño de emoji",
                    description: "Tamaño de los emojis al enviarlos"
                },
                transformEmojis: {
                    label: "Transformar emojis",
                    description: "Si se deben transformar los emojis falsos en reales"
                },
                enableStickerBypass: {
                    label: "Activar bypass de pegatinas",
                    description: "Permite enviar pegatinas falsas (también ignora la falta de permisos para usar pegatinas)"
                },
                stickerSize: {
                    label: "Tamaño de pegatina",
                    description: "Tamaño de las pegatinas al enviarlas"
                },
                transformStickers: {
                    label: "Transformar pegatinas",
                    description: "Si se deben transformar las pegatinas falsas en reales"
                },
                transformCompoundSentence: {
                    label: "Transformar oraciones compuestas",
                    description: "Si se deben transformar pegatinas y emojis falsos en oraciones compuestas (frases con más contenido que solo el enlace del emoji o pegatina)"
                },
                enableStreamQualityBypass: {
                    label: "Activar bypass de calidad de transmisión",
                    description: "Permite transmitir en calidad Nitro"
                },
                useStickerHyperLinks: {
                    label: "Usar hipervínculos en pegatinas",
                    description: "Si se deben usar hipervínculos al enviar pegatinas falsas"
                },
                useEmojiHyperLinks: {
                    label: "Usar hipervínculos en emojis",
                    description: "Si se deben usar hipervínculos al enviar emojis falsos"
                },
                hyperLinkText: {
                    label: "Texto del hipervínculo",
                    description: "Qué texto debe usar el hipervínculo. {{NAME}} se reemplazará por el nombre del emoji/pegatina."
                },
                disableEmbedPermissionCheck: {
                    label: "Desactivar comprobación de permiso de enlaces",
                    description: "Si se debe desactivar la comprobación del permiso para insertar enlaces al enviar emojis y pegatinas falsos"
                }
            },
            modal: {
                sticker: "Esta es una pegatina de FakeNitro; se renderiza como real solo para ti. Los usuarios sin el plugin la verán como un enlace.",
                emoji: "Este es un emoji de FakeNitro; se renderiza como real solo para ti. Los usuarios sin el plugin lo verán como un enlace."
            },
            alert: {
                notice: {
                    title: "¡Espera!",
                    body: "Estás intentando enviar/editar un mensaje que contiene un emoji o pegatina de FakeNitro; sin embargo, no tienes permiso para insertar enlaces en este canal. ¿Seguro que quieres enviar este mensaje? Tus elementos de FakeNitro aparecerán solo como un enlace.",
                    footer: "Puedes desactivar esta alerta en los ajustes de FakeNitro",
                    confirm: "Enviar de todos modos",
                    cancel: "Cancelar",
                    secondaryConfirm: "No volver a mostrar"
                },
                apngSticker: {
                    title: "¡Espera!",
                    body: "No puedes enviar este mensaje porque contiene una pegatina animada de FakeNitro y no tienes permiso para adjuntar archivos en este canal. Por favor, quita la pegatina para continuar."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Permite tematizar tu perfil ocultando los colores en tu biografía mediante codificación invisible 3y3",
            button: {
                copy: "Copiar 3y3"
            },
            modal: {
                usage: "Uso",
                preview: "Vista previa",
                intro: "Tras activar este plugin, verás colores personalizados en los perfiles de otras personas que usen plugins compatibles.",
                setColor: "Para configurar tus propios colores:",
                step1: "• Usa los selectores de abajo para elegir tus colores",
                step2: "• Haz clic en el botón {{copy}}",
                step3: "• Pega el texto invisible en cualquier parte de tu biografía",
                pickers: "Selectores de color",
                primary: "Primario",
                accent: "Acento"
            },
            option: {
                nitroFirst: {
                    label: "Priorizar Nitro",
                    description: "Fuente de color predeterminada si ambas están presentes",
                    nitro: "Colores de Nitro",
                    fake: "Colores falsos"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Permite tematizar perfiles y añadir efectos ocultando colores y efectos en tu biografía mediante codificación invisible 3y3",
            option: {
                prioritizeNitro: {
                    label: "Priorizar Nitro",
                    description: "Fuente que se debe priorizar",
                    nitro: "Nitro",
                    aboutMe: "Sobre mí"
                },
                hideBuilder: {
                    label: "Ocultar constructor",
                    description: "Oculta el constructor FPTE en las páginas de ajustes de Perfil de usuario y Perfiles de servidor"
                }
            },
            modal: {
                primary: "Primario",
                accent: "Acento",
                effect: "Efecto",
                usage: {
                    title: "Uso",
                    intro: "Tras activar este plugin, verás colores de tema y efectos personalizados en los perfiles de otros usuarios que usen este plugin.",
                    setColor: "Para configurar tus propios colores y efectos:",
                    step1: "Ve a los ajustes de tu perfil",
                    step2: "Usa el constructor FPTE para elegir los colores y el efecto de tu tema",
                    step3: "Haz clic en el botón {{copy}}",
                    step4: "Pega el texto invisible en cualquier parte de tu biografía"
                }
            },
            toast: {
                copied: "¡FPTE copiado al portapapeles!",
                empty: "¡El constructor FPTE está vacío; nada que copiar!"
            },
            button: {
                copyFPTE: "Copiar FPTE",
                reset: "Restablecer",
                preview: "Vista previa del constructor FPTE",
                buildBackwards: "Crear FPTE con retrocompatibilidad",
                moreCharacters: "Usará más caracteres"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Añade un icono de papelera para borrar canales rápidamente",
            option: {
                keyBind: {
                    label: "Atajo de teclado",
                    description: "Tecla para alternar la papelera al ser pulsada."
                },
                reqCtrl: {
                    label: "Requerir Control",
                    description: "Requiere mantener pulsada la tecla Control."
                },
                reqShift: {
                    label: "Requerir Mayús (Shift)",
                    description: "Requiere mantener pulsada la tecla Mayús."
                },
                reqAlt: {
                    label: "Requerir Alt",
                    description: "Requiere mantener pulsada la tecla Alt."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "Coloca tus emojis favoritos primero en el autocompletado y ofrece alias para emojis.",
            option: {
                aliases: {
                    label: "Alias",
                    description: "Gestiona tus alias de emojis."
                },
                clearAll: {
                    label: "Borrar todo",
                    description: "Elimina todos los alias."
                }
            },
            modal: {
                clear: {
                    title: "Borrar todos los alias",
                    description: "Esto eliminará cada uno de los alias de emojis que has guardado.",
                    confirm: "Borrar todos los alias"
                },
                set: {
                    title: "Establecer alias",
                    description: "Establece un alias para {{emoji}}",
                    placeholder: "Alias, ej. 'feliz'",
                    save: "Guardar",
                    error: "Alias duplicado"
                }
            },
            toast: {
                set: "Alias establecido para {{emoji}}",
                clearAll: "Se han borrado todos los alias de emojis",
                failedDeleted: "Error al borrar los alias",
                removed: "Alias eliminado: {{alias}}",
                failedRemove: "Error al eliminar el alias",
                duplicate: "Alias duplicado",
                failedSave: "Error al guardar el alias."
            },
            button: {
                edit: "Editar alias",
                set: "Establecer alias"
            }
        },
        favoriteGifSearch: {
            name: "FavouriteGifSearch",
            description: "Añade una barra de búsqueda a tus GIFs favoritos.",
            placeholder: "Buscar GIFs favoritos",
            option: {
                searchOption: {
                    label: "Opción de búsqueda",
                    description: "La parte de la URL en la que quieres buscar",
                    url: "URL completa",
                    path: "Solo ruta (/un-gif.gif)",
                    hostandpath: "Host y ruta (tenor.com un-gif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "FavouriteAnything",
            description: "Añade cualquier imagen a favoritos"
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Añade un botón de descarga en la esquina superior derecha de los archivos"
        },
        findReply: {
            name: "FindReply",
            description: "Salta a la respuesta más antigua de un mensaje en un canal (permite seguir conversaciones pasadas más fácilmente).",
            context: {
                jump: "Saltar a la respuesta"
            },
            toast: {
                navigate: "Usa el panel inferior para navegar entre respuestas.",
                container: "No se pudo encontrar el elemento contenedor.",
                couldntFind: "No se pudo encontrar el mensaje de respuesta."
            },
            option: {
                includePings: {
                    label: "Incluir menciones",
                    description: "También buscará mensajes que mencionen (@) directamente al autor"
                },
                includeAuthor: {
                    label: "Incluir autor",
                    description: "También buscará mensajes que respondan al autor en general, no solo a ese mensaje exacto"
                },
                hideButtonIfNoReply: {
                    label: "Ocultar botón si no hay respuestas",
                    description: "Oculta el botón si el mensaje no tiene respuestas"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Elimina el hueco entre los bloques de código y el texto que hay debajo"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Corrige las extensiones de archivos renombrándolas a un formato compatible si es posible"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Mejora la calidad de las imágenes forzando el uso de la fuente original",
            option: {
                originalImagesInChat: {
                    label: "Imágenes originales en el chat",
                    description: "También carga la imagen original en el chat. ADVERTENCIA: Lee las advertencias anteriores"
                }
            },
            modal: {
                about: {
                    title: "El comportamiento por defecto es el siguiente:",
                    body: "&mdash; En el chat, se cargarán imágenes optimizadas pero a resolución completa.",
                    body2: "&mdash; En la vista ampliada de la imagen, se cargará la imagen original.",
                    body3: "También puedes activar las imágenes originales en el chat, pero ten en cuenta lo siguiente:",
                    warning: "&mdash; Las imágenes animadas (GIF, WebP, etc.) en el chat siempre estarán animadas, aunque la app no esté en primer plano.",
                    warning2: "&mdash; Puede causar lag.",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Corrige el volumen excesivo de los reproductores de Spotify integrados permitiéndote personalizarlo",
            option: {
                volume: {
                    label: "Volumen",
                    description: "El % de volumen para Spotify. Cualquier valor por encima del 10% es muuuuy fuerte"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Evita que los vídeos de YouTube se bloqueen al mostrarse en Discord (por ejemplo, por restricciones de UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Añade una opción de 'Seguir' en el menú contextual del usuario para estar siempre en su mismo canal de voz",
            indicatorTooltip: "Siguiendo a {{user}} (clic para activar manualmente, clic derecho para dejar de seguir)",
            unknownUser: "Usuario desconocido",
            option: {
                executeOnFollow: {
                    label: "Ejecutar al seguir",
                    description: "Asegurarse de estar en el mismo canal de voz al empezar a seguir a un usuario"
                },
                onlyManualTrigger: {
                    label: "Solo activación manual",
                    description: "Solo activar al hacer clic en el indicador"
                },
                followLeave: {
                    label: "Seguir al salir",
                    description: "Abandonar el canal de voz también cuando el usuario seguido lo haga"
                },
                autoMoveBack: {
                    label: "Volver automáticamente",
                    description: "Volver automáticamente al canal de voz del usuario seguido si te mueven de canal"
                },
                followUserId: {
                    label: "ID del usuario seguido",
                    description: "ID del usuario al que se está siguiendo"
                },
                channelFull: {
                    label: "Canal lleno",
                    description: "Intentar moverte al canal cuando deje de estar lleno"
                }
            },
            toast: {
                channelFull: "El canal está lleno",
                newVc: "Has seguido al usuario a un nuevo canal de voz",
                insufficientPermissions: "Permisos insuficientes para entrar al canal de voz",
                sameVc: "Ya estás en el mismo canal",
                disconnect: "El usuario seguido salió; desconectado",
                notFollowing: "El usuario seguido salió, pero no está activado desconectar al seguir",
                notVc: "El usuario seguido no está en un canal de voz"
            },
            context: {
                follow: "Seguir usuario",
                unfollow: "Dejar de seguir usuario"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Carga cualquier fuente desde Google Fonts",
            option: {
                selectedFont: {
                    label: "Fuente seleccionada",
                    description: "Fuente actualmente en uso"
                },
                fontSearch: {
                    label: "Buscar fuente",
                    description: "Busca y selecciona fuentes de Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Aplicar en bloques de código",
                    description: "Aplica la fuente a los bloques de código"
                }
            },
            toast: {
                failedLoad: "Error al cargar la fuente"
            },
            modal: {
                settings: {
                    title: "Buscar en Google Fonts",
                    description: "Selecciona una fuente para aplicarla",
                    placeholder: "Buscar fuentes...",
                    previewText: "El veloz murciélago hindú comía feliz cardillo y kiwi",
                    authors: "Por {{authors}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Fuerza la corona de dueño junto a los nombres de usuario incluso en servidores grandes."
        },
        forwardAnywhere: {
            name: "ForwardAnywhere",
            description: "Si un reenvío falla, lo envía como un mensaje normal; también permite reenvíos NSFW",
            option: {
                forwardPreface: {
                    label: "Prefacio de reenvío",
                    description: "Texto con el que se debe encabezar el contenido reenviado"
                }
            },
            context: {
                attachments: "Archivos adjuntos",
                forwarded: "Reenviado desde"
            }
        },
        freaky: {
            name: "Freaky",
            description: "Permite enviar mensajes con una fuente extraña usando el comando /freaky.",
            command: {
                freaky: "Es raro.",
                message: "Haz que tu mensaje sea raro (freaky)"
            },
            option: {
                addFreakyEnding: {
                    label: "Añadir final raro",
                    description: "Añade 👅 o ❤️ al final"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Reescribe y filtra los resultados del Quick Switcher (Ctrl+K) para mostrar tus canales más frecuentes."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Añade un comando /friendcloud para visualizar los usuarios con los que más interactúas",
            command: {
                friendcloud: {
                    description: "Visualiza tu nube de amigos",
                    count: "Número de usuarios a mostrar",
                    mustHigher: "¡El número debe ser 1 o superior!",
                    noAffinities: "No se encontraron afinidades. Revisa tus [ajustes de privacidad](<https://support.discord.com/hc/es/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "No se encontraron usuarios válidos en las afinidades. Revisa tus [ajustes de privacidad](<https://support.discord.com/hc/es/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "No se pudo generar la imagen :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Genera códigos de amigo para añadir amigos fácilmente",
            card: {
                expires: "Expira <t:{{expiration}}:R> • {{uses}}/{{maxUses}} usos",
                copy: "Copiar",
                copied: "¡Copiado!",
                codes: "Tus códigos de amigo",
                count: "Códigos de amigo - {{invites}}",
                create: "Crear código de amigo",
                revoke: "Revocar todos los códigos",
                loading: "Cargando...",
                dontHave: "No tienes ningún código de amigo."
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Crea y gestiona enlaces de invitación de amigo mediante comandos de barra (/create friend invite, etc.).",
            command: {
                create: {
                    description: "Genera un enlace de invitación de amigo.",
                    message: "discord.gg/{{code}}`\n· Expira <t:{{expiration}}:R>\n· Usos máx: {{uses}}"
                },
                view: {
                    description: "Ver una lista de todas las invitaciones generadas.",
                    message: "_discord.gg/{{code}}_ \n· Expira: <t:{{expiration}}:R> \n· Veces usado: {{uses}}/{{maxUses}}",
                    noInvites: "No tienes invitaciones de amigo activas."
                },
                revoke: {
                    description: "Revoca todas las invitaciones de amigo generadas.",
                    message: "Se han revocado todas las invitaciones de amigo."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Añade insignias que muestran cuánto tiempo llevas siendo amigo de un usuario",
            badge: {
                sprout: {
                    name: "Brote",
                    description: "Vuestra amistad acaba de empezar"
                },
                blooming: {
                    name: "Floreciendo",
                    description: "¡Vuestra amistad va por buen camino! (1 mes)"
                },
                burning: {
                    name: "Ardiendo",
                    description: "Vuestra amistad ha alcanzado velocidad terminal (3 meses)"
                },
                fighter: {
                    name: "Luchador",
                    description: "Vuestra amistad es fuerte (6 meses)"
                },
                star: {
                    name: "Estrella",
                    description: "Vuestra amistad lleva tiempo durando (1 año)"
                },
                royal: {
                    name: "Real",
                    description: "Vuestra amistad ha pasado por las buenas y las malas — ¡2 años enteros!"
                },
                besties: {
                    name: "Mejores amigos",
                    description: "¿Cómo es posible esto siquiera??? (5 años)"
                }
            }
        },
        friendsSince: {
            name: "FriendsSince",
            description: "Muestra cuándo te hiciste amigo de alguien en la ventana emergente de usuario",
            section: "Amigos desde"
        },
        friendTags: {
            name: "FriendTags",
            description: "Permite filtrar por etiquetas personalizadas en el Quick Switcher empezando la búsqueda con &",
            modal: {
                name: "Nombre",
                users: "Usuarios (separados por coma)",
                userlist: "Lista de usuarios (clic para eliminar)",
                remove: "Eliminar",
                add: "Añadir",
                tag: "Etiqueta",
                removeFrom: "Eliminar de",
                addTo: "Añadir a"
            },
            option: {
                tagConfiguration: {
                    label: "Configuración de etiquetas",
                    description: "Componente de configuración de etiquetas"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Hace que el menú contextual de los mensajes en los resultados de búsqueda tenga todas las opciones habituales"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Hace que las menciones de usuario en la caja de chat tengan más funciones, como clic izquierdo/derecho"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Hace que los avatares ocupen todo el recuadro en los canales de voz",
            option: {
                useServerProfileAvatars: {
                    label: "Usar avatares de perfil de servidor",
                    description: "Usa los avatares de servidor en los canales de voz de la guild cuando estén disponibles."
                }
            }
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Añade un interruptor en el popout de usuario para mostrar/ocultar tu actividad de juego",
            tooltip: "Alternar actividad de juego",
            gameActivity: {
                enabled: "Actividad de juego activada",
                disabled: "Actividad de juego desactivada"
            },
            option: {
                oldIcon: {
                    label: "Icono antiguo",
                    description: "Usa el estilo de icono anterior al rediseño de Discord"
                },
                location: {
                    label: "Ubicación",
                    description: "Dónde mostrar el botón de actividad de juego",
                    panel: "Junto a Silenciar/Ensordecer",
                    toolbox: "Toolbox de Plexcord"
                }
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Aparecerá un fantasmita adorable si no respondes a tus mensajes directos",
            modal: {
                title: "Usuarios que te han ignorado",
                no: "No hay usuarios ignorados",
                unghost: "dejar de ignorar",
                unknown: "Desconocido",
                unnamedGroup: "Grupo sin nombre",
                unknownUser: "Usuario desconocido",
                clearAll: "Borrar todo",
                noGhost: "¡No hay fantasmas aquí!",
                clear: "Borrar"
            },
            option: {
                showIndicator: {
                    label: "Mostrar indicador",
                    description: "Muestra el contador de fantasmas en la parte superior de la lista de servidores"
                },
                showDmIcons: {
                    label: "Mostrar iconos en MD",
                    description: "Muestra iconos de fantasmas junto a los mensajes directos individuales"
                },
                ignoreGroupDms: {
                    label: "Ignorar MD de grupo",
                    description: "Excluye todos los MD de grupo de la función de fantasmas"
                },
                exemptedChannels: {
                    label: "Canales exentos",
                    description: "Lista de IDs de canales separados por comas para eximir (clic derecho en un canal MD para copiar su ID)"
                },
                ignoreBots: {
                    label: "Ignorar bots",
                    description: "Ignora los mensajes directos de bots"
                },
                maxInactiveTimeMs: {
                    label: "Tiempo máximo de inactividad",
                    description: "Solo mostrar DMs fantasma que hayan estado activos dentro de este periodo de tiempo",
                    no: "Sin límite",
                    oneHour: "1 hora",
                    oneDay: "1 día",
                    oneWeek: "1 semana",
                    oneMonth: "1 mes"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Añade opciones al menú contextual para saltar al inicio o al final de un canal o MD",
            context: {
                top: "Saltar al primer mensaje",
                bottom: "Saltar al último mensaje",
                noMessages: "No se han encontrado mensajes de este usuario en este canal.",
                searchFailed: "Error al buscar mensajes."
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Permite crear colecciones de GIFs personalizadas",
            context: {
                copyImageLink: "Copiar enlace de imagen",
                copyUrl: "Copiar URL",
                collection: {
                    add: "Añadir a la colección",
                    gif: "Colecciones de GIFs",
                    delete: "Eliminar colección",
                    create: "Crear colección",
                    remove: "Quitar",
                    information: "Información de la colección",
                    name: "Nombre",
                    gifs: "GIFs",
                    created: "Creado el",
                    updated: "Última actualización",
                    close: "Cerrar",
                    rename: "Cambiar nombre",
                    move: "Mover a colección",
                    select: "Selecciona una colección a la que mover el elemento"
                },
                gif: {
                    information: "Información",
                    added: "Añadido el",
                    width: "Ancho",
                    height: "Alto",
                    close: "Cerrar"
                }
            },
            option: {
                itemPrefix: {
                    label: "Prefijo de elemento",
                    description: "El prefijo para los elementos GIF"
                },
                collectionPrefix: {
                    label: "Prefijo de colección",
                    description: "El prefijo para las colecciones"
                },
                onlyShowCollections: {
                    label: "Solo mostrar colecciones",
                    description: "Muestra únicamente las colecciones"
                },
                stopWarnings: {
                    label: "Desactivar advertencias",
                    description: "Desactiva los avisos al eliminar"
                },
                showCopyImageLink: {
                    label: "Mostrar 'Copiar enlace de imagen'",
                    description: "Muestra la opción {{copyImageLink}} en los menús contextuales"
                },
                preventDuplicates: {
                    label: "Evitar duplicados",
                    description: "Evita añadir el mismo GIF a una colección varias veces"
                },
                defaultEmptyCollectionImage: {
                    label: "Imagen de colección vacía por defecto",
                    description: "La imagen/GIF que se mostrará cuando una colección no tenga contenido"
                },
                collectionsSortType: {
                    label: "Tipo de ordenación de colecciones",
                    description: "El tipo de criterio para ordenar las colecciones"
                },
                collectionsSortOrder: {
                    label: "Orden de las colecciones",
                    description: "El orden (ascendente o descendente) de las colecciones"
                },
                collectionsSort: {
                    label: "Orden de colecciones",
                    description: "Decide cómo ordenar las colecciones",
                    title: "Ordenar colecciones",
                    sortDescription: "Elige un criterio de ordenación para tus colecciones",
                    sortBy: "Ordenar por",
                    name: "Nombre",
                    creationDate: "Fecha de creación",
                    modifiedDate: "Fecha de modificación",
                    ascending: "Ascendente",
                    descending: "Descendente"
                },
                importGifs: {
                    label: "Importar GIFs",
                    description: "Importar colecciones",
                    button: "Importar colecciones"
                },
                exportGifs: {
                    label: "Exportar GIFs",
                    description: "Exportar colecciones",
                    button: "Exportar colecciones"
                },
                resetCollections: {
                    label: "Restablecer colecciones",
                    description: "Restablece las colecciones por defecto (borra todas tus colecciones)",
                    button: "Restablecer colecciones"
                }
            },
            toast: {
                copied: "¡Enlace de imagen copiado al portapapeles!",
                urlCopied: "¡URL copiada al portapapeles!",
                already: "Esa colección ya existe",
                alreadyCollection: "Ese GIF ya está en esa colección"
            },
            modal: {
                create: {
                    title: "Crear colección",
                    name: "Nombre de la colección",
                    create: "Crear"
                },
                rename: {
                    title: "Cambiar nombre de la colección",
                    name: "Nuevo nombre de la colección",
                    warning: "El nombre no puede tener más de 24 caracteres",
                    rename: "Cambiar nombre"
                }
            },
            alert: {
                import: {
                    title: "¿Estás seguro?",
                    body: "Importar colecciones sobrescribirá tus colecciones actuales.",
                    confirm: "Importar",
                    cancel: "Cancelar"
                },
                reset: {
                    title: "¿Estás seguro?",
                    body: "Restablecer las colecciones eliminará todas tus colecciones actuales.",
                    confirm: "Restablecer",
                    cancel: "Cancelar"
                },
                delete: {
                    title: "¿Estás seguro?",
                    deleteBody: "¿Realmente quieres eliminar esta colección?",
                    removeBody: "¿Realmente quieres quitar este elemento?",
                    confirm: "Eliminar",
                    remove: "Quitar",
                    cancel: "Cancelar"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Permite pegar GIFs directamente en la caja de chat"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Añade un comando para enviar un GIF aleatorio de tus favoritos, con una probabilidad entre diez de mencionar al dueño del servidor",
            command: {
                gifRoulette: {
                    description: "Tienta a la suerte y envía un GIF"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Probabilidad de mención al dueño",
                    description: "Si debe haber una probabilidad de 1 entre 10 de mencionar al dueño del servidor (oh no)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Muestra los repositorios públicos de GitHub de un usuario en su perfil",
            loading: "Cargando repositorios...",
            option: {
                showStars: {
                    label: "Mostrar estrellas",
                    description: "Muestra las estrellas del repositorio"
                },
                showLanguage: {
                    label: "Mostrar lenguaje",
                    description: "Muestra el lenguaje principal del repositorio"
                },
                showInMiniProfile: {
                    label: "Mostrar en miniperfil",
                    description: "Muestra los repositorios en la ventana emergente del miniperfil"
                },
                showRepositoryTab: {
                    label: "Mostrar pestaña de repositorios",
                    description: "Muestra una pestaña de repositorios en el modal del perfil (oculta el botón en conexiones si se activa)"
                }
            },
            error: {
                error: "Error",
                render: "Error: No se pudo renderizar GitHubRepos"
            },
            button: {
                show: "Mostrar repositorios de GitHub",
                repositories: "Repositorios de GitHub",
                more: "Mostrar más",
                only: "Mostrando solo los principales {{length}}/{{total}}"
            },
            modal: {
                title: "Repositorios de GitHub de {{user}}",
                repository: "Repositorio",
                description: "Descripción",
                language: "Lenguaje",
                stars: "Estrellas",
                viewOnGitHub: "Ver en GitHub",
                close: "Cerrar"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "Añade un comando para enviar un enlace de búsqueda en internet",
            command: {
                googleThat: {
                    description: "Envía un enlace de un motor de búsqueda",
                    query: "La consulta de búsqueda"
                }
            },
            option: {
                hyperlink: {
                    label: "Hipervínculo",
                    description: "Si el enlace enviado debe ser un hipervínculo con la consulta como etiqueta"
                },
                embed: {
                    label: "Integración (Embed)",
                    description: "Si el enlace enviado debe renderizar un embed"
                },
                defaultEngine: {
                    label: "Motor por defecto",
                    description: "El motor de búsqueda a utilizar"
                },
                customEngineURL: {
                    label: "URL de motor personalizado",
                    description: "La URL del motor que deseas utilizar"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Permite usar cualquier pegatina de saludo en lugar de solo una aleatoria haciendo clic derecho en el botón '¡Saluda!'",
            mode: {
                greet: "Saludar",
                message: "Mensaje"
            },
            option: {
                greetMode: {
                    label: "Modo de saludo",
                    description: "Elige el modo de saludo",
                    greet: "Saludar (solo puedes saludar 3 veces)",
                    message: "Mensaje (puedes enviar saludos masivos)"
                }
            },
            context: {
                label: "Selector de pegatinas de saludo",
                mode: "Modo de saludo",
                stickers: "Pegatinas de saludo",
                multi: "Multisaludo impío",
                send: "Enviar saludos"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Menú contextual para volcar y descargar los emojis y pegatinas de un servidor.",
            context: {
                download: {
                    emoji: "Descargar emojis",
                    sticker: "Descargar pegatinas"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Añade ajustes para las etiquetas de servidor (guild tags), como ocultarlas o desactivar el aviso para adoptarlas.",
            option: {
                hideTags: {
                    label: "Ocultar etiquetas",
                    description: "Oculta las etiquetas"
                },
                disableAdoptTagPrompt: {
                    label: "Desactivar aviso de adopción",
                    description: "Desactiva el aviso para adoptar etiquetas"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Permite ocultar los botones de la barra de chat",
            tooltip: {
                close: "Cerrar",
                open: "Abrir"
            },
            option: {
                color: {
                    label: "Color",
                    description: "Colorear en rojo al abrir"
                },
                open: {
                    label: "Abierto",
                    description: "Abierto por defecto"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Oculta archivos adjuntos e integraciones (embeds) en mensajes individuales mediante un botón al pasar el ratón",
            show: "Mostrar contenido",
            hide: "Ocultar contenido",
            hidden: "Contenido oculto"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Un plugin para ocultar mensajes temporalmente hasta que reinicies el cliente.",
            button: {
                hide: "Ocultar"
            },
            option: {
                hidePopoverButton: {
                    label: "Ocultar botón emergente",
                    description: "Oculta el botón de ocultar en el menú flotante del mensaje."
                }
            }
        },
        hideServers: {
            name: "HideServers",
            description: "Oculta servidores de la lista de servidores",
            context: {
                hide: "Ocultar servidor",
                unhide: "Mostrar servidor",
                folder: {
                    hide: "Ocultar carpeta",
                    unhide: "Mostrar carpeta"
                }
            },
            option: {
                showIndicator: {
                    label: "Mostrar indicador",
                    description: "Muestra un menú para volver a mostrar servidores al final de la lista"
                },
                guildsList: {
                    label: "Lista de servidores",
                    description: "Elimina los servidores ocultos"
                },
                resetHidden: {
                    label: "Restablecer ocultos",
                    description: "Elimina todos los servidores ocultos de la lista",
                    button: "Restablecer servidores ocultos"
                }
            },
            button: {
                hidden: "Oculto",
                hiddenServers: "Servidores ocultos",
                remove: "Eliminar",
                folder: "Carpeta",
                removeAll: "Eliminar todos",
                guilds: "Servidores",
                noHiddenServers: "No hay servidores ocultos"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes te permite guardar mensajes como notas personalizadas",
            main: "Principal",
            button: {
                tooltip: "Holy Notes",
                save: "Guardar nota",
                cancel: "Cancelar",
                noteMessage: "Anotar mensaje",
                refresh: "Actualizar avatares",
                import: "Importar notas",
                export: "Exportar notas",
                deleteAll: "Eliminar todas las notas",
                delete: "Eliminar bloc de notas",
                create: "Crear bloc de notas",
                copyText: "Copiar texto",
                copyAttachment: "Copiar URL del adjunto",
                deleteNote: "Eliminar nota",
                moveNote: "Mover nota",
                moveTo: "Mover a {{key}}",
                copyId: "Copiar ID"
            },
            modal: {
                error: {
                    generic: "Hubo un error al procesar tus notas. Revisa la consola para más detalles.",
                    easter: "No se encontraron notas. El Plátano de la Empatía está aquí para ti.",
                    empty: "No se encontraron notas guardadas en este bloc."
                },
                help: {
                    title: "Ayuda",
                    description: "Aprende a usar Holy Notes",
                    addingNotes: "Añadir notas",
                    addingNotesText: "Para añadir una nota, haz clic derecho en un mensaje, pasa el ratón sobre 'Anotar mensaje' y haz clic en el botón con el nombre del bloc donde quieras guardarlo.",
                    prototype: "Prototipo",
                    noteMessage: "¡Hacer clic directamente en 'Anotar mensaje' guardará la nota en 'Principal' por defecto!",
                    deletingNotes: "Eliminar notas",
                    deletingNotesText: "Nota: puedes hacer clic derecho en la nota y pulsar 'Eliminar nota' o mantener pulsada la tecla 'SUPR' (DELETE) mientras haces clic en la nota; ¡es como magia!",
                    movingNotes: "Mover notas",
                    movingNotesText: "Para mover una nota, haz clic derecho sobre ella, pasa el ratón sobre 'Mover nota' y selecciona el bloc de destino.",
                    jumpToMessage: "Ir al mensaje",
                    jumpToMessageText: "Para ir a la ubicación original del mensaje, haz clic derecho en la nota y pulsa 'Ir al mensaje'."
                },
                notebook: {
                    title: "BLOC DE NOTAS",
                    search: "Buscar un mensaje...",
                    options: "Opciones de ordenación",
                    label: "Menú de ordenación",
                    filteredOf: "{{filteredCount}} de {{noteCount}} nota{{s}}",
                    note: "{{noteCount}} nota{{s}}",
                    ada: "Ascendente / Fecha de añadido",
                    amd: "Ascendente / Fecha del mensaje",
                    dda: "Descendente / Fecha de añadido",
                    dmd: "Descendente / Fecha del mensaje",
                    change: "Cambiar ordenación",
                    ascending: "Ascendente",
                    descending: "Descendente",
                    dateAdded: "Fecha de añadido",
                    messageDate: "Fecha del mensaje"
                },
                create: {
                    title: "Crear bloc de notas",
                    description: "Introduce un nombre para tu nuevo bloc de notas",
                    placeholder: "Nombre del bloc"
                },
                delete: {
                    title: "¿Eliminar {{notebookName}}?",
                    description: "{{noteCount}} nota{{s}} se eliminarán permanentemente",
                    button: "Eliminar"
                },
                tabs: {
                    label: "Pestañas del bloc"
                }
            },
            toast: {
                saved: "Mensaje añadido con éxito a {{notebook}}",
                deleted: "Nota eliminada con éxito de {{notebook}}",
                moved: "Nota movida con éxito de {{from}} a {{to}}.",
                exists: "El bloc {{notebookName}} ya existe.",
                created: "Bloc {{notebookName}} creado con éxito.",
                deletedNotebook: "Bloc {{notebookName}} eliminado con éxito.",
                refreshed: "Avatares actualizados con éxito.",
                deletedAll: "Todas las notas han sido eliminadas.",
                imported: "Notas importadas con éxito.",
                invalid: "Error al importar las notas."
            },
            toolbox: {
                action: "Abrir notas"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Cambia el botón de Inicio por un indicador de escritura si alguien te está escribiendo por MD"
        },
        iconViewer: {
            name: "IconViewer",
            description: "Añade una nueva pestaña en ajustes para previsualizar todos los iconos.",
            toolbox: "Abrir pestaña de iconos",
            iconFinder: "Buscador de iconos",
            about: {
                title: "Características",
                preview: "Previsualizar iconos",
                list: {
                    copy: "Copiar nombres de iconos y variables CSS",
                    download: "Descargar iconos en diferentes formatos (SVG, PNG, GIF, etc.)",
                    premade: "Copiar búsquedas de iconos preconfiguradas para tus plugins",
                    find: "Buscar iconos por contexto de función",
                    search: "Busca colores haciendo clic derecho en el nombre del color",
                    special: "Agradecimientos especiales"
                }
            },
            context: {
                icon: {
                    options: "Opciones de icono",
                    log: "Registrar en consola",
                    save: "Guardar como...",
                    rightClick: "Clic derecho para cambiar icono",
                    usage: "Uso",
                    click: "Clic para copiar",
                    copied: "¡Copiado!",
                    actions: "Acciones"
                }
            },
            modal: {
                label: "Buscar por contexto de función",
                search: "Buscar entre {{count}} iconos...",
                function: "Función",
                iconViewer: {
                    colors: "Colores del Icon Viewer",
                    unknown: "desconocido",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Reinicia automáticamente el cliente tras estar inactivo un tiempo configurable, pero evita hacerlo si estás en un canal de voz.",
            option: {
                isEnabled: {
                    label: "Activado",
                    description: "Activa el reinicio automático tras inactividad"
                },
                idleMinutes: {
                    label: "Minutos de inactividad",
                    description: "Minutos de inactividad antes de reiniciar (cuando no estés en voz)"
                }
            },
            toolbox: {
                disable: "Desactivar reinicio automático por inactividad",
                enable: "Activar reinicio automático por inactividad"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Evita que ciertas actividades aparezcan SOLO en tu estado. Puedes configurar cuáles ignorar específicamente desde las pestañas de 'Juegos registrados' y 'Actividades', o usar los ajustes generales de abajo.",
            modal: {
                import: {
                    title: "Importar el ID de aplicación del plugin CustomRPC a la lista de filtros"
                },
                filter: {
                    title: "Lista de filtros",
                    description: "Lista de IDs de actividad separados por comas para filtrar (útil para actividades RPC específicas y CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "El ID de aplicación de CustomRPC no está configurado.",
                    alreadyAdded: "El ID de aplicación de CustomRPC ya ha sido añadido."
                }
            },
            button: {
                import: "Importar ID de CustomRPC"
            },
            option: {
                importCustomRPC: {
                    label: "Importar CustomRPC"
                },
                listMode: {
                    label: "Modo de lista",
                    description: "Elige cómo se aplica la lista de filtros",
                    blacklist: "Lista negra (ignorar solo lo que está en la lista)",
                    whitelist: "Lista blanca (ignorar todo excepto lo que está en la lista)"
                },
                idList: {
                    label: "Lista de IDs"
                },
                ignorePlaying: {
                    label: "Ignorar 'Jugando'",
                    description: "Ignora todas las actividades de juego (normalmente juegos y actividades RPC)"
                },
                ignoreStreaming: {
                    label: "Ignorar 'Transmitiendo'",
                    description: "Ignora todas las actividades de transmisión en directo"
                },
                ignoreListening: {
                    label: "Ignorar 'Escuchando'",
                    description: "Ignora todas las actividades de escucha (normalmente Spotify)"
                },
                ignoreWatching: {
                    label: "Ignorar 'Viendo'",
                    description: "Ignora todas las actividades de visionado"
                },
                ignoreCompeting: {
                    label: "Ignorar 'Compitiendo'",
                    description: "Ignora todas las actividades de competición (normalmente actividades especiales de juegos)"
                },
                ignoredActivities: {
                    label: "Actividades ignoradas"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Permite ignorar llamadas de usuarios específicos o grupos de MD.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Usuarios ignorados permanentemente",
                    description: "IDs de usuario (separados por coma + espacio) que deben ser ignorados de forma permanente"
                }
            },
            button: {
                ignore: "Ignorar",
                temporarilyIgnore: "Ignorar llamadas temporalmente",
                permanentlyIgnore: "Ignorar llamadas permanentemente"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "No oculta los mensajes de usuarios marcados como 'probables spammers' por Discord"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Muestra el nombre de archivo de las imágenes y GIFs como una descripción emergente al pasar el ratón sobre ellos",
            option: {
                showFullUrl: {
                    label: "Mostrar URL completa",
                    description: "Muestra la URL completa de la imagen en lugar de solo el nombre del archivo. Siempre activo para GIFs, ya que no suelen tener nombres con significado"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Nunca oculta los enlaces de imágenes en los mensajes, incluso si es el único contenido"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Te permite hacer zoom en imágenes y GIFs, además de mostrar metadatos. Usa la rueda del ratón para el zoom y Mayús + rueda para aumentar el radio de la lente.",
            option: {
                saveZoomValues: {
                    label: "Guardar valores de zoom",
                    description: "Si se deben guardar los valores de zoom y tamaño de la lente"
                },
                invertScroll: {
                    label: "Invertir desplazamiento",
                    description: "Invierte el sentido de la rueda del ratón"
                },
                nearestNeighbour: {
                    label: "Vecino más cercano (Nearest Neighbour)",
                    description: "Usa la interpolación por vecino más cercano al escalar imágenes"
                },
                square: {
                    label: "Cuadrado",
                    description: "Hace que la lente de zoom sea cuadrada"
                },
                zoom: {
                    label: "Zoom",
                    description: "Nivel de zoom de la lente"
                },
                size: {
                    label: "Tamaño",
                    description: "Radio o tamaño de la lente"
                },
                zoomSpeed: {
                    label: "Velocidad de zoom",
                    description: "Qué tan rápido cambia el zoom o el tamaño de la lente"
                },
                showMetadata: {
                    label: "Mostrar metadatos",
                    description: "Muestra los metadatos de la imagen al hacer doble clic sobre ella"
                }
            },
            context: {
                square: "Lente cuadrada",
                nearest: "Vecino más cercano",
                zoom: "Zoom",
                size: "Tamaño de lente",
                zoomSpeed: "Velocidad de zoom",
                showImageMetadata: "Mostrar metadatos de imagen",
                view: "Ver metadatos",
                loading: "Cargando...",
                unknown: "Desconocido",
                sizeHTML: "Tamaño",
                dimensions: "Dimensiones",
                filename: "Nombre de archivo"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Añade el comando /imgtogif para crear un GIF a partir de cualquier imagen",
            command: {
                imgToGif: {
                    description: "Te permite convertir una imagen en un GIF",
                    image: "Archivo de imagen a utilizar",
                    width: "Ancho del GIF",
                    height: "Alto del GIF"
                }
            },
            error: {
                noImage: "¡No se ha especificado ninguna imagen!",
                notImage: "El archivo subido no es una imagen"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Muestra tus relaciones implícitas en la pestaña de Amigos.",
            option: {
                sortByAffinity: {
                    label: "Ordenar por afinidad",
                    description: "Si se deben ordenar las relaciones implícitas según la afinidad que tengan contigo."
                }
            },
            implicit: "Implícito"
        },
        inRole: {
            name: "InRole",
            description: "Consulta quién tiene un rol específico mediante el menú contextual del rol o el comando /inrole.",
            command: {
                inrole: {
                    description: "Saber quién tiene un rol",
                    role: "El rol a consultar",
                    noGuild: "Asegúrate de estar en un servidor."
                }
            },
            context: {
                view: "Ver miembros con el rol"
            },
            modal: {
                about: {
                    title: "Limitaciones",
                    description: "Si no tienes permisos de moderador y el servidor es grande (más de 100 miembros), el plugin puede verse limitado de las siguientes formas:",
                    list: {
                        one: "No se mostrarán los miembros desconectados",
                        two: "Se listarán hasta 100 miembros por defecto. Para cargar más, desplázate hacia abajo en la lista de miembros del servidor.",
                        three: "Sin embargo, los amigos siempre aparecerán independientemente de su estado."
                    }
                },
                member: {
                    title: "Miembros del rol",
                    noMembers: "Parece que no se encontraron miembros en caché con ese rol. ¡Intenta desplazarte por la lista de miembros para cargar más usuarios!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Comparte pantalla instantáneamente al unirte a un canal de voz; compatible con escritorios, ventanas y dispositivos de entrada de vídeo.",
            modal: {
                linux: {
                    title: "Para Linux",
                    body: "En Wayland solo abre el selector de pantalla compartida",
                    bodyTwo: "En X11 puede que funcione o puede que no :shrug:"
                },
                videoDevices: {
                    title: "Dispositivos de entrada de vídeo",
                    body: "Soporta cámaras y capturadoras (como Elgato HD60X) si se activa en los ajustes"
                },
                regardingSound: {
                    title: "Sobre el sonido y la previsualización",
                    body: "Usamos la configuración nativa de Discord para decidir si el sonido y la previsualización deben estar activados"
                }
            },
            option: {
                streamMedia: {
                    label: "Fuente multimedia a transmitir",
                    description: "Vuelve a la pantalla principal si no se encuentra la fuente",
                    loading: "Cargando fuentes multimedia...",
                    none: "No se encontraron fuentes",
                    placeholder: "Selecciona una fuente para transmitir"
                },
                includeVideoDevices: {
                    label: "Incluir dispositivos de vídeo",
                    description: "Incluye cámaras y capturadoras en la lista de fuentes"
                },
                autoMute: {
                    label: "Silenciar automáticamente",
                    description: "Silencia tu micrófono automáticamente al unirte a un canal de voz"
                },
                autoDeafen: {
                    label: "Ensordecer automáticamente",
                    description: "Te ensordece al unirte (también te silencia)"
                },
                instantScreenshare: {
                    label: "Pantalla compartida instantánea",
                    description: "Activa la función de compartir pantalla automática"
                },
                keybindScreenshare: {
                    label: "Atajo para compartir pantalla",
                    description: "Configura el atajo en los ajustes de teclado de Discord"
                },
                focusDiscord: {
                    label: "Foco en Discord",
                    description: "Solo inicia la transmisión con el atajo si Discord está en primer plano"
                },
                toolboxManagement: {
                    label: "Gestión en la barra de herramientas",
                    description: "Activar/Desactivar Instant Screenshare"
                }
            },
            toolbox: {
                label: "Instant Screenshare",
                toast: "Instant Screenshare {{state}}",
                enabled: "Activado",
                disabled: "Desactivado"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "¡Encripta tus mensajes de una forma que no parezca sospechosa!",
            option: {
                savedPasswords: {
                    label: "Contraseñas guardadas",
                    description: "Contraseñas guardadas (separadas por coma)"
                }
            },
            button: {
                encrypt: "Encriptar mensaje",
                decrypt: "Desencriptar mensaje",
                hidden: "Indicador de mensaje oculto (InvisibleChat)"
            },
            tooltip: {
                hidden: "¡Este mensaje contiene un mensaje oculto! (InvisibleChat)"
            },
            embed: {
                title: "Mensaje desencriptado",
                footer: "Enviado con InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Encriptar mensaje",
                    secret: "Secreto",
                    cover: "Cobertura (¡2 o más palabras!)",
                    password: "Contraseña",
                    dontUseCover: "No usar cobertura",
                    send: "Enviar",
                    cancel: "Cancelar"
                },
                decrypt: {
                    title: "Desencriptar mensaje",
                    with: "Mensaje con encriptación",
                    password: "Contraseña",
                    decrypt: "Desencriptar",
                    cancel: "Cancelar"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Te permite editar los valores predeterminados al crear invitaciones de servidor.",
            option: {
                inviteDuration: {
                    label: "Duración de la invitación",
                    description: "Duración por defecto para las invitaciones",
                    thirtyMinutes: "30 minutos",
                    oneHour: "1 hora",
                    sixHours: "6 horas",
                    twelveHours: "12 horas",
                    oneDay: "1 día",
                    sevenDays: "7 días",
                    forever: "Nunca"
                },
                maxUses: {
                    label: "Usos máximos",
                    description: "Número máximo de usos por defecto",
                    unlimited: "Ilimitado",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Membresía temporal",
                    description: "Membresía temporal por defecto para las invitaciones"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Hace que los colores de los nombres de usuario en el chat sean únicos, como en los clientes de IRC",
            option: {
                lightness: {
                    label: "Luminosidad",
                    description: "Luminosidad en %. Cámbialo si los colores son demasiado claros u oscuros"
                },
                memberListColors: {
                    label: "Colores en la lista de miembros",
                    description: "Reemplaza los colores de los roles en la lista de miembros"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Aplicar color solo a usuarios sin color",
                    description: "Aplica colores solo a usuarios que no tengan un color de rol predefinido"
                },
                applyColorOnlyInDms: {
                    label: "Aplicar color solo en MD",
                    description: "Aplica colores solo en mensajes directos; no los aplica en servidores."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Guarda localmente a todos con los que te has comunicado (incluyendo servidores), en caso de pérdida",
            section: {
                description: "Proporciona una lista de usuarios que has mencionado o respondido, dueños de servidores a los que perteneces o miembros de tu hermandad",
                empty: "Está vacío por ahora.",
                tooltip: "{{user}}, actualizado el {{updatedAtContent}}",
                owner: "Dueño del servidor",
                iRememberYou: "I Remember You"
            },
            context: {
                user: "Opciones de usuario",
                copy: "Copiar ID de usuario",
                copyToast: "ID de usuario copiado al portapapeles",
                view: "Ver perfil"
            },
            modal: {
                title: "Editor",
                filter: "Filtrar por etiqueta, nombre o ID",
                button: {
                    validate: "Validar y guardar",
                    cancel: "Cancelar",
                    openEditor: "Abrir editor",
                    resetData: "Restablecer almacenamiento",
                    sure: "¿Estás seguro?"
                }
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Intenta navegar al canal en el que estabas antes de cambiar de cuenta o cargar Discord."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Añade efectos de sonido de OperaGX o osu! al escribir con el teclado.",
            option: {
                volume: {
                    label: "Volumen",
                    description: "Volumen de los sonidos del teclado"
                },
                soundPack: {
                    label: "Paquete de sonidos",
                    description: "Paquete de sonidos a utilizar",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Envía una notificación si un mensaje coincide con ciertas palabras clave o expresiones regulares (regex).",
            idHolder: "ID",
            keywordEntry: "Entrada de palabra clave",
            regexHolder: "ejemplo|regex",
            ignoreCase: "Ignorar mayúsculas/minúsculas",
            whiteblackLabel: "Lista blanca/Lista negra",
            tab: {
                title: "Palabras clave",
                clearAll: "Borrar todo"
            },
            button: {
                addId: "Añadir ID",
                addKeyword: "Añadir palabra clave"
            },
            listTypeSelector: {
                blacklist: "Lista negra",
                whitelist: "Lista blanca",
                placeholder: "Selecciona un tipo de lista"
            },
            option: {
                ignoreBots: {
                    label: "Ignorar bots",
                    description: "Ignorar mensajes enviados por bots"
                },
                amountToKeep: {
                    label: "Cantidad a mantener",
                    description: "Cantidad de mensajes a mantener en el registro"
                },
                keywords: {
                    label: "Palabras clave",
                    description: "Gestionar palabras clave"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Añade un indicador de última conexión bajo los nombres de usuario en tu lista de MD, servidores y grupos.",
            unit: {
                d: "día",
                h: "hora",
                m: "minuto"
            },
            online: "Conectado hace {{formattedTime}}"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Pequeño complemento para la presencia enriquecida de ListenBrainz.",
            about: {
                title: "Sobre la API de MusicBrainz",
                description: "La API de MusicBrainz no requiere una clave API, pero sí necesita un {{link}}. Para la mayoría, una dirección de correo electrónico debería bastar.",
                userAgent: "cadena de user-agent significativa"
            },
            option: {
                username: {
                    label: "Nombre de usuario",
                    description: "Nombre de usuario de ListenBrainz"
                },
                mbContact: {
                    label: "Contacto de MB",
                    description: "Contacto de ListenBrainz"
                },
                shareUsername: {
                    label: "Compartir nombre de usuario",
                    description: "Muestra un enlace al perfil de ListenBrainz (puede que solo sea visible para otros usuarios)"
                },
                shareSong: {
                    label: "Compartir canción",
                    description: "Muestra un enlace a la canción actual en ListenBrainz (puede que solo sea visible para otros usuarios)"
                },
                hideWithSpotify: {
                    label: "Ocultar con Spotify",
                    description: "Oculta la presencia de ListenBrainz si Spotify se está ejecutando"
                },
                hideWithActivity: {
                    label: "Ocultar con actividad",
                    description: "Oculta la presencia de ListenBrainz si tienes cualquier otra actividad"
                },
                useTimeBar: {
                    label: "Usar barra de tiempo",
                    description: "Usa la duración de la pista para mostrar una barra de tiempo (debe estar en estado 'Escuchando')"
                },
                statusName: {
                    label: "Nombre de estado",
                    description: "Texto de estado personalizado"
                },
                nameFormat: {
                    label: "Formato de nombre",
                    description: "Muestra el nombre de la canción y el artista en el nombre del estado",
                    custom: "Usar nombre de estado personalizado",
                    artistSong: "Usar formato 'artista - canción'",
                    songArtist: "Usar formato 'canción - artista'",
                    artistOnly: "Usar solo nombre del artista",
                    songOnly: "Usar solo nombre de la canción",
                    albumName: "Usar nombre del álbum (vuelve al texto personalizado si no hay álbum)"
                },
                useListeningStatus: {
                    label: "Usar estado 'Escuchando'",
                    description: "Muestra 'Escuchando' en lugar de 'Jugando'"
                },
                missingArt: {
                    label: "Arte faltante",
                    description: "Cuando falta el álbum o la carátula",
                    listenbrainzLogo: "Usar logo grande de ListenBrainz",
                    generic: "Usar marcador genérico"
                },
                useLogo: {
                    label: "Usar logo",
                    description: "Muestra el logo de ListenBrainz en la carátula del álbum"
                }
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Reemplaza las frases de carga de Discord.",
            option: {
                replaceEvents: {
                    label: "Reemplazar eventos",
                    description: "¿Debería este complemento aplicarse también durante eventos con frases especiales? (ej. Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Habilitar frases preestablecidas del plugin",
                    description: "Habilita las frases configuradas por este complemento"
                },
                enableDiscordPresetQuotes: {
                    label: "Habilitar frases preestablecidas de Discord",
                    description: "Habilita las frases preestablecidas de Discord (incluyendo las de eventos)"
                },
                additionalQuotes: {
                    label: "Frases adicionales",
                    description: "Frases personalizadas adicionales, separadas por el delimitador de abajo"
                },
                additionalQuotesDelimiter: {
                    label: "Delimitador de frases adicionales",
                    description: "Delimitador para las frases adicionales"
                }
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "¡Te permite iniciar sesión en otro dispositivo escaneando un código QR, igual que en el móvil!",
            option: {
                scanQr: {
                    label: "Escanear código QR",
                    description: "Escanear un código QR",
                    notEnabled: "Activa el plugin y reinicia el cliente para escanear un código QR de inicio de sesión"
                }
            },
            neverScan: "Nunca escanees un código QR de inicio de sesión de otro usuario o aplicación.",
            hold: "Mantén presionado para confirmar el inicio de sesión",
            scanning: "Escaneando...",
            stopScanning: "Detener escaneo",
            usingWebcam: "Escanear usando la webcam",
            dragDrop: "Arrastra y suelta una imagen aquí, o haz clic para seleccionar una",
            orPaste: "¡O pega una imagen desde tu portapapeles!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Permite cambiar la velocidad de reproducción (por defecto) de los elementos multimedia incrustados.",
            playbackSpeed: "Velocidad de reproducción",
            context: {
                label: "Control de velocidad de reproducción"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Velocidad por defecto de mensajes de voz",
                    description: "Mensajes de voz"
                },
                defaultVideoSpeed: {
                    label: "Velocidad por defecto de vídeos",
                    description: "Vídeos"
                },
                defaultAudioSpeed: {
                    label: "Velocidad por defecto de audios",
                    description: "Audios"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Muestra el número de miembros en línea, miembros totales y usuarios en canales de voz en la lista de miembros y en la descripción emergente.",
            option: {
                toolTip: {
                    label: "Descripción emergente (Tooltip)",
                    description: "Muestra el recuento de miembros en la descripción emergente del servidor"
                },
                memberList: {
                    label: "Lista de miembros",
                    description: "Muestra el recuento de miembros en el encabezado de la lista de miembros"
                },
                voiceActivity: {
                    label: "Actividad de voz",
                    description: "Muestra el número de usuarios en canales de voz"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} en línea en este canal",
            totalMembers: "{{formattedTotalCount}} miembros totales en el servidor",
            totalVoice: "{{formattedVoiceCount}} miembros en voz"
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Muestra los avatares de usuario e iconos de rol dentro de las menciones.",
            option: {
                showAtSymbol: {
                    label: "Mostrar símbolo @",
                    description: "Si se debe mostrar el símbolo @ en las menciones de usuario"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Añade un botón en la barra de chat para maullar en el chat.",
            button: {
                meow: "Maullar"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Combina los mensajes enviados en un periodo de tiempo con tu mensaje anterior si nadie más envía un mensaje antes que tú.",
            option: {
                timePeriod: {
                    label: "Periodo de tiempo",
                    description: "La duración de las ráfagas (en segundos)."
                },
                shouldMergeWithAttachment: {
                    label: "Combinar con archivos adjuntos",
                    description: "¿Debería combinarse el mensaje si el último tiene un archivo adjunto?"
                },
                useSpace: {
                    label: "Usar espacio",
                    description: "Si se debe añadir un espacio entre mensajes al combinar en lugar de nuevas líneas."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Mantén presionado Retroceso (Backspace) y haz clic para borrar, doble clic para editar/responder.",
            option: {
                singleClickAction: {
                    label: "Acción de un solo clic",
                    description: "Acción al hacer un clic (tus mensajes)"
                },
                singleClickModifier: {
                    label: "Modificador de un solo clic",
                    description: "Tecla requerida para la acción de un clic (tus mensajes)"
                },
                singleClickOthersAction: {
                    label: "Acción de un solo clic (Otros)",
                    description: "Acción al hacer un clic (mensajes de otros)"
                },
                singleClickOthersModifier: {
                    label: "Modificador de un solo clic (Otros)",
                    description: "Tecla requerida para la acción de un clic (mensajes de otros)"
                },
                doubleClickAction: {
                    label: "Acción de doble clic",
                    description: "Acción al hacer doble clic (tus mensajes)"
                },
                doubleClickOthersAction: {
                    label: "Acción de doble clic (Otros)",
                    description: "Acción al hacer doble clic (mensajes de otros)"
                },
                doubleClickModifier: {
                    label: "Modificador de doble clic",
                    description: "Tecla requerida para la acción de doble clic"
                },
                tripleClickAction: {
                    label: "Acción de triple clic",
                    description: "Acción al hacer triple clic"
                },
                tripleClickModifier: {
                    label: "Modificador de triple clic",
                    description: "Tecla requerida para la acción de triple clic"
                },
                reactEmoji: {
                    label: "Emoji de reacción",
                    description: "Emoji a usar para las acciones de reacción"
                },
                addAdditionalReacts: {
                    label: "Añadir reacciones adicionales",
                    description: "Añade también las reacciones configuradas adicionalmente"
                },
                additionalReactEmojis: {
                    label: "Emojis de reacción adicionales",
                    description: "Emojis adicionales para añadir con la acción Reaccionar (separados por coma/línea, máx {{count}})"
                },
                disableInDms: {
                    label: "Desactivar en MD",
                    description: "Desactiva todas las acciones de clic en mensajes directos"
                },
                disableInSystemDms: {
                    label: "Desactivar en MD de sistema",
                    description: "Desactiva todas las acciones de clic en mensajes directos de sistema"
                },
                clickTimeout: {
                    label: "Tiempo de espera de clic",
                    description: "Tiempo para distinguir entre doble/triple clic (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Umbral de pulsación de doble clic",
                    description: "Tiempo máximo de pulsación para doble clic (ms). Mantener más tiempo permite seleccionar texto"
                },
                deferDoubleClickForTriple: {
                    label: "Aplazar doble clic para triple",
                    description: "Retrasa el doble clic para permitir acciones de triple clic (desactiva el triple clic si está apagado)"
                },
                selectionHoldTimeout: {
                    label: "Tiempo de espera para selección",
                    description: "Tiempo de espera para permitir la selección de texto (ms)"
                },
                quoteWithReply: {
                    label: "Citar con respuesta",
                    description: "Al citar, también responde al mensaje"
                },
                useSelectionForQuote: {
                    label: "Usar selección para cita",
                    description: "Al citar, usa el texto seleccionado si está disponible"
                }
            },
            actions: {
                none: "Ninguno",
                delete: "Eliminar",
                copyLink: "Copiar enlace",
                copyID: "Copiar ID",
                copyContent: "Copiar contenido",
                copyUserID: "Copiar ID de usuario",
                edit: "Editar",
                reply: "Responder",
                react: "Reaccionar",
                openThread: "Abrir hilo",
                openTab: "Abrir pestaña",
                quote: "Citar",
                pin: "Fijar"
            },
            missingPermissions: {
                react: "No se puede reaccionar: faltan permisos",
                pin: "No se puede fijar: faltan permisos",
            },
            cannotQuote: "No se puede citar este tipo de mensaje",
            copy: {
                messageId: "¡ID de mensaje copiado!",
                messageContent: "¡Contenido del mensaje copiado!",
                userId: "¡ID de usuario copiado!"
            },
            linkCopied: "¡Enlace copiado!"
        },
        messageColors: {
            name: "MessageColors",
            description: "Muestra códigos de color como #FF0042 dentro de los mensajes.",
            option: {
                renderType: {
                    label: "Tipo de renderizado",
                    description: "Cómo mostrar los colores",
                    textColor: "Color de texto",
                    block: "Bloque cercano",
                    backgroundColor: "Color de fondo"
                },
                enableShortHexCodes: {
                    label: "Habilitar códigos hexadecimales cortos",
                    description: "Habilita códigos de 3 caracteres como #39f"
                },
                blockView: {
                    label: "Tipo de vista de bloque",
                    description: "Cómo mostrar los bloques de color",
                    right: "Lado derecho",
                    left: "Lado izquierdo",
                    both: "Ambos lados"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Muestra cuánto tiempo tardó en cargar los mensajes del canal actual.",
            option: {
                showIcon: {
                    label: "Mostrar icono",
                    description: "Muestra el icono de tiempo de carga en la barra de mensajes"
                },
                showMs: {
                    label: "Mostrar milisegundos",
                    description: "Muestra milisegundos en el tiempo"
                },
                iconColor: {
                    label: "Color del icono",
                    description: "Color del icono (valor de color CSS)"
                }
            },
            loaded: "Mensajes cargados en {{time}}ms (hace {{timeAgo}})",
            day: "hace {{s}} día",
            hour: "hace {{s}} hora",
            minute: "hace {{s}} minuto",
            justNow: "ahora mismo"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Muestra un indicador para los mensajes que tardaron ≥n segundos en enviarse.",
            day: "día",
            days: "días",
            hour: "hora",
            hours: "horas",
            minute: "minuto",
            minutes: "minutos",
            second: "segundo",
            seconds: "segundos",
            millisecond: "milisegundo",
            milliseconds: "milisegundos",
            and: "y",
            oldKotlinDetected: "Se sospecha que el usuario usa un cliente de Discord para Android antiguo.",
            ahead: "El reloj de este usuario está {{delta}} adelantado.",
            delay: "Este mensaje se envió con un retraso de {{delta}}.",
            delayedMessage: "Mensaje retrasado",
            oldAndroidClient: "Cliente de Discord Android antiguo",
            option: {
                latency: {
                    label: "Latencia",
                    description: "Umbral en segundos para el indicador de latencia"
                },
                detectDiscordKotlin: {
                    label: "Detectar Discord Kotlin",
                    description: "Detectar clientes antiguos de Discord para Android"
                },
                showMillis: {
                    label: "Mostrar milisegundos",
                    description: "Mostrar milisegundos"
                },
                ignoreSelf: {
                    label: "Ignorarme a mí mismo",
                    description: "No añadir el indicador a mis propios mensajes"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Añade una vista previa a los mensajes que enlazan a otro mensaje.",
            option: {
                messageBackgroundColor: {
                    label: "Color de fondo del mensaje",
                    description: "Color de fondo para los mensajes en incrustaciones ricas"
                },
                automodEmbeds: {
                    label: "Incrustaciones de Automod",
                    description: "Usa incrustaciones de automod en lugar de ricas (más pequeñas pero con menos info)",
                    always: "Usar siempre incrustaciones de automod",
                    prefer: "Preferir automod, pero usar ricas si algún contenido no se puede mostrar",
                    never: "Nunca usar incrustaciones de automod"
                },
                listMode: {
                    label: "Modo de lista",
                    description: "Si se usa la lista de IDs como lista negra o blanca",
                    blacklist: "Lista negra",
                    whitelist: "Lista blanca"
                },
                idList: {
                    label: "Lista de IDs",
                    description: "IDs de servidores/canales/usuarios a filtrar (separados por coma)"
                },
                clearMessageCache: {
                    label: "Borrar caché de mensajes",
                    description: "Borra la caché de mensajes enlazados"
                }
            },
            noContent: {
                noAttachments: "sin contenido, {{count}} incrustación{{s}}",
                noEmbeds: "sin contenido, {{count}} archivo{{s}} adjunto{{s}}",
                both: "sin contenido, {{attachments}} adjunto{{attachmentsS}} y {{embeds}} incrustación{{embedsS}}"
            },
            dm: "Mensaje directo",
            groupDm: "MD de grupo",
            server: "Servidor"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Añade una descripción emergente con vista previa al pasar el ratón sobre enlaces de mensajes, respuestas y mensajes reenviados.",
            loading: "Cargando...",
            option: {
                onLink: {
                    label: "En enlaces",
                    description: "Mostrar vista previa al pasar el ratón sobre enlaces de mensajes"
                },
                onReply: {
                    label: "En respuestas",
                    description: "Mostrar vista previa al pasar el ratón sobre respuestas"
                },
                onForward: {
                    label: "En reenvíos",
                    description: "Mostrar vista previa al pasar el ratón sobre mensajes reenviados"
                },
                display: {
                    label: "Visualización",
                    description: "Estilo de visualización",
                    auto: "Igual que el mensaje",
                    compact: "Compacto",
                    cozy: "Acogedor"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Registra temporalmente los mensajes eliminados y editados.",
            removeMessage: "Eliminar historial de mensajes",
            removeMessageTemporary: "Eliminar mensaje (Temporal)",
            clearMessageLog: "Borrar registro de mensajes",
            modal: {
                edit: {
                    title: "Historial de edición de mensajes",
                    tooltip: "Este estado de edición no se registró, por lo que no se puede mostrar."
                }
            },
            option: {
                deleteStyle: {
                    label: "Estilo de borrado",
                    description: "El estilo de los mensajes eliminados",
                    text: "Texto rojo",
                    overlay: "Superposición roja"
                },
                logDeletes: {
                    label: "Registrar borrados",
                    description: "Si se deben registrar los mensajes eliminados"
                },
                collapseDeleted: {
                    label: "Colapsar eliminados",
                    description: "Si se deben colapsar los mensajes eliminados, similar a los mensajes bloqueados"
                },
                logEdits: {
                    label: "Registrar ediciones",
                    description: "Si se deben registrar los mensajes editados"
                },
                inlineEdits: {
                    label: "Ediciones en línea",
                    description: "Si se debe mostrar el historial de edición como parte del contenido del mensaje"
                },
                ignoreBots: {
                    label: "Ignorar bots",
                    description: "Si se deben ignorar los mensajes de bots"
                },
                ignoreSelf: {
                    label: "Ignorarme a mí mismo",
                    description: "Si se deben ignorar mis propios mensajes"
                },
                ignoreUsers: {
                    label: "Ignorar usuarios",
                    description: "Lista de IDs de usuario a ignorar separada por comas"
                },
                ignoreChannels: {
                    label: "Ignorar canales",
                    description: "Lista de IDs de canal a ignorar separada por comas"
                },
                ignoreGuilds: {
                    label: "Ignorar servidores",
                    description: "Lista de IDs de servidor a ignorar separada por comas"
                },
                showEditDiffs: {
                    label: "Mostrar diferencias de edición",
                    description: "Muestra las diferencias visuales entre versiones del mensaje editado"
                },
                separatedDiffs: {
                    label: "Diferencias separadas",
                    description: "Separa adiciones y eliminaciones en las diferencias para una lectura más clara"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Mejora el complemento MessageLogger con funciones adicionales.",
            updateImageCacheDir: "Directorio de caché de imágenes actualizado con éxito.",
            updateLogsDir: "Directorio de registros actualizado con éxito.",
            failedUpdate: "Error al actualizar el directorio.",
            blacklist: "Lista negra",
            whitelist: "Lista blanca",
            failedToRemove: "Error al eliminar el mensaje",
            successfullyImported: "Registros importados con éxito",
            errorImportingLogs: "Error al importar registros. Consulta la consola para más información",
            importing: "Importando...",
            importLogs: "Importar registros",
            exporting: "Exportando...",
            exportLogs: "Exportar registros",
            alert: {
                clearLogs: {
                    title: "Borrar registros",
                    body: "¿Estás seguro de que quieres borrar todos los registros?",
                    confirmText: "Borrar",
                    cancel: "Cancelar"
                },
                clearVisibleLogs: {
                    title: "Borrar registros visibles",
                    body: "¿Estás seguro de que quieres borrar {{messages}} registros?",
                    confirmText: "Borrar",
                    cancel: "Cancelar"
                },
                cleared: "Base de datos y caché de registros de mensajes borrada."
            },
            context: {
                title: "Message Logger",
                jumpToMessage: "Ir al mensaje",
                openUserProfile: "Abrir perfil de usuario",
                copyContent: "Copiar contenido",
                copyUserId: "Copiar ID de usuario",
                copyMessageId: "Copiar ID de mensaje",
                copyChannelId: "Copiar ID de canal",
                copyServerId: "Copiar ID de servidor",
                deleteLog: "Eliminar registro",
                fromUsernameDm: "De los MD de {{username}}",
                fromGroupDm: "Del MD de grupo {{channelName}}",
                fromServerChannel: "De {{channelName}} en {{serverName}}",
                moveTypeTo: "Mover {{type}} a {{destination}}",
                removeTypeFrom: "Eliminar {{type}} de {{list}}",
                openLogsFor: "Abrir registros de {{name}}",
                openLogs: "Abrir registros",
                removeMessage: "Eliminar mensaje (Permanente)",
                removeMessageHistory: "Eliminar historial (Permanente)",
                deleteMessageHide: "Eliminar mensaje (Ocultar de Message Loggers)",
                addServerToBlacklist: "Añadir servidor a lista negra",
                addServerToWhitelist: "Añadir servidor a lista blanca",
                removeServerFromBlacklist: "Quitar servidor de lista negra",
                removeServerFromWhitelist: "Quitar servidor de lista blanca",
                moveServerToBlacklist: "Mover servidor a lista negra",
                moveServerToWhitelist: "Mover servidor a lista blanca",
                addUserToBlacklist: "Añadir usuario a lista negra",
                addUserToWhitelist: "Añadir usuario a lista blanca",
                removeUserFromBlacklist: "Quitar usuario de lista negra",
                removeUserFromWhitelist: "Quitar usuario de lista blanca",
                moveUserToBlacklist: "Mover usuario a lista negra",
                moveUserToWhitelist: "Mover usuario a lista blanca",
                addChannelToBlacklist: "Añadir canal a lista negra",
                addChannelToWhitelist: "Añadir canal a lista blanca",
                removeChannelFromBlacklist: "Quitar canal de lista negra",
                removeChannelFromWhitelist: "Quitar canal de lista blanca",
                moveChannelToBlacklist: "Mover canal a lista negra",
                moveChannelToWhitelist: "Mover canal a lista blanca"
            },
            type: {
                server: "Servidor",
                user: "Usuario",
                channel: "Canal"
            },
            button: {
                chooseFolder: "Elegir carpeta",
                browse: "Explorar",
                clearLogs: "Borrar todos los registros",
                clearVisibleLogs: "Borrar registros visibles",
                sortOldest: "Más antiguos primero",
                sortNewest: "Más recientes primero",
                loadMore: "Cargar más",
                noResults: "Sin resultados en {{tab}}",
                tryOtherTabs: "Prueba con {{nextTab}} o {{lastTab}}",
                importLogs: "Importar registros"
            },
            modal: {
                title: "Filtrar mensajes",
                deleted: "Eliminados",
                edited: "Editados",
                ghostPing: "Ghost Pings",
                empty: "Vació, ¿eh?",
                importLogs: "ML Enhanced ahora guarda los registros en indexeddb. Necesitas importar tus registros antiguos del directorio. Esto no sobrescribirá los actuales."
            },
            clear: {
                title: "Borrar registros",
                description: "¿Estás seguro de que quieres borrar todos los registros?",
                confirm: "Borrar",
                cancel: "Cancelar"
            },
            option: {
                saveMessages: {
                    label: "Guardar mensajes",
                    description: "Si se deben guardar los mensajes eliminados y editados."
                },
                saveImages: {
                    label: "Guardar imágenes",
                    description: "Guardar archivos adjuntos eliminados."
                },
                sortNewest: {
                    label: "Más recientes primero",
                    description: "Ordenar registros por los más nuevos."
                },
                cacheMessagesFromServers: {
                    label: "Caché de mensajes de servidores",
                    description: "Normalmente solo registra MD e IDs permitidos. Activar esto registrará mensajes de todos los servidores. Nota: puede exceder el límite de caché y ralentizar el sistema si estás en muchos servidores."
                },
                ignoreBots: {
                    label: "Ignorar bots",
                    description: "Si se deben ignorar los mensajes de bots"
                },
                ignoreWebhooks: {
                    label: "Ignorar webhooks",
                    description: "Si se deben ignorar los mensajes de webhooks"
                },
                ignoreSelf: {
                    label: "Ignorarme a mí mismo",
                    description: "Si se deben ignorar mis propios mensajes"
                },
                ignoreMutedGuilds: {
                    label: "Ignorar servidores silenciados",
                    description: "No se registrarán mensajes en servidores silenciados (salvo usuarios permitidos)."
                },
                ignoreMutedCategories: {
                    label: "Ignorar categorías silenciadas",
                    description: "No se registrarán mensajes en canales de categorías silenciadas."
                },
                ignoreMutedChannels: {
                    label: "Ignorar canales silenciados",
                    description: "No se registrarán mensajes en canales silenciados."
                },
                alwaysLogDirectMessages: {
                    label: "Registrar siempre mensajes directos",
                    description: "Registrar siempre MDs"
                },
                alwaysLogCurrentChannel: {
                    label: "Registrar siempre canal actual",
                    description: "Registrar siempre el canal seleccionado actualmente."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Eliminar registro permanentemente por defecto",
                    description: "El botón de eliminar registro del MessageLogger base los borrará de forma permanente."
                },
                hideMessageFromMessageLoggers: {
                    label: "Ocultar mensaje de Message Loggers",
                    description: "Añade un botón al menú contextual para borrar mensajes sin que otros loggers los detecten. Úsalo bajo tu propio riesgo."
                },
                showLogsButton: {
                    label: "Mostrar botón de registros",
                    description: "Alternar si se muestra la caja de herramientas o no"
                },
                showWhereMessageIsFrom: {
                    label: "Mostrar procedencia del mensaje",
                    description: "Muestra el canal/autor y el nombre del servidor"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Mensajes a mostrar a la vez",
                    description: "Número de mensajes a mostrar y cargar en la vista de registros."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Texto de reemplazo para mensajes ocultos",
                    description: "Contenido que reemplazará al mensaje cuando uses la función de ocultar de otros loggers."
                },
                messageLimit: {
                    label: "Límite de mensajes",
                    description: "Número máximo de mensajes a guardar. 0 significa sin límite."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Límite de tamaño de adjuntos (MB)",
                    description: "Tamaño máximo de archivo adjunto para guardar."
                },
                attachmentFileExtensions: {
                    label: "Extensiones de archivos adjuntos",
                    description: "Lista de extensiones permitidas separadas por comas. Dejar vacío para todas."
                },
                cacheLimit: {
                    label: "Límite de caché",
                    description: "Máximo de mensajes a mantener en la memoria caché."
                },
                timeBasedCleanupMinutes: {
                    label: "Limpieza programada (minutos)",
                    description: "Intervalo para limpiar mensajes antiguos."
                },
                preserveCurrentChannel: {
                    label: "Preservar canal actual",
                    description: "Los mensajes del canal seleccionado no se verán afectados por la limpieza programada."
                },
                whitelistedIds: {
                    label: "IDs en lista blanca",
                    description: "IDs de servidores, canales o usuarios permitidos."
                },
                blacklistedIds: {
                    label: "IDs en lista negra",
                    description: "IDs de servidores, canales o usuarios bloqueados."
                },
                imageCacheDir: {
                    label: "Directorio de caché de imágenes",
                    description: "Seleccionar carpeta para imágenes guardadas"
                },
                logsDir: {
                    label: "Directorio de registros",
                    description: "Seleccionar carpeta para los registros"
                },
                importLogs: {
                    label: "Importar registros",
                    description: "Importar registros desde archivo"
                },
                exportLogs: {
                    label: "Exportar registros",
                    description: "Exportar registros desde IndexedDB"
                },
                openLogs: {
                    label: "Abrir registros",
                    description: "Abrir registros"
                },
                openImageCacheFolder: {
                    label: "Abrir carpeta de caché de imágenes",
                    description: "Abre el directorio de caché de imágenes"
                },
                clearLogs: {
                    label: "Borrar registros",
                    description: "Borrar registros",
                    title: "Borrar registros",
                    body: "¿Estás seguro de que quieres borrar todos los registros?",
                    confirmText: "Borrar",
                    cancel: "Cancelar"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Recibe avisos visuales (toasts) cuando usuarios específicos envíen un mensaje.",
            dm: "sus MDs",
            option: {
                users: {
                    label: "Usuarios",
                    description: "Lista de IDs de usuario separada por comas para recibir avisos",
                    invalidId: "{{id}} no es un ID de usuario válido"
                }
            },
            notification: {
                title: "{{username}} envió un mensaje",
                body: "Haz clic para ir a {{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Te permite guardar mensajes y usarlos con un comando sencillo.",
            notExist: "¡La etiqueta **{{tagname}}** ya no existe! Reinicia Discord para arreglarlo :)",
            alreadyExist: "¡Ya existe una etiqueta con el nombre **{{tagname}}**!",
            sentTag: "¡La etiqueta **{{tagname}}** ha sido enviada!",
            successCreate: "¡La etiqueta **{{tagname}}** ha sido creada!",
            allTags: "Todas tus etiquetas:",
            noTags: "¡Vaya! No hay etiquetas aún, ¡usa /tag create para crear una!",
            noDeleteTag: "¡La etiqueta **{{tagname}}** no existe, así que no se puede borrar!",
            successDelete: "¡Etiqueta **{{name}}** borrada con éxito!",
            tagPreview: "¡No existe ninguna etiqueta con el nombre **{{name}}**!",
            option: {
                clyde: {
                    label: "Mensaje de Clyde al enviar",
                    description: "Si se activa, Clyde te enviará un mensaje efímero cuando se use una etiqueta."
                },
                tagsList: {
                    label: "Lista de etiquetas",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Gestiona todas tus etiquetas",
                    option: {
                        create: {
                            description: "Crear una nueva etiqueta",
                            name: "Nombre de la etiqueta para activar la respuesta",
                            message: "El mensaje que se enviará al usar esta etiqueta"
                        },
                        list: {
                            description: "Listar todas tus etiquetas"
                        },
                        delete: {
                            description: "Eliminar una de tus etiquetas",
                            name: "Nombre de la etiqueta a eliminar"
                        },
                        preview: {
                            description: "Previsualizar una etiqueta sin enviarla públicamente",
                            name: "Nombre de la etiqueta a previsualizar"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Añade un icono de prueba de bucle de micrófono al panel de usuario.",
            button: "Prueba de bucle de micro"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Varios ajustes para el clic central, como pegar o abrir enlaces.",
            option: {
                openScope: {
                    label: "Alcance de apertura",
                    description: "Evita que el clic central abra estos tipos de contenido.",
                    links: "Enlaces",
                    media: "Multimedia",
                    linksAndMedia: "Enlaces y Multimedia",
                    none: "Ninguno"
                },
                pasteScope: {
                    label: "Alcance de pegado",
                    description: "Evita que el clic central pegue contenido en estas situaciones.",
                    always: "Evitar siempre pegar con clic central",
                    focus: "Evitar solo cuando el área de texto no esté enfocada",
                },
                pasteThreshold: {
                    label: "Umbral de pegado",
                    description: "Milisegundos hasta que se permite volver a pegar tras un clic central."
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Comandos Echo, Lenny, Mock y más.",
            command: {
                echo: {
                    description: "Envía un mensaje como Clyde (localmente)"
                },
                lenny: {
                    description: "Envía una cara lenny"
                },
                mock: {
                    description: "Se ríe de la gente (mOcK PeOpLe)"
                },
                wordcount: {
                    description: "Cuenta el número de palabras en un mensaje",
                    response: "El mensaje contiene {{count}} palabras."
                },
                flipcoin: {
                    description: "Lanza una moneda (cara o cruz)",
                    heads: "Cara",
                    tails: "Cruz",
                    response: "La moneda salió {{result}}."
                },
                ask: {
                    description: "Haz una pregunta de sí/no y obtén respuesta",
                    yes: "Sí",
                    no: "No",
                    maybe: "Quizás",
                    askAgain: "Pregunta más tarde",
                    definitelyNot: "Definitivamente no",
                    itIsCertain: "Es seguro"
                },
                randomanimal: {
                    description: "Obtén una foto de un animal aleatorio",
                    animal: "Elige tu animal",
                    cat: "gato",
                    dog: "perro",
                    response: "Lo siento, no se pudo obtener la imagen en este momento"
                },
                randomnumber: {
                    description: "Genera un número aleatorio entre dos valores",
                    min: "Valor mínimo",
                    max: "Valor máximo",
                    response: "Número aleatorio entre {{min}} y {{max}}: {{number}}"
                },
                choose: {
                    description: "Elige aleatoriamente entre las opciones proporcionadas",
                    option: "Lista de opciones separadas por comas",
                    response: "Elijo: {{choice}}"
                },
                systeminfo: {
                    description: "Muestra información del sistema",
                    platform: "Plataforma",
                    deviceType: "Tipo de dispositivo",
                    mobile: "Móvil",
                    desktop: "Escritorio",
                    browser: "Navegador",
                    cpuCores: "Núcleos CPU",
                    memory: "Memoria",
                    screen: "Pantalla",
                    languages: "Idiomas",
                    network: "Red",
                    online: "En línea",
                    offline: "Desconectado",
                    failedToFetch: "Error al obtener la información del sistema",
                    unknown: "Desconocido"
                },
                getuptime: {
                    description: "Obtén el tiempo de actividad del cliente",
                    response: "**Actividad del cliente**: {{uptime}} minutos"
                },
                gettime: {
                    description: "Obtén la hora actual",
                    response: "La hora actual es {{time}}"
                },
                transform: {
                    description: "Transforma tu texto con la opción especificada",
                    transformation: {
                        description: "Transformación a aplicar",
                        lowercase: "Convertir a minúsculas",
                        uppercase: "Convertir a mayúsculas",
                        localeLowercase: "Minúsculas de región",
                        localeUppercase: "Mayúsculas de región",
                        same: "Mantener igual"
                    },
                    repeat: "cuántas veces repetir",
                    reverse: "si se debe invertir el texto",
                    normalize: {
                        description: "Forma de normalización de texto",
                        nfc: "Forma NFC",
                        nfd: "Forma NFD",
                        nfkc: "Forma NFKC",
                        nfkd: "Forma NFKD"
                    },
                    text: "Texto a transformar"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Añade más Kaomojis a Discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Mejora los botones de reacción rápida en el menú contextual de mensajes.",
            option: {
                reactionCount: {
                    label: "Recuento de reacciones",
                    description: "Número de reacciones (0-42)"
                },
                frequentEmojis: {
                    label: "Emojis frecuentes",
                    description: "Usa los emojis frecuentes en lugar de los favoritos"
                },
                rows: {
                    label: "Filas",
                    description: "Filas de reacciones rápidas a mostrar"
                },
                columns: {
                    label: "Columnas",
                    description: "Columnas de reacciones rápidas a mostrar"
                },
                compactMode: {
                    label: "Modo compacto",
                    description: "Reduce los botones al 75% y aumenta el emoji interior al 125%. Se recomiendan al menos 5 columnas."
                },
                scroll: {
                    label: "Desplazamiento",
                    description: "Habilita el desplazamiento en la lista de emojis"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Añade etiquetas para webhooks y roles moderativos (dueño, admin, etc.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Este usuario es un webhook"
                },
                owner: {
                    name: "Dueño",
                    description: "Dueño del servidor"
                },
                admin: {
                    name: "Admin",
                    description: "Tiene permisos de administrador"
                },
                staff: {
                    name: "Staff",
                    description: "Puede gestionar el servidor, canales o roles"
                },
                mod: {
                    name: "Mod",
                    description: "Puede gestionar mensajes o expulsar/banear"
                },
                vcmod: {
                    name: "VC Mod",
                    description: "Puede gestionar chats de voz"
                },
                chatmod: {
                    name: "Chat Mod",
                    description: "Puede gestionar mensajes"
                }
            },
            modal: {
                example: "Ejemplo",
                tag: "Etiqueta",
                customTextPlaceholder: "Texto en la etiqueta (por defecto: {{displayName}})",
                messages: "Mostrar en mensajes",
                memberList: "Mostrar en lista de miembros y perfiles"
            },
            option: {
                dontShowForBots: {
                    label: "No mostrar para bots",
                    description: "No mostrar etiquetas extra para bots (excluyendo webhooks)"
                },
                dontShowBotTag: {
                    label: "No mostrar etiqueta de bot",
                    description: "Solo mostrar etiquetas extra / Ocultar texto [APP]"
                },
                showWebhookTagFully: {
                    label: "Mostrar etiqueta de webhook completa",
                    description: "Muestra la etiqueta de Webhook en canales seguidos como anuncios"
                },
                tagSettings: {
                    label: "Ajustes de etiquetas",
                    description: "relléname"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Un comando de barra para traducir a/desde código morse.",
            command: {
                morse: {
                    description: "Traducir a o desde código Morse",
                    message: "Texto a convertir"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Volumen",
                    description: "Volumen del 🗿🗿🗿"
                },
                quality: {
                    label: "Calidad",
                    description: "Calidad del 🗿🗿🗿",
                    normal: "Normal",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Activar cuando no esté en foco",
                    description: "Activa el 🗿 incluso cuando la ventana no esté enfocada"
                },
                ignoreBots: {
                    label: "Ignorar bots",
                    description: "Ignorar mensajes de bots"
                },
                ignoreBlocked: {
                    label: "Ignorar bloqueados",
                    description: "Ignorar mensajes de usuarios bloqueados"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Controles de música y letras para múltiples servicios.",
            option: {
                SpotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Mostrar controles de Spotify",
                    description: "Muestra los controles de música para Spotify"
                },
                showSpotifyLyrics: {
                    label: "Mostrar letras de Spotify",
                    description: "Muestra las letras para Spotify"
                },
                useSpotifyUris: {
                    label: "Usar URIs de Spotify",
                    description: "Abre URIs de Spotify en lugar de URLs. Solo funciona con la app instalada."
                },
                previousButtonRestartsTrack: {
                    label: "Botón anterior reinicia pista",
                    description: "Reinicia la canción actual al pulsar 'anterior' si lleva >3s"
                },
                TidalSectionTitle: {
                    label: "Tidal"
                },
                showTidalControls: {
                    label: "Mostrar controles de Tidal",
                    description: "Muestra los controles de música para Tidal"
                },
                showTidalLyrics: {
                    label: "Mostrar letras de Tidal",
                    description: "Muestra las letras para Tidal"
                },
                YtmSectionTitle: {
                    label: "YouTube Music",
                    description: "Se requiere {{app}} para estos ajustes"
                },
                showYoutubeMusicControls: {
                    label: "Mostrar controles de YouTube Music",
                    description: "Muestra los controles para YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "URL de la API de YouTube Music",
                    description: "La URL del servidor API de YouTube Music que estés usando"
                },
                hoverControls: {
                    label: "Controles al pasar el ratón",
                    description: "Muestra los controles solo al pasar el ratón"
                },
                ShowMusicNoteOnNoLyrics: {
                    label: "Nota musical si no hay letra",
                    description: "Muestra un icono de nota musical cuando no se encuentran letras"
                },
                LyricsPosition: {
                    label: "Posición de las letras",
                    description: "Posición del panel de letras",
                    above: "Sobre el reproductor(es)",
                    below: "Bajo el reproductor(es)"
                },
                LyricsProvider: {
                    label: "Proveedor de letras",
                    description: "De dónde se obtienen las letras",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "Traducir a",
                    description: "Traducir letras a (cambiar esto borrará las traducciones existentes)",
                    cleared: "Traducción borrada"
                },
                LyricsConversion: {
                    label: "Conversión de letras",
                    description: "Traducir o romanizar letras automáticamente",
                    none: "Ninguno",
                    translate: "Traducir",
                    romanize: "Romanizar"
                },
                FallbackProvider: {
                    label: "Proveedor alternativo",
                    description: "Si falla un proveedor, intenta con otros"
                },
                ShowFailedToasts: {
                    label: "Avisos de error",
                    description: "Muestra avisos cuando las letras no cargan"
                },
                PurgeLyricsCache: {
                    label: "Purgar caché de letras",
                    description: "Borra todas las letras y traducciones guardadas",
                    button: "Purgar caché",
                    cacheLyricsPurged: "Caché de letras purgada"
                }
            },
            context: {
                spotify: {
                    label: "Menú de letras de Spotify",
                    type: "Menú de {{type}} de Spotify",
                    copy: "Copiar nombre de {{type}}",
                    link: "Copiar enlace de {{type}}",
                    open: "Abrir {{type}} en Spotify",
                    album: "Menú de álbum de Spotify"
                },
                tidal: {
                    label: "Menú de letras de Tidal",
                    lyrics: "Letras de Tidal",
                    type: "Menú de {{name}} de Tidal",
                    copy: "Copiar nombre de {{name}}",
                    open: "Abrir {{name}} en Tidal",
                    album: "Menú de álbum de Tidal"
                },
                ytm: {
                    type: "Menú de {{name}} de YouTube Music",
                    copy: "Copiar nombre de {{name}}",
                    open: "Abrir {{name}} en YouTube Music",
                    album: "Menú de álbum de YouTube Music",
                    muted: "Silenciado"
                },
                lyrics: {
                    provider: "Proveedor de letras",
                    saved: "guardado",
                    notFound: "No se encontraron letras sincronizadas"
                },
                copy: {
                    currentLyrics: "Copiar letra actual"
                }
            },
            alert: {
                lyricCopied: "¡Letra copiada al portapapeles!",
                noLyrics: "Sin letras",
                noLyricsTo: "Sin letras para {{translated}}",
                translate: "traducir",
                romanize: "romanizar",
                lyricsFetchFailed: "Error al obtener letras",
                failedToFetchLyrics: "Error al obtener {{translated}}",
                translation: "traducción",
                romanization: "romanización",
                failedToFetchTranslation: "Error al obtener la letra de la {{translated}}"
            },
            modal: {
                install: {
                    title: "Cómo instalar",
                    install: "Instala {{link}} desde aquí, luego ve a ajustes de TidalLuna → Plugin stores → Instalar @vmohammad/api",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "No hay ninguna pista sonando",
                    artist: "Artista:",
                    album: "Álbum:",
                    noLyrics: "No hay letras disponibles :(",
                    progress: "Progreso",
                    totalDuration: "Duración total"
                },
                type: {
                    song: "Canción",
                    artist: "Artista",
                    album: "Álbum"
                },
                album: {
                    open: "Abrir álbum",
                    viewCover: "Ver carátula",
                    volume: "Volumen",
                    image: "Imagen del álbum"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Traducido",
                romanized: "Romanizado",
                none: "Ninguno"
            },
            error: {
                failed: "Error al cargar el modal :(",
                checkConsole: "Consulta la consola para ver los errores",
                invalidUrlCustomApi: "Formato de URL no válido para el servidor API personalizado"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Muestra los MDs de grupo mutuos en los perfiles.",
            no: "Sin grupos mutuos",
            mutualGroup: "{{count}} grupo{{s}} mutuo{{s}}",
            members: "Miembros",
            noGroup: "No hay grupos de MD en común",
            header: "Grupos mutuos"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Evita que las vistas previas de llamadas/PiP (pantalla compartida, transmisiones, etc.) se pausen incluso si el cliente pierde el foco.",
            about: "Este complemento hará que Discord utilice más recursos de lo habitual."
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Silencia automáticamente nuevos servidores y cambia varios ajustes al unirte a ellos.",
            context: {
                apply: "Aplicar NewGuildSettings"
            },
            option: {
                guild: {
                    label: "Silenciar servidor",
                    description: "Silencia el servidor automáticamente"
                },
                messages: {
                    label: "Ajustes de notificaciones del servidor",
                    description: "Ajustes de notificaciones del servidor",
                    all: "Todos los mensajes",
                    mentions: "Solo @menciones",
                    nothing: "Nada",
                    default: "Predeterminado del servidor"
                },
                everyone: {
                    label: "Suprimir @everyone y @here",
                    description: "Suprime las menciones a @everyone y @here"
                },
                role: {
                    label: "Suprimir todas las menciones de rol",
                    description: "Suprime todas las menciones a roles"
                },
                highlights: {
                    label: "Suprimir destacados",
                    description: "Suprime los destacados automáticamente"
                },
                events: {
                    label: "Silenciar nuevos eventos",
                    description: "Silencia nuevos eventos automáticamente"
                },
                showAllChannels: {
                    label: "Mostrar todos los canales",
                    description: "Muestra todos los canales automáticamente"
                },
                mobilePush: {
                    label: "Silenciar notificaciones push móviles",
                    description: "Silencia las notificaciones push en el móvil automáticamente"
                },
                voiceChannels: {
                    label: "Canales de voz",
                    description: "Oculta nombres en canales de voz automáticamente"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Utilidad que te notifica cuando se añaden nuevos complementos a Plexcord.",
            modal: {
                title: "Nuevos complementos y ajustes",
                description: "Se han añadido nuevos complementos y ajustes desde tu última visita. Por favor, revisa las novedades a continuación.",
                tooltip: "Descartar para esta sesión",
                dontShowAgain: "No volver a mostrar esto",
                restartRequired: "Es necesario reiniciar para aplicar los cambios",
                restart: "Reiniciar",
                continue: "Continuar"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Devuelve la etiqueta del bot a su forma original."
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Oculta completamente del chat todos los mensajes bloqueados o ignorados.",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Ocultar también usuarios ignorados",
                    description: "Oculta también los mensajes de usuarios ignorados."
                },
                disableNotifications: {
                    label: "Desactivar notificaciones",
                    description: "Oculta las notificaciones de nuevos mensajes de usuarios bloqueados. Siempre activo si 'Ocultar usuarios por defecto' está habilitado y el usuario no está en la lista de excepciones."
                },
                allowAutoModMessages: {
                    label: "Permitir mensajes de AutoMod",
                    description: "Permite que los mensajes enviados por AutoMod omitan el filtrado."
                },
                hideBlockedUserReplies: {
                    label: "Ocultar respuestas de usuarios bloqueados",
                    description: "Oculta mensajes de usuarios bloqueados en hilos si has participado en ellos."
                },
                defaultHideUsers: {
                    label: "Ocultar usuarios por defecto",
                    description: "Si está activado, los mensajes de usuarios bloqueados se ocultarán por completo y los de la lista de excepciones se colapsarán (comportamiento normal de Discord). Si está desactivado, ocurrirá lo contrario."
                },
                overrideUsers: {
                    label: "Lista de excepciones de usuarios",
                    description: "Lista de IDs de usuario (separadas por comas) que se ocultarán o colapsarán de forma distinta al comportamiento por defecto."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Evita que escribas viñetas de markdown (son molestas)."
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Desactiva la redundante función de enlaces profundos de Discord que intenta obligarte a usar su aplicación de escritorio."
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Elimina el requisito de 'escribir el nombre del servidor' al borrar un servidor.",
            option: {
                confirmModal: {
                    label: "Ventana de confirmación",
                    description: "¿Debería mostrarse la ventana de '¿Estás seguro de que quieres borrar?'?"
                }
            },
            modal: {
                title: "¿Borrar servidor?",
                body: "Es permanente, por si no fuera obvio.",
                confirm: "Borrar",
                cancel: "Cancelar"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Desactiva el banner de advertencia 'HOLD UP' en la consola. Como efecto secundario, evita que Discord oculte tu token, lo que previene cierres de sesión aleatorios."
        },
        noF1: {
            name: "NoF1",
            description: "Desactiva el acceso rápido de ayuda de la tecla F1."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Al pegar un enlace teniendo texto seleccionado, no se pegará como una URL enmascarada."
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Evita que la cámara se muestre en modo espejo en tu pantalla."
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Elimina la animación de 300ms al abrir o cerrar ventanas modales."
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Elimina el mosaico de imágenes de Discord.",
            option: {
                inlineVideo: {
                    label: "Vídeo integrado",
                    description: "Reproduce vídeos sin la ventana de carrusel."
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Elimina TODOS los anuncios de Nitro de Discord engañando al cliente para que piense que tienes Nitro."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Omite el proceso de bienvenida (onboarding) de Discord para entrar más rápido a los servidores."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Omite el lento y molesto retraso del proceso de bienvenida."
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Elimina el contador de notificaciones de solicitudes de amistad entrantes, solicitudes de mensaje y ofertas de Nitro.",
            option: {
                hideFriendRequestsCount: {
                    label: "Ocultar contador de solicitudes de amistad",
                    description: "Oculta el contador de solicitudes de amistad entrantes."
                },
                hideMessageRequestsCount: {
                    label: "Ocultar contador de solicitudes de mensaje",
                    description: "Oculta el contador de solicitudes de mensaje."
                },
                hidePremiumOffersCount: {
                    label: "Ocultar contador de ofertas Premium",
                    description: "Oculta el contador de ofertas de Nitro."
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Elimina completamente los temas de perfil de Nitro de todo el mundo excepto el tuyo."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Omite el requisito de pulsación para hablar (PTT) en canales que obligan a usarlo."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Desactiva las menciones al responder por defecto.",
            option: {
                userList: {
                    label: "Lista de usuarios",
                    description: "Lista de usuarios para permitir o eximir menciones (separados por comas o espacios)."
                },
                roleList: {
                    label: "Lista de roles",
                    description: "Lista de roles para permitir o eximir menciones (separados por comas o espacios)."
                },
                shouldPingListed: {
                    label: "Comportamiento de mención",
                    description: "Comportamiento",
                    dontPing: "No mencionar a los usuarios/roles de la lista",
                    onlyPing: "Mencionar solo a los usuarios/roles de la lista"
                },
                inverseShiftReply: {
                    label: "Respuesta con Shift inversa",
                    description: "Invierte el comportamiento de la tecla Shift al responder (actívalo para que Shift + clic mencione al usuario)."
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Elimina los prefijos canary/ptb de los enlaces de mensajes."
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "¡Todos somos iguales! Elimina los encabezados de roles en la lista de miembros."
        },
        noRPC: {
            name: "NoRPC",
            description: "Desactiva el Rich Presence (actividad) de Discord."
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "No muestra emojis del servidor en el menú de autocompletado.",
            option: {
                shownEmojis: {
                    label: "Emojis mostrados",
                    description: "Elige qué emojis mostrar en el menú de autocompletado",
                    onlyUnicode: "Solo emojis unicode",
                    currentServer: "Emojis unicode y del servidor actual",
                    all: "Emojis unicode y de todos los servidores (por defecto de Discord)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Desactiva el globo de mensajes no leídos en la barra de tareas y en la bandeja del sistema."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Hace que las notificaciones de escritorio sean más informativas."
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Establece un volumen personalizado para las notificaciones de Discord.",
            option: {
                notificationVolume: {
                    label: "Volumen de notificaciones",
                    description: "Volumen de las notificaciones"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Desactiva la animación de escritura en el chat."
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Te permite saltar a mensajes de usuarios bloqueados, ignorados o sospechosos de spam sin tener que desbloquearlos."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Si un usuario envía varios mensajes seguidos en MD, solo recibirás un aviso sonoro.",
            option: {
                channelToAffect: {
                    label: "Canal afectado",
                    description: "Selecciona el tipo de MD sobre el que actuará el complemento",
                    both: "Ambos",
                    user: "MD de usuarios",
                    group: "MD de grupo"
                },
                allowMentions: {
                    label: "Permitir menciones",
                    description: "Recibir avisos sonoros por @menciones"
                },
                allowEveryone: {
                    label: "Permitir @everyone",
                    description: "Recibir avisos sonoros por @everyone y @here en MD de grupo"
                },
                ignoreUsers: {
                    label: "Ignorar usuarios",
                    description: "IDs de usuario (separadas por coma y espacio) cuyos avisos NUNCA deben limitarse"
                },
                alwaysPlaySound: {
                    label: "Reproducir sonido siempre",
                    description: "Reproduce el sonido de notificación incluso cuando está desactivado"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Abre los enlaces en sus aplicaciones respectivas en lugar de en el navegador.",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Abre enlaces de Spotify en su aplicación"
                },
                steam: {
                    label: "Steam",
                    description: "Abre enlaces de Steam en su aplicación"
                },
                epic: {
                    label: "Epic Games",
                    description: "Abre enlaces de Epic Games en su lanzador"
                },
                tidal: {
                    label: "Tidal",
                    description: "Abre enlaces de Tidal en su aplicación"
                },
                itunes: {
                    label: "iTunes",
                    description: "Abre enlaces de Apple Music en iTunes"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Abre enlaces de VRChat en la aplicación VRCX"
                }
            },
            notification: {
                open: "Enlace abierto en la aplicación nativa"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Permite ignorar el diseño o el orden de clasificación por defecto de los foros. Puedes seguir cambiándolo canal por canal.",
            option: {
                defaultLayout: {
                    label: "Diseño por defecto",
                    description: "Qué diseño usar por defecto",
                    list: "Lista",
                    gallery: "Galería"
                },
                defaultSortOrder: {
                    label: "Orden por defecto",
                    description: "Qué orden de clasificación usar por defecto",
                    recentlyActive: "Actividad reciente",
                    datePosted: "Fecha de publicación"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Te permite usar el modo fiesta porque la fiesta nunca termina ✨",
            option: {
                superIntensePartyMode: {
                    label: "Modo fiesta superintenso",
                    description: "Intensidad de la fiesta",
                    normal: "Normal",
                    better: "Mejor",
                    projectX: "Proyecto X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Recupera la opción de pausar invitaciones indefinidamente que Discord eliminó de forma redundante.",
            pauseIndefinitely: "Pausar indefinidamente"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Desactiva las restricciones del lado del cliente para la gestión de permisos de canales.",
            option: {
                lockout: {
                    label: "Bloqueo de seguridad",
                    description: "Ignora la prevención de bloqueo de permisos ('Seguro que no quieres hacer esto')"
                },
                onboarding: {
                    label: "Onboarding",
                    description: "Ignora los requisitos de bienvenida ('Hacer este cambio hará que tu servidor sea incompatible [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Ver los permisos que tiene un usuario o canal, y los roles de un servidor.",
            view: "Ver permisos",
            option: {
                permissionsSortOrder: {
                    label: "Orden de clasificación de permisos",
                    description: "Método de clasificación para definir qué rol otorga un permiso a un usuario",
                    highest: "Rol más alto",
                    lowest: "Rol más bajo"
                }
            },
            icon: {
                denied: "Denegado",
                allowed: "Permitido",
                notOverwritten: "Sin sobrescribir"
            },
            context: {
                permissions: "Permisos"
            },
            modal: {
                title: "Permisos",
                noPermissions: "¡No hay permisos que mostrar!",
                owner: "dueño",
                grantedBy: "Otorgado por",
                serverOwner: "Dueño del servidor",
                ownerRole: "Dueño",
                sortingBy: "Ordenado por {{method}}",
                highest: "Rol más alto",
                lowest: "Rol más bajo",
                details: "Detalles del rol"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Añade el comando /petpet para crear GIFs de caricias en la cabeza desde cualquier imagen.",
            command: {
                petpet: {
                    description: "Crea un GIF de caricias. Solo puedes especificar una de las opciones de imagen.",
                    delay: "Retraso entre fotogramas. Por defecto es 20.",
                    resolution: "Resolución del GIF. Por defecto 120. Si pones un número loco y se congela Discord, es culpa tuya.",
                    image: "Archivo adjunto de imagen a usar",
                    url: "URL para obtener la imagen",
                    user: "Usuario cuyo avatar se usará como imagen",
                    noServerPfp: "Usa el avatar normal en lugar del específico del servidor al usar la opción 'usuario'",
                    error: {
                        noImage: "¡No se ha especificado ninguna imagen!",
                        delayTooLow: "El retraso debe ser de al menos 20."
                    }
                }
            },
            error: {
                uploadNotImage: "El archivo subido no es una imagen",
                fetchUserFailed: "Error al obtener el usuario. Consulta la consola.",
                fetchImageFailed: "Ocurrió un error al cargar {{url}}. Consulta la consola."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Añade el modo Imagen en imagen (PiP) a los vídeos (junto al botón de descarga).",
            tooltip: "Alternar Imagen en imagen",
            option: {
                loop: {
                    label: "Bucle",
                    description: "Si el vídeo en PiP debe repetirse o no"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Permite fijar canales privados en la parte superior de tu lista de MD. Haz clic derecho para fijar, desfijar o reordenar.",
            context: {
                category: {
                    label: "Menú de categoría de MD fijados",
                    edit: "Editar categoría",
                    up: "Subir",
                    down: "Bajar",
                    delete: "Borrar categoría",
                    unnamed: "vaya..."
                },
                pin: {
                    label: "Fijar MD",
                    addCategory: "Añadir categoría"
                },
                unPin: {
                    label: "Desfijar MD",
                    move: "Mover a categoría"
                }
            },
            option: {
                pinOrder: {
                    label: "Orden de fijados",
                    description: "¿En qué orden deben mostrarse los MD fijados?",
                    lastMessage: "Mensaje más reciente",
                    custom: "Personalizado (clic derecho para reordenar)"
                },
                canCollapseDmSection: {
                    label: "Sección de fijados colapsable",
                    description: "Permite que la sección de MD sin categoría se pueda colapsar"
                },
                dmSectionCollapsed: {
                    label: "Sección de MD colapsada",
                    description: "Colapsar sección de MD"
                },
                userBasedCategoryList: {
                    label: "Lista de categorías basada en usuario",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Fijar categoría",
                    edit: "Editar categoría",
                    new: "Nueva categoría",
                    name: "Nombre",
                    color: "Color",
                    save: "Guardar",
                    create: "Crear"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Notificaciones personalizables con formato de mención mejorado.",
            option: {
                friends: {
                    label: "Amigos",
                    description: "Notificar cuando amigos envíen mensajes en servidores"
                },
                mentions: {
                    label: "Menciones",
                    description: "Notificar cuando alguien te menciona directamente"
                },
                dms: {
                    label: "MD",
                    description: "Notificar por mensajes directos (MD)"
                },
                showInActive: {
                    label: "Mostrar en canal activo",
                    description: "Mostrar notificaciones incluso para el canal en el que estás ahora"
                },
                ignoreMuted: {
                    label: "Ignorar silenciados",
                    description: "Omitir notificaciones de servidores, canales o usuarios silenciados"
                }
            },
            unknown: "Desconocido",
            dm: "MD",
            groupDM: "MD de grupo",
            title: "{{username}} en {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Añade un icono de chincheta a los mensajes fijados."
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "No muestra los iconos pequeños de los servidores dentro de las carpetas."
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Añade indicadores de plataforma (Escritorio, Móvil, Web...) a los usuarios.",
            embeddedTooltip: "Consola",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Lista",
                    description: "Mostrar indicadores en la lista de miembros"
                },
                badges: {
                    label: "Insignias",
                    description: "Mostrar indicadores en los perfiles de usuario como insignias"
                },
                messages: {
                    label: "Mensajes",
                    description: "Mostrar indicadores dentro de los mensajes"
                },
                colorMobileIndicator: {
                    label: "Color del indicador móvil",
                    description: "Si el indicador móvil debe coincidir con el color del estado del usuario."
                },
                showBots: {
                    label: "Mostrar bots",
                    description: "Si se deben mostrar indicadores de plataforma en los bots"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Falsifica la plataforma o el dispositivo desde el que estás conectado.",
            about: "No podemos garantizar que este complemento no resulte en una advertencia o baneo.",
            platform: {
                desktop: "Cliente de Discord",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Discord integrado",
                playstation: "Discord integrado",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Plataforma",
                    description: "Qué plataforma quieres aparentar",
                    desktop: "Escritorio",
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
            description: "Añade un botón a la AppBar que contiene las acciones rápidas de Plexcord.",
            tooltip: "Caja de herramientas de Plexcord",
            context: {
                openLog: "Abrir registro de notificaciones",
                enableQuickCSS: "Activar QuickCSS",
                openQuickCSS: "Editar QuickCSS",
                openSettings: "Abrir ajustes",
                manageThemes: "Gestionar temas"
            },
            option: {
                showPluginMenu: {
                    label: "Mostrar menú de complementos",
                    description: "Muestra el menú de plugins en la caja de herramientas de Plexcord"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "Retoca tus mensajes para que se vean mejor y tengan mejor gramática. Mira los ajustes.",
            option: {
                quickDisable: {
                    label: "Desactivado rápido",
                    description: "Desactiva la modificación de mensajes sin tener que recargar el cliente."
                },
                blockedWords: {
                    label: "Palabras bloqueadas",
                    description: "Palabras que no se escribirán en mayúscula (separadas por comas)."
                },
                fixApostrophes: {
                    label: "Corregir apóstrofos",
                    description: "Asegura que las contracciones contengan apóstrofos."
                },
                expandContractions: {
                    label: "Expandir contracciones",
                    description: "Expande las contracciones de palabras."
                },
                fixCapitalization: {
                    label: "Corregir mayúsculas",
                    description: "Escribe en mayúscula el inicio de las frases."
                },
                fixPunctuation: {
                    label: "Corregir puntuación",
                    description: "Corrige el espaciado alrededor de los signos de puntuación."
                },
                fixPunctuationFrequency: {
                    label: "Frecuencia de corrección de puntuación",
                    description: "Porcentaje de frecuencia de puntos (esto molesta mucho a algunas personas)."
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Te permite previsualizar tu mensaje antes de enviarlo.",
            tooltip: "Previsualizar mensaje"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Te permite guardar y cargar diferentes ajustes de perfil mediante la sección Perfil en Ajustes.",
            toast: {
                importFailed: "Error al importar los perfiles. El archivo podría ser inválido."
            },
            option: {
                avatarSize: {
                    label: "Tamaño del avatar",
                    description: "Tamaño del avatar en la lista de perfiles"
                }
            },
            modal: {
                override: "Sobrescribir",
                merge: "Combinar",
                cancel: "Cancelar",
                timestamp: "{{formattedDate}} a las {{formattedTime}}",
                rename: "Renombrar",
                update: "Actualizar",
                moveUp: "Subir",
                moveDown: "Bajar",
                moveTo: "Mover a página 1",
                delete: "Borrar",
                importProfiles: "Importar perfiles",
                importText: "Tienes {{existingCount}} perfiles existentes. ¿Quieres sobrescribirlos o combinarlos con los importados?",
                heading: "Perfiles guardados",
                searchProfiles: "Buscar perfiles...",
                profileName: "Nombre del perfil",
                saving: "Guardando...",
                save: "Guardar perfil",
                cancelSearch: "Cancelar búsqueda",
                search: "Buscar",
                random: "Aleatorio",
                import: "Importar",
                exportAll: "Exportar todo"
            }
        },
        questify: {
            name: "Questify",
            description: "Mejora tu experiencia con las Quests con un conjunto de funciones, o desactívalas por completo si no son lo tuyo.",
            quests: "Quests",
            context: {
                quest: {
                    label: "Menú del botón de Quests",
                    ignore: "Marcar todas como ignoradas",
                    reset: "Restablecer lista de ignoradas",
                    fetch: "Buscar Quests",
                    markAsIgnored: "Marcar como ignorada",
                    unmarkAsIgnored: "Desmarcar como ignorada",
                    stopAuto: "Detener completado automático",
                    copyQuestID: "Copiar ID de la Quest",
                    startAuto: "Iniciar completado automático"
                }
            },
            settings: {
                questButton: {
                    title: "Botón de Quests",
                    description: "Muestra un botón de Quests en la lista de servidores con un indicador opcional para las Quests sin reclamar.",
                    leftClick: "Acción al hacer clic izquierdo",
                    middleClick: "Acción al hacer clic central",
                    rightClick: "Acción al hacer clic derecho",
                    visibility: "Visibilidad del botón",
                    unclaimedIndicator: "Indicador de no reclamadas",
                    badgeColor: "Color de la insignia",
                    rewardDisplay: "Visualización de recompensas",
                    includedRewardTypes: "Tipos de recompensas incluidas",
                    includedRewardTypesDesc: "Solo contar las Quests con estos tipos de recompensa como no reclamadas al determinar la visibilidad del botón, el recuento de la insignia y al reproducir el sonido de alerta.",
                    selectRewardTypes: "Selecciona qué tipos de recompensa incluir en el recuento de no reclamadas...",
                    noRewardType: "No existe ninguna función de Quest con ese nombre.",
                    default: "Predeterminado",
                    disable: "Desactivar"
                },
                questFeatures: {
                    title: "Funciones de Quest",
                    description: "Modifica funciones específicas de las Quests.",
                    popupWarning: "La opción {{disablePopup}} se ignorará para las Quests completadas y el seguimiento del progreso.",
                    videoQuestInfo: "La opción {{completeVideo}} esperará la duración de la Video Quest y la marcará como completada automáticamente.",
                    gameQuestInfo: "Del mismo modo, la opción {{completeGame}} esperará la duración de la Game Quest y la marcará como completada automáticamente. Esta opción solo es compatible con el cliente oficial de escritorio.",
                    manualStartWarning: "Aún debes iniciar las Quests manualmente. El primer clic iniciará la Quest en segundo plano. Para las Video Quests, los clics posteriores abrirán la ventana del vídeo normalmente. Para abortar la Quest, puedes abrir el menú contextual en la ficha de la Quest y seleccionar {{stopAuto}}.",
                    tosWarning: "El uso de cualquiera de estas opciones va en contra de los términos de servicio de Discord. Úsalas bajo tu propio riesgo.",
                    selectFeatures: "Selecciona qué funciones de Quest quieres modificar.",
                    disablePopup: "Desactivar ventana emergente sobre el panel de cuenta",
                    completeVideo: "Completar Video Quests en segundo plano",
                    completeGame: "Completar Game Quests en segundo plano",
                    stopAuto: "Detener completado automático"
                },
                restyleQuests: {
                    title: "Rediseñar Quests",
                    description: "Resalta las Quests con colores de tema opcionales para mejorar la visibilidad.",
                    precedenceNote: "Los estilos de Quest reclamada y expirada tendrán prioridad incluso si la Quest está ignorada.",
                    gradientStyle: "Estilo de degradado",
                    assetPreload: "Precarga de recursos",
                    unclaimed: "Sin reclamar",
                    claimed: "Reclamada",
                    ignored: "Ignorada",
                    expired: "Expirada",
                    intenseGradient: "Degradado intenso",
                    defaultGradient: "Degradado por defecto",
                    blackGradient: "Degradado negro sutil",
                    noGradient: "Sin degradado",
                    loadAllAssets: "Cargar todos los recursos al cargar la página",
                    loadDuringScroll: "Cargar recursos durante el desplazamiento de la página"
                },
                reorderQuests: {
                    title: "Reordenar Quests",
                    description: "Ordena las Quests por su estado. Se aplica cuando se selecciona la opción de orden \"Questify\" en la página de Quests.",
                    formatNote: "La lista separada por comas debe contener todos estos elementos: {{items}}.",
                    placeholder: "Debes incluir todos estos: UNCLAIMED, CLAIMED, IGNORED, EXPIRED",
                    invalidFormat: "Formato inválido.",
                    unclaimedSubsort: "Suborden de no reclamadas",
                    claimedSubsort: "Suborden de reclamadas",
                    ignoredSubsort: "Suborden de ignoradas",
                    expiredSubsort: "Suborden de expiradas",
                    addedNewest: "Añadida (Más reciente)",
                    addedOldest: "Añadida (Más antigua)",
                    expiredRecent: "Expirada (Más reciente)",
                    expiredLeast: "Expirada (Menos reciente)",
                    expiringSoon: "Expirando (Próximamente)",
                    expiringLate: "Expirando (Más tarde)",
                    claimedRecent: "Reclamada (Más reciente)",
                    claimedLeast: "Reclamada (Menos reciente)",
                    ignoredQuestProfile: "Perfil de Quests ignoradas",
                    sharedProfile: "Compartido: Todas las cuentas en este cliente comparten las ignoradas.",
                    privateProfile: "Privado: Todas las cuentas en este cliente tienen listas de ignoradas separadas.",
                    rememberSort: "Recordar elección de orden",
                    rememberFilter: "Recordar elección de filtro",
                    yes: "Sí",
                    no: "No",
                    rememberNote: "Esta elección de orden y filtro se refiere a las opciones integradas en la página de Quests. El orden personalizado de arriba solo se aplica si se selecciona el orden \"Questify\". Si se desactiva el recordatorio, las opciones se restablecerán cada vez que abras la página."
                },
                fetchingQuests: {
                    title: "Búsqueda de Quests",
                    description: "Configura la frecuencia con la que se buscan Quests de Discord y establece alertas para nuevas Quests.",
                    defaultBehavior: "Por defecto, Discord solo busca Quests al cargar o al visitar la página de Quests. Sin un intervalo definido, el plugin no detectará nuevas Quests añadidas durante el día.",
                    requirement: "Esto requiere que el Botón de Quest esté activado y configurado en {{unclaimed}} o {{always}} con indicadores activados. De lo contrario, no hay razón para buscar periódicamente.",
                    blockWarning: "Además, si {{fetchingQuests}} está bloqueado en los ajustes de {{questFeatures}}, esto no funcionará.",
                    fetchInterval: "Intervalo de búsqueda",
                    alertSound: "Sonido de alerta",
                    intervalPlaceholder: "Selecciona o escribe un intervalo entre 30 minutos y 12 horas.",
                    intervalFeedback: "Los intervalos deben estar entre 30 minutos y 12 horas.",
                    soundPlaceholder: "Selecciona un sonido o proporciona una URL personalizada.",
                    soundFeedback: "Sonido no encontrado o la URL no pertenece a un dominio compatible.",
                    disabled: "Desactivado",
                    minutes: "Minutos",
                    minute: "Minuto",
                    hours: "Horas",
                    hour: "Hora",
                    thirtyMinutes: "30 minutos",
                    oneHour: "1 hora",
                    threeHours: "3 horas",
                    sixHours: "6 horas",
                    twelveHours: "12 horas",
                    customSound: "SONIDO PERSONALIZADO"
                },
                disableOptions: {
                    everything: "Desactivar todo",
                    discovery: "Desactivar pestaña Discovery",
                    dms: "Desactivar pestaña de Quests en MD",
                    fetching: "Desactivar búsqueda de Quests",
                    popup: "Desactivar ventana emergente sobre panel de cuenta",
                    sponsored: "Desactivar banner patrocinado en página de Quests",
                    badge: "Desactivar insignia en perfiles de usuario",
                    inventory: "Desactivar aviso de reubicación del inventario de regalos",
                    friendsList: "Promoción de 'Activos ahora' en lista de amigos",
                    membersList: "Iconos de 'Jugando activamente' en lista de miembros",
                    gameQuests: "Completar Play Game/Activity Quests en segundo plano",
                    videoQuests: "Completar Watch Video Quests en segundo plano",
                    achievementQuests: "Completar tareas de Activity Quests en segundo plano",
                    mobileDesktop: "Hacer Quests de móvil compatibles con escritorio",
                    notifyOnComplete: "Notificar al completar Quest"
                },
                options: {
                    always: "Siempre",
                    unclaimed: "Sin reclamar",
                    never: "Nunca",
                    pill: "Píldora",
                    badge: "Insignia",
                    both: "Ambos",
                    none: "Ninguno",
                    openQuests: "Abrir Quests",
                    contextMenu: "Menú contextual",
                    pluginSettings: "Ajustes del plugin",
                    nothing: "Nada",
                    orbs: "Orbes",
                    nitroCodes: "Códigos Nitro",
                    rewardCodes: "Códigos de recompensa",
                    inGameItems: "Objetos de juego",
                    profileCollectibles: "Coleccionables de perfil"
                }
            },
            option: {
                disableQuests: {
                    label: "Desactivar Quests",
                    description: "Selecciona qué funciones de Quest desactivar."
                },
                disableQuestsEverything: {
                    label: "Desactivar todo",
                    description: "Desactiva todas las funciones de las Quests."
                },
                disableQuestsFetchingQuests: {
                    label: "Desactivar búsqueda de Quests",
                    description: "Desactiva la obtención de Quests desde Discord."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Desactivar pestaña de Quests en MD",
                    description: "Desactiva la pestaña de Quests en la página de Mensajes Directos."
                },
                disableQuestsDiscoveryTab: {
                    label: "Desactivar pestaña Discovery",
                    description: "Desactiva la pestaña de Quests en la página de Discovery."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Desactivar banner patrocinado",
                    description: "Desactiva el banner patrocinado en la página de Quests."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Desactivar ventana emergente",
                    description: "Desactiva la ventana emergente de Quests sobre tu panel de cuenta."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Desactivar insignia en perfiles",
                    description: "Desactiva la insignia de Quests en los perfiles de usuario."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Desactivar aviso de inventario",
                    description: "Desactiva el aviso sobre la reubicación de las Quests del inventario de regalos."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Desactivar promoción en lista de amigos",
                    description: "Desactiva la promoción de Quests para juegos que están jugando tus amigos."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Desactivar iconos de actividad en miembros",
                    description: "Desactiva los iconos de 'jugando activamente' en la lista de miembros."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Hacer Quests de móvil compatibles con escritorio",
                    description: "Hace que las Quests exclusivas de móvil sean compatibles con el cliente de escritorio."
                },
                completeVideoQuestsInBackground: {
                    label: "Completar Video Quests en segundo plano",
                    description: "Completa las Video Quests automáticamente una vez pasado el tiempo del vídeo."
                },
                completeGameQuestsInBackground: {
                    label: "Completar Game Quests en segundo plano",
                    description: "Completa las Game Quests automáticamente una vez pasado el tiempo de juego."
                },
                completeAchievementQuestsInBackground: {
                    label: "Completar tareas de Activity Quests en segundo plano",
                    description: "Completa los logros en las Quests de actividad en segundo plano."
                },
                notifyOnQuestComplete: {
                    label: "Notificar al completar",
                    description: "Muestra una notificación cuando una Quest se completa automáticamente."
                },
                questButton: {
                    label: "Botón de Quests",
                    description: "Muestra un botón de Quests en la lista de servidores."
                },
                questButtonDisplay: {
                    label: "Visualización del botón",
                    description: "Qué tipo de visualización usar para el botón en la lista de servidores."
                },
                questRewardIncludeRewardCode: {
                    label: "Incluir códigos de recompensa",
                    description: "Incluir Quests con códigos de recompensa al mostrar los recuentos."
                },
                questRewardIncludeNitroCode: {
                    label: "Incluir códigos Nitro",
                    description: "Incluir Quests con códigos Nitro al mostrar los recuentos."
                },
                questRewardIncludeInGame: {
                    label: "Incluir recompensas de juego",
                    description: "Incluir Quests con objetos de juego al mostrar los recuentos."
                },
                questRewardIncludeCollectibles: {
                    label: "Incluir coleccionables",
                    description: "Incluir Quests con coleccionables al mostrar los recuentos."
                },
                questRewardIncludeOrbs: {
                    label: "Incluir orbes",
                    description: "Incluir Quests con orbes al mostrar los recuentos."
                },
                questButtonUnclaimed: {
                    label: "Indicador de no reclamadas",
                    description: "Tipo de indicador para las Quests sin reclamar en el botón de la lista de servidores."
                },
                questButtonBadgeColor: {
                    label: "Color de la insignia del botón",
                    description: "El color de la insignia del botón de Quests."
                },
                questButtonLeftClickAction: {
                    label: "Acción al clic izquierdo",
                    description: "Acción al hacer clic izquierdo en el botón."
                },
                questButtonMiddleClickAction: {
                    label: "Acción al clic central",
                    description: "Acción al hacer clic central en el botón."
                },
                questButtonRightClickAction: {
                    label: "Acción al clic derecho",
                    description: "Acción al hacer clic derecho en el botón."
                },
                fetchingQuests: {
                    label: "Búsqueda de Quests",
                    description: "Obtener Quests de Discord."
                },
                fetchingQuestsInterval: {
                    label: "Intervalo de búsqueda",
                    description: "El intervalo en segundos para buscar Quests en Discord."
                },
                fetchingQuestsAlert: {
                    label: "Alerta de búsqueda",
                    description: "El sonido que se reproduce cuando se detectan nuevas Quests."
                },
                fetchingQuestsAlertVolume: {
                    label: "Volumen de la alerta",
                    description: "Volumen del sonido de alerta al detectar nuevas Quests."
                },
                restyleQuests: {
                    label: "Rediseñar Quests",
                    description: "Personaliza la apariencia de las fichas de Quest en la página."
                },
                restyleQuestsUnclaimed: {
                    label: "Color de Quests sin reclamar",
                    description: "Color de las fichas de Quest no reclamadas."
                },
                restyleQuestsClaimed: {
                    label: "Color de Quests reclamadas",
                    description: "Color de las fichas de Quest reclamadas."
                },
                restyleQuestsIgnored: {
                    label: "Color de Quests ignoradas",
                    description: "Color de las fichas de Quest ignoradas."
                },
                restyleQuestsExpired: {
                    label: "Color de Quests expiradas",
                    description: "Color de las fichas de Quest expiradas."
                },
                restyleQuestsGradient: {
                    label: "Degradado de rediseño",
                    description: "Estilo del degradado usado en las fichas de Quest."
                },
                restyleQuestsPreload: {
                    label: "Precargar recursos",
                    description: "Intentar precargar los recursos de las fichas de Quest."
                },
                reorderQuests: {
                    label: "Reordenar Quests",
                    description: "Ordena las Quests por estado. Dejar vacío para el orden por defecto. La lista debe contener: UNCLAIMED, CLAIMED, IGNORED, EXPIRED."
                },
                unclaimedSubsort: {
                    label: "Suborden de no reclamadas",
                    description: "Método de suborden para Quests sin reclamar."
                },
                claimedSubsort: {
                    label: "Suborden de reclamadas",
                    description: "Método de suborden para Quests reclamadas."
                },
                ignoredSubsort: {
                    label: "Suborden de ignoradas",
                    description: "Método de suborden para Quests ignoradas."
                },
                expiredSubsort: {
                    label: "Suborden de expiradas",
                    description: "Método de suborden para Quests expiradas."
                },
                unclaimedUnignoredQuests: {
                    label: "Quests no reclamadas ni ignoradas",
                    description: "Registra el número de Quests sin reclamar que no están ignoradas."
                },
                onQuestsPage: {
                    label: "En página de Quests",
                    description: "Indica si el usuario está actualmente en la página de Quests."
                },
                triggerQuestsRerender: {
                    label: "Forzar renderizado de Quests",
                    description: "Fuerza un nuevo renderizado de la página al cambiar este ajuste."
                },
                ignoredQuestProfile: {
                    label: "Perfil de Quests ignoradas",
                    description: "El perfil utilizado para las Quests ignoradas."
                },
                rememberQuestPageSort: {
                    label: "Recordar orden de la página",
                    description: "Recuerda el último orden utilizado en la página de Quests."
                },
                rememberQuestPageFilters: {
                    label: "Recordar filtros de la página",
                    description: "Recuerda los últimos filtros utilizados en la página de Quests."
                },
                lastQuestPageSort: {
                    label: "Último orden de la página",
                    description: "Recuerda el último orden utilizado en la página de Quests."
                },
                lastQuestPageFilters: {
                    label: "Últimos filtros de la página",
                    description: "Recuerda los últimos filtros utilizados en la página de Quests."
                },
                ignoredQuestIDs: {
                    label: "IDs de Quests ignoradas",
                    description: "Una lista de IDs de Quest que están ignoradas."
                },
                resumeQuestIDs: {
                    label: "IDs de Quests reanudadas",
                    description: "Una lista de IDs de Quest que se están completando automáticamente en segundo plano."
                }
            },
            button: {
                questInProgressWithTime: "Completando ({{remainTime}})",
                completing: "Completando",
                resume: "Reanudar (~{{remainTime}})",
                complete: "Completar {{remainTime}}",
                completeImmediate: "Completar (Inmediato)",
                completed: "Completada"
            },
            reward: {
                orbs: "{{completingText}} por {{orbQuantity}} orbes.",
                article: "{{completingText}} por {{itemName}}.",
                unrecognized: "{{completingText}} por un tipo de recompensa no reconocido."
            },
            notification: {
                completed: {
                    title: "Quest completada",
                    body: "La Quest {{questName}} se ha completado."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Reemplaza todos los signos de interrogación con la cadena elegida, si el mensaje solo contiene interrogaciones.",
            option: {
                replace: {
                    label: "Reemplazar",
                    description: "Reemplazar por"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Añade un botón de mención rápida a la barra de acciones de los mensajes",
            tooltip: "Mención rápida"
        },
        quickReply: {
            name: "QuickReply",
            description: "Responde (Ctrl+Arriba/Abajo) y edita (Ctrl+Shift+Arriba/Abajo) mensajes mediante atajos de teclado",
            option: {
                shouldMention: {
                    label: "Mencionar",
                    description: "Mencionar al responder por defecto",
                    noReplyMentionPlugin: "Seguir el plugin NoReplyMention (si está activado)",
                    enabled: "Activado",
                    disabled: "Desactivado"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignorar bloqueados e ignorados",
                    description: "Ignorar mensajes de usuarios bloqueados/ignorados al navegar."
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Cambia rápidamente entre temas usando atajos de teclado.",
            about: {
                title: "Atajos",
                description: "Usa Ctrl/Cmd+Shift+Flechas para navegar (Izquierda/Derecha: ciclar temas, Arriba: activar, Abajo: desactivar).",
                reload: "Presiona Ctrl/Cmd+Shift+Alt para recargar la lista de temas."
            },
            modal: {
                added: "Añadido(s) {{count}} tema(s)",
                removed: "Eliminado(s) {{count}} tema(s)",
                reloaded: "Recargados {{themeCount}} temas",
                addedLocal: "Añadido(s) {{count}} tema(s) local(es)",
                removedLocal: "Eliminado(s) {{count}} tema(s) local(es)",
            },
            option: {
                includeLocal: {
                    label: "Incluir locales",
                    description: "Incluir temas locales"
                },
                includeOnline: {
                    label: "Incluir online",
                    description: "Incluir temas online"
                },
                sortOrder: {
                    label: "Orden",
                    description: "Método de ordenación",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "Recientes"
                },
                autoRefresh: {
                    label: "Actualización automática",
                    description: "Actualizar lista de temas automáticamente cuando se detecten cambios"
                },
                showNotifications: {
                    label: "Mostrar notificaciones",
                    description: "Mostrar notificaciones al añadir o eliminar temas"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Permite crear una imagen de cita inspiradora a partir de un mensaje.",
            context: {
                quote: "Citar (Imagen)"
            },
            modal: {
                title: "Píllalos en 4k",
                grayscale: "Escala de grises",
                export: "Exportar",
                send: "Enviar",
                saveAsGIF: "Guardar como GIF",
                saveDescription: "Guarda/Envía la imagen como GIF en lugar de PNG",
                showWatermark: "Mostrar marca de agua",
                watermarkText: "Texto de marca de agua (máx. 32 caracteres)"
            },
            option: {
                quoteFont: {
                    label: "Fuente de la cita",
                    description: "Fuente para el texto de la cita (el autor/usuario siempre usa M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Open Sans",
                    momoSignature: "Momo Signature",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Marca de agua",
                    description: "Texto personalizado de la marca de agua (máx. 32 caracteres)"
                },
                grayscale: {
                    label: "Escala de grises",
                    description: "Activar escala de grises por defecto"
                },
                showWatermark: {
                    label: "Mostrar marca de agua",
                    description: "Mostrar marca de agua por defecto"
                },
                saveAsGif: {
                    label: "Guardar como GIF",
                    description: "Guardar como GIF por defecto"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Añade un botón junto al de Silenciar para unirte a una llamada de voz aleatoria.",
            tooltip: "Voz aleatoria",
            context: {
                label: "Modificador de estado de voz",
                amountLabel: "CANTIDAD DE USUARIOS",
                spacesLabel: "ESPACIOS LIBRES",
                voiceLabel: "LÍMITE DE VOZ",
                selfLabel: "AJUSTES PROPIOS",
                select: {
                    servers: "Seleccionar servidores",
                    list: "Seleccionar lista",
                    filters: "Seleccionar filtros",
                    amount: "Cantidad de usuarios",
                    userAmount: "{{amount}} usuario(s)",
                    parameters: "Parámetros",
                    moreThan: "Más de",
                    lessThan: "Menos de",
                    equalTo: "Igual a",
                    spaces: "Espacios libres",
                    voice: "Límite de voz"
                },
                filter: {
                    muted: "Silenciados",
                    deafened: "Ensordecidos",
                    camera: "Cámara",
                    stream: "Transmisión",
                    includeFilters: "Incluir filtros",
                    avoidFilters: "Evitar filtros"
                },
                reset: {
                    list: "Restablecer lista"
                },
                voice: {
                    label: "Opciones de voz",
                    auto: {
                        mute: "Silenciar auto.",
                        deafen: "Ensordecer auto.",
                        camera: "Cámara auto.",
                        stream: "Transmisión auto.",
                        leaveWhenEmpty: "Salir si está vacío",
                        navigate: "Navegar auto.",
                        stage: "Evitar Escenarios",
                        afk: "Evitar AFK"
                    }
                },
                invalid: {
                    server: "Servidor no válido"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Operación de cantidad de usuarios",
                    description: "Selecciona una operación para el número de usuarios"
                },
                userAmount: {
                    label: "Cantidad de usuarios",
                    description: "Selecciona el número de usuarios"
                },
                spacesLeftOperation: {
                    label: "Operación de espacios libres",
                    description: "Selecciona una operación para los espacios restantes"
                },
                spacesLeft: {
                    label: "Espacios libres",
                    description: "Selecciona el número de espacios libres"
                },
                vcLimitOperation: {
                    label: "Operación de límite de canal de voz",
                    description: "Selecciona una operación para el límite del canal."
                },
                vcLimit: {
                    label: "Límite de canal de voz",
                    description: "Selecciona un límite de canal de voz"
                },
                servers: {
                    label: "Servidores",
                    description: "Servidores incluidos"
                },
                autoNavigate: {
                    label: "Navegar automáticamente",
                    description: "Navega automáticamente al canal de voz al unirse."
                },
                autoCamera: {
                    label: "Cámara automática",
                    description: "Activa automáticamente la cámara"
                },
                autoStream: {
                    label: "Transmisión automática",
                    description: "Activa automáticamente la transmisión"
                },
                selfMute: {
                    label: "Silenciar automáticamente",
                    description: "Silencia tu micrófono automáticamente al unirte a un canal."
                },
                selfDeafen: {
                    label: "Ensordecer automáticamente",
                    description: "Ensordece tu audio automáticamente al unirte a un canal."
                },
                leaveEmpty: {
                    label: "Salir si está vacío",
                    description: "Busca una llamada aleatoria cuando el chat de voz esté vacío."
                },
                avoidStages: {
                    label: "Evitar Escenarios",
                    description: "Evita unirse a canales de Escenario (Stage)."
                },
                avoidAfk: {
                    label: "Evitar AFK",
                    description: "Evita unirse a canales de AFK."
                },
                video: {
                    label: "Vídeo",
                    description: "Busca usuarios con la cámara encendida"
                },
                stream: {
                    label: "Transmisión",
                    description: "Busca usuarios que estén transmitiendo"
                },
                mute: {
                    label: "Silenciados",
                    description: "Busca usuarios que estén silenciados"
                },
                deafen: {
                    label: "Ensordecidos",
                    description: "Busca usuarios que estén ensordecidos"
                },
                includeStates: {
                    label: "Incluir filtros",
                    description: "Opción para incluir estados"
                },
                avoidStates: {
                    label: "Evitar filtros",
                    description: "Opción para evitar estados"
                }
            },
            alert: {
                failed: "¡No se ha podido encontrar ningún canal de voz!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Decodifica los códigos de error de React en mensajes legibles."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "¡Lee todas las notificaciones de los servidores con un solo clic!",
            button: "Leer todo"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Ctrl+Tab entre los MD más recientes (Ctrl+Shift+Tab para el orden inverso)",
            option: {
                visualStyle: {
                    label: "Estilo visual",
                    description: "Estilo del indicador visual mientras ciclas",
                    overlay: "Superposición (estilo Alt+Tab)",
                    toast: "Mensaje flotante (estado)",
                    off: "Desactivado"
                },
                overlayMode: {
                    label: "Modo de superposición",
                    description: "Contenido de la superposición",
                    row: "Fila de recientes",
                    current: "Solo el actual",
                },
                amountOfUsers: {
                    label: "Cantidad de usuarios",
                    description: "Número de usuarios a mostrar"
                },
                overlayRowLength: {
                    label: "Longitud de la fila",
                    description: "Número de MD recientes a mostrar en la fila"
                },
                overlayShowAvatars: {
                    label: "Mostrar avatares",
                    description: "Muestra los avatares de usuario en la superposición"
                },
                toastDurationMs: {
                    label: "Duración del aviso (ms)",
                    description: "Duración del mensaje de estado"
                },
                clearRdms: {
                    label: "Limpiar lista RDMS",
                    description: "Utilidad de prueba: Limpiar lista de MD recientes",
                    toast: "Historial de RDMS limpiado",
                    button: "Limpiar historial RDMS"
                }
            },
            modal: {
                unknown: "Desconocido",
                dm: "MD",
                group: "MD de grupo",
                channel: "Canal",
                switchingTo: "Cambiando a: {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Te notifica cuando un amigo, chat grupal o servidor te elimina.",
            option: {
                notices: {
                    label: "Avisos",
                    description: "También muestra un aviso en la parte superior de la pantalla cuando te eliminan (usa esto para no perderte ninguna notificación)."
                },
                offlineRemovals: {
                    label: "Eliminaciones sin conexión",
                    description: "Te notifica al iniciar Discord si te eliminaron mientras no estabas conectado."
                },
                friends: {
                    label: "Amigos",
                    description: "Notificar cuando un amigo te elimina"
                },
                friendRequestCancels: {
                    label: "Solicitudes canceladas",
                    description: "Notificar cuando se cancela una solicitud de amistad"
                },
                servers: {
                    label: "Servidores",
                    description: "Notificar cuando eres eliminado de un servidor"
                },
                groups: {
                    label: "Grupos",
                    description: "Notificar cuando eres eliminado de un chat grupal"
                }
            },
            notification: {
                removedFriend: "{{user}} te ha eliminado de su lista de amigos.",
                cancelledFriendRequest: "Una solicitud de amistad de {{user}} ha sido eliminada.",
                removedFromServer: "Has sido eliminado del servidor {{server}}.",
                removedFromGroup: "Fuiste eliminado del grupo {{group}}.",
                noLongerGroup: "Ya no estás en el grupo {{group}}.",
                noLongerServer: "Ya no estás en el servidor {{server}}.",
                noLongerFriend: "Ya no eres amigo de {{user}}.",
                friendRequestRevoked: "La solicitud de amistad de {{user}} ha sido revocada.",
                ok: "Entendido"
            }
        },
        remix: {
            name: "Remix",
            description: "Añade una opción 'Remix' al menú de clic derecho del botón de subida de archivos. Esta opción abre la imagen en un editor sencillo para enviarla directamente al chat tras editarla.",
            label: "Remix",
            button: {
                send: "Enviar",
                close: "Cerrar",
                brush: "Pincel",
                erase: "Borrador",
                crop: "Recortar",
                shape: "Forma",
                reset: "Restablecer",
                clear: "Limpiar"
            },
            editor: {
                choose: "Elegir una imagen",
                browse: "Buscar",
                rectangle: "Rectángulo",
                ellipse: "Elipse",
                line: "Línea",
                arrow: "Flecha",
                fill: "Relleno"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Permite repetir mensajes rápidamente. Si mantienes Shift mientras haces clic en Repetir, responderá al mensaje.",
            button: "Repetir (Clic) / Repetir y Responder (Shift + Clic)",
            context: {
                repeat: "Repetir",
                repeatAndReply: "Repetir y Responder"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Reemplaza la búsqueda de Google con diferentes motores de búsqueda.",
            option: {
                customEngineName: {
                    label: "Nombre del motor personalizado",
                    description: "Nombre del buscador personalizado"
                },
                customEngineURL: {
                    label: "URL del motor personalizado",
                    description: "La URL de tu buscador"
                },
                replacementEngine: {
                    label: "Motor de reemplazo",
                    description: "Reemplaza con un buscador específico en lugar de añadir un menú",
                    off: "Desactivado",
                    custom: "Motor personalizado",
                }
            },
            context: {
                label: "Buscar texto",
                searchWith: "Buscar con {{name}}"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Controla si quieres recibir siempre o nunca una mención al recibir respuestas, con una función de lista blanca.",
            option: {
                alwaysPingOnReply: {
                    label: "Mencionar siempre al responder",
                    description: "Recibe siempre una mención cuando alguien responda a tus mensajes."
                },
                replyPingWhitelist: {
                    label: "Lista blanca de menciones en respuestas",
                    description: "Lista de IDs de usuario (separadas por comas) de quienes siempre quieres recibir menciones al responder."
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Muestra una marca de tiempo en las previsualizaciones de mensajes respondidos."
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Revela todos los spoilers de un mensaje haciendo Ctrl+clic sobre uno, o en todo el chat con Ctrl+Shift+clic."
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Añade la búsqueda inversa de imágenes a los menús contextuales de imágenes.",
            context: {
                label: "Buscar imagen",
                all: "Buscar en todos"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Valora a otros usuarios (añade una nueva sección a los perfiles).",
            notification: {
                newReview: "¡Tienes nuevas valoraciones en tu perfil!",
                auth: {
                    error: "Ocurrió un error al autorizar",
                    successfully: "¡Inicio de sesión exitoso!",
                    failed: "Error al autorizar",
                    review: "Por favor, autoriza para añadir una valoración.",
                    opening: "Abriendo ventana de autorización...",
                    need: "¡Necesitas autorizar para valorar usuarios!"
                },
                error: {
                    fast: "Estás enviando peticiones demasiado rápido. Espera unos segundos e inténtalo de nuevo.",
                    fetching: "Ocurrió un error al obtener las valoraciones.",
                    action: {
                        failed: "Error al {{action}} al usuario",
                        success: "Usuario {{action}} correctamente"
                    }
                }
            },
            modal: {
                delete: {
                    title: "¿Estás seguro?",
                    description: "¿De verdad quieres eliminar esta valoración?",
                    confirm: "Eliminar",
                    cancel: "Cancelar",
                    error: "Debes iniciar sesión para eliminar valoraciones.",
                },
                report: {
                    title: "¿Estás seguro?",
                    description: "¿De verdad quieres reportar esta valoración?",
                    confirm: "Reportar",
                    cancel: "Cancelar",
                    error: "Debes iniciar sesión para reportar valoraciones.",
                },
                block: {
                    title: "¿Estás seguro?",
                    description: "¿De verdad quieres bloquear a este usuario? No volverás a ver sus valoraciones.",
                    confirm: "Bloquear",
                    cancel: "Cancelar",
                    error: "Debes iniciar sesión para bloquear usuarios.",
                },
                blocked: {
                    title: "Usuarios bloqueados",
                    auth: "¡No has iniciado sesión en ReviewDB!",
                    noBlocked: "No hay usuarios bloqueados.",
                    fetch: "Ocurrió un error al obtener los usuarios bloqueados."
                },
                reviews: {
                    title: "Valoraciones de ",
                    noUser: "Parece que nadie ha valorado a este usuario todavía. ¡Tú podrías ser el primero!",
                    noServer: "Parece que nadie ha valorado este servidor todavía. ¡Tú podrías ser el primero!"
                }
            },
            button: {
                appeal: "Apelar",
                ok: "Aceptar",
                more: "Leer más",
                reply: "Responder a @{{user}}",
                update: "Actualizar valoración de @{{user}}",
                review: "Valorar a @{{user}}"
            },
            context: {
                view: "Ver valoraciones",
                blocked: "Has bloqueado a este usuario",
                delete: "Eliminar valoración",
                report: "Reportar valoración",
                block: "Bloquear usuario",
                unblock: "Desbloquear usuario",
                reply: "Responder a la valoración"
            },
            option: {
                authorize: {
                    label: "Autorizar",
                    button: "Autorizar con ReviewDB"
                },
                notifyReviews: {
                    label: "Notificar valoraciones",
                    description: "Notificar sobre nuevas valoraciones al iniciar."
                },
                showWarning: {
                    label: "Mostrar advertencia",
                    description: "Muestra un aviso para ser respetuoso en la parte superior de la lista."
                },
                hideTimestamps: {
                    label: "Ocultar marcas de tiempo",
                    description: "Oculta las marcas de tiempo en las valoraciones."
                },
                hideBlockedUsers: {
                    label: "Ocultar usuarios bloqueados",
                    description: "Oculta valoraciones de usuarios bloqueados."
                },
                buttons: {
                    label: "Botones",
                    manageBlocked: "Gestionar usuarios bloqueados",
                    support: "Apoyar el desarrollo de ReviewDB",
                    website: "Sitio web de ReviewDB",
                    server: "Servidor de soporte de ReviewDB"
                }
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Renderiza los enlaces magnet como si fueran enlaces de mensaje.",
            unknown: "archivo desconocido"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Añade el color del rol principal en cualquier lugar posible.",
            option: {
                chatMentions: {
                    label: "Menciones en chat",
                    description: "Muestra los colores de rol en las menciones del chat (incluyendo el cuadro de mensaje)."
                },
                memberList: {
                    label: "Lista de miembros",
                    description: "Muestra los colores de rol en los encabezados de la lista de miembros."
                },
                voiceUsers: {
                    label: "Usuarios de voz",
                    description: "Muestra los colores de rol en la lista de usuarios de voz."
                },
                reactorsList: {
                    label: "Lista de reacciones",
                    description: "Muestra los colores de rol en la lista de personas que han reaccionado."
                },
                pollResults: {
                    label: "Resultados de encuestas",
                    description: "Muestra los colores de rol en los resultados de las encuestas."
                },
                colorChatMessages: {
                    label: "Colorear mensajes de chat",
                    description: "Colorea el texto del mensaje basándose en el color de rol del autor."
                },
                messageSaturation: {
                    label: "Saturación del mensaje",
                    description: "Intensidad del color en los mensajes."
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Edita el tipo y el contenido de cualquier Rich Presence (actividad).",
            option: {
                replacedAppIds: {
                    label: "IDs de aplicaciones reemplazadas",
                }
            },
            modal: {
                tutorial: {
                    title: "IDs de actividades en ejecución",
                    noRunning: "No hay actividades en ejecución",
                    available: "Variables disponibles",
                    variableText: "En todos los campos (excepto URL de transmisión), puedes usar variables que se reemplazarán automáticamente:",
                    more: "Más detalles",
                    details: {
                        leave: "Deja un campo vacío para mantenerlo como está.",
                        set: "Escribe 'null' para ocultar un campo en la presencia.",
                        reload: "Es posible que necesites recargar Discord para aplicar los cambios."
                    }
                },
                settings: {
                    applyEdits: "Aplicar cambios a la aplicación",
                    addNewApp: "Añadir nueva aplicación",
                    appId: "ID de la aplicación",
                    invalidAppId: "ID de aplicación no válida",
                    newActivityType: "Nuevo tipo de actividad",
                    activityTypes: {
                        playing: "Jugando a",
                        watching: "Viendo",
                        listening: "Escuchando",
                        competing: "Compitiendo en",
                        streaming: "Transmitiendo"
                    },
                    streamUrl: "URL de transmisión (debe ser YouTube o Twitch)",
                    invalidStreamUrl: "URL de transmisión no válida",
                    newName: "Nuevo nombre",
                    newDetails: "Nuevos detalles",
                    newState: "Nuevo estado",
                    largeImage: "Imagen grande",
                    smallImage: "Imagen pequeña",
                    text: "Texto",
                    url: "URL",
                    firstLine: "(primera línea)",
                    secondLine: "(segunda línea)",
                    thirdLine: "(tercera línea)",
                    alsoThirdLine: "(también tercera línea)",
                    hideAssets: "Ocultar recursos (imágenes grande y pequeña)",
                    hideTimestamps: "Ocultar marcas de tiempo"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Muestra estadísticas sobre tu actividad como una presencia (RPC).",
            option: {
                assetURL: {
                    label: "URL del recurso",
                    description: "La imagen para tu RPC. Se usará tu foto de perfil si se deja en blanco."
                },
                rpcTitle: {
                    label: "Título de la RPC",
                    description: "El título de tu presencia"
                },
                statDisplay: {
                    label: "Estadística a mostrar",
                    description: "¿Qué debe mostrar la RPC? (Solo admite una línea).",
                    today: "Cantidad de mensajes enviados hoy",
                    alltime: "Cantidad de mensajes totales enviados",
                    listened: "Tu álbum más escuchado de la semana"
                },
                lastFMApiKey: {
                    label: "API Key de Last.fm",
                    description: "Tu clave API de Last.fm"
                },
                lastFMUsername: {
                    label: "Usuario de Last.fm",
                    description: "Tu nombre de usuario de Last.fm"
                },
                albumCoverImage: {
                    label: "Portada del álbum",
                    description: "¿Usar la portada del álbum como imagen de la RPC? (Si usas la visualización de Last.fm)"
                },
                lastFMStatFormat: {
                    label: "Formato de Last.fm",
                    description: "Cómo formatear la estadística. $album se reemplaza por el álbum y $artist por el artista."
                }
            },
            noInfo: "Sin información por ahora :(",
            messagesToday: "Mensajes enviados hoy: {{count}}",
            messagesAllTime: "Mensajes totales: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "Exporta las URLs de tus GIFs favoritos.",
            toolbox: "Guardar GIFs favoritos",
            title: "Guardar GIFs favoritos",
            command: {
                savegifs: {
                    description: "Guarda todas las URLs de GIFs favoritos en un archivo de texto."
                },
                saveworkinggifs: {
                    description: "Prueba todos los GIFs favoritos y guarda solo los que aún funcionan."
                }
            },
            option: {
                showToolboxButton: {
                    label: "Mostrar botón en la caja de herramientas",
                    description: "Muestra el botón en el Plexcord Toolbox (requiere recargar)."
                }
            },
            toast: {
                save: "GIFs guardados con éxito como {{filename}}",
                failed: "Error al guardar los GIFs",
                no: "¡No se han encontrado GIFs favoritos!",
                testing: "Probando {{count}} GIFs, esto puede tardar un momento...",
                noneWorking: "Parece que ninguno de tus GIFs guardados funciona.",
                saved: "Filtrados {{broken}} GIFs posiblemente rotos. Guardados {{saved}} GIFs que funcionan."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Programa mensajes para enviarse en un momento específico o tras un retraso.",
            toolbox: {
                toggle: "Ver mensajes programados"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Mensajes máx. por minuto",
                    description: "Máximo de mensajes programados que pueden enviarse en el mismo minuto por canal."
                },
                checkIntervalSeconds: {
                    label: "Intervalo de comprobación (segundos)",
                    description: "Con qué frecuencia el plugin busca mensajes para enviar."
                },
                showNotifications: {
                    label: "Mostrar notificaciones",
                    description: "Mostrar avisos cuando se envíen los mensajes."
                },
                showPhantomMessages: {
                    label: "Mostrar mensajes fantasma",
                    description: "Muestra los mensajes programados como mensajes fantasma en el chat."
                }
            },
            channelType: {
                unknown: "Desconocido",
                dm: "MD",
                groupDm: "MD de grupo",
                channel: "Canal"
            },
            toast: {
                messageSent: "Mensaje programado enviado a {{channel}}",
                messageFailed: "Error al enviar el mensaje programado",
                maxMessagesReached: "Se ha alcanzado el máximo de {{max}} mensajes por canal por minuto",
                messageScheduled: "¡Mensaje programado!",
                messageRemoved: "Mensaje programado eliminado",
                allCleared: "Todos los mensajes programados han sido borrados"
            },
            button: {
                tooltipOn: "Modo Programación ACTIVADO (clic para desactivar, clic derecho para lista)",
                tooltipOff: "Modo Programación DESACTIVADO (clic para activar, clic derecho para lista)"
            },
            accessory: {
                scheduledFor: "Programado para {date}{timeLeft}",
                remaining: {
                    days: "quedan {{days}}d {{hours}}h",
                    hours: "quedan {{hours}}h {{minutes}}m",
                    minutes: "quedan {{minutes}}m"
                }
            },
            scheduleModal: {
                title: "Programar mensaje",
                schedulingFor: "Programando para: {{channel}}",
                scheduleType: "Tipo de programación",
                delay: "Retraso",
                specificTime: "Hora específica",
                delayMinutes: "Retraso (minutos)",
                dateTime: "Fecha y hora",
                error: {
                    invalidDelay: "Por favor, introduce un retraso válido (mínimo 1 minuto)",
                    invalidDateTime: "Por favor, selecciona una fecha y hora futura"
                },
                schedule: "Programar",
                cancel: "Cancelar"
            },
            viewModal: {
                title: "Mensajes programados",
                clearAll: "Borrar todo",
                noMessages: "No hay mensajes programados",
                delete: "Eliminar",
                close: "Cerrar"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Soluciona el molesto error '¡Se nos ha caído la lupa!' en las búsquedas.",
            notPerfect: "Esta solución no es perfecta, por lo que es posible que tengas que recargar la barra de búsqueda.",
            paragraph1: "Discord solo permite un desplazamiento máximo de 5000 (esto es lo que causa el error de la lupa).",
            paragraph2: "Esto significa que solo puedes ver precisamente 5000 mensajes en el pasado y 5000 en el futuro (al ordenar por antiguos).",
            paragraph3: "Este plugin salta al método de ordenación opuesto para intentar esquivar la restricción de Discord,",
            paragraph4: "pero si el resultado es muy grande e intentas ver un mensaje inalcanzable con ambos métodos,",
            paragraph5: "el plugin simplemente mostrará el desplazamiento 0 (el más nuevo o el más antiguo según el método)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Reproduce siempre la versión secreta del tono de llamada de Discord (excepto durante eventos especiales de tonos).",
            option: {
                onlySnow: {
                    label: "Solo durante el evento de nieve",
                    description: "Solo reproducir el tema Snow Halation."
                }
            }
        },
        summaries: {
            name: "Summaries",
            description: "Activa la función experimental de Resúmenes de Discord en todos los servidores, mostrando resúmenes de conversaciones generados por IA.",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Umbral de expiración del resumen (días)",
                    description: "Tiempo antes de que un resumen sea eliminado. Nota: solo se guardan hasta 50 por canal."
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "Añade el canal actual a la lista emergente de reenvío."
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Envía marcas de tiempo fácilmente mediante un botón o atajos de texto. ¡Lee la descripción extendida!",
            sample: {
                paragraph1: "Para enviar rápidamente marcas de solo hora, incluye la hora con el formato `HH:MM` (¡incluyendo las comillas invertidas!) en tu mensaje.",
                paragraph2: "Mira los ejemplos abajo.\nSi necesitas algo más específico, usa el botón de Fecha en la barra de chat.",
                examples: "Ejemplos:"
            },
            modal: {
                title: "Selector de marcas de tiempo",
                light: "Claro",
                dark: "Oscuro",
                format: "Formato de marca de tiempo",
                preview: "Previsualización",
                insert: "Insertar",
                insertTimestamp: "Insertar marca de tiempo"
            },
            option: {
                replaceMessageContents: {
                    label: "Reemplazar contenido del mensaje",
                    description: "Reemplaza las marcas de tiempo en el contenido de los mensajes."
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Permite ver información detallada sobre un servidor.",
            context: {
                serverInfo: "Info. del servidor"
            },
            option: {
                sorting: {
                    label: "Ordenación",
                    description: "Nombre de usuario o nombre mostrado.",
                    username: "Nombre de usuario",
                    displayname: "Nombre mostrado",
                    none: "No ordenar"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Info. servidor",
                    friends: "Amigos",
                    mutualUsers: "Usuarios comunes",
                    blockedUsers: "Usuarios bloqueados",
                    ignoredUsers: "Usuarios ignorados"
                },
                owner: "Dueño del servidor",
                loading: "Cargando...",
                createdAt: "Creado el",
                joinedAt: "Unido el",
                vanityLink: "Enlace personalizado",
                preferredLocale: "Idioma preferido",
                verification: {
                    level: "Nivel de verificación",
                    none: "Ninguno",
                    low: "Bajo",
                    medium: "Medio",
                    high: "Alto",
                    highest: "Muy alto"
                },
                serverBoosts: "Mejoras del servidor",
                channels: "Canales",
                roles: "Roles"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Añade el recuento de amigos conectados o servidores en la lista lateral.",
            friends: "Amigos",
            servers: "Servidores",
            option: {
                mode: {
                    label: "Modo",
                    description: "Qué mostrar en la lista de servidores",
                    friend: "Solo amigos conectados",
                    server: "Solo cantidad de servidores",
                    both: "Ambos (amigos y servidores)"
                },
                useCompact: {
                    label: "Modo compacto",
                    description: "Hace que el indicador aparezca solo como texto."
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Navega mejor por tus servidores con un botón de búsqueda rápida.",
            tooltip: "Buscar"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Trae los bloques de código estilo VS Code a Discord, potenciados por Shiki.",
            option: {
                theme: {
                    label: "Tema",
                    description: "Temas predeterminados"
                },
                customTheme: {
                    label: "Tema personalizado",
                    description: "Un enlace a un tema de VS Code personalizado.",
                    mustURL: "Debe ser una URL válida",
                    mustJSON: "Debe ser un archivo JSON"
                },
                tryHljs: {
                    label: "Usar Hljs como reserva",
                    description: "Usa el resaltador por defecto de Discord si Shiki falla.",
                    never: "Nunca",
                    secondary: "Preferir Shiki sobre Highlight.js",
                    primary: "Preferir Highlight.js sobre Shiki",
                    always: "Siempre"
                },
                useDevIcon: {
                    label: "Usar Devicon para los iconos",
                    description: "Cómo mostrar los iconos de lenguaje en los bloques de código.",
                    disabled: "Desactivado",
                    colorless: "Sin color",
                    colored: "En color"
                },
                bgOpacity: {
                    label: "Opacidad del fondo",
                    description: "Opacidad del fondo del bloque de código."
                }
            },
            button: {
                copy: "Copiar",
                copied: "¡Copiado!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Muestra siempre todos los botones de los mensajes sin necesidad de mantener pulsado Shift.",
            option: {
                noShiftDelete: {
                    label: "Borrar sin Shift",
                    description: "Elimina el requisito de pulsar Shift para borrar un mensaje."
                },
                noShiftPin: {
                    label: "Fijar sin Shift",
                    description: "Elimina el requisito de pulsar Shift para fijar un mensaje."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Muestra las insignias del autor junto a su nombre en el chat.",
            option: {
                showPlexcordDonor: {
                    label: "Mostrar insignia de donante de Plexcord",
                    description: "Activa las insignias de donante en el chat."
                },
                plexcordDonorPosition: {
                    label: "Posición de insignia de donante",
                    description: "La posición de las insignias de donante."
                },
                showPlexcordContributor: {
                    label: "Mostrar insignia de colaborador de Plexcord",
                    description: "Activa las insignias de colaborador en el chat."
                },
                plexcordContributorPosition: {
                    label: "Posición de insignia de colaborador",
                    description: "La posición de las insignias de colaborador."
                },
                showDiscordProfile: {
                    label: "Mostrar insignias de perfil de Discord",
                    description: "Activa las insignias oficiales del perfil en el chat."
                },
                discordProfilePosition: {
                    label: "Posición de insignias de perfil",
                    description: "La posición de las insignias de perfil."
                },
                showDiscordNitro: {
                    label: "Mostrar insignia de Discord Nitro",
                    description: "Activa la insignia de Nitro en el chat."
                },
                discordNitroPosition: {
                    label: "Posición de insignia de Nitro",
                    description: "La posición de la insignia de Nitro."
                },
                badgeSettings: {
                    label: "Ajustes de insignias",
                    description: "Configura la posición de otras insignias.",
                    modal: "Arrastra las insignias para reordenarlas; puedes hacer clic para activar o desactivar un tipo específico."
                }
            },
            badge: {
                plexcord: "Insignia de donante de Plexcord",
                contributor: "Insignia de colaborador de Plexcord",
                discordProfile: "Insignias de perfil (HypeSquad, Staff, Desarrollador, etc.)",
                nitro: "Insignia de Nitro",
                staff: "Staff de Discord",
                partner: "Dueño de servidor asociado",
                events: "Eventos de HypeSquad",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                bugHunter: "Cazador de errores de Discord",
                earlyVerifiedBotDeveloper: "Desarrollador de bots verificado pionero",
                earlySupporter: "Partidario pionero",
                moderatorProgram: "Antiguo alumno del programa de moderadores"
            },
            modal: {
                plexcordContributor: "Colaborador de Plexcord",
                discordNitro: "Discord Nitro",
                basic: "Básico",
                classic: "Clásico"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Muestra las cuentas conectadas en las tarjetas de perfil.",
            option: {
                iconSize: {
                    label: "Tamaño de icono",
                    description: "Tamaño de los iconos (px)"
                },
                iconSpacing: {
                    label: "Espaciado de iconos",
                    description: "Margen entre iconos",
                    compact: "Compacto",
                    cozy: "Cómodo",
                    roomy: "Espacioso"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Muestra canales a los que no tienes permiso de acceso.",
            tooltip: "Canal oculto",
            option: {
                channelStyle: {
                    label: "Estilo del canal",
                    description: "El estilo utilizado para mostrar los canales ocultos.",
                    classic: "Clásico",
                    muted: "Silenciado",
                    showUnreads: "Mostrar no leídos",
                    mutedWithUnreads: "Silenciado con no leídos"
                },
                showMode: {
                    label: "Modo de visualización",
                    description: "Cómo identificar visualmente los canales ocultos.",
                    lock: "Estilo normal con icono de candado",
                    hidden: "Estilo silenciado con icono de ojo tachado a la derecha",
                    lockIconRight: "Icono de candado a la derecha"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Estado por defecto de la lista de roles",
                    description: "Si el desplegable de usuarios y roles permitidos debe estar abierto por defecto."
                }
            },
            channelType: {
                text: "texto",
                announcement: "anuncios",
                forum: "foro",
                voice: "voz",
                stage: "escenario"
            },
            sortOrder: {
                latestActivity: "Última actividad",
                creationDate: "Fecha de creación"
            },
            forumLayout: {
                default: "No definido",
                list: "Vista de lista",
                grid: "Vista de galería"
            },
            videoQuality: {
                auto: "Automática",
                full: "720p"
            },
            modal: {
                hidden: "oculto",
                locked: "bloqueado",
                threads: "hilos",
                posts: "publicaciones",
                messages: "mensajes",
                post: "publicación",
                message: "mensaje",
                unknown: "desconocido",
                permissionDetails: "Detalles de permisos",
                thisIsA: "Este es un canal de {{channelType}} {{status}}",
                canNotSee: "No puedes ver los {{type}} de este canal.",
                guidelines: "Sin embargo, puedes ver sus reglas:",
                lastCreated: "Último {{type}} creado:",
                lastPin: "Último mensaje fijado:",
                threadSlowmode: "Modo lento de hilos por defecto:",
                slowmode: "Modo lento:",
                bitrate: "Tasa de bits:",
                region: "Región:",
                automatic: "Automático",
                videoQuality: "Calidad de vídeo:",
                inactiveArchiveDuration: "Tiempo de inactividad antes de archivar {{type}}",
                defaultLayout: "Diseño por defecto:",
                defaultSort: "Orden por defecto:",
                defaultReaction: "Emoji de reacción por defecto:",
                requireTag: "Las publicaciones en este foro requieren una etiqueta.",
                availableTags: "Etiquetas disponibles:",
                allowedUsersAndRoles: "Usuarios y roles permitidos:",
                hideAllowedUsersAndRoles: "Ocultar usuarios y roles permitidos",
                viewAllowedUsersAndRoles: "Ver usuarios y roles permitidos"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Muestra varias cosas ocultas o solo para moderadores independientemente de tus permisos.",
            option: {
                showTimeouts: {
                    label: "Mostrar aislamientos en el chat",
                    description: "Muestra los iconos de usuario aislado (timeout) en el chat."
                },
                showInvitesPaused: {
                    label: "Mostrar invitaciones pausadas",
                    description: "Muestra el aviso de invitaciones pausadas en la lista de servidores."
                },
                showModView: {
                    label: "Mostrar vista de moderador",
                    description: "Muestra la opción de 'Vista de moderador' en el menú contextual en todos los servidores."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Añade una opción al menú contextual para forzar la visualización de previsualizaciones (embeds) en enlaces que no las tienen.",
            context: {
                embed: {
                    show: "Mostrar previsualización",
                    hide: "Quitar previsualización"
                }
            },
            error: {
                failed: "Error al obtener la previsualización",
                noEmbed: "No se han encontrado previsualizaciones"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Muestra cualquier combinación de apodos personalizados, de amigos, del servidor, nombres mostrados y usuarios en el chat.",
            option: {
                messages: {
                    label: "Mensajes",
                    description: "Usar formato personalizado en los mensajes."
                },
                replies: {
                    label: "Respuestas",
                    description: "Usar formato personalizado en las respuestas."
                },
                mentions: {
                    label: "Menciones",
                    description: "Usar formato personalizado en las menciones."
                },
                typingIndicator: {
                    label: "Indicador de escritura",
                    description: "Mostrar el primer nombre disponible del formato en el indicador de escritura."
                },
                memberList: {
                    label: "Lista de miembros",
                    description: "Mostrar el primer nombre disponible del formato en la lista de miembros."
                },
                profilePopout: {
                    label: "Tarjeta de perfil",
                    description: "Mostrar el primer nombre disponible en las tarjetas de perfil."
                },
                voiceChannels: {
                    label: "Canales de voz",
                    description: "Mostrar el primer nombre disponible en los canales de voz."
                },
                reactions: {
                    label: "Reacciones",
                    description: "Mostrar nombres en los avisos de reacciones y en la lista de personas que reaccionaron."
                },
                discriminators: {
                    label: "Discriminadores",
                    description: "Añade el discriminador (#0000) a los bots para diferenciarlos, ya que pueden tener nombres idénticos."
                },
                hideDefaultAtSign: {
                    label: "Ocultar símbolo @",
                    description: "Oculta el símbolo '@' antes del nombre en menciones y respuestas."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Acortar nombres en modo streamer",
                    description: "Acorta todos los nombres, no solo los de usuario, durante el modo streamer."
                },
                removeDuplicates: {
                    label: "Eliminar duplicados",
                    description: "Si varios nombres son idénticos, deja solo uno único."
                },
                ignoreFonts: {
                    label: "Ignorar fuentes",
                    description: "Usa la fuente gg sans para los nombres secundarios ignorando fuentes personalizadas."
                },
                ignoreGradients: {
                    label: "Ignorar degradados",
                    description: "Para nombres no principales, usa el color base si el rol tiene degradados o efectos Nitro."
                },
                animateGradients: {
                    label: "Animar degradados",
                    description: "Anima los degradados en los nombres secundarios si el rol lo permite."
                },
                nameSeparator: {
                    label: "Separador de nombres",
                    description: "El carácter para separar los nombres (por defecto es un espacio)."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Apodo de amigo solo en MD",
                    description: "Solo muestra el apodo de amigo en mensajes directos."
                },
                customNameOnlyInDirectMessages: {
                    label: "Nombre personalizado solo en MD",
                    description: "Solo muestra el nombre personalizado en mensajes directos."
                },
                includedNames: {
                    label: "Nombres incluidos",
                    description: "Orden: {user}, {display}, {nick}, {friend}. Puedes usar comas para establecer alternativas (fallbacks)."
                },
                customNameColor: {
                    label: "Color del nombre personalizado",
                    description: "Color CSS o 'Role' para seguir el rol. 'Role+15' ajusta el brillo."
                },
                friendNameColor: {
                    label: "Color del apodo de amigo",
                    description: "Color CSS o 'Role' para el apodo de amigo."
                },
                nicknameColor: {
                    label: "Color del apodo",
                    description: "Color CSS o 'Role' para el apodo del servidor."
                },
                displayNameColor: {
                    label: "Color del nombre mostrado",
                    description: "Color CSS o 'Role' para el nombre mostrado."
                },
                usernameColor: {
                    label: "Color del nombre de usuario",
                    description: "Color CSS o 'Role' para el nombre de usuario."
                },
                triggerNameRerender: {
                    label: "Forzar renderizado de nombres",
                    description: "Fuerza un nuevo renderizado de los nombres al cambiar este ajuste."
                }
            },
            modal: {
                change: {
                    title: "Cambiar apodo SMYN"
                },
                add: {
                    title: "Añadir apodo SMYN"
                },
                setCustom: "Establece un apodo SMYN personalizado para este usuario. Úsalo especificando {custom} en los ajustes.",
                nickname: "Apodo SMYN",
                reset: "Restablecer apodo SMYN",
                cancel: "Cancelar"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Muestra cuánto tiempo le queda a un usuario de aislamiento (timeout), ya sea en el aviso del icono o junto a él.",
            option: {
                displayStyle: {
                    label: "Estilo de visualización",
                    description: "Cómo mostrar la duración",
                    tooltip: "En el aviso (Tooltip)",
                    inline: "Junto al icono de aislamiento"
                }
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Muestra los canales ocultos tras los recursos del servidor en la lista de canales."
        },
        showSongName: {
            name: "ShowSongName",
            description: "Muestra el nombre de la canción en lugar del artista en la actividad de Spotify."
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Abre otro canal o un MD como una barra lateral o una ventana emergente.",
            toolbox: {
                label: "Abrir chat anterior"
            },
            context: {
                label: "Abrir en barra lateral"
            },
            modal: {
                switch: "Cambiar canales",
                popout: "Ventana emergente",
                close: "Cerrar chat lateral"
            },
            option: {
                persistSidebar: {
                    label: "Mantener barra lateral",
                    description: "Mantiene el chat lateral abierto al reiniciar Discord."
                },
                patchCommunity: {
                    label: "Parchear comunidad",
                    description: "Parchea funciones como el Buscador de canales en servidores de comunidad."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Texto o 'firma' automatizada al final de tus mensajes.",
            option: {
                name: {
                    label: "Firma",
                    description: "La firma que se añadirá al final de tus mensajes."
                },
                textHeader: {
                    label: "Encabezado de texto",
                    description: "Qué encabezado precede a la firma."
                },
                showIcon: {
                    label: "Mostrar icono",
                    description: "Muestra un icono en la barra de chat para alternar el plugin."
                },
                contextMenu: {
                    label: "Menú contextual",
                    description: "Añade la opción de alternar la firma en el menú del cuadro de chat."
                },
                isEnabled: {
                    label: "Activado",
                    description: "Alternar funcionalidad."
                }
            },
            tooltip: {
                enable: "Activar firma",
                disable: "Desactivar firma"
            },
            context: {
                enable: "Activar firma"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "Alterna tu firma",
                    toogle: "Alterna tu firma (por defecto es alternar)",
                    enabled: "Firma activada",
                    disabled: "Firma desactivada"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Añade un botón a la barra de chat para enviar mensajes silenciosos (sin notificación).",
            option: {
                persistState: {
                    label: "Mantener estado",
                    description: "Cómo recordar si el modo silencioso está activado.",
                    none: "No mantener (restablecer al cambiar de canal)",
                    channels: "Mantener entre canales",
                    restarts: "Mantener entre canales y reinicios"
                },
                autoDisable: {
                    label: "Desactivar automáticamente",
                    description: "Desactiva el modo silencioso tras enviar un mensaje."
                }
            },
            tooltip: {
                enable: "Activar mensaje silencioso",
                disable: "Desactivar mensaje silencioso"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Oculta tu indicador de escritura en el chat.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Oculta tu indicador de escritura.",
                    toggle: {
                        name: "toggle",
                        description: "Alterna la función globalmente, para el canal o para el servidor.",
                        global: "Global",
                        channel: "Canal",
                        guild: "Servidor"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Oculta los indicadores de escritura de otros sobre la barra de chat."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Oculta los indicadores de escritura de otros en la lista de miembros."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Muestra un icono en la barra de chat para alternar el plugin rápidamente."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Muestra opciones en el menú contextual para cambiar ajustes al vuelo."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "Si se debe ocultar la escritura por defecto en todos lados."
                    }
                }
            },
            content: {
                updated: "Ajustes de escritura silenciosa actualizados.",
                noChanges: "Sin cambios en los ajustes de escritura silenciosa."
            },
            tooltip: {
                hidden: "Escritura oculta ({{location}})",
                visible: "Escritura visible ({{location}})",
                global: "Escritura visible (Global)"
            },
            option: {
                enabledGlobally: {
                    label: "Activado globalmente",
                    description: "Oculta tu indicador de escritura en todo Discord."
                },
                hideChatBoxTypingIndicators: {
                    label: "Ocultar indicadores en barra de chat",
                    description: "Oculta cuando otros escriben sobre la barra de chat."
                },
                hideMembersListTypingIndicators: {
                    label: "Ocultar indicadores en lista de miembros",
                    description: "Oculta cuando otros escriben en la lista de miembros."
                },
                chatIcon: {
                    label: "Icono de chat",
                    description: "Muestra un icono para alternar el plugin."
                },
                chatIconLeftClickAction: {
                    label: "Acción clic izquierdo",
                    description: "Qué hacer al pulsar el icono.",
                    global: "Alternar globalmente",
                    channel: "Alternar para el canal",
                    guild: "Alternar para el servidor",
                    settings: "Abrir ajustes"
                },
                chatIconMiddleClickAction: {
                    label: "Acción clic central",
                    description: "Qué hacer al pulsar con el botón central.",
                    global: "Alternar globalmente",
                    channel: "Alternar para el canal",
                    guild: "Alternar para el servidor",
                    settings: "Abrir ajustes"
                },
                chatIconRightClickAction: {
                    label: "Acción clic derecho",
                    description: "Qué hacer al pulsar con el botón derecho.",
                    global: "Alternar globalmente",
                    channel: "Alternar para el canal",
                    guild: "Alternar para el servidor",
                    settings: "Abrir ajustes"
                },
                chatContextMenu: {
                    label: "Menú contextual de chat",
                    description: "Muestra un menú desplegable en el chat para cambiar ajustes rápido."
                },
                defaultHidden: {
                    label: "Oculto por defecto",
                    description: "Si está activado, ocultará tu escritura salvo en las 'Ubicaciones desactivadas'. Si está desactivado, solo la ocultará en las 'Ubicaciones activadas'."
                },
                enabledLocations: {
                    label: "Ubicaciones activadas",
                    description: "Lista de IDs (MD, canales, servidores) donde se ocultará tu escritura. Solo se usa si 'Oculto por defecto' está desactivado."
                },
                disabledLocations: {
                    label: "Ubicaciones desactivadas",
                    description: "Lista de IDs donde SÍ se verá tu escritura. Solo se usa si 'Oculto por defecto' está activado."
                }
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "¡Deja que nieve en Discord!",
            about: {
                title: "Información",
                paragraph: "Este plugin añade un efecto de nieve navideño sobre la interfaz. Puedes cambiar el tipo de nieve en los ajustes.",
                note: "NOTA: Aunque no suele afectar al rendimiento, puede causar lag en sistemas poco potentes."
            },
            option: {
                typeOfSnow: {
                    label: "Tipo de nieve",
                    description: "Cambia el estilo (afecta al rendimiento).",
                    solid: "Sólida (Mayor rendimiento)",
                    text: "Texto (Rendimiento medio)",
                    emoji: "Imagen (Menor rendimiento)"
                },
                maxSize: {
                    label: "Tamaño máximo",
                    description: "Tamaño máximo de los copos."
                },
                speed: {
                    label: "Velocidad",
                    description: "Velocidad de caída."
                },
                flakesPerSecond: {
                    label: "Copos por segundo",
                    description: "Densidad de la nieve."
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Ordena las solicitudes de amistad por fecha de recepción.",
            tooltip: "Añadida &mdash; {{date}}",
            option: {
                showDates: {
                    label: "Mostrar fechas",
                    description: "Muestra las fechas en las solicitudes."
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Registra todos los sonidos del panel de sonidos (soundboard) usados en voz y permite descargarlos.",
            tooltip: "Abrir registro de SoundBoard",
            option: {
                savedIds: {
                    label: "IDs guardadas",
                    description: "Cantidad de sonidos a recordar (0 = infinitos).",
                    notNumber: "El valor no es un número.",
                    cantDecimal: "El valor no puede ser decimal.",
                    cantNegative: "El valor no puede ser negativo.",
                    heading: "Número de IDs de sonidos a guardar",
                    warning: "¡Atención! Reducir este número reseteará el registro.",
                    placeholder: "Introduce un número"
                },
                fileType: {
                    label: "Tipo de archivo",
                    description: "Formato para guardar el archivo."
                },
                openLogs: {
                    label: "Abrir registros",
                    description: "Muestra los sonidos registrados.",
                    button: "Abrir registros"
                },
                soundVolume: {
                    label: "Volumen del sonido",
                    description: "Volumen del aviso al alternar (0 para desactivar)."
                },
                iconLocation: {
                    label: "Ubicación del icono",
                    description: "Dónde mostrar el acceso al registro.",
                    toolbar: "Barra de herramientas",
                    chatInput: "Cuadro de chat"
                }
            },
            modal: {
                title: "Registros de SoundBoard",
                loading: "Cargando sonidos...",
                noLogs: "No hay sonidos registrados. ¡Únete a una llamada para empezar!",
                clearLogs: "Limpiar registros",
                played: "Reproducido {{time}} vez/veces",
                last: "Última vez:",
                also: "También reproducido por:",
                download: "Descargar",
                copyId: "Copiar ID",
                copied: "¡ID copiada al portapapeles!",
                playSound: "Reproducir sonido",
                moreUsers: "Otros usuarios usaron este sonido...",
                volume: "Volumen del panel de sonidos"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Divide los mensajes largos en varios para ajustarse al límite de Discord.",
            option: {
                maxLength: {
                    label: "Longitud máxima",
                    description: "Longitud antes de dividir (0 para autodetección)."
                },
                disableFileConversion: {
                    label: "Desactivar conversión a archivo",
                    description: "Si se activa, no convertirá mensajes gigantes en archivos .txt."
                },
                sendDelay: {
                    label: "Retraso de envío",
                    description: "Espera entre cada fragmento (segundos)."
                },
                hardSplit: {
                    label: "División forzada",
                    description: "Divide exactamente por el carácter en lugar de por espacios/líneas."
                },
                splitInSlowmode: {
                    label: "Dividir en modo lento",
                    description: "¿Dividir mensajes si el canal tiene modo lento?"
                },
                slowmodeMax: {
                    label: "Máx. modo lento",
                    description: "Tiempo máximo de modo lento permitido para dividir."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Añade un botón para ocultar o mostrar tu actividad de Spotify.",
            tooltip: {
                enable: "Activar actividad de Spotify",
                disable: "Desactivar actividad de Spotify"
            },
            option: {
                location: {
                    label: "Ubicación",
                    description: "Dónde mostrar el botón.",
                    panel: "Junto a Silenciar/Ensordecer",
                    toolbox: "Plexcord Toolbox"
                },
                activityStatus: {
                    label: "Estado de actividad",
                    description: "Estado actual de tu actividad de Spotify."
                }
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Permite 'Escuchar junto a', evita la pausa automática en chat de voz y mantiene la actividad al estar ausente.",
            option: {
                noSpotifyAutoPause: {
                    label: "Sin pausa automática",
                    description: "Desactiva la pausa automática de Spotify."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Mantener actividad en ausencia",
                    description: "Mantiene la actividad de Spotify activa aunque estés ausente."
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Comparte tu canción, álbum o artista actual mediante comandos (/track, /album, /artist).",
            command: {
                makeCommand: {
                    description: "Comparte tu {{type}} actual de Spotify en el chat.",
                    track: "No estás escuchando nada en Spotify.",
                    find: "Error al encontrar la pista en Spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Añade tiempos de inicio detallados al menú de Ajustes.",
            modal: {
                title: "Tiempos de inicio",
                ended: "Seguimiento finalizado en:",
                start: "Inicio",
                interval: "Intervalo",
                delta: "Delta",
                event: "Evento",
                serverTrace: "Traza del servidor",
                loading: "Cargando..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Notifica cuando un usuario cambia su estado.",
            loading: "Cargando...",
            option: {
                notificationsSound: {
                    label: "Sonido de notificación",
                    description: "¿Reproducir sonido para estas notificaciones?"
                },
                usersList: {
                    label: "Lista de usuarios",
                    description: "Usuarios a seguir (haz clic derecho en un usuario para añadirlo).",
                    empty: "No hay usuarios en seguimiento. Haz clic derecho en un usuario y selecciona 'Notificaciones de estado' para añadirlo."
                }
            },
            context: {
                label: "Notificaciones de estado",
                notifications: "Notificaciones",
                type: {
                    all: "Todas",
                    online: "Conectado",
                    offline: "Desconectado",
                    none: "Ninguna"
                }
            },
            notification: {
                unknownUser: "Usuario",
                title: "Notificaciones de estado"
            },
            status: {
                online: "Conectado",
                idle: "Ausente",
                dnd: "No molestar",
                offline: "Desconectado",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Permite recordar tus estados personalizados para usarlos más tarde.",
            button: {
                remember: "Recordar estado"
            },
            context: {
                edit: "Editar ajustes personalizados",
                set: "Establecer estado personalizado"
            },
            notification: {
                successfully: "Estado guardado correctamente"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "¡Sincroniza tu estado con Steam! (Conectado, Ausente, Invisible o Desconectado).",
            option: {
                onlineStatus: {
                    label: "Estado Conectado",
                    description: "Estado en Steam al estar Conectado."
                },
                idleStatus: {
                    label: "Estado Ausente",
                    description: "Estado en Steam al estar Ausente."
                },
                dndStatus: {
                    label: "Estado No molestar",
                    description: "Estado en Steam al estar en No molestar."
                },
                invisibleStatus: {
                    label: "Estado Invisible",
                    description: "Estado en Steam al estar en Invisible."
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Invisible si la actividad está oculta",
                    description: "Pone Steam en invisible si ocultas tu actividad de Discord."
                }
            },
            status: {
                online: "Conectado",
                away: "Ausente",
                invisible: "Invisible",
                offline: "Desconectado (Cerrar chat de Steam)",
                disabled: "Desactivado"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Permite bloquear la visualización de pegatinas (stickers).",
            option: {
                showGif: {
                    label: "Mostrar GIF",
                    description: "Muestra un GIF de un gato en lugar de la pegatina."
                },
                showMessage: {
                    label: "Mostrar mensaje",
                    description: "Muestra un texto con la ID de lo que se ha bloqueado."
                },
                showButton: {
                    label: "Mostrar botón",
                    description: "Muestra un botón para desbloquear la pegatina."
                },
                blockedStickers: {
                    label: "Pegatinas bloqueadas",
                    description: "Lista de IDs (no editar manualmente)."
                }
            },
            modal: {
                blocked: "Pegatina bloqueada. ID: {{id}} NOMBRE: {{name}}",
                unblock: "Desbloquear {{name}}"
            },
            context: {
                blockSticker: "Bloquear pegatina",
                unblockSticker: "Desbloquear pegatina"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Hace que al elegir una pegatina se inserte en el cuadro de chat en lugar de enviarse al instante."
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Activa automáticamente el Modo Streamer al empezar a transmitir en Discord."
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Desactiva los códecs de transmisión que prefieras.",
            option: {
                disableAv1Codec: {
                    label: "Desactivar códec AV1",
                    description: "Evita que Discord use AV1 para transmitir."
                },
                disableH265Codec: {
                    label: "Desactivar códec H265",
                    description: "Evita que Discord use H265 para transmitir."
                },
                disableH264Codec: {
                    label: "Desactivar códec H264",
                    description: "Evita que Discord use H264 para transmitir."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Personaliza el límite de Súper Reacciones simultáneas y permite Súper Reaccionar por defecto.",
            option: {
                superReactByDefault: {
                    label: "Súper Reaccionar por defecto",
                    description: "El selector de reacciones usará Súper Reacciones por defecto."
                },
                unlimitedSuperReactionPlaying: {
                    label: "Súper Reacciones ilimitadas",
                    description: "Elimina el límite de animaciones de Súper Reacciones simultáneas."
                },
                superReactionPlayingLimit: {
                    label: "Límite de animaciones",
                    description: "Máximo de animaciones a la vez. Pon 0 para desactivarlas."
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Reemplaza texto en tus mensajes. Puedes encontrar reglas ya hechas en el canal #textreplace-rules del servidor de Plexcord.",
            option: {
                replace: {
                    label: "Reemplazar",
                    string: "Usando cadena de texto",
                    regex: "Usando Regex (expresiones regulares)",
                    myMessages: "Aplicar a tus mensajes (visible para todos)",
                    othersMessages: "Aplicar a mensajes de otros (solo visible para ti)",
                    allMessages: "Aplicar a todos los mensajes"
                },
                stringRules: {
                    label: "Reglas de cadena",
                    description: "Reglas para reemplazar texto mediante coincidencia de caracteres."
                },
                regexRules: {
                    label: "Reglas de Regex",
                    description: "Reglas para reemplazar texto mediante expresiones regulares."
                }
            },
            modal: {
                title: "Probar reglas",
                find: "Buscar",
                replace: "Reemplazar",
                includes: "Solo si incluye",
                type: "Escribe un mensaje",
                applied: "Mensaje con las reglas aplicadas"
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Añade atributos de datos a varios elementos con fines de personalización de temas."
        },
        timezones: {
            name: "Timezones",
            description: "Muestra la hora local de los usuarios en sus perfiles y en los encabezados de los mensajes.",
            button: {
                wantToSave: "¿Quieres guardar tu zona horaria en la base de datos? Haz clic aquí para configurarla.",
                yourLocalTimezone: "(Tu zona horaria local)"
            },
            context: {
                set: "Configurar zona horaria local"
            },
            toast: {
                refresh: {
                    successfully: "¡Zonas horarias actualizadas con éxito!",
                    failed: "¡Error al actualizar las zonas horarias!",
                    failedTo: "No se pudieron actualizar las zonas horarias."
                },
                update: {
                    successfully: "¡Zona horaria actualizada con éxito!",
                    failed: "Error al configurar la zona horaria."
                },
                delete: {
                    successfully: "¡Zona horaria eliminada con éxito!",
                    failed: "Error al eliminar la zona horaria."
                },
                auth: {
                    failed: "Error de autenticación.",
                    success: "¡Autorización exitosa!"
                }
            },
            toolbox: {
                set: "Configurar zona horaria en BD",
                refresh: "Actualizar zonas horarias de la BD"
            },
            option: {
                showOwnTimezone: {
                    label: "Mostrar mi zona horaria",
                    description: "Muestra tu propia zona horaria en tu perfil y mensajes."
                },
                twentyFourHourTime: {
                    label: "Formato 24 horas",
                    description: "Muestra la hora en formato de 24 horas."
                },
                showTimezoneInfo: {
                    label: "Mostrar info. de zona horaria",
                    description: "Muestra la abreviatura de la zona horaria junto a la hora."
                },
                showMessageHeaderTime: {
                    label: "Mostrar hora en encabezados",
                    description: "Muestra la hora en los encabezados de los mensajes."
                },
                showProfileTime: {
                    label: "Mostrar hora en perfiles",
                    description: "Muestra la hora en los perfiles de usuario."
                },
                useDatabase: {
                    label: "Usar base de datos",
                    description: "Habilita la base de datos para obtener las zonas horarias de los usuarios."
                },
                preferDatabaseOverLocal: {
                    label: "Preferir BD sobre almacenamiento local",
                    description: "Da prioridad a la base de datos sobre el almacenamiento local para las zonas horarias."
                },
                databaseUrl: {
                    label: "URL de la base de datos",
                    description: "La URL del servidor de la base de datos de zonas horarias."
                },
                setDatabaseTimezone: {
                    label: "Configurar zona horaria en BD",
                    description: "Guarda tu zona horaria en la base de datos.",
                    setTimezone: "Guardar zona horaria"
                },
                resetDatabaseTimezone: {
                    label: "Restablecer zona horaria en BD",
                    description: "Borra tu zona horaria de la base de datos.",
                    failed: "Error al restablecer la zona horaria de la BD."
                },
                askedTimezone: {
                    label: "Zona horaria solicitada",
                    description: "Indica si ya se le ha pedido al usuario que configure su zona horaria."
                }
            },
            modal: {
                title: "Zonas horarias",
                select: "Seleccionar zona horaria",
                selectPlaceholder: "Elige una zona horaria",
                delete: "Eliminar zona horaria",
                save: "Guardar"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "Muestra una notificación flotante (toast) cada vez que recibes un mensaje directo.",
            notification: {
                call: "¡Ha iniciado una llamada contigo!",
                recipient: {
                    add: "{{target}} fue añadido al grupo por {{actor}}.",
                    remove: "{{target}} fue eliminado del grupo por {{actor}}.",
                    left: "Ha abandonado el grupo."
                },
                channel: {
                    change: {
                        name: "Ha cambiado el nombre del canal a {{name}}.",
                        icon: "Ha cambiado el icono del canal."
                    },
                    pinned: "Ha fijado un mensaje."
                },
                sent: {
                    embed: "Ha enviado un embed.",
                    sticker: "Ha enviado una pegatina.",
                    attachment: "Archivo adjunto:"
                },
                redacted: "El contenido del mensaje ha sido redactado.",
                friend: {
                    accept: "{{user}} ahora es tu amigo/a",
                    acceptBody: "Ya puedes enviarle mensajes directamente.",
                    request: "{{user}} te ha enviado una solicitud de amistad.",
                    requestBody: "Puedes aceptarla o rechazarla en la pestaña de Amigos."
                },
                example: {
                    title: "Notificación de ejemplo",
                    body: "Este es el cuerpo de una notificación de ejemplo."
                }
            },
            modal: {
                dismiss: "Cerrar notificación",
                attachments: "Se ha(n) enviado {{attachments}} archivo(s) adjunto(s)."
            },
            option: {
                position: {
                    label: "Posición",
                    description: "La posición de la notificación en pantalla",
                    topRight: "Arriba a la derecha",
                    topLeft: "Arriba a la izquierda",
                    bottomRight: "Abajo a la derecha",
                    bottomLeft: "Abajo a la izquierda"
                },
                timeout: {
                    label: "Tiempo de espera",
                    description: "Tiempo en segundos que se mostrarán las notificaciones."
                },
                opacity: {
                    label: "Opacidad",
                    description: "La transparencia de la notificación."
                },
                determineServerNotifications: {
                    label: "Respetar ajustes del servidor",
                    description: "Determina si se muestran notificaciones basándose en los ajustes de notificación de cada servidor."
                },
                directMessages: {
                    label: "Mensajes directos",
                    description: "Mostrar notificaciones para MDs."
                },
                groupMessages: {
                    label: "Mensajes de grupo",
                    description: "Mostrar notificaciones para mensajes de grupo."
                },
                friendServerNotifications: {
                    label: "Notificaciones de amigos en servidores",
                    description: "Mostrar notificaciones cuando amigos envían mensajes en servidores que comparten contigo."
                },
                friendActivity: {
                    label: "Actividad de amigos",
                    description: "Mostrar notificaciones al añadir a alguien o recibir solicitudes de amistad."
                },
                notifyFor: {
                    label: "Notificar para",
                    description: "Lista de IDs de canales de los que quieres recibir notificaciones (separar por comas)."
                },
                ignoreUsers: {
                    label: "Ignorar usuarios",
                    description: "Lista de IDs de usuarios de los que quieres ignorar todas las notificaciones (separar por comas)."
                },
                exampleButton: {
                    label: "Botón de ejemplo",
                    description: "Muestra una notificación de prueba.",
                    show: "Mostrar notificación de ejemplo"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Añade un atajo de teclado personalizable para activar/desactivar la cámara web.",
            option: {
                keyBind: {
                    label: "Atajo de teclado",
                    description: "La tecla que activará la cámara al ser pulsada."
                },
                reqCtrl: {
                    label: "Requiere Ctrl",
                    description: "Requiere mantener pulsado Control."
                },
                reqShift: {
                    label: "Requiere Mayús",
                    description: "Requiere mantener pulsado Mayús (Shift)."
                },
                reqAlt: {
                    label: "Requiere Alt",
                    description: "Requiere mantener pulsado Alt."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Traduce mensajes con Google Translate o DeepL.",
            tooltip: {
                label: "Traducir"
            },
            context: {
                translate: "Traducir",
                open: "Abrir ventana de traducción",
                auto: "Traducción automática activada"
            },
            option: {
                receivedInput: {
                    label: "Idioma de entrada (recibidos)",
                    description: "Idioma original de los mensajes recibidos."
                },
                receivedOutput: {
                    label: "Idioma de salida (recibidos)",
                    description: "Idioma al que se deben traducir los mensajes recibidos."
                },
                sentInput: {
                    label: "Idioma de entrada (enviados)",
                    description: "Idioma en el que escribes tus propios mensajes."
                },
                sentOutput: {
                    label: "Idioma de salida (enviados)",
                    description: "Idioma al que se deben traducir tus mensajes antes de enviarlos."
                },
                service: {
                    label: "Servicio de traducción",
                    description: "DeepL requiere una clave API de DeepL Pro.",
                    descriptionWeb: "Servicio de traducción (¡No compatible en la versión web!)",
                    google: "Google Translate",
                    deepl: "DeepL Gratis",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "Clave API de DeepL",
                    description: "Tu clave para el servicio DeepL.",
                    placeholder: "Consigue tu clave en https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Traducción automática",
                    description: "Traduce tus mensajes automáticamente antes de enviarlos. También puedes alternar esto haciendo Shift+clic o clic derecho en el botón de traducir."
                },
                showAutoTranslateTooltip: {
                    label: "Mostrar aviso de auto-traducción",
                    description: "Muestra un aviso en el botón de la barra de chat cada vez que un mensaje se traduce automáticamente."
                }
            },
            modal: {
                title: "Traducir",
                select: "Seleccionar un idioma",
                auto: "Traducción automática",
                dismiss: "Cerrar",
                translated: "traducido del {{from}}",
                failed: {
                    to: "Error al traducir {{text}}",
                    connect: "Error al conectar con la API de DeepL:"
                },
                wrong: "Algo salió mal. Si el problema persiste, revisa la consola o pide ayuda en el servidor de soporte.",
                deepl: {
                    api: "Cuota de la API de DeepL excedida. Usando Google Translate como alternativa.",
                    apiKey: "La clave API de DeepL no está configurada. Cambiando a Google.",
                    auth: "Clave API o versión de DeepL no válida."
                },
                autoTranslateEnabled: {
                    title: "Auto-traducción de Plexcord activada",
                    body: "¡Acabas de activar la traducción automática! Cualquier mensaje será traducido automáticamente antes de ser enviado.",
                    confirm: "Desactivar auto-traducción",
                    cancel: "Entendido",
                    secondaryConfirm: "No volver a mostrar"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Añade un indicador si alguien está escribiendo en algún canal.",
            option: {
                includeCurrentChannel: {
                    label: "Incluir canal actual",
                    description: "Si se debe mostrar el indicador para el canal seleccionado actualmente."
                },
                includeMutedChannels: {
                    label: "Incluir canales silenciados",
                    description: "Si se debe mostrar el indicador para los canales silenciados."
                },
                includeIgnoredUsers: {
                    label: "Incluir usuarios ignorados",
                    description: "Si se debe mostrar el indicador para los usuarios ignorados."
                },
                includeBlockedUsers: {
                    label: "Incluir usuarios bloqueados",
                    description: "Si se debe mostrar el indicador para los usuarios bloqueados."
                },
                indicatorMode: {
                    label: "Modo del indicador",
                    description: "¿Cómo debe mostrarse el indicador?",
                    both: "Avatares y puntos animados",
                    dots: "Puntos animados",
                    avatars: "Avatares"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Muestra avatares y colores de rol en el indicador de escritura.",
            option: {
                showAvatars: {
                    label: "Mostrar varios usuarios",
                    description: "Muestra los avatares en el indicador de escritura."
                },
                showRoleColors: {
                    label: "Mostrar colores de rol",
                    description: "Usa los colores de los roles en los nombres del indicador."
                },
                alternativeFormatting: {
                    label: "Formato alternativo",
                    description: "Muestra un mensaje más útil cuando varios usuarios están escribiendo."
                },
                amITyping: {
                    label: "¿Estoy escribiendo?",
                    description: "Te muestra si los demás pueden verte escribir."
                }
            },
            others: {
                areTyping: "y otros {{count}} están escribiendo..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Elimina la sangría inicial (espacios/pestañas) de los bloques de código."
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Convierte unidades métricas a imperiales y viceversa.",
            tooltip: "Convertir unidades",
            option: {
                myUnits: {
                    label: "Mis unidades",
                    description: "Las unidades que usas y a las que quieres que se conviertan las cosas (por defecto: Imperial).",
                    imperial: "Imperial",
                    metric: "Métrica"
                }
            },
            button: {
                dismiss: "Cerrar"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "Aumenta la cantidad de cuentas que puedes añadir al selector de cuentas.",
            option: {
                maxAccounts: {
                    label: "Máximo de cuentas",
                    description: "Número de cuentas que se pueden añadir (0 para ilimitado)."
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Te permite ampliar (zoom) mucho más en la herramienta de recorte de imagen al cambiar tu avatar.",
            option: {
                zoomMultiplier: {
                    label: "Multiplicador de zoom",
                    description: "Nivel de zoom máximo permitido."
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Te permite volver a mostrar previsualizaciones (embeds) que hayan sido ocultadas en los mensajes.",
            context: {
                unsuppress: "Mostrar previsualización",
                suppress: "Ocultar previsualización"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Muestra información inútil aleatoria dentro de Discord; los atajos y el espaciado son ajustables.",
            recording: "Grabando...",
            record: "Grabar",
            option: {
                delay: {
                    label: "Intervalo de notificación",
                    description: "Intervalo de tiempo en minutos para mostrar notificaciones."
                },
                historyHotkey: {
                    label: "Atajo del panel de historial",
                    description: "Tecla para mostrar el historial de datos ya mostrados."
                },
                randomFactHotkey: {
                    label: "Atajo de dato aleatorio",
                    description: "Tecla para abrir el panel de datos curiosos."
                },
                sameFact: {
                    label: "Evitar repetir ítems",
                    description: "No mostrar el mismo dato hasta que se hayan mostrado todos los demás."
                },
                lastNFacts: {
                    label: "Cuántos recientes evitar",
                    description: "Número de datos mostrados recientemente que no deben repetirse (0 = siempre)."
                }
            },
            modal: {
                title: "UselessInfo",
                history: {
                    none: "Aún no hay datos. Usa el atajo o espera.",
                    source: "Fuente"
                },
                showRandom: "Mostrar aleatorio",
                close: "Cerrar"
            },
            notification: {
                title: "¿Sabías que...?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "Muestra los pronombres del usuario en los encabezados de los mensajes.",
            option: {
                pronounsFormat: {
                    label: "Formato de pronombres",
                    description: "El estilo con el que aparecerán los pronombres en el chat.",
                    lowercase: "Minúsculas",
                    capitalized: "Mayúscula inicial"
                },
                showSelf: {
                    label: "Mostrar los míos",
                    description: "Activa o desactiva la visualización de tus propios pronombres."
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Muestra un indicador cuando un usuario está en un canal de voz.",
            option: {
                showInUserProfileModal: {
                    label: "Mostrar en perfil",
                    description: "Muestra el indicador de canal de voz en la tarjeta de perfil junto al nombre."
                },
                showInMemberList: {
                    label: "Mostrar en lista de miembros",
                    description: "Muestra el indicador en la lista de miembros y en la lista de MDs."
                },
                showInMessages: {
                    label: "Mostrar en mensajes",
                    description: "Muestra el indicador en los mensajes del chat."
                }
            },
            modal: {
                inVoiceChat: "En chat de voz"
            },
            notification: {
                cannotJoin: "No puedes unirte al canal de voz de este usuario."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Muestra banners de usuario desde la base de datos USRBG, permitiendo que cualquiera tenga un banner sin necesidad de Nitro.",
            option: {
                nitroFirst: {
                    label: "Prioridad Nitro",
                    description: "Qué banner usar si el usuario tiene ambos disponibles.",
                    nitro: "Banner de Nitro",
                    usrbg: "Banner de USRBG"
                },
                voiceBackground: {
                    label: "Fondo en voz",
                    description: "Usa los banners de USRBG como fondo en los chats de voz."
                }
            },
            button: "Consigue tu propio banner USRBG"
        },
        validReply: {
            name: "ValidReply",
            description: "Corrige el error 'No se pudo cargar el mensaje' que aparece al pasar el ratón sobre una respuesta."
        },
        validUser: {
            name: "ValidUser",
            description: "Corrige las menciones a usuarios desconocidos que aparecen como '@unknown-user' (pasa el ratón por encima para arreglarlo).",
            badges: {
                discordBugHunter: "Cazador de errores de Discord",
                moderatorProgramsAlumni: "Exalumno del programa de moderadores",
                discordStaff: "Staff de Discord",
                hypeSquadEvents: "Eventos de HypeSquad",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                partneredServerOwner: "Dueño de servidor asociado",
                nitro: "Discord Nitro",
                earlySupporter: "Partidario pionero",
                earlyVerifiedBotDeveloper: "Desarrollador de bots verificado pionero"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Únete a canales de voz haciendo doble clic en lugar de un solo clic."
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Anuncia mediante un narrador de voz cuando los usuarios entran, salen o se mueven entre canales de voz.",
            option: {
                voice: {
                    label: "Voz"
                },
                volume: {
                    label: "Volumen",
                    description: "Volumen del narrador."
                },
                rate: {
                    label: "Velocidad",
                    description: "Velocidad de habla del narrador."
                },
                sayOwnName: {
                    label: "Decir mi nombre",
                    description: "Dice tu propio nombre cuando realizas una acción."
                },
                latinOnly: {
                    label: "Solo caracteres latinos",
                    description: "Elimina caracteres no latinos de los nombres antes de pronunciarlos."
                },
                joinMessage: {
                    label: "Mensaje al entrar",
                    description: "Lo que dirá el narrador cuando alguien entre."
                },
                leaveMessage: {
                    label: "Mensaje al salir",
                    description: "Lo que dirá el narrador cuando alguien salga."
                },
                moveMessage: {
                    label: "Mensaje al moverse",
                    description: "Lo que dirá el narrador cuando alguien cambie de canal."
                },
                muteMessage: {
                    label: "Mensaje al silenciar",
                    description: "Mensaje al silenciarse (solo para ti por ahora)."
                },
                unmuteMessage: {
                    label: "Mensaje al desilenciar",
                    description: "Mensaje al desilenciarse (solo para ti por ahora)."
                },
                deafenMessage: {
                    label: "Mensaje al ensordecer",
                    description: "Mensaje al ensordecerse (solo para ti por ahora)."
                },
                undeafenMessage: {
                    label: "Mensaje al desensordecer",
                    description: "Mensaje al desensordecerse (solo para ti por ahora)."
                }
            },
            modal: {
                title: "Reproducir sonidos de ejemplo",
                voiceTitle: "Voz",
                voice: "Seleccionar una voz",
                languageTitle: "Idioma",
                language: "Seleccionar un idioma",
                noVoice: "No se encontraron voces de narrador. ",
                linuxNote: "Instala speech-dispatcher o espeak y ejecuta Discord con el parámetro --enable-speech-dispatcher",
                someNarrator: "Intenta instalar algunas en los ajustes de Narrador de tu sistema operativo.",
                dontHaveEnglish: "No tienes voces en inglés instaladas, por lo que el narrador podría sonar extraño.",
                customiseMessages: "Puedes personalizar los mensajes hablados abajo. Déjalos vacíos para desactivar mensajes específicos.",
                placeholdersInfo: "Los marcadores especiales {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} y {{CHANNEL}} serán reemplazados por el nombre del usuario (vacío si eres tú), el nombre mostrado, el apodo en el servidor actual y el nombre del canal respectivamente."
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Permite hacer clic en avatares y banners en los perfiles para verlos. Añade opciones para ver avatar/banner en los menús contextuales de usuarios, servidores y grupos.",
            context: {
                view: {
                    avatar: "Ver avatar",
                    serverAvatar: "Ver avatar del servidor",
                    icon: "Ver icono",
                    banner: "Ver banner"
                }
            },
            option: {
                format: {
                    label: "Formato",
                    description: "Elige el formato de imagen para imágenes no animadas. Las animadas siempre usarán .gif"
                },
                imgSize: {
                    label: "Tamaño de imagen",
                    description: "El tamaño de la imagen a visualizar."
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Copia y visualiza el contenido o los datos brutos (JSON) de cualquier mensaje, canal o servidor.",
            context: {
                copyLeft: "Copiar bruto (Clic izq.) / Ver bruto (Clic der.)",
                copyRight: "Copiar bruto (Clic der.) / Ver bruto (Clic izq.)",
                view: "Ver datos brutos"
            },
            option: {
                popoverButton: {
                    label: "Botón en mensajes",
                    description: "Muestra un botón en el menú flotante del mensaje para ver sus datos brutos."
                },
                clickMethod: {
                    label: "Método de clic",
                    description: "Cambia el comportamiento del botón para ver los datos.",
                    left: "Clic izquierdo para ver contenido bruto.",
                    right: "Clic derecho para ver contenido bruto."
                }
            },
            modal: {
                title: "Ver datos brutos",
                content: "Contenido",
                data: "Datos de {{type}}",
                copied: "¡Datos de {{type}} copiados al portapapeles!",
                copy: "Copiar JSON de {{type}}",
                copiedContent: "¡Contenido copiado al portapapeles!",
                copyContent: "Copiar contenido bruto"
            },
            types: {
                message: "Mensaje",
                channel: "Canal",
                guild: "Servidor",
                role: "Rol",
                user: "Usuario"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "Añade botones para enviar MDs, silenciar o ensordecer rápidamente a cualquier usuario desde el panel de llamada de voz.",
            option: {
                showChatButton: {
                    label: "Mostrar botón de chat",
                    description: "Si quieres mostrar el botón para abrir mensajes directos."
                },
                showMuteButton: {
                    label: "Mostrar botón de silenciar",
                    description: "Si quieres mostrar el botón de silenciar."
                },
                showDeafenButton: {
                    label: "Mostrar botón de ensordecer",
                    description: "Si quieres mostrar el botón de ensordecer."
                },
                muteSoundboard: {
                    label: "Silenciar panel de sonidos",
                    description: "Al pulsar el botón de ensordecer, también silencia su panel de sonidos."
                },
                disableVideo: {
                    label: "Desactivar vídeo",
                    description: "Al pulsar el botón de ensordecer, también oculta su vídeo."
                },
                useServer: {
                    label: "Usar servidor",
                    description: "Usa silenciar/ensordecer de servidor en lugar de local si tienes permisos."
                },
                serverSelf: {
                    label: "Silenciarse en servidor",
                    description: "Se silencia/ensordece a sí mismo en el servidor al usar los botones."
                },
                showButtonsSelf: {
                    label: "Mostrar botones en mí mismo",
                    description: "Muestra los botones sobre tu propio usuario para silenciarte o abrir tus MDs.",
                    display: "Mostrar",
                    hide: "Ocultar",
                    disable: "Desactivar"
                },
                whichNameToShow: {
                    label: "Qué nombre mostrar",
                    description: "Nombre a mostrar en el aviso (tooltip).",
                    global: "Nombre global",
                    username: "Nombre de usuario",
                    both: "Ambos"
                },
                buttonPosition: {
                    label: "Posición de los botones",
                    description: "Elige dónde se mostrarán los botones.",
                    left: "Izquierda",
                    right: "Derecha",
                }
            },
            tooltip: {
                navigate: "Ir a mensajes directos",
                open: "Abrir MD con {{username}}",
                yourself: "tú mismo/a",
                serverMute: "Silenciar en servidor",
                serverDeafen: "Ensordecer en servidor",
                mute: "Silenciar",
                deafen: "Ensordecer",
                unmute: "Desilenciar",
                undeafen: "Desensordecer",
                serverUnmute: "Quitar silencio de servidor",
                serverUndeafen: "Quitar ensordecimiento de servidor"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Registra quién entra y sale de los canales de voz.",
            context: {
                view: "Ver registro del canal"
            },
            modal: {
                joined: "Entró en <#{{channel}}>",
                left: "Salió de <#{{channel}}>",
                movedTo: "Se movió a <#{{channel}}>",
                movedFrom: "Vino de <#{{channel}}>",
                noLogs: "No hay registros que mostrar.",
                logs: "Registros de {{channel}}"
            },
            option: {
                mode: {
                    label: "Modo",
                    description: "Cómo mostrar el registro de voz.",
                    menu: "Menú de registro",
                    associated: "Directamente en el chat asociado",
                    both: "En el chat y en el menú"
                },
                voiceChannelChatSelf: {
                    label: "Registrar mis acciones",
                    description: "Registra tus propios eventos de voz en los canales."
                },
                voiceChannelChatSilent: {
                    label: "Mensajes de chat silenciosos",
                    description: "Los mensajes de entrada/salida en el chat de voz se enviarán sin sonido."
                },
                voiceChannelChatSilentSelf: {
                    label: "Mensajes silenciosos si estoy dentro",
                    description: "Los mensajes serán silenciosos si tú también estás en ese canal de voz."
                },
                ignoreBlockedUsers: {
                    label: "Ignorar usuarios bloqueados",
                    description: "No registrar acciones de usuarios bloqueados."
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Permite realizar acciones masivas en todo un canal (mover a todos, silenciar a todos, desconectar a todos, etc.).",
            option: {
                waitAfter: {
                    label: "Acciones antes de esperar",
                    description: "Cantidad de acciones de API antes de pausar (para evitar límites de velocidad)."
                },
                waitSeconds: {
                    label: "Segundos de espera",
                    description: "Tiempo de espera entre cada acción (en segundos)."
                }
            },
            context: {
                voiceTools: "Herramientas de voz",
                mentionAll: "Mencionar a todos",
                disconnectAll: "Desconectar a todos",
                muteAll: "Silenciar a todos",
                unmuteAll: "Desilenciar a todos",
                deafenAll: "Ensordecer a todos",
                undeafenAll: "Desensordecer a todos",
                moveAll: "Mover a todos"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Añade una opción de descarga a los mensajes de voz. (Abre una nueva pestaña en el navegador).",
            context: {
                download: "Descargar mensaje de voz"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Permite enviar mensajes de voz como en la versión móvil. Haz clic derecho en el botón de subir archivos para usarlo.",
            option: {
                noiseSuppression: {
                    label: "Supresión de ruido",
                    description: "Activa la supresión de ruido."
                },
                echoCancellation: {
                    label: "Cancelación de eco",
                    description: "Activa la cancelación de eco."
                }
            },
            notification: {
                failed: {
                    upload: "Error al subir el mensaje de voz.",
                    start: "Error al iniciar la grabación.",
                    finish: "Error al finalizar la grabación."
                }
            },
            context: {
                sendVoiceMessage: "Enviar mensaje de voz",
                missingPermissions: "(Faltan permisos)"
            },
            modal: {
                record: "Grabar mensaje de voz",
                upload: "Subir archivo",
                preview: "Previsualizar",
                failed: "Error al analizar el archivo de audio:",
                oggOpus: "Los mensajes de voz deben ser OggOpus para funcionar en iOS. Este archivo es {{type}}, por lo que no se podrá oír en dispositivos Apple.",
                fix: "Para arreglarlo, conviértelo primero a OggOpus usando el {{link}}",
                sending: "Enviando mensaje de voz... Por favor, espera.",
                stop: "Detener grabación",
                start: "Empezar a grabar",
                resume: "Reanudar grabación",
                pause: "Pausar grabación",
                recording: "GRABANDO",
                send: "Enviar",
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Te permite subir el volumen de usuarios y transmisiones por encima del máximo predeterminado.",
            option: {
                multiplier: {
                    label: "Multiplicador",
                    description: "Multiplicador de volumen (ej: 2 = 200%)."
                }
            }
        },
        wallpaperFree: {
            name: "WallpaperFree",
            description: "Recreación del antiguo experimento de fondos de Discord; permite poner una imagen de fondo a cualquier canal, usuario o servidor.",
            option: {
                globalDefault: {
                    label: "Fondo global",
                    description: "Establece un fondo predeterminado para todos los canales."
                },
                stylingTips: {
                    label: "Consejos de estilo"
                }
            },
            context: {
                setWallpaper: "Establecer fondo",
                removeWallpaper: "Quitar fondo"
            },
            modal: {
                set: "Configurar fondo",
                image: "URL de la imagen",
                cancel: "Cancelar",
                apply: "Aplicar",
                global: {
                    set: "Configurar fondo global",
                    remove: "Quitar fondo global",
                    reset: "Borrar todos los datos de fondos"
                },
                web: {
                    info: "Puedes usar archivos locales poniéndolos en la carpeta de temas de Plexcord y usando la URL plexcord:///themes/nombre.ext",
                    open: "Abrir carpeta de temas",
                    quickCSS: "Abrir QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Recupera menús contextuales ausentes en la versión web: Enlaces e Imágenes (Copiar/Abrir), Área de texto (Cortar, Copiar, Pegar, Corrector).",
            option: {
                addBack: {
                    label: "Restaurar",
                    description: "Añadir de nuevo los menús contextuales de Discord para imágenes, enlaces y barra de chat."
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Recupera atajos de teclado ausentes en la web: Ctrl+T, Ctrl+Shift+T, Ctrl+Tab, Ctrl+1-9, Ctrl+,. Solo funciona en Plextron/Legcord, no en navegadores comunes."
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Elimina el límite de bitrate de 2500kbps en clientes Chromium y Plextron.",
            option: {
                experimentalAV1Support: {
                    label: "Soporte experimental AV1",
                    description: "Activa el códec AV1. Puede causar problemas como transmisiones que no cargan."
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Muestra los avatares de los usuarios que han reaccionado a un mensaje directamente bajo la reacción.",
            option: {
                avatarClick: {
                    label: "Clic en avatar",
                    description: "Permite hacer clic en los avatares de las reacciones."
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Pasa el ratón sobre el icono de transmisión para ver qué usuarios están viendo tu directo.",
            modal: {
                noSpectator: "Sin espectadores"
            },
            option: {
                showPanel: {
                    label: "Mostrar panel",
                    description: "Muestra la lista de espectadores bajo el panel de transmisión."
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Cambia automáticamente a mayúscula la primera letra de cada frase en el cuadro de escritura.",
            option: {
                blockedWords: {
                    label: "Palabras excluidas",
                    description: "Palabras que NO quieres que se pongan en mayúsculas (separar por comas)."
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Reenvía las notificaciones de Discord a XSOverlay para verlas fácilmente mientras usas Realidad Virtual (VR).",
            notification: {
                call: {
                    title: "{{user}} te está llamando.",
                    content: "Llamada entrante"
                },
                message: {
                    reply: " (respuesta)",
                    embed: " [embed] ",
                    onlyEmbed: "Envió previsualización/es",
                    sticker: " [sticker] ",
                    onlySticker: "Envió una pegatina",
                    image: "imagen",
                    attachment: "archivo adjunto"
                },
                test: {
                    title: "¡Hola desde Plexcord!",
                    content: "¡Esta es una notificación de prueba! *Explosión*",
                    button: "Enviar notificación de prueba"
                }
            },
            option: {
                webSocketPort: {
                    label: "Puerto WebSocket",
                    description: "Puerto para la conexión WebSocket."
                },
                preferUDP: {
                    label: "Preferir UDP",
                    description: "Activa si usas una versión antigua de XSOverlay. Se ignora en la web."
                },
                botNotifications: {
                    label: "Notificaciones de bots",
                    description: "Permitir notificaciones de bots."
                },
                serverNotifications: {
                    label: "Notificaciones de servidores",
                    description: "Permitir notificaciones de servidores."
                },
                dmNotifications: {
                    label: "Notificaciones de MD",
                    description: "Permitir notificaciones de mensajes directos."
                },
                groupDmNotifications: {
                    label: "Notificaciones de grupos",
                    description: "Permitir notificaciones de MD de grupo."
                },
                callNotifications: {
                    label: "Notificaciones de llamadas",
                    description: "Permitir notificaciones de llamadas."
                },
                pingColor: {
                    label: "Color de mención",
                    description: "Color para las menciones de usuario."
                },
                channelPingColor: {
                    label: "Color de mención de canal",
                    description: "Color para las menciones de canales."
                },
                soundPath: {
                    label: "Sonido",
                    description: "Tipo de sonido de notificación (default/warning/error)."
                },
                timeout: {
                    label: "Duración",
                    description: "Duración de la notificación (segundos)."
                },
                lengthBasedTimeout: {
                    label: "Duración por longitud",
                    description: "Extiende la duración según el largo del mensaje."
                },
                opacity: {
                    label: "Opacidad",
                    description: "Transparencia de la notificación."
                },
                volume: {
                    label: "Volumen",
                    description: "Volumen."
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Bloquea anuncios en los vídeos de YouTube incrustados y en la actividad 'Watch Together' mediante AdGuard."
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "Añade la descripción del vídeo a los enlaces de YouTube incrustados."
        }
    }
} as const;

export default translations;
