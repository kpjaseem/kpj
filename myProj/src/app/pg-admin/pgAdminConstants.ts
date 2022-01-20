export class pgAdminConstants {
    public static DRY_TABLE_COLUMNS = [
        { header: 'port', field: 'port', colSpan: 1, align: 'center' },
        { header: 'Main port', field: 'mainPort', colSpan: 1, align: 'center' },
        { header: '20ST', field: 'twentyst', colSpan: 1, align: 'center' },
        { header: '40ST', field: 'fortyst', colSpan: 1, align: 'center' },
        { header: '40HC', field: 'fortyhc', colSpan: 1, align: 'center' },
        { header: '45HC', field: 'fortyfivehc', colSpan: 1, align: 'center' },
        { header: 'Valid from', field: 'validFrom', colSpan: 1, align: 'center' },
        { header: 'Valid to (optional)', field: 'validTo', colSpan: 1, align: 'center' },
    ];
    public static REEFER_TABLE_COLUMNS = [
        { header: 'port', field: 'port', colSpan: 1, align: 'center' },
        { header: 'Main port', field: 'mainPort', colSpan: 1, align: 'center' },
        { header: '20RF', field: 'twentyrf', colSpan: 1, align: 'center' },
        { header: '40RH', field: 'fortyrh', colSpan: 1, align: 'center' },
        { header: 'Valid from', field: 'validFrom', colSpan: 1, align: 'center' },
        { header: 'Valid to (optional)', field: 'validTo', colSpan: 1, align: 'center' }
    ];
    public static CREATE = 'CREATE';
    public static EDIT = 'EDIT';
    public static VIEW = 'VIEW';
}