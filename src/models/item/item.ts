export class Item {
    constructor(){};

    public Checked: boolean;
    public Children: any;
    public Collapsed: boolean;
    public Content: string;
    public CreatedDate: Date;
    public DateString: any;
    public DateStringPriority: number
    public Deleted: boolean;
    public DueDate: Date;
    public DueDateTime: Date;
    public DueTimeSpecified: boolean;
    public Id: number;
    public InHistory: boolean;
    public ItemOrder: number;
    public ItemType: number;
    public LastCheckedDate: Date;
    public LastSyncedDateTime: Date;
    public LastUpdatedDate: Date;
    public Notes: string;
    public OwnerId: number;
    public ParentId: string;
    public Path: string;
    public Priority: number;
    public ProjectId: number;
    public Recurrence: any;
    public SyncClientCreationId: any;
}