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
            top: "Al principio de todo",
            nitro: {
                above: "Encima de la sección de Nitro",
                below: "Debajo de la sección de Nitro"
            },
            activity: {
                above: "Encima de Ajustes de actividad",
                below: "Debajo de Ajustes de actividad"
            },
            bottom: "Al final de todo"
        },
        switches: {
            useQuickCss: {
                label: "Habilitar CSS personalizado",
                description: "Aplica tu QuickCSS configurado"
            },
            enableReactDevtools: {
                label: "Habilitar React Developer Tools",
                description: "Útil principalmente para desarrolladores de plugins. Ignóralo si no sabes qué es"
            },
            mainWindowFrameless: {
                label: "Deshabilitar el marco de la ventana principal",
                description: "Elimina el marco nativo de la ventana para una apariencia más limpia. Aún puedes mover la ventana arrastrando el área de la barra de título."
            },
            frameless: {
                label: "Deshabilitar el marco de la ventana",
                description: "Elimina el marco nativo de la ventana para una apariencia más limpia. Aún puedes mover la ventana arrastrando el área de la barra de título."
            },
            nativeTitleBar: {
                label: "Usar la barra de título nativa de Windows en lugar de la personalizada de Discord",
                description: "Reemplaza la barra de título personalizada de Discord con la barra de título estándar de Windows. Esto puede mejorar la compatibilidad con algunas herramientas de gestión de ventanas."
            },
            noRoundCorners: {
                label: "Desactivar esquinas redondeadas de la ventana",
                description: "Hace que las esquinas de la ventana de Discord sean cuadradas en lugar de redondeadas."
            },
            transparent: {
                label: "Habilitar transparencia de ventana",
                description: "Hace que la ventana de Discord sea transparente. Se requiere un tema que soporte transparencia, de lo contrario no hará nada.",
                isWindows: "Esto evitará que la ventana se pueda redimensionar y que se ajuste a los bordes de la pantalla.",
                notWindows: "Esto evitará que la ventana se pueda redimensionar."
            },
            winCtrlQ: {
                label: "Registrar Ctrl+Q como atajo para cerrar Discord (Alternativa a Alt+F4)",
                description: "Añade Ctrl+Q como un atajo de teclado para cerrar Discord. Proporciona una alternativa a Alt+F4 para cerrar rápidamente la aplicación."
            },
            disableMinSize: {
                label: "Deshabilitar tamaño mínimo de ventana",
                description: "Permite cambiar el tamaño de la ventana a cualquier tamaño, incluso menor que el mínimo de Discord"
            }
        },
        quickActions: {
            title: "Acciones rápidas",
            description: "Acciones comunes que podrías querer realizar. Estos atajos te dan acceso rápido a funciones frecuentes sin navegar por los menús.",
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
                invalid: "Enlace de invitación inválido o expirado."
            },
            supportProject: {
                title: "Apoya el proyecto",
                description: "¡Por favor, considera apoyar el desarrollo de Plexcord realizando una donación!"
            },
            contributions: {
                title: "Contribuciones",
                subtitle: "¡Gracias por contribuir!",
                description: "¡Como has contribuido a Plexcord, ahora tienes una insignia genial!",
                buttonTitle: "Mira en qué has contribuido"
            }
        },
        settingsSection: {
            title: "Ajustes",
            description: "Configura cómo se comporta Plexcord y cómo se integra con Discord. Estos ajustes afectan la apariencia y el comportamiento del cliente de Discord.",
            hintParts: {
                prefix: "Puedes personalizar dónde aparece esta sección de ajustes en el menú de Discord configurando el {{pluginLink}}",
                linkText: "Complemento de Ajustes"
            }
        },
        notifications: {
            title: "Notificaciones",
            description: "Configura cómo Plexcord maneja las notificaciones. Puedes personalizar cuándo y cómo recibes alertas, o ver un historial de notificaciones pasadas.",
            settings: "Ajustes de notificaciones",
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
                plexcordDesc: "Estas son notificaciones dentro de la aplicación",
                desktop: "Notificaciones de escritorio",
                desktopDesc: "Notificaciones nativas del escritorio (como cuando recibes una mención)",
                onlyWhenNotFocused: "Usar notificaciones de escritorio solo cuando Discord no esté en primer plano",
                always: {
                    desktop: "Usar siempre notificaciones de escritorio",
                    plexcord: "Usar siempre notificaciones de Plexcord"
                }
            },
            positions: {
                label: "Posición de notificaciones",
                right: {
                    bottom: "Abajo a la derecha",
                    top: "Arriba a la derecha",
                },
                left: {
                    bottom: "Abajo a la izquierda",
                    top: "Arriba a la izquierda",
                }
            },
            missed: {
                label: "Contador de notificaciones perdidas",
                description: "Al volver a enfocar Discord, aparecerá una notificación con cuántas te perdiste",
                whileYou: "Mientras no estabas",
                count: "{{count}} notificación{{s}} recibida{{s}}",
                s: "s"
            },
            timeout: {
                label: "Tiempo de espera de notificación",
                description: "La cantidad de tiempo (en segundos) que las notificaciones permanecerán en pantalla antes de desaparecer automáticamente"
            },
            logLimit: {
                label: "Límite del registro de notificaciones",
                description: "El número máximo de notificaciones a mantener en el registro antes de eliminar las antiguas. Ajusta a {{disable}} para deshabilitar el registro y a {{unlimited}} para no eliminar nunca las notificaciones antiguas"
            },
            opacity: {
                label: "Opacidad de notificaciones",
                description: "La opacidad de las notificaciones dentro de la aplicación"
            },
            maxNotifications: {
                label: "Máximo de notificaciones",
                description: "Número máximo de notificaciones mostradas al mismo tiempo"
            },
            behavior: {
                label: "Comportamiento de notificaciones",
            },
            disableInStreamerMode: {
                label: "Deshabilitar en modo streamer",
                description: "Deshabilita las notificaciones mientras el modo streamer está activo"
            },
            renderImages: {
                label: "Renderizar imágenes",
                description: "Muestra imágenes en las notificaciones"
            },
            streamingTreatment: {
                label: "Tratamiento en transmisión",
                description: "Cómo tratar las notificaciones mientras compartes pantalla",
                normal: "Normal - Mostrar la notificación normalmente",
                noContent: "Sin contenido - Ocultar el cuerpo de la notificación",
                ignore: "Ignorar - No mostrar la notificación en absoluto"
            },
        },
        windowsMaterial: {
            title: "Material de fondo de Windows (requiere reinicio)",
            description: "Efectos de fondo transparente de Windows. Necesitas un tema que admita transparencia o esto no hará nada. Se requiere reiniciar después de cambiar esta opción.",
            material: {
                none: "Ninguno",
                mica: "Mica (usa el tema del sistema + el fondo de escritorio para pintar el fondo)",
                tabbed: "Tabbed (variante de Mica con un tinte de fondo más intenso)",
                acrylic: "Acrylic (desenfoca la ventana detrás de Discord para un fondo translúcido)"
            }
        },
        macVibrancy: {
            title: "Estilo de vibración de ventana (Requiere reinicio)",
            description: "Personaliza el efecto de vibración de la ventana en macOS. Esto controla el estilo de desenfoque y transparencia. Los cambios requieren un reinicio para aplicarse.",
            placeholder: "Estilo de vibración de ventana",
            style: {
                no: "Sin vibración",
                underPage: "Bajo la página (Tintado de ventana)",
                content: "Contenido",
                window: "Ventana",
                selection: "Selección",
                titlebar: "Barra de título",
                header: "Encabezado",
                sidebar: "Barra lateral",
                tooltip: "Sugerencia (Tooltip)",
                menu: "Menú",
                popover: "Popover",
                fullscreenUI: "UI de pantalla completa (Transparente con desenfoque ligero)",
                hud: "HUD (Máxima transparencia)"
            }
        },
        tabs: {
            renderFailed: "No se pudo mostrar la pestaña {{tab}}. Si el problema continúa, intenta reinstalar con el instalador."
        }
    },

    plugins: {
        title: "Complementos",
        new: "NUEVO",
        unknown: "Desconocido",
        noDescription: "No hay descripción disponible.",
        restart: {
            apply: "¡Reinicia para aplicar los cambios!",
            required: "¡Reinicio requerido!",
            description: "Reinicia ahora para aplicar los nuevos complementos y sus ajustes",
            following: "Los siguientes complementos requieren un reinicio:",
            remainingCount: "y {{count}} más",
            fully: "Algunos complementos requieren un reinicio para deshabilitarse por completo",
            would: "¿Te gustaría reiniciar ahora?",
            resetDefault: "Restablecer a ajustes predeterminados",
            failed: "Error al iniciar dependencias:",
            button: {
                restart: "Reiniciar",
                later: "¡Más tarde!",
                now: "Reiniciar ahora",
                cancel: "Cancelar",
                disableWarning: "Deshabilitar advertencia para siempre",
                disableAll: "Deshabilitar todo",
                reset: "Restablecer",
                close: "Cerrar"
            }
        },
        contributor: {
            contributed: "contribuyó",
            modal: {
                contributionsInfo: "{{userName}} ha {{contributedLink}} en {{contributionCount}} complemento{{s}}.",
                noContributions: "{{userName}} no ha creado ningún complemento. ¡Probablemente {{contributedLink}} de otras formas!"
            }
        },
        infoModal: {
            description: "Presiona el engranaje o el ícono de información para obtener más detalles de un complemento",
            settingsInfo: "¡Los complementos con un engranaje tienen ajustes que puedes modificar!",
            disableAll: "Deshabilitar todos los complementos"
        },
        error: {
            invalidInput: "Entrada proporcionada no válida",
            stopping: "Error al detener el complemento {{plugin}}",
            starting: "Error al iniciar el complemento {{plugin}}",
            startDependency: "Error al iniciar dependencias: {{failures}}",
            infoRender: "Ocurrió un error al renderizar el componente de información personalizado de este complemento"
        },
        placeholder: {
            number: "Ingresa un número",
            select: "Selecciona una opción",
            text: "Ingresa un valor"
        },
        excluded: {
            desktop: "App de escritorio de Discord o Plextron",
            discordDesktop: "App de escritorio de Discord",
            plextron: "App Plextron",
            web: "App Plextron y versión web de Discord",
            dev: "Versión de desarrollador de Plexcord",
            browser: "Versión para navegador web de Plexcord"
        },
        search: {
            looking: "¿Estás buscando",
            onlyAvailable: "Solo disponible en el",
            noCriteria: "Ningún complemento coincide con los criterios de búsqueda."
        },
        required: {
            title: "Complementos requeridos",
            this: "Este complemento es necesario para que Plexcord funcione.",
            by: "Este complemento es requerido por:"
        },
        dangerModal: {
            title: "ACCIÓN PELIGROSA",
            disablePlugins: "Deshabilitar complementos",
            disableText: "Deshabilitar todos",
            irreversible: "¡ESTA ACCIÓN ES IRREVERSIBLE!",
            enableBack: "¿Estás absolutamente seguro de que quieres continuar? Puedes volver a habilitarlos más tarde.",
            undone: "Esta acción no se puede deshacer. ¿Estás seguro?",
            resetDescription: "Estás a punto de restablecer todos los ajustes de {{pluginName}} a sus valores predeterminados.",
            disable: "¡Estás a punto de deshabilitar {{enabledPlugins}} complementos!",
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
                enabled: "Mostrar habilitados",
                disabled: "Mostrar deshabilitados",
                new: "Mostrar nuevos",
                userplugins: "Mostrar complementos de usuario",
                api: "Mostrar complementos de API",
                type: "Filtrar por tipo",
                tags: "Filtrar por etiquetas",
                favorites: "Mostrar favoritos"
            }
        },
        pluginModal: {
            noSettings: "No hay ajustes para este complemento.",
            authors: "Autores",
            settings: "Ajustes",
            successfulReset: "Los ajustes de {{plugin}} han sido restablecidos.",
            enabledStock: "Complementos de fábrica habilitados",
            totalStock: "Total de complementos de fábrica",
            enabledUser: "Complementos de usuario habilitados",
            totalUser: "Total de complementos de usuario",
            info: "Ver más información",
            source: "Ver código fuente",
            favorite: "Marcar como favorito - lo fija al principio de la lista de plugins",
            unfavorite: "Quitar de favoritos"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API para añadir decoradores a la lista de miembros (servidores y MDs)",
                    messageAccessories: "API para añadir accesorios a los mensajes",
                    messageDecorations: "API para añadir decoraciones a los mensajes",
                    chatInputButtons: "API para añadir botones a la entrada de chat",
                    commands: "API requerida por cualquier cosa que use comandos",
                    contextMenu: "API para añadir/eliminar elementos de los menús contextuales.",
                    dynamicImageModal: "Permite omitir el ancho o el alto al abrir un modal de imagen",
                    menuItemDemangler: "Desenreda (demangles) el módulo de elementos de menú de Discord",
                    messageEvents: "API requerida por cualquier cosa que use eventos de mensaje",
                    messagePopover: "API para añadir botones a los popovers de mensajes",
                    messageUpdater: "API para actualizar y volver a renderizar mensajes",
                    nicknameIcons: "API para añadir íconos a los apodos en los perfiles",
                    notices: "Corrige que los avisos se descarten automáticamente",
                    serverList: "API requerida para complementos que modifican la lista de servidores",
                    userSettings: "Parchea los UserSettings de Discord para exponer su grupo y nombre.",
                    audioPlayer: "API para reproducir archivos de audio internos de Discord o enlaces externos.",
                    userArea: "API para añadir botones al panel del área de usuario.",
                    profileCollections: "API para agregar colecciones al panel de perfil del usuario, como la colección de juegos de Discord.",
                    profileSections: "API para agregar secciones cerca del área 'Miembro desde' de los paneles de perfil de usuario.",
                    headerBar: "API para añadir botones a la barra superior.",
                    surfaceClasses: "API para añadir atributos de datos semánticos propios del plugin y props limitadas a superficies estables del diseño de Discord."
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
                        name: "Copiar nombre de insignia",
                        link: "Copiar enlace de imagen de insignia"
                    },
                    refetch: {
                        button: "Actualizar insignias",
                        success: "¡Insignias actualizadas con éxito!"
                    }
                },
                modal: {
                    title: "Donante de Plexcord",
                    special: "Esta insignia es un beneficio especial para donantes de Plexcord",
                    description: "Por favor, considera apoyar el desarrollo de Plexcord convirtiéndote en donante. ¡Significaría mucho!"
                }
            },
        },
        uiElements: {
            manage: "Gestionar elementos de la UI",
            allows: "Te permite ocultar botones que no te gustan",
            section: {
                chatbar: {
                    title: "Botones de la barra de chat",
                    description: "Estos son los botones en el lado derecho de la barra de entrada de chat"
                },
                messagePopover: {
                    title: "Botones de popover de mensaje",
                    description: "Estos son los botones flotantes que aparecen a la derecha al pasar el cursor sobre un mensaje"
                }
            },
            button: "Los botones de los complementos habilitados aparecerán aquí."
        },
        invalidInput: "Entrada no válida",
        loading: "Cargando...",
        authorPrefix: "por"
    },

    patchHelper: {
        title: "Asistente de parches",
        description: "Una herramienta de desarrollo para ayudarte a crear parches para los complementos de Plexcord.",
        fullPatch: {
            label: "Parche completo",
            description: "Pega tu parche JSON completo aquí para rellenar los campos"
        },
        find: "Buscar",
        match: "Coincidencia",
        replacement: "Reemplazo",
        preview: "Previsualización",
        generatedCode: "Código generado",
        group: "Grupo",
        diff: "Diferencias",
        module: "Módulo",
        compile: "Compilar",
        compiled: "Compilación exitosa",
        copy: {
            clipboard: "Copiar al portapapeles",
            codeblock: "Copiar como bloque de código"
        },
        error: {
            noMatch: "No se encontró coincidencia. ¿Quizás este módulo se carga de forma diferida (lazy loaded)?",
            multipleMatch: "Se encontraron múltiples coincidencias. Usa un patrón de búsqueda más específico.",
            noFind: "Falta el campo 'Buscar'.",
            noReplacement: "Falta el campo 'Reemplazo'.",
            invalidReplacement: "El campo 'Reemplazo' no es válido",
            replacementMatch: "Falta el campo 'replacement.match'",
            replacementReplace: "Falta el campo 'replacement.replace'",
            replacementMustFunction: "'Reemplazo' debe ser una función"
        },
        cheatSheet: {
            title: "Hoja de trucos",
            identifiers: "Secuencia de escape regex especial que coincide con identificadores (nombres de variables, clases, etc.)",
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
        warningText: "Importar un archivo de ajustes sobrescribirá tu configuración actual. Asegúrate de exportar una copia de seguridad primero si quieres conservar tus ajustes actuales.",
        description: "Puedes importar y exportar tus ajustes de Plexcord como un archivo JSON. Esto te permite transferir fácilmente tu configuración a otro dispositivo o recuperarla tras reinstalar Plexcord o Discord.",
        successful: "Ajustes importados con éxito. ¡Reinicia para aplicar los cambios!",
        error: {
            failure: "Error al importar ajustes: {{error}}",
            failedExport: "Error al exportar ajustes, revisa la consola",
            invalid: "Ajustes inválidos. ¿Es este un archivo de ajustes de Plexcord?",
            tooLarge: "DataStore demasiado grande - excluido de la copia de seguridad. Usa 'Exportar DataStores' si es necesario.",
            clearSomeDate: "DataStore demasiado grande. Por favor, limpia algunos datos de complementos e inténtalo de nuevo."
        },
        settings: {
            text: "¿Qué se incluye en una copia de seguridad?",
            quickcss: "QuickCSS personalizado",
            theme: "Enlaces de temas",
            plugins: "Ajustes de complementos",
            datastores: "DataStores de complementos (ej. Zonas horarias o IRememberYou)"
        },
        import: {
            title: "Importar ajustes",
            description: "Selecciona un archivo de ajustes exportado previamente para restaurar tu configuración. Esto reemplazará todos tus ajustes actuales por los de la copia de seguridad.",
            all: "Importar todos los ajustes",
            plugins: "Importar complemento",
            css: "Importar QuickCSS",
            datastore: "Importar DataStores"
        },
        export: {
            title: "Exportar ajustes",
            description: "Puedes exportar tus ajustes actuales de Plexcord a un archivo para tener una copia de seguridad o transferirlos a otro dispositivo.",
            all: "Exportar todos los ajustes",
            plugins: "Exportar complemento",
            css: "Exportar QuickCSS",
            datastore: "Exportar DataStores"
        },
        backupFileType: "Copia de seguridad de la configuración de Plexcord"
    },

    cloud: {
        text: "Nube",
        title: "Sincronización de Ajustes",
        override: "Sincronización en la Nube",
        description: "Sincroniza tus ajustes de Plexcord en la nube. Esto facilita mantener tu configuración consistente en múltiples dispositivos sin necesidad de importar o exportar manualmente.",
        switchDescription: "Cuando está activado, tus ajustes se pueden sincronizar desde y hacia la nube. Usa las acciones de abajo para sincronizar manualmente.",
        settings: "Ajustes de la Nube",
        successful: "¡Ajustes sincronizados con la nube!",
        updated: "¡Tus ajustes han sido actualizados! ¡Haz clic aquí para reiniciar y aplicar los cambios por completo!",
        deleted: "¡Ajustes eliminados de la nube!",
        integration: {
            title: "Integración en la Nube",
            description: "La integración en la nube de Plexcord te permite sincronizar tus ajustes en múltiples dispositivos e instalaciones de Discord. Tus datos se almacenan de forma segura y pueden restaurarse fácilmente en cualquier momento.",
        },
        reauth: "¡Hemos notado que tienes integraciones en la nube activadas en otro cliente! Debido a limitaciones, deberás volver a autorizar para seguir usándolas. ¡Haz clic aquí para ir a la página de ajustes y hacerlo!",
        error: {
            setup: "Error en la configuración (no se pudo recuperar la configuración de OAuth).",
            secret: "Error en la configuración (no se devolvió ningún secreto).",
            string: "Error en la configuración ({{error}}).",
            connect: "La sincronización en la nube se desactivó porque esta cuenta no está conectada a la aplicación Plexcord Cloud. Puedes activarla de nuevo conectando esta cuenta en los Ajustes de la Nube. (Nota: almacenará tus preferencias por separado)",
            noSettings: "No hay ajustes en la nube.",
            uptodate: "Tus ajustes están al día.",
            localNewer: "Tus ajustes locales son más recientes que los de la nube.",
            delete: "No se pudieron eliminar los ajustes ({{error}}).",
            api: {
                returned: {
                    delete: "No se pudieron eliminar los ajustes (la API devolvió {{status}}).",
                    to: "No se pudieron sincronizar los ajustes a la nube (la API devolvió {{status}}).",
                    from: "No se pudieron sincronizar los ajustes desde la nube (la API devolvió {{status}}).",
                    manifest: "No se pudo obtener el manifiesto para su eliminación (la API devolvió {{status}})."
                }
            },
            synchronize: {
                to: "No se pudieron sincronizar los ajustes a la nube ({{error}}).",
                from: "No se pudieron sincronizar los ajustes desde la nube ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Activa la integración en la nube arriba para usar las funciones de sincronización de ajustes."
        },
        danger: {
            title: "Zona de Peligro",
            description: "Elimina permanentemente todos tus datos de la nube. Esta acción no se puede deshacer y eliminará todos los ajustes sincronizados y cualquier otro dato almacenado en el servidor de la nube.",
            delete: {
                account: {
                    title: "Eliminar Cuenta de la Nube",
                    description: "¿Estás seguro de que quieres eliminar permanentemente tu cuenta de la nube y todos los datos asociados? Esta acción no se puede deshacer.",
                    confirm: "Eliminar cuenta",
                    cancel: "Cancelar"
                }
            }
        },
        notification: {
            title: "Integración en la Nube",
            enabled: "Integración en la nube activada",
            host: "{{host}} ha sido añadido a la lista blanca. Por favor, reinicia la aplicación para que los cambios surtan efecto.",
            erase: {
                successful: "Datos de la nube borrados con éxito",
                failed: "Error al borrar todos los datos (la API devolvió {{status}}), por favor contacta al soporte técnico."
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
            later: "¡Más tarde!"
        },
        privacy: "respeta tu privacidad",
        source: "código fuente",
        overview: "Plexcord incluye una integración en la nube que añade ventajas como la sincronización de ajustes entre dispositivos. Esta {{privacy}}, y el {{source}} tiene licencia AGPL 3.0 para que puedas alojarlo tú mismo.",
        authorization: "Conéctate al servidor de la nube para la sincronización de ajustes. Esto solicitará una autorización si aún no has configurado la integración en la nube.",
        backend: {
            title: "Servidor de la Nube (Backend)",
            description: "Elige cómo se almacenan tus ajustes en la nube. Por defecto, se usa Plexcord Cloud, pero también puedes conectar tu propio servicio de nube autoalojado.",
            invalid: "URL no válida"
        },
        sync: {
            title: "Reglas de sincronización para este dispositivo",
            description: "Este ajuste controla cómo se mueven los datos entre este dispositivo y la nube. Puedes dejar que los cambios fluyan en ambas direcciones o elegir un lugar como la fuente principal de verdad.",
            direction: {
                both: "Sincronización bidireccional (los cambios van en ambas direcciones)",
                push: "Este dispositivo es la fuente (solo subida)",
                pull: "La nube es la fuente (solo descarga)",
                manual: "No sincronizar automáticamente (solo sincronización manual mediante los botones de abajo)"
            }
        }
    },

    changelog: {
        text: "Registro de cambios",
        title: "Registro de cambios",
        description: "Aquí puedes encontrar los últimos cambios y actualizaciones de Plexcord.",
        by: "por",
        check: "Comprobación del repositorio",
        uptodate: "al día",
        update: "Actualizar",
        noMessage: "Sin mensaje",
        unknown: "Desconocido",
        updatedPlugins: "Complementos actualizados",
        newSettings: "Nuevos ajustes",
        newSettingTooltip: "Nuevo ajuste en {{plugin}}",
        loading: "Cargando...",
        repoUptodate: "Repositorio al día",
        fetch: "Obtener del repositorio",
        clear: "Borrar todos los registros",
        internet: "Asegúrate de tener conexión a Internet e inténtalo de nuevo.",
        recent: "Cambios recientes",
        codeChanges: "Cambios de código: {{count}} nuevo{{s}} commit{{s}}",
        updateLogs: "Registros de actualización ({{count}})",
        noCommit: "No hay commits nuevos por delante de tu versión actual. Haz clic en 'Obtener del repositorio' para buscar cambios nuevos.",
        previous: "Sesiones de actualización anteriores con su historial de commits y cambios en complementos.",
        modal: {
            description: "Mira los cambios más recientes de Plexcord. Esto obtiene los commits directamente del repositorio para mostrarte qué hay de nuevo.",
            repository: "Repositorio",
            failed: "Error al recuperar - revisa la consola",
            current: "Actual:",
            hide: "Ocultar registros",
            show: "Mostrar registros",
            fetch: {
                title: "Obtener cambios",
                description: "Busca en el repositorio nuevos commits, actualizaciones de complementos y cambios de código. Esto comparará tu versión actual con la última disponible y te mostrará las novedades.",
                newCommit: "Estos son los nuevos commits y actualizaciones de complementos desde tu última versión. Puedes ver qué funciones se añadieron, qué errores se corrigieron y qué complementos recibieron actualizaciones.",
                confirm: "Obtener",
            }
        },
        commit: {
            available: "commits disponibles",
            no: "No hay commits nuevos",
            new: "nuevos complementos",
            updated: "complementos actualizados",
            settings: "nuevos ajustes"
        },
        toast: {
            already: "Ya estás al día con el repositorio",
            found: "Se encontraron {{count}} nuevo{{s}} commit{{s}} en el repositorio",
            local: "El repositorio está al día con tu copia local",
            failed: "Error al obtener del repositorio :(",
            cleared: "Se han borrado todos los registros",
            logCleared: "Se ha borrado el registro",
            yourLatest: "Commits registrados desde tu última actualización"
        },
        alert: {
            clear: {
                title: "Borrar todos los registros",
                body: "¿Estás seguro de que quieres borrar todos los registros? Esta acción no se puede deshacer.",
                confirm: "Borrar todo",
                confirmColor: "danger",
                cancel: "Cancelar"
            },
            log: {
                title: "Borrar registro",
                body: "¿Estás seguro de que quieres borrar este registro? Esta acción no se puede deshacer.",
                confirm: "Borrar registro",
                confirmColor: "danger",
                cancel: "Cancelar"
            }
        },
        newPlugins: "{{count}} Nuevo{{s}} Complemento{{s}}",
        following: "Los siguientes complementos se han añadido en actualizaciones recientes:",
        more: "+{{count}} complementos más",
        error: {
            retrieveRepo: "No se pudo obtener la información del repositorio",
            fetchRepo: "No se pudo obtener datos del repositorio",
            connectRepo: "No se pudo conectar con el repositorio. Verifica tu conexión a Internet."
        }
    },

    csp: {
        restart: "Se requiere un reinicio para aplicar este cambio",
        blocked: {
            resources: "Recursos bloqueados",
            disallowed: "Algunas imágenes, estilos o fuentes fueron bloqueados porque provienen de dominios no permitidos.",
            recommended: "Se recomienda encarecidamente moverlos a GitHub o Imgur. Pero también puedes permitir dominios si confías plenamente en ellos.",
            afterAllow: "Después de permitir un dominio, debes cerrar completamente (desde la bandeja / administrador de tareas) y reiniciar {{platform}} para aplicar el cambio.",
            allow: "Permitir",
            allowAll: "Permitir todos ({{count}} dominios)",
            url: "URLs bloqueadas"
        },
        imgur: {
            direct: "Los enlaces de Imgur deben ser enlaces directos con el formato {{etc}}",
            copy: "Para obtener un enlace directo, haz clic derecho en la imagen y selecciona 'Copiar dirección de imagen'."
        },
        notice: {
            allowHost: "Permitir host",
            blocked: "Las conexiones a {{host}} están bloqueadas. Permite este host si confías en él y luego reinicia Discord.",
            imagesBlocked: "Las imágenes de {{host}} están bloqueadas. Permite este host si confías en él y luego reinicia Discord.",
            failed: "No se pudo permitir este dominio."
        },
        wants: {
            caller: "{{callerName}} quiere permitir conexiones a {{domain}}",
            unknown: "Una fuente desconocida quiere permitir conexiones a {{domain}}",
            detail: "¡A menos que reconozcas y confíes plenamente en {{domain}}, deberías cancelar esta solicitud!",
            restart: "Deberás cerrar completamente y reiniciar {{appName}} para que los cambios surtan efecto.",
            type: {
                images: "Imágenes",
                styles: "CSS y Temas",
                fonts: "Fuentes"
            },
            content: "Se permitirá la carga de los siguientes tipos de contenido desde {{domain}}:",
            understand: "Confío plenamente en {{domain}} y entiendo los riesgos de permitir conexiones hacia él.",
            button: {
                cancel: "Cancelar",
                allow: "Permitir"
            },
            title: "Permisos de Host"
        }
    },

    themes: {
        title: "Temas",
        management: "Gestión de Temas",
        description: "Personaliza la apariencia de Discord con temas. Añade archivos .css locales o carga temas directamente desde URLs. Los temas con un ícono de engranaje tienen ajustes personalizables que puedes modificar.",
        local: "Temas locales",
        new: "NUEVO",
        pinned: "Anclado",
        stylus: "Extensión Stylus",
        bd: "Temas de BetterDiscord",
        github: "GitHub",
        download: "¿Buscas temas? Echa un vistazo a {{bd}} o busca en {{github}}. Al descargar desde BetterDiscord, haz clic en 'Download' y coloca el archivo .theme.css en tu carpeta de temas.",
        add: "Añadir",
        reset: "Restablecer ajustes a los predeterminados",
        notCSS: "No es un archivo CSS. ¡Recuerda usar el enlace directo (raw)!",
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
        refresh: "Refrescar",
        delete: "Eliminar",
        activation: {
            title: "Activación del tema",
            always: "Siempre activo",
            lightOnly: "Solo tema claro",
            darkOnly: "Solo tema oscuro"
        },
        actions: {
            pin: "Fijar",
            unpin: "Desfijar",
            editSettings: "Editar ajustes"
        },
        unknown: {
            title: "Desconocido",
            author: "Autor desconocido",
            theme: "Un tema de Discord",
            description: "No se proporcionó una descripción."
        },
        required: "Los siguientes complementos son requeridos, pero no están activados: ",
        homepage: "Página de inicio",
        support: "Soporte",
        online: {
            title: "Temas en línea",
            description: "Carga temas directamente desde URLs en lugar de archivos locales. Los temas en línea se actualizan automáticamente cuando cambia la fuente, para que siempre tengas la última versión sin descargas manuales.",
            enable: "Activar temas en línea",
            enableDescription: "Activa o desactiva la carga de temas en línea. Cuando esté desactivado, todos los temas en línea se apagarán y no podrás añadir nuevos.",
            placeholder: "https://ejemplo.com/tema.css"
        },
        quickActions: {
            title: "Acciones rápidas",
            description: "Atajos para gestionar tus temas. Abre tu carpeta de temas para añadir nuevos, usa QuickCSS para retoques rápidos de estilo o recarga los temas después de hacer cambios."
        },
        error: {
            userscript: "¡Los temas no son compatibles con el Userscript!",
            stylus: "¡En su lugar, puedes instalar temas con {{stylus}}!",
            expired: "Enlace no válido o expirado",
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
            description: "Gestiona tus temas aquí. Los temas locales se cargan desde tu carpeta de temas, los temas en línea desde URLs. Los temas con un ícono de engranaje tienen ajustes personalizables.",
            count: "{{count}} tema{{s}} instalado{{s}} ({{localCount}} local{{es}}, {{onlineCount}} en línea) · {{enabledCount}} activado{{s}}",
            search: "Buscar un tema...",
            loading: "Cargando temas...",
            none: "Aún no hay temas instalados. Añade archivos de tema a tu carpeta de temas o añade un tema en línea arriba para empezar.",
            noCriteria: "Ningún tema coincide con tu búsqueda o criterios de filtro."
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
                title: "Tema refrescado",
                error: "Error al refrescar el tema"
            },
            failed: {
                download: "Error al descargar el tema"
            }
        },
        openInFolder: "Abrir en carpeta",
        fallback: {
            author: "Autor desconocido",
            description: "Un tema de Discord."
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
            description: "Controla cómo Plexcord se mantiene al día. Puedes elegir actualizar automáticamente en segundo plano o recibir una notificación cuando haya nuevas actualizaciones disponibles.",
        },
        github: {
            local: "Tu copia local tiene commits más recientes que el repositorio remoto. Esto suele suceder cuando has realizado cambios locales. Por favor, haz un stash o reset antes de actualizar."
        },
        error: {
            check: "Error al buscar actualizaciones. Revisa la consola para más información",
            occurred: "Ocurrió un error desconocido",
            retrieve: "Error al recuperar - revisa la consola",
            title: "¡Oops!",
            tryAgain: "Ocurrió un error desconocido. Por favor, inténtalo de nuevo o revisa la consola para más información.",
            command: "No se encontró el comando {{path}}. Por favor, instálalo e inténtalo de nuevo.",
            code: "Código {{code}}. Revisa la consola para más información.",
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
            body: "Se actualizó correctamente. ¿Quieres reiniciar ahora para aplicar los cambios?",
            button: {
                confirm: "Reiniciar",
                cancel: "¡Ahora no!",
                update: "Actualizar ahora",
                check: "Buscar actualizaciones"
            },
            noFound: "No se encontraron actualizaciones"
        },
        automatically: {
            label: "Actualizar automáticamente",
            description: "Actualiza Plexcord automáticamente sin pedir confirmación"
        },
        notify: {
            label: "Recibir notificaciones al completar una actualización automática",
            description: "Muestra una notificación cuando Plexcord se actualiza automáticamente"
        },
        repo: "Repo",
        repoDescription: "Este es el repositorio de GitHub desde donde Plexcord obtiene las actualizaciones.",
        loading: "Cargando...",
        unknownAuthor: "Autor desconocido"
    },

    components: {
        error: {
            title: "¡Oh no!",
            render: "Ocurrió un error al renderizar este componente. Puedes encontrar más información abajo y en tu consola."
        },
        componentFailed: {
            message: "¡Uh oh! Error al renderizar esta página. Sin embargo, hay una actualización disponible que podría solucionarlo. ¿Te gustaría actualizar y reiniciar ahora?"
        },
        quickCSS: {
            title: "Editor QuickCSS abierto",
            message: "El editor QuickCSS todavía está abierto en segundo plano.",
            detail: "¿Quieres cerrar Discord de todas formas? Esto también cerrará el editor QuickCSS.",
            cancel: "Cancelar",
            close: "Cerrar de todas formas",
            windowTitle: "Editor QuickCSS de Plexcord"
        },
        messagePopover: {
            scrollLeft: "Desplazar a la izquierda",
            scrollRight: "Desplazar a la derecha"
        },
        notices: {
            error: "Error al mostrar el aviso"
        },
        tray: {
            aboutPlexcord: "Acerca de Plexcord",
            updatePlexcord: "Actualizar Plexcord",
            noUpdateTitle: "No hay actualizaciones",
            noUpdateBody: "Ya estás usando la última versión de Plexcord.",
            updateFailedTitle: "Error en la actualización",
            updateFailedBody: "No se pudo aplicar la actualización de Plexcord.",
            updateSuccessTitle: "Actualización completada",
            updateSuccessBody: "Reiniciando Plexcord para aplicar la actualización.",
            updateErrorTitle: "Error de actualización",
            updateErrorBody: "Ocurrió un error al actualizar Plexcord.\n\n{{error}}",
            openSettingsFolder: "Abrir carpeta de configuración",
            openThemesFolder: "Abrir carpeta de temas"
        }
    },

    commands: {
        error: {
            execute: "Ocurrió un error al ejecutar el comando '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Descartar notificación",
        noYet: "No hay notificaciones aún",
        settings: "Ajustes de notificaciones",
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
        },
        detectLanguage: "Detectar idioma"
    },

    plugin: {
        tags: {
            accessibility: "Accesibilidad",
            activity: "Actividad",
            appearance: "Apariencia",
            chat: "Chat",
            commands: "Comandos",
            console: "Consola",
            customisation: "Personalización",
            developers: "Desarrolladores",
            emotes: "Emotes",
            friends: "Amigos",
            fun: "Diversión",
            media: "Medios",
            notifications: "Notificaciones",
            organisation: "Organización",
            privacy: "Privacidad",
            reactions: "Reacciones",
            roles: "Roles",
            servers: "Servidores",
            shortcuts: "Atajos",
            utility: "Utilidad",
            voice: "Voz"
        },
        concatenatedComponentExtractor: {
            name: "ConcatenatedComponentExtractor",
            description: "Extraer componentes que han sido concatenados por el empaquetador (bundler)"
        },
        concatenatedModules: {
            name: "ConcatenatedModules",
            description: "Extraer módulos que han sido concatenados por el empaquetador (bundler)"
        },
        noTrack: {
            name: "NoTrack",
            description: "Deshabilita el seguimiento de Discord (analytics/'science'), métricas y el reporte de errores de Sentry",
            option: {
                disableAnalytics: {
                    label: "Deshabilitar análisis",
                    description: "Bloquea las analíticas de rastreo de Discord. Desactívalo si quieres que las insignias registren tu progreso (p. ej.: horas transmitidas)."
                },
                disableStackDumping: {
                    description: "Imprimir un seguimiento de pila nativo en la consola cuando Discord se bloquee. Requiere un reinicio completo."
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
                },
                includePlexcordInfoWhenCopying: {
                    label: "Incluir información de Plexcord al copiar",
                    description: "Copiar también la información de Plexcord (Plexcord, Electron, Chromium) al hacer clic en la información de versión en la esquina inferior izquierda de la página de Ajustes"
                }
            }
        },
        supportHelper: {
            name: "Asistente de Soporte",
            description: "Nos ayuda a brindarte soporte técnico",
            commands: {
                description: {
                    debug: "Enviar información de depuración de Plexcord",
                    plugins: "Enviar lista de complementos de Plexcord"
                }
            },
            modals: {
                outdated: {
                    title: "¡Espera un momento!",
                    body: "¡Estás usando una versión antigua de Plexcord! Es muy probable que tu problema ya haya sido solucionado.",
                    footer: "¡Por favor, actualiza antes de pedir soporte!",
                    dismiss: "Si sabes lo que haces o no puedes actualizar, puedes cerrar este aviso.",
                    button: {
                        cancel: "Ver actualizaciones",
                        confirm: "Actualizar y reiniciar ahora",
                        secondaryConfirm: "Sé lo que hago o no puedo actualizar"
                    }
                },
                updater: {
                    title: "¡Espera un momento!",
                    body: "¡Estás usando una versión de Plexcord actualizada externamente, para la cual no ofrecemos soporte!",
                    footer: "Por favor, cambia a una {{officially}}, o contacta al mantenedor de tu paquete para recibir ayuda.",
                    officially: "versión de Plexcord con soporte oficial",
                    button: {
                        cancel: "Cancelar",
                        confirm: "Ver página de descargas",
                        now: "Actualizar ahora"
                    },
                    toast: {
                        success: "¡Éxito! Reiniciando...",
                        already: "¡Ya está actualizado!",
                        failed: "Error al actualizar :("
                    }
                },
                custom: {
                    title: "¡Espera un momento!",
                    header: "¡Estás usando una versión personalizada de Plexcord, para la cual no ofrecemos soporte!",
                    body: "Solo ofrecemos soporte para {{officialBuild}}. Por favor, {{switch}} o resuelve el problema por tu cuenta.",
                    footer: "Se te prohibirá recibir soporte si ignoras esta regla.",
                    official: "versiones oficiales",
                    switch: "cambia a una versión oficial",
                    button: {
                        confirm: "Entendido",
                        secondaryConfirm: "No mostrar de nuevo"
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
                failedOpenInvite: "Error al abrir la invitación, revisa la consola :(",
                upload: "¡Lista de complementos subida con éxito!",
                failedUpload: "Error al subir el archivo de la lista de complementos. Inténtalo de nuevo.",
                unableGenerate: "Error al generar la lista de complementos."
            },
            dm: {
                warning: "¡Por favor, no envíes mensajes privados a los desarrolladores de complementos de Plexcord para pedir soporte!{{br}}En su lugar, puedes unirte al servidor de {{support}} y usar el canal de soporte: {{channel}}"
            },
            alert: {
                title: "Advertencia: Muchos complementos activos",
                paragraph1: "Tienes más de 100 complementos habilitados.",
                paragraph2: "Debido a la gran cantidad de complementos, es posible que no recibas soporte.",
                paragraph3: "Es probable que tu problema sea causado por conflictos entre complementos.",
                paragraph4: "Por favor, considera deshabilitar algunos complementos para solucionar el problema.",
                paragraph5: "Tu lista de complementos se enviará como un archivo de texto.",
            }
        },
        accountPanelServerProfile: {
            name: "Perfil de Servidor en Panel de Cuenta",
            description: "Haz clic derecho en tu panel de cuenta (abajo a la izquierda) para ver tu perfil en el servidor actual",
            option: {
                prioritizeServerProfile: {
                    label: "Priorizar perfil de servidor",
                    description: "Priorizar el perfil del servidor al hacer clic izquierdo en tu panel de cuenta"
                }
            },
            context: {
                account: "Ver perfil de cuenta",
                server: "Ver perfil de servidor",
                prioritize: "Priorizar perfil de servidor"
            }
        },
        altKrispSwitch: {
            name: "Interruptor Krisp Alternativo",
            description: "Hace que el menú de supresión de ruido cambie entre 'Ninguno' y 'Krisp' en lugar de 'Krisp' y 'Estándar'"
        },
        alwaysAnimate: {
            name: "Animación Continua",
            description: "Anima cualquier cosa que sea animable",
            option: {
                icons: {
                    label: "Íconos",
                    description: "Animar siempre íconos de servidor, avatares, decoraciones y más"
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
                    description: "Animar siempre las placas de nombre (nameplates)"
                },
                roleGradients: {
                    label: "Degradados de roles",
                    description: "Animar siempre los degradados de roles"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "Expandir Perfiles Siempre",
            description: "Expande siempre las ventanas emergentes de perfiles al modo completo"
        },
        alwaysExpandRoles: {
            name: "Expandir Roles Siempre",
            description: "Expande siempre la lista de roles en las ventanas emergentes de perfil",
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
                    description: "Multiplicador de tono (pitch)"
                },
                messageLengthLimit: {
                    label: "Límite de longitud de mensaje",
                    description: "Longitud máxima de mensaje a procesar"
                },
                processOwnMessages: {
                    label: "Procesar mis propios mensajes",
                    description: "Activa esto para que tus propios mensajes también suenen"
                },
                soundQuality: {
                    label: "Calidad de sonido",
                    description: "Calidad de sonido a utilizar",
                    high: "Alta",
                    med: "Media",
                    low: "Baja",
                    lowest: "Mínima"
                }
            }
        },
        alwaysTrust: {
            name: "Confianza Total",
            description: "Elimina los molestos avisos de dominios no confiables y archivos sospechosos",
            option: {
                domain: {
                    label: "Dominio",
                    description: "Elimina el aviso de dominio no confiable al abrir enlaces"
                },
                file: {
                    label: "Archivo",
                    description: "Elimina el aviso de 'Descarga potencialmente peligrosa' al abrir archivos"
                },
                noDeleteSafety: {
                    label: "Sin confirmación de nombre",
                    description: "Elimina el requisito de escribir el nombre del servidor para borrarlo"
                },
                confirmModal: {
                    label: "Ventana de confirmación",
                    description: "¿Debería mostrarse una ventana de '¿estás seguro de que quieres borrar'?"
                }
            },
            alert: {
                title: "¿Borrar servidor?",
                body: "Es permanente, por si no fuera obvio.",
                confirm: "Borrar",
                cancel: "Cancelar"
            }
        },
        anonymiseFileNames: {
            name: "Anonimizar Nombres de Archivos",
            description: "Anonimiza los nombres de los archivos subidos",
            option: {
                anonymiseByDefault: {
                    label: "Anonimizar por defecto",
                    description: "Anonimiza los nombres de archivo por defecto. Puedes desactivarlo en el menú de subida si lo necesitas."
                },
                spoilerMessages: {
                    label: "Mensajes con Spoiler",
                    description: "Anonimiza nombres de archivos marcados como spoilers."
                },
                method: {
                    label: "Método",
                    description: "Método de anonimización",
                    random: "Caracteres aleatorios",
                    consistent: "Consistente",
                    timestamp: "Marca de tiempo (Timestamp)",
                    date: "Fecha"
                },
                randomisedLength: {
                    label: "Longitud aleatoria",
                    description: "Longitud de los caracteres aleatorios"
                },
                consistent: {
                    label: "Consistente",
                    description: "Secreto de anonimización consistente"
                },
                dateFormat: {
                    description: "Formato de fecha (se admiten YYYY, MM, DD, HH, mm, ss, SSS)",
                    label: "Formato de fecha"
                }
            },
            using: {
                anonymous: "Usando nombre de archivo anónimo",
                spoiler: "Usando nombre de archivo normal"
            },
            spoiler: {
                description: "Cambiar spoiler para tus archivos",
                toggle: "Cambiar spoiler para tus archivos (activado por defecto)",
                enabled: "¡Spoiler activado!",
                disabled: "¡Spoiler desactivado!"
            }
        },
        arRpc: {
            name: "Web Rich Presence (arRPC)",
            description: "Complemento cliente para arRPC que permite RPC en Discord Web (experimental)",
            use: {
                title: "Cómo usar arRPC",
                enable: "{{link}} para poner en marcha el servidor y luego habilita el complemento.",
                link: "Sigue las instrucciones en el repositorio de GitHub"
            },
            toast: {
                connected: "Conectado a arRPC",
                failed: "Error al conectar a arRPC, ¿está ejecutándose?",
                retry: "Reintentar"
            }
        },
        atSomeone: {
            name: "Mencionar a alguien (@someone)",
            description: "Con @someone puedes mencionar a alguien al azar"
        },
        autoDNDWhilePlaying: {
            name: "No Molestar Automático al Jugar",
            description: "Actualiza automáticamente tu estado (conectado, ausente, no molestar) al iniciar juegos",
            option: {
                statusToSet: {
                    label: "Estado a establecer",
                    description: "El estado que se pondrá al iniciar un juego",
                    online: "Conectado",
                    dnd: "No molestar",
                    idle: "Ausente",
                    invisible: "Invisible"
                },
                excludeInvisible: {
                    label: "Excluir invisible",
                    description: "Evita cambios automáticos si tu estado actual es invisible"
                }
            }
        },
        autoZipper: {
            name: "Compresor Automático (AutoZipper)",
            description: "Comprime automáticamente carpetas y tipos de archivos específicos antes de subirlos a Discord",
            option: {
                extensions: {
                    label: "Extensiones",
                    description: "Lista de extensiones separadas por comas para comprimir automáticamente (ej: .psd,.blend,.exe,.dmg)"
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
                    description: "Priorizar la placa de nombre sobre el banner"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Muestra íconos de actividad en la lista de miembros y permite ver todas las actividades",
            option: {
                memberList: {
                    label: "Lista de miembros",
                    description: "Mostrar íconos de actividad en la lista de miembros"
                },
                iconSize: {
                    label: "Tamaño del ícono",
                    description: "Tamaño de los íconos de actividad"
                },
                specialFirst: {
                    label: "Especiales primero",
                    description: "Mostrar actividades especiales primero (actualmente Spotify y Twitch)"
                },
                renderGifs: {
                    label: "Renderizar GIFs",
                    description: "Permitir la reproducción de GIFs"
                },
                removeGameActivityStatus: {
                    label: "Eliminar estado de 'Actividad de juego'",
                    description: "Eliminar el ícono y el estado de actividad de juego"
                },
                userPopout: {
                    label: "Ventana de usuario",
                    description: "Mostrar todas las actividades en la ventana emergente/barra lateral del perfil"
                },
                hideTooltip: {
                    label: "Ocultar descripción emergente (Tooltip)",
                    description: "Oculta las actividades en varios lugares"
                },
                allActivitiesStyle: {
                    label: "Estilo de todas las actividades",
                    description: "Estilo para mostrar todas las actividades",
                    list: "Lista",
                    carousel: "Carrusel",
                    left: "Izquierda",
                    right: "Derecha"
                }
            },
            text: {
                smallText: "Texto pequeño",
                largeText: "Texto grande"
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Añade un visualizador de espectrógrafo y osciloscopio a los reproductores de audio adjuntos",
            option: {
                oscilloscope: {
                    label: "Osciloscopio",
                    description: "Habilitar visualizador de osciloscopio"
                },
                spectrograph: {
                    label: "Espectrógrafo",
                    description: "Habilitar visualizador de espectrógrafo"
                },
                oscilloscopeSolidColor: {
                    label: "Color sólido para osciloscopio",
                    description: "Usar un color sólido para el osciloscopio en lugar de un degradado"
                },
                oscilloscopeColor: {
                    label: "Color del osciloscopio",
                    description: "Color del osciloscopio cuando el color sólido está habilitado"
                },
                spectrographSolidColor: {
                    label: "Color sólido para espectrógrafo",
                    description: "Usar un color sólido para el espectrógrafo en lugar de un degradado"
                },
                spectrographColor: {
                    label: "Color del espectrógrafo",
                    description: "Color del espectrógrafo cuando el color sólido está habilitado"
                }
            },
            toast: {
                invalidColorFormat: "Formato de color inválido para {{settingKey}}, asegúrate de usar el formato 'R, G, B' o '#RRGGBB'",
                invalidColorFormatFor: "Formato de color no válido para {{key}}, usa \"R, G, B\" o \"#RRGGBB\""
            }
        },
        betterBackreading: {
            name: "BetterBackreading",
            description: "Mejora la lectura de mensajes antiguos con una carga más temprana y menos saltos.",
            wholeNumber: "Ingresa un número entero entre {{min}} y {{max}}.",
            option: {
                imageScrollMargin: {
                    label: "Distancia de precarga de imágenes",
                    description: "Con cuánta antelación se cargan las imágenes, en píxeles (300-3000)."
                },
                messageLoadBuffer: {
                    label: "Búfer de carga de mensajes",
                    description: "Con cuánta antelación se obtienen más mensajes, en píxeles (500-3000)."
                },
                useDiscordMessageCount: {
                    label: "Usar el número dinámico de mensajes de Discord",
                    description: "Deja que Discord elija cuántos mensajes obtener según tu ventana y tus ajustes de chat."
                },
                messageCount: {
                    label: "Número de mensajes personalizado",
                    description: "Cuántos mensajes obtener por solicitud de historial cuando el número dinámico está desactivado (30-100)."
                },
                channelOpenScrollMode: {
                    label: "Posición al abrir un canal",
                    description: "Abre los canales no leídos en la posición guardada (o al final), siempre al final, o usa el comportamiento predeterminado de no leídos.",
                    default: "Predeterminado de Discord",
                    bottom: "Siempre al final",
                    saved: "Posición guardada"
                }
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Crea razones personalizadas para el menú de baneo de Discord y/o muestra una entrada de texto por defecto.",
            option: {
                reasons: {
                    label: "Razones",
                    description: "Tus razones personalizadas"
                },
                isTextInputDefault: {
                    label: "Entrada de texto por defecto",
                    description: "Muestra un campo de texto en lugar de un menú desplegable por defecto (equivalente a hacer clic en 'Otro')."
                }
            },
            title: "Razones",
            placeholder: "Razón",
            add: "Añadir otra razón",
            duration: {
                discordDefault: "Predeterminado de Discord",
                none: "No eliminar nada",
                hour1: "Última hora",
                hours6: "Últimas 6 horas",
                hours12: "Últimas 12 horas",
                hours24: "Últimas 24 horas",
                days3: "Últimos 3 días",
                days7: "Últimos 7 días"
            },
            text: {
                autoDeleteDuration: "Duración del borrado automático de mensajes"
            }
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Permite buscar en la lista de usuarios bloqueados, hace que los nombres se puedan seleccionar en la configuración, omite el aviso de perfil bloqueado y agrupa los mensajes bloqueados / ignorados.",
            placeholder: "Buscar usuarios..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Mejora el sistema de comandos con diversas optimizaciones.",
            option: {
                autoFillArguments: {
                    label: "Autocompletar argumentos",
                    description: "Completa automáticamente el comando con todos los argumentos en lugar de solo los obligatorios"
                },
                allowNewlinesInCommands: {
                    label: "Permitir saltos de línea en comandos",
                    description: "Permitir saltos de línea en las entradas de comandos (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Refresca los comandos de aplicación de Discord localmente",
                    user: "usuario específico para intentar refrescar",
                    refreshing: "Refrescando comandos de aplicación...",
                    refreshed: "¡Comandos refrescados con éxito!",
                    failed: "Error al refrescar comandos. Revisa la consola para más detalles."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Muestra carpetas de servidores en una barra lateral dedicada y añade mejoras relacionadas.",
            option: {
                sidebar: {
                    label: "Barra lateral",
                    description: "Muestra los servidores de la carpeta en una barra lateral dedicada"
                },
                sidebarAnim: {
                    label: "Animación de barra lateral",
                    description: "Animar la apertura de la barra lateral de carpetas"
                },
                closeAllFolders: {
                    label: "Cerrar todas las carpetas",
                    description: "Cierra todas las carpetas al seleccionar un servidor que no esté en una"
                },
                closeAllHomeButton: {
                    label: "Cerrar todo con botón de inicio",
                    description: "Cierra todas las carpetas al hacer clic en el botón de inicio"
                },
                closeOthers: {
                    label: "Cerrar otras",
                    description: "Cerrar otras carpetas al abrir una"
                },
                closeServerFolder: {
                    label: "Cerrar carpeta de servidor",
                    description: "Cerrar la carpeta al seleccionar un servidor dentro de ella"
                },
                forceOpen: {
                    label: "Forzar apertura",
                    description: "Fuerza la apertura de una carpeta al cambiar a un servidor de dicha carpeta"
                },
                enableNestedFolders: {
                    label: "Habilitar carpetas anidadas",
                    description: "Permitir anidar carpetas dentro de otras carpetas arrastrándolas"
                },
                keepIcons: {
                    label: "Mantener íconos",
                    description: "Sigue mostrando los íconos en la barra principal cuando la carpeta esté abierta en la barra lateral de BetterFolders"
                },
                showFolderIcon: {
                    label: "Mostrar ícono de carpeta",
                    description: "Muestra el ícono de la carpeta sobre los servidores en la barra lateral de BetterFolders",
                    never: "Nunca",
                    always: "Siempre",
                    moreThanOne: "Cuando hay más de una carpeta expandida"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Cambia el texto alternativo de los GIFs de un simple 'GIF' a las etiquetas o nombre de archivo del mismo"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Hace que el selector de GIFs abra la categoría de favoritos por defecto",
            option: {
                keepOpen: {
                    label: "Mantener abierto",
                    description: "Mantiene el selector de GIFs abierto después de seleccionar uno"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Mira la fecha de expiración de invitaciones, el perfil de quien invita y previsualiza servidores antes de unirte.",
            render: {
                tip: "Esta invitación expirará {{time}}",
                header: "{{name}} te invitó a {{server}}",
                headerSelf: "Enviaste una invitación para unirte a {{server}}",
                never: "no expira"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Oculta las notas o deshabilita el corrector ortográfico (¡Configúralo en ajustes!)",
            option: {
                hide: {
                    label: "Ocultar notas",
                    description: "Oculta el cuadro de notas en las ventanas emergentes de usuario"
                },
                noSpellCheck: {
                    label: "Sin corrector ortográfico",
                    description: "Deshabilita el corrector ortográfico en las notas"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "La cantidad de símbolos '+' antes de un :emoji: indica a qué mensaje añadir la reacción"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Añade opciones para copiar el color del rol / editar el rol / ver el icono del rol al hacer clic derecho en roles del perfil de usuario o de la lista de miembros",
            option: {
                roleIconFileFormat: {
                    label: "Formato de archivo de ícono de rol",
                    description: "Formato de archivo a usar al ver íconos de roles"
                }
            },
            context: {
                copyColor: "Copiar color de rol",
                editRole: "Editar rol",
                viewIcon: "Ver ícono de rol",
                viewMembers: "Ver miembros del rol"
            },
            text: {
                roleActions: "Acciones de rol"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "Copia el color de rol al hacer clic en el punto de rol. Permite usar el punto de rol y nombres coloreados simultáneamente.",
            option: {
                bothStyles: {
                    label: "Ambos estilos",
                    description: "Mostrar tanto el punto de rol como los nombres coloreados"
                },
                copyRoleColorInProfilePopout: {
                    label: "Copiar color en ventana de perfil",
                    description: "Permite hacer clic en el punto de rol de la ventana emergente para copiar su color"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Mejora el menú de sesiones (dispositivos). Permite ver marcas de tiempo exactas, renombrar sesiones y recibir notificaciones.",
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
                    description: "Busca nuevas sesiones en segundo plano y muestra notificaciones cuando se detectan"
                },
                checkInterval: {
                    label: "Intervalo de comprobación",
                    description: "Frecuencia de búsqueda de nuevas sesiones (si está habilitado), en minutos"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Mejora la experiencia al abrir el menú de ajustes",
            option: {
                disableFade: {
                    label: "Deshabilitar desvanecimiento",
                    description: "Deshabilita la animación de transición (crossfade)"
                },
                organizeMenu: {
                    label: "Organizar menú",
                    description: "Organiza el menú contextual del engranaje de ajustes por categorías"
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
            description: "Sube archivos con un solo clic; abre el menú con clic derecho"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Este complemento permite agrandar las previsualizaciones de las transmisiones",
            context: {
                viewPreview: "Ver previsualización de la transmisión"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Bloquea mensajes que contengan palabras clave específicas, como si el usuario estuviera bloqueado.",
            regexHelper: {
                title: "Asistente de Regex",
                placeholder: "Texto de prueba...",
                noPatterns: "No hay patrones configurados"
            },
            option: {
                blockedWords: {
                    label: "Palabras bloqueadas",
                    description: "Lista de palabras separadas por comas para bloquear"
                },
                useRegex: {
                    label: "Usar Regex",
                    description: "Usar cada valor como una expresión regular (avanzado)"
                },
                regexHelper: {
                    label: "Asistente de Regex",
                    description: "Prueba tus expresiones regulares con una entrada de ejemplo"
                },
                caseSensitive: {
                    label: "Distinguir mayúsculas",
                    description: "Indica si la búsqueda debe distinguir entre mayúsculas y minúsculas"
                },
                ignoreBlockedMessages: {
                    label: "Ignorar mensajes bloqueados",
                    description: "Ignora completamente la barra de nuevos mensajes (recientes)"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Evita que Krisp se cargue"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Desenfoca archivos en canales NSFW hasta pasar el cursor sobre ellos",
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
            description: "Omite la confirmación al usar las funciones de anclaje (pin)"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Recibe notificaciones de fuentes específicas incluso en modo 'No molestar'. Haz clic derecho para configurar excepciones.",
            context: {
                remove: "Eliminar excepción de estado",
                add: "Añadir excepción de estado"
            },
            option: {
                guilds: {
                    label: "Servidores",
                    description: "Servidores permitidos (notifica menciones en cualquier parte del servidor)",
                    placeholder: "Separar con comas"
                },
                channels: {
                    label: "Canales",
                    description: "Canales permitidos (notifica menciones en ese canal)",
                    placeholder: "Separar con comas"
                },
                users: {
                    label: "Usuarios",
                    description: "Usuarios permitidos (notifica todos los mensajes en MD)",
                    placeholder: "Separar con comas"
                },
                allowOutsideOfDms: {
                    label: "Permitir fuera de MD",
                    description: "Permite que los usuarios seleccionados ignoren el estado fuera de MD también (notifica todos sus mensajes)"
                },
                notificationSound: {
                    label: "Sonido de notificación",
                    description: "Indica si debe reproducirse el sonido de notificación"
                },
                respectSilentPings: {
                    label: "Respetar menciones silenciosas",
                    description: "Respetar menciones silenciosas (@silent / suprimir notificaciones)"
                },
                statusToUse: {
                    label: "Estado a utilizar",
                    description: "Estado para la lista blanca",
                    online: "Conectado",
                    idle: "Ausente",
                    dnd: "No molestar",
                    invisible: "Invisible"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Rastrea y muestra los cumpleaños de los usuarios con íconos de pastel",
            context: {
                label: "Cumpleaños",
                setBirthday: "Establecer cumpleaños",
                clearBirthday: "Borrar cumpleaños",
                current: "Actual:"
            },
            option: {
                chat: {
                    label: "Chat",
                    description: "Mostrar íconos de pastel junto a los nombres en el chat"
                },
                memberList: {
                    label: "Lista de miembros",
                    description: "Mostrar íconos de pastel en la lista de miembros"
                },
                profileBadge: {
                    label: "Insignia de perfil",
                    description: "Mostrar insignia de pastel en el perfil de usuario"
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
                title: "🎂 ¡Hoy es su cumpleaños!",
                body: "¡Hoy es el cumpleaños de {{username}}!"
            },
            modal: {
                title: "Establecer cumpleaños para {{username}}",
                description: "Ingresa el cumpleaños en formato DD/MM (ej. 25/12)",
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
            },
            text: {
                unknownUser: "Usuario desconocido"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Muestra cronómetros de duración en todas las llamadas de voz",
            option: {
                format: {
                    label: "Formato",
                    description: "Formato compacto o legible",
                    human: "30d 23h 00m 42s"
                },
                allCallTimers: {
                    label: "Todos los cronómetros",
                    description: "Mostrar cronómetros de llamada para todos los usuarios en servidores"
                },
                showWithoutHover: {
                    label: "Mostrar sin pasar el cursor",
                    description: "Mostrar siempre el cronómetro sin necesidad de pasar el cursor por encima"
                },
                showRoleColor: {
                    label: "Mostrar color de rol",
                    description: "Mostrar con el color de rol del usuario (si el complemento ShowRoleColor está activo)"
                },
                trackSelf: {
                    label: "Rastrearme a mí mismo",
                    description: "También mostrar mi propio cronómetro"
                },
                showSeconds: {
                    label: "Mostrar segundos",
                    description: "Mostrar los segundos en el cronómetro"
                },
                watchLargeGuilds: {
                    label: "Vigilar servidores grandes",
                    description: "Rastrear usuarios en servidores grandes. Esto puede causar lag si estás en muchos servidores con usuarios de voz activos."
                },
                fixUI: {
                    label: "Reparar interfaz",
                    description: "En algunos casos el cronómetro puede romper la interfaz. Activa esta opción para corregirlo."
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
                    label: "Insignia de Texto",
                    description: "Mostrar insignia de Texto"
                },
                showVoiceBadge: {
                    label: "Insignia de Voz",
                    description: "Mostrar insignia de Voz"
                },
                showCategoryBadge: {
                    label: "Insignia de Categoría",
                    description: "Mostrar insignia de Categoría"
                },
                showDirectoryBadge: {
                    label: "Insignia de Directorio",
                    description: "Mostrar insignia de Directorio"
                },
                showAnnouncementThreadBadge: {
                    label: "Insignia de Hilo de Anuncios",
                    description: "Mostrar insignia de Hilo de Anuncios"
                },
                showPublicThreadBadge: {
                    label: "Insignia de Hilo Público",
                    description: "Mostrar insignia de Hilo Público"
                },
                showPrivateThreadBadge: {
                    label: "Insignia de Hilo Privado",
                    description: "Mostrar insignia de Hilo Privado"
                },
                showStageBadge: {
                    label: "Insignia de Escenario (Stage)",
                    description: "Mostrar insignia de Escenario"
                },
                showAnnouncementBadge: {
                    label: "Insignia de Anuncios",
                    description: "Mostrar insignia de Anuncios"
                },
                showForumBadge: {
                    label: "Insignia de Foro",
                    description: "Mostrar insignia de Foro"
                },
                showMediaBadge: {
                    label: "Insignia de Multimedia",
                    description: "Mostrar insignia de Multimedia"
                },
                showNSFWBadge: {
                    label: "Insignia de NSFW",
                    description: "Mostrar insignia de NSFW"
                },
                showLockedBadge: {
                    label: "Insignia de Bloqueado",
                    description: "Mostrar insignia de Bloqueado"
                },
                showRulesBadge: {
                    label: "Insignia de Reglas",
                    description: "Mostrar insignia de Reglas"
                },
                showUnknownBadge: {
                    label: "Insignia Desconocida",
                    description: "Mostrar insignia Desconocida"
                },
                textBadgeLabel: {
                    label: "Etiqueta: Texto",
                    description: "Etiqueta para insignia de texto",
                    default: "Texto"
                },
                voiceBadgeLabel: {
                    label: "Etiqueta: Voz",
                    description: "Etiqueta para insignia de voz",
                    default: "Voz"
                },
                categoryBadgeLabel: {
                    label: "Etiqueta: Categoría",
                    description: "Etiqueta para insignia de categoría",
                    default: "Categoría"
                },
                announcementBadgeLabel: {
                    label: "Etiqueta: Noticias",
                    description: "Etiqueta para insignia de noticias",
                    default: "Noticias"
                },
                announcementThreadBadgeLabel: {
                    label: "Etiqueta: Hilo de Noticias",
                    description: "Etiqueta para insignia de hilo de noticias",
                    default: "Hilo de Noticias"
                },
                publicThreadBadgeLabel: {
                    label: "Etiqueta: Hilo",
                    description: "Etiqueta para insignia de hilo público",
                    default: "Hilo"
                },
                privateThreadBadgeLabel: {
                    label: "Etiqueta: Hilo Privado",
                    description: "Etiqueta para insignia de hilo privado",
                    default: "Hilo Privado"
                },
                stageBadgeLabel: {
                    label: "Etiqueta: Escenario",
                    description: "Etiqueta para insignia de escenario",
                    default: "Escenario"
                },
                directoryBadgeLabel: {
                    label: "Etiqueta: Directorio",
                    description: "Etiqueta para insignia de directorio",
                    default: "Directorio"
                },
                forumBadgeLabel: {
                    label: "Etiqueta: Foro",
                    description: "Etiqueta para insignia de foro",
                    default: "Foro"
                },
                mediaBadgeLabel: {
                    label: "Etiqueta: Multimedia",
                    description: "Etiqueta para insignia de multimedia",
                    default: "Multimedia"
                },
                nsfwBadgeLabel: {
                    label: "Etiqueta: NSFW",
                    description: "Etiqueta para insignia de NSFW",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Etiqueta: Bloqueado",
                    description: "Etiqueta para insignia de bloqueado",
                    default: "Bloqueado"
                },
                rulesBadgeLabel: {
                    label: "Etiqueta: Reglas",
                    description: "Etiqueta para insignia de reglas",
                    default: "Reglas"
                },
                unknownBadgeLabel: {
                    label: "Etiqueta: Desconocido",
                    description: "Etiqueta para insignia desconocida",
                    default: "Desconocido"
                },
                textBadgeColor: {
                    label: "Color: Texto",
                    description: "Color de la insignia de texto"
                },
                voiceBadgeColor: {
                    label: "Color: Voz",
                    description: "Color de la insignia de voz"
                },
                categoryBadgeColor: {
                    label: "Color: Categoría",
                    description: "Color de la insignia de categoría"
                },
                announcementBadgeColor: {
                    label: "Color: Noticias",
                    description: "Color de la insignia de noticias"
                },
                announcementThreadBadgeColor: {
                    label: "Color: Hilo de Noticias",
                    description: "Color de la insignia de hilo de noticias"
                },
                publicThreadBadgeColor: {
                    label: "Color: Hilo Público",
                    description: "Color de la insignia de hilo público"
                },
                privateThreadBadgeColor: {
                    label: "Color: Hilo Privado",
                    description: "Color de la insignia de hilo privado"
                },
                stageBadgeColor: {
                    label: "Color: Escenario",
                    description: "Color de la insignia de escenario"
                },
                directoryBadgeColor: {
                    label: "Color: Directorio",
                    description: "Color de la insignia de directorio"
                },
                forumBadgeColor: {
                    label: "Color: Foro",
                    description: "Color de la insignia de foro"
                },
                mediaBadgeColor: {
                    label: "Color: Multimedia",
                    description: "Color de la insignia de multimedia"
                },
                nsfwBadgeColor: {
                    label: "Color: NSFW",
                    description: "Color de la insignia de NSFW"
                },
                lockedBadgeColor: {
                    label: "Color: Bloqueado",
                    description: "Color de la insignia de bloqueado"
                },
                rulesBadgeColor: {
                    label: "Color: Reglas",
                    description: "Color de la insignia de reglas"
                },
                unknownBadgeColor: {
                    label: "Color: Desconocido",
                    description: "Color de la insignia desconocida"
                }
            },
            badges: {
                text: "Texto",
                voice: "Voz",
                category: "Categoría",
                announcement: "Noticias",
                announcementThread: "Hilo de Noticias",
                publicThread: "Hilo",
                privateThread: "Hilo Privado",
                stage: "Escenario",
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
            open: "Abrir en una nueva pestaña",
            animation: {
                title: "Controles de animación",
                description: "Activa o desactiva animaciones específicas para las pestañas de canales.",
                placeholder: "Selecciona qué animaciones activar...",
                tabHover: "Efectos al pasar el cursor (elevación + escala)",
                tabSelection: "Elevación de pestaña seleccionada",
                tabDragDrop: "Arrastrar y soltar (fantasma + reordenar)",
                tabEnterExit: "Deslizamiento de entrada/salida",
                tabIconPop: "Salto de ícono al seleccionar",
                closeRotation: "Rotación del botón de cierre",
                plusPulse: "Pulso del botón de añadir (+)",
                mentionGlow: "Brillo de insignias de mención",
                compactExpand: "Expansión en modo compacto",
                selectedBorder: "Borde de acento de la pestaña seleccionada",
                selectedBackground: "Color de fondo en pestaña seleccionada",
                tabShadows: "Efectos de sombra en pestañas",
                tabRepositioning: "Reposicionamiento suave",
                resizeHandle: "Desvanecimiento del tirador de tamaño",
                questActivate: "Degradado de misiones activas"
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
                noBookmarks: "No tienes marcadores. Puedes añadir una pestaña abierta o pasar el cursor para configurar",
                quests: "Misiones",
                messageRequests: "Solicitudes de mensaje",
                friends: "Amigos",
                shop: "Tienda",
                library: "Biblioteca",
                discovery: "Descubrimiento",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Actividad",
                specialPage: "Página especial",
                searchPlaceholder: "Buscar marcadores"
            },
            button: {
                save: "Guardar",
                delete: "Eliminar",
                cancel: "Cancelar",
                reset: "Restablecer",
                close: "Cerrar"
            },
            context: {
                label: "Menú contextual de ChannelTabs",
                bookmark: "Menú de marcadores",
                tab: "Menú de pestañas",
                folderMenu: "Menú de carpeta de marcadores",
                compact: "Compacto",
                bookmarkBar: "Barra de marcadores",
                openAll: "Abrir todos los marcadores",
                openNew: "Abrir en nueva pestaña",
                close: {
                    tab: "Cerrar pestaña",
                    otherTabs: "Cerrar otras pestañas",
                    tabsToRight: "Cerrar pestañas a la derecha",
                    tabsToLeft: "Cerrar pestañas a la izquierda",
                    reopen: "Volver a abrir pestaña cerrada",
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
                    description: "Eliminar una carpeta de marcadores también eliminará todos los marcadores dentro de ella."
                },
                folderIcon: {
                    title: "Elegir icono de carpeta",
                    preview: "Vista previa",
                    iconColor: "Color del icono",
                    search: "Buscar",
                    searchPlaceholder: "Buscar {{count}} iconos...",
                    folderName: "Nombre de la carpeta",
                    folderColor: "Color de la carpeta",
                    folderIcon: "Icono de la carpeta",
                    chooseIcon: "Elegir icono",
                    useDefaultIcon: "Usar icono predeterminado"
                }
            },
            option: {
                onStartup: {
                    label: "Al iniciar",
                    description: "Qué hacer con las pestañas al iniciar la aplicación",
                    nothing: "No hacer nada (abrir en la pestaña de amigos)",
                    remember: "Recordar pestañas de la sesión anterior",
                    open: "Abrir un conjunto específico de pestañas"
                },
                tabSet: {
                    label: "Conjunto de pestañas"
                },
                noPomeloNames: {
                    label: "Sin nombres 'Pomelo'",
                    description: "Usar nombres de pantalla en lugar de nombres de usuario para los mensajes directos"
                },
                showStatusIndicators: {
                    label: "Mostrar indicadores de estado",
                    description: "Mostrar indicadores de estado de conexión en los mensajes directos"
                },
                showBookmarkBar: {
                    label: "Mostrar barra de marcadores"
                },
                persistUnreadCountFallback: {
                    label: "Persistir respaldo de conteo no leído",
                    description: "Mantener los respaldos de insignias no leídas entre recargas para pestañas y marcadores"
                },
                bookmarkNotificationDot: {
                    label: "Punto de notificación en marcadores",
                    description: "Mostrar un punto de notificación en los marcadores con actividad pendiente"
                },
                widerTabsAndBookmarks: {
                    label: "Pestañas y marcadores más anchos",
                    description: "Extender la longitud de pestañas y marcadores para monitores de gran resolución"
                },
                tabWidthScale: {
                    label: "Escala de ancho de pestaña",
                    description: "Escala del ancho de las pestañas (porcentaje) - ajustable al arrastrar los bordes"
                },
                tabHeightScale: {
                    label: "Escala de altura de pestañas",
                    description: "Escala de altura de pestañas (porcentaje)."
                },
                renderAllTabs: {
                    label: "Renderizar todas las pestañas",
                    description: "Mantener todas las pestañas en caché para un cambio instantáneo (guarda posición de scroll y estado)"
                },
                switchToExistingTab: {
                    label: "Cambiar a pestaña existente",
                    description: "Cambiar a la pestaña si ya existe una para el canal al que intentas navegar"
                },
                createNewTabIfNotExists: {
                    label: "Crear nueva pestaña si no existe",
                    description: "Crear una pestaña nueva si no hay una abierta para el canal seleccionado"
                },
                enableRapidNavigation: {
                    label: "Habilitar navegación rápida",
                    description: "Al navegar rápido entre canales, se reemplazará la pestaña actual en lugar de crear nuevas"
                },
                rapidNavigationThreshold: {
                    label: "Umbral de navegación rápida",
                    description: "Ventana de tiempo (en milisegundos) para la navegación rápida; define cuándo reemplazar pestañas"
                },
                tabBarPosition: {
                    label: "Posición de la barra de pestañas",
                    description: "Ubicación de la barra de pestañas en la pantalla",
                    top: "Arriba",
                    bottom: "Abajo"
                },
                enableNumberKeySwitching: {
                    label: "Cambio con teclas numéricas",
                    description: "Permitir el uso de las teclas (1-9) para cambiar entre pestañas rápidamente"
                },
                numberKeySwitchCount: {
                    label: "Cantidad de teclas numéricas",
                    description: "Número de pestañas que serán accesibles mediante atajos numéricos (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "Atajo para cerrar pestaña",
                    description: "Habilitar el atajo de teclado para cerrar la pestaña activa"
                },
                enableNewTabShortcut: {
                    label: "Atajo para nueva pestaña",
                    description: "Habilitar el atajo de teclado para abrir una nueva pestaña"
                },
                enableTabCycleShortcut: {
                    label: "Atajo para ciclar pestañas",
                    description: "Habilitar el atajo de teclado para desplazarse entre las pestañas abiertas"
                },
                keybindsSection: {
                    label: "Combinaciones de teclas",
                    description: "Haz clic en un botón y presiona la combinación deseada. Se admiten modificadores como CTRL, SHIFT y ALT.",
                    title: "Atajos de teclado",
                    reset: "Restablecer todos los valores",
                    shortcutDisabled: "Este atajo está actualmente desactivado",
                    pressKey: "Presiona cualquier tecla...",
                    conflictError: "Este atajo ya está en uso por: {{key}}",
                    closeTab: {
                        label: "Cerrar pestaña",
                        description: "Cerrar la pestaña que está activa actualmente"
                    },
                    newTab: {
                        label: "Nueva pestaña",
                        description: "Abrir el canal actual en una pestaña nueva"
                    },
                    cycleTabsForward: {
                        label: "Ciclar pestañas hacia adelante",
                        description: "Cambiar a la siguiente pestaña (vuelve a la primera al final)"
                    },
                    cycleTabsBackward: {
                        label: "Ciclar pestañas hacia atrás",
                        description: "Cambiar a la pestaña anterior (vuelve a la última al inicio)"
                    }
                },
                closeTabKeybind: {
                    label: "Tecla para cerrar pestaña",
                    description: "Atajo de teclado personalizado para cerrar la pestaña actual"
                },
                newTabKeybind: {
                    label: "Tecla para nueva pestaña",
                    description: "Atajo de teclado personalizado para abrir una nueva pestaña"
                },
                cycleTabForwardKeybind: {
                    label: "Tecla para ciclar hacia adelante",
                    description: "Atajo de teclado personalizado para pasar a la siguiente pestaña"
                },
                cycleTabBackwardKeybind: {
                    label: "Tecla para ciclar hacia atrás",
                    description: "Atajo de teclado personalizado para volver a la pestaña anterior"
                },
                showTabNumbers: {
                    label: "Mostrar números de pestaña",
                    description: "Mostrar insignias numeradas en las pestañas para indicar sus atajos de teclado"
                },
                tabNumberPosition: {
                    label: "Posición del número",
                    description: "Ubicación de la insignia numerada dentro de la pestaña",
                    left: "Lado izquierdo (antes del ícono)",
                    right: "Lado derecho (después del contenido)"
                },
                animations: {
                    label: "Animaciones"
                },
                animationHover: {
                    label: "Animación al pasar el cursor",
                    description: "Habilitar efectos de elevación y escala al pasar el mouse sobre una pestaña"
                },
                animationSelection: {
                    label: "Animación al seleccionar",
                    description: "Habilitar animaciones de selección (brillo de borde, elevación)"
                },
                animationDragDrop: {
                    label: "Animación al arrastrar y soltar",
                    description: "Habilitar efectos visuales durante el reordenamiento de pestañas"
                },
                animationEnterExit: {
                    label: "Animación al entrar/salir",
                    description: "Habilitar animaciones de deslizamiento al crear o cerrar pestañas"
                },
                animationIconPop: {
                    label: "Animación de salto de ícono",
                    description: "Habilitar el aumento de escala del ícono al seleccionar una pestaña"
                },
                animationCloseRotation: {
                    label: "Animación de rotación al cerrar",
                    description: "Habilitar la animación de giro para los botones de cierre"
                },
                animationPlusPulse: {
                    label: "Animación de pulso en botón (+)",
                    description: "Habilitar efecto de pulso para el botón de añadir pestaña"
                },
                animationMentionGlow: {
                    label: "Animación de brillo en mención",
                    description: "Habilitar un resplandor rojo intermitente cuando hay menciones pendientes"
                },
                animationCompactExpand: {
                    label: "Animación de expansión compacta",
                    description: "Habilitar transiciones suaves para la expansión de pestañas compactas"
                },
                animationSelectedBorder: {
                    label: "Animación de borde seleccionado",
                    description: "Habilitar el estilo de borde y resplandor para la pestaña activa"
                },
                animationSelectedBackground: {
                    label: "Animación de fondo seleccionado",
                    description: "Habilitar el cambio de color de fondo para la pestaña activa"
                },
                animationTabShadows: {
                    label: "Animación de sombras",
                    description: "Habilitar efectos de sombreado en las pestañas"
                },
                animationTabPositioning: {
                    label: "Animación de posicionamiento",
                    description: "Habilitar transiciones fluidas cuando las pestañas cambian de lugar"
                },
                animationResizeHandle: {
                    label: "Animación de tirador de tamaño",
                    description: "Habilitar desvanecimiento para el control de ajuste de ancho"
                },
                animationQuestsActive: {
                    label: "Animación de Misiones activas",
                    description: "Habilitar animaciones de degradado en la pestaña de Misiones cuando hay una en curso"
                },
                compactAutoExpandSelected: {
                    label: "Auto-expandir compacta seleccionada",
                    description: "Expandir automáticamente las pestañas compactas al seleccionarlas para mostrar el nombre completo"
                },
                compactAutoExpandOnHover: {
                    label: "Auto-expandir compacta al pasar cursor",
                    description: "Expandir automáticamente las pestañas compactas al pasar el mouse para mostrar el nombre completo"
                },
                openInNewTabAutoSwitch: {
                    label: "Cambio automático al abrir pestaña",
                    description: "Cambiar automáticamente a las pestañas nuevas creadas desde el menú contextual"
                },
                bookmarksIndependentFromTabs: {
                    label: "Marcadores independientes",
                    description: "Navegar por los marcadores sin que esto afecte o cambie la barra de pestañas activas"
                },
                showResizeHandle: {
                    label: "Mostrar tirador de tamaño",
                    description: "Mostrar el control de ajuste de ancho al pasar el cursor sobre las pestañas"
                },
                openNewTabsInCompactMode: {
                    label: "Abrir pestañas nuevas en modo compacto",
                    description: "Abrir todas las pestañas recién creadas en modo compacto por defecto"
                },
                newTabButtonBehavior: {
                    label: "Comportamiento del botón (+)",
                    description: "El botón de nueva pestaña (+) sigue a las pestañas en lugar de quedarse fijo a la derecha"
                },
                oneTabPerServer: {
                    label: "Una pestaña por servidor",
                    description: "Limitar a una sola pestaña por servidor; abrir un canal nuevo en el mismo servidor reutilizará la pestaña existente"
                },
                maxOpenTabs: {
                    label: "Máximo de pestañas abiertas",
                    description: "Número máximo de pestañas permitidas (0 = ilimitado)"
                }
            },
            tabs: {
                startup: "Pestañas de inicio",
                currently: "Usar pestañas abiertas actualmente"
            },
            toast: {
                notRestoring: "No se restauran las pestañas porque 'KeepCurrentChannel' está activo",
                failed: {
                    restore: "Error al restaurar pestañas",
                    saved: "Error al cargar pestañas guardadas"
                }
            },
            text: {
                folder: "Carpeta"
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Añade un contador de caracteres al cuadro de chat",
            option: {
                colorEffects: {
                    label: "Efectos de color",
                    description: "Activa efectos de color al acercarse al límite de caracteres"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Oculta todos los canales en categorías colapsadas, incluso si tienen mensajes sin leer."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Quita emojis y decoraciones de los nombres de canal. Vuelve al original mientras editas el canal.",
            option: {
                ignoredChannels: {
                    description: "Lista separada por comas de IDs de canales que no se modificarán.",
                    label: "Canales ignorados"
                }
            },
            text: {
                keepOriginalName: "Mantener nombre original"
            }
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Elimina automáticamente elementos de seguimiento de las URLs que envías"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Haz clic en los roles de los perfiles y de la lista de miembros para ver quiénes tienen ese rol.",
            modal: {
                loading: "Cargando miembros...",
                noMembers: "No se encontraron miembros.",
                unknown: "Rol desconocido",
                andMore: "y {{count}} más"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Permite ocultar localmente casi todo el contenido de cualquier usuario",
            replying: "Respondiendo a un mensaje bloqueado",
            option: {
                hideVc: {
                    label: "Ocultar canales de voz",
                    description: "Ocultar canales de voz que contengan usuarios bloqueados."
                },
                usersToBlock: {
                    label: "Usuarios a bloquear",
                    description: "IDs de usuario separados por coma y espacio"
                },
                hideBlockedUsers: {
                    label: "Ocultar usuarios bloqueados",
                    description: "Ocultar a los usuarios bloqueados en todas partes"
                },
                hideBlockedMessages: {
                    label: "Ocultar mensajes bloqueados",
                    description: "Ocultar completamente los mensajes de usuarios bloqueados"
                },
                hideEmptyRoles: {
                    label: "Ocultar roles vacíos",
                    description: "Ocultar encabezados de roles si todos sus miembros están bloqueados"
                },
                blockedReplyDisplay: {
                    label: "Visualización de respuesta bloqueada",
                    description: "Qué mostrar cuando alguien responde a un mensaje oculto",
                    displayText: "Mostrar texto indicando que se respondió a un mensaje oculto",
                    hideReply: "Absolutamente nada"
                },
                guildBlackList: {
                    label: "Lista negra de servidores",
                    description: "IDs de servidores donde deshabilitar la función"
                },
                guildWhiteList: {
                    label: "Lista blanca de servidores",
                    description: "IDs de servidores donde habilitar la función"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Recreación del antiguo experimento de temas. Añade un color al tema de tu cliente de Discord",
            title: "Color del tema",
            add: "Añade un color al tema de tu cliente",
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
                    switch: "Cambiar a modo {{oppositeTheme}}",
                    disable: "Desactivar tema de Nitro",
                    reset: "Restablecer color del tema"
                }
            },
            text: {
                dark: "Oscuro",
                light: "Claro"
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "¡Añade más opciones de FPS y duración a los Clips, además de etiquetas RPC!",
            minutes: "Minutos",
            option: {
                richPresenceTagging: {
                    label: "Etiquetado Rich Presence",
                    description: "¿Cuándo deben etiquetarse los clips con el Rich Presence actual?",
                    always: "Siempre",
                    only: "Solo cuando coincide el inicio o fin del nombre de actividad",
                    never: "Nunca"
                },
                clipsLink: {
                    label: "Enlace a Clips",
                    link: "¡Cambia los FPS y la duración en los ajustes de Clips!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Elimina los íconos para daltónicos de los estados, como en el Discord de 2015-2017"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Paleta de comandos estilo Raycast para ejecutar acciones en cualquier parte de Discord",
            action: {
                command: {
                    label: "Ejecutar comando",
                    description: "Crea un alias de otro comando por ID."
                },
                settings: {
                    label: "Abrir página de ajustes",
                    description: "Salta directamente a una página de ajustes de Discord."
                },
                url: {
                    label: "Abrir URL",
                    description: "Abre un enlace. Usa enlaces https:// para mejor compatibilidad."
                },
                macro: {
                    label: "Ejecutar macro",
                    description: "Ejecuta una secuencia de comandos en orden."
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
                    description: "Activa, desactiva y configura complementos de Plexcord",
                    enable: {
                        label: "Activar complementos"
                    },
                    disable: {
                        label: "Desactivar complementos"
                    },
                    settings: {
                        label: "Ajustes de complementos"
                    },
                    toolbox: {
                        label: "Acciones de complementos"
                    },
                    chatbar: {
                        label: "Botones de la barra de chat"
                    },
                    changes: {
                        label: "Cambios en complementos"
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
                    description: "Saltar a páginas de configuración de Discord"
                },
                custom: {
                    label: "Comandos personalizados",
                    description: "Entradas definidas por el usuario"
                },
                sessions: {
                    label: "Herramientas de sesión",
                    description: "Utilidades para gestionar tu sesión de Discord"
                },
                guilds: {
                    label: "Servidores",
                    description: "Navega rápido a tus servidores"
                },
                friends: {
                    label: "Amigos",
                    description: "Navega rápido a tus amigos"
                },
                action: {
                    label: "Acción"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Abrir ajustes de Plexcord",
                        plugin: "Abrir ajustes del complemento"
                    }
                },
                reload: {
                    label: "Recargar Discord",
                    description: "Recarga la ventana actual de Discord"
                }
            },
            command: {
                enable: "Activar {{pluginName}}",
                enabled: "Se activó {{pluginName}}",
                disable: "Desactivar {{pluginName}}",
                disabled: "Se desactivó {{pluginName}}",
                failed: "El comando falló:",
                toggleFailed: "Error al cambiar el estado de {{pluginName}}.",
                pluginSettings: "Ajustes de {{pluginName}}",
                untitled: "Comando sin título",
                new: "Nuevo comando",
                error: {
                    enter: "Ingresa un ID de comando o elige uno abajo.",
                    noCommand: "Ningún comando coincide con este ID."
                },
                discord: {
                    account: "Abrir Mi cuenta",
                    privacy: "Abrir Privacidad y seguridad",
                    notifications: "Abrir Notificaciones",
                    voice: "Abrir Voz y video",
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
                        label: "Abrir anclajes de {{channelLabel}}"
                    },
                    toggle: {
                        label: "Alternar anclaje en el último comando"
                    }
                },
                channel: {
                    mute: {
                        label: "Silenciar {{channelLabel}}",
                        oneHour: "Silenciar {{channelLabel}} por 1 hora",
                        untilTomorrow: "Silenciar {{channelLabel}} hasta mañana",
                    },
                    unmute: {
                        label: "Desactivar silencio de {{channelLabel}}"
                    },
                    reopen: {
                        label: "Volver a abrir el último MD cerrado"
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
                        online: "Estado: Conectado",
                        idle: "Estado: Ausente",
                        dnd: "Estado: No molestar",
                        invisible: "Estado: Invisible"
                    }
                },
                toggle: {
                    streamer: "Alternar modo streamer",
                    mute: "Alternar silenciar micrófono",
                    deafen: "Alternar ensordecer",
                },
                notification: {
                    clear: {
                        label: "Limpiar notificaciones de escritorio"
                    }
                },
                palette: {
                    settings: {
                        label: "Ajustes de Command Palette",
                        description: "Configura el complemento Command Palette"
                    }
                },
                recent: {
                    label: "Comandos recientes",
                    description: "Muestra los últimos comandos ejecutados",
                    rerun: "Reejecutar último comando"
                },
                plugin: {
                    reload: {
                        label: "Recargar todos los complementos",
                        description: "Intenta recargar en caliente todos los complementos activos"
                    },
                    enable: {
                        label: "Activar todos los complementos"
                    },
                    disable: {
                        label: "Desactivar todos los complementos no obligatorios"
                    },
                    restart: {
                        label: "Reiniciar Plexcord",
                        description: "Recarga la ventana del cliente Discord"
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
                noCommand: "No se encontraron comandos",
                add: {
                    title: "Añadir comando"
                },
                choose: {
                    title: "Elegir comando"
                },
                command: {
                    palette: {
                        label: "Barra de comandos",
                        placeholder: "Escribe un comando",
                        filtering: "Filtrando por {{tags}}",
                        noCommand: "No se encontraron comandos",
                        pin: "Anclar comando",
                        unpin: "Desanclar comando"
                    },
                    target: {
                        label: "ID del comando objetivo",
                        placeholder: "Ingresa ID del comando",
                        choose: "Elegir comando"
                    },
                    custom: {
                        label: "Comandos personalizados",
                        description: "1) Nombra el comando · 2) Añade descripción/etiquetas/categoría opcionales · 3) Elige una acción y completa los detalles.",
                        auto: "Auto (por defecto)",
                        expand: "Expandir",
                        collapse: "Colapsar",
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
                    valid: "Ingresa una URL válida.",
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
                online: "Conectado",
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
                        failedToTrigger: "Error al activar {{label}}.",
                        activated: "{{label}} activado."
                    }
                },
                channel: {
                    mute: {
                        failed: "Error al silenciar el canal.",
                        muted: "Canal silenciado.",
                        unmuted: "Silencio de canal desactivado.",
                        unavailable: "Controles de silencio no disponibles"
                    },
                    dm: {
                        no: "No hay MDs cerrados registrados en esta sesión.",
                        noAvailable: "El MD ya no está disponible.",
                        reOpened: "Se volvió a abrir el último MD cerrado."
                    }
                },
                command: {
                    failedToRun: "Error al ejecutar {{label}}.",
                    loop: "Bucle de comandos detectado en la macro.",
                    notFound: "Comando {{commandId}} no encontrado.",
                    notMetadata: "Metadatos del complemento Command Palette no disponibles.",
                    unsupported: "Acción de comando personalizado no compatible."
                },
                guild: {
                    mute: {
                        failed: "Error al silenciar el servidor.",
                        muted: "Servidor silenciado.",
                        unmuted: "Silencio de servidor desactivado.",
                        unavailable: "Controles de silencio no disponibles"
                    },
                    settings: {
                        unable: "No se pudieron abrir los ajustes del servidor."
                    }
                },
                panel: {
                    pin: {
                        unable: "No se pudo abrir el panel de anclajes."
                    }
                },
                status: {
                    reset: {
                        canceled: "Se canceló el restablecimiento de estado programado.",
                        dnd: "No molestar por {{duration}} minutos.",
                        reverted: "Estado restablecido a {{status}}.",
                        unableToChange: "No se puede cambiar el estado en este momento."
                    },
                    change: {
                        changed: "Estado cambiado a {{status}}.",
                        unableToChange: "No se puede cambiar el estado en este momento."
                    }
                },
                read: {
                    failed: "Error al marcar el canal como leído.",
                    marked: "Se marcó {{channelLabel}} como leído."
                },
                route: {
                    unable: "No se pudo abrir {{destination}}."
                },
                notification: {
                    cleared: "Se limpiaron todas las notificaciones.",
                    failed: "Error al limpiar notificaciones.",
                    notSupported: "Limpieza de notificaciones no compatible."
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
                        deafened: "Ahora estás ensordecido.",
                        undeafened: "Ya no estás ensordecido."
                    }
                },
                quickCSS: {
                    enabled: "Quick CSS activado.",
                    disabled: "Quick CSS desactivado."
                },
                transparentity: {
                    enabled: "Transparencia de ventana activada.",
                    disabled: "Transparencia de ventana desactivada."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} está desactivado.",
                        disable: "{{pluginName}} está desactivado. Activa el complemento para usar esta acción."
                    },
                    required: {
                        label: "{{pluginName}} requiere un reinicio para recargarse."
                    },
                    stop: {
                        failed: "Error al detener {{pluginName}}."
                    },
                    restart: {
                        failed: "Error al reiniciar {{pluginName}}."
                    },
                    reload: {
                        label: "Se recargó {{pluginName}}.",
                        noPlugin: "No se recargó ningún complemento.",
                        reloaded: "Se recargaron {{count}} complementos."
                    },
                    toggle: {
                        enabled: "Se activaron {{changed}} complementos.",
                        disabled: "Se desactivaron {{changed}} complementos.",
                        noChanged: "Ningún complemento cambió de estado."
                    },
                    run: {
                        failed: {
                            label: "Error al ejecutar {{pluginName}}: {{actionLabel}}."
                        }
                    }
                },
                commandDeleted: "Comando eliminado.",
                statusSetToLabel: "Estado cambiado a {{label}}.",
                themeSetToLabel: "Tema cambiado a {{label}}.",
                noSettingsPageWas: "No se indicó ninguna página de ajustes.",
                unableToOpenLabel: "No se pudo abrir {{label_that_settings_page}}.",
                failedToStartDependencies: "No se pudieron iniciar las dependencias: {{join}}",
                messageSentToUsername: "Mensaje enviado a {{username}}.",
                enabledRestart: "{{name}} activado. Reinicia para aplicar.",
                disabledRestart: "{{name}} desactivado. Reinicia para aplicar.",
                enabled: "{{name}} activado.",
                disabled: "{{name}} desactivado.",
                errorStarting: "Error al iniciar {{name}}.",
                errorStopping: "Error al detener {{name}}."
            },
            display: {
                channel: {
                    current: "Canal actual",
                    group: "MD grupal",
                    direct: "Mensaje directo"
                },
                guild: {
                    current: "Servidor actual"
                }
            },
            option: {
                hotkey: {
                    label: "Atajo de teclado",
                    description: "Tecla para abrir la paleta de comandos",
                    recording: "Presiona cualquier tecla...",
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
                    description: "Mostrar etiquetas en los comandos"
                },
                enableTagFilter: {
                    label: "Filtro por etiquetas",
                    description: "Mostrar la barra de filtrado por etiquetas"
                },
                customCommands: {
                    label: "Comandos personalizados",
                    description: "Gestionar entradas personalizadas de la paleta"
                },
                closeAfterExecute: {
                    description: "Cerrar la paleta después de ejecutar un comando.",
                    label: "Cerrar tras ejecutar"
                }
            },
            template: {
                alias: {
                    label: "Comando alias",
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
                    description: "Ejecutar secuencia de comandos"
                }
            },
            text: {
                insertTextInChat: "Insertar texto en el chat",
                name: "Name",
                commandName: "Nombre del comando",
                settingsPage: "Página de ajustes",
                searchSettingsPages: "Buscar páginas de ajustes...",
                text: "Texto",
                textToInsertInto: "Texto que se insertará en el cuadro de chat",
                editCommand: "Editar comando",
                deleteCommand: "Eliminar comando",
                createCustomCommand: "Crear comando personalizado",
                light: "Claro",
                ash: "Ceniza",
                dark: "Oscuro",
                onyx: "Ónix",
                toggleMute: "Activar/desactivar silencio",
                toggleDeafen: "Activar/desactivar ensordecer",
                setStatus: "Establecer estado",
                searchStatuses: "Buscar estados...",
                setLabel: "Establecer {{label}}",
                toggleTheme: "Cambiar tema",
                openServer: "Abrir servidor",
                openChannel: "Abrir canal",
                openDm: "Abrir MD",
                goHome: "Ir al inicio",
                goToServer: "Ir al servidor",
                searchServers: "Buscar servidores...",
                goToChannel: "Ir al canal",
                searchChannels: "Buscar canales...",
                searchFriends: "Buscar amigos...",
                myAccount: "Mi cuenta",
                profiles: "Perfiles",
                dataPrivacy: "Datos y privacidad",
                devices: "Dispositivos",
                connections: "Conexiones",
                appearance: "Apariencia",
                accessibility: "Accesibilidad",
                voiceVideo: "Voz y vídeo",
                chat: "Chat",
                textImages: "Texto e imágenes",
                notifications: "Notificaciones",
                keybinds: "Atajos de teclado",
                authorizedApps: "Aplicaciones autorizadas",
                familyCenter: "Centro familiar",
                advanced: "Avanzado",
                plexcord: "Plexcord",
                plexcordPlugins: "Plugins de Plexcord",
                plexcordThemes: "Temas de Plexcord",
                plexcordUpdater: "Actualizador de Plexcord",
                plexcordChangelog: "Registro de cambios de Plexcord",
                openQuickcss: "Abrir QuickCSS",
                openUpdater: "Abrir actualizador",
                openChangelog: "Abrir registro de cambios",
                restartDiscord: "Reiniciar Discord",
                managePlugins: "Administrar plugins",
                searchPlugins: "Buscar plugins...",
                sendDm: "Enviar MD",
                recipient: "Destinatario",
                message: "Mensaje",
                messageContent: "Contenido del mensaje",
                openPaletteHotkey: "Atajo para abrir la paleta",
                actions: "Acciones",
                preview: "Vista previa",
                openCommand: "Abrir comando",
                copyAnswer: "Copiar respuesta",
                openDetails: "Abrir detalles",
                calculator: "Calculadora",
                expression: "Expresión",
                result: "Resultado",
                copyExpression: "Copiar expresión",
                pinned: "Fijado",
                suggestions: "Sugerencias",
                setAlias: "Establecer alias",
                aliasForLabel: "Alias para {{label}}",
                leaveEmptyToRemove: "Déjalo vacío para quitarlo",
                command: "Comando",
                noResults: "Sin resultados",
                addFile: "Añadir archivo",
                saveCommand: "Guardar comando",
                createCommand: "Crear comando",
                nameRequired: "El nombre es obligatorio.",
                enterValidUrl: "Ingresa una URL válida.",
                pickSettingsPage: "Elige una página de configuración de las sugerencias.",
                textRequired: "El texto es obligatorio.",
                commandSaved: "Comando guardado.",
                commandCreated: "Comando creado.",
                editCustomCommand: "Editar comando personalizado",
                disablePlugin: "Desactivar plugin",
                enablePlugin: "Activar plugin",
                pickRecipient: "Elige un destinatario de las sugerencias.",
                addMessageOrFile: "Agrega un mensaje o un archivo.",
                pressKeys: "Presiona las teclas...",
                answerCopied: "Respuesta copiada al portapapeles.",
                calculationCopied: "Cálculo copiado al portapapeles.",
                unpinCommand: "Desanclar comando",
                pinCommand: "Anclar comando",
                saveAlias: "Guardar alias",
                changeHotkey: "Cambiar atajo",
                recordHotkey: "Grabar atajo",
                pressKeyCombo: "Presiona una combinación de teclas, Retroceso para borrar, Esc para cancelar",
                searchIn: "Buscar en {{title}}...",
                searchCommands: "Buscar comandos...",
                somethingWentWrong: "Algo salió mal.",
                remove: "Quitar",
                enabled: "Activado",
                disabled: "Desactivado",
                sectionNavigation: "Navegación",
                sectionCustom: "Personalizado",
                sectionPlugins: "Plugins",
                sectionMessaging: "Mensajería",
                current: "Actual",
                submit: "Enviar"
            },
            description2: "Paleta de comandos estilo Raycast para ejecutar acciones en cualquier parte de Discord"
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Desactiva mensajes y errores molestos de la consola",
            option: {
                disableLoggers: {
                    label: "Desactivar registros",
                    description: "Desactiva los sistemas de registro de Discord"
                },
                disableSpotifyLogger: {
                    label: "Desactivar registro de Spotify",
                    description: "Desactiva el registro de Spotify, que filtra información de la cuenta y tokens"
                },
                whitelistedLoggers: {
                    label: "Registros permitidos",
                    description: "Lista de registros (separados por ;) permitidos aunque otros estén ocultos"
                },
                allowLevel: {
                    label: "Nivel permitido",
                    description: "Permitir siempre registros de estos tipos",
                    filter: "Lista de filtros"
                }
            }
        },
        consoleShortcuts: {
            name: "Atajos de Consola",
            description: "Añade alias cortos para muchas funciones en la ventana. Ejecuta `shortcutList` para ver la lista."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Te permite especificar palabras que se desenfocarán por defecto. Haz clic para revelar.",
            option: {
                flagged: {
                    label: "Marcadas",
                    flagged: "Palabras marcadas",
                    placeholder: "Palabra"
                },
                onClick: {
                    label: "Al hacer clic",
                    description: "Solo mostrar contenido al hacer clic en lugar de pasar el cursor"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Permite copiar emojis como cadena con formato (<a:nombre:id>)",
            option: {
                copyUnicode: {
                    label: "Copiar Unicode",
                    description: "Copia el carácter unicode real en lugar de :nombre: para emojis estándar (👽)"
                }
            },
            context: {
                copy: "Copiar Emoji Markdown"
            },
            toast: {
                success: "¡Éxito! Se copió el emoji en formato markdown."
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
            description: "Copia los colores de degradado de los perfiles al portapapeles.",
            copy: "Copiar colores del perfil del servidor",
            toast: {
                noColor: "¡No se encontraron colores de perfil!",
                copied: "¡Colores de perfil copiados al portapapeles!",
                error: "¡Error al copiar colores de perfil!"
            },
            text: {
                formatted: "Color principal #{{primary}}, Color secundario #{{secondary}}"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Copia la URL del estado de un usuario al hacer clic derecho",
            toast: {
                copied: "URL copiada",
                error: "Error al copiar URL, revisa la consola"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Copia la mención del usuario desde el menú contextual.",
            context: {
                copy: "Copiar mención de usuario"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Añade una opción para copiar la URL del usuario al menú contextual.",
            context: {
                copy: "Copiar URL de usuario"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Complemento para gestionar y recuperar Discord de cierres inesperados sin reiniciar",
            option: {
                attemptToPreventCrashes: {
                    label: "Intentar prevenir cierres",
                    description: "Intentar evitar que Discord se cierre por errores."
                },
                attemptToNavigateToHome: {
                    label: "Navegar a Inicio al recuperar",
                    description: "Intentar ir a la pestaña de amigos tras recuperar de un error."
                }
            },
            toast: {
                crashed: {
                    title: "¡Discord se ha cerrado inesperadamente!",
                    body: "Awn :( Discord ha fallado dos veces seguidas.",
                    update: "¡Buenas noticias! Hay una actualización de Plexcord que podría solucionar este error. ¿Actualizar ahora?",
                    recover: "Intentando recuperar...",
                    invalid: "Enlace de invitación no válido o expirado."
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
                    ctrlEnter: "Ctrl+Enter (Enter o Shift+Enter para nueva línea)",
                    shiftEnter: "Shift+Enter (Enter para nueva línea)",
                    enter: "Enter (Shift+Enter para nueva línea; por defecto)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Enviar mensaje dentro de bloque de código",
                    description: "Enviar mensaje aunque el cursor esté dentro de un bloque de código"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Añade un sprite que sigue a tu cursor.",
            modal: {
                furColor: "Color del pelaje",
                outlineColor: "Color del borde"
            },
            option: {
                buddy: {
                    label: "Compañero",
                    description: "Elige un compañero",
                    oneko: "Oneko",
                    fathorse: "Caballo gordo"
                },
                speed: {
                    label: "Velocidad",
                    description: "Velocidad del compañero",
                    invalid: "La velocidad debe ser mayor a 0"
                },
                fps: {
                    label: "Tasa de cuadros",
                    description: "Fluidez de animación",
                    invalid: "FPS debe ser mayor a 0"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Color pelaje",
                    description: "Color hex del pelaje de Oneko"
                },
                outlineColor: {
                    label: "Color borde",
                    description: "Color hex del borde de Oneko"
                },
                fathorseSection: {
                    label: "Caballo gordo"
                },
                size: {
                    label: "Tamaño",
                    description: "Tamaño del caballo",
                    invalid: "El tamaño debe ser mayor a 0"
                },
                fade: {
                    label: "Desvanecer",
                    description: "Si el caballo debe desvanecerse al acercar el cursor"
                },
                freeroam: {
                    label: "Movimiento libre",
                    description: "Si el caballo debe vagar libremente al estar inactivo"
                },
                shake: {
                    label: "Sacudir",
                    description: "Si el caballo debe sacudir la ventana al caminar"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Personaliza íconos de carpetas con cualquier PNG",
            option: {
                solidIcon: {
                    label: "Ícono sólido",
                    description: "Usar un fondo sólido detrás de la imagen"
                },
                folderIcons: {
                    label: "Íconos de carpeta",
                    description: "ajustes de íconos"
                }
            },
            modal: {
                change: "Cambia el tamaño del ícono de carpeta",
                save: "Guardar",
                unset: "Quitar",
                set: "Establecer nuevo ícono",
                hover: "Es posible que debas pasar el cursor sobre la carpeta para que se refresque."
            },
            context: {
                changeIcon: "Cambiar icono"
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Establece el tiempo antes de que Discord pase a estado ausente (o desactiva el auto-ausente)",
            backOnline: "¡Bienvenido de nuevo! Haz clic para ponerte conectado. Haz clic en X para seguir ausente.",
            exit: "Salir de ausente",
            option: {
                idleTimeout: {
                    label: "Tiempo de inactividad",
                    description: "Minutos antes de pasar a ausente (0 para desactivar)"
                },
                remainInIdle: {
                    label: "Permanecer ausente",
                    description: "Al volver, seguir ausente hasta confirmar manualmente"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Añade un Rich Presence (estado de juego) totalmente personalizable a tu perfil",
            goTo: "Ve al {{portal}} para crear una aplicación y obtener el ID.",
            upload: "Sube imágenes en la pestaña Rich Presence para obtener las claves.",
            image: "Si quieres usar un enlace, sube tu imagen a {{imgur}} y obtén la dirección directa.",
            button: "Tú no verás tus propios botones, pero los demás sí podrán verlos perfectamente.",
            font: "Ciertos textos unicode ('fuentes' 𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘) pueden romper el estado; intenta usar letras normales.",
            placeholder: "Ingresa un valor",
            select: "Selecciona una opción",
            error: {
                appIdInvalid: "El ID de la app debe ser un número.",
                notice: "Aviso",
                sharing: "Compartir actividad no está activado, así que nadie podrá ver tu Rich Presence personalizado.",
                enable: "Activar",
                validStream: "El enlace de transmisión debe ser una URL válida.",
                mustBeURL: "Debe ser una URL válida.",
                streamCharacters: "El enlace no puede superar los 512 caracteres.",
                dontUse: "No uses un enlace de Discord. Usa uno de Imgur.",
                imgur: "Debe ser un enlace directo (ej. https://i.imgur.com/...).",
                tenor: "Debe ser un enlace directo (ej. https://media.tenor.com/...).",
                required: "Este campo es obligatorio.",
                tooLong: "No puede superar los {{maxLength}} caracteres.",
                mustBeNumber: "Debe ser un número.",
                mustBePositive: "Debe ser un número positivo.",
                startTimeInvalid: "El tiempo de inicio debe ser mayor a 0.",
                endTimeInvalid: "El tiempo de fin debe ser mayor a 0."
            },
            option: {
                appId: {
                    label: "ID de la App",
                    description: "ID de la aplicación (obligatorio)"
                },
                appName: {
                    label: "Nombre de la App",
                    description: "Nombre que aparecerá (obligatorio)"
                },
                details: {
                    label: "Detalles",
                    description: "Línea de detalles 1"
                },
                detailsURL: {
                    label: "URL de detalles",
                    description: "Enlace al hacer clic en detalles"
                },
                state: {
                    label: "Estado",
                    description: "Línea de estado 2"
                },
                stateURL: {
                    label: "URL de estado",
                    description: "Enlace al hacer clic en estado"
                },
                partySize: {
                    label: "Tamaño del grupo",
                    description: "Miembros actuales (usar con Máximo)"
                },
                partyMax: {
                    label: "Máximo del grupo",
                    description: "Capacidad máxima del grupo"
                },
                type: {
                    label: "Tipo de actividad",
                    description: "Categoría de la actividad",
                    playing: "Jugando a",
                    streaming: "Transmitiendo",
                    listening: "Escuchando",
                    watching: "Viendo",
                    competing: "Compitiendo en"
                },
                streamLink: {
                    label: "Enlace de stream",
                    description: "Enlace de Twitch o YouTube (solo para Transmitiendo)"
                },
                timestampMode: {
                    label: "Modo de tiempo",
                    description: "Qué mostrar en el cronómetro",
                    none: "Ninguno",
                    sinceDiscordOpen: "Desde que se abrió Discord",
                    sameAsCurrentTime: "Hora actual (no se reinicia a las 24h)",
                    custom: "Tiempo personalizado"
                },
                startTime: {
                    label: "Inicio (ms)",
                    description: "Marca de tiempo de inicio"
                },
                endTime: {
                    label: "Fin (ms)",
                    description: "Marca de tiempo de fin"
                },
                imageBig: {
                    label: "Clave Imagen Grande",
                    description: "Clave de la imagen subida al portal"
                },
                imageBigTooltip: {
                    label: "Tooltip Imagen Grande",
                    description: "Texto al pasar el cursor"
                },
                imageBigURL: {
                    label: "URL Imagen Grande",
                    description: "Enlace al hacer clic"
                },
                imageSmall: {
                    label: "Clave Imagen Pequeña",
                    description: "Clave de la imagen pequeña"
                },
                imageSmallTooltip: {
                    label: "Tooltip Imagen Pequeña",
                    description: "Texto al pasar el cursor"
                },
                imageSmallURL: {
                    label: "URL Imagen Pequeña",
                    description: "Enlace al hacer clic"
                },
                buttonOneText: {
                    label: "Texto Botón 1",
                    description: "Etiqueta del primer botón"
                },
                buttonOneURL: {
                    label: "URL Botón 1",
                    description: "Enlace del primer botón"
                },
                buttonTwoText: {
                    label: "Texto Botón 2",
                    description: "Etiqueta del segundo botón"
                },
                buttonTwoURL: {
                    label: "URL Botón 2",
                    description: "Enlace del segundo botón"
                },
                enablePresence: {
                    description: "Si se debe mostrar la presencia",
                    label: "Activar presencia"
                }
            },
            toast: {
                savedPresetName: "Preajuste {{name}} guardado.",
                loadedPresetName: "Preajuste {{name}} cargado.",
                deletedPresetSelectedpreset: "Preajuste {{selectedPreset}} eliminado."
            },
            text: {
                presetName: "Nombre del preajuste",
                selectAPreset: "Selecciona un preajuste",
                streamLinkTwitchOr: "Enlace de transmisión (Twitch o YouTube, solo si el tipo de actividad es Transmitiendo)",
                presets: "Preajustes",
                save: "Guardar",
                load: "Cargar",
                delete: "Eliminar",
                noSavedPresetsYet: "Aún no hay preajustes guardados.",
                showCustomRpc: "Mostrar RPC personalizado",
                customRpcDisabled: "RPC personalizado desactivado",
                theEnablePresenceSetting: "La opción \"Activar presencia\" está desactivada, así que tu presencia no se mostrará. Si no fue intencionado, actívala abajo.",
                activitySharingDisabled: "Compartir actividad desactivado",
                discordDeveloperPortal: "Portal para desarrolladores de Discord",
                imgur: "Imgur",
                enableActivitySharing: "Activar compartir actividad"
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
                exported: "Se exportaron {{count}} ajustes (archivos de audio no incluidos)",
                imported: "Ajustes importados con éxito",
                importError: "Error al importar. Revisa la consola.",
                reset: "¡Todas las excepciones se restablecieron con éxito!",
                overrideDescription: "Excepción para {{soundName}}",
                previewSound: "Error al previsualizar sonido.",
                playing: "Error al reproducir. El archivo podría estar corrupto.",
                invalidFile: "No hay archivo de sonido para previsualizar",
                uploaded: "Archivo subido: {{fileName}}",
                uploadedError: "Error al subir: {{error}}",
                invalidExtension: "Tipo de archivo no válido. Sube un archivo de audio.",
                uploading: "Subiendo archivo...",
                deleted: "Archivo eliminado",
                deleteError: "Error al eliminar archivo.",
                loadingError: "Error al cargar archivo de sonido"
            },
            button: {
                preview: "Previsualizar",
                stop: "Detener",
                volume: "Volumen",
                soundSource: "Fuente de sonido",
                customFile: "Archivo personalizado",
                uploadNew: "Subir nuevo",
                delete: "Eliminar archivo seleccionado"
            },
            option: {
                default: "Predeterminado",
                custom: "Personalizado",
                select: "Selecciona un archivo...",
                overrides: {
                    label: "Sustituciones"
                },
                soundpack: {
                    label: "Paquete de sonidos",
                    description: "Paquete de sonidos que se usará en lugar del configurado en Discord.",
                    default: "Predeterminado de Discord"
                }
            },
            type: {
                activityEnd: "Fin de actividad",
                activityLaunch: "Inicio de actividad",
                activityUserJoin: "Usuario se une a actividad",
                activityUserLeft: "Usuario sale de actividad",
                asmrMessage: "Mensaje ASMR",
                bitMessage: "Mensaje Bit",
                bopMessage: "Mensaje Bop",
                callCalling: "Llamada saliente",
                callRinging: "Llamada entrante",
                clipError: "Error de Clip",
                clipSave: "Clip guardado",
                ddrDown: "DDR Abajo",
                ddrLeft: "DDR Izquierda",
                ddrRight: "DDR Derecha",
                ddrUp: "DDR Arriba",
                deafen: "Ensordecer",
                discodo: "Discodo",
                disconnect: "Desconexión",
                duckyMessage: "Mensaje Ducky",
                hangStatusSelect: "Selección de estado",
                highfiveClap: "Aplauso Highfive",
                highfiveWhistle: "Silbido Highfive",
                humanMan: "Hombre Humano",
                lofiMessage: "Mensaje LoFi",
                mention1: "Mención 1 (@rol)",
                mention2: "Mención 2 (@everyone)",
                mention3: "Mención 3 (@here)",
                message1: "Mensaje 1 (Genérico)",
                message2: "Mensaje 2 (Respuesta)",
                message3: "Mensaje 3 (MD)",
                mute: "Silenciar",
                overlayUnlock: "Desbloqueo de Superposición",
                poggermodeAchievement: "Logro Poggermode",
                poggermodeApplause: "Aplauso Poggermode",
                poggermodeEnabled: "Poggermode activado",
                poggermodeMessage: "Mensaje Poggermode",
                pttStart: "Inicio PTT",
                pttStop: "Fin PTT",
                reconnect: "Reconexión",
                robotMan: "Hombre Robot",
                stageWaiting: "Escenario en espera",
                streamEnded: "Stream finalizado",
                streamStarted: "Stream iniciado",
                streamUserJoined: "Usuario se une al Stream",
                streamUserLeft: "Usuario sale del Stream",
                success: "Éxito",
                undeafen: "Quitar ensordecer",
                unmute: "Quitar silencio",
                userJoin: "Usuario se une",
                userLeave: "Usuario sale",
                userMoved: "Usuario movido",
                vibingWumpus: "Wumpus bailando"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Marcas de tiempo personalizadas en mensajes y tooltips",
            demo: {
                cozy: "Haz clic para cambiar al formato Cómodo",
                compact: "Haz clic para cambiar al formato Compacto",
                lastWeek: "Este mensaje se envió la semana pasada",
                hover: "Pasa el cursor para ver el formato del tooltip",
                edit: "Edita los formatos abajo para ver los cambios aquí"
            },
            modal: {
                title: "Cómo usar:",
                moment: "Documentación de Moment.js",
                hint: "También puedes usar estos valores:",
                calendar: "formato dinámico como",
                today: "Hoy",
                yesterday: "Ayer",
                or: "o",
                relative: "tiempos como",
                relativeTime: "hace 4 horas",
                preview: "Previsualización",
                format: "Formatos de calendario",
                howTo: "Cómo formatear el valor [calendar] si se usa arriba."
            },
            option: {
                formats: {
                    label: "Formatos",
                    description: "Personaliza las marcas de tiempo"
                },
                cozyFormat: {
                    label: "Modo Cómodo",
                    description: "Formato en mensajes modo cómodo"
                },
                compactFormat: {
                    label: "Modo Compacto",
                    description: "Formato en modo compacto y al pasar el cursor"
                },
                tooltipFormat: {
                    label: "Información emergente",
                    description: "Formato al pasar el cursor (ventana emergente)"
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
                    label: "Resto",
                    description: "Formato [calendar] para fechas antiguas"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "¡Añade un color personalizado a cualquier usuario! Se recomienda usar con typingTweaks.",
            option: {
                dmList: {
                    label: "Lista de MD",
                    description: "Los nombres en la lista de mensajes directos aparecerán coloreados"
                },
                colorInServers: {
                    label: "Color en servidores",
                    description: "Si los colores deben aplicarse dentro de los servidores"
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
            description: "Hace que los títulos y miniaturas de YouTube sean menos sensacionalistas (Clickbait), potenciado por DeArrow",
            option: {
                hideButton: {
                    label: "Ocultar botón",
                    description: "Oculta el botón de DeArrow en los videos de YouTube"
                },
                replaceElements: {
                    label: "Reemplazar elementos",
                    description: "Qué elementos del video serán reemplazados",
                    everything: "Todo (Títulos y Miniaturas)",
                    title: "Solo Títulos",
                    thumbnail: "Solo Miniaturas"
                },
                dearrowByDefault: {
                    label: "DeArrow por defecto",
                    description: "Aplicar DeArrow automáticamente"
                }
            },
            tooltip: {
                dearrowed: "Este video ha sido procesado por DeArrow; clic para restaurar",
                dearrow: "Clic para aplicar DeArrow"
            },
            text: {
                toggleDearrow: "Activar/desactivar Dearrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Limpia Discord eliminando elementos innecesarios como efectos de perfil, pestañas de tienda, boosts y más.",
            option: {
                userProfileHeader: {
                    label: "Perfil de usuario"
                },
                removeAvatarDecoration: {
                    label: "Eliminar decoración de avatar",
                    description: "Quitar las decoraciones de avatar. Se desactiva si Decor está activado.",
                    alertBody: "La eliminación de la decoración del avatar se ha desactivado para evitar conflictos con el complemento Decor.",
                    ok: "Aceptar"
                },
                removeNameplate: {
                    label: "Quitar placa de nombre",
                    description: "Elimina las placas de nombre (nameplates)."
                },
                removeProfileEffect: {
                    label: "Quitar efecto de perfil",
                    description: "Elimina los efectos de animación al abrir perfiles."
                },
                removeClanTag: {
                    label: "Quitar etiqueta de clan",
                    description: "Elimina las etiquetas de clanes."
                },
                alwaysShowUsername: {
                    label: "Mostrar siempre nombre de usuario",
                    description: "Muestra siempre el nombre de usuario en lugar del estado."
                },
                accessibilityNotice: {
                    label: "Aviso de accesibilidad",
                    description: "Discord ya incluye esta opción en los ajustes de Accesibilidad."
                },
                friendsListHeader: {
                    label: "Sobre la lista de Amigos/MD"
                },
                removeShopAboveDM: {
                    label: "Quitar Tienda sobre MD",
                    description: "Elimina el acceso a la tienda sobre la lista de MD."
                },
                removeQuestsAboveDM: {
                    label: "Quitar Misiones sobre MD",
                    description: "Elimina el acceso a misiones sobre la lista de MD."
                },
                miscHeader: {
                    label: "Varios"
                },
                removeServerBoostInfo: {
                    label: "Quitar info de Boost",
                    description: "Elimina la barra de mejoras sobre la lista de canales."
                },
                removeBillingSettings: {
                    label: "Quitar ajustes de Facturación",
                    description: "Oculta los ajustes de pago."
                },
                removeGiftButton: {
                    label: "Quitar botón de Regalo",
                    description: "Elimina el botón de regalo del chat."
                },
                removeUnavailableEmojiPicker: {
                    label: "Quitar emojis no disponibles",
                    description: "Oculta categorías de emojis bloqueados en el selector."
                },
                removeAudioMenus: {
                    label: "Quitar menús de audio",
                    description: "Elimina los menús junto a los botones de silenciar/ensordecer."
                },
                removeButtonTooltips: {
                    label: "Quitar tooltips de botones",
                    description: "Elimina las etiquetas emergentes de los botones."
                },
                removeProfileFrame: {
                    description: "Quitar los marcos de perfil.",
                    label: "Quitar marco de perfil"
                },
                removeDisplayNameStyles: {
                    description: "Quitar los nombres visibles animados/con estilo de la lista de miembros.",
                    label: "Quitar estilos de nombre visible"
                },
                removeLibraryAboveDms: {
                    description: "Quitar la biblioteca encima de la lista de MD.",
                    label: "Quitar biblioteca sobre los MD"
                },
                removeFamilyCenterAboveDms: {
                    description: "Quitar el centro familiar encima de la lista de MD.",
                    label: "Quitar centro familiar sobre los MD"
                }
            },
            text: {
                discordAlreadyHasA: "Discord ya tiene una opción integrada de estilo de nombre de usuario en",
                accessibilitySettings: "los ajustes de accesibilidad."
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Decodifica el contenido Base64 de cualquier mensaje y copia el resultado.",
            right: {
                decode: "Copiar decodificado (clic izquierdo) / Decodificar Base64 (clic derecho)",
                copy: "Decodificar Base64 (clic izquierdo) / Copiar decodificado (clic derecho)"
            },
            option: {
                clickMethod: {
                    label: "Método de clic",
                    description: "Cambia el comportamiento del botón para decodificar contenido Base64.",
                    left: "Clic izquierdo para decodificar el contenido Base64.",
                    right: "Clic derecho para decodificar el contenido Base64."
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
            description: "Crea y usa tus propias decoraciones de avatar personalizadas o elige tus favoritas de los ajustes preestablecidos.",
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
                    description: "Habilita Decor y reinicia el cliente para cambiar tu decoración de avatar.",
                    also: "También puedes acceder a las decoraciones de Decor desde la página de {{profiles}}.",
                    profiles: "Perfiles"
                },
                baseUrl: {
                    label: "URL base",
                    description: "URL de la API de Decor"
                },
                agreedToGuidelines: {
                    label: "Aceptó las normas",
                    description: "Confirmación de aceptación de las normas de uso"
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
                pending: "Revisión pendiente"
            },
            join: {
                tooltip: "Únete al servidor de Discord de Decor para recibir notificaciones sobre la revisión de tu decoración y nuevos lanzamientos",
                button: "Servidor de Discord"
            },
            create: {
                title: "Crear decoración",
                notViolate: "Asegúrate de que tu decoración no viole {{guidelines}} antes de enviarla.",
                guidelines: "las normas de la comunidad",
                file: "El archivo debe ser APNG o PNG.",
                fileHolder: "Elegir un archivo",
                name: "Este nombre se usará para referirse a esta decoración.",
                nameHolder: "Cubo de compañía",
                nameTitle: "Nombre"
            },
            help: {
                update: "Para recibir actualizaciones sobre la revisión de tu decoración, únete a {{server}} y permite los mensajes directos.",
                server: "Servidor de Discord de Decor"
            },
            guidelines: {
                hold: "Espera un momento",
                suspended: "Al enviar una decoración, aceptas {{guidelines}}. No leer estas normas podría resultar en la suspensión de tu cuenta para crear más decoraciones en el futuro.",
                guidelines: "las normas"
            },
            toast: {
                failedToAuthorizeMessage: "No se pudo autorizar: {{message}}"
            },
            text: {
                removeDecoration: "Quitar decoración de Decor",
                decoration: "Decoración de Decor",
                none: "Ninguna",
                decorationFile: "Archivo de decoración"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin para tomar capturas de pantalla de temas: censura imágenes y texto que puedan identificarte.",
            toolbox: {
                toggle: "Alternar modo demostración"
            },
            keycode: "¡Para cambiar tu combinación de teclas, revisa {{keycode}}!",
            this: "esta herramienta",
            okay: "¡Entendido!",
            option: {
                keyBind: {
                    label: "Atajo de teclado",
                    description: "La tecla para alternar el tema al presionarla"
                },
                soundVolume: {
                    label: "Volumen de sonido",
                    description: "Qué tan fuerte es el sonido al alternar (0 para desactivar)"
                },
                showConfirmationModal: {
                    label: "Mostrar ventana de confirmación",
                    description: "Muestra una ventana para recordarte el atajo de teclado"
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
            description: "Plugin de acompañamiento para desarrolladores. Reporta cualquier error o comportamiento extraño a MutanPlex por mención o mensaje directo. ¡Gracias!",
            reconnect: "Reconectar",
            option: {
                notifyOnAutoConnect: {
                    label: "Notificar al autoconectar",
                    description: "Indica si se debe notificar cuando Dev Companion se ha conectado automáticamente."
                },
                usePatchedModule: {
                    label: "Usar módulo parcheado",
                    description: "En solicitudes de extracción, responder con el módulo parcheado actual (si existe) en lugar del original."
                },
                reloadAfterToggle: {
                    label: "Recargar tras alternar",
                    description: "Recargar después de recibir un comando de 'desactivar/activar plugin'."
                }
            },
            toast: {
                title: "Dev Companion conectado",
                connected: "Conectado al WebSocket",
                disconnected: "Dev Companion desconectado",
                error: "Error de Dev Companion",
                reload: "Reinicio necesario",
                failed: "Error al iniciar dependencias: {{failures}}",
                close: "Cerrar",
                stopping: "Error al detener el plugin {{plugin}}",
                starting: "Error al iniciar el plugin {{plugin}}",
                noMessage: "Sin mensaje de error",
                noReason: "No se proporcionó ninguna razón"
            },
            text: {
                reconnect: "Reconectar",
                loadingLazyModules: "Cargando módulos diferidos, reiniciar podría causar errores",
                loadedLazyModules: "Todos los módulos diferidos cargados",
                failedLazyModules: "No se pudieron cargar los módulos diferidos, revisa la consola",
                ok: "Aceptar"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Evita que te expulsen automáticamente de una llamada de voz privada tras 3 minutos de inactividad o que te muevan a un canal AFK."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Desactiva las cámaras en una llamada de forma predeterminada"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Habilita el banner de desarrollador de Discord, que muestra el ID de compilación",
            about: "El formato para el banner de desarrollo. Puedes usar las siguientes variables:",
            preview: "Vista previa:",
            empty: "El formato no puede estar vacío.",
            variables: {
                discord: {
                    title: "Variables de Discord",
                    icon: "Ícono de Discord",
                    banner: "Ícono del banner de desarrollador",
                    channel: "Canal de compilación (ej. Stable)",
                    build: "Número de compilación (ej. 123456)",
                    hash: "Hash de la compilación de Discord"
                },
                plexcord: {
                    title: "Variables de Plexcord",
                    icon: "Ícono de Plexcord",
                    name: "Nombre de Plexcord",
                    version: "Versión de Plexcord (ej. 1.0.0)",
                    hash: "Hash de la compilación de Plexcord",
                    platform: "Plataforma en la que corre Plexcord"
                },
                plextron: {
                    title: "Variables de Plextron",
                    hashShort: "Hash corto de Plextron",
                    platformType: "Tipo de plataforma de Plextron"
                },
                client: {
                    title: "Variables del cliente",
                    icon: "Ícono de escritorio",
                    name: "Nombre del cliente (ej. Discord Canary)",
                    version: "Versión del cliente"
                },
                electron: {
                    title: "Variables de Electron",
                    icon: "Ícono de Electron",
                    version: "Versión de Electron"
                },
                chromium: {
                    title: "Variables de Chromium",
                    icon: "Ícono de Chromium",
                    version: "Versión del motor Chromium"
                },
                misc: {
                    title: "Variables misceláneas",
                    newline: "Carácter de nueva línea"
                }
            },
            text: {
                notSupported: "No compatible",
                devBuild: "Versión de desarrollo",
                standalone: "Independiente"
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Te advierte si tu mensaje contiene algún término de la lista preestablecida de AutoMod",
            alert: {
                title: "¡Espera!",
                content: "Tu mensaje contiene un término de la lista de AutoMod (Término: '{{trigger}}').",
                content2: "Hay una alta probabilidad de que tu mensaje sea bloqueado y termines siendo moderado por un administrador.",
                confirm: "Enviar de todos modos",
                cancel: "Cancelar"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Siempre redondea las marcas de tiempo relativas hacia abajo (ej. 7.6 años se muestra como 7 años en lugar de 8)."
        },
        downloadAllAttachments: {
            name: "DownloadAllAttachments",
            description: "Agrega un botón emergente para descargar todos los archivos adjuntos de un mensaje a la vez.",
            button: "Descargar todos los adjuntos",
            toast: {
                success: "Se descargaron {{count}} adjunto(s).",
                partial: "Se descargaron {{succeeded}} de {{total}} adjuntos. {{failed}} fallaron.",
                downloadedPluralizeSucceededAttachment: "Se descargaron {{pluralize_succeeded_attachment}}.",
                downloadedSucceededOfLength: "Se descargaron {{succeeded}} de {{length}} archivos adjuntos. {{failed}} fallaron."
            },
            option: {
                downloadAllFileTypes: {
                    description: "Descargar también archivos adjuntos que no sean multimedia. Actívalo solo si confías en lo que te envían.",
                    label: "Descargar todos los tipos de archivo"
                }
            }
        },
        draftNavigator: {
            name: "DraftNavigator",
            description: "Busca borradores sin enviar, previsualiza su texto y salta al canal.",
            text: {
                title: "Navegador de borradores",
                open: "Abrir navegador de borradores",
                unknownChannel: "Canal desconocido ({{id}})",
                channelUnavailable: "Canal no disponible",
                directMessage: "Mensaje directo",
                groupMessage: "Mensaje de grupo",
                server: "Servidor",
                jump: "Ir",
                jumpTo: "Ir a {{name}}",
                count: "{{count}} borradores",
                countOne: "{{count}} borrador",
                countFiltered: "{{shown}} de {{total}} borradores",
                noMatches: "No hay borradores que coincidan.",
                noDrafts: "No hay borradores sin enviar.",
                close: "Cerrar",
                searchLabel: "Buscar borradores",
                searchPlaceholder: "Buscar canales, servidores o texto del borrador",
                listLabel: "Borradores sin enviar"
            }
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Añade la funcionalidad de arrastrar y soltar a tus emojis favoritos"
        },
        dragify: {
            name: "Dragify",
            description: "Suelta usuarios, canales o servidores en el chat para insertar menciones o invitaciones.",
            option: {
                userOutput: {
                    label: "Resultado al soltar usuario",
                    description: "Formato al soltar un usuario.",
                    mention: "Mención",
                    id: "ID de usuario"
                },
                channelOutput: {
                    label: "Resultado al soltar canal",
                    description: "Formato al soltar un canal.",
                    mention: "Mención del #canal",
                    link: "Enlace al canal"
                },
                inviteExpireAfter: {
                    label: "La invitación expira tras",
                    description: "Tiempo de expiración de la invitación",
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
                    description: "Otorgar membresía temporal mediante la invitación."
                },
                reuseExistingInvites: {
                    label: "Reutilizar invitaciones existentes",
                    description: "Usar una invitación ya creada en lugar de generar una nueva."
                },
                allowChatBodyDrop: {
                    label: "Permitir soltar en el cuerpo del chat",
                    description: "Permitir soltar elementos en el área principal de mensajes para insertar texto."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify no pudo procesar el elemento soltado.",
                },
                invite: {
                    created: "Invitación creada.",
                    unable: "No se pudo crear la invitación.",
                    noChannel: "No hay canales disponibles para invitaciones.",
                },
                noReusableInvite: "No hay ninguna invitación reutilizable disponible.",
                unableToReuseInvite: "No se puede reutilizar la invitación."
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
                    announcement: "anuncios",
                    dm: "md",
                    user: "usuario",
                    server: "servidor"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Resalta e inspecciona elementos CSS fácilmente.",
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
                    description: "Muestra la familia y el tamaño de la fuente calculados"
                },
                showPadding: {
                    label: "Mostrar relleno (Padding)",
                    description: "Muestra los valores de padding del elemento"
                },
                showMargin: {
                    label: "Mostrar margen",
                    description: "Muestra los valores de margen del elemento"
                },
                showBorderRadius: {
                    label: "Mostrar radio de borde",
                    description: "Muestra los valores de border-radius del elemento"
                },
                showPosition: {
                    label: "Mostrar posición",
                    description: "Muestra el tipo de posición CSS y el z-index"
                },
                showDisplay: {
                    label: "Mostrar tipo de visualización",
                    description: "Muestra el tipo de display junto con propiedades de flex o grid"
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
            description: "Reproduce sonidos de la botonera (soundboard) cuando te desconectas de voz.",
            button: "Establecer como sonido de salida global",
            toast: {
                failedToPlay: "¡Ups! Algo salió mal al reproducir el sonido."
            },
            option: {
                soundGuildId: {
                    label: "ID del servidor del sonido",
                    description: "Selecciona el servidor que contiene el sonido.",
                    placeholder: "Selecciona un servidor..."
                },
                soundId: {
                    label: "ID del sonido",
                    description: "Ingresa el ID del sonido que quieres reproducir.",
                    placeholder: "Ingresa el ID del sonido..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "¡Habilita el acceso a experimentos y otras funciones exclusivas para desarrolladores en Discord!",
            modal: {
                about: {
                    title: "Más información",
                    body: "Puedes abrir las DevTools de Discord usando {{key}}"
                },
                warning: {
                    title: "¡¡Espera!!",
                    body: "Los experimentos son funciones de Discord no lanzadas oficialmente. Podrían no funcionar, romper tu cliente o incluso provocar que inhabiliten tu cuenta.",
                    notReponsible: "Usa los experimentos solo si sabes lo que haces. Plexcord no se hace responsable de daños causados por activarlos.",
                    useAtOwnRisk: "Si no sabes qué hace un experimento, ignóralo. Por favor, no nos preguntes; probablemente nosotros tampoco lo sepamos.",
                    serverSideFeatures: "No, no puedes usar funciones del lado del servidor como marcar la casilla 'Send to Client'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Menú Dev en barra de herramientas",
                    description: "Cambia el botón de Ayuda (?) de la parte superior derecha por el menú de desarrollador de Discord"
                }
            },
            text: {
                searchExperiments: "Buscar experimentos"
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Te permite exportar mensajes a archivos: un solo mensaje, todos los de un usuario o todo el canal.",
            option: {
                maxMessages: {
                    label: "Mensajes máximos",
                    description: "Número máximo de mensajes a exportar (0 = ilimitado)"
                },
                includeAttachments: {
                    label: "Incluir archivos adjuntos",
                    description: "Incluir información de archivos en la exportación"
                },
                includeEmbeds: {
                    label: "Incluir integraciones (Embeds)",
                    description: "Incluir información de embeds en la exportación"
                },
                includeReactions: {
                    label: "Incluir reacciones",
                    description: "Incluir información de reacciones en la exportación"
                },
                includeComponents: {
                    label: "Incluir componentes",
                    description: "Incluir información de componentes (botones, menús) en la exportación"
                }
            },
            message: {
                invalid: "Mensaje inválido — sin autor",
                unknownUser: "Usuario desconocido",
                botEmbed: "Mensaje de integración de bot",
                attachments: "Archivos adjuntos",
                unknown: "Desconocido",
                noUrl: "Sin URL",
                embeds: "Integraciones",
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
                    body: "Error al exportar los mensajes"
                },
                userNotFound: {
                    title: "Exportar mensajes",
                    body: "Usuario no encontrado"
                },
                complete: {
                    title: "Exportación completa",
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
            },
            text: {
                unknownError: "Error desconocido"
            }
        },
        expressionManager: {
            name: "ExpressionManager",
            description: "Clona emojis y stickers. Agrega opciones al menú contextual para clonarlos, editarlos o eliminarlos rápidamente. También agrega opciones para copiar y guardar stickers",
            option: {
                editAndDelete: {
                    label: "Editar y eliminar",
                    description: "Agrega las opciones \"Editar\" y \"Eliminar\" al menú contextual del selector de expresiones"
                },
                stickerCopyAndOpen: {
                    label: "Enlaces de stickers",
                    description: "Agrega las opciones \"Copiar enlace del sticker\" y \"Abrir enlace del sticker\" al menú contextual de stickers"
                },
                recents: {
                    label: "Quitar de recientes",
                    description: "Agrega la opción \"Quitar de recientes\" al menú contextual de las expresiones usadas con frecuencia"
                }
            },
            context: {
                cloneEmoji: "Clonar Emoji",
                cloneSticker: "Clonar Sticker",
                editEmoji: "Editar emoji",
                editSticker: "Editar sticker",
                deleteEmoji: "Eliminar emoji",
                deleteSticker: "Eliminar sticker",
                removeFromRecents: "Quitar de recientes",
                uploadAsEmoji: "Subir como emoji",
                copyStickerLink: "Copiar enlace del sticker",
                openStickerLink: "Abrir enlace del sticker"
            },
            modal: {
                customName: "Nombre personalizado",
                invalidName: "El nombre debe tener entre 2 y 30 caracteres y solo puede contener caracteres alfanuméricos",
                cloneTitle: "Clonar {{name}}",
                deleteTitle: "Eliminar {{name}}",
                deleteEmoji: "¿Seguro que quieres eliminar este emoji?",
                deleteSticker: "¿Seguro que quieres eliminar este sticker?",
                deleteConfirm: "Eliminar",
                recentsEmoji: "Esto restablecerá todo el historial de uso de este emoji y no se puede deshacer. ¿Estás seguro?",
                recentsSticker: "Esto restablecerá todo el historial de uso de este sticker y no se puede deshacer. ¿Estás seguro?",
                recentsConfirm: "Hazlo"
            },
            toast: {
                emojiDeleted: "Emoji eliminado correctamente.",
                stickerDeleted: "Sticker eliminado correctamente.",
                emojiDeleteFailed: "No se pudo eliminar el emoji",
                stickerDeleteFailed: "No se pudo eliminar el sticker",
                cloned: "¡Se clonó correctamente {{name}} en {{guild}}!",
                yourServer: "tu servidor",
                cloneFailed: "Error al clonar: {{message}}",
                console: "Algo salió mal (revisa la consola)",
                linkCopied: "¡Enlace copiado!",
                emojiModalFailed: "No se pudo abrir la ventana de emojis: {{error}}"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Pausa el cliente al presionar F8 si las DevTools (+ breakpoints) están abiertas."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Permite enviar emojis/stickers falsos, usar temas de Nitro y transmitir en calidad Nitro.",
            option: {
                enableEmojiBypass: {
                    label: "Habilitar bypass de emojis",
                    description: "Permite enviar emojis falsos (también ignora la falta de permisos para emojis personalizados)"
                },
                emojiSize: {
                    label: "Tamaño de emoji",
                    description: "Tamaño de los emojis al enviarlos"
                },
                transformEmojis: {
                    label: "Transformar emojis",
                    description: "Indica si los emojis falsos deben transformarse en reales"
                },
                enableStickerBypass: {
                    label: "Habilitar bypass de stickers",
                    description: "Permite enviar stickers falsos (también ignora la falta de permisos para stickers)"
                },
                stickerSize: {
                    label: "Tamaño de sticker",
                    description: "Tamaño de los stickers al enviarlos"
                },
                transformStickers: {
                    label: "Transformar stickers",
                    description: "Indica si los stickers falsos deben transformarse en reales"
                },
                transformCompoundSentence: {
                    label: "Transformar oraciones compuestas",
                    description: "Transformar stickers y emojis en mensajes que contienen texto adicional además del enlace falso"
                },
                enableStreamQualityBypass: {
                    label: "Calidad de transmisión Nitro",
                    description: "Permite transmitir en calidad Nitro sin tener la suscripción"
                },
                useStickerHyperLinks: {
                    label: "Usar hipervínculos en stickers",
                    description: "Indica si se deben usar hipervínculos al enviar stickers falsos"
                },
                useEmojiHyperLinks: {
                    label: "Usar hipervínculos en emojis",
                    description: "Indica si se deben usar hipervínculos al enviar emojis falsos"
                },
                hyperLinkText: {
                    label: "Texto del hipervínculo",
                    description: "Texto que usará el enlace. {{NAME}} se reemplazará por el nombre del emoji/sticker."
                },
                disableEmbedPermissionCheck: {
                    label: "Omitir verificación de permisos de enlaces",
                    description: "Desactiva la comprobación de permisos para insertar enlaces al enviar items de FakeNitro"
                }
            },
            modal: {
                sticker: "Este es un sticker de FakeNitro; se ve como uno real solo para ti. Los demás verán un enlace.",
                emoji: "Este es un emoji de FakeNitro; se ve como uno real solo para ti. Los demás verán un enlace."
            },
            alert: {
                notice: {
                    title: "¡Espera!",
                    body: "Intentas enviar un mensaje con FakeNitro pero no tienes permiso para insertar enlaces en este canal. Tus items aparecerán solo como texto. ¿Quieres enviarlo así?",
                    footer: "Puedes desactivar esta alerta en los ajustes de FakeNitro",
                    confirm: "Enviar de todos modos",
                    cancel: "Cancelar",
                    secondaryConfirm: "No volver a mostrar"
                },
                apngSticker: {
                    title: "¡Espera!",
                    body: "No puedes enviar este mensaje porque contiene un sticker animado de FakeNitro y no tienes permiso para adjuntar archivos en este canal."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Permite tematizar perfiles ocultando colores en tu biografía mediante codificación 3y3 invisible.",
            button: {
                copy: "Copiar 3y3"
            },
            modal: {
                usage: "Uso",
                preview: "Vista previa",
                intro: "Tras activar este plugin, verás colores personalizados en perfiles de otros usuarios que usen plugins compatibles.",
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
            description: "Permite tematizar perfiles y efectos ocultando colores y efectos en tu biografía mediante codificación 3y3 invisible.",
            option: {
                prioritizeNitro: {
                    label: "Priorizar Nitro",
                    description: "Fuente a la que dar prioridad",
                    nitro: "Nitro",
                    aboutMe: "Sobre mí"
                },
                hideBuilder: {
                    label: "Ocultar constructor",
                    description: "Ocultar el FPTE Builder en las páginas de ajustes de Perfil de Usuario y de Servidor"
                }
            },
            modal: {
                primary: "Primario",
                accent: "Acento",
                effect: "Efecto",
                usage: {
                    title: "Uso",
                    intro: "Tras activar este plugin, verás temas y efectos personalizados en los perfiles de otros usuarios que también lo usen.",
                    setColor: "Para establecer tus propios colores y efecto:",
                    step1: "Ve a los ajustes de tu perfil",
                    step2: "Usa el FPTE Builder para elegir tus colores y efecto",
                    step3: "Haz clic en el botón {{copy}}",
                    step4: "Pega el texto invisible en cualquier parte de tu biografía"
                }
            },
            toast: {
                copied: "¡FPTE copiado al portapapeles!",
                empty: "El FPTE Builder está vacío; ¡nada que copiar!"
            },
            button: {
                copyFPTE: "Copiar FPTE",
                reset: "Restablecer",
                preview: "Vista previa del constructor",
                buildBackwards: "Crear FPTE retrocompatible",
                moreCharacters: "Usará más caracteres"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Añade un ícono de papelera para eliminar canales rápidamente.",
            option: {
                keyBind: {
                    label: "Atajo de teclado",
                    description: "La tecla para alternar la papelera al presionarla."
                },
                reqCtrl: {
                    label: "Requerir Control",
                    description: "Requiere mantener presionada la tecla Control."
                },
                reqShift: {
                    label: "Requerir Shift",
                    description: "Requiere mantener presionada la tecla Shift."
                },
                reqAlt: {
                    label: "Requerir Alt",
                    description: "Requiere mantener presionada la tecla Alt."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "Pone tus emojis favoritos primero en el autocompletado y permite añadir alias personalizados.",
            option: {
                aliases: {
                    label: "Alias",
                    description: "Gestiona tus alias de emojis."
                },
                clearAll: {
                    label: "Borrar todo",
                    description: "Eliminar todos los alias."
                }
            },
            modal: {
                clear: {
                    title: "Eliminar todos los alias",
                    description: "Esto eliminará cada alias de emoji que hayas guardado.",
                    confirm: "Eliminar todo"
                },
                set: {
                    title: "Establecer alias",
                    description: "Establecer un alias para {{emoji}}",
                    placeholder: "Alias, ej. 'feliz'",
                    save: "Guardar",
                    error: "Alias duplicado"
                }
            },
            toast: {
                set: "Alias establecido para {{emoji}}",
                clearAll: "Se eliminaron todos los alias de emoji",
                failedDeleted: "Error al eliminar alias",
                removed: "Alias eliminado: {{alias}}",
                failedRemove: "Error al quitar alias",
                duplicate: "Alias duplicado",
                failedSave: "Error al guardar el alias.",
                removedAliasAlias: "Alias :{{alias}}: eliminado",
                aliasSetForGetemojidisplayname: "Alias establecido para {{getEmojiDisplayName_ref}}."
            },
            button: {
                edit: "Editar alias",
                set: "Establecer alias"
            },
            text: {
                remove: "Quitar",
                noAliasesSetYet: "Aún no hay alias definidos.",
                aliasRequired: "El alias es obligatorio.",
                aliasInvalid: "El alias debe tener entre 2 y 32 caracteres y solo usar minúsculas, números o guiones bajos."
            }
        },
        favoriteAnything: {
            name: "FavoriteAnything",
            description: "Permite marcar cualquier imagen como favorita",
            noFiles: "No hay archivos que coincidan con tu búsqueda.",
            searchPlaceholder: "Buscar archivos",
            media: "Medios",
            demoText: "Haz clic en la estrella para marcar un archivo como favorito.\n¡Los archivos favoritos aparecerán acá!",
            fetchError: "No se pudo obtener {filename}",
            uploadError: "No se pudo subir {filename}",
            text: {
                clickTheStarTo: "Haz clic en la estrella para marcar un archivo como favorito.",
                favoriteFilesWillShow: "¡Los archivos favoritos aparecerán aquí!"
            },
            option: {
                localThumbnails: {
                    description: "Generar miniaturas de archivos localmente en lugar de usar un servicio externo (placeholder.nin0.dev). No es compatible con móviles. Cambiar esta opción no afecta a los favoritos existentes.",
                    label: "Miniaturas locales"
                }
            }
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Añade un botón de descarga en la esquina superior derecha de los archivos"
        },
        findReply: {
            name: "FindReply",
            description: "Salta a la respuesta más antigua de un mensaje en el canal para seguir mejor las conversaciones pasadas.",
            context: {
                jump: "Ir a la respuesta"
            },
            toast: {
                navigate: "Usa el panel inferior para navegar entre las respuestas.",
                container: "No se pudo encontrar el elemento contenedor.",
                couldntFind: "No se encontró ninguna respuesta."
            },
            option: {
                includePings: {
                    label: "Incluir menciones",
                    description: "También buscará mensajes que mencionen directamente al autor"
                },
                includeAuthor: {
                    label: "Incluir autor",
                    description: "Buscará respuestas generales al autor, no solo a ese mensaje exacto"
                },
                hideButtonIfNoReply: {
                    label: "Ocultar si no hay respuestas",
                    description: "Oculta el botón si no existen respuestas al mensaje"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Elimina el espacio vacío entre los bloques de código y el texto inferior"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Corrige extensiones de archivo renombrándolas a formatos compatibles cuando es posible"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Mejora la calidad de las imágenes forzando el uso de la fuente original.",
            option: {
                originalImagesInChat: {
                    label: "Imágenes originales en el chat",
                    description: "Cargar la imagen original directamente en el chat. ADVERTENCIA: Lee los detalles arriba"
                }
            },
            modal: {
                about: {
                    title: "El comportamiento por defecto es el siguiente:",
                    body: "&mdash; En el chat, se cargan imágenes optimizadas pero en resolución completa.",
                    body2: "&mdash; En la ventana de imagen, se carga el archivo original.",
                    body3: "Puedes activar las imágenes originales en el chat, pero ten en cuenta lo siguiente:",
                    warning: "&mdash; Las imágenes animadas (GIF, WebP, etc.) se animarán siempre, aunque la app no esté en primer plano.",
                    warning2: "&mdash; Puede causar lentitud (lag).",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Corrige el volumen excesivo de las integraciones de Spotify permitiéndote personalizarlo.",
            option: {
                volume: {
                    label: "Volumen",
                    description: "Porcentaje de volumen para Spotify. Cualquier valor sobre 10% es muuuuy fuerte"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Evita que los videos de YouTube sean bloqueados en Discord (por ejemplo, por restricciones de UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Añade una opción de 'Seguir' al menú de usuario para estar siempre en el mismo canal de voz que esa persona.",
            indicatorTooltip: "Siguiendo a {{user}} (clic para moverte manualmente, clic derecho para dejar de seguir)",
            unknownUser: "Usuario desconocido",
            option: {
                executeOnFollow: {
                    label: "Ejecutar al seguir",
                    description: "Asegurarse de entrar al mismo canal de voz inmediatamente al seguir a alguien"
                },
                onlyManualTrigger: {
                    label: "Solo activación manual",
                    description: "Solo moverte al hacer clic en el indicador"
                },
                followLeave: {
                    label: "Seguir al salir",
                    description: "También desconectarse cuando el usuario seguido salga de voz"
                },
                autoMoveBack: {
                    label: "Regresar automáticamente",
                    description: "Regresar al canal del usuario seguido automáticamente si alguien te mueve de canal"
                },
                followUserId: {
                    label: "ID de usuario seguido",
                    description: "ID del usuario que estás siguiendo"
                },
                channelFull: {
                    label: "Canal lleno",
                    description: "Intentar moverte al canal cuando deje de estar lleno"
                },
                onlyWhenInVoice: {
                    label: "Solo en voz",
                    description: "Seguir al usuario solo cuando estés en un canal de voz"
                }
            },
            toast: {
                channelFull: "El canal está lleno",
                newVc: "Seguiste al usuario a un nuevo canal de voz",
                insufficientPermissions: "Permisos insuficientes para entrar al canal de voz",
                sameVc: "Ya estás en el mismo canal",
                disconnect: "El usuario seguido salió; desconectado",
                notFollowing: "El usuario salió, pero no tienes activado seguir al salir",
                notVc: "El usuario seguido no está en un canal de voz"
            },
            context: {
                follow: "Seguir usuario",
                unfollow: "Dejar de seguir usuario"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Carga cualquier fuente desde Google Fonts.",
            option: {
                selectedFont: {
                    label: "Fuente seleccionada",
                    description: "Fuente aplicada actualmente"
                },
                fontSearch: {
                    label: "Buscar fuente",
                    description: "Busca y selecciona fuentes de Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Aplicar en bloques de código",
                    description: "Aplicar la fuente también a los bloques de código"
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
            },
            text: {
                currentFont: "Fuente actual:",
                resetFont: "Restablecer fuente"
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Fuerza la aparición de la corona de dueño junto al nombre aunque el servidor sea muy grande."
        },
        freaky: {
            name: "Freaky",
            description: "Te permite enviar mensajes con fuentes extrañas usando el comando /freaky.",
            command: {
                freaky: "Es freaky.",
                message: "Haz que tu mensaje sea freaky"
            },
            option: {
                addFreakyEnding: {
                    label: "Añadir final freaky",
                    description: "Añadir 👅 o ❤️ al final del mensaje"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Reescribe y filtra los resultados del Quick Switcher para mostrar tus canales más frecuentes."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Añade un comando /friendcloud para visualizar a los usuarios con los que más interactúas",
            command: {
                friendcloud: {
                    description: "Visualiza tu nube de amigos",
                    count: "Número de usuarios a mostrar",
                    mustHigher: "¡El número debe ser 1 o mayor!",
                    noAffinities: "No se encontraron afinidades. Revisa tu [configuración de privacidad](<https://support.discord.com/hc/es/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "No se encontraron usuarios válidos en las afinidades. Revisa tu [configuración de privacidad](<https://support.discord.com/hc/es/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "No se pudo generar la imagen :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Genera códigos de amigo para añadir personas fácilmente",
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
            description: "Crea y gestiona enlaces de invitación de amigo mediante comandos de barra (/create friend invite, /view friend invites, /revoke friend invites).",
            command: {
                create: {
                    description: "Genera un enlace de invitación de amigo.",
                    message: "discord.gg/{{code}}`\n· Expira <t:{{expiration}}:R>\n· Usos máximos: {{uses}}"
                },
                view: {
                    description: "Ver una lista de todas las invitaciones de amigo generadas.",
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
                    description: "Su amistad apenas está comenzando"
                },
                blooming: {
                    name: "Floreciendo",
                    description: "¡Su amistad va por buen camino! (1 mes)"
                },
                burning: {
                    name: "Ardiente",
                    description: "Su amistad ha alcanzado velocidad terminal (3 meses)"
                },
                fighter: {
                    name: "Luchador",
                    description: "Su amistad es fuerte (6 meses)"
                },
                star: {
                    name: "Estrella",
                    description: "Su amistad ha durado ya un BUEN tiempo (1 año)"
                },
                royal: {
                    name: "Real",
                    description: "Su amistad ha pasado por las buenas y las malas — ¡2 años enteros!"
                },
                besties: {
                    name: "Mejores amigos",
                    description: "¿Cómo lograste esto siquiera? (5 años)"
                }
            },
            option: {
                showFriendsInChat: {
                    description: "Mostrar un icono de amigo en los mensajes de amigos.",
                    label: "Mostrar amigos en el chat"
                }
            },
            text: {
                friend: "Amigo",
                rankIcon: "Ícono de rango"
            }
        },
        friendTags: {
            name: "FriendTags",
            description: "Te permite filtrar por etiquetas personalizadas en el Quick Switcher iniciando la búsqueda con &",
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
            description: "Hace que el menú contextual en los resultados de búsqueda de mensajes tenga todas las opciones que esperarías"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Hace que las menciones de usuario en la caja de chat tengan más funcionalidades, como clic izquierdo/derecho"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Hace que los avatares ocupen todo el recuadro del canal de voz"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Añade un botón junto a los de micrófono y ensordecer para activar/desactivar la actividad de juego. Haz clic derecho para la actividad de Spotify.",
            tooltip: "Alternar actividad de juego",
            gameActivity: {
                enabled: "Actividad de juego activada",
                disabled: "Actividad de juego desactivada"
            },
            option: {
                oldIcon: {
                    label: "Ícono antiguo",
                    description: "Usar el estilo de ícono anterior al rediseño de Discord"
                },
                location: {
                    label: "Ubicación",
                    description: "Dónde mostrar el botón para alternar la actividad de juego",
                    panel: "Junto a Silenciar/Ensordecer",
                    toolbox: "Plexcord Toolbox"
                }
            },
            text: {
                disableGameActivity: "Desactivar actividad de juego",
                enableGameActivity: "Activar actividad de juego",
                shareSpotifyActivity: "Compartir actividad de Spotify",
                shareSpotifyActivityAccount: "Compartir actividad de Spotify ({{name}})"
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Aparecerá un fantasmita tierno si no respondes a sus mensajes directos",
            modal: {
                title: "Usuarios ignorados (Ghosted)",
                no: "Sin usuarios ignorados",
                unghost: "quitar fantasma",
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
                    description: "Mostrar el contador de fantasmas en la parte superior de la lista de servidores"
                },
                showDmIcons: {
                    label: "Mostrar íconos en MD",
                    description: "Mostrar íconos de fantasma junto a los mensajes directos individuales"
                },
                ignoreGroupDms: {
                    label: "Ignorar MD grupales",
                    description: "Excluir todos los mensajes directos grupales del sistema de ignorados"
                },
                exemptedChannels: {
                    label: "Canales exentos",
                    description: "Lista de IDs de canales (separados por coma) para eximir (clic derecho en un MD para copiar su ID)"
                },
                ignoreBots: {
                    label: "Ignorar bots",
                    description: "Ignorar mensajes directos de bots"
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
        gifCollections: {
            name: "GifCollection",
            description: "Te permite crear colecciones de GIFs",
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
                    rename: "Renombrar",
                    move: "Mover a la colección",
                    select: "Selecciona una colección para mover el elemento"
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
                    description: "Mostrar únicamente las colecciones"
                },
                stopWarnings: {
                    label: "Detener advertencias",
                    description: "Detener las advertencias al eliminar"
                },
                showCopyImageLink: {
                    label: "Mostrar copiar enlace de imagen",
                    description: "Mostrar la opción {{copyImageLink}} en los menús contextuales"
                },
                preventDuplicates: {
                    label: "Evitar duplicados",
                    description: "Evitar añadir el mismo GIF a una colección varias veces"
                },
                defaultEmptyCollectionImage: {
                    label: "Imagen de colección vacía",
                    description: "La imagen/GIF que se mostrará cuando una colección no tenga contenido"
                },
                collectionsSortType: {
                    label: "Tipo de orden de colecciones",
                    description: "El tipo de ordenamiento para las colecciones"
                },
                collectionsSortOrder: {
                    label: "Sentido del orden de colecciones",
                    description: "El sentido (ascendente/descendente) del orden"
                },
                collectionsSort: {
                    label: "Ordenar colecciones",
                    description: "Decide cómo ordenar las colecciones",
                    title: "Ordenar colecciones",
                    sortDescription: "Elige un criterio de ordenamiento para tus colecciones",
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
                    description: "Restablecer colecciones a los valores por defecto (borra todas tus colecciones)",
                    button: "Restablecer colecciones"
                }
            },
            toast: {
                copied: "¡Enlace de imagen copiado al portapapeles!",
                urlCopied: "¡URL copiada al portapapeles!",
                already: "Esa colección ya existe",
                alreadyCollection: "Este GIF ya está en la colección",
                collectionsImportedSuccessfully: "Colecciones importadas correctamente.",
                failedToImportCollections: "No se pudieron importar las colecciones: {{String_err}}"
            },
            modal: {
                create: {
                    title: "Crear colección",
                    name: "Nombre de la colección",
                    create: "Crear"
                },
                rename: {
                    title: "Renombrar colección",
                    name: "Nuevo nombre de la colección",
                    warning: "El nombre no puede tener más de 24 caracteres",
                    rename: "Renombrar"
                }
            },
            alert: {
                import: {
                    title: "¿Estás seguro?",
                    body: "Importar colecciones sobrescribirá tus colecciones actuales.",
                    confirm: "Importar",
                    cancel: "No importa"
                },
                reset: {
                    title: "¿Estás seguro?",
                    body: "Restablecer las colecciones eliminará todas tus colecciones.",
                    confirm: "Restablecer",
                    cancel: "No importa"
                },
                delete: {
                    title: "¿Estás seguro?",
                    deleteBody: "¿Realmente quieres eliminar esta colección?",
                    removeBody: "¿Realmente quieres quitar este elemento?",
                    confirm: "Eliminar",
                    remove: "Quitar",
                    cancel: "No importa"
                }
            },
            text: {
                gifPickerCategoryOptions: "Opciones de categoría del selector de GIF",
                gifCollections: "Colecciones de GIF",
                unknown: "Desconocido"
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Te permite pegar GIFs directamente en la caja de chat"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Añade un comando para enviar un GIF aleatorio de tus favoritos, con una probabilidad entre diez de mencionar al dueño del servidor",
            command: {
                gifRoulette: {
                    description: "Tienta al destino y envía un GIF",
                    restricted: "Este comando está restringido en este servidor."
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Probabilidad de mencionar al dueño",
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
                    description: "Mostrar las estrellas de los repositorios"
                },
                showLanguage: {
                    label: "Mostrar lenguaje",
                    description: "Mostrar el lenguaje principal del repositorio"
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
                only: "Mostrando solo los primeros {{length}}/{{total}}"
            },
            modal: {
                title: "Repositorios de GitHub de {{username}}",
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
                    description: "Envía un enlace de buscador",
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
                    description: "Si el enlace enviado debe generar una vista previa"
                },
                defaultEngine: {
                    label: "Buscador predeterminado",
                    description: "El motor de búsqueda a usar"
                },
                customEngineURL: {
                    label: "URL de buscador personalizado",
                    description: "La URL del motor de búsqueda que deseas usar"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Te permite usar cualquier sticker de saludo en lugar de solo uno aleatorio al hacer clic derecho en el botón '¡Saluda con la mano!'",
            mode: {
                greet: "Saludar",
                message: "Mensaje"
            },
            option: {
                greetMode: {
                    label: "Modo de saludo",
                    description: "Elige el modo de saludo",
                    greet: "Saludar (solo puedes saludar 3 veces)",
                    message: "Mensaje (puedes saludar masivamente)"
                }
            },
            context: {
                label: "Selector de stickers de saludo",
                mode: "Modo de saludo",
                stickers: "Stickers de saludo",
                multi: "Multisaludo profano",
                send: "Enviar saludos"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Menú contextual para volcar y descargar los emojis y stickers de un servidor.",
            context: {
                download: {
                    emoji: "Descargar emojis",
                    sticker: "Descargar stickers"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Añade ajustes para las etiquetas de servidor, como ocultarlas o desactivar el aviso para adoptarlas.",
            option: {
                disableAdoptTagPrompt: {
                    label: "Desactivar aviso de adopción",
                    description: "Desactivar el aviso para adoptar etiquetas"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Permite ocultar los botones del chat",
            tooltip: {
                close: "Cerrar",
                open: "Abrir"
            },
            option: {
                color: {
                    label: "Color",
                    description: "Pintarlo de rojo al abrir"
                },
                open: {
                    label: "Abierto",
                    description: "Abierto por defecto"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Oculta archivos adjuntos e integraciones de mensajes individuales mediante un botón al pasar el cursor",
            show: "Mostrar multimedia",
            hide: "Ocultar multimedia",
            hidden: "Multimedia oculto"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Oculta temporalmente mensajes y MD hasta que reinicies.",
            button: {
                hide: "Ocultar",
                hideDm: "Ocultar MD",
                unhideDm: "Mostrar MD"
            },
            toggle: {
                none: "No hay MD ocultos",
                hide: "Ocultar MD ocultos",
                show: "Mostrar MD ocultos"
            },
            option: {
                hidePopoverButton: {
                    label: "Ocultar botón emergente",
                    description: "Ocultar el botón de ocultar en el menú flotante del mensaje."
                }
            }
        },
        hideMutedVoiceIndicator: {
            name: "HideMutedVoiceIndicator",
            description: "Oculta el indicador de voz en la lista de servidores cuando los únicos canales de voz activos están silenciados"
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
                    description: "Mostrar menú para volver a mostrar servidores al final de la lista"
                },
                guildsList: {
                    label: "Lista de servidores",
                    description: "Eliminar servidores ocultos"
                },
                resetHidden: {
                    label: "Restablecer ocultos",
                    description: "Eliminar todos los servidores ocultos de la lista",
                    button: "Restablecer servidores ocultos"
                }
            },
            button: {
                hidden: "Oculto",
                hiddenServers: "Servidores ocultos",
                remove: "Quitar",
                folder: "Carpeta",
                removeAll: "Quitar todos",
                guilds: "Servidores",
                noHiddenServers: "Sin servidores ocultos"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes te permite guardar mensajes",
            main: "Principal",
            button: {
                tooltip: "Holy Notes",
                save: "Guardar nota",
                cancel: "Cancelar",
                noteMessage: "Anotar mensaje",
                refresh: "Actualizar avatares",
                import: "Importar notas",
                export: "Exportar notas",
                deleteAll: "Borrar todas las notas",
                delete: "Eliminar cuaderno",
                create: "Crear cuaderno",
                copyText: "Copiar texto",
                copyAttachment: "Copiar URL del archivo",
                deleteNote: "Eliminar nota",
                moveNote: "Mover nota",
                moveTo: "Mover a {{key}}",
                copyId: "Copiar ID"
            },
            modal: {
                error: {
                    generic: "Hubo un error al procesar tus notas. Revisa la consola para más detalles.",
                    easter: "No se encontraron notas. Empathy Banana está aquí para ti.",
                    empty: "No se encontraron notas guardadas en este cuaderno."
                },
                help: {
                    title: "Ayuda",
                    description: "Aprende a usar Holy Notes",
                    addingNotes: "Añadir notas",
                    addingNotesText: "Para añadir una nota, haz clic derecho en un mensaje, pasa el cursor sobre 'Anotar mensaje' y haz clic en el botón con el nombre del cuaderno donde quieras guardarla.",
                    prototype: "Prototipo",
                    noteMessage: "¡Hacer clic directamente en 'Anotar mensaje' guardará la nota en el cuaderno Principal por defecto!",
                    deletingNotes: "Eliminar notas",
                    deletingNotesText: "Nota: puedes hacer clic derecho en la nota y elegir 'Eliminar nota' o mantener presionada la tecla 'DELETE' y hacer clic en la nota; ¡es como magia!",
                    movingNotes: "Mover notas",
                    movingNotesText: "Para mover una nota, haz clic derecho en ella, pasa el cursor sobre 'Mover nota' y selecciona el cuaderno de destino.",
                    jumpToMessage: "Ir al mensaje",
                    jumpToMessageText: "Para ir a la ubicación donde estaba originalmente el mensaje, haz clic derecho en la nota y selecciona 'Ir al mensaje'."
                },
                notebook: {
                    title: "CUADERNO",
                    search: "Buscar un mensaje...",
                    options: "Opciones de orden",
                    label: "Menú de orden",
                    filteredOf: "{{filteredCount}} de {{noteCount}} nota{{s}}",
                    note: "{{noteCount}} nota{{s}}",
                    ada: "Ascendente / Fecha de añadido",
                    amd: "Ascendente / Fecha del mensaje",
                    dda: "Descendente / Fecha de añadido",
                    dmd: "Descendente / Fecha del mensaje",
                    change: "Cambiar orden",
                    ascending: "Ascendente",
                    descending: "Descendente",
                    dateAdded: "Fecha de añadido",
                    messageDate: "Fecha del mensaje"
                },
                create: {
                    title: "Crear cuaderno",
                    description: "Introduce un nombre para tu nuevo cuaderno",
                    placeholder: "Nombre del cuaderno"
                },
                delete: {
                    title: "¿Eliminar {{notebookName}}?",
                    description: "Se eliminarán permanentemente {{noteCount}} nota{{s}}",
                    button: "Eliminar"
                },
                tabs: {
                    label: "Pestañas de cuadernos"
                }
            },
            toast: {
                saved: "Mensaje añadido correctamente a {{notebook}}",
                deleted: "Nota eliminada correctamente de {{notebook}}",
                moved: "Nota movida correctamente de {{from}} a {{to}}.",
                exists: "El cuaderno {{notebookName}} ya existe.",
                created: "Cuaderno {{notebookName}} creado correctamente.",
                deletedNotebook: "Cuaderno {{notebookName}} eliminado correctamente.",
                refreshed: "Avatares actualizados correctamente.",
                deletedAll: "Todas las notas han sido eliminadas.",
                imported: "Notas importadas correctamente.",
                invalid: "Error al importar las notas.",
                invalidJson: "JSON no válido"
            },
            toolbox: {
                action: "Abrir notas"
            },
            text: {
                holyNotes: "Holy Notes",
                noteTag: "NOTA"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Cambia el botón de inicio por un indicador de escritura si alguien en tus mensajes directos está escribiendo"
        },
        iconViewer: {
            name: "IconViewer",
            description: "Añade una nueva pestaña en ajustes para previsualizar todos los íconos.",
            toolbox: "Abrir pestaña de íconos",
            iconFinder: "Buscador de íconos",
            about: {
                title: "Funciones",
                preview: "Previsualizar íconos",
                list: {
                    copy: "Copiar nombres de íconos y variables CSS",
                    download: "Descargar íconos en diferentes formatos (SVG, PNG, GIF, etc.)",
                    premade: "Copiar hallazgos de íconos ya listos para tus plugins",
                    find: "Buscar íconos por contexto de función",
                    search: "Buscar colores haciendo clic derecho sobre el nombre del color",
                    special: "Agradecimientos especiales"
                }
            },
            context: {
                icon: {
                    options: "Opciones de ícono",
                    log: "Registrar en consola",
                    save: "Guardar como...",
                    rightClick: "Clic derecho en el ícono para cambiar",
                    usage: "Uso",
                    click: "Clic para copiar",
                    copied: "¡Copiado!",
                    actions: "Acciones"
                }
            },
            modal: {
                label: "Buscar por contexto de función",
                search: "Buscar entre {{count}} íconos...",
                function: "Función",
                iconViewer: {
                    colors: "Colores del Icon Viewer",
                    unknown: "desconocido",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Reinicia automáticamente el cliente después de estar inactivo por un tiempo configurable, pero evita hacerlo mientras estás en un canal de voz.",
            option: {
                isEnabled: {
                    label: "Activado",
                    description: "Habilitar el reinicio automático tras inactividad"
                },
                idleMinutes: {
                    label: "Minutos de inactividad",
                    description: "Minutos de inactividad antes de reiniciar (cuando no se está en voz)"
                }
            },
            toolbox: {
                disable: "Desactivar reinicio automático",
                enable: "Activar reinicio automático"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Ignora actividades para que NO aparezcan únicamente en tu estado. Puedes configurar cuáles se ignoran específicamente desde las pestañas de Juegos registrados y Actividades, o usar los ajustes generales de abajo",
            modal: {
                import: {
                    title: "Importar el ID de aplicación del plugin CustomRPC a la lista de filtros"
                },
                filter: {
                    title: "Lista de filtros",
                    description: "Lista de IDs de actividad separados por coma para filtrar (útil para filtrar actividades RPC específicas y CustomRPC)"
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
                    description: "Ignorar todas las actividades de juego (normalmente juegos y actividades RPC)"
                },
                ignoreStreaming: {
                    label: "Ignorar 'Transmitiendo'",
                    description: "Ignorar todas las actividades de transmisión"
                },
                ignoreListening: {
                    label: "Ignorar 'Escuchando'",
                    description: "Ignorar todas las actividades de escucha (suelen ser de Spotify)"
                },
                ignoreWatching: {
                    label: "Ignorar 'Viendo'",
                    description: "Ignorar todas las actividades de visualización"
                },
                ignoreCompeting: {
                    label: "Ignorar 'Compitiendo'",
                    description: "Ignorar todas las actividades competitivas (normalmente actividades especiales de juegos)"
                },
                ignoredActivities: {
                    label: "Actividades ignoradas"
                }
            },
            text: {
                enableActivity: "Activar actividad",
                disableActivity: "Desactivar actividad"
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Te permite ignorar llamadas de usuarios específicos o grupos de mensajes directos.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Usuarios ignorados permanentemente",
                    description: "IDs de usuario (separados por coma y espacio) que deben ser ignorados para siempre"
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
            description: "No ocultar mensajes de 'probables generadores de spam'"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Muestra el nombre de archivo de imágenes y GIFs como una descripción emergente al pasar el cursor",
            option: {
                showFullUrl: {
                    label: "Mostrar URL completa",
                    description: "Mostrar la URL completa de la imagen en lugar de solo el nombre. Siempre activado para GIFs porque no suelen tener nombres significativos"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Nunca ocultar enlaces de imágenes en los mensajes, incluso si es el único contenido"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Te permite hacer zoom en imágenes y GIFs, además de mostrar metadatos. Usa la rueda del mouse para hacer zoom y Shift + rueda para aumentar el radio de la lente.",
            option: {
                saveZoomValues: {
                    label: "Guardar valores de zoom",
                    description: "Indica si se deben guardar los valores de zoom y tamaño de lente"
                },
                invertScroll: {
                    label: "Invertir desplazamiento",
                    description: "Invertir el sentido de la rueda del mouse"
                },
                nearestNeighbour: {
                    label: "Nearest Neighbour",
                    description: "Usar interpolación de vecino más cercano al escalar imágenes"
                },
                square: {
                    label: "Cuadrado",
                    description: "Hacer que la lente sea cuadrada"
                },
                zoom: {
                    label: "Zoom",
                    description: "Nivel de zoom de la lente"
                },
                size: {
                    label: "Tamaño",
                    description: "Radio / Tamaño de la lente"
                },
                zoomSpeed: {
                    label: "Velocidad de zoom",
                    description: "Qué tan rápido cambia el zoom o el tamaño de la lente"
                },
                showMetadata: {
                    label: "Mostrar metadatos",
                    description: "Mostrar metadatos de la imagen al hacer doble clic"
                }
            },
            context: {
                square: "Lente cuadrada",
                nearest: "Vecino más cercano",
                zoom: "Zoom",
                size: "Tamaño de lente",
                zoomSpeed: "Velocidad de zoom",
                showImageMetadata: "Mostrar metadatos",
                view: "Ver metadatos",
                loading: "Cargando...",
                unknown: "Desconocido",
                sizeHTML: "Tamaño",
                dimensions: "Dimensiones",
                filename: "Nombre de archivo"
            },
            text: {
                bytes: "Bytes"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Añade un comando /imgtogif para crear un GIF a partir de cualquier imagen",
            command: {
                imgToGif: {
                    description: "Te permite convertir una imagen en un GIF",
                    image: "Archivo de imagen a usar",
                    width: "Ancho del GIF",
                    height: "Alto del GIF"
                }
            },
            error: {
                noImage: "¡No se especificó ninguna imagen!",
                notImage: "El archivo subido no es una imagen"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Muestra tus relaciones implícitas en la pestaña de Amigos.",
            option: {
                sortByAffinity: {
                    label: "Ordenar por afinidad",
                    description: "Indica si se deben ordenar las relaciones implícitas por su afinidad contigo."
                }
            },
            implicit: "Implícitas"
        },
        inRole: {
            name: "InRole",
            description: "Conoce quién tiene un rol mediante el menú contextual del rol o el comando /inrole (¡lee la info del plugin!)",
            command: {
                inrole: {
                    description: "Saber quién tiene un rol",
                    role: "El rol",
                    noGuild: "Asegúrate de estar en un servidor."
                }
            },
            context: {
                view: "Ver miembros con el rol"
            },
            modal: {
                about: {
                    title: "Limitaciones",
                    description: "Si no tienes permisos de moderador y el servidor es grande (más de 100 miembros), el plugin puede estar limitado de las siguientes formas",
                    list: {
                        one: "No se listarán los miembros desconectados",
                        two: "Se listarán hasta 100 miembros por defecto. Para obtener más, desplázate en la lista de miembros para cargarlos.",
                        three: "Sin embargo, los amigos siempre se mostrarán sin importar su estado."
                    }
                },
                member: {
                    title: "Miembros con el rol",
                    noMembers: "Parece que no se encontraron miembros en caché con ese rol. ¡Intenta desplazarte por la lista de miembros para guardarlos en caché!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Comparte pantalla instantáneamente al unirte a un canal de voz; compatible con escritorios, ventanas y dispositivos de entrada de video (cámaras, capturadoras)",
            modal: {
                linux: {
                    title: "Para Linux",
                    body: "En Wayland solo abre el selector de compartir pantalla",
                    bodyTwo: "En X11 puede que funcione o no :shrug:"
                },
                videoDevices: {
                    title: "Dispositivos de entrada de video",
                    body: "Soporta cámaras y capturadoras (como Elgato HD60X) cuando se activa en los ajustes"
                },
                regardingSound: {
                    title: "Sobre ajustes de sonido y vista previa",
                    body: "Usamos la configuración propia de Discord para decidir si la vista previa y el sonido deben estar activados o no"
                }
            },
            option: {
                streamMedia: {
                    label: "Fuente multimedia a transmitir",
                    description: "Vuelve a la pantalla principal si no se encuentra",
                    loading: "Cargando fuentes multimedia...",
                    none: "No se encontraron fuentes multimedia",
                    placeholder: "Selecciona una fuente para transmitir"
                },
                includeVideoDevices: {
                    label: "Incluir dispositivos de video",
                    description: "Incluir dispositivos de entrada de video (cámaras, capturadoras) en la lista de fuentes"
                },
                autoMute: {
                    label: "Silenciar automáticamente",
                    description: "Silenciar tu micrófono automáticamente al entrar a un canal de voz"
                },
                autoDeafen: {
                    label: "Ensordecer automáticamente",
                    description: "Ensordecerte automáticamente al entrar a un canal de voz (también te silencia)"
                },
                instantScreenshare: {
                    label: "Compartir pantalla instantáneo",
                    description: "Activa la función de compartir pantalla automática"
                },
                keybindScreenshare: {
                    label: "Atajo de teclado para compartir",
                    description: "Compartir pantalla mediante un atajo en los ajustes de Discord"
                },
                focusDiscord: {
                    label: "Enfocar Discord",
                    description: "Solo iniciar la transmisión con el atajo si Discord está en primer plano"
                },
                toolboxManagement: {
                    label: "Gestión en Toolbox",
                    description: "Activar/Desactivar Instant Screenshare"
                }
            },
            toolbox: {
                label: "Instant Screenshare",
                toast: "Instant Screenshare {{state}}",
                enabled: "Activado",
                disabled: "Desactivado"
            },
            toast: {
                instantScreenshareDisabled: "Compartir pantalla instantáneo {{disabled}}"
            },
            text: {
                instantScreenshare: "Instant Screenshare"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "¡Cifra tus mensajes de una forma que no parezca sospechosa!",
            option: {
                savedPasswords: {
                    label: "Contraseñas guardadas",
                    description: "Contraseñas guardadas (separadas por , )"
                }
            },
            button: {
                encrypt: "Cifrar mensaje",
                decrypt: "Descifrar mensaje",
                hidden: "Indicador de mensaje oculto (InvisibleChat)"
            },
            tooltip: {
                hidden: "¡Este mensaje tiene un mensaje oculto! (InvisibleChat)"
            },
            embed: {
                title: "Mensaje descifrado",
                footer: "Enviado con InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Cifrar mensaje",
                    secret: "Secreto",
                    cover: "Texto de cobertura (¡2 o más palabras!)",
                    password: "Contraseña",
                    dontUseCover: "No usar texto de cobertura",
                    send: "Enviar",
                    cancel: "Cancelar"
                },
                decrypt: {
                    title: "Descifrar mensaje",
                    with: "Mensaje cifrado",
                    password: "Contraseña",
                    decrypt: "Descifrar",
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
                    description: "Duración por defecto para las invitaciones de servidor",
                    thirtyMinutes: "30 Minutos",
                    oneHour: "1 Hora",
                    sixHours: "6 Horas",
                    twelveHours: "12 Horas",
                    oneDay: "1 Día",
                    sevenDays: "7 Días",
                    forever: "Nunca"
                },
                maxUses: {
                    label: "Usos máximos",
                    description: "Máximo de usos por defecto para las invitaciones de servidor",
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
                    description: "Membresía temporal por defecto para las invitaciones de servidor"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Hace que los colores de los nombres de usuario en el chat sean únicos, como en los clientes IRC",
            option: {
                lightness: {
                    label: "Luminosidad",
                    description: "Luminosidad en %. Cámbiala si los colores son muy claros u oscuros"
                },
                memberListColors: {
                    label: "Colores en lista de miembros",
                    description: "Reemplazar los colores de los roles en la lista de miembros"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Aplicar color solo a usuarios sin color",
                    description: "Aplicar colores únicamente a usuarios que no tengan un color de rol predefinido"
                },
                applyColorOnlyInDms: {
                    label: "Aplicar color solo en MD",
                    description: "Aplicar colores únicamente en mensajes directos; no aplicar en servidores."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Guarda localmente a todas las personas con las que te has comunicado (incluyendo servidores), en caso de pérdida",
            section: {
                description: "Muestra una lista de usuarios a los que has mencionado o respondido, dueños de servidores a los que perteneces (Dueño del servidor*) o miembros de tu servidor",
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
                filter: "Filtrar por etiqueta, usuario, ID",
                button: {
                    validate: "Validar y guardar",
                    cancel: "Cancelar",
                    openEditor: "Abrir editor",
                    resetData: "Restablecer almacenamiento",
                    sure: "¿Estás seguro?"
                }
            },
            text: {
                serverOptions: "Opciones del servidor",
                copyServerId: "Copiar ID del servidor",
                serverIdCopied: "ID del servidor copiada al portapapeles"
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Añade opciones en el menú contextual para saltar al inicio o al final de un canal o MD",
            context: {
                top: "Saltar al primer mensaje",
                bottom: "Saltar al último mensaje",
                noMessages: "No se encontraron mensajes de este usuario en este canal.",
                searchFailed: "Error al buscar mensajes."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Intenta volver al canal donde estabas antes de cambiar de cuenta o de cargar Discord."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Añade efectos de sonido de OperaGX u osu! al escribir con tu teclado.",
            option: {
                volume: {
                    label: "Volumen",
                    description: "Volumen de los sonidos del teclado"
                },
                soundPack: {
                    label: "Paquete de sonidos",
                    description: "Paquete de sonidos a usar",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Envía una notificación si un mensaje coincide con ciertas palabras clave o expresiones regulares (regex)",
            idHolder: "ID",
            keywordEntry: "Entrada de palabra clave",
            regexHolder: "ejemplo|regex",
            ignoreCase: "Ignorar mayúsculas",
            whiteblackLabel: "Lista blanca/negra",
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
                    description: "Ignorar mensajes de bots"
                },
                amountToKeep: {
                    label: "Cantidad a conservar",
                    description: "Cantidad de mensajes a mantener en el registro"
                },
                keywords: {
                    label: "Palabras clave",
                    description: "Gestionar palabras clave"
                }
            },
            text: {
                keywordEntryI1: "Entrada de palabra clave {{i_1}}",
                listPriorityAdvanced: "Prioridad de listas (avanzado)",
                whichListToPrioritize: "Qué lista priorizar si un mensaje activa ambas listas",
                ifYouAreNot: "Si no estás seguro, en la mayoría de los casos suele estar en Lista negra"
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Añade un indicador de última conexión bajo los nombres de usuario en tu lista de MD y listas de miembros",
            unit: {
                d: "día",
                h: "hora",
                m: "minuto"
            },
            online: "Conectado hace {{formattedTime}}"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Pequeño plugin para la presencia enriquecida (RPC) de ListenBrainz",
            about: {
                title: "Sobre la API de MusicBrainz",
                description: "La API de MusicBrainz no requiere una clave, pero sí necesita un {{link}}. Para la mayoría, una dirección de correo debería bastar.",
                userAgent: "User-Agent con significado"
            },
            option: {
                username: {
                    label: "Usuario",
                    description: "Nombre de usuario de ListenBrainz"
                },
                mbContact: {
                    label: "Contacto MB",
                    description: "Contacto de ListenBrainz"
                },
                shareUsername: {
                    label: "Compartir usuario",
                    description: "Mostrar enlace al perfil de ListenBrainz (puede que solo sea visible para otros)"
                },
                shareSong: {
                    label: "Compartir canción",
                    description: "Mostrar enlace a la canción actual en ListenBrainz (puede que solo sea visible para otros)"
                },
                hideWithSpotify: {
                    label: "Ocultar con Spotify",
                    description: "Ocultar la presencia de ListenBrainz si Spotify se está ejecutando"
                },
                hideWithActivity: {
                    label: "Ocultar con actividad",
                    description: "Ocultar ListenBrainz si tienes cualquier otra presencia activa"
                },
                useTimeBar: {
                    label: "Usar barra de tiempo",
                    description: "Usar la duración de la pista para mostrar una barra de tiempo (requiere usar el estado de Escuchando)"
                },
                statusName: {
                    label: "Nombre de estado",
                    description: "Texto de estado personalizado"
                },
                nameFormat: {
                    label: "Formato de nombre",
                    description: "Mostrar nombre de canción y artista en el estado",
                    custom: "Usar nombre de estado personalizado",
                    artistSong: "Usar formato 'artista - canción'",
                    songArtist: "Usar formato 'canción - artista'",
                    artistOnly: "Usar solo nombre del artista",
                    songOnly: "Usar solo nombre de la canción",
                    albumName: "Usar nombre del álbum (si no hay, vuelve al texto personalizado)"
                },
                useListeningStatus: {
                    label: "Usar estado de Escuchando",
                    description: "Mostrar estado 'Escuchando' en lugar de 'Jugando'"
                },
                missingArt: {
                    label: "Carátula faltante",
                    description: "Cuando falta el álbum o la carátula",
                    listenbrainzLogo: "Usar logo grande de ListenBrainz",
                    generic: "Usar marcador genérico"
                },
                showAlbumCover: {
                    label: "Mostrar portada del álbum",
                    description: "Mostrar portada del álbum. Al desactivar esto se mostrará una imagen predeterminada. Útil si tu música tiene carátulas inapropiadas"
                },
                useLogo: {
                    label: "Usar logo",
                    description: "Mostrar el logo de ListenBrainz sobre la carátula del álbum"
                }
            },
            button: {
                profile: "Perfil de ListenBrainz",
                viewSong: "Ver canción"
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Reemplaza las frases de carga de Discord",
            option: {
                replaceEvents: {
                    label: "Reemplazar eventos",
                    description: "¿Debe este plugin aplicarse también durante eventos con frases especiales? (ej. Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Habilitar frases del plugin",
                    description: "Habilitar las frases preestablecidas por este plugin"
                },
                enableDiscordPresetQuotes: {
                    label: "Habilitar frases de Discord",
                    description: "Habilitar las frases preestablecidas de Discord (incluyendo frases de eventos)"
                },
                additionalQuotes: {
                    label: "Frases adicionales",
                    description: "Frases personalizadas adicionales, separadas por el delimitador de abajo"
                },
                additionalQuotesDelimiter: {
                    label: "Delimitador de frases",
                    description: "El carácter usado para separar las frases adicionales"
                }
            },
            text: {
                allQuotesDisabled: "¿De verdad desactivaste todas las frases de carga? Qué payaso eres..."
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
            neverScan: "Nunca escanees un código QR de inicio de sesión que provenga de otro usuario o aplicación.",
            hold: "Mantén presionado para confirmar",
            scanning: "Escaneando...",
            stopScanning: "Detener escaneo",
            usingWebcam: "Escanear con la webcam",
            dragDrop: "Arrastra una imagen aquí o haz clic para seleccionarla",
            orPaste: "¡O pega una imagen desde tu portapapeles!",
            verifyLogin: "Verificar inicio de sesión",
            text: {
                scanQrCode: "Escanear código QR"
            }
        },
        markdownTables: {
            name: "MarkdownTables",
            description: "Muestra tablas markdown al estilo de GitHub en los mensajes de Discord.",
            toolbar: {
                label: "Vista de tabla markdown",
                table: "Tabla",
                raw: "Sin formato"
            },
            option: {
                hideToggle: {
                    label: "Ocultar selector",
                    description: "Oculta el selector Tabla/Sin formato y muestra siempre las tablas renderizadas."
                }
            }
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Permite cambiar la velocidad de reproducción (predeterminada) de los archivos multimedia integrados",
            playbackSpeed: "Velocidad de reproducción",
            context: {
                label: "Control de velocidad de reproducción"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Velocidad predeterminada de mensajes de voz",
                    description: "Mensajes de voz"
                },
                defaultVideoSpeed: {
                    label: "Velocidad predeterminada de video",
                    description: "Videos"
                },
                defaultAudioSpeed: {
                    label: "Velocidad predeterminada de audio",
                    description: "Audios"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Muestra el número de miembros conectados, miembros totales y usuarios en canales de voz del servidor, en la lista de miembros y en la información emergente.",
            option: {
                toolTip: {
                    label: "Descripción emergente",
                    description: "Mostrar el recuento de miembros en la descripción emergente del servidor"
                },
                memberList: {
                    label: "Lista de miembros",
                    description: "Mostrar el recuento de miembros en el encabezado de la lista"
                },
                voiceActivity: {
                    label: "Actividad de voz",
                    description: "Mostrar el número de usuarios en canales de voz"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} en línea en este canal",
            totalMembers: "{{formattedTotalCount}} miembros totales en el servidor",
            totalVoice: "{{formattedVoiceCount}} miembros en voz",
            tooltip: {
                total: "{{count}} miembros en total en el servidor"
            }
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Muestra los avatares de usuario e íconos de rol dentro de las menciones",
            option: {
                showAtSymbol: {
                    label: "Mostrar símbolo @",
                    description: "Indica si se debe mostrar el símbolo @ en las menciones de usuario"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Añade un botón en la barra de chat para maullar en el chat",
            button: {
                meow: "Miau"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Combina los mensajes enviados dentro de un periodo de tiempo con tu mensaje anterior si nadie más envía un mensaje antes que tú.",
            option: {
                timePeriod: {
                    label: "Periodo de tiempo",
                    description: "La duración de las ráfagas (en segundos)."
                },
                shouldMergeWithAttachment: {
                    label: "Combinar con archivos adjuntos",
                    description: "¿Se debe combinar el mensaje si el último mensaje tiene un archivo adjunto?"
                },
                useSpace: {
                    label: "Usar espacio",
                    description: "Indica si se debe añadir un espacio entre los mensajes combinados en lugar de saltos de línea."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Mantén presionado Retroceso (Backspace) y haz clic para eliminar; doble clic para editar/responder",
            option: {
                singleClickAction: {
                    label: "Acción de un solo clic",
                    description: "Acción al hacer un solo clic (tus mensajes)"
                },
                singleClickModifier: {
                    label: "Modificador de un solo clic",
                    description: "Tecla modificadora requerida para la acción de un solo clic (tus mensajes)"
                },
                singleClickOthersAction: {
                    label: "Acción de un solo clic (otros)",
                    description: "Acción al hacer un solo clic (mensajes de otros)"
                },
                singleClickOthersModifier: {
                    label: "Modificador de un solo clic (otros)",
                    description: "Tecla modificadora requerida para la acción de un solo clic (mensajes de otros)"
                },
                doubleClickAction: {
                    label: "Acción de doble clic",
                    description: "Acción al hacer doble clic (tus mensajes)"
                },
                doubleClickOthersAction: {
                    label: "Acción de doble clic (otros)",
                    description: "Acción al hacer doble clic (mensajes de otros)"
                },
                doubleClickModifier: {
                    label: "Modificador de doble clic",
                    description: "Tecla modificadora requerida para la acción de doble clic"
                },
                tripleClickAction: {
                    label: "Acción de triple clic",
                    description: "Acción al hacer triple clic"
                },
                tripleClickModifier: {
                    label: "Modificador de triple clic",
                    description: "Tecla modificadora requerida para la acción de triple clic"
                },
                reactEmoji: {
                    label: "Emoji de reacción",
                    description: "Emoji a usar para las acciones de reacción"
                },
                addAdditionalReacts: {
                    label: "Añadir reacciones adicionales",
                    description: "También añade los emojis de reacción configurados adicionalmente"
                },
                additionalReactEmojis: {
                    label: "Emojis de reacción adicionales",
                    description: "Emojis adicionales para añadir al usar la acción de Reaccionar (separados por coma/línea, máx. {{count}})"
                },
                disableInDms: {
                    label: "Desactivar en MD",
                    description: "Desactivar todas las acciones de clic en mensajes directos"
                },
                disableInSystemDms: {
                    label: "Desactivar en MD de sistema",
                    description: "Desactivar todas las acciones de clic en MD de sistema"
                },
                clickTimeout: {
                    label: "Tiempo de espera de clic",
                    description: "Tiempo para distinguir entre clics dobles/triples (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Umbral de espera de doble clic",
                    description: "Tiempo máximo de pulsación para acciones de doble clic (ms). Pulsar más tiempo permite la selección de texto"
                },
                deferDoubleClickForTriple: {
                    label: "Diferir doble clic para triple",
                    description: "Retrasa el doble clic para permitir acciones de triple clic (desactiva el triple clic si está apagado)"
                },
                selectionHoldTimeout: {
                    label: "Tiempo de espera para selección",
                    description: "Tiempo para permitir la selección de texto (ms)"
                },
                quoteWithReply: {
                    label: "Citar con respuesta",
                    description: "Al citar, también responde al mensaje"
                },
                useSelectionForQuote: {
                    label: "Usar selección para cita",
                    description: "Al citar, usar el texto seleccionado si está disponible"
                }
            },
            actions: {
                none: "Ninguna",
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
                react: "No se puede reaccionar: Faltan permisos",
                pin: "No se puede fijar: Faltan permisos",
            },
            cannotQuote: "No se puede citar este tipo de mensaje",
            copy: {
                messageId: "¡ID del mensaje copiado!",
                messageContent: "¡Contenido del mensaje copiado!",
                userId: "¡ID de usuario copiado!"
            },
            linkCopied: "¡Enlace copiado!",
            text: {
                shift: "Mayús",
                ctrl: "Ctrl",
                alt: "Alt",
                backspace: "Retroceso",
                pickEmoji: "Elegir emoji"
            },
            emojiSetting: {
                pick: "Elegir emoji",
                selectMain: "Seleccionar emoji para reacciones",
                selectAdditional: "Seleccionar emojis adicionales",
                additionalPlaceholder: "separados por coma/salto de línea, máx. {{max}}"
            },
            toast: {
                cannotReact: "No se puede reaccionar: faltan permisos",
                linkCopied: "¡Enlace copiado!"
            }
        },
        messageColors: {
            name: "MessageColors",
            description: "Muestra códigos de color como #FF0042 dentro de los mensajes",
            option: {
                renderType: {
                    label: "Tipo de renderizado",
                    description: "Cómo mostrar los colores",
                    textColor: "Color de texto",
                    block: "Bloque cercano",
                    backgroundColor: "Color de fondo"
                },
                enableShortHexCodes: {
                    label: "Habilitar códigos hex cortos",
                    description: "Habilitar códigos hex de 3 caracteres como #39f"
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
            description: "Muestra cuánto tiempo tomó cargar los mensajes del canal actual",
            option: {
                showIcon: {
                    label: "Mostrar ícono",
                    description: "Mostrar el ícono del tiempo de carga en la barra de mensajes"
                },
                showMs: {
                    label: "Mostrar milisegundos",
                    description: "Mostrar milisegundos en el tiempo"
                },
                iconColor: {
                    label: "Color del ícono",
                    description: "Color del ícono (valor de color CSS)"
                }
            },
            loaded: "Mensajes cargados en {{time}}ms (hace {{timeAgo}})",
            day: "día{{s}}",
            hour: "hora{{s}}",
            minute: "minuto{{s}}",
            justNow: "recién"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Muestra un indicador para mensajes que tardaron ≥n segundos en enviarse",
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
            oldKotlinDetected: "Se sospecha que el usuario utiliza un cliente de Discord para Android antiguo.",
            ahead: "El reloj de este usuario está {{delta}} adelantado.",
            delay: "Este mensaje fue enviado con un retraso de {{delta}}.",
            delayedMessage: "Mensaje retrasado",
            oldAndroidClient: "Cliente de Discord para Android antiguo",
            option: {
                latency: {
                    label: "Latencia",
                    description: "Umbral en segundos para el indicador de latencia"
                },
                detectDiscordKotlin: {
                    label: "Detectar Discord Kotlin",
                    description: "Detectar clientes de Discord para Android antiguos"
                },
                showMillis: {
                    label: "Mostrar milisegundos",
                    description: "Mostrar milisegundos"
                },
                ignoreSelf: {
                    label: "Ignorarme",
                    description: "No añadir el indicador a mis propios mensajes"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Añade una vista previa a los mensajes que enlazan a otro mensaje",
            option: {
                messageBackgroundColor: {
                    label: "Color de fondo del mensaje",
                    description: "Color de fondo para los mensajes en integraciones enriquecidas (rich embeds)"
                },
                automodEmbeds: {
                    label: "Integraciones de Automod",
                    description: "Usar integraciones de Automod en lugar de enriquecidas (más pequeñas pero con menos info)",
                    always: "Usar siempre integraciones de Automod",
                    prefer: "Preferir integraciones de Automod, pero usar enriquecidas si algún contenido no se puede mostrar",
                    never: "Nunca usar integraciones de Automod"
                },
                listMode: {
                    label: "Modo de lista",
                    description: "Indica si se debe usar la lista de IDs como lista negra o blanca",
                    blacklist: "Lista negra",
                    whitelist: "Lista blanca"
                },
                idList: {
                    label: "Lista de IDs",
                    description: "IDs de servidores/canales/usuarios para filtrar (separar por comas)"
                },
                clearMessageCache: {
                    label: "Limpiar caché de mensajes",
                    description: "Limpiar el caché de los mensajes enlazados"
                }
            },
            noContent: {
                noAttachments: "sin contenido, {{count}} integración{{s}} (embed{{s}})",
                noEmbeds: "sin contenido, {{count}} archivo{{s}} adjunto{{s}}",
                both: "sin contenido, {{attachments}} archivo{{attachmentsS}} adjunto{{attachmentsS}} y {{embeds}} integración{{embedsS}}"
            },
            dm: "Mensaje directo",
            groupDm: "MD grupal",
            server: "Servidor"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Añade una descripción emergente con vista previa al pasar el cursor sobre enlaces de mensajes, respuestas y mensajes reenviados.",
            loading: "Cargando...",
            option: {
                onLink: {
                    label: "En enlaces",
                    description: "Mostrar descripción al pasar el cursor sobre enlaces de mensajes"
                },
                onReply: {
                    label: "En respuestas",
                    description: "Mostrar descripción al pasar el cursor sobre respuestas de mensajes"
                },
                onForward: {
                    label: "En reenvíos",
                    description: "Mostrar descripción al pasar el cursor sobre mensajes reenviados"
                },
                display: {
                    label: "Visualización",
                    description: "Estilo de visualización",
                    auto: "Igual que el mensaje",
                    compact: "Compacto",
                    cozy: "Cómodo (Cozy)"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Registra temporalmente mensajes eliminados y editados.",
            removeMessage: "Borrar historial del mensaje",
            removeMessageTemporary: "Eliminar mensaje (Temporal)",
            clearMessageLog: "Limpiar registro de mensajes",
            showDiff: "Mostrar diferencias",
            modal: {
                edit: {
                    title: "Historial de edición de mensajes",
                    tooltip: "Este estado de edición no se registró, por lo que no se puede mostrar."
                }
            },
            option: {
                deleteStyle: {
                    label: "Estilo de eliminación",
                    description: "El estilo de los mensajes eliminados",
                    text: "Texto rojo",
                    overlay: "Superposición roja"
                },
                logDeletes: {
                    label: "Registrar eliminaciones",
                    description: "Indica si se deben registrar los mensajes eliminados"
                },
                collapseDeleted: {
                    label: "Colapsar eliminados",
                    description: "Indica si se deben colapsar los mensajes eliminados, similar a los mensajes bloqueados"
                },
                logEdits: {
                    label: "Registrar ediciones",
                    description: "Indica si se deben registrar los mensajes editados"
                },
                inlineEdits: {
                    label: "Ediciones en línea",
                    description: "Indica si se debe mostrar el historial de edición como parte del contenido del mensaje"
                },
                ignoreBots: {
                    label: "Ignorar bots",
                    description: "Indica si se deben ignorar los mensajes de bots"
                },
                ignoreSelf: {
                    label: "Ignorarme",
                    description: "Indica si se deben ignorar tus propios mensajes"
                },
                ignoreSelfEdits: {
                    label: "Ignorar ediciones propias",
                    description: "Si se deben ignorar las ediciones realizadas por ti mismo"
                },
                ignoreUsers: {
                    label: "Ignorar usuarios",
                    description: "Lista de IDs de usuario a ignorar (separados por comas)"
                },
                ignoreChannels: {
                    label: "Ignorar canales",
                    description: "Lista de IDs de canal a ignorar (separados por comas)"
                },
                ignoreGuilds: {
                    label: "Ignorar servidores",
                    description: "Lista de IDs de servidor a ignorar (separados por comas)"
                },
                showEditDiffs: {
                    label: "Mostrar diferencias de edición",
                    description: "Mostrar diferencias visuales entre versiones de mensajes editados"
                },
                separatedDiffs: {
                    label: "Diferencias separadas",
                    description: "Separa adiciones y eliminaciones en las diferencias para una lectura más clara"
                },
                logDeletedAttachments: {
                    description: "Si se registran los archivos adjuntos eliminados",
                    label: "Registrar adjuntos eliminados"
                }
            },
            text: {
                clearHistory: "Borrar historial",
                toggleDeletedHighlight: "Alternar resaltado de eliminados",
                enableDiffView: "Activar vista de diferencias",
                disableDiffView: "Desactivar vista de diferencias",
                noDeletedMessages: "No hay mensajes eliminados",
                deletedMessageSuffix: " mensaje eliminado",
                deletedMessagesSuffix: " mensajes eliminados"
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Mejora el plugin MessageLogger con funciones adicionales.",
            updateImageCacheDir: "Directorio de caché de imágenes actualizado correctamente.",
            updateLogsDir: "Directorio de registros actualizado correctamente.",
            failedUpdate: "Error al actualizar el directorio.",
            blacklist: "Lista negra",
            whitelist: "Lista blanca",
            failedToRemove: "Error al eliminar el mensaje",
            successfullyImported: "Registros importados correctamente",
            errorImportingLogs: "Error al importar registros. Revisa la consola para más información",
            importing: "Importando...",
            importLogs: "Importar registros",
            exporting: "Exportando...",
            exportLogs: "Exportar registros",
            alert: {
                clearLogs: {
                    title: "Limpiar registros",
                    body: "¿Estás seguro de que quieres borrar todos los registros?",
                    confirmText: "Limpiar",
                    cancel: "Cancelar"
                },
                clearVisibleLogs: {
                    title: "Limpiar registros visibles",
                    body: "¿Estás seguro de que quieres borrar {{messages}} registros?",
                    confirmText: "Limpiar",
                    cancel: "Cancelar"
                },
                cleared: "Base de datos y caché de registro de mensajes limpiados."
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
                fromGroupDm: "Del MD grupal {{channelName}}",
                fromServerChannel: "De {{channelName}} en {{serverName}}",
                moveTypeTo: "Mover {{type}} a {{destination}}",
                removeTypeFrom: "Quitar {{type}} de {{list}}",
                openLogsFor: "Abrir registros de {{name}}",
                openLogs: "Abrir registros",
                removeMessage: "Quitar mensaje (Permanente)",
                removeMessageHistory: "Quitar historial de mensajes (Permanente)",
                deleteMessageHide: "Eliminar mensaje (Ocultar de otros loggers)",
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
                sortOldest: "Ordenar por más antiguos primero",
                sortNewest: "Ordenar por más recientes primero",
                loadMore: "Cargar más",
                noResults: "Sin resultados en {{tab}}",
                tryOtherTabs: "Tal vez intenta en {{nextTab}} o {{lastTab}}",
                importLogs: "Importar registros"
            },
            modal: {
                title: "Filtrar mensajes",
                deleted: "Eliminados",
                edited: "Editados",
                ghostPing: "Ghost Pings",
                empty: "Vacío, ¿eh?",
                importLogs: "ML Enhanced ahora guarda los registros en indexeddb. Necesitas importar tus registros antiguos desde el directorio de registros. La importación no sobrescribirá los registros existentes."
            },
            clear: {
                title: "Limpiar registros",
                description: "¿Estás seguro de que quieres borrar todos los registros?",
                confirm: "Limpiar",
                cancel: "Cancelar"
            },
            option: {
                saveMessages: {
                    label: "Guardar mensajes",
                    description: "Indica si se deben guardar los mensajes eliminados y editados."
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
                    label: "Cachear mensajes de servidores",
                    description: "Normalmente el logger solo registra de IDs en lista blanca y MD; activar esto hará que registre mensajes de todos los servidores también. Ten en cuenta que esto puede hacer que el caché exceda su límite y se pierdan mensajes. Si estás en muchos servidores, esto puede generar un registro muy grande con mensajes irrelevantes."
                },
                ignoreBots: {
                    label: "Ignorar bots",
                    description: "Indica si se deben ignorar los mensajes de bots"
                },
                ignoreWebhooks: {
                    label: "Ignorar webhooks",
                    description: "Indica si se deben ignorar los mensajes de webhooks"
                },
                ignoreSelf: {
                    label: "Ignorarme",
                    description: "Indica si se deben ignorar tus propios mensajes"
                },
                ignoreMutedGuilds: {
                    label: "Ignorar servidores silenciados",
                    description: "Los mensajes en servidores silenciados no se registrarán. Los usuarios/canales en lista blanca dentro de servidores silenciados se seguirán registrando."
                },
                ignoreMutedCategories: {
                    label: "Ignorar categorías silenciadas",
                    description: "Los mensajes en canales pertenecientes a categorías silenciadas no se registrarán."
                },
                ignoreMutedChannels: {
                    label: "Ignorar canales silenciados",
                    description: "Los mensajes en canales silenciados no se registrarán."
                },
                alwaysLogDirectMessages: {
                    label: "Registrar siempre mensajes directos",
                    description: "Registrar siempre los MD"
                },
                alwaysLogCurrentChannel: {
                    label: "Registrar siempre el canal actual",
                    description: "Registrar siempre el canal seleccionado actualmente. Los canales/usuarios en lista negra se seguirán ignorando."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Eliminar registro permanentemente por defecto",
                    description: "El botón de eliminar registro de MessageLogger borrará los registros de forma permanente"
                },
                hideMessageFromMessageLoggers: {
                    label: "Ocultar mensaje de otros loggers",
                    description: "Añade un botón al menú contextual para permitirte eliminar mensajes sin que otros loggers los registren. Podría no ser seguro, úsalo bajo tu propio riesgo."
                },
                showLogsButton: {
                    label: "Mostrar botón de registros",
                    description: "Alternar si se debe mostrar en el toolbox o no"
                },
                showWhereMessageIsFrom: {
                    label: "Mostrar origen del mensaje",
                    description: "Mostrar el canal/autor y el nombre del servidor"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Mensajes a mostrar a la vez",
                    description: "Número de mensajes a mostrar a la vez y a cargar al pedir más."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Contenido para mensajes ocultos de loggers",
                    description: "El contenido que reemplazará al mensaje cuando uses la función de ocultar de otros loggers."
                },
                messageLimit: {
                    label: "Límite de mensajes",
                    description: "Número máximo de mensajes a guardar. Los más antiguos se borrarán al alcanzar el límite. 0 significa sin límite"
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Límite de tamaño de adjuntos (MB)",
                    description: "Tamaño máximo de un archivo adjunto para ser guardado. Los archivos más grandes se ignorarán."
                },
                attachmentFileExtensions: {
                    label: "Extensiones de archivo de adjuntos",
                    description: "Lista de extensiones separadas por comas para guardar. Deja vacío para guardar todos."
                },
                cacheLimit: {
                    label: "Límite de caché",
                    description: "Número máximo de mensajes a mantener en el caché."
                },
                timeBasedCleanupMinutes: {
                    label: "Intervalo de limpieza (minutos)",
                    description: "Intervalo en minutos para realizar la limpieza de mensajes antiguos."
                },
                preserveCurrentChannel: {
                    label: "Preservar canal actual",
                    description: "Cuando está activado, los mensajes del canal seleccionado no se verán afectados por la limpieza automática."
                },
                whitelistedIds: {
                    label: "IDs en lista blanca",
                    description: "IDs de servidor, canal o usuario que siempre se mostrarán en el registro de mensajes."
                },
                blacklistedIds: {
                    label: "IDs en lista negra",
                    description: "IDs de servidor, canal o usuario que nunca se mostrarán en el registro de mensajes."
                },
                imageCacheDir: {
                    label: "Directorio de caché de imágenes",
                    description: "Selecciona el directorio para las imágenes guardadas"
                },
                logsDir: {
                    label: "Directorio de registros",
                    description: "Selecciona el directorio para los registros"
                },
                importLogs: {
                    label: "Importar registros",
                    description: "Importar registros desde un archivo"
                },
                exportLogs: {
                    label: "Exportar registros",
                    description: "Exportar registros desde IndexedDB"
                },
                clearLogsOnRestart: {
                    label: "Borrar registros al reiniciar",
                    description: "Borra los registros cuando Discord se reinicia."
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
                    label: "Limpiar registros",
                    description: "Borrar todos los registros",
                    title: "Limpiar registros",
                    body: "¿Estás seguro de que quieres borrar todos los registros?",
                    confirmText: "Limpiar",
                    cancel: "Cancelar"
                }
            },
            toast: {
                clearedLogs: "Registros borrados",
                failedToClearLogs: "No se pudieron borrar los registros",
                failedToRemoveMessage: "No se pudo quitar el mensaje. Revisa la consola para más detalles.",
                noMessagesFoundIn: "No se encontraron mensajes en el archivo de registro",
                successfullyImportedCountLogs: "Se importaron {{count}} registros",
                successfullyExportedLogs: "Registros exportados correctamente",
                successfullyExportedCountLogs: "Se exportaron {{count}} registros",
                errorExportingLogsCheck: "Error al exportar los registros. Revisa la consola para más información"
            },
            text: {
                jsonFile: "Archivo JSON",
                clearLogs: "Borrar registros",
                clearingLogs: "Borrando registros...",
                messageLogger: "Message Logger",
                importLogs: "Importar registros",
                logs: "Registros",
                loadingTabLogs: "Cargando registros: {{tab}}..."
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Recibe notificaciones flotantes (toasts) cuando usuarios específicos envíen un mensaje",
            dm: "sus mensajes directos",
            option: {
                users: {
                    label: "Usuarios",
                    description: "Lista de IDs de usuario separados por comas para recibir notificaciones",
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
            description: "Te permite guardar mensajes y usarlos con un comando simple.",
            notExist: "¡La etiqueta **{{tagname}}** ya no existe! Por favor, recarga Discord para arreglarlo :)",
            alreadyExist: "¡Ya existe una etiqueta con el nombre **{{tagname}}**!",
            sentTag: "¡Se ha enviado la etiqueta **{{tagname}}**!",
            successCreate: "¡Se ha creado la etiqueta **{{tagname}}**!",
            allTags: "Todas tus etiquetas:",
            noTags: "¡Vaya! Aún no hay etiquetas, ¡usa /tag create para crear una!",
            noDeleteTag: "¡La etiqueta **{{tagname}}** no existe, así que no se puede eliminar!",
            successDelete: "¡Etiqueta **{{name}}** eliminada correctamente!",
            tagPreview: "¡La etiqueta **{{name}}** no existe!",
            option: {
                clyde: {
                    label: "Mensaje de Clyde al enviar",
                    description: "Si está activado, Clyde te enviará un mensaje efímero cuando se use una etiqueta."
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
                            message: "El mensaje que enviarás al usar esta etiqueta"
                        },
                        list: {
                            description: "Listar todas tus etiquetas"
                        },
                        delete: {
                            description: "Quitar una de tus etiquetas",
                            name: "Nombre de la etiqueta a quitar"
                        },
                        preview: {
                            description: "Vista previa de una etiqueta sin enviarla públicamente",
                            name: "Nombre de la etiqueta a previsualizar"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Añade un ícono de prueba de bucle de micrófono al panel de usuario",
            button: "Prueba de bucle de micro"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Varios ajustes para el clic central del mouse, como pegar y abrir enlaces.",
            option: {
                openScope: {
                    label: "Alcance de apertura",
                    description: "Evita que al hacer clic central sobre estos contenidos se abran.",
                    links: "Enlaces",
                    media: "Multimedia",
                    linksAndMedia: "Enlaces y Multimedia",
                    none: "Ninguno"
                },
                pasteScope: {
                    label: "Alcance de pegado",
                    description: "Evita que el clic central pegue contenido en estas situaciones.",
                    always: "Evitar siempre el pegado con clic central",
                    focus: "Evitar solo cuando el área de texto no esté enfocada",
                },
                pasteThreshold: {
                    label: "Umbral de pegado",
                    description: "Milisegundos hasta que el pegado se habilite de nuevo tras un clic central."
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo, Lenny, Mock y más",
            command: {
                echo: {
                    description: "Envía un mensaje como Clyde (localmente)"
                },
                lenny: {
                    description: "Envía una cara Lenny ( ͡° ͜ʖ ͡°)"
                },
                mock: {
                    description: "EsCrIbIr AsÍ (mOcK)"
                },
                wordcount: {
                    description: "Cuenta el número de palabras en un mensaje",
                    response: "El mensaje contiene {{count}} palabras."
                },
                flipcoin: {
                    description: "Lanza una moneda y devuelve cara o cruz",
                    heads: "Cara",
                    tails: "Cruz",
                    response: "La moneda cayó en {{result}}."
                },
                ask: {
                    description: "Haz una pregunta de sí o no y obtén una respuesta",
                    yes: "Sí",
                    no: "No",
                    maybe: "Tal vez",
                    askAgain: "Pregunta más tarde",
                    definitelyNot: "Definitivamente no",
                    itIsCertain: "Es seguro"
                },
                randomanimal: {
                    description: "Obtén una foto aleatoria de un animal",
                    animal: "elige tu animal",
                    cat: "gato",
                    dog: "perro",
                    response: "Lo siento, no pude obtener una foto de animal ahora mismo"
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
                    cpuCores: "Núcleos de CPU",
                    memory: "Memoria",
                    screen: "Pantalla",
                    languages: "Idiomas",
                    network: "Red",
                    online: "En línea",
                    offline: "Desconectado",
                    failedToFetch: "Error al obtener información del sistema",
                    unknown: "Desconocido"
                },
                getuptime: {
                    description: "Obtiene el tiempo de actividad del cliente",
                    response: "**Tiempo de actividad del cliente**: {{uptime}} minutos"
                },
                gettime: {
                    description: "Obtiene la hora actual",
                    response: "La hora actual es {{time}}"
                },
                transform: {
                    description: "Transforma tu texto con la opción especificada",
                    transformation: {
                        description: "Transformación a aplicar al texto",
                        lowercase: "Convertir texto a minúsculas",
                        uppercase: "Convertir texto a mayúsculas",
                        localeLowercase: "Convertir a minúsculas locales",
                        localeUppercase: "Convertir a mayúsculas locales",
                        same: "Mantener igual"
                    },
                    repeat: "cuántas veces repetir",
                    reverse: "si se debe invertir el texto",
                    normalize: {
                        description: "Forma de normalización de texto",
                        nfc: "Forma de normalización C (NFC)",
                        nfd: "Forma de normalización D (NFD)",
                        nfkc: "Forma de normalización KC (NFKC)",
                        nfkd: "Forma de normalización KD (NFKD)"
                    },
                    text: "Transformar este texto"
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
                    label: "Número de reacciones",
                    description: "Cantidad de reacciones (0-42)"
                },
                frequentEmojis: {
                    label: "Emojis frecuentes",
                    description: "Usar emojis frecuentes en lugar de emojis favoritos"
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
                    description: "Escala los botones al 75%, aumentando el emoji interno al 125%. Los emojis serán el 93.75% del tamaño original. Se recomiendan al menos 5 columnas"
                },
                scroll: {
                    label: "Desplazamiento",
                    description: "Habilitar el desplazamiento en la lista de emojis"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Añade etiquetas para webhooks y roles de moderación (dueño, admin, etc.)",
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
                    description: "Tiene el permiso de administrador"
                },
                staff: {
                    name: "Staff",
                    description: "Puede gestionar el servidor, canales o roles"
                },
                mod: {
                    name: "Mod",
                    description: "Puede gestionar mensajes o expulsar/banear personas"
                },
                vcmod: {
                    name: "Mod de Voz",
                    description: "Puede gestionar chats de voz"
                },
                chatmod: {
                    name: "Mod de Chat",
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
                    label: "No mostrar en bots",
                    description: "No mostrar etiquetas extra para bots (excluyendo webhooks)"
                },
                dontShowBotTag: {
                    label: "No mostrar etiqueta BOT",
                    description: "Solo mostrar etiquetas extra para bots / Ocultar el texto [BOT/APP]"
                },
                showWebhookTagFully: {
                    label: "Mostrar etiqueta de webhook completa",
                    description: "Mostrar etiqueta de Webhook en canales seguidos (como anuncios)"
                },
                tagSettings: {
                    label: "Ajustes de etiquetas",
                    description: "completar"
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
                    label: "Activar cuando esté desenfocado",
                    description: "Activar el 🗿 incluso cuando la ventana no esté en primer plano"
                },
                ignoreBots: {
                    label: "Ignorar bots",
                    description: "Ignorar mensajes de bots"
                },
                ignoreBlocked: {
                    label: "Ignorar usuarios bloqueados",
                    description: "Ignorar mensajes de usuarios bloqueados"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Controles de música y letras para múltiples servicios",
            option: {
                spotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Mostrar controles de Spotify",
                    description: "Mostrar controles de música para Spotify"
                },
                showSpotifyLyrics: {
                    label: "Mostrar letras de Spotify",
                    description: "Mostrar letras para Spotify"
                },
                useSpotifyUris: {
                    label: "Usar URIs de Spotify",
                    description: "Abrir URIs de Spotify en lugar de URLs. Solo funcionará si tienes Spotify instalado."
                },
                previousButtonRestartsTrack: {
                    label: "Botón anterior reinicia pista",
                    description: "Reinicia la pista actual al presionar el botón anterior si el tiempo de reproducción es >3s"
                },
                tidalSectionTitle: {
                    label: "Tidal"
                },
                showTidalControls: {
                    label: "Mostrar controles de Tidal",
                    description: "Mostrar controles de música para Tidal"
                },
                showTidalLyrics: {
                    label: "Mostrar letras de Tidal",
                    description: "Mostrar letras para Tidal"
                },
                websocketURL: {
                    label: "URL de Websocket",
                    description: "Por defecto es ws://localhost:24123"
                },
                YtmSectionTitle: {
                    label: "YouTube Music",
                    description: "Se requiere {{app}} para estos ajustes"
                },
                showYoutubeMusicControls: {
                    label: "Mostrar controles de YouTube Music",
                    description: "Mostrar controles de música para YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "URL de la API de YouTube Music",
                    description: "La URL del servidor de la API de YouTube Music que estás utilizando"
                },
                hoverControls: {
                    label: "Controles al pasar el cursor",
                    description: "Mostrar controles solo al pasar el cursor"
                },
                showMusicNoteOnNoLyrics: {
                    label: "Mostrar nota musical si no hay letras",
                    description: "Muestra un ícono de nota musical cuando no se encuentran letras"
                },
                lyricsPosition: {
                    label: "Posición de las letras",
                    description: "Ubicación del panel de letras",
                    above: "Sobre el reproductor",
                    below: "Bajo el reproductor"
                },
                lyricsProvider: {
                    label: "Proveedor de letras",
                    description: "De dónde se obtienen las letras",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "URL base de la API de letras de Spotify",
                    description: "URL base de una instancia personalizada (por ejemplo: http://localhost:8080)."
                },
                translateTo: {
                    label: "Traducir a",
                    description: "Traducir letras a (Cambiar esto limpiará las traducciones existentes)",
                    cleared: "Traducciones borradas"
                },
                lyricsConversion: {
                    label: "Conversión de letras",
                    description: "Traducir o romanizar letras automáticamente",
                    none: "Ninguna",
                    translate: "Traducir",
                    romanize: "Romanizar"
                },
                fallbackProvider: {
                    label: "Proveedor alternativo",
                    description: "Si un proveedor falla, intentar con otros"
                },
                showFailedToasts: {
                    label: "Mostrar avisos de error",
                    description: "Mostrar notificaciones cuando las letras no carguen"
                },
                purgeLyricsCache: {
                    label: "Purgar caché de letras",
                    description: "Borrar todas las letras y traducciones cacheadas",
                    button: "Purgar caché",
                    cacheLyricsPurged: "Caché de letras purgado"
                },
                lyricDelay: {
                    label: "Retraso de la letra"
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
                failedToFetchTranslation: "Error al obtener la letra de {{translated}}"
            },
            modal: {
                install: {
                    title: "Cómo instalar",
                    install: "Instala {{link}} desde aquí, luego ve a ajustes de TidalLuna → Tienda de plugins → Instalar @vmohammad/api",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "Sin pista en reproducción",
                    artist: "Artista:",
                    album: "Álbum:",
                    noLyrics: "Letras no disponibles :(",
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
                    viewCover: "Ver portada de álbum",
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
                failed: "Error al renderizar el modal :(",
                checkConsole: "Revisa la consola para ver errores",
                invalidUrlCustomApi: "Formato de URL inválido para el servidor de API personalizado"
            },
            text: {
                unknownArtist: "Artista desconocido",
                unknownTitle: "Título desconocido"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Muestra los MD grupales en común en los perfiles",
            no: "Sin grupos en común",
            mutualGroup: "{{count}} grupo{{s}} en común",
            members: "Miembros",
            noGroup: "Sin MD grupales en común",
            header: "Grupos en común"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Evita que las vistas previas en llamadas/PiP (pantalla compartida, transmisiones, etc.) se pausen incluso si el cliente pierde el foco",
            about: "Este plugin hará que Discord utilice más recursos de lo habitual"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Silencia automáticamente servidores nuevos y cambia varios ajustes al unirte",
            context: {
                apply: "Aplicar NewGuildSettings a la carpeta"
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
                    mentions: "Solo menciones @",
                    nothing: "Nada",
                    default: "Predeterminado del servidor"
                },
                everyone: {
                    label: "Suprimir @everyone y @here",
                    description: "Suprime las menciones a @everyone y @here"
                },
                role: {
                    label: "Suprimir todas las menciones @ de roles",
                    description: "Suprime todas las menciones @ a roles"
                },
                highlights: {
                    label: "Suprimir destacados",
                    description: "Suprime los destacados automáticamente"
                },
                events: {
                    label: "Silenciar eventos nuevos",
                    description: "Silencia eventos nuevos automáticamente"
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
            description: "Utilidad que te notifica cuando se añaden nuevos plugins a Plexcord",
            modal: {
                title: "Nuevos plugins y ajustes",
                description: "Se han añadido nuevos plugins y ajustes desde tu última visita. Por favor, revisa las adiciones a continuación.",
                tooltip: "Descartar para esta sesión",
                dontShowAgain: "No volver a mostrar esto",
                restartRequired: "Se requiere reiniciar para aplicar los cambios",
                restart: "Reiniciar",
                continue: "Continuar",
                supportUs: "Plexcord es software de código abierto. Si te gusta usarlo, considera apoyarnos",
                supportUsLink: "aquí"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Devuelve la etiqueta del bot a su forma original"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Oculta completamente todos los mensajes bloqueados/ignorados del chat",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Ocultar también usuarios ignorados",
                    description: "También oculta los mensajes de usuarios ignorados."
                },
                disableNotifications: {
                    label: "Desactivar notificaciones",
                    description: "Oculta las notificaciones de nuevos mensajes de usuarios bloqueados. Siempre activo si 'Ocultar usuarios por defecto' está habilitado y el usuario no está exceptuado en 'Anular usuarios'."
                },
                allowAutoModMessages: {
                    label: "Permitir mensajes de AutoMod",
                    description: "Permite que los mensajes enviados por AutoMod eviten el filtrado."
                },
                hideBlockedUserReplies: {
                    label: "Ocultar respuestas de usuarios bloqueados",
                    description: "Oculta mensajes de usuarios bloqueados en hilos si has participado en ellos."
                },
                defaultHideUsers: {
                    label: "Ocultar usuarios por defecto",
                    description: "Si está activado, los mensajes de usuarios bloqueados se ocultarán por completo y los IDs en la lista de anulación se colapsarán (comportamiento normal de Discord). Si está desactivado, se colapsarán los bloqueados y se ocultarán por completo los de la lista de anulación."
                },
                overrideUsers: {
                    label: "Anular usuarios",
                    description: "Lista de IDs de usuario (separados por comas) que se ocultarán o colapsarán en lugar del comportamiento por defecto seleccionado arriba."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Evita que escribas viñetas de markdown (son feas)"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Desactiva la redundante función de enlaces profundos de Discord que intenta forzarte a usar su aplicación de escritorio"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Elimina el requisito de 'escribir el nombre del servidor' al eliminar un servidor",
            option: {
                confirmModal: {
                    label: "Modal de confirmación",
                    description: "¿Debería mostrarse un mensaje de '¿Estás seguro de que quieres eliminar?'"
                }
            },
            modal: {
                title: "¿Eliminar servidor?",
                body: "Es permanente, por si no era obvio.",
                confirm: "Eliminar",
                cancel: "Cancelar"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Desactiva el banner de '¡ALTO AHÍ!' en la consola. Como efecto secundario, evita que Discord oculte tu token, lo que previene cierres de sesión aleatorios."
        },
        noF1: {
            name: "NoF1",
            description: "Desactiva el acceso directo de ayuda con F1."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Al pegar un enlace teniendo texto seleccionado, no se pegará como una URL enmascarada"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Evita que la cámara se muestre en modo espejo en tu pantalla"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Elimina la animación de 300ms al abrir o cerrar ventanas modales"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Elimina el mosaico de imágenes de Discord",
            option: {
                inlineVideo: {
                    label: "Video integrado",
                    description: "Reproduce videos sin el modal de carrusel"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Elimina TODAS las promociones de Nitro de Discord engañando al cliente para que piense que tienes Nitro."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Omite el proceso de bienvenida (onboarding) de Discord para entrar más rápido a los servidores."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Omite el lento y molesto retraso de bienvenida"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Elimina el contador de notificaciones de solicitudes de amistad, mensajes y ofertas de Nitro.",
            option: {
                hideFriendRequestsCount: {
                    label: "Ocultar conteo de solicitudes de amistad",
                    description: "Oculta el número de solicitudes de amistad entrantes"
                },
                hideMessageRequestsCount: {
                    label: "Ocultar conteo de solicitudes de mensaje",
                    description: "Oculta el número de solicitudes de mensaje"
                },
                hidePremiumOffersCount: {
                    label: "Ocultar conteo de ofertas Premium",
                    description: "Oculta el número de ofertas de Nitro"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Elimina por completo los temas de perfil de Nitro de todos excepto de ti mismo."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Omite el requisito de pulsar para hablar en los canales que lo obligan."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Desactiva las menciones al responder por defecto",
            option: {
                userList: {
                    label: "Lista de usuarios",
                    description: "Lista de usuarios para permitir o exceptuar menciones (separados por comas o espacios)"
                },
                roleList: {
                    label: "Lista de roles",
                    description: "Lista de roles para permitir o exceptuar menciones (separados por comas o espacios)"
                },
                shouldPingListed: {
                    label: "Mencionar a los listados",
                    description: "Comportamiento",
                    dontPing: "No mencionar a los usuarios/roles listados",
                    onlyPing: "Solo mencionar a los usuarios/roles listados"
                },
                inverseShiftReply: {
                    label: "Respuesta con Shift inversa",
                    description: "Invierte el comportamiento de Discord al usar Shift para responder (actívalo para que al usar Shift sí se mencione al usuario)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Limpia los prefijos 'canary/ptb' de los enlaces de mensajes"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "¡Todos somos iguales! Elimina los encabezados de roles en la lista de miembros."
        },
        noRPC: {
            name: "NoRPC",
            description: "Desactiva el Rich Presence de Discord"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "No muestra emojis del servidor en el menú de autocompletado.",
            option: {
                shownEmojis: {
                    label: "Emojis mostrados",
                    description: "Elige qué emojis mostrar en el menú de autocompletado",
                    onlyUnicode: "Solo emojis unicode",
                    currentServer: "Emojis unicode y emojis del servidor actual",
                    all: "Emojis unicode y todos los del servidor (por defecto de Discord)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Desactiva el globo de notificaciones no leídas en la barra de tareas y bandeja del sistema."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Hace que las notificaciones de escritorio sean más informativas",
            text: {
                threadInParent: "{{thread}} en {{parent}}"
            }
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Establece un volumen personalizado para las notificaciones de Discord",
            option: {
                notificationVolume: {
                    label: "Volumen de notificación",
                    description: "Volumen de notificación"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Desactiva la animación de escritura en el chat"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Te permite saltar a mensajes de usuarios bloqueados, ignorados o posibles spammers sin tener que desbloquearlos."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Si un usuario envía varios mensajes directos, solo recibirás un aviso sonoro mientras no los leas.",
            option: {
                channelToAffect: {
                    label: "Canal a afectar",
                    description: "Selecciona el tipo de MD que el plugin afectará",
                    both: "Ambos",
                    user: "MD de usuarios",
                    group: "MD grupales"
                },
                allowMentions: {
                    label: "Permitir menciones",
                    description: "Recibir avisos sonoros para menciones @"
                },
                allowEveryone: {
                    label: "Permitir everyone",
                    description: "Recibir avisos sonoros para @everyone y @here en MD grupales"
                },
                ignoreUsers: {
                    label: "Ignorar usuarios",
                    description: "IDs de usuario (coma + espacio) cuyos avisos NUNCA deben limitarse"
                },
                alwaysPlaySound: {
                    label: "Reproducir sonido siempre",
                    description: "Reproduce el sonido de notificación incluso cuando esté desactivado"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Abre los enlaces en sus aplicaciones respectivas en lugar de en tu navegador",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Abre enlaces de Spotify en la app de Spotify"
                },
                steam: {
                    label: "Steam",
                    description: "Abre enlaces de Steam en la app de Steam"
                },
                epic: {
                    label: "Epic Games",
                    description: "Abre enlaces de Epic Games en el lanzador de Epic Games"
                },
                tidal: {
                    label: "Tidal",
                    description: "Abre enlaces de Tidal en la app de Tidal"
                },
                itunes: {
                    label: "iTunes",
                    description: "Abre enlaces de Apple Music en la app de iTunes"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Abre enlaces de VRChat en la app VRCX"
                },
                telegram: {
                    label: "Telegram",
                    description: "Abrir enlaces de Telegram en la aplicación de Telegram"
                }
            },
            notification: {
                open: "Enlace abierto en la aplicación nativa"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Permite anular el diseño o el orden de clasificación por defecto de los foros. Puedes seguir cambiándolo por canal",
            option: {
                defaultLayout: {
                    label: "Etiquetas por defecto",
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
                    label: "Modo fiesta súper intenso",
                    description: "Intensidad de la fiesta",
                    normal: "Normal",
                    better: "Mejor",
                    projectX: "Proyecto X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Recupera la opción de pausar invitaciones indefinidamente que Discord eliminó innecesariamente.",
            pauseIndefinitely: "Pausar indefinidamente"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Desactiva las restricciones del lado del cliente para la gestión de permisos de canales.",
            option: {
                lockout: {
                    label: "Bloqueo",
                    description: "Omitir la prevención de bloqueo de permisos ('Seguro que no quieres hacer esto')"
                },
                onboarding: {
                    label: "Bienvenida",
                    description: "Omitir los requisitos de bienvenida ('Hacer este cambio hará que tu servidor sea incompatible [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Ver los permisos que tiene un usuario o canal, y los roles de un servidor",
            view: "Ver permisos",
            option: {
                permissionsSortOrder: {
                    label: "Orden de clasificación de permisos",
                    description: "El método de ordenación para definir qué rol otorga a un usuario cierto permiso",
                    highest: "Rol más alto",
                    lowest: "Rol más bajo"
                }
            },
            icon: {
                denied: "Denegado",
                allowed: "Permitido",
                notOverwritten: "Sin anular"
            },
            context: {
                permissions: "Permisos"
            },
            modal: {
                title: "Permisos",
                noPermissions: "¡No hay permisos para mostrar!",
                owner: "dueño",
                grantedBy: "Otorgado por",
                serverOwner: "Dueño del servidor",
                ownerRole: "Dueño",
                sortingBy: "Ordenando por {{method}}",
                highest: "Rol más alto",
                lowest: "Rol más bajo",
                details: "Detalles del rol"
            },
            text: {
                roleOptions: "Opciones del rol",
                userOptions: "Opciones del usuario",
                unknownRole: "Rol desconocido",
                unknownUser: "Usuario desconocido"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Añade un comando /petpet para crear GIFs de caricias desde cualquier imagen",
            command: {
                petpet: {
                    description: "Crea un GIF de petpet. Solo puedes especificar una de las opciones de imagen",
                    delay: "El retraso entre cada fotograma. Por defecto es 20.",
                    resolution: "Resolución del GIF. Por defecto es 120. Si pones un número loco y Discord se congela, es tu culpa.",
                    image: "Archivo de imagen adjunto a usar",
                    url: "URL para obtener la imagen",
                    user: "Usuario cuyo avatar se usará como imagen",
                    noServerPfp: "Usar el avatar normal en lugar del específico del servidor al usar la opción 'usuario'",
                    error: {
                        noImage: "¡No se especificó ninguna imagen!",
                        delayTooLow: "El retraso debe ser de al menos 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "El archivo subido no es una imagen",
                fetchUserFailed: "Error al obtener el usuario. Revisa la consola para más información.",
                fetchImageFailed: "Ocurrió un error al cargar {{url}}. Revisa la consola para más información."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Añade el modo Imagen en Imagen (PiP) a los videos (junto al botón de descarga)",
            tooltip: "Alternar Imagen en Imagen",
            option: {
                loop: {
                    label: "Bucle",
                    description: "Indica si el video en PiP debe repetirse o no"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Permite fijar canales privados en la parte superior de tu lista de MD. Para fijar/desfijar o reordenar, haz clic derecho en los MD",
            context: {
                category: {
                    label: "Menú de categorías de MD fijados",
                    edit: "Editar categoría",
                    up: "Subir",
                    down: "Bajar",
                    delete: "Eliminar categoría",
                    unnamed: "uy, problema"
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
                friendsSidebarGroupDms: {
                    label: "MD grupales en la barra lateral de amigos",
                    description: "Muestra los MD grupales fijados en la barra lateral de amigos."
                },
                userBasedCategoryList: {
                    label: "Lista de categorías basada en el usuario",
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
                },
                defaultCategoryName: "Categoría fijada {{number}}"
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Notificaciones personalizables con formato de mención mejorado",
            option: {
                friends: {
                    label: "Amigos",
                    description: "Notificar cuando los amigos envíen mensajes en servidores"
                },
                mentions: {
                    label: "Menciones",
                    description: "Notificar cuando alguien te mencione @ directamente"
                },
                dms: {
                    label: "MD",
                    description: "Notificar para mensajes directos (MD)"
                },
                showInActive: {
                    label: "Mostrar en activo",
                    description: "Mostrar notificaciones incluso para el canal activo actualmente"
                },
                ignoreMuted: {
                    label: "Ignorar silenciados",
                    description: "Omitir notificaciones de servidores, canales o usuarios silenciados"
                }
            },
            unknown: "Desconocido",
            dm: "MD",
            groupDM: "MD grupal",
            title: "{{username}} en {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Añade un ícono de chincheta a los mensajes fijados"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "No muestra los íconos pequeños de los servidores dentro de las carpetas"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Añade indicadores de plataforma (Escritorio, Móvil, Web...) a los usuarios",
            embeddedTooltip: "Integrado (consola o juego)",
            vrTooltip: "RV",
            option: {
                list: {
                    label: "Lista",
                    description: "Mostrar indicadores en los perfiles de usuario"
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
                    description: "Indica si el indicador móvil debe coincidir con el color del estado del usuario."
                },
                showBots: {
                    label: "Mostrar bots",
                    description: "Indica si se deben mostrar indicadores de plataforma en los bots"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Simula en qué plataforma o dispositivo estás",
            about: "No podemos garantizar que este plugin no te cause una advertencia o un baneo. Elegir Xbox/Playstation/VR puede hacer que tu cliente sea una versión desactualizada.",
            platform: {
                desktop: "Cliente de Discord",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Discord Integrado",
                playstation: "Discord Integrado",
                vr: "RV"
            },
            option: {
                platform: {
                    label: "Plataforma",
                    description: "Qué plataforma fingir que usas.",
                    desktop: "Escritorio",
                    web: "Web",
                    android: "Android",
                    ios: "iOS",
                    xbox: "Xbox",
                    playstation: "PlayStation",
                    vr: "RV"
                }
            }
        },
        plexcordToolbox: {
            name: "PlexcordToolbox",
            description: "Añade un botón a la barra de aplicaciones que contiene acciones rápidas de Plexcord",
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
                    label: "Mostrar menú de plugins",
                    description: "Muestra el menú de plugins en la caja de herramientas de Plexcord"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "Ajusta tus mensajes para que se vean mejor y tengan mejor gramática (en inglés principalmente). Ver ajustes",
            option: {
                quickDisable: {
                    label: "Desactivado rápido",
                    description: "Desactivado rápido. Apaga la modificación de mensajes sin requerir recargar el cliente."
                },
                blockedWords: {
                    label: "Palabras bloqueadas",
                    description: "Palabras que no se pondrán en mayúscula (separadas por comas)."
                },
                fixApostrophes: {
                    label: "Corregir apóstrofes",
                    description: "Asegura que las contracciones tengan apóstrofes."
                },
                expandContractions: {
                    label: "Expandir contracciones",
                    description: "Expande las contracciones"
                },
                fixCapitalization: {
                    label: "Corregir mayúsculas",
                    description: "Poner en mayúscula el inicio de las oraciones."
                },
                fixPunctuation: {
                    label: "Corregir puntuación",
                    description: "Corrige el espaciado alrededor de los signos de puntuación."
                },
                fixPunctuationFrequency: {
                    label: "Frecuencia de corrección de puntuación",
                    description: "Porcentaje de frecuencia de puntos (esto molesta mucho a algunas personas).",
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
            description: "Permite guardar y cargar distintos preajustes de perfil.",
            toast: {
                importFailed: "No se pudieron importar los preajustes. Puede que el archivo no sea válido.",
            },
            option: {
                avatarSize: {
                    label: "Tamaño del avatar",
                    description: "Tamaño del avatar en la lista de preajustes"
                }
            },
            modal: {
                override: "Sobrescribir",
                merge: "Fusionar",
                cancel: "Cancelar",
                timestamp: "{{formattedDate}} a las {{formattedTime}}",
                rename: "Renombrar",
                update: "Actualizar",
                moveUp: "Subir",
                moveDown: "Bajar",
                moveTo: "Mover a página 1",
                delete: "Eliminar",
                importProfiles: "Importar perfiles",
                importText: "Tienes {{existingCount}} perfiles existentes en esta sección. ¿Quieres sobrescribirlos o fusionarlos con los perfiles importados?",
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
            },
            text: {
                selectAServer: "Selecciona un servidor",
                profileSets: "Conjuntos de perfil",
                youAreNotIn: "Aún no estás en ningún servidor.",
                mainProfile: "Perfil principal",
                serverProfiles: "Perfiles de servidor",
                openProfileSets: "Abrir conjuntos de perfil"
            }
        },
        questify: {
            name: "Questify",
            description: "Mejora funciones específicas de las Quests, desactiva elementos molestos o elimina las Quests por completo.",
            quests: "Quests",
            context: {
                quest: {
                    label: "Menú del botón de Quests",
                    ignore: "Marcar todas como ignoradas",
                    reset: "Restablecer lista de ignoradas",
                    fetch: "Obtener Quests",
                    markAsIgnored: "Marcar como ignorada",
                    unmarkAsIgnored: "Dejar de ignorar",
                    stopAuto: "Detener autocompletado",
                    startAuto: "Iniciar autocompletado",
                    copyQuestID: "Copiar ID de la Quest",
                    pauseAutoEnrollment: "Pausar inscripción automática",
                    unpauseAutoEnrollment: "Reanudar inscripción automática",
                    pauseAutoProcessing: "Pausar procesamiento automático",
                    unpauseAutoProcessing: "Reanudar procesamiento automático"
                }
            },
            button: {
                completing: "Completando...",
                completingWithTime: "Completando ({{time}})",
                completingIn: "Completando en {{time}}",
                queued: "En cola ({{position}})",
                resuming: "Reanudando...",
                completeNow: "Completar ahora",
                complete: "Completar ({{time}})",
                resume: "Reanudar ({{time}})",
                completed: "Completada"
            },
            reward: {
                orbs: "{{status}} por {{orbQuantity}} Orbes.",
                article: "{{status}} por {{itemName}}.",
                unrecognized: "{{status}} por una recompensa no reconocida."
            },
            toast: {
                autoCompleteBroken: "El autocompletado no funciona. Pronto se publicará una solución.",
                enrollmentFailed: "Error al inscribirse en la Quest {{questName}}.",
                enrollmentInNormalizequestnameQuest: "Falló la inscripción en la misión {{normalizeQuestName_quest}}{{rateLimitSuffix}}.",
                automationUnlocked: "Automatización de Quests desbloqueada.",
                automationLocked: "Automatización de Quests bloqueada."
            },
            notification: {
                completed: {
                    title: "¡Quest completada!",
                    body: "La Quest {{questName}} se ha completado."
                },
                newQuest: {
                    title: "¡Nueva Quest detectada!",
                    body: "La Quest {{questName}} ya está disponible."
                },
                newQuests: {
                    title: "¡Nuevas Quests detectadas!",
                    body: "{{count}} nuevas Quests ya están disponibles."
                },
                newExcludedQuest: {
                    title: "¡Nueva Quest excluida detectada!",
                    body: "Se ha detectado la Quest excluida {{questName}}. ID: {{questId}}"
                },
                newExcludedQuests: {
                    title: "¡Nuevas Quests excluidas detectadas!",
                    body: "Se han detectado {{count}} nuevas Quests excluidas. Consulta la consola para ver sus ID."
                }
            },
            alert: {
                restart: {
                    title: "Se requiere reiniciar",
                    body: "Un cambio que hiciste en los ajustes de Questify requiere un reinicio.",
                    confirm: "Reiniciar",
                    cancel: "Más tarde"
                },
                dangerous: {
                    title: "¿Estás seguro?",
                    confirm: "Continuar",
                    cancel: "Cancelar",
                    disableEverything: "Esto desactivará por completo la funcionalidad de las Quests.",
                    allowDangerous: "Esto permitirá cambiar ajustes peligrosos."
                }
            },
            status: {
                unclaimed: "SIN RECLAMAR",
                claimed: "Reclamada",
                ignored: "Ignorada",
                expired: "Vencida"
            },
            questTypes: {
                watchVideo: "Ver video",
                watchVideoOnMobile: "Ver video en el celular",
                achievementInActivity: "Logro en actividad",
                achievementInGame: "Logro en juego",
                playActivity: "Jugar actividad",
                playOnDesktop: "Jugar en escritorio",
                playOnDesktopV2: "Jugar en escritorio V2",
                streamOnDesktop: "Transmitir en escritorio",
                playOnPlayStation: "Jugar en PlayStation",
                playOnXbox: "Jugar en Xbox"
            },
            settings: {
                questButton: {
                    title: "Botón de Quests",
                    description: "Muestra un botón de Quests en la lista de servidores con un indicador opcional para Quests sin reclamar y no ignoradas.",
                    behavior: "Comportamiento del botón",
                    leftClick: "Acción del clic izquierdo:",
                    middleClick: "Acción del clic central:",
                    rightClick: "Acción del clic derecho:",
                    visibility: "Visibilidad del botón:",
                    visibilityTooltip: "Siempre muestra el botón de Quests mientras esta función esté activada.\n\nSin reclamar solo lo muestra cuando tienes recompensas de Quests relevantes sin reclamar.\n\nNunca oculta el botón de Quests.",
                    unclaimedIndicator: "Indicador de sin reclamar:",
                    unclaimedIndicatorTooltip: "Píldora muestra el marcador de no leído de Discord junto al botón de Quests.\n\nInsignia muestra el número de recompensas de Quests relevantes sin reclamar.\n\nAmbos muestra la píldora y la insignia juntas.\n\nNinguno oculta los indicadores.",
                    badgeColor: "Color de la insignia:",
                    relevancy: "Relevancia de las Quests",
                    includedRewardTypes: "Tipos de recompensa incluidos:",
                    includedRewardTypesTooltip: "Solo cuenta como sin reclamar las Quests con estos tipos de recompensa al determinar la visibilidad del botón, el número de la insignia y el comportamiento de las alertas.",
                    includedQuestTypes: "Tipos de Quest incluidos:",
                    includedQuestTypesTooltip: "Solo cuenta como sin reclamar las Quests con estos tipos de tarea al determinar la visibilidad del botón, el número de la insignia y el comportamiento de las alertas.",
                    display: {
                        always: "Siempre",
                        unclaimed: "Sin reclamar",
                        never: "Nunca"
                    },
                    indicator: {
                        pill: "Píldora",
                        badge: "Insignia",
                        both: "Ambos",
                        none: "Ninguno"
                    },
                    action: {
                        openQuests: "Abrir Quests",
                        contextMenu: "Menú contextual",
                        pluginSettings: "Ajustes del plugin",
                        nothing: "Nada"
                    },
                    rewardTypes: {
                        orbs: "Orbes",
                        nitroCodes: "Códigos de Nitro",
                        rewardCodes: "Códigos de recompensa",
                        inGameItems: "Objetos del juego",
                        profileCollectibles: "Coleccionables de perfil"
                    }
                },
                questFeatures: {
                    title: "Funciones de las Quests",
                    description: "Modifica el comportamiento de las Quests para mejorar o eliminar funcionalidades.",
                    disableFeatures: "Desactivar funciones",
                    disableEverything: "Desactivar por completo la funcionalidad de las Quests:",
                    disableEverythingTooltip: "Esto desactivará todas las mejoras del plugin, ocultará la página de Quests y los elementos de Quests en todo Discord, e impedirá que Discord obtenga datos de Quests. Esto no afectará a la tienda, ya que los Orbes están demasiado ligados a ella como moneda secundaria.",
                    disableSpecific: "Desactivar funciones específicas:",
                    disableSpecificTooltip: "El banner patrocinado es un banner de Quest de pago en la parte superior de la página de Quests.\n\nLos avisos de traslado son indicadores, como en la página Descubrir, de que las Quests se han trasladado a los MD.\n\nLa promoción de la lista de amigos es una tarjeta que aparece en la sección \"Activo ahora\" de tu lista de amigos mientras un usuario con quien compartes un servidor juega a un juego con una Quest activa.\n\nLa promoción de la lista de miembros es un icono que aparece en los miembros de la lista de un servidor mientras juegan a un juego con una Quest activa.\n\nLa promoción del panel de cuenta es una promoción de Quest de pago que aparece encima de tu panel de cuenta.\n\nEl progreso del panel de cuenta es el progreso de la Quest activa o completada que se muestra encima de tu panel de cuenta.\n\nLas insignias de Quests y Orbes son insignias en los perfiles para quien ha completado al menos una Quest o ha comprado la insignia de Orbes, respectivamente.",
                    disableOptions: {
                        sponsoredBanner: "Banner patrocinado",
                        relocationNotices: "Avisos de traslado",
                        friendsListPromo: "Promoción de la lista de amigos",
                        membersListPromo: "Promoción de la lista de miembros",
                        accountPanelPromo: "Promoción del panel de cuenta",
                        accountPanelProgress: "Progreso del panel de cuenta",
                        orbsAndQuestsBadges: "Insignias de Quests y Orbes"
                    },
                    modifyFeatures: "Modificar funciones",
                    warningTos: "Discord ha empezado a advertir a los usuarios de scripts o plugins que modifican cómo se completan las Quests, lo cual va en contra de sus {{tos}}.",
                    tos: "Condiciones del servicio",
                    warningEscalate: "Las advertencias parecen limitarse a la amenaza de perder el acceso a las Quests o sus recompensas, pero Discord puede endurecerlas en cualquier momento.",
                    warningDetection: "Debido a los diversos métodos que usa Discord para rastrear a los usuarios, no hay forma realista de evitar la detección. Si continúas, ten en cuenta que Discord probablemente lo detectará en algún momento.",
                    warningRisk: "Usa el siguiente interruptor para acceder a ajustes potencialmente peligrosos bajo tu propia responsabilidad.",
                    allowDangerous: "Permitir cambiar ajustes peligrosos...",
                    disallowDangerous: "Restablecer y no permitir cambiar ajustes peligrosos...",
                    completeVideoQuicker: "Acelerar el autocompletado de Quests de video:",
                    completeVideoQuickerTooltip: "Discord permite completar las Quests de video cuando ha pasado, desde la inscripción, la duración del video menos 24 segundos.\n\nEsto significa que si una Quest de video dura 24 segundos o menos, o si te inscribes y vuelves más tarde para completarla, puede completarse de inmediato.\n\nEste ajuste solo se aplica al autocompletado de Quests de video y depende del ajuste de autocompletado de abajo. Completarlas manualmente seguirá requiriendo esperar la duración completa y no depende del momento de inscripción.",
                    mobileDesktop: "Hacer que algunas Quests de video solo para celular se puedan completar en escritorio:",
                    mobileDesktopTooltip: "Algunas Quests de video solo para celular permiten inscribirse desde escritorio, pero aun así deben completarse en el celular. Este ajuste permite completarlas en escritorio.\n\nAlgunas Quests de video solo para celular solo permiten inscribirse desde el celular. Para que este ajuste les afecte, debes inscribirte en ellas desde tu celular antes de volver al escritorio y actualizar tus Quests.\n\nEste ajuste, activado por sí solo, se aplica únicamente al completado manual de Quests de video. El autocompletado de Quests de video celulares desde escritorio depende del ajuste de autocompletado de abajo y activará también este ajuste implícitamente.",
                    simultaneous: "Autocompletar Quests simultáneamente en lugar de secuencialmente:",
                    simultaneousTooltip: "Por defecto, al intentar autocompletar varias Quests se ponen en cola para completarse en orden.\n\nEste ajuste permite, en cambio, que todas las Quests de autocompletado se ejecuten al mismo tiempo.\n\nEste ajuste solo se aplica al autocompletado de Quests y depende del ajuste de autocompletado de abajo.",
                    resumeInterrupted: "Reanudar autocompletados interrumpidos tras recargar o reiniciar:",
                    resumeInterruptedTooltip: "Este ajuste reanudará automáticamente cualquier autocompletado interrumpido por recargas o reinicios, incluido volver a poner en cola las Quests que estaban en cola pero aún no habían empezado.",
                    autoProcess: "Procesar automáticamente las Quests compatibles para autocompletarlas:",
                    autoProcessTooltip: "Completa las Quests elegibles, sin reclamar, no ignoradas y no caducadas incluidas en tus filtros de recompensa y tipo de Quest que se detecten mientras Discord está en ejecución. Solo se incluyen los tipos de tarea compatibles activados abajo.\n\nSe inscribe automáticamente en las Quests compatibles antes de ponerlas en cola para autocompletarlas. Espera los tiempos de espera conocidos por límite de frecuencia. Se detiene ante errores desconocidos, límites de frecuencia sin tiempo de reintento o fallos de inscripción repetidos.",
                    autoEnroll: "Inscribirse automáticamente en las Quests compatibles.",
                    autoEnrollTooltip: "Se inscribe en las Quests elegibles, sin reclamar, no ignoradas y no caducadas incluidas en tus filtros de recompensa y tipo de Quest que se detecten mientras Discord está en ejecución.\n\nSe inscribe en las Quests sin ponerlas en cola para autocompletarlas. Espera los tiempos de espera conocidos por límite de frecuencia. Se detiene ante errores desconocidos, límites de frecuencia sin tiempo de reintento o fallos de inscripción repetidos.",
                    autoCompleteTypes: "Autocompletar tipos de Quest específicos:",
                    autoCompleteTypesTooltip: "Las Quests de \"Ver video en el celular\" solo funcionan con Quests celulares en las que se puede inscribir desde escritorio. Si la inscripción está limitada al celular, primero debes inscribirte desde tu celular antes de volver al escritorio y actualizar tus Quests.\n\nTodas las Quests de video suelen enviar un stack trace con los informes de progreso. Así Discord sabe exactamente qué funciones se llamaron y puede verificar que sus propias funciones iniciaron el progreso. Questify borra este stack trace, pero su ausencia será tan reveladora como su presencia.\n\nLas Quests de \"Jugar en escritorio\", \"Jugar en PlayStation\", \"Jugar en Xbox\", \"Jugar actividad\" y \"Logro en actividad\" solo están disponibles en clientes de escritorio oficiales debido a una limitación impuesta por Discord. Los clientes de terceros como extensiones web, Plextron y otros no admiten su autocompletado.\n\nTodas las Quests de juegos suelen enviar una huella del juego con los informes de heartbeat. Así Discord puede usar datos de decenas de miles de usuarios para determinar si otros usuarios probablemente usan un juego real o emulan el ejecutable. No hay un método razonable para falsificar este valor, por lo que Questify lo deja en blanco, pero su ausencia será tan reveladora como una mala falsificación.\n\nEl autocompletado empieza desde los botones de Quest en la página de Quests o mediante el procesamiento automático. Las Quests se completan en el orden en que se pusieron en cola, salvo que esté activado arriba el completado simultáneo.\n\nAutocompletar Quests es el ajuste peligroso más arriesgado. Actívalo bajo tu propia responsabilidad."
                },
                questNotifications: {
                    title: "Notificaciones de Quests",
                    description: "Configura las notificaciones y alertas de Quests completadas y de nuevas Quests detectadas.",
                    questCompleted: "Quest completada",
                    notifyOnComplete: "Mostrar una notificación al completar una Quest:",
                    soundOnComplete: "Reproducir un sonido al completar una Quest:",
                    volume: "Volumen:",
                    newQuests: "Nuevas Quests detectadas",
                    notifyOnNew: "Mostrar una notificación al detectar nuevas Quests:",
                    soundOnNew: "Reproducir un sonido al detectar nuevas Quests:",
                    notifyOnNewExcluded: "Mostrar una notificación al detectar nuevas Quests excluidas:",
                    notifyOnNewExcludedTooltip: "Algunas Quests se excluyen de tu lista de Quests disponibles por restricciones de región o plataforma.\n\nSi se activa, Questify obtendrá sus configuraciones, aplicará tus filtros de tipos de Quest y recompensa, mostrará en la consola los datos de las Quests excluidas y mostrará una notificación aparte para las Quests excluidas que coincidan.",
                    soundOnNewExcluded: "Reproducir un sonido al detectar nuevas Quests excluidas:",
                    soundOnNewExcludedTooltip: "Algunas Quests se excluyen de tu lista de Quests disponibles por restricciones de región o plataforma.\n\nCuando se selecciona un sonido, Questify obtendrá sus configuraciones, aplicará tus filtros de tipos de Quest y recompensa, mostrará en la consola los datos de las Quests excluidas y reproducirá este sonido para las Quests excluidas que coincidan.",
                    fetchInterval: "Intervalo de obtención de Quests:",
                    fetchIntervalTooltip: "Discord solo obtiene las Quests al cargar y cuando visitas la página de Quests.\n\nEste intervalo obtiene las Quests periódicamente mientras el cliente siga abierto, para que los indicadores del botón de Quests y las alertas de nuevas Quests se mantengan actualizados durante el día.\n\nSolo se ejecuta si está activado y si los ajustes del botón o de las notificaciones de Quests están configurados de forma que la obtención periódica tenga sentido.",
                    disabled: "DESACTIVADO",
                    preview: "Escuchar {{sound}}",
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
                    title: "Tarjetas de Quests",
                    description: "Resalta las Quests con colores de tema opcionales para mayor visibilidad.",
                    behavior: "Comportamiento de las tarjetas",
                    gradientStyle: "Estilo del degradado:",
                    gradientStyleTooltip: "Intenso y Predeterminado usan el color de tarjeta seleccionado en el degradado de la imagen.\n\nNegro sutil mantiene un degradado neutro más oscuro para el contraste.\n\nSin degradado elimina el degradado de la imagen, lo que puede dificultar la lectura de algunas ilustraciones.",
                    assetPreload: "Precarga de recursos:",
                    assetPreloadTooltip: "Cargar todos los recursos al abrir la página de Quests reduce los saltos de diseño al desplazarse.\n\nCargar durante el desplazamiento se parece más al comportamiento predeterminado de Discord y puede requerir menos trabajo al principio.",
                    colors: "Colores de las tarjetas",
                    enable: "Activar",
                    disable: "Desactivar",
                    gradient: {
                        intense: "Degradado de reestilo intenso",
                        default: "Degradado de reestilo predeterminado",
                        black: "Degradado negro sutil",
                        hide: "Sin degradado"
                    },
                    preload: {
                        onLoad: "Cargar todos los recursos al cargar la página",
                        onScroll: "Cargar los recursos al desplazarse"
                    }
                },
                reorderQuests: {
                    title: "Reordenar Quests",
                    description: "Ordenar las misiones por estado cuando se elige la ordenación de Questify en la página de misiones. Los estados ocultos se filtran con cualquier orden.",
                    statusOrder: "Orden de estados",
                    statusOrderTooltip: "Cada estado solo puede aparecer una vez. Seleccionar un estado ya usado en otra posición intercambia ambas posiciones.",
                    positions: {
                        first: "Primero:",
                        second: "Segundo:",
                        third: "Tercero:",
                        fourth: "Cuarto:"
                    },
                    subsorts: "Suborden",
                    unclaimedSubsort: "Suborden de sin reclamar:",
                    unclaimedSubsortTooltip: "Las Quests completadas pero sin reclamar quedan debajo de las incompletas sin reclamar, y luego se aplica este suborden dentro de esos grupos.",
                    claimedSubsort: "Suborden de reclamadas:",
                    claimedSubsortTooltip: "Las Quests reclamadas pueden ordenarse por fecha de reclamación o por cuándo se añadió la Quest.",
                    ignoredSubsort: "Suborden de ignoradas:",
                    ignoredSubsortTooltip: "Las Quests ignoradas mantienen la posición de su grupo y este suborden controla su orden dentro de él.",
                    expiredSubsort: "Suborden de vencidas:",
                    expiredSubsortTooltip: "Las Quests vencidas pueden ordenarse por fecha de vencimiento o por cuándo se añadió la Quest.",
                    subsort: {
                        addedNewest: "Añadidas (más recientes)",
                        addedOldest: "Añadidas (más antiguas)",
                        expiringSoonest: "Vencen (antes)",
                        expiringLatest: "Vencen (después)",
                        expiredMostRecent: "Vencidas (más recientes)",
                        expiredLeastRecent: "Vencidas (más antiguas)",
                        claimedMostRecent: "Reclamadas (más recientes)",
                        claimedLeastRecent: "Reclamadas (más antiguas)"
                    },
                    memory: "Memoria de la página de Quests",
                    rememberSort: "Recordar el orden seleccionado en la página de Quests:",
                    rememberSortTooltip: "Si se desactiva, la página de Quests se abrirá siempre con la opción de orden de Questify.",
                    rememberFilters: "Recordar los filtros seleccionados en la página de Quests:",
                    rememberFiltersTooltip: "Si se desactiva, la página de Quests se abrirá siempre sin filtros de tarea o recompensa."
                }
            },
            option: {
                migrationVersion: {
                    label: "Versión de migración",
                    description: "La versión de migración actual de los ajustes."
                },
                questFeatures: {
                    label: "Funciones de las Quests",
                    description: "Selecciona qué funciones de las Quests desactivar."
                },
                disableQuestsEverything: {
                    label: "Desactivar todo",
                    description: "Desactiva todas las funciones de las Quests."
                },
                disableRelocationNotices: {
                    label: "Desactivar avisos de traslado",
                    description: "Desactiva los avisos de traslado de Quests en la página Descubrir."
                },
                disableSponsoredBanner: {
                    label: "Desactivar banner patrocinado",
                    description: "Desactiva el banner patrocinado en la página de Quests."
                },
                disableAccountPanelPromo: {
                    label: "Desactivar promoción del panel de cuenta",
                    description: "Desactiva la ventana de Quest promocionada encima de tu panel de cuenta."
                },
                disableAccountPanelQuestProgress: {
                    label: "Desactivar progreso del panel de cuenta",
                    description: "Desactiva el progreso de Quests activas y completadas encima de tu panel de cuenta."
                },
                disableOrbsAndQuestsBadges: {
                    label: "Desactivar insignias de Quests y Orbes",
                    description: "Desactiva la insignia de Quests en los perfiles."
                },
                disableFriendsListPromo: {
                    label: "Desactivar promoción de la lista de amigos",
                    description: "Desactiva la promoción de Quests para juegos a los que juegan tus amigos."
                },
                disableMembersListPromo: {
                    label: "Desactivar promoción de la lista de miembros",
                    description: "Desactiva el icono de jugando activamente en la lista de miembros."
                },
                allowChangingDangerousSettings: {
                    label: "Permitir ajustes peligrosos",
                    description: "Permite cambiar ajustes peligrosos."
                },
                resumeInterruptedQuests: {
                    label: "Reanudar Quests interrumpidas",
                    description: "Reanuda el autocompletado de Quests tras recargar o reiniciar."
                },
                makeMobileVideoQuestsDesktopCompatible: {
                    label: "Hacer compatibles las Quests de video celulares",
                    description: "Hace que las Quests de video solo para celular sean compatibles con escritorio."
                },
                autoCompleteQuestsSimultaneously: {
                    label: "Autocompletar simultáneamente",
                    description: "Completa las Quests simultáneamente en lugar de secuencialmente."
                },
                completeVideoQuestsQuicker: {
                    label: "Completar Quests de video más rápido",
                    description: "Usa el margen de progreso de Discord y el tiempo transcurrido desde la inscripción para autocompletar Quests de video."
                },
                autoCompleteQuestTypes: {
                    label: "Tipos de Quest a autocompletar",
                    description: "Qué tipos de Quests autocompletar en segundo plano."
                },
                questButton: {
                    label: "Botón de Quests",
                    description: "Personaliza el botón de Quests en la lista de servidores."
                },
                questButtonDisplay: {
                    label: "Visualización del botón de Quests",
                    description: "Qué tipo de visualización usar para el botón de Quests en la lista de servidores."
                },
                questButtonIncludedTypes: {
                    label: "Tipos incluidos en el botón de Quests",
                    description: "Qué tipos de recompensa y de Quest incluir al mostrar el recuento en el botón de Quests."
                },
                questButtonIndicator: {
                    label: "Indicador del botón de Quests",
                    description: "Qué tipo de visualización usar para el indicador de sin reclamar en el botón de Quests."
                },
                questButtonBadgeCount: {
                    label: "Número de la insignia",
                    description: "El número actual de Quests relevantes sin reclamar."
                },
                questButtonBadgeColor: {
                    label: "Color de la insignia",
                    description: "El color de la insignia del botón de Quests en la lista de servidores."
                },
                questButtonLeftClickAction: {
                    label: "Acción del clic izquierdo",
                    description: "La acción al hacer clic izquierdo en el botón de Quests."
                },
                questButtonMiddleClickAction: {
                    label: "Acción del clic central",
                    description: "La acción al hacer clic central en el botón de Quests."
                },
                questButtonRightClickAction: {
                    label: "Acción del clic derecho",
                    description: "La acción al hacer clic derecho en el botón de Quests."
                },
                questNotifications: {
                    label: "Notificaciones de Quests",
                    description: "Configura las notificaciones de Quests completadas y de nuevas Quests detectadas."
                },
                notifyOnQuestComplete: {
                    label: "Notificar al completar",
                    description: "Muestra una notificación al completar una Quest."
                },
                notifyOnNewQuests: {
                    label: "Notificar nuevas Quests",
                    description: "Muestra una notificación al detectar nuevas Quests."
                },
                notifyOnNewExcludedQuests: {
                    label: "Notificar nuevas Quests excluidas",
                    description: "Muestra una notificación al detectar nuevas Quests excluidas."
                },
                questCompletedAlertSound: {
                    label: "Sonido de Quest completada",
                    description: "El sonido que se reproduce al completar una Quest."
                },
                questCompletedAlertVolume: {
                    label: "Volumen de Quest completada",
                    description: "El volumen del sonido de Quest completada."
                },
                questFetchInterval: {
                    label: "Intervalo de obtención",
                    description: "El intervalo en segundos para obtener Quests de Discord."
                },
                newQuestAlertSound: {
                    label: "Sonido de nueva Quest",
                    description: "El sonido que se reproduce al detectar nuevas Quests."
                },
                newQuestAlertVolume: {
                    label: "Volumen de nueva Quest",
                    description: "El volumen del sonido de nueva Quest."
                },
                newExcludedQuestAlertSound: {
                    label: "Sonido de nueva Quest excluida",
                    description: "El sonido que se reproduce al detectar nuevas Quests excluidas."
                },
                newExcludedQuestAlertVolume: {
                    label: "Volumen de nueva Quest excluida",
                    description: "El volumen del sonido de nueva Quest excluida."
                },
                questTiles: {
                    label: "Tarjetas de Quests",
                    description: "Personaliza la apariencia de las tarjetas de Quests en la página de Quests."
                },
                questTileUnclaimedColor: {
                    label: "Color de tarjetas sin reclamar",
                    description: "El color de las tarjetas de Quests sin reclamar."
                },
                questTileClaimedColor: {
                    label: "Color de tarjetas reclamadas",
                    description: "El color de las tarjetas de Quests reclamadas."
                },
                questTileIgnoredColor: {
                    label: "Color de tarjetas ignoradas",
                    description: "El color de las tarjetas de Quests ignoradas."
                },
                questTileExpiredColor: {
                    label: "Color de tarjetas vencidas",
                    description: "El color de las tarjetas de Quests vencidas."
                },
                questTileGradient: {
                    label: "Degradado de las tarjetas",
                    description: "Estilo del degradado usado en las tarjetas de Quests."
                },
                questTilePreload: {
                    label: "Precarga de las tarjetas",
                    description: "Intenta precargar los recursos de las tarjetas de Quests."
                },
                reorderQuests: {
                    label: "Reordenar Quests",
                    description: "Ordena las Quests por su estado."
                },
                questOrder: {
                    label: "Orden de Quests",
                    description: "Orden de los grupos de estado de las Quests."
                },
                unclaimedSubsort: {
                    label: "Suborden de sin reclamar",
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
                    label: "Suborden de vencidas",
                    description: "Método de suborden para Quests vencidas."
                },
                isOnQuestsPage: {
                    label: "En la página de Quests",
                    description: "Si el usuario está actualmente en la página de Quests."
                },
                rememberQuestPageSort: {
                    label: "Recordar orden",
                    description: "Recuerda el último orden usado en la página de Quests."
                },
                rememberQuestPageFilters: {
                    label: "Recordar filtros",
                    description: "Recuerda los últimos filtros usados en la página de Quests."
                },
                lastQuestPageSort: {
                    label: "Último orden",
                    description: "El último orden usado en la página de Quests."
                },
                lastQuestPageFilters: {
                    label: "Últimos filtros",
                    description: "Los últimos filtros usados en la página de Quests."
                },
                ignoredQuestIDs: {
                    label: "ID de Quests ignoradas",
                    description: "Una lista de ID de Quests ignoradas."
                },
                resumeQuestIDs: {
                    label: "ID de Quests a reanudar",
                    description: "Una lista de ID de Quests que se están autocompletando o están en cola en segundo plano."
                },
                acknowledgedNotices: {
                    description: "Avisos únicos que el usuario ha confirmado.",
                    label: "Avisos confirmados"
                },
                settingsSearch: {
                    description: "Buscar en los ajustes de Questify.",
                    label: "Búsqueda de ajustes"
                },
                hideNonAutoCompletableQuests: {
                    description: "Ocultar misiones incompletas sin una tarea de autocompletado compatible y activada.",
                    label: "Ocultar misiones no autocompletables"
                },
                preventVideoQuestsPausing: {
                    description: "Evitar que el vídeo se pause cuando la ventana de la misión pierde el foco.",
                    label: "Evitar pausa en misiones de vídeo"
                },
                hiddenQuestStatuses: {
                    description: "Grupos de estado de misiones que se ocultarán.",
                    label: "Estados de misión ocultos"
                },
                autoEnrollQuests: {
                    label: "Inscribirse en Quests automáticamente",
                    description: "Inscríbete automáticamente en las Quests disponibles elegibles al obtenerlas correctamente mientras Discord está en ejecución."
                },
                autoCompleteQuests: {
                    label: "Completar Quests automáticamente",
                    description: "Inscríbete y completa automáticamente las Quests disponibles elegibles con tipos de tarea compatibles y activados al obtenerlas correctamente mientras Discord está en ejecución."
                }
            },
            text: {
                clearQuestQueue: "Vaciar cola de misiones",
                hideIncompleteQuestsWith: "Ocultar misiones incompletas con estado sin reclamar o ignorado cuando ninguna tarea de autocompletado sea compatible con esta plataforma y esté activada en el desplegable de tipos de misión. Las misiones reclamadas, caducadas y completadas están exentas. Usa las opciones de orden de estado ocultas para ocultarlas.",
                discordForcesYouTo: "Discord te obliga a tener el cliente en primer plano para que las misiones de vídeo reproduzcan su vídeo.",
                hideNonAutoCompletable: "Ocultar misiones no autocompletables:",
                preventVideoQuestsFrom: "Evitar que las misiones de vídeo se pausen al perder el foco:",
                thePunishmentAlsoConsists: "La sanción también incluye una infracción en el estado de la cuenta que dura 2 años por infracción.",
                dueToTheVarious: "Debido a los diversos métodos que usa Discord para rastrear a los usuarios, no hay forma realista de evitar la detección. Si continúas, entiende que Discord probablemente detectará tu uso en algún momento.",
                enrollInQuest: "Inscribirse en la misión",
                hidden: "Oculto",
                selectingAnOccupiedPosition: "Al seleccionar una posición ocupada se intercambian los dos estados. Los estados ocultos se quitan de las listas de misiones.",
                searchQuestifySettings: "Buscar en los ajustes de Questify",
                searchQuestifySettings2: "Buscar en los ajustes de Questify...",
                noMatchingSettings: "No hay ajustes que coincidan.",
                questifyNoticeAugust7th: "Aviso de Questify: 7 de agosto de 2026",
                keepUsingDangerousQuestify: "Seguir usando ajustes peligrosos de Questify",
                disableDangerousQuestifySettings: "Desactivar ajustes peligrosos de Questify",
                questifyNoticeAugust26th: "Aviso de Questify: 26 de agosto de 2026",
                areYouSure: "¿Estás seguro?",
                thePunishmentAppearsLimited: "La sanción parece limitarse a perder el acceso a las misiones y sus recompensas, pero Discord podría endurecerla en cualquier momento.",
                queueAllQuests: "Poner todas las misiones en cola",
                inProgress: "En curso",
                rateLimited: "Limitado",
                preventsVideoPausing: "Esta configuración evita que el video se pause y permite que el progreso avance con normalidad.",
                appliesOnlyToVideoQuests: "Esta configuración solo se aplica al completar manualmente misiones de video.",
                knownToPunish: "Se sabe que Discord sanciona a los usuarios de scripts o plugins que modifican la finalización de las misiones. Modificar la finalización de las misiones va en contra de los",
                punishmentConsists: "La sanción consiste en la pérdida temporal o permanente del acceso a las misiones y sus recompensas.",
                questBanSystem: "Discord ha implementado un sistema de bloqueo de misiones que limitará temporal o permanentemente tu acceso a completar misiones y reclamar sus recompensas si detecta que las completas por medios no oficiales. Modificar la finalización de las misiones va en contra de sus",
                begunPunishing: "Discord ha empezado a sancionar a los usuarios de scripts y plugins que modifican la finalización de las misiones. Modificar la finalización de las misiones va en contra de sus",
                dueToRateLimits: " por límites de frecuencia"
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Reemplaza todos los signos de interrogación con una cadena elegida, si el mensaje solo contiene signos de interrogación.",
            option: {
                replace: {
                    label: "Reemplazar",
                    description: "Reemplazar con"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Añade un botón de mención rápida a la barra de acciones del mensaje",
            tooltip: "Mención rápida"
        },
        quickReply: {
            name: "QuickReply",
            description: "Responde (Ctrl+Arriba/Abajo) y edita (Ctrl+Shift+Arriba/Abajo) mensajes mediante combinaciones de teclas",
            option: {
                shouldMention: {
                    label: "Mencionar",
                    description: "Mencionar al responder por defecto",
                    noReplyMentionPlugin: "Seguir el plugin NoReplyMention (si está activo)",
                    enabled: "Activado",
                    disabled: "Desactivado"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignorar bloqueados e ignorados",
                    description: "Ignorar mensajes de usuarios bloqueados/ignorados al navegar"
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
                added: "Se añadió {{count}} tema{{s}}",
                removed: "Se quitó {{count}} tema{{s}}",
                reloaded: "Se recargaron {{themeCount}} temas",
                addedLocal: "Se añadió {{count}} tema{{s}} local{{es}}",
                removedLocal: "Se quitó {{count}} tema{{s}} local{{es}}",
            },
            option: {
                includeLocal: {
                    label: "Incluir locales",
                    description: "Incluir temas locales"
                },
                includeOnline: {
                    label: "Incluir en línea",
                    description: "Incluir temas en línea"
                },
                sortOrder: {
                    label: "Orden de clasificación",
                    description: "Método de clasificación",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "Recientes"
                },
                autoRefresh: {
                    label: "Actualización automática",
                    description: "Actualizar automáticamente la lista de temas cuando se detecten cambios"
                },
                showNotifications: {
                    label: "Mostrar notificaciones",
                    description: "Mostrar notificaciones cuando se añadan o quiten temas"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Añade la capacidad de crear una imagen de cita inspiradora a partir de un mensaje",
            context: {
                quote: "Citar"
            },
            modal: {
                title: "Atrápalos en 4k",
                grayscale: "Escala de grises",
                export: "Exportar",
                send: "Enviar",
                saveAsGIF: "Guardar como GIF",
                saveDescription: "Guarda o envía la imagen como un GIF en lugar de un PNG",
                showWatermark: "Mostrar marca de agua",
                watermarkText: "Texto de la marca de agua (máx. 32 caracteres)"
            },
            option: {
                quoteFont: {
                    label: "Fuente de la cita",
                    description: "Fuente para el texto de la cita (el autor/nombre de usuario siempre usan M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Open Sans",
                    momoSignature: "Momo Signature",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Marca de agua",
                    description: "Texto de marca de agua personalizado (máx. 32 caracteres)"
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
            },
            text: {
                quotePreview: "Vista previa de la cita"
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Añade un botón cerca del botón de Silenciar para unirte a una llamada de voz aleatoria.",
            tooltip: "Voz aleatoria",
            context: {
                label: "Modificador de estado de voz",
                amountLabel: "CANTIDAD DE USUARIOS",
                spacesLabel: "ESPACIOS DISPONIBLES",
                voiceLabel: "LÍMITE DE VOZ",
                selfLabel: "AJUSTES PROPIOS",
                select: {
                    servers: "Seleccionar servidores",
                    list: "Seleccionar lista",
                    filters: "Seleccionar filtros",
                    amount: "Cantidad de usuarios",
                    userAmount: "{{amount}} usuario{{s}}",
                    parameters: "Parámetros",
                    selectAll: "Seleccionar todo",
                    reset: "Restablecer",
                    stateFilters: "Filtros de estado",
                    moreThan: "Más de",
                    lessThan: "Menos de",
                    equalTo: "Igual a",
                    spaces: "Espacios disponibles",
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
                    joinSettings: "Configuración de unión",
                    auto: {
                        mute: "Silenciado automático",
                        deafen: "Ensordecido automático",
                        camera: "Cámara automática",
                        stream: "Transmisión automática",
                        leaveWhenEmpty: "Salir si está vacío",
                        navigate: "Navegación automática",
                        stage: "Evitar Escenarios (Stage)",
                        afk: "Evitar AFK"
                    }
                },
                invalid: {
                    server: "Servidor inválido"
                }
            },
            keybind: {
                label: "Atajo de teclado",
                recording: "Grabando...",
                reset: "Restablecer"
            },
            option: {
                keybindEnabled: {
                    label: "Atajo habilitado",
                    description: "Muestra los controles del atajo de voz aleatoria"
                },
                userAmountOperation: {
                    label: "Operación de cantidad de usuarios",
                    description: "Selecciona una operación para la cantidad de usuarios"
                },
                userAmount: {
                    label: "Cantidad de usuarios",
                    description: "Selecciona la cantidad de usuarios"
                },
                spacesLeftOperation: {
                    label: "Operación de espacios disponibles",
                    description: "Selecciona una operación para la cantidad máxima de usuarios"
                },
                spacesLeft: {
                    label: "Espacios disponibles",
                    description: "Selecciona la cantidad de usuarios máximos"
                },
                vcLimitOperation: {
                    label: "Operación de límite de canal de voz",
                    description: "Selecciona una operación para el canal de voz."
                },
                vcLimit: {
                    label: "Límite de canal de voz",
                    description: "Selecciona un límite de canal de voz"
                },
                servers: {
                    label: "Servidores",
                    description: "Servidores que están incluidos"
                },
                autoNavigate: {
                    label: "Navegación automática",
                    description: "Navega automáticamente al canal de voz."
                },
                autoCamera: {
                    label: "Cámara automática",
                    description: "Enciende automáticamente la cámara"
                },
                autoStream: {
                    label: "Transmisión automática",
                    description: "Inicia automáticamente la transmisión"
                },
                selfMute: {
                    label: "Silenciado automático",
                    description: "Silencia automáticamente tu micrófono al unirte a un canal de voz."
                },
                selfDeafen: {
                    label: "Ensordecido automático",
                    description: "Ensordece automáticamente tu audio al unirte a un canal de voz."
                },
                leaveEmpty: {
                    label: "Salir si está vacío",
                    description: "Busca una llamada aleatoria cuando el chat de voz está vacío."
                },
                prioritizeFriends: {
                    label: "Priorizar amigos",
                    description: "Preferir canales con tus amigos en ellos cuando sea posible."
                },
                avoidStages: {
                    label: "Evitar Escenarios (Stage)",
                    description: "Evita unirse a canales de voz de tipo Escenario."
                },
                avoidAfk: {
                    label: "Evitar AFK",
                    description: "Evita unirse a canales de voz AFK."
                },
                video: {
                    label: "Video",
                    description: "Busca usuarios con su video encendido"
                },
                stream: {
                    label: "Transmisión",
                    description: "Busca usuarios que estén transmitiendo"
                },
                mute: {
                    label: "Silenciar",
                    description: "Busca usuarios que estén silenciados"
                },
                deafen: {
                    label: "Ensordecer",
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
                failed: "¡No se pudo encontrar un canal de voz!"
            },
            toast: {
                failedToFindA: "No se encontró ningún canal de voz.",
                voiceChannelIsUnavailable: "El canal de voz no está disponible."
            },
            text: {
                userCount: "{{count}} usuario",
                usersCount: "{{count}} usuarios"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Decodifica los códigos de error de React en mensajes legibles para humanos."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "¡Marca todas las notificaciones del servidor como leídas con un solo clic!",
            button: "Leer todo"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Cambia entre los MD más recientes con Ctrl+Tab (Ctrl+Shift+Tab para orden inverso)",
            option: {
                visualStyle: {
                    label: "Estilo visual",
                    description: "Estilo del indicador visual mientras se cicla",
                    overlay: "Superposición (estilo Alt+Tab)",
                    toast: "Aviso flotante (mensaje de estado)",
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
                    description: "Número de usuarios a mostrar en la superposición"
                },
                overlayRowLength: {
                    label: "Longitud de fila en superposición",
                    description: "Número de MD recientes a mostrar en la fila"
                },
                overlayShowAvatars: {
                    label: "Mostrar avatares en superposición",
                    description: "Muestra los avatares de usuario en la superposición"
                },
                toastDurationMs: {
                    label: "Duración del aviso (ms)",
                    description: "Duración del mensaje de estado"
                },
                clearRdms: {
                    label: "Limpiar lista de RDMS",
                    description: "Utilidad de prueba: Limpia la lista de RDMs",
                    toast: "Historial de RDMS borrado",
                    button: "Limpiar historial de RDMs"
                }
            },
            modal: {
                unknown: "Desconocido",
                dm: "MD",
                group: "MD grupal",
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
                    description: "También muestra un aviso en la parte superior de la pantalla al ser eliminado (úsalo si no quieres perder ninguna notificación)."
                },
                offlineRemovals: {
                    label: "Eliminaciones desconectado",
                    description: "Te notifica al iniciar Discord si fuiste eliminado mientras estabas desconectado."
                },
                friends: {
                    label: "Amigos",
                    description: "Notificar cuando un amigo te elimina"
                },
                friendRequestCancels: {
                    label: "Cancelaciones de solicitud de amistad",
                    description: "Notificar cuando se cancela una solicitud de amistad"
                },
                servers: {
                    label: "Servidores",
                    description: "Notificar cuando te eliminan de un servidor"
                },
                groups: {
                    label: "Grupos",
                    description: "Notificar cuando te eliminan de un chat grupal"
                }
            },
            notification: {
                removedFriend: "{{user}} te eliminó de sus amigos.",
                cancelledFriendRequest: "Se ha eliminado una solicitud de amistad de {{user}}.",
                removedFromServer: "Has sido eliminado del servidor {{server}}.",
                removedFromGroup: "Fuiste eliminado del grupo {{group}}.",
                noLongerGroup: "Ya no estás en el grupo {{group}}.",
                noLongerServer: "Ya no estás en el servidor {{server}}.",
                noLongerFriend: "Ya no eres amigo de {{user}}.",
                friendRequestRevoked: "La solicitud de amistad de {{user}} ha sido revocada.",
                ok: "Aceptar"
            },
            text: {
                relationshipNotifier: "Notificador de relaciones"
            }
        },
        remix: {
            name: "Remix",
            description: "Añade una opción de 'Remix' al menú de clic derecho del botón de subida de archivos. Abre la imagen en un editor simple y permite enviarla editada directamente al chat.",
            label: "Remix",
            button: {
                send: "Enviar",
                close: "Cerrar",
                brush: "Pincel",
                erase: "Borrador",
                crop: "Recortar",
                shape: "Figura",
                reset: "Restablecer",
                clear: "Limpiar"
            },
            editor: {
                choose: "Elige una imagen",
                browse: "Explorar",
                rectangle: "Rectángulo",
                ellipse: "Elipse",
                line: "Línea",
                arrow: "Flecha",
                fill: "Relleno",
                image: "Imagen"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Permite repetir mensajes rápidamente. Si mantienes Shift mientras haces clic en la opción Repetir, responderá al mensaje.",
            button: "Repetir (Clic) / Repetir y responder (Shift + Clic)",
            context: {
                repeat: "Repetir",
                repeatAndReply: "Repetir y responder"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Reemplaza la búsqueda de Google con diferentes motores de búsqueda.",
            option: {
                customEngineName: {
                    label: "Nombre del motor personalizado",
                    description: "Nombre del motor de búsqueda personalizado"
                },
                customEngineURL: {
                    label: "URL del motor personalizado",
                    description: "La URL de tu motor de búsqueda"
                },
                replacementEngine: {
                    label: "Motor de reemplazo",
                    description: "Reemplaza con un motor específico en lugar de añadir un menú",
                    off: "Desactivado",
                    custom: "Motor personalizado",
                }
            },
            context: {
                label: "Buscar texto",
                searchWith: "Buscar con {{name}}"
            },
            text: {
                google: "Google"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Controla si quieres recibir siempre o nunca menciones en las respuestas a mensajes, con funciones de lista blanca y lista negra",
            option: {
                replyPingBlacklist: {
                    label: "Lista negra de menciones en respuestas",
                    description: "Lista separada por comas de ID de usuario para no recibir nunca menciones de respuesta de ellos"
                },
                alwaysPingOnReply: {
                    label: "Mencionar siempre al responder",
                    description: "Recibe siempre una mención cuando alguien responda a tus mensajes"
                },
                replyPingWhitelist: {
                    label: "Lista blanca de menciones en respuestas",
                    description: "Lista de IDs de usuario (separados por comas) de quienes siempre quieres recibir menciones al responder"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Muestra una marca de tiempo en las vistas previas de mensajes respondidos"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Revela todos los spoilers en un mensaje haciendo Ctrl+Clic en un spoiler, o en todo el chat con Ctrl+Shift+Clic"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Añade la búsqueda inversa de imágenes a los menús contextuales de imágenes",
            context: {
                label: "Buscar imagen",
                all: "Buscar en todos"
            },
            text: {
                all: "Todos"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Califica a otros usuarios (añade una nueva sección a los perfiles)",
            notification: {
                newReview: "¡Tienes nuevas reseñas en tu perfil!",
                auth: {
                    error: "Ocurrió un error durante la autorización",
                    successfully: "¡Inicio de sesión exitoso!",
                    failed: "Error al autorizar",
                    review: "Por favor, autoriza para añadir una reseña.",
                    opening: "Abriendo ventana de autorización...",
                    need: "¡Necesitas autorizar para calificar usuarios!"
                },
                error: {
                    fast: "Estás enviando solicitudes demasiado rápido. Espera unos segundos e intenta de nuevo.",
                    fetching: "Ocurrió un error al obtener las reseñas.",
                    action: {
                        failed: "Error al {{action}} al usuario",
                        success: "Usuario {{action}}ado exitosamente"
                    }
                }
            },
            modal: {
                delete: {
                    title: "¿Estás seguro?",
                    description: "¿Realmente quieres eliminar esta reseña?",
                    confirm: "Eliminar",
                    cancel: "Cancelar",
                    error: "Debes iniciar sesión para eliminar reseñas.",
                },
                report: {
                    title: "¿Estás seguro?",
                    description: "¿Realmente quieres reportar esta reseña?",
                    confirm: "Reportar",
                    cancel: "Cancelar",
                    error: "Debes iniciar sesión para reportar reseñas.",
                },
                block: {
                    title: "¿Estás seguro?",
                    description: "¿Realmente quieres bloquear a este usuario? Ya no verás sus reseñas.",
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
                    title: "Reseñas de",
                    noUser: "Parece que nadie ha calificado a este usuario todavía. ¡Tú podrías ser el primero!",
                    noServer: "Parece que nadie ha calificado a este servidor todavía. ¡Tú podrías ser el primero!"
                }
            },
            button: {
                appeal: "Apelar",
                ok: "Aceptar",
                more: "Leer más",
                reply: "Responder a @{{user}}",
                update: "Actualizar reseña para @{{user}}",
                review: "Calificar a @{{user}}"
            },
            context: {
                view: "Ver reseñas",
                blocked: "Has bloqueado a este usuario",
                delete: "Eliminar reseña",
                report: "Reportar reseña",
                block: "Bloquear usuario",
                unblock: "Desbloquear usuario",
                reply: "Responder reseña"
            },
            option: {
                authorize: {
                    label: "Autorizar",
                    button: "Autorizar con ReviewDB"
                },
                notifyReviews: {
                    label: "Notificar reseñas",
                    description: "Notificar sobre nuevas reseñas al iniciar"
                },
                showWarning: {
                    label: "Mostrar advertencia",
                    description: "Muestra una advertencia de respeto en la parte superior de la lista de reseñas"
                },
                hideTimestamps: {
                    label: "Ocultar marcas de tiempo",
                    description: "Oculta la hora y fecha en las reseñas"
                },
                hideBlockedUsers: {
                    label: "Ocultar usuarios bloqueados",
                    description: "Oculta las reseñas de usuarios bloqueados"
                },
                buttons: {
                    label: "Botones",
                    manageBlocked: "Gestionar usuarios bloqueados",
                    support: "Apoyar el desarrollo de ReviewDB",
                    website: "Sitio web de ReviewDB",
                    server: "Servidor de soporte de ReviewDB"
                }
            },
            profile: {
                optedOut: "Usuario rechazó",
                noReviews: "Sin reseñas aún"
            },
            toast: {
                youCannotVoteOn: "No puedes votar tu propia reseña.",
                networkErrorFailedTo: "Error de red: no se pudo conectar con ReviewDB.",
                pleaseAuthorizeToVote: "Autorízate para votar reseñas.",
                requestFailed: "ReviewDB: la solicitud falló con el estado {{status}}"
            },
            text: {
                ok: "Aceptar",
                updateReviewFor: "Actualizar reseña de @{{name}}",
                reviewUser: "Reseñar a @{{name}}",
                system: "Sistema",
                reviewCount: "({{count}} reseñas)"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Muestra los enlaces magnet como si fueran enlaces de mensajes",
            unknown: "nombre de archivo desconocido"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Añade el color del rol más alto en todos los lugares posibles",
            option: {
                chatMentions: {
                    label: "Menciones en el chat",
                    description: "Muestra los colores de los roles en las menciones del chat (incluyendo la caja de mensajes)"
                },
                memberList: {
                    label: "Lista de miembros",
                    description: "Muestra los colores de los roles en los encabezados de la lista de miembros"
                },
                voiceUsers: {
                    label: "Usuarios de voz",
                    description: "Muestra los colores de los roles en la lista de usuarios de canales de voz"
                },
                reactorsList: {
                    label: "Lista de reacciones",
                    description: "Muestra los colores de los roles en la lista de personas que reaccionaron"
                },
                pollResults: {
                    label: "Resultados de encuestas",
                    description: "Muestra los colores de los roles en los resultados de las encuestas"
                },
                colorChatMessages: {
                    label: "Colorear mensajes del chat",
                    description: "Colorea los mensajes del chat basándose en el color del rol del autor"
                },
                messageSaturation: {
                    label: "Saturación del mensaje",
                    description: "Intensidad del coloreado de los mensajes"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Edita el tipo y contenido de cualquier Rich Presence (Estado de actividad)",
            option: {
                replacedAppIds: {
                    label: "IDs de aplicaciones reemplazadas",
                }
            },
            modal: {
                tutorial: {
                    title: "IDs de actividades ejecutándose actualmente",
                    noRunning: "No hay actividades ejecutándose",
                    available: "Variables disponibles",
                    variableText: "En todos los campos (excepto URL de transmisión), puedes usar variables que se reemplazarán automáticamente por su contenido original:",
                    more: "Más detalles",
                    details: {
                        leave: "Deja un campo vacío para mantenerlo como está.",
                        set: "Escribe 'null' en un campo para ocultarlo en el estado.",
                        reload: "Es posible que necesites recargar Discord para que los cambios se apliquen."
                    }
                },
                settings: {
                    applyEdits: "Aplicar ediciones a la app",
                    addNewApp: "Añadir nueva aplicación",
                    appId: "ID de la aplicación",
                    invalidAppId: "ID de aplicación inválido",
                    newActivityType: "Nuevo tipo de actividad",
                    activityTypes: {
                        playing: "Jugando a",
                        watching: "Viendo",
                        listening: "Escuchando",
                        competing: "Compitiendo en",
                        streaming: "Transmitiendo"
                    },
                    streamUrl: "URL de transmisión (debe ser YouTube o Twitch)",
                    invalidStreamUrl: "URL de transmisión inválida",
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
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "Exporta las URLs de tus GIFs favoritos",
            toolbox: "Guardar GIFs favoritos",
            title: "Guardar GIFs favoritos",
            command: {
                savegifs: {
                    description: "Guarda todas las URLs de tus GIFs favoritos en un archivo de texto"
                },
                saveworkinggifs: {
                    description: "Prueba todos tus GIFs favoritos y guarda solo los que aún funcionan"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Mostrar botón en herramientas",
                    description: "Muestra el botón 'Guardar GIFs favoritos' en la caja de herramientas (Requiere recargar)"
                }
            },
            toast: {
                save: "GIFs guardados exitosamente como {{filename}}",
                failed: "Error al guardar los GIFs",
                no: "¡No se encontraron GIFs favoritos!",
                testing: "Probando {{count}} GIFs, esto puede tardar un momento...",
                noneWorking: "Parece que ninguno de tus GIFs guardados funciona.",
                saved: "Se filtraron {{broken}} GIFs posiblemente rotos. Se guardaron {{saved}} GIFs que funcionan."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Programa mensajes para enviarse a una hora específica o tras un retraso.",
            toolbox: {
                toggle: "Ver mensajes programados"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Mensajes máximos por minuto",
                    description: "Máximo de mensajes programados por canal que pueden enviarse en el mismo minuto."
                },
                checkIntervalSeconds: {
                    label: "Intervalo de comprobación (segundos)",
                    description: "Cada cuánto tiempo el plugin busca mensajes para enviar."
                },
                showNotifications: {
                    label: "Mostrar notificaciones",
                    description: "Muestra avisos flotantes cuando se envían los mensajes."
                },
                showPhantomMessages: {
                    label: "Mostrar mensajes fantasma",
                    description: "Muestra los mensajes programados como mensajes fantasma en el chat."
                }
            },
            channelType: {
                unknown: "Desconocido",
                dm: "MD",
                groupDm: "MD grupal",
                channel: "Canal"
            },
            toast: {
                messageSent: "Mensaje programado enviado a {{channel}}",
                messageFailed: "Error al enviar el mensaje programado",
                maxMessagesReached: "Límite de {{max}} mensajes por canal por minuto alcanzado",
                messageScheduled: "¡Mensaje programado!",
                messageRemoved: "Mensaje programado eliminado",
                allCleared: "Todos los mensajes programados han sido borrados",
                scheduledMessageSentTo: "Mensaje programado enviado a {{name}}"
            },
            button: {
                tooltipOn: "Modo programar ACTIVADO (clic para desactivar, clic derecho para ver lista)",
                tooltipOff: "Modo programar DESACTIVADO (clic para activar, clic derecho para ver lista)"
            },
            accessory: {
                scheduledFor: "Programado para el {date}{timeLeft}",
                remaining: {
                    days: "faltan {{days}}d {{hours}}h",
                    hours: "faltan {{hours}}h {{minutes}}m",
                    minutes: "faltan {{minutes}}m"
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
                    invalidDelay: "Por favor, ingresa un retraso válido (mínimo 1 minuto)",
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
            description: "Corrige el molesto error '¡Se nos cayó la lupa!' en las búsquedas.",
            notPerfect: "Esta corrección no es perfecta; es posible que debas recargar la barra de búsqueda para solucionar problemas.",
            paragraph1: "Discord solo permite un desplazamiento (offset) máximo de 5000 (esto es lo que causa el error de la lupa).",
            paragraph2: "Esto significa que solo puedes ver precisamente 5000 mensajes hacia el pasado y 5000 hacia el futuro (al ordenar por antiguos).",
            paragraph3: "Este plugin simplemente cambia al método de ordenación opuesto para intentar evitar la restricción de Discord,",
            paragraph4: "pero si el resultado de búsqueda es muy grande e intentas ver un mensaje inalcanzable con ambos métodos,",
            paragraph5: "el plugin mostrará el desplazamiento 0 (el mensaje más nuevo o más antiguo dependiendo del orden)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Reproduce siempre la versión secreta del tono de llamada de Discord (excepto durante eventos especiales de tonos)",
            option: {
                onlySnow: {
                    label: "Solo durante el evento de tono Snow",
                    description: "Solo reproducir el tema Snow Halation"
                }
            }
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Envía marcas de tiempo fácilmente mediante un botón en el chat y atajos de texto. ¡Lee la descripción completa!",
            sample: {
                paragraph1: "Para enviar marcas de tiempo rápidas (solo hora), incluye la hora con el formato `HH:MM` (¡incluyendo las comillas invertidas!) en tu mensaje",
                paragraph2: "Mira los ejemplos a continuación.\nSi necesitas algo más específico, usa el botón de Fecha en la barra de chat.",
                examples: "Ejemplos:"
            },
            modal: {
                title: "Selector de marca de tiempo",
                light: "Claro",
                dark: "Oscuro",
                format: "Formato de marca de tiempo",
                preview: "Vista previa",
                insert: "Insertar",
                insertTimestamp: "Insertar marca de tiempo"
            },
            option: {
                replaceMessageContents: {
                    label: "Reemplazar contenido del mensaje",
                    description: "Reemplaza las horas en el contenido del mensaje"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Te permite ver información sobre un servidor",
            context: {
                serverInfo: "Info del servidor"
            },
            option: {
                sorting: {
                    label: "Ordenación",
                    description: "Nombre de usuario o, si aplica, Nombre de pantalla",
                    username: "Nombre de usuario",
                    displayname: "Nombre de pantalla",
                    none: "No ordenar"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Info del servidor",
                    friends: "Amigos",
                    mutualUsers: "Usuarios mutuos",
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
                    highest: "Extremo"
                },
                serverBoosts: "Mejoras de servidor (Boosts)",
                channels: "Canales",
                roles: "Roles",
                boostLevel: "{{count}} (Nivel {{level}})"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Añade el conteo de amigos conectados o de servidores en la lista lateral",
            friends: "Amigos",
            servers: "Servidores",
            option: {
                mode: {
                    label: "Modo",
                    description: "Modo a mostrar en la lista de servidores",
                    friend: "Solo amigos conectados",
                    server: "Solo cantidad de servidores",
                    both: "Ambos conteos"
                },
                useCompact: {
                    label: "Usar modo compacto",
                    description: "Hace que el indicador aparezca solo con texto"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Navega mejor por tus servidores con un botón de búsqueda rápida",
            tooltip: "Buscar"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Lleva los bloques de código al estilo VS Code a Discord, con tecnología Shiki",
            option: {
                theme: {
                    label: "Tema",
                    description: "Temas por defecto"
                },
                customTheme: {
                    label: "Tema personalizado",
                    description: "Un enlace a un tema personalizado de VS Code",
                    mustURL: "Debe ser una URL válida",
                    mustJSON: "Debe ser un archivo JSON"
                },
                tryDiscordHighlighter: {
                    label: "Probar el resaltador de Discord",
                    description: "Usa el resaltador y tema por defecto de Discord, que es más ligero.",
                    never: "Nunca",
                    secondary: "Preferir Shiki en lugar del resaltador de Discord",
                    primary: "Preferir el resaltador de Discord en lugar de Shiki",
                    always: "Siempre"
                },
                useDevIcon: {
                    label: "Usar Devicon para íconos de lenguaje",
                    description: "Cómo mostrar los íconos de lenguaje en los bloques de código",
                    disabled: "Desactivado",
                    colorless: "Sin color",
                    colored: "En color"
                },
                bgOpacity: {
                    label: "Opacidad del fondo",
                    description: "Opacidad del fondo"
                },
                ignoredLanguages: {
                    label: "Lenguajes ignorados",
                    description: "Lista separada por comas de lenguajes que se dejarán a los bloques de código predeterminados de Discord"
                }
            },
            button: {
                copy: "Copiar",
                copied: "¡Copiado!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Muestra siempre todos los botones del mensaje sin necesidad de mantener presionada la tecla Shift.",
            option: {
                noShiftDelete: {
                    label: "Eliminar sin Shift",
                    description: "Quita el requisito de mantener Shift para eliminar un mensaje."
                },
                noShiftPin: {
                    label: "Fijar sin Shift",
                    description: "Quita el requisito de mantener Shift para fijar un mensaje."
                },
                noQuickReacts: {
                    description: "Ocultar las reacciones rápidas. Por defecto, mostrar el menú completo oculta los botones de reacción rápida.",
                    label: "Sin reacciones rápidas"
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Muestra las insignias del autor del mensaje junto a su nombre en el chat.",
            option: {
                showPlexcordDonor: {
                    label: "Mostrar insignia de donador de Plexcord",
                    description: "Activa para mostrar insignias de donador de Plexcord en el chat."
                },
                plexcordDonorPosition: {
                    label: "Posición de la insignia de donador",
                    description: "La posición de las insignias de donador de Plexcord."
                },
                showPlexcordContributor: {
                    label: "Mostrar insignia de colaborador de Plexcord",
                    description: "Activa para mostrar insignias de colaborador de Plexcord en el chat."
                },
                plexcordContributorPosition: {
                    label: "Posición de la insignia de colaborador",
                    description: "La posición de las insignias de colaborador de Plexcord."
                },
                showDiscordProfile: {
                    label: "Mostrar insignias de perfil de Discord",
                    description: "Activa para mostrar las insignias del perfil de Discord en el chat."
                },
                discordProfilePosition: {
                    label: "Posición de insignias de perfil",
                    description: "La posición de las insignias de perfil de Discord."
                },
                showDiscordNitro: {
                    label: "Mostrar insignia de Discord Nitro",
                    description: "Activa para mostrar insignias de Discord Nitro en el chat."
                },
                discordNitroPosition: {
                    label: "Posición de la insignia de Nitro",
                    description: "La posición de las insignias de Discord Nitro."
                },
                badgeSettings: {
                    label: "Ajustes de insignias",
                    description: "Configura la posición de otras insignias mostradas en el chat.",
                    modal: "Arrastra las insignias para reordenarlas; puedes hacer clic para activar/desactivar un tipo de insignia específico."
                }
            },
            badge: {
                plexcord: "Insignia de donador de Plexcord",
                contributor: "Insignia de colaborador de Plexcord",
                discordProfile: "Insignias de perfil de Discord (HypeSquad, Staff, Desarrollador activo, etc.)",
                nitro: "Insignia de Nitro",
                staff: "Staff de Discord",
                partner: "Dueño de servidor asociado",
                events: "Eventos de HypeSquad",
                bravery: "HypeSquad Bravery (Valentía)",
                brilliance: "HypeSquad Brilliance (Brillantez)",
                balance: "HypeSquad Balance (Equilibrio)",
                bugHunter: "Cazador de errores de Discord",
                earlyVerifiedBotDeveloper: "Desarrollador de bots verificado temprano",
                earlySupporter: "Partidario inicial",
                moderatorProgram: "Alumno del programa de moderadores"
            },
            modal: {
                plexcordContributor: "Colaborador de Plexcord",
                discordNitro: "Discord Nitro",
                basic: "Basic",
                classic: "Classic"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Muestra las cuentas conectadas en las ventanas emergentes de usuario y en la barra lateral de MD",
            option: {
                iconSize: {
                    label: "Tamaño del ícono",
                    description: "Tamaño del ícono (px)"
                },
                iconSpacing: {
                    label: "Espaciado de íconos",
                    description: "Margen de los íconos",
                    compact: "Compacto",
                    cozy: "Cómodo",
                    roomy: "Espacioso"
                },
                showGithubOrgs: {
                    description: "Mostrar las organizaciones de GitHub de las que el usuario es miembro",
                    label: "Mostrar organizaciones de GitHub"
                },
                showOnModal: {
                    description: "Mostrar las cuentas conectadas en la ventana de perfil completa",
                    label: "Mostrar en la ventana"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Muestra canales a los que no tienes permiso de acceso.",
            tooltip: "Canal oculto",
            option: {
                channelStyle: {
                    label: "Estilo de canal",
                    description: "El estilo utilizado para mostrar los canales ocultos.",
                    classic: "Clásico",
                    muted: "Silenciado",
                    showUnreads: "Mostrar no leídos",
                    mutedWithUnreads: "Silenciado y mostrar no leídos"
                },
                showMode: {
                    label: "Modo de visualización",
                    description: "El modo utilizado para mostrar los canales ocultos.",
                    lock: "Estilo normal con ícono de candado",
                    hidden: "Estilo silenciado con ícono de ojo oculto a la derecha",
                    lockIconRight: "Ícono de candado a la derecha"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Estado predeterminado del menú de usuarios y roles permitidos",
                    description: "Define si el menú desplegable de usuarios y roles con acceso en canales ocultos debe estar abierto por defecto."
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
                latestActivity: "Actividad reciente",
                creationDate: "Fecha de creación"
            },
            forumLayout: {
                default: "Sin establecer",
                list: "Vista de lista",
                grid: "Vista de galería"
            },
            videoQuality: {
                auto: "Automático",
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
                bitrate: "Tasa de bits (Bitrate):",
                region: "Región:",
                automatic: "Automático",
                videoQuality: "Modo de calidad de video:",
                inactiveArchiveDuration: "Duración de inactividad por defecto antes de archivar {{type}}",
                defaultLayout: "Diseño predeterminado:",
                defaultSort: "Orden predeterminado:",
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
            description: "Muestra varias cosas ocultas y exclusivas de moderadores independientemente de los permisos.",
            option: {
                showTimeouts: {
                    label: "Mostrar aislamientos en el chat",
                    description: "Muestra íconos de miembros aislados (timeout) en el chat."
                },
                showInvitesPaused: {
                    label: "Mostrar invitaciones pausadas",
                    description: "Muestra el indicador de invitaciones pausadas en la lista de servidores."
                },
                showModView: {
                    label: "Mostrar vista de moderador",
                    description: "Muestra la opción de 'Vista de moderador' en el menú contextual de miembros en todos los servidores."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Añade una opción en el menú contextual para mostrar vistas previas (embeds) en enlaces que no las tienen.",
            context: {
                embed: {
                    show: "Mostrar vista previa",
                    hide: "Quitar vista previa"
                }
            },
            error: {
                failed: "Error al obtener la vista previa",
                noEmbed: "No se encontraron vistas previas"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Muestra cualquier combinación de apodos personalizados, apodos de amigos, apodos de servidor, nombres de pantalla y nombres de usuario en el chat.",
            option: {
                messages: {
                    label: "Mensajes",
                    description: "Muestra el formato de nombre personalizado en los mensajes."
                },
                replies: {
                    label: "Respuestas",
                    description: "Muestra el formato de nombre personalizado en las respuestas."
                },
                mentions: {
                    label: "Menciones",
                    description: "Muestra el formato de nombre personalizado en las menciones."
                },
                typingIndicator: {
                    label: "Indicador de escritura",
                    description: "Muestra el primer nombre disponible de tu formato en el indicador de escritura."
                },
                memberList: {
                    label: "Lista de miembros",
                    description: "Mostrar el primer nombre disponible de tu formato de nombre personalizado en la lista de miembros, la de MD, la de amigos y Activo ahora."
                },
                profilePopout: {
                    label: "Ventana de perfil",
                    description: "Muestra el primer nombre disponible de tu formato en las ventanas emergentes de perfil."
                },
                voiceChannels: {
                    label: "Canales de voz",
                    description: "Muestra el primer nombre disponible de tu formato en los canales de voz."
                },
                reactions: {
                    label: "Reacciones",
                    description: "Muestra el primer nombre en los cuadros de texto de reacciones y el nombre completo en las ventanas de reacciones."
                },
                discriminators: {
                    label: "Discriminadores",
                    description: "Añade los discriminadores (#0000) a los nombres de bots. Discord los eliminó para usuarios, pero los bots aún los usan para ser únicos."
                },
                hideDefaultAtSign: {
                    label: "Ocultar arroba por defecto",
                    description: "Oculta el símbolo '@' antes del nombre en menciones y respuestas."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Acortar nombres en modo streamer",
                    description: "Acorta todos los nombres, no solo los de usuario, cuando el Modo Streamer está activo."
                },
                removeDuplicates: {
                    label: "Eliminar duplicados",
                    description: "Si los nombres son idénticos, los elimina dejando solo uno único."
                },
                ignoreFonts: {
                    label: "Ignorar fuentes",
                    description: "Usa la fuente gg sans para los nombres secundarios, ignorando fuentes personalizadas."
                },
                ignoreGradients: {
                    label: "Ignorar degradados",
                    description: "Ignora degradados y efectos de Nitro en nombres secundarios si el color está basado en el rol."
                },
                animateGradients: {
                    label: "Animar degradados",
                    description: "Anima los degradados de los roles para los nombres secundarios (si no está activo 'Ignorar degradados')."
                },
                nameSeparator: {
                    label: "Separador de nombres",
                    description: "El carácter para separar los nombres. Por defecto es un espacio."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Nombre de amigo solo en MD",
                    description: "Solo muestra nombres de amigos en mensajes directos, no en servidores."
                },
                customNameOnlyInDirectMessages: {
                    label: "Nombre personalizado solo en MD",
                    description: "Solo muestra nombres personalizados en mensajes directos, no en servidores."
                },
                alwaysShowEffects: {
                    label: "Animar siempre los efectos",
                    description: "Mostrar siempre los efectos como si estuvieras pasando el cursor por encima."
                },
                includedNames: {
                    label: "Nombres incluidos",
                    description: "El orden para mostrar nombres. Usa: {user}, {display}, {nick}, {friend}. Puedes separar por comas para usar alternativas (fallbacks)."
                },
                customNameColor: {
                    label: "Color de nombre personalizado",
                    description: "Color para el nombre personalizado. Acepta CSS, 'Role' o 'Role+-#' para ajustar brillo."
                },
                friendNameColor: {
                    label: "Color de nombre de amigo",
                    description: "Color para el apodo de amigo si no es el principal."
                },
                nicknameColor: {
                    label: "Color de apodo",
                    description: "Color para el apodo de servidor si no es el principal."
                },
                displayNameColor: {
                    label: "Color de nombre de pantalla",
                    description: "Color para el nombre de pantalla si no es el principal."
                },
                usernameColor: {
                    label: "Color de nombre de usuario",
                    description: "Color para el nombre de usuario si no es el principal."
                },
                triggerNameRerender: {
                    label: "Forzar actualización de nombres",
                    description: "Alterna este ajuste para forzar que los nombres se vuelvan a cargar."
                },
                searchAutocomplete: {
                    description: "Mostrar el primer nombre disponible de tu formato de nombre personalizado en el autocompletado de menciones y búsqueda.",
                    label: "Autocompletado de búsqueda"
                },
                styleDirectMessagesList: {
                    description: "Mostrar los efectos del nombre visible en entradas no seleccionadas sin necesidad de pasar el cursor. Si se desactiva, las seleccionadas y bajo el cursor siguen con estilo.",
                    label: "Estilizar lista de mensajes directos"
                },
                styleDirectMessagesMessages: {
                    description: "Mostrar los efectos del nombre visible en los autores de los mensajes sin pasar el cursor. Si se desactiva, los nombres bajo el cursor siguen con estilo.",
                    label: "Estilizar mensajes en MD"
                },
                styleFriendsList: {
                    description: "Mostrar los efectos del nombre visible sin pasar el cursor. Si se desactiva, las entradas bajo el cursor siguen con estilo.",
                    label: "Estilizar lista de amigos"
                },
                styleActiveNow: {
                    description: "Mostrar los efectos del nombre visible sin pasar el cursor. Si se desactiva, las entradas bajo el cursor siguen con estilo.",
                    label: "Estilizar Activo ahora"
                },
                ignoreEffects: {
                    description: "Para nombres no principales, usar solo el color del rol principal y omitir los efectos del nombre visible.",
                    label: "Ignorar efectos"
                },
                animateEffects: {
                    description: "Animar los degradados de rol y los efectos del nombre visible en nombres no principales. Se desactiva con \"Ignorar efectos\" y movimiento reducido.",
                    label: "Animar efectos"
                },
                alwaysAnimateEffects: {
                    description: "Forzar la animación de los efectos del nombre visible cuando ya serían visibles, incluso sin pasar el cursor.",
                    label: "Animar siempre los efectos"
                },
                gradientGlow: {
                    description: "Añadir un brillo a los degradados animados de usuario igual que brillan los degradados de rol del servidor.",
                    label: "Brillo del degradado"
                }
            },
            modal: {
                change: {
                    title: "Cambiar apodo de SMYN"
                },
                add: {
                    title: "Añadir apodo de SMYN"
                },
                setCustom: "Establece un apodo personalizado para este usuario. Úsalo especificando {custom} en los ajustes de plantilla.",
                nickname: "Apodo SMYN",
                reset: "Restablecer apodo SMYN",
                cancel: "Cancelar"
            },
            text: {
                save: "Guardar",
                unknown: "Desconocido"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Muestra cuánto tiempo le queda al aislamiento (timeout) de un usuario.",
            option: {
                displayStyle: {
                    label: "Estilo de visualización",
                    description: "Cómo mostrar la duración restante",
                    tooltip: "En el cuadro de texto (tooltip)",
                    inline: "Junto al ícono de aislamiento"
                }
            },
            text: {
                timeoutRemaining: "de aislamiento restante"
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Muestra los canales que están ocultos detrás de la sección de recursos del servidor."
        },
        showSongName: {
            name: "ShowSongName",
            description: "Muestra el nombre de la canción en lugar del artista en la actividad de Spotify."
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Abre otro canal o MD como una barra lateral o una ventana emergente.",
            toolbox: {
                label: "Abrir chat anterior"
            },
            context: {
                label: "Abrir chat lateral"
            },
            channelTitle: {
                chat: "Chat",
                dm: "MD"
            },
            modal: {
                switch: "Cambiar canales",
                popout: "Abrir en ventana externa",
                popoutClose: "Cerrar ventana externa",
                popoutFor: "Abrir en ventana externa para {{channel}}",
                close: "Cerrar chat lateral"
            },
            option: {
                persistSidebar: {
                    label: "Persistir chat lateral",
                    description: "Mantiene el chat lateral abierto incluso después de reiniciar Discord."
                },
                persistPopoutWindows: {
                    label: "Persistir ventanas externas",
                    description: "Restaura las ventanas externas abiertas después de reiniciar Discord."
                },
                popoutAlwaysOnTop: {
                    label: "Ventana externa siempre encima",
                    description: "Mantiene las ventanas externas por encima de todas las demás."
                },
                patchCommunity: {
                    label: "Parche de comunidad",
                    description: "Aplica correcciones a funciones de servidores de comunidad como el explorador de canales."
                },
                persistedPopoutWindowIds: {
                    description: "IDs de canal de las ventanas externas persistidas."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Texto o firma automática al final de tus mensajes.",
            option: {
                name: {
                    label: "Nombre",
                    description: "La firma que se añadirá al final de tus mensajes."
                },
                textHeader: {
                    label: "Encabezado de texto",
                    description: "Qué encabezado poner antes de la firma."
                },
                showIcon: {
                    label: "Mostrar ícono",
                    description: "Muestra un ícono en la barra de chat para activar/desactivar el plugin."
                },
                contextMenu: {
                    label: "Menú contextual",
                    description: "Añade la opción de activar/desactivar en el menú del cuadro de escritura."
                },
                isEnabled: {
                    label: "Está activado",
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
                    toogle: "Activa o desactiva tu firma automática",
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
                    label: "Persistir estado",
                    description: "Cómo recordar el estado del botón de mensaje silencioso.",
                    none: "No persistir (reiniciar al cambiar de canal)",
                    channels: "Recordar entre canales",
                    restarts: "Recordar entre canales y reinicios"
                },
                autoDisable: {
                    label: "Desactivación automática",
                    description: "Desactiva automáticamente el modo silencioso después de enviar un mensaje."
                }
            },
            tooltip: {
                enable: "Activar mensaje silencioso",
                disable: "Desactivar mensaje silencioso"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Oculta tu indicador de escritura para que los demás no vean que estás escribiendo.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Oculta tu indicador de escritura en el chat.",
                    toggle: {
                        name: "toggle",
                        description: "Alternar función globalmente, por canal o por servidor.",
                        global: "Global",
                        channel: "Canal",
                        guild: "Servidor"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Oculta el indicador de escritura de otros usuarios sobre la barra de chat."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Oculta el indicador de escritura de otros usuarios en la lista de miembros."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Muestra un ícono en la barra de chat para alternar el plugin rápidamente."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Muestra opciones en el menú contextual del chat para cambiar ajustes rápido."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "Si la escritura debe estar oculta por defecto en MD/canales/servidores."
                    }
                }
            },
            content: {
                updated: "Ajustes de escritura silenciosa actualizados.",
                noChanges: "No hubo cambios en los ajustes de escritura silenciosa."
            },
            tooltip: {
                hidden: "Escritura oculta ({{location}})",
                visible: "Escritura visible ({{location}})",
                global: "Escritura visible (Global)",
                voiceChannel: "Escritura siempre visible en el chat del canal de voz conectado",
                temporary: "Escritura visible temporalmente en este canal debido a un mensaje reciente"
            },
            option: {
                enabledGlobally: {
                    label: "Activado globalmente",
                    description: "Alterna tu propio indicador de escritura de forma global."
                },
                hideChatBoxTypingIndicators: {
                    label: "Ocultar indicadores en barra de chat",
                    description: "Oculta cuando otros escriben sobre la barra de chat."
                },
                hideMembersListTypingIndicators: {
                    label: "Ocultar indicadores en lista de miembros",
                    description: "Oculta cuando otros escriben en la lista lateral."
                },
                chatIcon: {
                    label: "Ícono de chat",
                    description: "Muestra un ícono en la barra de escritura para ajustes rápidos."
                },
                chatIconLeftClickAction: {
                    label: "Acción clic izquierdo",
                    description: "Qué hacer al hacer clic izquierdo en el ícono.",
                    global: "Alternar globalmente",
                    channel: "Alternar para el canal",
                    guild: "Alternar para el servidor",
                    settings: "Abrir ajustes del plugin"
                },
                chatIconMiddleClickAction: {
                    label: "Acción clic central",
                    description: "Qué hacer al hacer clic central en el ícono.",
                    global: "Alternar globalmente",
                    channel: "Alternar para el canal",
                    guild: "Alternar para el servidor",
                    settings: "Abrir ajustes del plugin"
                },
                chatIconRightClickAction: {
                    label: "Acción clic derecho",
                    description: "Qué hacer al hacer clic derecho en el ícono.",
                    global: "Alternar globalmente",
                    channel: "Alternar para el canal",
                    guild: "Alternar para el servidor",
                    settings: "Abrir ajustes del plugin"
                },
                chatContextMenu: {
                    label: "Menú contextual del chat",
                    description: "Muestra un menú desplegable en el chat para modificar ajustes al momento."
                },
                defaultHidden: {
                    label: "Ocultar por defecto",
                    description: "Si está activo, oculta tu escritura en todos lados excepto en 'Ubicaciones desactivadas'. Si está inactivo, la muestra excepto en 'Ubicaciones activadas'."
                },
                alwaysEnableInActiveVoiceChat: {
                    label: "Habilitar siempre en el chat de voz activo",
                    description: "Permite siempre que se muestre tu indicador de escritura al escribir en un canal de voz al que estés conectado."
                },
                temporaryEnableThresholdServers: {
                    label: "Umbral de habilitación temporal (servidores)",
                    description: "Permite temporalmente que se muestre tu indicador de escritura durante esta cantidad de segundos después de enviar un mensaje en un canal de servidor. Si el indicador ya es visible en el canal, este ajuste no tendrá efecto."
                },
                temporaryEnableThresholdDirectMessages: {
                    label: "Umbral de habilitación temporal (mensajes directos)",
                    description: "Permite temporalmente que se muestre tu indicador de escritura durante esta cantidad de segundos después de enviar un mensaje en un MD o MD grupal. Si el indicador ya es visible en el canal, este ajuste no tendrá efecto."
                },
                enabledLocations: {
                    label: "Ubicaciones activadas",
                    description: "Activa la función para estos IDs (MD, canales o servidores) separados por comas."
                },
                disabledLocations: {
                    label: "Ubicaciones desactivadas",
                    description: "Desactiva la función para estos IDs (MD, canales o servidores) separados por comas."
                }
            },
            text: {
                silentTyping: "Escritura silenciosa",
                enabled: "Activado",
                chatBarIndicators: "Indicadores en la barra de chat",
                membersListIndicators: "Indicadores en la lista de miembros",
                guild: "Servidor",
                channel: "Canal",
                global: "Global"
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "¡Deja que nieve en Discord!",
            about: {
                title: "Información",
                paragraph: "Este plugin añade un efecto navideño de nieve cayendo sobre la interfaz. Puedes cambiar el tipo de nieve en los ajustes.",
                note: "NOTA: Aunque no suele afectar el rendimiento, puede causar lag en equipos de gama baja."
            },
            option: {
                typeOfSnow: {
                    label: "Tipo de nieve",
                    description: "Cambia el estilo de nieve (afecta el rendimiento).",
                    solid: "Sólida (Mejor rendimiento)",
                    text: "Texto (Rendimiento medio)",
                    emoji: "Imagen (Menor rendimiento)"
                },
                maxSize: {
                    label: "Tamaño máximo",
                    description: "Tamaño máximo de los copos."
                },
                speed: {
                    label: "Velocidad",
                    description: "Velocidad de caída (mayor = más rápido)."
                },
                flakesPerSecond: {
                    label: "Copos por segundo",
                    description: "Cantidad de copos (mayor = nieve más densa)."
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Ordena las solicitudes de amistad por fecha de recepción.",
            tooltip: "Añadido &mdash; {{date}}",
            option: {
                showDates: {
                    label: "Mostrar fechas",
                    description: "Muestra la fecha en las solicitudes de amistad."
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Registra todos los sonidos de Soundboard usados en el chat de voz y permite descargarlos.",
            tooltip: "Abrir registro de Soundboard",
            option: {
                savedIds: {
                    label: "IDs de sonidos guardados",
                    description: "Cantidad de sonidos a guardar (0 para infinito).",
                    notNumber: "El valor no es un número.",
                    cantDecimal: "El valor no puede ser decimal.",
                    cantNegative: "El valor no puede ser negativo.",
                    heading: "Cantidad de sonidos a guardar a la vez (0 para infinito)",
                    warning: "¡Atención! Bajar este número reiniciará el registro.",
                    placeholder: "Introduce un número"
                },
                fileType: {
                    label: "Tipo de archivo",
                    description: "El formato en el que quieres guardar los sonidos."
                },
                openLogs: {
                    label: "Abrir registros",
                    description: "Muestra los registros.",
                    button: "Abrir registros"
                },
                soundVolume: {
                    label: "Volumen del sonido",
                    description: "Volumen del sonido de notificación (0 para desactivar)."
                },
                iconLocation: {
                    label: "Ubicación del ícono",
                    description: "Dónde mostrar el ícono del registro (requiere reiniciar).",
                    toolbar: "Barra de herramientas",
                    chatInput: "Entrada de chat"
                }
            },
            modal: {
                title: "Registros de Soundboard",
                loading: "Cargando sonidos...",
                noLogs: "No hay sonidos registrados. ¡Únete a un chat de voz para empezar!",
                clearLogs: "Limpiar registros",
                played: "Reproducido {{time}} ve{{s}}",
                last: "Última vez:",
                also: "También reproducido por:",
                download: "Descargar",
                copyId: "Copiar ID",
                copied: "¡ID copiado al portapapeles!",
                playSound: "Reproducir sonido",
                moreUsers: "Otras personas usaron este sonido...",
                volume: "Volumen del Soundboard"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Divide los mensajes demasiado largos en fragmentos del tamaño de Discord antes de enviarlos.",
            option: {
                maxLength: {
                    label: "Longitud máxima del mensaje",
                    description: "Longitud antes de dividir. Pon 0 para detección automática."
                },
                disableFileConversion: {
                    label: "Desactivar conversión a archivo",
                    description: "Si se activa, evita que los mensajes largos se conviertan en archivos .txt."
                },
                sendDelay: {
                    label: "Retraso de envío",
                    description: "Retraso mínimo entre cada fragmento, en segundos."
                },
                hardSplit: {
                    label: "División forzada",
                    description: "Divide exactamente en el último carácter en lugar de buscar un espacio o salto de línea."
                },
                splitInSlowmode: {
                    label: "Dividir en modo lento",
                    description: "Permitir dividir en modo lento cuando su retraso esté dentro del máximo configurado."
                },
                slowmodeMax: {
                    label: "Límite de modo lento",
                    description: "Duración máxima del modo lento permitida al dividir mensajes."
                },
                splitMode: {
                    description: "Preferir este límite al dividir un mensaje.",
                    label: "Modo de división"
                }
            },
            toast: {
                cannotSplitThisMessage: "No se puede dividir este mensaje por el modo lento del canal.",
                onlySentLengthMessage: "Solo se enviaron {{sent}}/{{length}} partes del mensaje.",
                unsentCopied: "Partes del mensaje no enviadas copiadas al portapapeles."
            },
            text: {
                newlines: "Saltos de línea",
                spaces: "Espacios",
                strictCharacterLimit: "Límite estricto de caracteres"
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Escucha simultánea (Listen along) gratuita, sin pausa automática en chat de voz y permite que la actividad siga al estar inactivo.",
            option: {
                noSpotifyAutoPause: {
                    label: "Sin pausa automática de Spotify",
                    description: "Evita que Discord detenga Spotify cuando hablas por micrófono."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Mantener actividad al estar inactivo",
                    description: "Mantiene el estado de Spotify aunque estés ausente."
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Comparte tu canción, álbum o artista actual de Spotify con comandos (/track, /album, /artist).",
            command: {
                makeCommand: {
                    description: "Comparte tu {{type}} actual de Spotify en el chat",
                    track: "No estás escuchando nada en Spotify.",
                    find: "No se pudo encontrar la canción en Spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Añade tiempos de inicio (Startup Timings) al menú de Ajustes.",
            modal: {
                title: "Tiempos de inicio",
                ended: "Rastreo finalizado en:",
                start: "Inicio",
                interval: "Intervalo",
                delta: "Delta",
                event: "Evento",
                serverTrace: "Rastreo del servidor",
                loading: "Cargando..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Añade notificaciones cuando tus amigos cambian de estado.",
            loading: "Cargando...",
            option: {
                notificationsSound: {
                    label: "Sonido de notificación",
                    description: "¿Reproducir un sonido cuando alguien cambie su estado?"
                },
                usersList: {
                    label: "Lista de usuarios",
                    description: "Usuarios a los que sigues. Haz clic derecho en un usuario y selecciona 'Status Notifications' para añadirlo.",
                    empty: "No sigues a nadie todavía."
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
            description: "Te permite guardar estados personalizados para usarlos después.",
            button: {
                remember: "Recordar estado"
            },
            context: {
                edit: "Editar ajustes preestablecidos",
                set: "Establecer estado personalizado",
                delete: "Eliminar ajuste predeterminado"
            },
            notification: {
                successfully: "Estado guardado exitosamente"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "¡Sincroniza tu estado de Discord con el de Steam! (Conectado, Ausente, Invisible, etc.)",
            option: {
                onlineStatus: {
                    label: "Estado conectado",
                    description: "Estado en Steam al estar Conectado en Discord."
                },
                idleStatus: {
                    label: "Estado ausente",
                    description: "Estado en Steam al estar Ausente en Discord."
                },
                dndStatus: {
                    label: "Estado no molestar",
                    description: "Estado en Steam al estar en No Molestar."
                },
                invisibleStatus: {
                    label: "Estado invisible",
                    description: "Estado en Steam al estar Invisible en Discord."
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Invisible si la actividad está oculta",
                    description: "Pone tu Steam en invisible si ocultas tu actividad de Discord."
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
            description: "Te permite bloquear stickers para que no se muestren.",
            option: {
                showGif: {
                    label: "Mostrar GIF",
                    description: "Muestra un GIF de un gato elegante en lugar del sticker bloqueado."
                },
                showMessage: {
                    label: "Mostrar mensaje",
                    description: "Muestra un mensaje indicando qué ID fue bloqueada."
                },
                showButton: {
                    label: "Mostrar botón",
                    description: "Muestra un botón para desbloquear el sticker."
                },
                blockedStickers: {
                    label: "Stickers bloqueados",
                    description: "Lista de IDs de stickers bloqueados (no editar manualmente)."
                }
            },
            modal: {
                blocked: "Sticker bloqueado. ID: {{id}} NOMBRE: {{name}}",
                unblock: "Desbloquear {{name}}"
            },
            context: {
                blockSticker: "Bloquear sticker",
                unblockSticker: "Desbloquear sticker"
            },
            text: {
                failedToRender: "No se pudo mostrar :("
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Hace que al elegir un sticker se inserte en el cuadro de texto en lugar de enviarse al instante."
        },
        streaks: {
            name: "Streaks",
            description: "Muestra una racha junto a un usuario cuando intercambian MD durante días consecutivos.",
            tooltip: "Racha de {{count}} días",
            tooltipExpiring: "Racha de {{count}} días: ¡escríbanse hoy para mantenerla!",
            option: {
                account: {
                    description: "Inicia o cierra sesión en la API de Streaks. Las rachas se guardan en la API, así que debes iniciar sesión para que se registren.",
                    login: "Iniciar sesión en la API de Streaks",
                    logout: "Cerrar sesión en la API de Streaks"
                },
                eliteColor: "Color de racha élite (100+ días)",
                diamondColor: "Color de racha diamante (60+ días)",
                platinumColor: "Color de racha platino (45+ días)",
                goldColor: "Color de racha oro (30+ días)",
                silverColor: "Color de racha plata (14+ días)",
                bronzeColor: "Color de racha bronce (7+ días)",
                defaultColor: "Color de racha predeterminado (1+ días)"
            },
            toast: {
                authFailed: "Error al autorizar: {{error}}",
                failedToAuthorizeMessage: "No se pudo autorizar: {{message}}",
                authorizationExpired: "La autorización de Streaks expiró. Vuelve a autorizar en la configuración del plugin Streaks."
            }
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Activa automáticamente el Modo Streamer cuando inicias una transmisión en Discord."
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Desactiva los códecs de vídeo que elijas para transmisiones y cámaras.",
            option: {
                disableAv1Codec: {
                    label: "Desactivar códec AV1",
                    description: "Hacer que Discord no considere usar AV1 para transmisiones y cámaras."
                },
                disableH265Codec: {
                    label: "Desactivar códec H265",
                    description: "Hacer que Discord no considere usar H265 para transmisiones y cámaras."
                },
                disableH264Codec: {
                    label: "Desactivar códec H264",
                    description: "Hacer que Discord no considere usar H264 para transmisiones y cámaras."
                },
                disableVP8Codec: {
                    label: "Desactivar códec VP8",
                    description: "Hacer que Discord no considere usar VP8 para transmisiones y cámaras."
                },
                disableVP9Codec: {
                    label: "Desactivar códec VP9",
                    description: "Hacer que Discord no considere usar VP9 para transmisiones y cámaras."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Personaliza el límite de Súper Reacciones simultáneas y actívalas por defecto.",
            option: {
                superReactByDefault: {
                    label: "Súper reaccionar por defecto",
                    description: "El selector de reacciones se abrirá en modo Súper Reacción."
                },
                unlimitedSuperReactionPlaying: {
                    label: "Súper reacciones ilimitadas",
                    description: "Elimina el límite de animaciones de Súper Reacciones que se ven a la vez."
                },
                superReactionPlayingLimit: {
                    label: "Límite de animaciones",
                    description: "Máximo de Súper Reacciones a animar. Pon 0 para desactivarlas."
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Reemplaza texto en tus mensajes. Puedes encontrar reglas en el servidor de Plexcord.",
            importExport: {
                title: "Importar y exportar",
                description: "Exporta tus reglas como un archivo JSON o importa reglas para agregarlas a las existentes.",
                export: "Exportar JSON",
                import: "Importar JSON",
                success: "Reglas importadas correctamente.",
                failed: "No se pudieron importar las reglas. Elige un archivo JSON de TextReplace válido."
            },
            option: {
                replace: {
                    label: "Reemplazar",
                    string: "Reemplazos simples",
                    stringDescription: "Reglas simples de buscar y reemplazar. Por ejemplo, encontrar 'brb' y reemplazarlo por 'be right back'",
                    regex: "Reemplazos con Regex",
                    regexDescription: "Reemplazos más potentes usando expresiones regulares. Esta sección es para usuarios avanzados. Si no lo entiendes, simplemente ignóralo",
                    myMessages: "Aplicar a mis mensajes (visible para todos)",
                    othersMessages: "Aplicar a mensajes ajenos (solo visible para ti)",
                    allMessages: "Aplicar a todos los mensajes"
                },
                stringRules: {
                    label: "Reglas de texto",
                    description: "Reglas para reemplazar texto simple."
                },
                regexRules: {
                    label: "Reglas de Regex",
                    description: "Reglas avanzadas usando expresiones regulares."
                }
            },
            modal: {
                name: "Nombre",
                nameDescription: "Un nombre opcional para ayudarte a identificar esta regla.",
                search: "Buscar una regla...",
                noResults: "Ninguna regla coincide con tu búsqueda.",
                title: "Probar reglas",
                find: "Buscar",
                findRegex: "Patrón regex",
                findText: "Texto a reemplazar",
                replace: "Reemplazar",
                replaceDescription: "El texto que reemplazará el texto encontrado",
                includes: "Solo si incluye",
                includesDescription: "Esta regla solo se aplicará si el mensaje incluye este texto. Esto es opcional",
                type: "Escribe un mensaje",
                applied: "Mensaje con reglas aplicadas",
                delete: "Eliminar regla",
                add: "Agregar regla",
                empty: "Regla vacía",
                rule: "Regla",
            },
            text: {
                optionallyOnlyApplyThis: "Opcionalmente, aplicar esta regla solo si el mensaje incluye este texto.",
                emptyRule: "Regla vacía {{number}}",
                ruleWithFind: "Regla {{number}} - {{find}}"
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Añade atributos de datos a varios elementos para facilitar la creación de temas."
        },
        timezones: {
            name: "Timezones",
            description: "Muestra la hora local de los usuarios en sus perfiles y encabezados de mensajes.",
            button: {
                wantToSave: "¿Quieres guardar tu zona horaria en la base de datos? Haz clic aquí.",
                yourLocalTimezone: "(Tu zona horaria local)"
            },
            context: {
                set: "Establecer zona horaria local"
            },
            toast: {
                refresh: {
                    successfully: "¡Zonas horarias actualizadas!",
                    failed: "¡Error al actualizar zonas horarias!",
                    failedTo: "No se pudieron actualizar las zonas horarias."
                },
                update: {
                    successfully: "¡Zona horaria actualizada!",
                    failed: "Error al establecer zona horaria."
                },
                delete: {
                    successfully: "¡Zona horaria eliminada!",
                    failed: "Error al eliminar zona horaria."
                },
                auth: {
                    failed: "Error de autenticación.",
                    success: "¡Autorización exitosa!"
                }
            },
            toolbox: {
                set: "Establecer zona horaria de BD",
                refresh: "Actualizar zonas horarias de BD"
            },
            option: {
                showOwnTimezone: {
                    label: "Mostrar mi zona horaria",
                    description: "Muestra tu propia hora local en tu perfil y mensajes."
                },
                twentyFourHourTime: {
                    label: "Formato 24 horas",
                    description: "Mostrar la hora en formato de 24 h"
                },
                showTimezoneInfo: {
                    label: "Mostrar info de zona horaria",
                    description: "Muestra el nombre de la zona horaria junto a la hora."
                },
                showMessageHeaderTime: {
                    label: "Mostrar hora en mensajes",
                    description: "Muestra la hora local en el encabezado de los mensajes."
                },
                showProfileTime: {
                    label: "Mostrar hora en perfil",
                    description: "Muestra la hora local en los perfiles de usuario."
                },
                useDatabase: {
                    label: "Usar base de datos",
                    description: "Usa la base de datos externa para obtener zonas horarias de otros usuarios."
                },
                preferDatabaseOverLocal: {
                    label: "Preferir base de datos",
                    description: "Prefiere la base de datos sobre el almacenamiento local para las zonas horarias."
                },
                databaseUrl: {
                    label: "URL de la base de datos",
                    description: "La URL del servidor de la base de datos de zonas horarias."
                },
                setDatabaseTimezone: {
                    label: "Guardar zona horaria en BD",
                    description: "Guarda tu zona horaria en la base de datos compartida.",
                    setTimezone: "Guardar en BD"
                },
                resetDatabaseTimezone: {
                    label: "Restablecer zona horaria de BD",
                    description: "Elimina tu zona horaria de la base de datos.",
                    failed: "Error al restablecer la zona horaria de la BD"
                },
                askedTimezone: {
                    label: "Consulta realizada",
                    description: "Indica si ya se le preguntó al usuario por su zona horaria."
                },
                recipientTimezoneInDms: {
                    label: "Zona horaria del destinatario en MD",
                    description: "En los MD, mostrar la zona horaria del destinatario en tus mensajes"
                },
                showLocalTimezone: {
                    label: "Mostrar zona horaria local",
                    description: "Mostrar la zona horaria local en lugar de solo \"local\""
                }
            },
            modal: {
                title: "Zonas horarias",
                select: "Seleccionar zona horaria",
                selectPlaceholder: "Elige una zona horaria",
                delete: "Eliminar zona horaria",
                save: "Guardar"
            },
            text: {
                invalidResponseFormat: "Formato de respuesta no válido"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "Muestra una notificación flotante cada vez que recibes un mensaje directo.",
            notification: {
                call: "¡Inició una llamada contigo!",
                recipient: {
                    add: "{{actor}} añadió a {{target}} al grupo.",
                    remove: "{{actor}} eliminó a {{target}} del grupo.",
                    left: "Salió del grupo."
                },
                channel: {
                    change: {
                        name: "Cambió el nombre del canal a {{name}}.",
                        icon: "Cambió el ícono del canal."
                    },
                    pinned: "Fijó un mensaje."
                },
                sent: {
                    embed: "Envió una vista previa (embed).",
                    sticker: "Envió un sticker.",
                    attachment: "Archivo adjunto:"
                },
                redacted: "El contenido del mensaje ha sido ocultado.",
                friend: {
                    accept: "{{user}} ahora es tu amigo",
                    acceptBody: "Ahora puedes enviarle mensajes directamente.",
                    request: "{{user}} te envió una solicitud de amistad.",
                    requestBody: "Puedes aceptarla o rechazarla en la pestaña de Amigos."
                },
                example: {
                    title: "Notificación de ejemplo",
                    body: "Este es el cuerpo de una notificación de ejemplo."
                }
            },
            modal: {
                dismiss: "Cerrar notificación",
                attachments: "Se envió {{attachments}} archivo{{s}} adjunto{{s}}."
            },
            option: {
                position: {
                    label: "Posición",
                    description: "La posición de la notificación flotante",
                    topRight: "Superior derecha",
                    topLeft: "Superior izquierda",
                    bottomRight: "Inferior derecha",
                    bottomLeft: "Inferior izquierda"
                },
                timeout: {
                    label: "Tiempo de espera",
                    description: "Tiempo en segundos que se mostrarán las notificaciones"
                },
                opacity: {
                    label: "Opacidad",
                    description: "La opacidad de la notificación flotante"
                },
                determineServerNotifications: {
                    label: "Respetar ajustes del servidor",
                    description: "Determina si mostrar notificaciones basándose en los ajustes de notificación del servidor"
                },
                respectDoNotDisturb: {
                    label: "Respetar No molestar",
                    description: "No mostrar notificaciones cuando tu estado sea No molestar."
                },
                directMessages: {
                    label: "Mensajes directos",
                    description: "Mostrar notificaciones de mensajes directos"
                },
                groupMessages: {
                    label: "Mensajes grupales",
                    description: "Mostrar notificaciones de mensajes grupales"
                },
                friendServerNotifications: {
                    label: "Notificaciones de amigos en servidores",
                    description: "Mostrar notificaciones cuando tus amigos envían mensajes en servidores que comparten contigo"
                },
                friendActivity: {
                    label: "Actividad de amigos",
                    description: "Mostrar notificaciones al añadir a alguien o recibir solicitudes de amistad"
                },
                notifyFor: {
                    label: "Notificar para",
                    description: "Crea una lista de IDs de canales para recibir notificaciones (separados por comas)"
                },
                ignoreUsers: {
                    label: "Ignorar usuarios",
                    description: "Crea una lista de IDs de usuarios para ignorar todas sus notificaciones (separados por comas)"
                },
                exampleButton: {
                    label: "Botón de ejemplo",
                    description: "Muestra una notificación flotante de ejemplo.",
                    show: "Mostrar notificación de ejemplo"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Añade un atajo personalizable para activar/desactivar la cámara web.",
            option: {
                keyBind: {
                    label: "Atajo de teclado",
                    description: "La tecla para alternar la cámara web al presionarla."
                },
                reqCtrl: {
                    label: "Requiere Ctrl",
                    description: "Requiere mantener presionado Control."
                },
                reqShift: {
                    label: "Requiere Shift",
                    description: "Requiere mantener presionado Shift."
                },
                reqAlt: {
                    label: "Requiere Alt",
                    description: "Requiere mantener presionado Alt."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Traduce mensajes con Google Translate o DeepL",
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
                    label: "Entrada (Recibidos)",
                    description: "Idioma original de los mensajes recibidos"
                },
                receivedOutput: {
                    label: "Salida (Recibidos)",
                    description: "Idioma al que se traducirán los mensajes recibidos"
                },
                sentInput: {
                    label: "Entrada (Enviados)",
                    description: "Idioma original de tus propios mensajes"
                },
                sentOutput: {
                    label: "Salida (Enviados)",
                    description: "Idioma al que se traducirán tus propios mensajes"
                },
                service: {
                    label: "Servicio de traducción",
                    description: "DeepL requiere una clave de API pagada de DeepL Pro",
                    descriptionWeb: "Servicio de traducción (¡No compatible en la versión web!)",
                    google: "Google Translate",
                    deepl: "DeepL Gratis - Clave API requerida",
                    deeplPro: "DeepL Pro - Clave API requerida",
                    kagi: "Kagi Translate - Clave API requerida"
                },
                kagiSession: {
                    label: "Sesión de Kagi",
                    description: "Obtén tu token de sesión en https://kagi.com/settings?p=user_details"
                },
                deeplApiKey: {
                    label: "Clave de API de DeepL",
                    description: "Clave de API de DeepL",
                    placeholder: "Obtén tu clave en https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Traducción automática",
                    description: "Traduce automáticamente tus mensajes antes de enviarlos. También puedes usar Shift+Clic derecho en el botón de traducir para alternar esto"
                },
                showAutoTranslateTooltip: {
                    label: "Mostrar aviso de traducción automática",
                    description: "Muestra un aviso en la barra de chat cada vez que un mensaje se traduce automáticamente"
                }
            },
            modal: {
                title: "Traducir",
                select: "Seleccionar un idioma",
                auto: "Traducción automática",
                dismiss: "Cerrar",
                translated: "traducido desde {{from}}",
                failed: {
                    to: "Error al traducir {{text}}",
                    connect: "Error al conectar con la API de DeepL:"
                },
                wrong: "Algo salió mal. Si el problema persiste, revisa la consola o pide ayuda en el servidor de soporte.",
                deepl: {
                    api: "Cuota de la API de DeepL excedida. Cambiando a Google Translate.",
                    apiKey: "La clave de API de DeepL no está configurada. Cambiando a Google",
                    auth: "Clave de API o versión de DeepL inválida"
                },
                autoTranslateEnabled: {
                    title: "Traducción automática de Plexcord activada",
                    body: "¡Acabas de activar la traducción automática! Cualquier mensaje se traducirá antes de ser enviado.",
                    confirm: "Desactivar traducción automática",
                    cancel: "Entendido",
                    secondaryConfirm: "No mostrar de nuevo"
                }
            },
            button: {
                manageLanguages: "Personalizar idiomas de traducción y traducción automática"
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Añade un indicador si alguien está escribiendo en un canal.",
            option: {
                includeCurrentChannel: {
                    label: "Incluir canal actual",
                    description: "Define si mostrar el indicador de escritura para el canal seleccionado actualmente"
                },
                includeMutedChannels: {
                    label: "Incluir canales silenciados",
                    description: "Define si mostrar el indicador de escritura para canales silenciados."
                },
                includeIgnoredUsers: {
                    label: "Incluir usuarios ignorados",
                    description: "Define si mostrar el indicador de escritura para usuarios ignorados."
                },
                includeBlockedUsers: {
                    label: "Incluir usuarios bloqueados",
                    description: "Define si mostrar el indicador de escritura para usuarios bloqueados."
                },
                indicatorMode: {
                    label: "Modo del indicador",
                    description: "¿Cómo debería mostrarse el indicador?",
                    both: "Avatares y puntos animados",
                    dots: "Puntos animados",
                    avatars: "Avatares"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Muestra avatares y colores de roles en el indicador de escritura",
            option: {
                showAvatars: {
                    label: "Mostrar varios usuarios",
                    description: "Mostrar avatares en el indicador de escritura"
                },
                showRoleColors: {
                    label: "Mostrar colores de roles",
                    description: "Mostrar colores de roles en el indicador de escritura"
                },
                alternativeFormatting: {
                    label: "Formato alternativo",
                    description: "Muestra un mensaje más útil cuando varios usuarios están escribiendo"
                },
                amITyping: {
                    label: "Estoy escribiendo",
                    description: "Te muestra si otras personas pueden verte escribir"
                }
            },
            others: {
                areTyping: "y {{count}} más están escribiendo..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Elimina la sangría inicial de los bloques de código"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Convierte unidades métricas a imperiales y viceversa",
            tooltip: "Convertir unidades",
            option: {
                myUnits: {
                    label: "Mis unidades",
                    description: "Las unidades que usas y a las que quieres convertir. Por defecto es Imperial",
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
            description: "Aumenta la cantidad de cuentas que puedes añadir.",
            option: {
                maxAccounts: {
                    label: "Cuentas máximas",
                    description: "Número de cuentas que se pueden añadir, o 0 para sin límite"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Te permite hacer más zoom en la herramienta de recorte de imagen al cambiar tu avatar",
            option: {
                zoomMultiplier: {
                    label: "Multiplicador de zoom",
                    description: "Multiplicador de zoom"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Te permite volver a mostrar las vistas previas (embeds) en los mensajes",
            context: {
                unsuppress: "Mostrar vista previa",
                suppress: "Ocultar vista previa"
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
                    description: "Intervalo de visualización de notificaciones en minutos"
                },
                historyHotkey: {
                    label: "Atajo del panel de historial",
                    description: "Tecla para mostrar el historial de datos mostrados anteriormente"
                },
                randomFactHotkey: {
                    label: "Atajo de dato aleatorio",
                    description: "Tecla para abrir el panel de datos aleatorios"
                },
                sameFact: {
                    label: "Evitar repetir ítems",
                    description: "Evita mostrar el mismo dato varias veces hasta que se hayan mostrado todos"
                },
                lastNFacts: {
                    label: "Cuántos recientes evitar",
                    description: "Número de datos recientes para evitar repetir (0 = todos)"
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
            description: "Muestra los pronombres del usuario en el encabezado de los mensajes",
            option: {
                pronounsFormat: {
                    label: "Formato de pronombres",
                    description: "El formato en que aparecerán los pronombres en el chat",
                    lowercase: "Minúsculas",
                    capitalized: "Mayúscula inicial"
                },
                showSelf: {
                    label: "Mostrar propios",
                    description: "Activa o desactiva mostrar tus propios pronombres"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Muestra un indicador cuando un usuario está en un canal de voz",
            option: {
                showInUserProfileModal: {
                    label: "Mostrar en el perfil de usuario",
                    description: "Muestra el indicador del canal de voz de un usuario en su perfil junto al nombre"
                },
                showInMemberList: {
                    label: "Mostrar en la lista de miembros",
                    description: "Muestra el indicador del canal de voz en la lista de miembros y de MD"
                },
                showInMessages: {
                    label: "Mostrar en los mensajes",
                    description: "Muestra el indicador del canal de voz en los mensajes"
                }
            },
            modal: {
                inVoiceChat: "En chat de voz"
            },
            notification: {
                cannotJoin: "No puedes unirte al canal de voz del usuario."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Muestra banners de usuario de USRBG, permitiendo que cualquiera tenga un banner sin Nitro",
            option: {
                nitroFirst: {
                    label: "Priorizar Nitro",
                    description: "Qué banner usar si están presentes tanto el de Nitro como el de USRBG",
                    nitro: "Banner de Nitro",
                    usrbg: "Banner de USRBG"
                },
                voiceBackground: {
                    label: "Fondo de voz",
                    description: "Usa banners de USRBG como fondos del chat de voz"
                }
            },
            button: "Obtén tu propio banner de USRBG"
        },
        validReply: {
            name: "ValidReply",
            description: "Corrige el error 'No se pudo cargar el mensaje' al pasar el cursor sobre una respuesta"
        },
        validUser: {
            name: "ValidUser",
            description: "Corrige menciones de usuarios desconocidos que aparecen como '@unknown-user' (pasa el cursor sobre la mención para corregirla)",
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
                earlySupporter: "Partidario inicial",
                earlyVerifiedBotDeveloper: "Desarrollador de bots verificado temprano"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Únete a chats de voz con doble clic en lugar de un solo clic"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Anuncia cuando los usuarios se unen, salen o se mueven de canal de voz mediante un narrador",
            option: {
                voice: {
                    label: "Voz"
                },
                volume: {
                    label: "Volumen",
                    description: "Volumen del narrador"
                },
                rate: {
                    label: "Velocidad",
                    description: "Velocidad del narrador"
                },
                sayOwnName: {
                    label: "Decir propio nombre",
                    description: "Decir tu propio nombre"
                },
                latinOnly: {
                    label: "Solo caracteres latinos",
                    description: "Elimina caracteres no latinos de los nombres antes de decirlos"
                },
                joinMessage: {
                    label: "Mensaje al unirse",
                    description: "Mensaje al unirse"
                },
                leaveMessage: {
                    label: "Mensaje al salir",
                    description: "Mensaje al salir"
                },
                moveMessage: {
                    label: "Mensaje al moverse",
                    description: "Mensaje al moverse"
                },
                muteMessage: {
                    label: "Mensaje al silenciar",
                    description: "Mensaje al silenciar (solo propio por ahora)"
                },
                unmuteMessage: {
                    label: "Mensaje al desilenciar",
                    description: "Mensaje al desilenciar (solo propio por ahora)"
                },
                deafenMessage: {
                    label: "Mensaje al ensordecer",
                    description: "Mensaje al ensordecer (solo propio por ahora)"
                },
                undeafenMessage: {
                    label: "Mensaje al desensordecer",
                    description: "Mensaje al desensordecer (solo propio por ahora)"
                }
            },
            modal: {
                title: "Reproducir sonidos de ejemplo",
                voiceTitle: "Voz",
                voice: "Selecciona una voz",
                languageTitle: "Idioma",
                language: "Selecciona un idioma",
                noVoice: "No se encontraron voces de narrador. ",
                linuxNote: "Instala speech-dispatcher o espeak y ejecuta Discord con la bandera --enable-speech-dispatcher",
                someNarrator: "Intenta instalar algunas en los ajustes de Narrador de tu sistema operativo",
                dontHaveEnglish: "No tienes voces en inglés instaladas, por lo que el narrador podría sonar raro",
                customiseMessages: "Puedes personalizar los mensajes hablados a continuación. Puedes desactivar mensajes específicos dejándolos vacíos",
                placeholdersInfo: "Las variables especiales {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} y {{CHANNEL}} se reemplazarán por el nombre del usuario (nada si eres tú mismo), el nombre de pantalla, el apodo en el servidor actual y el nombre del canal respectivamente"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Permite hacer clic en avatares y banners en perfiles de usuario; añade opciones de Ver Avatar/Banner en el menú contextual de usuarios, servidores y grupos.",
            context: {
                view: {
                    avatar: "Ver avatar",
                    serverAvatar: "Ver avatar del servidor",
                    icon: "Ver ícono",
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
                    description: "El tamaño de imagen a usar"
                }
            },
            text: {
                viewAvatarDecoration: "Ver decoración del avatar"
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Copia y visualiza el contenido o los datos sin procesar (raw) de cualquier mensaje, canal o servidor",
            context: {
                copyLeft: "Copiar Raw (Clic izquierdo) / Ver Raw (Clic derecho)",
                copyRight: "Copiar Raw (Clic derecho) / Ver Raw (Clic izquierdo)",
                view: "Ver Raw"
            },
            option: {
                popoverButton: {
                    label: "Botón en el mensaje",
                    description: "Muestra un botón en el menú flotante del mensaje para ver los datos sin procesar."
                },
                clickMethod: {
                    label: "Método de clic",
                    description: "Cambia cómo funciona el botón para ver el contenido/datos sin procesar.",
                    left: "Clic izquierdo para ver contenido raw.",
                    right: "Clic derecho para ver contenido raw."
                },
                messageContextMenu: {
                    description: "Mostrar en el menú contextual del mensaje",
                    label: "Menú contextual del mensaje"
                },
                sortKeys: {
                    description: "Ordenar alfabéticamente las claves de los datos sin procesar.",
                    label: "Ordenar claves"
                },
                stripSensitiveData: {
                    description: "Quitar datos sensibles de los datos sin procesar, como tu correo electrónico y número de teléfono.",
                    label: "Quitar datos sensibles"
                }
            },
            modal: {
                title: "Ver Raw",
                content: "Contenido del mensaje",
                data: "Datos de {{type}}",
                copied: "¡Datos de {{type}} copiados al portapapeles!",
                copy: "Copiar JSON de {{type}}",
                copiedContent: "¡Contenido copiado al portapapeles!",
                copyContent: "Copiar contenido raw"
            },
            types: {
                message: "Mensaje",
                channel: "Canal",
                guild: "Servidor",
                role: "Rol",
                user: "Usuario"
            },
            text: {
                copyTypeData: "Copiar datos de {{type}}",
                rawTypeData: "Datos sin procesar de {{type}}",
                messageData: "Datos del mensaje"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "Envía MD, silencia o ensordece rápidamente a cualquier usuario desde el panel de llamada de voz.",
            option: {
                showChatButton: {
                    label: "Mostrar botón de chat",
                    description: "Define si quieres mostrar el botón de chat"
                },
                showMuteButton: {
                    label: "Mostrar botón de silenciar",
                    description: "Define si quieres mostrar el botón de silenciar"
                },
                showDeafenButton: {
                    label: "Mostrar botón de ensordecer",
                    description: "Define si quieres mostrar el botón de ensordecer"
                },
                muteSoundboard: {
                    label: "Silenciar Soundboard",
                    description: "Silencia su soundboard al hacer clic en el botón de ensordecer."
                },
                disableVideo: {
                    label: "Desactivar video",
                    description: "Desactiva su video al hacer clic en el botón de ensordecer."
                },
                useServer: {
                    label: "Usar servidor",
                    description: "Usa silenciado/ensordecido de servidor en lugar de local cuando tengas permisos."
                },
                serverSelf: {
                    label: "Servidor (Propio)",
                    description: "Ensordécete o silénciate en el servidor al usar los botones."
                },
                showButtonsSelf: {
                    label: "Mostrar botones en uno mismo",
                    description: "Define si quieres mostrar botones para tu propio usuario.",
                    display: "Mostrar",
                    hide: "Ocultar",
                    disable: "Desactivar"
                },
                whichNameToShow: {
                    label: "Qué nombre mostrar",
                    description: "Elige si mostrar el apodo o nombre de usuario en el aviso flotante.",
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
                navigate: "Ir a los MD",
                open: "Abrir MD con {{username}}",
                yourself: "a ti mismo",
                serverMute: "Silenciado de servidor",
                serverDeafen: "Ensordecido de servidor",
                mute: "Silenciar",
                deafen: "Ensordecer",
                unmute: "Desilenciar",
                undeafen: "Desensordecer",
                serverUnmute: "Desilenciado de servidor",
                serverUndeafen: "Desensordecido de servidor"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Registra quién entra y sale de los canales de voz",
            context: {
                view: "Ver registro del canal"
            },
            modal: {
                joined: "Se unió a <#{{channel}}>",
                left: "Salió de <#{{channel}}>",
                movedTo: "Se movió a <#{{channel}}>",
                movedFrom: "Se movió desde <#{{channel}}>",
                noLogs: "No hay registros para mostrar.",
                logs: "Registros de {{channel}}"
            },
            option: {
                mode: {
                    label: "Modo",
                    description: "Cómo mostrar el registro del canal de voz",
                    menu: "Menú de registro",
                    associated: "Registrar directamente en el chat asociado",
                    both: "Registrar en el chat y en el menú"
                },
                voiceChannelChatSelf: {
                    label: "Registrar acciones propias",
                    description: "Registra tus propios eventos de canal de voz"
                },
                voiceChannelChatSilent: {
                    label: "Registro silencioso",
                    description: "Los mensajes de unión/salida/movimiento en el chat del canal de voz serán silenciosos"
                },
                voiceChannelChatSilentSelf: {
                    label: "Registro propio silencioso",
                    description: "Tus propios mensajes de eventos serán silenciosos si estás en el canal de voz"
                },
                ignoreBlockedUsers: {
                    label: "Ignorar usuarios bloqueados",
                    description: "No registrar a usuarios bloqueados"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Este plugin permite realizar múltiples acciones en todo un canal (mover, silenciar, desconectar, etc.).",
            option: {
                waitAfter: {
                    label: "Esperar tras acción",
                    description: "Cantidad de acciones de API antes de esperar (para evitar límites de velocidad)"
                },
                waitSeconds: {
                    label: "Segundos de espera",
                    description: "Tiempo de espera entre cada acción (en segundos)"
                }
            },
            context: {
                voiceTools: "Herramientas de voz",
                mentionAll: "Mencionar a todos los usuarios",
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
            description: "Añade una opción de descarga a los mensajes de voz. (Abre una nueva pestaña en el navegador)",
            context: {
                download: "Descargar mensaje de voz"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Permite enviar mensajes de voz como en la versión móvil. Para hacerlo, haz clic derecho en el botón de subida y selecciona Enviar mensaje de voz.",
            option: {
                noiseSuppression: {
                    label: "Supresión de ruido",
                    description: "Supresión de ruido"
                },
                echoCancellation: {
                    label: "Cancelación de eco",
                    description: "Cancelación de eco"
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
                preview: "Vista previa",
                failed: "Error al procesar el archivo de audio seleccionado:",
                oggOpus: "Los mensajes de voz deben ser OggOpus para ser reproducibles en iOS. Este archivo es {{type}}, por lo que no se podrá reproducir en iOS.",
                fix: "Para solucionarlo, conviértelo a OggOpus, por ejemplo usando el {{link}}",
                sending: "Enviando mensaje de voz... Por favor, espera.",
                stop: "Detener grabación",
                start: "Iniciar grabación",
                resume: "Reanudar grabación",
                pause: "Pausar grabación",
                recording: "GRABANDO",
                send: "Enviar",
            },
            text: {
                convertioWebConverter: "conversor web de convertio"
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Te permite ajustar el volumen de usuarios y transmisiones por encima del máximo predeterminado.",
            option: {
                multiplier: {
                    label: "Multiplicador",
                    description: "Multiplicador de volumen"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Vuelve a añadir los menús contextuales que faltan en la versión web de Discord: Enlaces e Imágenes (Copiar/Abrir), Área de texto (Copiar, Cortar, Pegar, Ortografía)",
            option: {
                addBack: {
                    label: "Restaurar",
                    description: "Restaura los menús contextuales de Discord para imágenes, enlaces y la barra de chat"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Vuelve a añadir los atajos que faltan en la versión web de Discord. Solo funciona por completo en Plextron/Legcord, no en tu navegador",
            option: {
                showNavigationButtons: {
                    description: "Mostrar los botones de navegación atrás/adelante en la barra de título.",
                    label: "Mostrar botones de navegación"
                },
                overrideCommonKeybinds: {
                    description: "Permite que Discord sustituya los atajos más comunes de navegación entre pestañas (ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+n). Solo funciona en algunos navegadores que dan prioridad a los atajos de las webs.",
                    label: "Sustituir atajos comunes"
                }
            }
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Elimina el límite de bitrate de 2500kbps en clientes Chromium y Plextron.",
            option: {
                experimentalAV1Support: {
                    label: "Soporte AV1 experimental",
                    description: "Activa el códec AV1. Puede causar problemas como transmisiones que cargan infinitamente"
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Muestra los avatares de los usuarios que reaccionaron a un mensaje",
            option: {
                avatarClick: {
                    label: "Clic en avatar",
                    description: "Permite hacer clic en los avatares dentro de las reacciones"
                },
                clickableAvatars: {
                    description: "Si está activado, al hacer clic en el avatar de un usuario que reaccionó se abrirá su perfil en lugar de añadir la reacción",
                    label: "Avatares clicables"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Pasa el cursor sobre el ícono de transmisión para ver qué usuarios están viendo tu directo",
            modal: {
                noSpectator: "Sin espectadores"
            },
            option: {
                showPanel: {
                    label: "Mostrar panel",
                    description: "Muestra los espectadores debajo del panel de transmisión"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Cambia la primera letra de cada frase a mayúscula en los cuadros de escritura",
            option: {
                blockedWords: {
                    label: "Palabras bloqueadas",
                    description: "Cadenas que no deben capitalizarse (separadas por comas)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Reenvía las notificaciones de Discord a XSOverlay para verlas fácilmente en VR",
            notification: {
                call: {
                    title: "{{user}} te está llamando.",
                    content: "Llamada entrante"
                },
                message: {
                    reply: " (respuesta)",
                    embed: " [embed] ",
                    onlyEmbed: "Envió vista(s) previa(s)",
                    sticker: " [sticker]",
                    onlySticker: "Envió un sticker",
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
                    description: "Puerto WebSocket"
                },
                preferUDP: {
                    label: "Preferir UDP",
                    description: "Actívalo si usas una versión antigua de XSOverlay. Este ajuste se ignora en la web."
                },
                botNotifications: {
                    label: "Notificaciones de bots",
                    description: "Permitir notificaciones de bots"
                },
                serverNotifications: {
                    label: "Notificaciones de servidores",
                    description: "Permitir notificaciones de servidores"
                },
                dmNotifications: {
                    label: "Notificaciones de MD",
                    description: "Permitir notificaciones de mensajes directos"
                },
                groupDmNotifications: {
                    label: "Notificaciones de MD grupales",
                    description: "Permitir notificaciones de mensajes directos grupales"
                },
                callNotifications: {
                    label: "Notificaciones de llamadas",
                    description: "Permitir notificaciones de llamadas"
                },
                pingColor: {
                    label: "Color de mención",
                    description: "Color de mención de usuario"
                },
                channelPingColor: {
                    label: "Color de mención de canal",
                    description: "Color de mención de canal"
                },
                soundPath: {
                    label: "Ruta de sonido",
                    description: "Sonido de notificación (default/warning/error)"
                },
                timeout: {
                    label: "Tiempo de espera",
                    description: "Duración de la notificación (segundos)"
                },
                lengthBasedTimeout: {
                    label: "Espera según longitud",
                    description: "Extiende la duración según el largo del mensaje"
                },
                opacity: {
                    label: "Opacidad",
                    description: "Opacidad de la notificación"
                },
                volume: {
                    label: "Volumen",
                    description: "Volumen"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Bloquea anuncios en los embeds de YouTube y en la actividad 'Watch Together' mediante AdGuard"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "Añade descripciones a las vistas previas (embeds) de videos de YouTube"
        },
        addAttachments: {
            name: "AddAttachments",
            description: "Te permite añadir nuevos archivos adjuntos al editar mensajes",
            toast: {
                youCannotAddMore: "No puedes añadir más archivos adjuntos a este mensaje.",
                youCanOnlyAdd: "Solo puedes agregar {{count}} archivo(s) adjunto(s) más a este mensaje.",
                uploadingThisCanTake: "Subiendo, esto puede tardar un poco...",
                addedOne: "¡Archivo adjunto añadido correctamente!",
                addedMany: "¡Archivos adjuntos añadidos correctamente!"
            },
            text: {
                addAttachments: "Añadir archivos adjuntos"
            }
        },
        advancedPermissions: {
            option: {
                simplifiedCard: {
                    description: "Qué hacer con la tarjeta de permisos simplificada de Discord",
                    label: "Tarjeta simplificada",
                    hide: "Ocultarla",
                    collapse: "Hacerla plegable",
                    show: "Dejarla visible"
                },
                collapsedByDefault: {
                    description: "Iniciar con los permisos simplificados plegados.",
                    label: "Plegado por defecto"
                }
            },
            name: "AdvancedPermissions",
            description: "Muestra la tarjeta de permisos avanzados por defecto.",
            text: {
                simplifiedPermissions: "Permisos simplificados"
            }
        },
        autoJumpToMessage: {
            option: {
                onlyWhenUnfocused: {
                    description: "Solo saltar automáticamente a los mensajes cuando la ventana de Discord no esté enfocada.",
                    label: "Solo sin foco"
                }
            },
            name: "AutoJumpToMessage",
            description: "Abre automáticamente el canal de los mensajes nuevos."
        },
        betterForwards: {
            text: {
                serverIconForName: "Icono del servidor de {{name}}",
                messageAttachments: "Archivos adjuntos del mensaje",
                messageTextWillNot: "El texto del mensaje no se reenviará cuando esta opción esté desactivada",
                forwardEverything: "Reenviar todo",
                viewServer: "Ver servidor",
                embed: "Inserción",
                embedNumber: "Inserción {{number}}",
                image: "Imagen",
                video: "Video",
                serverIcon: "Ícono del servidor {{name}}",
                dmIcon: "Ícono de MD de {{name}}",
                groupDmIcon: "Ícono del MD grupal {{name}}"
            },
            option: {
                resendOnFail: {
                    description: "Intentará reenviar un mensaje si el reenvío falla. Podría causar menciones o spam de texto no deseados. Omite las restricciones NSFW.",
                    label: "Reenviar si falla"
                },
                forwardPreface: {
                    description: "Con qué debe empezar el mensaje reenviado",
                    label: "Prefijo de reenvío"
                },
                dontFollowForwards: {
                    description: "Tras reenviar un solo mensaje, no saltar a él. Mantén Mayús para ignorar este comportamiento.",
                    label: "No seguir reenvíos"
                },
                selfForward: {
                    description: "Mostrar el canal actual en la ventana emergente de la lista de reenvío.",
                    label: "Reenviar a uno mismo"
                }
            },
            name: "BetterForwards",
            description: "Utilidades para reenviar mensajes, incluida la omisión de NSFW y mejoras de la interfaz."
        },
        betterImageEditor: {
            text: {
                search: "Buscar",
                searchSavedPictures: "Buscar imágenes guardadas",
                clearTheSearch: "Borrar la búsqueda",
                savedPictures: "Imágenes guardadas",
                removeName: "Quitar {{name}}",
                removeHoldShiftTo: "Quitar. Mantén Mayús para omitir la confirmación",
                originals: "Originales",
                putBackTheLast: "Restaurar el último",
                forgetEveryRememberedCrop: "¿Olvidar todos los recortes recordados?",
                yourPicturesStayEach: "Tus imágenes se conservan. Cada una se abrirá sin encuadre a partir de ahora, hasta que la vuelvas a recortar.",
                forget: "Olvidar",
                cancel: "Cancelar",
                clearSavedPictures: "¿Borrar las imágenes guardadas?",
                everyPictureYouHave: "Todas las imágenes que guardaste aquí se eliminarán, junto con el recorte recordado de cada una. El archivo propio de Discord y tu avatar y banner actuales no se tocan.",
                clear: "Borrar",
                removeThisPicture: "¿Quitar esta imagen?",
                remove: "Quitar",
                keepTheCroppedCopy: "¿Conservar la copia recortada?",
                itGoesOnThe: "Irá al estante {{toLowerCase}}, junto a tus originales.",
                keep: "Conservar",
                noThanks: "No, gracias",
                exportToAFile: "Exportar a un archivo",
                importFromAFile: "Importar desde un archivo",
                forgetRememberedFraming: "Olvidar el encuadre recordado",
                clearSavedPictures2: "Borrar imágenes guardadas",
                croppedKind: "{{kind}} recortados",
                unpinName: "Desanclar {{name}}",
                pinName: "Anclar {{name}}",
                pinnedNeverDrops: "Anclado, nunca se caerá del estante",
                pinNeverDrops: "Anclar para que nunca se caiga del estante",
                nothingMatches: "Aquí no hay nada que coincida",
                originalsEmpty: "Las imágenes que eliges, pegas o sueltas aparecen aquí",
                croppedEmpty: "Las imágenes que recortas aparecen aquí",
                forgotFraming: "Se olvidó el encuadre de {{count}} imagen(es)",
                nothingFramed: "No había nada encuadrado",
                pictureLibrary: "Biblioteca de imágenes",
                addedPictures: "Se agregaron {{count}} imagen(es)",
                nothingNew: "No hay nada nuevo en ese archivo",
                shownOfTotal: "{{shown}} de {{total}}",
                keptCount: "{{count}} guardadas",
                youAreWearingThis: "Llevas esto puesto",
                removePictureBody: "{{name}} se eliminará de tus imágenes guardadas, junto con el recorte recordado."
            },
            option: {
                librarySize: {
                    description: "Cuántas imágenes conservar en cada estante.",
                    label: "Tamaño de la biblioteca"
                },
                rememberCrop: {
                    description: "Restaura el zoom y la posición que usaste por última vez en una imagen.",
                    label: "Recordar recorte"
                },
                forgetFraming: {
                    description: "Descarta todos los recortes recordados y abre cada imagen como lo haría Discord.",
                    label: "Olvidar encuadre"
                },
                saveCropped: {
                    description: "Guarda una copia de cada imagen después de recortarla.",
                    label: "Guardar recortadas"
                },
                askBeforeSavingCropped: {
                    description: "Preguntar primero en lugar de guardar automáticamente la copia recortada.",
                    label: "Preguntar antes de guardar recortadas"
                },
                transfer: {
                    description: "Lleva tus imágenes, y cómo está encuadrada cada una, a otro dispositivo.",
                    label: "Transferir"
                },
                clearLibrary: {
                    description: "Desecha todas las imágenes que has guardado.",
                    label: "Vaciar biblioteca"
                }
            },
            name: "BetterImageEditor",
            description: "Mantiene un estante con tus imágenes en el editor de avatar y banner, y recuerda cómo recortaste cada una.",
            toast: {
                couldNotExportYour: "No se pudieron exportar tus imágenes",
                couldNotReadThat: "No se pudo leer ese archivo",
                thatPictureIsMissing: "Falta esa imagen",
                thatPictureIsToo: "Esa imagen es demasiado grande para Discord",
                couldNotUseThat: "No se pudo usar esa imagen",
                couldNotKeepThe: "No se pudo conservar la copia recortada"
            },
            kind: {
                avatars: "avatares",
                banners: "banners",
                serverIcons: "iconos de servidor",
                serverBanners: "banners de servidor",
                eventCovers: "portadas de eventos",
                homeHeaders: "cabeceras de inicio",
                decorations: "decoraciones",
                widgetCovers: "portadas de widgets",
                widgetImages: "imágenes de widgets"
            }
        },
        cancelFriendRequest: {
            name: "CancelFriendRequest",
            description: "Añade una forma de cancelar solicitudes de amistad enviadas desde los perfiles.",
            text: {
                cancelOutgoingFriendRequest: "Cancelar solicitud de amistad enviada"
            }
        },
        clipUpload: {
            text: {
                createdAtMustBe: "La fecha de creación debe ser una fecha válida.",
                cancel: "Cancelar",
                uploadClipFile: "Subir archivo de clip",
                fileName: "Nombre del archivo",
                title: "Título",
                epicMoment: "Momento épico",
                message: "Mensaje",
                checkOutThisClip: "¡Mira este clip!",
                spoiler: "Spoiler",
                remix: "Remix",
                thumbnail: "Miniatura",
                file: "Archivo",
                selectFile: "Seleccionar archivo",
                parseClipMetadataFrom: "Extraer metadatos del clip desde el archivo",
                selectFriends: "Seleccionar amigos",
                selectAGame: "Seleccionar un juego",
                customApplicationId: "ID de aplicación personalizado",
                createdAt: "Creado el",
                participants: "Participantes",
                onlyTagPeopleWho: "Etiqueta solo a personas que estuvieron presentes y aceptaron aparecer en este clip.",
                gameApplication: "Juego/Aplicación",
                uploadClipFile2: "Subir archivo de clip",
                uploading: "Subiendo",
                upload: "Subir",
                noFileSelected: "Ningún archivo seleccionado",
                couldNotPrepare: "No se pudo preparar el archivo seleccionado.",
                couldNotRead: "No se pudo leer el archivo seleccionado.",
                couldNotUpdateMetadata: "No se pudieron actualizar los metadatos del clip.",
                notCompatible: "Este archivo no es compatible. Usa un clip MP4 con video H.264 y audio AAC.",
                uploadFailed: "Error en la subida.",
                noUploadSlot: "Discord no devolvió un espacio de subida.",
                uploadCanceled: "Subida cancelada.",
                failedToUpload: "No se pudo subir el clip.",
                selectClipFile: "Seleccionar archivo de clip",
                mp4Video: "Video MP4"
            },
            name: "ClipUpload",
            description: "Añade un botón para subir un archivo de vídeo local como clip de Discord.",
            toast: {
                checkingClipFile: "Comprobando el archivo de clip.",
                convertingClipFile: "Convirtiendo el archivo de clip.",
                clipUploaded: "Clip subido."
            }
        },
        collapsibleUI: {
            name: "CollapsibleUI",
            description: "Superficies plegables nativas para canales, miembros, botones del chat y área de usuario.",
            text: {
                collapsibleUi: "Interfaz plegable",
                guildBar: "Barra de servidores",
                channelList: "Lista de canales",
                membersList: "Lista de miembros",
                messageButtons: "Botones de mensaje",
                titleBar: "Barra de título",
                headerBar: "Barra de cabecera",
                userArea: "Área de usuario"
            },
            option: {
                detachUserArea: {
                    description: "Separa el área de usuario para poder moverla libremente cuando no esté plegada.",
                    label: "Separar área de usuario"
                },
                detachedUserAreaX: {
                    description: "Guarda la posición x del área de usuario separada.",
                    label: "Área de usuario separada X"
                },
                detachedUserAreaY: {
                    description: "Guarda la posición y del área de usuario separada.",
                    label: "Área de usuario separada Y"
                },
                guildBarCollapsed: {
                    description: "Recuerda la barra de servidores como plegada.",
                    label: "Barra de servidores plegada"
                },
                channelListCollapsed: {
                    description: "Recuerda la lista de canales como plegada.",
                    label: "Lista de canales plegada"
                },
                membersListCollapsed: {
                    description: "Recuerda la lista de miembros como plegada.",
                    label: "Lista de miembros plegada"
                },
                chatButtonsCollapsed: {
                    description: "Recuerda la fila de botones de mensaje como plegada.",
                    label: "Botones del chat plegados"
                },
                titleBarCollapsed: {
                    description: "Recuerda la barra de título como plegada.",
                    label: "Barra de título plegada"
                },
                headerBarCollapsed: {
                    description: "Recuerda la barra de cabecera como plegada.",
                    label: "Barra de cabecera plegada"
                },
                userAreaCollapsed: {
                    description: "Recuerda el área de usuario como plegada.",
                    label: "Área de usuario plegada"
                }
            }
        },
        customCommands: {
            text: {
                cancel: "Cancelar",
                name: "Name",
                response: "Respuesta",
                detectedArguments: "Argumentos detectados",
                exampleCommandResponse: "Ejemplo de respuesta del comando:",
                exampleUsage: "Ejemplo de uso:",
                exampleOutput: "Ejemplo de salida:",
                viewArgumentsGuide: "Ver la guía de argumentos",
                editTag: "Editar etiqueta",
                deleteTag: "Eliminar etiqueta",
                registeredTags: "Etiquetas registradas",
                createTag: "Crear etiqueta",
                aTagWithThe: "¡No existe una etiqueta con el nombre **{{name}}**!",
                successfullyDeletedTheTag: "¡Se eliminó correctamente la etiqueta **{{name}}**!",
                ephemeralReserved: "El nombre de argumento \"ephemeral\" está reservado y no se puede usar.",
                createNewTag: "Crear nueva etiqueta",
                editTagSubtitle: "Edita tu comando personalizado.",
                createTagSubtitle: "Crea una nueva etiqueta que se registrará como comando de barra.",
                save: "Guardar",
                create: "Crear",
                variablesHelp: "Tu respuesta puede incluir variables entre llaves dobles que se convertirán en argumentos del comando, por ejemplo",
                defaultValuesHelp: "Puedes indicar argumentos con valores predeterminados usando un signo igual, por ejemplo",
                noTagsYet: "¡Vaya! Aún no hay etiquetas, usa `/tags create` para crear una.",
                nameAlreadyExists: "Ya existe una etiqueta llamada \"{{name}}\" y se sobrescribirá.",
                defaultValue: "(predeterminado: {{value}})"
            },
            name: "CustomCommands",
            description: "Permite crear comandos de barra / etiquetas personalizados",
            option: {
                tagsList: {
                    label: "Lista de etiquetas"
                }
            },
            command: {
                ephemeral: "Si la respuesta solo debe ser visible para ti",
                tags: "Administrar todos los comandos personalizados",
                create: "Crear una nueva etiqueta",
                list: "Listar todas tus etiquetas",
                delete: "Eliminar una etiqueta por su nombre",
                tagName: "El nombre de la etiqueta"
            }
        },
        fileUpload: {
            name: "FileUpload",
            description: "Sube archivos a servicios de alojamiento como Zipline, Nest, S3 y WebDAV",
            dialog: {
                message: "FileUpload quiere subir archivos a {{origin}}",
                detail: "Si no reconoces {{origin}} y no confías plenamente en él, ¡deberías cancelar esta solicitud!\n\nConfiar recuerda este servidor, Permitir solo autoriza esta solicitud.",
                trust: "Confiar",
                allow: "Permitir",
                cancel: "Cancelar"
            },
            toast: {
                approvedServersReset: "Servidores aprobados restablecidos",
                fileTypeNotAllowed: "El filtro actual no permite este tipo de archivo",
                pleaseConfigureFileuploadSettings: "Configura primero los ajustes de FileUpload",
                sharexConfigIsValid: "La configuración de ShareX es válida",
                importedSharexConfig: "Configuración de ShareX importada",
                uploadSuccessfulButNo: "Subida correcta, pero no había ninguna URL para copiar",
                uploadSuccessfulUrlCopied: "Subida correcta, URL copiada al portapapeles",
                uploadSuccessfulButFailed: "Subida correcta, pero no se pudo copiar la URL",
                uploadSuccessful: "Subida correcta",
                uploadSucceededWithServicelabels: "Subida correcta con {{serviceLabels_service}} tras usar el alternativo",
                apngToGifConversion: "Falló la conversión de APNG a GIF; se subirá como APNG",
                uploadAlreadyInProgress: "Ya hay una subida en curso",
                uploadCancelled: "Subida cancelada",
                uploadFailedMessage: "Error en la subida: {{message}}",
                invalidSharexConfig: "Configuración de ShareX no válida",
                failedToImportSharexConfig: "No se pudo importar la configuración de ShareX"
            },
            text: {
                uploadToServicename: "Subir a {{serviceName}}",
                uploadToHost: "Subir al servidor",
                chooseFile: "Elegir archivo...",
                zipline: "Zipline",
                eZHost: "E-Z Host",
                nest: "Nest",
                encryptingHost: "Encrypting.host",
                s3Compatible: "Compatible con S3",
                catboxMoe: "Catbox.moe",
                litterbox: "Litterbox",
                sharexCustomUploader: "Cargador personalizado de ShareX",
                webdavNextcloudOwncloud: "WebDAV (Nextcloud/Owncloud)",
                n1Hour: "1 hora",
                n12Hours: "12 horas",
                n24Hours: "24 horas",
                n72Hours: "72 horas",
                corsProxy: "Proxy CORS",
                query: "Consulta",
                param: "Parámetro",
                fakeLink: "Enlace falso",
                embed: "Incrustación",
                n30Seconds: "30 segundos",
                n1Minute: "1 minuto",
                n2Minutes: "2 minutos",
                n5Minutes: "5 minutos",
                n10Minutes: "10 minutos",
                dragHostsToReorder: "Arrastra los servicios para reordenar los intentos alternativos. Primero se prueba el seleccionado y después se usa este orden.",
                chooseWhereFileuploadSends: "Elige dónde envía FileUpload los archivos nuevos.",
                connectionDetailsForYour: "Datos de conexión de tu instancia de Zipline.",
                theUrlOfYour: "La URL de tu instancia de Zipline",
                yourZiplineApiAuthorization: "Tu token de autorización de la API de Zipline",
                yourZiplineApiToken: "Tu token de API de Zipline",
                folderIdForUploads: "ID de carpeta para subidas (déjalo vacío para ninguna)",
                leaveEmptyForNo: "Déjalo vacío para no usar carpeta",
                connectionDetailsForE: "Datos de conexión para subidas a E-Z Host.",
                yourEZHost: "Tu clave de API de E-Z Host",
                connectionDetailsForNest: "Datos de conexión para subidas a Nest.",
                yourNestApiAuthorization: "Tu token de autorización de la API de Nest",
                yourNestApiToken: "Tu token de API de Nest",
                connectionDetailsForEncrypting: "Datos de conexión para subidas a Encrypting.host.",
                yourEncryptingHostApi: "Tu clave de API de Encrypting.host",
                howEncryptingHostShould: "Cómo debe formatear Encrypting.host los enlaces devueltos.",
                selectUrlStyle: "Selecciona el estilo de URL",
                optionalTitleForEmbed: "Título opcional para respuestas con estilo de incrustación.",
                optionalTitle: "Título opcional",
                optionalColorForEmbed: "Color opcional para respuestas con estilo de incrustación.",
                optionalColor: "Color opcional",
                optionalFakeLinkValue: "Valor de enlace falso opcional para respuestas con estilo fakelink.",
                optionalFakeLink: "Enlace falso opcional",
                connectionDetailsAndObject: "Datos de conexión y nombres de objetos para tu bucket.",
                s3CompatibleEndpointE: "Endpoint compatible con S3 (p. ej., https://<accountid>.r2.cloudflarestorage.com)",
                bucketToUploadInto: "Bucket al que se subirá",
                awsRegionOrAuto: "Región de AWS o auto para Cloudflare R2",
                s3CompatibleAccessKey: "Clave de acceso compatible con S3",
                yourAccessKeyId: "Tu ID de clave de acceso",
                s3CompatibleSecretKey: "Clave secreta compatible con S3",
                yourSecretAccessKey: "Tu clave de acceso secreta",
                optionalTemporaryCredentialToken: "Token de credenciales temporales opcional",
                optionalSessionToken: "Token de sesión opcional",
                optionalPublicUrlBase: "URL base pública opcional para los enlaces devueltos",
                optionalFolderPrefixInside: "Carpeta/prefijo opcional dentro del bucket",
                useEndpointBucketKey: "Usar el formato endpoint/bucket/clave, recomendado para R2.",
                optionalAccountBindingFor: "Vinculación de cuenta opcional para subidas a Catbox.",
                yourCatboxUserhashFor: "Tu userhash de Catbox para vincular la cuenta; déjalo vacío para subidas anónimas.",
                yourCatboxUserhash: "Tu userhash de Catbox",
                howLongUploadsAre: "Cuánto tiempo se conservan las subidas",
                selectExpiry: "Selecciona la caducidad",
                optionalAccountBindingFor2: "Vinculación de cuenta opcional para subidas a GoFile.",
                optionalGofileTokenTo: "Token de GoFile opcional para subir a tu cuenta.",
                optionalGofileToken: "Token de GoFile opcional",
                connectionDetailsForPixelvault: "Datos de conexión para subidas a PixelVault.",
                yourPixelvaultAuthorizationKey: "Tu clave de autorización de PixelVault.",
                yourPixelvaultUploadKey: "Tu clave de subida de PixelVault",
                optionalAccountBindingFor3: "Vinculación de cuenta opcional para subidas a PixelDrain.",
                optionalPixeldrainApiKey: "Clave de API de PixelDrain opcional para subidas autenticadas. Déjala vacía para subidas anónimas.",
                yourPixeldrainApiKey: "Tu clave de API de PixelDrain",
                pasteImportOrValidate: "Pega, importa o valida una configuración de cargador personalizado de ShareX.",
                pasteYourSharexCustom: "Pega el JSON de tu cargador personalizado de ShareX (.sxcu/.json). DestinationType debe incluir FileUploader o ImageUploader.",
                importFromFileOr: "Importar desde archivo o validar la configuración pegada",
                connectionDetailsForWebdav: "Datos de conexión para servidores WebDAV (Nextcloud, Owncloud, etc.).",
                baseWebdavUrlE: "URL base de WebDAV (p. ej., https://nextcloud.example.com/remote.php/dav/files/username)",
                optionalSubdirectoryOnThe: "Subdirectorio opcional del servidor donde subir (p. ej., uploads)",
                leaveEmptyForRoot: "Déjalo vacío para el directorio raíz",
                selectYourWebdavServer: "Selecciona el tipo de servidor WebDAV. Nextcloud y ownCloud crearán un enlace público para compartir. Genérico devuelve la URL directa del archivo.",
                selectServerType: "Selecciona el tipo de servidor",
                howToReturnThe: "Cómo devolver el enlace público para compartir. Página para compartir enlaza a una página web; Descarga directa enlaza al archivo; Enlace Markdown envuelve la página en un nombre de archivo clicable.",
                selectShareLinkFormat: "Selecciona el formato del enlace",
                controlWhatFileuploadDoes: "Controla qué hace FileUpload después de que un servicio devuelva una URL.",
                stripQueryParametersFrom: "Quitar los parámetros de consulta de la URL del archivo subido.",
                wrapUploadedVideoLinks: "Envolver los enlaces de vídeo subidos con un proxy de incrustación para mejores vistas previas en Discord.",
                chooseWhichEmbedProxy: "Elige qué servicio de proxy de incrustación usar para los enlaces de vídeo subidos",
                selectAnEmbedProxy: "Selecciona un servicio de proxy de incrustación",
                convertApngFilesTo: "Convertir archivos APNG a formato GIF.",
                useTheOriginalFilename: "Usar el nombre original del archivo en lugar de nombrar las subidas como upload.ext.",
                automaticallyCopyTheUploaded: "Copiar automáticamente la URL del archivo subido al portapapeles.",
                onlyUseTheSelected: "Usar solo el cargador seleccionado sin probar servicios alternativos.",
                afterUploadInsertThe: "Tras la subida, insertar la URL resultante en el cuadro de chat actual.",
                wrapInsertedUrlsIn: "Envolver las URL insertadas entre corchetes angulares para evitar la vista previa de Discord.",
                chooseWhenFileuploadTakes: "Elige cuándo FileUpload se encarga de los archivos en lugar de Discord.",
                useFileuploadWhenUploading: "Usar FileUpload al subir mediante el selector de archivos de Discord.",
                useFileuploadOnlyFor: "Usar FileUpload solo para archivos mayores que tu límite actual de subida de Discord.",
                manualDiscordFileSize: "Límite manual de tamaño de archivo de Discord en MB, usado cuando la detección automática falla. Déjalo vacío para automático.",
                auto: "Automático",
                commaSeparatedListOf: "Lista de extensiones separadas por comas (p. ej., png,jpg,gif). Déjala vacía para permitir todas.",
                configureBrowserUploadProxying: "Configura el proxy y los tiempos de espera de las subidas desde el navegador.",
                corsProxyUsedFor: "Proxy CORS opcional para cargas que no pueden pasar por la aplicación de escritorio. El proxy ve cada archivo y token que se envía a través de él, así que usa solo uno de confianza. Déjalo vacío para cargar directamente.",
                maximumTimeToWait: "Tiempo máximo de espera por intento de subida antes de pasar al alternativo",
                selectTimeout: "Selecciona el tiempo de espera",
                drag: "Arrastrar",
                importSxcuJson: "Importar .sxcu/.json",
                validate: "Validar",
                resetToDefault: "Restablecer valores predeterminados",
                progress: "{{percent}} % - {{transferred}} de {{total}}",
                cancel: "Cancelar"
            },
            option: {
                serviceType: {
                    description: "Servicio de subida seleccionado",
                    label: "Tipo de servicio"
                },
                serviceUrl: {
                    description: "URL del servicio Zipline",
                    label: "URL del servicio"
                },
                ziplineToken: {
                    description: "Token de autenticación de Zipline",
                    label: "Token de Zipline"
                },
                folderId: {
                    description: "ID de carpeta de Zipline (opcional)",
                    label: "ID de carpeta"
                },
                ezHostKey: {
                    description: "Clave de API de E-Z Host",
                    label: "Clave de E-Z Host"
                },
                nestToken: {
                    description: "Token de API de Nest",
                    label: "Token de Nest"
                },
                encryptingHostKey: {
                    description: "Clave de API de Encrypting.host",
                    label: "Clave de Encrypting.host"
                },
                encryptingHostUrlStyle: {
                    description: "Estilo de URL de Encrypting.host",
                    label: "Estilo de URL de Encrypting.host"
                },
                encryptingHostDomains: {
                    description: "Lista JSON de dominios de Encrypting.host",
                    label: "Dominios de Encrypting.host"
                },
                encryptingHostTitle: {
                    description: "Título opcional de la incrustación de Encrypting.host",
                    label: "Título de Encrypting.host"
                },
                encryptingHostColor: {
                    description: "Color opcional de la incrustación de Encrypting.host",
                    label: "Color de Encrypting.host"
                },
                encryptingHostFakelink: {
                    description: "Enlace falso opcional de Encrypting.host",
                    label: "Enlace falso de Encrypting.host"
                },
                s3Endpoint: {
                    description: "URL del endpoint compatible con S3",
                    label: "Endpoint de S3"
                },
                s3Bucket: {
                    description: "Nombre del bucket de S3",
                    label: "Bucket de S3"
                },
                s3Region: {
                    description: "Región de S3 (usa auto para R2)",
                    label: "Región de S3"
                },
                s3AccessKeyId: {
                    description: "ID de la clave de acceso de S3",
                    label: "ID de clave de acceso de S3"
                },
                s3SecretAccessKey: {
                    description: "Clave de acceso secreta de S3",
                    label: "Clave de acceso secreta de S3"
                },
                s3SessionToken: {
                    description: "Token de sesión de S3 (opcional)",
                    label: "Token de sesión de S3"
                },
                s3PublicUrl: {
                    description: "URL base pública (opcional)",
                    label: "URL pública de S3"
                },
                s3Prefix: {
                    description: "Prefijo de clave de objeto de S3 (opcional)",
                    label: "Prefijo de S3"
                },
                s3ForcePathStyle: {
                    description: "Usar URL de S3 con estilo de ruta",
                    label: "Forzar estilo de ruta de S3"
                },
                litterboxExpiry: {
                    description: "Periodo de retención de Litterbox",
                    label: "Caducidad de Litterbox"
                },
                catboxUserhash: {
                    description: "Userhash de Catbox para vincular la cuenta",
                    label: "Userhash de Catbox"
                },
                sharexConfig: {
                    description: "JSON del cargador personalizado de ShareX",
                    label: "Configuración de ShareX"
                },
                disableFallbacks: {
                    description: "Desactivar servicios de subida alternativos",
                    label: "Desactivar alternativas"
                },
                autoSend: {
                    description: "Insertar la URL subida en el cuadro de chat",
                    label: "Enviar automáticamente"
                },
                autoFormat: {
                    description: "Envolver la URL insertada entre corchetes angulares",
                    label: "Formato automático"
                },
                bypassDiscordUpload: {
                    description: "Omitir las subidas de Discord y usar FileUpload en su lugar.",
                    label: "Omitir subida de Discord"
                },
                bypassDiscordUploadOnlyOverLimit: {
                    description: "Usar FileUpload solo si los archivos superan el límite de tamaño.",
                    label: "Omitir subida de Discord solo por encima del límite"
                },
                customDiscordFileSizeLimitMB: {
                    description: "Límite manual de tamaño de archivo de Discord en MB. 0 significa detección automática.",
                    label: "Límite de tamaño de Discord personalizado (MB)"
                },
                gofileToken: {
                    description: "Token de API de GoFile (opcional)",
                    label: "Token de GoFile"
                },
                fallbackOrder: {
                    description: "Orden de los cargadores alternativos",
                    label: "Orden alternativo"
                },
                pixelVaultKey: {
                    description: "Clave de subida de PixelVault",
                    label: "Clave de PixelVault"
                },
                pixelDrainKey: {
                    description: "Clave de API de PixelDrain (opcional)",
                    label: "Clave de PixelDrain"
                },
                uploadTimeoutMs: {
                    description: "Tiempo de espera de subida en milisegundos",
                    label: "Tiempo de espera de subida (ms)"
                },
                stripQueryParams: {
                    description: "Quitar los parámetros de consulta de las URL subidas",
                    label: "Quitar parámetros de consulta"
                },
                embedProxyEnabled: {
                    description: "Enviar los enlaces de vídeo subidos a través de un servicio de incrustación.",
                    label: "Proxy de incrustación activado"
                },
                embedProxyService: {
                    description: "Servicio de incrustación que envuelve los enlaces de vídeo subidos.",
                    label: "Servicio de proxy de incrustación"
                },
                corsProxyUrl: {
                    description: "URL de proxy CORS opcional para cargas desde el navegador",
                    label: "URL del proxy CORS"
                },
                apngToGif: {
                    description: "Convertir las subidas APNG a GIF",
                    label: "APNG a GIF"
                },
                preserveOriginalFilename: {
                    description: "Conservar el nombre original del archivo al subirlo.",
                    label: "Conservar nombre original"
                },
                autoCopy: {
                    description: "Copiar automáticamente la URL de subida",
                    label: "Copiar automáticamente"
                },
                autoUploadPastedFiles: {
                    description: "Subir automáticamente archivos del portapapeles al servicio de imágenes al pegarlos en el chat.",
                    label: "Subir automáticamente archivos pegados"
                },
                webdavUrl: {
                    description: "URL del servidor WebDAV",
                    label: "URL de WebDAV"
                },
                webdavUsername: {
                    description: "Nombre de usuario de WebDAV",
                    label: "Usuario de WebDAV"
                },
                webdavPassword: {
                    description: "Contraseña de WebDAV o token de aplicación",
                    label: "Contraseña de WebDAV"
                },
                webdavDirectory: {
                    description: "Subdirectorio opcional en el servidor WebDAV",
                    label: "Directorio de WebDAV"
                },
                webdavServerType: {
                    description: "Tipo de servidor WebDAV",
                    label: "Tipo de servidor WebDAV",
                    nextcloud: "Nextcloud",
                    owncloud: "ownCloud",
                    generic: "WebDAV genérico"
                },
                webdavShareType: {
                    description: "Formato del enlace para compartir de WebDAV",
                    label: "Tipo de compartición de WebDAV",
                    sharepage: "Página para compartir",
                    directdownload: "Descarga directa",
                    markdown: "Enlace Markdown"
                },
                uploadAllowedFileTypes: {
                    description: "Lista separada por comas de extensiones permitidas (p. ej., png,jpg,gif,mp4). Déjala vacía para permitir todos los archivos.",
                    label: "Tipos de archivo permitidos para subir"
                },
                settingsComponent: {
                    description: "Ajustes",
                    label: "Componente de ajustes"
                }
            },
            panel: {
                approvedServers: "Servidores aprobados",
                approvedServersDescription: "Servidores S3 y WebDAV a los que permitiste que FileUpload suba archivos. Al restablecerlos se volverá a preguntar en la próxima carga.",
                resetApprovedServers: "Restablecer servidores aprobados",
                fallbackOrder: "Orden alternativo",
                uploadService: "Servicio de subida",
                zipline: "Zipline",
                serviceUrl: "URL del servicio",
                ziplineToken: "Token de Zipline",
                folderId: "ID de carpeta",
                eZHost: "E-Z Host",
                eZHostApiKey: "Clave de API de E-Z Host",
                nest: "Nest",
                nestToken: "Token de Nest",
                encryptingHost: "Encrypting.host",
                encryptingHostApiKey: "Clave de API de Encrypting.host",
                urlStyle: "Estilo de URL",
                domainsJson: "Dominios (JSON)",
                embedTitle: "Título de la incrustación",
                embedColor: "Color de la incrustación",
                fakeLink: "Enlace falso",
                s3CompatibleStorage: "Almacenamiento compatible con S3",
                s3EndpointUrl: "URL del endpoint de S3",
                bucketName: "Nombre del bucket",
                region: "Región",
                accessKeyId: "ID de la clave de acceso",
                secretAccessKey: "Clave de acceso secreta",
                sessionToken: "Token de sesión",
                publicBaseUrl: "URL base pública",
                objectKeyPrefix: "Prefijo de clave de objeto",
                usePathStyleEndpoint: "Usar endpoint con estilo de ruta",
                catbox: "Catbox",
                catboxUserhash: "Userhash de Catbox",
                litterboxExpiry: "Caducidad de Litterbox",
                gofile: "GoFile",
                gofileToken: "Token de GoFile",
                pixelvault: "PixelVault",
                pixelvaultUploadKey: "Clave de subida de PixelVault",
                pixeldrain: "PixelDrain",
                pixeldrainApiKey: "Clave de API de PixelDrain",
                sharexCustomUploader: "Cargador personalizado de ShareX",
                sharexCustomUploaderConfig: "Configuración del cargador personalizado de ShareX",
                sharexConfigActions: "Acciones de configuración de ShareX",
                webdav: "WebDAV",
                serverUrl: "URL del servidor",
                username: "Usuario",
                passwordOrAppToken: "Contraseña o token de aplicación",
                passwordOrAppToken2: "contraseña o token de aplicación",
                uploadDirectory: "Directorio de subida",
                serverType: "Tipo de servidor",
                shareLinkFormat: "Formato del enlace para compartir",
                uploadBehavior: "Comportamiento de subida",
                stripQueryParameters: "Quitar parámetros de consulta",
                useEmbedProxy: "Usar proxy de incrustación",
                embedProxyService: "Servicio de proxy de incrustación",
                convertApngToGif: "Convertir APNG a GIF",
                preserveOriginalFilename: "Conservar nombre original",
                autoCopyUrl: "Copiar URL automáticamente",
                disableFallbackUploaders: "Desactivar cargadores alternativos",
                insertUrlIntoChatInput: "Insertar URL en el cuadro de chat",
                formatInsertedUrl: "Formatear URL insertada",
                discordIntegration: "Integración con Discord",
                bypassDiscordUploadButton: "Omitir el botón de subida de Discord",
                autoUploadPastedFiles: "Subir automáticamente archivos pegados",
                respectDiscordFileSizeLimit: "Respetar el límite de tamaño de Discord",
                discordLimitOverrideMb: "Sustituir límite de Discord (MB)",
                allowedFileTypes: "Tipos de archivo permitidos",
                network: "Red",
                corsProxyUrl: "URL del proxy CORS",
                uploadTimeout: "Tiempo de espera de subida",
                domainsJsonDescription: "Array JSON de dominios a usar, por ejemplo [\"offensive\"]."
            },
            status: {
                cancelled: "Subida cancelada.",
                uploadingVia: "Subiendo mediante {{service}}...",
                uploading: "Subiendo...",
                unknownError: "Error desconocido",
                startingVia: "Iniciando la subida mediante {{service}}...",
                retryingWith: "Reintentando con {{service}} ({{attempt}}/{{total}})...",
                uploadedVia: "Subido correctamente mediante {{service}}.",
                allFailed: "Todos los servicios de subida fallaron. Último error: {{error}}",
                fileReady: "Archivo listo, iniciando la subida...",
                preparing: "Preparando la subida...",
                failed: "Error en la subida: {{message}}",
                timedOut: "Se agotó el tiempo de subida",
                serviceFailed: "{{service}} falló: {{message}}",
                preparingFile: "Preparando {{name}}{{suffix}}..."
            }
        },
        gifMaker: {
            option: {
                lastWidth: {
                    label: "Último ancho"
                },
                lastHeight: {
                    label: "Última altura"
                },
                lastCaptionMode: {
                    label: "Último modo de subtítulo"
                },
                lastCaptionText: {
                    label: "Último texto de subtítulo"
                },
                lastCaptionSize: {
                    label: "Último tamaño de subtítulo"
                },
                lastFontFamily: {
                    label: "Última familia de fuente"
                },
                lastBubbleTipBase: {
                    label: "Última base de la punta del bocadillo"
                },
                maxWidth: {
                    description: "Ancho máximo del ajuste automático.",
                    label: "Ancho máximo"
                },
                maxHeight: {
                    description: "Altura máxima del ajuste automático.",
                    label: "Altura máxima"
                }
            },
            name: "GifMaker",
            description: "Crea y subtitula GIF a partir de cualquier contenido del chat o del selector de GIF.",
            text: {
                send: "Enviar",
                export: "Exportar",
                makeGif: "Crear GIF",
                editGif: "Editar GIF",
                selectAFont: "Selecciona una fuente...",
                enterCaption: "Escribe un subtítulo...",
                width: "Ancho",
                height: "Altura",
                loadingFonts: "Cargando fuentes...",
                captions: "Subtítulos",
                text: "Texto",
                font: "Fuente",
                fontSize: "Tamaño de fuente",
                tipBase: "Base de la punta",
                dimensions: "Dimensiones",
                generatingGif: "Generando GIF...",
                clickOnThePreview: "Haz clic en la vista previa para colocar la punta del bocadillo",
                gifPreview: "Vista previa del GIF"
            },
            captionMode: {
                caption: "Leyenda",
                none: "Ninguno",
                speechbubble: "Burbuja"
            }
        },
        gifProviderSwitcher: {
            name: "GifProviderSwitcher",
            description: "Permite usar la búsqueda de GIF de Tenor o Giphy en lugar de Klipy",
            text: {
                tenor: "Tenor",
                giphy: "Giphy",
                klipy: "Klipy",
                providers: "Proveedores",
                providersCount: "{{count}} proveedores"
            }
        },
        keyboardNavigation: {
            toast: {
                invalidUrl: "URL no válida",
                copiedResponseToClipboard: "¡Respuesta copiada al portapapeles!",
                issueFetchingUrl: "Problema al obtener la URL",
                copiedGitInfoTo: "¡Información de Git copiada al portapapeles!",
                noUpdatesAvailable: "No hay actualizaciones disponibles",
                enabledPlugin: "{{id}} activado correctamente",
                disabledPlugin: "{{id}} desactivado correctamente"
            },
            text: {
                openPlexcordTab: "Abrir pestaña de Plexcord",
                openPluginTab: "Abrir pestaña de plugins",
                openThemesTab: "Abrir pestaña de temas",
                openUpdaterTab: "Abrir pestaña del actualizador",
                openCloudTab: "Abrir pestaña de la nube",
                openBackupRestoreTab: "Abrir pestaña de copia de seguridad y restauración",
                restartClient: "Reiniciar cliente",
                openQuickCssFile: "Abrir archivo QuickCSS",
                openSettingsFolder: "Abrir carpeta de ajustes",
                openInGithub: "Abrir en GitHub",
                openInBrowser: "Abrir en el navegador",
                togglePlugin: "Activar/desactivar plugin",
                enable: "Activar",
                disable: "Desactivar",
                quickFetch: "Obtención rápida",
                copyGitInfo: "Copiar información de Git",
                checkForUpdates: "Buscar actualizaciones",
                aPlexcordUpdateIs: "¡Hay una actualización de Plexcord disponible!",
                clickHereToView: "Haz clic aquí para ver la actualización",
                navigateToServer: "Ir al servidor",
                commandPalette: "Paleta de comandos",
                searchTheCommandPalette: "Buscar en la paleta de comandos",
                multipleChoice: "Opción múltiple",
                textInput: "Entrada de texto",
                openDevTab: "Abrir pestaña de desarrollo",
                enterUrlToFetch: "Ingresa la URL que obtener (solo GET)",
                typeAndPressEnter: "Escribe y presiona Enter",
                recording: "Grabando...",
                recordKeybind: "Grabar atajo",
                enterUrl: "Ingresa una URL"
            },
            option: {
                hotkey: {
                    description: "El atajo para abrir la paleta de comandos.",
                    label: "Atajo"
                },
                allowMouseControl: {
                    description: "Permitir que el ratón controle la paleta de comandos.",
                    label: "Permitir control con ratón"
                }
            },
            name: "KeyboardNavigation",
            description: "Permite navegar por la interfaz con el teclado."
        },
        lastActive: {
            name: "LastActive",
            description: "Un plugin para saltar al último mensaje activo tuyo o de otro usuario en un canal/servidor.",
            toast: {
                failedToFindMessages: "No se encontraron mensajes. Revisa la consola para más detalles.",
                couldnTFindAny: "No se encontraron mensajes recientes de este usuario.",
                channelInformationNotAvailable: "La información del canal no está disponible.",
                failedToJumpTo: "No se pudo saltar al mensaje. Revisa la consola para más detalles."
            },
            text: {
                yourLastMessage: "Tu último mensaje",
                userSLastMessage: "Último mensaje del usuario"
            }
        },
        limitlessScreenshare: {
            text: {
                deleteTag: "Eliminar etiqueta",
                mustBeGreaterThan: "Debe ser >{{value}}",
                maxResolutionTooLow: "La resolución máxima no puede ser inferior a {{value}}",
                maxResolutionRound: "La resolución máxima debe terminar en 0 si Redondear resolución está activado"
            },
            name: "LimitlessScreenshare",
            description: "Añade un control deslizante para la resolución y los fps de la pantalla compartida.",
            option: {
                maxFPS: {
                    description: "FPS máximos del control deslizante",
                    label: "FPS máximos"
                },
                maxResolution: {
                    description: "Resolución máxima del control deslizante",
                    label: "Resolución máxima"
                },
                roundResolution: {
                    description: "Redondear la resolución a los 10p más cercanos",
                    label: "Redondear resolución"
                },
                resolutions: {
                    label: "Resoluciones"
                },
                fpss: {
                    label: "Valores de FPS"
                }
            }
        },
        messagePeek: {
            option: {
                hideMuted: {
                    description: "Ocultar las vistas previas y marcas de tiempo de MD y chats de grupo silenciados.",
                    label: "Ocultar silenciados"
                }
            },
            name: "MessagePeek",
            description: "Muestra la vista previa y la hora del último mensaje en la lista de mensajes directos.",
            text: {
                officialDiscordMessage: "Mensaje oficial de Discord",
                sentGif: "envió un GIF",
                voiceMessage: "mensaje de voz",
                membersCount: "{{count}} miembros",
                you: "Tú"
            }
        },
        messageTranslate: {
            name: "MessageTranslate",
            description: "Traduce automáticamente los mensajes a tu idioma con caché, interruptores por canal y más opciones.",
            option: {
                targetLanguage: {
                    description: "Código del idioma de destino de las traducciones (p. ej., en, es, fr, de, ja).",
                    label: "Idioma de destino"
                },
                excludedLanguages: {
                    description: "Códigos de idioma que se excluyen de la traducción (p. ej., en, es, fr, de, ja).",
                    label: "Idiomas excluidos"
                },
                confidenceRequirement: {
                    description: "Confianza mínima (de 0 a 1) necesaria para mostrar una traducción.",
                    label: "Confianza requerida"
                },
                autoTranslate: {
                    description: "Traducir automáticamente los mensajes al aparecer.",
                    label: "Traducción automática"
                },
                skipOwnMessages: {
                    description: "No traducir tus propios mensajes.",
                    label: "Omitir mensajes propios"
                },
                skipBotMessages: {
                    description: "No traducir mensajes de bots.",
                    label: "Omitir mensajes de bots"
                },
                ignoredGuilds: {
                    description: "Lista de ID de servidores separados por comas en los que no traducir.",
                    label: "Servidores ignorados"
                },
                ignoredChannels: {
                    description: "Lista de ID de canales separados por comas en los que no traducir.",
                    label: "Canales ignorados"
                },
                ignoredUsers: {
                    description: "Lista de ID de usuarios separados por comas que no se traducirán.",
                    label: "Usuarios ignorados"
                },
                showIndicator: {
                    description: "Añadir un pequeño indicador (traducido) a los mensajes traducidos.",
                    label: "Mostrar indicador"
                },
                showOriginal: {
                    description: "Mostrar el texto original y el traducido.",
                    noorig: "No mostrar el original."
                }
            },
            text: {
                showOriginalInSubtext: "Mostrar el original en el subtexto",
                showOriginalMessageTranslation: "Mostrar el mensaje original y la traducción en el subtexto",
                translatedFrom: "traducido del {{lang}}"
            }
        },
        moreStickers: {
            toast: {
                stickerPackDeleted: "Paquete de stickers eliminado",
                stickerPackAdded: "Paquete de stickers añadido",
                stickerPacksAdded: "Paquetes de stickers añadidos",
                stickerPacksExported: "Paquetes de stickers exportados",
                newStickerPacksAlready: "Ya existen paquetes de stickers nuevos; no hace falta migrar",
                oldStickerPacksNot: "No se encontraron paquetes de stickers antiguos; nada que migrar",
                migrationFailedTitleId: "Error en la migración: {{title}} ({{id}})",
                stickerPackMigrationComplete: "Migración de paquetes de stickers completada",
                failedToUploadSticker: "No se pudo subir el sticker"
            },
            text: {
                stickerPackUrl: "URL del paquete de stickers",
                pasteHtmlHere: "Pega el HTML aquí",
                delete: "Eliminar",
                addStickerPackFrom: "Añadir paquete de stickers desde URL",
                insert: "Insertar",
                addStickerPackFrom2: "Añadir paquete de stickers desde HTML",
                insertFromHtml: "Insertar desde HTML",
                addStickerPackFrom3: "Añadir paquete de stickers desde archivo",
                miscTools: "Herramientas varias",
                exportStickerPacks: "Exportar paquetes de stickers",
                migrateFromV1: "Migrar desde v1",
                stickersManagement: "Gestión de stickers",
                theRegionLineRecognized: "La región que reconoce LINE puede diferir de la tuya debido al proxy CORS que usamos.",
                openStickerPackFile: "Abrir archivo de paquete de stickers",
                stickers: "Stickers+",
                categoryTitle: "Categoría, {{title}}",
                searchStickers: "Buscar stickers",
                ffmpegstatecontextIsUndefined: "FFmpegStateContext no está definido",
                recentlyUsed: "Usados recientemente",
                addFromUrl: "Agregar desde URL",
                addFromHtml: "Agregar desde HTML",
                addFromFile: "Agregar desde archivo",
                misc: "Varios",
                invalidUrl: "URL no válida",
                lineOnly: "Actualmente solo se admiten stickers/emojis de LINE.",
                getTelegramStickers: "Consigue stickers de Telegram con",
                htmlFallbackHelp: "Si encuentras errores al agregar un paquete de stickers, puedes intentar agregarlo usando el código fuente HTML de la página del paquete.",
                htmlFallbackApplies: "Esto se aplica a stickers bloqueados por región / sistema operativo / etc."
            },
            option: {
                promptToUpload: {
                    description: "Inserta el sticker en la barra de chat en lugar de enviarlo de inmediato",
                    label: "Preguntar antes de subir"
                },
                packs: {
                    description: "Paquetes",
                    label: "Paquetes"
                }
            },
            name: "MoreStickers",
            description: "Añade paquetes de stickers de otras redes sociales. (p. ej., LINE)"
        },
        musicRichPresence: {
            option: {
                scrobblerBackend: {
                    description: "El backend de scrobbling que se usará.",
                    label: "Backend de scrobbling"
                },
                instanceBaseURL: {
                    description: "La URL base de tu instancia de ListenBrainz.",
                    label: "URL base de la instancia"
                },
                instanceAPIBaseUrl: {
                    description: "La URL base de tu API de ListenBrainz.",
                    label: "URL base de la API de la instancia"
                },
                apiKey: {
                    description: "Clave de API de Last.fm. No es obligatoria, pero sí muy recomendable para evitar límites de uso con nuestra clave compartida",
                    label: "Clave de API"
                },
                username: {
                    description: "Nombre de usuario",
                    label: "Nombre de usuario"
                },
                shareUsername: {
                    description: "Mostrar enlace al perfil de scrobbling",
                    label: "Compartir nombre de usuario"
                },
                clickableLinks: {
                    description: "Convertir los nombres de canción, artista y álbum en enlaces clicables",
                    label: "Enlaces clicables"
                },
                hideWithSpotify: {
                    description: "Ocultar la presencia si Spotify está en ejecución",
                    label: "Ocultar con Spotify"
                },
                hideWithActivity: {
                    description: "Ocultar la presencia si tienes cualquier otra presencia",
                    label: "Ocultar con actividad"
                },
                statusName: {
                    description: "Texto de estado personalizado. Puedes usar estas variables: {artist} | {album} | {title}",
                    label: "Nombre del estado"
                },
                statusDisplayType: {
                    description: "Mostrar el nombre de la canción / artista en la lista de miembros",
                    off: "No mostrar (muestra un mensaje genérico de escucha)"
                },
                nameFormat: {
                    description: "Mostrar el nombre de la canción y del artista en el nombre del estado",
                    statusName: "Usar nombre de estado personalizado"
                },
                missingArt: {
                    description: "Cuando falta el álbum o su portada",
                    logo: "Usar el logotipo grande del scrobbler"
                },
                showLogo: {
                    description: "Mostrar el logotipo del servicio de scrobbling junto a la portada",
                    label: "Mostrar logotipo del scrobbler"
                },
                showAlbumCover: {
                    description: "Mostrar la portada del álbum. Si se desactiva, se mostrará un marcador. Útil si tu música tiene portadas inapropiadas",
                    label: "Mostrar portada del álbum"
                },
                useListeningStatus: {
                    description: "Mostrar el estado \"Escuchando\" en lugar de \"Jugando\""
                }
            },
            name: "MusicRichPresence",
            description: "Rich Presence para Last.FM/Listenbrainz",
            text: {
                showArtistName: "Mostrar nombre del artista",
                showTrackName: "Mostrar nombre de la canción",
                useMusicServiceName: "Usar el nombre del servicio de música (recurre al texto de estado personalizado)",
                useFormatArtistSong: "Usar el formato 'artista - canción'",
                useFormatSongArtist: "Usar el formato 'canción - artista'",
                useArtistNameOnly: "Usar solo el nombre del artista",
                useSongNameOnly: "Usar solo el nombre de la canción",
                useAlbumNameFalls: "Usar el nombre del álbum (recurre al texto de estado personalizado si la canción no tiene álbum)",
                useGenericPlaceholder: "Usar un marcador genérico",
                lastFm: "Last.FM",
                howToCreateAn: "Cómo crear una clave de API",
                set: "Establece",
                applicationName: "Nombre de la aplicación",
                applicationDescription: "Descripción de la aplicación",
                toAnythingAndLeave: "con cualquier valor y deja el resto en blanco.",
                createApiKey: "Crear clave de API",
                invalidInstance: "Instancia compatible con ListenBrainz no válida",
                provideBoth: "Proporciona tanto la",
                apiBaseUrl: "URL base de la API",
                andThe: "como la",
                instanceBaseUrl: "URL base de la instancia",
                forYourCustomInstance: "de tu instancia personalizada de ListenBrainz o vuelve a ListenBrainz/Last.FM",
                allowConnectTitle: "Permitir que Plexcord se conecte a la instancia de ListenBrainz",
                allowConnectBody: "Para usar tu instancia personalizada de ListenBrainz, primero debes permitir que Plexcord se conecte a ella.",
                allowInstance: "Permitir instancia",
                listenBrainzCompatible: "Compatible con ListenBrainz (autoalojado)",
                and: "y"
            }
        },
        noMiddleClickPaste: {
            name: "NoMiddleClickPaste",
            description: "Desactivar el pegado con clic central de Linux - solo Linux"
        },
        orbolayBridge: {
            option: {
                port: {
                    description: "Puerto al que conectarse",
                    label: "Puerto"
                }
            },
            name: "OrbolayBridge",
            description: "Plugin puente para conectar Orbolay con Discord",
            toast: {
                connectedToOrbolayServer: "Conectado al servidor de Orbolay"
            }
        },
        plexcordHelper: {
            name: "PlexcordHelper",
            description: "Se usa para brindar soporte y corregir cierres inesperados causados por Discord.",
            text: {
                restartRequired: "Reinicio necesario",
                restartNow: "Reiniciar ahora",
                later: "Más tarde",
                wouldYouLikeTo: "¿Quieres reiniciar ahora?",
                somePluginsRequireA: "Algunos plugins requieren reiniciar para desactivarse por completo.",
                alreadyEnabled: "{{plugin}} ya está activado",
                alreadyDisabled: "{{plugin}} ya está desactivado",
                disablePlugin: "Desactivar {{plugin}}",
                enablePlugin: "Activar {{plugin}}",
                errorStopping: "Error al detener el plugin {{plugin}}",
                errorStarting: "Error al iniciar el plugin {{plugin}}"
            },
            toast: {
                failedToTolowercase: "No se pudo {{toLowerCase}}",
                aRestartIsRequired: "¡Hace falta reiniciar para que el cambio surta efecto!"
            },
            card: {
                notOnThisVersion: "Este plugin no está en esta versión de Plexcord. ¡Intenta actualizar!"
            }
        },
        plexcordTweaks: {
            name: "PlexcordTweaks",
            option: {
                removeActivitySection: {
                    description: "Quita la sección de actividad encima de la lista de miembros",
                    label: "Quitar sección de actividad"
                },
                showYourOwnActivityButtons: {
                    description: "Discord oculta tus propios botones de actividad por algún motivo",
                    label: "Mostrar tus propios botones de actividad"
                },
                refreshSlashCommands: {
                    description: "Actualiza los comandos de barra para mostrar los nuevos sin reiniciar el cliente.",
                    label: "Actualizar comandos de barra"
                },
                forceRoleIcon: {
                    description: "Fuerza que los iconos de rol aparezcan junto a los mensajes en modo compacto",
                    label: "Forzar icono de rol"
                },
                accountStandingButton: {
                    description: "Mostrar un botón de estado de la cuenta en la barra superior",
                    label: "Botón de estado de la cuenta"
                },
                jsonGateway: {
                    description: "Fuerza JSON al reconectar con el gateway",
                    label: "Gateway JSON"
                },
                enableAutoCorrect: {
                    description: "Añade un interruptor en el menú contextual del cuadro de chat para la autocorrección nativa y los reemplazos de texto",
                    label: "Activar autocorrección"
                },
                autoCorrect: {
                    description: "Usar la autocorrección nativa y los reemplazos de texto en los editores de mensajes",
                    label: "Autocorrección"
                },
                disableHolidayNotifications: {
                    label: "Desactivar notificaciones festivas",
                    description: "Usar siempre los sonidos de notificación predeterminados de Discord"
                },
                showAllBadges: {
                    label: "Mostrar todas las insignias",
                    description: "Muestra todas las insignias del perfil en lugar de agrupar el resto en +n"
                }
            },
            text: {
                allGood: "¡Todo bien!",
                limited: "Limitada",
                veryLimited: "Muy limitada",
                atRisk: "En riesgo",
                suspended: "Suspendida",
                slashCommandsRefreshedSuccessfully: "Comandos de barra actualizados correctamente.",
                failedToRefreshCommands: "No se pudieron actualizar los comandos. Revisa la consola para más detalles.",
                enableAutocorrect: "Activar autocorrección"
            },
            command: {
                refreshCommands: "Actualizar comandos de barra"
            },
            description: "Una colección de pequeños ajustes y correcciones para Discord."
        },
        plextronStreamFixes: {
            option: {
                unlockQualityOptions: {
                    description: "Desbloquear las opciones de calidad de transmisión sin importar el estado de Nitro",
                    label: "Desbloquear opciones de calidad"
                },
                removeResolutionCap: {
                    description: "Permitir resoluciones superiores a 720p a 60 fps",
                    label: "Quitar el límite de resolución"
                },
                forceEncoderSettings: {
                    description: "Forzar al codificador a usar la resolución/fps configurados",
                    label: "Forzar ajustes del codificador"
                },
                preventDownscale: {
                    description: "Impedir que Discord reduzca la resolución de la transmisión",
                    label: "Impedir reducción"
                },
                keyframeInterval: {
                    description: "Intervalo de fotogramas clave en ms (0 = predeterminado del codificador, 5000 = cada 5 s)",
                    label: "Intervalo de fotogramas clave"
                },
                minBitrate: {
                    description: "Tasa de bits mínima del codificador en kbps",
                    label: "Tasa de bits mínima"
                },
                raiseBitrateCaps: {
                    description: "Aumentar los límites predeterminados de tasa de bits en escritorio (objetivo 600 kbps → 10 Mbps, máx. 3,5 Mbps → 40 Mbps)",
                    label: "Aumentar límites de tasa de bits"
                },
                preventFramerateReduction: {
                    description: "Impedir que Discord reduzca los fps de la transmisión cuando no hablas",
                    label: "Impedir reducción de fps"
                },
                bitsPerPixelPct: {
                    description: "Porcentaje de bits por píxel para la tasa de bits objetivo (8 = 0,08 bpp, 12 = 0,12 bpp)",
                    label: "Bits por píxel (%)"
                }
            },
            name: "PlextronStreamFixes",
            description: "Intenta corregir la calidad de transmisión en Plextron modificando el codificador y las restricciones de calidad de Discord."
        },
        rPCEditor: {
            name: "RPCEditor"
        },
        reactionTimestamps: {
            name: "ReactionTimestamps",
            description: "Muestra la hora de cada reacción en la ventana de reacciones.",
            text: {
                userAtTime: "{{user}} a las {{time}}"
            }
        },
        richPresence: {
            text: {
                useCustomStatusName: "Usar nombre de estado personalizado",
                useFormatArtistSong: "Usar el formato 'artista - canción'",
                useFormatSongArtist: "Usar el formato 'canción - artista'",
                useArtistNameOnly: "Usar solo el nombre del artista",
                useSongNameOnly: "Usar solo el nombre de la canción",
                useAlbumName: "Usar el nombre del álbum",
                useLargeStatsFm: "Usar el logotipo grande de Stats.fm",
                useGenericPlaceholder: "Usar un marcador genérico",
                seriesMovieName: "Nombre de la serie/película",
                seriesEpisodeTrackMovie: "Serie - nombre del episodio/pista/película",
                custom: "Personalizado",
                seriesCover: "Portada de la serie",
                episodeCover: "Portada del episodio",
                season1Episode1: "Temporada 1 episodio 1",
                off: "Desactivado",
                listening: "Escuchando",
                playing: "Jugando",
                streaming: "Transmitiendo",
                watching: "Viendo",
                none: "Ninguno",
                navidromeInstanceExposesServer: "Instancia de Navidrome (expone la URL del servidor. Se envía una autenticación única.)",
                lastFmApiSends: "API de Last.fm (envía metadatos a last.fm)",
                donTShowShows: "No mostrar (muestra un mensaje genérico de escucha)",
                showStateLineContent: "Mostrar el contenido de la línea de estado",
                showDetailsLineContent: "Mostrar el contenido de la línea de detalles",
                displayYourCurrentlyPlaying: "Muestra los audiolibros que escuchas como Rich Presence de Discord. Requiere la URL, el usuario y la contraseña de tu servidor AudioBookShelf.",
                audiobookshelfServerUrl: "URL del servidor AudioBookShelf.",
                audiobookshelfUsername: "Usuario de AudioBookShelf.",
                audiobookshelfPassword: "Contraseña de AudioBookShelf.",
                connectsToTosuVia: "Se conecta a tosu mediante WebSocket en el puerto 24050. No requiere configuración; solo asegúrate de que tosu se ejecute junto a osu!.",
                showWhatYouRe: "Muestra lo que escuchas mediante stats.fm. Tu historial de escucha debe ser público.",
                statsFmUsername: "Usuario de Stats.fm.",
                customStatusText: "Texto de estado personalizado.",
                statsFm: "Stats.fm",
                nameFormat: "Formato del nombre.",
                fallbackWhenArtIs: "Alternativa cuando falta la portada.",
                showListeningStatus: "Mostrar estado de escucha.",
                showStatsFmLogo: "Mostrar el logotipo de Stats.fm junto a la portada.",
                showLinkToStats: "Mostrar enlace al perfil de stats.fm.",
                showLinkToSong: "Mostrar enlace a la canción en stats.fm.",
                hideStatsFmPresence: "Ocultar la presencia de stats.fm si Spotify está en ejecución.",
                hideStatsFmPresence2: "Ocultar la presencia de stats.fm si hay un RPC externo en ejecución.",
                disableDownloadingAlbumArt: "Desactivar la descarga de portadas.",
                showWhatYouRe2: "Muestra lo que reproduces en Jellyfin. Para obtener tu clave de API: abre la interfaz web de Jellyfin, pulsa F12 para abrir las herramientas de desarrollo, ve a la pestaña Red, busca solicitudes a tu servidor, localiza el encabezado Authorization (Ctrl+F para buscar) y necesitas la parte de Token='this'. Tu ID de usuario está en la URL de tu página de perfil.",
                jellyfinServerUrl: "URL del servidor Jellyfin.",
                jellyfinApiKey: "Clave de API de Jellyfin.",
                authorization: "Authorization",
                jellyfinUserId: "ID de usuario de Jellyfin.",
                userIdFromProfile: "ID de usuario de la URL del perfil",
                nameDisplayFormat: "Formato de visualización del nombre.",
                customNameTemplate: "Plantilla de nombre personalizada.",
                nameOnJellyfin: "{name} en Jellyfin",
                coverTypeForTv: "Tipo de portada para series de TV.",
                episodeNumberFormat: "Formato del número de episodio.",
                overrideRichPresenceType: "Sustituir el tipo de Rich Presence.",
                showEpisodeNameAfter: "Mostrar el nombre del episodio tras la información de temporada/episodio.",
                showPresenceWhenMedia: "Mostrar la presencia cuando el contenido está en pausa.",
                hideMediaDetails: "Ocultar detalles del contenido.",
                discordRichPresenceFor: "Rich Presence de Discord para Gensokyo Radio. ¡Actívalo y escucha!",
                refreshIntervalInSeconds: "Intervalo de actualización en segundos.",
                showWhatYouRe3: "Muestra lo que escuchas mediante Navidrome.",
                navidromeServerUrlMust: "URL del servidor Navidrome (debe ser un dominio público, p. ej., https://navidrome.example.com).",
                navidromeUsername: "Usuario de Navidrome.",
                navidromePassword: "Contraseña de Navidrome.",
                optionalDiscordApplicationClient: "ID de cliente de aplicación de Discord (opcional).",
                howToFetchAlbum: "Cómo obtener las portadas.",
                optionalProvideYourOwn: "Opcional: introduce tu propia clave de API de Last.fm (se usa la predeterminada si está vacía).",
                showNavidromeLogoIn: "Mostrar el logotipo de Navidrome abajo a la derecha de la portada.",
                showAlbumNameIn: "Mostrar el nombre del álbum en la presencia.",
                whichTypeOfActivity: "Qué tipo de actividad mostrar.",
                showTheStateDetails: "Mostrar el contenido de la línea de estado / detalles en la lista de miembros",
                hideRichPresenceWhen: "Ocultar Rich Presence cuando la música esté en pausa (en lugar de mostrar un cronómetro)",
                theListeningToText: "El texto «Escuchando» (p. ej., {artist})",
                navidrome: "Navidrome",
                theMainLineShowing: "La línea principal que muestra la canción en reproducción (p. ej., {song})",
                song: "{song}",
                theLineBelowThe: "La línea debajo del nombre de la canción (p. ej., {artist})",
                artist: "{artist}",
                theAlbumLineE: "La línea del álbum (p. ej., {album})",
                album: "{album}",
                enableTabLabelsCurrenttab: "Activar la presencia de {{TAB_LABELS_currentTab}}.",
                statsFmProfile: "Perfil de Stats.fm",
                viewSong: "Ver canción",
                showArtistName: "Mostrar nombre del artista",
                showTrackName: "Mostrar nombre de la canción",
                enterValue: "Ingresa un valor"
            },
            name: "RichPresence",
            description: "Centro unificado de Rich Presence para AudioBookShelf, osu!, stats.fm, Jellyfin, Navidrome y Gensokyo Radio.",
            toast: {
                audiobookshelfRpcIsNot: "El RPC de AudioBookShelf no está configurado.",
                jellyfinRpcIsNot: "El RPC de Jellyfin no está configurado.",
                jellyfinReturnedAnInvalid: "Jellyfin devolvió una respuesta no válida. Puede que tu clave de API sea incorrecta."
            },
            option: {
                enabled: {
                    description: "Activar los servicios de Rich Presence.",
                    label: "Activado"
                },
                serviceSettings: {
                    description: "Configuración del servicio.",
                    label: "Ajustes del servicio"
                },
                abs_enabled: {
                    description: "Activar la presencia de AudioBookShelf.",
                    label: "AudioBookShelf activado"
                },
                tosu_enabled: {
                    description: "Activar la presencia de osu! (tosu).",
                    label: "osu! (tosu) activado"
                },
                sfm_enabled: {
                    description: "Activar la presencia de stats.fm.",
                    label: "Stats.fm activado"
                },
                jf_enabled: {
                    description: "Activar la presencia de Jellyfin.",
                    label: "Jellyfin activado"
                },
                gr_enabled: {
                    description: "Activar la presencia de Gensokyo Radio.",
                    label: "Gensokyo Radio activado"
                },
                nd_enabled: {
                    description: "Activar la presencia de Navidrome.",
                    label: "Navidrome activado"
                },
                abs_serverUrl: {
                    description: "URL del servidor AudioBookShelf.",
                    label: "URL del servidor AudioBookShelf"
                },
                abs_username: {
                    description: "Usuario de AudioBookShelf.",
                    label: "Usuario de AudioBookShelf"
                },
                abs_password: {
                    description: "Contraseña de AudioBookShelf.",
                    label: "Contraseña de AudioBookShelf"
                },
                sfm_username: {
                    description: "Usuario de Stats.fm.",
                    label: "Usuario de Stats.fm"
                },
                sfm_shareUsername: {
                    description: "Mostrar enlace al perfil de stats.fm.",
                    label: "Stats.fm: compartir usuario"
                },
                sfm_shareSong: {
                    description: "Mostrar enlace a la canción en stats.fm.",
                    label: "Stats.fm: compartir canción"
                },
                sfm_hideWithSpotify: {
                    description: "Ocultar la presencia de stats.fm si Spotify está en ejecución.",
                    label: "Stats.fm: ocultar con Spotify"
                },
                sfm_hideWithExternalRPC: {
                    description: "Ocultar la presencia de stats.fm si hay un RPC externo en ejecución.",
                    label: "Stats.fm: ocultar con RPC externo"
                },
                sfm_statusName: {
                    description: "Texto de estado personalizado.",
                    label: "Stats.fm: nombre del estado"
                },
                sfm_nameFormat: {
                    description: "Formato del nombre.",
                    label: "Stats.fm: formato del nombre",
                    statusName: "Usar nombre de estado personalizado",
                    artistFirst: "Usar el formato 'artista - canción'",
                    songFirst: "Usar el formato 'canción - artista'",
                    artistOnly: "Usar solo el nombre del artista",
                    songOnly: "Usar solo el nombre de la canción",
                    albumName: "Usar el nombre del álbum"
                },
                sfm_useListeningStatus: {
                    description: "Mostrar estado de escucha.",
                    label: "Stats.fm: usar estado de escucha"
                },
                sfm_missingArt: {
                    description: "Alternativa cuando falta la portada.",
                    label: "Stats.fm: portada ausente",
                    statsFmLogo: "Usar el logotipo grande de Stats.fm",
                    placeholder: "Usar un marcador genérico"
                },
                sfm_showLogo: {
                    description: "Mostrar el logotipo de Stats.fm junto a la portada.",
                    label: "Stats.fm: mostrar logotipo"
                },
                sfm_alwaysHideArt: {
                    description: "Desactivar la descarga de portadas.",
                    label: "Stats.fm: ocultar siempre la portada"
                },
                jf_serverUrl: {
                    description: "URL del servidor Jellyfin.",
                    label: "URL del servidor Jellyfin"
                },
                jf_apiKey: {
                    description: "Clave de API de Jellyfin.",
                    label: "Clave de API de Jellyfin"
                },
                jf_userId: {
                    description: "ID de usuario de Jellyfin.",
                    label: "ID de usuario de Jellyfin"
                },
                jf_nameDisplay: {
                    description: "Formato de visualización del nombre.",
                    label: "Jellyfin: visualización del nombre",
                    default: "Nombre de la serie/película",
                    full: "Serie - nombre del episodio/pista/película",
                    custom: "Personalizado"
                },
                jf_customName: {
                    description: "Plantilla de nombre personalizada.",
                    label: "Jellyfin: nombre personalizado"
                },
                jf_coverType: {
                    description: "Tipo de portada para series de TV.",
                    label: "Jellyfin: tipo de portada",
                    series: "Portada de la serie",
                    episode: "Portada del episodio"
                },
                jf_episodeFormat: {
                    description: "Formato del número de episodio.",
                    label: "Jellyfin: formato de episodio",
                    long: "S01E01",
                    fulltext: "Temporada 1 episodio 1"
                },
                jf_showEpisodeName: {
                    description: "Mostrar el nombre del episodio tras la información de temporada/episodio.",
                    label: "Jellyfin: mostrar nombre del episodio"
                },
                jf_overrideType: {
                    description: "Sustituir el tipo de Rich Presence.",
                    label: "Jellyfin: sustituir tipo",
                    off: "Desactivado",
                    listening: "Escuchando",
                    playing: "Jugando",
                    streaming: "Transmitiendo",
                    watching: "Viendo"
                },
                jf_showPausedState: {
                    description: "Mostrar la presencia cuando el contenido está en pausa.",
                    label: "Jellyfin: mostrar estado en pausa"
                },
                jf_privacyMode: {
                    description: "Ocultar detalles del contenido.",
                    label: "Jellyfin: modo privado"
                },
                gr_refreshInterval: {
                    description: "Intervalo de actualización en segundos.",
                    label: "Gensokyo Radio: intervalo de actualización"
                },
                nd_serverUrl: {
                    description: "URL del servidor Navidrome (p. ej., https://navidrome.example.com)",
                    label: "URL del servidor Navidrome"
                },
                nd_username: {
                    description: "Usuario de Navidrome",
                    label: "Usuario de Navidrome"
                },
                nd_password: {
                    description: "Contraseña de Navidrome",
                    label: "Contraseña de Navidrome"
                },
                nd_clientId: {
                    description: "ID de cliente de aplicación de Discord (opcional)",
                    label: "Navidrome: ID de cliente"
                },
                nd_showSmallImage: {
                    description: "Mostrar el logotipo de Navidrome abajo a la derecha de la portada.",
                    label: "Navidrome: mostrar imagen pequeña"
                },
                nd_showAlbum: {
                    description: "Mostrar el nombre del álbum en la presencia.",
                    label: "Navidrome: mostrar álbum"
                },
                nd_albumArtMode: {
                    description: "Cómo obtener las portadas.",
                    label: "Navidrome: modo de portada",
                    none: "Ninguno",
                    instance: "Instancia de Navidrome (expone la URL del servidor a Discord, no se envía autenticación)",
                    lastfm: "API de Last.fm (envía metadatos de la canción a Last.fm)"
                },
                nd_lastfmApiKey: {
                    description: "Clave de API de Last.fm (opcional)",
                    label: "Navidrome: clave de API de Last.fm"
                },
                nd_refreshInterval: {
                    description: "Intervalo de actualización en segundos.",
                    label: "Navidrome: intervalo de actualización"
                },
                nd_activityType: {
                    description: "Qué tipo de actividad",
                    label: "Navidrome: tipo de actividad",
                    listening: "Escuchando",
                    playingFixesHiddenLines: "Jugando (corrige líneas ocultas)",
                    watching: "Viendo"
                },
                nd_nameString: {
                    description: "Cadena de formato del nombre de la actividad",
                    label: "Navidrome: cadena del nombre"
                },
                nd_detailsString: {
                    description: "Cadena de formato de los detalles de la actividad",
                    label: "Navidrome: cadena de detalles"
                },
                nd_stateString: {
                    description: "Cadena de formato del estado de la actividad",
                    label: "Navidrome: cadena de estado"
                },
                nd_largeTextString: {
                    description: "Cadena de formato del texto grande de la actividad",
                    label: "Navidrome: cadena del texto grande"
                },
                nd_statusDisplayType: {
                    description: "Mostrar el nombre de la canción / artista en la lista de miembros",
                    off: "No mostrar (muestra un mensaje genérico de escucha)"
                },
                nd_hideOnPause: {
                    description: "Ocultar Rich Presence cuando la música esté en pausa",
                    label: "Navidrome: ocultar en pausa"
                }
            },
            panel: {
                password: "Contraseña",
                statsFmUsername: "usuario de stats.fm",
                customStatusText: "Texto de estado personalizado",
                nameFormat: "Formato de nombre",
                missingArtFallback: "Alternativa si falta la portada",
                showListeningStatus: "Mostrar estado de escucha",
                showStatsFmLogo: "Mostrar logotipo de Stats.fm",
                showProfileLink: "Mostrar enlace al perfil",
                showSongLink: "Mostrar enlace a la canción",
                hideWithSpotify: "Ocultar con Spotify",
                hideWithExternalRpc: "Ocultar con RPC externo",
                disableAlbumArt: "Desactivar portadas",
                apiKey: "Clave de API",
                userId: "ID de usuario",
                nameDisplay: "Visualización del nombre",
                customNameTemplate: "Plantilla de nombre personalizada",
                coverType: "Tipo de portada",
                episodeFormat: "Formato de episodio",
                overridePresenceType: "Sustituir tipo de presencia",
                showEpisodeName: "Mostrar nombre del episodio",
                showWhenPaused: "Mostrar en pausa",
                privacyMode: "Modo privado",
                refreshInterval: "Intervalo de actualización",
                clientId: "ID de cliente",
                albumArtMode: "Modo de portada",
                lastFmApiKey: "Clave de API de Last.fm",
                showSmallImage: "Mostrar imagen pequeña",
                showAlbum: "Mostrar álbum",
                activityType: "Tipo de actividad",
                statusDisplayType: "Tipo de visualización del estado",
                hideOnPause: "Ocultar en pausa",
                activityNameFormat: "Formato del nombre de la actividad",
                detailsFormat: "Formato de los detalles",
                stateFormat: "Formato del estado",
                largeTextFormat: "Formato del texto grande",
                enabled: "Activado"
            }
        },
        sedEnhanced: {
            option: {
                regexByDefault: {
                    description: "Invierte la marca `r`: usarla activa el modo sin regex y omitirla usa el modo regex.",
                    label: "Regex por defecto"
                }
            },
            name: "SedEnhanced",
            description: "Amplía el soporte básico de `sed` de Discord."
        },
        showRolesInChat: {
            option: {
                showBots: {
                    description: "Si se muestra el rol más alto en los bots.",
                    label: "Mostrar bots"
                },
                useRoleColor: {
                    description: "Usar el color del rol para el icono.",
                    label: "Usar color del rol"
                }
            },
            name: "ShowRolesInChat",
            description: "Muestra el rol más alto de un usuario junto a su nombre en los mensajes. Oculta/muestra roles concretos desde su menú contextual (clic derecho).",
            text: {
                chatRoleActions: "Acciones de rol en el chat",
                unhideRolesInChat: "Volver a mostrar roles en el chat",
                showRoleInChat: "Mostrar rol en el chat",
                hideRoleInChat: "Ocultar rol en el chat"
            }
        },
        silenceUsers: {
            option: {
                mutedUserIds: {
                    description: "ID de usuarios de Discord separados por comas cuyas menciones e insignias de servidor se silenciarán.",
                    label: "ID de usuarios silenciados"
                }
            },
            name: "SilenceUsers",
            description: "Silencia las menciones @ y los contadores de insignias de servidor de usuarios concretos. Los mensajes normales y los MD no se ven afectados."
        },
        songLink: {
            text: {
                showIfAvailable: "Mostrar si está disponible",
                openInDesktopApp: "Abrir en la aplicación de escritorio",
                loadingSongLink: "Cargando enlace de la canción...",
                pleaseProvideAMusic: "Proporciona un enlace de música.",
                thisWillTakeA: "Esto tardará un momento...",
                noAlternativePlatformsFound: "No se encontraron plataformas alternativas para este enlace.",
                failedToResolveMusic: "No se pudo resolver el enlace de música",
                logo: "Logotipo de {{name}}"
            },
            option: {
                servicesSettings: {
                    description: "ajustes de los servicios",
                    label: "Ajustes de servicios"
                },
                userCountry: {
                    description: "País usado para la búsqueda (código de país de dos letras)",
                    label: "País del usuario"
                },
                includeMetadata: {
                    description: "Incluir el título de la canción y el nombre del artista como encabezado.",
                    label: "Incluir metadatos"
                }
            },
            name: "SongLink",
            description: "Añade botones de servicios de streaming debajo de los enlaces de canciones",
            command: {
                musiclink: "Convierte un enlace de música a otras plataformas de streaming.",
                url: "Enlace de música (Spotify, Deezer, YouTube, Tidal, Apple Music, SoundCloud)"
            }
        },
        songSpotlight: {
            name: "SongSpotlight",
            description: "Presume canciones en tu perfil",
            text: {
                songSpotlight: "Song Spotlight",
                explicit: "Explícito",
                addSong: "Añadir canción",
                addANewSong: "Añadir una canción nueva",
                copyLink: "Copiar enlace",
                removeSong: "Quitar canción",
                failedToLoad: "¡No se pudo cargar!",
                areYouSure: "¿Estás seguro?",
                thisWillOverwriteYour: "Esto sobrescribirá tus canciones actuales.",
                continue: "Continuar",
                nevermind: "No importa",
                thisWillPermanentlyDelete: "Esto eliminará permanentemente todas tus canciones.",
                delete: "Eliminar",
                signInToSong: "Iniciar sesión en Song Spotlight",
                songs: "Canciones",
                authorization: "Authorization",
                importFromClipboard: "Importar del portapapeles",
                copyToClipboard: "Copiar al portapapeles",
                signOut: "Cerrar sesión",
                deleteSongs: "Eliminar canciones",
                more: "Más",
                editSongs: "Editar canciones",
                copyJson: "Copiar JSON",
                looksLikeThereS: "¡Parece que aquí no hay nada!",
                uhOhSongSpotlight: "¡Oh, no! Song Spotlight no se pudo cargar. Revisa la consola para más detalles.",
                stealSong: "Robar canción",
                profileSongs: "Canciones del perfil",
                notEnoughSpace: "No hay espacio suficiente",
                alreadyAdded: "Ya agregaste esta canción",
                invalidLink: "Enlace no válido",
                failedToParseLink: "No se pudo analizar el enlace",
                invalidUrl: "URL no válida",
                goAddSongs: "¿Y bien? ¿A qué esperas? ¡Agrega algunas canciones a tu Song Spotlight!",
                tellUserToAddSongs: "¡Dile a {{name}} que agregue algunas canciones a su Song Spotlight!",
                supportedServices: "Song Spotlight admite estos servicios:",
                viewSongsVia: "También puedes ver tus canciones con el comando",
                viewSongsViaSuffix: ".",
                coverTooltipOwner: "{{sublabel}} de {{label}}",
                coverTooltipBy: "{{label}} de {{sublabel}}",
                lastUpdated: "Última actualización",
                save: "Guardar",
                showMore: "Mostrar {{count}} más"
            },
            toast: {
                youHaveBeenSigned: "Se cerró tu sesión de Song Spotlight. Vuelve a iniciar sesión.",
                songSpotlightError: "Song Spotlight: {{error}}",
                successfullyAuthorized: "¡Autorizado correctamente!",
                failedToPlaySong: "¡No se pudo reproducir la vista previa de la canción!",
                addedSong: "¡Canción añadida!",
                removedSong: "¡Canción quitada!",
                noJsonInClipboard: "¡No hay JSON en el portapapeles!",
                invalidSongSpotlightData: "¡Datos de Song Spotlight no válidos en el portapapeles!",
                oneOrMoreImported: "Una o más canciones importadas no eran válidas.",
                importedSongsFromClipboard: "¡Canciones importadas del portapapeles!",
                successfullySavedSongs: "¡Canciones guardadas correctamente!",
                successfullySignedOut: "¡Sesión cerrada correctamente!",
                successfullyDeletedSongs: "¡Canciones eliminadas correctamente!",
                youDonTHave: "¡No tienes suficiente espacio!",
                uhOhThisSong: "¡Oh, no, esta canción no existe!",
                youAlreadyHaveThis: "¡Ya has añadido esta canción!",
                youDonTHave2: "¿No... tienes esta canción añadida?",
                fetchError: "Error de Song Spotlight al obtener {{path}}"
            },
            option: {
                collapseSongList: {
                    description: "Contrae la lista de canciones de los perfiles en un botón que abre un menú aparte",
                    label: "Contraer lista de canciones"
                },
                profileSongsLimit: {
                    description: "Cuántas canciones se muestran al hacer clic en un usuario",
                    label: "Límite de canciones del perfil"
                },
                previewVolume: {
                    description: "Volumen de las vistas previas de canciones",
                    label: "Volumen de vista previa"
                }
            }
        },
        stopAutoUnread: {
            name: "StopAutoUnread",
            description: "Impide que Discord cambie automáticamente la configuración de notificaciones de un canal a \"Todos los mensajes\""
        },
        themeLibrary: {
            text: {
                enablePlugin: "Activar plugin",
                cancel: "Cancelar",
                holdOn: "¡Espera!",
                thisThemeRequiresThe: "Este tema requiere el",
                pluginToWorkProperly: "plugin para funcionar correctamente.",
                doYouWantTo: "¿Quieres activarlo?",
                themeInfo: "Información del tema",
                viewSource: "Ver código fuente",
                close: "Cerrar",
                download: "Descargar",
                overwrite: "Sobrescribir",
                keepMyFile: "Conservar mi archivo",
                copyToClipboard: "Copiar al portapapeles",
                conflict: "¡Conflicto!",
                themeSource: "Fuente del tema",
                aThemeWithThe: "Un tema con el mismo nombre",
                alreadyExists: "ya existe",
                inYourThemesDirectory: "en tu carpeta de temas. ¿Quieres sobrescribirlo?",
                version: "Versión",
                likes: "Me gusta",
                donate: "Donar",
                supportServer: "Servidor de soporte",
                source: "Fuente",
                tags: "Etiquetas",
                youCanSupportThe: "¡Puedes apoyar al autor donando abajo!",
                joinDiscordServer: "Unirse al servidor de Discord",
                viewThemeSource: "Ver la fuente del tema",
                showAll: "Mostrar todos",
                showThemes: "Mostrar temas",
                showSnippets: "Mostrar fragmentos",
                showMostLiked: "Mostrar los más gustados",
                showDark: "Mostrar oscuros",
                showLight: "Mostrar claros",
                showEnabled: "Mostrar activados",
                showDisabled: "Mostrar desactivados",
                searchForATheme: "Buscar un tema...",
                gettingTheLatestThemes: "Obteniendo los temas más recientes...",
                thisWonTTake: "¡No tardará mucho!",
                failedToFetchThemes: "No se pudieron obtener los temas",
                couldNotFetchThe: "No se pudo obtener la lista de temas. Inténtalo más tarde.",
                wantYourThemeRemoved: "¿Quieres que se retire tu tema?",
                hide: "Ocultar",
                noThemeFound: "No se encontró ningún tema.",
                tryNarrowingYourSearch: "Prueba a acotar tu búsqueda.",
                themeLibrary: "Biblioteca de temas",
                successfullyAuthorizedWithThemelibrary: "¡Autorizado correctamente con ThemeLibrary!",
                failedToAuthorizeCheck: "No se pudo autorizar; revisa la consola",
                successfullyDeauthorizedFromThemelibrary: "¡Autorización de ThemeLibrary revocada correctamente!",
                failedToDeauthorizeCheck: "No se pudo revocar la autorización; revisa la consola",
                themelibraryAuth: "Autorización de ThemeLibrary",
                themeRemoval: "Retirada de tema",
                allThemeAuthorsAre: "Todos los autores de temas aparecen acreditados en la información del tema y no se ha modificado ninguna fuente. Si aun así quieres que se retire tu tema, abre una incidencia haciendo clic abajo.",
                authorizeWithThemelibrary: "Autorizar con ThemeLibrary",
                copyThemelibraryToken: "Copiar token de ThemeLibrary",
                deauthorizeThemelibrary: "Revocar autorización de ThemeLibrary",
                themeDetails: "Detalles de {{name}}",
                mostLiked: "Más gustados",
                newestAdditions: "Novedades",
                removeTheme: "Quitar tema",
                addTheme: "Agregar tema",
                authors: "Autores",
                author: "Autor",
                nobodyLikedTheme: "A nadie le ha gustado este tema todavía.",
                nobodyLikedSnippet: "A nadie le ha gustado este fragmento todavía.",
                usersLikedTheme: "¡A {{likes}} usuarios les gusta este tema!",
                usersLikedSnippet: "¡A {{likes}} usuarios les gusta este fragmento!",
                openThemeLibrary: "Abrir biblioteca de temas",
                lastUpdated: "Este tema se actualizó por última vez el",
                removalInfo: "Si quieres que tus temas se eliminen permanentemente, abre un issue en",
                themes: "Temas",
                requestRemoval: "Solicitar eliminación del tema",
                pluginSuffix: "plugin."
            },
            toast: {
                downloadedName: "¡{{name}} descargado!",
                failedToDownloadName: "¡No se pudo descargar {{name}}! (revisa la consola)",
                invalidOrExpiredInvite: "¡Invitación no válida o caducada!",
                copiedToClipboard: "Copiado al portapapeles",
                noUniquetokenPresentTry: "No hay uniqueToken; ¡prueba a autorizar primero!",
                noTokenToCopy: "No hay token para copiar; ¡prueba a autorizar primero!",
                copiedToClipboard2: "¡Copiado al portapapeles!"
            },
            name: "ThemeLibrary",
            description: "Una biblioteca de temas para Plexcord.",
            option: {
                hideWarningCard: {
                    description: "Ocultar la tarjeta de advertencia en la parte superior de la pestaña de la biblioteca de temas",
                    label: "Ocultar tarjeta de advertencia"
                },
                buttons: {
                    description: "Botones de ThemeLibrary",
                    label: "Botones"
                }
            }
        },
        translatePlus: {
            name: "Translate+",
            description: "¡El plugin de traducción de Plexcord, pero compatible con idiomas artísticos!",
            text: {
                translate: "Traducir",
                dismiss: "Descartar",
                translationFailedDueTo: "La traducción falló debido a un error.",
                translatedFrom: "traducido del {{lang}}"
            },
            option: {
                target: {
                    description: "Idioma de destino",
                    label: "Destino"
                },
                toki: {
                    description: "Activar toki pona",
                    label: "Toki pona"
                },
                sitelen: {
                    description: "Activar sitelen pona",
                    label: "Sitelen pona"
                },
                shavian: {
                    description: "Activar alfabeto shaviano",
                    label: "Shaviano"
                }
            }
        },
        triviaAI: {
            name: "TriviaAI",
            description: "Un plugin que te ayuda a responder preguntas de trivia con IA.",
            text: {
                answerWithAi: "Responder con IA",
                enterApiKeyHere: "Introduce aquí la clave de API de tu endpoint de IA.",
                enterSystemPrompt: "Introduce el prompt del sistema.",
                enterYourOpenaiCompatible: "Introduce aquí tu endpoint de IA compatible con OpenAI.",
                status: "Estado {{status}}"
            },
            option: {
                apiKey: {
                    description: "Clave de API.",
                    label: "Clave de API"
                },
                model: {
                    description: "Modelo de IA que se usará.",
                    label: "Modelo",
                    placeholder: "p. ej., google/gemini-3-flash-preview, inception/mercury, openai/gpt-5.2-chat, etc."
                },
                systemPrompt: {
                    description: "Prompt del sistema para la IA. Marcadores: {current_user}, {current_time}",
                    label: "Prompt del sistema"
                },
                maxTokens: {
                    description: "Número máximo de tokens en la respuesta.",
                    label: "Tokens máximos"
                },
                endpoint: {
                    description: "Endpoint de IA compatible con OpenAI.",
                    label: "Endpoint"
                },
                context: {
                    description: "Número de mensajes anteriores que se incluyen como contexto.",
                    label: "Contexto"
                },
                passMessageAuthorName: {
                    description: "Anteponer el nombre del autor al contenido del mensaje al enviarlo a la IA. Puede ayudar a la IA a distinguir entre usuarios en una conversación.",
                    label: "Pasar el nombre del autor"
                },
                treatSelfAsAssistant: {
                    description: "Si se activa, tus propios mensajes se tratarán como mensajes del asistente en el contexto. Esto hace que algunos modelos empiecen a generar fanfics.",
                    label: "Tratarme como asistente"
                },
                mode: {
                    description: "¿Cómo deben gestionarse las respuestas?",
                    label: "Modo",
                    autoreply: "Respuesta automática",
                    chatbar: "Reemplazar el texto de la barra de chat",
                    bot: "Clyde"
                },
                supportImages: {
                    description: "Pasar imágenes a la IA como contexto (si hay). No todos los modelos lo admiten.",
                    label: "Admitir imágenes"
                },
                sendImagesAsBase64: {
                    description: "Enviar las imágenes a la IA en base64.",
                    label: "Enviar imágenes en base64"
                }
            },
            toast: {
                triviaaiApiSettingsAre: "TriviaAI: los ajustes de la API están incompletos.",
                errorGettingResponseFrom: "Error al obtener la respuesta del modelo de IA"
            }
        },
        unreadCountBadge: {
            option: {
                showOnMutedChannels: {
                    description: "Mostrar el número de no leídos en canales silenciados",
                    label: "Mostrar en canales silenciados"
                },
                notificationCountLimit: {
                    description: "Mostrar +99 en lugar de la cantidad real",
                    label: "Límite del contador de notificaciones"
                }
            },
            name: "UnreadCountBadge",
            description: "Muestra insignias con el número de mensajes no leídos en los canales de la lista"
        },
        userPFP: {
            toast: {
                gifsWebpMustBe: "Los GIF/WebP deben agregarse mediante URL. Los enlaces de Imgur, GitHub, Tenor, Giphy y Discord funcionan sin configuración adicional."
            },
            text: {
                save: "Guardar",
                delete: "Eliminar",
                customAvatar: "Avatar personalizado",
                original: "Original",
                local: "Local",
                enterPngGifUrl: "Introduce la URL del PNG/GIF",
                setAvatar: "Establecer avatar",
                usingTheSetAvatar: "La función de establecer avatar es solo local: solo tú verás el cambio.",
                joinUserpfpServer: "Unirse al servidor de UserPFP",
                dropHere: "¡Suelta aquí!",
                dragOrClick: "⬆ Arrastra una imagen o haz clic para subirla (para GIF o WebP usa una URL)",
                uploadedFile: "(archivo subido)",
                supportHere: "Apoya a UserPFP aquí"
            },
            option: {
                overrideServerAvatars: {
                    description: "Sustituir los avatares de servidor por avatares personalizados o por el avatar predeterminado si no hay uno personalizado.",
                    label: "Sustituir avatares de servidor"
                },
                preferNitro: {
                    description: "Qué avatar usar si existen tanto el avatar animado predeterminado (Nitro) como el de UserPFP",
                    label: "Preferir Nitro",
                    false: "UserPFP",
                    true: "Nitro"
                },
                databaseSource: {
                    description: "URL desde la que se carga la base de datos",
                    label: "Origen de la base de datos"
                }
            },
            name: "UserPFP",
            description: "Te permite establecer avatares locales estáticos o animados para ti y otros usuarios"
        },
        userpluginInstaller: {
            toast: {
                restartToApplyChanges: "¡Reinicia para aplicar los cambios!"
            },
            text: {
                installError: "Error de instalación",
                done: "¡Listo!",
                later: "Más tarde",
                updateError: "Error de actualización",
                checkingForUpdates: "Buscando actualizaciones...",
                loadingPlugins: "Cargando plugins...",
                pluginUpdatesAvailable: "Actualizaciones de plugins disponibles",
                theFollowingPluginsAre: "Los siguientes plugins están desactualizados:",
                youCanUpdatePlugins: "Puedes actualizar los plugins abajo.",
                installPlugin: "Instalar plugin",
                userplugininstallerNotFullyLoaded: "UserpluginInstaller no se ha cargado por completo",
                youNeedToRestart: "Tienes que reiniciar para que se cargue la parte nativa :)",
                restartNow: "Reiniciar ahora",
                someUserpluginsAreOut: "¡Algunos UserPlugins están desactualizados!",
                clickToOpenThe: "Haz clic para abrir el actualizador de UserPlugins",
                plexcordDoesNotModerate: "Plexcord no modera los userplugins y no se hace responsable de nada que pueda resultar de instalarlos.",
                onlyInstallUserpluginsFrom: "Instala solo userplugins de desarrolladores en los que confíes. Lo haces bajo tu propio riesgo.",
                setGitPath: "Establecer ruta de Git",
                installHint: "Puedes instalar un plugin desde GitHub, GitLab, Codeberg, git.nin0.dev o plugins.nin0.dev pegando aquí su URL de clonación.",
                enableAndRestart: "Activar y reiniciar",
                enableAndRefresh: "Activar y recargar",
                tabCounts: "({{total}}, {{enabled}} activados)",
                possiblyMore: "y posiblemente más, ya que la comprobación de actualizaciones no ha terminado. ",
                alreadyInstalled: "Plugin ya instalado, actualízalo abajo",
                invalidUrl: "URL no válida, lee el aviso de arriba",
                install: "Instalar",
                restart: "Reiniciar",
                refresh: "Actualizar",
                update: "Actualizar",
                source: "Código fuente",
                support: "Soporte",
                managePlugins: "Administrar plugins",
                uninstalledRestart: "{{name}} se desinstaló. Es necesario reiniciar para eliminar completamente el plugin.",
                uninstalledRefresh: "{{name}} se desinstaló. Es necesario actualizar para eliminar completamente el plugin.",
                updatedRestart: "{{name}} se actualizó. Es necesario reiniciar para aplicar la actualización.",
                updatedRefresh: "{{name}} se actualizó. Es necesario actualizar para aplicar la actualización.",
                installedBody: "{{name}} se instaló correctamente. ¿Y ahora qué?",
                installedNativeBody: "{{name}} se instaló correctamente. Sin embargo, como usa funciones nativas, es necesario reiniciar el cliente. ¿Y ahora qué?"
            },
            option: {
                allowlistedChannels: {
                    description: "Lista de canales separados por comas donde se mostrará el botón Instalar plugin. Siempre se muestra en los canales de userplugins de Plexcord",
                    label: "Canales permitidos"
                },
                notifyIfUpdate: {
                    description: "Mostrar una notificación de Plexcord si hay que actualizar UserPlugins",
                    label: "Notificar si hay actualización"
                },
                neverNotifyForPlugins: {
                    description: "No mostrar nunca notificaciones de actualización para estos plugins (aún puedes actualizarlos desde la pestaña UserPlugins)",
                    label: "No notificar nunca para plugins"
                }
            },
            name: "UserpluginInstaller",
            description: "Instala userplugins con un simple clic"
        },
        vCPanelSettings: {
            option: {
                title1: {
                    label: "Título 1"
                },
                uncollapseSettingsByDefault: {
                    description: "Desplegar automáticamente los ajustes de voz por defecto",
                    label: "Desplegar ajustes por defecto"
                },
                title2: {
                    label: "Título 2"
                },
                outputVolume: {
                    description: "Mostrar un control deslizante de volumen de salida",
                    label: "Volumen de salida"
                },
                inputVolume: {
                    description: "Mostrar un control deslizante de volumen de entrada",
                    label: "Volumen de entrada"
                },
                outputDevice: {
                    description: "Mostrar un selector de dispositivo de salida",
                    label: "Dispositivo de salida"
                },
                inputDevice: {
                    description: "Mostrar un selector de dispositivo de entrada",
                    label: "Dispositivo de entrada"
                },
                camera: {
                    description: "Mostrar un selector de cámara",
                    label: "Cámara"
                },
                title3: {
                    label: "Título 3"
                },
                showOutputVolumeHeader: {
                    description: "Mostrar un encabezado sobre el control de volumen de salida",
                    label: "Mostrar encabezado de volumen de salida"
                },
                showInputVolumeHeader: {
                    description: "Mostrar un encabezado sobre el control de volumen de entrada",
                    label: "Mostrar encabezado de volumen de entrada"
                },
                showOutputDeviceHeader: {
                    description: "Mostrar un encabezado sobre el selector de dispositivo de salida",
                    label: "Mostrar encabezado de dispositivo de salida"
                },
                showInputDeviceHeader: {
                    description: "Mostrar un encabezado sobre el selector de dispositivo de entrada",
                    label: "Mostrar encabezado de dispositivo de entrada"
                },
                showVideoDeviceHeader: {
                    description: "Mostrar un encabezado sobre el selector de cámara",
                    label: "Mostrar encabezado de dispositivo de vídeo"
                }
            },
            name: "VCPanelSettings",
            description: "Controla los ajustes de voz desde el panel de voz",
            text: {
                appearance: "Apariencia",
                settingsToShow: "Ajustes que se mostrarán",
                headersToShow: "Encabezados que se mostrarán",
                outputVolume: "Volumen de salida",
                inputVolume: "Volumen de entrada",
                outputDevice: "Dispositivo de salida",
                inputDevice: "Dispositivo de entrada",
                settings: "Configuración",
                hide: "Ocultar"
            }
        },
        voiceMessageTranscriber: {
            text: {
                autoDetect: "Detección automática",
                start: "Iniciar",
                transcriptionOptions: "Opciones de transcripción",
                audioLanguage: "Idioma del audio",
                retry: "Reintentar",
                transcriptionFailed: "Error en la transcripción",
                transcribeVoiceMessage: "Transcribir mensaje de voz",
                close: "Cerrar",
                baseRecommended: "Base (recomendado)",
                small: "Small",
                largeV3TurboBest: "Large v3 Turbo (mejor precisión, se recomienda GPU)",
                transcribe: "Transcribir",
                translateToEnglish: "Traducir al inglés",
                voiceMessageTranslation: "Traducción del mensaje de voz",
                voiceMessageTranscription: "Transcripción del mensaje de voz",
                hideTimestamps: "Ocultar marcas de tiempo",
                showTimestamps: "Mostrar marcas de tiempo",
                copied: "¡Copiado!",
                copyText: "Copiar texto",
                downloadingAudio: "Descargando audio...",
                processingAudio: "Procesando audio...",
                loadingModel: "Cargando modelo...",
                transcribing: "Transcribiendo...",
                transcription: "Transcripción",
                transcriptionError: "Error de transcripción",
                transcribingInProgress: "Transcripción en curso...",
                initializing: "Inicializando...",
                workerCrashed: "El proceso de transcripción falló",
                workerStopped: "El proceso de transcripción se detuvo",
                deleteCache: "Eliminar todos los archivos en caché ({{size}} MB)",
                action: "Acción"
            },
            name: "VoiceMessageTranscriber",
            description: "Transcripciones en el dispositivo de los mensajes de voz con Whisper",
            option: {
                embed: {
                    description: "Mostrar la transcripción directamente en el adjunto del mensaje de voz en lugar de en una ventana.",
                    label: "Incrustación"
                },
                maintainHorizontal: {
                    description: "Mantener el tamaño horizontal del cuadro de transcripción incrustado y expandir verticalmente.",
                    label: "Mantener horizontal"
                },
                selectedModel: {
                    description: "Tamaño del modelo.",
                    onnxcommunitywhispertiny: "Tiny (más rápido, menor precisión)"
                },
                useGpu: {
                    description: "Ejecutar el modelo en tu GPU (WebGPU) cuando sea compatible. Mucho más rápido y hace usables los modelos grandes. Recurre a la CPU si no está disponible.",
                    label: "Usar GPU"
                },
                quantized: {
                    description: "Usar modelos cuantizados al ejecutar en CPU (menor tamaño, ligera pérdida de calidad).",
                    label: "Cuantizado"
                },
                deleteModalFiles: {
                    description: "Eliminar los archivos en caché del almacenamiento.",
                    label: "Eliminar archivos del modelo"
                }
            }
        },
        voiceMessagesInBackground: {
            name: "VoiceMessagesInBackground",
            description: "Mantiene los mensajes de voz sonando entre chats con un minirreproductor sincronizado.",
            text: {
                voiceMessagesInBackground: "Reproductor de mensajes de voz en segundo plano",
                returnToChannelname: "Volver a {{channelName}}",
                voiceMessagePosition: "Posición del mensaje de voz",
                changePlaybackSpeed: "Cambiar velocidad de reproducción",
                playbackSpeedSpeedTimes: "Velocidad de reproducción {{speed}} veces",
                closeVoiceMessagePlayer: "Cerrar el reproductor de mensajes de voz",
                voiceMessage: "Mensaje de voz",
                directMessage: "Mensaje directo",
                resume: "Reanudar mensaje de voz",
                pause: "Pausar mensaje de voz"
            }
        },
        webPWA: {
            name: "WebPWA",
            description: "Hace que Discord se pueda instalar como aplicación (PWA). Activa las insignias de notificación, los atajos globales y la barra de título propia de Discord.",
            text: {
                activities: "Actividades",
                hopIn: "Únete",
                status: "Estado",
                emojis: "Emojis",
                rooms: "Salas",
                discord: "Discord",
                platforms: "Plataformas",
                keybindsInfoBefore: "Se admiten atajos globales personalizados de Presionar para X. Ve a",
                keybindsInfoAfter: "para cambiarlos. No se admiten los atajos de Mantener para X."
            }
        },
        "webRichPresence (arRPC)": {
            name: "WebRichPresence (arRPC)"
        },
        webScreenShare: {
            option: {
                resolution: {
                    description: "Resolución",
                    label: "Resolución"
                },
                frameRate: {
                    description: "Velocidad de fotogramas",
                    label: "Velocidad de fotogramas"
                },
                contentHint: {
                    description: "Sugerencia de contenido",
                    label: "Sugerencia de contenido"
                },
                systemAudio: {
                    description: "Silenciar audio del sistema",
                    label: "Audio del sistema"
                }
            },
            name: "WebScreenShare",
            description: "Añade un menú de opciones de pantalla compartida. Permite cambiar la resolución, los fps, las sugerencias de codificación y el audio del sistema.",
            text: {
                stream: "Transmisión",
                streamMuted: "Transmisión silenciada",
                streamMode: "Modo de transmisión",
                muteStreamAudio: "Silenciar audio de la transmisión",
                preventsSystemAudioFrom: "Impide que el audio del sistema se incluya en tu transmisión.",
                showStreamPreviews: "Mostrar vistas previas de la transmisión",
                allowsOthersToSee: "Permite que otros vean una vista previa de tu transmisión antes de unirse.",
                smootherVideo: "Video más fluido",
                cleanerText: "Texto más nítido",
                userPreset: "Preajuste del usuario",
                custom: "Personalizado",
                gaming: "Juegos",
                screenshare: "Compartir pantalla"
            }
        },
        whitelistedEmojis: {
            option: {
                defaultEmojis: {
                    description: "Ocultar los emojis Unicode predeterminados del autocompletado salvo que estén en la lista blanca.",
                    label: "Emojis predeterminados"
                },
                serverEmojis: {
                    description: "Ocultar los emojis personalizados del servidor del autocompletado salvo que estén en la lista blanca.",
                    label: "Emojis del servidor"
                },
                disableToasts: {
                    description: "No mostrar avisos al añadir o quitar emojis.",
                    label: "Desactivar avisos"
                },
                whiteListedEmojis: {
                    description: "Emojis en la lista blanca",
                    label: "Emojis en la lista blanca"
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
                    description: "Restablecer emojis",
                    label: "Restablecer emojis"
                }
            },
            name: "WhitelistedEmojis",
            description: "Permite desactivar todos los emojis de los mensajes salvo un conjunto en lista blanca.",
            toast: {
                addedLengthEmojisTo: "Se añadieron {{length}} emojis a la lista; {{length}} ya estaban en ella",
                removedLengthEmojisFrom: "Se quitaron {{length}} emojis de la lista",
                nameIsAlreadyIn: "\"{{name}}\" ya está en la lista",
                addedNameToThe: "Se añadió \"{{name}}\" a la lista",
                nameIsNotIn: "\"{{name}}\" no está en la lista",
                removedNameFromThe: "Se quitó \"{{name}}\" de la lista",
                successfullyExportedEmojis: "Emojis exportados correctamente",
                successfullyImportedEmojis: "Emojis importados correctamente",
                invalidJsonData: "Datos JSON no válidos",
                failedToImportEmojis: "No se pudieron importar los emojis: {{err}}",
                resetEmojis: "Emojis restablecidos"
            },
            text: {
                areYouSure: "¿Estás seguro?",
                thisWillOverwriteYour: "Esto sobrescribirá tu lista blanca actual.",
                import: "Importar",
                cancel: "Cancelar",
                thisWillRemoveAll: "Esto quitará todos los emojis de tu lista blanca.",
                reset: "Restablecer",
                addAllGuildEmojis: "Añadir todos los emojis del servidor",
                removeAllGuildEmojis: "Quitar todos los emojis del servidor",
                noEmojisInThe: "No hay emojis en la lista blanca.",
                removeAll: "Quitar todos",
                removeFromWhitelist: "Quitar de la lista blanca",
                addToWhitelist: "Agregar a la lista blanca",
                defaultEmojis: "Emojis predeterminados",
                guildEmojis: "Emojis de {{name}}",
                guildFallback: "Servidor {{id}}",
                whitelistedEmojis: "Emojis en la lista blanca",
                remove: "Quitar"
            }
        },
        wigglyText: {
            option: {
                intensity: {
                    description: "Intensidad de la animación en px",
                    label: "Intensidad"
                }
            },
            name: "WigglyText",
            description: "Añade un nuevo formato markdown que hace que el texto se tambalee.",
            text: {
                leftAndRight: "izquierda y derecha",
                byTyping: "escribiendo",
                upAndDown: "arriba y abajo",
                inACircle: "en círculo",
                youCanMakeTextWiggle: "Puedes hacer que el texto se mueva así:"
            }
        },
        fixDiscordCss: {
            description: "Corrige el retraso del CSS de Discord"
        },
        directFileDownload: {
            name: "DirectFileDownload",
            description: "Descarga archivos directamente desde Discord en lugar de abrirlos en el navegador"
        },
        githubRepos: {
            text: {
                failedToFetchRepositories: "No se pudieron obtener los repositorios",
                personal: "Personal",
                unknown: "Desconocido",
                sortedByCount: "Ordenado por número de repositorios. Haz clic para ordenar de la A a la Z",
                sortedAlphabetically: "Ordenado de la A a la Z. Haz clic para ordenar por número de repositorios",
                mostRepos: "Más repositorios"
            }
        }
    }
} as const;

export default translations;
