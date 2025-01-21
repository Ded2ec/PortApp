// ValueContext.jsx
import React, { createContext, useState, useContext,useEffect } from 'react';

// สร้าง Context
const ValueContext = createContext();

// สร้าง Provider สำหรับ Context
export const ValueProvider = ({ children }) => {
  const [value, setValue] = useState(0);  // ค่าเริ่มต้นเป็น 0



  // เพิ่ม console.log ที่นี่เพื่อตรวจสอบค่าของ value
  useEffect(() => {
    console.log("Current value:", value);  // แสดงค่า value ทุกครั้งที่มีการเปลี่ยนแปลง
  }, [value]);  // useEffect จะทำงานทุกครั้งที่ค่า value เปลี่ยนแปลง


  return (
    <ValueContext.Provider value={{ value, setValue }}>
      {children}
    </ValueContext.Provider>
  );
};

// Custom hook สำหรับการใช้ Context
export const useValue = () => useContext(ValueContext);