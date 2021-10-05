import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChattItem, Header, InputChat} from '../../components/moleculs';
import {
  colors,
  fonts,
  getData,
  setDateChat,
  showErr,
  getChatTime,
} from '../../utils';
import {Firebase} from '../../config';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const chatID = `${user.uid}_${dataDoctor.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/`;

    Firebase.database()
      .ref(urlFirebase)
      .on('value', snapshot => {
        if (snapshot.val()) {
          const dataSnapShot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapShot).map(key => {
            const dataChat = dataSnapShot[key];
            const newData = [];

            Object.keys(dataChat).map(itemChat => {
              newData.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newData,
            });
          });
          console.log('all Data Chat : ', allDataChat);
          setChatData(allDataChat);
        }
      });
  }, [dataDoctor.data.uid, user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      console.log('Data : ', res);
      setUser(res);
    });
  };

  const chatSend = () => {
    const today = new Date();

    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };

    const chatID = `${user.uid}_${dataDoctor.data.uid}`;

    const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;
    const urlMassageUser = `messages/${user.uid}/${chatID}`;
    const urlMassagesDoctor = `messages/${dataDoctor.data.uid}/${chatID}`;
    const dataHistoryForUser = {
      lastChatContent: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataDoctor.data.uid,
    };
    const dataHistoryForDoctor = {
      lastChatContent: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };

    //Kirim Ke Firebase
    Firebase.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
        //Set History Chat Buat User
        Firebase.database().ref(urlMassageUser).set(dataHistoryForUser);

        //Set History Chat Buat Doctor
        Firebase.database().ref(urlMassagesDoctor).set(dataHistoryForDoctor);
      })
      .catch(err => {
        showErr(err.massage);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataDoctor.data.fullName}
        desc={dataDoctor.data.category}
        photo={{uri: dataDoctor.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chatData.map(chat => {
            return (
              <View key={chat.id}>
                <Text style={styles.Chatdate}>{chat.id}</Text>
                {chat.data.map(itemChat => {
                  const isMe = itemChat.data.sendBy === user.uid;
                  return (
                    <ChattItem
                      key={itemChat.id}
                      isMe={isMe}
                      text={itemChat.data.chatContent}
                      date={itemChat.data.chatTime}
                      photo={isMe ? null : {uri: dataDoctor.data.photo}}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onButtonPress={chatSend}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  Chatdate: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    marginVertical: 20,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  content: {flex: 1},
});
