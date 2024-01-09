import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { removeProducts } from '../../state-management/action/productsAction';
import { BrowserRouter as  Link, NavLink,useHistory} from 'react-router-dom';
import ProgressBar from 'devextreme-react/progress-bar';
import FileUploader from 'devextreme-react/file-uploader';
import DataGrid, {
    Column,
    Editing,
    Paging,
    Selection,
    Lookup,
    Toolbar,
    Item,
  } from 'devextreme-react/data-grid';
  
  import { Button } from 'devextreme-react/button';
  
  import ArrayStore from 'devextreme/data/array_store';
  import DataSource from 'devextreme/data/data_source';
  
//   import { employees, states } from './data.js';
  


//   class ProductTable extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         selectedItemKeys: [],
//       };
//       this.selectionChanged = this.selectionChanged.bind(this);
//       this.deleteRecords = this.deleteRecords.bind(this);
//     }
  
//     render() {
//       return (
//         <div id="data-grid-demo">
//           <DataGrid id="gridContainer"
//             dataSource={dataSource}
//             showBorders={true}
//             selectedRowKeys={this.state.selectedItemKeys}
//             onSelectionChanged={this.selectionChanged}
//           >
//             <Selection mode="multiple" />
//             <Paging enabled={false} />
//             <Editing
//               mode="cell"
//               allowUpdating={true}
//               allowAdding={true}
//               allowDeleting={true} />
  
//             <Column dataField="Prefix" caption="Title" width={55} />
//             <Column dataField="FirstName" />
//             <Column dataField="LastName" />
//             <Column dataField="Position" width={170} />
//             <Column dataField="StateID" caption="State" width={125}>
//               <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
//             </Column>
//             <Column dataField="BirthDate" dataType="date" />
//             <Toolbar>
//               <Item name="addRowButton" showText="always" />
//               <Item location="after">
//                 <Button
//                   onClick={this.deleteRecords}
//                   icon="trash"
//                   disabled={!this.state.selectedItemKeys.length}
//                   text="Delete Selected Records" />
//               </Item>
//             </Toolbar>
//           </DataGrid>
//         </div>
//       );
//     }
  
//     deleteRecords() {
//       this.state.selectedItemKeys.forEach((key) => {
//         dataSource.store().remove(key);
//       });
//       this.setState({
//         selectedItemKeys: [],
//       });
//       dataSource.reload();
//     }
  
//     selectionChanged(data) {
//       this.setState({
//         selectedItemKeys: data.selectedRowKeys,
//       });
//     }
//   }
  
//   export default ProductTable;
  

  
const ProductTable = ({setadmin,setproductitem, setEditing, setAdding, setpaneladminshow, datas, setdata}) => {
    const [isDropZoneActive, setIsDropZoneActive] = useState(false); const [imageSource, setImageSource] = useState(''); const [textVisible, setTextVisible] = useState(true); const [progressVisible, setProgressVisible] = useState(false); const [progressValue, setProgressValue] = useState(0)

    const allowedFileExtensions = ['.jpg', '.jpeg', '.gif', '.png'];
    
    const onDropZoneEnter = (e) => { if (e.dropZoneElement.id === 'dropzone-external') { setIsDropZoneActive(true); } };
    
    const onDropZoneLeave = (e) => { if (e.dropZoneElement.id === 'dropzone-external') { setIsDropZoneActive(false); } };
    
    const onUploaded = (e) => { const { file } = e; const fileReader = new FileReader(); fileReader.onload = () => { setIsDropZoneActive(false); setImageSource(fileReader.result); }; fileReader.readAsDataURL(file); setTextVisible(false); setProgressVisible(false); setProgressValue(0); };
    
    const onProgress = (e) => { setProgressValue((e.bytesLoaded / e.bytesTotal) * 100); };
    
    const onUploadStarted = () => { setImageSource(''); setProgressVisible(true); };
    
    const Prouducts = useSelector(store => store.ProuductState);
    const dispatch = useDispatch();
    const history = useHistory()
    const dataSource = new DataSource({
        store: new ArrayStore({
          data: Prouducts,
          key: 'productId',
        }),
      });
      
    return (
        <>

    <div class="d-flex justify-content-center container-fluid pt-5">
        <div class="row">
            <div class="input-group-append" style={{float: "right"}}>
                <button class="btn btn-primary" onClick={t =>setadmin(localStorage.clear())}>
                    log out
                </button>
            </div>
            <div class=" table-responsive mb-5">

                <div id="data-grid-demo">
                    <DataGrid id="gridContainer"
                        dataSource={dataSource}
                        showBorders={true}
                        // selectedRowKeys={this.state.selectedItemKeys}
                        // onSelectionChanged={this.selectionChanged}
                    >
                        <Selection mode="multiple" />
                        <Paging enabled={false} />
                        <Editing
                        mode="cell"
                        allowUpdating={true}
                        allowAdding={true}
                        allowDeleting={true} />

<div className="widget-container flex-box">
    <span>Profile Picture</span>
    <div id="dropzone-external" className={`flex-box ${isDropZoneActive ? 'dx-theme-accent-as-border-color dropzone-active' : 'dx-theme-border-color'}`}>
      {imageSource && <img id="dropzone-image" src={imageSource} alt="" />}
      {textVisible
      && <div id="dropzone-text" className="flex-box">
        <span>Drag & Drop the desired file</span>
        <span>…or click to browse for a file instead.</span>
      </div>}
      <ProgressBar
        id="upload-progress"
        min={0}
        max={100}
        width="30%"
        showStatus={false}
        visible={progressVisible}
        value={progressValue}
      ></ProgressBar>
    </div>
    <FileUploader
      id="file-uploader"
      dialogTrigger="#dropzone-external"
      dropZone="#dropzone-external"
      multiple={false}
      allowedFileExtensions={allowedFileExtensions}
      uploadMode="instantly"
      uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
      visible={false}
      onDropZoneEnter={onDropZoneEnter}
      onDropZoneLeave={onDropZoneLeave}
      onUploaded={onUploaded}
      onProgress={onProgress}
      onUploadStarted={onUploadStarted}
    ></FileUploader>
  </div>
            
                        {/* <Column dataField="Picture"
                        width={100}
                        allowSorting={false}
                        // cellRender={cellRender}
                        /> */}
                             <Column dataField="file"  >
                             <input type="file"/>
                             </Column>

                        <Column dataField="productType"  />
                        <Column dataField="productName" />
                        <Column dataField="productPrice" />
                        <Column dataField="quantity" />
                        <Toolbar>
                        <Item name="addRowButton" showText="always" />
                        <Item location="after">
                            <Button
                            //   onClick={this.deleteRecords}
                            icon='trash'
                            //   disabled={!this.state.selectedItemKeys.length}
                            text="Delete Selected Records" />
                        </Item>
                        </Toolbar>
                    </DataGrid>
                    <button onClick={a=>console.log(Prouducts)}>log</button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}


export default ProductTable
