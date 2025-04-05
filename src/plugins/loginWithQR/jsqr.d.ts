/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

declare module "jsqr" {
    import jsQR, { QRCode } from "jsqr/dist";

    export default jsQR;
    export { QRCode };
}
