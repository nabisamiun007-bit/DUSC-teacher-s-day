/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const BASE_APP_URL = 'https://dusc-teachersday.vercel.app';

export function getTeacherDirectUrl(slug: string): string {
  return `${BASE_APP_URL}/?teacher=${encodeURIComponent(slug)}`;
}
