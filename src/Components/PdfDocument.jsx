
import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';


Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
});


const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#333',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#008080', 
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#008080', 
    padding: 5,
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  tableCellHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  tableCell: {
    fontSize: 10,
    color: '#333',
  },
});


const PdfDocument = ({ todos }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.table}>
     
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>ID</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>User ID</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Title</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Completed</Text>
          </View>
        </View>
       
        {todos.length>0 && todos.map((todo) => (
          <View style={styles.tableRow} key={todo.id}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{todo.id}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{todo.userId}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{todo.title}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                {todo.completed ? 'Yes' : 'No'}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default PdfDocument;
