import { HelixNavigation } from '@helix/types';

export const navigation: HelixNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'dashboards',
                title    : 'Dashboards',
                translate: 'NAV.DASHBOARDS',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id   : 'analytics',
                        title: 'Analytics',
                        type : 'item',
                        url  : '/apps/dashboards/analytics',
                        badge    : {
                            title: '25',
                            bg   : '#FF6F00',
                            fg   : '#FFFFFF'
                        }
                    },
                    {
                        id   : 'project',
                        title: 'Project',
                        type : 'item',
                        url  : '/apps/dashboards/project',
                        badge    : {
                            title: '11',
                            bg   : '#09d261',
                            fg   : '#FFFFFF'
                        }
                    }
                ]
            },
            {
                id       : 'enroll',
                title    : 'New Enrollment',
                translate: 'NAV.ENROLL',
                type     : 'item',
                icon     : 'person',
                url      : '/apps/enroll'
            },
            {
                id       : 'file-manager',
                title    : 'File Manager',
                translate: 'NAV.FILE_MANAGER',
                type     : 'item',
                icon     : 'folder',
                url      : '/apps/file-manager',
                badge    : {
                    title    : '17',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    }
];
