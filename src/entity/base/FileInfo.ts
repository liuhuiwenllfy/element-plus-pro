import {UploadUserFile} from "element-plus";

export interface FileInfo extends UploadUserFile{
    tempUrl?: string
}
