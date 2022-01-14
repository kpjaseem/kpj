export class pgAdminConstants {
    public static DRY_TABLE_COLUMNS = [
        { header: 'port', colSpan: 1, align: 'center' },
        { header: 'Main port', colSpan: 1, align: 'center' },
        { header: '20ST', colSpan: 1, align: 'center' },
        { header: '40ST', colSpan: 1, align: 'center' },
        { header: '40HC', colSpan: 1, align: 'center' },
        { header: '45HC', colSpan: 1, align: 'center' },
        { header: 'Valid from', colSpan: 1, align: 'center' },
        { header: 'Valid to (optional)', colSpan: 1, align: 'center' },
    ];
    public static REEFER_TABLE_COLUMNS = [
        { header: 'port', colSpan: 1, align: 'center' },
        { header: 'Main port', colSpan: 1, align: 'center' },
        { header: '20RF', colSpan: 2, align: 'center' },
        { header: '40RH', colSpan: 2, align: 'center' },
        { header: 'Valid from', colSpan: 1, align: 'center' },
        { header: 'Valid to (optional)', colSpan: 1, align: 'center' }
    ]
}